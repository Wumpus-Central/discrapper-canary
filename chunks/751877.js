"use strict";
n.d(t, { EQ: () => _, mm: () => h, el: () => p, kE: () => f, JV: () => u, oO: () => A, n2: () => E, wc: () => I });
var i = n(284009),
    r = n.n(i),
    a = n(636537),
    s = n(228366),
    l = n(889227),
    o = n(315069);
class d extends o.A {
    user;
    member_type;
    accepted_at;
    static createFromServer(e) {
        return new d(e);
    }
    constructor(e) {
        super(), (this.user = new l.A(e.user)), (this.member_type = e.member_type), (this.accepted_at = e.accepted_at);
    }
    isPrimary() {
        return 1 === this.member_type;
    }
    isMember() {
        return 2 === this.member_type && null != this.accepted_at;
    }
    isInvited() {
        return 2 === this.member_type && null == this.accepted_at;
    }
}
var c = n(652215);
async function u() {
    s.h.dispatch({ type: "PREMIUM_GROUP_MEMBERSHIP_FETCH_START" });
    try {
        let e = (await a.Bo.get({ url: c.Rsh.PREMIUM_GROUP_MEMBERSHIP, rejectWithError: !0 })).body;
        return (
            null != e
                ? s.h.dispatch({
                      type: "PREMIUM_GROUP_MEMBERSHIP_FETCH_SUCCESS",
                      membership: {
                          subscriptionId: e.subscription_id,
                          memberType: e.member_type,
                          subscriptionStatus: e.subscription_status,
                          currentPeriodEnd: new Date(e.current_period_end),
                      },
                  })
                : s.h.dispatch({ type: "PREMIUM_GROUP_MEMBERSHIP_NOT_FOUND" }),
            e
        );
    } catch (e) {
        return s.h.dispatch({ type: "PREMIUM_GROUP_MEMBERSHIP_FETCH_FAILURE" }), null;
    }
}
async function _(e, t, n, i) {
    let {
        users: r,
        next_index: s,
        ineligible_users: o,
    } = (
        await a.Bo.get({
            url: c.Rsh.BILLING_SUBSCRIPTION_ELIGIBLE_USERS(e),
            query: { index: t, limit: i ?? 10, search_query: n, include_ineligible: !0 },
            rejectWithError: !0,
        })
    ).body;
    return {
        users: [
            ...r.map((e) => Object.assign(new l.A(e), { eligible: !0 })),
            ...(o ?? []).map((e) => Object.assign(new l.A(e), { eligible: !1 })),
        ],
        nextIndex: s,
    };
}
async function E(e, t) {
    s.h.dispatch({ type: "PREMIUM_GROUP_INVITE_USERS_START" });
    try {
        let n = await a.Bo.post({
            url: c.Rsh.BILLING_SUBSCRIPTION_INVITES(e),
            body: { user_ids: t },
            rejectWithError: !0,
        });
        return (
            s.h.dispatch({ type: "PREMIUM_GROUP_INVITE_USERS_SUCCESS", subscriptionId: e }),
            { invitedUsers: n.body.invited_users, ineligibleUsers: n.body.ineligible_users }
        );
    } catch (e) {
        return s.h.dispatch({ type: "PREMIUM_GROUP_INVITE_USERS_FAILURE" }), null;
    }
}
async function A(e, t) {
    s.h.dispatch({ type: "PREMIUM_GROUP_REMOVE_MEMBER_START" });
    try {
        let n = await a.Bo.del({ url: c.Rsh.BILLING_SUBSCRIPTION_REMOVE_USER(e, t), rejectWithError: !0 });
        return s.h.dispatch({ type: "PREMIUM_GROUP_REMOVE_MEMBER_SUCCESS", subscriptionId: e }), n;
    } catch (e) {
        return s.h.dispatch({ type: "PREMIUM_GROUP_REMOVE_MEMBER_FAILURE" }), e;
    }
}
async function h(e) {
    s.h.dispatch({ type: "PREMIUM_GROUP_MEMBERS_FETCH_START" });
    try {
        let t = (await a.Bo.get({ url: c.Rsh.BILLING_SUBSCRIPTION_MEMBERS(e), rejectWithError: !0 })).body.map(
                d.createFromServer,
            ),
            n = t.find((e) => e.isPrimary());
        return (
            r()(null != n, "Primary member not found in premium group"),
            s.h.dispatch({
                type: "PREMIUM_GROUP_MEMBERS_FETCH_SUCCESS",
                members: {
                    primary: n.user,
                    members: t.filter((e) => e.isMember()).map((e) => e.user),
                    invitedUsers: t.filter((e) => e.isInvited()).map((e) => e.user),
                },
            }),
            t
        );
    } catch (e) {
        return s.h.dispatch({ type: "PREMIUM_GROUP_MEMBERS_FETCH_FAILURE" }), [];
    }
}
async function I(e, t, n) {
    s.h.dispatch({ type: "PREMIUM_GROUP_ACCEPT_INVITE_START", subscriptionGroupMemberId: n });
    try {
        let i = await a.Bo.patch({ url: c.Rsh.BILLING_SUBSCRIPTION_INVITE(e, t), rejectWithError: !0 });
        return s.h.dispatch({ type: "PREMIUM_GROUP_ACCEPT_INVITE_SUCCESS", subscriptionGroupMemberId: n }), i;
    } catch (e) {
        return s.h.dispatch({ type: "PREMIUM_GROUP_ACCEPT_INVITE_FAIL", subscriptionGroupMemberId: n }), e;
    }
}
async function f(e, t, n) {
    s.h.dispatch({ type: "PREMIUM_GROUP_REMOVE_INVITE_START", subscriptionGroupMemberId: n });
    try {
        let i = await a.Bo.del({ url: c.Rsh.BILLING_SUBSCRIPTION_INVITE(e, t), rejectWithError: !0 });
        return (
            s.h.dispatch({
                type: "PREMIUM_GROUP_REMOVE_INVITE_SUCCESS",
                subscriptionId: e,
                subscriptionGroupMemberId: n,
            }),
            i
        );
    } catch (t) {
        return (
            s.h.dispatch({
                type: "PREMIUM_GROUP_REMOVE_INVITE_FAILURE",
                subscriptionGroupMemberId: n,
                errorCode: t.body?.code,
                subscriptionId: e,
            }),
            t
        );
    }
}
async function p(e) {
    s.h.dispatch({ type: "PREMIUM_GROUP_INVITE_FETCH_START", subscriptionGroupMemberId: e });
    try {
        let t = (await a.Bo.get({ url: c.Rsh.PREMIUM_GROUP_INVITE(e), rejectWithError: !0 })).body;
        s.h.dispatch({ type: "PREMIUM_GROUP_INVITE_FETCH_SUCCESS", subscriptionGroupMemberId: e, invite: t });
    } catch (t) {
        s.h.dispatch({ type: "PREMIUM_GROUP_INVITE_FETCH_FAIL", subscriptionGroupMemberId: e, status: t?.status ?? 0 });
    }
}
