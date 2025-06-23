n.d(t, {
    Jt: () => c,
    VG: () => d
}),
    n(388685),
    n(415506);
var r = n(308521),
    i = n(97519),
    a = n(570833),
    o = n(493773);
function s(e, t, n) {
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
function l(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
    }
    return n;
}
var c = (function (e) {
    return (e.Loading = 'loading'), (e.Loaded = 'loaded'), e;
})({});
let u = (0, i.U)(() => ({
    riveAssetCache: new Map(),
    riveOverrideCache: {}
}));
function d(e) {
    let t = f(e),
        n = null != t ? t : e,
        i = u((e) => e.riveAssetCache.get(n));
    return (
        (0, o.ZP)(() => {
            if (u.getState().riveAssetCache.has(n)) return;
            let e = new r.RiveFile({ src: n }),
                t = () => {
                    e.init(),
                        e.on(r.EventType.Load, () => {
                            let t = {
                                status: 'loaded',
                                buffer: e.buffer
                            };
                            u.setState((e) => ({ riveAssetCache: e.riveAssetCache.set(n, t) }));
                        }),
                        e.on(r.EventType.LoadError, (e) => {
                            console.error('Rive file load error', n, e);
                        });
                };
            (0, a.f)(t);
        }),
        null != i
            ? i
            : {
                  status: 'loading',
                  buffer: null
              }
    );
}
function f(e) {
    return u((e) => e.riveOverrideCache)[e];
}
