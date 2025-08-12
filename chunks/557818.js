n.d(t, { J: () => l });
var r = n(255367);
n(73800);
var i = n(120356),
    o = n.n(i),
    a = n(481060),
    s = n(250303);
function l(e) {
    let {
            readOnly: t,
            disabled: n,
            fullWidth: i = !1,
            children: l,
            validation: c,
            className: u,
            helperText: d,
            characterCount: f,
            characterCountMaxLength: _,
            successMessage: p,
        } = e,
        h = null == c ? void 0 : c.hasError,
        m = (0, r.jsx)("div", {}),
        g = null != f;
    return (
        null != p && "" !== p
            ? ((g = !0),
              (m = (0, r.jsxs)("div", {
                  className: s.statusMessageContainer,
                  children: [
                      (0, r.jsx)(a.owK, {
                          size: "xs",
                          color: a.TVs.colors.TEXT_FEEDBACK_POSITIVE,
                      }),
                      (0, r.jsx)(a.Text, {
                          variant: "text-xs/normal",
                          color: "text-feedback-positive",
                          children: p,
                      }),
                  ],
              })))
            : h
              ? ((g = !0),
                (m = (0, r.jsxs)("div", {
                    className: s.statusMessageContainer,
                    children: [
                        (0, r.jsx)(a.Mgn, {
                            size: "xs",
                            color: a.TVs.colors.TEXT_FEEDBACK_CRITICAL,
                        }),
                        (0, r.jsx)(a.Text, {
                            variant: "text-xs/normal",
                            color: "text-feedback-critical",
                            children: null == c ? void 0 : c.errorMessage,
                        }),
                    ],
                })))
              : null != d &&
                ((g = !0),
                (m = (0, r.jsx)(a.Text, {
                    variant: "text-xs/normal",
                    color: "text-secondary",
                    children: d,
                }))),
        (0, r.jsxs)("div", {
            className: s.container,
            "data-full-width": i,
            children: [
                (0, r.jsx)("div", {
                    className: o()(s.wrapper, u),
                    "data-error": h,
                    "data-read-only": t,
                    "data-disabled": n,
                    children: l,
                }),
                g &&
                    (0, r.jsxs)("div", {
                        className: s.helperTextContainer,
                        children: [
                            m,
                            null != f &&
                                (0, r.jsxs)(a.Text, {
                                    variant: "text-xs/normal",
                                    color: "text-secondary",
                                    tabularNumbers: !0,
                                    children: [f, null != _ && " / ".concat(_)],
                                }),
                        ],
                    }),
            ],
        })
    );
}
