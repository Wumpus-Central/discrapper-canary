n.d(t, { A: () => Q });
var i = n(627968),
    s = n(64700),
    a = n(503698),
    l = n.n(a),
    r = n(311907),
    o = n(397927),
    c = n(73153),
    d = n(384904),
    u = n(923408),
    _ = n(339048),
    m = n(73825),
    A = n(252452),
    g = n(974544),
    h = n(531260),
    x = n(262077),
    p = n(160946),
    E = n(235986),
    C = n(769015),
    T = n(723588),
    S = n(608699),
    I = n(714308),
    f = n(478407),
    N = n(195043),
    b = n(780964),
    j = n(840065),
    v = n(351906),
    O = n(628965),
    R = n(287809),
    y = n(615405),
    P = n(295405),
    L = n(166403),
    D = n(469778),
    M = n(954571),
    G = n(975571),
    U = n(927578),
    k = n(637073),
    V = n(887997),
    H = n(177653),
    w = n(159906),
    B = n(758400),
    Y = n(788868),
    F = n(652215),
    z = n(355097),
    W = n(531525),
    K = n(985018),
    Z = n(547605);
function q() {
    return (0, i.jsx)(o.ZpM, {
        className: Z.wb,
        type: o.ZpM.Types.CUSTOM,
        children: (0, i.jsxs)(E.A, {
            align: E.A.Align.CENTER,
            children: [
                (0, i.jsx)(C.A, { game: null, size: C.M.SMALL, className: Z.pV }),
                (0, i.jsx)("span", { className: Z.O, children: K.intl.string(K.t["jy/hyj"]) }),
            ],
        }),
    });
}
function X() {
    let e = (0, r.bG)([D.A], () => D.A.getForApplication(Y.tv));
    return (
        s.useEffect(() => {
            (0, _.LM)(Y.tv);
        }, []),
        (0, i.jsx)(o.nVY, {
            label: K.intl.string(K.t["2GKrvn"]),
            description: K.intl.string(K.t.kNEjGm),
            children:
                null != e && U.Ay.hasAccountCredit(e)
                    ? (0, i.jsx)(H.A, { className: Z.fX, entitlements: e })
                    : (0, i.jsx)(q, {}),
        })
    );
}
function J() {
    return (0, i.jsx)("hr", { className: Z.hr });
}
let Q = function () {
    var e;
    let t = (0, r.bG)([L.A], () => L.A.getPremiumTypeSubscription()),
        n = (0, x.A)({ subscriptionFilter: (e) => B.Hy.has(e.status) }),
        a = (0, r.bG)([R.default], () => R.default.getCurrentUser()),
        _ = n.length > 1,
        E = (0, r.bG)(
            [P.A],
            () => (null != t && null != t.paymentSourceId ? P.A.getPaymentSource(t.paymentSourceId) : null),
            [t],
        ),
        C = (0, r.bG)([L.A], () => L.A.hasFetchedSubscriptions()),
        D = (0, r.bG)([y.A], () => y.A.isBusy),
        U = (0, p.Y)(),
        H = (0, r.bG)([O.A], () => O.A.getSubsection()),
        q = (0, r.bG)([L.A], () => L.A.getActiveApplicationSubscriptions()?.length ?? 0),
        Q = (0, r.bG)(
            [L.A],
            () =>
                Object.values(L.A.getSubscriptions() ?? {})
                    .filter((e) => e.type === F.rzx.GUILD)
                    .filter((e) => e.status !== F.Dmq.ENDED).length,
        ),
        $ = (0, h.A)({ forceFetch: !0 }),
        ee = (0, k.d)(),
        et = null !== t ? t.currentPeriodEnd : void 0,
        en =
            !(ee && !($.unactivatedUnits.length > 0)) &&
            ($.fractionalState !== Y.xc.NONE || $.unactivatedUnits.length > 0);
    return (s.useEffect(
        () => (
            c.h.wait(() => {
                (0, m.zS)(), d.hP(), (0, u.CD)(), d.$o();
            }),
            function () {
                A.A.clearSubsection();
            }
        ),
        [],
    ),
    v.A.enabled)
        ? (0, i.jsx)(g.A, {})
        : C && U
          ? H === z.nR
              ? (0, i.jsx)(S.A, { onGoBack: () => A.A.clearSubsection() })
              : H === z.PZ
                ? (0, i.jsx)(f.A, { onGoBack: () => A.A.clearSubsection() })
                : (0, i.jsx)("div", {
                      className: Z.kL,
                      children: (0, i.jsxs)("div", {
                          className: Z.Qs,
                          children: [
                              _ ? (0, i.jsx)(B.Sb, {}) : null,
                              null != t
                                  ? (0, i.jsx)(B.Ay, { subscription: t, paymentSource: E, busy: D, subscriptions: n })
                                  : (0, i.jsx)(B.TC, {}),
                              en &&
                                  ((e = !!a?.isPremiumWithPremiumGroup()),
                                  (0, i.jsxs)("section", {
                                      children: [
                                          (0, i.jsx)(o.Heading, {
                                              variant: "heading-md/bold",
                                              className: Z.HL,
                                              children: K.intl.string(K.t.Obre8v),
                                          }),
                                          (0, i.jsx)(o.Text, {
                                              variant: "text-md/normal",
                                              className: Z.JU,
                                              children: K.intl.format(K.t["7Zi06b"], {
                                                  helpCenterLink: G.A.getArticleURL(F.MVz.FRACTIONAL_PREMIUM_ABOUT),
                                              }),
                                          }),
                                          (0, i.jsx)(V.A, {
                                              className: Z.fX,
                                              fractionalPremiumInfo: $,
                                              activationDate: et,
                                              hasPremiumGroup: e,
                                          }),
                                      ],
                                  })),
                              (0, i.jsx)(N.x, { setting: W.H.SUBSCRIPTIONS_CREDITS, children: (0, i.jsx)(X, {}) }),
                              Q > 0 &&
                                  (0, i.jsxs)(i.Fragment, {
                                      children: [
                                          (0, i.jsx)(J, {}),
                                          (0, i.jsx)(T.A, {
                                              count: Q,
                                              onClickManageSubscription: () =>
                                                  (0, j.openUserSettings)(b.X.SUBSCRIPTIONS_PANEL, {
                                                      section: F.nc_.SUBSCRIPTIONS,
                                                      subsection: z.nR,
                                                  }),
                                          }),
                                      ],
                                  }),
                              q > 0 &&
                                  (0, i.jsxs)(i.Fragment, {
                                      children: [
                                          (0, i.jsx)(J, {}),
                                          (0, i.jsx)(I.A, {
                                              count: q,
                                              onClickManageSubscription: () => {
                                                  (0, j.openUserSettings)(b.X.SUBSCRIPTIONS_PANEL, {
                                                      section: F.nc_.SUBSCRIPTIONS,
                                                      subsection: z.PZ,
                                                  }),
                                                      M.default.track(
                                                          F.HAw.PREMIUM_APPLICATION_SUBSCRIPTION_MANAGE_CTA_CLICKED,
                                                      );
                                              },
                                          }),
                                      ],
                                  }),
                              (0, i.jsx)(J, {}),
                              null != t ? (0, i.jsx)(w.A, { subscription: t, withOverheadSeparator: !1 }) : null,
                          ],
                      }),
                  })
          : (0, i.jsx)("div", { className: l()(Z.kL, Z.Lq), children: (0, i.jsx)(o.y$y, {}) });
};
