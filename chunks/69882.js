"use strict";
n.d(t, { Ed: () => C, Pw: () => N, rg: () => w });
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
    I = n(756366),
    T = n(985018),
    S = n(954848);
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
    R = (e) => null != e && "object" == typeof e && "message" in e && "type" in e,
    O = (e) =>
        R(e)
            ? (0, r.jsx)(o.wx6, { type: e.type, hidden: e.hidden, children: e.message }, e.key)
            : (0, r.jsx)(i.Fragment, { children: e.directContent }, e.key),
    b = (e) => null == e || "" === e,
    D = (e) => {
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
                subscriptionDetailsContent: a,
                isStepLoading: o,
                paymentSelectContent: l,
                invoiceSummaryContent: u,
                promotionalNoticeContent: c,
                legalContent: d,
                invoiceTotalDueLabel: _ = T.intl.string(I.default.R0cZsM),
                invoiceTotalDueValue: p,
                shouldShowGlobalNotices: h,
                footerInlineNoticeProps: E,
                className: y,
            } = e,
            v = L(t),
            N = L(E),
            R = i.useMemo(
                () =>
                    null != v || h
                        ? h
                            ? null != v
                                ? (0, r.jsx)(D, { children: v })
                                : (0, r.jsx)(D, {})
                            : (0, r.jsx)("div", { className: S.dD, children: v })
                        : null,
                [h, v],
            ),
            O = i.useMemo(() => (0, f.Gn)(), []);
        return o
            ? (0, r.jsx)(C, { className: y })
            : (0, r.jsxs)(r.Fragment, {
                  children: [
                      (0, r.jsxs)("div", {
                          className: y,
                          children: [
                              R,
                              n,
                              null != n && null != s && (0, r.jsx)("div", { className: S.ls }),
                              s,
                              null != a && (0, r.jsx)("div", { className: S.P3, children: a }),
                              (0, r.jsxs)("div", {
                                  className: S.Jv,
                                  children: [l, O ? (0, r.jsx)(g.Z4, { className: S.KX }) : null],
                              }),
                              null != u && (0, r.jsx)("div", { className: S.ZF, children: u }),
                          ],
                      }),
                      (0, r.jsxs)(m.bx, {
                          children: [
                              null != _ && null != p && (0, r.jsx)(A.Qf, { className: S.NR, label: _, value: p }),
                              null != c ? (0, r.jsx)("div", { className: S.uh, children: c }) : null,
                              d,
                              null != N ? (0, r.jsx)("div", { className: S.Uu, children: N }) : null,
                          ],
                      }),
                  ],
              });
    };
