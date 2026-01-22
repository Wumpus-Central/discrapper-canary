n.d(t, {
    O: () => d,
    n: () => f,
});
var r = n(333903),
    i = n(290424),
    a = n(803082),
    s = n(138026),
    o = n(64700),
    l = n(447432),
    c = n(744493),
    u = n(853590);
let d = new WeakMap();

function f(e, t, n) {
    let { direction: f } = (0, u.Y)(),
        p =
            e.keyboardDelegate ||
            new (0, s.n)({
                collection: t.collection,
                ref: n,
                orientation: "horizontal",
                direction: f,
                disabledKeys: t.disabledKeys,
                disabledBehavior: t.selectionManager.disabledBehavior,
            }),
        {
            labelProps: _,
            fieldProps: h,
            descriptionProps: m,
            errorMessageProps: g,
        } = (0, l.M)({
            ...e,
            labelElementType: "span",
        }),
        { gridProps: E } = (0, r.I)(
            {
                ...e,
                ...h,
                keyboardDelegate: p,
                shouldFocusWrap: !0,
                linkBehavior: "override",
                keyboardNavigationBehavior: "tab",
            },
            t,
            n,
        ),
        [b, y] = (0, o.useState)(!1),
        { focusWithinProps: O } = (0, c.R)({
            onFocusWithinChange: y,
        }),
        A = (0, i.$)(e),
        v = (0, o.useRef)(t.collection.size);
    return (
        (0, o.useEffect)(() => {
            n.current && v.current > 0 && 0 === t.collection.size && b && n.current.focus(),
                (v.current = t.collection.size);
        }, [t.collection.size, b, n]),
        d.set(t, {
            onRemove: e.onRemove,
        }),
        {
            gridProps: (0, a.v)(E, A, {
                role: t.collection.size ? "grid" : "group",
                "aria-atomic": !1,
                "aria-relevant": "additions",
                "aria-live": b ? "polite" : "off",
                ...O,
                ...h,
            }),
            labelProps: _,
            descriptionProps: m,
            errorMessageProps: g,
        }
    );
}
