n.d(t, { Ay: () => O, HG: () => j, OH: () => v, ac: () => y });
var i = n(627968),
    l = n(64700),
    s = n(311907),
    a = n(397927),
    r = n(384904),
    o = n(974544),
    d = n(971105),
    c = n(767375),
    u = n(459793),
    h = n(195043),
    A = n(351906),
    g = n(287809),
    m = n(615405),
    p = n(295405),
    _ = n(166403),
    x = n(773669),
    f = n(780964),
    E = n(840065),
    C = n(531525),
    I = n(652215),
    S = n(985018),
    b = n(231182);
function N() {
    return (0, i.jsx)("div", { className: b.oE, children: (0, i.jsx)(a.y$y, {}) });
}
function T() {
    (0, E.openUserSettings)(f.X.GIFT_PANEL, { section: I.nc_.INVENTORY });
}
function j(e) {
    let { showHeader: t = !1 } = e,
        n = (0, s.bG)([m.A], () => m.A.isSyncing),
        a = (0, s.bG)([p.A], () => p.A.paymentSources),
        o = (0, s.bG)([p.A], () => p.A.defaultPaymentSourceId),
        d = (0, s.bG)([x.default], () => x.default.locale),
        u = (0, s.bG)([_.A], () => _.A.getPremiumTypeSubscription()),
        h = (0, s.bG)([m.A], () => m.A.isRemovingPaymentSource),
        A = (0, s.bG)([m.A], () => m.A.isUpdatingPaymentSource);
    return (l.useEffect(() => {
        r.$o(), r.hP();
    }, []),
    n && 0 === Object.keys(a).length)
        ? (0, i.jsx)(N, {})
        : (0, i.jsx)(c.A, {
              showHeader: t,
              paymentSources: a,
              defaultPaymentSourceId: o,
              premiumSubscriptionPaymentSourceId: null != u && u.status !== I.Dmq.CANCELED ? u.paymentSourceId : null,
              locale: d,
              removing: h,
              submitting: A,
          });
}
function v(e) {
    let { className: t } = e;
    return (0, i.jsx)(a.po8, {
        messageType: a.YCn.INFO,
        className: t,
        children: S.intl.format(S.t["8b+FXG"], { onClick: T }),
    });
}
function y() {
    let e = (0, s.bG)([x.default], () => x.default.locale);
    return (0, i.jsxs)(i.Fragment, { children: [(0, i.jsx)(u.kb, {}), (0, i.jsx)(d.A, { locale: e })] });
}
function R() {
    return (0, i.jsxs)("div", {
        children: [
            (0, i.jsx)(h.x, { setting: C.H.BILLING_PAYMENT_METHODS, children: (0, i.jsx)(j, { showHeader: !0 }) }),
            (0, i.jsx)(h.x, {
                setting: C.H.BILLING_TRANSACTION_HISTORY,
                children: (0, i.jsx)("div", {
                    className: b.TI,
                    children: (0, i.jsxs)(a.BJc, {
                        gap: 16,
                        children: [
                            (0, i.jsx)(a.Heading, {
                                variant: "heading-lg/semibold",
                                children: S.intl.string(S.t.obLrcK),
                            }),
                            (0, i.jsx)(y, {}),
                        ],
                    }),
                }),
            }),
            (0, i.jsx)(v, { className: b.Dt }),
        ],
    });
}
function O() {
    let e = (0, s.bG)([g.default], () => null != g.default.getCurrentUser()),
        t = (0, s.bG)([A.A], () => A.A.enabled);
    return e ? (t ? (0, i.jsx)(o.A, {}) : (0, i.jsx)(R, {})) : (0, i.jsx)(N, {});
}
