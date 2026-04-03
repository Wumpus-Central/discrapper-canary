"use strict";
n.d(t, { Ed: () => C, Pw: () => N, rg: () => w });
var r = n(627968),
    i = n(64700),
    s = n(503698),
    a = n.n(s),
    o = n(158954),
    l = n(397927),
    u = n(459357),
    c = n(166532),
    d = n(69494),
    _ = n(482132),
    f = n(516248),
    p = n(866485),
    h = n(981036),
    m = n(725836),
    E = n(147422),
    g = n(93159),
    A = n(270537),
    I = n(756366),
    T = n(985018),
    S = n(150163);
let y = (e) => (0, r.jsx)(v, { ...e }),
    v = (e) => {
        let { unifiedStepProps: t } = e,
            {
                isStepLoading: n,
                reviewBodyContent: s,
                reviewBodyLegalContent: a,
                errorMessage: o,
                warningMessage: u,
                primaryCTAButtonProps: c,
            } = t,
            p = i.useMemo(() => ({ variant: "active", type: "submit", "data-testid": "submitButton", ...c }), [c]);
        return n
            ? (0, r.jsx)("div", { className: S.y3, children: (0, r.jsx)(l.y$y, { type: l.y$y.Type.WANDERING_CUBES }) })
            : (0, r.jsxs)(r.Fragment, {
                  children: [
                      (0, r.jsx)(d.A, {}),
                      (0, r.jsxs)(_.dZ, {
                          children: [
                              (0, r.jsxs)(l.BJc, {
                                  direction: "vertical",
                                  gap: 8,
                                  children: [
                                      null != o ? (0, r.jsx)(h.Wg, { message: o }) : null,
                                      null != u ? (0, r.jsx)(f.A, { message: u }) : null,
                                  ],
                              }),
                              (0, r.jsxs)("div", { className: S.y3, children: [s, a] }),
                          ],
                      }),
                      (0, r.jsx)(_.UX, { children: (0, r.jsx)(h.cy, { primaryCTAButtonProps: p, showLockIcon: !0 }) }),
                  ],
              });
    },
    N = (0, p.R)({ step: c.pn.REVIEW, renderStep: y, DirectStepComponent: v }),
    C = (e) => {
        let { className: t } = e;
        return (0, r.jsx)("div", {
            className: a()(S.g4, t),
            children: (0, r.jsx)(l.y$y, { type: l.y$y.Type.PULSING_ELLIPSIS, itemClassName: S.Je }),
        });
    },
    R = (e) => null != e && "object" == typeof e && "message" in e && "type" in e,
    O = (e) =>
        R(e)
            ? (0, r.jsx)(o.wx6, { type: e.type, hidden: e.hidden, children: e.message }, e.key)
            : (0, r.jsx)(i.Fragment, { children: e.directContent }, e.key),
    b = (e) => null == e || "" === e,
    D = (e) => {
        let { children: t } = e,
            { errorMessage: n, warningMessage: s, richNotices: a } = (0, E.u)();
        return i.useMemo(
            () =>
                b(n) && b(s) && !(a.length > 0) && null == t
                    ? null
                    : (0, r.jsxs)("div", {
                          className: S.dD,
                          children: [
                              b(n) ? null : (0, r.jsx)(o.wx6, { type: "critical", children: n }),
                              b(s) ? null : (0, r.jsx)(o.wx6, { type: "warning", children: s }),
                              a.map(O),
                              t,
                          ],
                      }),
            [n, s, a, t],
        );
    },
    L = (e) =>
        i.useMemo(
            () =>
                null == e
                    ? null
                    : Array.isArray(e)
                      ? 0 === e.length
                          ? null
                          : (0, r.jsx)(r.Fragment, { children: e.map((e) => O(e)) })
                      : null != e
                        ? O(e)
                        : null,
            [e],
        ),
    w = (e) => {
        let {
                upperInlineNoticeProps: t,
                planSelectContent: n,
                purchaseItemContent: s,
                subscriptionDetailsContent: o,
                isStepLoading: l,
                paymentSelectContent: c,
                invoiceSummaryContent: d,
                promotionalNoticeContent: _,
                legalContent: f,
                invoiceTotalDueLabel: p = T.intl.string(I.default.R0cZsM),
                invoiceTotalDueValue: h,
                shouldShowGlobalNotices: E,
                footerInlineNoticeProps: y,
                className: v,
            } = e,
            N = L(t),
            R = L(y),
            O = i.useMemo(
                () =>
                    null != N || E
                        ? E
                            ? null != N
                                ? (0, r.jsx)(D, { children: N })
                                : (0, r.jsx)(D, {})
                            : (0, r.jsx)("div", { className: S.dD, children: N })
                        : null,
                [E, N],
            ),
            { enabled: b } = (0, u.c)({ location: "UnifiedReviewStep" });
        return l
            ? (0, r.jsx)(C, { className: v })
            : (0, r.jsxs)(r.Fragment, {
                  children: [
                      (0, r.jsxs)("div", {
                          className: a()(v, { [S.pg]: null == d }),
                          children: [
                              O,
                              n,
                              null != n && null != s && (0, r.jsx)("div", { className: S.ls }),
                              s,
                              null != o && (0, r.jsx)("div", { className: S.P3, children: o }),
                              (0, r.jsxs)("div", {
                                  className: S.Jv,
                                  children: [c, b ? (0, r.jsx)(g.Z4, { className: S.KX }) : null],
                              }),
                              null != d && (0, r.jsx)("div", { className: S.ZF, children: d }),
                          ],
                      }),
                      (0, r.jsxs)(m.bx, {
                          children: [
                              null != p && null != h && (0, r.jsx)(A.Qf, { className: S.NR, label: p, value: h }),
                              null != _ ? (0, r.jsx)("div", { className: S.uh, children: _ }) : null,
                              f,
                              null != R ? (0, r.jsx)("div", { className: S.Uu, children: R }) : null,
                          ],
                      }),
                  ],
              });
    };
