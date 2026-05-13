n.d(t, { E: () => P, T: () => N });
var l = n(627968),
    a = n(64700),
    i = n(503698),
    r = n.n(i),
    s = n(683071),
    o = n(289873),
    u = n(459357),
    c = n(725836);
n(321073);
var d = n(349786),
    p = n(921925),
    m = n(506120),
    h = n(474367),
    C = n(848584),
    A = n(327105),
    E = n(375708),
    y = n(312867);
let P = (e) => {
        let { className: t } = e;
        return (0, l.jsx)("div", {
            className: r()(y.g4, t),
            children: (0, l.jsx)(o.y, { type: o.y.Type.PULSING_ELLIPSIS, itemClassName: y.Je }),
        });
    },
    S = (e) =>
        null != e && "object" == typeof e && "message" in e && "type" in e
            ? (0, l.jsx)(s.w, { type: e.type, hidden: e.hidden, children: e.message }, e.key)
            : (0, l.jsx)(a.Fragment, { children: e.directContent }, e.key),
    _ = (e) => null == e || "" === e,
    f = (e) => {
        let { children: t } = e,
            {
                errorMessage: n,
                warningMessage: i,
                richNotices: r,
            } = (() => {
                let { errorMessage: e } = (0, p.e)({}),
                    t = (0, m.P)(),
                    n = (0, d.f)();
                return {
                    errorMessage: e,
                    warningMessage: t,
                    richNotices: a.useMemo(() => {
                        let e = [];
                        return null != n && e.push(n), e;
                    }, [n]),
                };
            })();
        return a.useMemo(
            () =>
                _(n) && _(i) && !(r.length > 0) && null == t
                    ? null
                    : (0, l.jsxs)("div", {
                          className: y.dD,
                          children: [
                              _(n) ? null : (0, l.jsx)(s.w, { type: "critical", children: n }),
                              _(i) ? null : (0, l.jsx)(s.w, { type: "warning", children: i }),
                              r.map(S),
                              t,
                          ],
                      }),
            [n, i, r, t],
        );
    },
    T = (e) =>
        a.useMemo(
            () =>
                null == e
                    ? null
                    : Array.isArray(e)
                      ? 0 === e.length
                          ? null
                          : (0, l.jsx)(l.Fragment, { children: e.map((e) => S(e)) })
                      : null != e
                        ? S(e)
                        : null,
            [e],
        ),
    x = (e) => {
        let { upperInlineNoticeProps: t, shouldShowGlobalNotices: n } = e,
            i = T(t);
        return a.useMemo(
            () =>
                null != i || n
                    ? n
                        ? null != i
                            ? (0, l.jsx)(f, { children: i })
                            : (0, l.jsx)(f, {})
                        : (0, l.jsx)("div", { className: y.dD, children: i })
                    : null,
            [n, i],
        );
    },
    N = (e) => {
        let {
                upperInlineNoticeProps: t,
                planSelectContent: n,
                purchaseItemContent: a,
                subscriptionDetailsContent: i,
                isStepLoading: s,
                paymentSelectContent: o,
                invoiceSummaryContent: d,
                promotionalNoticeContent: p,
                legalContent: m,
                invoiceTotalDueLabel: S = E.intl.string(A.default.R0cZsM),
                invoiceTotalDueValue: _,
                shouldShowGlobalNotices: f,
                footerInlineNoticeProps: N,
                className: I,
            } = e,
            { enabled: g } = (0, u.c)({ location: "UnifiedReviewStep" }),
            v = T(N);
        return s
            ? (0, l.jsx)(P, { className: I })
            : (0, l.jsxs)(l.Fragment, {
                  children: [
                      (0, l.jsxs)("div", {
                          className: r()(I, { [y.pg]: null == d }),
                          children: [
                              (0, l.jsx)(x, { upperInlineNoticeProps: t, shouldShowGlobalNotices: f }),
                              n,
                              null != n && null != a && (0, l.jsx)("div", { className: y.ls }),
                              a,
                              null != i && (0, l.jsx)("div", { className: y.P3, children: i }),
                              (0, l.jsxs)("div", {
                                  className: y.Jv,
                                  children: [o, g ? (0, l.jsx)(h.Z4, { className: y.KX }) : null],
                              }),
                              null != d && (0, l.jsx)("div", { className: y.ZF, children: d }),
                          ],
                      }),
                      (0, l.jsxs)(c.bx, {
                          children: [
                              null != S && null != _ && (0, l.jsx)(C.Qf, { className: y.NR, label: S, value: _ }),
                              null != p ? (0, l.jsx)("div", { className: y.uh, children: p }) : null,
                              m,
                              null != v ? (0, l.jsx)("div", { className: y.Uu, children: v }) : null,
                          ],
                      }),
                  ],
              });
    };
