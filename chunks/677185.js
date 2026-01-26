n.d(t, {
    EQ: () => f,
    JV: () => d,
    el: () => E,
    kE: () => g,
    mm: () => h,
    n2: () => p,
    oO: () => _,
    wc: () => m,
}),
    n(896048);
var r = n(284009),
    i = n.n(r),
    a = n(562465),
    s = n(73153),
    o = n(427157),
    l = n(825772),
    c = n(652215);
let u = 10;
async function d() {
    s.h.dispatch({
        type: "PREMIUM_GROUP_MEMBERSHIP_FETCH_START",
    });
    try {
        let e = (
            await a.Bo.get({
                url: c.Rsh.PREMIUM_GROUP_MEMBERSHIP,
                rejectWithError: !0,
            })
        ).body;
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
                : s.h.dispatch({
                      type: "PREMIUM_GROUP_MEMBERSHIP_NOT_FOUND",
                  }),
            e
        );
    } catch (e) {
        return (
            s.h.dispatch({
                type: "PREMIUM_GROUP_MEMBERSHIP_FETCH_FAILURE",
            }),
            null
        );
    }
}
async function f(e, t, n, r) {
    let {
        users: i,
        next_index: s,
        ineligible_users: l,
    } = (
        await a.Bo.get({
            url: c.Rsh.BILLING_SUBSCRIPTION_ELIGIBLE_USERS(e),
            query: {
                index: t,
                limit: null != r ? r : u,
                search_query: n,
                include_ineligible: !0,
            },
            rejectWithError: !0,
        })
    ).body;
    return {
        users: [
            ...i.map((e) =>
                Object.assign(new o.A(e), {
                    eligible: !0,
                }),
            ),
            ...(null != l ? l : []).map((e) =>
                Object.assign(new o.A(e), {
                    eligible: !1,
                }),
            ),
        ],
        nextIndex: s,
    };
}
async function p(e, t) {
    s.h.dispatch({
        type: "PREMIUM_GROUP_INVITE_USERS_START",
    });
    try {
        let n = await a.Bo.post({
            url: c.Rsh.BILLING_SUBSCRIPTION_INVITES(e),
            body: {
                user_ids: t,
            },
            rejectWithError: !0,
        });
        return (
            s.h.dispatch({
                type: "PREMIUM_GROUP_INVITE_USERS_SUCCESS",
                subscriptionId: e,
            }),
            {
                invitedUsers: n.body.invited_users,
                ineligibleUsers: n.body.ineligible_users,
            }
        );
    } catch (e) {
        return (
            s.h.dispatch({
                type: "PREMIUM_GROUP_INVITE_USERS_FAILURE",
            }),
            null
        );
    }
}
async function _(e, t) {
    s.h.dispatch({
        type: "PREMIUM_GROUP_REMOVE_MEMBER_START",
    });
    try {
        let n = await a.Bo.del({
            url: c.Rsh.BILLING_SUBSCRIPTION_REMOVE_USER(e, t),
            rejectWithError: !0,
        });
        return (
            s.h.dispatch({
                type: "PREMIUM_GROUP_REMOVE_MEMBER_SUCCESS",
                subscriptionId: e,
            }),
            n
        );
    } catch (e) {
        return (
            s.h.dispatch({
                type: "PREMIUM_GROUP_REMOVE_MEMBER_FAILURE",
            }),
            e
        );
    }
}
async function h(e) {
    s.h.dispatch({
        type: "PREMIUM_GROUP_MEMBERS_FETCH_START",
    });
    try {
        let t = (
                await a.Bo.get({
                    url: c.Rsh.BILLING_SUBSCRIPTION_MEMBERS(e),
                    rejectWithError: !0,
                })
            ).body.map(l.A.createFromServer),
            n = t.find((e) => e.isPrimary());
        return (
            i()(null != n, "Primary member not found in premium group"),
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
        return (
            s.h.dispatch({
                type: "PREMIUM_GROUP_MEMBERS_FETCH_FAILURE",
            }),
            []
        );
    }
}
async function m(e, t, n) {
    s.h.dispatch({
        type: "PREMIUM_GROUP_ACCEPT_INVITE_START",
        subscriptionGroupMemberId: n,
    });
    try {
        let r = await a.Bo.patch({
            url: c.Rsh.BILLING_SUBSCRIPTION_INVITE(e, t),
            rejectWithError: !0,
        });
        return (
            s.h.dispatch({
                type: "PREMIUM_GROUP_ACCEPT_INVITE_SUCCESS",
                subscriptionGroupMemberId: n,
            }),
            r
        );
    } catch (e) {
        return (
            s.h.dispatch({
                type: "PREMIUM_GROUP_ACCEPT_INVITE_FAIL",
                subscriptionGroupMemberId: n,
            }),
            e
        );
    }
}
async function g(e, t, n) {
    s.h.dispatch({
        type: "PREMIUM_GROUP_REMOVE_INVITE_START",
        subscriptionGroupMemberId: n,
    });
    try {
        let r = await a.Bo.del({
            url: c.Rsh.BILLING_SUBSCRIPTION_INVITE(e, t),
            rejectWithError: !0,
        });
        return (
            s.h.dispatch({
                type: "PREMIUM_GROUP_REMOVE_INVITE_SUCCESS",
                subscriptionId: e,
                subscriptionGroupMemberId: n,
            }),
            r
        );
    } catch (t) {
        var r;
        return (
            s.h.dispatch({
                type: "PREMIUM_GROUP_REMOVE_INVITE_FAILURE",
                subscriptionGroupMemberId: n,
                errorCode: null == (r = t.body) ? void 0 : r.code,
                subscriptionId: e,
            }),
            t
        );
    }
}
async function E(e) {
    s.h.dispatch({
        type: "PREMIUM_GROUP_INVITE_FETCH_START",
        subscriptionGroupMemberId: e,
    });
    try {
        let t = (
            await a.Bo.get({
                url: c.Rsh.PREMIUM_GROUP_INVITE(e),
                rejectWithError: !0,
            })
        ).body;
        s.h.dispatch({
            type: "PREMIUM_GROUP_INVITE_FETCH_SUCCESS",
            subscriptionGroupMemberId: e,
            invite: t,
        });
    } catch (n) {
        var t;
        s.h.dispatch({
            type: "PREMIUM_GROUP_INVITE_FETCH_FAIL",
            subscriptionGroupMemberId: e,
            status: null != (t = null == n ? void 0 : n.status) ? t : 0,
        });
    }
}
