t.d(l, { gY: () => f, jV: () => m, mG: () => p });
var n = t(477900),
    i = t(582128),
    r = t(503698),
    a = t.n(r),
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
            listType: r,
            itemId: a,
            itemType: d,
            itemPreviewProps: u,
            onReorder: h,
            onEnd: g,
            disableDefaultPreview: f = !0,
            canDrag: p = !0,
        } = e,
        m = `${d}_${r}`,
        x = i.useCallback(
            (e, l) => {
                h?.(e, l);
            },
            [h],
        ),
        [{ isDragging: v }, w, b] = (0, s.i)({
            type: m,
            item: { id: a, index: n, itemType: d, itemPreviewProps: u },
            canDrag: p,
            collect: (e) => ({ isDragging: e.isDragging() }),
            end: g,
        });
    i.useEffect(() => {
        f && b((0, c.n)(), { captureDraggingState: !0 });
    }, [b, f]);
    let [{ dragSourcePosition: j }, D] = (0, o.H)({
        accept: m,
        drop: (e) => {
            let l = e.index;
            l !== n && (x(l, n), (e.index = n));
        },
        collect: (e) => {
            let l = e.getItem(),
                t = null;
            return null != l && e.isOver({ shallow: !0 }) && e.canDrop() && (t = l.index), { dragSourcePosition: t };
        },
    });
    return (
        i.useLayoutEffect(
            () => (
                w(l),
                D(t),
                () => {
                    D(null), w(null);
                }
            ),
            [w, l, D, t],
        ),
        { isDragging: v, dragSourcePosition: j }
    );
}
let p = i.memo(function (e) {
    let {
            index: l,
            className: t,
            draggingClassName: r,
            dropBeforeClassName: s,
            dropAfterClassName: o,
            "aria-label": c,
            children: d,
            ...u
        } = e,
        h = i.useRef(null),
        { isDragging: g, dragSourcePosition: p } = f({ dragRef: h, dropRef: h, index: l, ...u }),
        m = null != p,
        x = m && l < p,
        v = m && l > p;
    return (0, n.jsx)("div", { ref: h, className: a()(t, g && r, x && s, v && o), "aria-label": c, children: d });
});
function m(e) {
    let { buttonRef: l, "aria-label": t, iconSize: i = "sm", ...r } = e;
    return (0, n.jsx)(d.u, {
        body: g.intl.format(g.t["zvln/l"], { emphasizeHook: (e) => (0, n.jsx)("strong", { children: e }) }),
        ariaHidden: !0,
        children: (0, n.jsx)(u.D, {
            innerRef: l,
            "aria-label": t ?? g.intl.string(g.t.n9T3Hi),
            "aria-keyshortcuts": "Control+D, Meta+D",
            ...r,
            children: (0, n.jsx)(h.W, { size: i, color: "currentColor" }),
        }),
    });
}
