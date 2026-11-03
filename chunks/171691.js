n.d(t, {
    C: () => g,
    Cw: () => u,
    It: () => x,
    K7: () => f,
    KZ: () => w,
    My: () => _,
    QP: () => C,
    Qq: () => v,
    V9: () => y,
    Yx: () => k,
    _A: () => j,
    bE: () => I,
    c$: () => p,
    ck: () => o,
    d5: () => M,
    fc: () => $,
    j5: () => m,
    lQ: () => D,
    rC: () => b,
    tD: () => S,
    xU: () => P,
});
var r = n(839214),
    l = n(57570),
    i = n(46676),
    a = n(78564);
let o = [3, 6, 12],
    u = [10, 20, 40],
    c = new Map(),
    s = (0, r.D)(() => ({ byProject: {} })),
    d = {
        active: !0,
        tool: "pick",
        lastShape: "circle",
        markerSize: 1,
        eraserSize: 1,
        colorId: "red",
        history: i.vd,
        sketchDismissedFor: null,
        chatFocusRequest: 0,
        keptStill: null,
    };
function f(e) {
    return s.getState().byProject[e] ?? null;
}
function h(e, t) {
    let n = f(e);
    if (null == n) return;
    let r = t(n);
    if (r === n) return;
    let { byProject: l } = s.getState();
    s.setState({ byProject: { ...l, [e]: r } });
}
function p(e) {
    let t = f(e);
    if (null != t) {
        t.active || h(e, (e) => ({ ...e, active: !0, keptStill: null }));
        return;
    }
    let { byProject: n } = s.getState();
    s.setState({ byProject: { ...n, [e]: d } });
}
function m(e, t) {
    null == t ? c.delete(e) : c.set(e, t);
}
function g(e) {
    return c.get(e)?.() ?? Promise.resolve(null);
}
function y(e) {
    let t = f(e);
    if (null != t) {
        if (!(0, a.C)(t)) return void x(e);
        (t.active && h(e, (t) => ({ ...t, active: !1, keptStill: g(e) })), (0, l.mB)(e));
    }
}
function x(e) {
    if (null == f(e)) return;
    let { [e]: t, ...n } = s.getState().byProject;
    (s.setState({ byProject: n }), (0, l.mB)(e));
}
function b(e, t) {
    null != f(e) &&
        (h(e, (e) =>
            e.tool === t ? e : { ...e, tool: t, lastShape: "circle" === t || "square" === t ? t : e.lastShape },
        ),
        "pick" === t ? (0, l.w4)(e) : (0, l.qX)(e));
}
function v(e) {
    return "marker" === e.tool ? o[e.markerSize] : "eraser" === e.tool ? u[e.eraserSize] : null;
}
function w(e, t) {
    (h(e, (e) => ({ ...e, markerSize: t, tool: "marker" })), (0, l.qX)(e));
}
function j(e, t) {
    (h(e, (e) => ({ ...e, eraserSize: t, tool: "eraser" })), (0, l.qX)(e));
}
function k(e, t) {
    h(e, (e) => (e.colorId === t ? e : { ...e, colorId: t }));
}
function S(e, t) {
    h(e, (e) => {
        let n = (0, i.Vp)(e.history, t);
        return n === e.history ? e : { ...e, history: n };
    });
}
function C(e) {
    h(e, (e) => ({ ...e, chatFocusRequest: e.chatFocusRequest + 1 }));
}
function P(e) {
    f(e)?.active === !1 ? x(e) : h(e, (e) => ({ ...e, sketchDismissedFor: e.history.present }));
}
function _(e) {
    f(e)?.active === !1 ? x(e) : h(e, (e) => ({ ...e, history: i.vd, sketchDismissedFor: null }));
}
function M(e) {
    return s.useState((t) => (null == e ? null : (t.byProject[e] ?? null)));
}
function I(e) {
    return s.useState((t) => (null == e ? null : (t.byProject[e]?.chatFocusRequest ?? null)));
}
function D(e) {
    return s.useState((t) => null != e && t.byProject[e]?.active === !0);
}
function $(e) {
    return s.useState((t) => {
        let n = null == e ? null : t.byProject[e];
        return null != n && (0, a.C)(n);
    });
}
