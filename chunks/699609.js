n.d(t, { w: () => $, A: () => z });
var i = n(627968),
    l = n(64700),
    r = n(503698),
    s = n.n(r),
    a = n(17928),
    E = n(661531),
    o = n(862482),
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
    m = n(147925),
    p = n(723702),
    P = n(529942),
    M = n(164956);
n(321073);
var f = n(136722),
    g = n(44482),
    h = n(834730),
    U = n(732771),
    y = n(260509),
    L = n(34457),
    k = n(696451),
    x = n(317525),
    G = n(71393),
    j = n(287809),
    v = n(488926),
    q = n(935208),
    X = n(209700),
    b = n(652215),
    B = n(375708),
    w = n(804982);
function F(e) {
    let { guildId: t } = e,
        n = (0, a.bG)([j.default], () => j.default.getCurrentUser()),
        r = (0, a.bG)([G.A], () => G.A.getGuild(t)),
        s = (0, a.bG)([x.A], () => x.A.getRolesSnapshot(t)),
        E = (0, a.bG)([x.A], () => x.A.getSortedRoles(t)),
        { impersonateType: o, viewingRoles: c } = (0, a.cf)([M.A], () => ({
            impersonateType: M.A.getImpersonateType(t),
            viewingRoles: M.A.getViewingRoles(t),
        })),
        u = o === X._.SERVER_SHOP,
        _ = (0, a.bG)([k.Ay], () => (null != n ? k.Ay.getTrueMember(t, n.id) : null)),
        A = null != r ? s[(0, y.af)(r)] : null,
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
            (0, P.IA)(t.id, { type: o, roles: e });
        }
    }, [T, o, s]);
    let N = null != r && null != n && null != _ ? E.find((e) => _.roles.includes(e.id)) : void 0,
        R = l.useMemo(
            () =>
                null != r && null != n
                    ? E.filter((e) => !(0, L.Oy)(e))
                          .filter((e) => !u || e.tags?.subscription_listing_id != null)
                          .filter((e) => N?.id === e.id || v.wO(r, n.id, N, e))
                    : [],
            [r, n, u, N, E],
        ),
        S = l.useMemo(() => {
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
    if (null == n || null == r || null == _) return null;
    let O = {};
    return (_.roles.forEach((e) => {
        let t = s[e];
        null != t && (O[t.id] = t);
    }),
    f.zy(v.aH({ forceRoles: O, context: r }), f.kg(b.xBc.MANAGE_GUILD, b.xBc.MANAGE_ROLES)) || (0, y.bM)(r, n))
        ? (0, i.jsx)("div", {
              className: w.kL,
              children: (0, i.jsxs)(U.iS, {
                  selectionMode: "multiple",
                  options: S,
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
var K = n(2242),
    Y = n(740028);
function W(e) {
    let { className: t, onClick: n, children: l, buttonRef: r } = e;
    return (0, i.jsx)(o.$n, {
        buttonRef: r,
        className: s()(Y.x6, t),
        innerClassName: Y.hZ,
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
        n = (0, a.bG)([O.Ay], () => O.Ay.getChannelId(t)),
        {
            viewingRoles: r,
            backNavigationSection: s,
            isFullServerPreview: o,
            isServerShopPreview: p,
        } = (0, a.cf)([M.A], () => ({
            viewingRoles: null != t ? M.A.getViewingRoles(t) : null,
            backNavigationSection: M.A.getBackNavigationSection(t),
            isFullServerPreview: null != t && M.A.isFullServerPreview(t),
            isServerShopPreview: null != t && M.A.isViewingServerShop(t),
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
        h = n === V.VV.GUILD_ONBOARDING;
    function U(e) {
        let { backToSettings: n } = e;
        null != t &&
            (M.A.isFullServerPreview(t) && (0, S.pX)(b.BVt.CHANNEL(t)),
            d.Ay.shouldShowOnboarding(t) && (T.A.finishOnboarding(t), (0, I.Jg)(t)),
            (0, P.rf)(t),
            n && R.A.open(t, s),
            s === b.BEX.ROLE_SUBSCRIPTIONS && (0, N.Fx)(t));
    }
    return (0, i.jsxs)(c.$T, {
        color: c.Hv.BRAND,
        className: Y.lm,
        children: [
            (0, i.jsxs)(W, {
                onClick: () => U({ backToSettings: !0 }),
                className: Y.R4,
                children: [
                    (0, i.jsx)(D.A, { width: 16, height: 16, direction: D.A.Directions.LEFT, className: Y.lJ }),
                    f,
                ],
            }),
            h && o
                ? (0, i.jsx)("div", {
                      className: Y.XI,
                      children: (0, i.jsx)("div", { className: Y.ut, children: B.intl.string(B.t.PxbiAf) }),
                  })
                : (0, i.jsxs)("div", {
                      className: Y.XI,
                      children: [
                          (0, i.jsx)("div", {
                              className: Y.ut,
                              children: o
                                  ? B.intl.formatToPlainString(B.t["0PHahI"], { numRoles: Object.keys(r).length })
                                  : B.intl.formatToPlainString(B.t.vMlK8t, { numRoles: Object.keys(r).length }),
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
                                          g,
                                          (0, i.jsx)(m.A, {
                                              width: 16,
                                              height: 16,
                                              direction: m.A.Directions.DOWN,
                                              className: Y.k5,
                                          }),
                                      ],
                                  });
                              },
                          }),
                          o &&
                              (0, i.jsx)(_.m, {
                                  asContainer: !0,
                                  text: B.intl.string(B.t.mW4DUE),
                                  children: (0, i.jsx)(A.E, { size: "xs", color: E.A.unsafe_rawColors.YELLOW_300.css }),
                              }),
                          p &&
                              (0, i.jsx)(_.m, {
                                  asContainer: !0,
                                  text: B.intl.formatToPlainString(B.t.eummvd, { maxTiers: K.f7, maxProducts: 50 }),
                                  children: (0, i.jsx)(A.E, { size: "xs", color: E.A.unsafe_rawColors.YELLOW_300.css }),
                              }),
                      ],
                  }),
            o || s === b.BEX.ROLE_SUBSCRIPTIONS
                ? null
                : (0, i.jsx)(Z, { onClick: () => U({ backToSettings: !1 }), className: Y.ZY }),
        ],
    });
}
function $(e) {
    let { guildId: t } = e;
    return (0, a.bG)([M.A], () => M.A.isViewingRoles(t))
        ? (0, i.jsx)("div", {
              className: s()(Y.xd, { [Y.KF]: (0, p.isWindows)(), [Y.Xz]: (0, p.isMac)(), [Y.pS]: (0, p.isLinux)() }),
              children: (0, i.jsx)(z, {}),
          })
        : null;
}
