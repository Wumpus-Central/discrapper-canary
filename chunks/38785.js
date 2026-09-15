t.d(n, { T_: () => S, Ed: () => g, yg: () => p });
var r = t(477900),
    l = t(582128),
    i = t(503698),
    s = t.n(i);
if (529845 == t.j) var o = t(815390);
var a = t(683071),
    u = t(725836);
t(321073);
var c = t(901930),
    d = t(900730),
    h = t(721836),
    E = t(580133),
    m = t(169797),
    C = t(270537),
    f = t(652215),
    A = t(649975),
    x = t(375708),
    N = t(66414);
function g(e) {
    let { className: n, shouldShowUnifiedHeader: t, headerBadgeConfig: l } = e;
    return (0, r.jsxs)(r.Fragment, {
        children: [
            t ? (0, r.jsx)(u.UY, { children: (0, r.jsx)(E.f, { headerBadgeConfig: l }) }) : null,
            (0, r.jsx)(m.DJ, { className: s()(N.g4, n) }),
        ],
    });
}
function p() {
    return (0, r.jsx)(m.Jg, {
        transitionState: o.i.ENTERED,
        onClose: f.tEg,
        size: "md",
        isModalContentLoading: !0,
        children: (0, r.jsx)(g, { shouldShowUnifiedHeader: !0 }),
    });
}
function j(e) {
    return null != e && "object" == typeof e && "message" in e && "type" in e
        ? (0, r.jsx)(a.w, { type: e.type, hidden: e.hidden, children: e.message }, e.key)
        : (0, r.jsx)(l.Fragment, { children: e.directContent }, e.key);
}
function v(e) {
    return null == e || "" === e;
}
function I(e) {
    let { children: n, showUpperNoticesAboveGlobalNotices: t = !1 } = e,
        { errorMessage: i, richNotices: s } = (function () {
            let { errorMessage: e } = (0, c.j)({}),
                n = (function () {
                    let { paymentSourceId: e, checkoutPaymentSources: n } = (0, h.t4)((e) => ({
                            paymentSourceId: e.paymentSourceId,
                            checkoutPaymentSources: e.get("checkoutPaymentSources"),
                        })),
                        {
                            relocationCountry: t,
                            relocationCurrencyCode: i,
                            willForfeitGiftCardBalance: s,
                        } = l.useMemo(() => {
                            let t = null != e ? n.find((n) => n.id === e) : null;
                            return {
                                relocationCountry: t?.relocationCountry ?? null,
                                relocationCurrencyCode: t?.relocationCurrencyCode ?? null,
                                willForfeitGiftCardBalance: t?.willForfeitGiftCardBalance ?? !1,
                            };
                        }, [n, e]);
                    return l.useMemo(
                        () =>
                            null == t
                                ? null
                                : {
                                      directContent: (0, r.jsx)(d.c, {
                                          relocationCountry: t,
                                          relocationCurrencyCode: i,
                                          willForfeitGiftCardBalance: s,
                                      }),
                                      key: "store-relocation-notice",
                                  },
                        [t, i, s],
                    );
                })();
            return {
                errorMessage: e,
                richNotices: l.useMemo(() => {
                    let e = [];
                    return (null != n && e.push(n), e);
                }, [n]),
            };
        })(),
        o = l.useRef(null);
    return (
        l.useEffect(() => {
            v(i) || null == o.current || o.current.scrollIntoView({ behavior: "smooth" });
        }, [i]),
        l.useMemo(() => {
            if (!(!v(i) || s.length > 0 || null != n)) return null;
            let e = (0, r.jsxs)(r.Fragment, {
                children: [v(i) ? null : (0, r.jsx)(a.w, { type: "critical", children: i }), s.map(j)],
            });
            return (0, r.jsx)("div", {
                ref: o,
                className: N.dD,
                children: t
                    ? (0, r.jsxs)(r.Fragment, { children: [n, e] })
                    : (0, r.jsxs)(r.Fragment, { children: [e, n] }),
            });
        }, [i, s, n, t])
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
                      : (0, r.jsx)(r.Fragment, { children: e.map((e) => j(e)) })
                  : null != e
                    ? j(e)
                    : null,
        [e],
    );
}
function y(e) {
    let { upperInlineNoticeProps: n, shouldShowGlobalNotices: t, showUpperNoticesAboveGlobalNotices: i } = e,
        s = _(n);
    return l.useMemo(
        () =>
            null != s || t
                ? t
                    ? null != s
                        ? (0, r.jsx)(I, { showUpperNoticesAboveGlobalNotices: i, children: s })
                        : (0, r.jsx)(I, {})
                    : (0, r.jsx)("div", { className: N.dD, children: s })
                : null,
        [t, s, i],
    );
}
function S(e) {
    let {
            upperInlineNoticeProps: n,
            planSelectContent: t,
            purchaseItemContent: l,
            subscriptionDetailsContent: i,
            isStepLoading: o,
            paymentMethodContent: a,
            invoiceSummaryContent: c,
            promotionalNoticeContent: d,
            legalContent: h,
            invoiceTotalDueLabel: m = x.intl.string(A.default.R0cZsM),
            invoiceTotalDueValue: f,
            shouldShowGlobalNotices: p,
            showUpperNoticesAboveGlobalNotices: j,
            footerInlineNoticeProps: v,
            headerBadgeConfig: I,
            className: S,
        } = e,
        T = _(v),
        { setCheckoutFooterLineItemNode: L } = (0, u.ck)();
    return o
        ? (0, r.jsx)(g, { className: S, shouldShowUnifiedHeader: !0 })
        : (0, r.jsxs)(r.Fragment, {
              children: [
                  (0, r.jsxs)("div", {
                      className: s()(S, { [N.pg]: null == c }),
                      children: [
                          (0, r.jsx)(y, {
                              upperInlineNoticeProps: n,
                              shouldShowGlobalNotices: p,
                              showUpperNoticesAboveGlobalNotices: j,
                          }),
                          t,
                          null != t && null != l && (0, r.jsx)("div", { className: N.ls }),
                          l,
                          null != i && (0, r.jsx)("div", { className: N.P3, children: i }),
                          (0, r.jsx)("div", { className: N.Jv, children: a }),
                          null != c && (0, r.jsx)("div", { className: N.ZF, children: c }),
                      ],
                  }),
                  (0, r.jsx)(u.UY, { children: (0, r.jsx)(E.f, { headerBadgeConfig: I }) }),
                  (0, r.jsxs)(u.bx, {
                      children: [
                          (0, r.jsx)("div", { ref: L }),
                          null != m && null != f && (0, r.jsx)(C.Qf, { className: N.NR, label: m, value: f }),
                          null != d ? (0, r.jsx)("div", { className: N.uh, children: d }) : null,
                          h,
                          null != T ? (0, r.jsx)("div", { className: N.Uu, children: T }) : null,
                      ],
                  }),
              ],
          });
}
