"use strict";
n.d(t, { D: () => f, n: () => h }), n(321073);
var i = n(627968),
    r = n(64700),
    s = n(661531),
    a = n(508770),
    o = n(140735),
    l = n(628284),
    u = n(695366),
    c = n(834730),
    d = n(15626),
    _ = n(714304);
function h(e) {
    let {
        label: t,
        hideLabel: n,
        badge: i,
        icon: r,
        required: s,
        disabled: a,
        description: o,
        helperText: l,
        id: u,
        errorMessage: c,
        successMessage: d,
        layout: _,
        layoutConfig: h,
        ...f
    } = e;
    return {
        fieldProps: {
            label: t,
            hideLabel: n,
            badge: i,
            icon: r,
            required: s,
            disabled: a,
            description: o,
            helperText: l,
            id: u,
            errorMessage: c,
            successMessage: d,
            layout: _,
            layoutConfig: h,
        },
        props: f,
    };
}
function f(e) {
    let {
            label: t,
            hideLabel: n = !1,
            required: s,
            disabled: l,
            description: u,
            helperText: h,
            children: f,
            errorMessage: E,
            successMessage: m,
            role: g,
            layout: A = "vertical",
            layoutConfig: I,
            badge: T,
            icon: S = null,
            interactiveLabel: y = !1,
            auxiliaryContentPosition: C = "under-control",
            trailingAuxiliaryContent: N,
            ref: v,
        } = e,
        R = (function (e) {
            let { id: t, errorMessage: n, helperText: i, successMessage: s, description: a } = e,
                { hasTrailingAuxiliaryContent: o } =
                    arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                [l, u] = r.useState(!1),
                c = r.useId(),
                d = r.useId(),
                _ = r.useId(),
                h = r.useId(),
                f = r.useId(),
                p = r.useId(),
                E = null != a && "" !== a,
                m = (null != i && "" !== i) || (null != s && "" !== s),
                g = [];
            E && g.push(h), m && g.push(_), o && g.push(p);
            let A = g.length > 0 ? g.join(" ") : void 0;
            return r.useMemo(
                () => ({
                    labelId: c,
                    controlId: t ?? d,
                    describedById: A,
                    errorMessageId: null != n && "" !== n ? f : void 0,
                    helperTextId: m ? _ : void 0,
                    descriptionId: E ? h : void 0,
                    trailingAuxiliaryContentId: o ? p : void 0,
                    isLabelHovered: l,
                    setIsLabelHovered: u,
                }),
                [c, t, d, A, n, f, m, _, E, h, o, p, l, u],
            );
        })(e, { hasTrailingAuxiliaryContent: null != N }),
        { labelId: O, controlId: b, errorMessageId: D, describedById: L, helperTextId: w, descriptionId: M } = R,
        P = I?.horizontalControlColumnWidth,
        x = "group" === g || "radiogroup" === g,
        k = x ? "fieldset" : "div",
        U = x ? (0, i.jsx)("legend", { id: O, children: (0, i.jsx)(o.A, { children: t }) }) : null,
        G = null != t && "" !== t,
        F = null != u && "" !== u,
        V = G
            ? (0, i.jsxs)(c.E, {
                  "aria-hidden": x,
                  "data-interactive": y,
                  id: O,
                  tag: x ? "span" : "label",
                  variant: "text-md/medium",
                  color: "text-strong",
                  htmlFor: b,
                  className: _.Pf,
                  children: [
                      null != S ? (0, i.jsx)(S, { "aria-hidden": !0, size: "xs", className: _.Kk }) : null,
                      t,
                      s &&
                          (0, i.jsx)(c.E, {
                              "aria-hidden": !0,
                              variant: "text-md/normal",
                              color: "text-feedback-critical",
                              className: _.mw,
                              children: "*",
                          }),
                      null != T
                          ? (0, i.jsx)("span", {
                                className: _.fC,
                                children: (0, i.jsx)(a.E, { type: T, variant: "brand" }),
                            })
                          : null,
                  ],
              })
            : null,
        B = (0, i.jsx)(p, {
            successMessage: m,
            errorMessage: E,
            helperText: h,
            trailing: N,
            helperTextId: w,
            errorMessageId: D,
        });
    return (0, i.jsx)(d._.Provider, {
        value: R,
        children: (0, i.jsxs)(k, {
            role: g,
            ref: v,
            className: _.kL,
            "data-layout": A,
            "data-has-description": F || void 0,
            style: null != P ? { "--custom-field-horizontal-control-width": P } : void 0,
            "data-disabled": l,
            "aria-describedby": x ? L : void 0,
            "aria-required": (!!x && !!s) || void 0,
            disabled: x ? l : void 0,
            children: [
                U,
                G && n ? (0, i.jsx)(o.A, { children: V }) : null,
                (G && !n) || F
                    ? (0, i.jsxs)("div", {
                          className: _._A,
                          children: [
                              n ? null : V,
                              F &&
                                  (0, i.jsx)(c.E, {
                                      variant: "text-sm/normal",
                                      color: "text-subtle",
                                      className: _.h_,
                                      id: M,
                                      children: u,
                                  }),
                              "under-label" === C ? B : null,
                          ],
                      })
                    : null,
                (0, i.jsxs)("div", {
                    className: _.A4,
                    children: ["function" == typeof f ? f(R) : f, "under-control" === C ? B : null],
                }),
            ],
        }),
    });
}
function p(e) {
    let { successMessage: t, errorMessage: n, helperText: r, trailing: a, helperTextId: o, errorMessageId: d } = e,
        h = (0, i.jsx)("div", {}),
        f = null != a;
    return (null != n && "" !== n
        ? ((f = !0),
          (h = (0, i.jsxs)("div", {
              className: _.lI,
              role: "alert",
              children: [
                  (0, i.jsx)(u.E, { size: "xs", color: s.A.colors.TEXT_FEEDBACK_CRITICAL }),
                  (0, i.jsx)(c.E, { variant: "text-xs/normal", color: "text-feedback-critical", id: d, children: n }),
              ],
          })))
        : null != t && "" !== t
          ? ((f = !0),
            (h = (0, i.jsxs)("div", {
                className: _.lI,
                children: [
                    (0, i.jsx)(l.y, { size: "xs", color: s.A.colors.TEXT_FEEDBACK_POSITIVE }),
                    (0, i.jsx)(c.E, { variant: "text-xs/normal", color: "text-feedback-positive", id: o, children: t }),
                ],
            })))
          : null != r &&
            ((f = !0), (h = (0, i.jsx)(c.E, { variant: "text-xs/normal", color: "text-subtle", id: o, children: r }))),
    f)
        ? (0, i.jsxs)("div", { className: _.JA, children: [h, a] })
        : null;
}
