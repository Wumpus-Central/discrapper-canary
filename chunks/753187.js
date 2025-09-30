n.d(t, { N: () => _ }), n(953529), n(539854);
var r = n(951288),
    i = n(647438),
    a = n(692547),
    o = n(635041),
    s = n(903788),
    l = n(22202),
    c = n(777207),
    u = n(993517),
    d = n(156240);
function f(e) {
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
function _(e) {
    let {
            label: t,
            hideLabel: n = !1,
            required: i,
            disabled: a,
            description: s,
            helperText: l,
            children: _,
            errorMessage: h,
            successMessage: m,
            trailingContent: g,
            role: E,
            layout: b = "vertical",
        } = e,
        y = f(e),
        { labelId: O, controlId: v, errorMessageId: I, describedById: T, helperTextId: S, descriptionId: A } = y,
        C = "group" === E || "radiogroup" === E,
        N = C ? "span" : "label",
        R = C ? "fieldset" : "div",
        P = C
            ? (0, r.jsx)("legend", {
                  id: O,
                  children: (0, r.jsx)(o.n, { children: t }),
              })
            : null,
        w = null != t && "" !== t,
        D = null != s && "" !== s,
        L = w
            ? (0, r.jsxs)(c.x, {
                  "aria-hidden": C,
                  id: O,
                  tag: N,
                  variant: "text-md/medium",
                  htmlFor: v,
                  className: d.label,
                  children: [
                      t,
                      i &&
                          (0, r.jsx)(c.x, {
                              "aria-hidden": !0,
                              variant: "text-md/normal",
                              color: "text-feedback-critical",
                              className: d.required,
                              children: "*",
                          }),
                  ],
              })
            : null;
    return (0, r.jsx)(u.U.Provider, {
        value: y,
        children: (0, r.jsxs)(R, {
            role: E,
            className: d.container,
            "data-layout": b,
            "data-disabled": a,
            "aria-describedby": C ? T : void 0,
            disabled: C ? a : void 0,
            children: [
                P,
                w || D
                    ? (0, r.jsxs)("div", {
                          className: d.labelContainer,
                          children: [
                              n ? (0, r.jsx)(o.n, { children: L }) : L,
                              D &&
                                  (0, r.jsx)(c.x, {
                                      variant: "text-sm/normal",
                                      color: "text-secondary",
                                      className: d.description,
                                      id: A,
                                      children: s,
                                  }),
                          ],
                      })
                    : null,
                (0, r.jsxs)("div", {
                    className: d.control,
                    children: [
                        "function" == typeof _ ? _(y) : _,
                        (0, r.jsx)(p, {
                            successMessage: m,
                            errorMessage: h,
                            helperText: l,
                            trailingContent: g,
                            helperTextId: S,
                            errorMessageId: I,
                        }),
                    ],
                }),
            ],
        }),
    });
}
function p(e) {
    let {
            successMessage: t,
            errorMessage: n,
            helperText: i,
            trailingContent: o,
            helperTextId: u,
            errorMessageId: f,
        } = e,
        _ = (0, r.jsx)("div", {}),
        p = null != o;
    return (null != t && "" !== t
        ? ((p = !0),
          (_ = (0, r.jsxs)("div", {
              className: d.statusMessageContainer,
              children: [
                  (0, r.jsx)(s.o, {
                      size: "xs",
                      color: a.Z.colors.TEXT_FEEDBACK_POSITIVE,
                  }),
                  (0, r.jsx)(c.x, {
                      variant: "text-xs/normal",
                      color: "text-feedback-positive",
                      id: u,
                      children: t,
                  }),
              ],
          })))
        : null != n && "" !== n
          ? ((p = !0),
            (_ = (0, r.jsxs)("div", {
                className: d.statusMessageContainer,
                children: [
                    (0, r.jsx)(l.M, {
                        size: "xs",
                        color: a.Z.colors.TEXT_FEEDBACK_CRITICAL,
                    }),
                    (0, r.jsx)(c.x, {
                        variant: "text-xs/normal",
                        color: "text-feedback-critical",
                        id: f,
                        children: n,
                    }),
                ],
            })))
          : null != i &&
            ((p = !0),
            (_ = (0, r.jsx)(c.x, {
                variant: "text-xs/normal",
                color: "text-secondary",
                id: u,
                children: i,
            }))),
    p)
        ? (0, r.jsxs)("div", {
              className: d.helperTextContainer,
              children: [_, o],
          })
        : null;
}
