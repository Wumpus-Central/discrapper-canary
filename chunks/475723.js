n.d(t, { A: () => M, w: () => D });
var i = n(627968),
    l = n(64700),
    s = n(503698),
    a = n.n(s),
    r = n(311907),
    o = n(827734),
    d = n(990078),
    c = n(421380),
    u = n(397927),
    h = n(669953),
    A = n(713125),
    _ = n(967305),
    m = n(739455),
    p = n(997509),
    g = n(976860),
    f = n(309010),
    E = n(967198),
    x = n(792831),
    I = n(147925),
    C = n(723702),
    N = n(529942),
    T = n(164956),
    S = n(311127),
    b = n(652215),
    y = n(746080);
n(500208);
var v = n(2242),
    R = n(985018),
    j = n(595156);
function O(e) {
    let { className: t, onClick: n, children: l, buttonRef: s } = e;
    return (0, i.jsx)(c.$n, {
        buttonRef: s,
        className: a()(j.x6, t),
        innerClassName: j.hZ,
        look: c.$n.Looks.OUTLINED,
        color: c.$n.Colors.WHITE,
        size: c.$n.Sizes.NONE,
        onClick: n,
        children: l,
    });
}
function L(e) {
    let { onClick: t, className: n } = e;
    return (0, i.jsx)(O, { onClick: t, className: n, children: R.intl.string(R.t.R9GHya) });
}
function M() {
    let e = l.useRef(null),
        t = (0, r.bG)([E.A], () => E.A.getGuildId()),
        n = (0, r.bG)([f.A], () => f.A.getChannelId(t)),
        {
            viewingRoles: s,
            backNavigationSection: a,
            isFullServerPreview: c,
            isServerShopPreview: C,
        } = (0, r.cf)([T.A], () => ({
            viewingRoles: null != t ? T.A.getViewingRoles(t) : null,
            backNavigationSection: T.A.getBackNavigationSection(t),
            isFullServerPreview: null != t && T.A.isFullServerPreview(t),
            isServerShopPreview: null != t && T.A.isViewingServerShop(t),
        }));
    if (null == s || null == t) return null;
    let M = (function (e) {
            switch (e) {
                case b.BEX.INTEGRATIONS:
                    return R.intl.string(R.t.k7LGdh);
                case b.BEX.ROLE_SUBSCRIPTIONS:
                    return R.intl.string(R.t.bRqiqa);
                case b.BEX.ONBOARDING:
                    return R.intl.string(R.t.qZpU3S);
                default:
                    return R.intl.string(R.t.MTIXhi);
            }
        })(a),
        D = a === b.BEX.ROLE_SUBSCRIPTIONS ? R.intl.string(R.t.hZUCzd) : R.intl.string(R.t["/djIh7"]),
        U = n === y.VV.GUILD_ONBOARDING,
        G = (e) => {
            let { backToSettings: n } = e;
            null != t &&
                (T.A.isFullServerPreview(t) && (0, g.pX)(b.BVt.CHANNEL(t)),
                A.Ay.shouldShowOnboarding(t) && (h.A.finishOnboarding(t), (0, _.Jg)(t)),
                (0, N.rf)(t),
                n && p.A.open(t, a),
                a === b.BEX.ROLE_SUBSCRIPTIONS && (0, m.Fx)(t));
        };
    return (0, i.jsxs)(u.$Td, {
        color: u.Hv$.BRAND,
        className: j.lm,
        children: [
            (0, i.jsxs)(O, {
                onClick: () => G({ backToSettings: !0 }),
                className: j.R4,
                children: [
                    (0, i.jsx)(x.A, { width: 16, height: 16, direction: x.A.Directions.LEFT, className: j.lJ }),
                    M,
                ],
            }),
            U && c
                ? (0, i.jsx)("div", {
                      className: j.XI,
                      children: (0, i.jsx)("div", { className: j.ut, children: R.intl.string(R.t.PxbiAf) }),
                  })
                : (0, i.jsxs)("div", {
                      className: j.XI,
                      children: [
                          (0, i.jsx)("div", {
                              className: j.ut,
                              children: c
                                  ? R.intl.formatToPlainString(R.t["0PHahI"], { numRoles: Object.keys(s).length })
                                  : R.intl.formatToPlainString(R.t.vMlK8t, { numRoles: Object.keys(s).length }),
                          }),
                          (0, i.jsx)(u.YNO, {
                              targetElementRef: e,
                              position: "bottom",
                              renderPopout: () => (0, i.jsx)(S.A, { guildId: t }),
                              children: (t) => {
                                  let { onClick: n } = t;
                                  return (0, i.jsxs)(O, {
                                      onClick: n,
                                      buttonRef: e,
                                      children: [
                                          D,
                                          (0, i.jsx)(I.A, {
                                              width: 16,
                                              height: 16,
                                              direction: I.A.Directions.DOWN,
                                              className: j.k5,
                                          }),
                                      ],
                                  });
                              },
                          }),
                          c &&
                              (0, i.jsx)(d.m, {
                                  asContainer: !0,
                                  text: R.intl.string(R.t.mW4DUE),
                                  children: (0, i.jsx)(u.EpV, {
                                      size: "xs",
                                      color: o.A.unsafe_rawColors.YELLOW_300.css,
                                  }),
                              }),
                          C &&
                              (0, i.jsx)(d.m, {
                                  asContainer: !0,
                                  text: R.intl.formatToPlainString(R.t.eummvd, { maxTiers: v.f7, maxProducts: 50 }),
                                  children: (0, i.jsx)(u.EpV, {
                                      size: "xs",
                                      color: o.A.unsafe_rawColors.YELLOW_300.css,
                                  }),
                              }),
                      ],
                  }),
            c || a === b.BEX.ROLE_SUBSCRIPTIONS
                ? null
                : (0, i.jsx)(L, { onClick: () => G({ backToSettings: !1 }), className: j.ZY }),
        ],
    });
}
function D(e) {
    let { guildId: t } = e;
    return (0, r.bG)([T.A], () => T.A.isViewingRoles(t))
        ? (0, i.jsx)("div", {
              className: a()(j.xd, { [j.KF]: (0, C.isWindows)(), [j.Xz]: (0, C.isMac)(), [j.pS]: (0, C.isLinux)() }),
              children: (0, i.jsx)(M, {}),
          })
        : null;
}
