n.d(t, { T_: () => R, Ed: () => p });
var l = n(627968),
    r = n(64700),
    i = n(503698),
    o = n.n(i),
    s = n(683071),
    a = n(725836);
n(321073);
var u = n(525723),
    c = n(901930),
    d = n(6938),
    E = n(900730),
    C = n(426398),
    h = n(375708),
    _ = n(580133),
    S = n(169797),
    m = n(270537);
n(652215);
var I = n(327105),
    f = n(312867);
function p(e) {
    let { className: t, shouldShowUnifiedHeader: n, headerBadgeConfig: r } = e;
    return (0, l.jsxs)(l.Fragment, {
        children: [
            n ? (0, l.jsx)(a.UY, { children: (0, l.jsx)(_.f, { headerBadgeConfig: r }) }) : null,
            (0, l.jsx)(S.DJ, { className: o()(f.g4, t) }),
        ],
    });
}
function A(e) {
    return null != e && "object" == typeof e && "message" in e && "type" in e
        ? (0, l.jsx)(s.w, { type: e.type, hidden: e.hidden, children: e.message }, e.key)
        : (0, l.jsx)(r.Fragment, { children: e.directContent }, e.key);
}
function N(e) {
    return null == e || "" === e;
}
function g(e) {
    let { children: t, showUpperNoticesAboveGlobalNotices: n = !1 } = e,
        {
            errorMessage: i,
            warningMessage: o,
            richNotices: a,
        } = (function () {
            let e,
                { errorMessage: t } = (0, c.j)({}),
                n =
                    ((e = (0, d.t4)((e) => e.selectedSkuId)),
                    (0, u.vw)({ skuId: e }) ? h.intl.format(h.t.fsOXXO, {}) : null),
                i = (function () {
                    let e = (0, d.t4)((e) => e.paymentSourceId),
                        t = (0, C.kc)(),
                        {
                            relocationCountry: n,
                            relocationCurrencyCode: i,
                            willForfeitGiftCardBalance: o,
                        } = r.useMemo(() => {
                            let n = null != e ? t.find((t) => t.id === e) : null;
                            return {
                                relocationCountry: n?.relocationCountry ?? null,
                                relocationCurrencyCode: n?.relocationCurrencyCode ?? null,
                                willForfeitGiftCardBalance: n?.willForfeitGiftCardBalance ?? !1,
                            };
                        }, [t, e]);
                    return r.useMemo(
                        () =>
                            null == n
                                ? null
                                : {
                                      directContent: (0, l.jsx)(E.c, {
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
                errorMessage: t,
                warningMessage: n,
                richNotices: r.useMemo(() => {
                    let e = [];
                    return null != i && e.push(i), e;
                }, [i]),
            };
        })(),
        _ = r.useRef(null);
    return (
        r.useEffect(() => {
            N(i) || null == _.current || _.current.scrollIntoView({ behavior: "smooth" });
        }, [i]),
        r.useMemo(() => {
            if (!(!N(i) || !N(o) || a.length > 0 || null != t)) return null;
            let e = (0, l.jsxs)(l.Fragment, {
                children: [
                    N(i) ? null : (0, l.jsx)(s.w, { type: "critical", children: i }),
                    N(o) ? null : (0, l.jsx)(s.w, { type: "warning", children: o }),
                    a.map(A),
                ],
            });
            return (0, l.jsx)("div", {
                ref: _,
                className: f.dD,
                children: n
                    ? (0, l.jsxs)(l.Fragment, { children: [t, e] })
                    : (0, l.jsxs)(l.Fragment, { children: [e, t] }),
            });
        }, [i, o, a, t, n])
    );
}
function T(e) {
    return r.useMemo(
        () =>
            null == e
                ? null
                : Array.isArray(e)
                  ? 0 === e.length
                      ? null
                      : (0, l.jsx)(l.Fragment, { children: e.map((e) => A(e)) })
                  : null != e
                    ? A(e)
                    : null,
        [e],
    );
}
function y(e) {
    let { upperInlineNoticeProps: t, shouldShowGlobalNotices: n, showUpperNoticesAboveGlobalNotices: i } = e,
        o = T(t);
    return r.useMemo(
        () =>
            null != o || n
                ? n
                    ? null != o
                        ? (0, l.jsx)(g, { showUpperNoticesAboveGlobalNotices: i, children: o })
                        : (0, l.jsx)(g, {})
                    : (0, l.jsx)("div", { className: f.dD, children: o })
                : null,
        [n, o, i],
    );
}
function R(e) {
    let {
            upperInlineNoticeProps: t,
            planSelectContent: n,
            purchaseItemContent: r,
            subscriptionDetailsContent: i,
            isStepLoading: s,
            paymentMethodContent: u,
            invoiceSummaryContent: c,
            promotionalNoticeContent: d,
            legalContent: E,
            invoiceTotalDueLabel: C = h.intl.string(I.default.R0cZsM),
            invoiceTotalDueValue: S,
            shouldShowGlobalNotices: A,
            showUpperNoticesAboveGlobalNotices: N,
            footerInlineNoticeProps: g,
            headerBadgeConfig: R,
            className: P,
        } = e,
        O = T(g);
    return s
        ? (0, l.jsx)(p, { className: P, shouldShowUnifiedHeader: !0 })
        : (0, l.jsxs)(l.Fragment, {
              children: [
                  (0, l.jsxs)("div", {
                      className: o()(P, { [f.pg]: null == c }),
                      children: [
                          (0, l.jsx)(y, {
                              upperInlineNoticeProps: t,
                              shouldShowGlobalNotices: A,
                              showUpperNoticesAboveGlobalNotices: N,
                          }),
                          n,
                          null != n && null != r && (0, l.jsx)("div", { className: f.ls }),
                          r,
                          null != i && (0, l.jsx)("div", { className: f.P3, children: i }),
                          (0, l.jsx)("div", { className: f.Jv, children: u }),
                          null != c && (0, l.jsx)("div", { className: f.ZF, children: c }),
                      ],
                  }),
                  (0, l.jsx)(a.UY, { children: (0, l.jsx)(_.f, { headerBadgeConfig: R }) }),
                  (0, l.jsxs)(a.bx, {
                      children: [
                          null != C && null != S && (0, l.jsx)(m.Qf, { className: f.NR, label: C, value: S }),
                          null != d ? (0, l.jsx)("div", { className: f.uh, children: d }) : null,
                          E,
                          null != O ? (0, l.jsx)("div", { className: f.Uu, children: O }) : null,
                      ],
                  }),
              ],
          });
}
