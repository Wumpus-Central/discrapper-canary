l.d(n, { T_: () => T, Ed: () => j, yg: () => x });
var t = l(477900),
    r = l(582128),
    i = l(503698),
    u = l.n(i);
if (529845 == l.j) var s = l(815390);
var a = l(683071),
    o = l(725836);
l(321073);
var c = l(901930),
    d = l(900730),
    m = l(661899),
    E = l(580133),
    h = l(169797),
    f = l(270537),
    N = l(652215),
    A = l(583741),
    C = l(375708),
    p = l(66414);
function j(e) {
    let { className: n, shouldShowUnifiedHeader: l, headerBadgeConfig: r } = e;
    return (0, t.jsxs)(t.Fragment, {
        children: [
            l ? (0, t.jsx)(o.UY, { children: (0, t.jsx)(E.f, { headerBadgeConfig: r }) }) : null,
            (0, t.jsx)(h.DJ, { className: u()(p.g4, n) }),
        ],
    });
}
function x() {
    return (0, t.jsx)(h.Jg, {
        transitionState: s.i.ENTERED,
        onClose: N.tEg,
        size: "md",
        isModalContentLoading: !0,
        children: (0, t.jsx)(j, { shouldShowUnifiedHeader: !0 }),
    });
}
function _(e) {
    return null != e && "object" == typeof e && "message" in e && "type" in e
        ? (0, t.jsx)(a.w, { type: e.type, hidden: e.hidden, children: e.message }, e.key)
        : (0, t.jsx)(r.Fragment, { children: e.directContent }, e.key);
}
function g(e) {
    return null == e || "" === e;
}
function y(e) {
    let { children: n, showUpperNoticesAboveGlobalNotices: l = !1 } = e,
        { errorMessage: i, richNotices: u } = (function () {
            let { errorMessage: e } = (0, c.j)({}),
                n = (function () {
                    let { paymentSourceId: e, checkoutPaymentSources: n } = (0, m.t4)((e) => ({
                            paymentSourceId: e.paymentSourceId,
                            checkoutPaymentSources: e.get("checkoutPaymentSources"),
                        })),
                        {
                            relocationCountry: l,
                            relocationCurrencyCode: i,
                            willForfeitGiftCardBalance: u,
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
                                          willForfeitGiftCardBalance: u,
                                      }),
                                      key: "store-relocation-notice",
                                  },
                        [l, i, u],
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
            g(i) || null == s.current || s.current.scrollIntoView({ behavior: "smooth" });
        }, [i]),
        r.useMemo(() => {
            if (!(!g(i) || u.length > 0 || null != n)) return null;
            let e = (0, t.jsxs)(t.Fragment, {
                children: [g(i) ? null : (0, t.jsx)(a.w, { type: "critical", children: i }), u.map(_)],
            });
            return (0, t.jsx)("div", {
                ref: s,
                className: p.dD,
                children: l
                    ? (0, t.jsxs)(t.Fragment, { children: [n, e] })
                    : (0, t.jsxs)(t.Fragment, { children: [e, n] }),
            });
        }, [i, u, n, l])
    );
}
function v(e) {
    return r.useMemo(
        () =>
            null == e
                ? null
                : Array.isArray(e)
                  ? 0 === e.length
                      ? null
                      : (0, t.jsx)(t.Fragment, { children: e.map((e) => _(e)) })
                  : null != e
                    ? _(e)
                    : null,
        [e],
    );
}
function I(e) {
    let { upperInlineNoticeProps: n, shouldShowGlobalNotices: l, showUpperNoticesAboveGlobalNotices: i } = e,
        u = v(n);
    return r.useMemo(
        () =>
            null != u || l
                ? l
                    ? null != u
                        ? (0, t.jsx)(y, { showUpperNoticesAboveGlobalNotices: i, children: u })
                        : (0, t.jsx)(y, {})
                    : (0, t.jsx)("div", { className: p.dD, children: u })
                : null,
        [l, u, i],
    );
}
function T(e) {
    let {
            upperInlineNoticeProps: n,
            planSelectContent: l,
            purchaseItemContent: r,
            subscriptionDetailsContent: i,
            isStepLoading: s,
            paymentMethodContent: a,
            invoiceSummaryContent: c,
            promotionalNoticeContent: d,
            legalContent: m,
            invoiceTotalDueLabel: h = C.intl.string(A.default.R0cZsM),
            invoiceTotalDueValue: N,
            shouldShowGlobalNotices: x,
            showUpperNoticesAboveGlobalNotices: _,
            footerInlineNoticeProps: g,
            headerBadgeConfig: y,
            className: T,
        } = e,
        S = v(g),
        { setCheckoutFooterLineItemNode: G } = (0, o.ck)();
    return s
        ? (0, t.jsx)(j, { className: T, shouldShowUnifiedHeader: !0 })
        : (0, t.jsxs)(t.Fragment, {
              children: [
                  (0, t.jsxs)("div", {
                      className: u()(T, { [p.pg]: null == c }),
                      children: [
                          (0, t.jsx)(I, {
                              upperInlineNoticeProps: n,
                              shouldShowGlobalNotices: x,
                              showUpperNoticesAboveGlobalNotices: _,
                          }),
                          l,
                          null != l && null != r && (0, t.jsx)("div", { className: p.ls }),
                          r,
                          null != i && (0, t.jsx)("div", { className: p.P3, children: i }),
                          (0, t.jsx)("div", { className: p.Jv, children: a }),
                          null != c && (0, t.jsx)("div", { className: p.ZF, children: c }),
                      ],
                  }),
                  (0, t.jsx)(o.UY, { children: (0, t.jsx)(E.f, { headerBadgeConfig: y }) }),
                  (0, t.jsxs)(o.bx, {
                      children: [
                          (0, t.jsx)("div", { ref: G }),
                          null != h && null != N && (0, t.jsx)(f.Qf, { className: p.NR, label: h, value: N }),
                          null != d ? (0, t.jsx)("div", { className: p.uh, children: d }) : null,
                          m,
                          null != S ? (0, t.jsx)("div", { className: p.Uu, children: S }) : null,
                      ],
                  }),
              ],
          });
}
