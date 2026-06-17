"use strict";
n.d(t, { E: () => x, T: () => T });
var l = n(627968),
    i = n(64700),
    r = n(503698),
    s = n.n(r),
    a = n(683071),
    o = n(289873),
    u = n(725836);
n(321073);
var c = n(525723),
    d = n(901930),
    m = n(211159),
    h = n(546605),
    p = n(900730),
    f = n(426398),
    g = n(375708),
    E = n(848584),
    A = n(327105),
    C = n(312867);
let x = (e) => {
        let { className: t } = e;
        return (0, l.jsx)("div", {
            className: s()(C.g4, t),
            children: (0, l.jsx)(o.y, { type: o.y.Type.PULSING_ELLIPSIS, itemClassName: C.Je }),
        });
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
                warningMessage: r,
                richNotices: s,
            } = (() => {
                let e,
                    { errorMessage: t } = (0, d.j)({}),
                    n =
                        ((e = (0, m.t4)((e) => e.selectedSkuId)),
                        (0, c.vw)({ skuId: e }) ? g.intl.format(g.t.fsOXXO, {}) : null),
                    r = (function () {
                        let e = (0, h.vg)("StatefulCheckoutStoreRelocationNotice"),
                            t = (0, m.t4)((e) => e.paymentSourceId),
                            n = (0, f.kc)(),
                            {
                                relocationCountry: r,
                                relocationCurrencyCode: s,
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
                                e && null != r
                                    ? {
                                          directContent: (0, l.jsx)(p.c, {
                                              relocationCountry: r,
                                              relocationCurrencyCode: s,
                                              willForfeitGiftCardBalance: a,
                                          }),
                                          key: "store-relocation-notice",
                                      }
                                    : null,
                            [e, r, s, a],
                        );
                    })();
                return {
                    errorMessage: t,
                    warningMessage: n,
                    richNotices: i.useMemo(() => {
                        let e = [];
                        return null != r && e.push(r), e;
                    }, [r]),
                };
            })(),
            o = i.useRef(null);
        return (
            i.useEffect(() => {
                _(n) || null == o.current || o.current.scrollIntoView({ behavior: "smooth" });
            }, [n]),
            i.useMemo(
                () =>
                    _(n) && _(r) && !(s.length > 0) && null == t
                        ? null
                        : (0, l.jsxs)("div", {
                              ref: o,
                              className: C.dD,
                              children: [
                                  _(n) ? null : (0, l.jsx)(a.w, { type: "critical", children: n }),
                                  _(r) ? null : (0, l.jsx)(a.w, { type: "warning", children: r }),
                                  s.map(I),
                                  t,
                              ],
                          }),
                [n, r, s, t],
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
            r = y(t);
        return i.useMemo(
            () =>
                null != r || n
                    ? n
                        ? null != r
                            ? (0, l.jsx)(S, { children: r })
                            : (0, l.jsx)(S, {})
                        : (0, l.jsx)("div", { className: C.dD, children: r })
                    : null,
            [n, r],
        );
    },
    T = (e) => {
        let {
                upperInlineNoticeProps: t,
                planSelectContent: n,
                purchaseItemContent: i,
                subscriptionDetailsContent: r,
                isStepLoading: a,
                paymentMethodContent: o,
                invoiceSummaryContent: c,
                promotionalNoticeContent: d,
                legalContent: m,
                invoiceTotalDueLabel: h = g.intl.string(A.default.R0cZsM),
                invoiceTotalDueValue: p,
                shouldShowGlobalNotices: f,
                footerInlineNoticeProps: I,
                className: _,
            } = e,
            S = y(I);
        return a
            ? (0, l.jsx)(x, { className: _ })
            : (0, l.jsxs)(l.Fragment, {
                  children: [
                      (0, l.jsxs)("div", {
                          className: s()(_, { [C.pg]: null == c }),
                          children: [
                              (0, l.jsx)(v, { upperInlineNoticeProps: t, shouldShowGlobalNotices: f }),
                              n,
                              null != n && null != i && (0, l.jsx)("div", { className: C.ls }),
                              i,
                              null != r && (0, l.jsx)("div", { className: C.P3, children: r }),
                              (0, l.jsx)("div", { className: C.Jv, children: o }),
                              null != c && (0, l.jsx)("div", { className: C.ZF, children: c }),
                          ],
                      }),
                      (0, l.jsxs)(u.bx, {
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
