n.d(t, {
    A: () => A,
});
var r,
    i,
    l = n(311907),
    s = n(73153),
    a = n(166403),
    o = n(677185),
    c = n(88001),
    d = n(652215);
let u = {
    membersData: {
        data: null,
        isFetching: !1,
        isUpdating: !1,
    },
    membershipData: {
        data: null,
        isFetching: !1,
        hasFetched: !1,
    },
};

function _() {
    u.membersData.isUpdating = !0;
}

function p(e) {
    let { subscriptionId: t } = e;
    s.h.wait(() => (0, o.mm)(t).catch(d.FXj)), (u.membersData.isUpdating = !1);
}

function m() {
    u.membersData.isUpdating = !1;
}
class g extends (i = l.Ay.Store) {
    initialize() {
        this.waitFor(a.A);
    }
    getMembers() {
        return u.membersData.data;
    }
    isFetchingMembers() {
        return u.membersData.isFetching;
    }
    isUpdatingMembers() {
        return u.membersData.isUpdating;
    }
    hasFetchedMembers() {
        return null !== u.membersData.data;
    }
    getMembership() {
        return u.membershipData.data;
    }
    isFetchingMembership() {
        return u.membershipData.isFetching;
    }
    hasFetchedMembership() {
        return null !== u.membershipData.data;
    }
    getNumUsedSeats() {
        return null == u.membersData.data ? 0 : u.membersData.data.members.length;
    }
    getNumAvailableInvites() {
        if (null == u.membersData.data) return c.LM;
        let e = u.membersData.data.members.length + u.membersData.data.invitedUsers.length;
        return Math.max(0, c.LM - e);
    }
    getNumTotalSeats() {
        return c.LM;
    }
}
(r = "displayName") in g
    ? Object.defineProperty(g, r, {
          value: "PremiumGroupStore",
          enumerable: !0,
          configurable: !0,
          writable: !0,
      })
    : (g[r] = "PremiumGroupStore");
let A = new g(s.h, {
    PREMIUM_GROUP_MEMBERS_REQUEST: function (e) {
        let { subscriptionId: t } = e;
        return !u.membersData.isFetching && (s.h.wait(() => (0, o.mm)(t).catch(d.FXj)), !0);
    },
    PREMIUM_GROUP_MEMBERS_FETCH_START: function () {
        u.membersData.isFetching = !0;
    },
    PREMIUM_GROUP_MEMBERS_FETCH_SUCCESS: function (e) {
        let { members: t } = e;
        (u.membersData.data = t), (u.membersData.isFetching = !1);
    },
    PREMIUM_GROUP_MEMBERS_FETCH_FAILURE: function () {
        u.membersData.isFetching = !1;
    },
    PREMIUM_GROUP_MEMBERSHIP_REQUEST: function () {
        return !u.membershipData.isFetching && (s.h.wait(() => (0, o.JV)().catch(d.FXj)), !0);
    },
    PREMIUM_GROUP_MEMBERSHIP_FETCH_START: function () {
        u.membershipData.isFetching = !0;
    },
    PREMIUM_GROUP_MEMBERSHIP_FETCH_SUCCESS: function (e) {
        let { membership: t } = e;
        (u.membershipData.data = t), (u.membershipData.isFetching = !1), (u.membershipData.hasFetched = !0);
    },
    PREMIUM_GROUP_MEMBERSHIP_NOT_FOUND: function () {
        (u.membershipData.isFetching = !1), (u.membershipData.hasFetched = !0);
    },
    PREMIUM_GROUP_MEMBERSHIP_FETCH_FAILURE: function () {
        (u.membershipData.isFetching = !1), (u.membershipData.hasFetched = !0);
    },
    PREMIUM_GROUP_INVITE_USERS_START: _,
    PREMIUM_GROUP_INVITE_USERS_SUCCESS: p,
    PREMIUM_GROUP_INVITE_USERS_FAILURE: m,
    PREMIUM_GROUP_REMOVE_MEMBER_START: _,
    PREMIUM_GROUP_REMOVE_MEMBER_SUCCESS: p,
    PREMIUM_GROUP_REMOVE_MEMBER_FAILURE: m,
    PREMIUM_GROUP_REMOVE_INVITE_START: _,
    PREMIUM_GROUP_REMOVE_INVITE_SUCCESS: p,
    PREMIUM_GROUP_REMOVE_INVITE_FAILURE: function (e) {
        let { errorCode: t, subscriptionId: n } = e;
        if (t === c.Hy.BILLING_SUBSCRIPTION_GROUP_INVITE_ALREADY_ACCEPTED)
            return s.h.wait(() => (0, o.mm)(n).catch(d.FXj)), (u.membersData.isUpdating = !1), !0;
        m();
    },
    LOGOUT: function () {
        u = {
            membersData: {
                data: null,
                isFetching: !1,
                isUpdating: !1,
            },
            membershipData: {
                data: null,
                isFetching: !1,
                hasFetched: !1,
            },
        };
    },
});
