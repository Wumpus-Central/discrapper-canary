"use strict";
n.d(t, { E: () => A, T: () => y });
var i = n(627968),
    r = n(64700),
    s = n(503698),
    a = n.n(s),
    o = n(683071),
    l = n(725836);
n(321073);
var u = n(525723),
    d = n(901930),
    c = n(650170),
    _ = n(900730),
    h = n(426398),
    f = n(375708),
    E = n(480642),
    p = n(848584),
    m = n(327105),
    g = n(312867);
function A(e) {
    let { className: t } = e;
    return (0, i.jsx)(E.DJ, { className: a()(g.g4, t) });
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
    let { children: t, showUpperNoticesAboveGlobalNotices: n = !1 } = e,
        {
            errorMessage: s,
            warningMessage: a,
            richNotices: l,
        } = (function () {
            let e,
                { errorMessage: t } = (0, d.j)({}),
                n =
                    ((e = (0, c.t4)((e) => e.selectedSkuId)),
                    (0, u.vw)({ skuId: e }) ? f.intl.format(f.t.fsOXXO, {}) : null),
                s = (function () {
                    let e = (0, c.t4)((e) => e.paymentSourceId),
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
        E = r.useRef(null);
    return (
        r.useEffect(() => {
            T(s) || null == E.current || E.current.scrollIntoView({ behavior: "smooth" });
        }, [s]),
        r.useMemo(() => {
            if (!(!T(s) || !T(a) || l.length > 0 || null != t)) return null;
            let e = (0, i.jsxs)(i.Fragment, {
                children: [
                    T(s) ? null : (0, i.jsx)(o.w, { type: "critical", children: s }),
                    T(a) ? null : (0, i.jsx)(o.w, { type: "warning", children: a }),
                    l.map(I),
                ],
            });
            return (0, i.jsx)("div", {
                ref: E,
                className: g.dD,
                children: n
                    ? (0, i.jsxs)(i.Fragment, { children: [t, e] })
                    : (0, i.jsxs)(i.Fragment, { children: [e, t] }),
            });
        }, [s, a, l, t, n])
    );
}
function N(e) {
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
    let { upperInlineNoticeProps: t, shouldShowGlobalNotices: n, showUpperNoticesAboveGlobalNotices: s } = e,
        a = N(t);
    return r.useMemo(
        () =>
            null != a || n
                ? n
                    ? null != a
                        ? (0, i.jsx)(S, { showUpperNoticesAboveGlobalNotices: s, children: a })
                        : (0, i.jsx)(S, {})
                    : (0, i.jsx)("div", { className: g.dD, children: a })
                : null,
        [n, a, s],
    );
}
function y(e) {
    let {
            upperInlineNoticeProps: t,
            planSelectContent: n,
            purchaseItemContent: r,
            subscriptionDetailsContent: s,
            isStepLoading: o,
            paymentMethodContent: u,
            invoiceSummaryContent: d,
            promotionalNoticeContent: c,
            legalContent: _,
            invoiceTotalDueLabel: h = f.intl.string(m.default.R0cZsM),
            invoiceTotalDueValue: E,
            shouldShowGlobalNotices: I,
            showUpperNoticesAboveGlobalNotices: T,
            footerInlineNoticeProps: S,
            className: y,
        } = e,
        v = N(S);
    return o
        ? (0, i.jsx)(A, { className: y })
        : (0, i.jsxs)(i.Fragment, {
              children: [
                  (0, i.jsxs)("div", {
                      className: a()(y, { [g.pg]: null == d }),
                      children: [
                          (0, i.jsx)(C, {
                              upperInlineNoticeProps: t,
                              shouldShowGlobalNotices: I,
                              showUpperNoticesAboveGlobalNotices: T,
                          }),
                          n,
                          null != n && null != r && (0, i.jsx)("div", { className: g.ls }),
                          r,
                          null != s && (0, i.jsx)("div", { className: g.P3, children: s }),
                          (0, i.jsx)("div", { className: g.Jv, children: u }),
                          null != d && (0, i.jsx)("div", { className: g.ZF, children: d }),
                      ],
                  }),
                  (0, i.jsxs)(l.bx, {
                      children: [
                          null != h && null != E && (0, i.jsx)(p.Qf, { className: g.NR, label: h, value: E }),
                          null != c ? (0, i.jsx)("div", { className: g.uh, children: c }) : null,
                          _,
                          null != v ? (0, i.jsx)("div", { className: g.Uu, children: v }) : null,
                      ],
                  }),
              ],
          });
}
