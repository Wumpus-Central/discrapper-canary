(n.d(t, {
    OG: () => j,
    ZP: () => C,
    Zu: () => v
}),
    n(388685));
var r = n(255367),
    i = n(73800),
    l = n(120356),
    o = n.n(l),
    a = n(512722),
    s = n.n(a),
    c = n(539202),
    u = n(749210),
    d = n(626135),
    h = n(727258),
    p = n(662146),
    f = n(981631),
    g = n(388032),
    m = n(217873);
function b(e) {
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
function _(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        r = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
    return (
        s()(t.type !== h.eD.ROOT, '[GuildDropTarget] Tried using a root node as a drop target.'),
        {
            accept: e,
            canDrop: (e) => e.nodeId !== t.id && (!r || e.type !== h.eD.FOLDER || t.type !== h.eD.FOLDER) && (e.type !== h.eD.FOLDER || null == t.parentId),
            drop(e) {
                let { nodeId: i } = e;
                (r && t.type !== h.eD.FOLDER && d.default.track(f.rMx.GUILD_FOLDER_CREATED), u.Z.moveById(i, t.id, n, r));
            },
            collect: (e) => ({
                canDrop: e.canDrop(),
                isOver: e.isOver()
            })
        }
    );
}
function O(e) {
    let { name: t, targetNode: n, combine: l, below: o } = e,
        a = i.useMemo(() => _([h.eD.GUILD, h.eD.FOLDER], n, o, l), [n, o, l]),
        [{ canDrop: s, isOver: u }, d] = (0, c.L)(a),
        p = b([
            [s, m.autoPointerEvents],
            [u, m.dragOver]
        ]);
    return (0, r.jsx)('div', {
        ref: (e) => {
            ((p.current = e), d(e));
        },
        'data-dnd-name': g.intl.formatToPlainString(g.t.A5aDw8, { itemName: t }),
        className: m.target
    });
}
function y(e) {
    let { name: t, targetNode: n, onDragOverChanged: l } = e,
        [{ canDrop: a, isOver: s }, u] = (0, c.L)(() => _([h.eD.GUILD], n, !0, !0));
    i.useEffect(() => {
        null == l || l(s);
    }, [l, s]);
    let d = b([
        [a, m.autoPointerEvents],
        [s, m.dragOver]
    ]);
    return (0, r.jsx)(p.Z, {
        text: t,
        shouldShow: s,
        forceOpen: s,
        disableWrapper: !0,
        tooltipClass: m.centerTargetTooltip,
        children: (0, r.jsx)('div', {
            ref: (e) => {
                ((d.current = e), u(e));
            },
            'data-dnd-name': g.intl.formatToPlainString(g.t.qiQ0QE, { itemName: t }),
            className: o()(m.centerTarget, {})
        })
    });
}
let C = i.memo(function (e) {
    let { name: t, targetNode: n, noCombine: i = !1, below: l = !1, onDragOverChanged: o } = e,
        a = !i && null == n.parentId;
    return (0, r.jsxs)('div', {
        className: m.wrapper,
        'aria-hidden': !0,
        children: [
            (0, r.jsx)(O, {
                name: t,
                targetNode: n,
                below: l
            }),
            a
                ? (0, r.jsx)(y, {
                      name: t,
                      targetNode: n,
                      onDragOverChanged: o
                  })
                : null
        ]
    });
});
function v(e) {
    let { name: t, targetNode: n } = e,
        [{ canDrop: i, isOver: l }, o] = (0, c.L)(() => _([h.eD.GUILD], n, !0, !0)),
        a = b([[l, m.wrapperOver]]),
        s = b([
            [l, m.dragOver],
            [i, m.autoPointerEvents]
        ]);
    return (0, r.jsx)('div', {
        ref: a,
        className: m.folderEndWrapper,
        'aria-hidden': !0,
        children: (0, r.jsx)('div', {
            className: m.folderTarget,
            children: (0, r.jsx)('div', {
                ref: (e) => {
                    ((s.current = e), o(e));
                },
                'aria-label': 'At end of '.concat(t),
                className: m.target
            })
        })
    });
}
function j(e) {
    let { children: t } = e,
        [, n] = (0, c.L)({ accept: [] });
    return (0, r.jsx)('div', {
        ref: (e) => {
            n(e);
        },
        children: t
    });
}
