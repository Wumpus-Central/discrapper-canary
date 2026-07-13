n.d(t, { T_: () => x, Ed: () => p, yg: () => N });
var l = n(627968),
    r = n(64700),
    i = n(503698),
    o = n.n(i);
if (29845 == n.j) var s = n(815390);
var a = n(683071),
    u = n(725836);
n(321073);
var c = n(525723),
    d = n(901930),
    C = n(6938),
    E = n(900730),
    m = n(426398),
    h = n(375708),
    _ = n(169797),
    S = n(270537),
    I = n(652215),
    f = n(327105),
    A = n(312867);
function p(e) {
    let { className: t } = e;
    return (0, l.jsx)(_.DJ, { className: o()(A.g4, t) });
}
function N() {
    return (0, l.jsx)(_.Jg, {
        transitionState: s.i.ENTERED,
        onClose: I.tEg,
        size: "md",
        isModalContentLoading: !0,
        children: (0, l.jsx)(p, {}),
    });
}
function g(e) {
    return null != e && "object" == typeof e && "message" in e && "type" in e
        ? (0, l.jsx)(a.w, { type: e.type, hidden: e.hidden, children: e.message }, e.key)
        : (0, l.jsx)(r.Fragment, { children: e.directContent }, e.key);
}
function T(e) {
    return null == e || "" === e;
}
function P(e) {
    let { children: t, showUpperNoticesAboveGlobalNotices: n = !1 } = e,
        {
            errorMessage: i,
            warningMessage: o,
            richNotices: s,
        } = (function () {
            let e,
                { errorMessage: t } = (0, d.j)({}),
                n =
                    ((e = (0, C.t4)((e) => e.selectedSkuId)),
                    (0, c.vw)({ skuId: e }) ? h.intl.format(h.t.fsOXXO, {}) : null),
                i = (function () {
                    let e = (0, C.t4)((e) => e.paymentSourceId),
                        t = (0, m.kc)(),
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
        u = r.useRef(null);
    return (
        r.useEffect(() => {
            T(i) || null == u.current || u.current.scrollIntoView({ behavior: "smooth" });
        }, [i]),
        r.useMemo(() => {
            if (!(!T(i) || !T(o) || s.length > 0 || null != t)) return null;
            let e = (0, l.jsxs)(l.Fragment, {
                children: [
                    T(i) ? null : (0, l.jsx)(a.w, { type: "critical", children: i }),
                    T(o) ? null : (0, l.jsx)(a.w, { type: "warning", children: o }),
                    s.map(g),
                ],
            });
            return (0, l.jsx)("div", {
                ref: u,
                className: A.dD,
                children: n
                    ? (0, l.jsxs)(l.Fragment, { children: [t, e] })
                    : (0, l.jsxs)(l.Fragment, { children: [e, t] }),
            });
        }, [i, o, s, t, n])
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
                      : (0, l.jsx)(l.Fragment, { children: e.map((e) => g(e)) })
                  : null != e
                    ? g(e)
                    : null,
        [e],
    );
}
function R(e) {
    let { upperInlineNoticeProps: t, shouldShowGlobalNotices: n, showUpperNoticesAboveGlobalNotices: i } = e,
        o = y(t);
    return r.useMemo(
        () =>
            null != o || n
                ? n
                    ? null != o
                        ? (0, l.jsx)(P, { showUpperNoticesAboveGlobalNotices: i, children: o })
                        : (0, l.jsx)(P, {})
                    : (0, l.jsx)("div", { className: A.dD, children: o })
                : null,
        [n, o, i],
    );
}
function x(e) {
    let {
            upperInlineNoticeProps: t,
            planSelectContent: n,
            purchaseItemContent: r,
            subscriptionDetailsContent: i,
            isStepLoading: s,
            paymentMethodContent: a,
            invoiceSummaryContent: c,
            promotionalNoticeContent: d,
            legalContent: C,
            invoiceTotalDueLabel: E = h.intl.string(f.default.R0cZsM),
            invoiceTotalDueValue: m,
            shouldShowGlobalNotices: _,
            showUpperNoticesAboveGlobalNotices: I,
            footerInlineNoticeProps: N,
            className: g,
        } = e,
        T = y(N);
    return s
        ? (0, l.jsx)(p, { className: g })
        : (0, l.jsxs)(l.Fragment, {
              children: [
                  (0, l.jsxs)("div", {
                      className: o()(g, { [A.pg]: null == c }),
                      children: [
                          (0, l.jsx)(R, {
                              upperInlineNoticeProps: t,
                              shouldShowGlobalNotices: _,
                              showUpperNoticesAboveGlobalNotices: I,
                          }),
                          n,
                          null != n && null != r && (0, l.jsx)("div", { className: A.ls }),
                          r,
                          null != i && (0, l.jsx)("div", { className: A.P3, children: i }),
                          (0, l.jsx)("div", { className: A.Jv, children: a }),
                          null != c && (0, l.jsx)("div", { className: A.ZF, children: c }),
                      ],
                  }),
                  (0, l.jsxs)(u.bx, {
                      children: [
                          null != E && null != m && (0, l.jsx)(S.Qf, { className: A.NR, label: E, value: m }),
                          null != d ? (0, l.jsx)("div", { className: A.uh, children: d }) : null,
                          C,
                          null != T ? (0, l.jsx)("div", { className: A.Uu, children: T }) : null,
                      ],
                  }),
              ],
          });
}
