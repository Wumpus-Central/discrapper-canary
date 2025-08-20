n.d(t, { J: () => c });
var r = n(951288),
    i = n(647438),
    a = n(120356),
    o = n.n(a),
    s = n(481060),
    l = n(301133);
let c = i.forwardRef(function (e, t) {
    let {
            readOnly: n,
            disabled: i,
            fullWidth: a = !1,
            children: c,
            validation: u,
            className: d,
            helperText: f,
            characterCount: _,
            characterCountMaxLength: p,
            successMessage: h,
        } = e,
        m = null == u ? void 0 : u.hasError,
        g = (0, r.jsx)("div", {}),
        E = null != _;
    return (
        null != h && "" !== h
            ? ((E = !0),
              (g = (0, r.jsxs)("div", {
                  className: l.statusMessageContainer,
                  children: [
                      (0, r.jsx)(s.owK, {
                          size: "xs",
                          color: s.TVs.colors.TEXT_FEEDBACK_POSITIVE,
                      }),
                      (0, r.jsx)(s.Text, {
                          variant: "text-xs/normal",
                          color: "text-feedback-positive",
                          children: h,
                      }),
                  ],
              })))
            : m
              ? ((E = !0),
                (g = (0, r.jsxs)("div", {
                    className: l.statusMessageContainer,
                    children: [
                        (0, r.jsx)(s.Mgn, {
                            size: "xs",
                            color: s.TVs.colors.TEXT_FEEDBACK_CRITICAL,
                        }),
                        (0, r.jsx)(s.Text, {
                            variant: "text-xs/normal",
                            color: "text-feedback-critical",
                            children: null == u ? void 0 : u.errorMessage,
                        }),
                    ],
                })))
              : null != f &&
                ((E = !0),
                (g = (0, r.jsx)(s.Text, {
                    variant: "text-xs/normal",
                    color: "text-secondary",
                    children: f,
                }))),
        (0, r.jsxs)("div", {
            className: l.container,
            "data-full-width": a,
            children: [
                (0, r.jsx)("div", {
                    ref: t,
                    className: o()(l.wrapper, d),
                    "data-error": m,
                    "data-read-only": n,
                    "data-disabled": i,
                    children: c,
                }),
                E &&
                    (0, r.jsxs)("div", {
                        className: l.helperTextContainer,
                        children: [
                            g,
                            null != _ &&
                                (0, r.jsxs)(s.Text, {
                                    variant: "text-xs/normal",
                                    color: "text-secondary",
                                    tabularNumbers: !0,
                                    children: [_, null != p && " / ".concat(p)],
                                }),
                        ],
                    }),
            ],
        })
    );
});
