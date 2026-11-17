var l = t(477900),
    n = t(582128),
    r = t(503698),
    s = t.n(r);
if (529845 == t.j) var i = t(815390);
var u = t(683071),
    o = t(725836),
    c = t(176702),
    h = t(580133),
    d = t(169797),
    m = t(744615),
    p = t(652215),
    A = t(379912),
    E = t(792996),
    y = t(66414);
function C(e) {
    let { className: a, shouldShowUnifiedHeader: t, headerBadgeConfig: n } = e;
    return (0, l.jsxs)(l.Fragment, {
        children: [
            t ? (0, l.jsx)(o.UY, { children: (0, l.jsx)(h.f, { headerBadgeConfig: n }) }) : null,
            (0, l.jsx)(d.DJ, { className: s()(y.g4, a) }),
        ],
    });
}
function P(e) {
    return null != e && "object" == typeof e && "message" in e && "type" in e
        ? (0, l.jsx)(u.w, { type: e.type, hidden: e.hidden, message: e.message, role: e.role }, e.key)
        : (0, l.jsx)(n.Fragment, { children: e.directContent }, e.key);
}
function x(e) {
    return null == e || "" === e;
}
function g(e) {
    let { children: a, showUpperNoticesAboveGlobalNotices: t = !1 } = e,
        { errorMessage: r, richNotices: s } = (0, c.u)(),
        i = n.useRef(null);
    return (
        n.useEffect(() => {
            x(r) || null == i.current || i.current.scrollIntoView({ behavior: "smooth" });
        }, [r]),
        n.useMemo(() => {
            if (!(!x(r) || s.length > 0 || null != a)) return null;
            let e = (0, l.jsxs)(l.Fragment, {
                children: [x(r) ? null : (0, l.jsx)(u.w, { type: "critical", message: r, role: "alert" }), s.map(P)],
            });
            return (0, l.jsx)("div", {
                ref: i,
                className: y.dD,
                children: t
                    ? (0, l.jsxs)(l.Fragment, { children: [a, e] })
                    : (0, l.jsxs)(l.Fragment, { children: [e, a] }),
            });
        }, [r, s, a, t])
    );
}
function f(e) {
    return n.useMemo(
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
function T(e) {
    let { footerInlineNoticeProps: a } = e,
        t = f(a);
    return null == t ? null : (0, l.jsx)("div", { className: y.Uu, children: t });
}
function v(e) {
    let { upperInlineNoticeProps: a, shouldShowGlobalNotices: t, showUpperNoticesAboveGlobalNotices: r } = e,
        s = f(a);
    return n.useMemo(
        () =>
            null != s || t
                ? t
                    ? null != s
                        ? (0, l.jsx)(g, { showUpperNoticesAboveGlobalNotices: r, children: s })
                        : (0, l.jsx)(g, {})
                    : (0, l.jsx)("div", { className: y.dD, children: s })
                : null,
        [t, s, r],
    );
}
function M(e) {
    let { children: a } = e;
    return (0, l.jsx)("div", { className: y.uh, children: a });
}
t.d(
    a,
    {},
    {
        Ed: C,
        T_: function (e) {
            let {
                    upperInlineNoticeProps: a,
                    upperInlineNoticeContent: t,
                    planSelectContent: r,
                    purchaseItemContent: i,
                    subscriptionDetailsContent: u,
                    isStepLoading: c,
                    paymentMethodContent: d,
                    invoiceSummaryContent: p,
                    promotionalNoticeContent: P,
                    tenantProvidesPromotionalNoticeContainer: x,
                    legalContent: g,
                    invoiceTotalDueLabel: f = E.intl.string(A.default.R0cZsM),
                    invoiceTotalDueValue: _,
                    shouldShowGlobalNotices: I,
                    showUpperNoticesAboveGlobalNotices: S,
                    footerInlineNoticeProps: N,
                    footerInlineNoticeContent: R,
                    headerBadgeConfig: j,
                    className: L,
                } = e,
                { setCheckoutFooterLineItemNode: b } = (0, o.ck)(),
                k = n.useMemo(() => (null == P ? null : x ? P : (0, l.jsx)(M, { children: P })), [P, x]);
            return c
                ? (0, l.jsx)(C, { className: L, shouldShowUnifiedHeader: !0 })
                : (0, l.jsxs)(l.Fragment, {
                      children: [
                          (0, l.jsxs)("div", {
                              className: s()(L, { [y.pg]: null == p }),
                              children: [
                                  null != t
                                      ? t
                                      : (0, l.jsx)(v, {
                                            upperInlineNoticeProps: a,
                                            shouldShowGlobalNotices: I,
                                            showUpperNoticesAboveGlobalNotices: S,
                                        }),
                                  r,
                                  null != r && null != i && (0, l.jsx)("div", { className: y.ls }),
                                  i,
                                  null != u && (0, l.jsx)("div", { className: y.P3, children: u }),
                                  (0, l.jsx)("div", { className: y.Jv, children: d }),
                                  null != p && (0, l.jsx)("div", { className: y.ZF, children: p }),
                              ],
                          }),
                          (0, l.jsx)(o.UY, { children: (0, l.jsx)(h.f, { headerBadgeConfig: j }) }),
                          (0, l.jsxs)(o.bx, {
                              children: [
                                  (0, l.jsx)("div", { ref: b }),
                                  null != f && null != _ && (0, l.jsx)(m.Qf, { className: y.NR, label: f, value: _ }),
                                  k,
                                  g,
                                  null != R ? R : (0, l.jsx)(T, { footerInlineNoticeProps: N }),
                              ],
                          }),
                      ],
                  });
        },
        Wl: T,
        iA: M,
        yg: function () {
            return (0, l.jsx)(d.Jg, {
                transitionState: i.i.ENTERED,
                onClose: p.tEg,
                size: "md",
                isModalContentLoading: !0,
                children: (0, l.jsx)(C, { shouldShowUnifiedHeader: !0 }),
            });
        },
        zJ: v,
    },
);
