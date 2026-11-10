var r = n(839214),
    l = n(57570),
    i = n(46676),
    a = n(78564);
let o = [3, 6, 12],
    u = [10, 20, 40],
    s = new Map(),
    c = (0, r.D)(() => ({ byProject: {} })),
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
function p(t) {
    return c.getState().byProject[t] ?? null;
}
function f(t, e) {
    let n = p(t);
    if (null == n) return;
    let r = e(n);
    if (r === n) return;
    let { byProject: l } = c.getState();
    c.setState({ byProject: { ...l, [t]: r } });
}
function h(t) {
    return s.get(t)?.() ?? Promise.resolve(null);
}
function m(t) {
    if (null == p(t)) return;
    let { [t]: e, ...n } = c.getState().byProject;
    (c.setState({ byProject: n }), (0, l.mB)(t));
}
n.d(
    e,
    {},
    {
        C: h,
        Cw: u,
        It: m,
        K7: p,
        KZ: function (t, e) {
            (f(t, (t) => ({ ...t, markerSize: e, tool: "marker" })), (0, l.qX)(t));
        },
        My: function (t) {
            p(t)?.active === !1 ? m(t) : f(t, (t) => ({ ...t, history: i.vd, sketchDismissedFor: null }));
        },
        QP: function (t) {
            f(t, (t) => ({ ...t, chatFocusRequest: t.chatFocusRequest + 1 }));
        },
        Qq: function (t) {
            return "marker" === t.tool ? o[t.markerSize] : "eraser" === t.tool ? u[t.eraserSize] : null;
        },
        V9: function (t) {
            let e = p(t);
            if (null != e) {
                if (!(0, a.C)(e)) return void m(t);
                (e.active && f(t, (e) => ({ ...e, active: !1, keptStill: h(t) })), (0, l.mB)(t));
            }
        },
        Yx: function (t, e) {
            f(t, (t) => (t.colorId === e ? t : { ...t, colorId: e }));
        },
        _A: function (t, e) {
            (f(t, (t) => ({ ...t, eraserSize: e, tool: "eraser" })), (0, l.qX)(t));
        },
        bE: function (t) {
            return c.useState((e) => (null == t ? null : (e.byProject[t]?.chatFocusRequest ?? null)));
        },
        c$: function (t) {
            let e = p(t);
            if (null != e) {
                e.active || f(t, (t) => ({ ...t, active: !0, keptStill: null }));
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
            null != p(t) &&
                (f(t, (t) =>
                    t.tool === e ? t : { ...t, tool: e, lastShape: "circle" === e || "square" === e ? e : t.lastShape },
                ),
                "pick" === e ? (0, l.w4)(t) : (0, l.qX)(t));
        },
        tD: function (t, e) {
            f(t, (t) => {
                let n = (0, i.Vp)(t.history, e);
                return n === t.history ? t : { ...t, history: n };
            });
        },
        xU: function (t) {
            p(t)?.active === !1 ? m(t) : f(t, (t) => ({ ...t, sketchDismissedFor: t.history.present }));
        },
    },
);
