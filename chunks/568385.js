"use strict";
n.d(t, { J: () => p });
var r = n(627968),
    i = n(64700),
    a = n(503698),
    s = n.n(a),
    o = n(129844),
    l = n(974213),
    u = n(426333),
    c = n(934551),
    d = n(331322),
    _ = n(834730),
    f = n(264005);
function p(e) {
    let {
            checked: t,
            description: n,
            onChange: a,
            disabled: p = !1,
            displayOnly: h,
            label: m,
            labeledBy: g,
            leadingIcon: E,
            value: A,
            labelType: I = "primary",
            usageVariant: T = "single",
        } = e,
        y = (0, i.useRef)(null),
        S = (0, i.useRef)(null),
        v = (0, i.useRef)(null),
        [C, b] = (0, i.useState)(void 0),
        N = (0, i.useRef)(!1),
        R = null != m && "" !== m,
        O = null != n && "" !== n,
        D = null != E ? E : null;
    (0, i.useEffect)(() => {
        if (!N.current) {
            N.current = !0;
            return;
        }
        b(t ? "animateIn" : "animateOut");
    }, [t]);
    let L = (e) => {
            null != a && a(e);
        },
        w = s()(f.checkboxOption, "string" == typeof C && f[C], "indicator" !== T && f.spacing),
        x = (0, r.jsxs)(r.Fragment, {
            children: [
                (0, r.jsxs)("div", {
                    className: f.checkboxIndicator,
                    ref: y,
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
                        (0, r.jsx)(c.CheckmarkSmallBoldIcon, {
                            className: f.checkStroke,
                            size: "sm",
                            color: "currentColor",
                        }),
                    ],
                }),
                R &&
                    (0, r.jsxs)(d.B, {
                        gap: 4,
                        children: [
                            (0, r.jsxs)(o.J, {
                                className: f.label,
                                children: [
                                    null != D &&
                                        (0, r.jsx)(D, {
                                            className: f.leadingIcon,
                                            size: "sm",
                                            color: "currentColor",
                                            "aria-hidden": !0,
                                            focusable: !1,
                                        }),
                                    (0, r.jsx)(_.E, {
                                        variant: "text-md/normal",
                                        color: "primary" === I ? "text-strong" : "text-subtle",
                                        children: m,
                                    }),
                                ],
                            }),
                            O && (0, r.jsx)(_.E, { variant: "text-sm/normal", color: "text-subtle", children: n }),
                        ],
                    }),
            ],
        });
    return h
        ? (0, r.jsx)("div", { className: w, "data-selected": t || void 0, "data-disabled": p || void 0, children: x })
        : (0, r.jsx)(u.vN, {
              focusTarget: S,
              ringTarget: v,
              children: (0, r.jsx)(l.Sc, {
                  ref: v,
                  inputRef: S,
                  "aria-labelledby": g,
                  isSelected: t,
                  onChange: L,
                  isDisabled: p,
                  isReadOnly: h,
                  "data-mana-component": "checkbox",
                  className: w,
                  value: String(A),
                  children: x,
              }),
          });
}
