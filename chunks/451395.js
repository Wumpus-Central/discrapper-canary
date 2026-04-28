t.d(l, { gY: () => h, jV: () => x, mG: () => A });
var s = t(627968),
    i = t(64700),
    n = t(503698),
    a = t.n(n),
    r = t(312742),
    o = t(295868),
    d = t(352944),
    c = t(459192),
    u = t(939249),
    p = t(772838),
    m = t(985018);
function h(e) {
    let {
            dragRef: l,
            dropRef: t,
            index: s,
            listType: n,
            itemId: a,
            itemType: c,
            itemPreviewProps: u,
            onReorder: p,
            onEnd: m,
            disableDefaultPreview: h = !0,
        } = e,
        A = `${c}_${n}`,
        x = i.useCallback(
            (e, l) => {
                p?.(e, l);
            },
            [p],
        ),
        [{ isDragging: f }, g, I] = (0, r.i)({
            type: A,
            item: { id: a, index: s, itemType: c, itemPreviewProps: u },
            collect: (e) => ({ isDragging: e.isDragging() }),
            end: m,
        });
    i.useEffect(() => {
        h && I((0, d.n)(), { captureDraggingState: !0 });
    }, [I, h]);
    let [{ dragSourcePosition: j }, y] = (0, o.H)({
        accept: A,
        drop: (e) => {
            let l = e.index;
            l !== s && (x(l, s), (e.index = s));
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
                g(l),
                y(t),
                () => {
                    y(null), g(null);
                }
            ),
            [g, l, y, t],
        ),
        { isDragging: f, dragSourcePosition: j }
    );
}
let A = i.memo(function (e) {
    let {
            index: l,
            className: t,
            draggingClassName: n,
            dropBeforeClassName: r,
            dropAfterClassName: o,
            "aria-label": d,
            children: c,
            ...u
        } = e,
        p = i.useRef(null),
        { isDragging: m, dragSourcePosition: A } = h({ dragRef: p, dropRef: p, index: l, ...u }),
        x = null != A,
        f = x && l < A,
        g = x && l > A;
    return (0, s.jsx)("div", { ref: p, className: a()(t, m && n, f && r, g && o), "aria-label": d, children: c });
});
function x(e) {
    let { buttonRef: l, "aria-label": t, iconSize: i = "sm", ...n } = e;
    return (0, s.jsx)(c.u, {
        body: m.intl.format(m.t["zvln/l"], { emphasizeHook: (e) => (0, s.jsx)("strong", { children: e }) }),
        ariaHidden: !0,
        children: (0, s.jsx)(u.D, {
            innerRef: l,
            "aria-label": t ?? m.intl.string(m.t.n9T3Hi),
            "aria-keyshortcuts": "Control+D, Meta+D",
            ...n,
            children: (0, s.jsx)(p.W, { size: i, color: "currentColor" }),
        }),
    });
}
