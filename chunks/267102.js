"use strict";
n.d(t, {
    Ay: () => T,
    Iy: () => E,
    Us: () => A,
    Uw: () => c,
    Wr: () => g,
    aL: () => I,
    mU: () => f,
    rH: () => p,
    wp: () => h,
    zd: () => m,
});
var i = n(627968),
    r = n(64700),
    s = n(621466),
    a = n(625494),
    o = n(365971),
    l = n(158368),
    u = n(652215);
let c = new a.H(),
    d = r.createContext({ appContext: u.BRT.APP, renderWindow: window, windowDispatch: c, windowId: (0, o.Xg)() }),
    _ = new Map();
function f(e) {
    let t = e.ownerDocument.defaultView;
    if (null == t) return;
    let n = (0, o.Q2)(t);
    return _.get(n)?.windowDispatch;
}
function h(e) {
    return (0, s.vq)(e?.target) ? (f(e.target) ?? null) : null;
}
function p() {
    let e = (0, l.Sf)();
    return null == e ? null : (_.get(e) ?? null);
}
function E(e) {
    return _.get(e);
}
function m() {
    let e = p();
    return null != e ? e.appContext : null;
}
function g(e) {
    let { appContext: t, renderWindow: n, children: s } = e,
        l = (function (e, t) {
            let [n, i] = r.useState((0, o.Q2)(t)),
                s = r.useMemo(() => new a.H(), []),
                l = r.useMemo(() => ({ appContext: e, renderWindow: t, windowDispatch: s, windowId: n }), [e, t, s, n]);
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
                    _.set(n, l);
                    let e = () => {
                        _.delete(n);
                    };
                    return t.addEventListener("unload", e), () => t.removeEventListener("unload", e);
                }, [l, t, n]),
                l
            );
        })(t, n);
    return (0, i.jsx)(d.Provider, { value: l, children: s });
}
function A() {
    return r.useContext(d).appContext;
}
function I() {
    return r.useContext(d).windowDispatch;
}
let T = d;
