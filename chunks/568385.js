"use strict";
n.d(t, { J: () => A });
var i = n(477900),
    r = n(582128),
    a = n(503698),
    s = n.n(a),
    l = n(772856),
    o = n(901240),
    d = n(259678),
    c = n(820081),
    u = n(331322),
    _ = n(834730),
    E = n(479908);
function A(e) {
    let {
            checked: t,
            description: n,
            onChange: a,
            disabled: A = !1,
            displayOnly: h,
            label: I,
            labeledBy: f,
            leadingIcon: p,
            value: T,
            labelType: m = "primary",
            usageVariant: g = "single",
        } = e,
        S = (0, r.useRef)(null),
        N = (0, r.useRef)(null),
        C = (0, r.useRef)(null),
        [O, R] = (0, r.useState)(void 0),
        L = (0, r.useRef)(!1),
        y = null != p ? p : null;
    (0, r.useEffect)(() => {
        if (!L.current) {
            L.current = !0;
            return;
        }
        R(t ? "animateIn" : "animateOut");
    }, [t]);
    let D = s()(E.checkboxOption, "string" == typeof O && E[O], "indicator" !== g && E.spacing),
        v = (0, i.jsxs)(i.Fragment, {
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
                        (0, i.jsx)(c.B, { className: E.checkStroke, size: "sm", color: "currentColor" }),
                    ],
                }),
                null != I &&
                    "" !== I &&
                    (0, i.jsxs)(u.B, {
                        gap: 4,
                        children: [
                            (0, i.jsxs)(l.J, {
                                className: E.label,
                                children: [
                                    null != y &&
                                        (0, i.jsx)(y, {
                                            className: E.leadingIcon,
                                            size: "sm",
                                            color: "currentColor",
                                            "aria-hidden": !0,
                                            focusable: !1,
                                        }),
                                    (0, i.jsx)(_.E, {
                                        variant: "text-md/normal",
                                        color: "primary" === m ? "text-strong" : "text-subtle",
                                        children: I,
                                    }),
                                ],
                            }),
                            null != n &&
                                "" !== n &&
                                (0, i.jsx)(_.E, { variant: "text-sm/normal", color: "text-subtle", children: n }),
                        ],
                    }),
            ],
        });
    return h
        ? (0, i.jsx)("div", { className: D, "data-selected": t || void 0, "data-disabled": A || void 0, children: v })
        : (0, i.jsx)(d.vN, {
              focusTarget: N,
              ringTarget: C,
              children: (0, i.jsx)(o.Sc, {
                  ref: C,
                  inputRef: N,
                  "aria-labelledby": f,
                  isSelected: t,
                  onChange: (e) => {
                      null != a && a(e);
                  },
                  isDisabled: A,
                  isReadOnly: h,
                  "data-mana-component": "checkbox",
                  className: D,
                  value: String(T),
                  children: v,
              }),
          });
}
