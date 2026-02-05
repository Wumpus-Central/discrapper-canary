n.d(t, { gY: () => m, jV: () => f, mG: () => x });
var i = n(627968),
    l = n(64700),
    a = n(503698),
    r = n.n(a),
    s = n(131346),
    o = n(522437),
    d = n(352944),
    c = n(435371),
    u = n(397927),
    g = n(985018);
function m(e) {
    let {
            dragRef: t,
            dropRef: n,
            index: i,
            listType: a,
            itemId: r,
            itemType: c,
            itemPreviewProps: u,
            onReorder: g,
            onEnd: m,
            disableDefaultPreview: x = !0,
        } = e,
        f = `${c}_${a}`,
        h = l.useCallback(
            (e, t) => {
                g?.(e, t);
            },
            [g],
        ),
        p = l.useMemo(() => ({ id: r, index: i, itemType: c, itemPreviewProps: u }), [r, i, c, u]),
        [{ isDragging: _ }, A, I] = (0, s.i)({
            type: f,
            item: p,
            collect: (e) => ({ isDragging: e.isDragging() }),
            end: m,
        });
    l.useEffect(() => {
        x && I((0, d.n)(), { captureDraggingState: !0 });
    }, [I, x]);
    let [{ dragSourcePosition: j }, v] = (0, o.H)({
        accept: f,
        drop: (e) => {
            let t = e.index;
            t !== i && (h(t, i), (e.index = i));
        },
        collect: (e) => {
            let t = e.getItem(),
                n = null;
            return null != t && e.isOver({ shallow: !0 }) && e.canDrop() && (n = t.index), { dragSourcePosition: n };
        },
    });
    return (
        l.useLayoutEffect(
            () => (
                A(t),
                v(n),
                () => {
                    v(null), A(null);
                }
            ),
            [A, t, v, n],
        ),
        { isDragging: _, dragSourcePosition: j }
    );
}
let x = l.memo(function (e) {
    let {
            index: t,
            className: n,
            draggingClassName: a,
            dropBeforeClassName: s,
            dropAfterClassName: o,
            "aria-label": d,
            children: c,
            ...u
        } = e,
        g = l.useRef(null),
        { isDragging: x, dragSourcePosition: f } = m({ dragRef: g, dropRef: g, index: t, ...u }),
        h = null != f,
        p = h && t < f,
        _ = h && t > f;
    return (0, i.jsx)("div", { ref: g, className: r()(n, x && a, p && s, _ && o), "aria-label": d, children: c });
});
function f(e) {
    let { buttonRef: t, "aria-label": n, iconSize: l = "sm", ...a } = e;
    return (0, i.jsx)(c.un, {
        body: g.intl.format(g.t["zvln/l"], { emphasizeHook: (e) => (0, i.jsx)("strong", { children: e }) }),
        ariaHidden: !0,
        children: (0, i.jsx)(u.DUT, {
            innerRef: t,
            "aria-label": n ?? g.intl.string(g.t.n9T3Hi),
            "aria-keyshortcuts": "Control+D, Meta+D",
            ...a,
            children: (0, i.jsx)(u.WP0, { size: l, color: "currentColor" }),
        }),
    });
}
