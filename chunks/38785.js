n.d(t, { T_: () => L, Ed: () => N, yg: () => g });
var r = n(477900),
    l = n(582128),
    i = n(503698),
    u = n.n(i);
if (29845 == n.j) var s = n(815390);
var o = n(683071),
    a = n(725836);
n(321073);
var c = n(901930),
    d = n(900730),
    E = n(316915),
    A = n(202475),
    h = n(580133),
    S = n(480642),
    I = n(848584),
    _ = n(652215),
    f = n(327105),
    m = n(375708),
    C = n(639563);
function N(e) {
    let { className: t, shouldShowUnifiedHeader: n, headerBadgeConfig: l } = e;
    return (0, r.jsxs)(r.Fragment, {
        children: [
            n ? (0, r.jsx)(a.UY, { children: (0, r.jsx)(h.f, { headerBadgeConfig: l }) }) : null,
            (0, r.jsx)(S.DJ, { className: u()(C.g4, t) }),
        ],
    });
}
function g() {
    return (0, r.jsx)(S.Jg, {
        transitionState: s.i.ENTERED,
        onClose: _.tEg,
        size: "md",
        isModalContentLoading: !0,
        children: (0, r.jsx)(N, { shouldShowUnifiedHeader: !0 }),
    });
}
function y(e) {
    return null != e && "object" == typeof e && "message" in e && "type" in e
        ? (0, r.jsx)(o.w, { type: e.type, hidden: e.hidden, children: e.message }, e.key)
        : (0, r.jsx)(l.Fragment, { children: e.directContent }, e.key);
}
function P(e) {
    return null == e || "" === e;
}
function p(e) {
    let { children: t, showUpperNoticesAboveGlobalNotices: n = !1 } = e,
        { errorMessage: i, richNotices: u } = (function () {
            let { errorMessage: e } = (0, c.j)({}),
                t = (function () {
                    let e = (0, E.t4)((e) => e.paymentSourceId),
                        t = (0, A.kc)(),
                        {
                            relocationCountry: n,
                            relocationCurrencyCode: i,
                            willForfeitGiftCardBalance: u,
                        } = l.useMemo(() => {
                            let n = null != e ? t.find((t) => t.id === e) : null;
                            return {
                                relocationCountry: n?.relocationCountry ?? null,
                                relocationCurrencyCode: n?.relocationCurrencyCode ?? null,
                                willForfeitGiftCardBalance: n?.willForfeitGiftCardBalance ?? !1,
                            };
                        }, [t, e]);
                    return l.useMemo(
                        () =>
                            null == n
                                ? null
                                : {
                                      directContent: (0, r.jsx)(d.c, {
                                          relocationCountry: n,
                                          relocationCurrencyCode: i,
                                          willForfeitGiftCardBalance: u,
                                      }),
                                      key: "store-relocation-notice",
                                  },
                        [n, i, u],
                    );
                })();
            return {
                errorMessage: e,
                richNotices: l.useMemo(() => {
                    let e = [];
                    return null != t && e.push(t), e;
                }, [t]),
            };
        })(),
        s = l.useRef(null);
    return (
        l.useEffect(() => {
            P(i) || null == s.current || s.current.scrollIntoView({ behavior: "smooth" });
        }, [i]),
        l.useMemo(() => {
            if (!(!P(i) || u.length > 0 || null != t)) return null;
            let e = (0, r.jsxs)(r.Fragment, {
                children: [P(i) ? null : (0, r.jsx)(o.w, { type: "critical", children: i }), u.map(y)],
            });
            return (0, r.jsx)("div", {
                ref: s,
                className: C.dD,
                children: n
                    ? (0, r.jsxs)(r.Fragment, { children: [t, e] })
                    : (0, r.jsxs)(r.Fragment, { children: [e, t] }),
            });
        }, [i, u, t, n])
    );
}
function T(e) {
    return l.useMemo(
        () =>
            null == e
                ? null
                : Array.isArray(e)
                  ? 0 === e.length
                      ? null
                      : (0, r.jsx)(r.Fragment, { children: e.map((e) => y(e)) })
                  : null != e
                    ? y(e)
                    : null,
        [e],
    );
}
function R(e) {
    let { upperInlineNoticeProps: t, shouldShowGlobalNotices: n, showUpperNoticesAboveGlobalNotices: i } = e,
        u = T(t);
    return l.useMemo(
        () =>
            null != u || n
                ? n
                    ? null != u
                        ? (0, r.jsx)(p, { showUpperNoticesAboveGlobalNotices: i, children: u })
                        : (0, r.jsx)(p, {})
                    : (0, r.jsx)("div", { className: C.dD, children: u })
                : null,
        [n, u, i],
    );
}
function L(e) {
    let {
            upperInlineNoticeProps: t,
            planSelectContent: n,
            purchaseItemContent: l,
            subscriptionDetailsContent: i,
            isStepLoading: s,
            paymentMethodContent: o,
            invoiceSummaryContent: c,
            promotionalNoticeContent: d,
            legalContent: E,
            invoiceTotalDueLabel: A = m.intl.string(f.default.R0cZsM),
            invoiceTotalDueValue: S,
            shouldShowGlobalNotices: _,
            showUpperNoticesAboveGlobalNotices: g,
            footerInlineNoticeProps: y,
            headerBadgeConfig: P,
            className: p,
        } = e,
        L = T(y);
    return s
        ? (0, r.jsx)(N, { className: p, shouldShowUnifiedHeader: !0 })
        : (0, r.jsxs)(r.Fragment, {
              children: [
                  (0, r.jsxs)("div", {
                      className: u()(p, { [C.pg]: null == c }),
                      children: [
                          (0, r.jsx)(R, {
                              upperInlineNoticeProps: t,
                              shouldShowGlobalNotices: _,
                              showUpperNoticesAboveGlobalNotices: g,
                          }),
                          n,
                          null != n && null != l && (0, r.jsx)("div", { className: C.ls }),
                          l,
                          null != i && (0, r.jsx)("div", { className: C.P3, children: i }),
                          (0, r.jsx)("div", { className: C.Jv, children: o }),
                          null != c && (0, r.jsx)("div", { className: C.ZF, children: c }),
                      ],
                  }),
                  (0, r.jsx)(a.UY, { children: (0, r.jsx)(h.f, { headerBadgeConfig: P }) }),
                  (0, r.jsxs)(a.bx, {
                      children: [
                          null != A && null != S && (0, r.jsx)(I.Qf, { className: C.NR, label: A, value: S }),
                          null != d ? (0, r.jsx)("div", { className: C.uh, children: d }) : null,
                          E,
                          null != L ? (0, r.jsx)("div", { className: C.Uu, children: L }) : null,
                      ],
                  }),
              ],
          });
}
