"use strict";
n.d(t, { i: () => A });
var r = n(627968),
    i = n(64700),
    s = n(503698),
    a = n.n(s),
    o = n(939249),
    l = n(834730),
    u = n(86968),
    c = n(900283),
    d = n(563014),
    _ = n(745396),
    f = n(954197),
    p = n(298063),
    h = n(112378),
    E = n(52738),
    m = n(885621),
    g = n(32271);
function A(e) {
    let {
            color: t = "default",
            label: n,
            void_label: s,
            checked: A,
            subtext: I,
            subtextLineClamp: T,
            leftIcon: S,
            leadingAccessory: y,
            disabled: N,
            isFocused: v,
            menuItemProps: C,
            action: O,
        } = e,
        { onInteraction: R } = i.useContext(c.x),
        b = (0, p.Y)("MenuRadioItem"),
        D = i.useRef(null);
    i.useEffect(() => {
        v && (0, d.Y)(D);
    }, [v]);
    let L = i.useCallback(
        (e) => {
            O(e), R?.({ type: c.Q.RADIO });
        },
        [O, R],
    );
    return (0, r.jsxs)(o.D, {
        innerRef: D,
        className: a()(g.item, g.labelContainer, m.jV[t], { [g.disabled]: N, [g.focused]: v }),
        onClick: N ? void 0 : L,
        ...C,
        "aria-checked": A,
        "aria-disabled": N,
        children: [
            b
                ? null != y && (0, r.jsx)(E.B, { accessory: y, isFocused: v })
                : (0, _.O)(S)
                  ? S
                  : null != S &&
                    (0, r.jsx)("div", {
                        className: g.iconContainerLeft,
                        children: (0, r.jsx)(S, { color: "currentColor", className: g.icon }),
                    }),
            (0, r.jsxs)("div", {
                className: g.label,
                children: [
                    (0, r.jsx)(h.V, { children: (0, u.J)(s ?? n, { isFocused: v, disabled: N }) }),
                    null != I &&
                        (0, r.jsx)(l.E, {
                            variant: "text-xs/normal",
                            className: a()(g.subtext, { [g.subtextLineClamp]: null != T }),
                            lineClamp: T,
                            children: I,
                        }),
                ],
            }),
            (0, r.jsx)("div", {
                className: g.iconContainer,
                children: (0, r.jsx)(f.T, { checked: A, disabled: N, radioItemIconClassName: g.radioIcon }),
            }),
        ],
    });
}
