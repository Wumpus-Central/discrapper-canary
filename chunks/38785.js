n.d(t, { T_: () => y, Ed: () => N, yg: () => p });
var r = n(477900),
    l = n(582128),
    i = n(503698),
    s = n.n(i);
if (529845 == n.j) var u = n(815390);
var o = n(683071),
    a = n(725836);
n(321073);
var c = n(901930),
    d = n(900730),
    E = n(206441),
    h = n(580133),
    A = n(480642),
    f = n(848584),
    g = n(652215),
    _ = n(583741),
    C = n(375708),
    S = n(66414);
function N(e) {
    let { className: t, shouldShowUnifiedHeader: n, headerBadgeConfig: l } = e;
    return (0, r.jsxs)(r.Fragment, {
        children: [
            n ? (0, r.jsx)(a.UY, { children: (0, r.jsx)(h.f, { headerBadgeConfig: l }) }) : null,
            (0, r.jsx)(A.DJ, { className: s()(S.g4, t) }),
        ],
    });
}
function p() {
    return (0, r.jsx)(A.Jg, {
        transitionState: u.i.ENTERED,
        onClose: g.tEg,
        size: "md",
        isModalContentLoading: !0,
        children: (0, r.jsx)(N, { shouldShowUnifiedHeader: !0 }),
    });
}
function I(e) {
    return null != e && "object" == typeof e && "message" in e && "type" in e
        ? (0, r.jsx)(o.w, { type: e.type, hidden: e.hidden, children: e.message }, e.key)
        : (0, r.jsx)(l.Fragment, { children: e.directContent }, e.key);
}
function m(e) {
    return null == e || "" === e;
}
function L(e) {
    let { children: t, showUpperNoticesAboveGlobalNotices: n = !1 } = e,
        { errorMessage: i, richNotices: s } = (function () {
            let { errorMessage: e } = (0, c.j)({}),
                t = (function () {
                    let { paymentSourceId: e, checkoutPaymentSources: t } = (0, E.t4)((e) => ({
                            paymentSourceId: e.paymentSourceId,
                            checkoutPaymentSources: e.get("checkoutPaymentSources"),
                        })),
                        {
                            relocationCountry: n,
                            relocationCurrencyCode: i,
                            willForfeitGiftCardBalance: s,
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
                                      directContent: (0, r.jsx)(d.c, {
                                          relocationCountry: n,
                                          relocationCurrencyCode: i,
                                          willForfeitGiftCardBalance: s,
                                      }),
                                      key: "store-relocation-notice",
                                  },
                        [n, i, s],
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
        u = l.useRef(null);
    return (
        l.useEffect(() => {
            m(i) || null == u.current || u.current.scrollIntoView({ behavior: "smooth" });
        }, [i]),
        l.useMemo(() => {
            if (!(!m(i) || s.length > 0 || null != t)) return null;
            let e = (0, r.jsxs)(r.Fragment, {
                children: [m(i) ? null : (0, r.jsx)(o.w, { type: "critical", children: i }), s.map(I)],
            });
            return (0, r.jsx)("div", {
                ref: u,
                className: S.dD,
                children: n
                    ? (0, r.jsxs)(r.Fragment, { children: [t, e] })
                    : (0, r.jsxs)(r.Fragment, { children: [e, t] }),
            });
        }, [i, s, t, n])
    );
}
function x(e) {
    return l.useMemo(
        () =>
            null == e
                ? null
                : Array.isArray(e)
                  ? 0 === e.length
                      ? null
                      : (0, r.jsx)(r.Fragment, { children: e.map((e) => I(e)) })
                  : null != e
                    ? I(e)
                    : null,
        [e],
    );
}
function T(e) {
    let { upperInlineNoticeProps: t, shouldShowGlobalNotices: n, showUpperNoticesAboveGlobalNotices: i } = e,
        s = x(t);
    return l.useMemo(
        () =>
            null != s || n
                ? n
                    ? null != s
                        ? (0, r.jsx)(L, { showUpperNoticesAboveGlobalNotices: i, children: s })
                        : (0, r.jsx)(L, {})
                    : (0, r.jsx)("div", { className: S.dD, children: s })
                : null,
        [n, s, i],
    );
}
function y(e) {
    let {
            upperInlineNoticeProps: t,
            planSelectContent: n,
            purchaseItemContent: l,
            subscriptionDetailsContent: i,
            isStepLoading: u,
            paymentMethodContent: o,
            invoiceSummaryContent: c,
            promotionalNoticeContent: d,
            legalContent: E,
            invoiceTotalDueLabel: A = C.intl.string(_.default.R0cZsM),
            invoiceTotalDueValue: g,
            shouldShowGlobalNotices: p,
            showUpperNoticesAboveGlobalNotices: I,
            footerInlineNoticeProps: m,
            headerBadgeConfig: L,
            className: y,
        } = e,
        v = x(m);
    return u
        ? (0, r.jsx)(N, { className: y, shouldShowUnifiedHeader: !0 })
        : (0, r.jsxs)(r.Fragment, {
              children: [
                  (0, r.jsxs)("div", {
                      className: s()(y, { [S.pg]: null == c }),
                      children: [
                          (0, r.jsx)(T, {
                              upperInlineNoticeProps: t,
                              shouldShowGlobalNotices: p,
                              showUpperNoticesAboveGlobalNotices: I,
                          }),
                          n,
                          null != n && null != l && (0, r.jsx)("div", { className: S.ls }),
                          l,
                          null != i && (0, r.jsx)("div", { className: S.P3, children: i }),
                          (0, r.jsx)("div", { className: S.Jv, children: o }),
                          null != c && (0, r.jsx)("div", { className: S.ZF, children: c }),
                      ],
                  }),
                  (0, r.jsx)(a.UY, { children: (0, r.jsx)(h.f, { headerBadgeConfig: L }) }),
                  (0, r.jsxs)(a.bx, {
                      children: [
                          null != A && null != g && (0, r.jsx)(f.Qf, { className: S.NR, label: A, value: g }),
                          null != d ? (0, r.jsx)("div", { className: S.uh, children: d }) : null,
                          E,
                          null != v ? (0, r.jsx)("div", { className: S.Uu, children: v }) : null,
                      ],
                  }),
              ],
          });
}
