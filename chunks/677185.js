"use strict";
s.d(t, { EQ: () => d, JV: () => o, el: () => S, kE: () => I, mm: () => R, n2: () => E, oO: () => _, wc: () => p });
var r = s(284009),
    i = s.n(r),
    n = s(562465),
    a = s(73153),
    l = s(427157),
    u = s(825772),
    c = s(652215);
async function o() {
    a.h.dispatch({ type: "PREMIUM_GROUP_MEMBERSHIP_FETCH_START" });
    try {
        let e = (await n.Bo.get({ url: c.Rsh.PREMIUM_GROUP_MEMBERSHIP, rejectWithError: !0 })).body;
        return (
            null != e
                ? a.h.dispatch({
                      type: "PREMIUM_GROUP_MEMBERSHIP_FETCH_SUCCESS",
                      membership: {
                          subscriptionId: e.subscription_id,
                          memberType: e.member_type,
                          subscriptionStatus: e.subscription_status,
                          currentPeriodEnd: new Date(e.current_period_end),
                      },
                  })
                : a.h.dispatch({ type: "PREMIUM_GROUP_MEMBERSHIP_NOT_FOUND" }),
            e
        );
    } catch (e) {
        return a.h.dispatch({ type: "PREMIUM_GROUP_MEMBERSHIP_FETCH_FAILURE" }), null;
    }
}
async function d(e, t, s, r) {
    let {
        users: i,
        next_index: a,
        ineligible_users: u,
    } = (
        await n.Bo.get({
            url: c.Rsh.BILLING_SUBSCRIPTION_ELIGIBLE_USERS(e),
            query: { index: t, limit: r ?? 10, search_query: s, include_ineligible: !0 },
            rejectWithError: !0,
        })
    ).body;
    return {
        users: [
            ...i.map((e) => Object.assign(new l.A(e), { eligible: !0 })),
            ...(u ?? []).map((e) => Object.assign(new l.A(e), { eligible: !1 })),
        ],
        nextIndex: a,
    };
}
async function E(e, t) {
    a.h.dispatch({ type: "PREMIUM_GROUP_INVITE_USERS_START" });
    try {
        let s = await n.Bo.post({
            url: c.Rsh.BILLING_SUBSCRIPTION_INVITES(e),
            body: { user_ids: t },
            rejectWithError: !0,
        });
        return (
            a.h.dispatch({ type: "PREMIUM_GROUP_INVITE_USERS_SUCCESS", subscriptionId: e }),
            { invitedUsers: s.body.invited_users, ineligibleUsers: s.body.ineligible_users }
        );
    } catch (e) {
        return a.h.dispatch({ type: "PREMIUM_GROUP_INVITE_USERS_FAILURE" }), null;
    }
}
async function _(e, t) {
    a.h.dispatch({ type: "PREMIUM_GROUP_REMOVE_MEMBER_START" });
    try {
        let s = await n.Bo.del({ url: c.Rsh.BILLING_SUBSCRIPTION_REMOVE_USER(e, t), rejectWithError: !0 });
        return a.h.dispatch({ type: "PREMIUM_GROUP_REMOVE_MEMBER_SUCCESS", subscriptionId: e }), s;
    } catch (e) {
        return a.h.dispatch({ type: "PREMIUM_GROUP_REMOVE_MEMBER_FAILURE" }), e;
    }
}
async function R(e) {
    a.h.dispatch({ type: "PREMIUM_GROUP_MEMBERS_FETCH_START" });
    try {
        let t = (await n.Bo.get({ url: c.Rsh.BILLING_SUBSCRIPTION_MEMBERS(e), rejectWithError: !0 })).body.map(
                u.A.createFromServer,
            ),
            s = t.find((e) => e.isPrimary());
        return (
            i()(null != s, "Primary member not found in premium group"),
            a.h.dispatch({
                type: "PREMIUM_GROUP_MEMBERS_FETCH_SUCCESS",
                members: {
                    primary: s.user,
                    members: t.filter((e) => e.isMember()).map((e) => e.user),
                    invitedUsers: t.filter((e) => e.isInvited()).map((e) => e.user),
                },
            }),
            t
        );
    } catch (e) {
        return a.h.dispatch({ type: "PREMIUM_GROUP_MEMBERS_FETCH_FAILURE" }), [];
    }
}
async function p(e, t, s) {
    a.h.dispatch({ type: "PREMIUM_GROUP_ACCEPT_INVITE_START", subscriptionGroupMemberId: s });
    try {
        let r = await n.Bo.patch({ url: c.Rsh.BILLING_SUBSCRIPTION_INVITE(e, t), rejectWithError: !0 });
        return a.h.dispatch({ type: "PREMIUM_GROUP_ACCEPT_INVITE_SUCCESS", subscriptionGroupMemberId: s }), r;
    } catch (e) {
        return a.h.dispatch({ type: "PREMIUM_GROUP_ACCEPT_INVITE_FAIL", subscriptionGroupMemberId: s }), e;
    }
}
async function I(e, t, s) {
    a.h.dispatch({ type: "PREMIUM_GROUP_REMOVE_INVITE_START", subscriptionGroupMemberId: s });
    try {
        let r = await n.Bo.del({ url: c.Rsh.BILLING_SUBSCRIPTION_INVITE(e, t), rejectWithError: !0 });
        return (
            a.h.dispatch({
                type: "PREMIUM_GROUP_REMOVE_INVITE_SUCCESS",
                subscriptionId: e,
                subscriptionGroupMemberId: s,
            }),
            r
        );
    } catch (t) {
        return (
            a.h.dispatch({
                type: "PREMIUM_GROUP_REMOVE_INVITE_FAILURE",
                subscriptionGroupMemberId: s,
                errorCode: t.body?.code,
                subscriptionId: e,
            }),
            t
        );
    }
}
async function S(e) {
    a.h.dispatch({ type: "PREMIUM_GROUP_INVITE_FETCH_START", subscriptionGroupMemberId: e });
    try {
        let t = (await n.Bo.get({ url: c.Rsh.PREMIUM_GROUP_INVITE(e), rejectWithError: !0 })).body;
        a.h.dispatch({ type: "PREMIUM_GROUP_INVITE_FETCH_SUCCESS", subscriptionGroupMemberId: e, invite: t });
    } catch (t) {
        a.h.dispatch({ type: "PREMIUM_GROUP_INVITE_FETCH_FAIL", subscriptionGroupMemberId: e, status: t?.status ?? 0 });
    }
}
