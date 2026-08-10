n.d(t, { T_: () => R, Ed: () => C, yg: () => N });
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
    h = n(580133),
    S = n(480642),
    A = n(848584),
    I = n(652215),
    _ = n(327105),
    f = n(375708),
    m = n(639563);
function C(e) {
    let { className: t, shouldShowUnifiedHeader: n, headerBadgeConfig: l } = e;
    return (0, r.jsxs)(r.Fragment, {
        children: [
            n ? (0, r.jsx)(a.UY, { children: (0, r.jsx)(h.f, { headerBadgeConfig: l }) }) : null,
            (0, r.jsx)(S.DJ, { className: u()(m.g4, t) }),
        ],
    });
}
function N() {
    return (0, r.jsx)(S.Jg, {
        transitionState: s.i.ENTERED,
        onClose: I.tEg,
        size: "md",
        isModalContentLoading: !0,
        children: (0, r.jsx)(C, { shouldShowUnifiedHeader: !0 }),
    });
}
function g(e) {
    return null != e && "object" == typeof e && "message" in e && "type" in e
        ? (0, r.jsx)(o.w, { type: e.type, hidden: e.hidden, children: e.message }, e.key)
        : (0, r.jsx)(l.Fragment, { children: e.directContent }, e.key);
}
function y(e) {
    return null == e || "" === e;
}
function P(e) {
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
            y(i) || null == s.current || s.current.scrollIntoView({ behavior: "smooth" });
        }, [i]),
        l.useMemo(() => {
            if (!(!y(i) || u.length > 0 || null != t)) return null;
            let e = (0, r.jsxs)(r.Fragment, {
                children: [y(i) ? null : (0, r.jsx)(o.w, { type: "critical", children: i }), u.map(g)],
            });
            return (0, r.jsx)("div", {
                ref: s,
                className: m.dD,
                children: n
                    ? (0, r.jsxs)(r.Fragment, { children: [t, e] })
                    : (0, r.jsxs)(r.Fragment, { children: [e, t] }),
            });
        }, [i, u, t, n])
    );
}
function p(e) {
    return l.useMemo(
        () =>
            null == e
                ? null
                : Array.isArray(e)
                  ? 0 === e.length
                      ? null
                      : (0, r.jsx)(r.Fragment, { children: e.map((e) => g(e)) })
                  : null != e
                    ? g(e)
                    : null,
        [e],
    );
}
function T(e) {
    let { upperInlineNoticeProps: t, shouldShowGlobalNotices: n, showUpperNoticesAboveGlobalNotices: i } = e,
        u = p(t);
    return l.useMemo(
        () =>
            null != u || n
                ? n
                    ? null != u
                        ? (0, r.jsx)(P, { showUpperNoticesAboveGlobalNotices: i, children: u })
                        : (0, r.jsx)(P, {})
                    : (0, r.jsx)("div", { className: m.dD, children: u })
                : null,
        [n, u, i],
    );
}
function R(e) {
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
            invoiceTotalDueLabel: S = f.intl.string(_.default.R0cZsM),
            invoiceTotalDueValue: I,
            shouldShowGlobalNotices: N,
            showUpperNoticesAboveGlobalNotices: g,
            footerInlineNoticeProps: y,
            headerBadgeConfig: P,
            className: R,
        } = e,
        L = p(y);
    return s
        ? (0, r.jsx)(C, { className: R, shouldShowUnifiedHeader: !0 })
        : (0, r.jsxs)(r.Fragment, {
              children: [
                  (0, r.jsxs)("div", {
                      className: u()(R, { [m.pg]: null == c }),
                      children: [
                          (0, r.jsx)(T, {
                              upperInlineNoticeProps: t,
                              shouldShowGlobalNotices: N,
                              showUpperNoticesAboveGlobalNotices: g,
                          }),
                          n,
                          null != n && null != l && (0, r.jsx)("div", { className: m.ls }),
                          l,
                          null != i && (0, r.jsx)("div", { className: m.P3, children: i }),
                          (0, r.jsx)("div", { className: m.Jv, children: o }),
                          null != c && (0, r.jsx)("div", { className: m.ZF, children: c }),
                      ],
                  }),
                  (0, r.jsx)(a.UY, { children: (0, r.jsx)(h.f, { headerBadgeConfig: P }) }),
                  (0, r.jsxs)(a.bx, {
                      children: [
                          null != S && null != I && (0, r.jsx)(A.Qf, { className: m.NR, label: S, value: I }),
                          null != d ? (0, r.jsx)("div", { className: m.uh, children: d }) : null,
                          E,
                          null != L ? (0, r.jsx)("div", { className: m.Uu, children: L }) : null,
                      ],
                  }),
              ],
          });
}
