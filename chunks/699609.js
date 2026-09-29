n.d(t, { w: () => z, A: () => Z });
var i = n(477900),
    l = n(582128),
    r = n(503698),
    s = n.n(r),
    a = n(17928),
    o = n(661531),
    c = n(862482),
    E = n(417098),
    u = n(922016),
    d = n(866665),
    _ = n(695366),
    A = n(669953),
    T = n(713125),
    I = n(608401),
    N = n(739455),
    R = n(468689),
    C = n(976860),
    O = n(309010),
    m = n(967198),
    S = n(792831),
    f = n(147925),
    p = n(723702),
    g = n(529942),
    D = n(164956);
n(321073);
var P = n(136722),
    h = n(834730),
    M = n(453318),
    U = n(44482),
    y = n(260509),
    L = n(34457),
    x = n(696451),
    k = n(317525),
    v = n(71393),
    j = n(287809),
    G = n(488926),
    b = n(935208),
    q = n(209700),
    B = n(652215),
    X = n(375708),
    w = n(588397);
function F(e) {
    let { guildId: t } = e,
        n = (0, a.bG)([j.default], () => j.default.getCurrentUser()),
        r = (0, a.bG)([v.A], () => v.A.getGuild(t)),
        s = (0, a.bG)([k.A], () => k.A.getRolesSnapshot(t)),
        o = (0, a.bG)([k.A], () => k.A.getSortedRoles(t)),
        { impersonateType: c, viewingRoles: E } = (0, a.cf)([D.A], () => ({
            impersonateType: D.A.getImpersonateType(t),
            viewingRoles: D.A.getViewingRoles(t),
        })),
        u = c === q._.SERVER_SHOP,
        d = (0, a.bG)([x.Ay], () => (null != n ? x.Ay.getTrueMember(t, n.id) : null)),
        _ = null != r ? s[(0, y.af)(r)] : null,
        [A, T] = l.useState(() => {
            let e = null == E ? [] : b.default.keys(E);
            return (null != _ && e.push(_.id), e);
        }),
        I = l.useRef(r);
    l.useEffect(() => {
        let e = {},
            t = I.current;
        if (null != t && null != c) {
            for (let t of A) {
                let n = s[t];
                null != n && (e[t] = n);
            }
            (0, g.IA)(t.id, { type: c, roles: e });
        }
    }, [A, c, s]);
    let N = null != r && null != n && null != d ? o.find((e) => d.roles.includes(e.id)) : void 0,
        R = l.useMemo(
            () =>
                null != r && null != n
                    ? o
                          .filter((e) => !(0, L.Oy)(e))
                          .filter((e) => !u || e.tags?.subscription_listing_id != null)
                          .filter((e) => N?.id === e.id || G.wO(r, n.id, N, e))
                    : [],
            [r, n, u, N, o],
        ),
        C = l.useMemo(() => {
            let e = Array.from(R).map((e) => ({
                leading: H(e),
                value: e.id,
                label: e.name,
                id: e.id.toString(),
                disabled: !1,
            }));
            return (
                null != r &&
                    null != _ &&
                    e.push({ leading: H(_), value: _.id, label: _.name, id: _.id.toString(), disabled: !0 }),
                e
            );
        }, [R, r, _]);
    if (null == n || null == r || null == d) return null;
    let O = {};
    return (d.roles.forEach((e) => {
        let t = s[e];
        null != t && (O[t.id] = t);
    }),
    P.zy(G.aH({ forceRoles: O, context: r }), P.kg(B.xBc.MANAGE_GUILD, B.xBc.MANAGE_ROLES)) || (0, y.bM)(r, n))
        ? (0, i.jsx)("div", {
              className: w.kL,
              children: (0, i.jsxs)(M.iS, {
                  selectionMode: "multiple",
                  options: C,
                  value: A,
                  onSelectionChange: (e) => {
                      T(e);
                  },
                  children: [
                      (0, i.jsx)(M.a3, { hideTags: !0, autoFocus: !0, placeholder: X.intl.string(X.t.Sojqsr) }),
                      (0, i.jsx)(M.X2, { renderListItem: (e) => (0, i.jsx)(U.c, { ...e }) }),
                  ],
              }),
          })
        : (0, i.jsx)(h.E, { variant: "text-md/medium", children: X.intl.string(X.t.MNSTbY) });
}
function H(e) {
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
var V = n(746080);
n(500208);
var Y = n(2242),
    K = n(539009);
function W(e) {
    let { className: t, onClick: n, children: l, buttonRef: r } = e;
    return (0, i.jsx)(c.$n, {
        buttonRef: r,
        className: s()(K.x6, t),
        innerClassName: K.hZ,
        look: c.$n.Looks.OUTLINED,
        color: c.$n.Colors.WHITE,
        size: c.$n.Sizes.NONE,
        onClick: n,
        children: l,
    });
}
function Q(e) {
    let { onClick: t, className: n } = e;
    return (0, i.jsx)(W, { onClick: t, className: n, children: X.intl.string(X.t.R9GHya) });
}
function Z() {
    let e = l.useRef(null),
        t = (0, a.bG)([m.A], () => m.A.getGuildId()),
        n = (0, a.bG)([O.Ay], () => O.Ay.getChannelId(t)),
        {
            viewingRoles: r,
            backNavigationSection: s,
            isFullServerPreview: c,
            isServerShopPreview: p,
        } = (0, a.cf)([D.A], () => ({
            viewingRoles: null != t ? D.A.getViewingRoles(t) : null,
            backNavigationSection: D.A.getBackNavigationSection(t),
            isFullServerPreview: null != t && D.A.isFullServerPreview(t),
            isServerShopPreview: null != t && D.A.isViewingServerShop(t),
        }));
    if (null == r || null == t) return null;
    let P = (function (e) {
            switch (e) {
                case B.BEX.INTEGRATIONS:
                    return X.intl.string(X.t.k7LGdh);
                case B.BEX.ROLE_SUBSCRIPTIONS:
                    return X.intl.string(X.t.bRqiqa);
                case B.BEX.ONBOARDING:
                    return X.intl.string(X.t.qZpU3S);
                default:
                    return X.intl.string(X.t.MTIXhi);
            }
        })(s),
        h = s === B.BEX.ROLE_SUBSCRIPTIONS ? X.intl.string(X.t.hZUCzd) : X.intl.string(X.t["/djIh7"]),
        M = n === V.VV.GUILD_ONBOARDING;
    function U(e) {
        let { backToSettings: n } = e;
        null != t &&
            (D.A.isFullServerPreview(t) && (0, C.pX)(B.BVt.CHANNEL(t)),
            T.Ay.shouldShowOnboarding(t) && (A.A.finishOnboarding(t), (0, I.Jg)(t)),
            (0, g.rf)(t),
            n && R.default.open(t, s),
            s === B.BEX.ROLE_SUBSCRIPTIONS && (0, N.Fx)(t));
    }
    return (0, i.jsxs)(E.$T, {
        color: E.Hv.BRAND,
        className: K.lm,
        children: [
            (0, i.jsxs)(W, {
                onClick: () => U({ backToSettings: !0 }),
                className: K.R4,
                children: [
                    (0, i.jsx)(S.A, { width: 16, height: 16, direction: S.A.Directions.LEFT, className: K.lJ }),
                    P,
                ],
            }),
            M && c
                ? (0, i.jsx)("div", {
                      className: K.XI,
                      children: (0, i.jsx)("div", { className: K.ut, children: X.intl.string(X.t.PxbiAf) }),
                  })
                : (0, i.jsxs)("div", {
                      className: K.XI,
                      children: [
                          (0, i.jsx)("div", {
                              className: K.ut,
                              children: c
                                  ? X.intl.formatToPlainString(X.t["0PHahI"], { numRoles: Object.keys(r).length })
                                  : X.intl.formatToPlainString(X.t.vMlK8t, { numRoles: Object.keys(r).length }),
                          }),
                          (0, i.jsx)(u.Y, {
                              targetElementRef: e,
                              position: "bottom",
                              renderPopout: () => (0, i.jsx)(F, { guildId: t }),
                              children: (t) => {
                                  let { onClick: n } = t;
                                  return (0, i.jsxs)(W, {
                                      onClick: n,
                                      buttonRef: e,
                                      children: [
                                          h,
                                          (0, i.jsx)(f.A, {
                                              width: 16,
                                              height: 16,
                                              direction: f.A.Directions.DOWN,
                                              className: K.k5,
                                          }),
                                      ],
                                  });
                              },
                          }),
                          c &&
                              (0, i.jsx)(d.m, {
                                  asContainer: !0,
                                  text: X.intl.string(X.t.mW4DUE),
                                  children: (0, i.jsx)(_.E, { size: "xs", color: o.A.unsafe_rawColors.YELLOW_300.css }),
                              }),
                          p &&
                              (0, i.jsx)(d.m, {
                                  asContainer: !0,
                                  text: X.intl.formatToPlainString(X.t.eummvd, { maxTiers: Y.f7, maxProducts: 50 }),
                                  children: (0, i.jsx)(_.E, { size: "xs", color: o.A.unsafe_rawColors.YELLOW_300.css }),
                              }),
                      ],
                  }),
            c || s === B.BEX.ROLE_SUBSCRIPTIONS
                ? null
                : (0, i.jsx)(Q, { onClick: () => U({ backToSettings: !1 }), className: K.ZY }),
        ],
    });
}
function z(e) {
    let { guildId: t } = e;
    return (0, a.bG)([D.A], () => D.A.isViewingRoles(t))
        ? (0, i.jsx)("div", {
              className: s()(K.xd, { [K.KF]: (0, p.isWindows)(), [K.Xz]: (0, p.isMac)(), [K.pS]: (0, p.isLinux)() }),
              children: (0, i.jsx)(Z, {}),
          })
        : null;
}
