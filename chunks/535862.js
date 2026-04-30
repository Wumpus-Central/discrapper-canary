"use strict";
s.d(t, { f: () => f });
var i = s(825913),
    l = s(123375),
    r = s(322408),
    a = s(250634),
    o = s(331250),
    d = s(498430),
    n = s(967158),
    u = s(318473),
    c = s(290424),
    p = s(64700),
    h = s(823807);
let b = (0, p.createContext)({}),
    f = (0, p.forwardRef)(function (e, t) {
        [e, t] = (0, i.JT)(e, t, b);
        let s = (0, p.useContext)(r.G0),
            f = (0, h.H)(
                s && null != e.id
                    ? {
                          isSelected: s.selectedKeys.has(e.id),
                          onChange(t) {
                              s.setSelected(e.id, t);
                          },
                      }
                    : e,
            ),
            {
                buttonProps: g,
                isPressed: v,
                isSelected: y,
                isDisabled: P,
            } = s && null != e.id
                ? (0, a.O)({ ...e, id: e.id }, s, t)
                : (0, o.q)({ ...e, id: null != e.id ? String(e.id) : void 0 }, f, t),
            { focusProps: x, isFocused: m, isFocusVisible: S } = (0, d.o)(e),
            { hoverProps: E, isHovered: w } = (0, n.M)(e),
            C = (0, i.Sl)({
                ...e,
                id: void 0,
                values: {
                    isHovered: w,
                    isPressed: v,
                    isFocused: m,
                    isSelected: f.isSelected,
                    isFocusVisible: S,
                    isDisabled: P,
                    state: f,
                },
                defaultClassName: "react-aria-ToggleButton",
            }),
            D = (0, c.$)(e, { global: !0 });
        return (
            delete D.id,
            delete D.onClick,
            p.createElement(
                "button",
                {
                    ...(0, u.v)(D, C, g, x, E),
                    ref: t,
                    slot: e.slot || void 0,
                    "data-focused": m || void 0,
                    "data-disabled": P || void 0,
                    "data-pressed": v || void 0,
                    "data-selected": y || void 0,
                    "data-hovered": w || void 0,
                    "data-focus-visible": S || void 0,
                },
                p.createElement(l.r.Provider, { value: { isSelected: y } }, C.children),
            )
        );
    });
