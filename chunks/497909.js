n.d(t, { Z: () => p }), n(388685);
var r = n(668757),
    i = n(147913),
    o = n(818083),
    a = n(353926),
    s = n(894276);
function l(e, t, n) {
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
let c = null;
function u(e, t) {
    if (e.size !== t.size) return !1;
    for (let n of e) if (!t.has(n)) return !1;
    return !0;
}
function d() {
    if (!(0, r.X6)()) return;
    let e = new Set(),
        t = (0, r.Md)();
    if (
        (s.o.forEach((t) => {
            var n;
            (null == (n = t._discordExperiment) ? void 0 : n.getCurrentConfig({ location: 'default' }).enabled) && e.add(t.id);
        }),
        null === c || !u(c, e))
    ) {
        let n = Array.from(e);
        t.flushToCache(n), (c = e);
    }
}
function f() {
    s.o.forEach((e) => {
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
class _ extends i.Z {
    _initialize() {
        f(), d();
    }
    _terminate() {}
    constructor(...e) {
        super(...e), l(this, 'actions', {}), l(this, 'stores', new Map().set(a.Z, d));
    }
}
let p = new _();
