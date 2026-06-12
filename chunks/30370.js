"use strict";
n.d(t, { A: () => I });
var i = n(17928),
    r = n(228366),
    s = n(77468),
    a = n(573648),
    o = n(315069);
class l extends o.A {
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
var u = n(860689);
let c = new Set([n(652215).fg2.CONTACTS]),
    d = !0,
    _ = [],
    h = [],
    f = {},
    p = new Set(),
    E = {},
    m = {},
    g = (e) => {
        (_ = e.filter((e) => !c.has(e.type) && a.A.isSupported(e.type))),
            (h = e.filter((e) => c.has(e.type))),
            (d = !1);
    };
class A extends i.Ay.Store {
    static displayName = "ConnectedAccountsStore";
    isJoining(e) {
        return f[e] || !1;
    }
    joinErrorMessage(e) {
        return m[e];
    }
    isFetching() {
        return d;
    }
    getAccounts() {
        return _;
    }
    getLocalAccounts() {
        return h;
    }
    getAccount(e, t) {
        return _.find((n) => (null == e || n.id === e) && n.type === t);
    }
    getLocalAccount(e) {
        return h.find((t) => t.type === e);
    }
    isSuggestedAccountType(e) {
        return E[e] || !1;
    }
    addPendingAuthorizedState(e) {
        p.add(e);
    }
    deletePendingAuthorizedState(e) {
        p.delete(e);
    }
    hasPendingAuthorizedState(e) {
        return p.has(e);
    }
}
let I = new A(r.h, {
    CONNECTION_OPEN: function (e) {
        g(e.connectedAccounts.map((e) => new l(e)));
    },
    USER_CONNECTIONS_UPDATE: function (e) {
        e.local && null != e.accounts
            ? g(
                  e.accounts.map(
                      (e) =>
                          new l({
                              ...e,
                              integrations: e.integrations.map((e) => ({
                                  ...e,
                                  guild: (0, u.yF)({ ...e.guild, features: [] }),
                              })),
                          }),
                  ),
              )
            : s.A.fetch();
    },
    USER_CONNECTIONS_INTEGRATION_JOINING: function (e) {
        f[e.integrationId] = e.joining;
    },
    USER_CONNECTION_UPDATE: function (e) {
        let { platformType: t, id: n, revoked: i, accessToken: r } = e,
            s = _.find((e) => e.id === n && e.type === t);
        if (null == s) return !1;
        null != i && (s.revoked = i), null != r && (s.accessToken = r);
    },
    USER_CONNECTIONS_INTEGRATION_JOINING_ERROR: function (e) {
        m[e.integrationId] = void 0 !== e.error ? e.error : "";
    },
    USER_CONNECTIONS_CALLBACK: function (e) {
        let { code: t, state: n, openid_params: i, provider: r } = e;
        s.A.callback(r, { code: t, state: n, openid_params: i });
    },
});
