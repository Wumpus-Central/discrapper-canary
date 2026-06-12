"use strict";
s.d(t, { f: () => f });
var i = s(825913),
    r = s(123375),
    l = s(322408),
    o = s(250634),
    a = s(331250),
    d = s(498430),
    n = s(967158),
    c = s(318473),
    u = s(290424),
    v = s(64700),
    b = s(823807);
let p = (0, v.createContext)({}),
    f = (0, v.forwardRef)(function (e, t) {
        [e, t] = (0, i.JT)(e, t, p);
        let s = (0, v.useContext)(l.G0),
            f = (0, b.H)(
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
                isPressed: S,
                isSelected: P,
                isDisabled: h,
            } = s && null != e.id
                ? (0, o.O)({ ...e, id: e.id }, s, t)
                : (0, a.q)({ ...e, id: null != e.id ? String(e.id) : void 0 }, f, t),
            { focusProps: y, isFocused: D, isFocusVisible: w } = (0, d.o)(e),
            { hoverProps: K, isHovered: C } = (0, n.M)(e),
            m = (0, i.Sl)({
                ...e,
                id: void 0,
                values: {
                    isHovered: C,
                    isPressed: S,
                    isFocused: D,
                    isSelected: f.isSelected,
                    isFocusVisible: w,
                    isDisabled: h,
                    state: f,
                },
                defaultClassName: "react-aria-ToggleButton",
            }),
            k = (0, u.$)(e, { global: !0 });
        return (
            delete k.id,
            delete k.onClick,
            v.createElement(
                "button",
                {
                    ...(0, c.v)(k, m, g, y, K),
                    ref: t,
                    slot: e.slot || void 0,
                    "data-focused": D || void 0,
                    "data-disabled": h || void 0,
                    "data-pressed": S || void 0,
                    "data-selected": P || void 0,
                    "data-hovered": C || void 0,
                    "data-focus-visible": w || void 0,
                },
                v.createElement(r.r.Provider, { value: { isSelected: P } }, m.children),
            )
        );
    });
