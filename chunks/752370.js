"use strict";
n.d(t, { g: () => p, k: () => E });
var r = n(627968),
    i = n(64700),
    s = n(503698),
    a = n.n(s),
    o = n(118952),
    l = n(129844),
    u = n(426333),
    c = n(452027),
    d = n(331322),
    _ = n(834730),
    f = n(162545);
function p(e) {
    let { disabled: t, isSelected: n } = e,
        [s, o] = (0, i.useState)(void 0),
        l = (0, i.useRef)(!1);
    return (
        (0, i.useEffect)(() => {
            if (!l.current) {
                l.current = !0;
                return;
            }
            o(n ? "animateIn" : "animateOut");
        }, [n]),
        (0, r.jsx)("div", {
            className: a()([f.standaloneRadioIndicator, "string" == typeof s && f[s]]),
            "data-selected": n,
            "data-disabled": t,
            children: (0, r.jsx)(h, {}),
        })
    );
}
function h() {
    return (0, r.jsxs)("svg", {
        className: f.radioIndicator,
        width: 20,
        height: 20,
        viewBox: "0 0 40 40",
        fill: "none",
        shapeRendering: "geometricPrecision",
        children: [
            (0, r.jsx)("circle", { cx: 20, cy: 20, r: 20, className: f.outerRadioBase }),
            (0, r.jsx)("circle", { cx: 20, cy: 20, r: 20, className: f.outerRadioFill }),
            (0, r.jsx)("circle", { cx: 20, cy: 20, r: 8, className: f.innerDotRadio }),
        ],
    });
}
function m(e) {
    let { desc: t, disabled: n, leadingIcon: s, name: c, value: p, isSelected: m } = e,
        E = (0, i.useRef)(null),
        g = (0, i.useRef)(null),
        [A, I] = (0, i.useState)(void 0),
        T = (0, i.useRef)(!1);
    return (
        (0, i.useEffect)(() => {
            if (!T.current) {
                T.current = !0;
                return;
            }
            I(m ? "animateIn" : "animateOut");
        }, [m]),
        (0, r.jsx)(u.vN, {
            focusTarget: E,
            ringTarget: E,
            within: !0,
            children: (0, r.jsxs)(o.sx, {
                className: a()([f.radioGroupOption, "string" == typeof A && f[A]]),
                value: p,
                isDisabled: n,
                inputRef: g,
                ref: E,
                children: [
                    (0, r.jsx)(h, {}),
                    (0, r.jsxs)(d.B, {
                        gap: 4,
                        children: [
                            (0, r.jsxs)(l.J, {
                                className: f.label,
                                children: [
                                    null != s &&
                                        (0, r.jsx)(s, {
                                            className: f.radioItemIcon,
                                            size: "sm",
                                            color: "currentColor",
                                            "aria-hidden": !0,
                                            focusable: !1,
                                        }),
                                    (0, r.jsx)(_.E, { variant: "text-md/normal", children: c }),
                                ],
                            }),
                            null != t && "" !== t
                                ? (0, r.jsx)(_.E, { variant: "text-sm/normal", color: "text-subtle", children: t })
                                : null,
                        ],
                    }),
                ],
            }),
        })
    );
}
function E(e) {
    let { onChange: t, options: n, value: i, disabled: s = !1, "aria-labelledby": a, ...l } = e,
        u =
            null != t
                ? (e) => {
                      let r = n.find((t) => String(t.value) === e);
                      null != r && t(r.value);
                  }
                : void 0;
    return (0, r.jsx)(c.D, {
        ...l,
        children: (e) =>
            (0, r.jsx)(o.z6, {
                id: e.controlId,
                className: f.group,
                isDisabled: s,
                onChange: u,
                "aria-labelledby": a ?? e.labelId,
                "aria-describedby": e.describedById,
                "aria-errormessage": e.errorMessageId,
                "data-mana-component": "BaseRadioGroup",
                value: null != i ? String(i) : void 0,
                children: n.map((e, t) =>
                    (0, r.jsx)(
                        m,
                        { index: t, ...e, value: String(e.value), isSelected: i === e.value },
                        String(e.value),
                    ),
                ),
            }),
    });
}
