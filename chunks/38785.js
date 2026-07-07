n.d(t, { T_: () => P, Ed: () => A, yg: () => S });
var l = n(627968),
    r = n(64700),
    i = n(503698),
    a = n.n(i);
if (29845 == n.j) var o = n(815390);
var s = n(683071),
    u = n(725836);
n(321073);
var c = n(525723),
    d = n(901930),
    m = n(6938),
    E = n(900730),
    C = n(426398),
    p = n(375708),
    _ = n(169797),
    h = n(270537),
    N = n(652215),
    I = n(327105),
    f = n(312867);
function A(e) {
    let { className: t } = e;
    return (0, l.jsx)(_.DJ, { className: a()(f.g4, t) });
}
function S() {
    return (0, l.jsx)(_.Jg, {
        transitionState: o.i.ENTERED,
        onClose: N.tEg,
        size: "md",
        isModalContentLoading: !0,
        children: (0, l.jsx)(A, {}),
    });
}
function T(e) {
    return null != e && "object" == typeof e && "message" in e && "type" in e
        ? (0, l.jsx)(s.w, { type: e.type, hidden: e.hidden, children: e.message }, e.key)
        : (0, l.jsx)(r.Fragment, { children: e.directContent }, e.key);
}
function g(e) {
    return null == e || "" === e;
}
function y(e) {
    let { children: t, showUpperNoticesAboveGlobalNotices: n = !1 } = e,
        {
            errorMessage: i,
            warningMessage: a,
            richNotices: o,
        } = (function () {
            let e,
                { errorMessage: t } = (0, d.j)({}),
                n =
                    ((e = (0, m.t4)((e) => e.selectedSkuId)),
                    (0, c.vw)({ skuId: e }) ? p.intl.format(p.t.fsOXXO, {}) : null),
                i = (function () {
                    let e = (0, m.t4)((e) => e.paymentSourceId),
                        t = (0, C.kc)(),
                        {
                            relocationCountry: n,
                            relocationCurrencyCode: i,
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
                                      directContent: (0, l.jsx)(E.c, {
                                          relocationCountry: n,
                                          relocationCurrencyCode: i,
                                          willForfeitGiftCardBalance: a,
                                      }),
                                      key: "store-relocation-notice",
                                  },
                        [n, i, a],
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
        u = r.useRef(null);
    return (
        r.useEffect(() => {
            g(i) || null == u.current || u.current.scrollIntoView({ behavior: "smooth" });
        }, [i]),
        r.useMemo(() => {
            if (!(!g(i) || !g(a) || o.length > 0 || null != t)) return null;
            let e = (0, l.jsxs)(l.Fragment, {
                children: [
                    g(i) ? null : (0, l.jsx)(s.w, { type: "critical", children: i }),
                    g(a) ? null : (0, l.jsx)(s.w, { type: "warning", children: a }),
                    o.map(T),
                ],
            });
            return (0, l.jsx)("div", {
                ref: u,
                className: f.dD,
                children: n
                    ? (0, l.jsxs)(l.Fragment, { children: [t, e] })
                    : (0, l.jsxs)(l.Fragment, { children: [e, t] }),
            });
        }, [i, a, o, t, n])
    );
}
function R(e) {
    return r.useMemo(
        () =>
            null == e
                ? null
                : Array.isArray(e)
                  ? 0 === e.length
                      ? null
                      : (0, l.jsx)(l.Fragment, { children: e.map((e) => T(e)) })
                  : null != e
                    ? T(e)
                    : null,
        [e],
    );
}
function x(e) {
    let { upperInlineNoticeProps: t, shouldShowGlobalNotices: n, showUpperNoticesAboveGlobalNotices: i } = e,
        a = R(t);
    return r.useMemo(
        () =>
            null != a || n
                ? n
                    ? null != a
                        ? (0, l.jsx)(y, { showUpperNoticesAboveGlobalNotices: i, children: a })
                        : (0, l.jsx)(y, {})
                    : (0, l.jsx)("div", { className: f.dD, children: a })
                : null,
        [n, a, i],
    );
}
function P(e) {
    let {
            upperInlineNoticeProps: t,
            planSelectContent: n,
            purchaseItemContent: r,
            subscriptionDetailsContent: i,
            isStepLoading: o,
            paymentMethodContent: s,
            invoiceSummaryContent: c,
            promotionalNoticeContent: d,
            legalContent: m,
            invoiceTotalDueLabel: E = p.intl.string(I.default.R0cZsM),
            invoiceTotalDueValue: C,
            shouldShowGlobalNotices: _,
            showUpperNoticesAboveGlobalNotices: N,
            footerInlineNoticeProps: S,
            className: T,
        } = e,
        g = R(S);
    return o
        ? (0, l.jsx)(A, { className: T })
        : (0, l.jsxs)(l.Fragment, {
              children: [
                  (0, l.jsxs)("div", {
                      className: a()(T, { [f.pg]: null == c }),
                      children: [
                          (0, l.jsx)(x, {
                              upperInlineNoticeProps: t,
                              shouldShowGlobalNotices: _,
                              showUpperNoticesAboveGlobalNotices: N,
                          }),
                          n,
                          null != n && null != r && (0, l.jsx)("div", { className: f.ls }),
                          r,
                          null != i && (0, l.jsx)("div", { className: f.P3, children: i }),
                          (0, l.jsx)("div", { className: f.Jv, children: s }),
                          null != c && (0, l.jsx)("div", { className: f.ZF, children: c }),
                      ],
                  }),
                  (0, l.jsxs)(u.bx, {
                      children: [
                          null != E && null != C && (0, l.jsx)(h.Qf, { className: f.NR, label: E, value: C }),
                          null != d ? (0, l.jsx)("div", { className: f.uh, children: d }) : null,
                          m,
                          null != g ? (0, l.jsx)("div", { className: f.Uu, children: g }) : null,
                      ],
                  }),
              ],
          });
}
