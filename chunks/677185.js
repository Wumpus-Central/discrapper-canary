"use strict";
s.d(e, { EQ: () => p, JV: () => c, el: () => S, kE: () => M, mm: () => l, n2: () => I, oO: () => R, wc: () => o });
var r = s(284009),
    n = s.n(r),
    i = s(562465),
    a = s(73153),
    _ = s(427157),
    E = s(825772),
    u = s(652215);
async function c() {
    a.h.dispatch({ type: "PREMIUM_GROUP_MEMBERSHIP_FETCH_START" });
    try {
        let t = (await i.Bo.get({ url: u.Rsh.PREMIUM_GROUP_MEMBERSHIP, rejectWithError: !0 })).body;
        return (
            null != t
                ? a.h.dispatch({
                      type: "PREMIUM_GROUP_MEMBERSHIP_FETCH_SUCCESS",
                      membership: {
                          subscriptionId: t.subscription_id,
                          memberType: t.member_type,
                          subscriptionStatus: t.subscription_status,
                          currentPeriodEnd: new Date(t.current_period_end),
                      },
                  })
                : a.h.dispatch({ type: "PREMIUM_GROUP_MEMBERSHIP_NOT_FOUND" }),
            t
        );
    } catch (t) {
        return a.h.dispatch({ type: "PREMIUM_GROUP_MEMBERSHIP_FETCH_FAILURE" }), null;
    }
}
async function p(t, e, s, r) {
    let {
        users: n,
        next_index: a,
        ineligible_users: E,
    } = (
        await i.Bo.get({
            url: u.Rsh.BILLING_SUBSCRIPTION_ELIGIBLE_USERS(t),
            query: { index: e, limit: r ?? 10, search_query: s, include_ineligible: !0 },
            rejectWithError: !0,
        })
    ).body;
    return {
        users: [
            ...n.map((t) => Object.assign(new _.A(t), { eligible: !0 })),
            ...(E ?? []).map((t) => Object.assign(new _.A(t), { eligible: !1 })),
        ],
        nextIndex: a,
    };
}
async function I(t, e) {
    a.h.dispatch({ type: "PREMIUM_GROUP_INVITE_USERS_START" });
    try {
        let s = await i.Bo.post({
            url: u.Rsh.BILLING_SUBSCRIPTION_INVITES(t),
            body: { user_ids: e },
            rejectWithError: !0,
        });
        return (
            a.h.dispatch({ type: "PREMIUM_GROUP_INVITE_USERS_SUCCESS", subscriptionId: t }),
            { invitedUsers: s.body.invited_users, ineligibleUsers: s.body.ineligible_users }
        );
    } catch (t) {
        return a.h.dispatch({ type: "PREMIUM_GROUP_INVITE_USERS_FAILURE" }), null;
    }
}
async function R(t, e) {
    a.h.dispatch({ type: "PREMIUM_GROUP_REMOVE_MEMBER_START" });
    try {
        let s = await i.Bo.del({ url: u.Rsh.BILLING_SUBSCRIPTION_REMOVE_USER(t, e), rejectWithError: !0 });
        return a.h.dispatch({ type: "PREMIUM_GROUP_REMOVE_MEMBER_SUCCESS", subscriptionId: t }), s;
    } catch (t) {
        return a.h.dispatch({ type: "PREMIUM_GROUP_REMOVE_MEMBER_FAILURE" }), t;
    }
}
async function l(t) {
    a.h.dispatch({ type: "PREMIUM_GROUP_MEMBERS_FETCH_START" });
    try {
        let e = (await i.Bo.get({ url: u.Rsh.BILLING_SUBSCRIPTION_MEMBERS(t), rejectWithError: !0 })).body.map(
                E.A.createFromServer,
            ),
            s = e.find((t) => t.isPrimary());
        return (
            n()(null != s, "Primary member not found in premium group"),
            a.h.dispatch({
                type: "PREMIUM_GROUP_MEMBERS_FETCH_SUCCESS",
                members: {
                    primary: s.user,
                    members: e.filter((t) => t.isMember()).map((t) => t.user),
                    invitedUsers: e.filter((t) => t.isInvited()).map((t) => t.user),
                },
            }),
            e
        );
    } catch (t) {
        return a.h.dispatch({ type: "PREMIUM_GROUP_MEMBERS_FETCH_FAILURE" }), [];
    }
}
async function o(t, e, s) {
    a.h.dispatch({ type: "PREMIUM_GROUP_ACCEPT_INVITE_START", subscriptionGroupMemberId: s });
    try {
        let r = await i.Bo.patch({ url: u.Rsh.BILLING_SUBSCRIPTION_INVITE(t, e), rejectWithError: !0 });
        return a.h.dispatch({ type: "PREMIUM_GROUP_ACCEPT_INVITE_SUCCESS", subscriptionGroupMemberId: s }), r;
    } catch (t) {
        return a.h.dispatch({ type: "PREMIUM_GROUP_ACCEPT_INVITE_FAIL", subscriptionGroupMemberId: s }), t;
    }
}
async function M(t, e, s) {
    a.h.dispatch({ type: "PREMIUM_GROUP_REMOVE_INVITE_START", subscriptionGroupMemberId: s });
    try {
        let r = await i.Bo.del({ url: u.Rsh.BILLING_SUBSCRIPTION_INVITE(t, e), rejectWithError: !0 });
        return (
            a.h.dispatch({
                type: "PREMIUM_GROUP_REMOVE_INVITE_SUCCESS",
                subscriptionId: t,
                subscriptionGroupMemberId: s,
            }),
            r
        );
    } catch (e) {
        return (
            a.h.dispatch({
                type: "PREMIUM_GROUP_REMOVE_INVITE_FAILURE",
                subscriptionGroupMemberId: s,
                errorCode: e.body?.code,
                subscriptionId: t,
            }),
            e
        );
    }
}
async function S(t) {
    a.h.dispatch({ type: "PREMIUM_GROUP_INVITE_FETCH_START", subscriptionGroupMemberId: t });
    try {
        let e = (await i.Bo.get({ url: u.Rsh.PREMIUM_GROUP_INVITE(t), rejectWithError: !0 })).body;
        a.h.dispatch({ type: "PREMIUM_GROUP_INVITE_FETCH_SUCCESS", subscriptionGroupMemberId: t, invite: e });
    } catch (e) {
        a.h.dispatch({ type: "PREMIUM_GROUP_INVITE_FETCH_FAIL", subscriptionGroupMemberId: t, status: e?.status ?? 0 });
    }
}
