n.d(t, { A: () => ee });
var i = n(627968),
    s = n(64700),
    l = n(503698),
    a = n.n(l),
    r = n(311907),
    o = n(359778),
    d = n(270003),
    u = n(534514),
    c = n(834730),
    g = n(289873),
    m = n(73153),
    _ = n(923408),
    A = n(339048),
    h = n(73825),
    p = n(974544),
    x = n(323082),
    E = n(531260),
    T = n(262077),
    S = n(160946),
    f = n(235986),
    b = n(769015),
    C = n(723588),
    v = n(608699),
    N = n(714308),
    I = n(478407),
    y = n(780964),
    j = n(178241),
    O = n(351906),
    R = n(287809),
    L = n(615405),
    D = n(295405),
    P = n(166403),
    G = n(469778),
    M = n(954571),
    U = n(975571),
    k = n(927578),
    w = n(881489),
    V = n(887997),
    B = n(177653),
    F = n(159906),
    z = n(758400),
    H = n(790284),
    Y = n(788868),
    X = n(652215),
    K = n(355097),
    W = n(985018),
    Z = n(558808);
let q = { [K.nR]: "role_subscriptions_panel", [K.PZ]: "application_subscriptions_panel" };
function Q() {
    return (0, i.jsx)(o.Z, {
        className: Z.wb,
        type: o.Z.Types.CUSTOM,
        children: (0, i.jsxs)(f.A, {
            align: f.A.Align.CENTER,
            children: [
                (0, i.jsx)(b.A, { game: null, size: b.M.SMALL, className: Z.pV }),
                (0, i.jsx)("span", { className: Z.O, children: W.intl.string(W.t["jy/hyj"]) }),
            ],
        }),
    });
}
function J() {
    let e = (0, r.bG)([G.A], () => G.A.getForApplication(Y.tv));
    return (
        s.useEffect(() => {
            (0, A.LM)(Y.tv);
        }, []),
        (0, i.jsx)(d.n, {
            label: W.intl.string(W.t["2GKrvn"]),
            description: W.intl.string(W.t.kNEjGm),
            children:
                null != e && k.Ay.hasAccountCredit(e)
                    ? (0, i.jsx)(B.A, { className: Z.fX, entitlements: e })
                    : (0, i.jsx)(Q, {}),
        })
    );
}
function $() {
    return (0, i.jsx)("hr", { className: Z.hr });
}
let ee = function () {
    var e;
    let t = (0, r.bG)([P.A], () => P.A.getPremiumTypeSubscription()),
        n = (0, T.A)({ subscriptionFilter: (e) => z.Hy.has(e.status) }),
        l = (0, r.bG)([R.default], () => R.default.getCurrentUser()),
        o = n.length > 1,
        d = (0, r.bG)(
            [D.A],
            () => (null != t && null != t.paymentSourceId ? D.A.getPaymentSource(t.paymentSourceId) : null),
            [t],
        ),
        A = (0, r.bG)([P.A], () => P.A.hasFetchedSubscriptions()),
        f = (0, r.bG)([L.A], () => L.A.isBusy),
        b = (0, S.Y)(),
        G = H.A.useField("subsection");
    s.useEffect(() => {
        (0, j._)(null != G ? q[G] : y.X.SUBSCRIPTIONS_PANEL);
    }, [G]);
    let k = (0, r.bG)([P.A], () => P.A.getActiveApplicationSubscriptions()?.length ?? 0),
        B = (0, r.bG)(
            [P.A],
            () =>
                Object.values(P.A.getSubscriptions() ?? {})
                    .filter((e) => e.type === X.rzx.GUILD)
                    .filter((e) => e.status !== X.Dmq.ENDED).length,
        ),
        Q = (0, E.A)({ forceFetch: !0 }),
        ee = (0, w.ds)(),
        et = null !== t ? t.currentPeriodEnd : void 0,
        en =
            !(ee && !(Q.unactivatedUnits.length > 0)) &&
            (Q.fractionalState !== Y.xc.NONE || Q.unactivatedUnits.length > 0);
    return (s.useEffect(
        () => (
            m.h.wait(() => {
                (0, h.zS)(), x.hP(), (0, _.CD)(), x.$o();
            }),
            function () {
                H.A.resetState();
            }
        ),
        [],
    ),
    O.A.enabled)
        ? (0, i.jsx)(p.A, {})
        : A && b
          ? G === K.nR
              ? (0, i.jsx)(v.A, { onGoBack: () => H.A.setState({ subsection: null }) })
              : G === K.PZ
                ? (0, i.jsx)(I.A, { onGoBack: () => H.A.setState({ subsection: null }) })
                : (0, i.jsx)("div", {
                      className: Z.kL,
                      children: (0, i.jsxs)("div", {
                          className: Z.Qs,
                          children: [
                              o ? (0, i.jsx)(z.Sb, {}) : null,
                              null != t
                                  ? (0, i.jsx)(z.Ay, { subscription: t, paymentSource: d, busy: f, subscriptions: n })
                                  : (0, i.jsx)(z.TC, {}),
                              en &&
                                  ((e = !!l?.isPremiumWithPremiumGroup()),
                                  (0, i.jsxs)("section", {
                                      children: [
                                          (0, i.jsx)(u.D, {
                                              variant: "heading-md/bold",
                                              className: Z.HL,
                                              children: W.intl.string(W.t.Obre8v),
                                          }),
                                          (0, i.jsx)(c.E, {
                                              variant: "text-md/normal",
                                              className: Z.JU,
                                              children: W.intl.format(W.t["7Zi06b"], {
                                                  helpCenterLink: U.A.getArticleURL(X.MVz.FRACTIONAL_PREMIUM_ABOUT),
                                              }),
                                          }),
                                          (0, i.jsx)(V.A, {
                                              className: Z.fX,
                                              fractionalPremiumInfo: Q,
                                              activationDate: et,
                                              hasPremiumGroup: e,
                                          }),
                                      ],
                                  })),
                              (0, i.jsx)(J, {}),
                              B > 0 &&
                                  (0, i.jsxs)(i.Fragment, {
                                      children: [
                                          (0, i.jsx)($, {}),
                                          (0, i.jsx)(C.A, {
                                              count: B,
                                              onClickManageSubscription: () => H.A.setState({ subsection: K.nR }),
                                          }),
                                      ],
                                  }),
                              k > 0 &&
                                  (0, i.jsxs)(i.Fragment, {
                                      children: [
                                          (0, i.jsx)($, {}),
                                          (0, i.jsx)(N.A, {
                                              count: k,
                                              onClickManageSubscription: () => {
                                                  H.A.setState({ subsection: K.PZ }),
                                                      M.default.track(
                                                          X.HAw.PREMIUM_APPLICATION_SUBSCRIPTION_MANAGE_CTA_CLICKED,
                                                      );
                                              },
                                          }),
                                      ],
                                  }),
                              (0, i.jsx)($, {}),
                              null != t ? (0, i.jsx)(F.A, { subscription: t, withOverheadSeparator: !1 }) : null,
                          ],
                      }),
                  })
          : (0, i.jsx)("div", { className: a()(Z.kL, Z.Lq), children: (0, i.jsx)(g.y, {}) });
};
