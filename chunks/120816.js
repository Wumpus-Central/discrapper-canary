a.d(t, { Z: () => b }), a(539854), a(388685);
var n,
    r,
    l = a(772848),
    i = a(756647),
    s = a(442837),
    o = a(570140),
    c = a(314897),
    d = a(906467);
let u = 0,
    m = [],
    x = 0,
    h = [],
    p = !1;
class v extends (n = s.ZP.Store) {
    initialize() {
        this.waitFor(d.Z);
    }
    get loggedEvents() {
        return m;
    }
    get loggedEventsVersion() {
        return x;
    }
    get loggedTriggers() {
        return h;
    }
    get trackTriggers() {
        return p;
    }
}
(r = "displayName") in v
    ? Object.defineProperty(v, r, {
          value: "AnalyticsLogStore",
          enumerable: !0,
          configurable: !0,
          writable: !0,
      })
    : (v[r] = "AnalyticsLogStore");
let b = new v(o.Z, {
    TRACK: function (e) {
        let { event: t, properties: a, fingerprint: n } = e;
        d.Z.isDeveloper &&
            (m.push({
                key: (u++).toString(),
                event: t,
                properties: a,
                fingerprint: null != n ? (0, i.s)(n) : c.default.getId(),
                timestamp: new Date(),
            }),
            x++,
            m.length > 500 && (m = m.slice(-Math.floor(250))));
    },
    TRACK_TRIGGER: function (e) {
        let { experimentId: t, descriptor: a, exposureType: n, excluded: r, location: i, previouslyTracked: s } = e;
        d.Z.isDeveloper &&
            p &&
            (h = [
                ...h,
                {
                    key: (0, l.Z)(),
                    experimentId: t,
                    descriptor: a,
                    exposureType: n,
                    excluded: r,
                    location: i,
                    previouslyTracked: s,
                    timestamp: new Date(),
                },
            ]).length > 500 &&
            h.shift();
    },
    SET_TRACK_TRIGGERS: function (e) {
        let { enabled: t } = e;
        p = t;
    },
    ANALYTICS_LOG_CLEAR: function () {
        (m = []), x++, (h = []);
    },
});
