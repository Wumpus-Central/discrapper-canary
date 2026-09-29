n.d(t, { T_: () => P, Ed: () => y });
var r = n(477900),
    l = n(582128),
    o = n(503698),
    i = n.n(o),
    a = n(683071),
    s = n(725836);
n(321073);
var u = n(901930),
    c = n(900730),
    d = n(263532),
    h = n(580133),
    C = n(169797),
    p = n(270537);
n(652215);
var m = n(649975),
    E = n(375708),
    A = n(66414);
function y(e) {
    let { className: t, shouldShowUnifiedHeader: n, headerBadgeConfig: l } = e;
    return (0, r.jsxs)(r.Fragment, {
        children: [
            n ? (0, r.jsx)(s.UY, { children: (0, r.jsx)(h.f, { headerBadgeConfig: l }) }) : null,
            (0, r.jsx)(C.DJ, { className: i()(A.g4, t) }),
        ],
    });
}
function f(e) {
    return null != e && "object" == typeof e && "message" in e && "type" in e
        ? (0, r.jsx)(a.w, { type: e.type, hidden: e.hidden, children: e.message }, e.key)
        : (0, r.jsx)(l.Fragment, { children: e.directContent }, e.key);
}
function S(e) {
    return null == e || "" === e;
}
function _(e) {
    let { children: t, showUpperNoticesAboveGlobalNotices: n = !1 } = e,
        { errorMessage: o, richNotices: i } = (function () {
            let { errorMessage: e } = (0, u.j)({}),
                t = (function () {
                    let { paymentSourceId: e, checkoutPaymentSources: t } = (0, d.t4)((e) => ({
                            paymentSourceId: e.paymentSourceId,
                            checkoutPaymentSources: e.get("checkoutPaymentSources"),
                        })),
                        {
                            relocationCountry: n,
                            relocationCurrencyCode: o,
                            willForfeitGiftCardBalance: i,
                        } = l.useMemo(() => {
                            let n = null != e ? t.find((t) => t.id === e) : null;
                            return {
                                relocationCountry: n?.relocationCountry ?? null,
                                relocationCurrencyCode: n?.relocationCurrencyCode ?? null,
                                willForfeitGiftCardBalance: n?.willForfeitGiftCardBalance ?? !1,
                            };
                        }, [t, e]);
                    return l.useMemo(
                        () =>
                            null == n
                                ? null
                                : {
                                      directContent: (0, r.jsx)(c.c, {
                                          relocationCountry: n,
                                          relocationCurrencyCode: o,
                                          willForfeitGiftCardBalance: i,
                                      }),
                                      key: "store-relocation-notice",
                                  },
                        [n, o, i],
                    );
                })();
            return {
                errorMessage: e,
                richNotices: l.useMemo(() => {
                    let e = [];
                    return (null != t && e.push(t), e);
                }, [t]),
            };
        })(),
        s = l.useRef(null);
    return (
        l.useEffect(() => {
            S(o) || null == s.current || s.current.scrollIntoView({ behavior: "smooth" });
        }, [o]),
        l.useMemo(() => {
            if (!(!S(o) || i.length > 0 || null != t)) return null;
            let e = (0, r.jsxs)(r.Fragment, {
                children: [S(o) ? null : (0, r.jsx)(a.w, { type: "critical", children: o }), i.map(f)],
            });
            return (0, r.jsx)("div", {
                ref: s,
                className: A.dD,
                children: n
                    ? (0, r.jsxs)(r.Fragment, { children: [t, e] })
                    : (0, r.jsxs)(r.Fragment, { children: [e, t] }),
            });
        }, [o, i, t, n])
    );
}
function g(e) {
    return l.useMemo(
        () =>
            null == e
                ? null
                : Array.isArray(e)
                  ? 0 === e.length
                      ? null
                      : (0, r.jsx)(r.Fragment, { children: e.map((e) => f(e)) })
                  : null != e
                    ? f(e)
                    : null,
        [e],
    );
}
function T(e) {
    let { upperInlineNoticeProps: t, shouldShowGlobalNotices: n, showUpperNoticesAboveGlobalNotices: o } = e,
        i = g(t);
    return l.useMemo(
        () =>
            null != i || n
                ? n
                    ? null != i
                        ? (0, r.jsx)(_, { showUpperNoticesAboveGlobalNotices: o, children: i })
                        : (0, r.jsx)(_, {})
                    : (0, r.jsx)("div", { className: A.dD, children: i })
                : null,
        [n, i, o],
    );
}
function P(e) {
    let {
            upperInlineNoticeProps: t,
            planSelectContent: n,
            purchaseItemContent: l,
            subscriptionDetailsContent: o,
            isStepLoading: a,
            paymentMethodContent: u,
            invoiceSummaryContent: c,
            promotionalNoticeContent: d,
            legalContent: C,
            invoiceTotalDueLabel: f = E.intl.string(m.default.R0cZsM),
            invoiceTotalDueValue: S,
            shouldShowGlobalNotices: _,
            showUpperNoticesAboveGlobalNotices: P,
            footerInlineNoticeProps: I,
            headerBadgeConfig: N,
            className: x,
        } = e,
        v = g(I),
        { setCheckoutFooterLineItemNode: O } = (0, s.ck)();
    return a
        ? (0, r.jsx)(y, { className: x, shouldShowUnifiedHeader: !0 })
        : (0, r.jsxs)(r.Fragment, {
              children: [
                  (0, r.jsxs)("div", {
                      className: i()(x, { [A.pg]: null == c }),
                      children: [
                          (0, r.jsx)(T, {
                              upperInlineNoticeProps: t,
                              shouldShowGlobalNotices: _,
                              showUpperNoticesAboveGlobalNotices: P,
                          }),
                          n,
                          null != n && null != l && (0, r.jsx)("div", { className: A.ls }),
                          l,
                          null != o && (0, r.jsx)("div", { className: A.P3, children: o }),
                          (0, r.jsx)("div", { className: A.Jv, children: u }),
                          null != c && (0, r.jsx)("div", { className: A.ZF, children: c }),
                      ],
                  }),
                  (0, r.jsx)(s.UY, { children: (0, r.jsx)(h.f, { headerBadgeConfig: N }) }),
                  (0, r.jsxs)(s.bx, {
                      children: [
                          (0, r.jsx)("div", { ref: O }),
                          null != f && null != S && (0, r.jsx)(p.Qf, { className: A.NR, label: f, value: S }),
                          null != d ? (0, r.jsx)("div", { className: A.uh, children: d }) : null,
                          C,
                          null != v ? (0, r.jsx)("div", { className: A.Uu, children: v }) : null,
                      ],
                  }),
              ],
          });
}
