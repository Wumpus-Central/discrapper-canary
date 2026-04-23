n.d(t, { gY: () => h, jV: () => p, mG: () => g });
var l = n(627968),
    a = n(64700),
    i = n(503698),
    r = n.n(i),
    s = n(131346),
    d = n(744818),
    o = n(352944),
    c = n(459192),
    u = n(939249),
    _ = n(772838),
    m = n(985018);
function h(e) {
    let {
            dragRef: t,
            dropRef: n,
            index: l,
            listType: i,
            itemId: r,
            itemType: c,
            itemPreviewProps: u,
            onReorder: _,
            onEnd: m,
            disableDefaultPreview: h = !0,
        } = e,
        g = `${c}_${i}`,
        p = a.useCallback(
            (e, t) => {
                _?.(e, t);
            },
            [_],
        ),
        [{ isDragging: x }, A, f] = (0, s.i)({
            type: g,
            item: { id: r, index: l, itemType: c, itemPreviewProps: u },
            collect: (e) => ({ isDragging: e.isDragging() }),
            end: m,
        });
    a.useEffect(() => {
        h && f((0, o.n)(), { captureDraggingState: !0 });
    }, [f, h]);
    let [{ dragSourcePosition: v }, b] = (0, d.H)({
        accept: g,
        drop: (e) => {
            let t = e.index;
            t !== l && (p(t, l), (e.index = l));
        },
        collect: (e) => {
            let t = e.getItem(),
                n = null;
            return null != t && e.isOver({ shallow: !0 }) && e.canDrop() && (n = t.index), { dragSourcePosition: n };
        },
    });
    return (
        a.useLayoutEffect(
            () => (
                A(t),
                b(n),
                () => {
                    b(null), A(null);
                }
            ),
            [A, t, b, n],
        ),
        { isDragging: x, dragSourcePosition: v }
    );
}
let g = a.memo(function (e) {
    let {
            index: t,
            className: n,
            draggingClassName: i,
            dropBeforeClassName: s,
            dropAfterClassName: d,
            "aria-label": o,
            children: c,
            ...u
        } = e,
        _ = a.useRef(null),
        { isDragging: m, dragSourcePosition: g } = h({ dragRef: _, dropRef: _, index: t, ...u }),
        p = null != g,
        x = p && t < g,
        A = p && t > g;
    return (0, l.jsx)("div", { ref: _, className: r()(n, m && i, x && s, A && d), "aria-label": o, children: c });
});
function p(e) {
    let { buttonRef: t, "aria-label": n, iconSize: a = "sm", ...i } = e;
    return (0, l.jsx)(c.u, {
        body: m.intl.format(m.t["zvln/l"], { emphasizeHook: (e) => (0, l.jsx)("strong", { children: e }) }),
        ariaHidden: !0,
        children: (0, l.jsx)(u.D, {
            innerRef: t,
            "aria-label": n ?? m.intl.string(m.t.n9T3Hi),
            "aria-keyshortcuts": "Control+D, Meta+D",
            ...i,
            children: (0, l.jsx)(_.W, { size: a, color: "currentColor" }),
        }),
    });
}
