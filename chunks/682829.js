n.d(t, { A: () => q });
var i = n(627968),
    s = n(64700),
    l = n(503698),
    a = n.n(l),
    r = n(311907),
    o = n(397927),
    d = n(73153),
    c = n(384904),
    u = n(923408),
    _ = n(339048),
    m = n(73825),
    g = n(974544),
    A = n(531260),
    h = n(262077),
    x = n(160946),
    p = n(235986),
    T = n(769015),
    E = n(723588),
    S = n(608699),
    C = n(714308),
    f = n(478407),
    b = n(780964),
    N = n(841329),
    I = n(351906),
    v = n(287809),
    j = n(615405),
    y = n(295405),
    R = n(166403),
    O = n(469778),
    P = n(954571),
    D = n(975571),
    L = n(927578),
    G = n(637073),
    M = n(887997),
    U = n(177653),
    k = n(159906),
    V = n(758400),
    w = n(790284),
    B = n(788868),
    H = n(652215),
    F = n(355097),
    Y = n(985018),
    z = n(547605);
let X = { [F.nR]: "role_subscriptions_panel", [F.PZ]: "application_subscriptions_panel" };
function W() {
    return (0, i.jsx)(o.ZpM, {
        className: z.wb,
        type: o.ZpM.Types.CUSTOM,
        children: (0, i.jsxs)(p.A, {
            align: p.A.Align.CENTER,
            children: [
                (0, i.jsx)(T.A, { game: null, size: T.M.SMALL, className: z.pV }),
                (0, i.jsx)("span", { className: z.O, children: Y.intl.string(Y.t["jy/hyj"]) }),
            ],
        }),
    });
}
function K() {
    let e = (0, r.bG)([O.A], () => O.A.getForApplication(B.tv));
    return (
        s.useEffect(() => {
            (0, _.LM)(B.tv);
        }, []),
        (0, i.jsx)(o.nVY, {
            label: Y.intl.string(Y.t["2GKrvn"]),
            description: Y.intl.string(Y.t.kNEjGm),
            children:
                null != e && L.Ay.hasAccountCredit(e)
                    ? (0, i.jsx)(U.A, { className: z.fX, entitlements: e })
                    : (0, i.jsx)(W, {}),
        })
    );
}
function Z() {
    return (0, i.jsx)("hr", { className: z.hr });
}
let q = function () {
    var e;
    let t = (0, r.bG)([R.A], () => R.A.getPremiumTypeSubscription()),
        n = (0, h.A)({ subscriptionFilter: (e) => V.Hy.has(e.status) }),
        l = (0, r.bG)([v.default], () => v.default.getCurrentUser()),
        _ = n.length > 1,
        p = (0, r.bG)(
            [y.A],
            () => (null != t && null != t.paymentSourceId ? y.A.getPaymentSource(t.paymentSourceId) : null),
            [t],
        ),
        T = (0, r.bG)([R.A], () => R.A.hasFetchedSubscriptions()),
        O = (0, r.bG)([j.A], () => j.A.isBusy),
        L = (0, x.Y)(),
        U = w.A.useField("subsection");
    s.useEffect(() => {
        (0, N._)(null != U ? X[U] : b.X.SUBSCRIPTIONS_PANEL);
    }, [U]);
    let W = (0, r.bG)([R.A], () => R.A.getActiveApplicationSubscriptions()?.length ?? 0),
        q = (0, r.bG)(
            [R.A],
            () =>
                Object.values(R.A.getSubscriptions() ?? {})
                    .filter((e) => e.type === H.rzx.GUILD)
                    .filter((e) => e.status !== H.Dmq.ENDED).length,
        ),
        J = (0, A.A)({ forceFetch: !0 }),
        Q = (0, G.d)(),
        $ = null !== t ? t.currentPeriodEnd : void 0,
        ee =
            !(Q && !(J.unactivatedUnits.length > 0)) &&
            (J.fractionalState !== B.xc.NONE || J.unactivatedUnits.length > 0);
    return (s.useEffect(
        () => (
            d.h.wait(() => {
                (0, m.zS)(), c.hP(), (0, u.CD)(), c.$o();
            }),
            function () {
                w.A.resetState();
            }
        ),
        [],
    ),
    I.A.enabled)
        ? (0, i.jsx)(g.A, {})
        : T && L
          ? U === F.nR
              ? (0, i.jsx)(S.A, { onGoBack: () => w.A.setState({ subsection: null }) })
              : U === F.PZ
                ? (0, i.jsx)(f.A, { onGoBack: () => w.A.setState({ subsection: null }) })
                : (0, i.jsx)("div", {
                      className: z.kL,
                      children: (0, i.jsxs)("div", {
                          className: z.Qs,
                          children: [
                              _ ? (0, i.jsx)(V.Sb, {}) : null,
                              null != t
                                  ? (0, i.jsx)(V.Ay, { subscription: t, paymentSource: p, busy: O, subscriptions: n })
                                  : (0, i.jsx)(V.TC, {}),
                              ee &&
                                  ((e = !!l?.isPremiumWithPremiumGroup()),
                                  (0, i.jsxs)("section", {
                                      children: [
                                          (0, i.jsx)(o.Heading, {
                                              variant: "heading-md/bold",
                                              className: z.HL,
                                              children: Y.intl.string(Y.t.Obre8v),
                                          }),
                                          (0, i.jsx)(o.Text, {
                                              variant: "text-md/normal",
                                              className: z.JU,
                                              children: Y.intl.format(Y.t["7Zi06b"], {
                                                  helpCenterLink: D.A.getArticleURL(H.MVz.FRACTIONAL_PREMIUM_ABOUT),
                                              }),
                                          }),
                                          (0, i.jsx)(M.A, {
                                              className: z.fX,
                                              fractionalPremiumInfo: J,
                                              activationDate: $,
                                              hasPremiumGroup: e,
                                          }),
                                      ],
                                  })),
                              (0, i.jsx)(K, {}),
                              q > 0 &&
                                  (0, i.jsxs)(i.Fragment, {
                                      children: [
                                          (0, i.jsx)(Z, {}),
                                          (0, i.jsx)(E.A, {
                                              count: q,
                                              onClickManageSubscription: () => w.A.setState({ subsection: F.nR }),
                                          }),
                                      ],
                                  }),
                              W > 0 &&
                                  (0, i.jsxs)(i.Fragment, {
                                      children: [
                                          (0, i.jsx)(Z, {}),
                                          (0, i.jsx)(C.A, {
                                              count: W,
                                              onClickManageSubscription: () => {
                                                  w.A.setState({ subsection: F.PZ }),
                                                      P.default.track(
                                                          H.HAw.PREMIUM_APPLICATION_SUBSCRIPTION_MANAGE_CTA_CLICKED,
                                                      );
                                              },
                                          }),
                                      ],
                                  }),
                              (0, i.jsx)(Z, {}),
                              null != t ? (0, i.jsx)(k.A, { subscription: t, withOverheadSeparator: !1 }) : null,
                          ],
                      }),
                  })
          : (0, i.jsx)("div", { className: a()(z.kL, z.Lq), children: (0, i.jsx)(o.y$y, {}) });
};
