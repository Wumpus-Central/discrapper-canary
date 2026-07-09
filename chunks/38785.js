n.d(t, { T_: () => x, Ed: () => N, yg: () => A });
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
    h = n(169797),
    _ = n(270537),
    S = n(652215),
    I = n(982772),
    f = n(76579);
function N(e) {
    let { className: t } = e;
    return (0, l.jsx)(h.DJ, { className: a()(f.g4, t) });
}
function A() {
    return (0, l.jsx)(h.Jg, {
        transitionState: o.i.ENTERED,
        onClose: S.tEg,
        size: "md",
        isModalContentLoading: !0,
        children: (0, l.jsx)(N, {}),
    });
}
function y(e) {
    return null != e && "object" == typeof e && "message" in e && "type" in e
        ? (0, l.jsx)(s.w, { type: e.type, hidden: e.hidden, children: e.message }, e.key)
        : (0, l.jsx)(r.Fragment, { children: e.directContent }, e.key);
}
function T(e) {
    return null == e || "" === e;
}
function g(e) {
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
            T(i) || null == u.current || u.current.scrollIntoView({ behavior: "smooth" });
        }, [i]),
        r.useMemo(() => {
            if (!(!T(i) || !T(a) || o.length > 0 || null != t)) return null;
            let e = (0, l.jsxs)(l.Fragment, {
                children: [
                    T(i) ? null : (0, l.jsx)(s.w, { type: "critical", children: i }),
                    T(a) ? null : (0, l.jsx)(s.w, { type: "warning", children: a }),
                    o.map(y),
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
function P(e) {
    return r.useMemo(
        () =>
            null == e
                ? null
                : Array.isArray(e)
                  ? 0 === e.length
                      ? null
                      : (0, l.jsx)(l.Fragment, { children: e.map((e) => y(e)) })
                  : null != e
                    ? y(e)
                    : null,
        [e],
    );
}
function R(e) {
    let { upperInlineNoticeProps: t, shouldShowGlobalNotices: n, showUpperNoticesAboveGlobalNotices: i } = e,
        a = P(t);
    return r.useMemo(
        () =>
            null != a || n
                ? n
                    ? null != a
                        ? (0, l.jsx)(g, { showUpperNoticesAboveGlobalNotices: i, children: a })
                        : (0, l.jsx)(g, {})
                    : (0, l.jsx)("div", { className: f.dD, children: a })
                : null,
        [n, a, i],
    );
}
function x(e) {
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
            shouldShowGlobalNotices: h,
            showUpperNoticesAboveGlobalNotices: S,
            footerInlineNoticeProps: A,
            className: y,
        } = e,
        T = P(A);
    return o
        ? (0, l.jsx)(N, { className: y })
        : (0, l.jsxs)(l.Fragment, {
              children: [
                  (0, l.jsxs)("div", {
                      className: a()(y, { [f.pg]: null == c }),
                      children: [
                          (0, l.jsx)(R, {
                              upperInlineNoticeProps: t,
                              shouldShowGlobalNotices: h,
                              showUpperNoticesAboveGlobalNotices: S,
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
                          null != E && null != C && (0, l.jsx)(_.Qf, { className: f.NR, label: E, value: C }),
                          null != d ? (0, l.jsx)("div", { className: f.uh, children: d }) : null,
                          m,
                          null != T ? (0, l.jsx)("div", { className: f.Uu, children: T }) : null,
                      ],
                  }),
              ],
          });
}
