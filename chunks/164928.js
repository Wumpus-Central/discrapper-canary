n.d(t, { E: () => T, T: () => v });
var l = n(627968),
    a = n(64700),
    i = n(503698),
    r = n.n(i),
    s = n(683071),
    o = n(289873),
    u = n(459357),
    c = n(725836);
n(321073);
var d = n(546605),
    p = n(364995),
    m = n(900730),
    h = n(278521),
    C = n(921925),
    A = n(506120),
    E = n(474367),
    y = n(848584),
    P = n(327105),
    S = n(375708),
    _ = n(312867);
let T = (e) => {
        let { className: t } = e;
        return (0, l.jsx)("div", {
            className: r()(_.g4, t),
            children: (0, l.jsx)(o.y, { type: o.y.Type.PULSING_ELLIPSIS, itemClassName: _.Je }),
        });
    },
    f = (e) =>
        null != e && "object" == typeof e && "message" in e && "type" in e
            ? (0, l.jsx)(s.w, { type: e.type, hidden: e.hidden, children: e.message }, e.key)
            : (0, l.jsx)(a.Fragment, { children: e.directContent }, e.key),
    N = (e) => null == e || "" === e,
    x = (e) => {
        let { children: t } = e,
            {
                errorMessage: n,
                warningMessage: i,
                richNotices: r,
            } = (() => {
                let { errorMessage: e } = (0, C.e)({}),
                    t = (0, A.P)(),
                    n = (function () {
                        let e = (0, d.vg)("StatefulCheckoutStoreRelocationNotice"),
                            { paymentSourceId: t } = (0, h.P5)(),
                            { checkoutPaymentSources: n } = (0, p.t)(),
                            {
                                relocationCountry: i,
                                relocationCurrencyCode: r,
                                willForfeitGiftCardBalance: s,
                            } = a.useMemo(() => {
                                let e = null != t ? n.find((e) => e.id === t) : null;
                                return {
                                    relocationCountry: e?.relocationCountry ?? null,
                                    relocationCurrencyCode: e?.relocationCurrencyCode ?? null,
                                    willForfeitGiftCardBalance: e?.willForfeitGiftCardBalance ?? !1,
                                };
                            }, [n, t]);
                        return a.useMemo(
                            () =>
                                e && null != i
                                    ? {
                                          directContent: (0, l.jsx)(m.c, {
                                              relocationCountry: i,
                                              relocationCurrencyCode: r,
                                              willForfeitGiftCardBalance: s,
                                          }),
                                          key: "store-relocation-notice",
                                      }
                                    : null,
                            [e, i, r, s],
                        );
                    })();
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
                N(n) && N(i) && !(r.length > 0) && null == t
                    ? null
                    : (0, l.jsxs)("div", {
                          className: _.dD,
                          children: [
                              N(n) ? null : (0, l.jsx)(s.w, { type: "critical", children: n }),
                              N(i) ? null : (0, l.jsx)(s.w, { type: "warning", children: i }),
                              r.map(f),
                              t,
                          ],
                      }),
            [n, i, r, t],
        );
    },
    I = (e) =>
        a.useMemo(
            () =>
                null == e
                    ? null
                    : Array.isArray(e)
                      ? 0 === e.length
                          ? null
                          : (0, l.jsx)(l.Fragment, { children: e.map((e) => f(e)) })
                      : null != e
                        ? f(e)
                        : null,
            [e],
        ),
    g = (e) => {
        let { upperInlineNoticeProps: t, shouldShowGlobalNotices: n } = e,
            i = I(t);
        return a.useMemo(
            () =>
                null != i || n
                    ? n
                        ? null != i
                            ? (0, l.jsx)(x, { children: i })
                            : (0, l.jsx)(x, {})
                        : (0, l.jsx)("div", { className: _.dD, children: i })
                    : null,
            [n, i],
        );
    },
    v = (e) => {
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
                invoiceTotalDueLabel: h = S.intl.string(P.default.R0cZsM),
                invoiceTotalDueValue: C,
                shouldShowGlobalNotices: A,
                footerInlineNoticeProps: f,
                className: N,
            } = e,
            { enabled: x } = (0, u.c)({ location: "UnifiedReviewStep" }),
            v = I(f);
        return s
            ? (0, l.jsx)(T, { className: N })
            : (0, l.jsxs)(l.Fragment, {
                  children: [
                      (0, l.jsxs)("div", {
                          className: r()(N, { [_.pg]: null == d }),
                          children: [
                              (0, l.jsx)(g, { upperInlineNoticeProps: t, shouldShowGlobalNotices: A }),
                              n,
                              null != n && null != a && (0, l.jsx)("div", { className: _.ls }),
                              a,
                              null != i && (0, l.jsx)("div", { className: _.P3, children: i }),
                              (0, l.jsxs)("div", {
                                  className: _.Jv,
                                  children: [o, x ? (0, l.jsx)(E.Z4, { className: _.KX }) : null],
                              }),
                              null != d && (0, l.jsx)("div", { className: _.ZF, children: d }),
                          ],
                      }),
                      (0, l.jsxs)(c.bx, {
                          children: [
                              null != h && null != C && (0, l.jsx)(y.Qf, { className: _.NR, label: h, value: C }),
                              null != p ? (0, l.jsx)("div", { className: _.uh, children: p }) : null,
                              m,
                              null != v ? (0, l.jsx)("div", { className: _.Uu, children: v }) : null,
                          ],
                      }),
                  ],
              });
    };
