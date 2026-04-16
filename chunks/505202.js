"use strict";
n.d(t, { D: () => g });
var r = n(627968),
    i = n(64700),
    s = n(503698),
    a = n.n(s),
    o = n(158954),
    l = n(86968),
    u = n(900283),
    c = n(563014),
    d = n(745396),
    _ = n(298063),
    f = n(112378),
    p = n(52738),
    h = n(516971),
    m = n(885621),
    E = n(32271);
function g(e) {
    let {
            color: t = "default",
            label: n,
            void_label: s,
            icon: g,
            iconLeft: A,
            leadingAccessory: I,
            trailingIndicator: T,
            shortcut: S,
            subtext: y,
            subtextLineClamp: v,
            hasSubmenu: N,
            loading: C,
            badge: R,
            disabled: O,
            isFocused: b,
            menuItemProps: D,
            action: L,
            onClose: w,
            onFocus: M,
            className: P,
            focusedClassName: x,
            dontCloseOnActionIfHoldingShiftKey: k,
            dontCloseOnAction: U,
            iconProps: G,
        } = e,
        { onSelect: F, onInteraction: V } = i.useContext(u.x),
        B = i.useRef(null),
        H = (0, _.Y)("MenuItem"),
        j = i.useCallback(
            (e) => {
                if ((V?.({ type: u.Q.DEFAULT }), null == L)) return !1;
                (e.shiftKey && k) || U || w(),
                    e.persist(),
                    F?.(),
                    (e.nativeEvent.view ?? window).requestAnimationFrame(() => L(e));
            },
            [L, w, F, k, U, V],
        );
    return (
        i.useEffect(() => {
            b && ((0, c.Y)(B), M?.());
        }, [b, M]),
        (0, r.jsxs)(o.DUT, {
            innerRef: B,
            className: a()(E.item, E.labelContainer, m.jV[t], P, { [E.disabled]: O, [E.focused]: b, [x ?? ""]: b }),
            onClick: O ? void 0 : j,
            "aria-disabled": O,
            ...D,
            "data-menu-item": "true",
            children: [
                H || I?.type === "status"
                    ? null != I && (0, r.jsx)(p.B, { accessory: I, isFocused: b })
                    : (0, d.O)(A)
                      ? A
                      : null != A &&
                        (0, r.jsx)("div", {
                            className: E.iconContainerLeft,
                            children: (0, r.jsx)(A, {
                                color: "currentColor",
                                ...G,
                                className: a()(E.icon, G?.className),
                            }),
                        }),
                (0, r.jsxs)("div", {
                    className: E.label,
                    children: [
                        (0, r.jsx)(f.V, { children: (0, l.J)(s ?? n, e) }),
                        null != y &&
                            (0, r.jsx)(o.EYj, {
                                variant: "text-xs/normal",
                                className: a()(E.subtext, { [E.subtextLineClamp]: null != v }),
                                lineClamp: v,
                                children: y,
                            }),
                    ],
                }),
                null != S && (0, r.jsx)("div", { className: E.shortcutContainer, children: S }),
                null != R &&
                    (0, r.jsx)("div", { className: E.badgeContainer, children: (0, r.jsx)(o.Exy, { type: R }) }),
                C &&
                    (0, r.jsx)("div", {
                        className: E.iconContainer,
                        children: (0, r.jsx)(o.y$y, { type: o.y$y.Type.PULSING_ELLIPSIS }),
                    }),
                H
                    ? null != T && (0, r.jsx)(h.g, { indicator: T })
                    : (0, d.O)(g)
                      ? g
                      : null != g &&
                        (0, r.jsx)("div", {
                            className: E.iconContainer,
                            children: (0, r.jsx)(g, {
                                color: "currentColor",
                                ...G,
                                className: a()(E.icon, G?.className),
                            }),
                        }),
                N &&
                    (0, r.jsx)("div", {
                        className: E.iconContainer,
                        children: (0, r.jsx)(o._BQ, { size: "md", color: "currentColor", className: E.caret }),
                    }),
            ],
        })
    );
}
