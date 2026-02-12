"use strict";
n.d(t, { Ed: () => T, Pw: () => I, rg: () => v });
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
    h = n(147422),
    p = n(93159),
    g = n(954848);
let E = (e) => (0, r.jsx)(A, { ...e }),
    A = (e) => {
        let { unifiedStepProps: t } = e,
            {
                isStepLoading: n,
                reviewBodyContent: a,
                reviewBodyLegalContent: o,
                errorMessage: d,
                warningMessage: _,
                primaryCTAButtonProps: h,
            } = t,
            p = i.useMemo(() => ({ variant: "active", type: "submit", "data-testid": "submitButton", ...h }), [h]);
        return n
            ? (0, r.jsx)("div", { className: g.y3, children: (0, r.jsx)(s.y$y, { type: s.y$y.Type.WANDERING_CUBES }) })
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
                              (0, r.jsxs)("div", { className: g.y3, children: [a, o] }),
                          ],
                      }),
                      (0, r.jsx)(u.UX, { children: (0, r.jsx)(f.cy, { primaryCTAButtonProps: p, showLockIcon: !0 }) }),
                  ],
              });
    },
    I = (0, _.R)({ step: o.pn.REVIEW, renderStep: E, DirectStepComponent: A }),
    T = () =>
        (0, r.jsx)("div", { className: g.g4, children: (0, r.jsx)(s.y$y, { type: s.y$y.Type.PULSING_ELLIPSIS }) }),
    y = (e) => null == e || "" === e,
    S = (e) => {
        let { children: t } = e,
            { errorMessage: n, notificationMessage: s, warningMessage: o } = (0, h.u)();
        return i.useMemo(
            () =>
                y(n) && y(s) && y(o)
                    ? null != t
                        ? (0, r.jsx)("div", { className: g.dD, children: t })
                        : null
                    : (0, r.jsxs)("div", {
                          className: g.dD,
                          children: [
                              y(n) ? null : (0, r.jsx)(a.wx6, { type: "critical", children: n }),
                              y(s) ? null : (0, r.jsx)(a.wx6, { type: "info", children: s }),
                              y(o) ? null : (0, r.jsx)(a.wx6, { type: "warning", children: o }),
                              t,
                          ],
                      }),
            [n, s, o, t],
        );
    },
    v = (e) => {
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
                shouldShowGlobalNotices: h,
            } = e,
            E = i.useMemo(
                () =>
                    null == t && null == n
                        ? null
                        : null != n
                          ? n
                          : Array.isArray(t)
                            ? (0, r.jsx)(r.Fragment, {
                                  children: t.map((e) =>
                                      (0, r.jsx)(
                                          a.wx6,
                                          { type: e.type, hidden: e.hidden, children: e.message },
                                          String(e.message),
                                      ),
                                  ),
                              })
                            : null != t
                              ? (0, r.jsx)(a.wx6, { type: t.type, hidden: t.hidden, children: t.message })
                              : null,
                [t, n],
            ),
            A = i.useMemo(
                () =>
                    null != E || h
                        ? h
                            ? null != E
                                ? (0, r.jsx)(S, { children: E })
                                : (0, r.jsx)(S, {})
                            : (0, r.jsx)("div", { className: g.dD, children: E })
                        : null,
                [h, E],
            ),
            I = i.useMemo(() => (0, d.Gn)(), []);
        return u
            ? (0, r.jsx)(T, {})
            : (0, r.jsxs)("div", {
                  className: g.db,
                  children: [
                      A,
                      s,
                      null != s && null != o && (0, r.jsx)("div", { className: g.GG }),
                      o,
                      null != l && (0, r.jsx)("div", { className: g.P3, children: l }),
                      (0, r.jsxs)("div", {
                          className: g.Jv,
                          children: [c, I ? (0, r.jsx)(p.Z4, { className: g.KX }) : null],
                      }),
                      (0, r.jsx)("div", { className: g.ZF, children: _ }),
                      f,
                  ],
              });
    };
