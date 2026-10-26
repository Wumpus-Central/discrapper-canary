n.d(t, { T_: () => T, Ed: () => f });
var l = n(477900),
    o = n(582128),
    r = n(503698),
    i = n.n(r),
    a = n(683071),
    u = n(725836);
n(321073);
var s = n(901930),
    c = n(900730),
    d = n(123816),
    C = n(580133),
    h = n(169797),
    p = n(270537);
n(652215);
var m = n(583741),
    E = n(105292),
    _ = n(66414);
function f(e) {
    let { className: t, shouldShowUnifiedHeader: n, headerBadgeConfig: o } = e;
    return (0, l.jsxs)(l.Fragment, {
        children: [
            n ? (0, l.jsx)(u.UY, { children: (0, l.jsx)(C.f, { headerBadgeConfig: o }) }) : null,
            (0, l.jsx)(h.DJ, { className: i()(_.g4, t) }),
        ],
    });
}
function y(e) {
    return null != e && "object" == typeof e && "message" in e && "type" in e
        ? (0, l.jsx)(a.w, { type: e.type, hidden: e.hidden, message: e.message, role: e.role }, e.key)
        : (0, l.jsx)(o.Fragment, { children: e.directContent }, e.key);
}
function A(e) {
    return null == e || "" === e;
}
function g(e) {
    let { children: t, showUpperNoticesAboveGlobalNotices: n = !1 } = e,
        { errorMessage: r, richNotices: i } = (function () {
            let { errorMessage: e } = (0, s.j)({}),
                t = (function () {
                    let { paymentSourceId: e, checkoutPaymentSources: t } = (0, d.t4)((e) => ({
                            paymentSourceId: e.paymentSourceId,
                            checkoutPaymentSources: e.get("checkoutPaymentSources"),
                        })),
                        {
                            relocationCountry: n,
                            relocationCurrencyCode: r,
                            willForfeitGiftCardBalance: i,
                        } = o.useMemo(() => {
                            let n = null != e ? t.find((t) => t.id === e) : null;
                            return {
                                relocationCountry: n?.relocationCountry ?? null,
                                relocationCurrencyCode: n?.relocationCurrencyCode ?? null,
                                willForfeitGiftCardBalance: n?.willForfeitGiftCardBalance ?? !1,
                            };
                        }, [t, e]);
                    return o.useMemo(
                        () =>
                            null == n
                                ? null
                                : {
                                      directContent: (0, l.jsx)(c.c, {
                                          relocationCountry: n,
                                          relocationCurrencyCode: r,
                                          willForfeitGiftCardBalance: i,
                                          role: "status",
                                      }),
                                      key: "store-relocation-notice",
                                  },
                        [n, r, i],
                    );
                })();
            return {
                errorMessage: e,
                richNotices: o.useMemo(() => {
                    let e = [];
                    return (null != t && e.push(t), e);
                }, [t]),
            };
        })(),
        u = o.useRef(null);
    return (
        o.useEffect(() => {
            A(r) || null == u.current || u.current.scrollIntoView({ behavior: "smooth" });
        }, [r]),
        o.useMemo(() => {
            if (!(!A(r) || i.length > 0 || null != t)) return null;
            let e = (0, l.jsxs)(l.Fragment, {
                children: [A(r) ? null : (0, l.jsx)(a.w, { type: "critical", message: r, role: "alert" }), i.map(y)],
            });
            return (0, l.jsx)("div", {
                ref: u,
                className: _.dD,
                children: n
                    ? (0, l.jsxs)(l.Fragment, { children: [t, e] })
                    : (0, l.jsxs)(l.Fragment, { children: [e, t] }),
            });
        }, [r, i, t, n])
    );
}
function N(e) {
    return o.useMemo(
        () =>
            null == e
                ? null
                : Array.isArray(e)
                  ? 0 === e.length
                      ? null
                      : (0, l.jsx)(l.Fragment, { children: e.map((e) => y(e)) })
                  : null != e
                    ? y(e)
                    : null,
        [e],
    );
}
function S(e) {
    let { upperInlineNoticeProps: t, shouldShowGlobalNotices: n, showUpperNoticesAboveGlobalNotices: r } = e,
        i = N(t);
    return o.useMemo(
        () =>
            null != i || n
                ? n
                    ? null != i
                        ? (0, l.jsx)(g, { showUpperNoticesAboveGlobalNotices: r, children: i })
                        : (0, l.jsx)(g, {})
                    : (0, l.jsx)("div", { className: _.dD, children: i })
                : null,
        [n, i, r],
    );
}
function T(e) {
    let {
            upperInlineNoticeProps: t,
            planSelectContent: n,
            purchaseItemContent: o,
            subscriptionDetailsContent: r,
            isStepLoading: a,
            paymentMethodContent: s,
            invoiceSummaryContent: c,
            promotionalNoticeContent: d,
            legalContent: h,
            invoiceTotalDueLabel: y = E.intl.string(m.default.R0cZsM),
            invoiceTotalDueValue: A,
            shouldShowGlobalNotices: g,
            showUpperNoticesAboveGlobalNotices: T,
            footerInlineNoticeProps: I,
            headerBadgeConfig: O,
            className: k,
        } = e,
        x = N(I),
        { setCheckoutFooterLineItemNode: v } = (0, u.ck)();
    return a
        ? (0, l.jsx)(f, { className: k, shouldShowUnifiedHeader: !0 })
        : (0, l.jsxs)(l.Fragment, {
              children: [
                  (0, l.jsxs)("div", {
                      className: i()(k, { [_.pg]: null == c }),
                      children: [
                          (0, l.jsx)(S, {
                              upperInlineNoticeProps: t,
                              shouldShowGlobalNotices: g,
                              showUpperNoticesAboveGlobalNotices: T,
                          }),
                          n,
                          null != n && null != o && (0, l.jsx)("div", { className: _.ls }),
                          o,
                          null != r && (0, l.jsx)("div", { className: _.P3, children: r }),
                          (0, l.jsx)("div", { className: _.Jv, children: s }),
                          null != c && (0, l.jsx)("div", { className: _.ZF, children: c }),
                      ],
                  }),
                  (0, l.jsx)(u.UY, { children: (0, l.jsx)(C.f, { headerBadgeConfig: O }) }),
                  (0, l.jsxs)(u.bx, {
                      children: [
                          (0, l.jsx)("div", { ref: v }),
                          null != y && null != A && (0, l.jsx)(p.Qf, { className: _.NR, label: y, value: A }),
                          null != d ? (0, l.jsx)("div", { className: _.uh, children: d }) : null,
                          h,
                          null != x ? (0, l.jsx)("div", { className: _.Uu, children: x }) : null,
                      ],
                  }),
              ],
          });
}
