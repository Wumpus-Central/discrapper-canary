n.d(t, { Z: () => P }), n(47120);
var r,
    i = n(442837),
    o = n(570140),
    a = n(457330),
    s = n(726542),
    l = n(368111),
    c = n(601964);
function u(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
function d(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                u(e, t, n[t]);
            });
    }
    return e;
}
function f(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
    }
    return n;
}
function _(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : f(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let p = new Set([n(981631).ABu.CONTACTS]),
    h = !0,
    m = [],
    g = [],
    E = {},
    b = new Set(),
    y = {},
    v = {},
    O = (e) => {
        (m = e.filter((e) => !p.has(e.type) && s.Z.isSupported(e.type))), (g = e.filter((e) => p.has(e.type))), (h = !1);
    };
function I(e) {
    O(e.connectedAccounts.map((e) => new l.Z(e)));
}
function S(e) {
    e.local && null != e.accounts ? O(e.accounts.map((e) => new l.Z(_(d({}, e), { integrations: e.integrations.map((e) => _(d({}, e), { guild: new c.ZP(e.guild) })) })))) : a.Z.fetch();
}
function T(e) {
    E[e.integrationId] = e.joining;
}
function N(e) {
    v[e.integrationId] = void 0 !== e.error ? e.error : '';
}
function A(e) {
    let { platformType: t, id: n, revoked: r, accessToken: i } = e,
        o = m.find((e) => e.id === n && e.type === t);
    if (null == o) return !1;
    null != r && (o.revoked = r), null != i && (o.accessToken = i);
}
function C(e) {
    let { code: t, state: n, openid_params: r, provider: i } = e;
    a.Z.callback(i, {
        code: t,
        state: n,
        openid_params: r
    });
}
class R extends (r = i.ZP.Store) {
    isJoining(e) {
        return E[e] || !1;
    }
    joinErrorMessage(e) {
        return v[e];
    }
    isFetching() {
        return h;
    }
    getAccounts() {
        return m;
    }
    getLocalAccounts() {
        return g;
    }
    getAccount(e, t) {
        return m.find((n) => (null == e || n.id === e) && n.type === t);
    }
    getLocalAccount(e) {
        return g.find((t) => t.type === e);
    }
    isSuggestedAccountType(e) {
        return y[e] || !1;
    }
    addPendingAuthorizedState(e) {
        b.add(e);
    }
    deletePendingAuthorizedState(e) {
        b.delete(e);
    }
    hasPendingAuthorizedState(e) {
        return b.has(e);
    }
}
u(R, 'displayName', 'ConnectedAccountsStore');
let P = new R(o.Z, {
    CONNECTION_OPEN: I,
    USER_CONNECTIONS_UPDATE: S,
    USER_CONNECTIONS_INTEGRATION_JOINING: T,
    USER_CONNECTION_UPDATE: A,
    USER_CONNECTIONS_INTEGRATION_JOINING_ERROR: N,
    USER_CONNECTIONS_CALLBACK: C
});
