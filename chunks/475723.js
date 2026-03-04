n.d(t, { A: () => k, w: () => x });
var i = n(627968),
    l = n(64700),
    r = n(503698),
    a = n.n(r),
    s = n(311907),
    o = n(827734),
    c = n(990078),
    _ = n(421380),
    E = n(397927),
    d = n(669953),
    u = n(713125),
    A = n(967305),
    T = n(739455),
    I = n(997509),
    N = n(976860),
    R = n(309010),
    S = n(967198),
    C = n(792831),
    O = n(147925),
    p = n(723702),
    m = n(529942),
    P = n(164956),
    D = n(311127),
    g = n(652215),
    U = n(746080);
n(500208);
var M = n(2242),
    h = n(985018),
    y = n(840199);
function f(e) {
    let { className: t, onClick: n, children: l, buttonRef: r } = e;
    return (0, i.jsx)(_.$n, {
        buttonRef: r,
        className: a()(y.x6, t),
        innerClassName: y.hZ,
        look: _.$n.Looks.OUTLINED,
        color: _.$n.Colors.WHITE,
        size: _.$n.Sizes.NONE,
        onClick: n,
        children: l,
    });
}
function L(e) {
    let { onClick: t } = e;
    return (0, i.jsx)(f, { onClick: t, children: h.intl.string(h.t.R9GHya) });
}
function k() {
    let e = l.useRef(null),
        t = (0, s.bG)([S.A], () => S.A.getGuildId()),
        n = (0, s.bG)([R.A], () => R.A.getChannelId(t)),
        {
            viewingRoles: r,
            backNavigationSection: a,
            isFullServerPreview: _,
            isServerShopPreview: p,
        } = (0, s.cf)([P.A], () => ({
            viewingRoles: null != t ? P.A.getViewingRoles(t) : null,
            backNavigationSection: P.A.getBackNavigationSection(t),
            isFullServerPreview: null != t && P.A.isFullServerPreview(t),
            isServerShopPreview: null != t && P.A.isViewingServerShop(t),
        }));
    if (null == r || null == t) return null;
    let k = (function (e) {
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
        })(a),
        x = a === g.BEX.ROLE_SUBSCRIPTIONS ? h.intl.string(h.t.hZUCzd) : h.intl.string(h.t["/djIh7"]),
        G = n === U.VV.GUILD_ONBOARDING,
        b = (e) => {
            let { backToSettings: n } = e;
            null != t &&
                (P.A.isFullServerPreview(t) && (0, N.pX)(g.BVt.CHANNEL(t)),
                u.Ay.shouldShowOnboarding(t) && (d.A.finishOnboarding(t), (0, A.Jg)(t)),
                (0, m.rf)(t),
                n && I.A.open(t, a),
                a === g.BEX.ROLE_SUBSCRIPTIONS && (0, T.Fx)(t));
        };
    return (0, i.jsxs)(E.$Td, {
        color: E.Hv$.BRAND,
        className: y.lm,
        children: [
            (0, i.jsxs)(f, {
                onClick: () => b({ backToSettings: !0 }),
                className: y.Gv,
                children: [
                    (0, i.jsx)(C.A, { width: 16, height: 16, direction: C.A.Directions.LEFT, className: y.lJ }),
                    k,
                ],
            }),
            G && _
                ? (0, i.jsx)("div", {
                      className: y.XI,
                      children: (0, i.jsx)("div", { className: y.ut, children: h.intl.string(h.t.PxbiAf) }),
                  })
                : (0, i.jsxs)("div", {
                      className: y.XI,
                      children: [
                          (0, i.jsx)("div", {
                              className: y.ut,
                              children: _
                                  ? h.intl.formatToPlainString(h.t["0PHahI"], { numRoles: Object.keys(r).length })
                                  : h.intl.formatToPlainString(h.t.vMlK8t, { numRoles: Object.keys(r).length }),
                          }),
                          (0, i.jsx)(E.YNO, {
                              targetElementRef: e,
                              position: "bottom",
                              renderPopout: () => (0, i.jsx)(D.A, { guildId: t }),
                              children: (t) => {
                                  let { onClick: n } = t;
                                  return (0, i.jsxs)(f, {
                                      onClick: n,
                                      buttonRef: e,
                                      children: [
                                          x,
                                          (0, i.jsx)(O.A, {
                                              width: 16,
                                              height: 16,
                                              direction: O.A.Directions.DOWN,
                                              className: y.k5,
                                          }),
                                      ],
                                  });
                              },
                          }),
                          _ &&
                              (0, i.jsx)(c.m, {
                                  asContainer: !0,
                                  text: h.intl.string(h.t.mW4DUE),
                                  children: (0, i.jsx)(E.EpV, {
                                      size: "xs",
                                      color: o.A.unsafe_rawColors.YELLOW_300.css,
                                  }),
                              }),
                          p &&
                              (0, i.jsx)(c.m, {
                                  asContainer: !0,
                                  text: h.intl.formatToPlainString(h.t.eummvd, { maxTiers: M.f7, maxProducts: 50 }),
                                  children: (0, i.jsx)(E.EpV, {
                                      size: "xs",
                                      color: o.A.unsafe_rawColors.YELLOW_300.css,
                                  }),
                              }),
                      ],
                  }),
            _ || a === g.BEX.ROLE_SUBSCRIPTIONS ? null : (0, i.jsx)(L, { onClick: () => b({ backToSettings: !1 }) }),
        ],
    });
}
function x(e) {
    let { guildId: t } = e;
    return (0, s.bG)([P.A], () => P.A.isViewingRoles(t))
        ? (0, i.jsx)("div", {
              className: a()(y.xd, { [y.KF]: (0, p.isWindows)(), [y.Xz]: (0, p.isMac)() }),
              children: (0, i.jsx)(k, {}),
          })
        : null;
}
