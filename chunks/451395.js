t.d(l, { gY: () => f, jV: () => m, mG: () => p });
var n = t(477900),
    r = t(582128),
    i = t(503698),
    a = t.n(i),
    s = t(930235),
    o = t(651300),
    c = t(352944),
    d = t(683063),
    u = t(939249),
    h = t(772838),
    g = t(375708);
function f(e) {
    let {
            dragRef: l,
            dropRef: t,
            index: n,
            listType: i,
            itemId: a,
            itemType: d,
            itemPreviewProps: u,
            onReorder: h,
            onHover: g,
            onDrop: f,
            onEnd: p,
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
        [{ isDragging: b }, j, D] = (0, s.i)({
            type: x,
            item: { id: a, index: n, itemType: d, itemPreviewProps: u },
            canDrag: v,
            collect: (e) => ({ isDragging: e.isDragging() }),
            end: p,
        });
    r.useEffect(() => {
        m && D((0, c.n)(), { captureDraggingState: !0 });
    }, [D, m]);
    let [{ dragSourcePosition: k }, C] = (0, o.H)({
        accept: x,
        hover: g,
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
                j(l),
                C(t),
                () => {
                    (C(null), j(null));
                }
            ),
            [j, l, C, t],
        ),
        { isDragging: b, dragSourcePosition: k }
    );
}
let p = r.memo(function (e) {
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
        { isDragging: g, dragSourcePosition: p } = f({ dragRef: h, dropRef: h, index: l, ...u }),
        m = null != p,
        v = m && l < p,
        x = m && l > p;
    return (0, n.jsx)("div", { ref: h, className: a()(t, g && i, v && s, x && o), "aria-label": c, children: d });
});
function m(e) {
    let { buttonRef: l, "aria-label": t, iconSize: r = "sm", ...i } = e;
    return (0, n.jsx)(d.u, {
        body: g.intl.format(g.t["zvln/l"], { emphasizeHook: (e) => (0, n.jsx)("strong", { children: e }) }),
        ariaHidden: !0,
        children: (0, n.jsx)(u.D, {
            innerRef: l,
            "aria-label": t ?? g.intl.string(g.t.n9T3Hi),
            "aria-keyshortcuts": "Control+D, Meta+D",
            ...i,
            children: (0, n.jsx)(h.W, { size: r, color: "currentColor" }),
        }),
    });
}
