"use strict";
n.d(t, { E: () => x, T: () => T });
var l = n(627968),
    i = n(64700),
    s = n(503698),
    r = n.n(s),
    a = n(683071),
    o = n(725836);
n(321073);
var u = n(525723),
    c = n(901930),
    d = n(211159),
    m = n(546605),
    h = n(900730),
    p = n(426398),
    f = n(375708),
    g = n(480642),
    E = n(848584),
    A = n(327105),
    C = n(312867);
let x = (e) => {
        let { className: t } = e;
        return (0, l.jsx)(g.DJ, { className: r()(C.g4, t) });
    },
    I = (e) =>
        null != e && "object" == typeof e && "message" in e && "type" in e
            ? (0, l.jsx)(a.w, { type: e.type, hidden: e.hidden, children: e.message }, e.key)
            : (0, l.jsx)(i.Fragment, { children: e.directContent }, e.key),
    _ = (e) => null == e || "" === e,
    S = (e) => {
        let { children: t } = e,
            {
                errorMessage: n,
                warningMessage: s,
                richNotices: r,
            } = (() => {
                let e,
                    { errorMessage: t } = (0, c.j)({}),
                    n =
                        ((e = (0, d.t4)((e) => e.selectedSkuId)),
                        (0, u.vw)({ skuId: e }) ? f.intl.format(f.t.fsOXXO, {}) : null),
                    s = (function () {
                        let e = (0, m.vg)("StatefulCheckoutStoreRelocationNotice"),
                            t = (0, d.t4)((e) => e.paymentSourceId),
                            n = (0, p.kc)(),
                            {
                                relocationCountry: s,
                                relocationCurrencyCode: r,
                                willForfeitGiftCardBalance: a,
                            } = i.useMemo(() => {
                                let e = null != t ? n.find((e) => e.id === t) : null;
                                return {
                                    relocationCountry: e?.relocationCountry ?? null,
                                    relocationCurrencyCode: e?.relocationCurrencyCode ?? null,
                                    willForfeitGiftCardBalance: e?.willForfeitGiftCardBalance ?? !1,
                                };
                            }, [n, t]);
                        return i.useMemo(
                            () =>
                                e && null != s
                                    ? {
                                          directContent: (0, l.jsx)(h.c, {
                                              relocationCountry: s,
                                              relocationCurrencyCode: r,
                                              willForfeitGiftCardBalance: a,
                                          }),
                                          key: "store-relocation-notice",
                                      }
                                    : null,
                            [e, s, r, a],
                        );
                    })();
                return {
                    errorMessage: t,
                    warningMessage: n,
                    richNotices: i.useMemo(() => {
                        let e = [];
                        return null != s && e.push(s), e;
                    }, [s]),
                };
            })(),
            o = i.useRef(null);
        return (
            i.useEffect(() => {
                _(n) || null == o.current || o.current.scrollIntoView({ behavior: "smooth" });
            }, [n]),
            i.useMemo(
                () =>
                    _(n) && _(s) && !(r.length > 0) && null == t
                        ? null
                        : (0, l.jsxs)("div", {
                              ref: o,
                              className: C.dD,
                              children: [
                                  _(n) ? null : (0, l.jsx)(a.w, { type: "critical", children: n }),
                                  _(s) ? null : (0, l.jsx)(a.w, { type: "warning", children: s }),
                                  r.map(I),
                                  t,
                              ],
                          }),
                [n, s, r, t],
            )
        );
    },
    y = (e) =>
        i.useMemo(
            () =>
                null == e
                    ? null
                    : Array.isArray(e)
                      ? 0 === e.length
                          ? null
                          : (0, l.jsx)(l.Fragment, { children: e.map((e) => I(e)) })
                      : null != e
                        ? I(e)
                        : null,
            [e],
        ),
    v = (e) => {
        let { upperInlineNoticeProps: t, shouldShowGlobalNotices: n } = e,
            s = y(t);
        return i.useMemo(
            () =>
                null != s || n
                    ? n
                        ? null != s
                            ? (0, l.jsx)(S, { children: s })
                            : (0, l.jsx)(S, {})
                        : (0, l.jsx)("div", { className: C.dD, children: s })
                    : null,
            [n, s],
        );
    },
    T = (e) => {
        let {
                upperInlineNoticeProps: t,
                planSelectContent: n,
                purchaseItemContent: i,
                subscriptionDetailsContent: s,
                isStepLoading: a,
                paymentMethodContent: u,
                invoiceSummaryContent: c,
                promotionalNoticeContent: d,
                legalContent: m,
                invoiceTotalDueLabel: h = f.intl.string(A.default.R0cZsM),
                invoiceTotalDueValue: p,
                shouldShowGlobalNotices: g,
                footerInlineNoticeProps: I,
                className: _,
            } = e,
            S = y(I);
        return a
            ? (0, l.jsx)(x, { className: _ })
            : (0, l.jsxs)(l.Fragment, {
                  children: [
                      (0, l.jsxs)("div", {
                          className: r()(_, { [C.pg]: null == c }),
                          children: [
                              (0, l.jsx)(v, { upperInlineNoticeProps: t, shouldShowGlobalNotices: g }),
                              n,
                              null != n && null != i && (0, l.jsx)("div", { className: C.ls }),
                              i,
                              null != s && (0, l.jsx)("div", { className: C.P3, children: s }),
                              (0, l.jsx)("div", { className: C.Jv, children: u }),
                              null != c && (0, l.jsx)("div", { className: C.ZF, children: c }),
                          ],
                      }),
                      (0, l.jsxs)(o.bx, {
                          children: [
                              null != h && null != p && (0, l.jsx)(E.Qf, { className: C.NR, label: h, value: p }),
                              null != d ? (0, l.jsx)("div", { className: C.uh, children: d }) : null,
                              m,
                              null != S ? (0, l.jsx)("div", { className: C.Uu, children: S }) : null,
                          ],
                      }),
                  ],
              });
    };
