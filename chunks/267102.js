n.d(t, {
    Ay: () => f,
    Iy: () => T,
    Us: () => O,
    Uw: () => E,
    Wr: () => N,
    aL: () => R,
    mU: () => u,
    rH: () => A,
    wp: () => I,
    zd: () => S,
});
var i = n(627968),
    r = n(64700),
    a = n(621466),
    s = n(625494),
    _ = n(365971),
    l = n(158368),
    o = n(652215);
let E = new s.H(),
    d = r.createContext({ appContext: o.BRT.APP, renderWindow: window, windowDispatch: E, windowId: (0, _.Xg)() }),
    c = new Map();
function u(e) {
    let t = e.ownerDocument.defaultView;
    if (null == t) return;
    let n = (0, _.Q2)(t);
    return c.get(n)?.windowDispatch;
}
function I(e) {
    return (0, a.vq)(e?.target) ? (u(e.target) ?? null) : null;
}
function A() {
    let e = (0, l.Sf)();
    return null == e ? null : (c.get(e) ?? null);
}
function T(e) {
    return c.get(e);
}
function S() {
    let e = A();
    return null != e ? e.appContext : null;
}
function N(e) {
    let { appContext: t, renderWindow: n, children: a } = e,
        l = (function (e, t) {
            let [n, i] = r.useState((0, _.Q2)(t)),
                a = r.useMemo(() => new s.H(), []),
                l = r.useMemo(() => ({ appContext: e, renderWindow: t, windowDispatch: a, windowId: n }), [e, t, a, n]);
            return (
                r.useEffect(() => {
                    if (null != n) return;
                    let e = setInterval(() => {
                        let n = (0, _.Q2)(t);
                        null != n && (i(n), clearInterval(e));
                    }, 10);
                    return () => clearInterval(e);
                }, [t, n]),
                r.useEffect(() => {
                    c.set(n, l);
                    let e = () => {
                        c.delete(n);
                    };
                    return t.addEventListener("unload", e), () => t.removeEventListener("unload", e);
                }, [l, t, n]),
                l
            );
        })(t, n);
    return (0, i.jsx)(d.Provider, { value: l, children: a });
}
function O() {
    return r.useContext(d).appContext;
}
function R() {
    return r.useContext(d).windowDispatch;
}
let f = d;
