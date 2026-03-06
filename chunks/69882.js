"use strict";
n.d(t, { Ed: () => R, Pw: () => C, rg: () => w });
var r = n(627968),
    i = n(64700),
    s = n(503698),
    a = n.n(s),
    o = n(158954),
    l = n(397927),
    u = n(166532),
    c = n(379626),
    d = n(69494),
    _ = n(482132),
    f = n(516248),
    p = n(427262),
    h = n(866485),
    m = n(981036),
    E = n(725836),
    g = n(147422),
    A = n(93159),
    I = n(270537),
    T = n(523376),
    S = n(985018),
    y = n(193010);
let v = (e) => (0, r.jsx)(N, { ...e }),
    N = (e) => {
        let { unifiedStepProps: t } = e,
            {
                isStepLoading: n,
                reviewBodyContent: s,
                reviewBodyLegalContent: a,
                errorMessage: o,
                warningMessage: u,
                primaryCTAButtonProps: p,
            } = t,
            h = i.useMemo(() => ({ variant: "active", type: "submit", "data-testid": "submitButton", ...p }), [p]);
        return n
            ? (0, r.jsx)("div", { className: y.y3, children: (0, r.jsx)(l.y$y, { type: l.y$y.Type.WANDERING_CUBES }) })
            : (0, r.jsxs)(r.Fragment, {
                  children: [
                      (0, r.jsx)(d.A, {}),
                      (0, r.jsxs)(_.dZ, {
                          children: [
                              (0, r.jsxs)(l.BJc, {
                                  direction: "vertical",
                                  gap: 8,
                                  children: [
                                      null != o ? (0, r.jsx)(m.Wg, { message: o }) : null,
                                      null != u ? (0, r.jsx)(f.A, { message: u }) : null,
                                  ],
                              }),
                              (0, r.jsxs)("div", { className: y.y3, children: [(0, r.jsx)(c.I, {}), s, a] }),
                          ],
                      }),
                      (0, r.jsx)(_.UX, { children: (0, r.jsx)(m.cy, { primaryCTAButtonProps: h, showLockIcon: !0 }) }),
                  ],
              });
    },
    C = (0, h.R)({ step: u.pn.REVIEW, renderStep: v, DirectStepComponent: N }),
    R = (e) => {
        let { className: t } = e;
        return (0, r.jsx)("div", {
            className: a()(y.g4, t),
            children: (0, r.jsx)(l.y$y, { type: l.y$y.Type.PULSING_ELLIPSIS, itemClassName: y.Je }),
        });
    },
    O = (e) => null != e && "object" == typeof e && "message" in e && "type" in e,
    b = (e) =>
        O(e)
            ? (0, r.jsx)(o.wx6, { type: e.type, hidden: e.hidden, children: e.message }, e.key)
            : (0, r.jsx)(i.Fragment, { children: e.directContent }, e.key),
    D = (e) => null == e || "" === e,
    L = (e) => {
        let { children: t } = e,
            { errorMessage: n, notificationMessage: s, warningMessage: a } = (0, g.u)();
        return i.useMemo(
            () =>
                D(n) && D(s) && D(a)
                    ? null != t
                        ? (0, r.jsx)("div", { className: y.dD, children: t })
                        : null
                    : (0, r.jsxs)("div", {
                          className: y.dD,
                          children: [
                              D(n) ? null : (0, r.jsx)(o.wx6, { type: "critical", children: n }),
                              D(s) ? null : (0, r.jsx)(o.wx6, { type: "info", children: s }),
                              D(a) ? null : (0, r.jsx)(o.wx6, { type: "warning", children: a }),
                              t,
                          ],
                      }),
            [n, s, a, t],
        );
    },
    w = (e) => {
        let {
                upperInlineNoticeProps: t,
                upperInlineNoticeContent: n,
                planSelectContent: s,
                purchaseItemContent: a,
                subscriptionDetailsContent: o,
                isStepLoading: l,
                paymentSelectContent: u,
                invoiceSummaryContent: d,
                promotionalNoticeContent: _,
                legalContent: f,
                invoiceTotalDueLabel: h = S.intl.string(T.default.R0cZsM),
                invoiceTotalDueValue: m,
                shouldShowGlobalNotices: g,
                className: v,
            } = e,
            N = i.useMemo(
                () =>
                    null == t && null == n
                        ? null
                        : null != n
                          ? n
                          : Array.isArray(t)
                            ? 0 === t.length
                                ? null
                                : (0, r.jsx)(r.Fragment, { children: t.map((e) => b(e)) })
                            : null != t
                              ? b(t)
                              : null,
                [t, n],
            ),
            C = i.useMemo(
                () =>
                    null != N || g
                        ? g
                            ? null != N
                                ? (0, r.jsx)(L, { children: N })
                                : (0, r.jsx)(L, {})
                            : (0, r.jsx)("div", { className: y.dD, children: N })
                        : null,
                [g, N],
            ),
            O = i.useMemo(() => (0, p.Gn)(), []);
        return l
            ? (0, r.jsx)(R, { className: v })
            : (0, r.jsxs)(r.Fragment, {
                  children: [
                      (0, r.jsxs)("div", {
                          className: v,
                          children: [
                              C,
                              s,
                              null != s && null != a && (0, r.jsx)("div", { className: y.ls }),
                              (0, r.jsx)(c.I, {}),
                              a,
                              null != o && (0, r.jsx)("div", { className: y.P3, children: o }),
                              (0, r.jsxs)("div", {
                                  className: y.Jv,
                                  children: [u, O ? (0, r.jsx)(A.Z4, { className: y.KX }) : null],
                              }),
                              null != d && (0, r.jsx)("div", { className: y.ZF, children: d }),
                          ],
                      }),
                      (0, r.jsxs)(E.bx, {
                          children: [
                              null != h && (0, r.jsx)(I.Qf, { className: y.NR, label: h, value: m ?? "--" }),
                              null != _ ? (0, r.jsx)("div", { className: y.uh, children: _ }) : null,
                              f,
                          ],
                      }),
                  ],
              });
    };
