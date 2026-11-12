var l = n(477900),
    t = n(582128),
    i = n(503698),
    a = n.n(i),
    c = n(126600),
    o = n(840508),
    s = n(352944),
    u = n(425763),
    d = n(683063),
    p = n(939249),
    f = n(772838),
    g = n(792996);
function h(e) {
    let {
            dragRef: r,
            dropRef: n,
            index: l,
            listType: i,
            itemId: a,
            itemType: u,
            itemPreviewProps: d,
            onReorder: p,
            onHover: f,
            onDrop: g,
            onEnd: h,
            disableDefaultPreview: D = !0,
            canDrag: m = !0,
        } = e,
        b = `${u}_${i}`,
        x = t.useCallback(
            (e, r) => {
                p?.(e, r);
            },
            [p],
        ),
        [{ isDragging: k }, j, v] = (0, c.i)({
            type: b,
            item: { id: a, index: l, itemType: u, itemPreviewProps: d },
            canDrag: m,
            collect: (e) => ({ isDragging: e.isDragging() }),
            end: h,
        });
    t.useEffect(() => {
        D && v((0, s.n)(), { captureDraggingState: !0 });
    }, [v, D]);
    let [{ dragSourcePosition: y }, C] = (0, o.H)({
        accept: b,
        hover: f,
        drop: (e, r) => {
            if (g?.(e, r) === !0) return;
            let n = e.index;
            n !== l && (x(n, l), (e.index = l));
        },
        collect: (e) => {
            let r = e.getItem(),
                n = null;
            return (null != r && e.isOver({ shallow: !0 }) && e.canDrop() && (n = r.index), { dragSourcePosition: n });
        },
    });
    return (
        t.useLayoutEffect(
            () => (
                j(r),
                C(n),
                () => {
                    (C(null), j(null));
                }
            ),
            [j, r, C, n],
        ),
        { isDragging: k, dragSourcePosition: y }
    );
}
let D = t.memo(function (e) {
    let {
            index: r,
            className: n,
            draggingClassName: i,
            dropBeforeClassName: c,
            dropAfterClassName: o,
            "aria-label": s,
            children: u,
            ...d
        } = e,
        p = t.useRef(null),
        { isDragging: f, dragSourcePosition: g } = h({ dragRef: p, dropRef: p, index: r, ...d }),
        D = null != g,
        m = D && r < g,
        b = D && r > g;
    return (0, l.jsx)("div", { ref: p, className: a()(n, f && i, m && c, b && o), "aria-label": s, children: u });
});
n.d(
    r,
    {},
    {
        gY: h,
        jV: function (e) {
            let { buttonRef: r, "aria-label": n, iconSize: t = "sm", ...i } = e;
            return (0, l.jsx)(d.u, {
                body: g.intl.format(g.t["zvln/l"], { emphasizeHook: (e) => (0, l.jsx)("strong", { children: e }) }),
                ariaHidden: !0,
                children: (0, l.jsx)(p.D, {
                    innerRef: r,
                    "aria-label": n ?? g.intl.string(g.t.n9T3Hi),
                    "aria-keyshortcuts": "Control+D, Meta+D",
                    ...i,
                    children: (0, l.jsx)(f.DragIcon, { size: t, color: "currentColor" }),
                }),
            });
        },
        mG: D,
        w9: function (e) {
            let { listType: r, itemType: n, onFallbackDrop: l } = e,
                [, t] = (0, o.H)({
                    accept: `${n}_${r}`,
                    canDrop: () => !(0, u.ny)(),
                    drop: (e, r) => {
                        r.didDrop() || l?.(e, r);
                    },
                });
            return t;
        },
    },
);
