a.d(t, { Z: () => v }), a(539854), a(388685);
var n,
    r,
    l,
    i = a(772848),
    s = a(756647),
    o = a(442837),
    c = a(570140),
    d = a(314897),
    u = a(906467);
let m = 0,
    x = [],
    p = 0,
    h = [],
    f = !1;
class b extends (n = o.ZP.Store) {
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
        return f;
    }
}
(l = "AnalyticsLogStore"),
    (r = "displayName") in b
        ? Object.defineProperty(b, r, {
              value: l,
              enumerable: !0,
              configurable: !0,
              writable: !0,
          })
        : (b[r] = l);
let v = new b(c.Z, {
    TRACK: function (e) {
        let { event: t, properties: a, fingerprint: n } = e;
        u.Z.isDeveloper &&
            (x.push({
                key: (m++).toString(),
                event: t,
                properties: a,
                fingerprint: null != n ? (0, s.s)(n) : d.default.getId(),
                timestamp: new Date(),
            }),
            p++,
            x.length > 500 && (x = x.slice(-Math.floor(250))));
    },
    TRACK_TRIGGER: function (e) {
        let { experimentId: t, descriptor: a, exposureType: n, excluded: r, location: l, previouslyTracked: s } = e;
        u.Z.isDeveloper &&
            f &&
            (h = [
                ...h,
                {
                    key: (0, i.Z)(),
                    experimentId: t,
                    descriptor: a,
                    exposureType: n,
                    excluded: r,
                    location: l,
                    previouslyTracked: s,
                    timestamp: new Date(),
                },
            ]).length > 500 &&
            h.shift();
    },
    SET_TRACK_TRIGGERS: function (e) {
        let { enabled: t } = e;
        f = t;
    },
    ANALYTICS_LOG_CLEAR: function () {
        (x = []), p++, (h = []);
    },
});
