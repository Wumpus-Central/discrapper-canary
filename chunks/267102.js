n.d(t, {
    Ay: () => p,
    Iy: () => T,
    Us: () => N,
    Uw: () => c,
    Wr: () => S,
    aL: () => f,
    mU: () => u,
    rH: () => I,
    wp: () => A,
    zd: () => h,
});
var i = n(627968),
    a = n(64700),
    r = n(621466),
    s = n(625494),
    l = n(365971),
    o = n(158368),
    d = n(652215);
let c = new s.H(),
    _ = a.createContext({ appContext: d.BRT.APP, renderWindow: window, windowDispatch: c, windowId: (0, l.Xg)() }),
    E = new Map();
function u(e) {
    let t = e.ownerDocument.defaultView;
    if (null == t) return;
    let n = (0, l.Q2)(t);
    return E.get(n)?.windowDispatch;
}
function A(e) {
    return (0, r.vq)(e?.target) ? (u(e.target) ?? null) : null;
}
function I() {
    let e = (0, o.Sf)();
    return null == e ? null : (E.get(e) ?? null);
}
function T(e) {
    return E.get(e);
}
function h() {
    let e = I();
    return null != e ? e.appContext : null;
}
function S(e) {
    let { appContext: t, renderWindow: n, children: r } = e,
        o = (function (e, t) {
            let [n, i] = a.useState((0, l.Q2)(t)),
                r = a.useMemo(() => new s.H(), []),
                o = a.useMemo(() => ({ appContext: e, renderWindow: t, windowDispatch: r, windowId: n }), [e, t, r, n]);
            return (
                a.useEffect(() => {
                    if (null != n) return;
                    let e = setInterval(() => {
                        let n = (0, l.Q2)(t);
                        null != n && (i(n), clearInterval(e));
                    }, 10);
                    return () => clearInterval(e);
                }, [t, n]),
                a.useEffect(() => {
                    E.set(n, o);
                    let e = () => {
                        E.delete(n);
                    };
                    return t.addEventListener("unload", e), () => t.removeEventListener("unload", e);
                }, [o, t, n]),
                o
            );
        })(t, n);
    return (0, i.jsx)(_.Provider, { value: o, children: r });
}
function N() {
    return a.useContext(_).appContext;
}
function f() {
    return a.useContext(_).windowDispatch;
}
let p = _;
