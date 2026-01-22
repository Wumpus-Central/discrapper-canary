n.d(t, {
    A: () => j,
    w: () => M,
});
var r = n(627968),
    i = n(64700),
    a = n(503698),
    s = n.n(a),
    o = n(311907),
    l = n(827734),
    c = n(990078),
    u = n(421380),
    d = n(397927),
    f = n(669953),
    p = n(713125),
    _ = n(967305),
    h = n(739455),
    m = n(997509),
    g = n(976860),
    E = n(309010),
    b = n(967198),
    y = n(792831),
    O = n(147925),
    A = n(723702),
    v = n(529942),
    S = n(164956),
    I = n(311127),
    T = n(652215),
    C = n(746080);
n(500208);
var N = n(2242),
    R = n(985018),
    w = n(840199);

function P(e) {
    let { className: t, onClick: n, children: i, buttonRef: a } = e;
    return (0, r.jsx)(u.$n, {
        buttonRef: a,
        className: s()(w.x6, t),
        innerClassName: w.hZ,
        look: u.$n.Looks.OUTLINED,
        color: u.$n.Colors.WHITE,
        size: u.$n.Sizes.NONE,
        onClick: n,
        children: i,
    });
}

function D(e) {
    let { onClick: t } = e;
    return (0, r.jsx)(P, {
        onClick: t,
        children: R.intl.string(R.t.R9GHya),
    });
}

function x(e) {
    switch (e) {
        case T.BEX.INTEGRATIONS:
            return R.intl.string(R.t.k7LGdh);
        case T.BEX.ROLE_SUBSCRIPTIONS:
            return R.intl.string(R.t.bRqiqa);
        case T.BEX.ONBOARDING:
            return R.intl.string(R.t.qZpU3S);
        default:
            return R.intl.string(R.t.MTIXhi);
    }
}

function L(e) {
    return e === T.BEX.ROLE_SUBSCRIPTIONS ? R.intl.string(R.t.hZUCzd) : R.intl.string(R.t["/djIh7"]);
}

function j() {
    let e = i.useRef(null),
        t = (0, o.bG)([b.A], () => b.A.getGuildId()),
        n = (0, o.bG)([E.A], () => E.A.getChannelId(t)),
        {
            viewingRoles: a,
            backNavigationSection: s,
            isFullServerPreview: u,
            isServerShopPreview: A,
        } = (0, o.cf)([S.A], () => ({
            viewingRoles: null != t ? S.A.getViewingRoles(t) : null,
            backNavigationSection: S.A.getBackNavigationSection(t),
            isFullServerPreview: null != t && S.A.isFullServerPreview(t),
            isServerShopPreview: null != t && S.A.isViewingServerShop(t),
        }));
    if (null == a || null == t) return null;
    let j = x(s),
        M = L(s),
        k = n === C.VV.GUILD_ONBOARDING,
        U = (e) => {
            let { backToSettings: n } = e;
            null != t &&
                (S.A.isFullServerPreview(t) && (0, g.pX)(T.BVt.CHANNEL(t)),
                p.Ay.shouldShowOnboarding(t) && (f.A.finishOnboarding(t), (0, _.Jg)(t)),
                (0, v.rf)(t),
                n && m.A.open(t, s),
                s === T.BEX.ROLE_SUBSCRIPTIONS && (0, h.Fx)(t));
        };
    return (0, r.jsxs)(d.$Td, {
        color: d.Hv$.BRAND,
        className: w.lm,
        children: [
            (0, r.jsxs)(P, {
                onClick: () =>
                    U({
                        backToSettings: !0,
                    }),
                className: w.Gv,
                children: [
                    (0, r.jsx)(y.A, {
                        width: 16,
                        height: 16,
                        direction: y.A.Directions.LEFT,
                        className: w.lJ,
                    }),
                    j,
                ],
            }),
            k && u
                ? (0, r.jsx)("div", {
                      className: w.XI,
                      children: (0, r.jsx)("div", {
                          className: w.ut,
                          children: R.intl.string(R.t.PxbiAf),
                      }),
                  })
                : (0, r.jsxs)("div", {
                      className: w.XI,
                      children: [
                          (0, r.jsx)("div", {
                              className: w.ut,
                              children: u
                                  ? R.intl.formatToPlainString(R.t["0PHahI"], {
                                        numRoles: Object.keys(a).length,
                                    })
                                  : R.intl.formatToPlainString(R.t.vMlK8t, {
                                        numRoles: Object.keys(a).length,
                                    }),
                          }),
                          (0, r.jsx)(d.YNO, {
                              targetElementRef: e,
                              position: "bottom",
                              renderPopout: () =>
                                  (0, r.jsx)(I.A, {
                                      guildId: t,
                                  }),
                              children: (t) => {
                                  let { onClick: n } = t;
                                  return (0, r.jsxs)(P, {
                                      onClick: n,
                                      buttonRef: e,
                                      children: [
                                          M,
                                          (0, r.jsx)(O.A, {
                                              width: 16,
                                              height: 16,
                                              direction: O.A.Directions.DOWN,
                                              className: w.k5,
                                          }),
                                      ],
                                  });
                              },
                          }),
                          u &&
                              (0, r.jsx)(c.m, {
                                  asContainer: !0,
                                  text: R.intl.string(R.t.mW4DUE),
                                  children: (0, r.jsx)(d.EpV, {
                                      size: "xs",
                                      color: l.A.unsafe_rawColors.YELLOW_300.css,
                                  }),
                              }),
                          A &&
                              (0, r.jsx)(c.m, {
                                  asContainer: !0,
                                  text: R.intl.formatToPlainString(R.t.eummvd, {
                                      maxTiers: N.f7,
                                      maxProducts: 50,
                                  }),
                                  children: (0, r.jsx)(d.EpV, {
                                      size: "xs",
                                      color: l.A.unsafe_rawColors.YELLOW_300.css,
                                  }),
                              }),
                      ],
                  }),
            u || s === T.BEX.ROLE_SUBSCRIPTIONS
                ? null
                : (0, r.jsx)(D, {
                      onClick: () =>
                          U({
                              backToSettings: !1,
                          }),
                  }),
        ],
    });
}

function M(e) {
    let { guildId: t } = e;
    return (0, o.bG)([S.A], () => S.A.isViewingRoles(t))
        ? (0, r.jsx)("div", {
              className: s()(w.xd, {
                  [w.KF]: (0, A.isWindows)(),
                  [w.Xz]: (0, A.isMac)(),
              }),
              children: (0, r.jsx)(j, {}),
          })
        : null;
}
