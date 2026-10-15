t.d(a, { T_: () => v, Ed: () => g, yg: () => _ });
var l = t(477900),
    n = t(582128),
    r = t(503698),
    i = t.n(r);
if (529845 == t.j) var s = t(815390);
var u = t(683071),
    o = t(725836);
t(321073);
var c = t(901930),
    h = t(900730),
    d = t(123816),
    m = t(580133),
    A = t(169797),
    E = t(270537),
    p = t(652215),
    C = t(583741),
    y = t(105292),
    f = t(66414);
function g(e) {
    let { className: a, shouldShowUnifiedHeader: t, headerBadgeConfig: n } = e;
    return (0, l.jsxs)(l.Fragment, {
        children: [
            t ? (0, l.jsx)(o.UY, { children: (0, l.jsx)(m.f, { headerBadgeConfig: n }) }) : null,
            (0, l.jsx)(A.DJ, { className: i()(f.g4, a) }),
        ],
    });
}
function _() {
    return (0, l.jsx)(A.Jg, {
        transitionState: s.i.ENTERED,
        onClose: p.tEg,
        size: "md",
        isModalContentLoading: !0,
        children: (0, l.jsx)(g, { shouldShowUnifiedHeader: !0 }),
    });
}
function x(e) {
    return null != e && "object" == typeof e && "message" in e && "type" in e
        ? (0, l.jsx)(u.w, { type: e.type, hidden: e.hidden, message: e.message, role: e.role }, e.key)
        : (0, l.jsx)(n.Fragment, { children: e.directContent }, e.key);
}
function P(e) {
    return null == e || "" === e;
}
function T(e) {
    let { children: a, showUpperNoticesAboveGlobalNotices: t = !1 } = e,
        { errorMessage: r, richNotices: i } = (function () {
            let { errorMessage: e } = (0, c.j)({}),
                a = (function () {
                    let { paymentSourceId: e, checkoutPaymentSources: a } = (0, d.t4)((e) => ({
                            paymentSourceId: e.paymentSourceId,
                            checkoutPaymentSources: e.get("checkoutPaymentSources"),
                        })),
                        {
                            relocationCountry: t,
                            relocationCurrencyCode: r,
                            willForfeitGiftCardBalance: i,
                        } = n.useMemo(() => {
                            let t = null != e ? a.find((a) => a.id === e) : null;
                            return {
                                relocationCountry: t?.relocationCountry ?? null,
                                relocationCurrencyCode: t?.relocationCurrencyCode ?? null,
                                willForfeitGiftCardBalance: t?.willForfeitGiftCardBalance ?? !1,
                            };
                        }, [a, e]);
                    return n.useMemo(
                        () =>
                            null == t
                                ? null
                                : {
                                      directContent: (0, l.jsx)(h.c, {
                                          relocationCountry: t,
                                          relocationCurrencyCode: r,
                                          willForfeitGiftCardBalance: i,
                                      }),
                                      key: "store-relocation-notice",
                                  },
                        [t, r, i],
                    );
                })();
            return {
                errorMessage: e,
                richNotices: n.useMemo(() => {
                    let e = [];
                    return (null != a && e.push(a), e);
                }, [a]),
            };
        })(),
        s = n.useRef(null);
    return (
        n.useEffect(() => {
            P(r) || null == s.current || s.current.scrollIntoView({ behavior: "smooth" });
        }, [r]),
        n.useMemo(() => {
            if (!(!P(r) || i.length > 0 || null != a)) return null;
            let e = (0, l.jsxs)(l.Fragment, {
                children: [P(r) ? null : (0, l.jsx)(u.w, { type: "critical", children: r }), i.map(x)],
            });
            return (0, l.jsx)("div", {
                ref: s,
                className: f.dD,
                children: t
                    ? (0, l.jsxs)(l.Fragment, { children: [a, e] })
                    : (0, l.jsxs)(l.Fragment, { children: [e, a] }),
            });
        }, [r, i, a, t])
    );
}
function I(e) {
    return n.useMemo(
        () =>
            null == e
                ? null
                : Array.isArray(e)
                  ? 0 === e.length
                      ? null
                      : (0, l.jsx)(l.Fragment, { children: e.map((e) => x(e)) })
                  : null != e
                    ? x(e)
                    : null,
        [e],
    );
}
function M(e) {
    let { upperInlineNoticeProps: a, shouldShowGlobalNotices: t, showUpperNoticesAboveGlobalNotices: r } = e,
        i = I(a);
    return n.useMemo(
        () =>
            null != i || t
                ? t
                    ? null != i
                        ? (0, l.jsx)(T, { showUpperNoticesAboveGlobalNotices: r, children: i })
                        : (0, l.jsx)(T, {})
                    : (0, l.jsx)("div", { className: f.dD, children: i })
                : null,
        [t, i, r],
    );
}
function v(e) {
    let {
            upperInlineNoticeProps: a,
            planSelectContent: t,
            purchaseItemContent: n,
            subscriptionDetailsContent: r,
            isStepLoading: s,
            paymentMethodContent: u,
            invoiceSummaryContent: c,
            promotionalNoticeContent: h,
            legalContent: d,
            invoiceTotalDueLabel: A = y.intl.string(C.default.R0cZsM),
            invoiceTotalDueValue: p,
            shouldShowGlobalNotices: _,
            showUpperNoticesAboveGlobalNotices: x,
            footerInlineNoticeProps: P,
            headerBadgeConfig: T,
            className: v,
        } = e,
        N = I(P),
        { setCheckoutFooterLineItemNode: L } = (0, o.ck)();
    return s
        ? (0, l.jsx)(g, { className: v, shouldShowUnifiedHeader: !0 })
        : (0, l.jsxs)(l.Fragment, {
              children: [
                  (0, l.jsxs)("div", {
                      className: i()(v, { [f.pg]: null == c }),
                      children: [
                          (0, l.jsx)(M, {
                              upperInlineNoticeProps: a,
                              shouldShowGlobalNotices: _,
                              showUpperNoticesAboveGlobalNotices: x,
                          }),
                          t,
                          null != t && null != n && (0, l.jsx)("div", { className: f.ls }),
                          n,
                          null != r && (0, l.jsx)("div", { className: f.P3, children: r }),
                          (0, l.jsx)("div", { className: f.Jv, children: u }),
                          null != c && (0, l.jsx)("div", { className: f.ZF, children: c }),
                      ],
                  }),
                  (0, l.jsx)(o.UY, { children: (0, l.jsx)(m.f, { headerBadgeConfig: T }) }),
                  (0, l.jsxs)(o.bx, {
                      children: [
                          (0, l.jsx)("div", { ref: L }),
                          null != A && null != p && (0, l.jsx)(E.Qf, { className: f.NR, label: A, value: p }),
                          null != h ? (0, l.jsx)("div", { className: f.uh, children: h }) : null,
                          d,
                          null != N ? (0, l.jsx)("div", { className: f.Uu, children: N }) : null,
                      ],
                  }),
              ],
          });
}
