"use strict";
let i;
n.d(t, { DS: () => f, CE: () => _, m2: () => p, BW: () => c, Gy: () => h });
var r,
    s = n(64700),
    a = n(647307);
let o = (e) => {
        let t,
            n = new Set(),
            i = (e, i) => {
                let r = "function" == typeof e ? e(t) : e;
                if (!Object.is(r, t)) {
                    let e = t;
                    (t = (null != i ? i : "object" != typeof r || null === r) ? r : Object.assign({}, t, r)),
                        n.forEach((n) => n(t, e));
                }
            },
            r = () => t,
            s = { setState: i, getState: r, getInitialState: () => a, subscribe: (e) => (n.add(e), () => n.delete(e)) },
            a = (t = e(i, r, s));
        return s;
    },
    l = (e) => {
        let t = e ? o(e) : o,
            n = (e) =>
                (function (e, t = (e) => e) {
                    let n = s.useSyncExternalStore(
                        e.subscribe,
                        () => t(e.getState()),
                        () => t(e.getInitialState()),
                    );
                    return s.useDebugValue(n), n;
                })(t, e);
        return Object.assign(n, t), n;
    };
var u = n(167789),
    c = (((r = {}).Loading = "loading"), (r.Loaded = "loaded"), r);
let d = (i = () => ({ riveAssetCache: new Map(), riveOverrideCache: {} })) ? l(i) : l;
function _(e) {
    let t = e instanceof ArrayBuffer ? e.byteLength.toString() : e?.toString(),
        n = "object" == typeof e && e instanceof ArrayBuffer,
        i = h(t),
        r = d((e) => (null == t ? null : e.riveAssetCache.get(t)));
    return ((0, s.useEffect)(() => {
        if (null == t || null != i || n || d.getState().riveAssetCache.has(t)) return;
        let e = new a.RiveFile({ src: t });
        (0, u.O)(() => {
            e.init(),
                e.on(a.EventType.Load, () => {
                    let n = { status: "loaded", buffer: e.buffer };
                    d.setState((e) => ({ riveAssetCache: e.riveAssetCache.set(t, n) }));
                }),
                e.on(a.EventType.LoadError, (e) => {
                    console.error("Rive file load error", t, e);
                });
        });
    }, [t, i, n]),
    null != i)
        ? { status: "loaded", buffer: i }
        : n
          ? { status: "loaded", buffer: e }
          : (r ?? { status: "loading", buffer: null });
}
function f(e, t) {
    let n = d.getState().riveOverrideCache;
    d.setState({ riveOverrideCache: { ...n, [e]: t } });
}
function h(e) {
    let t = d((e) => e.riveOverrideCache);
    return null == e ? null : t[e];
}
function p(e) {
    return null != d((e) => e.riveOverrideCache)[e];
}
