n.d(t, { EQ: () => u, JV: () => c, el: () => A, kE: () => g, mm: () => h, n2: () => m, oO: () => _, wc: () => p });
var i = n(284009),
    l = n.n(i),
    a = n(562465),
    r = n(73153),
    s = n(427157),
    o = n(825772),
    d = n(652215);
async function c() {
    r.h.dispatch({ type: "PREMIUM_GROUP_MEMBERSHIP_FETCH_START" });
    try {
        let e = (await a.Bo.get({ url: d.Rsh.PREMIUM_GROUP_MEMBERSHIP, rejectWithError: !0 })).body;
        return (
            null != e
                ? r.h.dispatch({
                      type: "PREMIUM_GROUP_MEMBERSHIP_FETCH_SUCCESS",
                      membership: {
                          subscriptionId: e.subscription_id,
                          memberType: e.member_type,
                          subscriptionStatus: e.subscription_status,
                          currentPeriodEnd: new Date(e.current_period_end),
                      },
                  })
                : r.h.dispatch({ type: "PREMIUM_GROUP_MEMBERSHIP_NOT_FOUND" }),
            e
        );
    } catch (e) {
        return r.h.dispatch({ type: "PREMIUM_GROUP_MEMBERSHIP_FETCH_FAILURE" }), null;
    }
}
async function u(e, t, n, i) {
    let {
        users: l,
        next_index: r,
        ineligible_users: o,
    } = (
        await a.Bo.get({
            url: d.Rsh.BILLING_SUBSCRIPTION_ELIGIBLE_USERS(e),
            query: { index: t, limit: i ?? 10, search_query: n, include_ineligible: !0 },
            rejectWithError: !0,
        })
    ).body;
    return {
        users: [
            ...l.map((e) => Object.assign(new s.A(e), { eligible: !0 })),
            ...(o ?? []).map((e) => Object.assign(new s.A(e), { eligible: !1 })),
        ],
        nextIndex: r,
    };
}
async function m(e, t) {
    r.h.dispatch({ type: "PREMIUM_GROUP_INVITE_USERS_START" });
    try {
        let n = await a.Bo.post({
            url: d.Rsh.BILLING_SUBSCRIPTION_INVITES(e),
            body: { user_ids: t },
            rejectWithError: !0,
        });
        return (
            r.h.dispatch({ type: "PREMIUM_GROUP_INVITE_USERS_SUCCESS", subscriptionId: e }),
            { invitedUsers: n.body.invited_users, ineligibleUsers: n.body.ineligible_users }
        );
    } catch (e) {
        return r.h.dispatch({ type: "PREMIUM_GROUP_INVITE_USERS_FAILURE" }), null;
    }
}
async function _(e, t) {
    r.h.dispatch({ type: "PREMIUM_GROUP_REMOVE_MEMBER_START" });
    try {
        let n = await a.Bo.del({ url: d.Rsh.BILLING_SUBSCRIPTION_REMOVE_USER(e, t), rejectWithError: !0 });
        return r.h.dispatch({ type: "PREMIUM_GROUP_REMOVE_MEMBER_SUCCESS", subscriptionId: e }), n;
    } catch (e) {
        return r.h.dispatch({ type: "PREMIUM_GROUP_REMOVE_MEMBER_FAILURE" }), e;
    }
}
async function h(e) {
    r.h.dispatch({ type: "PREMIUM_GROUP_MEMBERS_FETCH_START" });
    try {
        let t = (await a.Bo.get({ url: d.Rsh.BILLING_SUBSCRIPTION_MEMBERS(e), rejectWithError: !0 })).body.map(
                o.A.createFromServer,
            ),
            n = t.find((e) => e.isPrimary());
        return (
            l()(null != n, "Primary member not found in premium group"),
            r.h.dispatch({
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
        return r.h.dispatch({ type: "PREMIUM_GROUP_MEMBERS_FETCH_FAILURE" }), [];
    }
}
async function p(e, t, n) {
    r.h.dispatch({ type: "PREMIUM_GROUP_ACCEPT_INVITE_START", subscriptionGroupMemberId: n });
    try {
        let i = await a.Bo.patch({ url: d.Rsh.BILLING_SUBSCRIPTION_INVITE(e, t), rejectWithError: !0 });
        return r.h.dispatch({ type: "PREMIUM_GROUP_ACCEPT_INVITE_SUCCESS", subscriptionGroupMemberId: n }), i;
    } catch (e) {
        return r.h.dispatch({ type: "PREMIUM_GROUP_ACCEPT_INVITE_FAIL", subscriptionGroupMemberId: n }), e;
    }
}
async function g(e, t, n) {
    r.h.dispatch({ type: "PREMIUM_GROUP_REMOVE_INVITE_START", subscriptionGroupMemberId: n });
    try {
        let i = await a.Bo.del({ url: d.Rsh.BILLING_SUBSCRIPTION_INVITE(e, t), rejectWithError: !0 });
        return (
            r.h.dispatch({
                type: "PREMIUM_GROUP_REMOVE_INVITE_SUCCESS",
                subscriptionId: e,
                subscriptionGroupMemberId: n,
            }),
            i
        );
    } catch (t) {
        return (
            r.h.dispatch({
                type: "PREMIUM_GROUP_REMOVE_INVITE_FAILURE",
                subscriptionGroupMemberId: n,
                errorCode: t.body?.code,
                subscriptionId: e,
            }),
            t
        );
    }
}
async function A(e) {
    r.h.dispatch({ type: "PREMIUM_GROUP_INVITE_FETCH_START", subscriptionGroupMemberId: e });
    try {
        let t = (await a.Bo.get({ url: d.Rsh.PREMIUM_GROUP_INVITE(e), rejectWithError: !0 })).body;
        r.h.dispatch({ type: "PREMIUM_GROUP_INVITE_FETCH_SUCCESS", subscriptionGroupMemberId: e, invite: t });
    } catch (t) {
        r.h.dispatch({ type: "PREMIUM_GROUP_INVITE_FETCH_FAIL", subscriptionGroupMemberId: e, status: t?.status ?? 0 });
    }
}
