n.d(t, {
    OG: () => x,
    ZP: () => O,
    Zu: () => j
}),
    n(47120);
var r = n(200651),
    i = n(192379),
    l = n(120356),
    o = n.n(l),
    a = n(512722),
    s = n.n(a),
    c = n(584922),
    u = n(749210),
    d = n(626135),
    p = n(727258),
    h = n(662146),
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
function y(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        r = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
    return (
        s()(t.type !== p.eD.ROOT, '[GuildDropTarget] Tried using a root node as a drop target.'),
        {
            accept: e,
            canDrop: (e) => e.nodeId !== t.id && (!r || e.type !== p.eD.FOLDER || t.type !== p.eD.FOLDER) && (e.type !== p.eD.FOLDER || null == t.parentId),
            drop(e) {
                let { nodeId: i } = e;
                r && t.type !== p.eD.FOLDER && d.default.track(f.rMx.GUILD_FOLDER_CREATED), u.Z.moveById(i, t.id, n, r);
            },
            collect: (e) => ({
                canDrop: e.canDrop(),
                isOver: e.isOver()
            })
        }
    );
}
function _(e) {
    let { name: t, targetNode: n, combine: l, below: o } = e,
        a = i.useMemo(() => y([p.eD.GUILD, p.eD.FOLDER], n, o, l), [n, o, l]),
        [{ canDrop: s, isOver: u }, d] = (0, c.L)(a),
        h = b([
            [s, m.autoPointerEvents],
            [u, m.dragOver]
        ]);
    return (0, r.jsx)('div', {
        ref: (e) => {
            (h.current = e), d(e);
        },
        'data-dnd-name': g.NW.formatToPlainString(g.t.A5aDw8, { itemName: t }),
        className: m.target
    });
}
function v(e) {
    let { name: t, targetNode: n, onDragOverChanged: l } = e,
        [{ canDrop: a, isOver: s }, u] = (0, c.L)(() => y([p.eD.GUILD], n, !0, !0));
    i.useEffect(() => {
        null == l || l(s);
    }, [l, s]);
    let d = b([
        [a, m.autoPointerEvents],
        [s, m.dragOver]
    ]);
    return (0, r.jsx)(h.Z, {
        text: t,
        shouldShow: s,
        forceOpen: s,
        disableWrapper: !0,
        tooltipClass: m.centerTargetTooltip,
        children: (0, r.jsx)('div', {
            ref: (e) => {
                (d.current = e), u(e);
            },
            'data-dnd-name': g.NW.formatToPlainString(g.t.qiQ0QE, { itemName: t }),
            className: o()(m.centerTarget, {})
        })
    });
}
let O = i.memo(function (e) {
    let { name: t, targetNode: n, noCombine: i = !1, below: l = !1, onDragOverChanged: o } = e,
        a = !i && null == n.parentId;
    return (0, r.jsxs)('div', {
        className: m.wrapper,
        'aria-hidden': !0,
        children: [
            (0, r.jsx)(_, {
                name: t,
                targetNode: n,
                below: l
            }),
            a
                ? (0, r.jsx)(v, {
                      name: t,
                      targetNode: n,
                      onDragOverChanged: o
                  })
                : null
        ]
    });
});
function j(e) {
    let { name: t, targetNode: n } = e,
        [{ canDrop: i, isOver: l }, o] = (0, c.L)(() => y([p.eD.GUILD], n, !0, !0)),
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
                    (s.current = e), o(e);
                },
                'aria-label': 'At end of '.concat(t),
                className: m.target
            })
        })
    });
}
function x(e) {
    let { children: t } = e,
        [, n] = (0, c.L)({ accept: [] });
    return (0, r.jsx)('div', {
        ref: n,
        children: t
    });
}
