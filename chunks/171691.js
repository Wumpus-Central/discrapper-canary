var l = n(839214),
    r = n(57570),
    i = n(46676),
    a = n(78564);
let o = [3, 6, 12],
    u = [10, 20, 40],
    s = new Map(),
    c = (0, l.D)(() => ({ byProject: {} })),
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
    return c.getState().byProject[e] ?? null;
}
function p(e, t) {
    let n = f(e);
    if (null == n) return;
    let l = t(n);
    if (l === n) return;
    let { byProject: r } = c.getState();
    c.setState({ byProject: { ...r, [e]: l } });
}
function h(e) {
    return s.get(e)?.() ?? Promise.resolve(null);
}
function g(e) {
    if (null == f(e)) return;
    let { [e]: t, ...n } = c.getState().byProject;
    (c.setState({ byProject: n }), (0, r.mB)(e));
}
n.d(
    t,
    {},
    {
        C: h,
        Cw: u,
        It: g,
        K7: f,
        KZ: function (e, t) {
            (p(e, (e) => ({ ...e, markerSize: t, tool: "marker" })), (0, r.qX)(e));
        },
        My: function (e) {
            f(e)?.active === !1 ? g(e) : p(e, (e) => ({ ...e, history: i.vd, sketchDismissedFor: null }));
        },
        QP: function (e) {
            p(e, (e) => ({ ...e, chatFocusRequest: e.chatFocusRequest + 1 }));
        },
        Qq: function (e) {
            return "marker" === e.tool ? o[e.markerSize] : "eraser" === e.tool ? u[e.eraserSize] : null;
        },
        V9: function (e) {
            let t = f(e);
            if (null != t) {
                if (!(0, a.C)(t)) return void g(e);
                (t.active && p(e, (t) => ({ ...t, active: !1, keptStill: h(e) })), (0, r.mB)(e));
            }
        },
        Yx: function (e, t) {
            p(e, (e) => (e.colorId === t ? e : { ...e, colorId: t }));
        },
        _A: function (e, t) {
            (p(e, (e) => ({ ...e, eraserSize: t, tool: "eraser" })), (0, r.qX)(e));
        },
        bE: function (e) {
            return c.useState((t) => (null == e ? null : (t.byProject[e]?.chatFocusRequest ?? null)));
        },
        c$: function (e) {
            let t = f(e);
            if (null != t) {
                t.active || p(e, (e) => ({ ...e, active: !0, keptStill: null }));
                return;
            }
            let { byProject: n } = c.getState();
            c.setState({ byProject: { ...n, [e]: d } });
        },
        ck: o,
        d5: function (e) {
            return c.useState((t) => (null == e ? null : (t.byProject[e] ?? null)));
        },
        fc: function (e) {
            return c.useState((t) => {
                let n = null == e ? null : t.byProject[e];
                return null != n && (0, a.C)(n);
            });
        },
        j5: function (e, t) {
            null == t ? s.delete(e) : s.set(e, t);
        },
        lQ: function (e) {
            return c.useState((t) => null != e && t.byProject[e]?.active === !0);
        },
        rC: function (e, t) {
            null != f(e) &&
                (p(e, (e) =>
                    e.tool === t ? e : { ...e, tool: t, lastShape: "circle" === t || "square" === t ? t : e.lastShape },
                ),
                "pick" === t ? (0, r.w4)(e) : (0, r.qX)(e));
        },
        tD: function (e, t) {
            p(e, (e) => {
                let n = (0, i.Vp)(e.history, t);
                return n === e.history ? e : { ...e, history: n };
            });
        },
        xU: function (e) {
            f(e)?.active === !1 ? g(e) : p(e, (e) => ({ ...e, sketchDismissedFor: e.history.present }));
        },
    },
);
