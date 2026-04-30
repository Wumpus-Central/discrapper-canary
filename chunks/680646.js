"use strict";
n.d(t, { A: () => d, e: () => o });
var i,
    r = n(17928),
    s = n(228366),
    a = n(927813),
    o =
        (((i = {})[(i.NOT_FETCHED = 0)] = "NOT_FETCHED"),
        (i[(i.FETCHING = 1)] = "FETCHING"),
        (i[(i.FETCHED = 2)] = "FETCHED"),
        (i[(i.ERROR = 3)] = "ERROR"),
        i);
let l = { applicationIdToGuildIds: {}, lastFetchTimeMs: null, nextFetchRetryTimeMs: null, fetchState: 0 };
function u(e) {
    let { applicationId: t, guildId: n } = e;
    null == l.applicationIdToGuildIds[t] && (l.applicationIdToGuildIds[t] = new Set()),
        l.applicationIdToGuildIds[t].add(n),
        (l.applicationIdToGuildIds[t] = new Set(l.applicationIdToGuildIds[t]));
}
class c extends r.Ay.PersistedStore {
    static displayName = "MyGuildApplicationsStore";
    static persistKey = "MyGuildApplicationsStore";
    initialize(e) {
        if (null != e)
            for (let t in ((l.lastFetchTimeMs = e.lastFetchTimeMs),
            (l.nextFetchRetryTimeMs = e.nextFetchRetryTimeMs),
            (l.fetchState = e.fetchState),
            e.applicationIdToGuildIds))
                l.applicationIdToGuildIds[t] = new Set(e.applicationIdToGuildIds[t]);
    }
    getState() {
        return l;
    }
    getGuildIdsForApplication(e) {
        if (null != e) return l.applicationIdToGuildIds[e];
    }
    getLastFetchTimeMs() {
        return l.lastFetchTimeMs;
    }
    getNextFetchRetryTimeMs() {
        return l.nextFetchRetryTimeMs;
    }
    getFetchState() {
        return l.fetchState;
    }
}
let d = new c(s.h, {
    LOGOUT: function () {
        (l.applicationIdToGuildIds = {}),
            (l.lastFetchTimeMs = null),
            (l.nextFetchRetryTimeMs = null),
            (l.fetchState = 0);
    },
    FETCH_INTEGRATION_APPLICATION_IDS_FOR_MY_GUILDS: function () {
        l.fetchState = 1;
    },
    FETCH_INTEGRATION_APPLICATION_IDS_FOR_MY_GUILDS_SUCCESS: function (e) {
        let { guildIdToApplicationIds: t } = e;
        for (let e in ((l.fetchState = 2),
        (l.lastFetchTimeMs = Date.now()),
        (l.applicationIdToGuildIds = {}),
        (l.nextFetchRetryTimeMs = null),
        t))
            for (let n of t[e]) u({ applicationId: n, guildId: e });
    },
    FETCH_INTEGRATION_APPLICATION_IDS_FOR_MY_GUILDS_FAILURE: function (e) {
        let { retryAfterSeconds: t } = e;
        if (((l.fetchState = 3), null != t)) {
            let e = t * a.A.Millis.SECOND;
            l.nextFetchRetryTimeMs = Date.now() + e;
        }
    },
    INTEGRATION_CREATE: function (e) {
        let { application: t, guildId: n } = e;
        null != t && u({ applicationId: t.id, guildId: n });
    },
    INTEGRATION_DELETE: function (e) {
        let { applicationId: t, guildId: n } = e;
        null != t &&
            (function (e) {
                let { applicationId: t, guildId: n } = e;
                null != l.applicationIdToGuildIds[t] &&
                    (l.applicationIdToGuildIds[t].delete(n),
                    (l.applicationIdToGuildIds[t] = new Set(l.applicationIdToGuildIds[t])));
            })({ applicationId: t, guildId: n });
    },
});
