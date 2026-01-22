n.d(t, {
    f: () => h,
});
var r = n(825913),
    i = n(123375),
    a = n(912687),
    s = n(587771),
    o = n(331250),
    l = n(498430),
    c = n(967158),
    u = n(803082),
    d = n(290424),
    f = n(64700),
    p = n(823807);
let _ = (0, f.createContext)({}),
    h = (0, f.forwardRef)(function (e, t) {
        [e, t] = (0, r.JT)(e, t, _);
        let n = (0, f.useContext)(a.G0),
            h = (0, p.H)(
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
                isDisabled: b,
            } = n && null != e.id
                ? (0, s.O)(
                      {
                          ...e,
                          id: e.id,
                      },
                      n,
                      t,
                  )
                : (0, o.q)(
                      {
                          ...e,
                          id: null != e.id ? String(e.id) : void 0,
                      },
                      h,
                      t,
                  ),
            { focusProps: y, isFocused: O, isFocusVisible: A } = (0, l.o)(e),
            { hoverProps: v, isHovered: S } = (0, c.M)(e),
            I = (0, r.Sl)({
                ...e,
                id: void 0,
                values: {
                    isHovered: S,
                    isPressed: g,
                    isFocused: O,
                    isSelected: h.isSelected,
                    isFocusVisible: A,
                    isDisabled: b,
                    state: h,
                },
                defaultClassName: "react-aria-ToggleButton",
            }),
            T = (0, d.$)(e, {
                global: !0,
            });
        return (
            delete T.id,
            delete T.onClick,
            f.createElement(
                "button",
                {
                    ...(0, u.v)(T, I, m, y, v),
                    ref: t,
                    slot: e.slot || void 0,
                    "data-focused": O || void 0,
                    "data-disabled": b || void 0,
                    "data-pressed": g || void 0,
                    "data-selected": E || void 0,
                    "data-hovered": S || void 0,
                    "data-focus-visible": A || void 0,
                },
                f.createElement(
                    i.r.Provider,
                    {
                        value: {
                            isSelected: E,
                        },
                    },
                    I.children,
                ),
            )
        );
    });
