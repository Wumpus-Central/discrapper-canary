"use strict";
n.d(t, { E: () => C, T: () => v });
var l = n(627968),
    i = n(64700),
    s = n(503698),
    r = n.n(s),
    a = n(683071),
    o = n(725836);
n(321073);
var u = n(525723),
    c = n(901930),
    d = n(211159),
    m = n(900730),
    h = n(426398),
    p = n(375708),
    f = n(169797),
    g = n(270537),
    E = n(982772),
    A = n(76579);
function C(e) {
    let { className: t } = e;
    return (0, l.jsx)(f.DJ, { className: r()(A.g4, t) });
}
function x(e) {
    return null != e && "object" == typeof e && "message" in e && "type" in e
        ? (0, l.jsx)(a.w, { type: e.type, hidden: e.hidden, children: e.message }, e.key)
        : (0, l.jsx)(i.Fragment, { children: e.directContent }, e.key);
}
function I(e) {
    return null == e || "" === e;
}
function _(e) {
    let { children: t } = e,
        {
            errorMessage: n,
            warningMessage: s,
            richNotices: r,
        } = (function () {
            let e,
                { errorMessage: t } = (0, c.j)({}),
                n =
                    ((e = (0, d.t4)((e) => e.selectedSkuId)),
                    (0, u.vw)({ skuId: e }) ? p.intl.format(p.t.fsOXXO, {}) : null),
                s = (function () {
                    let e = (0, d.t4)((e) => e.paymentSourceId),
                        t = (0, h.kc)(),
                        {
                            relocationCountry: n,
                            relocationCurrencyCode: s,
                            willForfeitGiftCardBalance: r,
                        } = i.useMemo(() => {
                            let n = null != e ? t.find((t) => t.id === e) : null;
                            return {
                                relocationCountry: n?.relocationCountry ?? null,
                                relocationCurrencyCode: n?.relocationCurrencyCode ?? null,
                                willForfeitGiftCardBalance: n?.willForfeitGiftCardBalance ?? !1,
                            };
                        }, [t, e]);
                    return i.useMemo(
                        () =>
                            null == n
                                ? null
                                : {
                                      directContent: (0, l.jsx)(m.c, {
                                          relocationCountry: n,
                                          relocationCurrencyCode: s,
                                          willForfeitGiftCardBalance: r,
                                      }),
                                      key: "store-relocation-notice",
                                  },
                        [n, s, r],
                    );
                })();
            return {
                errorMessage: t,
                warningMessage: n,
                richNotices: i.useMemo(() => {
                    let e = [];
                    return null != s && e.push(s), e;
                }, [s]),
            };
        })(),
        o = i.useRef(null);
    return (
        i.useEffect(() => {
            I(n) || null == o.current || o.current.scrollIntoView({ behavior: "smooth" });
        }, [n]),
        i.useMemo(
            () =>
                I(n) && I(s) && !(r.length > 0) && null == t
                    ? null
                    : (0, l.jsxs)("div", {
                          ref: o,
                          className: A.dD,
                          children: [
                              I(n) ? null : (0, l.jsx)(a.w, { type: "critical", children: n }),
                              I(s) ? null : (0, l.jsx)(a.w, { type: "warning", children: s }),
                              r.map(x),
                              t,
                          ],
                      }),
            [n, s, r, t],
        )
    );
}
function S(e) {
    return i.useMemo(
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
function y(e) {
    let { upperInlineNoticeProps: t, shouldShowGlobalNotices: n } = e,
        s = S(t);
    return i.useMemo(
        () =>
            null != s || n
                ? n
                    ? null != s
                        ? (0, l.jsx)(_, { children: s })
                        : (0, l.jsx)(_, {})
                    : (0, l.jsx)("div", { className: A.dD, children: s })
                : null,
        [n, s],
    );
}
function v(e) {
    let {
            upperInlineNoticeProps: t,
            planSelectContent: n,
            purchaseItemContent: i,
            subscriptionDetailsContent: s,
            isStepLoading: a,
            paymentMethodContent: u,
            invoiceSummaryContent: c,
            promotionalNoticeContent: d,
            legalContent: m,
            invoiceTotalDueLabel: h = p.intl.string(E.default.R0cZsM),
            invoiceTotalDueValue: f,
            shouldShowGlobalNotices: x,
            footerInlineNoticeProps: I,
            className: _,
        } = e,
        v = S(I);
    return a
        ? (0, l.jsx)(C, { className: _ })
        : (0, l.jsxs)(l.Fragment, {
              children: [
                  (0, l.jsxs)("div", {
                      className: r()(_, { [A.pg]: null == c }),
                      children: [
                          (0, l.jsx)(y, { upperInlineNoticeProps: t, shouldShowGlobalNotices: x }),
                          n,
                          null != n && null != i && (0, l.jsx)("div", { className: A.ls }),
                          i,
                          null != s && (0, l.jsx)("div", { className: A.P3, children: s }),
                          (0, l.jsx)("div", { className: A.Jv, children: u }),
                          null != c && (0, l.jsx)("div", { className: A.ZF, children: c }),
                      ],
                  }),
                  (0, l.jsxs)(o.bx, {
                      children: [
                          null != h && null != f && (0, l.jsx)(g.Qf, { className: A.NR, label: h, value: f }),
                          null != d ? (0, l.jsx)("div", { className: A.uh, children: d }) : null,
                          m,
                          null != v ? (0, l.jsx)("div", { className: A.Uu, children: v }) : null,
                      ],
                  }),
              ],
          });
}
