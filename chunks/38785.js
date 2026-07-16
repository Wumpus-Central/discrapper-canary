n.d(t, { T_: () => v, Ed: () => g, yg: () => p });
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
    S = n(375708),
    A = n(580133),
    _ = n(169797),
    f = n(270537),
    I = n(652215),
    C = n(327105),
    N = n(312867);
function g(e) {
    let { className: t, shouldShowUnifiedHeader: n, headerBadgeConfig: r } = e;
    return (0, l.jsxs)(l.Fragment, {
        children: [
            n ? (0, l.jsx)(u.UY, { children: (0, l.jsx)(A.f, { headerBadgeConfig: r }) }) : null,
            (0, l.jsx)(_.DJ, { className: s()(N.g4, t) }),
        ],
    });
}
function p() {
    return (0, l.jsx)(_.Jg, {
        transitionState: a.i.ENTERED,
        onClose: I.tEg,
        size: "md",
        isModalContentLoading: !0,
        children: (0, l.jsx)(g, { shouldShowUnifiedHeader: !0 }),
    });
}
function y(e) {
    return null != e && "object" == typeof e && "message" in e && "type" in e
        ? (0, l.jsx)(o.w, { type: e.type, hidden: e.hidden, children: e.message }, e.key)
        : (0, l.jsx)(r.Fragment, { children: e.directContent }, e.key);
}
function x(e) {
    return null == e || "" === e;
}
function T(e) {
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
                    (0, c.vw)({ skuId: e }) ? S.intl.format(S.t.fsOXXO, {}) : null),
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
            x(i) || null == u.current || u.current.scrollIntoView({ behavior: "smooth" });
        }, [i]),
        r.useMemo(() => {
            if (!(!x(i) || !x(s) || a.length > 0 || null != t)) return null;
            let e = (0, l.jsxs)(l.Fragment, {
                children: [
                    x(i) ? null : (0, l.jsx)(o.w, { type: "critical", children: i }),
                    x(s) ? null : (0, l.jsx)(o.w, { type: "warning", children: s }),
                    a.map(y),
                ],
            });
            return (0, l.jsx)("div", {
                ref: u,
                className: N.dD,
                children: n
                    ? (0, l.jsxs)(l.Fragment, { children: [t, e] })
                    : (0, l.jsxs)(l.Fragment, { children: [e, t] }),
            });
        }, [i, s, a, t, n])
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
                      : (0, l.jsx)(l.Fragment, { children: e.map((e) => y(e)) })
                  : null != e
                    ? y(e)
                    : null,
        [e],
    );
}
function P(e) {
    let { upperInlineNoticeProps: t, shouldShowGlobalNotices: n, showUpperNoticesAboveGlobalNotices: i } = e,
        s = R(t);
    return r.useMemo(
        () =>
            null != s || n
                ? n
                    ? null != s
                        ? (0, l.jsx)(T, { showUpperNoticesAboveGlobalNotices: i, children: s })
                        : (0, l.jsx)(T, {})
                    : (0, l.jsx)("div", { className: N.dD, children: s })
                : null,
        [n, s, i],
    );
}
function v(e) {
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
            invoiceTotalDueLabel: m = S.intl.string(C.default.R0cZsM),
            invoiceTotalDueValue: h,
            shouldShowGlobalNotices: _,
            showUpperNoticesAboveGlobalNotices: I,
            footerInlineNoticeProps: p,
            headerBadgeConfig: y,
            className: x,
        } = e,
        T = R(p);
    return a
        ? (0, l.jsx)(g, { className: x, shouldShowUnifiedHeader: !0 })
        : (0, l.jsxs)(l.Fragment, {
              children: [
                  (0, l.jsxs)("div", {
                      className: s()(x, { [N.pg]: null == c }),
                      children: [
                          (0, l.jsx)(P, {
                              upperInlineNoticeProps: t,
                              shouldShowGlobalNotices: _,
                              showUpperNoticesAboveGlobalNotices: I,
                          }),
                          n,
                          null != n && null != r && (0, l.jsx)("div", { className: N.ls }),
                          r,
                          null != i && (0, l.jsx)("div", { className: N.P3, children: i }),
                          (0, l.jsx)("div", { className: N.Jv, children: o }),
                          null != c && (0, l.jsx)("div", { className: N.ZF, children: c }),
                      ],
                  }),
                  (0, l.jsx)(u.UY, { children: (0, l.jsx)(A.f, { headerBadgeConfig: y }) }),
                  (0, l.jsxs)(u.bx, {
                      children: [
                          null != m && null != h && (0, l.jsx)(f.Qf, { className: N.NR, label: m, value: h }),
                          null != d ? (0, l.jsx)("div", { className: N.uh, children: d }) : null,
                          E,
                          null != T ? (0, l.jsx)("div", { className: N.Uu, children: T }) : null,
                      ],
                  }),
              ],
          });
}
