"use strict";
n.d(t, { Ed: () => g, Pw: () => m, rg: () => E });
var r = n(627968),
    i = n(64700),
    a = n(158954),
    s = n(397927),
    o = n(166532),
    l = n(69494),
    u = n(482132),
    c = n(516248),
    d = n(866485),
    _ = n(981036),
    f = n(954848);
let p = (e) => (0, r.jsx)(h, { ...e }),
    h = (e) => {
        let { unifiedStepProps: t } = e,
            {
                isStepLoading: n,
                reviewBodyContent: a,
                reviewBodyLegalContent: o,
                errorMessage: d,
                warningMessage: p,
                primaryCTAButtonProps: h,
            } = t,
            m = i.useMemo(() => ({ variant: "active", type: "submit", "data-testid": "submitButton", ...h }), [h]);
        return n
            ? (0, r.jsx)("div", { className: f.y3, children: (0, r.jsx)(s.y$y, { type: s.y$y.Type.WANDERING_CUBES }) })
            : (0, r.jsxs)(r.Fragment, {
                  children: [
                      (0, r.jsx)(l.A, {}),
                      (0, r.jsxs)(u.dZ, {
                          children: [
                              (0, r.jsxs)(s.BJc, {
                                  direction: "vertical",
                                  gap: 8,
                                  children: [
                                      null != d ? (0, r.jsx)(_.Wg, { message: d }) : null,
                                      null != p ? (0, r.jsx)(c.A, { message: p }) : null,
                                  ],
                              }),
                              (0, r.jsxs)("div", { className: f.y3, children: [a, o] }),
                          ],
                      }),
                      (0, r.jsx)(u.UX, { children: (0, r.jsx)(_.cy, { primaryCTAButtonProps: m, showLockIcon: !0 }) }),
                  ],
              });
    },
    m = (0, d.R)({ step: o.pn.REVIEW, renderStep: p, DirectStepComponent: h }),
    g = () =>
        (0, r.jsx)("div", { className: f.g4, children: (0, r.jsx)(s.y$y, { type: s.y$y.Type.PULSING_ELLIPSIS }) }),
    E = (e) => {
        let {
            upperInlineNoticeProps: t,
            upperInlineNoticeContent: n,
            planSelectContent: i,
            purchaseItemContent: s,
            subscriptionDetailsContent: o,
            isStepLoading: l,
            paymentSelectContent: u,
            invoiceSummaryContent: c,
        } = e;
        return l
            ? (0, r.jsx)(g, {})
            : (0, r.jsxs)("div", {
                  className: f.db,
                  children: [
                      (null != t || null != n) &&
                          (0, r.jsx)("div", {
                              className: f.dD,
                              children:
                                  null != t
                                      ? (0, r.jsx)(a.wx6, { type: t.type, hidden: t.hidden, children: t.message })
                                      : n,
                          }),
                      i,
                      null != i && null != s && (0, r.jsx)("div", { className: f.GG }),
                      s,
                      null != o && (0, r.jsx)("div", { className: f.P3, children: o }),
                      (0, r.jsx)("div", { className: f.Jv, children: u }),
                      (0, r.jsx)("div", { className: f.ZF, children: c }),
                  ],
              });
    };
