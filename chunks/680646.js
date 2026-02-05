"use strict";
n.d(t, { A: () => g, e: () => s });
var r = n(311907),
    i = n(73153),
    a = n(927813),
    s = (function (e) {
        return (
            (e[(e.NOT_FETCHED = 0)] = "NOT_FETCHED"),
            (e[(e.FETCHING = 1)] = "FETCHING"),
            (e[(e.FETCHED = 2)] = "FETCHED"),
            (e[(e.ERROR = 3)] = "ERROR"),
            e
        );
    })({});
let o = { applicationIdToGuildIds: {}, lastFetchTimeMs: null, nextFetchRetryTimeMs: null, fetchState: 0 };
function l() {
    (o.applicationIdToGuildIds = {}), (o.lastFetchTimeMs = null), (o.nextFetchRetryTimeMs = null), (o.fetchState = 0);
}
function u() {
    o.fetchState = 1;
}
function c(e) {
    let { applicationId: t, guildId: n } = e;
    null == o.applicationIdToGuildIds[t] && (o.applicationIdToGuildIds[t] = new Set()),
        o.applicationIdToGuildIds[t].add(n),
        (o.applicationIdToGuildIds[t] = new Set(o.applicationIdToGuildIds[t]));
}
function d(e) {
    let { applicationId: t, guildId: n } = e;
    null != o.applicationIdToGuildIds[t] &&
        (o.applicationIdToGuildIds[t].delete(n),
        (o.applicationIdToGuildIds[t] = new Set(o.applicationIdToGuildIds[t])));
}
function _(e) {
    let { guildIdToApplicationIds: t } = e;
    for (let e in ((o.fetchState = 2),
    (o.lastFetchTimeMs = Date.now()),
    (o.applicationIdToGuildIds = {}),
    (o.nextFetchRetryTimeMs = null),
    t))
        for (let n of t[e]) c({ applicationId: n, guildId: e });
}
function f(e) {
    let { retryAfterSeconds: t } = e;
    if (((o.fetchState = 3), null != t)) {
        let e = t * a.A.Millis.SECOND;
        o.nextFetchRetryTimeMs = Date.now() + e;
    }
}
function p(e) {
    let { application: t, guildId: n } = e;
    null != t && c({ applicationId: t.id, guildId: n });
}
function h(e) {
    let { applicationId: t, guildId: n } = e;
    null != t && d({ applicationId: t, guildId: n });
}
class m extends r.Ay.PersistedStore {
    static displayName = "MyGuildApplicationsStore";
    static persistKey = "MyGuildApplicationsStore";
    initialize(e) {
        if (null != e)
            for (let t in ((o.lastFetchTimeMs = e.lastFetchTimeMs),
            (o.nextFetchRetryTimeMs = e.nextFetchRetryTimeMs),
            (o.fetchState = e.fetchState),
            e.applicationIdToGuildIds))
                o.applicationIdToGuildIds[t] = new Set(e.applicationIdToGuildIds[t]);
    }
    getState() {
        return o;
    }
    getGuildIdsForApplication(e) {
        if (null != e) return o.applicationIdToGuildIds[e];
    }
    getLastFetchTimeMs() {
        return o.lastFetchTimeMs;
    }
    getNextFetchRetryTimeMs() {
        return o.nextFetchRetryTimeMs;
    }
    getFetchState() {
        return o.fetchState;
    }
}
let g = new m(i.h, {
    LOGOUT: l,
    FETCH_INTEGRATION_APPLICATION_IDS_FOR_MY_GUILDS: u,
    FETCH_INTEGRATION_APPLICATION_IDS_FOR_MY_GUILDS_SUCCESS: _,
    FETCH_INTEGRATION_APPLICATION_IDS_FOR_MY_GUILDS_FAILURE: f,
    INTEGRATION_CREATE: p,
    INTEGRATION_DELETE: h,
});
