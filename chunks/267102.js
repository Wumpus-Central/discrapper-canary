n.d(t, {
    Ay: () => S,
    Iy: () => I,
    Us: () => T,
    Uw: () => c,
    Wr: () => p,
    _o: () => g,
    aL: () => m,
    mU: () => E,
    rH: () => h,
    wp: () => A,
    zd: () => f,
});
var i = n(477900),
    r = n(582128),
    a = n(621466),
    s = n(625494),
    l = n(365971),
    o = n(158368),
    d = n(652215);
let c = new s.H(),
    u = r.createContext({ appContext: d.BRT.APP, renderWindow: window, windowDispatch: c, windowId: (0, l.Xg)() }),
    _ = new Map();
function E(e) {
    let t = e.ownerDocument.defaultView;
    if (null == t) return;
    let n = (0, l.Q2)(t);
    return _.get(n)?.windowDispatch;
}
function A(e) {
    return (0, a.vq)(e?.target) ? (E(e.target) ?? null) : null;
}
function h() {
    let e = (0, o.Sf)();
    return null == e ? null : (_.get(e) ?? null);
}
function I(e) {
    return _.get(e);
}
function f() {
    let e = h();
    return null != e ? e.appContext : null;
}
function p(e) {
    let { appContext: t, renderWindow: n, children: a } = e,
        o = (function (e, t) {
            let [n, i] = r.useState((0, l.Q2)(t)),
                a = r.useMemo(() => new s.H(), []),
                o = r.useMemo(() => ({ appContext: e, renderWindow: t, windowDispatch: a, windowId: n }), [e, t, a, n]);
            return (
                r.useEffect(() => {
                    if (null != n) return;
                    let e = setInterval(() => {
                        let n = (0, l.Q2)(t);
                        null != n && (i(n), clearInterval(e));
                    }, 10);
                    return () => clearInterval(e);
                }, [t, n]),
                r.useEffect(() => {
                    function e() {
                        _.delete(n);
                    }
                    return _.set(n, o), t.addEventListener("unload", e), () => t.removeEventListener("unload", e);
                }, [o, t, n]),
                o
            );
        })(t, n);
    return (0, i.jsx)(u.Provider, { value: o, children: a });
}
function T() {
    return r.useContext(u).appContext;
}
function m() {
    return r.useContext(u).windowDispatch;
}
function g() {
    return r.useContext(u).renderWindow;
}
let S = u;
