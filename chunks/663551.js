"use strict";
n.d(t, { i: () => E });
var r = n(627968),
    i = n(64700),
    a = n(503698),
    s = n.n(a),
    o = n(158954),
    l = n(86968),
    u = n(900283),
    c = n(563014),
    d = n(745396),
    _ = n(397927),
    f = n(298063),
    p = n(112378),
    h = n(52738),
    m = n(885621),
    g = n(658122);
function E(e) {
    let {
            color: t = "default",
            label: n,
            void_label: a,
            checked: E,
            subtext: A,
            subtextLineClamp: I,
            leftIcon: T,
            leadingAccessory: y,
            disabled: S,
            isFocused: v,
            menuItemProps: C,
            action: b,
        } = e,
        { onInteraction: N } = i.useContext(u.x),
        R = (0, f.Y)("MenuRadioItem"),
        O = i.useRef(null);
    i.useEffect(() => {
        v && (0, c.Y)(O);
    }, [v]);
    let D = i.useCallback(
        (e) => {
            b(e), N?.({ type: u.Q.RADIO });
        },
        [b, N],
    );
    return (0, r.jsxs)(o.DUT, {
        innerRef: O,
        className: s()(g.item, g.labelContainer, m.jV[t], { [g.disabled]: S, [g.focused]: v }),
        onClick: S ? void 0 : D,
        ...C,
        "aria-checked": E,
        "aria-disabled": S,
        children: [
            R
                ? null != y && (0, r.jsx)(h.B, { accessory: y, isFocused: v })
                : (0, d.O)(T)
                  ? T
                  : null != T &&
                    (0, r.jsx)("div", {
                        className: g.iconContainerLeft,
                        children: (0, r.jsx)(T, { color: "currentColor", className: g.icon }),
                    }),
            (0, r.jsxs)("div", {
                className: g.label,
                children: [
                    (0, r.jsx)(p.V, { children: (0, l.J)(a ?? n, { isFocused: v, disabled: S }) }),
                    null != A &&
                        (0, r.jsx)(o.EYj, {
                            variant: "text-xs/normal",
                            className: s()(g.subtext, { [g.subtextLineClamp]: null != I }),
                            lineClamp: I,
                            children: A,
                        }),
                ],
            }),
            (0, r.jsx)("div", {
                className: g.iconContainer,
                children: (0, r.jsx)(_.TN6, { checked: E, disabled: S, radioItemIconClassName: g.radioIcon }),
            }),
        ],
    });
}
