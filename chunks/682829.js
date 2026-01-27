n.d(t, {
    A: () => q,
});
var i = n(627968),
    s = n(64700),
    l = n(503698),
    r = n.n(l),
    a = n(311907),
    o = n(397927),
    c = n(73153),
    d = n(384904),
    u = n(923408),
    g = n(339048),
    h = n(73825),
    x = n(252452),
    A = n(974544),
    p = n(531260),
    m = n(262077),
    j = n(160946),
    b = n(235986),
    O = n(769015),
    S = n(723588),
    E = n(608699),
    f = n(714308),
    v = n(478407),
    T = n(195043),
    C = n(780964),
    y = n(840065),
    N = n(351906),
    I = n(628965),
    _ = n(615405),
    P = n(295405),
    G = n(166403),
    R = n(469778),
    D = n(954571),
    L = n(975571),
    k = n(927578),
    w = n(637073),
    V = n(887997),
    M = n(177653),
    U = n(159906),
    H = n(758400),
    Y = n(788868),
    B = n(652215),
    F = n(355097),
    z = n(531525),
    W = n(985018),
    K = n(547605);

function J() {
    return (0, i.jsx)(o.ZpM, {
        className: K.wb,
        type: o.ZpM.Types.CUSTOM,
        children: (0, i.jsxs)(b.A, {
            align: b.A.Align.CENTER,
            children: [
                (0, i.jsx)(O.A, {
                    game: null,
                    size: O.M.SMALL,
                    className: K.pV,
                }),
                (0, i.jsx)("span", {
                    className: K.O,
                    children: W.intl.string(W.t["jy/hyj"]),
                }),
            ],
        }),
    });
}

function Q() {
    let e = (0, a.bG)([R.A], () => R.A.getForApplication(Y.tv));
    return (
        s.useEffect(() => {
            (0, g.LM)(Y.tv);
        }, []),
        (0, i.jsx)(o.nVY, {
            label: W.intl.string(W.t["2GKrvn"]),
            description: W.intl.string(W.t.kNEjGm),
            children:
                null != e && k.Ay.hasAccountCredit(e)
                    ? (0, i.jsx)(M.A, {
                          className: K.fX,
                          entitlements: e,
                      })
                    : (0, i.jsx)(J, {}),
        })
    );
}

function X() {
    return (0, i.jsx)("hr", {
        className: K.hr,
    });
}
let q = function () {
    let e = (0, a.bG)([G.A], () => G.A.getPremiumTypeSubscription()),
        t = (0, m.A)({
            subscriptionFilter: (e) => H.Hy.has(e.status),
        }),
        n = t.length > 1,
        l = (0, a.bG)(
            [P.A],
            () => (null != e && null != e.paymentSourceId ? P.A.getPaymentSource(e.paymentSourceId) : null),
            [e],
        ),
        g = (0, a.bG)([G.A], () => G.A.hasFetchedSubscriptions()),
        b = (0, a.bG)([_.A], () => _.A.isBusy),
        O = (0, j.Y)(),
        R = (0, a.bG)([I.A], () => I.A.getSubsection()),
        k = (0, a.bG)([G.A], () => {
            var e, t;
            return null != (e = null == (t = G.A.getActiveApplicationSubscriptions()) ? void 0 : t.length) ? e : 0;
        }),
        M = (0, a.bG)([G.A], () => {
            var e;
            return Object.values(null != (e = G.A.getSubscriptions()) ? e : {})
                .filter((e) => e.type === B.rzx.GUILD)
                .filter((e) => e.status !== B.Dmq.ENDED).length;
        }),
        J = (0, p.A)({
            forceFetch: !0,
        }),
        q = (0, w.d)(),
        Z = null !== e ? e.currentPeriodEnd : void 0,
        $ =
            !(q && !(J.unactivatedUnits.length > 0)) &&
            (J.fractionalState !== Y.xc.NONE || J.unactivatedUnits.length > 0);
    return (s.useEffect(
        () => (
            c.h.wait(() => {
                (0, h.zS)(), d.hP(), (0, u.CD)(), d.$o();
            }),
            function () {
                x.A.clearSubsection();
            }
        ),
        [],
    ),
    N.A.enabled)
        ? (0, i.jsx)(A.A, {})
        : g && O
          ? R === F.nR
              ? (0, i.jsx)(E.A, {
                    onGoBack: () => x.A.clearSubsection(),
                })
              : R === F.PZ
                ? (0, i.jsx)(v.A, {
                      onGoBack: () => x.A.clearSubsection(),
                  })
                : (0, i.jsx)("div", {
                      className: K.kL,
                      children: (0, i.jsxs)("div", {
                          className: K.Qs,
                          children: [
                              n ? (0, i.jsx)(H.Sb, {}) : null,
                              null != e
                                  ? (0, i.jsx)(H.Ay, {
                                        subscription: e,
                                        paymentSource: l,
                                        busy: b,
                                        subscriptions: t,
                                    })
                                  : (0, i.jsx)(H.TC, {}),
                              $ &&
                                  (0, i.jsxs)("section", {
                                      children: [
                                          (0, i.jsx)(o.Heading, {
                                              variant: "heading-md/bold",
                                              className: K.HL,
                                              children: W.intl.string(W.t.Obre8v),
                                          }),
                                          (0, i.jsx)(o.Text, {
                                              variant: "text-md/normal",
                                              className: K.JU,
                                              children: W.intl.format(W.t["7Zi06b"], {
                                                  helpCenterLink: L.A.getArticleURL(B.MVz.FRACTIONAL_PREMIUM_ABOUT),
                                              }),
                                          }),
                                          (0, i.jsx)(V.A, {
                                              className: K.fX,
                                              fractionalPremiumInfo: J,
                                              activationDate: Z,
                                          }),
                                      ],
                                  }),
                              (0, i.jsx)(T.x, {
                                  setting: z.H.SUBSCRIPTIONS_CREDITS,
                                  children: (0, i.jsx)(Q, {}),
                              }),
                              M > 0 &&
                                  (0, i.jsxs)(i.Fragment, {
                                      children: [
                                          (0, i.jsx)(X, {}),
                                          (0, i.jsx)(S.A, {
                                              count: M,
                                              onClickManageSubscription: () =>
                                                  (0, y.openUserSettings)(C.X.SUBSCRIPTIONS_PANEL, {
                                                      section: B.nc_.SUBSCRIPTIONS,
                                                      subsection: F.nR,
                                                  }),
                                          }),
                                      ],
                                  }),
                              k > 0 &&
                                  (0, i.jsxs)(i.Fragment, {
                                      children: [
                                          (0, i.jsx)(X, {}),
                                          (0, i.jsx)(f.A, {
                                              count: k,
                                              onClickManageSubscription: () => {
                                                  (0, y.openUserSettings)(C.X.SUBSCRIPTIONS_PANEL, {
                                                      section: B.nc_.SUBSCRIPTIONS,
                                                      subsection: F.PZ,
                                                  }),
                                                      D.default.track(
                                                          B.HAw.PREMIUM_APPLICATION_SUBSCRIPTION_MANAGE_CTA_CLICKED,
                                                      );
                                              },
                                          }),
                                      ],
                                  }),
                              (0, i.jsx)(X, {}),
                              null != e
                                  ? (0, i.jsx)(U.A, {
                                        subscription: e,
                                        withOverheadSeparator: !1,
                                    })
                                  : null,
                          ],
                      }),
                  })
          : (0, i.jsx)("div", {
                className: r()(K.kL, K.Lq),
                children: (0, i.jsx)(o.y$y, {}),
            });
};
