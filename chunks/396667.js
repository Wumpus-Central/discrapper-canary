n.d(t, { A: () => h });
var i = n(627968),
    s = n(64700),
    l = n(289873),
    a = n(311907),
    r = n(767375),
    o = n(323082),
    d = n(459357),
    u = n(615405),
    c = n(295405),
    g = n(166403),
    m = n(773669),
    _ = n(652215),
    A = n(18068);
function h(e) {
    let { showHeader: t = !1 } = e,
        n = (0, a.bG)([u.A], () => u.A.isSyncing),
        h = (0, a.bG)([c.A], () => c.A.paymentSources),
        p = (0, a.bG)([c.A], () => c.A.defaultPaymentSourceId),
        x = (0, a.bG)([m.default], () => m.default.locale),
        E = (0, a.bG)([g.A], () => g.A.getPremiumTypeSubscription()),
        T = (0, a.bG)([u.A], () => u.A.isRemovingPaymentSource),
        S = (0, a.bG)([u.A], () => u.A.isUpdatingPaymentSource),
        { enabled: f } = (0, d.c)({ location: "UserSettingsBilling" });
    return (s.useEffect(() => {
        o.$o(), o.hP();
    }, []),
    n && 0 === Object.keys(h).length)
        ? (0, i.jsx)("div", { className: A.o, children: (0, i.jsx)(l.y, {}) })
        : (0, i.jsx)(r.A, {
              showHeader: t,
              paymentSources: h,
              defaultPaymentSourceId: p,
              premiumSubscriptionPaymentSourceId: null != E && E.status !== _.Dmq.CANCELED ? E.paymentSourceId : null,
              locale: x,
              removing: T,
              submitting: S,
              showGiftCards: f,
          });
}
