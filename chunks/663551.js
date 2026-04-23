"use strict";
n.d(t, { i: () => A });
var r = n(627968),
    i = n(64700),
    s = n(503698),
    a = n.n(s),
    o = n(939249),
    l = n(834730),
    u = n(86968),
    d = n(900283),
    c = n(563014),
    _ = n(745396),
    f = n(954197),
    E = n(298063),
    h = n(112378),
    p = n(52738),
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
            isFocused: O,
            menuItemProps: R,
            action: v,
        } = e,
        { onInteraction: C } = i.useContext(d.x),
        b = (0, E.Y)("MenuRadioItem"),
        D = i.useRef(null);
    i.useEffect(() => {
        O && (0, c.Y)(D);
    }, [O]);
    let L = i.useCallback(
        (e) => {
            v(e), C?.({ type: d.Q.RADIO });
        },
        [v, C],
    );
    return (0, r.jsxs)(o.D, {
        innerRef: D,
        className: a()(g.item, g.labelContainer, m.jV[t], { [g.disabled]: N, [g.focused]: O }),
        onClick: N ? void 0 : L,
        ...R,
        "aria-checked": A,
        "aria-disabled": N,
        children: [
            b
                ? null != y && (0, r.jsx)(p.B, { accessory: y, isFocused: O })
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
                    (0, r.jsx)(h.V, { children: (0, u.J)(s ?? n, { isFocused: O, disabled: N }) }),
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
