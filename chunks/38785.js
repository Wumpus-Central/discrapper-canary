n.d(t, { T_: () => I, Ed: () => f });
var r = n(477900),
    l = n(582128),
    i = n(503698),
    o = n.n(i),
    a = n(683071),
    s = n(725836);
n(321073);
var u = n(901930),
    c = n(900730),
    d = n(263532),
    h = n(580133),
    p = n(169797),
    C = n(270537);
n(652215);
var m = n(583741),
    E = n(375708),
    A = n(66414);
function f(e) {
    let { className: t, shouldShowUnifiedHeader: n, headerBadgeConfig: l } = e;
    return (0, r.jsxs)(r.Fragment, {
        children: [
            n ? (0, r.jsx)(s.UY, { children: (0, r.jsx)(h.f, { headerBadgeConfig: l }) }) : null,
            (0, r.jsx)(p.DJ, { className: o()(A.g4, t) }),
        ],
    });
}
function y(e) {
    return null != e && "object" == typeof e && "message" in e && "type" in e
        ? (0, r.jsx)(a.w, { type: e.type, hidden: e.hidden, children: e.message }, e.key)
        : (0, r.jsx)(l.Fragment, { children: e.directContent }, e.key);
}
function g(e) {
    return null == e || "" === e;
}
function S(e) {
    let { children: t, showUpperNoticesAboveGlobalNotices: n = !1 } = e,
        { errorMessage: i, richNotices: o } = (function () {
            let { errorMessage: e } = (0, u.j)({}),
                t = (function () {
                    let { paymentSourceId: e, checkoutPaymentSources: t } = (0, d.t4)((e) => ({
                            paymentSourceId: e.paymentSourceId,
                            checkoutPaymentSources: e.get("checkoutPaymentSources"),
                        })),
                        {
                            relocationCountry: n,
                            relocationCurrencyCode: i,
                            willForfeitGiftCardBalance: o,
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
                                          relocationCurrencyCode: i,
                                          willForfeitGiftCardBalance: o,
                                      }),
                                      key: "store-relocation-notice",
                                  },
                        [n, i, o],
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
            g(i) || null == s.current || s.current.scrollIntoView({ behavior: "smooth" });
        }, [i]),
        l.useMemo(() => {
            if (!(!g(i) || o.length > 0 || null != t)) return null;
            let e = (0, r.jsxs)(r.Fragment, {
                children: [g(i) ? null : (0, r.jsx)(a.w, { type: "critical", children: i }), o.map(y)],
            });
            return (0, r.jsx)("div", {
                ref: s,
                className: A.dD,
                children: n
                    ? (0, r.jsxs)(r.Fragment, { children: [t, e] })
                    : (0, r.jsxs)(r.Fragment, { children: [e, t] }),
            });
        }, [i, o, t, n])
    );
}
function _(e) {
    return l.useMemo(
        () =>
            null == e
                ? null
                : Array.isArray(e)
                  ? 0 === e.length
                      ? null
                      : (0, r.jsx)(r.Fragment, { children: e.map((e) => y(e)) })
                  : null != e
                    ? y(e)
                    : null,
        [e],
    );
}
function P(e) {
    let { upperInlineNoticeProps: t, shouldShowGlobalNotices: n, showUpperNoticesAboveGlobalNotices: i } = e,
        o = _(t);
    return l.useMemo(
        () =>
            null != o || n
                ? n
                    ? null != o
                        ? (0, r.jsx)(S, { showUpperNoticesAboveGlobalNotices: i, children: o })
                        : (0, r.jsx)(S, {})
                    : (0, r.jsx)("div", { className: A.dD, children: o })
                : null,
        [n, o, i],
    );
}
function I(e) {
    let {
            upperInlineNoticeProps: t,
            planSelectContent: n,
            purchaseItemContent: l,
            subscriptionDetailsContent: i,
            isStepLoading: a,
            paymentMethodContent: u,
            invoiceSummaryContent: c,
            promotionalNoticeContent: d,
            legalContent: p,
            invoiceTotalDueLabel: y = E.intl.string(m.default.R0cZsM),
            invoiceTotalDueValue: g,
            shouldShowGlobalNotices: S,
            showUpperNoticesAboveGlobalNotices: I,
            footerInlineNoticeProps: T,
            headerBadgeConfig: N,
            className: x,
        } = e,
        k = _(T),
        { setCheckoutFooterLineItemNode: v } = (0, s.ck)();
    return a
        ? (0, r.jsx)(f, { className: x, shouldShowUnifiedHeader: !0 })
        : (0, r.jsxs)(r.Fragment, {
              children: [
                  (0, r.jsxs)("div", {
                      className: o()(x, { [A.pg]: null == c }),
                      children: [
                          (0, r.jsx)(P, {
                              upperInlineNoticeProps: t,
                              shouldShowGlobalNotices: S,
                              showUpperNoticesAboveGlobalNotices: I,
                          }),
                          n,
                          null != n && null != l && (0, r.jsx)("div", { className: A.ls }),
                          l,
                          null != i && (0, r.jsx)("div", { className: A.P3, children: i }),
                          (0, r.jsx)("div", { className: A.Jv, children: u }),
                          null != c && (0, r.jsx)("div", { className: A.ZF, children: c }),
                      ],
                  }),
                  (0, r.jsx)(s.UY, { children: (0, r.jsx)(h.f, { headerBadgeConfig: N }) }),
                  (0, r.jsxs)(s.bx, {
                      children: [
                          (0, r.jsx)("div", { ref: v }),
                          null != y && null != g && (0, r.jsx)(C.Qf, { className: A.NR, label: y, value: g }),
                          null != d ? (0, r.jsx)("div", { className: A.uh, children: d }) : null,
                          p,
                          null != k ? (0, r.jsx)("div", { className: A.Uu, children: k }) : null,
                      ],
                  }),
              ],
          });
}
