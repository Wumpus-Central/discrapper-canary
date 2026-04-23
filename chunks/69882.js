"use strict";
n.d(t, { Ed: () => I, Pw: () => A, T_: () => O });
var i = n(627968),
    r = n(64700),
    s = n(503698),
    a = n.n(s),
    o = n(683071),
    l = n(289873),
    d = n(459357),
    _ = n(166532),
    u = n(866485),
    c = n(725836),
    E = n(860724),
    h = n(232467),
    m = n(848584),
    f = n(327105),
    g = n(985018),
    p = n(312867);
let A = (0, u.R)({ step: _.pn.REVIEW }),
    I = (e) => {
        let { className: t } = e;
        return (0, i.jsx)("div", {
            className: a()(p.g4, t),
            children: (0, i.jsx)(l.y, { type: l.y.Type.PULSING_ELLIPSIS, itemClassName: p.Je }),
        });
    },
    T = (e) =>
        null != e && "object" == typeof e && "message" in e && "type" in e
            ? (0, i.jsx)(o.w, { type: e.type, hidden: e.hidden, children: e.message }, e.key)
            : (0, i.jsx)(r.Fragment, { children: e.directContent }, e.key),
    S = (e) => null == e || "" === e,
    N = (e) => {
        let { children: t } = e,
            { errorMessage: n, warningMessage: s, richNotices: a } = (0, E.u)();
        return r.useMemo(
            () =>
                S(n) && S(s) && !(a.length > 0) && null == t
                    ? null
                    : (0, i.jsxs)("div", {
                          className: p.dD,
                          children: [
                              S(n) ? null : (0, i.jsx)(o.w, { type: "critical", children: n }),
                              S(s) ? null : (0, i.jsx)(o.w, { type: "warning", children: s }),
                              a.map(T),
                              t,
                          ],
                      }),
            [n, s, a, t],
        );
    },
    C = (e) =>
        r.useMemo(
            () =>
                null == e
                    ? null
                    : Array.isArray(e)
                      ? 0 === e.length
                          ? null
                          : (0, i.jsx)(i.Fragment, { children: e.map((e) => T(e)) })
                      : null != e
                        ? T(e)
                        : null,
            [e],
        ),
    R = (e) => {
        let { upperInlineNoticeProps: t, shouldShowGlobalNotices: n } = e,
            s = C(t);
        return r.useMemo(
            () =>
                null != s || n
                    ? n
                        ? null != s
                            ? (0, i.jsx)(N, { children: s })
                            : (0, i.jsx)(N, {})
                        : (0, i.jsx)("div", { className: p.dD, children: s })
                    : null,
            [n, s],
        );
    },
    O = (e) => {
        let {
                upperInlineNoticeProps: t,
                planSelectContent: n,
                purchaseItemContent: r,
                subscriptionDetailsContent: s,
                isStepLoading: o,
                paymentSelectContent: l,
                invoiceSummaryContent: _,
                promotionalNoticeContent: u,
                legalContent: E,
                invoiceTotalDueLabel: A = g.intl.string(f.default.R0cZsM),
                invoiceTotalDueValue: T,
                shouldShowGlobalNotices: S,
                footerInlineNoticeProps: N,
                className: O,
            } = e,
            { enabled: y } = (0, d.c)({ location: "UnifiedReviewStep" }),
            v = C(N);
        return o
            ? (0, i.jsx)(I, { className: O })
            : (0, i.jsxs)(i.Fragment, {
                  children: [
                      (0, i.jsxs)("div", {
                          className: a()(O, { [p.pg]: null == _ }),
                          children: [
                              (0, i.jsx)(R, { upperInlineNoticeProps: t, shouldShowGlobalNotices: S }),
                              n,
                              null != n && null != r && (0, i.jsx)("div", { className: p.ls }),
                              r,
                              null != s && (0, i.jsx)("div", { className: p.P3, children: s }),
                              (0, i.jsxs)("div", {
                                  className: p.Jv,
                                  children: [l, y ? (0, i.jsx)(h.Z4, { className: p.KX }) : null],
                              }),
                              null != _ && (0, i.jsx)("div", { className: p.ZF, children: _ }),
                          ],
                      }),
                      (0, i.jsxs)(c.bx, {
                          children: [
                              null != A && null != T && (0, i.jsx)(m.Qf, { className: p.NR, label: A, value: T }),
                              null != u ? (0, i.jsx)("div", { className: p.uh, children: u }) : null,
                              E,
                              null != v ? (0, i.jsx)("div", { className: p.Uu, children: v }) : null,
                          ],
                      }),
                  ],
              });
    };
