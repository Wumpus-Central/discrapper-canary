n.d(t, { gY: () => m, jV: () => p, mG: () => x });
var i = n(627968),
    l = n(64700),
    a = n(503698),
    s = n.n(a),
    r = n(131346),
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
            itemId: s,
            itemType: c,
            itemPreviewProps: u,
            onReorder: g,
            onEnd: m,
            disableDefaultPreview: x = !0,
        } = e,
        p = `${c}_${a}`,
        f = l.useCallback(
            (e, t) => {
                g?.(e, t);
            },
            [g],
        ),
        [{ isDragging: h }, _, A] = (0, r.i)({
            type: p,
            item: { id: s, index: i, itemType: c, itemPreviewProps: u },
            collect: (e) => ({ isDragging: e.isDragging() }),
            end: m,
        });
    l.useEffect(() => {
        x && A((0, d.n)(), { captureDraggingState: !0 });
    }, [A, x]);
    let [{ dragSourcePosition: I }, j] = (0, o.H)({
        accept: p,
        drop: (e) => {
            let t = e.index;
            t !== i && (f(t, i), (e.index = i));
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
                _(t),
                j(n),
                () => {
                    j(null), _(null);
                }
            ),
            [_, t, j, n],
        ),
        { isDragging: h, dragSourcePosition: I }
    );
}
let x = l.memo(function (e) {
    let {
            index: t,
            className: n,
            draggingClassName: a,
            dropBeforeClassName: r,
            dropAfterClassName: o,
            "aria-label": d,
            children: c,
            ...u
        } = e,
        g = l.useRef(null),
        { isDragging: x, dragSourcePosition: p } = m({ dragRef: g, dropRef: g, index: t, ...u }),
        f = null != p,
        h = f && t < p,
        _ = f && t > p;
    return (0, i.jsx)("div", { ref: g, className: s()(n, x && a, h && r, _ && o), "aria-label": d, children: c });
});
function p(e) {
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
