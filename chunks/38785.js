a.d(t, { T_: () => S, Ed: () => _ });
var l = a(477900),
    n = a(582128),
    r = a(503698),
    i = a.n(r),
    s = a(683071),
    o = a(725836);
a(321073);
var u = a(901930),
    c = a(900730),
    h = a(642639),
    d = a(580133),
    m = a(169797),
    C = a(270537);
a(652215);
var p = a(583741),
    A = a(375708),
    E = a(66414);
function _(e) {
    let { className: t, shouldShowUnifiedHeader: a, headerBadgeConfig: n } = e;
    return (0, l.jsxs)(l.Fragment, {
        children: [
            a ? (0, l.jsx)(o.UY, { children: (0, l.jsx)(d.f, { headerBadgeConfig: n }) }) : null,
            (0, l.jsx)(m.DJ, { className: i()(E.g4, t) }),
        ],
    });
}
function g(e) {
    return null != e && "object" == typeof e && "message" in e && "type" in e
        ? (0, l.jsx)(s.w, { type: e.type, hidden: e.hidden, children: e.message }, e.key)
        : (0, l.jsx)(n.Fragment, { children: e.directContent }, e.key);
}
function f(e) {
    return null == e || "" === e;
}
function T(e) {
    let { children: t, showUpperNoticesAboveGlobalNotices: a = !1 } = e,
        { errorMessage: r, richNotices: i } = (function () {
            let { errorMessage: e } = (0, u.j)({}),
                t = (function () {
                    let { paymentSourceId: e, checkoutPaymentSources: t } = (0, h.t4)((e) => ({
                            paymentSourceId: e.paymentSourceId,
                            checkoutPaymentSources: e.get("checkoutPaymentSources"),
                        })),
                        {
                            relocationCountry: a,
                            relocationCurrencyCode: r,
                            willForfeitGiftCardBalance: i,
                        } = n.useMemo(() => {
                            let a = null != e ? t.find((t) => t.id === e) : null;
                            return {
                                relocationCountry: a?.relocationCountry ?? null,
                                relocationCurrencyCode: a?.relocationCurrencyCode ?? null,
                                willForfeitGiftCardBalance: a?.willForfeitGiftCardBalance ?? !1,
                            };
                        }, [t, e]);
                    return n.useMemo(
                        () =>
                            null == a
                                ? null
                                : {
                                      directContent: (0, l.jsx)(c.c, {
                                          relocationCountry: a,
                                          relocationCurrencyCode: r,
                                          willForfeitGiftCardBalance: i,
                                      }),
                                      key: "store-relocation-notice",
                                  },
                        [a, r, i],
                    );
                })();
            return {
                errorMessage: e,
                richNotices: n.useMemo(() => {
                    let e = [];
                    return (null != t && e.push(t), e);
                }, [t]),
            };
        })(),
        o = n.useRef(null);
    return (
        n.useEffect(() => {
            f(r) || null == o.current || o.current.scrollIntoView({ behavior: "smooth" });
        }, [r]),
        n.useMemo(() => {
            if (!(!f(r) || i.length > 0 || null != t)) return null;
            let e = (0, l.jsxs)(l.Fragment, {
                children: [f(r) ? null : (0, l.jsx)(s.w, { type: "critical", children: r }), i.map(g)],
            });
            return (0, l.jsx)("div", {
                ref: o,
                className: E.dD,
                children: a
                    ? (0, l.jsxs)(l.Fragment, { children: [t, e] })
                    : (0, l.jsxs)(l.Fragment, { children: [e, t] }),
            });
        }, [r, i, t, a])
    );
}
function y(e) {
    return n.useMemo(
        () =>
            null == e
                ? null
                : Array.isArray(e)
                  ? 0 === e.length
                      ? null
                      : (0, l.jsx)(l.Fragment, { children: e.map((e) => g(e)) })
                  : null != e
                    ? g(e)
                    : null,
        [e],
    );
}
function P(e) {
    let { upperInlineNoticeProps: t, shouldShowGlobalNotices: a, showUpperNoticesAboveGlobalNotices: r } = e,
        i = y(t);
    return n.useMemo(
        () =>
            null != i || a
                ? a
                    ? null != i
                        ? (0, l.jsx)(T, { showUpperNoticesAboveGlobalNotices: r, children: i })
                        : (0, l.jsx)(T, {})
                    : (0, l.jsx)("div", { className: E.dD, children: i })
                : null,
        [a, i, r],
    );
}
function S(e) {
    let {
            upperInlineNoticeProps: t,
            planSelectContent: a,
            purchaseItemContent: n,
            subscriptionDetailsContent: r,
            isStepLoading: s,
            paymentMethodContent: u,
            invoiceSummaryContent: c,
            promotionalNoticeContent: h,
            legalContent: m,
            invoiceTotalDueLabel: g = A.intl.string(p.default.R0cZsM),
            invoiceTotalDueValue: f,
            shouldShowGlobalNotices: T,
            showUpperNoticesAboveGlobalNotices: S,
            footerInlineNoticeProps: I,
            headerBadgeConfig: M,
            className: x,
        } = e,
        v = y(I),
        { setCheckoutFooterLineItemNode: N } = (0, o.ck)();
    return s
        ? (0, l.jsx)(_, { className: x, shouldShowUnifiedHeader: !0 })
        : (0, l.jsxs)(l.Fragment, {
              children: [
                  (0, l.jsxs)("div", {
                      className: i()(x, { [E.pg]: null == c }),
                      children: [
                          (0, l.jsx)(P, {
                              upperInlineNoticeProps: t,
                              shouldShowGlobalNotices: T,
                              showUpperNoticesAboveGlobalNotices: S,
                          }),
                          a,
                          null != a && null != n && (0, l.jsx)("div", { className: E.ls }),
                          n,
                          null != r && (0, l.jsx)("div", { className: E.P3, children: r }),
                          (0, l.jsx)("div", { className: E.Jv, children: u }),
                          null != c && (0, l.jsx)("div", { className: E.ZF, children: c }),
                      ],
                  }),
                  (0, l.jsx)(o.UY, { children: (0, l.jsx)(d.f, { headerBadgeConfig: M }) }),
                  (0, l.jsxs)(o.bx, {
                      children: [
                          (0, l.jsx)("div", { ref: N }),
                          null != g && null != f && (0, l.jsx)(C.Qf, { className: E.NR, label: g, value: f }),
                          null != h ? (0, l.jsx)("div", { className: E.uh, children: h }) : null,
                          m,
                          null != v ? (0, l.jsx)("div", { className: E.Uu, children: v }) : null,
                      ],
                  }),
              ],
          });
}
