n.d(t, { A: () => x });
var i = n(448761),
    l = n(17928),
    s = n(228366),
    a = n(935208),
    r = n(751877),
    o = n(88001),
    d = n(652215);
let c = new Map(),
    u = !1,
    m = !1;
function h(e) {
    return null != e.removed_at ? o.xI.REMOVED : null != e.accepted_at ? o.xI.ACCEPTED : o.xI.PENDING;
}
function g(e) {
    let { messages: t } = e;
    return t.map((e) => p(e)).some(Boolean);
}
function p(e) {
    if (e.type !== i.l.PREMIUM_GROUP_INVITE) return !1;
    let t = e.content;
    if (null == t || "" === t || !a.default.isProbablyAValidSnowflake(t)) return !1;
    let n = c.get(t);
    return (
        (null == n || n.state === o.xI.UNKNOWN) &&
        (c.set(t, { state: o.xI.FETCHING, invite: null, errorStatus: null }),
        s.h.wait(() => (0, r.el)(t).catch(d.FXj)),
        !0)
    );
}
class A extends l.Ay.Store {
    static displayName = "PremiumGroupInviteStore";
    getInvite(e) {
        return c.get(e) ?? null;
    }
    getInviteByUserId(e) {
        return Array.from(c.values()).find((t) => t.invite?.user_id === e) ?? null;
    }
    getInviteState(e) {
        return c.get(e)?.state ?? o.xI.UNKNOWN;
    }
    shouldFetch(e) {
        let t = c.get(e);
        return null == t || t.state === o.xI.UNKNOWN;
    }
    isFetching(e) {
        return c.get(e)?.state === o.xI.FETCHING;
    }
    hasFetchedAllInvites() {
        return u;
    }
    isFetchingAllInvites() {
        return m;
    }
}
let x = new A(s.h, {
    PREMIUM_GROUP_INVITES_FETCH_START: function () {
        m = !0;
    },
    PREMIUM_GROUP_INVITES_FETCH_SUCCESS: function (e) {
        let { invites: t } = e;
        for (let e of ((m = !1), (u = !0), t)) c.set(e.id, { state: h(e), invite: e, errorStatus: null });
    },
    PREMIUM_GROUP_INVITES_FETCH_FAIL: function () {
        m = !1;
    },
    PREMIUM_GROUP_INVITE_FETCH_START: function (e) {
        let { subscriptionGroupMemberId: t } = e;
        c.set(t, { state: o.xI.FETCHING, invite: null, errorStatus: null });
    },
    PREMIUM_GROUP_INVITE_FETCH_SUCCESS: function (e) {
        let { subscriptionGroupMemberId: t, invite: n } = e;
        c.set(t, { state: h(n), invite: n, errorStatus: null });
    },
    PREMIUM_GROUP_INVITE_FETCH_FAIL: function (e) {
        let { subscriptionGroupMemberId: t, status: n } = e,
            i = 404 === n ? o.xI.NOT_FOUND : o.xI.ERROR;
        c.set(t, { state: i, invite: null, errorStatus: n });
    },
    PREMIUM_GROUP_ACCEPT_INVITE_START: function (e) {
        let { subscriptionGroupMemberId: t } = e,
            n = c.get(t);
        if (n?.invite == null) return !1;
        let i = new Date().toISOString();
        c.set(t, { state: o.xI.ACCEPTED, invite: { ...n.invite, accepted_at: i }, errorStatus: null });
    },
    PREMIUM_GROUP_ACCEPT_INVITE_SUCCESS: function (e) {
        let { subscriptionGroupMemberId: t } = e,
            n = c.get(t);
        if (n?.invite == null) return !1;
        let i = n.invite.subscription,
            l = new Date().toISOString();
        for (let [e, n] of c)
            e !== t &&
                n.invite?.subscription === i &&
                c.set(e, { state: o.xI.REMOVED, invite: { ...n.invite, removed_at: l }, errorStatus: null });
    },
    PREMIUM_GROUP_ACCEPT_INVITE_FAIL: function (e) {
        let { subscriptionGroupMemberId: t } = e,
            n = c.get(t);
        if (n?.invite == null) return !1;
        c.set(t, { state: o.xI.PENDING, invite: { ...n.invite, accepted_at: null }, errorStatus: null });
    },
    PREMIUM_GROUP_REMOVE_INVITE_START: function (e) {
        let { subscriptionGroupMemberId: t } = e;
        if (null == t) return !1;
        let n = c.get(t);
        if (n?.invite == null) return !1;
        let i = new Date().toISOString();
        c.set(t, { state: o.xI.REMOVED, invite: { ...n.invite, removed_at: i }, errorStatus: null });
    },
    PREMIUM_GROUP_REMOVE_INVITE_SUCCESS: function (e) {
        let { subscriptionId: t } = e,
            n = new Date().toISOString();
        for (let [e, i] of c)
            i.invite?.subscription === t &&
                c.set(e, { state: o.xI.REMOVED, invite: { ...i.invite, removed_at: n }, errorStatus: null });
    },
    PREMIUM_GROUP_REMOVE_INVITE_FAILURE: function (e) {
        let { subscriptionGroupMemberId: t, errorCode: n } = e;
        if (null == t) return !1;
        let i = c.get(t);
        return (
            i?.invite != null &&
            (n === o.Hy.BILLING_SUBSCRIPTION_GROUP_INVITE_ALREADY_ACCEPTED
                ? (c.set(t, {
                      state: o.xI.ACCEPTED,
                      invite: { ...i.invite, accepted_at: new Date().toISOString() },
                      errorStatus: null,
                  }),
                  !0)
                : void c.set(t, { state: o.xI.PENDING, invite: { ...i.invite, removed_at: null }, errorStatus: null }))
        );
    },
    MESSAGE_CREATE: function (e) {
        let { message: t } = e;
        return p(t);
    },
    LOCAL_MESSAGES_LOADED: g,
    LOAD_MESSAGES_SUCCESS: g,
    LOAD_MESSAGES_AROUND_SUCCESS: g,
    LOGOUT: function () {
        ((c = new Map()), (u = !1), (m = !1));
    },
});
