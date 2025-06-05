n.d(t, { Z: () => v }), n(539854), n(388685);
var a,
    r,
    l,
    i = n(772848),
    s = n(756647),
    o = n(442837),
    c = n(570140),
    d = n(314897),
    u = n(906467);
let m = 0,
    x = [],
    p = 0,
    h = [],
    b = !1;
class f extends (a = o.ZP.Store) {
    initialize() {
        this.waitFor(u.Z);
    }
    get loggedEvents() {
        return x;
    }
    get loggedEventsVersion() {
        return p;
    }
    get loggedTriggers() {
        return h;
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
                fingerprint: null != a ? (0, s.s)(a) : d.default.getId(),
                timestamp: new Date()
            }),
            p++,
            x.length > 500 && (x = x.slice(-Math.floor(250))));
    },
    TRACK_TRIGGER: function (e) {
        let { experimentId: t, descriptor: n, exposureType: a, excluded: r, location: l, previouslyTracked: s } = e;
        u.Z.isDeveloper &&
            b &&
            (h = [
                ...h,
                {
                    key: (0, i.Z)(),
                    experimentId: t,
                    descriptor: n,
                    exposureType: a,
                    excluded: r,
                    location: l,
                    previouslyTracked: s,
                    timestamp: new Date()
                }
            ]).length > 500 &&
            h.shift();
    },
    SET_TRACK_TRIGGERS: function (e) {
        let { enabled: t } = e;
        b = t;
    },
    ANALYTICS_LOG_CLEAR: function () {
        (x = []), p++, (h = []);
    }
});
