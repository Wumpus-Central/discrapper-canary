n.d(t, { Z: () => v }), n(539854), n(388685);
var a,
    r,
    l,
    i = n(772848),
    o = n(756647),
    s = n(442837),
    c = n(570140),
    d = n(314897),
    u = n(906467);
let m = 0,
    x = [],
    h = 0,
    p = [],
    b = !1;
class f extends (a = s.ZP.Store) {
    initialize() {
        this.waitFor(u.Z);
    }
    get loggedEvents() {
        return x;
    }
    get loggedEventsVersion() {
        return h;
    }
    get loggedTriggers() {
        return p;
    }
    get trackTriggers() {
        return b;
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
let v = new f(c.Z, {
    TRACK: function (e) {
        let { event: t, properties: n, fingerprint: a } = e;
        u.Z.isDeveloper &&
            (x.push({
                key: (m++).toString(),
                event: t,
                properties: n,
                fingerprint: null != a ? (0, o.s)(a) : d.default.getId(),
                timestamp: new Date()
            }),
            h++,
            x.length > 500 && (x = x.slice(-Math.floor(250))));
    },
    TRACK_TRIGGER: function (e) {
        let { experimentId: t, descriptor: n, exposureType: a, excluded: r, location: l, previouslyTracked: o } = e;
        u.Z.isDeveloper &&
            b &&
            (p = [
                ...p,
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
            p.shift();
    },
    SET_TRACK_TRIGGERS: function (e) {
        let { enabled: t } = e;
        b = t;
    },
    ANALYTICS_LOG_CLEAR: function () {
        (x = []), h++, (p = []);
    }
});
