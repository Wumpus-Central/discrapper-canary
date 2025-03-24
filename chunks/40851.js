n.d(t, {
    AN: () => h,
    Aq: () => y,
    GB: () => E,
    J5: () => p,
    Su: () => m,
    UI: () => u,
    Wu: () => b,
    ZP: () => O,
    bp: () => v,
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
    let n = (0, s.ZY)(t),
        r = f.get(n);
    return (
        null == r &&
            ((r = {
                appContext: e,
                renderWindow: t,
                windowDispatch: new a.b(),
                windowId: n
            }),
            f.set(n, r),
            t.addEventListener('unload', () => {
                f.delete(n);
            })),
        r
    );
}
function p(e) {
    var t;
    let n = e.ownerDocument.defaultView;
    if (null == n) return;
    let r = (0, s.ZY)(n);
    return null === (t = f.get(r)) || void 0 === t ? void 0 : t.windowDispatch;
}
function h(e) {
    var t;
    return (0, o.k)(null == e ? void 0 : e.target) && null !== (t = p(e.target)) && void 0 !== t ? t : null;
}
function m() {
    var e;
    let t = (0, l.GR)();
    return null == t ? null : null !== (e = f.get(t)) && void 0 !== e ? e : null;
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
function v() {
    return i.useContext(d).appContext;
}
function y() {
    return i.useContext(d).windowDispatch;
}
let O = d;
