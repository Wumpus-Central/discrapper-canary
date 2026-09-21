t.d(l, { gY: () => g, jV: () => x, mG: () => v, w9: () => m });
var n = t(477900),
    r = t(582128),
    i = t(503698),
    a = t.n(i),
    s = t(930235),
    o = t(651300),
    c = t(352944),
    d = t(425763),
    u = t(683063),
    h = t(939249),
    p = t(772838),
    f = t(375708);
function g(e) {
    let {
            dragRef: l,
            dropRef: t,
            index: n,
            listType: i,
            itemId: a,
            itemType: d,
            itemPreviewProps: u,
            onReorder: h,
            onHover: p,
            onDrop: f,
            onEnd: g,
            disableDefaultPreview: m = !0,
            canDrag: v = !0,
        } = e,
        x = `${d}_${i}`,
        w = r.useCallback(
            (e, l) => {
                h?.(e, l);
            },
            [h],
        ),
        [{ isDragging: D }, b, j] = (0, s.i)({
            type: x,
            item: { id: a, index: n, itemType: d, itemPreviewProps: u },
            canDrag: v,
            collect: (e) => ({ isDragging: e.isDragging() }),
            end: g,
        });
    r.useEffect(() => {
        m && j((0, c.n)(), { captureDraggingState: !0 });
    }, [j, m]);
    let [{ dragSourcePosition: k }, C] = (0, o.H)({
        accept: x,
        hover: p,
        drop: (e, l) => {
            if (f?.(e, l) === !0) return;
            let t = e.index;
            t !== n && (w(t, n), (e.index = n));
        },
        collect: (e) => {
            let l = e.getItem(),
                t = null;
            return (null != l && e.isOver({ shallow: !0 }) && e.canDrop() && (t = l.index), { dragSourcePosition: t });
        },
    });
    return (
        r.useLayoutEffect(
            () => (
                b(l),
                C(t),
                () => {
                    (C(null), b(null));
                }
            ),
            [b, l, C, t],
        ),
        { isDragging: D, dragSourcePosition: k }
    );
}
function m(e) {
    let { listType: l, itemType: t, onFallbackDrop: n } = e,
        [, r] = (0, o.H)({
            accept: `${t}_${l}`,
            canDrop: () => !(0, d.ny)(),
            drop: (e, l) => {
                l.didDrop() || n?.(e, l);
            },
        });
    return r;
}
let v = r.memo(function (e) {
    let {
            index: l,
            className: t,
            draggingClassName: i,
            dropBeforeClassName: s,
            dropAfterClassName: o,
            "aria-label": c,
            children: d,
            ...u
        } = e,
        h = r.useRef(null),
        { isDragging: p, dragSourcePosition: f } = g({ dragRef: h, dropRef: h, index: l, ...u }),
        m = null != f,
        v = m && l < f,
        x = m && l > f;
    return (0, n.jsx)("div", { ref: h, className: a()(t, p && i, v && s, x && o), "aria-label": c, children: d });
});
function x(e) {
    let { buttonRef: l, "aria-label": t, iconSize: r = "sm", ...i } = e;
    return (0, n.jsx)(u.u, {
        body: f.intl.format(f.t["zvln/l"], { emphasizeHook: (e) => (0, n.jsx)("strong", { children: e }) }),
        ariaHidden: !0,
        children: (0, n.jsx)(h.D, {
            innerRef: l,
            "aria-label": t ?? f.intl.string(f.t.n9T3Hi),
            "aria-keyshortcuts": "Control+D, Meta+D",
            ...i,
            children: (0, n.jsx)(p.W, { size: r, color: "currentColor" }),
        }),
    });
}
