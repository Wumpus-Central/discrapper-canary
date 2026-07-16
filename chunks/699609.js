n.d(t, { w: () => z, A: () => Q });
var i = n(627968),
    l = n(64700),
    r = n(503698),
    s = n.n(r),
    a = n(17928),
    o = n(661531),
    E = n(862482),
    c = n(417098),
    u = n(922016),
    _ = n(866665),
    A = n(695366),
    T = n(669953),
    d = n(713125),
    I = n(608401),
    N = n(739455),
    R = n(468689),
    S = n(976860),
    O = n(309010),
    C = n(967198),
    D = n(792831),
    P = n(147925),
    M = n(723702),
    p = n(529942),
    m = n(164956);
n(321073);
var f = n(136722),
    g = n(44482),
    U = n(834730),
    h = n(732771),
    k = n(260509),
    y = n(34457),
    L = n(696451),
    x = n(317525),
    G = n(71393),
    j = n(287809),
    q = n(488926),
    v = n(935208),
    X = n(209700),
    b = n(652215),
    B = n(375708),
    F = n(59742);
function V(e) {
    let { guildId: t } = e,
        n = (0, a.bG)([j.default], () => j.default.getCurrentUser()),
        r = (0, a.bG)([G.A], () => G.A.getGuild(t)),
        s = (0, a.bG)([x.A], () => x.A.getRolesSnapshot(t)),
        o = (0, a.bG)([x.A], () => x.A.getSortedRoles(t)),
        { impersonateType: E, viewingRoles: c } = (0, a.cf)([m.A], () => ({
            impersonateType: m.A.getImpersonateType(t),
            viewingRoles: m.A.getViewingRoles(t),
        })),
        u = E === X._.SERVER_SHOP,
        _ = (0, a.bG)([L.Ay], () => (null != n ? L.Ay.getTrueMember(t, n.id) : null)),
        A = null != r ? s[(0, k.af)(r)] : null,
        [T, d] = l.useState(() => {
            let e = null == c ? [] : v.default.keys(c);
            return null != A && e.push(A.id), e;
        }),
        I = l.useRef(r);
    l.useEffect(() => {
        let e = {},
            t = I.current;
        if (null != t && null != E) {
            for (let t of T) {
                let n = s[t];
                null != n && (e[t] = n);
            }
            (0, p.IA)(t.id, { type: E, roles: e });
        }
    }, [T, E, s]);
    let N = null != r && null != n && null != _ ? o.find((e) => _.roles.includes(e.id)) : void 0,
        R = l.useMemo(
            () =>
                null != r && null != n
                    ? o
                          .filter((e) => !(0, y.Oy)(e))
                          .filter((e) => !u || e.tags?.subscription_listing_id != null)
                          .filter((e) => N?.id === e.id || q.wO(r, n.id, N, e))
                    : [],
            [r, n, u, N, o],
        ),
        S = l.useMemo(() => {
            let e = Array.from(R).map((e) => ({
                leading: w(e),
                value: e.id,
                label: e.name,
                id: e.id.toString(),
                disabled: !1,
            }));
            return (
                null != r &&
                    null != A &&
                    e.push({ leading: w(A), value: A.id, label: A.name, id: A.id.toString(), disabled: !0 }),
                e
            );
        }, [R, r, A]);
    if (null == n || null == r || null == _) return null;
    let O = {};
    return (_.roles.forEach((e) => {
        let t = s[e];
        null != t && (O[t.id] = t);
    }),
    f.zy(q.aH({ forceRoles: O, context: r }), f.kg(b.xBc.MANAGE_GUILD, b.xBc.MANAGE_ROLES)) || (0, k.bM)(r, n))
        ? (0, i.jsx)("div", {
              className: F.kL,
              children: (0, i.jsxs)(h.iS, {
                  selectionMode: "multiple",
                  options: S,
                  value: T,
                  onSelectionChange: (e) => {
                      d(e);
                  },
                  children: [
                      (0, i.jsx)(h.a3, { hideTags: !0, autoFocus: !0, placeholder: B.intl.string(B.t.Sojqsr) }),
                      (0, i.jsx)(h.X2, { renderListItem: (e) => (0, i.jsx)(g.c, { ...e }) }),
                  ],
              }),
          })
        : (0, i.jsx)(U.E, { variant: "text-md/medium", children: B.intl.string(B.t.MNSTbY) });
}
function w(e) {
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
var Y = n(2242),
    W = n(595156);
function K(e) {
    let { className: t, onClick: n, children: l, buttonRef: r } = e;
    return (0, i.jsx)(E.$n, {
        buttonRef: r,
        className: s()(W.x6, t),
        innerClassName: W.hZ,
        look: E.$n.Looks.OUTLINED,
        color: E.$n.Colors.WHITE,
        size: E.$n.Sizes.NONE,
        onClick: n,
        children: l,
    });
}
function $(e) {
    let { onClick: t, className: n } = e;
    return (0, i.jsx)(K, { onClick: t, className: n, children: B.intl.string(B.t.R9GHya) });
}
function Q() {
    let e = l.useRef(null),
        t = (0, a.bG)([C.A], () => C.A.getGuildId()),
        n = (0, a.bG)([O.Ay], () => O.Ay.getChannelId(t)),
        {
            viewingRoles: r,
            backNavigationSection: s,
            isFullServerPreview: E,
            isServerShopPreview: M,
        } = (0, a.cf)([m.A], () => ({
            viewingRoles: null != t ? m.A.getViewingRoles(t) : null,
            backNavigationSection: m.A.getBackNavigationSection(t),
            isFullServerPreview: null != t && m.A.isFullServerPreview(t),
            isServerShopPreview: null != t && m.A.isViewingServerShop(t),
        }));
    if (null == r || null == t) return null;
    let f = (function (e) {
            switch (e) {
                case b.BEX.INTEGRATIONS:
                    return B.intl.string(B.t.k7LGdh);
                case b.BEX.ROLE_SUBSCRIPTIONS:
                    return B.intl.string(B.t.bRqiqa);
                case b.BEX.ONBOARDING:
                    return B.intl.string(B.t.qZpU3S);
                default:
                    return B.intl.string(B.t.MTIXhi);
            }
        })(s),
        g = s === b.BEX.ROLE_SUBSCRIPTIONS ? B.intl.string(B.t.hZUCzd) : B.intl.string(B.t["/djIh7"]),
        U = n === H.VV.GUILD_ONBOARDING;
    function h(e) {
        let { backToSettings: n } = e;
        null != t &&
            (m.A.isFullServerPreview(t) && (0, S.pX)(b.BVt.CHANNEL(t)),
            d.Ay.shouldShowOnboarding(t) && (T.A.finishOnboarding(t), (0, I.Jg)(t)),
            (0, p.rf)(t),
            n && R.A.open(t, s),
            s === b.BEX.ROLE_SUBSCRIPTIONS && (0, N.Fx)(t));
    }
    return (0, i.jsxs)(c.$T, {
        color: c.Hv.BRAND,
        className: W.lm,
        children: [
            (0, i.jsxs)(K, {
                onClick: () => h({ backToSettings: !0 }),
                className: W.R4,
                children: [
                    (0, i.jsx)(D.A, { width: 16, height: 16, direction: D.A.Directions.LEFT, className: W.lJ }),
                    f,
                ],
            }),
            U && E
                ? (0, i.jsx)("div", {
                      className: W.XI,
                      children: (0, i.jsx)("div", { className: W.ut, children: B.intl.string(B.t.PxbiAf) }),
                  })
                : (0, i.jsxs)("div", {
                      className: W.XI,
                      children: [
                          (0, i.jsx)("div", {
                              className: W.ut,
                              children: E
                                  ? B.intl.formatToPlainString(B.t["0PHahI"], { numRoles: Object.keys(r).length })
                                  : B.intl.formatToPlainString(B.t.vMlK8t, { numRoles: Object.keys(r).length }),
                          }),
                          (0, i.jsx)(u.Y, {
                              targetElementRef: e,
                              position: "bottom",
                              renderPopout: () => (0, i.jsx)(V, { guildId: t }),
                              children: (t) => {
                                  let { onClick: n } = t;
                                  return (0, i.jsxs)(K, {
                                      onClick: n,
                                      buttonRef: e,
                                      children: [
                                          g,
                                          (0, i.jsx)(P.A, {
                                              width: 16,
                                              height: 16,
                                              direction: P.A.Directions.DOWN,
                                              className: W.k5,
                                          }),
                                      ],
                                  });
                              },
                          }),
                          E &&
                              (0, i.jsx)(_.m, {
                                  asContainer: !0,
                                  text: B.intl.string(B.t.mW4DUE),
                                  children: (0, i.jsx)(A.E, { size: "xs", color: o.A.unsafe_rawColors.YELLOW_300.css }),
                              }),
                          M &&
                              (0, i.jsx)(_.m, {
                                  asContainer: !0,
                                  text: B.intl.formatToPlainString(B.t.eummvd, { maxTiers: Y.f7, maxProducts: 50 }),
                                  children: (0, i.jsx)(A.E, { size: "xs", color: o.A.unsafe_rawColors.YELLOW_300.css }),
                              }),
                      ],
                  }),
            E || s === b.BEX.ROLE_SUBSCRIPTIONS
                ? null
                : (0, i.jsx)($, { onClick: () => h({ backToSettings: !1 }), className: W.ZY }),
        ],
    });
}
function z(e) {
    let { guildId: t } = e;
    return (0, a.bG)([m.A], () => m.A.isViewingRoles(t))
        ? (0, i.jsx)("div", {
              className: s()(W.xd, { [W.KF]: (0, M.isWindows)(), [W.Xz]: (0, M.isMac)(), [W.pS]: (0, M.isLinux)() }),
              children: (0, i.jsx)(Q, {}),
          })
        : null;
}
