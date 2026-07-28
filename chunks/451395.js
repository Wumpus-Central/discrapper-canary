n.d(l, { gY: () => f, jV: () => m, mG: () => h });
var t = n(477900),
    r = n(582128),
    i = n(503698),
    a = n.n(i),
    s = n(930235),
    c = n(651300),
    u = n(352944),
    o = n(459192),
    d = n(939249),
    g = n(772838),
    p = n(375708);
function f(e) {
    let {
            dragRef: l,
            dropRef: n,
            index: t,
            listType: i,
            itemId: a,
            itemType: o,
            itemPreviewProps: d,
            onReorder: g,
            onEnd: p,
            disableDefaultPreview: f = !0,
        } = e,
        h = `${o}_${i}`,
        m = r.useCallback(
            (e, l) => {
                g?.(e, l);
            },
            [g],
        ),
        [{ isDragging: b }, x, k] = (0, s.i)({
            type: h,
            item: { id: a, index: t, itemType: o, itemPreviewProps: d },
            collect: (e) => ({ isDragging: e.isDragging() }),
            end: p,
        });
    r.useEffect(() => {
        f && k((0, u.n)(), { captureDraggingState: !0 });
    }, [k, f]);
    let [{ dragSourcePosition: D }, j] = (0, c.H)({
        accept: h,
        drop: (e) => {
            let l = e.index;
            l !== t && (m(l, t), (e.index = t));
        },
        collect: (e) => {
            let l = e.getItem(),
                n = null;
            return null != l && e.isOver({ shallow: !0 }) && e.canDrop() && (n = l.index), { dragSourcePosition: n };
        },
    });
    return (
        r.useLayoutEffect(
            () => (
                x(l),
                j(n),
                () => {
                    j(null), x(null);
                }
            ),
            [x, l, j, n],
        ),
        { isDragging: b, dragSourcePosition: D }
    );
}
let h = r.memo(function (e) {
    let {
            index: l,
            className: n,
            draggingClassName: i,
            dropBeforeClassName: s,
            dropAfterClassName: c,
            "aria-label": u,
            children: o,
            ...d
        } = e,
        g = r.useRef(null),
        { isDragging: p, dragSourcePosition: h } = f({ dragRef: g, dropRef: g, index: l, ...d }),
        m = null != h,
        b = m && l < h,
        x = m && l > h;
    return (0, t.jsx)("div", { ref: g, className: a()(n, p && i, b && s, x && c), "aria-label": u, children: o });
});
function m(e) {
    let { buttonRef: l, "aria-label": n, iconSize: r = "sm", ...i } = e;
    return (0, t.jsx)(o.u, {
        body: p.intl.format(p.t["zvln/l"], { emphasizeHook: (e) => (0, t.jsx)("strong", { children: e }) }),
        ariaHidden: !0,
        children: (0, t.jsx)(d.D, {
            innerRef: l,
            "aria-label": n ?? p.intl.string(p.t.n9T3Hi),
            "aria-keyshortcuts": "Control+D, Meta+D",
            ...i,
            children: (0, t.jsx)(g.W, { size: r, color: "currentColor" }),
        }),
    });
}
