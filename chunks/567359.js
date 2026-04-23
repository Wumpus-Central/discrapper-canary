"use strict";
n.d(t, { O: () => d, n: () => _ });
var r = n(333903),
    i = n(290424),
    s = n(803082),
    a = n(138026),
    o = n(64700),
    l = n(447432),
    u = n(744493),
    c = n(853590);
let d = new WeakMap();
function _(e, t, n) {
    let { direction: _ } = (0, c.Y)(),
        f =
            e.keyboardDelegate ||
            new (0, a.n)({
                collection: t.collection,
                ref: n,
                orientation: "horizontal",
                direction: _,
                disabledKeys: t.disabledKeys,
                disabledBehavior: t.selectionManager.disabledBehavior,
            }),
        {
            labelProps: p,
            fieldProps: h,
            descriptionProps: E,
            errorMessageProps: m,
        } = (0, l.M)({ ...e, labelElementType: "span" }),
        { gridProps: g } = (0, r.I)(
            {
                ...e,
                ...h,
                keyboardDelegate: f,
                shouldFocusWrap: !0,
                linkBehavior: "override",
                keyboardNavigationBehavior: "tab",
            },
            t,
            n,
        ),
        [A, I] = (0, o.useState)(!1),
        { focusWithinProps: T } = (0, u.R)({ onFocusWithinChange: I }),
        S = (0, i.$)(e),
        y = (0, o.useRef)(t.collection.size);
    return (
        (0, o.useEffect)(() => {
            n.current && y.current > 0 && 0 === t.collection.size && A && n.current.focus(),
                (y.current = t.collection.size);
        }, [t.collection.size, A, n]),
        d.set(t, { onRemove: e.onRemove }),
        {
            gridProps: (0, s.v)(g, S, {
                role: t.collection.size ? "grid" : "group",
                "aria-atomic": !1,
                "aria-relevant": "additions",
                "aria-live": A ? "polite" : "off",
                ...T,
                ...h,
            }),
            labelProps: p,
            descriptionProps: E,
            errorMessageProps: m,
        }
    );
}
