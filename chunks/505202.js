"use strict";
n.d(t, { D: () => S });
var r = n(627968),
    i = n(64700),
    s = n(503698),
    a = n.n(s),
    o = n(939249),
    l = n(834730),
    u = n(508770),
    c = n(289873),
    d = n(320448),
    _ = n(86968),
    f = n(900283),
    p = n(563014),
    h = n(745396),
    E = n(298063),
    m = n(112378),
    g = n(52738),
    A = n(516971),
    I = n(885621),
    T = n(32271);
function S(e) {
    let {
            color: t = "default",
            label: n,
            void_label: s,
            icon: S,
            iconLeft: y,
            leadingAccessory: N,
            trailingIndicator: v,
            shortcut: C,
            subtext: O,
            subtextLineClamp: R,
            hasSubmenu: b,
            loading: D,
            badge: L,
            disabled: w,
            isFocused: M,
            menuItemProps: P,
            action: x,
            onClose: k,
            onFocus: U,
            className: G,
            focusedClassName: F,
            dontCloseOnActionIfHoldingShiftKey: V,
            dontCloseOnAction: B,
            iconProps: H,
        } = e,
        { onSelect: j, onInteraction: Y } = i.useContext(f.x),
        W = i.useRef(null),
        K = (0, E.Y)("MenuItem"),
        $ = i.useCallback(
            (e) => {
                if ((Y?.({ type: f.Q.DEFAULT }), null == x)) return !1;
                (e.shiftKey && V) || B || k(),
                    e.persist(),
                    j?.(),
                    (e.nativeEvent.view ?? window).requestAnimationFrame(() => x(e));
            },
            [x, k, j, V, B, Y],
        );
    return (
        i.useEffect(() => {
            M && ((0, p.Y)(W), U?.());
        }, [M, U]),
        (0, r.jsxs)(o.D, {
            innerRef: W,
            className: a()(T.item, T.labelContainer, I.jV[t], G, { [T.disabled]: w, [T.focused]: M, [F ?? ""]: M }),
            onClick: w ? void 0 : $,
            "aria-disabled": w,
            ...P,
            "data-menu-item": "true",
            children: [
                K || N?.type === "status"
                    ? null != N && (0, r.jsx)(g.B, { accessory: N, isFocused: M })
                    : (0, h.O)(y)
                      ? y
                      : null != y &&
                        (0, r.jsx)("div", {
                            className: T.iconContainerLeft,
                            children: (0, r.jsx)(y, {
                                color: "currentColor",
                                ...H,
                                className: a()(T.icon, H?.className),
                            }),
                        }),
                (0, r.jsxs)("div", {
                    className: T.label,
                    children: [
                        (0, r.jsx)(m.V, { children: (0, _.J)(s ?? n, e) }),
                        null != O &&
                            (0, r.jsx)(l.E, {
                                variant: "text-xs/normal",
                                className: a()(T.subtext, { [T.subtextLineClamp]: null != R }),
                                lineClamp: R,
                                children: O,
                            }),
                    ],
                }),
                null != C && (0, r.jsx)("div", { className: T.shortcutContainer, children: C }),
                null != L && (0, r.jsx)("div", { className: T.badgeContainer, children: (0, r.jsx)(u.E, { type: L }) }),
                D &&
                    (0, r.jsx)("div", {
                        className: T.iconContainer,
                        children: (0, r.jsx)(c.y, { type: c.y.Type.PULSING_ELLIPSIS }),
                    }),
                K
                    ? null != v && (0, r.jsx)(A.g, { indicator: v })
                    : (0, h.O)(S)
                      ? S
                      : null != S &&
                        (0, r.jsx)("div", {
                            className: T.iconContainer,
                            children: (0, r.jsx)(S, {
                                color: "currentColor",
                                ...H,
                                className: a()(T.icon, H?.className),
                            }),
                        }),
                b &&
                    (0, r.jsx)("div", {
                        className: T.iconContainer,
                        children: (0, r.jsx)(d._, { size: "md", color: "currentColor", className: T.caret }),
                    }),
            ],
        })
    );
}
