"use strict";
n.d(t, { Ed: () => I, Pw: () => A, rg: () => T });
var r = n(627968),
    i = n(64700),
    a = n(158954),
    s = n(397927),
    o = n(166532),
    l = n(69494),
    u = n(482132),
    c = n(516248),
    d = n(427262),
    _ = n(866485),
    f = n(981036),
    h = n(93159),
    p = n(954848);
let g = (e) => (0, r.jsx)(E, { ...e }),
    E = (e) => {
        let { unifiedStepProps: t } = e,
            {
                isStepLoading: n,
                reviewBodyContent: a,
                reviewBodyLegalContent: o,
                errorMessage: d,
                warningMessage: _,
                primaryCTAButtonProps: h,
            } = t,
            g = i.useMemo(() => ({ variant: "active", type: "submit", "data-testid": "submitButton", ...h }), [h]);
        return n
            ? (0, r.jsx)("div", { className: p.y3, children: (0, r.jsx)(s.y$y, { type: s.y$y.Type.WANDERING_CUBES }) })
            : (0, r.jsxs)(r.Fragment, {
                  children: [
                      (0, r.jsx)(l.A, {}),
                      (0, r.jsxs)(u.dZ, {
                          children: [
                              (0, r.jsxs)(s.BJc, {
                                  direction: "vertical",
                                  gap: 8,
                                  children: [
                                      null != d ? (0, r.jsx)(f.Wg, { message: d }) : null,
                                      null != _ ? (0, r.jsx)(c.A, { message: _ }) : null,
                                  ],
                              }),
                              (0, r.jsxs)("div", { className: p.y3, children: [a, o] }),
                          ],
                      }),
                      (0, r.jsx)(u.UX, { children: (0, r.jsx)(f.cy, { primaryCTAButtonProps: g, showLockIcon: !0 }) }),
                  ],
              });
    },
    A = (0, _.R)({ step: o.pn.REVIEW, renderStep: g, DirectStepComponent: E }),
    I = () =>
        (0, r.jsx)("div", { className: p.g4, children: (0, r.jsx)(s.y$y, { type: s.y$y.Type.PULSING_ELLIPSIS }) }),
    T = (e) => {
        let {
                upperInlineNoticeProps: t,
                upperInlineNoticeContent: n,
                planSelectContent: s,
                purchaseItemContent: o,
                subscriptionDetailsContent: l,
                isStepLoading: u,
                paymentSelectContent: c,
                invoiceSummaryContent: _,
                legalContent: f,
            } = e,
            g = i.useMemo(() => (0, d.Gn)(), []);
        return u
            ? (0, r.jsx)(I, {})
            : (0, r.jsxs)("div", {
                  className: p.db,
                  children: [
                      (null != t || null != n) &&
                          (0, r.jsx)("div", {
                              className: p.dD,
                              children:
                                  null != t
                                      ? (0, r.jsx)(a.wx6, { type: t.type, hidden: t.hidden, children: t.message })
                                      : n,
                          }),
                      s,
                      null != s && null != o && (0, r.jsx)("div", { className: p.GG }),
                      o,
                      null != l && (0, r.jsx)("div", { className: p.P3, children: l }),
                      (0, r.jsxs)("div", {
                          className: p.Jv,
                          children: [c, g ? (0, r.jsx)(h.Z4, { className: p.KX }) : null],
                      }),
                      (0, r.jsx)("div", { className: p.ZF, children: _ }),
                      f,
                  ],
              });
    };
