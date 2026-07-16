n.d(t, { T_: () => v, Ed: () => g, yg: () => P });
var l = n(627968),
    r = n(64700),
    i = n(503698),
    s = n.n(i);
if (29845 == n.j) var a = n(815390);
var u = n(683071),
    o = n(725836);
n(321073);
var c = n(525723),
    d = n(901930),
    E = n(6938),
    m = n(900730),
    h = n(426398),
    A = n(375708),
    I = n(580133),
    S = n(169797),
    N = n(270537),
    _ = n(652215),
    f = n(327105),
    C = n(312867);
function g(e) {
    let { className: t, shouldShowUnifiedHeader: n, headerBadgeConfig: r } = e;
    return (0, l.jsxs)(l.Fragment, {
        children: [
            n ? (0, l.jsx)(o.UY, { children: (0, l.jsx)(I.f, { headerBadgeConfig: r }) }) : null,
            (0, l.jsx)(S.DJ, { className: s()(C.g4, t) }),
        ],
    });
}
function P() {
    return (0, l.jsx)(S.Jg, {
        transitionState: a.i.ENTERED,
        onClose: _.tEg,
        size: "md",
        isModalContentLoading: !0,
        children: (0, l.jsx)(g, { shouldShowUnifiedHeader: !0 }),
    });
}
function x(e) {
    return null != e && "object" == typeof e && "message" in e && "type" in e
        ? (0, l.jsx)(u.w, { type: e.type, hidden: e.hidden, children: e.message }, e.key)
        : (0, l.jsx)(r.Fragment, { children: e.directContent }, e.key);
}
function T(e) {
    return null == e || "" === e;
}
function y(e) {
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
        o = r.useRef(null);
    return (
        r.useEffect(() => {
            T(i) || null == o.current || o.current.scrollIntoView({ behavior: "smooth" });
        }, [i]),
        r.useMemo(() => {
            if (!(!T(i) || !T(s) || a.length > 0 || null != t)) return null;
            let e = (0, l.jsxs)(l.Fragment, {
                children: [
                    T(i) ? null : (0, l.jsx)(u.w, { type: "critical", children: i }),
                    T(s) ? null : (0, l.jsx)(u.w, { type: "warning", children: s }),
                    a.map(x),
                ],
            });
            return (0, l.jsx)("div", {
                ref: o,
                className: C.dD,
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
                      : (0, l.jsx)(l.Fragment, { children: e.map((e) => x(e)) })
                  : null != e
                    ? x(e)
                    : null,
        [e],
    );
}
function p(e) {
    let { upperInlineNoticeProps: t, shouldShowGlobalNotices: n, showUpperNoticesAboveGlobalNotices: i } = e,
        s = R(t);
    return r.useMemo(
        () =>
            null != s || n
                ? n
                    ? null != s
                        ? (0, l.jsx)(y, { showUpperNoticesAboveGlobalNotices: i, children: s })
                        : (0, l.jsx)(y, {})
                    : (0, l.jsx)("div", { className: C.dD, children: s })
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
            paymentMethodContent: u,
            invoiceSummaryContent: c,
            promotionalNoticeContent: d,
            legalContent: E,
            invoiceTotalDueLabel: m = A.intl.string(f.default.R0cZsM),
            invoiceTotalDueValue: h,
            shouldShowGlobalNotices: S,
            showUpperNoticesAboveGlobalNotices: _,
            footerInlineNoticeProps: P,
            headerBadgeConfig: x,
            className: T,
        } = e,
        y = R(P);
    return a
        ? (0, l.jsx)(g, { className: T, shouldShowUnifiedHeader: !0 })
        : (0, l.jsxs)(l.Fragment, {
              children: [
                  (0, l.jsxs)("div", {
                      className: s()(T, { [C.pg]: null == c }),
                      children: [
                          (0, l.jsx)(p, {
                              upperInlineNoticeProps: t,
                              shouldShowGlobalNotices: S,
                              showUpperNoticesAboveGlobalNotices: _,
                          }),
                          n,
                          null != n && null != r && (0, l.jsx)("div", { className: C.ls }),
                          r,
                          null != i && (0, l.jsx)("div", { className: C.P3, children: i }),
                          (0, l.jsx)("div", { className: C.Jv, children: u }),
                          null != c && (0, l.jsx)("div", { className: C.ZF, children: c }),
                      ],
                  }),
                  (0, l.jsx)(o.UY, { children: (0, l.jsx)(I.f, { headerBadgeConfig: x }) }),
                  (0, l.jsxs)(o.bx, {
                      children: [
                          null != m && null != h && (0, l.jsx)(N.Qf, { className: C.NR, label: m, value: h }),
                          null != d ? (0, l.jsx)("div", { className: C.uh, children: d }) : null,
                          E,
                          null != y ? (0, l.jsx)("div", { className: C.Uu, children: y }) : null,
                      ],
                  }),
              ],
          });
}
