"use strict";
n.d(t, { Ed: () => C, Pw: () => N, rg: () => M });
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
    I = n(523376),
    T = n(985018),
    S = n(387042);
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
        let { upperInlineNoticeProps: t, shouldShowGlobalNotices: n } = e,
            s = L(t);
        return i.useMemo(
            () =>
                null != s || n
                    ? n
                        ? null != s
                            ? (0, r.jsx)(D, { children: s })
                            : (0, r.jsx)(D, {})
                        : (0, r.jsx)("div", { className: S.dD, children: s })
                    : null,
            [n, s],
        );
    },
    M = (e) => {
        let {
                upperInlineNoticeProps: t,
                planSelectContent: n,
                purchaseItemContent: i,
                subscriptionDetailsContent: s,
                isStepLoading: o,
                paymentSelectContent: l,
                invoiceSummaryContent: c,
                promotionalNoticeContent: d,
                legalContent: _,
                invoiceTotalDueLabel: f = T.intl.string(I.default.R0cZsM),
                invoiceTotalDueValue: p,
                shouldShowGlobalNotices: h,
                footerInlineNoticeProps: E,
                className: y,
            } = e,
            { enabled: v } = (0, u.c)({ location: "UnifiedReviewStep" }),
            N = L(E);
        return o
            ? (0, r.jsx)(C, { className: y })
            : (0, r.jsxs)(r.Fragment, {
                  children: [
                      (0, r.jsxs)("div", {
                          className: a()(y, { [S.pg]: null == c }),
                          children: [
                              (0, r.jsx)(w, { upperInlineNoticeProps: t, shouldShowGlobalNotices: h }),
                              n,
                              null != n && null != i && (0, r.jsx)("div", { className: S.ls }),
                              i,
                              null != s && (0, r.jsx)("div", { className: S.P3, children: s }),
                              (0, r.jsxs)("div", {
                                  className: S.Jv,
                                  children: [l, v ? (0, r.jsx)(g.Z4, { className: S.KX }) : null],
                              }),
                              null != c && (0, r.jsx)("div", { className: S.ZF, children: c }),
                          ],
                      }),
                      (0, r.jsxs)(m.bx, {
                          children: [
                              null != f && null != p && (0, r.jsx)(A.Qf, { className: S.NR, label: f, value: p }),
                              null != d ? (0, r.jsx)("div", { className: S.uh, children: d }) : null,
                              _,
                              null != N ? (0, r.jsx)("div", { className: S.Uu, children: N }) : null,
                          ],
                      }),
                  ],
              });
    };
