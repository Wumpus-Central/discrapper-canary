n.d(l, { w: () => J, A: () => Z });
var i = n(477900),
    t = n(582128),
    s = n(503698),
    r = n.n(s),
    o = n(17928),
    u = n(661531),
    a = n(862482),
    c = n(417098),
    d = n(922016),
    g = n(866665),
    h = n(695366),
    x = n(669953),
    A = n(713125),
    f = n(608401),
    m = n(739455),
    S = n(468689),
    N = n(976860),
    v = n(309010),
    j = n(967198),
    R = n(792831),
    b = n(147925),
    E = n(723702),
    p = n(529942),
    w = n(164956);
n(321073);
var I = n(136722),
    O = n(834730),
    C = n(453318),
    k = n(44482),
    T = n(260509),
    G = n(34457),
    L = n(696451),
    B = n(317525),
    _ = n(71393),
    y = n(287809),
    P = n(488926),
    X = n(935208),
    M = n(209700),
    U = n(652215),
    D = n(105292),
    V = n(588397);
function z(e) {
    let { guildId: l } = e,
        n = (0, o.bG)([y.default], () => y.default.getCurrentUser()),
        s = (0, o.bG)([_.A], () => _.A.getGuild(l)),
        r = (0, o.bG)([B.A], () => B.A.getRolesSnapshot(l)),
        u = (0, o.bG)([B.A], () => B.A.getSortedRoles(l)),
        { impersonateType: a, viewingRoles: c } = (0, o.cf)([w.A], () => ({
            impersonateType: w.A.getImpersonateType(l),
            viewingRoles: w.A.getViewingRoles(l),
        })),
        d = a === M._.SERVER_SHOP,
        g = (0, o.bG)([L.Ay], () => (null != n ? L.Ay.getTrueMember(l, n.id) : null)),
        h = null != s ? r[(0, T.af)(s)] : null,
        [x, A] = t.useState(() => {
            let e = null == c ? [] : X.default.keys(c);
            return (null != h && e.push(h.id), e);
        }),
        f = t.useRef(s);
    t.useEffect(() => {
        let e = {},
            l = f.current;
        if (null != l && null != a) {
            for (let l of x) {
                let n = r[l];
                null != n && (e[l] = n);
            }
            (0, p.IA)(l.id, { type: a, roles: e });
        }
    }, [x, a, r]);
    let m = null != s && null != n && null != g ? u.find((e) => g.roles.includes(e.id)) : void 0,
        S = t.useMemo(
            () =>
                null != s && null != n
                    ? u
                          .filter((e) => !(0, G.Oy)(e))
                          .filter((e) => !d || e.tags?.subscription_listing_id != null)
                          .filter((e) => m?.id === e.id || P.wO(s, n.id, m, e))
                    : [],
            [s, n, d, m, u],
        ),
        N = t.useMemo(() => {
            let e = Array.from(S).map((e) => ({
                leading: F(e),
                value: e.id,
                label: e.name,
                id: e.id.toString(),
                disabled: !1,
            }));
            return (
                null != s &&
                    null != h &&
                    e.push({ leading: F(h), value: h.id, label: h.name, id: h.id.toString(), disabled: !0 }),
                e
            );
        }, [S, s, h]);
    if (null == n || null == s || null == g) return null;
    let v = {};
    return (g.roles.forEach((e) => {
        let l = r[e];
        null != l && (v[l.id] = l);
    }),
    I.zy(P.aH({ forceRoles: v, context: s }), I.kg(U.xBc.MANAGE_GUILD, U.xBc.MANAGE_ROLES)) || (0, T.bM)(s, n))
        ? (0, i.jsx)("div", {
              className: V.kL,
              children: (0, i.jsxs)(C.iS, {
                  selectionMode: "multiple",
                  options: N,
                  value: x,
                  onSelectionChange: (e) => {
                      A(e);
                  },
                  children: [
                      (0, i.jsx)(C.a3, { hideTags: !0, autoFocus: !0, placeholder: D.intl.string(D.t.Sojqsr) }),
                      (0, i.jsx)(C.X2, { renderListItem: (e) => (0, i.jsx)(k.c, { ...e }) }),
                  ],
              }),
          })
        : (0, i.jsx)(O.E, { variant: "text-md/medium", children: D.intl.string(D.t.MNSTbY) });
}
function F(e) {
    return () =>
        (0, i.jsx)("svg", {
            width: "12",
            height: "12",
            viewBox: "0 0 12 12",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            children: (0, i.jsx)("circle", { cx: "6", cy: "6", r: "6", fill: e.colorString ?? "currentColor" }),
        });
}
var H = n(746080);
n(500208);
var W = n(2242),
    Y = n(539009);
function $(e) {
    let { className: l, onClick: n, children: t, buttonRef: s } = e;
    return (0, i.jsx)(a.$n, {
        buttonRef: s,
        className: r()(Y.x6, l),
        innerClassName: Y.hZ,
        look: a.$n.Looks.OUTLINED,
        color: a.$n.Colors.WHITE,
        size: a.$n.Sizes.NONE,
        onClick: n,
        children: t,
    });
}
function q(e) {
    let { onClick: l, className: n } = e;
    return (0, i.jsx)($, { onClick: l, className: n, children: D.intl.string(D.t.R9GHya) });
}
function Z() {
    let e = t.useRef(null),
        l = (0, o.bG)([j.A], () => j.A.getGuildId()),
        n = (0, o.bG)([v.Ay], () => v.Ay.getChannelId(l)),
        {
            viewingRoles: s,
            backNavigationSection: r,
            isFullServerPreview: a,
            isServerShopPreview: E,
        } = (0, o.cf)([w.A], () => ({
            viewingRoles: null != l ? w.A.getViewingRoles(l) : null,
            backNavigationSection: w.A.getBackNavigationSection(l),
            isFullServerPreview: null != l && w.A.isFullServerPreview(l),
            isServerShopPreview: null != l && w.A.isViewingServerShop(l),
        }));
    if (null == s || null == l) return null;
    let I = (function (e) {
            switch (e) {
                case U.BEX.INTEGRATIONS:
                    return D.intl.string(D.t.k7LGdh);
                case U.BEX.ROLE_SUBSCRIPTIONS:
                    return D.intl.string(D.t.bRqiqa);
                case U.BEX.ONBOARDING:
                    return D.intl.string(D.t.qZpU3S);
                default:
                    return D.intl.string(D.t.MTIXhi);
            }
        })(r),
        O = r === U.BEX.ROLE_SUBSCRIPTIONS ? D.intl.string(D.t.hZUCzd) : D.intl.string(D.t["/djIh7"]),
        C = n === H.VV.GUILD_ONBOARDING;
    function k(e) {
        let { backToSettings: n } = e;
        null != l &&
            (w.A.isFullServerPreview(l) && (0, N.pX)(U.BVt.CHANNEL(l)),
            A.Ay.shouldShowOnboarding(l) && (x.A.finishOnboarding(l), (0, f.Jg)(l)),
            (0, p.rf)(l),
            n && S.A.open(l, r),
            r === U.BEX.ROLE_SUBSCRIPTIONS && (0, m.Fx)(l));
    }
    return (0, i.jsxs)(c.$T, {
        color: c.Hv.BRAND,
        className: Y.lm,
        children: [
            (0, i.jsxs)($, {
                onClick: () => k({ backToSettings: !0 }),
                className: Y.R4,
                children: [
                    (0, i.jsx)(R.A, { width: 16, height: 16, direction: R.A.Directions.LEFT, className: Y.lJ }),
                    I,
                ],
            }),
            C && a
                ? (0, i.jsx)("div", {
                      className: Y.XI,
                      children: (0, i.jsx)("div", { className: Y.ut, children: D.intl.string(D.t.PxbiAf) }),
                  })
                : (0, i.jsxs)("div", {
                      className: Y.XI,
                      children: [
                          (0, i.jsx)("div", {
                              className: Y.ut,
                              children: a
                                  ? D.intl.formatToPlainString(D.t["0PHahI"], { numRoles: Object.keys(s).length })
                                  : D.intl.formatToPlainString(D.t.vMlK8t, { numRoles: Object.keys(s).length }),
                          }),
                          (0, i.jsx)(d.Y, {
                              targetElementRef: e,
                              position: "bottom",
                              renderPopout: () => (0, i.jsx)(z, { guildId: l }),
                              children: (l) => {
                                  let { onClick: n } = l;
                                  return (0, i.jsxs)($, {
                                      onClick: n,
                                      buttonRef: e,
                                      children: [
                                          O,
                                          (0, i.jsx)(b.A, {
                                              width: 16,
                                              height: 16,
                                              direction: b.A.Directions.DOWN,
                                              className: Y.k5,
                                          }),
                                      ],
                                  });
                              },
                          }),
                          a &&
                              (0, i.jsx)(g.m, {
                                  asContainer: !0,
                                  text: D.intl.string(D.t.mW4DUE),
                                  children: (0, i.jsx)(h.E, { size: "xs", color: u.A.unsafe_rawColors.YELLOW_300.css }),
                              }),
                          E &&
                              (0, i.jsx)(g.m, {
                                  asContainer: !0,
                                  text: D.intl.formatToPlainString(D.t.eummvd, { maxTiers: W.f7, maxProducts: 50 }),
                                  children: (0, i.jsx)(h.E, { size: "xs", color: u.A.unsafe_rawColors.YELLOW_300.css }),
                              }),
                      ],
                  }),
            a || r === U.BEX.ROLE_SUBSCRIPTIONS
                ? null
                : (0, i.jsx)(q, { onClick: () => k({ backToSettings: !1 }), className: Y.ZY }),
        ],
    });
}
function J(e) {
    let { guildId: l } = e;
    return (0, o.bG)([w.A], () => w.A.isViewingRoles(l))
        ? (0, i.jsx)("div", {
              className: r()(Y.xd, { [Y.KF]: (0, E.isWindows)(), [Y.Xz]: (0, E.isMac)(), [Y.pS]: (0, E.isLinux)() }),
              children: (0, i.jsx)(Z, {}),
          })
        : null;
}
