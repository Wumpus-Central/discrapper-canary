n.d(t, {
    C: () => g,
    Cw: () => u,
    It: () => y,
    K7: () => f,
    KZ: () => v,
    My: () => A,
    QP: () => S,
    Qq: () => b,
    V9: () => x,
    Yx: () => w,
    _A: () => j,
    bE: () => M,
    c$: () => m,
    ck: () => s,
    d5: () => P,
    fc: () => N,
    j5: () => p,
    lQ: () => I,
    rC: () => k,
    tD: () => _,
    xU: () => C,
});
var l = n(839214),
    r = n(57570),
    a = n(46676),
    i = n(78564);
let s = [3, 6, 12],
    u = [10, 20, 40],
    o = new Map(),
    c = (0, l.D)(() => ({ byProject: {} })),
    d = {
        active: !0,
        tool: "pick",
        lastShape: "circle",
        markerSize: 1,
        eraserSize: 1,
        colorId: "red",
        history: a.vd,
        sketchDismissedFor: null,
        chatFocusRequest: 0,
        keptStill: null,
    };
function f(e) {
    return c.getState().byProject[e] ?? null;
}
function h(e, t) {
    let n = f(e);
    if (null == n) return;
    let l = t(n);
    if (l === n) return;
    let { byProject: r } = c.getState();
    c.setState({ byProject: { ...r, [e]: l } });
}
function m(e) {
    let t = f(e);
    if (null != t) {
        t.active || h(e, (e) => ({ ...e, active: !0, keptStill: null }));
        return;
    }
    let { byProject: n } = c.getState();
    c.setState({ byProject: { ...n, [e]: d } });
}
function p(e, t) {
    null == t ? o.delete(e) : o.set(e, t);
}
function g(e) {
    return o.get(e)?.() ?? Promise.resolve(null);
}
function x(e) {
    let t = f(e);
    if (null != t) {
        if (!(0, i.C)(t)) return void y(e);
        (t.active && h(e, (t) => ({ ...t, active: !1, keptStill: g(e) })), (0, r.mB)(e));
    }
}
function y(e) {
    if (null == f(e)) return;
    let { [e]: t, ...n } = c.getState().byProject;
    (c.setState({ byProject: n }), (0, r.mB)(e));
}
function k(e, t) {
    null != f(e) &&
        (h(e, (e) =>
            e.tool === t ? e : { ...e, tool: t, lastShape: "circle" === t || "square" === t ? t : e.lastShape },
        ),
        "pick" === t ? (0, r.w4)(e) : (0, r.qX)(e));
}
function b(e) {
    return "marker" === e.tool ? s[e.markerSize] : "eraser" === e.tool ? u[e.eraserSize] : null;
}
function v(e, t) {
    (h(e, (e) => ({ ...e, markerSize: t, tool: "marker" })), (0, r.qX)(e));
}
function j(e, t) {
    (h(e, (e) => ({ ...e, eraserSize: t, tool: "eraser" })), (0, r.qX)(e));
}
function w(e, t) {
    h(e, (e) => (e.colorId === t ? e : { ...e, colorId: t }));
}
function _(e, t) {
    h(e, (e) => {
        let n = (0, a.Vp)(e.history, t);
        return n === e.history ? e : { ...e, history: n };
    });
}
function S(e) {
    h(e, (e) => ({ ...e, chatFocusRequest: e.chatFocusRequest + 1 }));
}
function C(e) {
    f(e)?.active === !1 ? y(e) : h(e, (e) => ({ ...e, sketchDismissedFor: e.history.present }));
}
function A(e) {
    f(e)?.active === !1 ? y(e) : h(e, (e) => ({ ...e, history: a.vd, sketchDismissedFor: null }));
}
function P(e) {
    return c.useState((t) => (null == e ? null : (t.byProject[e] ?? null)));
}
function M(e) {
    return c.useState((t) => (null == e ? null : (t.byProject[e]?.chatFocusRequest ?? null)));
}
function I(e) {
    return c.useState((t) => null != e && t.byProject[e]?.active === !0);
}
function N(e) {
    return c.useState((t) => {
        let n = null == e ? null : t.byProject[e];
        return null != n && (0, i.C)(n);
    });
}
