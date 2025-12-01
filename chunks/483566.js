n.d(t, {
    X: () => h,
    g: () => g,
}),
    n(953529),
    n(388685),
    n(539854);
var r = n(54381),
    i = n(473749),
    a = n(692547),
    o = n(313666),
    s = n(635041),
    l = n(903788),
    c = n(22202),
    u = n(777207),
    d = n(590154),
    f = n(877222);
function p(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = _(e, t);
    if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(e);
        for (r = 0; r < a.length; r++)
            (n = a[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    }
    return i;
}
function _(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        a = Object.keys(e);
    for (r = 0; r < a.length; r++) (n = a[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
    return i;
}
function m(e) {
    let { id: t, errorMessage: n, helperText: r, successMessage: a, description: o } = e,
        [s, l] = i.useState(!1),
        c = i.useId(),
        u = i.useId(),
        d = i.useId(),
        f = i.useId(),
        p = i.useId(),
        _ = null != o && "" !== o,
        m = (null != r && "" !== r) || (null != a && "" !== a),
        h = [];
    _ && h.push(f), m && h.push(d);
    let g = h.length > 0 ? h.join(" ") : void 0;
    return i.useMemo(
        () => ({
            labelId: c,
            controlId: null != t ? t : u,
            describedById: g,
            errorMessageId: null != n && "" !== n ? p : void 0,
            helperTextId: m ? d : void 0,
            descriptionId: _ ? f : void 0,
            isLabelHovered: s,
            setIsLabelHovered: l,
        }),
        [c, t, u, g, n, p, m, d, _, f, s, l],
    );
}
function h(e) {
    let {
        label: t,
        hideLabel: n,
        badge: r,
        icon: i,
        required: a,
        disabled: o,
        description: s,
        helperText: l,
        id: c,
        errorMessage: u,
        successMessage: d,
        layout: f,
        layoutConfig: _,
    } = e;
    return {
        fieldProps: {
            label: t,
            hideLabel: n,
            badge: r,
            icon: i,
            required: a,
            disabled: o,
            description: s,
            helperText: l,
            id: c,
            errorMessage: u,
            successMessage: d,
            layout: f,
            layoutConfig: _,
        },
        props: p(e, [
            "label",
            "hideLabel",
            "badge",
            "icon",
            "required",
            "disabled",
            "description",
            "helperText",
            "id",
            "errorMessage",
            "successMessage",
            "layout",
            "layoutConfig",
        ]),
    };
}
function g(e) {
    let {
            label: t,
            hideLabel: n = !1,
            required: i,
            disabled: a,
            description: l,
            helperText: c,
            children: p,
            errorMessage: _,
            successMessage: h,
            role: g,
            layout: b = "vertical",
            layoutConfig: y,
            badge: O,
            icon: v = null,
            interactiveLabel: S = !1,
            auxiliaryContentPosition: I = "under-control",
            trailingAuxiliaryContent: T,
            ref: A,
        } = e,
        C = m(e),
        { labelId: N, controlId: P, errorMessageId: R, describedById: w, helperTextId: D, descriptionId: x } = C,
        L = null == y ? void 0 : y.horizontalControlColumnWidth,
        j = "group" === g || "radiogroup" === g,
        M = j ? "span" : "label",
        k = j ? "fieldset" : "div",
        U = j
            ? (0, r.jsx)("legend", {
                  id: N,
                  children: (0, r.jsx)(s.n, { children: t }),
              })
            : null,
        G = null != t && "" !== t,
        Z = null != l && "" !== l,
        B = G
            ? (0, r.jsxs)(u.x, {
                  "aria-hidden": j,
                  "data-interactive": S,
                  id: N,
                  tag: M,
                  variant: "text-md/medium",
                  color: "text-primary",
                  htmlFor: P,
                  className: f.label,
                  children: [
                      null != v
                          ? (0, r.jsx)(v, {
                                "aria-hidden": !0,
                                size: "xs",
                                className: f.icon,
                            })
                          : null,
                      t,
                      i &&
                          (0, r.jsx)(u.x, {
                              "aria-hidden": !0,
                              variant: "text-md/normal",
                              color: "text-feedback-critical",
                              className: f.required,
                              children: "*",
                          }),
                      null != O
                          ? (0, r.jsx)("span", {
                                className: f.badgeContainer,
                                children: (0, r.jsx)(o.C, { type: O }),
                            })
                          : null,
                  ],
              })
            : null,
        F = (0, r.jsx)(E, {
            successMessage: h,
            errorMessage: _,
            helperText: c,
            trailing: T,
            helperTextId: D,
            errorMessageId: R,
        });
    return (0, r.jsx)(d.z.Provider, {
        value: C,
        children: (0, r.jsxs)(k, {
            role: g,
            ref: A,
            className: f.container,
            "data-layout": b,
            style: null != L ? { "--custom-field-horizontal-control-width": L } : void 0,
            "data-disabled": a,
            "aria-describedby": j ? w : void 0,
            disabled: j ? a : void 0,
            children: [
                U,
                G && n ? (0, r.jsx)(s.n, { children: B }) : null,
                (G && !n) || Z
                    ? (0, r.jsxs)("div", {
                          className: f.labelContainer,
                          children: [
                              n ? null : B,
                              Z &&
                                  (0, r.jsx)(u.x, {
                                      variant: "text-sm/normal",
                                      color: "text-secondary",
                                      className: f.description,
                                      id: x,
                                      children: l,
                                  }),
                              "under-label" === I ? F : null,
                          ],
                      })
                    : null,
                (0, r.jsxs)("div", {
                    className: f.control,
                    children: ["function" == typeof p ? p(C) : p, "under-control" === I ? F : null],
                }),
            ],
        }),
    });
}
function E(e) {
    let { successMessage: t, errorMessage: n, helperText: i, trailing: o, helperTextId: s, errorMessageId: d } = e,
        p = (0, r.jsx)("div", {}),
        _ = null != o;
    return (null != n && "" !== n
        ? ((_ = !0),
          (p = (0, r.jsxs)("div", {
              className: f.statusMessageContainer,
              children: [
                  (0, r.jsx)(c.M, {
                      size: "xs",
                      color: a.Z.colors.TEXT_FEEDBACK_CRITICAL,
                  }),
                  (0, r.jsx)(u.x, {
                      variant: "text-xs/normal",
                      color: "text-feedback-critical",
                      id: d,
                      children: n,
                  }),
              ],
          })))
        : null != t && "" !== t
          ? ((_ = !0),
            (p = (0, r.jsxs)("div", {
                className: f.statusMessageContainer,
                children: [
                    (0, r.jsx)(l.o, {
                        size: "xs",
                        color: a.Z.colors.TEXT_FEEDBACK_POSITIVE,
                    }),
                    (0, r.jsx)(u.x, {
                        variant: "text-xs/normal",
                        color: "text-feedback-positive",
                        id: s,
                        children: t,
                    }),
                ],
            })))
          : null != i &&
            ((_ = !0),
            (p = (0, r.jsx)(u.x, {
                variant: "text-xs/normal",
                color: "text-secondary",
                id: s,
                children: i,
            }))),
    _)
        ? (0, r.jsxs)("div", {
              className: f.helperTextContainer,
              children: [p, o],
          })
        : null;
}
