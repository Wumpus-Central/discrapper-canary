"use strict";
n.d(t, { D: () => h, n: () => p }), n(321073);
var r = n(627968),
    i = n(64700),
    s = n(827734),
    a = n(508770),
    o = n(140735),
    l = n(628284),
    u = n(695366),
    c = n(834730),
    d = n(15626),
    _ = n(170640);
function f(e) {
    let { id: t, errorMessage: n, helperText: r, successMessage: s, description: a } = e,
        [o, l] = i.useState(!1),
        u = i.useId(),
        c = i.useId(),
        d = i.useId(),
        _ = i.useId(),
        f = i.useId(),
        p = null != a && "" !== a,
        h = (null != r && "" !== r) || (null != s && "" !== s),
        m = [];
    p && m.push(_), h && m.push(d);
    let E = m.length > 0 ? m.join(" ") : void 0;
    return i.useMemo(
        () => ({
            labelId: u,
            controlId: t ?? c,
            describedById: E,
            errorMessageId: null != n && "" !== n ? f : void 0,
            helperTextId: h ? d : void 0,
            descriptionId: p ? _ : void 0,
            isLabelHovered: o,
            setIsLabelHovered: l,
        }),
        [u, t, c, E, n, f, h, d, p, _, o, l],
    );
}
function p(e) {
    let {
        label: t,
        hideLabel: n,
        badge: r,
        icon: i,
        required: s,
        disabled: a,
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
            required: s,
            disabled: a,
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
            disabled: s,
            description: l,
            helperText: u,
            children: p,
            errorMessage: h,
            successMessage: E,
            role: g,
            layout: A = "vertical",
            layoutConfig: I,
            badge: T,
            icon: S = null,
            interactiveLabel: y = !1,
            auxiliaryContentPosition: v = "under-control",
            trailingAuxiliaryContent: N,
            ref: C,
        } = e,
        R = f(e),
        { labelId: O, controlId: b, errorMessageId: D, describedById: L, helperTextId: w, descriptionId: M } = R,
        x = I?.horizontalControlColumnWidth,
        P = "group" === g || "radiogroup" === g,
        k = P ? "span" : "label",
        U = P ? "fieldset" : "div",
        G = P ? (0, r.jsx)("legend", { id: O, children: (0, r.jsx)(o.A, { children: t }) }) : null,
        F = null != t && "" !== t,
        V = null != l && "" !== l,
        B = F
            ? (0, r.jsxs)(c.E, {
                  "aria-hidden": P,
                  "data-interactive": y,
                  id: O,
                  tag: k,
                  variant: "text-md/medium",
                  color: "text-strong",
                  htmlFor: b,
                  className: _.Pf,
                  children: [
                      null != S ? (0, r.jsx)(S, { "aria-hidden": !0, size: "xs", className: _.Kk }) : null,
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
                                children: (0, r.jsx)(a.E, { type: T, variant: "brand" }),
                            })
                          : null,
                  ],
              })
            : null,
        H = (0, r.jsx)(m, {
            successMessage: E,
            errorMessage: h,
            helperText: u,
            trailing: N,
            helperTextId: w,
            errorMessageId: D,
        });
    return (0, r.jsx)(d._.Provider, {
        value: R,
        children: (0, r.jsxs)(U, {
            role: g,
            ref: C,
            className: _.kL,
            "data-layout": A,
            "data-has-description": V || void 0,
            style: null != x ? { "--custom-field-horizontal-control-width": x } : void 0,
            "data-disabled": s,
            "aria-describedby": P ? L : void 0,
            disabled: P ? s : void 0,
            children: [
                G,
                F && n ? (0, r.jsx)(o.A, { children: B }) : null,
                (F && !n) || V
                    ? (0, r.jsxs)("div", {
                          className: _._A,
                          children: [
                              n ? null : B,
                              V &&
                                  (0, r.jsx)(c.E, {
                                      variant: "text-sm/normal",
                                      color: "text-subtle",
                                      className: _.h_,
                                      id: M,
                                      children: l,
                                  }),
                              "under-label" === v ? H : null,
                          ],
                      })
                    : null,
                (0, r.jsxs)("div", {
                    className: _.A4,
                    children: ["function" == typeof p ? p(R) : p, "under-control" === v ? H : null],
                }),
            ],
        }),
    });
}
function m(e) {
    let { successMessage: t, errorMessage: n, helperText: i, trailing: a, helperTextId: o, errorMessageId: d } = e,
        f = (0, r.jsx)("div", {}),
        p = null != a;
    return (null != n && "" !== n
        ? ((p = !0),
          (f = (0, r.jsxs)("div", {
              className: _.lI,
              children: [
                  (0, r.jsx)(u.E, { size: "xs", color: s.A.colors.TEXT_FEEDBACK_CRITICAL }),
                  (0, r.jsx)(c.E, { variant: "text-xs/normal", color: "text-feedback-critical", id: d, children: n }),
              ],
          })))
        : null != t && "" !== t
          ? ((p = !0),
            (f = (0, r.jsxs)("div", {
                className: _.lI,
                children: [
                    (0, r.jsx)(l.y, { size: "xs", color: s.A.colors.TEXT_FEEDBACK_POSITIVE }),
                    (0, r.jsx)(c.E, { variant: "text-xs/normal", color: "text-feedback-positive", id: o, children: t }),
                ],
            })))
          : null != i &&
            ((p = !0), (f = (0, r.jsx)(c.E, { variant: "text-xs/normal", color: "text-subtle", id: o, children: i }))),
    p)
        ? (0, r.jsxs)("div", { className: _.JA, children: [f, a] })
        : null;
}
