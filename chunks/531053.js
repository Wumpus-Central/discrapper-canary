n.d(t, {
    Ay: () => j,
    g4: () => x,
    qv: () => v,
}),
    n(896048);
var r = n(627968),
    l = n(64700),
    i = n(503698),
    a = n.n(i),
    s = n(284009),
    o = n.n(s),
    c = n(744818),
    u = n(686956),
    d = n(954571),
    f = n(263715),
    p = n(550591),
    h = n(652215),
    b = n(985018),
    g = n(581277);
function m(e) {
    let t = l.useRef(null),
        n = e.map((e) => e[0]);
    return (
        l.useLayoutEffect(() => {
            let n = requestAnimationFrame(() => {
                let n = t.current;
                if (null != n) for (let [t, r] of e) t ? n.classList.add(r) : n.classList.remove(r);
            });
            return () => cancelAnimationFrame(n);
        }, n),
        t
    );
}
function A(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        r = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
    return (
        o()(t.type !== f.PJ.ROOT, "[GuildDropTarget] Tried using a root node as a drop target."),
        {
            accept: e,
            canDrop: (e) =>
                e.nodeId !== t.id &&
                (!r || e.type !== f.PJ.FOLDER || t.type !== f.PJ.FOLDER) &&
                (e.type !== f.PJ.FOLDER || null == t.parentId),
            drop(e) {
                let { nodeId: l } = e;
                r && t.type !== f.PJ.FOLDER && d.default.track(h.HAw.GUILD_FOLDER_CREATED), u.A.moveById(l, t.id, n, r);
            },
            collect: (e) => ({
                canDrop: e.canDrop(),
                isOver: e.isOver(),
            }),
        }
    );
}
function y(e) {
    let { name: t, targetNode: n, combine: i, below: a } = e,
        s = l.useMemo(() => A([f.PJ.GUILD, f.PJ.FOLDER], n, a, i), [n, a, i]),
        [{ canDrop: o, isOver: u }, d] = (0, c.H)(s),
        p = m([
            [o, g.OP],
            [u, g.NQ],
        ]);
    return (0, r.jsx)("div", {
        ref: (e) => {
            (p.current = e), d(e);
        },
        "data-dnd-name": b.intl.formatToPlainString(b.t["A5aDw+"], { itemName: t }),
        className: g.aC,
    });
}
function O(e) {
    let { name: t, targetNode: n, onDragOverChanged: i } = e,
        [{ canDrop: s, isOver: o }, u] = (0, c.H)(() => A([f.PJ.GUILD], n, !0, !0));
    l.useEffect(() => {
        null == i || i(o);
    }, [i, o]);
    let d = m([
        [s, g.OP],
        [o, g.NQ],
    ]);
    return (0, r.jsx)(p.A, {
        text: t,
        shouldShow: o,
        forceOpen: o,
        disableWrapper: !0,
        children: (0, r.jsx)("div", {
            ref: (e) => {
                (d.current = e), u(e);
            },
            "data-dnd-name": b.intl.formatToPlainString(b.t.qiQ0QI, { itemName: t }),
            className: a()(g.dw, {}),
        }),
    });
}
let j = l.memo(function (e) {
    let { name: t, targetNode: n, noCombine: l = !1, below: i = !1, onDragOverChanged: a } = e,
        s = !l && null == n.parentId;
    return (0, r.jsxs)("div", {
        className: g.iE,
        "aria-hidden": !0,
        children: [
            (0, r.jsx)(y, {
                name: t,
                targetNode: n,
                below: i,
            }),
            s
                ? (0, r.jsx)(O, {
                      name: t,
                      targetNode: n,
                      onDragOverChanged: a,
                  })
                : null,
        ],
    });
});
function v(e) {
    let { name: t, targetNode: n } = e,
        [{ canDrop: l, isOver: i }, a] = (0, c.H)(() => A([f.PJ.GUILD], n, !0, !0)),
        s = m([[i, g.a7]]),
        o = m([
            [i, g.NQ],
            [l, g.OP],
        ]);
    return (0, r.jsx)("div", {
        ref: s,
        className: g.Ro,
        "aria-hidden": !0,
        children: (0, r.jsx)("div", {
            className: g.aO,
            children: (0, r.jsx)("div", {
                ref: (e) => {
                    (o.current = e), a(e);
                },
                "aria-label": "At end of ".concat(t),
                className: g.aC,
            }),
        }),
    });
}
function x(e) {
    let { children: t } = e,
        [, n] = (0, c.H)({ accept: [] });
    return (0, r.jsx)("div", {
        ref: (e) => {
            n(e);
        },
        children: t,
    });
}
