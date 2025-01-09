n(653041), n(47120);
var r,
    a,
    l,
    i,
    o = n(772848),
    s = n(756647),
    c = n(442837),
    d = n(570140),
    u = n(314897),
    m = n(906467);
let h = 0,
    x = [],
    f = 0,
    p = [],
    b = !1;
class g extends (r = c.ZP.Store) {
    initialize() {
        this.waitFor(m.Z);
    }
    get loggedEvents() {
        return x;
    }
    get loggedEventsVersion() {
        return f;
    }
    get loggedTriggers() {
        return p;
    }
    get trackTriggers() {
        return b;
    }
}
(i = 'AnalyticsLogStore'),
    (l = 'displayName') in (a = g)
        ? Object.defineProperty(a, l, {
              value: i,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (a[l] = i),
    (t.Z = new g(d.Z, {
        TRACK: function (e) {
            let { event: t, properties: n, fingerprint: r } = e;
            if (m.Z.isDeveloper) {
                var a;
                x.push({
                    key: (h++).toString(),
                    event: t,
                    properties: n,
                    fingerprint: null != (a = r) ? (0, s.s)(a) : u.default.getId(),
                    timestamp: new Date()
                }),
                    f++,
                    x.length > 500 && (x = x.slice(-Math.floor(250)));
            }
        },
        TRACK_TRIGGER: function (e) {
            let { experimentId: t, descriptor: n, exposureType: r, excluded: a, location: l, previouslyTracked: i } = e;
            if (!!m.Z.isDeveloper)
                b &&
                    (p = [
                        ...p,
                        {
                            key: (0, o.Z)(),
                            experimentId: t,
                            descriptor: n,
                            exposureType: r,
                            excluded: a,
                            location: l,
                            previouslyTracked: i,
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
            (x = []), f++, (p = []);
        }
    }));
