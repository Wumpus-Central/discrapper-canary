n.d(t, { T_: () => P, Ed: () => A });
var r = n(477900),
    l = n(582128),
    i = n(503698),
    o = n.n(i),
    u = n(683071),
    s = n(725836);
n(321073);
var a = n(901930),
    c = n(900730),
    d = n(316915),
    E = n(202475),
    C = n(580133),
    h = n(480642),
    S = n(848584);
n(652215);
var _ = n(327105),
    I = n(375708),
    p = n(639563);
function A(e) {
    let { className: t, shouldShowUnifiedHeader: n, headerBadgeConfig: l } = e;
    return (0, r.jsxs)(r.Fragment, {
        children: [
            n ? (0, r.jsx)(s.UY, { children: (0, r.jsx)(C.f, { headerBadgeConfig: l }) }) : null,
            (0, r.jsx)(h.DJ, { className: o()(p.g4, t) }),
        ],
    });
}
function f(e) {
    return null != e && "object" == typeof e && "message" in e && "type" in e
        ? (0, r.jsx)(u.w, { type: e.type, hidden: e.hidden, children: e.message }, e.key)
        : (0, r.jsx)(l.Fragment, { children: e.directContent }, e.key);
}
function m(e) {
    return null == e || "" === e;
}
function g(e) {
    let { children: t, showUpperNoticesAboveGlobalNotices: n = !1 } = e,
        { errorMessage: i, richNotices: o } = (function () {
            let { errorMessage: e } = (0, a.j)({}),
                t = (function () {
                    let e = (0, d.t4)((e) => e.paymentSourceId),
                        t = (0, E.kc)(),
                        {
                            relocationCountry: n,
                            relocationCurrencyCode: i,
                            willForfeitGiftCardBalance: o,
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
                                      directContent: (0, r.jsx)(c.c, {
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
            m(i) || null == s.current || s.current.scrollIntoView({ behavior: "smooth" });
        }, [i]),
        l.useMemo(() => {
            if (!(!m(i) || o.length > 0 || null != t)) return null;
            let e = (0, r.jsxs)(r.Fragment, {
                children: [m(i) ? null : (0, r.jsx)(u.w, { type: "critical", children: i }), o.map(f)],
            });
            return (0, r.jsx)("div", {
                ref: s,
                className: p.dD,
                children: n
                    ? (0, r.jsxs)(r.Fragment, { children: [t, e] })
                    : (0, r.jsxs)(r.Fragment, { children: [e, t] }),
            });
        }, [i, o, t, n])
    );
}
function N(e) {
    return l.useMemo(
        () =>
            null == e
                ? null
                : Array.isArray(e)
                  ? 0 === e.length
                      ? null
                      : (0, r.jsx)(r.Fragment, { children: e.map((e) => f(e)) })
                  : null != e
                    ? f(e)
                    : null,
        [e],
    );
}
function T(e) {
    let { upperInlineNoticeProps: t, shouldShowGlobalNotices: n, showUpperNoticesAboveGlobalNotices: i } = e,
        o = N(t);
    return l.useMemo(
        () =>
            null != o || n
                ? n
                    ? null != o
                        ? (0, r.jsx)(g, { showUpperNoticesAboveGlobalNotices: i, children: o })
                        : (0, r.jsx)(g, {})
                    : (0, r.jsx)("div", { className: p.dD, children: o })
                : null,
        [n, o, i],
    );
}
function P(e) {
    let {
            upperInlineNoticeProps: t,
            planSelectContent: n,
            purchaseItemContent: l,
            subscriptionDetailsContent: i,
            isStepLoading: u,
            paymentMethodContent: a,
            invoiceSummaryContent: c,
            promotionalNoticeContent: d,
            legalContent: E,
            invoiceTotalDueLabel: h = I.intl.string(_.default.R0cZsM),
            invoiceTotalDueValue: f,
            shouldShowGlobalNotices: m,
            showUpperNoticesAboveGlobalNotices: g,
            footerInlineNoticeProps: P,
            headerBadgeConfig: y,
            className: R,
        } = e,
        O = N(P);
    return u
        ? (0, r.jsx)(A, { className: R, shouldShowUnifiedHeader: !0 })
        : (0, r.jsxs)(r.Fragment, {
              children: [
                  (0, r.jsxs)("div", {
                      className: o()(R, { [p.pg]: null == c }),
                      children: [
                          (0, r.jsx)(T, {
                              upperInlineNoticeProps: t,
                              shouldShowGlobalNotices: m,
                              showUpperNoticesAboveGlobalNotices: g,
                          }),
                          n,
                          null != n && null != l && (0, r.jsx)("div", { className: p.ls }),
                          l,
                          null != i && (0, r.jsx)("div", { className: p.P3, children: i }),
                          (0, r.jsx)("div", { className: p.Jv, children: a }),
                          null != c && (0, r.jsx)("div", { className: p.ZF, children: c }),
                      ],
                  }),
                  (0, r.jsx)(s.UY, { children: (0, r.jsx)(C.f, { headerBadgeConfig: y }) }),
                  (0, r.jsxs)(s.bx, {
                      children: [
                          null != h && null != f && (0, r.jsx)(S.Qf, { className: p.NR, label: h, value: f }),
                          null != d ? (0, r.jsx)("div", { className: p.uh, children: d }) : null,
                          E,
                          null != O ? (0, r.jsx)("div", { className: p.Uu, children: O }) : null,
                      ],
                  }),
              ],
          });
}
