n.d(t, { T_: () => T, Ed: () => A });
var r = n(477900),
    l = n(582128),
    i = n(503698),
    o = n.n(i),
    u = n(683071),
    s = n(725836);
n(321073);
var a = n(901930),
    c = n(900730),
    d = n(87725),
    E = n(580133),
    C = n(480642),
    h = n(848584);
n(652215);
var S = n(327105),
    _ = n(375708),
    I = n(639563);
function A(e) {
    let { className: t, shouldShowUnifiedHeader: n, headerBadgeConfig: l } = e;
    return (0, r.jsxs)(r.Fragment, {
        children: [
            n ? (0, r.jsx)(s.UY, { children: (0, r.jsx)(E.f, { headerBadgeConfig: l }) }) : null,
            (0, r.jsx)(C.DJ, { className: o()(I.g4, t) }),
        ],
    });
}
function p(e) {
    return null != e && "object" == typeof e && "message" in e && "type" in e
        ? (0, r.jsx)(u.w, { type: e.type, hidden: e.hidden, children: e.message }, e.key)
        : (0, r.jsx)(l.Fragment, { children: e.directContent }, e.key);
}
function f(e) {
    return null == e || "" === e;
}
function m(e) {
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
                richNotices: l.useMemo(() => {
                    let e = [];
                    return null != t && e.push(t), e;
                }, [t]),
            };
        })(),
        s = l.useRef(null);
    return (
        l.useEffect(() => {
            f(i) || null == s.current || s.current.scrollIntoView({ behavior: "smooth" });
        }, [i]),
        l.useMemo(() => {
            if (!(!f(i) || o.length > 0 || null != t)) return null;
            let e = (0, r.jsxs)(r.Fragment, {
                children: [f(i) ? null : (0, r.jsx)(u.w, { type: "critical", children: i }), o.map(p)],
            });
            return (0, r.jsx)("div", {
                ref: s,
                className: I.dD,
                children: n
                    ? (0, r.jsxs)(r.Fragment, { children: [t, e] })
                    : (0, r.jsxs)(r.Fragment, { children: [e, t] }),
            });
        }, [i, o, t, n])
    );
}
function N(e) {
    return l.useMemo(
        () =>
            null == e
                ? null
                : Array.isArray(e)
                  ? 0 === e.length
                      ? null
                      : (0, r.jsx)(r.Fragment, { children: e.map((e) => p(e)) })
                  : null != e
                    ? p(e)
                    : null,
        [e],
    );
}
function g(e) {
    let { upperInlineNoticeProps: t, shouldShowGlobalNotices: n, showUpperNoticesAboveGlobalNotices: i } = e,
        o = N(t);
    return l.useMemo(
        () =>
            null != o || n
                ? n
                    ? null != o
                        ? (0, r.jsx)(m, { showUpperNoticesAboveGlobalNotices: i, children: o })
                        : (0, r.jsx)(m, {})
                    : (0, r.jsx)("div", { className: I.dD, children: o })
                : null,
        [n, o, i],
    );
}
function T(e) {
    let {
            upperInlineNoticeProps: t,
            planSelectContent: n,
            purchaseItemContent: l,
            subscriptionDetailsContent: i,
            isStepLoading: u,
            paymentMethodContent: a,
            invoiceSummaryContent: c,
            promotionalNoticeContent: d,
            legalContent: C,
            invoiceTotalDueLabel: p = _.intl.string(S.default.R0cZsM),
            invoiceTotalDueValue: f,
            shouldShowGlobalNotices: m,
            showUpperNoticesAboveGlobalNotices: T,
            footerInlineNoticeProps: P,
            headerBadgeConfig: y,
            className: R,
        } = e,
        O = N(P);
    return u
        ? (0, r.jsx)(A, { className: R, shouldShowUnifiedHeader: !0 })
        : (0, r.jsxs)(r.Fragment, {
              children: [
                  (0, r.jsxs)("div", {
                      className: o()(R, { [I.pg]: null == c }),
                      children: [
                          (0, r.jsx)(g, {
                              upperInlineNoticeProps: t,
                              shouldShowGlobalNotices: m,
                              showUpperNoticesAboveGlobalNotices: T,
                          }),
                          n,
                          null != n && null != l && (0, r.jsx)("div", { className: I.ls }),
                          l,
                          null != i && (0, r.jsx)("div", { className: I.P3, children: i }),
                          (0, r.jsx)("div", { className: I.Jv, children: a }),
                          null != c && (0, r.jsx)("div", { className: I.ZF, children: c }),
                      ],
                  }),
                  (0, r.jsx)(s.UY, { children: (0, r.jsx)(E.f, { headerBadgeConfig: y }) }),
                  (0, r.jsxs)(s.bx, {
                      children: [
                          null != p && null != f && (0, r.jsx)(h.Qf, { className: I.NR, label: p, value: f }),
                          null != d ? (0, r.jsx)("div", { className: I.uh, children: d }) : null,
                          C,
                          null != O ? (0, r.jsx)("div", { className: I.Uu, children: O }) : null,
                      ],
                  }),
              ],
          });
}
