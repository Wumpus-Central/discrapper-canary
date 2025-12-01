n.d(t, {
    H: () => f,
    L: () => d,
});
var r = n(215614),
    i = n(880016),
    a = n(158821),
    o = n(944576),
    s = n(473749),
    l = n(426902),
    c = n(921448),
    u = n(227399);
let d = new WeakMap();
function f(e, t, n) {
    let { direction: f } = (0, u.j)(),
        p =
            e.keyboardDelegate ||
            new (0, o.d)({
                collection: t.collection,
                ref: n,
                orientation: "horizontal",
                direction: f,
                disabledKeys: t.disabledKeys,
                disabledBehavior: t.selectionManager.disabledBehavior,
            }),
        {
            labelProps: _,
            fieldProps: m,
            descriptionProps: h,
            errorMessageProps: g,
        } = (0, l.U)({
            ...e,
            labelElementType: "span",
        }),
        { gridProps: E } = (0, r.c)(
            {
                ...e,
                ...m,
                keyboardDelegate: p,
                shouldFocusWrap: !0,
                linkBehavior: "override",
                keyboardNavigationBehavior: "tab",
            },
            t,
            n,
        ),
        [b, y] = (0, s.useState)(!1),
        { focusWithinProps: O } = (0, c.L)({ onFocusWithinChange: y }),
        v = (0, i.z)(e),
        S = (0, s.useRef)(t.collection.size);
    return (
        (0, s.useEffect)(() => {
            n.current && S.current > 0 && 0 === t.collection.size && b && n.current.focus(),
                (S.current = t.collection.size);
        }, [t.collection.size, b, n]),
        d.set(t, { onRemove: e.onRemove }),
        {
            gridProps: (0, a.d)(E, v, {
                role: t.collection.size ? "grid" : "group",
                "aria-atomic": !1,
                "aria-relevant": "additions",
                "aria-live": b ? "polite" : "off",
                ...O,
                ...m,
            }),
            labelProps: _,
            descriptionProps: h,
            errorMessageProps: g,
        }
    );
}
