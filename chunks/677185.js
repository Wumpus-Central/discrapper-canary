s.d(t, { EQ: () => u, JV: () => d, el: () => M, kE: () => R, mm: () => o, n2: () => E, oO: () => m, wc: () => h });
var a = s(284009),
    r = s.n(a),
    i = s(562465),
    n = s(73153),
    c = s(427157),
    l = s(825772),
    _ = s(652215);
async function d() {
    n.h.dispatch({ type: "PREMIUM_GROUP_MEMBERSHIP_FETCH_START" });
    try {
        let e = (await i.Bo.get({ url: _.Rsh.PREMIUM_GROUP_MEMBERSHIP, rejectWithError: !0 })).body;
        return (
            null != e
                ? n.h.dispatch({
                      type: "PREMIUM_GROUP_MEMBERSHIP_FETCH_SUCCESS",
                      membership: {
                          subscriptionId: e.subscription_id,
                          memberType: e.member_type,
                          subscriptionStatus: e.subscription_status,
                          currentPeriodEnd: new Date(e.current_period_end),
                      },
                  })
                : n.h.dispatch({ type: "PREMIUM_GROUP_MEMBERSHIP_NOT_FOUND" }),
            e
        );
    } catch (e) {
        return n.h.dispatch({ type: "PREMIUM_GROUP_MEMBERSHIP_FETCH_FAILURE" }), null;
    }
}
async function u(e, t, s, a) {
    let {
        users: r,
        next_index: n,
        ineligible_users: l,
    } = (
        await i.Bo.get({
            url: _.Rsh.BILLING_SUBSCRIPTION_ELIGIBLE_USERS(e),
            query: { index: t, limit: a ?? 10, search_query: s, include_ineligible: !0 },
            rejectWithError: !0,
        })
    ).body;
    return {
        users: [
            ...r.map((e) => Object.assign(new c.A(e), { eligible: !0 })),
            ...(l ?? []).map((e) => Object.assign(new c.A(e), { eligible: !1 })),
        ],
        nextIndex: n,
    };
}
async function E(e, t) {
    n.h.dispatch({ type: "PREMIUM_GROUP_INVITE_USERS_START" });
    try {
        let s = await i.Bo.post({
            url: _.Rsh.BILLING_SUBSCRIPTION_INVITES(e),
            body: { user_ids: t },
            rejectWithError: !0,
        });
        return (
            n.h.dispatch({ type: "PREMIUM_GROUP_INVITE_USERS_SUCCESS", subscriptionId: e }),
            { invitedUsers: s.body.invited_users, ineligibleUsers: s.body.ineligible_users }
        );
    } catch (e) {
        return n.h.dispatch({ type: "PREMIUM_GROUP_INVITE_USERS_FAILURE" }), null;
    }
}
async function m(e, t) {
    n.h.dispatch({ type: "PREMIUM_GROUP_REMOVE_MEMBER_START" });
    try {
        let s = await i.Bo.del({ url: _.Rsh.BILLING_SUBSCRIPTION_REMOVE_USER(e, t), rejectWithError: !0 });
        return n.h.dispatch({ type: "PREMIUM_GROUP_REMOVE_MEMBER_SUCCESS", subscriptionId: e }), s;
    } catch (e) {
        return n.h.dispatch({ type: "PREMIUM_GROUP_REMOVE_MEMBER_FAILURE" }), e;
    }
}
async function o(e) {
    n.h.dispatch({ type: "PREMIUM_GROUP_MEMBERS_FETCH_START" });
    try {
        let t = (await i.Bo.get({ url: _.Rsh.BILLING_SUBSCRIPTION_MEMBERS(e), rejectWithError: !0 })).body.map(
                l.A.createFromServer,
            ),
            s = t.find((e) => e.isPrimary());
        return (
            r()(null != s, "Primary member not found in premium group"),
            n.h.dispatch({
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
        return n.h.dispatch({ type: "PREMIUM_GROUP_MEMBERS_FETCH_FAILURE" }), [];
    }
}
async function h(e, t, s) {
    n.h.dispatch({ type: "PREMIUM_GROUP_ACCEPT_INVITE_START", subscriptionGroupMemberId: s });
    try {
        let a = await i.Bo.patch({ url: _.Rsh.BILLING_SUBSCRIPTION_INVITE(e, t), rejectWithError: !0 });
        return n.h.dispatch({ type: "PREMIUM_GROUP_ACCEPT_INVITE_SUCCESS", subscriptionGroupMemberId: s }), a;
    } catch (e) {
        return n.h.dispatch({ type: "PREMIUM_GROUP_ACCEPT_INVITE_FAIL", subscriptionGroupMemberId: s }), e;
    }
}
async function R(e, t, s) {
    n.h.dispatch({ type: "PREMIUM_GROUP_REMOVE_INVITE_START", subscriptionGroupMemberId: s });
    try {
        let a = await i.Bo.del({ url: _.Rsh.BILLING_SUBSCRIPTION_INVITE(e, t), rejectWithError: !0 });
        return (
            n.h.dispatch({
                type: "PREMIUM_GROUP_REMOVE_INVITE_SUCCESS",
                subscriptionId: e,
                subscriptionGroupMemberId: s,
            }),
            a
        );
    } catch (t) {
        return (
            n.h.dispatch({
                type: "PREMIUM_GROUP_REMOVE_INVITE_FAILURE",
                subscriptionGroupMemberId: s,
                errorCode: t.body?.code,
                subscriptionId: e,
            }),
            t
        );
    }
}
async function M(e) {
    n.h.dispatch({ type: "PREMIUM_GROUP_INVITE_FETCH_START", subscriptionGroupMemberId: e });
    try {
        let t = (await i.Bo.get({ url: _.Rsh.PREMIUM_GROUP_INVITE(e), rejectWithError: !0 })).body;
        n.h.dispatch({ type: "PREMIUM_GROUP_INVITE_FETCH_SUCCESS", subscriptionGroupMemberId: e, invite: t });
    } catch (t) {
        n.h.dispatch({ type: "PREMIUM_GROUP_INVITE_FETCH_FAIL", subscriptionGroupMemberId: e, status: t?.status ?? 0 });
    }
}
