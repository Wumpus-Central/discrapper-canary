n.d(t, { D: () => A, n: () => E }), n(321073);
var i = n(477900),
    r = n(582128),
    a = n(661531),
    s = n(508770),
    l = n(140735),
    o = n(628284),
    d = n(695366),
    c = n(834730),
    u = n(15626),
    _ = n(715965);
function E(e) {
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
}
function A(e) {
    let {
            label: t,
            hideLabel: n = !1,
            required: a,
            disabled: o,
            description: d,
            helperText: E,
            children: A,
            errorMessage: I,
            successMessage: f,
            role: p,
            layout: T = "vertical",
            layoutConfig: m,
            badge: g,
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
                I = r.useId(),
                f = null != n && "" !== n,
                p = null != l && "" !== l,
                T = (null != a && "" !== a) || (null != s && "" !== s),
                m = [];
            p && m.push(A), T && m.push(E), o && m.push(I);
            let g = m.length > 0 ? m.join(" ") : void 0;
            return r.useMemo(
                () => ({
                    labelId: f ? u : void 0,
                    controlId: t ?? _,
                    describedById: g,
                    errorMessageId: null != i && "" !== i ? h : void 0,
                    helperTextId: T ? E : void 0,
                    descriptionId: p ? A : void 0,
                    trailingAuxiliaryContentId: o ? I : void 0,
                    isLabelHovered: d,
                    setIsLabelHovered: c,
                }),
                [f, u, t, _, g, i, h, T, E, p, A, o, I, d, c],
            );
        })(e, { hasTrailingAuxiliaryContent: null != O }),
        { labelId: y, controlId: D, errorMessageId: v, describedById: b, helperTextId: M, descriptionId: P } = L,
        U = m?.horizontalControlColumnWidth,
        w = "group" === p || "radiogroup" === p,
        G = w ? "fieldset" : "div",
        x = w ? (0, i.jsx)("legend", { id: y, children: (0, i.jsx)(l.A, { children: t }) }) : null,
        k = null != t && "" !== t,
        F = null != d && "" !== d,
        V = k
            ? (0, i.jsxs)(c.E, {
                  "aria-hidden": w,
                  "data-interactive": N,
                  id: y,
                  tag: w ? "span" : "label",
                  variant: "text-md/medium",
                  color: "text-strong",
                  htmlFor: D,
                  className: _.Pf,
                  children: [
                      null != S ? (0, i.jsx)(S, { "aria-hidden": !0, size: "xs", className: _.Kk }) : null,
                      t,
                      a &&
                          (0, i.jsx)(c.E, {
                              "aria-hidden": !0,
                              variant: "text-md/normal",
                              color: "text-feedback-critical",
                              className: _.mw,
                              children: "*",
                          }),
                      null != g
                          ? (0, i.jsx)("span", {
                                className: _.fC,
                                children: (0, i.jsx)(s.E, { type: g, variant: "brand" }),
                            })
                          : null,
                  ],
              })
            : null,
        B = (0, i.jsx)(h, {
            successMessage: f,
            errorMessage: I,
            helperText: E,
            trailing: O,
            helperTextId: M,
            errorMessageId: v,
        });
    return (0, i.jsx)(u._.Provider, {
        value: L,
        children: (0, i.jsxs)(G, {
            role: p,
            ref: R,
            className: _.kL,
            "data-layout": T,
            "data-has-description": F || void 0,
            style: null != U ? { "--custom-field-horizontal-control-width": U } : void 0,
            "data-disabled": o,
            "aria-describedby": w ? b : void 0,
            "aria-required": (!!w && !!a) || void 0,
            disabled: w ? o : void 0,
            children: [
                x,
                k && n ? (0, i.jsx)(l.A, { children: V }) : null,
                (k && !n) || F
                    ? (0, i.jsxs)("div", {
                          className: _._A,
                          children: [
                              n ? null : V,
                              F &&
                                  (0, i.jsx)(c.E, {
                                      variant: "text-sm/normal",
                                      color: "text-subtle",
                                      className: _.h_,
                                      id: P,
                                      children: d,
                                  }),
                              "under-label" === C ? B : null,
                          ],
                      })
                    : null,
                (0, i.jsxs)("div", {
                    className: _.A4,
                    children: ["function" == typeof A ? A(L) : A, "under-control" === C ? B : null],
                }),
            ],
        }),
    });
}
function h(e) {
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
                  (0, i.jsx)(c.E, { variant: "text-xs/normal", color: "text-feedback-critical", id: u, children: n }),
              ],
          })))
        : null != t && "" !== t
          ? ((A = !0),
            (E = (0, i.jsxs)("div", {
                className: _.lI,
                children: [
                    (0, i.jsx)(o.y, { size: "xs", color: a.A.colors.TEXT_FEEDBACK_POSITIVE }),
                    (0, i.jsx)(c.E, { variant: "text-xs/normal", color: "text-feedback-positive", id: l, children: t }),
                ],
            })))
          : null != r &&
            ((A = !0), (E = (0, i.jsx)(c.E, { variant: "text-xs/normal", color: "text-subtle", id: l, children: r }))),
    A)
        ? (0, i.jsxs)("div", { className: _.JA, children: [E, s] })
        : null;
}
