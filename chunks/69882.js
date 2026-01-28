n.d(t, {
    Ed: () => y,
    Pw: () => E,
    rg: () => b,
});
var r = n(627968),
    i = n(64700),
    a = n(158954),
    o = n(397927),
    s = n(166532),
    l = n(69494),
    c = n(482132),
    u = n(516248),
    d = n(866485),
    f = n(981036),
    p = n(954848);

function _(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}

function h(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                _(e, t, n[t]);
            });
    }
    return e;
}
let m = (e) => (0, r.jsx)(g, h({}, e)),
    g = (e) => {
        let { unifiedStepProps: t } = e,
            {
                isStepLoading: n,
                reviewBodyContent: a,
                reviewBodyLegalContent: s,
                errorMessage: d,
                warningMessage: _,
                primaryCTAButtonProps: m,
            } = t,
            g = i.useMemo(
                () =>
                    h(
                        {
                            variant: "active",
                            type: "submit",
                            "data-testid": "submitButton",
                        },
                        m,
                    ),
                [m],
            );
        return n
            ? (0, r.jsx)("div", {
                  className: p.y3,
                  children: (0, r.jsx)(o.y$y, {
                      type: o.y$y.Type.WANDERING_CUBES,
                  }),
              })
            : (0, r.jsxs)(r.Fragment, {
                  children: [
                      (0, r.jsx)(l.A, {}),
                      (0, r.jsxs)(c.dZ, {
                          children: [
                              (0, r.jsxs)(o.BJc, {
                                  direction: "vertical",
                                  gap: 8,
                                  children: [
                                      null != d
                                          ? (0, r.jsx)(f.Wg, {
                                                message: d,
                                            })
                                          : null,
                                      null != _
                                          ? (0, r.jsx)(u.A, {
                                                message: _,
                                            })
                                          : null,
                                  ],
                              }),
                              (0, r.jsxs)("div", {
                                  className: p.y3,
                                  children: [a, s],
                              }),
                          ],
                      }),
                      (0, r.jsx)(c.UX, {
                          children: (0, r.jsx)(f.cy, {
                              primaryCTAButtonProps: g,
                              showLockIcon: !0,
                          }),
                      }),
                  ],
              });
    },
    E = (0, d.R)({
        step: s.pn.REVIEW,
        renderStep: m,
        DirectStepComponent: g,
    }),
    y = () =>
        (0, r.jsx)("div", {
            className: p.g4,
            children: (0, r.jsx)(o.y$y, {
                type: o.y$y.Type.PULSING_ELLIPSIS,
            }),
        }),
    b = (e) => {
        let {
            upperInlineNoticeProps: t,
            planSelectContent: n,
            purchaseItemContent: i,
            subscriptionDetailsContent: o,
            isStepLoading: s,
            paymentSelectContent: l,
            invoiceSummaryContent: c,
        } = e;
        return s
            ? (0, r.jsx)(y, {})
            : (0, r.jsxs)("div", {
                  className: p.db,
                  children: [
                      null != t &&
                          (0, r.jsx)("div", {
                              className: p.dD,
                              children: (0, r.jsx)(a.wx6, {
                                  type: t.type,
                                  hidden: t.hidden,
                                  children: t.message,
                              }),
                          }),
                      n,
                      null != n &&
                          null != i &&
                          (0, r.jsx)("div", {
                              className: p.GG,
                          }),
                      i,
                      null != o &&
                          (0, r.jsx)("div", {
                              className: p.P3,
                              children: o,
                          }),
                      (0, r.jsx)("div", {
                          className: p.Jv,
                          children: l,
                      }),
                      (0, r.jsx)("div", {
                          className: p.ZF,
                          children: c,
                      }),
                  ],
              });
    };
