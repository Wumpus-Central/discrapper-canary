n.d(t, { E: () => E, T: () => f });
var l = n(627968),
    a = n(64700),
    i = n(503698),
    r = n.n(i),
    s = n(683071),
    o = n(289873),
    u = n(459357),
    c = n(725836),
    d = n(860724),
    p = n(93159),
    m = n(848584),
    h = n(327105),
    C = n(985018),
    A = n(312867);
let E = (e) => {
        let { className: t } = e;
        return (0, l.jsx)("div", {
            className: r()(A.g4, t),
            children: (0, l.jsx)(o.y, { type: o.y.Type.PULSING_ELLIPSIS, itemClassName: A.Je }),
        });
    },
    y = (e) =>
        null != e && "object" == typeof e && "message" in e && "type" in e
            ? (0, l.jsx)(s.w, { type: e.type, hidden: e.hidden, children: e.message }, e.key)
            : (0, l.jsx)(a.Fragment, { children: e.directContent }, e.key),
    P = (e) => null == e || "" === e,
    S = (e) => {
        let { children: t } = e,
            { errorMessage: n, warningMessage: i, richNotices: r } = (0, d.u)();
        return a.useMemo(
            () =>
                P(n) && P(i) && !(r.length > 0) && null == t
                    ? null
                    : (0, l.jsxs)("div", {
                          className: A.dD,
                          children: [
                              P(n) ? null : (0, l.jsx)(s.w, { type: "critical", children: n }),
                              P(i) ? null : (0, l.jsx)(s.w, { type: "warning", children: i }),
                              r.map(y),
                              t,
                          ],
                      }),
            [n, i, r, t],
        );
    },
    _ = (e) =>
        a.useMemo(
            () =>
                null == e
                    ? null
                    : Array.isArray(e)
                      ? 0 === e.length
                          ? null
                          : (0, l.jsx)(l.Fragment, { children: e.map((e) => y(e)) })
                      : null != e
                        ? y(e)
                        : null,
            [e],
        ),
    T = (e) => {
        let { upperInlineNoticeProps: t, shouldShowGlobalNotices: n } = e,
            i = _(t);
        return a.useMemo(
            () =>
                null != i || n
                    ? n
                        ? null != i
                            ? (0, l.jsx)(S, { children: i })
                            : (0, l.jsx)(S, {})
                        : (0, l.jsx)("div", { className: A.dD, children: i })
                    : null,
            [n, i],
        );
    },
    f = (e) => {
        let {
                upperInlineNoticeProps: t,
                planSelectContent: n,
                purchaseItemContent: a,
                subscriptionDetailsContent: i,
                isStepLoading: s,
                paymentSelectContent: o,
                invoiceSummaryContent: d,
                promotionalNoticeContent: y,
                legalContent: P,
                invoiceTotalDueLabel: S = C.intl.string(h.default.R0cZsM),
                invoiceTotalDueValue: f,
                shouldShowGlobalNotices: N,
                footerInlineNoticeProps: x,
                className: I,
            } = e,
            { enabled: g } = (0, u.c)({ location: "UnifiedReviewStep" }),
            v = _(x);
        return s
            ? (0, l.jsx)(E, { className: I })
            : (0, l.jsxs)(l.Fragment, {
                  children: [
                      (0, l.jsxs)("div", {
                          className: r()(I, { [A.pg]: null == d }),
                          children: [
                              (0, l.jsx)(T, { upperInlineNoticeProps: t, shouldShowGlobalNotices: N }),
                              n,
                              null != n && null != a && (0, l.jsx)("div", { className: A.ls }),
                              a,
                              null != i && (0, l.jsx)("div", { className: A.P3, children: i }),
                              (0, l.jsxs)("div", {
                                  className: A.Jv,
                                  children: [o, g ? (0, l.jsx)(p.Z4, { className: A.KX }) : null],
                              }),
                              null != d && (0, l.jsx)("div", { className: A.ZF, children: d }),
                          ],
                      }),
                      (0, l.jsxs)(c.bx, {
                          children: [
                              null != S && null != f && (0, l.jsx)(m.Qf, { className: A.NR, label: S, value: f }),
                              null != y ? (0, l.jsx)("div", { className: A.uh, children: y }) : null,
                              P,
                              null != v ? (0, l.jsx)("div", { className: A.Uu, children: v }) : null,
                          ],
                      }),
                  ],
              });
    };
