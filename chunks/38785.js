n.d(t, { T_: () => p, Ed: () => f, yg: () => g });
var l = n(627968),
    r = n(64700),
    i = n(503698),
    s = n.n(i);
if (29845 == n.j) var a = n(815390);
var o = n(683071),
    u = n(725836);
n(321073);
var c = n(525723),
    d = n(901930),
    E = n(6938),
    m = n(900730),
    h = n(426398),
    A = n(375708),
    N = n(169797),
    I = n(270537),
    _ = n(652215),
    S = n(327105),
    C = n(312867);
function f(e) {
    let { className: t } = e;
    return (0, l.jsx)(N.DJ, { className: s()(C.g4, t) });
}
function g() {
    return (0, l.jsx)(N.Jg, {
        transitionState: a.i.ENTERED,
        onClose: _.tEg,
        size: "md",
        isModalContentLoading: !0,
        children: (0, l.jsx)(f, {}),
    });
}
function P(e) {
    return null != e && "object" == typeof e && "message" in e && "type" in e
        ? (0, l.jsx)(o.w, { type: e.type, hidden: e.hidden, children: e.message }, e.key)
        : (0, l.jsx)(r.Fragment, { children: e.directContent }, e.key);
}
function T(e) {
    return null == e || "" === e;
}
function x(e) {
    let { children: t, showUpperNoticesAboveGlobalNotices: n = !1 } = e,
        {
            errorMessage: i,
            warningMessage: s,
            richNotices: a,
        } = (function () {
            let e,
                { errorMessage: t } = (0, d.j)({}),
                n =
                    ((e = (0, E.t4)((e) => e.selectedSkuId)),
                    (0, c.vw)({ skuId: e }) ? A.intl.format(A.t.fsOXXO, {}) : null),
                i = (function () {
                    let e = (0, E.t4)((e) => e.paymentSourceId),
                        t = (0, h.kc)(),
                        {
                            relocationCountry: n,
                            relocationCurrencyCode: i,
                            willForfeitGiftCardBalance: s,
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
                                      directContent: (0, l.jsx)(m.c, {
                                          relocationCountry: n,
                                          relocationCurrencyCode: i,
                                          willForfeitGiftCardBalance: s,
                                      }),
                                      key: "store-relocation-notice",
                                  },
                        [n, i, s],
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
            T(i) || null == u.current || u.current.scrollIntoView({ behavior: "smooth" });
        }, [i]),
        r.useMemo(() => {
            if (!(!T(i) || !T(s) || a.length > 0 || null != t)) return null;
            let e = (0, l.jsxs)(l.Fragment, {
                children: [
                    T(i) ? null : (0, l.jsx)(o.w, { type: "critical", children: i }),
                    T(s) ? null : (0, l.jsx)(o.w, { type: "warning", children: s }),
                    a.map(P),
                ],
            });
            return (0, l.jsx)("div", {
                ref: u,
                className: C.dD,
                children: n
                    ? (0, l.jsxs)(l.Fragment, { children: [t, e] })
                    : (0, l.jsxs)(l.Fragment, { children: [e, t] }),
            });
        }, [i, s, a, t, n])
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
                      : (0, l.jsx)(l.Fragment, { children: e.map((e) => P(e)) })
                  : null != e
                    ? P(e)
                    : null,
        [e],
    );
}
function R(e) {
    let { upperInlineNoticeProps: t, shouldShowGlobalNotices: n, showUpperNoticesAboveGlobalNotices: i } = e,
        s = y(t);
    return r.useMemo(
        () =>
            null != s || n
                ? n
                    ? null != s
                        ? (0, l.jsx)(x, { showUpperNoticesAboveGlobalNotices: i, children: s })
                        : (0, l.jsx)(x, {})
                    : (0, l.jsx)("div", { className: C.dD, children: s })
                : null,
        [n, s, i],
    );
}
function p(e) {
    let {
            upperInlineNoticeProps: t,
            planSelectContent: n,
            purchaseItemContent: r,
            subscriptionDetailsContent: i,
            isStepLoading: a,
            paymentMethodContent: o,
            invoiceSummaryContent: c,
            promotionalNoticeContent: d,
            legalContent: E,
            invoiceTotalDueLabel: m = A.intl.string(S.default.R0cZsM),
            invoiceTotalDueValue: h,
            shouldShowGlobalNotices: N,
            showUpperNoticesAboveGlobalNotices: _,
            footerInlineNoticeProps: g,
            className: P,
        } = e,
        T = y(g);
    return a
        ? (0, l.jsx)(f, { className: P })
        : (0, l.jsxs)(l.Fragment, {
              children: [
                  (0, l.jsxs)("div", {
                      className: s()(P, { [C.pg]: null == c }),
                      children: [
                          (0, l.jsx)(R, {
                              upperInlineNoticeProps: t,
                              shouldShowGlobalNotices: N,
                              showUpperNoticesAboveGlobalNotices: _,
                          }),
                          n,
                          null != n && null != r && (0, l.jsx)("div", { className: C.ls }),
                          r,
                          null != i && (0, l.jsx)("div", { className: C.P3, children: i }),
                          (0, l.jsx)("div", { className: C.Jv, children: o }),
                          null != c && (0, l.jsx)("div", { className: C.ZF, children: c }),
                      ],
                  }),
                  (0, l.jsxs)(u.bx, {
                      children: [
                          null != m && null != h && (0, l.jsx)(I.Qf, { className: C.NR, label: m, value: h }),
                          null != d ? (0, l.jsx)("div", { className: C.uh, children: d }) : null,
                          E,
                          null != T ? (0, l.jsx)("div", { className: C.Uu, children: T }) : null,
                      ],
                  }),
              ],
          });
}
