n.d(t, { T_: () => I, zJ: () => T, Ed: () => _, Wl: () => S });
var l = n(477900),
    o = n(582128),
    r = n(503698),
    i = n.n(r),
    a = n(683071),
    u = n(725836);
n(321073);
var s = n(901930),
    c = n(900730),
    d = n(912195),
    C = n(580133),
    h = n(169797),
    p = n(270537);
n(652215);
var m = n(583741),
    E = n(105292),
    f = n(66414);
function _(e) {
    let { className: t, shouldShowUnifiedHeader: n, headerBadgeConfig: o } = e;
    return (0, l.jsxs)(l.Fragment, {
        children: [
            n ? (0, l.jsx)(u.UY, { children: (0, l.jsx)(C.f, { headerBadgeConfig: o }) }) : null,
            (0, l.jsx)(h.DJ, { className: i()(f.g4, t) }),
        ],
    });
}
function g(e) {
    return null != e && "object" == typeof e && "message" in e && "type" in e
        ? (0, l.jsx)(a.w, { type: e.type, hidden: e.hidden, message: e.message, role: e.role }, e.key)
        : (0, l.jsx)(o.Fragment, { children: e.directContent }, e.key);
}
function y(e) {
    return null == e || "" === e;
}
function A(e) {
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
            y(r) || null == u.current || u.current.scrollIntoView({ behavior: "smooth" });
        }, [r]),
        o.useMemo(() => {
            if (!(!y(r) || i.length > 0 || null != t)) return null;
            let e = (0, l.jsxs)(l.Fragment, {
                children: [y(r) ? null : (0, l.jsx)(a.w, { type: "critical", message: r, role: "alert" }), i.map(g)],
            });
            return (0, l.jsx)("div", {
                ref: u,
                className: f.dD,
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
                      : (0, l.jsx)(l.Fragment, { children: e.map((e) => g(e)) })
                  : null != e
                    ? g(e)
                    : null,
        [e],
    );
}
function S(e) {
    let { footerInlineNoticeProps: t } = e,
        n = N(t);
    return null == n ? null : (0, l.jsx)("div", { className: f.Uu, children: n });
}
function T(e) {
    let { upperInlineNoticeProps: t, shouldShowGlobalNotices: n, showUpperNoticesAboveGlobalNotices: r } = e,
        i = N(t);
    return o.useMemo(
        () =>
            null != i || n
                ? n
                    ? null != i
                        ? (0, l.jsx)(A, { showUpperNoticesAboveGlobalNotices: r, children: i })
                        : (0, l.jsx)(A, {})
                    : (0, l.jsx)("div", { className: f.dD, children: i })
                : null,
        [n, i, r],
    );
}
function I(e) {
    let {
            upperInlineNoticeProps: t,
            upperInlineNoticeContent: n,
            planSelectContent: o,
            purchaseItemContent: r,
            subscriptionDetailsContent: a,
            isStepLoading: s,
            paymentMethodContent: c,
            invoiceSummaryContent: d,
            promotionalNoticeContent: h,
            legalContent: g,
            invoiceTotalDueLabel: y = E.intl.string(m.default.R0cZsM),
            invoiceTotalDueValue: A,
            shouldShowGlobalNotices: N,
            showUpperNoticesAboveGlobalNotices: I,
            footerInlineNoticeProps: O,
            footerInlineNoticeContent: k,
            headerBadgeConfig: x,
            className: v,
        } = e,
        { setCheckoutFooterLineItemNode: w } = (0, u.ck)();
    return s
        ? (0, l.jsx)(_, { className: v, shouldShowUnifiedHeader: !0 })
        : (0, l.jsxs)(l.Fragment, {
              children: [
                  (0, l.jsxs)("div", {
                      className: i()(v, { [f.pg]: null == d }),
                      children: [
                          null != n
                              ? n
                              : (0, l.jsx)(T, {
                                    upperInlineNoticeProps: t,
                                    shouldShowGlobalNotices: N,
                                    showUpperNoticesAboveGlobalNotices: I,
                                }),
                          o,
                          null != o && null != r && (0, l.jsx)("div", { className: f.ls }),
                          r,
                          null != a && (0, l.jsx)("div", { className: f.P3, children: a }),
                          (0, l.jsx)("div", { className: f.Jv, children: c }),
                          null != d && (0, l.jsx)("div", { className: f.ZF, children: d }),
                      ],
                  }),
                  (0, l.jsx)(u.UY, { children: (0, l.jsx)(C.f, { headerBadgeConfig: x }) }),
                  (0, l.jsxs)(u.bx, {
                      children: [
                          (0, l.jsx)("div", { ref: w }),
                          null != y && null != A && (0, l.jsx)(p.Qf, { className: f.NR, label: y, value: A }),
                          null != h ? (0, l.jsx)("div", { className: f.uh, children: h }) : null,
                          g,
                          null != k ? k : (0, l.jsx)(S, { footerInlineNoticeProps: O }),
                      ],
                  }),
              ],
          });
}
