n.d(t, {
    AN: () => h,
    Aq: () => v,
    GB: () => E,
    J5: () => p,
    Su: () => m,
    UI: () => u,
    Wu: () => b,
    ZP: () => O,
    bp: () => y,
    g0: () => g
}),
    n(47120);
var r = n(200651),
    i = n(192379),
    o = n(374470),
    a = n(585483),
    s = n(830917),
    l = n(919570),
    c = n(981631);
let u = new a.b(),
    d = i.createContext({
        appContext: c.IlC.APP,
        renderWindow: window,
        windowDispatch: u,
        windowId: (0, s.UU)()
    }),
    f = new Map();
function _(e, t) {
    let [n, r] = i.useState((0, s.ZY)(t)),
        o = i.useMemo(() => new a.b(), []),
        l = i.useMemo(
            () => ({
                appContext: e,
                renderWindow: t,
                windowDispatch: o,
                windowId: n
            }),
            [e, t, o, n]
        );
    return (
        i.useEffect(() => {
            if (null != n) return;
            let e = setInterval(() => {
                let n = (0, s.ZY)(t);
                null != n && (r(n), clearInterval(e));
            }, 10);
            return () => clearInterval(e);
        }, [t, n]),
        i.useEffect(() => {
            f.set(n, l);
            let e = () => {
                f.delete(n);
            };
            return t.addEventListener('unload', e), () => t.removeEventListener('unload', e);
        }, [l, t, n]),
        l
    );
}
function p(e) {
    var t;
    let n = e.ownerDocument.defaultView;
    if (null == n) return;
    let r = (0, s.ZY)(n);
    return null == (t = f.get(r)) ? void 0 : t.windowDispatch;
}
function h(e) {
    var t;
    return (0, o.k)(null == e ? void 0 : e.target) && null != (t = p(e.target)) ? t : null;
}
function m() {
    var e;
    let t = (0, l.GR)();
    return null == t ? null : null != (e = f.get(t)) ? e : null;
}
function g(e) {
    return f.get(e);
}
function E() {
    let e = m();
    return null != e ? e.appContext : null;
}
function b(e) {
    let { appContext: t, renderWindow: n, children: i } = e,
        o = _(t, n);
    return (0, r.jsx)(d.Provider, {
        value: o,
        children: i
    });
}
function y() {
    return i.useContext(d).appContext;
}
function v() {
    return i.useContext(d).windowDispatch;
}
let O = d;
