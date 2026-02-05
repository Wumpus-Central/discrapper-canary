n.d(t, { A: () => Q });
var i = n(627968),
    l = n(64700),
    s = n(503698),
    a = n.n(s),
    r = n(311907),
    o = n(397927),
    d = n(73153),
    c = n(384904),
    u = n(923408),
    h = n(339048),
    A = n(73825),
    g = n(252452),
    m = n(974544),
    p = n(531260),
    _ = n(262077),
    x = n(160946),
    f = n(235986),
    E = n(769015),
    C = n(723588),
    I = n(608699),
    S = n(714308),
    b = n(478407),
    N = n(195043),
    T = n(780964),
    j = n(840065),
    v = n(351906),
    y = n(628965),
    R = n(615405),
    O = n(295405),
    L = n(166403),
    D = n(469778),
    M = n(954571),
    G = n(975571),
    U = n(927578),
    P = n(637073),
    k = n(887997),
    w = n(177653),
    V = n(159906),
    B = n(758400),
    H = n(788868),
    F = n(652215),
    Y = n(355097),
    W = n(531525),
    K = n(985018),
    z = n(547605);
function X() {
    return (0, i.jsx)(o.ZpM, {
        className: z.wb,
        type: o.ZpM.Types.CUSTOM,
        children: (0, i.jsxs)(f.A, {
            align: f.A.Align.CENTER,
            children: [
                (0, i.jsx)(E.A, { game: null, size: E.M.SMALL, className: z.pV }),
                (0, i.jsx)("span", { className: z.O, children: K.intl.string(K.t["jy/hyj"]) }),
            ],
        }),
    });
}
function q() {
    let e = (0, r.bG)([D.A], () => D.A.getForApplication(H.tv));
    return (
        l.useEffect(() => {
            (0, h.LM)(H.tv);
        }, []),
        (0, i.jsx)(o.nVY, {
            label: K.intl.string(K.t["2GKrvn"]),
            description: K.intl.string(K.t.kNEjGm),
            children:
                null != e && U.Ay.hasAccountCredit(e)
                    ? (0, i.jsx)(w.A, { className: z.fX, entitlements: e })
                    : (0, i.jsx)(X, {}),
        })
    );
}
function J() {
    return (0, i.jsx)("hr", { className: z.hr });
}
let Q = function () {
    let e = (0, r.bG)([L.A], () => L.A.getPremiumTypeSubscription()),
        t = (0, _.A)({ subscriptionFilter: (e) => B.Hy.has(e.status) }),
        n = t.length > 1,
        s = (0, r.bG)(
            [O.A],
            () => (null != e && null != e.paymentSourceId ? O.A.getPaymentSource(e.paymentSourceId) : null),
            [e],
        ),
        h = (0, r.bG)([L.A], () => L.A.hasFetchedSubscriptions()),
        f = (0, r.bG)([R.A], () => R.A.isBusy),
        E = (0, x.Y)(),
        D = (0, r.bG)([y.A], () => y.A.getSubsection()),
        U = (0, r.bG)([L.A], () => L.A.getActiveApplicationSubscriptions()?.length ?? 0),
        w = (0, r.bG)(
            [L.A],
            () =>
                Object.values(L.A.getSubscriptions() ?? {})
                    .filter((e) => e.type === F.rzx.GUILD)
                    .filter((e) => e.status !== F.Dmq.ENDED).length,
        ),
        X = (0, p.A)({ forceFetch: !0 }),
        Q = (0, P.d)(),
        Z = null !== e ? e.currentPeriodEnd : void 0,
        $ =
            !(Q && !(X.unactivatedUnits.length > 0)) &&
            (X.fractionalState !== H.xc.NONE || X.unactivatedUnits.length > 0);
    return (l.useEffect(
        () => (
            d.h.wait(() => {
                (0, A.zS)(), c.hP(), (0, u.CD)(), c.$o();
            }),
            function () {
                g.A.clearSubsection();
            }
        ),
        [],
    ),
    v.A.enabled)
        ? (0, i.jsx)(m.A, {})
        : h && E
          ? D === Y.nR
              ? (0, i.jsx)(I.A, { onGoBack: () => g.A.clearSubsection() })
              : D === Y.PZ
                ? (0, i.jsx)(b.A, { onGoBack: () => g.A.clearSubsection() })
                : (0, i.jsx)("div", {
                      className: z.kL,
                      children: (0, i.jsxs)("div", {
                          className: z.Qs,
                          children: [
                              n ? (0, i.jsx)(B.Sb, {}) : null,
                              null != e
                                  ? (0, i.jsx)(B.Ay, { subscription: e, paymentSource: s, busy: f, subscriptions: t })
                                  : (0, i.jsx)(B.TC, {}),
                              $ &&
                                  (0, i.jsxs)("section", {
                                      children: [
                                          (0, i.jsx)(o.Heading, {
                                              variant: "heading-md/bold",
                                              className: z.HL,
                                              children: K.intl.string(K.t.Obre8v),
                                          }),
                                          (0, i.jsx)(o.Text, {
                                              variant: "text-md/normal",
                                              className: z.JU,
                                              children: K.intl.format(K.t["7Zi06b"], {
                                                  helpCenterLink: G.A.getArticleURL(F.MVz.FRACTIONAL_PREMIUM_ABOUT),
                                              }),
                                          }),
                                          (0, i.jsx)(k.A, {
                                              className: z.fX,
                                              fractionalPremiumInfo: X,
                                              activationDate: Z,
                                          }),
                                      ],
                                  }),
                              (0, i.jsx)(N.x, { setting: W.H.SUBSCRIPTIONS_CREDITS, children: (0, i.jsx)(q, {}) }),
                              w > 0 &&
                                  (0, i.jsxs)(i.Fragment, {
                                      children: [
                                          (0, i.jsx)(J, {}),
                                          (0, i.jsx)(C.A, {
                                              count: w,
                                              onClickManageSubscription: () =>
                                                  (0, j.openUserSettings)(T.X.SUBSCRIPTIONS_PANEL, {
                                                      section: F.nc_.SUBSCRIPTIONS,
                                                      subsection: Y.nR,
                                                  }),
                                          }),
                                      ],
                                  }),
                              U > 0 &&
                                  (0, i.jsxs)(i.Fragment, {
                                      children: [
                                          (0, i.jsx)(J, {}),
                                          (0, i.jsx)(S.A, {
                                              count: U,
                                              onClickManageSubscription: () => {
                                                  (0, j.openUserSettings)(T.X.SUBSCRIPTIONS_PANEL, {
                                                      section: F.nc_.SUBSCRIPTIONS,
                                                      subsection: Y.PZ,
                                                  }),
                                                      M.default.track(
                                                          F.HAw.PREMIUM_APPLICATION_SUBSCRIPTION_MANAGE_CTA_CLICKED,
                                                      );
                                              },
                                          }),
                                      ],
                                  }),
                              (0, i.jsx)(J, {}),
                              null != e ? (0, i.jsx)(V.A, { subscription: e, withOverheadSeparator: !1 }) : null,
                          ],
                      }),
                  })
          : (0, i.jsx)("div", { className: a()(z.kL, z.Lq), children: (0, i.jsx)(o.y$y, {}) });
};
