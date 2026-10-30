n.d(t, { Ay: () => g, g4: () => N, qv: () => S });
var i = n(477900),
    r = n(582128),
    a = n(503698),
    s = n.n(a),
    l = n(284009),
    o = n.n(l),
    d = n(949152),
    c = n(66834),
    u = n(174459),
    _ = n(263715),
    E = n(550591),
    A = n(652215),
    h = n(105292),
    f = n(759223);
function I(e) {
    let t = r.useRef(null),
        n = e.map((e) => e[0]);
    return (
        r.useLayoutEffect(() => {
            let n = requestAnimationFrame(() => {
                let n = t.current;
                if (null != n) for (let [t, i] of e) t ? n.classList.add(i) : n.classList.remove(i);
            });
            return () => cancelAnimationFrame(n);
        }, n),
        t
    );
}
function p(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        i = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
    return (
        o()(t.type !== _.PJ.ROOT, "[GuildDropTarget] Tried using a root node as a drop target."),
        {
            accept: e,
            canDrop: (e) =>
                e.nodeId !== t.id &&
                (!i || e.type !== _.PJ.FOLDER || t.type !== _.PJ.FOLDER) &&
                (e.type !== _.PJ.FOLDER || null == t.parentId),
            drop(e) {
                let { nodeId: r } = e;
                (i && t.type !== _.PJ.FOLDER && u.default.track(A.HAw.GUILD_FOLDER_CREATED),
                    c.A.moveById(r, t.id, n, i));
            },
            collect: (e) => ({ canDrop: e.canDrop(), isOver: e.isOver() }),
        }
    );
}
function T(e) {
    let { name: t, targetNode: n, combine: a, below: s } = e,
        l = r.useMemo(() => p([_.PJ.GUILD, _.PJ.FOLDER], n, s, a), [n, s, a]),
        [{ canDrop: o, isOver: c }, u] = (0, d.H)(l),
        E = I([
            [o, f.OP],
            [c, f.NQ],
        ]);
    return (0, i.jsx)("div", {
        ref: (e) => {
            ((E.current = e), u(e));
        },
        "data-dnd-name": h.intl.formatToPlainString(h.t["A5aDw+"], { itemName: t }),
        className: f.aC,
    });
}
function m(e) {
    let { name: t, targetNode: n, onDragOverChanged: a } = e,
        [{ canDrop: l, isOver: o }, c] = (0, d.H)(() => p([_.PJ.GUILD], n, !0, !0));
    r.useEffect(() => {
        a?.(o);
    }, [a, o]);
    let u = I([
        [l, f.OP],
        [o, f.NQ],
    ]);
    return (0, i.jsx)(E.A, {
        text: t,
        shouldShow: o,
        forceOpen: o,
        disableWrapper: !0,
        children: (0, i.jsx)("div", {
            ref: (e) => {
                ((u.current = e), c(e));
            },
            "data-dnd-name": h.intl.formatToPlainString(h.t.qiQ0QI, { itemName: t }),
            className: s()(f.dw, {}),
        }),
    });
}
let g = r.memo(function (e) {
    let { name: t, targetNode: n, noCombine: r = !1, below: a = !1, onDragOverChanged: s } = e,
        l = !r && null == n.parentId;
    return (0, i.jsxs)("div", {
        className: f.iE,
        "aria-hidden": !0,
        children: [
            (0, i.jsx)(T, { name: t, targetNode: n, below: a }),
            l ? (0, i.jsx)(m, { name: t, targetNode: n, onDragOverChanged: s }) : null,
        ],
    });
});
function S(e) {
    let { name: t, targetNode: n } = e,
        [{ canDrop: r, isOver: a }, s] = (0, d.H)(() => p([_.PJ.GUILD], n, !0, !0)),
        l = I([[a, f.a7]]),
        o = I([
            [a, f.NQ],
            [r, f.OP],
        ]);
    return (0, i.jsx)("div", {
        ref: l,
        className: f.Ro,
        "aria-hidden": !0,
        children: (0, i.jsx)("div", {
            className: f.aO,
            children: (0, i.jsx)("div", {
                ref: (e) => {
                    ((o.current = e), s(e));
                },
                "aria-label": `At end of ${t}`,
                className: f.aC,
            }),
        }),
    });
}
function N(e) {
    let { children: t } = e,
        [, n] = (0, d.H)({ accept: [] });
    return (0, i.jsx)("div", {
        ref: (e) => {
            n(e);
        },
        children: t,
    });
}
