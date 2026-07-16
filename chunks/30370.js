"use strict";
n.d(t, { A: () => m });
var i = n(17928),
    r = n(228366),
    a = n(77468),
    s = n(573648),
    l = n(315069);
class o extends l.A {
    id;
    type;
    name;
    revoked;
    integrations;
    visibility;
    friendSync;
    verified;
    showActivity;
    twoWayLink;
    accessToken;
    metadata;
    metadataVisibility;
    constructor(e) {
        super(),
            (this.id = e.id),
            (this.type = e.type),
            (this.name = e.name),
            (this.revoked = e.revoked || !1),
            (this.integrations = e.integrations || []),
            (this.visibility = e.visibility || 0),
            (this.friendSync = e.friend_sync || !1),
            (this.showActivity = e.show_activity || !1),
            (this.verified = e.verified || !1),
            (this.accessToken = e.access_token || null),
            (this.twoWayLink = e.two_way_link || !1),
            (this.metadata = e.metadata || null),
            (this.metadataVisibility = e.metadata_visibility || 0);
    }
    toString() {
        return this.name;
    }
}
var d = n(860689);
let c = new Set([n(652215).fg2.CONTACTS]),
    u = !0,
    _ = [],
    E = [],
    A = {},
    h = new Set(),
    I = {},
    f = {};
function p(e) {
    (_ = e.filter((e) => !c.has(e.type) && s.A.isSupported(e.type))), (E = e.filter((e) => c.has(e.type))), (u = !1);
}
class T extends i.Ay.Store {
    static displayName = "ConnectedAccountsStore";
    isJoining(e) {
        return A[e] || !1;
    }
    joinErrorMessage(e) {
        return f[e];
    }
    isFetching() {
        return u;
    }
    getAccounts() {
        return _;
    }
    getLocalAccounts() {
        return E;
    }
    getAccount(e, t) {
        return _.find((n) => (null == e || n.id === e) && n.type === t);
    }
    getLocalAccount(e) {
        return E.find((t) => t.type === e);
    }
    isSuggestedAccountType(e) {
        return I[e] || !1;
    }
    addPendingAuthorizedState(e) {
        h.add(e);
    }
    deletePendingAuthorizedState(e) {
        h.delete(e);
    }
    hasPendingAuthorizedState(e) {
        return h.has(e);
    }
}
let m = new T(r.h, {
    CONNECTION_OPEN: function (e) {
        p(e.connectedAccounts.map((e) => new o(e)));
    },
    USER_CONNECTIONS_UPDATE: function (e) {
        e.local && null != e.accounts
            ? p(
                  e.accounts.map(
                      (e) =>
                          new o({
                              ...e,
                              integrations: e.integrations.map((e) => ({
                                  ...e,
                                  guild: (0, d.yF)({ ...e.guild, features: [] }),
                              })),
                          }),
                  ),
              )
            : a.A.fetch();
    },
    USER_CONNECTIONS_INTEGRATION_JOINING: function (e) {
        A[e.integrationId] = e.joining;
    },
    USER_CONNECTION_UPDATE: function (e) {
        let { platformType: t, id: n, revoked: i, accessToken: r } = e,
            a = _.find((e) => e.id === n && e.type === t);
        if (null == a) return !1;
        null != i && (a.revoked = i), null != r && (a.accessToken = r);
    },
    USER_CONNECTIONS_INTEGRATION_JOINING_ERROR: function (e) {
        f[e.integrationId] = void 0 !== e.error ? e.error : "";
    },
    USER_CONNECTIONS_CALLBACK: function (e) {
        let { code: t, state: n, openid_params: i, provider: r } = e;
        a.A.callback(r, { code: t, state: n, openid_params: i });
    },
});
