n.d(t, { A: () => _, e: () => l });
var i,
    a = n(17928),
    r = n(228366),
    s = n(927813),
    l =
        (((i = {})[(i.NOT_FETCHED = 0)] = "NOT_FETCHED"),
        (i[(i.FETCHING = 1)] = "FETCHING"),
        (i[(i.FETCHED = 2)] = "FETCHED"),
        (i[(i.ERROR = 3)] = "ERROR"),
        i);
let o = { applicationIdToGuildIds: {}, lastFetchTimeMs: null, nextFetchRetryTimeMs: null, fetchState: 0 };
function d(e) {
    let { applicationId: t, guildId: n } = e;
    null == o.applicationIdToGuildIds[t] && (o.applicationIdToGuildIds[t] = new Set()),
        o.applicationIdToGuildIds[t].add(n),
        (o.applicationIdToGuildIds[t] = new Set(o.applicationIdToGuildIds[t]));
}
class c extends a.Ay.PersistedStore {
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
let _ = new c(r.h, {
    LOGOUT: function () {
        (o.applicationIdToGuildIds = {}),
            (o.lastFetchTimeMs = null),
            (o.nextFetchRetryTimeMs = null),
            (o.fetchState = 0);
    },
    FETCH_INTEGRATION_APPLICATION_IDS_FOR_MY_GUILDS: function () {
        o.fetchState = 1;
    },
    FETCH_INTEGRATION_APPLICATION_IDS_FOR_MY_GUILDS_SUCCESS: function (e) {
        let { guildIdToApplicationIds: t } = e;
        for (let e in ((o.fetchState = 2),
        (o.lastFetchTimeMs = Date.now()),
        (o.applicationIdToGuildIds = {}),
        (o.nextFetchRetryTimeMs = null),
        t))
            for (let n of t[e]) d({ applicationId: n, guildId: e });
    },
    FETCH_INTEGRATION_APPLICATION_IDS_FOR_MY_GUILDS_FAILURE: function (e) {
        let { retryAfterSeconds: t } = e;
        if (((o.fetchState = 3), null != t)) {
            let e = t * s.A.Millis.SECOND;
            o.nextFetchRetryTimeMs = Date.now() + e;
        }
    },
    INTEGRATION_CREATE: function (e) {
        let { application: t, guildId: n } = e;
        null != t && d({ applicationId: t.id, guildId: n });
    },
    INTEGRATION_DELETE: function (e) {
        let { applicationId: t, guildId: n } = e;
        null != t &&
            (function (e) {
                let { applicationId: t, guildId: n } = e;
                null != o.applicationIdToGuildIds[t] &&
                    (o.applicationIdToGuildIds[t].delete(n),
                    (o.applicationIdToGuildIds[t] = new Set(o.applicationIdToGuildIds[t])));
            })({ applicationId: t, guildId: n });
    },
});
