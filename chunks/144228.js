"use strict";
n.d(t, { z: () => p, T: () => T });
var i = n(627968),
    r = n(64700),
    a = n(503698),
    s = n.n(a),
    l = n(961165),
    o = n(129844),
    d = n(187322),
    c = n(452027),
    u = n(331322),
    _ = n(834730),
    E = n(162545);
function A(e) {
    let { disabled: t, isSelected: n } = e,
        [a, l] = (0, r.useState)(void 0),
        o = (0, r.useRef)(!1);
    return (
        (0, r.useEffect)(() => {
            if (!o.current) {
                o.current = !0;
                return;
            }
            l(n ? "animateIn" : "animateOut");
        }, [n]),
        (0, i.jsx)("div", {
            className: s()([E.standaloneRadioIndicator, "string" == typeof a && E[a]]),
            "data-selected": n,
            "data-disabled": t,
            children: (0, i.jsx)(h, {}),
        })
    );
}
function h() {
    return (0, i.jsxs)("svg", {
        "aria-hidden": "true",
        focusable: "false",
        className: E.radioIndicator,
        width: 20,
        height: 20,
        viewBox: "0 0 40 40",
        fill: "none",
        shapeRendering: "geometricPrecision",
        children: [
            (0, i.jsx)("circle", { cx: 20, cy: 20, r: 20, className: E.outerRadioBase }),
            (0, i.jsx)("circle", { cx: 20, cy: 20, r: 20, className: E.outerRadioFill }),
            (0, i.jsx)("circle", { cx: 20, cy: 20, r: 8, className: E.innerDotRadio }),
        ],
    });
}
function I(e) {
    let { desc: t, disabled: n, leadingIcon: a, name: c, value: A, isSelected: I } = e,
        f = (0, r.useRef)(null),
        p = (0, r.useRef)(null),
        [T, m] = (0, r.useState)(void 0),
        g = (0, r.useRef)(!1);
    return (
        (0, r.useEffect)(() => {
            if (!g.current) {
                g.current = !0;
                return;
            }
            m(I ? "animateIn" : "animateOut");
        }, [I]),
        (0, i.jsx)(d.vN, {
            focusTarget: f,
            ringTarget: f,
            within: !0,
            children: (0, i.jsxs)(l.sx, {
                className: s()([E.radioGroupOption, "string" == typeof T && E[T]]),
                value: A,
                isDisabled: n,
                inputRef: p,
                ref: f,
                children: [
                    (0, i.jsx)(h, {}),
                    (0, i.jsxs)(u.B, {
                        gap: 4,
                        children: [
                            (0, i.jsxs)(o.J, {
                                className: E.label,
                                children: [
                                    null != a &&
                                        (0, i.jsx)(a, {
                                            className: E.radioItemIcon,
                                            size: "sm",
                                            color: "currentColor",
                                            "aria-hidden": !0,
                                            focusable: !1,
                                        }),
                                    (0, i.jsx)(_.E, { variant: "text-md/normal", children: c }),
                                ],
                            }),
                            null != t && "" !== t
                                ? (0, i.jsx)(_.E, { variant: "text-sm/normal", color: "text-subtle", children: t })
                                : null,
                        ],
                    }),
                ],
            }),
        })
    );
}
function f(e) {
    let { onChange: t, options: n, value: r, disabled: a = !1, "aria-labelledby": s, ...o } = e,
        d =
            null != t
                ? (e) => {
                      let i = n.find((t) => String(t.value) === e);
                      null != i && t(i.value);
                  }
                : void 0;
    return (0, i.jsx)(c.D, {
        ...o,
        children: (e) =>
            (0, i.jsx)(l.z6, {
                id: e.controlId,
                className: E.group,
                isDisabled: a,
                onChange: d,
                "aria-labelledby": s ?? e.labelId,
                "aria-describedby": e.describedById,
                "aria-errormessage": e.errorMessageId,
                "data-mana-component": "BaseRadioGroup",
                value: null != r ? String(r) : void 0,
                children: n.map((e, t) =>
                    (0, i.jsx)(
                        I,
                        { index: t, ...e, value: String(e.value), isSelected: r === e.value },
                        String(e.value),
                    ),
                ),
            }),
    });
}
function p(e) {
    return (0, i.jsx)(f, { ...e });
}
function T(e) {
    let { disabled: t, checked: n } = e;
    return (0, i.jsx)(A, { disabled: t, isSelected: n });
}
