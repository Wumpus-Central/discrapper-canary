n.d(t, { C: () => m });
var r = n(595707),
    i = n(913074),
    a = n(17925),
    o = n(190974),
    s = n(354161),
    l = n(984940),
    c = n(69771),
    u = n(158821),
    d = n(880016),
    f = n(473749),
    p = n(698369);
let _ = (0, f.createContext)({}),
    m = (0, f.forwardRef)(function (e, t) {
        [e, t] = (0, r.pE)(e, t, _);
        let n = (0, f.useContext)(a.K4),
            m = (0, p.l)(
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
                buttonProps: h,
                isPressed: g,
                isSelected: E,
                isDisabled: b,
            } = n && null != e.id
                ? (0, o.U)(
                      {
                          ...e,
                          id: e.id,
                      },
                      n,
                      t,
                  )
                : (0, s.k)(
                      {
                          ...e,
                          id: null != e.id ? String(e.id) : void 0,
                      },
                      m,
                      t,
                  ),
            { focusProps: y, isFocused: O, isFocusVisible: v } = (0, l.F)(e),
            { hoverProps: S, isHovered: I } = (0, c.X)(e),
            T = (0, r.aX)({
                ...e,
                id: void 0,
                values: {
                    isHovered: I,
                    isPressed: g,
                    isFocused: O,
                    isSelected: m.isSelected,
                    isFocusVisible: v,
                    isDisabled: b,
                    state: m,
                },
                defaultClassName: "react-aria-ToggleButton",
            }),
            C = (0, d.z)(e, { global: !0 });
        return (
            delete C.id,
            delete C.onClick,
            f.createElement(
                "button",
                {
                    ...(0, u.d)(C, T, h, y, S),
                    ref: t,
                    slot: e.slot || void 0,
                    "data-focused": O || void 0,
                    "data-disabled": b || void 0,
                    "data-pressed": g || void 0,
                    "data-selected": E || void 0,
                    "data-hovered": I || void 0,
                    "data-focus-visible": v || void 0,
                },
                f.createElement(i.p.Provider, { value: { isSelected: E } }, T.children),
            )
        );
    });
