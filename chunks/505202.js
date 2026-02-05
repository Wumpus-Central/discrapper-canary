"use strict";
n.d(t, { D: () => E });
var r = n(627968),
    i = n(64700),
    a = n(503698),
    s = n.n(a),
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
    g = n(658122);
function E(e) {
    let {
            color: t = "default",
            label: n,
            void_label: a,
            icon: E,
            iconLeft: A,
            leadingAccessory: I,
            trailingIndicator: T,
            shortcut: y,
            subtext: S,
            subtextLineClamp: v,
            hasSubmenu: C,
            loading: b,
            badge: N,
            disabled: R,
            isFocused: O,
            menuItemProps: D,
            action: L,
            onClose: w,
            onFocus: x,
            className: P,
            focusedClassName: M,
            dontCloseOnActionIfHoldingShiftKey: k,
            dontCloseOnAction: U,
            iconProps: G,
        } = e,
        { onSelect: V, onInteraction: F } = i.useContext(u.x),
        B = i.useRef(null),
        j = (0, _.Y)("MenuItem"),
        H = i.useCallback(
            (e) => {
                if ((F?.({ type: u.Q.DEFAULT }), null == L)) return !1;
                (e.shiftKey && k) || U || w(),
                    e.persist(),
                    V?.(),
                    (e.nativeEvent.view ?? window).requestAnimationFrame(() => L(e));
            },
            [L, w, V, k, U, F],
        );
    return (
        i.useEffect(() => {
            O && ((0, c.Y)(B), x?.());
        }, [O, x]),
        (0, r.jsxs)(o.DUT, {
            innerRef: B,
            className: s()(g.item, g.labelContainer, m.jV[t], P, { [g.disabled]: R, [g.focused]: O, [M ?? ""]: O }),
            onClick: R ? void 0 : H,
            "aria-disabled": R,
            ...D,
            "data-menu-item": "true",
            children: [
                j || I?.type === "status"
                    ? null != I && (0, r.jsx)(p.B, { accessory: I, isFocused: O })
                    : (0, d.O)(A)
                      ? A
                      : null != A &&
                        (0, r.jsx)("div", {
                            className: g.iconContainerLeft,
                            children: (0, r.jsx)(A, {
                                color: "currentColor",
                                ...G,
                                className: s()(g.icon, G?.className),
                            }),
                        }),
                (0, r.jsxs)("div", {
                    className: g.label,
                    children: [
                        (0, r.jsx)(f.V, { children: (0, l.J)(a ?? n, e) }),
                        null != S &&
                            (0, r.jsx)(o.EYj, {
                                variant: "text-xs/normal",
                                className: s()(g.subtext, { [g.subtextLineClamp]: null != v }),
                                lineClamp: v,
                                children: S,
                            }),
                    ],
                }),
                null != y && (0, r.jsx)("div", { className: g.shortcutContainer, children: y }),
                null != N &&
                    (0, r.jsx)("div", { className: g.badgeContainer, children: (0, r.jsx)(o.Exy, { type: N }) }),
                b &&
                    (0, r.jsx)("div", {
                        className: g.iconContainer,
                        children: (0, r.jsx)(o.y$y, { type: o.y$y.Type.PULSING_ELLIPSIS }),
                    }),
                j
                    ? null != T && (0, r.jsx)(h.g, { indicator: T })
                    : (0, d.O)(E)
                      ? E
                      : null != E &&
                        (0, r.jsx)("div", {
                            className: g.iconContainer,
                            children: (0, r.jsx)(E, {
                                color: "currentColor",
                                ...G,
                                className: s()(g.icon, G?.className),
                            }),
                        }),
                C &&
                    (0, r.jsx)("div", {
                        className: g.iconContainer,
                        children: (0, r.jsx)(o._BQ, { size: "md", color: "currentColor", className: g.caret }),
                    }),
            ],
        })
    );
}
