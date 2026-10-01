n.d(t, { w: () => Q, A: () => $ });
var i = n(477900),
    l = n(582128),
    r = n(503698),
    s = n.n(r),
    a = n(17928),
    E = n(661531),
    o = n(862482),
    c = n(417098),
    _ = n(922016),
    u = n(866665),
    A = n(695366),
    T = n(669953),
    I = n(713125),
    d = n(608401),
    N = n(739455),
    R = n(468689),
    O = n(976860),
    S = n(309010),
    C = n(967198),
    D = n(792831),
    P = n(147925),
    p = n(723702),
    M = n(529942),
    m = n(164956);
n(321073);
var f = n(136722),
    U = n(834730),
    g = n(453318),
    h = n(44482),
    k = n(260509),
    y = n(34457),
    L = n(696451),
    x = n(317525),
    G = n(71393),
    j = n(287809),
    q = n(488926),
    v = n(935208),
    X = n(209700),
    B = n(652215),
    b = n(375708),
    F = n(588397);
function V(e) {
    let { guildId: t } = e,
        n = (0, a.bG)([j.default], () => j.default.getCurrentUser()),
        r = (0, a.bG)([G.A], () => G.A.getGuild(t)),
        s = (0, a.bG)([x.A], () => x.A.getRolesSnapshot(t)),
        E = (0, a.bG)([x.A], () => x.A.getSortedRoles(t)),
        { impersonateType: o, viewingRoles: c } = (0, a.cf)([m.A], () => ({
            impersonateType: m.A.getImpersonateType(t),
            viewingRoles: m.A.getViewingRoles(t),
        })),
        _ = o === X._.SERVER_SHOP,
        u = (0, a.bG)([L.Ay], () => (null != n ? L.Ay.getTrueMember(t, n.id) : null)),
        A = null != r ? s[(0, k.af)(r)] : null,
        [T, I] = l.useState(() => {
            let e = null == c ? [] : v.default.keys(c);
            return (null != A && e.push(A.id), e);
        }),
        d = l.useRef(r);
    l.useEffect(() => {
        let e = {},
            t = d.current;
        if (null != t && null != o) {
            for (let t of T) {
                let n = s[t];
                null != n && (e[t] = n);
            }
            (0, M.IA)(t.id, { type: o, roles: e });
        }
    }, [T, o, s]);
    let N = null != r && null != n && null != u ? E.find((e) => u.roles.includes(e.id)) : void 0,
        R = l.useMemo(
            () =>
                null != r && null != n
                    ? E.filter((e) => !(0, y.Oy)(e))
                          .filter((e) => !_ || e.tags?.subscription_listing_id != null)
                          .filter((e) => N?.id === e.id || q.wO(r, n.id, N, e))
                    : [],
            [r, n, _, N, E],
        ),
        O = l.useMemo(() => {
            let e = Array.from(R).map((e) => ({
                leading: H(e),
                value: e.id,
                label: e.name,
                id: e.id.toString(),
                disabled: !1,
            }));
            return (
                null != r &&
                    null != A &&
                    e.push({ leading: H(A), value: A.id, label: A.name, id: A.id.toString(), disabled: !0 }),
                e
            );
        }, [R, r, A]);
    if (null == n || null == r || null == u) return null;
    let S = {};
    return (u.roles.forEach((e) => {
        let t = s[e];
        null != t && (S[t.id] = t);
    }),
    f.zy(q.aH({ forceRoles: S, context: r }), f.kg(B.xBc.MANAGE_GUILD, B.xBc.MANAGE_ROLES)) || (0, k.bM)(r, n))
        ? (0, i.jsx)("div", {
              className: F.kL,
              children: (0, i.jsxs)(g.iS, {
                  selectionMode: "multiple",
                  options: O,
                  value: T,
                  onSelectionChange: (e) => {
                      I(e);
                  },
                  children: [
                      (0, i.jsx)(g.a3, { hideTags: !0, autoFocus: !0, placeholder: b.intl.string(b.t.Sojqsr) }),
                      (0, i.jsx)(g.X2, { renderListItem: (e) => (0, i.jsx)(h.c, { ...e }) }),
                  ],
              }),
          })
        : (0, i.jsx)(U.E, { variant: "text-md/medium", children: b.intl.string(b.t.MNSTbY) });
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
var w = n(746080);
n(500208);
var Y = n(2242),
    K = n(539009);
function W(e) {
    let { className: t, onClick: n, children: l, buttonRef: r } = e;
    return (0, i.jsx)(o.$n, {
        buttonRef: r,
        className: s()(K.x6, t),
        innerClassName: K.hZ,
        look: o.$n.Looks.OUTLINED,
        color: o.$n.Colors.WHITE,
        size: o.$n.Sizes.NONE,
        onClick: n,
        children: l,
    });
}
function z(e) {
    let { onClick: t, className: n } = e;
    return (0, i.jsx)(W, { onClick: t, className: n, children: b.intl.string(b.t.R9GHya) });
}
function $() {
    let e = l.useRef(null),
        t = (0, a.bG)([C.A], () => C.A.getGuildId()),
        n = (0, a.bG)([S.Ay], () => S.Ay.getChannelId(t)),
        {
            viewingRoles: r,
            backNavigationSection: s,
            isFullServerPreview: o,
            isServerShopPreview: p,
        } = (0, a.cf)([m.A], () => ({
            viewingRoles: null != t ? m.A.getViewingRoles(t) : null,
            backNavigationSection: m.A.getBackNavigationSection(t),
            isFullServerPreview: null != t && m.A.isFullServerPreview(t),
            isServerShopPreview: null != t && m.A.isViewingServerShop(t),
        }));
    if (null == r || null == t) return null;
    let f = (function (e) {
            switch (e) {
                case B.BEX.INTEGRATIONS:
                    return b.intl.string(b.t.k7LGdh);
                case B.BEX.ROLE_SUBSCRIPTIONS:
                    return b.intl.string(b.t.bRqiqa);
                case B.BEX.ONBOARDING:
                    return b.intl.string(b.t.qZpU3S);
                default:
                    return b.intl.string(b.t.MTIXhi);
            }
        })(s),
        U = s === B.BEX.ROLE_SUBSCRIPTIONS ? b.intl.string(b.t.hZUCzd) : b.intl.string(b.t["/djIh7"]),
        g = n === w.VV.GUILD_ONBOARDING;
    function h(e) {
        let { backToSettings: n } = e;
        null != t &&
            (m.A.isFullServerPreview(t) && (0, O.pX)(B.BVt.CHANNEL(t)),
            I.Ay.shouldShowOnboarding(t) && (T.A.finishOnboarding(t), (0, d.Jg)(t)),
            (0, M.rf)(t),
            n && R.default.open(t, s),
            s === B.BEX.ROLE_SUBSCRIPTIONS && (0, N.Fx)(t));
    }
    return (0, i.jsxs)(c.$T, {
        color: c.Hv.BRAND,
        className: K.lm,
        children: [
            (0, i.jsxs)(W, {
                onClick: () => h({ backToSettings: !0 }),
                className: K.R4,
                children: [
                    (0, i.jsx)(D.A, { width: 16, height: 16, direction: D.A.Directions.LEFT, className: K.lJ }),
                    f,
                ],
            }),
            g && o
                ? (0, i.jsx)("div", {
                      className: K.XI,
                      children: (0, i.jsx)("div", { className: K.ut, children: b.intl.string(b.t.PxbiAf) }),
                  })
                : (0, i.jsxs)("div", {
                      className: K.XI,
                      children: [
                          (0, i.jsx)("div", {
                              className: K.ut,
                              children: o
                                  ? b.intl.formatToPlainString(b.t["0PHahI"], { numRoles: Object.keys(r).length })
                                  : b.intl.formatToPlainString(b.t.vMlK8t, { numRoles: Object.keys(r).length }),
                          }),
                          (0, i.jsx)(_.Y, {
                              targetElementRef: e,
                              position: "bottom",
                              renderPopout: () => (0, i.jsx)(V, { guildId: t }),
                              children: (t) => {
                                  let { onClick: n } = t;
                                  return (0, i.jsxs)(W, {
                                      onClick: n,
                                      buttonRef: e,
                                      children: [
                                          U,
                                          (0, i.jsx)(P.A, {
                                              width: 16,
                                              height: 16,
                                              direction: P.A.Directions.DOWN,
                                              className: K.k5,
                                          }),
                                      ],
                                  });
                              },
                          }),
                          o &&
                              (0, i.jsx)(u.m, {
                                  asContainer: !0,
                                  text: b.intl.string(b.t.mW4DUE),
                                  children: (0, i.jsx)(A.E, { size: "xs", color: E.A.unsafe_rawColors.YELLOW_300.css }),
                              }),
                          p &&
                              (0, i.jsx)(u.m, {
                                  asContainer: !0,
                                  text: b.intl.formatToPlainString(b.t.eummvd, { maxTiers: Y.f7, maxProducts: 50 }),
                                  children: (0, i.jsx)(A.E, { size: "xs", color: E.A.unsafe_rawColors.YELLOW_300.css }),
                              }),
                      ],
                  }),
            o || s === B.BEX.ROLE_SUBSCRIPTIONS
                ? null
                : (0, i.jsx)(z, { onClick: () => h({ backToSettings: !1 }), className: K.ZY }),
        ],
    });
}
function Q(e) {
    let { guildId: t } = e;
    return (0, a.bG)([m.A], () => m.A.isViewingRoles(t))
        ? (0, i.jsx)("div", {
              className: s()(K.xd, { [K.KF]: (0, p.isWindows)(), [K.Xz]: (0, p.isMac)(), [K.pS]: (0, p.isLinux)() }),
              children: (0, i.jsx)($, {}),
          })
        : null;
}
