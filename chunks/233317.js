n.d(t, {
    A: () => C,
});
var r,
    i = n(311907),
    a = n(73153),
    s = n(166403),
    o = n(677185),
    l = n(88001),
    c = n(652215);

function u(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
let d = {
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

function f() {
    d.membersData.isFetching = !0;
}

function p(e) {
    let { members: t } = e;
    (d.membersData.data = t), (d.membersData.isFetching = !1);
}

function _() {
    d.membersData.isFetching = !1;
}

function h() {
    d.membershipData.isFetching = !0;
}

function m(e) {
    let { membership: t } = e;
    (d.membershipData.data = t), (d.membershipData.isFetching = !1), (d.membershipData.hasFetched = !0);
}

function g() {
    (d.membershipData.isFetching = !1), (d.membershipData.hasFetched = !0);
}

function E() {
    (d.membershipData.isFetching = !1), (d.membershipData.hasFetched = !0);
}

function b() {
    return !d.membershipData.isFetching && (a.h.wait(() => (0, o.JV)().catch(c.FXj)), !0);
}

function y() {
    d.membersData.isUpdating = !0;
}

function O(e) {
    let { subscriptionId: t } = e;
    a.h.wait(() => (0, o.mm)(t).catch(c.FXj)), (d.membersData.isUpdating = !1);
}

function A(e) {
    let { errorCode: t, subscriptionId: n } = e;
    if (t === l.Hy.BILLING_SUBSCRIPTION_GROUP_INVITE_ALREADY_ACCEPTED)
        return a.h.wait(() => (0, o.mm)(n).catch(c.FXj)), (d.membersData.isUpdating = !1), !0;
    v();
}

function v() {
    d.membersData.isUpdating = !1;
}

function S(e) {
    let { subscriptionId: t } = e;
    return !d.membersData.isFetching && (a.h.wait(() => (0, o.mm)(t).catch(c.FXj)), !0);
}

function I() {
    d = {
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
}
class T extends (r = i.Ay.Store) {
    initialize() {
        this.waitFor(s.A);
    }
    getMembers() {
        return d.membersData.data;
    }
    isFetchingMembers() {
        return d.membersData.isFetching;
    }
    isUpdatingMembers() {
        return d.membersData.isUpdating;
    }
    hasFetchedMembers() {
        return null !== d.membersData.data;
    }
    getMembership() {
        return d.membershipData.data;
    }
    isFetchingMembership() {
        return d.membershipData.isFetching;
    }
    hasFetchedMembership() {
        return null !== d.membershipData.data;
    }
    getNumUsedSeats() {
        return null == d.membersData.data ? 0 : d.membersData.data.members.length;
    }
    getNumAvailableInvites() {
        if (null == d.membersData.data) return l.LM;
        let e = d.membersData.data.members.length + d.membersData.data.invitedUsers.length;
        return Math.max(0, l.LM - e);
    }
    getNumTotalSeats() {
        return l.LM;
    }
}
u(T, "displayName", "PremiumGroupStore");
let C = new T(a.h, {
    PREMIUM_GROUP_MEMBERS_REQUEST: S,
    PREMIUM_GROUP_MEMBERS_FETCH_START: f,
    PREMIUM_GROUP_MEMBERS_FETCH_SUCCESS: p,
    PREMIUM_GROUP_MEMBERS_FETCH_FAILURE: _,
    PREMIUM_GROUP_MEMBERSHIP_REQUEST: b,
    PREMIUM_GROUP_MEMBERSHIP_FETCH_START: h,
    PREMIUM_GROUP_MEMBERSHIP_FETCH_SUCCESS: m,
    PREMIUM_GROUP_MEMBERSHIP_NOT_FOUND: g,
    PREMIUM_GROUP_MEMBERSHIP_FETCH_FAILURE: E,
    PREMIUM_GROUP_INVITE_USERS_START: y,
    PREMIUM_GROUP_INVITE_USERS_SUCCESS: O,
    PREMIUM_GROUP_INVITE_USERS_FAILURE: v,
    PREMIUM_GROUP_REMOVE_MEMBER_START: y,
    PREMIUM_GROUP_REMOVE_MEMBER_SUCCESS: O,
    PREMIUM_GROUP_REMOVE_MEMBER_FAILURE: v,
    PREMIUM_GROUP_REMOVE_INVITE_START: y,
    PREMIUM_GROUP_REMOVE_INVITE_SUCCESS: O,
    PREMIUM_GROUP_REMOVE_INVITE_FAILURE: A,
    LOGOUT: I,
});
