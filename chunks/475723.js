n.d(t, { A: () => G, w: () => j });
var i = n(627968),
    l = n(64700),
    r = n(503698),
    s = n.n(r),
    a = n(17928),
    E = n(661531),
    o = n(990078),
    _ = n(862482),
    c = n(417098),
    A = n(922016),
    I = n(695366),
    u = n(669953),
    T = n(713125),
    d = n(608401),
    N = n(739455),
    R = n(997509),
    O = n(976860),
    P = n(309010),
    S = n(967198),
    C = n(792831),
    D = n(147925),
    M = n(723702),
    m = n(529942),
    p = n(164956),
    U = n(311127),
    g = n(652215),
    k = n(746080);
n(500208);
var f = n(2242),
    y = n(985018),
    h = n(595156);
function x(e) {
    let { className: t, onClick: n, children: l, buttonRef: r } = e;
    return (0, i.jsx)(_.$n, {
        buttonRef: r,
        className: s()(h.x6, t),
        innerClassName: h.hZ,
        look: _.$n.Looks.OUTLINED,
        color: _.$n.Colors.WHITE,
        size: _.$n.Sizes.NONE,
        onClick: n,
        children: l,
    });
}
function L(e) {
    let { onClick: t, className: n } = e;
    return (0, i.jsx)(x, { onClick: t, className: n, children: y.intl.string(y.t.R9GHya) });
}
function G() {
    let e = l.useRef(null),
        t = (0, a.bG)([S.A], () => S.A.getGuildId()),
        n = (0, a.bG)([P.A], () => P.A.getChannelId(t)),
        {
            viewingRoles: r,
            backNavigationSection: s,
            isFullServerPreview: _,
            isServerShopPreview: M,
        } = (0, a.cf)([p.A], () => ({
            viewingRoles: null != t ? p.A.getViewingRoles(t) : null,
            backNavigationSection: p.A.getBackNavigationSection(t),
            isFullServerPreview: null != t && p.A.isFullServerPreview(t),
            isServerShopPreview: null != t && p.A.isViewingServerShop(t),
        }));
    if (null == r || null == t) return null;
    let G = (function (e) {
            switch (e) {
                case g.BEX.INTEGRATIONS:
                    return y.intl.string(y.t.k7LGdh);
                case g.BEX.ROLE_SUBSCRIPTIONS:
                    return y.intl.string(y.t.bRqiqa);
                case g.BEX.ONBOARDING:
                    return y.intl.string(y.t.qZpU3S);
                default:
                    return y.intl.string(y.t.MTIXhi);
            }
        })(s),
        j = s === g.BEX.ROLE_SUBSCRIPTIONS ? y.intl.string(y.t.hZUCzd) : y.intl.string(y.t["/djIh7"]),
        X = n === k.VV.GUILD_ONBOARDING,
        q = (e) => {
            let { backToSettings: n } = e;
            null != t &&
                (p.A.isFullServerPreview(t) && (0, O.pX)(g.BVt.CHANNEL(t)),
                T.Ay.shouldShowOnboarding(t) && (u.A.finishOnboarding(t), (0, d.Jg)(t)),
                (0, m.rf)(t),
                n && R.A.open(t, s),
                s === g.BEX.ROLE_SUBSCRIPTIONS && (0, N.Fx)(t));
        };
    return (0, i.jsxs)(c.$T, {
        color: c.Hv.BRAND,
        className: h.lm,
        children: [
            (0, i.jsxs)(x, {
                onClick: () => q({ backToSettings: !0 }),
                className: h.R4,
                children: [
                    (0, i.jsx)(C.A, { width: 16, height: 16, direction: C.A.Directions.LEFT, className: h.lJ }),
                    G,
                ],
            }),
            X && _
                ? (0, i.jsx)("div", {
                      className: h.XI,
                      children: (0, i.jsx)("div", { className: h.ut, children: y.intl.string(y.t.PxbiAf) }),
                  })
                : (0, i.jsxs)("div", {
                      className: h.XI,
                      children: [
                          (0, i.jsx)("div", {
                              className: h.ut,
                              children: _
                                  ? y.intl.formatToPlainString(y.t["0PHahI"], { numRoles: Object.keys(r).length })
                                  : y.intl.formatToPlainString(y.t.vMlK8t, { numRoles: Object.keys(r).length }),
                          }),
                          (0, i.jsx)(A.Y, {
                              targetElementRef: e,
                              position: "bottom",
                              renderPopout: () => (0, i.jsx)(U.A, { guildId: t }),
                              children: (t) => {
                                  let { onClick: n } = t;
                                  return (0, i.jsxs)(x, {
                                      onClick: n,
                                      buttonRef: e,
                                      children: [
                                          j,
                                          (0, i.jsx)(D.A, {
                                              width: 16,
                                              height: 16,
                                              direction: D.A.Directions.DOWN,
                                              className: h.k5,
                                          }),
                                      ],
                                  });
                              },
                          }),
                          _ &&
                              (0, i.jsx)(o.m, {
                                  asContainer: !0,
                                  text: y.intl.string(y.t.mW4DUE),
                                  children: (0, i.jsx)(I.E, { size: "xs", color: E.A.unsafe_rawColors.YELLOW_300.css }),
                              }),
                          M &&
                              (0, i.jsx)(o.m, {
                                  asContainer: !0,
                                  text: y.intl.formatToPlainString(y.t.eummvd, { maxTiers: f.f7, maxProducts: 50 }),
                                  children: (0, i.jsx)(I.E, { size: "xs", color: E.A.unsafe_rawColors.YELLOW_300.css }),
                              }),
                      ],
                  }),
            _ || s === g.BEX.ROLE_SUBSCRIPTIONS
                ? null
                : (0, i.jsx)(L, { onClick: () => q({ backToSettings: !1 }), className: h.ZY }),
        ],
    });
}
function j(e) {
    let { guildId: t } = e;
    return (0, a.bG)([p.A], () => p.A.isViewingRoles(t))
        ? (0, i.jsx)("div", {
              className: s()(h.xd, { [h.KF]: (0, M.isWindows)(), [h.Xz]: (0, M.isMac)(), [h.pS]: (0, M.isLinux)() }),
              children: (0, i.jsx)(G, {}),
          })
        : null;
}
