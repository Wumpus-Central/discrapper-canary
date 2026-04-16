"use strict";
n.d(t, { i: () => g });
var r = n(627968),
    i = n(64700),
    s = n(503698),
    a = n.n(s),
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
    E = n(32271);
function g(e) {
    let {
            color: t = "default",
            label: n,
            void_label: s,
            checked: g,
            subtext: A,
            subtextLineClamp: I,
            leftIcon: T,
            leadingAccessory: S,
            disabled: y,
            isFocused: v,
            menuItemProps: N,
            action: C,
        } = e,
        { onInteraction: R } = i.useContext(u.x),
        O = (0, f.Y)("MenuRadioItem"),
        b = i.useRef(null);
    i.useEffect(() => {
        v && (0, c.Y)(b);
    }, [v]);
    let D = i.useCallback(
        (e) => {
            C(e), R?.({ type: u.Q.RADIO });
        },
        [C, R],
    );
    return (0, r.jsxs)(o.DUT, {
        innerRef: b,
        className: a()(E.item, E.labelContainer, m.jV[t], { [E.disabled]: y, [E.focused]: v }),
        onClick: y ? void 0 : D,
        ...N,
        "aria-checked": g,
        "aria-disabled": y,
        children: [
            O
                ? null != S && (0, r.jsx)(h.B, { accessory: S, isFocused: v })
                : (0, d.O)(T)
                  ? T
                  : null != T &&
                    (0, r.jsx)("div", {
                        className: E.iconContainerLeft,
                        children: (0, r.jsx)(T, { color: "currentColor", className: E.icon }),
                    }),
            (0, r.jsxs)("div", {
                className: E.label,
                children: [
                    (0, r.jsx)(p.V, { children: (0, l.J)(s ?? n, { isFocused: v, disabled: y }) }),
                    null != A &&
                        (0, r.jsx)(o.EYj, {
                            variant: "text-xs/normal",
                            className: a()(E.subtext, { [E.subtextLineClamp]: null != I }),
                            lineClamp: I,
                            children: A,
                        }),
                ],
            }),
            (0, r.jsx)("div", {
                className: E.iconContainer,
                children: (0, r.jsx)(_.TN6, { checked: g, disabled: y, radioItemIconClassName: E.radioIcon }),
            }),
        ],
    });
}
