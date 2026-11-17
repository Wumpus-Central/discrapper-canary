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
function f(t) {
    return c.getState().byProject[t] ?? null;
}
function p(t, e) {
    let n = f(t);
    if (null == n) return;
    let l = e(n);
    if (l === n) return;
    let { byProject: r } = c.getState();
    c.setState({ byProject: { ...r, [t]: l } });
}
function h(t) {
    return s.get(t)?.() ?? Promise.resolve(null);
}
function g(t) {
    if (null == f(t)) return;
    let { [t]: e, ...n } = c.getState().byProject;
    (c.setState({ byProject: n }), (0, r.mB)(t));
}
n.d(
    e,
    {},
    {
        C: h,
        Cw: u,
        It: g,
        K7: f,
        KZ: function (t, e) {
            (p(t, (t) => ({ ...t, markerSize: e, tool: "marker" })), (0, r.qX)(t));
        },
        My: function (t) {
            f(t)?.active === !1 ? g(t) : p(t, (t) => ({ ...t, history: i.vd, sketchDismissedFor: null }));
        },
        QP: function (t) {
            p(t, (t) => ({ ...t, chatFocusRequest: t.chatFocusRequest + 1 }));
        },
        Qq: function (t) {
            return "marker" === t.tool ? o[t.markerSize] : "eraser" === t.tool ? u[t.eraserSize] : null;
        },
        V9: function (t) {
            let e = f(t);
            if (null != e) {
                if (!(0, a.C)(e)) return void g(t);
                (e.active && p(t, (e) => ({ ...e, active: !1, keptStill: h(t) })), (0, r.mB)(t));
            }
        },
        Yx: function (t, e) {
            p(t, (t) => (t.colorId === e ? t : { ...t, colorId: e }));
        },
        _A: function (t, e) {
            (p(t, (t) => ({ ...t, eraserSize: e, tool: "eraser" })), (0, r.qX)(t));
        },
        bE: function (t) {
            return c.useState((e) => (null == t ? null : (e.byProject[t]?.chatFocusRequest ?? null)));
        },
        c$: function (t) {
            let e = f(t);
            if (null != e) {
                e.active || p(t, (t) => ({ ...t, active: !0, keptStill: null }));
                return;
            }
            let { byProject: n } = c.getState();
            c.setState({ byProject: { ...n, [t]: d } });
        },
        ck: o,
        d5: function (t) {
            return c.useState((e) => (null == t ? null : (e.byProject[t] ?? null)));
        },
        fc: function (t) {
            return c.useState((e) => {
                let n = null == t ? null : e.byProject[t];
                return null != n && (0, a.C)(n);
            });
        },
        j5: function (t, e) {
            null == e ? s.delete(t) : s.set(t, e);
        },
        lQ: function (t) {
            return c.useState((e) => null != t && e.byProject[t]?.active === !0);
        },
        rC: function (t, e) {
            null != f(t) &&
                (p(t, (t) =>
                    t.tool === e ? t : { ...t, tool: e, lastShape: "circle" === e || "square" === e ? e : t.lastShape },
                ),
                "pick" === e ? (0, r.w4)(t) : (0, r.qX)(t));
        },
        tD: function (t, e) {
            p(t, (t) => {
                let n = (0, i.Vp)(t.history, e);
                return n === t.history ? t : { ...t, history: n };
            });
        },
        xU: function (t) {
            f(t)?.active === !1 ? g(t) : p(t, (t) => ({ ...t, sketchDismissedFor: t.history.present }));
        },
    },
);
