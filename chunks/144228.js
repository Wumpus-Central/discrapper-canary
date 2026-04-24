"use strict";
n.d(t, { z: () => I, T: () => T });
var i = n(627968),
    r = n(64700),
    s = n(460890),
    a = n(503698),
    o = n.n(a),
    l = n(961165),
    d = n(129844),
    _ = n(187322),
    u = n(452027),
    c = n(331322),
    E = n(834730),
    h = n(162545);
function m(e) {
    let { disabled: t, isSelected: n } = e,
        [s, a] = (0, r.useState)(void 0),
        l = (0, r.useRef)(!1);
    return (
        (0, r.useEffect)(() => {
            if (!l.current) {
                l.current = !0;
                return;
            }
            a(n ? "animateIn" : "animateOut");
        }, [n]),
        (0, i.jsx)("div", {
            className: o()([h.standaloneRadioIndicator, "string" == typeof s && h[s]]),
            "data-selected": n,
            "data-disabled": t,
            children: (0, i.jsx)(f, {}),
        })
    );
}
function f() {
    return (0, i.jsxs)("svg", {
        "aria-hidden": "true",
        focusable: "false",
        className: h.radioIndicator,
        width: 20,
        height: 20,
        viewBox: "0 0 40 40",
        fill: "none",
        shapeRendering: "geometricPrecision",
        children: [
            (0, i.jsx)("circle", { cx: 20, cy: 20, r: 20, className: h.outerRadioBase }),
            (0, i.jsx)("circle", { cx: 20, cy: 20, r: 20, className: h.outerRadioFill }),
            (0, i.jsx)("circle", { cx: 20, cy: 20, r: 8, className: h.innerDotRadio }),
        ],
    });
}
function g(e) {
    let { desc: t, disabled: n, leadingIcon: s, name: a, value: u, isSelected: m } = e,
        g = (0, r.useRef)(null),
        p = (0, r.useRef)(null),
        [A, I] = (0, r.useState)(void 0),
        T = (0, r.useRef)(!1);
    return (
        (0, r.useEffect)(() => {
            if (!T.current) {
                T.current = !0;
                return;
            }
            I(m ? "animateIn" : "animateOut");
        }, [m]),
        (0, i.jsx)(_.vN, {
            focusTarget: g,
            ringTarget: g,
            within: !0,
            children: (0, i.jsxs)(l.sx, {
                className: o()([h.radioGroupOption, "string" == typeof A && h[A]]),
                value: u,
                isDisabled: n,
                inputRef: p,
                ref: g,
                children: [
                    (0, i.jsx)(f, {}),
                    (0, i.jsxs)(c.B, {
                        gap: 4,
                        children: [
                            (0, i.jsxs)(d.J, {
                                className: h.label,
                                children: [
                                    null != s &&
                                        (0, i.jsx)(s, {
                                            className: h.radioItemIcon,
                                            size: "sm",
                                            color: "currentColor",
                                            "aria-hidden": !0,
                                            focusable: !1,
                                        }),
                                    (0, i.jsx)(E.E, { variant: "text-md/normal", children: a }),
                                ],
                            }),
                            null != t && "" !== t
                                ? (0, i.jsx)(E.E, { variant: "text-sm/normal", color: "text-subtle", children: t })
                                : null,
                        ],
                    }),
                ],
            }),
        })
    );
}
function p(e) {
    let { onChange: t, options: n, value: r, disabled: s = !1, "aria-labelledby": a, ...o } = e,
        d =
            null != t
                ? (e) => {
                      let i = n.find((t) => String(t.value) === e);
                      null != i && t(i.value);
                  }
                : void 0;
    return (0, i.jsx)(u.D, {
        ...o,
        children: (e) =>
            (0, i.jsx)(l.z6, {
                id: e.controlId,
                className: h.group,
                isDisabled: s,
                onChange: d,
                "aria-labelledby": a ?? e.labelId,
                "aria-describedby": e.describedById,
                "aria-errormessage": e.errorMessageId,
                "data-mana-component": "BaseRadioGroup",
                value: null != r ? String(r) : void 0,
                children: n.map((e, t) =>
                    (0, i.jsx)(
                        g,
                        { index: t, ...e, value: String(e.value), isSelected: r === e.value },
                        String(e.value),
                    ),
                ),
            }),
    });
}
var A = n(785007);
function I(e) {
    let t = r.useContext(s.VO);
    if (t?.experiments?.enabledExperiments?.includes("mana-toggle-inputs")) return (0, i.jsx)(p, { ...e });
    let { ...n } = e,
        a = e.options.map((e) => ({ ...e, icon: e.leadingIcon, desc: e.desc })),
        o = {
            ...n,
            options: a,
            errorMessage: e.errorMessage,
            onChange: null != e.onChange ? (t) => e.onChange(t.value) : void 0,
        };
    return (0, i.jsx)(A.$d, { ...o });
}
function T(e) {
    let { disabled: t, checked: n, radioItemIconClassName: a } = e,
        o = r.useContext(s.VO);
    return o?.experiments?.enabledExperiments?.includes("mana-toggle-inputs")
        ? (0, i.jsx)(m, { disabled: t, isSelected: n })
        : (0, i.jsx)(A.nG, { checked: n, disabled: t, radioItemIconClassName: a });
}
