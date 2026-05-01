n.d(t, { A: () => G, w: () => j });
var i = n(627968),
    l = n(64700),
    r = n(503698),
    s = n.n(r),
    a = n(17928),
    E = n(661531),
    _ = n(990078),
    o = n(862482),
    A = n(417098),
    c = n(922016),
    T = n(695366),
    I = n(669953),
    N = n(713125),
    u = n(608401),
    R = n(739455),
    d = n(997509),
    O = n(976860),
    P = n(309010),
    C = n(967198),
    S = n(792831),
    M = n(147925),
    D = n(723702),
    m = n(529942),
    p = n(164956),
    U = n(311127),
    k = n(652215),
    g = n(746080);
n(500208);
var f = n(2242),
    y = n(985018),
    x = n(595156);
function h(e) {
    let { className: t, onClick: n, children: l, buttonRef: r } = e;
    return (0, i.jsx)(o.$n, {
        buttonRef: r,
        className: s()(x.x6, t),
        innerClassName: x.hZ,
        look: o.$n.Looks.OUTLINED,
        color: o.$n.Colors.WHITE,
        size: o.$n.Sizes.NONE,
        onClick: n,
        children: l,
    });
}
function L(e) {
    let { onClick: t, className: n } = e;
    return (0, i.jsx)(h, { onClick: t, className: n, children: y.intl.string(y.t.R9GHya) });
}
function G() {
    let e = l.useRef(null),
        t = (0, a.bG)([C.A], () => C.A.getGuildId()),
        n = (0, a.bG)([P.A], () => P.A.getChannelId(t)),
        {
            viewingRoles: r,
            backNavigationSection: s,
            isFullServerPreview: o,
            isServerShopPreview: D,
        } = (0, a.cf)([p.A], () => ({
            viewingRoles: null != t ? p.A.getViewingRoles(t) : null,
            backNavigationSection: p.A.getBackNavigationSection(t),
            isFullServerPreview: null != t && p.A.isFullServerPreview(t),
            isServerShopPreview: null != t && p.A.isViewingServerShop(t),
        }));
    if (null == r || null == t) return null;
    let G = (function (e) {
            switch (e) {
                case k.BEX.INTEGRATIONS:
                    return y.intl.string(y.t.k7LGdh);
                case k.BEX.ROLE_SUBSCRIPTIONS:
                    return y.intl.string(y.t.bRqiqa);
                case k.BEX.ONBOARDING:
                    return y.intl.string(y.t.qZpU3S);
                default:
                    return y.intl.string(y.t.MTIXhi);
            }
        })(s),
        j = s === k.BEX.ROLE_SUBSCRIPTIONS ? y.intl.string(y.t.hZUCzd) : y.intl.string(y.t["/djIh7"]),
        X = n === g.VV.GUILD_ONBOARDING,
        q = (e) => {
            let { backToSettings: n } = e;
            null != t &&
                (p.A.isFullServerPreview(t) && (0, O.pX)(k.BVt.CHANNEL(t)),
                N.Ay.shouldShowOnboarding(t) && (I.A.finishOnboarding(t), (0, u.Jg)(t)),
                (0, m.rf)(t),
                n && d.A.open(t, s),
                s === k.BEX.ROLE_SUBSCRIPTIONS && (0, R.Fx)(t));
        };
    return (0, i.jsxs)(A.$T, {
        color: A.Hv.BRAND,
        className: x.lm,
        children: [
            (0, i.jsxs)(h, {
                onClick: () => q({ backToSettings: !0 }),
                className: x.R4,
                children: [
                    (0, i.jsx)(S.A, { width: 16, height: 16, direction: S.A.Directions.LEFT, className: x.lJ }),
                    G,
                ],
            }),
            X && o
                ? (0, i.jsx)("div", {
                      className: x.XI,
                      children: (0, i.jsx)("div", { className: x.ut, children: y.intl.string(y.t.PxbiAf) }),
                  })
                : (0, i.jsxs)("div", {
                      className: x.XI,
                      children: [
                          (0, i.jsx)("div", {
                              className: x.ut,
                              children: o
                                  ? y.intl.formatToPlainString(y.t["0PHahI"], { numRoles: Object.keys(r).length })
                                  : y.intl.formatToPlainString(y.t.vMlK8t, { numRoles: Object.keys(r).length }),
                          }),
                          (0, i.jsx)(c.Y, {
                              targetElementRef: e,
                              position: "bottom",
                              renderPopout: () => (0, i.jsx)(U.A, { guildId: t }),
                              children: (t) => {
                                  let { onClick: n } = t;
                                  return (0, i.jsxs)(h, {
                                      onClick: n,
                                      buttonRef: e,
                                      children: [
                                          j,
                                          (0, i.jsx)(M.A, {
                                              width: 16,
                                              height: 16,
                                              direction: M.A.Directions.DOWN,
                                              className: x.k5,
                                          }),
                                      ],
                                  });
                              },
                          }),
                          o &&
                              (0, i.jsx)(_.m, {
                                  asContainer: !0,
                                  text: y.intl.string(y.t.mW4DUE),
                                  children: (0, i.jsx)(T.E, { size: "xs", color: E.A.unsafe_rawColors.YELLOW_300.css }),
                              }),
                          D &&
                              (0, i.jsx)(_.m, {
                                  asContainer: !0,
                                  text: y.intl.formatToPlainString(y.t.eummvd, { maxTiers: f.f7, maxProducts: 50 }),
                                  children: (0, i.jsx)(T.E, { size: "xs", color: E.A.unsafe_rawColors.YELLOW_300.css }),
                              }),
                      ],
                  }),
            o || s === k.BEX.ROLE_SUBSCRIPTIONS
                ? null
                : (0, i.jsx)(L, { onClick: () => q({ backToSettings: !1 }), className: x.ZY }),
        ],
    });
}
function j(e) {
    let { guildId: t } = e;
    return (0, a.bG)([p.A], () => p.A.isViewingRoles(t))
        ? (0, i.jsx)("div", {
              className: s()(x.xd, { [x.KF]: (0, D.isWindows)(), [x.Xz]: (0, D.isMac)(), [x.pS]: (0, D.isLinux)() }),
              children: (0, i.jsx)(G, {}),
          })
        : null;
}
