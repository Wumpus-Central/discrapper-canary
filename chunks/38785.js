n.d(t, { T_: () => m, Ed: () => f });
var l = n(477900),
    r = n(582128),
    i = n(503698),
    o = n.n(i),
    u = n(683071),
    s = n(725836);
n(321073);
var a = n(901930),
    c = n(900730),
    d = n(206441),
    C = n(580133),
    E = n(480642),
    h = n(848584);
n(652215);
var _ = n(477729),
    A = n(375708),
    p = n(66414);
function f(e) {
    let { className: t, shouldShowUnifiedHeader: n, headerBadgeConfig: r } = e;
    return (0, l.jsxs)(l.Fragment, {
        children: [
            n ? (0, l.jsx)(s.UY, { children: (0, l.jsx)(C.f, { headerBadgeConfig: r }) }) : null,
            (0, l.jsx)(E.DJ, { className: o()(p.g4, t) }),
        ],
    });
}
function S(e) {
    return null != e && "object" == typeof e && "message" in e && "type" in e
        ? (0, l.jsx)(u.w, { type: e.type, hidden: e.hidden, children: e.message }, e.key)
        : (0, l.jsx)(r.Fragment, { children: e.directContent }, e.key);
}
function I(e) {
    return null == e || "" === e;
}
function g(e) {
    let { children: t, showUpperNoticesAboveGlobalNotices: n = !1 } = e,
        { errorMessage: i, richNotices: o } = (function () {
            let { errorMessage: e } = (0, a.j)({}),
                t = (function () {
                    let { paymentSourceId: e, checkoutPaymentSources: t } = (0, d.t4)((e) => ({
                            paymentSourceId: e.paymentSourceId,
                            checkoutPaymentSources: e.get("checkoutPaymentSources"),
                        })),
                        {
                            relocationCountry: n,
                            relocationCurrencyCode: i,
                            willForfeitGiftCardBalance: o,
                        } = r.useMemo(() => {
                            let n = null != e ? t.find((t) => t.id === e) : null;
                            return {
                                relocationCountry: n?.relocationCountry ?? null,
                                relocationCurrencyCode: n?.relocationCurrencyCode ?? null,
                                willForfeitGiftCardBalance: n?.willForfeitGiftCardBalance ?? !1,
                            };
                        }, [t, e]);
                    return r.useMemo(
                        () =>
                            null == n
                                ? null
                                : {
                                      directContent: (0, l.jsx)(c.c, {
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
                richNotices: r.useMemo(() => {
                    let e = [];
                    return null != t && e.push(t), e;
                }, [t]),
            };
        })(),
        s = r.useRef(null);
    return (
        r.useEffect(() => {
            I(i) || null == s.current || s.current.scrollIntoView({ behavior: "smooth" });
        }, [i]),
        r.useMemo(() => {
            if (!(!I(i) || o.length > 0 || null != t)) return null;
            let e = (0, l.jsxs)(l.Fragment, {
                children: [I(i) ? null : (0, l.jsx)(u.w, { type: "critical", children: i }), o.map(S)],
            });
            return (0, l.jsx)("div", {
                ref: s,
                className: p.dD,
                children: n
                    ? (0, l.jsxs)(l.Fragment, { children: [t, e] })
                    : (0, l.jsxs)(l.Fragment, { children: [e, t] }),
            });
        }, [i, o, t, n])
    );
}
function N(e) {
    return r.useMemo(
        () =>
            null == e
                ? null
                : Array.isArray(e)
                  ? 0 === e.length
                      ? null
                      : (0, l.jsx)(l.Fragment, { children: e.map((e) => S(e)) })
                  : null != e
                    ? S(e)
                    : null,
        [e],
    );
}
function T(e) {
    let { upperInlineNoticeProps: t, shouldShowGlobalNotices: n, showUpperNoticesAboveGlobalNotices: i } = e,
        o = N(t);
    return r.useMemo(
        () =>
            null != o || n
                ? n
                    ? null != o
                        ? (0, l.jsx)(g, { showUpperNoticesAboveGlobalNotices: i, children: o })
                        : (0, l.jsx)(g, {})
                    : (0, l.jsx)("div", { className: p.dD, children: o })
                : null,
        [n, o, i],
    );
}
function m(e) {
    let {
            upperInlineNoticeProps: t,
            planSelectContent: n,
            purchaseItemContent: r,
            subscriptionDetailsContent: i,
            isStepLoading: u,
            paymentMethodContent: a,
            invoiceSummaryContent: c,
            promotionalNoticeContent: d,
            legalContent: E,
            invoiceTotalDueLabel: S = A.intl.string(_.default.R0cZsM),
            invoiceTotalDueValue: I,
            shouldShowGlobalNotices: g,
            showUpperNoticesAboveGlobalNotices: m,
            footerInlineNoticeProps: R,
            headerBadgeConfig: y,
            className: P,
        } = e,
        L = N(R);
    return u
        ? (0, l.jsx)(f, { className: P, shouldShowUnifiedHeader: !0 })
        : (0, l.jsxs)(l.Fragment, {
              children: [
                  (0, l.jsxs)("div", {
                      className: o()(P, { [p.pg]: null == c }),
                      children: [
                          (0, l.jsx)(T, {
                              upperInlineNoticeProps: t,
                              shouldShowGlobalNotices: g,
                              showUpperNoticesAboveGlobalNotices: m,
                          }),
                          n,
                          null != n && null != r && (0, l.jsx)("div", { className: p.ls }),
                          r,
                          null != i && (0, l.jsx)("div", { className: p.P3, children: i }),
                          (0, l.jsx)("div", { className: p.Jv, children: a }),
                          null != c && (0, l.jsx)("div", { className: p.ZF, children: c }),
                      ],
                  }),
                  (0, l.jsx)(s.UY, { children: (0, l.jsx)(C.f, { headerBadgeConfig: y }) }),
                  (0, l.jsxs)(s.bx, {
                      children: [
                          null != S && null != I && (0, l.jsx)(h.Qf, { className: p.NR, label: S, value: I }),
                          null != d ? (0, l.jsx)("div", { className: p.uh, children: d }) : null,
                          E,
                          null != L ? (0, l.jsx)("div", { className: p.Uu, children: L }) : null,
                      ],
                  }),
              ],
          });
}
