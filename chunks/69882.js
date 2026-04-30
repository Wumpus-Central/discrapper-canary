n.d(t, { E: () => E, T: () => f });
var l = n(627968),
    a = n(64700),
    i = n(503698),
    s = n.n(i),
    r = n(683071),
    o = n(289873),
    u = n(459357),
    c = n(725836),
    d = n(860724),
    p = n(93159),
    m = n(848584),
    h = n(327105),
    A = n(985018),
    C = n(312867);
let E = (e) => {
        let { className: t } = e;
        return (0, l.jsx)("div", {
            className: s()(C.g4, t),
            children: (0, l.jsx)(o.y, { type: o.y.Type.PULSING_ELLIPSIS, itemClassName: C.Je }),
        });
    },
    y = (e) =>
        null != e && "object" == typeof e && "message" in e && "type" in e
            ? (0, l.jsx)(r.w, { type: e.type, hidden: e.hidden, children: e.message }, e.key)
            : (0, l.jsx)(a.Fragment, { children: e.directContent }, e.key),
    P = (e) => null == e || "" === e,
    S = (e) => {
        let { children: t } = e,
            { errorMessage: n, warningMessage: i, richNotices: s } = (0, d.u)();
        return a.useMemo(
            () =>
                P(n) && P(i) && !(s.length > 0) && null == t
                    ? null
                    : (0, l.jsxs)("div", {
                          className: C.dD,
                          children: [
                              P(n) ? null : (0, l.jsx)(r.w, { type: "critical", children: n }),
                              P(i) ? null : (0, l.jsx)(r.w, { type: "warning", children: i }),
                              s.map(y),
                              t,
                          ],
                      }),
            [n, i, s, t],
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
                        : (0, l.jsx)("div", { className: C.dD, children: i })
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
                isStepLoading: r,
                paymentSelectContent: o,
                invoiceSummaryContent: d,
                promotionalNoticeContent: y,
                legalContent: P,
                invoiceTotalDueLabel: S = A.intl.string(h.default.R0cZsM),
                invoiceTotalDueValue: f,
                shouldShowGlobalNotices: N,
                footerInlineNoticeProps: x,
                className: I,
            } = e,
            { enabled: g } = (0, u.c)({ location: "UnifiedReviewStep" }),
            v = _(x);
        return r
            ? (0, l.jsx)(E, { className: I })
            : (0, l.jsxs)(l.Fragment, {
                  children: [
                      (0, l.jsxs)("div", {
                          className: s()(I, { [C.pg]: null == d }),
                          children: [
                              (0, l.jsx)(T, { upperInlineNoticeProps: t, shouldShowGlobalNotices: N }),
                              n,
                              null != n && null != a && (0, l.jsx)("div", { className: C.ls }),
                              a,
                              null != i && (0, l.jsx)("div", { className: C.P3, children: i }),
                              (0, l.jsxs)("div", {
                                  className: C.Jv,
                                  children: [o, g ? (0, l.jsx)(p.Z4, { className: C.KX }) : null],
                              }),
                              null != d && (0, l.jsx)("div", { className: C.ZF, children: d }),
                          ],
                      }),
                      (0, l.jsxs)(c.bx, {
                          children: [
                              null != S && null != f && (0, l.jsx)(m.Qf, { className: C.NR, label: S, value: f }),
                              null != y ? (0, l.jsx)("div", { className: C.uh, children: y }) : null,
                              P,
                              null != v ? (0, l.jsx)("div", { className: C.Uu, children: v }) : null,
                          ],
                      }),
                  ],
              });
    };
