"use strict";
n.d(t, { A: () => T });
var i = n(448761),
    r = n(311907),
    l = n(73153),
    s = n(661191),
    a = n(677185),
    o = n(88001),
    c = n(652215);
let u = new Map(),
    d = !1,
    _ = !1;
function E(e) {
    return null != e.removed_at ? o.xI.REMOVED : null != e.accepted_at ? o.xI.ACCEPTED : o.xI.PENDING;
}
function A(e) {
    let { messages: t } = e;
    return t.map((e) => m(e)).some(Boolean);
}
function m(e) {
    if (e.type !== i.l.PREMIUM_GROUP_INVITE) return !1;
    let t = e.content;
    if (null == t || "" === t || !s.default.isProbablyAValidSnowflake(t)) return !1;
    let n = u.get(t);
    return (
        (null == n || n.state === o.xI.UNKNOWN) &&
        (u.set(t, { state: o.xI.FETCHING, invite: null, errorStatus: null }),
        l.h.wait(() => (0, a.el)(t).catch(c.FXj)),
        !0)
    );
}
class I extends r.Ay.Store {
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
        return _;
    }
}
let T = new I(l.h, {
    PREMIUM_GROUP_INVITES_FETCH_START: function () {
        _ = !0;
    },
    PREMIUM_GROUP_INVITES_FETCH_SUCCESS: function (e) {
        let { invites: t } = e;
        for (let e of ((_ = !1), (d = !0), t)) u.set(e.id, { state: E(e), invite: e, errorStatus: null });
    },
    PREMIUM_GROUP_INVITES_FETCH_FAIL: function () {
        _ = !1;
    },
    PREMIUM_GROUP_INVITE_FETCH_START: function (e) {
        let { subscriptionGroupMemberId: t } = e;
        u.set(t, { state: o.xI.FETCHING, invite: null, errorStatus: null });
    },
    PREMIUM_GROUP_INVITE_FETCH_SUCCESS: function (e) {
        let { subscriptionGroupMemberId: t, invite: n } = e;
        u.set(t, { state: E(n), invite: n, errorStatus: null });
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
            r = new Date().toISOString();
        for (let [e, n] of u)
            e !== t &&
                n.invite?.subscription === i &&
                u.set(e, { state: o.xI.REMOVED, invite: { ...n.invite, removed_at: r }, errorStatus: null });
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
        return m(t);
    },
    LOCAL_MESSAGES_LOADED: A,
    LOAD_MESSAGES_SUCCESS: A,
    LOAD_MESSAGES_AROUND_SUCCESS: A,
    LOGOUT: function () {
        (u = new Map()), (d = !1), (_ = !1);
    },
});
