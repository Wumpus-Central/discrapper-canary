n.d(t, {
    Aq: () => v,
    GB: () => m,
    J5: () => _,
    Su: () => p,
    UI: () => u,
    Wu: () => g,
    ZP: () => y,
    bp: () => E,
    g0: () => h
}),
    n(47120);
var i = n(200651),
    r = n(192379),
    a = n(585483),
    s = n(830917),
    o = n(919570),
    l = n(981631);
let u = new a.b(),
    c = r.createContext({
        appContext: l.IlC.APP,
        renderWindow: window,
        windowDispatch: u,
        windowId: (0, s.UU)()
    }),
    d = new Map();
function f(e, t) {
    let n = (0, s.ZY)(t),
        i = d.get(n);
    return (
        null == i &&
            ((i = {
                appContext: e,
                renderWindow: t,
                windowDispatch: new a.b(),
                windowId: n
            }),
            d.set(n, i),
            t.addEventListener('unload', () => {
                d.delete(n);
            })),
        i
    );
}
function _(e) {
    var t;
    let n = e.ownerDocument.defaultView;
    if (null == n) return;
    let i = (0, s.ZY)(n);
    return null === (t = d.get(i)) || void 0 === t ? void 0 : t.windowDispatch;
}
function p() {
    var e;
    let t = (0, o.GR)();
    return null == t ? null : null !== (e = d.get(t)) && void 0 !== e ? e : null;
}
function h(e) {
    return d.get(e);
}
function m() {
    let e = p();
    return null != e ? e.appContext : null;
}
function g(e) {
    let { appContext: t, renderWindow: n, children: r } = e,
        a = f(t, n);
    return (0, i.jsx)(c.Provider, {
        value: a,
        children: r
    });
}
function E() {
    return r.useContext(c).appContext;
}
function v() {
    return r.useContext(c).windowDispatch;
}
let y = c;
