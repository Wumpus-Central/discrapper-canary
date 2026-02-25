"use strict";
n.d(t, { Ed: () => C, Pw: () => N, rg: () => O });
var r = n(627968),
    i = n(64700),
    s = n(503698),
    a = n.n(s),
    o = n(158954),
    l = n(397927),
    u = n(166532),
    c = n(69494),
    d = n(482132),
    _ = n(516248),
    f = n(427262),
    p = n(866485),
    h = n(981036),
    m = n(725836),
    E = n(147422),
    g = n(93159),
    A = n(270537),
    I = n(523376),
    T = n(985018),
    S = n(193010);
let y = (e) => (0, r.jsx)(v, { ...e }),
    v = (e) => {
        let { unifiedStepProps: t } = e,
            {
                isStepLoading: n,
                reviewBodyContent: s,
                reviewBodyLegalContent: a,
                errorMessage: o,
                warningMessage: u,
                primaryCTAButtonProps: f,
            } = t,
            p = i.useMemo(() => ({ variant: "active", type: "submit", "data-testid": "submitButton", ...f }), [f]);
        return n
            ? (0, r.jsx)("div", { className: S.y3, children: (0, r.jsx)(l.y$y, { type: l.y$y.Type.WANDERING_CUBES }) })
            : (0, r.jsxs)(r.Fragment, {
                  children: [
                      (0, r.jsx)(c.A, {}),
                      (0, r.jsxs)(d.dZ, {
                          children: [
                              (0, r.jsxs)(l.BJc, {
                                  direction: "vertical",
                                  gap: 8,
                                  children: [
                                      null != o ? (0, r.jsx)(h.Wg, { message: o }) : null,
                                      null != u ? (0, r.jsx)(_.A, { message: u }) : null,
                                  ],
                              }),
                              (0, r.jsxs)("div", { className: S.y3, children: [s, a] }),
                          ],
                      }),
                      (0, r.jsx)(d.UX, { children: (0, r.jsx)(h.cy, { primaryCTAButtonProps: p, showLockIcon: !0 }) }),
                  ],
              });
    },
    N = (0, p.R)({ step: u.pn.REVIEW, renderStep: y, DirectStepComponent: v }),
    C = (e) => {
        let { className: t } = e;
        return (0, r.jsx)("div", {
            className: a()(S.g4, t),
            children: (0, r.jsx)(l.y$y, { type: l.y$y.Type.PULSING_ELLIPSIS, itemClassName: S.Je }),
        });
    },
    b = (e) => null == e || "" === e,
    R = (e) => {
        let { children: t } = e,
            { errorMessage: n, notificationMessage: s, warningMessage: a } = (0, E.u)();
        return i.useMemo(
            () =>
                b(n) && b(s) && b(a)
                    ? null != t
                        ? (0, r.jsx)("div", { className: S.dD, children: t })
                        : null
                    : (0, r.jsxs)("div", {
                          className: S.dD,
                          children: [
                              b(n) ? null : (0, r.jsx)(o.wx6, { type: "critical", children: n }),
                              b(s) ? null : (0, r.jsx)(o.wx6, { type: "info", children: s }),
                              b(a) ? null : (0, r.jsx)(o.wx6, { type: "warning", children: a }),
                              t,
                          ],
                      }),
            [n, s, a, t],
        );
    },
    O = (e) => {
        let {
                upperInlineNoticeProps: t,
                upperInlineNoticeContent: n,
                planSelectContent: s,
                purchaseItemContent: a,
                subscriptionDetailsContent: l,
                isStepLoading: u,
                paymentSelectContent: c,
                invoiceSummaryContent: d,
                promotionalNoticeContent: _,
                legalContent: p,
                invoiceTotalDueLabel: h = T.intl.string(I.default.R0cZsM),
                invoiceTotalDueValue: E,
                shouldShowGlobalNotices: y,
                className: v,
            } = e,
            N = i.useMemo(
                () =>
                    null == t && null == n
                        ? null
                        : null != n
                          ? n
                          : Array.isArray(t)
                            ? (0, r.jsx)(r.Fragment, {
                                  children: t.map((e) =>
                                      (0, r.jsx)(
                                          o.wx6,
                                          { type: e.type, hidden: e.hidden, children: e.message },
                                          String(e.message),
                                      ),
                                  ),
                              })
                            : null != t
                              ? (0, r.jsx)(o.wx6, { type: t.type, hidden: t.hidden, children: t.message })
                              : null,
                [t, n],
            ),
            b = i.useMemo(
                () =>
                    null != N || y
                        ? y
                            ? null != N
                                ? (0, r.jsx)(R, { children: N })
                                : (0, r.jsx)(R, {})
                            : (0, r.jsx)("div", { className: S.dD, children: N })
                        : null,
                [y, N],
            ),
            O = i.useMemo(() => (0, f.Gn)(), []);
        return u
            ? (0, r.jsx)(C, { className: v })
            : (0, r.jsxs)(r.Fragment, {
                  children: [
                      (0, r.jsxs)("div", {
                          className: v,
                          children: [
                              b,
                              s,
                              null != s && null != a && (0, r.jsx)("div", { className: S.ls }),
                              a,
                              null != l && (0, r.jsx)("div", { className: S.P3, children: l }),
                              (0, r.jsxs)("div", {
                                  className: S.Jv,
                                  children: [c, O ? (0, r.jsx)(g.Z4, { className: S.KX }) : null],
                              }),
                              null != d && (0, r.jsx)("div", { className: S.ZF, children: d }),
                          ],
                      }),
                      (0, r.jsxs)(m.bx, {
                          children: [
                              null != h && (0, r.jsx)(A.Qf, { className: S.NR, label: h, value: E ?? "--" }),
                              null != _ ? (0, r.jsx)("div", { className: S.uh, children: _ }) : null,
                              p,
                          ],
                      }),
                  ],
              });
    };
