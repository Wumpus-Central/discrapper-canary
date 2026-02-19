"use strict";
n.d(t, { Ay: () => E, g4: () => b, qv: () => I });
var i = n(627968),
    s = n(64700),
    l = n(503698),
    r = n.n(l),
    a = n(284009),
    o = n.n(a),
    c = n(522437),
    d = n(686956),
    u = n(954571),
    h = n(263715),
    A = n(550591),
    p = n(652215),
    g = n(985018),
    m = n(581277);
function _(e) {
    let t = s.useRef(null),
        n = e.map((e) => e[0]);
    return (
        s.useLayoutEffect(() => {
            let n = requestAnimationFrame(() => {
                let n = t.current;
                if (null != n) for (let [t, i] of e) t ? n.classList.add(i) : n.classList.remove(i);
            });
            return () => cancelAnimationFrame(n);
        }, n),
        t
    );
}
function f(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        i = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
    return (
        o()(t.type !== h.PJ.ROOT, "[GuildDropTarget] Tried using a root node as a drop target."),
        {
            accept: e,
            canDrop: (e) =>
                e.nodeId !== t.id &&
                (!i || e.type !== h.PJ.FOLDER || t.type !== h.PJ.FOLDER) &&
                (e.type !== h.PJ.FOLDER || null == t.parentId),
            drop(e) {
                let { nodeId: s } = e;
                i && t.type !== h.PJ.FOLDER && u.default.track(p.HAw.GUILD_FOLDER_CREATED), d.A.moveById(s, t.id, n, i);
            },
            collect: (e) => ({ canDrop: e.canDrop(), isOver: e.isOver() }),
        }
    );
}
function x(e) {
    let { name: t, targetNode: n, combine: l, below: r } = e,
        a = s.useMemo(() => f([h.PJ.GUILD, h.PJ.FOLDER], n, r, l), [n, r, l]),
        [{ canDrop: o, isOver: d }, u] = (0, c.H)(a),
        A = _([
            [o, m.OP],
            [d, m.NQ],
        ]);
    return (0, i.jsx)("div", {
        ref: (e) => {
            (A.current = e), u(e);
        },
        "data-dnd-name": g.intl.formatToPlainString(g.t["A5aDw+"], { itemName: t }),
        className: m.aC,
    });
}
function C(e) {
    let { name: t, targetNode: n, onDragOverChanged: l } = e,
        [{ canDrop: a, isOver: o }, d] = (0, c.H)(() => f([h.PJ.GUILD], n, !0, !0));
    s.useEffect(() => {
        l?.(o);
    }, [l, o]);
    let u = _([
        [a, m.OP],
        [o, m.NQ],
    ]);
    return (0, i.jsx)(A.A, {
        text: t,
        shouldShow: o,
        forceOpen: o,
        disableWrapper: !0,
        children: (0, i.jsx)("div", {
            ref: (e) => {
                (u.current = e), d(e);
            },
            "data-dnd-name": g.intl.formatToPlainString(g.t.qiQ0QI, { itemName: t }),
            className: r()(m.dw, {}),
        }),
    });
}
let E = s.memo(function (e) {
    let { name: t, targetNode: n, noCombine: s = !1, below: l = !1, onDragOverChanged: r } = e,
        a = !s && null == n.parentId;
    return (0, i.jsxs)("div", {
        className: m.iE,
        "aria-hidden": !0,
        children: [
            (0, i.jsx)(x, { name: t, targetNode: n, below: l }),
            a ? (0, i.jsx)(C, { name: t, targetNode: n, onDragOverChanged: r }) : null,
        ],
    });
});
function I(e) {
    let { name: t, targetNode: n } = e,
        [{ canDrop: s, isOver: l }, r] = (0, c.H)(() => f([h.PJ.GUILD], n, !0, !0)),
        a = _([[l, m.a7]]),
        o = _([
            [l, m.NQ],
            [s, m.OP],
        ]);
    return (0, i.jsx)("div", {
        ref: a,
        className: m.Ro,
        "aria-hidden": !0,
        children: (0, i.jsx)("div", {
            className: m.aO,
            children: (0, i.jsx)("div", {
                ref: (e) => {
                    (o.current = e), r(e);
                },
                "aria-label": `At end of ${t}`,
                className: m.aC,
            }),
        }),
    });
}
function b(e) {
    let { children: t } = e,
        [, n] = (0, c.H)({ accept: [] });
    return (0, i.jsx)("div", {
        ref: (e) => {
            n(e);
        },
        children: t,
    });
}
