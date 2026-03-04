"use strict";
n.d(t, { A: () => L, w: () => x });
var i = n(627968),
    r = n(64700),
    l = n(503698),
    s = n.n(l),
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
    p = n(723702),
    P = n(529942),
    D = n(164956),
    M = n(311127),
    g = n(652215),
    U = n(746080);
n(500208);
var m = n(2242),
    h = n(985018),
    y = n(840199);
function f(e) {
    let { className: t, onClick: n, children: r, buttonRef: l } = e;
    return (0, i.jsx)(c.$n, {
        buttonRef: l,
        className: s()(y.x6, t),
        innerClassName: y.hZ,
        look: c.$n.Looks.OUTLINED,
        color: c.$n.Colors.WHITE,
        size: c.$n.Sizes.NONE,
        onClick: n,
        children: r,
    });
}
function k(e) {
    let { onClick: t } = e;
    return (0, i.jsx)(f, { onClick: t, children: h.intl.string(h.t.R9GHya) });
}
function L() {
    let e = r.useRef(null),
        t = (0, a.bG)([S.A], () => S.A.getGuildId()),
        n = (0, a.bG)([R.A], () => R.A.getChannelId(t)),
        {
            viewingRoles: l,
            backNavigationSection: s,
            isFullServerPreview: c,
            isServerShopPreview: p,
        } = (0, a.cf)([D.A], () => ({
            viewingRoles: null != t ? D.A.getViewingRoles(t) : null,
            backNavigationSection: D.A.getBackNavigationSection(t),
            isFullServerPreview: null != t && D.A.isFullServerPreview(t),
            isServerShopPreview: null != t && D.A.isViewingServerShop(t),
        }));
    if (null == l || null == t) return null;
    let L = (function (e) {
            switch (e) {
                case g.BEX.INTEGRATIONS:
                    return h.intl.string(h.t.k7LGdh);
                case g.BEX.ROLE_SUBSCRIPTIONS:
                    return h.intl.string(h.t.bRqiqa);
                case g.BEX.ONBOARDING:
                    return h.intl.string(h.t.qZpU3S);
                default:
                    return h.intl.string(h.t.MTIXhi);
            }
        })(s),
        x = s === g.BEX.ROLE_SUBSCRIPTIONS ? h.intl.string(h.t.hZUCzd) : h.intl.string(h.t["/djIh7"]),
        G = n === U.VV.GUILD_ONBOARDING,
        j = (e) => {
            let { backToSettings: n } = e;
            null != t &&
                (D.A.isFullServerPreview(t) && (0, N.pX)(g.BVt.CHANNEL(t)),
                A.Ay.shouldShowOnboarding(t) && (d.A.finishOnboarding(t), (0, u.Jg)(t)),
                (0, P.rf)(t),
                n && I.A.open(t, s),
                s === g.BEX.ROLE_SUBSCRIPTIONS && (0, T.Fx)(t));
        };
    return (0, i.jsxs)(_.$Td, {
        color: _.Hv$.BRAND,
        className: y.lm,
        children: [
            (0, i.jsxs)(f, {
                onClick: () => j({ backToSettings: !0 }),
                className: y.Gv,
                children: [
                    (0, i.jsx)(O.A, { width: 16, height: 16, direction: O.A.Directions.LEFT, className: y.lJ }),
                    L,
                ],
            }),
            G && c
                ? (0, i.jsx)("div", {
                      className: y.XI,
                      children: (0, i.jsx)("div", { className: y.ut, children: h.intl.string(h.t.PxbiAf) }),
                  })
                : (0, i.jsxs)("div", {
                      className: y.XI,
                      children: [
                          (0, i.jsx)("div", {
                              className: y.ut,
                              children: c
                                  ? h.intl.formatToPlainString(h.t["0PHahI"], { numRoles: Object.keys(l).length })
                                  : h.intl.formatToPlainString(h.t.vMlK8t, { numRoles: Object.keys(l).length }),
                          }),
                          (0, i.jsx)(_.YNO, {
                              targetElementRef: e,
                              position: "bottom",
                              renderPopout: () => (0, i.jsx)(M.A, { guildId: t }),
                              children: (t) => {
                                  let { onClick: n } = t;
                                  return (0, i.jsxs)(f, {
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
                                  text: h.intl.string(h.t.mW4DUE),
                                  children: (0, i.jsx)(_.EpV, {
                                      size: "xs",
                                      color: o.A.unsafe_rawColors.YELLOW_300.css,
                                  }),
                              }),
                          p &&
                              (0, i.jsx)(E.m, {
                                  asContainer: !0,
                                  text: h.intl.formatToPlainString(h.t.eummvd, { maxTiers: m.f7, maxProducts: 50 }),
                                  children: (0, i.jsx)(_.EpV, {
                                      size: "xs",
                                      color: o.A.unsafe_rawColors.YELLOW_300.css,
                                  }),
                              }),
                      ],
                  }),
            c || s === g.BEX.ROLE_SUBSCRIPTIONS ? null : (0, i.jsx)(k, { onClick: () => j({ backToSettings: !1 }) }),
        ],
    });
}
function x(e) {
    let { guildId: t } = e;
    return (0, a.bG)([D.A], () => D.A.isViewingRoles(t))
        ? (0, i.jsx)("div", {
              className: s()(y.xd, { [y.KF]: (0, p.isWindows)(), [y.Xz]: (0, p.isMac)() }),
              children: (0, i.jsx)(L, {}),
          })
        : null;
}
