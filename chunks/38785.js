"use strict";
n.d(t, { E: () => A, T: () => N });
var i = n(627968),
    r = n(64700),
    s = n(503698),
    a = n.n(s),
    o = n(683071),
    l = n(725836);
n(321073);
var u = n(525723),
    c = n(901930),
    d = n(650170),
    _ = n(900730),
    h = n(426398),
    f = n(375708),
    p = n(480642),
    E = n(848584),
    m = n(327105),
    g = n(312867);
function A(e) {
    let { className: t } = e;
    return (0, i.jsx)(p.DJ, { className: a()(g.g4, t) });
}
function I(e) {
    return null != e && "object" == typeof e && "message" in e && "type" in e
        ? (0, i.jsx)(o.w, { type: e.type, hidden: e.hidden, children: e.message }, e.key)
        : (0, i.jsx)(r.Fragment, { children: e.directContent }, e.key);
}
function T(e) {
    return null == e || "" === e;
}
function S(e) {
    let { children: t } = e,
        {
            errorMessage: n,
            warningMessage: s,
            richNotices: a,
        } = (function () {
            let e,
                { errorMessage: t } = (0, c.j)({}),
                n =
                    ((e = (0, d.t4)((e) => e.selectedSkuId)),
                    (0, u.vw)({ skuId: e }) ? f.intl.format(f.t.fsOXXO, {}) : null),
                s = (function () {
                    let e = (0, d.t4)((e) => e.paymentSourceId),
                        t = (0, h.kc)(),
                        {
                            relocationCountry: n,
                            relocationCurrencyCode: s,
                            willForfeitGiftCardBalance: a,
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
                                      directContent: (0, i.jsx)(_.c, {
                                          relocationCountry: n,
                                          relocationCurrencyCode: s,
                                          willForfeitGiftCardBalance: a,
                                      }),
                                      key: "store-relocation-notice",
                                  },
                        [n, s, a],
                    );
                })();
            return {
                errorMessage: t,
                warningMessage: n,
                richNotices: r.useMemo(() => {
                    let e = [];
                    return null != s && e.push(s), e;
                }, [s]),
            };
        })(),
        l = r.useRef(null);
    return (
        r.useEffect(() => {
            T(n) || null == l.current || l.current.scrollIntoView({ behavior: "smooth" });
        }, [n]),
        r.useMemo(
            () =>
                T(n) && T(s) && !(a.length > 0) && null == t
                    ? null
                    : (0, i.jsxs)("div", {
                          ref: l,
                          className: g.dD,
                          children: [
                              T(n) ? null : (0, i.jsx)(o.w, { type: "critical", children: n }),
                              T(s) ? null : (0, i.jsx)(o.w, { type: "warning", children: s }),
                              a.map(I),
                              t,
                          ],
                      }),
            [n, s, a, t],
        )
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
                      : (0, i.jsx)(i.Fragment, { children: e.map((e) => I(e)) })
                  : null != e
                    ? I(e)
                    : null,
        [e],
    );
}
function C(e) {
    let { upperInlineNoticeProps: t, shouldShowGlobalNotices: n } = e,
        s = y(t);
    return r.useMemo(
        () =>
            null != s || n
                ? n
                    ? null != s
                        ? (0, i.jsx)(S, { children: s })
                        : (0, i.jsx)(S, {})
                    : (0, i.jsx)("div", { className: g.dD, children: s })
                : null,
        [n, s],
    );
}
function N(e) {
    let {
            upperInlineNoticeProps: t,
            planSelectContent: n,
            purchaseItemContent: r,
            subscriptionDetailsContent: s,
            isStepLoading: o,
            paymentMethodContent: u,
            invoiceSummaryContent: c,
            promotionalNoticeContent: d,
            legalContent: _,
            invoiceTotalDueLabel: h = f.intl.string(m.default.R0cZsM),
            invoiceTotalDueValue: p,
            shouldShowGlobalNotices: I,
            footerInlineNoticeProps: T,
            className: S,
        } = e,
        N = y(T);
    return o
        ? (0, i.jsx)(A, { className: S })
        : (0, i.jsxs)(i.Fragment, {
              children: [
                  (0, i.jsxs)("div", {
                      className: a()(S, { [g.pg]: null == c }),
                      children: [
                          (0, i.jsx)(C, { upperInlineNoticeProps: t, shouldShowGlobalNotices: I }),
                          n,
                          null != n && null != r && (0, i.jsx)("div", { className: g.ls }),
                          r,
                          null != s && (0, i.jsx)("div", { className: g.P3, children: s }),
                          (0, i.jsx)("div", { className: g.Jv, children: u }),
                          null != c && (0, i.jsx)("div", { className: g.ZF, children: c }),
                      ],
                  }),
                  (0, i.jsxs)(l.bx, {
                      children: [
                          null != h && null != p && (0, i.jsx)(E.Qf, { className: g.NR, label: h, value: p }),
                          null != d ? (0, i.jsx)("div", { className: g.uh, children: d }) : null,
                          _,
                          null != N ? (0, i.jsx)("div", { className: g.Uu, children: N }) : null,
                      ],
                  }),
              ],
          });
}
