t.d(s, { f: () => p });
var i = t(980807),
    d = t(527717),
    l = t(271644),
    o = t(748516),
    a = t(892730),
    r = t(519837),
    n = t(582128),
    c = t(461062),
    u = t(736570),
    b = t(599291),
    v = t(630165);
let S = (0, n.createContext)({}),
    p = (0, n.forwardRef)(function (e, s) {
        [e, s] = (0, i.JT)(e, s, S);
        let t = (0, n.useContext)(l.G0),
            p = (0, c.H)(
                t && null != e.id
                    ? {
                          isSelected: t.selectedKeys.has(e.id),
                          onChange(s) {
                              t.setSelected(e.id, s);
                          },
                      }
                    : e,
            ),
            {
                buttonProps: g,
                isPressed: f,
                isSelected: P,
                isDisabled: h,
            } = t && null != e.id
                ? (0, v.O)({ ...e, id: e.id }, t, s)
                : (0, o.q)({ ...e, id: null != e.id ? String(e.id) : void 0 }, p, s),
            { focusProps: D, isFocused: y, isFocusVisible: K } = (0, u.o)(e),
            { hoverProps: m, isHovered: C } = (0, b.M)({ ...e, isDisabled: h }),
            w = (0, i.Sl)({
                ...e,
                id: void 0,
                values: {
                    isHovered: C,
                    isPressed: f,
                    isFocused: y,
                    isSelected: p.isSelected,
                    isFocusVisible: K,
                    isDisabled: h,
                    state: p,
                },
                defaultClassName: "react-aria-ToggleButton",
            }),
            M = (0, a.$)(e, { global: !0 });
        return (
            delete M.id,
            delete M.onClick,
            n.createElement(
                i.tT.button,
                {
                    ...(0, r.v)(M, w, g, D, m),
                    ref: s,
                    slot: e.slot || void 0,
                    "data-focused": y || void 0,
                    "data-disabled": h || void 0,
                    "data-pressed": f || void 0,
                    "data-selected": P || void 0,
                    "data-hovered": C || void 0,
                    "data-focus-visible": K || void 0,
                },
                n.createElement(d.r.Provider, { value: { isSelected: P } }, w.children),
            )
        );
    });
