n.d(t, { T_: () => A, Ed: () => E });
var r = n(477900),
    l = n(582128),
    o = n(503698),
    i = n.n(o),
    a = n(683071),
    s = n(725836);
n(321073);
var u = n(901930),
    c = n(900730),
    d = n(721836),
    h = n(580133),
    C = n(169797),
    m = n(270537);
n(652215);
var p = n(649975),
    f = n(375708),
    g = n(66414);
function E(e) {
    let { className: t, shouldShowUnifiedHeader: n, headerBadgeConfig: l } = e;
    return (0, r.jsxs)(r.Fragment, {
        children: [
            n ? (0, r.jsx)(s.UY, { children: (0, r.jsx)(h.f, { headerBadgeConfig: l }) }) : null,
            (0, r.jsx)(C.DJ, { className: i()(g.g4, t) }),
        ],
    });
}
function S(e) {
    return null != e && "object" == typeof e && "message" in e && "type" in e
        ? (0, r.jsx)(a.w, { type: e.type, hidden: e.hidden, children: e.message }, e.key)
        : (0, r.jsx)(l.Fragment, { children: e.directContent }, e.key);
}
function y(e) {
    return null == e || "" === e;
}
function x(e) {
    let { children: t, showUpperNoticesAboveGlobalNotices: n = !1 } = e,
        { errorMessage: o, richNotices: i } = (function () {
            let { errorMessage: e } = (0, u.j)({}),
                t = (function () {
                    let { paymentSourceId: e, checkoutPaymentSources: t } = (0, d.t4)((e) => ({
                            paymentSourceId: e.paymentSourceId,
                            checkoutPaymentSources: e.get("checkoutPaymentSources"),
                        })),
                        {
                            relocationCountry: n,
                            relocationCurrencyCode: o,
                            willForfeitGiftCardBalance: i,
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
                                      directContent: (0, r.jsx)(c.c, {
                                          relocationCountry: n,
                                          relocationCurrencyCode: o,
                                          willForfeitGiftCardBalance: i,
                                      }),
                                      key: "store-relocation-notice",
                                  },
                        [n, o, i],
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
            y(o) || null == s.current || s.current.scrollIntoView({ behavior: "smooth" });
        }, [o]),
        l.useMemo(() => {
            if (!(!y(o) || i.length > 0 || null != t)) return null;
            let e = (0, r.jsxs)(r.Fragment, {
                children: [y(o) ? null : (0, r.jsx)(a.w, { type: "critical", children: o }), i.map(S)],
            });
            return (0, r.jsx)("div", {
                ref: s,
                className: g.dD,
                children: n
                    ? (0, r.jsxs)(r.Fragment, { children: [t, e] })
                    : (0, r.jsxs)(r.Fragment, { children: [e, t] }),
            });
        }, [o, i, t, n])
    );
}
function _(e) {
    return l.useMemo(
        () =>
            null == e
                ? null
                : Array.isArray(e)
                  ? 0 === e.length
                      ? null
                      : (0, r.jsx)(r.Fragment, { children: e.map((e) => S(e)) })
                  : null != e
                    ? S(e)
                    : null,
        [e],
    );
}
function I(e) {
    let { upperInlineNoticeProps: t, shouldShowGlobalNotices: n, showUpperNoticesAboveGlobalNotices: o } = e,
        i = _(t);
    return l.useMemo(
        () =>
            null != i || n
                ? n
                    ? null != i
                        ? (0, r.jsx)(x, { showUpperNoticesAboveGlobalNotices: o, children: i })
                        : (0, r.jsx)(x, {})
                    : (0, r.jsx)("div", { className: g.dD, children: i })
                : null,
        [n, i, o],
    );
}
function A(e) {
    let {
            upperInlineNoticeProps: t,
            planSelectContent: n,
            purchaseItemContent: l,
            subscriptionDetailsContent: o,
            isStepLoading: a,
            paymentMethodContent: u,
            invoiceSummaryContent: c,
            promotionalNoticeContent: d,
            legalContent: C,
            invoiceTotalDueLabel: S = f.intl.string(p.default.R0cZsM),
            invoiceTotalDueValue: y,
            shouldShowGlobalNotices: x,
            showUpperNoticesAboveGlobalNotices: A,
            footerInlineNoticeProps: k,
            headerBadgeConfig: v,
            className: N,
        } = e,
        j = _(k);
    return a
        ? (0, r.jsx)(E, { className: N, shouldShowUnifiedHeader: !0 })
        : (0, r.jsxs)(r.Fragment, {
              children: [
                  (0, r.jsxs)("div", {
                      className: i()(N, { [g.pg]: null == c }),
                      children: [
                          (0, r.jsx)(I, {
                              upperInlineNoticeProps: t,
                              shouldShowGlobalNotices: x,
                              showUpperNoticesAboveGlobalNotices: A,
                          }),
                          n,
                          null != n && null != l && (0, r.jsx)("div", { className: g.ls }),
                          l,
                          null != o && (0, r.jsx)("div", { className: g.P3, children: o }),
                          (0, r.jsx)("div", { className: g.Jv, children: u }),
                          null != c && (0, r.jsx)("div", { className: g.ZF, children: c }),
                      ],
                  }),
                  (0, r.jsx)(s.UY, { children: (0, r.jsx)(h.f, { headerBadgeConfig: v }) }),
                  (0, r.jsxs)(s.bx, {
                      children: [
                          null != S && null != y && (0, r.jsx)(m.Qf, { className: g.NR, label: S, value: y }),
                          null != d ? (0, r.jsx)("div", { className: g.uh, children: d }) : null,
                          C,
                          null != j ? (0, r.jsx)("div", { className: g.Uu, children: j }) : null,
                      ],
                  }),
              ],
          });
}
