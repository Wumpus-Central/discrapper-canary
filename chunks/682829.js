n.d(t, { A: () => K });
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
    A = n(974544),
    m = n(531260),
    h = n(262077),
    p = n(160946),
    x = n(235986),
    E = n(769015),
    T = n(723588),
    S = n(608699),
    C = n(714308),
    I = n(478407),
    f = n(351906),
    N = n(287809),
    b = n(615405),
    v = n(295405),
    O = n(166403),
    j = n(469778),
    R = n(954571),
    y = n(975571),
    P = n(927578),
    D = n(115063),
    L = n(637073),
    G = n(887997),
    M = n(177653),
    U = n(159906),
    k = n(758400),
    V = n(790284),
    w = n(788868),
    H = n(652215),
    B = n(355097),
    F = n(985018),
    Y = n(547605);
function z() {
    return (0, i.jsx)(o.ZpM, {
        className: Y.wb,
        type: o.ZpM.Types.CUSTOM,
        children: (0, i.jsxs)(x.A, {
            align: x.A.Align.CENTER,
            children: [
                (0, i.jsx)(E.A, { game: null, size: E.M.SMALL, className: Y.pV }),
                (0, i.jsx)("span", { className: Y.O, children: F.intl.string(F.t["jy/hyj"]) }),
            ],
        }),
    });
}
function X() {
    let e = (0, r.bG)([j.A], () => j.A.getForApplication(w.tv));
    return (
        s.useEffect(() => {
            (0, _.LM)(w.tv);
        }, []),
        (0, i.jsx)(o.nVY, {
            label: F.intl.string(F.t["2GKrvn"]),
            description: F.intl.string(F.t.kNEjGm),
            children:
                null != e && P.Ay.hasAccountCredit(e)
                    ? (0, i.jsx)(M.A, { className: Y.fX, entitlements: e })
                    : (0, i.jsx)(z, {}),
        })
    );
}
function W() {
    return (0, i.jsx)("hr", { className: Y.hr });
}
let K = function () {
    var e;
    let t = (0, r.bG)([O.A], () => O.A.getPremiumTypeSubscription()),
        n = (0, h.A)({ subscriptionFilter: (e) => k.Hy.has(e.status) }),
        l = (0, r.bG)([N.default], () => N.default.getCurrentUser()),
        _ = n.length > 1,
        x = (0, r.bG)(
            [v.A],
            () => (null != t && null != t.paymentSourceId ? v.A.getPaymentSource(t.paymentSourceId) : null),
            [t],
        ),
        E = (0, r.bG)([O.A], () => O.A.hasFetchedSubscriptions()),
        j = (0, r.bG)([b.A], () => b.A.isBusy),
        P = (0, p.Y)(),
        M = V.A.useField("subsection"),
        z = s.useRef(M);
    s.useEffect(() => {
        M !== z.current &&
            ((0, D.iY)({ originPane: H.nc_.SUBSCRIPTIONS, destinationPane: H.nc_.SUBSCRIPTIONS, subsection: M }),
            (z.current = M));
    }, [M]);
    let K = (0, r.bG)([O.A], () => O.A.getActiveApplicationSubscriptions()?.length ?? 0),
        Z = (0, r.bG)(
            [O.A],
            () =>
                Object.values(O.A.getSubscriptions() ?? {})
                    .filter((e) => e.type === H.rzx.GUILD)
                    .filter((e) => e.status !== H.Dmq.ENDED).length,
        ),
        q = (0, m.A)({ forceFetch: !0 }),
        J = (0, L.d)(),
        Q = null !== t ? t.currentPeriodEnd : void 0,
        $ =
            !(J && !(q.unactivatedUnits.length > 0)) &&
            (q.fractionalState !== w.xc.NONE || q.unactivatedUnits.length > 0);
    return (s.useEffect(
        () => (
            d.h.wait(() => {
                (0, g.zS)(), c.hP(), (0, u.CD)(), c.$o();
            }),
            function () {
                V.A.resetState();
            }
        ),
        [],
    ),
    f.A.enabled)
        ? (0, i.jsx)(A.A, {})
        : E && P
          ? M === B.nR
              ? (0, i.jsx)(S.A, { onGoBack: () => V.A.setState({ subsection: null }) })
              : M === B.PZ
                ? (0, i.jsx)(I.A, { onGoBack: () => V.A.setState({ subsection: null }) })
                : (0, i.jsx)("div", {
                      className: Y.kL,
                      children: (0, i.jsxs)("div", {
                          className: Y.Qs,
                          children: [
                              _ ? (0, i.jsx)(k.Sb, {}) : null,
                              null != t
                                  ? (0, i.jsx)(k.Ay, { subscription: t, paymentSource: x, busy: j, subscriptions: n })
                                  : (0, i.jsx)(k.TC, {}),
                              $ &&
                                  ((e = !!l?.isPremiumWithPremiumGroup()),
                                  (0, i.jsxs)("section", {
                                      children: [
                                          (0, i.jsx)(o.Heading, {
                                              variant: "heading-md/bold",
                                              className: Y.HL,
                                              children: F.intl.string(F.t.Obre8v),
                                          }),
                                          (0, i.jsx)(o.Text, {
                                              variant: "text-md/normal",
                                              className: Y.JU,
                                              children: F.intl.format(F.t["7Zi06b"], {
                                                  helpCenterLink: y.A.getArticleURL(H.MVz.FRACTIONAL_PREMIUM_ABOUT),
                                              }),
                                          }),
                                          (0, i.jsx)(G.A, {
                                              className: Y.fX,
                                              fractionalPremiumInfo: q,
                                              activationDate: Q,
                                              hasPremiumGroup: e,
                                          }),
                                      ],
                                  })),
                              (0, i.jsx)(X, {}),
                              Z > 0 &&
                                  (0, i.jsxs)(i.Fragment, {
                                      children: [
                                          (0, i.jsx)(W, {}),
                                          (0, i.jsx)(T.A, {
                                              count: Z,
                                              onClickManageSubscription: () => V.A.setState({ subsection: B.nR }),
                                          }),
                                      ],
                                  }),
                              K > 0 &&
                                  (0, i.jsxs)(i.Fragment, {
                                      children: [
                                          (0, i.jsx)(W, {}),
                                          (0, i.jsx)(C.A, {
                                              count: K,
                                              onClickManageSubscription: () => {
                                                  V.A.setState({ subsection: B.PZ }),
                                                      R.default.track(
                                                          H.HAw.PREMIUM_APPLICATION_SUBSCRIPTION_MANAGE_CTA_CLICKED,
                                                      );
                                              },
                                          }),
                                      ],
                                  }),
                              (0, i.jsx)(W, {}),
                              null != t ? (0, i.jsx)(U.A, { subscription: t, withOverheadSeparator: !1 }) : null,
                          ],
                      }),
                  })
          : (0, i.jsx)("div", { className: a()(Y.kL, Y.Lq), children: (0, i.jsx)(o.y$y, {}) });
};
