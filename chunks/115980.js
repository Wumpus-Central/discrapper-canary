n.d(t, {
    Ay: () => P,
    HG: () => C,
    OH: () => N,
    ac: () => R,
});
var r = n(627968),
    i = n(64700),
    a = n(311907),
    s = n(397927),
    o = n(384904),
    l = n(974544),
    c = n(971105),
    u = n(767375),
    d = n(459793),
    f = n(195043),
    p = n(351906),
    _ = n(287809),
    h = n(615405),
    m = n(295405),
    g = n(166403),
    E = n(773669),
    b = n(780964),
    y = n(840065),
    O = n(531525),
    A = n(652215),
    v = n(985018),
    S = n(231182);
function I() {
    return (0, r.jsx)("div", {
        className: S.oE,
        children: (0, r.jsx)(s.y$y, {}),
    });
}
function T() {
    (0, y.openUserSettings)(b.X.GIFT_PANEL, { section: A.nc_.INVENTORY });
}
function C(e) {
    let { showHeader: t = !1 } = e,
        n = (0, a.bG)([h.A], () => h.A.isSyncing),
        s = (0, a.bG)([m.A], () => m.A.paymentSources),
        l = (0, a.bG)([m.A], () => m.A.defaultPaymentSourceId),
        c = (0, a.bG)([E.default], () => E.default.locale),
        d = (0, a.bG)([g.A], () => g.A.getPremiumTypeSubscription()),
        f = (0, a.bG)([h.A], () => h.A.isRemovingPaymentSource),
        p = (0, a.bG)([h.A], () => h.A.isUpdatingPaymentSource);
    return (i.useEffect(() => {
        o.$o(), o.hP();
    }, []),
    n && 0 === Object.keys(s).length)
        ? (0, r.jsx)(I, {})
        : (0, r.jsx)(u.A, {
              showHeader: t,
              paymentSources: s,
              defaultPaymentSourceId: l,
              premiumSubscriptionPaymentSourceId: null != d && d.status !== A.Dmq.CANCELED ? d.paymentSourceId : null,
              locale: c,
              removing: f,
              submitting: p,
          });
}
function N(e) {
    let { className: t } = e;
    return (0, r.jsx)(s.po8, {
        messageType: s.YCn.INFO,
        className: t,
        children: v.intl.format(v.t["8b+FXG"], { onClick: T }),
    });
}
function R() {
    let e = (0, a.bG)([E.default], () => E.default.locale);
    return (0, r.jsxs)(r.Fragment, {
        children: [(0, r.jsx)(d.kb, {}), (0, r.jsx)(c.A, { locale: e })],
    });
}
function w() {
    return (0, r.jsxs)("div", {
        children: [
            (0, r.jsx)(f.x, {
                setting: O.H.BILLING_PAYMENT_METHODS,
                children: (0, r.jsx)(C, { showHeader: !0 }),
            }),
            (0, r.jsx)(f.x, {
                setting: O.H.BILLING_TRANSACTION_HISTORY,
                children: (0, r.jsx)("div", {
                    className: S.TI,
                    children: (0, r.jsxs)(s.BJc, {
                        gap: 16,
                        children: [
                            (0, r.jsx)(s.Heading, {
                                variant: "heading-lg/semibold",
                                children: v.intl.string(v.t.obLrcK),
                            }),
                            (0, r.jsx)(R, {}),
                        ],
                    }),
                }),
            }),
            (0, r.jsx)(N, { className: S.Dt }),
        ],
    });
}
function P() {
    let e = (0, a.bG)([_.default], () => null != _.default.getCurrentUser()),
        t = (0, a.bG)([p.A], () => p.A.enabled);
    return e ? (t ? (0, r.jsx)(l.A, {}) : (0, r.jsx)(w, {})) : (0, r.jsx)(I, {});
}
