"use strict";
n.d(t, { D: () => E, n: () => f }), n(321073);
var r = n(627968),
    i = n(64700),
    s = n(827734),
    a = n(508770),
    o = n(140735),
    l = n(628284),
    u = n(695366),
    d = n(834730),
    c = n(15626),
    _ = n(714304);
function f(e) {
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
        errorMessage: d,
        successMessage: c,
        layout: _,
        layoutConfig: f,
        ...E
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
            errorMessage: d,
            successMessage: c,
            layout: _,
            layoutConfig: f,
        },
        props: E,
    };
}
function E(e) {
    let {
            label: t,
            hideLabel: n = !1,
            required: s,
            disabled: l,
            description: u,
            helperText: f,
            children: E,
            errorMessage: p,
            successMessage: m,
            role: g,
            layout: A = "vertical",
            layoutConfig: I,
            badge: T,
            icon: S = null,
            interactiveLabel: y = !1,
            auxiliaryContentPosition: N = "under-control",
            trailingAuxiliaryContent: O,
            ref: R,
        } = e,
        v = (function (e) {
            let { id: t, errorMessage: n, helperText: r, successMessage: s, description: a } = e,
                { hasTrailingAuxiliaryContent: o } =
                    arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                [l, u] = i.useState(!1),
                d = i.useId(),
                c = i.useId(),
                _ = i.useId(),
                f = i.useId(),
                E = i.useId(),
                h = i.useId(),
                p = null != a && "" !== a,
                m = (null != r && "" !== r) || (null != s && "" !== s),
                g = [];
            p && g.push(f), m && g.push(_), o && g.push(h);
            let A = g.length > 0 ? g.join(" ") : void 0;
            return i.useMemo(
                () => ({
                    labelId: d,
                    controlId: t ?? c,
                    describedById: A,
                    errorMessageId: null != n && "" !== n ? E : void 0,
                    helperTextId: m ? _ : void 0,
                    descriptionId: p ? f : void 0,
                    trailingAuxiliaryContentId: o ? h : void 0,
                    isLabelHovered: l,
                    setIsLabelHovered: u,
                }),
                [d, t, c, A, n, E, m, _, p, f, o, h, l, u],
            );
        })(e, { hasTrailingAuxiliaryContent: null != O }),
        { labelId: C, controlId: b, errorMessageId: D, describedById: L, helperTextId: w, descriptionId: M } = v,
        P = I?.horizontalControlColumnWidth,
        U = "group" === g || "radiogroup" === g,
        k = U ? "fieldset" : "div",
        x = U ? (0, r.jsx)("legend", { id: C, children: (0, r.jsx)(o.A, { children: t }) }) : null,
        G = null != t && "" !== t,
        V = null != u && "" !== u,
        F = G
            ? (0, r.jsxs)(d.E, {
                  "aria-hidden": U,
                  "data-interactive": y,
                  id: C,
                  tag: U ? "span" : "label",
                  variant: "text-md/medium",
                  color: "text-strong",
                  htmlFor: b,
                  className: _.Pf,
                  children: [
                      null != S ? (0, r.jsx)(S, { "aria-hidden": !0, size: "xs", className: _.Kk }) : null,
                      t,
                      s &&
                          (0, r.jsx)(d.E, {
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
        B = (0, r.jsx)(h, {
            successMessage: m,
            errorMessage: p,
            helperText: f,
            trailing: O,
            helperTextId: w,
            errorMessageId: D,
        });
    return (0, r.jsx)(c._.Provider, {
        value: v,
        children: (0, r.jsxs)(k, {
            role: g,
            ref: R,
            className: _.kL,
            "data-layout": A,
            "data-has-description": V || void 0,
            style: null != P ? { "--custom-field-horizontal-control-width": P } : void 0,
            "data-disabled": l,
            "aria-describedby": U ? L : void 0,
            disabled: U ? l : void 0,
            children: [
                x,
                G && n ? (0, r.jsx)(o.A, { children: F }) : null,
                (G && !n) || V
                    ? (0, r.jsxs)("div", {
                          className: _._A,
                          children: [
                              n ? null : F,
                              V &&
                                  (0, r.jsx)(d.E, {
                                      variant: "text-sm/normal",
                                      color: "text-subtle",
                                      className: _.h_,
                                      id: M,
                                      children: u,
                                  }),
                              "under-label" === N ? B : null,
                          ],
                      })
                    : null,
                (0, r.jsxs)("div", {
                    className: _.A4,
                    children: ["function" == typeof E ? E(v) : E, "under-control" === N ? B : null],
                }),
            ],
        }),
    });
}
function h(e) {
    let { successMessage: t, errorMessage: n, helperText: i, trailing: a, helperTextId: o, errorMessageId: c } = e,
        f = (0, r.jsx)("div", {}),
        E = null != a;
    return (null != n && "" !== n
        ? ((E = !0),
          (f = (0, r.jsxs)("div", {
              className: _.lI,
              children: [
                  (0, r.jsx)(u.E, { size: "xs", color: s.A.colors.TEXT_FEEDBACK_CRITICAL }),
                  (0, r.jsx)(d.E, { variant: "text-xs/normal", color: "text-feedback-critical", id: c, children: n }),
              ],
          })))
        : null != t && "" !== t
          ? ((E = !0),
            (f = (0, r.jsxs)("div", {
                className: _.lI,
                children: [
                    (0, r.jsx)(l.y, { size: "xs", color: s.A.colors.TEXT_FEEDBACK_POSITIVE }),
                    (0, r.jsx)(d.E, { variant: "text-xs/normal", color: "text-feedback-positive", id: o, children: t }),
                ],
            })))
          : null != i &&
            ((E = !0), (f = (0, r.jsx)(d.E, { variant: "text-xs/normal", color: "text-subtle", id: o, children: i }))),
    E)
        ? (0, r.jsxs)("div", { className: _.JA, children: [f, a] })
        : null;
}
