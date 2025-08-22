n.d(t, { Z: () => v }), n(539854), n(388685);
var a,
    r,
    l = n(772848),
    i = n(756647),
    s = n(442837),
    o = n(570140),
    c = n(314897),
    d = n(906467);
let u = 0,
    m = [],
    x = 0,
    h = [],
    p = !1;
class f extends (a = s.ZP.Store) {
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
(r = "displayName") in f
    ? Object.defineProperty(f, r, {
          value: "AnalyticsLogStore",
          enumerable: !0,
          configurable: !0,
          writable: !0,
      })
    : (f[r] = "AnalyticsLogStore");
let v = new f(o.Z, {
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
            x++,
            m.length > 500 && (m = m.slice(-Math.floor(250))));
    },
    TRACK_TRIGGER: function (e) {
        let { experimentId: t, descriptor: n, exposureType: a, excluded: r, location: i, previouslyTracked: s } = e;
        d.Z.isDeveloper &&
            p &&
            (h = [
                ...h,
                {
                    key: (0, l.Z)(),
                    experimentId: t,
                    descriptor: n,
                    exposureType: a,
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
