var l = n(477900),
    i = n(582128),
    o = n(503698),
    r = n.n(o),
    a = n(683071),
    s = n(725836),
    u = n(176702),
    c = n(580133),
    d = n(169797),
    C = n(744615);
n(652215);
var h = n(379912),
    p = n(792996),
    m = n(66414);
function f(e) {
    let { className: t, shouldShowUnifiedHeader: n, headerBadgeConfig: i } = e;
    return (0, l.jsxs)(l.Fragment, {
        children: [
            n ? (0, l.jsx)(s.UY, { children: (0, l.jsx)(c.f, { headerBadgeConfig: i }) }) : null,
            (0, l.jsx)(d.DJ, { className: r()(m.g4, t) }),
        ],
    });
}
function E(e) {
    return null != e && "object" == typeof e && "message" in e && "type" in e
        ? (0, l.jsx)(a.w, { type: e.type, hidden: e.hidden, message: e.message, role: e.role }, e.key)
        : (0, l.jsx)(i.Fragment, { children: e.directContent }, e.key);
}
function _(e) {
    return null == e || "" === e;
}
function y(e) {
    let { children: t, showUpperNoticesAboveGlobalNotices: n = !1 } = e,
        { errorMessage: o, richNotices: r } = (0, u.u)(),
        s = i.useRef(null);
    return (
        i.useEffect(() => {
            _(o) || null == s.current || s.current.scrollIntoView({ behavior: "smooth" });
        }, [o]),
        i.useMemo(() => {
            if (!(!_(o) || r.length > 0 || null != t)) return null;
            let e = (0, l.jsxs)(l.Fragment, {
                children: [_(o) ? null : (0, l.jsx)(a.w, { type: "critical", message: o, role: "alert" }), r.map(E)],
            });
            return (0, l.jsx)("div", {
                ref: s,
                className: m.dD,
                children: n
                    ? (0, l.jsxs)(l.Fragment, { children: [t, e] })
                    : (0, l.jsxs)(l.Fragment, { children: [e, t] }),
            });
        }, [o, r, t, n])
    );
}
function g(e) {
    return i.useMemo(
        () =>
            null == e
                ? null
                : Array.isArray(e)
                  ? 0 === e.length
                      ? null
                      : (0, l.jsx)(l.Fragment, { children: e.map((e) => E(e)) })
                  : null != e
                    ? E(e)
                    : null,
        [e],
    );
}
function A(e) {
    let { footerInlineNoticeProps: t } = e,
        n = g(t);
    return null == n ? null : (0, l.jsx)("div", { className: m.Uu, children: n });
}
function T(e) {
    let { upperInlineNoticeProps: t, shouldShowGlobalNotices: n, showUpperNoticesAboveGlobalNotices: o } = e,
        r = g(t);
    return i.useMemo(
        () =>
            null != r || n
                ? n
                    ? null != r
                        ? (0, l.jsx)(y, { showUpperNoticesAboveGlobalNotices: o, children: r })
                        : (0, l.jsx)(y, {})
                    : (0, l.jsx)("div", { className: m.dD, children: r })
                : null,
        [n, r, o],
    );
}
function S(e) {
    let { children: t } = e;
    return (0, l.jsx)("div", { className: m.uh, children: t });
}
n.d(
    t,
    {},
    {
        Ed: f,
        T_: function (e) {
            let {
                    upperInlineNoticeProps: t,
                    upperInlineNoticeContent: n,
                    planSelectContent: o,
                    purchaseItemContent: a,
                    subscriptionDetailsContent: u,
                    isStepLoading: d,
                    paymentMethodContent: E,
                    invoiceSummaryContent: _,
                    promotionalNoticeContent: y,
                    tenantProvidesPromotionalNoticeContainer: g,
                    legalContent: N,
                    invoiceTotalDueLabel: O = p.intl.string(h.default.R0cZsM),
                    invoiceTotalDueValue: k,
                    shouldShowGlobalNotices: x,
                    showUpperNoticesAboveGlobalNotices: I,
                    footerInlineNoticeProps: v,
                    footerInlineNoticeContent: j,
                    headerBadgeConfig: w,
                    className: P,
                } = e,
                { setCheckoutFooterLineItemNode: F } = (0, s.ck)(),
                b = i.useMemo(() => (null == y ? null : g ? y : (0, l.jsx)(S, { children: y })), [y, g]);
            return d
                ? (0, l.jsx)(f, { className: P, shouldShowUnifiedHeader: !0 })
                : (0, l.jsxs)(l.Fragment, {
                      children: [
                          (0, l.jsxs)("div", {
                              className: r()(P, { [m.pg]: null == _ }),
                              children: [
                                  null != n
                                      ? n
                                      : (0, l.jsx)(T, {
                                            upperInlineNoticeProps: t,
                                            shouldShowGlobalNotices: x,
                                            showUpperNoticesAboveGlobalNotices: I,
                                        }),
                                  o,
                                  null != o && null != a && (0, l.jsx)("div", { className: m.ls }),
                                  a,
                                  null != u && (0, l.jsx)("div", { className: m.P3, children: u }),
                                  (0, l.jsx)("div", { className: m.Jv, children: E }),
                                  null != _ && (0, l.jsx)("div", { className: m.ZF, children: _ }),
                              ],
                          }),
                          (0, l.jsx)(s.UY, { children: (0, l.jsx)(c.f, { headerBadgeConfig: w }) }),
                          (0, l.jsxs)(s.bx, {
                              children: [
                                  (0, l.jsx)("div", { ref: F }),
                                  null != O && null != k && (0, l.jsx)(C.Qf, { className: m.NR, label: O, value: k }),
                                  b,
                                  N,
                                  null != j ? j : (0, l.jsx)(A, { footerInlineNoticeProps: v }),
                              ],
                          }),
                      ],
                  });
        },
        Wl: A,
        iA: S,
        zJ: T,
    },
);
