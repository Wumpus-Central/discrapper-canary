n.d(t, {
    X: () => m,
    g: () => g,
}),
    n(953529),
    n(388685),
    n(539854);
var r = n(951288),
    i = n(647438),
    a = n(692547),
    o = n(313666),
    s = n(635041),
    l = n(903788),
    c = n(22202),
    u = n(777207),
    d = n(590154),
    f = n(877222);
function _(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = p(e, t);
    if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(e);
        for (r = 0; r < a.length; r++)
            (n = a[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    }
    return i;
}
function p(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        a = Object.keys(e);
    for (r = 0; r < a.length; r++) (n = a[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
    return i;
}
function h(e) {
    let { id: t, errorMessage: n, helperText: r, successMessage: a, description: o } = e,
        [s, l] = i.useState(!1),
        c = i.useId(),
        u = i.useId(),
        d = i.useId(),
        f = i.useId(),
        _ = i.useId(),
        p = null != o && "" !== o,
        h = (null != r && "" !== r) || (null != a && "" !== a),
        m = [];
    p && m.push(f), h && m.push(d);
    let g = m.length > 0 ? m.join(" ") : void 0;
    return i.useMemo(
        () => ({
            labelId: c,
            controlId: null != t ? t : u,
            describedById: g,
            errorMessageId: null != n && "" !== n ? _ : void 0,
            helperTextId: h ? d : void 0,
            descriptionId: p ? f : void 0,
            isLabelHovered: s,
            setIsLabelHovered: l,
        }),
        [c, t, u, g, n, _, h, d, p, f, s, l],
    );
}
function m(e) {
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
        },
        props: _(e, [
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
            children: _,
            errorMessage: p,
            successMessage: m,
            trailingContent: g,
            role: b,
            layout: y = "vertical",
            badge: O,
            icon: v = null,
            interactiveLabel: I = !1,
            ref: T,
        } = e,
        S = h(e),
        { labelId: A, controlId: C, errorMessageId: N, describedById: R, helperTextId: P, descriptionId: w } = S,
        D = "group" === b || "radiogroup" === b,
        x = D ? "span" : "label",
        L = D ? "fieldset" : "div",
        M = D
            ? (0, r.jsx)("legend", {
                  id: A,
                  children: (0, r.jsx)(s.n, { children: t }),
              })
            : null,
        j = null != t && "" !== t,
        k = null != l && "" !== l,
        U = j
            ? (0, r.jsxs)(u.x, {
                  "aria-hidden": D,
                  "data-interactive": I,
                  id: A,
                  tag: x,
                  variant: "text-md/medium",
                  color: "text-primary",
                  htmlFor: C,
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
            : null;
    return (0, r.jsx)(d.z.Provider, {
        value: S,
        children: (0, r.jsxs)(L, {
            role: b,
            ref: T,
            className: f.container,
            "data-layout": y,
            "data-disabled": a,
            "aria-describedby": D ? R : void 0,
            disabled: D ? a : void 0,
            children: [
                M,
                j || k
                    ? (0, r.jsxs)("div", {
                          className: f.labelContainer,
                          children: [
                              n ? (0, r.jsx)(s.n, { children: U }) : U,
                              k &&
                                  (0, r.jsx)(u.x, {
                                      variant: "text-sm/normal",
                                      color: "text-secondary",
                                      className: f.description,
                                      id: w,
                                      children: l,
                                  }),
                          ],
                      })
                    : null,
                (0, r.jsxs)("div", {
                    className: f.control,
                    children: [
                        "function" == typeof _ ? _(S) : _,
                        (0, r.jsx)(E, {
                            successMessage: m,
                            errorMessage: p,
                            helperText: c,
                            trailingContent: g,
                            helperTextId: P,
                            errorMessageId: N,
                        }),
                    ],
                }),
            ],
        }),
    });
}
function E(e) {
    let {
            successMessage: t,
            errorMessage: n,
            helperText: i,
            trailingContent: o,
            helperTextId: s,
            errorMessageId: d,
        } = e,
        _ = (0, r.jsx)("div", {}),
        p = null != o;
    return (null != t && "" !== t
        ? ((p = !0),
          (_ = (0, r.jsxs)("div", {
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
        : null != n && "" !== n
          ? ((p = !0),
            (_ = (0, r.jsxs)("div", {
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
          : null != i &&
            ((p = !0),
            (_ = (0, r.jsx)(u.x, {
                variant: "text-xs/normal",
                color: "text-secondary",
                id: s,
                children: i,
            }))),
    p)
        ? (0, r.jsxs)("div", {
              className: f.helperTextContainer,
              children: [_, o],
          })
        : null;
}
