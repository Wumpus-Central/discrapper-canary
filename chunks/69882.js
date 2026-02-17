"use strict";
n.d(t, { Ed: () => C, Pw: () => v, rg: () => R });
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
    h = n(725836),
    p = n(147422),
    g = n(93159),
    E = n(270537),
    A = n(756366),
    I = n(985018),
    T = n(954848);
let y = (e) => (0, r.jsx)(S, { ...e }),
    S = (e) => {
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
            ? (0, r.jsx)("div", { className: T.y3, children: (0, r.jsx)(s.y$y, { type: s.y$y.Type.WANDERING_CUBES }) })
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
                              (0, r.jsxs)("div", { className: T.y3, children: [a, o] }),
                          ],
                      }),
                      (0, r.jsx)(u.UX, { children: (0, r.jsx)(f.cy, { primaryCTAButtonProps: p, showLockIcon: !0 }) }),
                  ],
              });
    },
    v = (0, _.R)({ step: o.pn.REVIEW, renderStep: y, DirectStepComponent: S }),
    C = () =>
        (0, r.jsx)("div", { className: T.g4, children: (0, r.jsx)(s.y$y, { type: s.y$y.Type.PULSING_ELLIPSIS }) }),
    b = (e) => null == e || "" === e,
    N = (e) => {
        let { children: t } = e,
            { errorMessage: n, notificationMessage: s, warningMessage: o } = (0, p.u)();
        return i.useMemo(
            () =>
                b(n) && b(s) && b(o)
                    ? null != t
                        ? (0, r.jsx)("div", { className: T.dD, children: t })
                        : null
                    : (0, r.jsxs)("div", {
                          className: T.dD,
                          children: [
                              b(n) ? null : (0, r.jsx)(a.wx6, { type: "critical", children: n }),
                              b(s) ? null : (0, r.jsx)(a.wx6, { type: "info", children: s }),
                              b(o) ? null : (0, r.jsx)(a.wx6, { type: "warning", children: o }),
                              t,
                          ],
                      }),
            [n, s, o, t],
        );
    },
    R = (e) => {
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
                invoiceTotalDueLabel: p = I.intl.string(A.default.R0cZsM),
                invoiceTotalDueValue: y,
                shouldShowGlobalNotices: S,
            } = e,
            v = i.useMemo(
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
            b = i.useMemo(
                () =>
                    null != v || S
                        ? S
                            ? null != v
                                ? (0, r.jsx)(N, { children: v })
                                : (0, r.jsx)(N, {})
                            : (0, r.jsx)("div", { className: T.dD, children: v })
                        : null,
                [S, v],
            ),
            R = i.useMemo(() => (0, d.Gn)(), []);
        return u
            ? (0, r.jsx)(C, {})
            : (0, r.jsxs)(r.Fragment, {
                  children: [
                      (0, r.jsxs)("div", {
                          className: T.db,
                          children: [
                              b,
                              s,
                              null != s && null != o && (0, r.jsx)("div", { className: T.ls }),
                              o,
                              null != l && (0, r.jsx)("div", { className: T.P3, children: l }),
                              (0, r.jsxs)("div", {
                                  className: T.Jv,
                                  children: [c, R ? (0, r.jsx)(g.Z4, { className: T.KX }) : null],
                              }),
                              (0, r.jsx)("div", { className: T.ZF, children: _ }),
                          ],
                      }),
                      (0, r.jsxs)(h.bx, {
                          children: [(0, r.jsx)(E.Qf, { className: T.NR, label: p, value: y ?? "--" }), f],
                      }),
                  ],
              });
    };
