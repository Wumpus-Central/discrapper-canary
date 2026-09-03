n.d(t, { T_: () => T, Ed: () => f });
var r = n(477900),
    l = n(582128),
    i = n(503698),
    o = n.n(i),
    a = n(683071),
    s = n(725836);
n(321073);
var u = n(901930),
    c = n(900730),
    d = n(206441),
    C = n(580133),
    h = n(169797),
    E = n(270537);
n(652215);
var m = n(583741),
    p = n(375708),
    _ = n(66414);
function f(e) {
    let { className: t, shouldShowUnifiedHeader: n, headerBadgeConfig: l } = e;
    return (0, r.jsxs)(r.Fragment, {
        children: [
            n ? (0, r.jsx)(s.UY, { children: (0, r.jsx)(C.f, { headerBadgeConfig: l }) }) : null,
            (0, r.jsx)(h.DJ, { className: o()(_.g4, t) }),
        ],
    });
}
function S(e) {
    return null != e && "object" == typeof e && "message" in e && "type" in e
        ? (0, r.jsx)(a.w, { type: e.type, hidden: e.hidden, children: e.message }, e.key)
        : (0, r.jsx)(l.Fragment, { children: e.directContent }, e.key);
}
function A(e) {
    return null == e || "" === e;
}
function I(e) {
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
                    return null != t && e.push(t), e;
                }, [t]),
            };
        })(),
        s = l.useRef(null);
    return (
        l.useEffect(() => {
            A(i) || null == s.current || s.current.scrollIntoView({ behavior: "smooth" });
        }, [i]),
        l.useMemo(() => {
            if (!(!A(i) || o.length > 0 || null != t)) return null;
            let e = (0, r.jsxs)(r.Fragment, {
                children: [A(i) ? null : (0, r.jsx)(a.w, { type: "critical", children: i }), o.map(S)],
            });
            return (0, r.jsx)("div", {
                ref: s,
                className: _.dD,
                children: n
                    ? (0, r.jsxs)(r.Fragment, { children: [t, e] })
                    : (0, r.jsxs)(r.Fragment, { children: [e, t] }),
            });
        }, [i, o, t, n])
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
                      : (0, r.jsx)(r.Fragment, { children: e.map((e) => S(e)) })
                  : null != e
                    ? S(e)
                    : null,
        [e],
    );
}
function N(e) {
    let { upperInlineNoticeProps: t, shouldShowGlobalNotices: n, showUpperNoticesAboveGlobalNotices: i } = e,
        o = g(t);
    return l.useMemo(
        () =>
            null != o || n
                ? n
                    ? null != o
                        ? (0, r.jsx)(I, { showUpperNoticesAboveGlobalNotices: i, children: o })
                        : (0, r.jsx)(I, {})
                    : (0, r.jsx)("div", { className: _.dD, children: o })
                : null,
        [n, o, i],
    );
}
function T(e) {
    let {
            upperInlineNoticeProps: t,
            planSelectContent: n,
            purchaseItemContent: l,
            subscriptionDetailsContent: i,
            isStepLoading: a,
            paymentMethodContent: u,
            invoiceSummaryContent: c,
            promotionalNoticeContent: d,
            legalContent: h,
            invoiceTotalDueLabel: S = p.intl.string(m.default.R0cZsM),
            invoiceTotalDueValue: A,
            shouldShowGlobalNotices: I,
            showUpperNoticesAboveGlobalNotices: T,
            footerInlineNoticeProps: y,
            headerBadgeConfig: x,
            className: P,
        } = e,
        R = g(y);
    return a
        ? (0, r.jsx)(f, { className: P, shouldShowUnifiedHeader: !0 })
        : (0, r.jsxs)(r.Fragment, {
              children: [
                  (0, r.jsxs)("div", {
                      className: o()(P, { [_.pg]: null == c }),
                      children: [
                          (0, r.jsx)(N, {
                              upperInlineNoticeProps: t,
                              shouldShowGlobalNotices: I,
                              showUpperNoticesAboveGlobalNotices: T,
                          }),
                          n,
                          null != n && null != l && (0, r.jsx)("div", { className: _.ls }),
                          l,
                          null != i && (0, r.jsx)("div", { className: _.P3, children: i }),
                          (0, r.jsx)("div", { className: _.Jv, children: u }),
                          null != c && (0, r.jsx)("div", { className: _.ZF, children: c }),
                      ],
                  }),
                  (0, r.jsx)(s.UY, { children: (0, r.jsx)(C.f, { headerBadgeConfig: x }) }),
                  (0, r.jsxs)(s.bx, {
                      children: [
                          null != S && null != A && (0, r.jsx)(E.Qf, { className: _.NR, label: S, value: A }),
                          null != d ? (0, r.jsx)("div", { className: _.uh, children: d }) : null,
                          h,
                          null != R ? (0, r.jsx)("div", { className: _.Uu, children: R }) : null,
                      ],
                  }),
              ],
          });
}
