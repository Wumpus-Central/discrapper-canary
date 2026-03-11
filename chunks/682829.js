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
    g = n(73825),
    m = n(974544),
    A = n(531260),
    h = n(262077),
    p = n(160946),
    x = n(235986),
    E = n(769015),
    T = n(723588),
    S = n(608699),
    C = n(714308),
    f = n(478407),
    I = n(195043),
    b = n(351906),
    N = n(287809),
    v = n(615405),
    j = n(295405),
    O = n(166403),
    R = n(469778),
    y = n(954571),
    P = n(975571),
    L = n(927578),
    D = n(115063),
    G = n(637073),
    M = n(887997),
    U = n(177653),
    k = n(159906),
    V = n(758400),
    w = n(790284),
    H = n(788868),
    B = n(652215),
    F = n(355097),
    Y = n(531525),
    z = n(985018),
    X = n(547605);
function W() {
    return (0, i.jsx)(o.ZpM, {
        className: X.wb,
        type: o.ZpM.Types.CUSTOM,
        children: (0, i.jsxs)(x.A, {
            align: x.A.Align.CENTER,
            children: [
                (0, i.jsx)(E.A, { game: null, size: E.M.SMALL, className: X.pV }),
                (0, i.jsx)("span", { className: X.O, children: z.intl.string(z.t["jy/hyj"]) }),
            ],
        }),
    });
}
function K() {
    let e = (0, r.bG)([R.A], () => R.A.getForApplication(H.tv));
    return (
        s.useEffect(() => {
            (0, _.LM)(H.tv);
        }, []),
        (0, i.jsx)(o.nVY, {
            label: z.intl.string(z.t["2GKrvn"]),
            description: z.intl.string(z.t.kNEjGm),
            children:
                null != e && L.Ay.hasAccountCredit(e)
                    ? (0, i.jsx)(U.A, { className: X.fX, entitlements: e })
                    : (0, i.jsx)(W, {}),
        })
    );
}
function Z() {
    return (0, i.jsx)("hr", { className: X.hr });
}
let q = function () {
    var e;
    let t = (0, r.bG)([O.A], () => O.A.getPremiumTypeSubscription()),
        n = (0, h.A)({ subscriptionFilter: (e) => V.Hy.has(e.status) }),
        l = (0, r.bG)([N.default], () => N.default.getCurrentUser()),
        _ = n.length > 1,
        x = (0, r.bG)(
            [j.A],
            () => (null != t && null != t.paymentSourceId ? j.A.getPaymentSource(t.paymentSourceId) : null),
            [t],
        ),
        E = (0, r.bG)([O.A], () => O.A.hasFetchedSubscriptions()),
        R = (0, r.bG)([v.A], () => v.A.isBusy),
        L = (0, p.Y)(),
        U = w.A.useField("subsection"),
        W = s.useRef(U);
    s.useEffect(() => {
        U !== W.current &&
            ((0, D.iY)({ originPane: B.nc_.SUBSCRIPTIONS, destinationPane: B.nc_.SUBSCRIPTIONS, subsection: U }),
            (W.current = U));
    }, [U]);
    let q = (0, r.bG)([O.A], () => O.A.getActiveApplicationSubscriptions()?.length ?? 0),
        J = (0, r.bG)(
            [O.A],
            () =>
                Object.values(O.A.getSubscriptions() ?? {})
                    .filter((e) => e.type === B.rzx.GUILD)
                    .filter((e) => e.status !== B.Dmq.ENDED).length,
        ),
        Q = (0, A.A)({ forceFetch: !0 }),
        $ = (0, G.d)(),
        ee = null !== t ? t.currentPeriodEnd : void 0,
        et =
            !($ && !(Q.unactivatedUnits.length > 0)) &&
            (Q.fractionalState !== H.xc.NONE || Q.unactivatedUnits.length > 0);
    return (s.useEffect(
        () => (
            d.h.wait(() => {
                (0, g.zS)(), c.hP(), (0, u.CD)(), c.$o();
            }),
            function () {
                w.A.resetState();
            }
        ),
        [],
    ),
    b.A.enabled)
        ? (0, i.jsx)(m.A, {})
        : E && L
          ? U === F.nR
              ? (0, i.jsx)(S.A, { onGoBack: () => w.A.setState({ subsection: null }) })
              : U === F.PZ
                ? (0, i.jsx)(f.A, { onGoBack: () => w.A.setState({ subsection: null }) })
                : (0, i.jsx)("div", {
                      className: X.kL,
                      children: (0, i.jsxs)("div", {
                          className: X.Qs,
                          children: [
                              _ ? (0, i.jsx)(V.Sb, {}) : null,
                              null != t
                                  ? (0, i.jsx)(V.Ay, { subscription: t, paymentSource: x, busy: R, subscriptions: n })
                                  : (0, i.jsx)(V.TC, {}),
                              et &&
                                  ((e = !!l?.isPremiumWithPremiumGroup()),
                                  (0, i.jsxs)("section", {
                                      children: [
                                          (0, i.jsx)(o.Heading, {
                                              variant: "heading-md/bold",
                                              className: X.HL,
                                              children: z.intl.string(z.t.Obre8v),
                                          }),
                                          (0, i.jsx)(o.Text, {
                                              variant: "text-md/normal",
                                              className: X.JU,
                                              children: z.intl.format(z.t["7Zi06b"], {
                                                  helpCenterLink: P.A.getArticleURL(B.MVz.FRACTIONAL_PREMIUM_ABOUT),
                                              }),
                                          }),
                                          (0, i.jsx)(M.A, {
                                              className: X.fX,
                                              fractionalPremiumInfo: Q,
                                              activationDate: ee,
                                              hasPremiumGroup: e,
                                          }),
                                      ],
                                  })),
                              (0, i.jsx)(I.x, { setting: Y.H.SUBSCRIPTIONS_CREDITS, children: (0, i.jsx)(K, {}) }),
                              J > 0 &&
                                  (0, i.jsxs)(i.Fragment, {
                                      children: [
                                          (0, i.jsx)(Z, {}),
                                          (0, i.jsx)(T.A, {
                                              count: J,
                                              onClickManageSubscription: () => w.A.setState({ subsection: F.nR }),
                                          }),
                                      ],
                                  }),
                              q > 0 &&
                                  (0, i.jsxs)(i.Fragment, {
                                      children: [
                                          (0, i.jsx)(Z, {}),
                                          (0, i.jsx)(C.A, {
                                              count: q,
                                              onClickManageSubscription: () => {
                                                  w.A.setState({ subsection: F.PZ }),
                                                      y.default.track(
                                                          B.HAw.PREMIUM_APPLICATION_SUBSCRIPTION_MANAGE_CTA_CLICKED,
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
          : (0, i.jsx)("div", { className: a()(X.kL, X.Lq), children: (0, i.jsx)(o.y$y, {}) });
};
