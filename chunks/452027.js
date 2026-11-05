n(321073);
var i = n(477900),
    r = n(582128),
    a = n(646514),
    s = n(805251),
    l = n(140735),
    o = n(628284),
    d = n(695366),
    c = n(834730),
    u = n(15626),
    _ = n(715965);
function E(e) {
    let { successMessage: t, errorMessage: n, helperText: r, trailing: s, helperTextId: l, errorMessageId: u } = e,
        E = (0, i.jsx)("div", {}),
        A = null != s;
    return (null != n && "" !== n
        ? ((A = !0),
          (E = (0, i.jsxs)("div", {
              className: _.lI,
              role: "alert",
              children: [
                  (0, i.jsx)(d.E, { size: "xs", color: a.A.colors.TEXT_FEEDBACK_CRITICAL }),
                  (0, i.jsx)(c.E, { variant: "body-xs/normal", color: "text-feedback-critical", id: u, children: n }),
              ],
          })))
        : null != t && "" !== t
          ? ((A = !0),
            (E = (0, i.jsxs)("div", {
                className: _.lI,
                children: [
                    (0, i.jsx)(o.y, { size: "xs", color: a.A.colors.TEXT_FEEDBACK_POSITIVE }),
                    (0, i.jsx)(c.E, { variant: "body-xs/normal", color: "text-feedback-positive", id: l, children: t }),
                ],
            })))
          : null != r &&
            ((A = !0), (E = (0, i.jsx)(c.E, { variant: "body-xs/normal", color: "text-subtle", id: l, children: r }))),
    A)
        ? (0, i.jsxs)("div", { className: _.JA, children: [E, s] })
        : null;
}
n.d(
    t,
    {},
    {
        D: function (e) {
            let {
                    label: t,
                    hideLabel: n = !1,
                    required: a,
                    disabled: o,
                    description: d,
                    helperText: A,
                    children: h,
                    errorMessage: f,
                    successMessage: I,
                    role: p,
                    layout: m = "vertical",
                    layoutConfig: g,
                    badge: T,
                    icon: S = null,
                    interactiveLabel: N = !1,
                    auxiliaryContentPosition: C = "under-control",
                    trailingAuxiliaryContent: O,
                    ref: R,
                } = e,
                L = (function (e) {
                    let { id: t, label: n, errorMessage: i, helperText: a, successMessage: s, description: l } = e,
                        { hasTrailingAuxiliaryContent: o } =
                            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                        [d, c] = r.useState(!1),
                        u = r.useId(),
                        _ = r.useId(),
                        E = r.useId(),
                        A = r.useId(),
                        h = r.useId(),
                        f = r.useId(),
                        I = null != n && "" !== n,
                        p = null != l && "" !== l,
                        m = (null != a && "" !== a) || (null != s && "" !== s),
                        g = [];
                    (p && g.push(A), m && g.push(E), o && g.push(f));
                    let T = g.length > 0 ? g.join(" ") : void 0;
                    return r.useMemo(
                        () => ({
                            labelId: I ? u : void 0,
                            controlId: t ?? _,
                            describedById: T,
                            errorMessageId: null != i && "" !== i ? h : void 0,
                            helperTextId: m ? E : void 0,
                            descriptionId: p ? A : void 0,
                            trailingAuxiliaryContentId: o ? f : void 0,
                            isLabelHovered: d,
                            setIsLabelHovered: c,
                        }),
                        [I, u, t, _, T, i, h, m, E, p, A, o, f, d, c],
                    );
                })(e, { hasTrailingAuxiliaryContent: null != O }),
                {
                    labelId: y,
                    controlId: D,
                    errorMessageId: b,
                    describedById: v,
                    helperTextId: P,
                    descriptionId: M,
                } = L,
                U = g?.horizontalControlColumnWidth,
                w = "group" === p || "radiogroup" === p,
                G = w ? "fieldset" : "div",
                x = w ? (0, i.jsx)("legend", { id: y, children: (0, i.jsx)(l.A, { children: t }) }) : null,
                k = null != t && "" !== t,
                F = null != d && "" !== d,
                B = k
                    ? (0, i.jsxs)(c.E, {
                          "aria-hidden": w,
                          "data-interactive": N,
                          id: y,
                          tag: w ? "span" : "label",
                          variant: "body-md/medium",
                          color: "text-strong",
                          htmlFor: D,
                          className: _.Pf,
                          children: [
                              null != S ? (0, i.jsx)(S, { "aria-hidden": !0, size: "xs", className: _.Kk }) : null,
                              t,
                              a &&
                                  (0, i.jsx)(c.E, {
                                      "aria-hidden": !0,
                                      variant: "body-md/normal",
                                      color: "text-feedback-critical",
                                      className: _.mw,
                                      children: "*",
                                  }),
                              null != T
                                  ? (0, i.jsx)("span", {
                                        className: _.fC,
                                        children: (0, i.jsx)(s.E, { type: T, variant: "primary" }),
                                    })
                                  : null,
                          ],
                      })
                    : null,
                V = (0, i.jsx)(E, {
                    successMessage: I,
                    errorMessage: f,
                    helperText: A,
                    trailing: O,
                    helperTextId: P,
                    errorMessageId: b,
                });
            return (0, i.jsx)(u._.Provider, {
                value: L,
                children: (0, i.jsxs)(G, {
                    role: p,
                    ref: R,
                    className: _.kL,
                    "data-layout": m,
                    "data-has-description": F || void 0,
                    style: null != U ? { "--custom-field-horizontal-control-width": U } : void 0,
                    "data-disabled": o,
                    "aria-describedby": w ? v : void 0,
                    "aria-required": (!!w && !!a) || void 0,
                    disabled: w ? o : void 0,
                    children: [
                        x,
                        k && n ? (0, i.jsx)(l.A, { children: B }) : null,
                        (k && !n) || F
                            ? (0, i.jsxs)("div", {
                                  className: _._A,
                                  children: [
                                      n ? null : B,
                                      F &&
                                          (0, i.jsx)(c.E, {
                                              variant: "body-sm/normal",
                                              color: "text-subtle",
                                              className: _.h_,
                                              id: M,
                                              children: d,
                                          }),
                                      "under-label" === C ? V : null,
                                  ],
                              })
                            : null,
                        (0, i.jsxs)("div", {
                            className: _.A4,
                            children: ["function" == typeof h ? h(L) : h, "under-control" === C ? V : null],
                        }),
                    ],
                }),
            });
        },
        n: function (e) {
            let {
                label: t,
                hideLabel: n,
                badge: i,
                icon: r,
                required: a,
                disabled: s,
                description: l,
                helperText: o,
                id: d,
                errorMessage: c,
                successMessage: u,
                layout: _,
                layoutConfig: E,
                ...A
            } = e;
            return {
                fieldProps: {
                    label: t,
                    hideLabel: n,
                    badge: i,
                    icon: r,
                    required: a,
                    disabled: s,
                    description: l,
                    helperText: o,
                    id: d,
                    errorMessage: c,
                    successMessage: u,
                    layout: _,
                    layoutConfig: E,
                },
                props: A,
            };
        },
    },
);
