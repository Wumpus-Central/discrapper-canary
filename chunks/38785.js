l.d(n, { T_: () => T, Ed: () => x, yg: () => C });
var t = l(477900),
    r = l(582128),
    i = l(503698),
    a = l.n(i);
if (529845 == l.j) var s = l(815390);
var u = l(683071),
    c = l(725836);
l(321073);
var o = l(901930),
    d = l(900730),
    m = l(642639),
    h = l(580133),
    f = l(169797),
    E = l(270537),
    A = l(652215),
    N = l(583741),
    p = l(660183),
    g = l(66414);
function x(e) {
    let { className: n, shouldShowUnifiedHeader: l, headerBadgeConfig: r } = e;
    return (0, t.jsxs)(t.Fragment, {
        children: [
            l ? (0, t.jsx)(c.UY, { children: (0, t.jsx)(h.f, { headerBadgeConfig: r }) }) : null,
            (0, t.jsx)(f.DJ, { className: a()(g.g4, n) }),
        ],
    });
}
function C() {
    return (0, t.jsx)(f.Jg, {
        transitionState: s.i.ENTERED,
        onClose: A.tEg,
        size: "md",
        isModalContentLoading: !0,
        children: (0, t.jsx)(x, { shouldShowUnifiedHeader: !0 }),
    });
}
function j(e) {
    return null != e && "object" == typeof e && "message" in e && "type" in e
        ? (0, t.jsx)(u.w, { type: e.type, hidden: e.hidden, children: e.message }, e.key)
        : (0, t.jsx)(r.Fragment, { children: e.directContent }, e.key);
}
function v(e) {
    return null == e || "" === e;
}
function _(e) {
    let { children: n, showUpperNoticesAboveGlobalNotices: l = !1 } = e,
        { errorMessage: i, richNotices: a } = (function () {
            let { errorMessage: e } = (0, o.j)({}),
                n = (function () {
                    let { paymentSourceId: e, checkoutPaymentSources: n } = (0, m.t4)((e) => ({
                            paymentSourceId: e.paymentSourceId,
                            checkoutPaymentSources: e.get("checkoutPaymentSources"),
                        })),
                        {
                            relocationCountry: l,
                            relocationCurrencyCode: i,
                            willForfeitGiftCardBalance: a,
                        } = r.useMemo(() => {
                            let l = null != e ? n.find((n) => n.id === e) : null;
                            return {
                                relocationCountry: l?.relocationCountry ?? null,
                                relocationCurrencyCode: l?.relocationCurrencyCode ?? null,
                                willForfeitGiftCardBalance: l?.willForfeitGiftCardBalance ?? !1,
                            };
                        }, [n, e]);
                    return r.useMemo(
                        () =>
                            null == l
                                ? null
                                : {
                                      directContent: (0, t.jsx)(d.c, {
                                          relocationCountry: l,
                                          relocationCurrencyCode: i,
                                          willForfeitGiftCardBalance: a,
                                      }),
                                      key: "store-relocation-notice",
                                  },
                        [l, i, a],
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
            v(i) || null == s.current || s.current.scrollIntoView({ behavior: "smooth" });
        }, [i]),
        r.useMemo(() => {
            if (!(!v(i) || a.length > 0 || null != n)) return null;
            let e = (0, t.jsxs)(t.Fragment, {
                children: [v(i) ? null : (0, t.jsx)(u.w, { type: "critical", children: i }), a.map(j)],
            });
            return (0, t.jsx)("div", {
                ref: s,
                className: g.dD,
                children: l
                    ? (0, t.jsxs)(t.Fragment, { children: [n, e] })
                    : (0, t.jsxs)(t.Fragment, { children: [e, n] }),
            });
        }, [i, a, n, l])
    );
}
function y(e) {
    return r.useMemo(
        () =>
            null == e
                ? null
                : Array.isArray(e)
                  ? 0 === e.length
                      ? null
                      : (0, t.jsx)(t.Fragment, { children: e.map((e) => j(e)) })
                  : null != e
                    ? j(e)
                    : null,
        [e],
    );
}
function I(e) {
    let { upperInlineNoticeProps: n, shouldShowGlobalNotices: l, showUpperNoticesAboveGlobalNotices: i } = e,
        a = y(n);
    return r.useMemo(
        () =>
            null != a || l
                ? l
                    ? null != a
                        ? (0, t.jsx)(_, { showUpperNoticesAboveGlobalNotices: i, children: a })
                        : (0, t.jsx)(_, {})
                    : (0, t.jsx)("div", { className: g.dD, children: a })
                : null,
        [l, a, i],
    );
}
function T(e) {
    let {
            upperInlineNoticeProps: n,
            planSelectContent: l,
            purchaseItemContent: r,
            subscriptionDetailsContent: i,
            isStepLoading: s,
            paymentMethodContent: u,
            invoiceSummaryContent: o,
            promotionalNoticeContent: d,
            legalContent: m,
            invoiceTotalDueLabel: f = p.intl.string(N.default.R0cZsM),
            invoiceTotalDueValue: A,
            shouldShowGlobalNotices: C,
            showUpperNoticesAboveGlobalNotices: j,
            footerInlineNoticeProps: v,
            headerBadgeConfig: _,
            className: T,
        } = e,
        S = y(v),
        { setCheckoutFooterLineItemNode: b } = (0, c.ck)();
    return s
        ? (0, t.jsx)(x, { className: T, shouldShowUnifiedHeader: !0 })
        : (0, t.jsxs)(t.Fragment, {
              children: [
                  (0, t.jsxs)("div", {
                      className: a()(T, { [g.pg]: null == o }),
                      children: [
                          (0, t.jsx)(I, {
                              upperInlineNoticeProps: n,
                              shouldShowGlobalNotices: C,
                              showUpperNoticesAboveGlobalNotices: j,
                          }),
                          l,
                          null != l && null != r && (0, t.jsx)("div", { className: g.ls }),
                          r,
                          null != i && (0, t.jsx)("div", { className: g.P3, children: i }),
                          (0, t.jsx)("div", { className: g.Jv, children: u }),
                          null != o && (0, t.jsx)("div", { className: g.ZF, children: o }),
                      ],
                  }),
                  (0, t.jsx)(c.UY, { children: (0, t.jsx)(h.f, { headerBadgeConfig: _ }) }),
                  (0, t.jsxs)(c.bx, {
                      children: [
                          (0, t.jsx)("div", { ref: b }),
                          null != f && null != A && (0, t.jsx)(E.Qf, { className: g.NR, label: f, value: A }),
                          null != d ? (0, t.jsx)("div", { className: g.uh, children: d }) : null,
                          m,
                          null != S ? (0, t.jsx)("div", { className: g.Uu, children: S }) : null,
                      ],
                  }),
              ],
          });
}
