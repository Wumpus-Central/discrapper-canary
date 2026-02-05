"use strict";
n.d(t, { D: () => h, n: () => p }), n(321073);
var r = n(627968),
    i = n(64700),
    a = n(827734),
    s = n(508770),
    o = n(140735),
    l = n(628284),
    u = n(695366),
    c = n(834730),
    d = n(15626),
    _ = n(104983);
function f(e) {
    let { id: t, errorMessage: n, helperText: r, successMessage: a, description: s } = e,
        [o, l] = i.useState(!1),
        u = i.useId(),
        c = i.useId(),
        d = i.useId(),
        _ = i.useId(),
        f = i.useId(),
        p = null != s && "" !== s,
        h = (null != r && "" !== r) || (null != a && "" !== a),
        m = [];
    p && m.push(_), h && m.push(d);
    let g = m.length > 0 ? m.join(" ") : void 0;
    return i.useMemo(
        () => ({
            labelId: u,
            controlId: t ?? c,
            describedById: g,
            errorMessageId: null != n && "" !== n ? f : void 0,
            helperTextId: h ? d : void 0,
            descriptionId: p ? _ : void 0,
            isLabelHovered: o,
            setIsLabelHovered: l,
        }),
        [u, t, c, g, n, f, h, d, p, _, o, l],
    );
}
function p(e) {
    let {
        label: t,
        hideLabel: n,
        badge: r,
        icon: i,
        required: a,
        disabled: s,
        description: o,
        helperText: l,
        id: u,
        errorMessage: c,
        successMessage: d,
        layout: _,
        layoutConfig: f,
        ...p
    } = e;
    return {
        fieldProps: {
            label: t,
            hideLabel: n,
            badge: r,
            icon: i,
            required: a,
            disabled: s,
            description: o,
            helperText: l,
            id: u,
            errorMessage: c,
            successMessage: d,
            layout: _,
            layoutConfig: f,
        },
        props: p,
    };
}
function h(e) {
    let {
            label: t,
            hideLabel: n = !1,
            required: i,
            disabled: a,
            description: l,
            helperText: u,
            children: p,
            errorMessage: h,
            successMessage: g,
            role: E,
            layout: A = "vertical",
            layoutConfig: I,
            badge: T,
            icon: y = null,
            interactiveLabel: S = !1,
            auxiliaryContentPosition: v = "under-control",
            trailingAuxiliaryContent: C,
            ref: b,
        } = e,
        N = f(e),
        { labelId: R, controlId: O, errorMessageId: D, describedById: L, helperTextId: w, descriptionId: x } = N,
        P = I?.horizontalControlColumnWidth,
        M = "group" === E || "radiogroup" === E,
        k = M ? "span" : "label",
        U = M ? "fieldset" : "div",
        G = M ? (0, r.jsx)("legend", { id: R, children: (0, r.jsx)(o.A, { children: t }) }) : null,
        V = null != t && "" !== t,
        F = null != l && "" !== l,
        B = V
            ? (0, r.jsxs)(c.E, {
                  "aria-hidden": M,
                  "data-interactive": S,
                  id: R,
                  tag: k,
                  variant: "text-md/medium",
                  color: "text-strong",
                  htmlFor: O,
                  className: _.Pf,
                  children: [
                      null != y ? (0, r.jsx)(y, { "aria-hidden": !0, size: "xs", className: _.Kk }) : null,
                      t,
                      i &&
                          (0, r.jsx)(c.E, {
                              "aria-hidden": !0,
                              variant: "text-md/normal",
                              color: "text-feedback-critical",
                              className: _.mw,
                              children: "*",
                          }),
                      null != T
                          ? (0, r.jsx)("span", {
                                className: _.fC,
                                children: (0, r.jsx)(s.E, { type: T, variant: "brand" }),
                            })
                          : null,
                  ],
              })
            : null,
        j = (0, r.jsx)(m, {
            successMessage: g,
            errorMessage: h,
            helperText: u,
            trailing: C,
            helperTextId: w,
            errorMessageId: D,
        });
    return (0, r.jsx)(d._.Provider, {
        value: N,
        children: (0, r.jsxs)(U, {
            role: E,
            ref: b,
            className: _.kL,
            "data-layout": A,
            style: null != P ? { "--custom-field-horizontal-control-width": P } : void 0,
            "data-disabled": a,
            "aria-describedby": M ? L : void 0,
            disabled: M ? a : void 0,
            children: [
                G,
                V && n ? (0, r.jsx)(o.A, { children: B }) : null,
                (V && !n) || F
                    ? (0, r.jsxs)("div", {
                          className: _._A,
                          children: [
                              n ? null : B,
                              F &&
                                  (0, r.jsx)(c.E, {
                                      variant: "text-sm/normal",
                                      color: "text-subtle",
                                      className: _.h_,
                                      id: x,
                                      children: l,
                                  }),
                              "under-label" === v ? j : null,
                          ],
                      })
                    : null,
                (0, r.jsxs)("div", {
                    className: _.A4,
                    children: ["function" == typeof p ? p(N) : p, "under-control" === v ? j : null],
                }),
            ],
        }),
    });
}
function m(e) {
    let { successMessage: t, errorMessage: n, helperText: i, trailing: s, helperTextId: o, errorMessageId: d } = e,
        f = (0, r.jsx)("div", {}),
        p = null != s;
    return (null != n && "" !== n
        ? ((p = !0),
          (f = (0, r.jsxs)("div", {
              className: _.lI,
              children: [
                  (0, r.jsx)(u.E, { size: "xs", color: a.A.colors.TEXT_FEEDBACK_CRITICAL }),
                  (0, r.jsx)(c.E, { variant: "text-xs/normal", color: "text-feedback-critical", id: d, children: n }),
              ],
          })))
        : null != t && "" !== t
          ? ((p = !0),
            (f = (0, r.jsxs)("div", {
                className: _.lI,
                children: [
                    (0, r.jsx)(l.y, { size: "xs", color: a.A.colors.TEXT_FEEDBACK_POSITIVE }),
                    (0, r.jsx)(c.E, { variant: "text-xs/normal", color: "text-feedback-positive", id: o, children: t }),
                ],
            })))
          : null != i &&
            ((p = !0), (f = (0, r.jsx)(c.E, { variant: "text-xs/normal", color: "text-subtle", id: o, children: i }))),
    p)
        ? (0, r.jsxs)("div", { className: _.JA, children: [f, s] })
        : null;
}
