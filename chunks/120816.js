n.d(t, { Z: () => f }), n(539854), n(388685);
var a,
    l,
    r = n(772848),
    i = n(756647),
    s = n(442837),
    o = n(570140),
    c = n(314897),
    d = n(906467);
let u = 0,
    m = [],
    p = 0,
    h = [],
    x = !1;
class g extends (a = s.ZP.Store) {
    initialize() {
        this.waitFor(c.default, d.Z);
    }
    get loggedEvents() {
        return m;
    }
    get loggedEventsVersion() {
        return p;
    }
    get loggedTriggers() {
        return h;
    }
    get trackTriggers() {
        return x;
    }
}
(l = "displayName") in g
    ? Object.defineProperty(g, l, {
          value: "AnalyticsLogStore",
          enumerable: !0,
          configurable: !0,
          writable: !0,
      })
    : (g[l] = "AnalyticsLogStore");
let f = new g(o.Z, {
    TRACK: function (e) {
        let { event: t, properties: n, fingerprint: a } = e;
        d.Z.isDeveloper &&
            (m.push({
                key: (u++).toString(),
                event: t,
                properties: n,
                fingerprint: null != a ? (0, i.s)(a) : c.default.getId(),
                timestamp: new Date(),
            }),
            p++,
            m.length > 500 && (m = m.slice(-Math.floor(250))));
    },
    TRACK_TRIGGER: function (e) {
        let { experimentId: t, descriptor: n, exposureType: a, excluded: l, location: i, previouslyTracked: s } = e;
        d.Z.isDeveloper &&
            x &&
            (h = [
                ...h,
                {
                    key: (0, r.Z)(),
                    experimentId: t,
                    descriptor: n,
                    exposureType: a,
                    excluded: l,
                    location: i,
                    previouslyTracked: s,
                    timestamp: new Date(),
                },
            ]).length > 500 &&
            h.shift();
    },
    SET_TRACK_TRIGGERS: function (e) {
        let { enabled: t } = e;
        x = t;
    },
    ANALYTICS_LOG_CLEAR: function () {
        (m = []), p++, (h = []);
    },
});
