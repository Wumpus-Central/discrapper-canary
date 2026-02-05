n.d(t, { A: () => f, w: () => x });
var i = n(627968),
    l = n(64700),
    r = n(503698),
    s = n.n(r),
    a = n(311907),
    o = n(827734),
    E = n(990078),
    c = n(421380),
    _ = n(397927),
    d = n(669953),
    A = n(713125),
    u = n(967305),
    T = n(739455),
    I = n(997509),
    N = n(976860),
    R = n(309010),
    S = n(967198),
    O = n(792831),
    C = n(147925),
    P = n(723702),
    D = n(529942),
    p = n(164956),
    m = n(311127),
    U = n(652215),
    M = n(746080);
n(500208);
var h = n(2242),
    g = n(985018),
    y = n(840199);
function L(e) {
    let { className: t, onClick: n, children: l, buttonRef: r } = e;
    return (0, i.jsx)(c.$n, {
        buttonRef: r,
        className: s()(y.x6, t),
        innerClassName: y.hZ,
        look: c.$n.Looks.OUTLINED,
        color: c.$n.Colors.WHITE,
        size: c.$n.Sizes.NONE,
        onClick: n,
        children: l,
    });
}
function k(e) {
    let { onClick: t } = e;
    return (0, i.jsx)(L, { onClick: t, children: g.intl.string(g.t.R9GHya) });
}
function f() {
    let e = l.useRef(null),
        t = (0, a.bG)([S.A], () => S.A.getGuildId()),
        n = (0, a.bG)([R.A], () => R.A.getChannelId(t)),
        {
            viewingRoles: r,
            backNavigationSection: s,
            isFullServerPreview: c,
            isServerShopPreview: P,
        } = (0, a.cf)([p.A], () => ({
            viewingRoles: null != t ? p.A.getViewingRoles(t) : null,
            backNavigationSection: p.A.getBackNavigationSection(t),
            isFullServerPreview: null != t && p.A.isFullServerPreview(t),
            isServerShopPreview: null != t && p.A.isViewingServerShop(t),
        }));
    if (null == r || null == t) return null;
    let f = (function (e) {
            switch (e) {
                case U.BEX.INTEGRATIONS:
                    return g.intl.string(g.t.k7LGdh);
                case U.BEX.ROLE_SUBSCRIPTIONS:
                    return g.intl.string(g.t.bRqiqa);
                case U.BEX.ONBOARDING:
                    return g.intl.string(g.t.qZpU3S);
                default:
                    return g.intl.string(g.t.MTIXhi);
            }
        })(s),
        x = s === U.BEX.ROLE_SUBSCRIPTIONS ? g.intl.string(g.t.hZUCzd) : g.intl.string(g.t["/djIh7"]),
        G = n === M.VV.GUILD_ONBOARDING,
        j = (e) => {
            let { backToSettings: n } = e;
            null != t &&
                (p.A.isFullServerPreview(t) && (0, N.pX)(U.BVt.CHANNEL(t)),
                A.Ay.shouldShowOnboarding(t) && (d.A.finishOnboarding(t), (0, u.Jg)(t)),
                (0, D.rf)(t),
                n && I.A.open(t, s),
                s === U.BEX.ROLE_SUBSCRIPTIONS && (0, T.Fx)(t));
        };
    return (0, i.jsxs)(_.$Td, {
        color: _.Hv$.BRAND,
        className: y.lm,
        children: [
            (0, i.jsxs)(L, {
                onClick: () => j({ backToSettings: !0 }),
                className: y.Gv,
                children: [
                    (0, i.jsx)(O.A, { width: 16, height: 16, direction: O.A.Directions.LEFT, className: y.lJ }),
                    f,
                ],
            }),
            G && c
                ? (0, i.jsx)("div", {
                      className: y.XI,
                      children: (0, i.jsx)("div", { className: y.ut, children: g.intl.string(g.t.PxbiAf) }),
                  })
                : (0, i.jsxs)("div", {
                      className: y.XI,
                      children: [
                          (0, i.jsx)("div", {
                              className: y.ut,
                              children: c
                                  ? g.intl.formatToPlainString(g.t["0PHahI"], { numRoles: Object.keys(r).length })
                                  : g.intl.formatToPlainString(g.t.vMlK8t, { numRoles: Object.keys(r).length }),
                          }),
                          (0, i.jsx)(_.YNO, {
                              targetElementRef: e,
                              position: "bottom",
                              renderPopout: () => (0, i.jsx)(m.A, { guildId: t }),
                              children: (t) => {
                                  let { onClick: n } = t;
                                  return (0, i.jsxs)(L, {
                                      onClick: n,
                                      buttonRef: e,
                                      children: [
                                          x,
                                          (0, i.jsx)(C.A, {
                                              width: 16,
                                              height: 16,
                                              direction: C.A.Directions.DOWN,
                                              className: y.k5,
                                          }),
                                      ],
                                  });
                              },
                          }),
                          c &&
                              (0, i.jsx)(E.m, {
                                  asContainer: !0,
                                  text: g.intl.string(g.t.mW4DUE),
                                  children: (0, i.jsx)(_.EpV, {
                                      size: "xs",
                                      color: o.A.unsafe_rawColors.YELLOW_300.css,
                                  }),
                              }),
                          P &&
                              (0, i.jsx)(E.m, {
                                  asContainer: !0,
                                  text: g.intl.formatToPlainString(g.t.eummvd, { maxTiers: h.f7, maxProducts: 50 }),
                                  children: (0, i.jsx)(_.EpV, {
                                      size: "xs",
                                      color: o.A.unsafe_rawColors.YELLOW_300.css,
                                  }),
                              }),
                      ],
                  }),
            c || s === U.BEX.ROLE_SUBSCRIPTIONS ? null : (0, i.jsx)(k, { onClick: () => j({ backToSettings: !1 }) }),
        ],
    });
}
function x(e) {
    let { guildId: t } = e;
    return (0, a.bG)([p.A], () => p.A.isViewingRoles(t))
        ? (0, i.jsx)("div", {
              className: s()(y.xd, { [y.KF]: (0, P.isWindows)(), [y.Xz]: (0, P.isMac)() }),
              children: (0, i.jsx)(f, {}),
          })
        : null;
}
