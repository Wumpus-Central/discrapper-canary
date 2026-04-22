n.d(t, { Ay: () => I, g4: () => b, qv: () => C });
var i = n(627968),
    l = n(64700),
    s = n(503698),
    a = n.n(s),
    r = n(284009),
    o = n.n(r),
    d = n(744818),
    c = n(686956),
    u = n(954571),
    h = n(263715),
    A = n(550591),
    _ = n(652215),
    m = n(985018),
    g = n(40354);
function p(e) {
    let t = l.useRef(null),
        n = e.map((e) => e[0]);
    return (
        l.useLayoutEffect(() => {
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
                let { nodeId: l } = e;
                i && t.type !== h.PJ.FOLDER && u.default.track(_.HAw.GUILD_FOLDER_CREATED), c.A.moveById(l, t.id, n, i);
            },
            collect: (e) => ({ canDrop: e.canDrop(), isOver: e.isOver() }),
        }
    );
}
function E(e) {
    let { name: t, targetNode: n, combine: s, below: a } = e,
        r = l.useMemo(() => f([h.PJ.GUILD, h.PJ.FOLDER], n, a, s), [n, a, s]),
        [{ canDrop: o, isOver: c }, u] = (0, d.H)(r),
        A = p([
            [o, g.OP],
            [c, g.NQ],
        ]);
    return (0, i.jsx)("div", {
        ref: (e) => {
            (A.current = e), u(e);
        },
        "data-dnd-name": m.intl.formatToPlainString(m.t["A5aDw+"], { itemName: t }),
        className: g.aC,
    });
}
function x(e) {
    let { name: t, targetNode: n, onDragOverChanged: s } = e,
        [{ canDrop: r, isOver: o }, c] = (0, d.H)(() => f([h.PJ.GUILD], n, !0, !0));
    l.useEffect(() => {
        s?.(o);
    }, [s, o]);
    let u = p([
        [r, g.OP],
        [o, g.NQ],
    ]);
    return (0, i.jsx)(A.A, {
        text: t,
        shouldShow: o,
        forceOpen: o,
        disableWrapper: !0,
        children: (0, i.jsx)("div", {
            ref: (e) => {
                (u.current = e), c(e);
            },
            "data-dnd-name": m.intl.formatToPlainString(m.t.qiQ0QI, { itemName: t }),
            className: a()(g.dw, {}),
        }),
    });
}
let I = l.memo(function (e) {
    let { name: t, targetNode: n, noCombine: l = !1, below: s = !1, onDragOverChanged: a } = e,
        r = !l && null == n.parentId;
    return (0, i.jsxs)("div", {
        className: g.iE,
        "aria-hidden": !0,
        children: [
            (0, i.jsx)(E, { name: t, targetNode: n, below: s }),
            r ? (0, i.jsx)(x, { name: t, targetNode: n, onDragOverChanged: a }) : null,
        ],
    });
});
function C(e) {
    let { name: t, targetNode: n } = e,
        [{ canDrop: l, isOver: s }, a] = (0, d.H)(() => f([h.PJ.GUILD], n, !0, !0)),
        r = p([[s, g.a7]]),
        o = p([
            [s, g.NQ],
            [l, g.OP],
        ]);
    return (0, i.jsx)("div", {
        ref: r,
        className: g.Ro,
        "aria-hidden": !0,
        children: (0, i.jsx)("div", {
            className: g.aO,
            children: (0, i.jsx)("div", {
                ref: (e) => {
                    (o.current = e), a(e);
                },
                "aria-label": `At end of ${t}`,
                className: g.aC,
            }),
        }),
    });
}
function b(e) {
    let { children: t } = e,
        [, n] = (0, d.H)({ accept: [] });
    return (0, i.jsx)("div", {
        ref: (e) => {
            n(e);
        },
        children: t,
    });
}
