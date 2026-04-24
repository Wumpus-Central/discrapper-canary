"use strict";
s.d(t, { f: () => b });
var i = s(825913),
    l = s(123375),
    r = s(322408),
    a = s(250634),
    o = s(331250),
    n = s(498430),
    d = s(967158),
    u = s(318473),
    c = s(290424),
    p = s(64700),
    f = s(823807);
let h = (0, p.createContext)({}),
    b = (0, p.forwardRef)(function (e, t) {
        [e, t] = (0, i.JT)(e, t, h);
        let s = (0, p.useContext)(r.G0),
            b = (0, f.H)(
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
                buttonProps: v,
                isPressed: g,
                isSelected: y,
                isDisabled: P,
            } = s && null != e.id
                ? (0, a.O)({ ...e, id: e.id }, s, t)
                : (0, o.q)({ ...e, id: null != e.id ? String(e.id) : void 0 }, b, t),
            { focusProps: x, isFocused: m, isFocusVisible: S } = (0, n.o)(e),
            { hoverProps: E, isHovered: w } = (0, d.M)(e),
            C = (0, i.Sl)({
                ...e,
                id: void 0,
                values: {
                    isHovered: w,
                    isPressed: g,
                    isFocused: m,
                    isSelected: b.isSelected,
                    isFocusVisible: S,
                    isDisabled: P,
                    state: b,
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
                    ...(0, u.v)(D, C, v, x, E),
                    ref: t,
                    slot: e.slot || void 0,
                    "data-focused": m || void 0,
                    "data-disabled": P || void 0,
                    "data-pressed": g || void 0,
                    "data-selected": y || void 0,
                    "data-hovered": w || void 0,
                    "data-focus-visible": S || void 0,
                },
                p.createElement(l.r.Provider, { value: { isSelected: y } }, C.children),
            )
        );
    });
