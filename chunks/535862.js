"use strict";
n.d(t, { f: () => p });
var i = n(825913),
    r = n(123375),
    s = n(322408),
    a = n(250634),
    o = n(331250),
    l = n(498430),
    u = n(967158),
    c = n(318473),
    d = n(290424),
    _ = n(64700),
    h = n(823807);
let f = (0, _.createContext)({}),
    p = (0, _.forwardRef)(function (e, t) {
        [e, t] = (0, i.JT)(e, t, f);
        let n = (0, _.useContext)(s.G0),
            p = (0, h.H)(
                n && null != e.id
                    ? {
                          isSelected: n.selectedKeys.has(e.id),
                          onChange(t) {
                              n.setSelected(e.id, t);
                          },
                      }
                    : e,
            ),
            {
                buttonProps: E,
                isPressed: m,
                isSelected: g,
                isDisabled: A,
            } = n && null != e.id
                ? (0, a.O)({ ...e, id: e.id }, n, t)
                : (0, o.q)({ ...e, id: null != e.id ? String(e.id) : void 0 }, p, t),
            { focusProps: I, isFocused: T, isFocusVisible: S } = (0, l.o)(e),
            { hoverProps: y, isHovered: C } = (0, u.M)(e),
            N = (0, i.Sl)({
                ...e,
                id: void 0,
                values: {
                    isHovered: C,
                    isPressed: m,
                    isFocused: T,
                    isSelected: p.isSelected,
                    isFocusVisible: S,
                    isDisabled: A,
                    state: p,
                },
                defaultClassName: "react-aria-ToggleButton",
            }),
            v = (0, d.$)(e, { global: !0 });
        return (
            delete v.id,
            delete v.onClick,
            _.createElement(
                "button",
                {
                    ...(0, c.v)(v, N, E, I, y),
                    ref: t,
                    slot: e.slot || void 0,
                    "data-focused": T || void 0,
                    "data-disabled": A || void 0,
                    "data-pressed": m || void 0,
                    "data-selected": g || void 0,
                    "data-hovered": C || void 0,
                    "data-focus-visible": S || void 0,
                },
                _.createElement(r.r.Provider, { value: { isSelected: g } }, N.children),
            )
        );
    });
