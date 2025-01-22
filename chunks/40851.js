r.d(n, {
    Aq: function () {
        return b;
    },
    GB: function () {
        return E;
    },
    J5: function () {
        return _;
    },
    UI: function () {
        return d;
    },
    Wu: function () {
        return v;
    },
    bp: function () {
        return y;
    },
    g0: function () {
        return g;
    }
});
var i = r(47120);
var a = r(200651),
    o = r(192379),
    s = r(585483),
    l = r(830917),
    u = r(919570),
    c = r(981631);
let d = new s.b(),
    f = o.createContext({
        appContext: c.IlC.APP,
        renderWindow: window,
        windowDispatch: d,
        windowId: (0, l.UU)()
    }),
    p = new Map();
function h(e, n) {
    let r = (0, l.ZY)(n),
        i = p.get(r);
    return (
        null == i &&
            ((i = {
                appContext: e,
                renderWindow: n,
                windowDispatch: new s.b(),
                windowId: r
            }),
            p.set(r, i),
            n.addEventListener('unload', () => {
                p.delete(r);
            })),
        i
    );
}
function _(e) {
    var n;
    let r = e.ownerDocument.defaultView;
    if (null == r) return;
    let i = (0, l.ZY)(r);
    return null === (n = p.get(i)) || void 0 === n ? void 0 : n.windowDispatch;
}
function m() {
    var e;
    let n = (0, u.GR)();
    return null == n ? null : null !== (e = p.get(n)) && void 0 !== e ? e : null;
}
function g(e) {
    return p.get(e);
}
function E() {
    let e = m();
    return null != e ? e.appContext : null;
}
function v(e) {
    let { appContext: n, renderWindow: r, children: i } = e,
        o = h(n, r);
    return (0, a.jsx)(f.Provider, {
        value: o,
        children: i
    });
}
function y() {
    return o.useContext(f).appContext;
}
function b() {
    return o.useContext(f).windowDispatch;
}
n.ZP = f;
