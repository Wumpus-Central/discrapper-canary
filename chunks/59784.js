n.d(t, { A: () => A });
var i = n(448761),
    s = n(17928),
    l = n(228366),
    a = n(935208),
    r = n(751877),
    o = n(88001),
    c = n(652215);
let d = new Map(),
    u = !1,
    m = !1;
function x(e) {
    return null != e.removed_at ? o.xI.REMOVED : null != e.accepted_at ? o.xI.ACCEPTED : o.xI.PENDING;
}
function h(e) {
    let { messages: t } = e;
    return t.map((e) => g(e)).some(Boolean);
}
function g(e) {
    if (e.type !== i.l.PREMIUM_GROUP_INVITE) return !1;
    let t = e.content;
    if (null == t || "" === t || !a.default.isProbablyAValidSnowflake(t)) return !1;
    let n = d.get(t);
    return (
        (null == n || n.state === o.xI.UNKNOWN) &&
        (d.set(t, { state: o.xI.FETCHING, invite: null, errorStatus: null }),
        l.h.wait(() => (0, r.el)(t).catch(c.FXj)),
        !0)
    );
}
class _ extends s.Ay.Store {
    static displayName = "PremiumGroupInviteStore";
    getInvite(e) {
        return d.get(e) ?? null;
    }
    getInviteByUserId(e) {
        return Array.from(d.values()).find((t) => t.invite?.user_id === e) ?? null;
    }
    getInviteState(e) {
        return d.get(e)?.state ?? o.xI.UNKNOWN;
    }
    shouldFetch(e) {
        let t = d.get(e);
        return null == t || t.state === o.xI.UNKNOWN;
    }
    isFetching(e) {
        return d.get(e)?.state === o.xI.FETCHING;
    }
    hasFetchedAllInvites() {
        return u;
    }
    isFetchingAllInvites() {
        return m;
    }
}
let A = new _(l.h, {
    PREMIUM_GROUP_INVITES_FETCH_START: function () {
        m = !0;
    },
    PREMIUM_GROUP_INVITES_FETCH_SUCCESS: function (e) {
        let { invites: t } = e;
        for (let e of ((m = !1), (u = !0), t)) d.set(e.id, { state: x(e), invite: e, errorStatus: null });
    },
    PREMIUM_GROUP_INVITES_FETCH_FAIL: function () {
        m = !1;
    },
    PREMIUM_GROUP_INVITE_FETCH_START: function (e) {
        let { subscriptionGroupMemberId: t } = e;
        d.set(t, { state: o.xI.FETCHING, invite: null, errorStatus: null });
    },
    PREMIUM_GROUP_INVITE_FETCH_SUCCESS: function (e) {
        let { subscriptionGroupMemberId: t, invite: n } = e;
        d.set(t, { state: x(n), invite: n, errorStatus: null });
    },
    PREMIUM_GROUP_INVITE_FETCH_FAIL: function (e) {
        let { subscriptionGroupMemberId: t, status: n } = e,
            i = 404 === n ? o.xI.NOT_FOUND : o.xI.ERROR;
        d.set(t, { state: i, invite: null, errorStatus: n });
    },
    PREMIUM_GROUP_ACCEPT_INVITE_START: function (e) {
        let { subscriptionGroupMemberId: t } = e,
            n = d.get(t);
        if (n?.invite == null) return !1;
        let i = new Date().toISOString();
        d.set(t, { state: o.xI.ACCEPTED, invite: { ...n.invite, accepted_at: i }, errorStatus: null });
    },
    PREMIUM_GROUP_ACCEPT_INVITE_SUCCESS: function (e) {
        let { subscriptionGroupMemberId: t } = e,
            n = d.get(t);
        if (n?.invite == null) return !1;
        let i = n.invite.subscription,
            s = new Date().toISOString();
        for (let [e, n] of d)
            e !== t &&
                n.invite?.subscription === i &&
                d.set(e, { state: o.xI.REMOVED, invite: { ...n.invite, removed_at: s }, errorStatus: null });
    },
    PREMIUM_GROUP_ACCEPT_INVITE_FAIL: function (e) {
        let { subscriptionGroupMemberId: t } = e,
            n = d.get(t);
        if (n?.invite == null) return !1;
        d.set(t, { state: o.xI.PENDING, invite: { ...n.invite, accepted_at: null }, errorStatus: null });
    },
    PREMIUM_GROUP_REMOVE_INVITE_START: function (e) {
        let { subscriptionGroupMemberId: t } = e;
        if (null == t) return !1;
        let n = d.get(t);
        if (n?.invite == null) return !1;
        let i = new Date().toISOString();
        d.set(t, { state: o.xI.REMOVED, invite: { ...n.invite, removed_at: i }, errorStatus: null });
    },
    PREMIUM_GROUP_REMOVE_INVITE_SUCCESS: function (e) {
        let { subscriptionId: t } = e,
            n = new Date().toISOString();
        for (let [e, i] of d)
            i.invite?.subscription === t &&
                d.set(e, { state: o.xI.REMOVED, invite: { ...i.invite, removed_at: n }, errorStatus: null });
    },
    PREMIUM_GROUP_REMOVE_INVITE_FAILURE: function (e) {
        let { subscriptionGroupMemberId: t, errorCode: n } = e;
        if (null == t) return !1;
        let i = d.get(t);
        return (
            i?.invite != null &&
            (n === o.Hy.BILLING_SUBSCRIPTION_GROUP_INVITE_ALREADY_ACCEPTED
                ? (d.set(t, {
                      state: o.xI.ACCEPTED,
                      invite: { ...i.invite, accepted_at: new Date().toISOString() },
                      errorStatus: null,
                  }),
                  !0)
                : void d.set(t, { state: o.xI.PENDING, invite: { ...i.invite, removed_at: null }, errorStatus: null }))
        );
    },
    MESSAGE_CREATE: function (e) {
        let { message: t } = e;
        return g(t);
    },
    LOCAL_MESSAGES_LOADED: h,
    LOAD_MESSAGES_SUCCESS: h,
    LOAD_MESSAGES_AROUND_SUCCESS: h,
    LOGOUT: function () {
        (d = new Map()), (u = !1), (m = !1);
    },
});
