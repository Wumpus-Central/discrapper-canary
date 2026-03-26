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
    m = n(339048),
    _ = n(73825),
    g = n(974544),
    x = n(531260),
    A = n(262077),
    h = n(160946),
    p = n(235986),
    f = n(769015),
    T = n(723588),
    S = n(608699),
    E = n(714308),
    b = n(478407),
    C = n(780964),
    v = n(841329),
    N = n(351906),
    I = n(287809),
    j = n(615405),
    y = n(295405),
    O = n(166403),
    R = n(469778),
    L = n(954571),
    P = n(975571),
    D = n(927578),
    G = n(637073),
    M = n(887997),
    k = n(177653),
    U = n(159906),
    w = n(758400),
    V = n(790284),
    B = n(788868),
    F = n(652215),
    H = n(355097),
    z = n(985018),
    Y = n(295592);
let X = { [H.nR]: "role_subscriptions_panel", [H.PZ]: "application_subscriptions_panel" };
function K() {
    return (0, i.jsx)(o.ZpM, {
        className: Y.wb,
        type: o.ZpM.Types.CUSTOM,
        children: (0, i.jsxs)(p.A, {
            align: p.A.Align.CENTER,
            children: [
                (0, i.jsx)(f.A, { game: null, size: f.M.SMALL, className: Y.pV }),
                (0, i.jsx)("span", { className: Y.O, children: z.intl.string(z.t["jy/hyj"]) }),
            ],
        }),
    });
}
function W() {
    let e = (0, r.bG)([R.A], () => R.A.getForApplication(B.tv));
    return (
        s.useEffect(() => {
            (0, m.LM)(B.tv);
        }, []),
        (0, i.jsx)(o.nVY, {
            label: z.intl.string(z.t["2GKrvn"]),
            description: z.intl.string(z.t.kNEjGm),
            children:
                null != e && D.Ay.hasAccountCredit(e)
                    ? (0, i.jsx)(k.A, { className: Y.fX, entitlements: e })
                    : (0, i.jsx)(K, {}),
        })
    );
}
function Z() {
    return (0, i.jsx)("hr", { className: Y.hr });
}
let q = function () {
    var e;
    let t = (0, r.bG)([O.A], () => O.A.getPremiumTypeSubscription()),
        n = (0, A.A)({ subscriptionFilter: (e) => w.Hy.has(e.status) }),
        l = (0, r.bG)([I.default], () => I.default.getCurrentUser()),
        m = n.length > 1,
        p = (0, r.bG)(
            [y.A],
            () => (null != t && null != t.paymentSourceId ? y.A.getPaymentSource(t.paymentSourceId) : null),
            [t],
        ),
        f = (0, r.bG)([O.A], () => O.A.hasFetchedSubscriptions()),
        R = (0, r.bG)([j.A], () => j.A.isBusy),
        D = (0, h.Y)(),
        k = V.A.useField("subsection");
    s.useEffect(() => {
        (0, v._)(null != k ? X[k] : C.X.SUBSCRIPTIONS_PANEL);
    }, [k]);
    let K = (0, r.bG)([O.A], () => O.A.getActiveApplicationSubscriptions()?.length ?? 0),
        q = (0, r.bG)(
            [O.A],
            () =>
                Object.values(O.A.getSubscriptions() ?? {})
                    .filter((e) => e.type === F.rzx.GUILD)
                    .filter((e) => e.status !== F.Dmq.ENDED).length,
        ),
        Q = (0, x.A)({ forceFetch: !0 }),
        J = (0, G.ds)(),
        $ = null !== t ? t.currentPeriodEnd : void 0,
        ee =
            !(J && !(Q.unactivatedUnits.length > 0)) &&
            (Q.fractionalState !== B.xc.NONE || Q.unactivatedUnits.length > 0);
    return (s.useEffect(
        () => (
            d.h.wait(() => {
                (0, _.zS)(), c.hP(), (0, u.CD)(), c.$o();
            }),
            function () {
                V.A.resetState();
            }
        ),
        [],
    ),
    N.A.enabled)
        ? (0, i.jsx)(g.A, {})
        : f && D
          ? k === H.nR
              ? (0, i.jsx)(S.A, { onGoBack: () => V.A.setState({ subsection: null }) })
              : k === H.PZ
                ? (0, i.jsx)(b.A, { onGoBack: () => V.A.setState({ subsection: null }) })
                : (0, i.jsx)("div", {
                      className: Y.kL,
                      children: (0, i.jsxs)("div", {
                          className: Y.Qs,
                          children: [
                              m ? (0, i.jsx)(w.Sb, {}) : null,
                              null != t
                                  ? (0, i.jsx)(w.Ay, { subscription: t, paymentSource: p, busy: R, subscriptions: n })
                                  : (0, i.jsx)(w.TC, {}),
                              ee &&
                                  ((e = !!l?.isPremiumWithPremiumGroup()),
                                  (0, i.jsxs)("section", {
                                      children: [
                                          (0, i.jsx)(o.Heading, {
                                              variant: "heading-md/bold",
                                              className: Y.HL,
                                              children: z.intl.string(z.t.Obre8v),
                                          }),
                                          (0, i.jsx)(o.Text, {
                                              variant: "text-md/normal",
                                              className: Y.JU,
                                              children: z.intl.format(z.t["7Zi06b"], {
                                                  helpCenterLink: P.A.getArticleURL(F.MVz.FRACTIONAL_PREMIUM_ABOUT),
                                              }),
                                          }),
                                          (0, i.jsx)(M.A, {
                                              className: Y.fX,
                                              fractionalPremiumInfo: Q,
                                              activationDate: $,
                                              hasPremiumGroup: e,
                                          }),
                                      ],
                                  })),
                              (0, i.jsx)(W, {}),
                              q > 0 &&
                                  (0, i.jsxs)(i.Fragment, {
                                      children: [
                                          (0, i.jsx)(Z, {}),
                                          (0, i.jsx)(T.A, {
                                              count: q,
                                              onClickManageSubscription: () => V.A.setState({ subsection: H.nR }),
                                          }),
                                      ],
                                  }),
                              K > 0 &&
                                  (0, i.jsxs)(i.Fragment, {
                                      children: [
                                          (0, i.jsx)(Z, {}),
                                          (0, i.jsx)(E.A, {
                                              count: K,
                                              onClickManageSubscription: () => {
                                                  V.A.setState({ subsection: H.PZ }),
                                                      L.default.track(
                                                          F.HAw.PREMIUM_APPLICATION_SUBSCRIPTION_MANAGE_CTA_CLICKED,
                                                      );
                                              },
                                          }),
                                      ],
                                  }),
                              (0, i.jsx)(Z, {}),
                              null != t ? (0, i.jsx)(U.A, { subscription: t, withOverheadSeparator: !1 }) : null,
                          ],
                      }),
                  })
          : (0, i.jsx)("div", { className: a()(Y.kL, Y.Lq), children: (0, i.jsx)(o.y$y, {}) });
};
