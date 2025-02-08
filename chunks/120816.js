n.d(t, { Z: () => b }), n(653041), n(47120);
var a,
    r,
    l,
    i = n(772848),
    o = n(756647),
    s = n(442837),
    c = n(570140),
    d = n(314897),
    u = n(906467);
let h = 0,
    m = [],
    x = 0,
    _ = [],
    p = !1;
class f extends (a = s.ZP.Store) {
    initialize() {
        this.waitFor(u.Z);
    }
    get loggedEvents() {
        return m;
    }
    get loggedEventsVersion() {
        return x;
    }
    get loggedTriggers() {
        return _;
    }
    get trackTriggers() {
        return p;
    }
}
(l = 'AnalyticsLogStore'),
    (r = 'displayName') in f
        ? Object.defineProperty(f, r, {
              value: l,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (f[r] = l);
let b = new f(c.Z, {
    TRACK: function (e) {
        let { event: t, properties: n, fingerprint: a } = e;
        if (u.Z.isDeveloper)
            m.push({
                key: (h++).toString(),
                event: t,
                properties: n,
                fingerprint: null != a ? (0, o.s)(a) : d.default.getId(),
                timestamp: new Date()
            }),
                x++,
                m.length > 500 && (m = m.slice(-Math.floor(250)));
    },
    TRACK_TRIGGER: function (e) {
        let { experimentId: t, descriptor: n, exposureType: a, excluded: r, location: l, previouslyTracked: o } = e;
        u.Z.isDeveloper &&
            p &&
            (_ = [
                ..._,
                {
                    key: (0, i.Z)(),
                    experimentId: t,
                    descriptor: n,
                    exposureType: a,
                    excluded: r,
                    location: l,
                    previouslyTracked: o,
                    timestamp: new Date()
                }
            ]).length > 500 &&
            _.shift();
    },
    SET_TRACK_TRIGGERS: function (e) {
        let { enabled: t } = e;
        p = t;
    },
    ANALYTICS_LOG_CLEAR: function () {
        (m = []), x++, (_ = []);
    }
});
