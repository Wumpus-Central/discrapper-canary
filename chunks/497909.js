(n.d(t, { Z: () => p }), n(388685));
var r = n(843991),
    i = n(668757),
    a = n(147913),
    o = n(818083),
    s = n(353926),
    l = n(894276);
function c(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
let u = null;
function d() {
    if (!(0, i.X6)()) return;
    let e = new Set(),
        t = (0, i.Md)();
    if (
        (l.o$.forEach((t) => {
            var n;
            (null == (n = t._discordExperiment) ? void 0 : n.getCurrentConfig({ location: 'default' }).enabled) && e.add(t.id);
        }),
        null === u || !(0, r.O)(u, e))
    ) {
        let n = Array.from(e);
        (t.flushToCache(n), (u = e));
    }
}
function f() {
    l.o$.forEach((e) => {
        let t = (0, o.B)({
            kind: 'user',
            id: e.id,
            label: 'libdiscore '.concat(e.feature, ' Migration'),
            defaultConfig: { enabled: !1 },
            treatments: [
                {
                    id: 0,
                    label: 'Control',
                    config: { enabled: !1 }
                },
                {
                    id: 1,
                    label: 'Use libdiscore '.concat(e.feature),
                    config: { enabled: !0 }
                }
            ]
        });
        e.setDiscordExperiment(t);
    });
}
class _ extends a.Z {
    _initialize() {
        (f(), d());
    }
    _terminate() {}
    constructor(...e) {
        (super(...e), c(this, 'actions', {}), c(this, 'stores', new Map().set(s.Z, d)));
    }
}
let p = new _();
