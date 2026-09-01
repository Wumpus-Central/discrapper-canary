r.d(t, { EQ: () => h, mm: () => U, el: () => S, kE: () => P, JV: () => n, oO: () => M, n2: () => p, wc: () => u });
var _ = r(284009),
    E = r.n(_),
    i = r(636537),
    s = r(228366),
    R = r(889227),
    I = r(315069);
class c extends I.A {
    user;
    member_type;
    accepted_at;
    static createFromServer(e) {
        return new c(e);
    }
    constructor(e) {
        super(), (this.user = new R.A(e.user)), (this.member_type = e.member_type), (this.accepted_at = e.accepted_at);
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
var a = r(652215);
async function n() {
    s.h.dispatch({ type: "PREMIUM_GROUP_MEMBERSHIP_FETCH_START" });
    try {
        let e = (await i.Bo.get({ url: a.Rsh.PREMIUM_GROUP_MEMBERSHIP, rejectWithError: !0 })).body;
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
async function h(e, t, r, _) {
    let {
        users: E,
        next_index: s,
        ineligible_users: I,
    } = (
        await i.Bo.get({
            url: a.Rsh.BILLING_SUBSCRIPTION_ELIGIBLE_USERS(e),
            query: { index: t, limit: _ ?? 10, search_query: r, include_ineligible: !0 },
            rejectWithError: !0,
        })
    ).body;
    return {
        users: [
            ...E.map((e) => Object.assign(new R.A(e), { eligible: !0 })),
            ...(I ?? []).map((e) => Object.assign(new R.A(e), { eligible: !1 })),
        ],
        nextIndex: s,
    };
}
async function p(e, t) {
    s.h.dispatch({ type: "PREMIUM_GROUP_INVITE_USERS_START" });
    try {
        let r = await i.Bo.post({
            url: a.Rsh.BILLING_SUBSCRIPTION_INVITES(e),
            body: { user_ids: t },
            rejectWithError: !0,
        });
        return (
            s.h.dispatch({ type: "PREMIUM_GROUP_INVITE_USERS_SUCCESS", subscriptionId: e }),
            { invitedUsers: r.body.invited_users, ineligibleUsers: r.body.ineligible_users }
        );
    } catch (e) {
        return s.h.dispatch({ type: "PREMIUM_GROUP_INVITE_USERS_FAILURE" }), null;
    }
}
async function M(e, t) {
    s.h.dispatch({ type: "PREMIUM_GROUP_REMOVE_MEMBER_START" });
    try {
        let r = await i.Bo.del({ url: a.Rsh.BILLING_SUBSCRIPTION_REMOVE_USER(e, t), rejectWithError: !0 });
        return s.h.dispatch({ type: "PREMIUM_GROUP_REMOVE_MEMBER_SUCCESS", subscriptionId: e }), r;
    } catch (e) {
        return s.h.dispatch({ type: "PREMIUM_GROUP_REMOVE_MEMBER_FAILURE" }), e;
    }
}
async function U(e) {
    s.h.dispatch({ type: "PREMIUM_GROUP_MEMBERS_FETCH_START" });
    try {
        let t = (await i.Bo.get({ url: a.Rsh.BILLING_SUBSCRIPTION_MEMBERS(e), rejectWithError: !0 })).body.map(
                c.createFromServer,
            ),
            r = t.find((e) => e.isPrimary());
        return (
            E()(null != r, "Primary member not found in premium group"),
            s.h.dispatch({
                type: "PREMIUM_GROUP_MEMBERS_FETCH_SUCCESS",
                members: {
                    primary: r.user,
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
async function u(e, t, r) {
    s.h.dispatch({ type: "PREMIUM_GROUP_ACCEPT_INVITE_START", subscriptionGroupMemberId: r });
    try {
        let _ = await i.Bo.patch({ url: a.Rsh.BILLING_SUBSCRIPTION_INVITE(e, t), rejectWithError: !0 });
        return s.h.dispatch({ type: "PREMIUM_GROUP_ACCEPT_INVITE_SUCCESS", subscriptionGroupMemberId: r }), _;
    } catch (e) {
        return s.h.dispatch({ type: "PREMIUM_GROUP_ACCEPT_INVITE_FAIL", subscriptionGroupMemberId: r }), e;
    }
}
async function P(e, t, r) {
    s.h.dispatch({ type: "PREMIUM_GROUP_REMOVE_INVITE_START", subscriptionGroupMemberId: r });
    try {
        let _ = await i.Bo.del({ url: a.Rsh.BILLING_SUBSCRIPTION_INVITE(e, t), rejectWithError: !0 });
        return (
            s.h.dispatch({
                type: "PREMIUM_GROUP_REMOVE_INVITE_SUCCESS",
                subscriptionId: e,
                subscriptionGroupMemberId: r,
            }),
            _
        );
    } catch (t) {
        return (
            s.h.dispatch({
                type: "PREMIUM_GROUP_REMOVE_INVITE_FAILURE",
                subscriptionGroupMemberId: r,
                errorCode: t.body?.code,
                subscriptionId: e,
            }),
            t
        );
    }
}
async function S(e) {
    s.h.dispatch({ type: "PREMIUM_GROUP_INVITE_FETCH_START", subscriptionGroupMemberId: e });
    try {
        let t = (await i.Bo.get({ url: a.Rsh.PREMIUM_GROUP_INVITE(e), rejectWithError: !0 })).body;
        s.h.dispatch({ type: "PREMIUM_GROUP_INVITE_FETCH_SUCCESS", subscriptionGroupMemberId: e, invite: t });
    } catch (t) {
        s.h.dispatch({ type: "PREMIUM_GROUP_INVITE_FETCH_FAIL", subscriptionGroupMemberId: e, status: t?.status ?? 0 });
    }
}
