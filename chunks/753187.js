n.d(t, { N: () => p }), n(953529), n(539854);
var r = n(951288),
    i = n(647438),
    a = n(692547),
    o = n(313666),
    s = n(635041),
    l = n(903788),
    c = n(22202),
    u = n(777207),
    d = n(993517),
    f = n(211189);
function _(e) {
    let { id: t, errorMessage: n, helperText: r, successMessage: a, description: o } = e,
        s = i.useId(),
        l = i.useId(),
        c = i.useId(),
        u = i.useId(),
        d = i.useId(),
        f = null != o && "" !== o,
        _ = (null != r && "" !== r) || (null != a && "" !== a),
        p = [];
    f && p.push(u), _ && p.push(c);
    let h = p.length > 0 ? p.join(" ") : void 0;
    return i.useMemo(
        () => ({
            labelId: s,
            controlId: null != t ? t : l,
            describedById: h,
            errorMessageId: null != n && "" !== n ? d : void 0,
            helperTextId: _ ? c : void 0,
            descriptionId: f ? u : void 0,
        }),
        [s, t, l, h, n, d, _, c, f, u],
    );
}
function p(e) {
    let {
            label: t,
            hideLabel: n = !1,
            required: i,
            disabled: a,
            description: l,
            helperText: c,
            children: p,
            errorMessage: m,
            successMessage: g,
            trailingContent: E,
            role: b,
            layout: y = "vertical",
            badge: O,
            icon: v = null,
        } = e,
        I = _(e),
        { labelId: T, controlId: S, errorMessageId: A, describedById: C, helperTextId: N, descriptionId: R } = I,
        P = "group" === b || "radiogroup" === b,
        w = P ? "span" : "label",
        D = P ? "fieldset" : "div",
        L = P
            ? (0, r.jsx)("legend", {
                  id: T,
                  children: (0, r.jsx)(s.n, { children: t }),
              })
            : null,
        x = null != t && "" !== t,
        j = null != l && "" !== l,
        M = x
            ? (0, r.jsxs)(u.x, {
                  "aria-hidden": P,
                  id: T,
                  tag: w,
                  variant: "text-md/medium",
                  htmlFor: S,
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
    return (0, r.jsx)(d.U.Provider, {
        value: I,
        children: (0, r.jsxs)(D, {
            role: b,
            className: f.container,
            "data-layout": y,
            "data-disabled": a,
            "aria-describedby": P ? C : void 0,
            disabled: P ? a : void 0,
            children: [
                L,
                x || j
                    ? (0, r.jsxs)("div", {
                          className: f.labelContainer,
                          children: [
                              n ? (0, r.jsx)(s.n, { children: M }) : M,
                              j &&
                                  (0, r.jsx)(u.x, {
                                      variant: "text-sm/normal",
                                      color: "text-secondary",
                                      className: f.description,
                                      id: R,
                                      children: l,
                                  }),
                          ],
                      })
                    : null,
                (0, r.jsxs)("div", {
                    className: f.control,
                    children: [
                        "function" == typeof p ? p(I) : p,
                        (0, r.jsx)(h, {
                            successMessage: g,
                            errorMessage: m,
                            helperText: c,
                            trailingContent: E,
                            helperTextId: N,
                            errorMessageId: A,
                        }),
                    ],
                }),
            ],
        }),
    });
}
function h(e) {
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
