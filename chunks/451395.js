"use strict";
n.d(t, { gY: () => m, jV: () => f, mG: () => h });
var a = n(627968),
    r = n(64700),
    i = n(503698),
    l = n.n(i),
    s = n(312742),
    o = n(295868),
    c = n(352944),
    d = n(459192),
    u = n(939249),
    _ = n(772838),
    p = n(985018);
function m(e) {
    let {
            dragRef: t,
            dropRef: n,
            index: a,
            listType: i,
            itemId: l,
            itemType: d,
            itemPreviewProps: u,
            onReorder: _,
            onEnd: p,
            disableDefaultPreview: m = !0,
        } = e,
        h = `${d}_${i}`,
        f = r.useCallback(
            (e, t) => {
                _?.(e, t);
            },
            [_],
        ),
        [{ isDragging: g }, b, v] = (0, s.i)({
            type: h,
            item: { id: l, index: a, itemType: d, itemPreviewProps: u },
            collect: (e) => ({ isDragging: e.isDragging() }),
            end: p,
        });
    r.useEffect(() => {
        m && v((0, c.n)(), { captureDraggingState: !0 });
    }, [v, m]);
    let [{ dragSourcePosition: A }, x] = (0, o.H)({
        accept: h,
        drop: (e) => {
            let t = e.index;
            t !== a && (f(t, a), (e.index = a));
        },
        collect: (e) => {
            let t = e.getItem(),
                n = null;
            return null != t && e.isOver({ shallow: !0 }) && e.canDrop() && (n = t.index), { dragSourcePosition: n };
        },
    });
    return (
        r.useLayoutEffect(
            () => (
                b(t),
                x(n),
                () => {
                    x(null), b(null);
                }
            ),
            [b, t, x, n],
        ),
        { isDragging: g, dragSourcePosition: A }
    );
}
let h = r.memo(function (e) {
    let {
            index: t,
            className: n,
            draggingClassName: i,
            dropBeforeClassName: s,
            dropAfterClassName: o,
            "aria-label": c,
            children: d,
            ...u
        } = e,
        _ = r.useRef(null),
        { isDragging: p, dragSourcePosition: h } = m({ dragRef: _, dropRef: _, index: t, ...u }),
        f = null != h,
        g = f && t < h,
        b = f && t > h;
    return (0, a.jsx)("div", { ref: _, className: l()(n, p && i, g && s, b && o), "aria-label": c, children: d });
});
function f(e) {
    let { buttonRef: t, "aria-label": n, iconSize: r = "sm", ...i } = e;
    return (0, a.jsx)(d.u, {
        body: p.intl.format(p.t["zvln/l"], { emphasizeHook: (e) => (0, a.jsx)("strong", { children: e }) }),
        ariaHidden: !0,
        children: (0, a.jsx)(u.D, {
            innerRef: t,
            "aria-label": n ?? p.intl.string(p.t.n9T3Hi),
            "aria-keyshortcuts": "Control+D, Meta+D",
            ...i,
            children: (0, a.jsx)(_.W, { size: r, color: "currentColor" }),
        }),
    });
}
