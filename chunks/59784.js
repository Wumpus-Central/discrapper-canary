n.d(t, { A: () => A });
var i = n(448761),
    s = n(17928),
    l = n(73153),
    a = n(935208),
    r = n(751877),
    o = n(88001),
    c = n(652215);
let u = new Map(),
    d = !1,
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
    let n = u.get(t);
    return (
        (null == n || n.state === o.xI.UNKNOWN) &&
        (u.set(t, { state: o.xI.FETCHING, invite: null, errorStatus: null }), (0, r.el)(t).catch(c.FXj), !0)
    );
}
class f extends s.Ay.Store {
    static displayName = "PremiumGroupInviteStore";
    getInvite(e) {
        return u.get(e) ?? null;
    }
    getInviteByUserId(e) {
        return Array.from(u.values()).find((t) => t.invite?.user_id === e) ?? null;
    }
    getInviteState(e) {
        return u.get(e)?.state ?? o.xI.UNKNOWN;
    }
    shouldFetch(e) {
        let t = u.get(e);
        return null == t || t.state === o.xI.UNKNOWN;
    }
    isFetching(e) {
        return u.get(e)?.state === o.xI.FETCHING;
    }
    hasFetchedAllInvites() {
        return d;
    }
    isFetchingAllInvites() {
        return m;
    }
}
let A = new f(l.h, {
    PREMIUM_GROUP_INVITES_FETCH_START: function () {
        m = !0;
    },
    PREMIUM_GROUP_INVITES_FETCH_SUCCESS: function (e) {
        let { invites: t } = e;
        for (let e of ((m = !1), (d = !0), t)) u.set(e.id, { state: x(e), invite: e, errorStatus: null });
    },
    PREMIUM_GROUP_INVITES_FETCH_FAIL: function () {
        m = !1;
    },
    PREMIUM_GROUP_INVITE_FETCH_START: function (e) {
        let { subscriptionGroupMemberId: t } = e;
        u.set(t, { state: o.xI.FETCHING, invite: null, errorStatus: null });
    },
    PREMIUM_GROUP_INVITE_FETCH_SUCCESS: function (e) {
        let { subscriptionGroupMemberId: t, invite: n } = e;
        u.set(t, { state: x(n), invite: n, errorStatus: null });
    },
    PREMIUM_GROUP_INVITE_FETCH_FAIL: function (e) {
        let { subscriptionGroupMemberId: t, status: n } = e,
            i = 404 === n ? o.xI.NOT_FOUND : o.xI.ERROR;
        u.set(t, { state: i, invite: null, errorStatus: n });
    },
    PREMIUM_GROUP_ACCEPT_INVITE_START: function (e) {
        let { subscriptionGroupMemberId: t } = e,
            n = u.get(t);
        if (n?.invite == null) return !1;
        let i = new Date().toISOString();
        u.set(t, { state: o.xI.ACCEPTED, invite: { ...n.invite, accepted_at: i }, errorStatus: null });
    },
    PREMIUM_GROUP_ACCEPT_INVITE_SUCCESS: function (e) {
        let { subscriptionGroupMemberId: t } = e,
            n = u.get(t);
        if (n?.invite == null) return !1;
        let i = n.invite.subscription,
            s = new Date().toISOString();
        for (let [e, n] of u)
            e !== t &&
                n.invite?.subscription === i &&
                u.set(e, { state: o.xI.REMOVED, invite: { ...n.invite, removed_at: s }, errorStatus: null });
    },
    PREMIUM_GROUP_ACCEPT_INVITE_FAIL: function (e) {
        let { subscriptionGroupMemberId: t } = e,
            n = u.get(t);
        if (n?.invite == null) return !1;
        u.set(t, { state: o.xI.PENDING, invite: { ...n.invite, accepted_at: null }, errorStatus: null });
    },
    PREMIUM_GROUP_REMOVE_INVITE_START: function (e) {
        let { subscriptionGroupMemberId: t } = e;
        if (null == t) return !1;
        let n = u.get(t);
        if (n?.invite == null) return !1;
        let i = new Date().toISOString();
        u.set(t, { state: o.xI.REMOVED, invite: { ...n.invite, removed_at: i }, errorStatus: null });
    },
    PREMIUM_GROUP_REMOVE_INVITE_SUCCESS: function (e) {
        let { subscriptionId: t } = e,
            n = new Date().toISOString();
        for (let [e, i] of u)
            i.invite?.subscription === t &&
                u.set(e, { state: o.xI.REMOVED, invite: { ...i.invite, removed_at: n }, errorStatus: null });
    },
    PREMIUM_GROUP_REMOVE_INVITE_FAILURE: function (e) {
        let { subscriptionGroupMemberId: t, errorCode: n } = e;
        if (null == t) return !1;
        let i = u.get(t);
        return (
            i?.invite != null &&
            (n === o.Hy.BILLING_SUBSCRIPTION_GROUP_INVITE_ALREADY_ACCEPTED
                ? (u.set(t, {
                      state: o.xI.ACCEPTED,
                      invite: { ...i.invite, accepted_at: new Date().toISOString() },
                      errorStatus: null,
                  }),
                  !0)
                : void u.set(t, { state: o.xI.PENDING, invite: { ...i.invite, removed_at: null }, errorStatus: null }))
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
        ((u = new Map()), (d = !1), (m = !1));
    },
});
