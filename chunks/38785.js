t.d(n, { T_: () => T, Ed: () => C, yg: () => x });
var l = t(477900),
    r = t(582128),
    i = t(503698),
    a = t.n(i);
if (529845 == t.j) var s = t(815390);
var u = t(683071),
    c = t(725836);
t(321073);
var o = t(901930),
    d = t(900730),
    m = t(642639),
    h = t(580133),
    E = t(169797),
    f = t(270537),
    A = t(652215),
    p = t(649975),
    N = t(660183),
    g = t(66414);
function C(e) {
    let { className: n, shouldShowUnifiedHeader: t, headerBadgeConfig: r } = e;
    return (0, l.jsxs)(l.Fragment, {
        children: [
            t ? (0, l.jsx)(c.UY, { children: (0, l.jsx)(h.f, { headerBadgeConfig: r }) }) : null,
            (0, l.jsx)(E.DJ, { className: a()(g.g4, n) }),
        ],
    });
}
function x() {
    return (0, l.jsx)(E.Jg, {
        transitionState: s.i.ENTERED,
        onClose: A.tEg,
        size: "md",
        isModalContentLoading: !0,
        children: (0, l.jsx)(C, { shouldShowUnifiedHeader: !0 }),
    });
}
function y(e) {
    return null != e && "object" == typeof e && "message" in e && "type" in e
        ? (0, l.jsx)(u.w, { type: e.type, hidden: e.hidden, children: e.message }, e.key)
        : (0, l.jsx)(r.Fragment, { children: e.directContent }, e.key);
}
function j(e) {
    return null == e || "" === e;
}
function v(e) {
    let { children: n, showUpperNoticesAboveGlobalNotices: t = !1 } = e,
        { errorMessage: i, richNotices: a } = (function () {
            let { errorMessage: e } = (0, o.j)({}),
                n = (function () {
                    let { paymentSourceId: e, checkoutPaymentSources: n } = (0, m.t4)((e) => ({
                            paymentSourceId: e.paymentSourceId,
                            checkoutPaymentSources: e.get("checkoutPaymentSources"),
                        })),
                        {
                            relocationCountry: t,
                            relocationCurrencyCode: i,
                            willForfeitGiftCardBalance: a,
                        } = r.useMemo(() => {
                            let t = null != e ? n.find((n) => n.id === e) : null;
                            return {
                                relocationCountry: t?.relocationCountry ?? null,
                                relocationCurrencyCode: t?.relocationCurrencyCode ?? null,
                                willForfeitGiftCardBalance: t?.willForfeitGiftCardBalance ?? !1,
                            };
                        }, [n, e]);
                    return r.useMemo(
                        () =>
                            null == t
                                ? null
                                : {
                                      directContent: (0, l.jsx)(d.c, {
                                          relocationCountry: t,
                                          relocationCurrencyCode: i,
                                          willForfeitGiftCardBalance: a,
                                      }),
                                      key: "store-relocation-notice",
                                  },
                        [t, i, a],
                    );
                })();
            return {
                errorMessage: e,
                richNotices: r.useMemo(() => {
                    let e = [];
                    return (null != n && e.push(n), e);
                }, [n]),
            };
        })(),
        s = r.useRef(null);
    return (
        r.useEffect(() => {
            j(i) || null == s.current || s.current.scrollIntoView({ behavior: "smooth" });
        }, [i]),
        r.useMemo(() => {
            if (!(!j(i) || a.length > 0 || null != n)) return null;
            let e = (0, l.jsxs)(l.Fragment, {
                children: [j(i) ? null : (0, l.jsx)(u.w, { type: "critical", children: i }), a.map(y)],
            });
            return (0, l.jsx)("div", {
                ref: s,
                className: g.dD,
                children: t
                    ? (0, l.jsxs)(l.Fragment, { children: [n, e] })
                    : (0, l.jsxs)(l.Fragment, { children: [e, n] }),
            });
        }, [i, a, n, t])
    );
}
function _(e) {
    return r.useMemo(
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
function I(e) {
    let { upperInlineNoticeProps: n, shouldShowGlobalNotices: t, showUpperNoticesAboveGlobalNotices: i } = e,
        a = _(n);
    return r.useMemo(
        () =>
            null != a || t
                ? t
                    ? null != a
                        ? (0, l.jsx)(v, { showUpperNoticesAboveGlobalNotices: i, children: a })
                        : (0, l.jsx)(v, {})
                    : (0, l.jsx)("div", { className: g.dD, children: a })
                : null,
        [t, a, i],
    );
}
function T(e) {
    let {
            upperInlineNoticeProps: n,
            planSelectContent: t,
            purchaseItemContent: r,
            subscriptionDetailsContent: i,
            isStepLoading: s,
            paymentMethodContent: u,
            invoiceSummaryContent: o,
            promotionalNoticeContent: d,
            legalContent: m,
            invoiceTotalDueLabel: E = N.intl.string(p.default.R0cZsM),
            invoiceTotalDueValue: A,
            shouldShowGlobalNotices: x,
            showUpperNoticesAboveGlobalNotices: y,
            footerInlineNoticeProps: j,
            headerBadgeConfig: v,
            className: T,
        } = e,
        S = _(j),
        { setCheckoutFooterLineItemNode: b } = (0, c.ck)();
    return s
        ? (0, l.jsx)(C, { className: T, shouldShowUnifiedHeader: !0 })
        : (0, l.jsxs)(l.Fragment, {
              children: [
                  (0, l.jsxs)("div", {
                      className: a()(T, { [g.pg]: null == o }),
                      children: [
                          (0, l.jsx)(I, {
                              upperInlineNoticeProps: n,
                              shouldShowGlobalNotices: x,
                              showUpperNoticesAboveGlobalNotices: y,
                          }),
                          t,
                          null != t && null != r && (0, l.jsx)("div", { className: g.ls }),
                          r,
                          null != i && (0, l.jsx)("div", { className: g.P3, children: i }),
                          (0, l.jsx)("div", { className: g.Jv, children: u }),
                          null != o && (0, l.jsx)("div", { className: g.ZF, children: o }),
                      ],
                  }),
                  (0, l.jsx)(c.UY, { children: (0, l.jsx)(h.f, { headerBadgeConfig: v }) }),
                  (0, l.jsxs)(c.bx, {
                      children: [
                          (0, l.jsx)("div", { ref: b }),
                          null != E && null != A && (0, l.jsx)(f.Qf, { className: g.NR, label: E, value: A }),
                          null != d ? (0, l.jsx)("div", { className: g.uh, children: d }) : null,
                          m,
                          null != S ? (0, l.jsx)("div", { className: g.Uu, children: S }) : null,
                      ],
                  }),
              ],
          });
}
