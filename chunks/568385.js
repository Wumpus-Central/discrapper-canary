n.d(t, { J: () => _ }), n(228524), n(896048);
var r = n(627968),
    i = n(64700),
    a = n(503698),
    s = n.n(a),
    o = n(129844),
    l = n(974213),
    c = n(426333),
    u = n(934551),
    d = n(331322),
    f = n(834730),
    p = n(264005);
function _(e) {
    let {
            checked: t,
            description: n,
            onChange: a,
            disabled: _ = !1,
            displayOnly: h,
            label: m,
            labeledBy: g,
            leadingIcon: E,
            value: b,
            labelType: y = "primary",
            usageVariant: O = "single",
        } = e,
        A = (0, i.useRef)(null),
        v = (0, i.useRef)(null),
        S = (0, i.useRef)(null),
        [I, T] = (0, i.useState)(void 0),
        C = (0, i.useRef)(!1),
        N = null != m && "" !== m,
        R = null != n && "" !== n,
        w = null != E ? E : null;
    (0, i.useEffect)(() => {
        if (!C.current) {
            C.current = !0;
            return;
        }
        T(t ? "animateIn" : "animateOut");
    }, [t]);
    let P = (e) => {
            null != a && a(e);
        },
        D = s()(p.checkboxOption, "string" == typeof I && p[I], "indicator" !== O && p.spacing),
        x = (0, r.jsxs)(r.Fragment, {
            children: [
                (0, r.jsxs)("div", {
                    className: p.checkboxIndicator,
                    ref: A,
                    "aria-hidden": !0,
                    children: [
                        (0, r.jsx)("svg", {
                            className: p.checkmark,
                            width: 20,
                            height: 20,
                            viewBox: "0 0 20 20",
                            fill: "none",
                            "aria-hidden": !0,
                            children: (0, r.jsx)("circle", {
                                className: p.dot,
                                cx: "10",
                                cy: "10",
                                r: "1.1",
                                fill: "currentColor",
                            }),
                        }),
                        (0, r.jsx)(u.CheckmarkSmallBoldIcon, {
                            className: p.checkStroke,
                            size: "sm",
                            color: "currentColor",
                        }),
                    ],
                }),
                N &&
                    (0, r.jsxs)(d.B, {
                        gap: 4,
                        children: [
                            (0, r.jsxs)(o.J, {
                                className: p.label,
                                children: [
                                    null != w &&
                                        (0, r.jsx)(w, {
                                            className: p.leadingIcon,
                                            size: "sm",
                                            color: "currentColor",
                                            "aria-hidden": !0,
                                            focusable: !1,
                                        }),
                                    (0, r.jsx)(f.E, {
                                        variant: "text-md/normal",
                                        color: "primary" === y ? "text-strong" : "text-subtle",
                                        children: m,
                                    }),
                                ],
                            }),
                            R &&
                                (0, r.jsx)(f.E, {
                                    variant: "text-sm/normal",
                                    color: "text-subtle",
                                    children: n,
                                }),
                        ],
                    }),
            ],
        });
    return h
        ? (0, r.jsx)("div", {
              className: D,
              "data-selected": t || void 0,
              "data-disabled": _ || void 0,
              children: x,
          })
        : (0, r.jsx)(c.vN, {
              focusTarget: v,
              ringTarget: S,
              children: (0, r.jsx)(l.Sc, {
                  ref: S,
                  inputRef: v,
                  "aria-labelledby": g,
                  isSelected: t,
                  onChange: P,
                  isDisabled: _,
                  isReadOnly: h,
                  "data-mana-component": "checkbox",
                  className: D,
                  value: String(b),
                  children: x,
              }),
          });
}
