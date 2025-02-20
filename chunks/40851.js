n.d(t, {
    Aq: () => v,
    GB: () => m,
    J5: () => p,
    Su: () => _,
    UI: () => c,
    Wu: () => g,
    ZP: () => b,
    bp: () => E,
    g0: () => h
}),
    n(47120);
var r = n(200651),
    i = n(192379),
    o = n(585483),
    a = n(830917),
    s = n(919570),
    l = n(981631);
let c = new o.b(),
    u = i.createContext({
        appContext: l.IlC.APP,
        renderWindow: window,
        windowDispatch: c,
        windowId: (0, a.UU)()
    }),
    d = new Map();
function f(e, t) {
    let n = (0, a.ZY)(t),
        r = d.get(n);
    return (
        null == r &&
            ((r = {
                appContext: e,
                renderWindow: t,
                windowDispatch: new o.b(),
                windowId: n
            }),
            d.set(n, r),
            t.addEventListener('unload', () => {
                d.delete(n);
            })),
        r
    );
}
function p(e) {
    var t;
    let n = e.ownerDocument.defaultView;
    if (null == n) return;
    let r = (0, a.ZY)(n);
    return null === (t = d.get(r)) || void 0 === t ? void 0 : t.windowDispatch;
}
function _() {
    var e;
    let t = (0, s.GR)();
    return null == t ? null : null !== (e = d.get(t)) && void 0 !== e ? e : null;
}
function h(e) {
    return d.get(e);
}
function m() {
    let e = _();
    return null != e ? e.appContext : null;
}
function g(e) {
    let { appContext: t, renderWindow: n, children: i } = e,
        o = f(t, n);
    return (0, r.jsx)(u.Provider, {
        value: o,
        children: i
    });
}
function E() {
    return i.useContext(u).appContext;
}
function v() {
    return i.useContext(u).windowDispatch;
}
let b = u;
