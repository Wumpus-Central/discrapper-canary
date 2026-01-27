n.d(t, {
    A: () => j,
    w: () => k,
});
var r = n(627968),
    i = n(64700),
    l = n(503698),
    o = n.n(l),
    a = n(311907),
    s = n(827734),
    c = n(990078),
    u = n(421380),
    E = n(397927),
    d = n(669953),
    _ = n(713125),
    T = n(967305),
    A = n(739455),
    I = n(997509),
    O = n(976860),
    N = n(309010),
    p = n(967198),
    R = n(792831),
    S = n(147925),
    P = n(723702),
    y = n(529942),
    f = n(164956),
    C = n(311127),
    D = n(652215),
    m = n(746080);
n(500208);
var g = n(2242),
    h = n(985018),
    U = n(840199);

function b(e) {
    let { className: t, onClick: n, children: i, buttonRef: l } = e;
    return (0, r.jsx)(u.$n, {
        buttonRef: l,
        className: o()(U.x6, t),
        innerClassName: U.hZ,
        look: u.$n.Looks.OUTLINED,
        color: u.$n.Colors.WHITE,
        size: u.$n.Sizes.NONE,
        onClick: n,
        children: i,
    });
}

function M(e) {
    let { onClick: t } = e;
    return (0, r.jsx)(b, {
        onClick: t,
        children: h.intl.string(h.t.R9GHya),
    });
}

function j() {
    let e = i.useRef(null),
        t = (0, a.bG)([p.A], () => p.A.getGuildId()),
        n = (0, a.bG)([N.A], () => N.A.getChannelId(t)),
        {
            viewingRoles: l,
            backNavigationSection: o,
            isFullServerPreview: u,
            isServerShopPreview: P,
        } = (0, a.cf)([f.A], () => ({
            viewingRoles: null != t ? f.A.getViewingRoles(t) : null,
            backNavigationSection: f.A.getBackNavigationSection(t),
            isFullServerPreview: null != t && f.A.isFullServerPreview(t),
            isServerShopPreview: null != t && f.A.isViewingServerShop(t),
        }));
    if (null == l || null == t) return null;
    let j = (function (e) {
            switch (e) {
                case D.BEX.INTEGRATIONS:
                    return h.intl.string(h.t.k7LGdh);
                case D.BEX.ROLE_SUBSCRIPTIONS:
                    return h.intl.string(h.t.bRqiqa);
                case D.BEX.ONBOARDING:
                    return h.intl.string(h.t.qZpU3S);
                default:
                    return h.intl.string(h.t.MTIXhi);
            }
        })(o),
        k = o === D.BEX.ROLE_SUBSCRIPTIONS ? h.intl.string(h.t.hZUCzd) : h.intl.string(h.t["/djIh7"]),
        v = n === m.VV.GUILD_ONBOARDING,
        L = (e) => {
            let { backToSettings: n } = e;
            null != t &&
                (f.A.isFullServerPreview(t) && (0, O.pX)(D.BVt.CHANNEL(t)),
                _.Ay.shouldShowOnboarding(t) && (d.A.finishOnboarding(t), (0, T.Jg)(t)),
                (0, y.rf)(t),
                n && I.A.open(t, o),
                o === D.BEX.ROLE_SUBSCRIPTIONS && (0, A.Fx)(t));
        };
    return (0, r.jsxs)(E.$Td, {
        color: E.Hv$.BRAND,
        className: U.lm,
        children: [
            (0, r.jsxs)(b, {
                onClick: () =>
                    L({
                        backToSettings: !0,
                    }),
                className: U.Gv,
                children: [
                    (0, r.jsx)(R.A, {
                        width: 16,
                        height: 16,
                        direction: R.A.Directions.LEFT,
                        className: U.lJ,
                    }),
                    j,
                ],
            }),
            v && u
                ? (0, r.jsx)("div", {
                      className: U.XI,
                      children: (0, r.jsx)("div", {
                          className: U.ut,
                          children: h.intl.string(h.t.PxbiAf),
                      }),
                  })
                : (0, r.jsxs)("div", {
                      className: U.XI,
                      children: [
                          (0, r.jsx)("div", {
                              className: U.ut,
                              children: u
                                  ? h.intl.formatToPlainString(h.t["0PHahI"], {
                                        numRoles: Object.keys(l).length,
                                    })
                                  : h.intl.formatToPlainString(h.t.vMlK8t, {
                                        numRoles: Object.keys(l).length,
                                    }),
                          }),
                          (0, r.jsx)(E.YNO, {
                              targetElementRef: e,
                              position: "bottom",
                              renderPopout: () =>
                                  (0, r.jsx)(C.A, {
                                      guildId: t,
                                  }),
                              children: (t) => {
                                  let { onClick: n } = t;
                                  return (0, r.jsxs)(b, {
                                      onClick: n,
                                      buttonRef: e,
                                      children: [
                                          k,
                                          (0, r.jsx)(S.A, {
                                              width: 16,
                                              height: 16,
                                              direction: S.A.Directions.DOWN,
                                              className: U.k5,
                                          }),
                                      ],
                                  });
                              },
                          }),
                          u &&
                              (0, r.jsx)(c.m, {
                                  asContainer: !0,
                                  text: h.intl.string(h.t.mW4DUE),
                                  children: (0, r.jsx)(E.EpV, {
                                      size: "xs",
                                      color: s.A.unsafe_rawColors.YELLOW_300.css,
                                  }),
                              }),
                          P &&
                              (0, r.jsx)(c.m, {
                                  asContainer: !0,
                                  text: h.intl.formatToPlainString(h.t.eummvd, {
                                      maxTiers: g.f7,
                                      maxProducts: 50,
                                  }),
                                  children: (0, r.jsx)(E.EpV, {
                                      size: "xs",
                                      color: s.A.unsafe_rawColors.YELLOW_300.css,
                                  }),
                              }),
                      ],
                  }),
            u || o === D.BEX.ROLE_SUBSCRIPTIONS
                ? null
                : (0, r.jsx)(M, {
                      onClick: () =>
                          L({
                              backToSettings: !1,
                          }),
                  }),
        ],
    });
}

function k(e) {
    let { guildId: t } = e;
    return (0, a.bG)([f.A], () => f.A.isViewingRoles(t))
        ? (0, r.jsx)("div", {
              className: o()(U.xd, {
                  [U.KF]: (0, P.isWindows)(),
                  [U.Xz]: (0, P.isMac)(),
              }),
              children: (0, r.jsx)(j, {}),
          })
        : null;
}
