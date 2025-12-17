n.d(t, {
    OG: () => x,
    ZP: () => j,
    Zu: () => C,
}),
    n(388685);
var r = n(54381),
    i = n(473749),
    l = n(120356),
    a = n.n(l),
    o = n(512722),
    s = n.n(o),
    c = n(692992),
    u = n(749210),
    d = n(626135),
    f = n(727258),
    h = n(662146),
    p = n(981631),
    g = n(388032),
    b = n(602230);
function m(e) {
    let t = i.useRef(null),
        n = e.map((e) => e[0]);
    return (
        i.useLayoutEffect(() => {
            let n = requestAnimationFrame(() => {
                let n = t.current;
                if (null != n) for (let [t, r] of e) t ? n.classList.add(r) : n.classList.remove(r);
            });
            return () => cancelAnimationFrame(n);
        }, n),
        t
    );
}
function y(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        r = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
    return (
        s()(t.type !== f.eD.ROOT, "[GuildDropTarget] Tried using a root node as a drop target."),
        {
            accept: e,
            canDrop: (e) =>
                e.nodeId !== t.id &&
                (!r || e.type !== f.eD.FOLDER || t.type !== f.eD.FOLDER) &&
                (e.type !== f.eD.FOLDER || null == t.parentId),
            drop(e) {
                let { nodeId: i } = e;
                r && t.type !== f.eD.FOLDER && d.default.track(p.rMx.GUILD_FOLDER_CREATED), u.Z.moveById(i, t.id, n, r);
            },
            collect: (e) => ({
                canDrop: e.canDrop(),
                isOver: e.isOver(),
            }),
        }
    );
}
function O(e) {
    let { name: t, targetNode: n, combine: l, below: a } = e,
        o = i.useMemo(() => y([f.eD.GUILD, f.eD.FOLDER], n, a, l), [n, a, l]),
        [{ canDrop: s, isOver: u }, d] = (0, c.L)(o),
        h = m([
            [s, b.autoPointerEvents],
            [u, b.dragOver],
        ]);
    return (0, r.jsx)("div", {
        ref: (e) => {
            (h.current = e), d(e);
        },
        "data-dnd-name": g.intl.formatToPlainString(g.t["A5aDw+"], { itemName: t }),
        className: b.target,
    });
}
function v(e) {
    let { name: t, targetNode: n, onDragOverChanged: l } = e,
        [{ canDrop: o, isOver: s }, u] = (0, c.L)(() => y([f.eD.GUILD], n, !0, !0));
    i.useEffect(() => {
        null == l || l(s);
    }, [l, s]);
    let d = m([
        [o, b.autoPointerEvents],
        [s, b.dragOver],
    ]);
    return (0, r.jsx)(h.Z, {
        text: t,
        shouldShow: s,
        forceOpen: s,
        disableWrapper: !0,
        children: (0, r.jsx)("div", {
            ref: (e) => {
                (d.current = e), u(e);
            },
            "data-dnd-name": g.intl.formatToPlainString(g.t.qiQ0QI, { itemName: t }),
            className: a()(b.centerTarget, {}),
        }),
    });
}
let j = i.memo(function (e) {
    let { name: t, targetNode: n, noCombine: i = !1, below: l = !1, onDragOverChanged: a } = e,
        o = !i && null == n.parentId;
    return (0, r.jsxs)("div", {
        className: b.wrapper,
        "aria-hidden": !0,
        children: [
            (0, r.jsx)(O, {
                name: t,
                targetNode: n,
                below: l,
            }),
            o
                ? (0, r.jsx)(v, {
                      name: t,
                      targetNode: n,
                      onDragOverChanged: a,
                  })
                : null,
        ],
    });
});
function C(e) {
    let { name: t, targetNode: n } = e,
        [{ canDrop: i, isOver: l }, a] = (0, c.L)(() => y([f.eD.GUILD], n, !0, !0)),
        o = m([[l, b.wrapperOver]]),
        s = m([
            [l, b.dragOver],
            [i, b.autoPointerEvents],
        ]);
    return (0, r.jsx)("div", {
        ref: o,
        className: b.folderEndWrapper,
        "aria-hidden": !0,
        children: (0, r.jsx)("div", {
            className: b.folderTarget,
            children: (0, r.jsx)("div", {
                ref: (e) => {
                    (s.current = e), a(e);
                },
                "aria-label": "At end of ".concat(t),
                className: b.target,
            }),
        }),
    });
}
function x(e) {
    let { children: t } = e,
        [, n] = (0, c.L)({ accept: [] });
    return (0, r.jsx)("div", {
        ref: (e) => {
            n(e);
        },
        children: t,
    });
}
