n.d(t, { w: () => $, A: () => z });
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
    d = n(713125),
    I = n(608401),
    N = n(739455),
    R = n(468689),
    O = n(976860),
    S = n(309010),
    C = n(967198),
    D = n(792831),
    m = n(147925),
    P = n(723702),
    p = n(529942),
    f = n(164956);
n(321073);
var M = n(136722),
    g = n(44482),
    h = n(834730),
    U = n(453318),
    L = n(260509),
    y = n(34457),
    k = n(696451),
    x = n(317525),
    G = n(71393),
    v = n(287809),
    j = n(488926),
    q = n(935208),
    b = n(209700),
    X = n(652215),
    B = n(375708),
    w = n(588397);
function F(e) {
    let { guildId: t } = e,
        n = (0, a.bG)([v.default], () => v.default.getCurrentUser()),
        r = (0, a.bG)([G.A], () => G.A.getGuild(t)),
        s = (0, a.bG)([x.A], () => x.A.getRolesSnapshot(t)),
        E = (0, a.bG)([x.A], () => x.A.getSortedRoles(t)),
        { impersonateType: o, viewingRoles: c } = (0, a.cf)([f.A], () => ({
            impersonateType: f.A.getImpersonateType(t),
            viewingRoles: f.A.getViewingRoles(t),
        })),
        _ = o === b._.SERVER_SHOP,
        u = (0, a.bG)([k.Ay], () => (null != n ? k.Ay.getTrueMember(t, n.id) : null)),
        A = null != r ? s[(0, L.af)(r)] : null,
        [T, d] = l.useState(() => {
            let e = null == c ? [] : q.default.keys(c);
            return null != A && e.push(A.id), e;
        }),
        I = l.useRef(r);
    l.useEffect(() => {
        let e = {},
            t = I.current;
        if (null != t && null != o) {
            for (let t of T) {
                let n = s[t];
                null != n && (e[t] = n);
            }
            (0, p.IA)(t.id, { type: o, roles: e });
        }
    }, [T, o, s]);
    let N = null != r && null != n && null != u ? E.find((e) => u.roles.includes(e.id)) : void 0,
        R = l.useMemo(
            () =>
                null != r && null != n
                    ? E.filter((e) => !(0, y.Oy)(e))
                          .filter((e) => !_ || e.tags?.subscription_listing_id != null)
                          .filter((e) => N?.id === e.id || j.wO(r, n.id, N, e))
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
    M.zy(j.aH({ forceRoles: S, context: r }), M.kg(X.xBc.MANAGE_GUILD, X.xBc.MANAGE_ROLES)) || (0, L.bM)(r, n))
        ? (0, i.jsx)("div", {
              className: w.kL,
              children: (0, i.jsxs)(U.iS, {
                  selectionMode: "multiple",
                  options: O,
                  value: T,
                  onSelectionChange: (e) => {
                      d(e);
                  },
                  children: [
                      (0, i.jsx)(U.a3, { hideTags: !0, autoFocus: !0, placeholder: B.intl.string(B.t.Sojqsr) }),
                      (0, i.jsx)(U.X2, { renderListItem: (e) => (0, i.jsx)(g.c, { ...e }) }),
                  ],
              }),
          })
        : (0, i.jsx)(h.E, { variant: "text-md/medium", children: B.intl.string(B.t.MNSTbY) });
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
function Z(e) {
    let { onClick: t, className: n } = e;
    return (0, i.jsx)(W, { onClick: t, className: n, children: B.intl.string(B.t.R9GHya) });
}
function z() {
    let e = l.useRef(null),
        t = (0, a.bG)([C.A], () => C.A.getGuildId()),
        n = (0, a.bG)([S.Ay], () => S.Ay.getChannelId(t)),
        {
            viewingRoles: r,
            backNavigationSection: s,
            isFullServerPreview: o,
            isServerShopPreview: P,
        } = (0, a.cf)([f.A], () => ({
            viewingRoles: null != t ? f.A.getViewingRoles(t) : null,
            backNavigationSection: f.A.getBackNavigationSection(t),
            isFullServerPreview: null != t && f.A.isFullServerPreview(t),
            isServerShopPreview: null != t && f.A.isViewingServerShop(t),
        }));
    if (null == r || null == t) return null;
    let M = (function (e) {
            switch (e) {
                case X.BEX.INTEGRATIONS:
                    return B.intl.string(B.t.k7LGdh);
                case X.BEX.ROLE_SUBSCRIPTIONS:
                    return B.intl.string(B.t.bRqiqa);
                case X.BEX.ONBOARDING:
                    return B.intl.string(B.t.qZpU3S);
                default:
                    return B.intl.string(B.t.MTIXhi);
            }
        })(s),
        g = s === X.BEX.ROLE_SUBSCRIPTIONS ? B.intl.string(B.t.hZUCzd) : B.intl.string(B.t["/djIh7"]),
        h = n === V.VV.GUILD_ONBOARDING;
    function U(e) {
        let { backToSettings: n } = e;
        null != t &&
            (f.A.isFullServerPreview(t) && (0, O.pX)(X.BVt.CHANNEL(t)),
            d.Ay.shouldShowOnboarding(t) && (T.A.finishOnboarding(t), (0, I.Jg)(t)),
            (0, p.rf)(t),
            n && R.A.open(t, s),
            s === X.BEX.ROLE_SUBSCRIPTIONS && (0, N.Fx)(t));
    }
    return (0, i.jsxs)(c.$T, {
        color: c.Hv.BRAND,
        className: K.lm,
        children: [
            (0, i.jsxs)(W, {
                onClick: () => U({ backToSettings: !0 }),
                className: K.R4,
                children: [
                    (0, i.jsx)(D.A, { width: 16, height: 16, direction: D.A.Directions.LEFT, className: K.lJ }),
                    M,
                ],
            }),
            h && o
                ? (0, i.jsx)("div", {
                      className: K.XI,
                      children: (0, i.jsx)("div", { className: K.ut, children: B.intl.string(B.t.PxbiAf) }),
                  })
                : (0, i.jsxs)("div", {
                      className: K.XI,
                      children: [
                          (0, i.jsx)("div", {
                              className: K.ut,
                              children: o
                                  ? B.intl.formatToPlainString(B.t["0PHahI"], { numRoles: Object.keys(r).length })
                                  : B.intl.formatToPlainString(B.t.vMlK8t, { numRoles: Object.keys(r).length }),
                          }),
                          (0, i.jsx)(_.Y, {
                              targetElementRef: e,
                              position: "bottom",
                              renderPopout: () => (0, i.jsx)(F, { guildId: t }),
                              children: (t) => {
                                  let { onClick: n } = t;
                                  return (0, i.jsxs)(W, {
                                      onClick: n,
                                      buttonRef: e,
                                      children: [
                                          g,
                                          (0, i.jsx)(m.A, {
                                              width: 16,
                                              height: 16,
                                              direction: m.A.Directions.DOWN,
                                              className: K.k5,
                                          }),
                                      ],
                                  });
                              },
                          }),
                          o &&
                              (0, i.jsx)(u.m, {
                                  asContainer: !0,
                                  text: B.intl.string(B.t.mW4DUE),
                                  children: (0, i.jsx)(A.E, { size: "xs", color: E.A.unsafe_rawColors.YELLOW_300.css }),
                              }),
                          P &&
                              (0, i.jsx)(u.m, {
                                  asContainer: !0,
                                  text: B.intl.formatToPlainString(B.t.eummvd, { maxTiers: Y.f7, maxProducts: 50 }),
                                  children: (0, i.jsx)(A.E, { size: "xs", color: E.A.unsafe_rawColors.YELLOW_300.css }),
                              }),
                      ],
                  }),
            o || s === X.BEX.ROLE_SUBSCRIPTIONS
                ? null
                : (0, i.jsx)(Z, { onClick: () => U({ backToSettings: !1 }), className: K.ZY }),
        ],
    });
}
function $(e) {
    let { guildId: t } = e;
    return (0, a.bG)([f.A], () => f.A.isViewingRoles(t))
        ? (0, i.jsx)("div", {
              className: s()(K.xd, { [K.KF]: (0, P.isWindows)(), [K.Xz]: (0, P.isMac)(), [K.pS]: (0, P.isLinux)() }),
              children: (0, i.jsx)(z, {}),
          })
        : null;
}
