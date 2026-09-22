r.d(n, { T_: () => _, Ed: () => N, yg: () => j });
var t = r(477900),
    l = r(582128),
    i = r(503698),
    s = r.n(i);
if (529845 == r.j) var o = r(815390);
var a = r(683071),
    c = r(725836);
r(321073);
var u = r(901930),
    d = r(900730),
    h = r(263532),
    m = r(580133),
    x = r(169797),
    E = r(270537),
    f = r(652215),
    g = r(583741),
    p = r(375708),
    A = r(66414);
function N(e) {
    let { className: n, shouldShowUnifiedHeader: r, headerBadgeConfig: l } = e;
    return (0, t.jsxs)(t.Fragment, {
        children: [
            r ? (0, t.jsx)(c.UY, { children: (0, t.jsx)(m.f, { headerBadgeConfig: l }) }) : null,
            (0, t.jsx)(x.DJ, { className: s()(A.g4, n) }),
        ],
    });
}
function j() {
    return (0, t.jsx)(x.Jg, {
        transitionState: o.i.ENTERED,
        onClose: f.tEg,
        size: "md",
        isModalContentLoading: !0,
        children: (0, t.jsx)(N, { shouldShowUnifiedHeader: !0 }),
    });
}
function C(e) {
    return null != e && "object" == typeof e && "message" in e && "type" in e
        ? (0, t.jsx)(a.w, { type: e.type, hidden: e.hidden, children: e.message }, e.key)
        : (0, t.jsx)(l.Fragment, { children: e.directContent }, e.key);
}
function v(e) {
    return null == e || "" === e;
}
function I(e) {
    let { children: n, showUpperNoticesAboveGlobalNotices: r = !1 } = e,
        { errorMessage: i, richNotices: s } = (function () {
            let { errorMessage: e } = (0, u.j)({}),
                n = (function () {
                    let { paymentSourceId: e, checkoutPaymentSources: n } = (0, h.t4)((e) => ({
                            paymentSourceId: e.paymentSourceId,
                            checkoutPaymentSources: e.get("checkoutPaymentSources"),
                        })),
                        {
                            relocationCountry: r,
                            relocationCurrencyCode: i,
                            willForfeitGiftCardBalance: s,
                        } = l.useMemo(() => {
                            let r = null != e ? n.find((n) => n.id === e) : null;
                            return {
                                relocationCountry: r?.relocationCountry ?? null,
                                relocationCurrencyCode: r?.relocationCurrencyCode ?? null,
                                willForfeitGiftCardBalance: r?.willForfeitGiftCardBalance ?? !1,
                            };
                        }, [n, e]);
                    return l.useMemo(
                        () =>
                            null == r
                                ? null
                                : {
                                      directContent: (0, t.jsx)(d.c, {
                                          relocationCountry: r,
                                          relocationCurrencyCode: i,
                                          willForfeitGiftCardBalance: s,
                                      }),
                                      key: "store-relocation-notice",
                                  },
                        [r, i, s],
                    );
                })();
            return {
                errorMessage: e,
                richNotices: l.useMemo(() => {
                    let e = [];
                    return (null != n && e.push(n), e);
                }, [n]),
            };
        })(),
        o = l.useRef(null);
    return (
        l.useEffect(() => {
            v(i) || null == o.current || o.current.scrollIntoView({ behavior: "smooth" });
        }, [i]),
        l.useMemo(() => {
            if (!(!v(i) || s.length > 0 || null != n)) return null;
            let e = (0, t.jsxs)(t.Fragment, {
                children: [v(i) ? null : (0, t.jsx)(a.w, { type: "critical", children: i }), s.map(C)],
            });
            return (0, t.jsx)("div", {
                ref: o,
                className: A.dD,
                children: r
                    ? (0, t.jsxs)(t.Fragment, { children: [n, e] })
                    : (0, t.jsxs)(t.Fragment, { children: [e, n] }),
            });
        }, [i, s, n, r])
    );
}
function y(e) {
    return l.useMemo(
        () =>
            null == e
                ? null
                : Array.isArray(e)
                  ? 0 === e.length
                      ? null
                      : (0, t.jsx)(t.Fragment, { children: e.map((e) => C(e)) })
                  : null != e
                    ? C(e)
                    : null,
        [e],
    );
}
function S(e) {
    let { upperInlineNoticeProps: n, shouldShowGlobalNotices: r, showUpperNoticesAboveGlobalNotices: i } = e,
        s = y(n);
    return l.useMemo(
        () =>
            null != s || r
                ? r
                    ? null != s
                        ? (0, t.jsx)(I, { showUpperNoticesAboveGlobalNotices: i, children: s })
                        : (0, t.jsx)(I, {})
                    : (0, t.jsx)("div", { className: A.dD, children: s })
                : null,
        [r, s, i],
    );
}
function _(e) {
    let {
            upperInlineNoticeProps: n,
            planSelectContent: r,
            purchaseItemContent: l,
            subscriptionDetailsContent: i,
            isStepLoading: o,
            paymentMethodContent: a,
            invoiceSummaryContent: u,
            promotionalNoticeContent: d,
            legalContent: h,
            invoiceTotalDueLabel: x = p.intl.string(g.default.R0cZsM),
            invoiceTotalDueValue: f,
            shouldShowGlobalNotices: j,
            showUpperNoticesAboveGlobalNotices: C,
            footerInlineNoticeProps: v,
            headerBadgeConfig: I,
            className: _,
        } = e,
        L = y(v),
        { setCheckoutFooterLineItemNode: G } = (0, c.ck)();
    return o
        ? (0, t.jsx)(N, { className: _, shouldShowUnifiedHeader: !0 })
        : (0, t.jsxs)(t.Fragment, {
              children: [
                  (0, t.jsxs)("div", {
                      className: s()(_, { [A.pg]: null == u }),
                      children: [
                          (0, t.jsx)(S, {
                              upperInlineNoticeProps: n,
                              shouldShowGlobalNotices: j,
                              showUpperNoticesAboveGlobalNotices: C,
                          }),
                          r,
                          null != r && null != l && (0, t.jsx)("div", { className: A.ls }),
                          l,
                          null != i && (0, t.jsx)("div", { className: A.P3, children: i }),
                          (0, t.jsx)("div", { className: A.Jv, children: a }),
                          null != u && (0, t.jsx)("div", { className: A.ZF, children: u }),
                      ],
                  }),
                  (0, t.jsx)(c.UY, { children: (0, t.jsx)(m.f, { headerBadgeConfig: I }) }),
                  (0, t.jsxs)(c.bx, {
                      children: [
                          (0, t.jsx)("div", { ref: G }),
                          null != x && null != f && (0, t.jsx)(E.Qf, { className: A.NR, label: x, value: f }),
                          null != d ? (0, t.jsx)("div", { className: A.uh, children: d }) : null,
                          h,
                          null != L ? (0, t.jsx)("div", { className: A.Uu, children: L }) : null,
                      ],
                  }),
              ],
          });
}
