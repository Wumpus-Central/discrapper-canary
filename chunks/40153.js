n.d(t, {
    OG: () => b,
    ZP: () => Z,
    Zu: () => I
}),
    n(47120);
var i = n(200651),
    l = n(192379),
    r = n(120356),
    a = n.n(r),
    o = n(512722),
    s = n.n(o),
    c = n(584922),
    d = n(749210),
    u = n(626135),
    h = n(727258),
    p = n(662146),
    g = n(981631),
    m = n(388032),
    f = n(414080);
function _(e) {
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
function v(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        i = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
    return (
        s()(t.type !== h.eD.ROOT, '[GuildDropTarget] Tried using a root node as a drop target.'),
        {
            accept: e,
            canDrop: (e) => e.nodeId !== t.id && (!i || e.type !== h.eD.FOLDER || t.type !== h.eD.FOLDER) && (e.type !== h.eD.FOLDER || null == t.parentId),
            drop(e) {
                let { nodeId: l } = e;
                i && t.type !== h.eD.FOLDER && u.default.track(g.rMx.GUILD_FOLDER_CREATED), d.Z.moveById(l, t.id, n, i);
            },
            collect: (e) => ({
                canDrop: e.canDrop(),
                isOver: e.isOver()
            })
        }
    );
}
function C(e) {
    let { name: t, targetNode: n, combine: r, below: o } = e,
        s = l.useMemo(() => v([h.eD.GUILD, h.eD.FOLDER], n, o, r), [n, o, r]),
        [{ canDrop: d, isOver: u }, p] = (0, c.L)(s),
        g = _([
            [d, f.autoPointerEvents],
            [u, f.dragOver]
        ]);
    return (0, i.jsx)('div', {
        ref: (e) => {
            (g.current = e), p(e);
        },
        'data-dnd-name': m.intl.formatToPlainString(m.t.A5aDw8, { itemName: t }),
        className: a()(f.target)
    });
}
function x(e) {
    let { name: t, targetNode: n, onDragOverChanged: r } = e,
        [{ canDrop: o, isOver: s }, d] = (0, c.L)(() => v([h.eD.GUILD], n, !0, !0));
    l.useEffect(() => {
        null == r || r(s);
    }, [r, s]);
    let u = _([
        [o, f.autoPointerEvents],
        [s, f.dragOver]
    ]);
    return (0, i.jsx)(p.Z, {
        text: t,
        shouldShow: s,
        forceOpen: s,
        disableWrapper: !0,
        tooltipClass: f.centerTargetTooltip,
        children: (0, i.jsx)('div', {
            ref: (e) => {
                (u.current = e), d(e);
            },
            'data-dnd-name': m.intl.formatToPlainString(m.t.qiQ0QE, { itemName: t }),
            className: a()(f.centerTarget, {})
        })
    });
}
let Z = l.memo(function (e) {
    let { name: t, targetNode: n, noCombine: l = !1, below: r = !1, onDragOverChanged: a } = e,
        o = !l && null == n.parentId;
    return (0, i.jsxs)('div', {
        className: f.wrapper,
        'aria-hidden': !0,
        children: [
            (0, i.jsx)(C, {
                name: t,
                targetNode: n,
                below: r
            }),
            o
                ? (0, i.jsx)(x, {
                      name: t,
                      targetNode: n,
                      onDragOverChanged: a
                  })
                : null
        ]
    });
});
function I(e) {
    let { name: t, targetNode: n } = e,
        [{ canDrop: l, isOver: r }, o] = (0, c.L)(() => v([h.eD.GUILD], n, !0, !0)),
        s = _([[r, f.wrapperOver]]),
        d = _([
            [r, f.dragOver],
            [l, f.autoPointerEvents]
        ]);
    return (0, i.jsx)('div', {
        ref: s,
        className: a()(f.folderEndWrapper),
        'aria-hidden': !0,
        children: (0, i.jsx)('div', {
            className: f.folderTarget,
            children: (0, i.jsx)('div', {
                ref: (e) => {
                    (d.current = e), o(e);
                },
                'aria-label': 'At end of '.concat(t),
                className: a()(f.target)
            })
        })
    });
}
function b(e) {
    let { children: t } = e,
        [, n] = (0, c.L)({ accept: [] });
    return (0, i.jsx)('div', {
        ref: n,
        children: t
    });
}
