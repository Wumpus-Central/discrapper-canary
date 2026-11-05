var r = n(477900),
    t = n(582128),
    i = n(503698),
    a = n.n(i),
    o = n(126600),
    s = n(840508),
    c = n(352944),
    d = n(425763),
    u = n(683063),
    g = n(939249),
    h = n(772838),
    p = n(792996);
function f(e) {
    let {
            dragRef: l,
            dropRef: n,
            index: r,
            listType: i,
            itemId: a,
            itemType: d,
            itemPreviewProps: u,
            onReorder: g,
            onHover: h,
            onDrop: p,
            onEnd: f,
            disableDefaultPreview: m = !0,
            canDrag: v = !0,
        } = e,
        x = `${d}_${i}`,
        D = t.useCallback(
            (e, l) => {
                g?.(e, l);
            },
            [g],
        ),
        [{ isDragging: w }, b, j] = (0, o.i)({
            type: x,
            item: { id: a, index: r, itemType: d, itemPreviewProps: u },
            canDrag: v,
            collect: (e) => ({ isDragging: e.isDragging() }),
            end: f,
        });
    t.useEffect(() => {
        m && j((0, c.n)(), { captureDraggingState: !0 });
    }, [j, m]);
    let [{ dragSourcePosition: k }, C] = (0, s.H)({
        accept: x,
        hover: h,
        drop: (e, l) => {
            if (p?.(e, l) === !0) return;
            let n = e.index;
            n !== r && (D(n, r), (e.index = r));
        },
        collect: (e) => {
            let l = e.getItem(),
                n = null;
            return (null != l && e.isOver({ shallow: !0 }) && e.canDrop() && (n = l.index), { dragSourcePosition: n });
        },
    });
    return (
        t.useLayoutEffect(
            () => (
                b(l),
                C(n),
                () => {
                    (C(null), b(null));
                }
            ),
            [b, l, C, n],
        ),
        { isDragging: w, dragSourcePosition: k }
    );
}
let m = t.memo(function (e) {
    let {
            index: l,
            className: n,
            draggingClassName: i,
            dropBeforeClassName: o,
            dropAfterClassName: s,
            "aria-label": c,
            children: d,
            ...u
        } = e,
        g = t.useRef(null),
        { isDragging: h, dragSourcePosition: p } = f({ dragRef: g, dropRef: g, index: l, ...u }),
        m = null != p,
        v = m && l < p,
        x = m && l > p;
    return (0, r.jsx)("div", { ref: g, className: a()(n, h && i, v && o, x && s), "aria-label": c, children: d });
});
n.d(
    l,
    {},
    {
        gY: f,
        jV: function (e) {
            let { buttonRef: l, "aria-label": n, iconSize: t = "sm", ...i } = e;
            return (0, r.jsx)(u.u, {
                body: p.intl.format(p.t["zvln/l"], { emphasizeHook: (e) => (0, r.jsx)("strong", { children: e }) }),
                ariaHidden: !0,
                children: (0, r.jsx)(g.D, {
                    innerRef: l,
                    "aria-label": n ?? p.intl.string(p.t.n9T3Hi),
                    "aria-keyshortcuts": "Control+D, Meta+D",
                    ...i,
                    children: (0, r.jsx)(h.DragIcon, { size: t, color: "currentColor" }),
                }),
            });
        },
        mG: m,
        w9: function (e) {
            let { listType: l, itemType: n, onFallbackDrop: r } = e,
                [, t] = (0, s.H)({
                    accept: `${n}_${l}`,
                    canDrop: () => !(0, d.ny)(),
                    drop: (e, l) => {
                        l.didDrop() || r?.(e, l);
                    },
                });
            return t;
        },
    },
);
