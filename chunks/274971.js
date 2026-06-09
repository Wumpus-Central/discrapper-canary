n.d(t, { E: () => P, T: () => v });
var l = n(627968),
    r = n(64700),
    a = n(503698),
    i = n.n(a),
    s = n(683071),
    o = n(289873),
    u = n(725836);
n(321073);
var c = n(546605),
    d = n(426398),
    p = n(900730),
    m = n(211159);
n(209143);
var A = n(921925),
    h = n(525723);
n(661531), n(897831);
var E = n(375708),
    C = n(848584),
    y = n(327105),
    _ = n(312867);
let P = (e) => {
        let { className: t } = e;
        return (0, l.jsx)("div", {
            className: i()(_.g4, t),
            children: (0, l.jsx)(o.y, { type: o.y.Type.PULSING_ELLIPSIS, itemClassName: _.Je }),
        });
    },
    S = (e) =>
        null != e && "object" == typeof e && "message" in e && "type" in e
            ? (0, l.jsx)(s.w, { type: e.type, hidden: e.hidden, children: e.message }, e.key)
            : (0, l.jsx)(r.Fragment, { children: e.directContent }, e.key),
    I = (e) => null == e || "" === e,
    T = (e) => {
        let { children: t } = e,
            {
                errorMessage: n,
                warningMessage: a,
                richNotices: i,
            } = (() => {
                let e,
                    { errorMessage: t } = (0, A.e)({}),
                    n =
                        ((e = (0, m.t4)((e) => e.selectedSkuId)),
                        (0, h.vw)({ skuId: e }) ? E.intl.format(E.t.fsOXXO, {}) : null),
                    a = (function () {
                        let e = (0, c.vg)("StatefulCheckoutStoreRelocationNotice"),
                            t = (0, m.t4)((e) => e.paymentSourceId),
                            n = (0, d.kc)(),
                            {
                                relocationCountry: a,
                                relocationCurrencyCode: i,
                                willForfeitGiftCardBalance: s,
                            } = r.useMemo(() => {
                                let e = null != t ? n.find((e) => e.id === t) : null;
                                return {
                                    relocationCountry: e?.relocationCountry ?? null,
                                    relocationCurrencyCode: e?.relocationCurrencyCode ?? null,
                                    willForfeitGiftCardBalance: e?.willForfeitGiftCardBalance ?? !1,
                                };
                            }, [n, t]);
                        return r.useMemo(
                            () =>
                                e && null != a
                                    ? {
                                          directContent: (0, l.jsx)(p.c, {
                                              relocationCountry: a,
                                              relocationCurrencyCode: i,
                                              willForfeitGiftCardBalance: s,
                                          }),
                                          key: "store-relocation-notice",
                                      }
                                    : null,
                            [e, a, i, s],
                        );
                    })();
                return {
                    errorMessage: t,
                    warningMessage: n,
                    richNotices: r.useMemo(() => {
                        let e = [];
                        return null != a && e.push(a), e;
                    }, [a]),
                };
            })(),
            o = r.useRef(null);
        return (
            r.useEffect(() => {
                I(n) || null == o.current || o.current.scrollIntoView({ behavior: "smooth" });
            }, [n]),
            r.useMemo(
                () =>
                    I(n) && I(a) && !(i.length > 0) && null == t
                        ? null
                        : (0, l.jsxs)("div", {
                              ref: o,
                              className: _.dD,
                              children: [
                                  I(n) ? null : (0, l.jsx)(s.w, { type: "critical", children: n }),
                                  I(a) ? null : (0, l.jsx)(s.w, { type: "warning", children: a }),
                                  i.map(S),
                                  t,
                              ],
                          }),
                [n, a, i, t],
            )
        );
    },
    f = (e) =>
        r.useMemo(
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
    N = (e) => {
        let { upperInlineNoticeProps: t, shouldShowGlobalNotices: n } = e,
            a = f(t);
        return r.useMemo(
            () =>
                null != a || n
                    ? n
                        ? null != a
                            ? (0, l.jsx)(T, { children: a })
                            : (0, l.jsx)(T, {})
                        : (0, l.jsx)("div", { className: _.dD, children: a })
                    : null,
            [n, a],
        );
    },
    v = (e) => {
        let {
                upperInlineNoticeProps: t,
                planSelectContent: n,
                purchaseItemContent: r,
                subscriptionDetailsContent: a,
                isStepLoading: s,
                paymentMethodContent: o,
                invoiceSummaryContent: c,
                promotionalNoticeContent: d,
                legalContent: p,
                invoiceTotalDueLabel: m = E.intl.string(y.default.R0cZsM),
                invoiceTotalDueValue: A,
                shouldShowGlobalNotices: h,
                footerInlineNoticeProps: S,
                className: I,
            } = e,
            T = f(S);
        return s
            ? (0, l.jsx)(P, { className: I })
            : (0, l.jsxs)(l.Fragment, {
                  children: [
                      (0, l.jsxs)("div", {
                          className: i()(I, { [_.pg]: null == c }),
                          children: [
                              (0, l.jsx)(N, { upperInlineNoticeProps: t, shouldShowGlobalNotices: h }),
                              n,
                              null != n && null != r && (0, l.jsx)("div", { className: _.ls }),
                              r,
                              null != a && (0, l.jsx)("div", { className: _.P3, children: a }),
                              (0, l.jsx)("div", { className: _.Jv, children: o }),
                              null != c && (0, l.jsx)("div", { className: _.ZF, children: c }),
                          ],
                      }),
                      (0, l.jsxs)(u.bx, {
                          children: [
                              null != m && null != A && (0, l.jsx)(C.Qf, { className: _.NR, label: m, value: A }),
                              null != d ? (0, l.jsx)("div", { className: _.uh, children: d }) : null,
                              p,
                              null != T ? (0, l.jsx)("div", { className: _.Uu, children: T }) : null,
                          ],
                      }),
                  ],
              });
    };
