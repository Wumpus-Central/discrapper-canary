n.d(t, { Ay: () => P, HG: () => v, OH: () => O, ac: () => R });
var i = n(627968),
    s = n(64700),
    a = n(311907),
    l = n(397927),
    r = n(384904),
    o = n(974544),
    c = n(971105),
    d = n(767375),
    u = n(459357),
    _ = n(459793),
    m = n(195043),
    A = n(351906),
    g = n(287809),
    h = n(615405),
    x = n(295405),
    p = n(166403),
    E = n(773669),
    C = n(780964),
    T = n(840065),
    S = n(531525),
    I = n(652215),
    f = n(985018),
    N = n(231182);
function b() {
    return (0, i.jsx)("div", { className: N.oE, children: (0, i.jsx)(l.y$y, {}) });
}
function j() {
    (0, T.openUserSettings)(C.X.GIFT_PANEL, { section: I.nc_.INVENTORY });
}
function v(e) {
    let { showHeader: t = !1 } = e,
        n = (0, a.bG)([h.A], () => h.A.isSyncing),
        l = (0, a.bG)([x.A], () => x.A.paymentSources),
        o = (0, a.bG)([x.A], () => x.A.defaultPaymentSourceId),
        c = (0, a.bG)([E.default], () => E.default.locale),
        _ = (0, a.bG)([p.A], () => p.A.getPremiumTypeSubscription()),
        m = (0, a.bG)([h.A], () => h.A.isRemovingPaymentSource),
        A = (0, a.bG)([h.A], () => h.A.isUpdatingPaymentSource),
        { enabled: g } = (0, u.c)({ location: "UserSettingsBilling" });
    return (s.useEffect(() => {
        r.$o(), r.hP();
    }, []),
    n && 0 === Object.keys(l).length)
        ? (0, i.jsx)(b, {})
        : (0, i.jsx)(d.A, {
              showHeader: t,
              paymentSources: l,
              defaultPaymentSourceId: o,
              premiumSubscriptionPaymentSourceId: null != _ && _.status !== I.Dmq.CANCELED ? _.paymentSourceId : null,
              locale: c,
              removing: m,
              submitting: A,
              showGiftCards: g,
          });
}
function O(e) {
    let { className: t } = e;
    return (0, i.jsx)(l.po8, {
        messageType: l.YCn.INFO,
        className: t,
        children: f.intl.format(f.t["8b+FXG"], { onClick: j }),
    });
}
function R() {
    let e = (0, a.bG)([E.default], () => E.default.locale);
    return (0, i.jsxs)(i.Fragment, { children: [(0, i.jsx)(_.kb, {}), (0, i.jsx)(c.A, { locale: e })] });
}
function y() {
    return (0, i.jsxs)("div", {
        children: [
            (0, i.jsx)(m.x, { setting: S.H.BILLING_PAYMENT_METHODS, children: (0, i.jsx)(v, { showHeader: !0 }) }),
            (0, i.jsx)(m.x, {
                setting: S.H.BILLING_TRANSACTION_HISTORY,
                children: (0, i.jsx)("div", {
                    className: N.TI,
                    children: (0, i.jsxs)(l.BJc, {
                        gap: 16,
                        children: [
                            (0, i.jsx)(l.Heading, {
                                variant: "heading-lg/semibold",
                                children: f.intl.string(f.t.obLrcK),
                            }),
                            (0, i.jsx)(R, {}),
                        ],
                    }),
                }),
            }),
            (0, i.jsx)(O, { className: N.Dt }),
        ],
    });
}
function P() {
    let e = (0, a.bG)([g.default], () => null != g.default.getCurrentUser()),
        t = (0, a.bG)([A.A], () => A.A.enabled);
    return e ? (t ? (0, i.jsx)(o.A, {}) : (0, i.jsx)(y, {})) : (0, i.jsx)(b, {});
}
