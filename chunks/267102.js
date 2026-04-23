"use strict";
n.d(t, {
    Ay: () => T,
    Iy: () => E,
    Us: () => A,
    Uw: () => c,
    Wr: () => g,
    aL: () => I,
    mU: () => f,
    rH: () => h,
    wp: () => p,
    zd: () => m,
});
var r = n(627968),
    i = n(64700),
    s = n(621466),
    a = n(203982),
    o = n(365971),
    l = n(158368),
    u = n(652215);
let c = new a.H(),
    d = i.createContext({ appContext: u.BRT.APP, renderWindow: window, windowDispatch: c, windowId: (0, o.Xg)() }),
    _ = new Map();
function f(e) {
    let t = e.ownerDocument.defaultView;
    if (null == t) return;
    let n = (0, o.Q2)(t);
    return _.get(n)?.windowDispatch;
}
function p(e) {
    return (0, s.vq)(e?.target) ? (f(e.target) ?? null) : null;
}
function h() {
    let e = (0, l.Sf)();
    return null == e ? null : (_.get(e) ?? null);
}
function E(e) {
    return _.get(e);
}
function m() {
    let e = h();
    return null != e ? e.appContext : null;
}
function g(e) {
    let { appContext: t, renderWindow: n, children: s } = e,
        l = (function (e, t) {
            let [n, r] = i.useState((0, o.Q2)(t)),
                s = i.useMemo(() => new a.H(), []),
                l = i.useMemo(() => ({ appContext: e, renderWindow: t, windowDispatch: s, windowId: n }), [e, t, s, n]);
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
        })(t, n);
    return (0, r.jsx)(d.Provider, { value: l, children: s });
}
function A() {
    return i.useContext(d).appContext;
}
function I() {
    return i.useContext(d).windowDispatch;
}
let T = d;
