"use strict";
n.d(t, { J: () => p });
var r = n(627968),
    i = n(64700),
    s = n(503698),
    a = n.n(s),
    o = n(129844),
    l = n(974213),
    u = n(187322),
    c = n(820081),
    d = n(331322),
    _ = n(834730),
    f = n(197452);
function p(e) {
    let {
            checked: t,
            description: n,
            onChange: s,
            disabled: p = !1,
            displayOnly: h,
            label: E,
            labeledBy: m,
            leadingIcon: g,
            value: A,
            labelType: I = "primary",
            usageVariant: T = "single",
        } = e,
        S = (0, i.useRef)(null),
        y = (0, i.useRef)(null),
        N = (0, i.useRef)(null),
        [v, C] = (0, i.useState)(void 0),
        O = (0, i.useRef)(!1),
        R = null != g ? g : null;
    (0, i.useEffect)(() => {
        if (!O.current) {
            O.current = !0;
            return;
        }
        C(t ? "animateIn" : "animateOut");
    }, [t]);
    let b = a()(f.checkboxOption, "string" == typeof v && f[v], "indicator" !== T && f.spacing),
        D = (0, r.jsxs)(r.Fragment, {
            children: [
                (0, r.jsxs)("div", {
                    className: f.checkboxIndicator,
                    ref: S,
                    "aria-hidden": !0,
                    children: [
                        (0, r.jsx)("svg", {
                            className: f.checkmark,
                            width: 20,
                            height: 20,
                            viewBox: "0 0 20 20",
                            fill: "none",
                            "aria-hidden": !0,
                            children: (0, r.jsx)("circle", {
                                className: f.dot,
                                cx: "10",
                                cy: "10",
                                r: "1.1",
                                fill: "currentColor",
                            }),
                        }),
                        (0, r.jsx)(c.B, { className: f.checkStroke, size: "sm", color: "currentColor" }),
                    ],
                }),
                null != E &&
                    "" !== E &&
                    (0, r.jsxs)(d.B, {
                        gap: 4,
                        children: [
                            (0, r.jsxs)(o.J, {
                                className: f.label,
                                children: [
                                    null != R &&
                                        (0, r.jsx)(R, {
                                            className: f.leadingIcon,
                                            size: "sm",
                                            color: "currentColor",
                                            "aria-hidden": !0,
                                            focusable: !1,
                                        }),
                                    (0, r.jsx)(_.E, {
                                        variant: "text-md/normal",
                                        color: "primary" === I ? "text-strong" : "text-subtle",
                                        children: E,
                                    }),
                                ],
                            }),
                            null != n &&
                                "" !== n &&
                                (0, r.jsx)(_.E, { variant: "text-sm/normal", color: "text-subtle", children: n }),
                        ],
                    }),
            ],
        });
    return h
        ? (0, r.jsx)("div", { className: b, "data-selected": t || void 0, "data-disabled": p || void 0, children: D })
        : (0, r.jsx)(u.vN, {
              focusTarget: y,
              ringTarget: N,
              children: (0, r.jsx)(l.Sc, {
                  ref: N,
                  inputRef: y,
                  "aria-labelledby": m,
                  isSelected: t,
                  onChange: (e) => {
                      null != s && s(e);
                  },
                  isDisabled: p,
                  isReadOnly: h,
                  "data-mana-component": "checkbox",
                  className: b,
                  value: String(A),
                  children: D,
              }),
          });
}
