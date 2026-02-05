"use strict";
n.d(t, { f: () => h });
var r = n(825913),
    i = n(123375),
    a = n(912687),
    s = n(587771),
    o = n(331250),
    l = n(498430),
    u = n(967158),
    c = n(803082),
    d = n(290424),
    _ = n(64700),
    f = n(823807);
let p = (0, _.createContext)({}),
    h = (0, _.forwardRef)(function (e, t) {
        [e, t] = (0, r.JT)(e, t, p);
        let n = (0, _.useContext)(a.G0),
            h = (0, f.H)(
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
                buttonProps: m,
                isPressed: g,
                isSelected: E,
                isDisabled: A,
            } = n && null != e.id
                ? (0, s.O)({ ...e, id: e.id }, n, t)
                : (0, o.q)({ ...e, id: null != e.id ? String(e.id) : void 0 }, h, t),
            { focusProps: I, isFocused: T, isFocusVisible: y } = (0, l.o)(e),
            { hoverProps: S, isHovered: v } = (0, u.M)(e),
            C = (0, r.Sl)({
                ...e,
                id: void 0,
                values: {
                    isHovered: v,
                    isPressed: g,
                    isFocused: T,
                    isSelected: h.isSelected,
                    isFocusVisible: y,
                    isDisabled: A,
                    state: h,
                },
                defaultClassName: "react-aria-ToggleButton",
            }),
            b = (0, d.$)(e, { global: !0 });
        return (
            delete b.id,
            delete b.onClick,
            _.createElement(
                "button",
                {
                    ...(0, c.v)(b, C, m, I, S),
                    ref: t,
                    slot: e.slot || void 0,
                    "data-focused": T || void 0,
                    "data-disabled": A || void 0,
                    "data-pressed": g || void 0,
                    "data-selected": E || void 0,
                    "data-hovered": v || void 0,
                    "data-focus-visible": y || void 0,
                },
                _.createElement(i.r.Provider, { value: { isSelected: E } }, C.children),
            )
        );
    });
