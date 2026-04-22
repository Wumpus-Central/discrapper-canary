"use strict";
n.d(t, { J: () => E });
var r = n(627968),
    i = n(64700),
    s = n(503698),
    a = n.n(s),
    o = n(129844),
    l = n(974213),
    u = n(187322),
    d = n(820081),
    c = n(331322),
    _ = n(834730),
    f = n(197452);
function E(e) {
    let {
            checked: t,
            description: n,
            onChange: s,
            disabled: E = !1,
            displayOnly: h,
            label: p,
            labeledBy: m,
            leadingIcon: g,
            value: A,
            labelType: I = "primary",
            usageVariant: T = "single",
        } = e,
        S = (0, i.useRef)(null),
        y = (0, i.useRef)(null),
        N = (0, i.useRef)(null),
        [O, R] = (0, i.useState)(void 0),
        v = (0, i.useRef)(!1),
        C = null != g ? g : null;
    (0, i.useEffect)(() => {
        if (!v.current) {
            v.current = !0;
            return;
        }
        R(t ? "animateIn" : "animateOut");
    }, [t]);
    let b = a()(f.checkboxOption, "string" == typeof O && f[O], "indicator" !== T && f.spacing),
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
                        (0, r.jsx)(d.B, { className: f.checkStroke, size: "sm", color: "currentColor" }),
                    ],
                }),
                null != p &&
                    "" !== p &&
                    (0, r.jsxs)(c.B, {
                        gap: 4,
                        children: [
                            (0, r.jsxs)(o.J, {
                                className: f.label,
                                children: [
                                    null != C &&
                                        (0, r.jsx)(C, {
                                            className: f.leadingIcon,
                                            size: "sm",
                                            color: "currentColor",
                                            "aria-hidden": !0,
                                            focusable: !1,
                                        }),
                                    (0, r.jsx)(_.E, {
                                        variant: "text-md/normal",
                                        color: "primary" === I ? "text-strong" : "text-subtle",
                                        children: p,
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
        ? (0, r.jsx)("div", { className: b, "data-selected": t || void 0, "data-disabled": E || void 0, children: D })
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
                  isDisabled: E,
                  isReadOnly: h,
                  "data-mana-component": "checkbox",
                  className: b,
                  value: String(A),
                  children: D,
              }),
          });
}
