n.d(t, { T_: () => y, Ed: () => S, yg: () => g });
var r = n(477900),
    l = n(582128),
    i = n(503698),
    u = n.n(i);
if (29845 == n.j) var s = n(815390);
var o = n(683071),
    a = n(725836);
n(321073);
var c = n(901930),
    d = n(900730),
    E = n(87725),
    A = n(580133),
    _ = n(480642),
    N = n(848584),
    h = n(652215),
    I = n(327105),
    f = n(375708),
    C = n(639563);
function S(e) {
    let { className: t, shouldShowUnifiedHeader: n, headerBadgeConfig: l } = e;
    return (0, r.jsxs)(r.Fragment, {
        children: [
            n ? (0, r.jsx)(a.UY, { children: (0, r.jsx)(A.f, { headerBadgeConfig: l }) }) : null,
            (0, r.jsx)(_.DJ, { className: u()(C.g4, t) }),
        ],
    });
}
function g() {
    return (0, r.jsx)(_.Jg, {
        transitionState: s.i.ENTERED,
        onClose: h.tEg,
        size: "md",
        isModalContentLoading: !0,
        children: (0, r.jsx)(S, { shouldShowUnifiedHeader: !0 }),
    });
}
function T(e) {
    return null != e && "object" == typeof e && "message" in e && "type" in e
        ? (0, r.jsx)(o.w, { type: e.type, hidden: e.hidden, children: e.message }, e.key)
        : (0, r.jsx)(l.Fragment, { children: e.directContent }, e.key);
}
function m(e) {
    return null == e || "" === e;
}
function p(e) {
    let { children: t, showUpperNoticesAboveGlobalNotices: n = !1 } = e,
        { errorMessage: i, richNotices: u } = (function () {
            let { errorMessage: e } = (0, c.j)({}),
                t = (function () {
                    let { paymentSourceId: e, checkoutPaymentSources: t } = (0, E.t4)((e) => ({
                            paymentSourceId: e.paymentSourceId,
                            checkoutPaymentSources: e.get("checkoutPaymentSources"),
                        })),
                        {
                            relocationCountry: n,
                            relocationCurrencyCode: i,
                            willForfeitGiftCardBalance: u,
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
                                          willForfeitGiftCardBalance: u,
                                      }),
                                      key: "store-relocation-notice",
                                  },
                        [n, i, u],
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
            m(i) || null == s.current || s.current.scrollIntoView({ behavior: "smooth" });
        }, [i]),
        l.useMemo(() => {
            if (!(!m(i) || u.length > 0 || null != t)) return null;
            let e = (0, r.jsxs)(r.Fragment, {
                children: [m(i) ? null : (0, r.jsx)(o.w, { type: "critical", children: i }), u.map(T)],
            });
            return (0, r.jsx)("div", {
                ref: s,
                className: C.dD,
                children: n
                    ? (0, r.jsxs)(r.Fragment, { children: [t, e] })
                    : (0, r.jsxs)(r.Fragment, { children: [e, t] }),
            });
        }, [i, u, t, n])
    );
}
function R(e) {
    return l.useMemo(
        () =>
            null == e
                ? null
                : Array.isArray(e)
                  ? 0 === e.length
                      ? null
                      : (0, r.jsx)(r.Fragment, { children: e.map((e) => T(e)) })
                  : null != e
                    ? T(e)
                    : null,
        [e],
    );
}
function L(e) {
    let { upperInlineNoticeProps: t, shouldShowGlobalNotices: n, showUpperNoticesAboveGlobalNotices: i } = e,
        u = R(t);
    return l.useMemo(
        () =>
            null != u || n
                ? n
                    ? null != u
                        ? (0, r.jsx)(p, { showUpperNoticesAboveGlobalNotices: i, children: u })
                        : (0, r.jsx)(p, {})
                    : (0, r.jsx)("div", { className: C.dD, children: u })
                : null,
        [n, u, i],
    );
}
function y(e) {
    let {
            upperInlineNoticeProps: t,
            planSelectContent: n,
            purchaseItemContent: l,
            subscriptionDetailsContent: i,
            isStepLoading: s,
            paymentMethodContent: o,
            invoiceSummaryContent: c,
            promotionalNoticeContent: d,
            legalContent: E,
            invoiceTotalDueLabel: _ = f.intl.string(I.default.R0cZsM),
            invoiceTotalDueValue: h,
            shouldShowGlobalNotices: g,
            showUpperNoticesAboveGlobalNotices: T,
            footerInlineNoticeProps: m,
            headerBadgeConfig: p,
            className: y,
        } = e,
        P = R(m);
    return s
        ? (0, r.jsx)(S, { className: y, shouldShowUnifiedHeader: !0 })
        : (0, r.jsxs)(r.Fragment, {
              children: [
                  (0, r.jsxs)("div", {
                      className: u()(y, { [C.pg]: null == c }),
                      children: [
                          (0, r.jsx)(L, {
                              upperInlineNoticeProps: t,
                              shouldShowGlobalNotices: g,
                              showUpperNoticesAboveGlobalNotices: T,
                          }),
                          n,
                          null != n && null != l && (0, r.jsx)("div", { className: C.ls }),
                          l,
                          null != i && (0, r.jsx)("div", { className: C.P3, children: i }),
                          (0, r.jsx)("div", { className: C.Jv, children: o }),
                          null != c && (0, r.jsx)("div", { className: C.ZF, children: c }),
                      ],
                  }),
                  (0, r.jsx)(a.UY, { children: (0, r.jsx)(A.f, { headerBadgeConfig: p }) }),
                  (0, r.jsxs)(a.bx, {
                      children: [
                          null != _ && null != h && (0, r.jsx)(N.Qf, { className: C.NR, label: _, value: h }),
                          null != d ? (0, r.jsx)("div", { className: C.uh, children: d }) : null,
                          E,
                          null != P ? (0, r.jsx)("div", { className: C.Uu, children: P }) : null,
                      ],
                  }),
              ],
          });
}
