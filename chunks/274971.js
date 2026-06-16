"use strict";
n.d(t, { E: () => I, T: () => v });
var i = n(627968),
    r = n(64700),
    s = n(503698),
    a = n.n(s),
    o = n(683071),
    l = n(289873),
    u = n(725836);
n(321073);
var c = n(546605),
    d = n(426398),
    _ = n(900730),
    h = n(211159);
n(209143);
var f = n(921925),
    p = n(525723);
n(661531), n(897831);
var E = n(375708),
    m = n(848584),
    g = n(327105),
    A = n(312867);
let I = (e) => {
        let { className: t } = e;
        return (0, i.jsx)("div", {
            className: a()(A.g4, t),
            children: (0, i.jsx)(l.y, { type: l.y.Type.PULSING_ELLIPSIS, itemClassName: A.Je }),
        });
    },
    T = (e) =>
        null != e && "object" == typeof e && "message" in e && "type" in e
            ? (0, i.jsx)(o.w, { type: e.type, hidden: e.hidden, children: e.message }, e.key)
            : (0, i.jsx)(r.Fragment, { children: e.directContent }, e.key),
    S = (e) => null == e || "" === e,
    y = (e) => {
        let { children: t } = e,
            {
                errorMessage: n,
                warningMessage: s,
                richNotices: a,
            } = (() => {
                let e,
                    { errorMessage: t } = (0, f.e)({}),
                    n =
                        ((e = (0, h.t4)((e) => e.selectedSkuId)),
                        (0, p.vw)({ skuId: e }) ? E.intl.format(E.t.fsOXXO, {}) : null),
                    s = (function () {
                        let e = (0, c.vg)("StatefulCheckoutStoreRelocationNotice"),
                            t = (0, h.t4)((e) => e.paymentSourceId),
                            n = (0, d.kc)(),
                            {
                                relocationCountry: s,
                                relocationCurrencyCode: a,
                                willForfeitGiftCardBalance: o,
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
                                e && null != s
                                    ? {
                                          directContent: (0, i.jsx)(_.c, {
                                              relocationCountry: s,
                                              relocationCurrencyCode: a,
                                              willForfeitGiftCardBalance: o,
                                          }),
                                          key: "store-relocation-notice",
                                      }
                                    : null,
                            [e, s, a, o],
                        );
                    })();
                return {
                    errorMessage: t,
                    warningMessage: n,
                    richNotices: r.useMemo(() => {
                        let e = [];
                        return null != s && e.push(s), e;
                    }, [s]),
                };
            })(),
            l = r.useRef(null);
        return (
            r.useEffect(() => {
                S(n) || null == l.current || l.current.scrollIntoView({ behavior: "smooth" });
            }, [n]),
            r.useMemo(
                () =>
                    S(n) && S(s) && !(a.length > 0) && null == t
                        ? null
                        : (0, i.jsxs)("div", {
                              ref: l,
                              className: A.dD,
                              children: [
                                  S(n) ? null : (0, i.jsx)(o.w, { type: "critical", children: n }),
                                  S(s) ? null : (0, i.jsx)(o.w, { type: "warning", children: s }),
                                  a.map(T),
                                  t,
                              ],
                          }),
                [n, s, a, t],
            )
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
    N = (e) => {
        let { upperInlineNoticeProps: t, shouldShowGlobalNotices: n } = e,
            s = C(t);
        return r.useMemo(
            () =>
                null != s || n
                    ? n
                        ? null != s
                            ? (0, i.jsx)(y, { children: s })
                            : (0, i.jsx)(y, {})
                        : (0, i.jsx)("div", { className: A.dD, children: s })
                    : null,
            [n, s],
        );
    },
    v = (e) => {
        let {
                upperInlineNoticeProps: t,
                planSelectContent: n,
                purchaseItemContent: r,
                subscriptionDetailsContent: s,
                isStepLoading: o,
                paymentMethodContent: l,
                invoiceSummaryContent: c,
                promotionalNoticeContent: d,
                legalContent: _,
                invoiceTotalDueLabel: h = E.intl.string(g.default.R0cZsM),
                invoiceTotalDueValue: f,
                shouldShowGlobalNotices: p,
                footerInlineNoticeProps: T,
                className: S,
            } = e,
            y = C(T);
        return o
            ? (0, i.jsx)(I, { className: S })
            : (0, i.jsxs)(i.Fragment, {
                  children: [
                      (0, i.jsxs)("div", {
                          className: a()(S, { [A.pg]: null == c }),
                          children: [
                              (0, i.jsx)(N, { upperInlineNoticeProps: t, shouldShowGlobalNotices: p }),
                              n,
                              null != n && null != r && (0, i.jsx)("div", { className: A.ls }),
                              r,
                              null != s && (0, i.jsx)("div", { className: A.P3, children: s }),
                              (0, i.jsx)("div", { className: A.Jv, children: l }),
                              null != c && (0, i.jsx)("div", { className: A.ZF, children: c }),
                          ],
                      }),
                      (0, i.jsxs)(u.bx, {
                          children: [
                              null != h && null != f && (0, i.jsx)(m.Qf, { className: A.NR, label: h, value: f }),
                              null != d ? (0, i.jsx)("div", { className: A.uh, children: d }) : null,
                              _,
                              null != y ? (0, i.jsx)("div", { className: A.Uu, children: y }) : null,
                          ],
                      }),
                  ],
              });
    };
