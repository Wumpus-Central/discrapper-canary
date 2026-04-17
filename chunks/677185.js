"use strict";
n.d(t, { EQ: () => d, JV: () => u, el: () => T, kE: () => I, mm: () => A, n2: () => _, oO: () => E, wc: () => m });
var i = n(284009),
    r = n.n(i),
    s = n(562465),
    l = n(73153),
    a = n(427157),
    o = n(825772),
    c = n(652215);
async function u() {
    l.h.dispatch({ type: "PREMIUM_GROUP_MEMBERSHIP_FETCH_START" });
    try {
        let e = (await s.Bo.get({ url: c.Rsh.PREMIUM_GROUP_MEMBERSHIP, rejectWithError: !0 })).body;
        return (
            null != e
                ? l.h.dispatch({
                      type: "PREMIUM_GROUP_MEMBERSHIP_FETCH_SUCCESS",
                      membership: {
                          subscriptionId: e.subscription_id,
                          memberType: e.member_type,
                          subscriptionStatus: e.subscription_status,
                          currentPeriodEnd: new Date(e.current_period_end),
                      },
                  })
                : l.h.dispatch({ type: "PREMIUM_GROUP_MEMBERSHIP_NOT_FOUND" }),
            e
        );
    } catch (e) {
        return l.h.dispatch({ type: "PREMIUM_GROUP_MEMBERSHIP_FETCH_FAILURE" }), null;
    }
}
async function d(e, t, n, i) {
    let {
        users: r,
        next_index: l,
        ineligible_users: o,
    } = (
        await s.Bo.get({
            url: c.Rsh.BILLING_SUBSCRIPTION_ELIGIBLE_USERS(e),
            query: { index: t, limit: i ?? 10, search_query: n, include_ineligible: !0 },
            rejectWithError: !0,
        })
    ).body;
    return {
        users: [
            ...r.map((e) => Object.assign(new a.A(e), { eligible: !0 })),
            ...(o ?? []).map((e) => Object.assign(new a.A(e), { eligible: !1 })),
        ],
        nextIndex: l,
    };
}
async function _(e, t) {
    l.h.dispatch({ type: "PREMIUM_GROUP_INVITE_USERS_START" });
    try {
        let n = await s.Bo.post({
            url: c.Rsh.BILLING_SUBSCRIPTION_INVITES(e),
            body: { user_ids: t },
            rejectWithError: !0,
        });
        return (
            l.h.dispatch({ type: "PREMIUM_GROUP_INVITE_USERS_SUCCESS", subscriptionId: e }),
            { invitedUsers: n.body.invited_users, ineligibleUsers: n.body.ineligible_users }
        );
    } catch (e) {
        return l.h.dispatch({ type: "PREMIUM_GROUP_INVITE_USERS_FAILURE" }), null;
    }
}
async function E(e, t) {
    l.h.dispatch({ type: "PREMIUM_GROUP_REMOVE_MEMBER_START" });
    try {
        let n = await s.Bo.del({ url: c.Rsh.BILLING_SUBSCRIPTION_REMOVE_USER(e, t), rejectWithError: !0 });
        return l.h.dispatch({ type: "PREMIUM_GROUP_REMOVE_MEMBER_SUCCESS", subscriptionId: e }), n;
    } catch (e) {
        return l.h.dispatch({ type: "PREMIUM_GROUP_REMOVE_MEMBER_FAILURE" }), e;
    }
}
async function A(e) {
    l.h.dispatch({ type: "PREMIUM_GROUP_MEMBERS_FETCH_START" });
    try {
        let t = (await s.Bo.get({ url: c.Rsh.BILLING_SUBSCRIPTION_MEMBERS(e), rejectWithError: !0 })).body.map(
                o.A.createFromServer,
            ),
            n = t.find((e) => e.isPrimary());
        return (
            r()(null != n, "Primary member not found in premium group"),
            l.h.dispatch({
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
        return l.h.dispatch({ type: "PREMIUM_GROUP_MEMBERS_FETCH_FAILURE" }), [];
    }
}
async function m(e, t, n) {
    l.h.dispatch({ type: "PREMIUM_GROUP_ACCEPT_INVITE_START", subscriptionGroupMemberId: n });
    try {
        let i = await s.Bo.patch({ url: c.Rsh.BILLING_SUBSCRIPTION_INVITE(e, t), rejectWithError: !0 });
        return l.h.dispatch({ type: "PREMIUM_GROUP_ACCEPT_INVITE_SUCCESS", subscriptionGroupMemberId: n }), i;
    } catch (e) {
        return l.h.dispatch({ type: "PREMIUM_GROUP_ACCEPT_INVITE_FAIL", subscriptionGroupMemberId: n }), e;
    }
}
async function I(e, t, n) {
    l.h.dispatch({ type: "PREMIUM_GROUP_REMOVE_INVITE_START", subscriptionGroupMemberId: n });
    try {
        let i = await s.Bo.del({ url: c.Rsh.BILLING_SUBSCRIPTION_INVITE(e, t), rejectWithError: !0 });
        return (
            l.h.dispatch({
                type: "PREMIUM_GROUP_REMOVE_INVITE_SUCCESS",
                subscriptionId: e,
                subscriptionGroupMemberId: n,
            }),
            i
        );
    } catch (t) {
        return (
            l.h.dispatch({
                type: "PREMIUM_GROUP_REMOVE_INVITE_FAILURE",
                subscriptionGroupMemberId: n,
                errorCode: t.body?.code,
                subscriptionId: e,
            }),
            t
        );
    }
}
async function T(e) {
    l.h.dispatch({ type: "PREMIUM_GROUP_INVITE_FETCH_START", subscriptionGroupMemberId: e });
    try {
        let t = (await s.Bo.get({ url: c.Rsh.PREMIUM_GROUP_INVITE(e), rejectWithError: !0 })).body;
        l.h.dispatch({ type: "PREMIUM_GROUP_INVITE_FETCH_SUCCESS", subscriptionGroupMemberId: e, invite: t });
    } catch (t) {
        l.h.dispatch({ type: "PREMIUM_GROUP_INVITE_FETCH_FAIL", subscriptionGroupMemberId: e, status: t?.status ?? 0 });
    }
}
