"use strict";
n.d(t, { A: () => j, w: () => k });
var i = n(627968),
    r = n(64700),
    l = n(503698),
    s = n.n(l),
    a = n(311907),
    o = n(827734),
    c = n(990078),
    u = n(862482),
    d = n(417098),
    _ = n(265872),
    E = n(695366),
    A = n(669953),
    m = n(713125),
    I = n(967305),
    T = n(739455),
    N = n(997509),
    g = n(976860),
    p = n(309010),
    C = n(967198),
    f = n(792831),
    h = n(147925),
    R = n(723702),
    S = n(529942),
    O = n(164956),
    x = n(311127),
    M = n(652215),
    D = n(746080);
n(500208);
var P = n(2242),
    U = n(985018),
    y = n(595156);
function L(e) {
    let { className: t, onClick: n, children: r, buttonRef: l } = e;
    return (0, i.jsx)(u.$n, {
        buttonRef: l,
        className: s()(y.x6, t),
        innerClassName: y.hZ,
        look: u.$n.Looks.OUTLINED,
        color: u.$n.Colors.WHITE,
        size: u.$n.Sizes.NONE,
        onClick: n,
        children: r,
    });
}
function v(e) {
    let { onClick: t, className: n } = e;
    return (0, i.jsx)(L, { onClick: t, className: n, children: U.intl.string(U.t.R9GHya) });
}
function j() {
    let e = r.useRef(null),
        t = (0, a.bG)([C.A], () => C.A.getGuildId()),
        n = (0, a.bG)([p.A], () => p.A.getChannelId(t)),
        {
            viewingRoles: l,
            backNavigationSection: s,
            isFullServerPreview: u,
            isServerShopPreview: R,
        } = (0, a.cf)([O.A], () => ({
            viewingRoles: null != t ? O.A.getViewingRoles(t) : null,
            backNavigationSection: O.A.getBackNavigationSection(t),
            isFullServerPreview: null != t && O.A.isFullServerPreview(t),
            isServerShopPreview: null != t && O.A.isViewingServerShop(t),
        }));
    if (null == l || null == t) return null;
    let j = (function (e) {
            switch (e) {
                case M.BEX.INTEGRATIONS:
                    return U.intl.string(U.t.k7LGdh);
                case M.BEX.ROLE_SUBSCRIPTIONS:
                    return U.intl.string(U.t.bRqiqa);
                case M.BEX.ONBOARDING:
                    return U.intl.string(U.t.qZpU3S);
                default:
                    return U.intl.string(U.t.MTIXhi);
            }
        })(s),
        k = s === M.BEX.ROLE_SUBSCRIPTIONS ? U.intl.string(U.t.hZUCzd) : U.intl.string(U.t["/djIh7"]),
        b = n === D.VV.GUILD_ONBOARDING,
        G = (e) => {
            let { backToSettings: n } = e;
            null != t &&
                (O.A.isFullServerPreview(t) && (0, g.pX)(M.BVt.CHANNEL(t)),
                m.Ay.shouldShowOnboarding(t) && (A.A.finishOnboarding(t), (0, I.Jg)(t)),
                (0, S.rf)(t),
                n && N.A.open(t, s),
                s === M.BEX.ROLE_SUBSCRIPTIONS && (0, T.Fx)(t));
        };
    return (0, i.jsxs)(d.$T, {
        color: d.Hv.BRAND,
        className: y.lm,
        children: [
            (0, i.jsxs)(L, {
                onClick: () => G({ backToSettings: !0 }),
                className: y.R4,
                children: [
                    (0, i.jsx)(f.A, { width: 16, height: 16, direction: f.A.Directions.LEFT, className: y.lJ }),
                    j,
                ],
            }),
            b && u
                ? (0, i.jsx)("div", {
                      className: y.XI,
                      children: (0, i.jsx)("div", { className: y.ut, children: U.intl.string(U.t.PxbiAf) }),
                  })
                : (0, i.jsxs)("div", {
                      className: y.XI,
                      children: [
                          (0, i.jsx)("div", {
                              className: y.ut,
                              children: u
                                  ? U.intl.formatToPlainString(U.t["0PHahI"], { numRoles: Object.keys(l).length })
                                  : U.intl.formatToPlainString(U.t.vMlK8t, { numRoles: Object.keys(l).length }),
                          }),
                          (0, i.jsx)(_.Y, {
                              targetElementRef: e,
                              position: "bottom",
                              renderPopout: () => (0, i.jsx)(x.A, { guildId: t }),
                              children: (t) => {
                                  let { onClick: n } = t;
                                  return (0, i.jsxs)(L, {
                                      onClick: n,
                                      buttonRef: e,
                                      children: [
                                          k,
                                          (0, i.jsx)(h.A, {
                                              width: 16,
                                              height: 16,
                                              direction: h.A.Directions.DOWN,
                                              className: y.k5,
                                          }),
                                      ],
                                  });
                              },
                          }),
                          u &&
                              (0, i.jsx)(c.m, {
                                  asContainer: !0,
                                  text: U.intl.string(U.t.mW4DUE),
                                  children: (0, i.jsx)(E.E, { size: "xs", color: o.A.unsafe_rawColors.YELLOW_300.css }),
                              }),
                          R &&
                              (0, i.jsx)(c.m, {
                                  asContainer: !0,
                                  text: U.intl.formatToPlainString(U.t.eummvd, { maxTiers: P.f7, maxProducts: 50 }),
                                  children: (0, i.jsx)(E.E, { size: "xs", color: o.A.unsafe_rawColors.YELLOW_300.css }),
                              }),
                      ],
                  }),
            u || s === M.BEX.ROLE_SUBSCRIPTIONS
                ? null
                : (0, i.jsx)(v, { onClick: () => G({ backToSettings: !1 }), className: y.ZY }),
        ],
    });
}
function k(e) {
    let { guildId: t } = e;
    return (0, a.bG)([O.A], () => O.A.isViewingRoles(t))
        ? (0, i.jsx)("div", {
              className: s()(y.xd, { [y.KF]: (0, R.isWindows)(), [y.Xz]: (0, R.isMac)(), [y.pS]: (0, R.isLinux)() }),
              children: (0, i.jsx)(j, {}),
          })
        : null;
}
