"use strict";
n.d(t, { Ed: () => I, Pw: () => A, T_: () => R });
var r = n(627968),
    i = n(64700),
    s = n(503698),
    a = n.n(s),
    o = n(158954),
    l = n(397927),
    u = n(459357),
    c = n(166532),
    d = n(866485),
    _ = n(725836),
    f = n(147422),
    p = n(93159),
    h = n(270537),
    m = n(327105),
    E = n(985018),
    g = n(312867);
let A = (0, d.R)({ step: c.pn.REVIEW }),
    I = (e) => {
        let { className: t } = e;
        return (0, r.jsx)("div", {
            className: a()(g.g4, t),
            children: (0, r.jsx)(l.y$y, { type: l.y$y.Type.PULSING_ELLIPSIS, itemClassName: g.Je }),
        });
    },
    T = (e) => null != e && "object" == typeof e && "message" in e && "type" in e,
    S = (e) =>
        T(e)
            ? (0, r.jsx)(o.wx6, { type: e.type, hidden: e.hidden, children: e.message }, e.key)
            : (0, r.jsx)(i.Fragment, { children: e.directContent }, e.key),
    y = (e) => null == e || "" === e,
    v = (e) => {
        let { children: t } = e,
            { errorMessage: n, warningMessage: s, richNotices: a } = (0, f.u)();
        return i.useMemo(
            () =>
                y(n) && y(s) && !(a.length > 0) && null == t
                    ? null
                    : (0, r.jsxs)("div", {
                          className: g.dD,
                          children: [
                              y(n) ? null : (0, r.jsx)(o.wx6, { type: "critical", children: n }),
                              y(s) ? null : (0, r.jsx)(o.wx6, { type: "warning", children: s }),
                              a.map(S),
                              t,
                          ],
                      }),
            [n, s, a, t],
        );
    },
    N = (e) =>
        i.useMemo(
            () =>
                null == e
                    ? null
                    : Array.isArray(e)
                      ? 0 === e.length
                          ? null
                          : (0, r.jsx)(r.Fragment, { children: e.map((e) => S(e)) })
                      : null != e
                        ? S(e)
                        : null,
            [e],
        ),
    C = (e) => {
        let { upperInlineNoticeProps: t, shouldShowGlobalNotices: n } = e,
            s = N(t);
        return i.useMemo(
            () =>
                null != s || n
                    ? n
                        ? null != s
                            ? (0, r.jsx)(v, { children: s })
                            : (0, r.jsx)(v, {})
                        : (0, r.jsx)("div", { className: g.dD, children: s })
                    : null,
            [n, s],
        );
    },
    R = (e) => {
        let {
                upperInlineNoticeProps: t,
                planSelectContent: n,
                purchaseItemContent: i,
                subscriptionDetailsContent: s,
                isStepLoading: o,
                paymentSelectContent: l,
                invoiceSummaryContent: c,
                promotionalNoticeContent: d,
                legalContent: f,
                invoiceTotalDueLabel: A = E.intl.string(m.default.R0cZsM),
                invoiceTotalDueValue: T,
                shouldShowGlobalNotices: S,
                footerInlineNoticeProps: y,
                className: v,
            } = e,
            { enabled: R } = (0, u.c)({ location: "UnifiedReviewStep" }),
            O = N(y);
        return o
            ? (0, r.jsx)(I, { className: v })
            : (0, r.jsxs)(r.Fragment, {
                  children: [
                      (0, r.jsxs)("div", {
                          className: a()(v, { [g.pg]: null == c }),
                          children: [
                              (0, r.jsx)(C, { upperInlineNoticeProps: t, shouldShowGlobalNotices: S }),
                              n,
                              null != n && null != i && (0, r.jsx)("div", { className: g.ls }),
                              i,
                              null != s && (0, r.jsx)("div", { className: g.P3, children: s }),
                              (0, r.jsxs)("div", {
                                  className: g.Jv,
                                  children: [l, R ? (0, r.jsx)(p.Z4, { className: g.KX }) : null],
                              }),
                              null != c && (0, r.jsx)("div", { className: g.ZF, children: c }),
                          ],
                      }),
                      (0, r.jsxs)(_.bx, {
                          children: [
                              null != A && null != T && (0, r.jsx)(h.Qf, { className: g.NR, label: A, value: T }),
                              null != d ? (0, r.jsx)("div", { className: g.uh, children: d }) : null,
                              f,
                              null != O ? (0, r.jsx)("div", { className: g.Uu, children: O }) : null,
                          ],
                      }),
                  ],
              });
    };
