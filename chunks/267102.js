n.d(t, {
    Ay: () => C,
    Iy: () => I,
    Us: () => g,
    Uw: () => u,
    Wr: () => m,
    _o: () => N,
    aL: () => S,
    g5: () => T,
    mU: () => A,
    rH: () => f,
    wp: () => h,
    zd: () => p,
});
var i = n(477900),
    r = n(582128),
    a = n(621466),
    s = n(531685),
    l = n(625494),
    o = n(365971),
    d = n(158368),
    c = n(652215);
let u = new l.H(),
    _ = r.createContext({ appContext: c.BRT.APP, renderWindow: window, windowDispatch: u, windowId: (0, o.Xg)() }),
    E = new Map();
function A(e) {
    let t = e.ownerDocument.defaultView;
    if (null == t) return;
    let n = (0, o.Q2)(t);
    return E.get(n)?.windowDispatch;
}
function h(e) {
    return (0, a.vq)(e?.target) ? (A(e.target) ?? null) : null;
}
function f() {
    let e = (0, d.Sf)();
    return null == e ? null : (E.get(e) ?? null);
}
function I(e) {
    return E.get(e);
}
function p() {
    let e = f();
    return null != e ? e.appContext : null;
}
function T() {
    let e = s.A.getFocusedWindowId() ?? s.A.getLastFocusedWindowId();
    return null == e ? null : (E.get(e) ?? null);
}
function m(e) {
    let { appContext: t, renderWindow: n, children: a } = e,
        s = (function (e, t) {
            let [n, i] = r.useState((0, o.Q2)(t)),
                a = r.useMemo(() => new l.H(), []),
                s = r.useMemo(() => ({ appContext: e, renderWindow: t, windowDispatch: a, windowId: n }), [e, t, a, n]);
            return (
                r.useEffect(() => {
                    if (null != n) return;
                    let e = setInterval(() => {
                        let n = (0, o.Q2)(t);
                        null != n && (i(n), clearInterval(e));
                    }, 10);
                    return () => clearInterval(e);
                }, [t, n]),
                r.useEffect(() => {
                    function e() {
                        E.delete(n);
                    }
                    return (E.set(n, s), t.addEventListener("unload", e), () => t.removeEventListener("unload", e));
                }, [s, t, n]),
                s
            );
        })(t, n);
    return (0, i.jsx)(_.Provider, { value: s, children: a });
}
function g() {
    return r.useContext(_).appContext;
}
function S() {
    return r.useContext(_).windowDispatch;
}
function N() {
    return r.useContext(_).renderWindow;
}
let C = _;
