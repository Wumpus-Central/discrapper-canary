n.d(t, { T_: () => v, Ed: () => g, yg: () => y });
var l = n(627968),
    r = n(64700),
    i = n(503698),
    s = n.n(i);
if (29845 == n.j) var o = n(815390);
var u = n(683071),
    a = n(725836);
n(321073);
var c = n(525723),
    d = n(901930),
    E = n(316915),
    h = n(900730),
    m = n(426398),
    S = n(375708),
    I = n(580133),
    _ = n(169797),
    A = n(270537),
    C = n(652215),
    f = n(327105),
    N = n(639563);
function g(e) {
    let { className: t, shouldShowUnifiedHeader: n, headerBadgeConfig: r } = e;
    return (0, l.jsxs)(l.Fragment, {
        children: [
            n ? (0, l.jsx)(a.UY, { children: (0, l.jsx)(I.f, { headerBadgeConfig: r }) }) : null,
            (0, l.jsx)(_.DJ, { className: s()(N.g4, t) }),
        ],
    });
}
function y() {
    return (0, l.jsx)(_.Jg, {
        transitionState: o.i.ENTERED,
        onClose: C.tEg,
        size: "md",
        isModalContentLoading: !0,
        children: (0, l.jsx)(g, { shouldShowUnifiedHeader: !0 }),
    });
}
function p(e) {
    return null != e && "object" == typeof e && "message" in e && "type" in e
        ? (0, l.jsx)(u.w, { type: e.type, hidden: e.hidden, children: e.message }, e.key)
        : (0, l.jsx)(r.Fragment, { children: e.directContent }, e.key);
}
function R(e) {
    return null == e || "" === e;
}
function T(e) {
    let { children: t, showUpperNoticesAboveGlobalNotices: n = !1 } = e,
        {
            errorMessage: i,
            warningMessage: s,
            richNotices: o,
        } = (function () {
            let e,
                { errorMessage: t } = (0, d.j)({}),
                n =
                    ((e = (0, E.t4)((e) => e.selectedSkuId)),
                    (0, c.vw)({ skuId: e }) ? S.intl.format(S.t.fsOXXO, {}) : null),
                i = (function () {
                    let e = (0, E.t4)((e) => e.paymentSourceId),
                        t = (0, m.kc)(),
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
                                      directContent: (0, l.jsx)(h.c, {
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
        a = r.useRef(null);
    return (
        r.useEffect(() => {
            R(i) || null == a.current || a.current.scrollIntoView({ behavior: "smooth" });
        }, [i]),
        r.useMemo(() => {
            if (!(!R(i) || !R(s) || o.length > 0 || null != t)) return null;
            let e = (0, l.jsxs)(l.Fragment, {
                children: [
                    R(i) ? null : (0, l.jsx)(u.w, { type: "critical", children: i }),
                    R(s) ? null : (0, l.jsx)(u.w, { type: "warning", children: s }),
                    o.map(p),
                ],
            });
            return (0, l.jsx)("div", {
                ref: a,
                className: N.dD,
                children: n
                    ? (0, l.jsxs)(l.Fragment, { children: [t, e] })
                    : (0, l.jsxs)(l.Fragment, { children: [e, t] }),
            });
        }, [i, s, o, t, n])
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
                      : (0, l.jsx)(l.Fragment, { children: e.map((e) => p(e)) })
                  : null != e
                    ? p(e)
                    : null,
        [e],
    );
}
function x(e) {
    let { upperInlineNoticeProps: t, shouldShowGlobalNotices: n, showUpperNoticesAboveGlobalNotices: i } = e,
        s = P(t);
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
            isStepLoading: o,
            paymentMethodContent: u,
            invoiceSummaryContent: c,
            promotionalNoticeContent: d,
            legalContent: E,
            invoiceTotalDueLabel: h = S.intl.string(f.default.R0cZsM),
            invoiceTotalDueValue: m,
            shouldShowGlobalNotices: _,
            showUpperNoticesAboveGlobalNotices: C,
            footerInlineNoticeProps: y,
            headerBadgeConfig: p,
            className: R,
        } = e,
        T = P(y);
    return o
        ? (0, l.jsx)(g, { className: R, shouldShowUnifiedHeader: !0 })
        : (0, l.jsxs)(l.Fragment, {
              children: [
                  (0, l.jsxs)("div", {
                      className: s()(R, { [N.pg]: null == c }),
                      children: [
                          (0, l.jsx)(x, {
                              upperInlineNoticeProps: t,
                              shouldShowGlobalNotices: _,
                              showUpperNoticesAboveGlobalNotices: C,
                          }),
                          n,
                          null != n && null != r && (0, l.jsx)("div", { className: N.ls }),
                          r,
                          null != i && (0, l.jsx)("div", { className: N.P3, children: i }),
                          (0, l.jsx)("div", { className: N.Jv, children: u }),
                          null != c && (0, l.jsx)("div", { className: N.ZF, children: c }),
                      ],
                  }),
                  (0, l.jsx)(a.UY, { children: (0, l.jsx)(I.f, { headerBadgeConfig: p }) }),
                  (0, l.jsxs)(a.bx, {
                      children: [
                          null != h && null != m && (0, l.jsx)(A.Qf, { className: N.NR, label: h, value: m }),
                          null != d ? (0, l.jsx)("div", { className: N.uh, children: d }) : null,
                          E,
                          null != T ? (0, l.jsx)("div", { className: N.Uu, children: T }) : null,
                      ],
                  }),
              ],
          });
}
