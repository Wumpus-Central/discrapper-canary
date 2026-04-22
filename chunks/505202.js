"use strict";
n.d(t, { D: () => S });
var r = n(627968),
    i = n(64700),
    s = n(503698),
    a = n.n(s),
    o = n(939249),
    l = n(834730),
    u = n(508770),
    d = n(289873),
    c = n(320448),
    _ = n(86968),
    f = n(900283),
    E = n(563014),
    h = n(745396),
    p = n(298063),
    m = n(112378),
    g = n(52738),
    A = n(516971),
    I = n(885621),
    T = n(359823);
function S(e) {
    let {
            color: t = "default",
            label: n,
            void_label: s,
            icon: S,
            iconLeft: y,
            leadingAccessory: N,
            trailingIndicator: O,
            shortcut: R,
            subtext: v,
            subtextLineClamp: C,
            hasSubmenu: b,
            loading: D,
            badge: L,
            disabled: w,
            isFocused: M,
            menuItemProps: P,
            action: U,
            onClose: k,
            onFocus: x,
            className: G,
            focusedClassName: V,
            dontCloseOnActionIfHoldingShiftKey: F,
            dontCloseOnAction: B,
            iconProps: H,
        } = e,
        { onSelect: Y, onInteraction: W } = i.useContext(f.x),
        j = i.useRef(null),
        K = (0, p.Y)("MenuItem"),
        $ = i.useCallback(
            (e) => {
                if ((W?.({ type: f.Q.DEFAULT }), null == U)) return !1;
                (e.shiftKey && F) || B || k(),
                    e.persist(),
                    Y?.(),
                    (e.nativeEvent.view ?? window).requestAnimationFrame(() => U(e));
            },
            [U, k, Y, F, B, W],
        );
    return (
        i.useEffect(() => {
            M && ((0, E.Y)(j), x?.());
        }, [M, x]),
        (0, r.jsxs)(o.D, {
            innerRef: j,
            className: a()(T.item, T.labelContainer, I.jV[t], G, { [T.disabled]: w, [T.focused]: M, [V ?? ""]: M }),
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
                        null != v &&
                            (0, r.jsx)(l.E, {
                                variant: "text-xs/normal",
                                className: a()(T.subtext, { [T.subtextLineClamp]: null != C }),
                                lineClamp: C,
                                children: v,
                            }),
                    ],
                }),
                null != R && (0, r.jsx)("div", { className: T.shortcutContainer, children: R }),
                null != L && (0, r.jsx)("div", { className: T.badgeContainer, children: (0, r.jsx)(u.E, { type: L }) }),
                D &&
                    (0, r.jsx)("div", {
                        className: T.iconContainer,
                        children: (0, r.jsx)(d.y, { type: d.y.Type.PULSING_ELLIPSIS }),
                    }),
                K
                    ? null != O && (0, r.jsx)(A.g, { indicator: O })
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
                        children: (0, r.jsx)(c._, { size: "md", color: "currentColor", className: T.caret }),
                    }),
            ],
        })
    );
}
