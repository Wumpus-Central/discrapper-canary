"use strict";
n.d(t, {
    Ay: () => y,
    Iy: () => g,
    Us: () => I,
    Uw: () => c,
    Wr: () => A,
    aL: () => T,
    mU: () => p,
    rH: () => m,
    wp: () => h,
    zd: () => E,
});
var r = n(627968),
    i = n(64700),
    a = n(621466),
    s = n(203982),
    o = n(365971),
    l = n(158368),
    u = n(652215);
let c = new s.H(),
    d = i.createContext({ appContext: u.BRT.APP, renderWindow: window, windowDispatch: c, windowId: (0, o.Xg)() }),
    _ = new Map();
function f(e, t) {
    let [n, r] = i.useState((0, o.Q2)(t)),
        a = i.useMemo(() => new s.H(), []),
        l = i.useMemo(() => ({ appContext: e, renderWindow: t, windowDispatch: a, windowId: n }), [e, t, a, n]);
    return (
        i.useEffect(() => {
            if (null != n) return;
            let e = setInterval(() => {
                let n = (0, o.Q2)(t);
                null != n && (r(n), clearInterval(e));
            }, 10);
            return () => clearInterval(e);
        }, [t, n]),
        i.useEffect(() => {
            _.set(n, l);
            let e = () => {
                _.delete(n);
            };
            return t.addEventListener("unload", e), () => t.removeEventListener("unload", e);
        }, [l, t, n]),
        l
    );
}
function p(e) {
    let t = e.ownerDocument.defaultView;
    if (null == t) return;
    let n = (0, o.Q2)(t);
    return _.get(n)?.windowDispatch;
}
function h(e) {
    return (0, a.vq)(e?.target) ? (p(e.target) ?? null) : null;
}
function m() {
    let e = (0, l.Sf)();
    return null == e ? null : (_.get(e) ?? null);
}
function g(e) {
    return _.get(e);
}
function E() {
    let e = m();
    return null != e ? e.appContext : null;
}
function A(e) {
    let { appContext: t, renderWindow: n, children: i } = e,
        a = f(t, n);
    return (0, r.jsx)(d.Provider, { value: a, children: i });
}
function I() {
    return i.useContext(d).appContext;
}
function T() {
    return i.useContext(d).windowDispatch;
}
let y = d;
