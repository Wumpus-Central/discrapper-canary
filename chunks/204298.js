n.d(t, {
    M: () => l,
    Z: () => b
}),
    n(47120);
var r,
    i = n(442837),
    o = n(570140),
    a = n(70956);
function s(e, t, n) {
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
var l = (function (e) {
    return (e[(e.NOT_FETCHED = 0)] = 'NOT_FETCHED'), (e[(e.FETCHING = 1)] = 'FETCHING'), (e[(e.FETCHED = 2)] = 'FETCHED'), (e[(e.ERROR = 3)] = 'ERROR'), e;
})({});
let c = {
    applicationIdToGuildIds: {},
    lastFetchTimeMs: null,
    nextFetchRetryTimeMs: null,
    fetchState: 0
};
function u() {
    (c.applicationIdToGuildIds = {}), (c.lastFetchTimeMs = null), (c.nextFetchRetryTimeMs = null), (c.fetchState = 0);
}
function d() {
    c.fetchState = 1;
}
function f(e) {
    let { applicationId: t, guildId: n } = e;
    null == c.applicationIdToGuildIds[t] && (c.applicationIdToGuildIds[t] = new Set()), c.applicationIdToGuildIds[t].add(n), (c.applicationIdToGuildIds[t] = new Set(c.applicationIdToGuildIds[t]));
}
function _(e) {
    let { applicationId: t, guildId: n } = e;
    null != c.applicationIdToGuildIds[t] && (c.applicationIdToGuildIds[t].delete(n), (c.applicationIdToGuildIds[t] = new Set(c.applicationIdToGuildIds[t])));
}
function p(e) {
    let { guildIdToApplicationIds: t } = e;
    for (let e in ((c.fetchState = 2), (c.lastFetchTimeMs = Date.now()), (c.applicationIdToGuildIds = {}), (c.nextFetchRetryTimeMs = null), t))
        for (let n of t[e])
            f({
                applicationId: n,
                guildId: e
            });
}
function h(e) {
    let { retryAfterSeconds: t } = e;
    if (((c.fetchState = 3), null != t)) {
        let e = t * a.Z.Millis.SECOND;
        c.nextFetchRetryTimeMs = Date.now() + e;
    }
}
function m(e) {
    let { application: t, guildId: n } = e;
    null != t &&
        f({
            applicationId: t.id,
            guildId: n
        });
}
function g(e) {
    let { applicationId: t, guildId: n } = e;
    null != t &&
        _({
            applicationId: t,
            guildId: n
        });
}
class E extends (r = i.ZP.PersistedStore) {
    initialize(e) {
        if (null != e) for (let t in ((c.lastFetchTimeMs = e.lastFetchTimeMs), (c.nextFetchRetryTimeMs = e.nextFetchRetryTimeMs), (c.fetchState = e.fetchState), e.applicationIdToGuildIds)) c.applicationIdToGuildIds[t] = new Set(e.applicationIdToGuildIds[t]);
    }
    getState() {
        return c;
    }
    getGuildIdsForApplication(e) {
        if (null != e) return c.applicationIdToGuildIds[e];
    }
    getLastFetchTimeMs() {
        return c.lastFetchTimeMs;
    }
    getNextFetchRetryTimeMs() {
        return c.nextFetchRetryTimeMs;
    }
    getFetchState() {
        return c.fetchState;
    }
}
s(E, 'displayName', 'MyGuildApplicationsStore'), s(E, 'persistKey', 'MyGuildApplicationsStore');
let b = new E(o.Z, {
    LOGOUT: u,
    FETCH_INTEGRATION_APPLICATION_IDS_FOR_MY_GUILDS: d,
    FETCH_INTEGRATION_APPLICATION_IDS_FOR_MY_GUILDS_SUCCESS: p,
    FETCH_INTEGRATION_APPLICATION_IDS_FOR_MY_GUILDS_FAILURE: h,
    INTEGRATION_CREATE: m,
    INTEGRATION_DELETE: g
});
