"use strict";
n.d(t, { J: () => h });
var i = n(627968),
    r = n(64700),
    s = n(503698),
    a = n.n(s),
    o = n(129844),
    l = n(47948),
    d = n(187322),
    _ = n(820081),
    u = n(331322),
    c = n(834730),
    E = n(197452);
function h(e) {
    let {
            checked: t,
            description: n,
            onChange: s,
            disabled: h = !1,
            displayOnly: m,
            label: f,
            labeledBy: g,
            leadingIcon: p,
            value: A,
            labelType: I = "primary",
            usageVariant: T = "single",
        } = e,
        S = (0, r.useRef)(null),
        N = (0, r.useRef)(null),
        C = (0, r.useRef)(null),
        [R, O] = (0, r.useState)(void 0),
        y = (0, r.useRef)(!1),
        v = null != p ? p : null;
    (0, r.useEffect)(() => {
        if (!y.current) {
            y.current = !0;
            return;
        }
        O(t ? "animateIn" : "animateOut");
    }, [t]);
    let D = a()(E.checkboxOption, "string" == typeof R && E[R], "indicator" !== T && E.spacing),
        L = (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsxs)("div", {
                    className: E.checkboxIndicator,
                    ref: S,
                    "aria-hidden": !0,
                    children: [
                        (0, i.jsx)("svg", {
                            className: E.checkmark,
                            width: 20,
                            height: 20,
                            viewBox: "0 0 20 20",
                            fill: "none",
                            "aria-hidden": !0,
                            children: (0, i.jsx)("circle", {
                                className: E.dot,
                                cx: "10",
                                cy: "10",
                                r: "1.1",
                                fill: "currentColor",
                            }),
                        }),
                        (0, i.jsx)(_.B, { className: E.checkStroke, size: "sm", color: "currentColor" }),
                    ],
                }),
                null != f &&
                    "" !== f &&
                    (0, i.jsxs)(u.B, {
                        gap: 4,
                        children: [
                            (0, i.jsxs)(o.J, {
                                className: E.label,
                                children: [
                                    null != v &&
                                        (0, i.jsx)(v, {
                                            className: E.leadingIcon,
                                            size: "sm",
                                            color: "currentColor",
                                            "aria-hidden": !0,
                                            focusable: !1,
                                        }),
                                    (0, i.jsx)(c.E, {
                                        variant: "text-md/normal",
                                        color: "primary" === I ? "text-strong" : "text-subtle",
                                        children: f,
                                    }),
                                ],
                            }),
                            null != n &&
                                "" !== n &&
                                (0, i.jsx)(c.E, { variant: "text-sm/normal", color: "text-subtle", children: n }),
                        ],
                    }),
            ],
        });
    return m
        ? (0, i.jsx)("div", { className: D, "data-selected": t || void 0, "data-disabled": h || void 0, children: L })
        : (0, i.jsx)(d.vN, {
              focusTarget: N,
              ringTarget: C,
              children: (0, i.jsx)(l.Sc, {
                  ref: C,
                  inputRef: N,
                  "aria-labelledby": g,
                  isSelected: t,
                  onChange: (e) => {
                      null != s && s(e);
                  },
                  isDisabled: h,
                  isReadOnly: m,
                  "data-mana-component": "checkbox",
                  className: D,
                  value: String(A),
                  children: L,
              }),
          });
}
