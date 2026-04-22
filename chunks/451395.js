"use strict";
n.d(t, { gY: () => p, jV: () => g, mG: () => h });
var a = n(627968),
    i = n(64700),
    r = n(503698),
    l = n.n(r),
    s = n(131346),
    d = n(744818),
    o = n(352944),
    c = n(459192),
    u = n(939249),
    _ = n(772838),
    m = n(985018);
function p(e) {
    let {
            dragRef: t,
            dropRef: n,
            index: a,
            listType: r,
            itemId: l,
            itemType: c,
            itemPreviewProps: u,
            onReorder: _,
            onEnd: m,
            disableDefaultPreview: p = !0,
        } = e,
        h = `${c}_${r}`,
        g = i.useCallback(
            (e, t) => {
                _?.(e, t);
            },
            [_],
        ),
        [{ isDragging: f }, b, A] = (0, s.i)({
            type: h,
            item: { id: l, index: a, itemType: c, itemPreviewProps: u },
            collect: (e) => ({ isDragging: e.isDragging() }),
            end: m,
        });
    i.useEffect(() => {
        p && A((0, o.n)(), { captureDraggingState: !0 });
    }, [A, p]);
    let [{ dragSourcePosition: x }, v] = (0, d.H)({
        accept: h,
        drop: (e) => {
            let t = e.index;
            t !== a && (g(t, a), (e.index = a));
        },
        collect: (e) => {
            let t = e.getItem(),
                n = null;
            return null != t && e.isOver({ shallow: !0 }) && e.canDrop() && (n = t.index), { dragSourcePosition: n };
        },
    });
    return (
        i.useLayoutEffect(
            () => (
                b(t),
                v(n),
                () => {
                    v(null), b(null);
                }
            ),
            [b, t, v, n],
        ),
        { isDragging: f, dragSourcePosition: x }
    );
}
let h = i.memo(function (e) {
    let {
            index: t,
            className: n,
            draggingClassName: r,
            dropBeforeClassName: s,
            dropAfterClassName: d,
            "aria-label": o,
            children: c,
            ...u
        } = e,
        _ = i.useRef(null),
        { isDragging: m, dragSourcePosition: h } = p({ dragRef: _, dropRef: _, index: t, ...u }),
        g = null != h,
        f = g && t < h,
        b = g && t > h;
    return (0, a.jsx)("div", { ref: _, className: l()(n, m && r, f && s, b && d), "aria-label": o, children: c });
});
function g(e) {
    let { buttonRef: t, "aria-label": n, iconSize: i = "sm", ...r } = e;
    return (0, a.jsx)(c.u, {
        body: m.intl.format(m.t["zvln/l"], { emphasizeHook: (e) => (0, a.jsx)("strong", { children: e }) }),
        ariaHidden: !0,
        children: (0, a.jsx)(u.D, {
            innerRef: t,
            "aria-label": n ?? m.intl.string(m.t.n9T3Hi),
            "aria-keyshortcuts": "Control+D, Meta+D",
            ...r,
            children: (0, a.jsx)(_.W, { size: i, color: "currentColor" }),
        }),
    });
}
