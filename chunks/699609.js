n.d(t, { w: () => Z, A: () => $ });
var i = n(627968),
    l = n(64700),
    r = n(503698),
    s = n.n(r),
    a = n(17928),
    c = n(661531),
    o = n(990078),
    d = n(862482),
    u = n(417098),
    E = n(922016),
    A = n(695366),
    _ = n(669953),
    T = n(713125),
    I = n(608401),
    N = n(739455),
    R = n(468689),
    m = n(976860),
    C = n(309010),
    p = n(967198),
    S = n(792831),
    O = n(147925),
    g = n(723702),
    h = n(529942),
    f = n(164956);
n(321073);
var P = n(136722),
    M = n(44482),
    D = n(834730),
    x = n(732771),
    U = n(260509),
    y = n(34457),
    j = n(696451),
    L = n(317525),
    k = n(71393),
    v = n(287809),
    b = n(488926),
    G = n(935208),
    X = n(209700),
    q = n(652215),
    F = n(375708),
    B = n(59742);
function w(e) {
    let { guildId: t } = e,
        n = (0, a.bG)([v.default], () => v.default.getCurrentUser()),
        r = (0, a.bG)([k.A], () => k.A.getGuild(t)),
        s = (0, a.bG)([L.A], () => L.A.getRolesSnapshot(t)),
        c = (0, a.bG)([L.A], () => L.A.getSortedRoles(t)),
        { impersonateType: o, viewingRoles: d } = (0, a.cf)([f.A], () => ({
            impersonateType: f.A.getImpersonateType(t),
            viewingRoles: f.A.getViewingRoles(t),
        })),
        u = o === X._.SERVER_SHOP,
        E = (0, a.bG)([j.Ay], () => (null != n ? j.Ay.getTrueMember(t, n.id) : null)),
        A = null != r ? s[(0, U.af)(r)] : null,
        [_, T] = l.useState(() => {
            let e = null == d ? [] : G.default.keys(d);
            return null != A && e.push(A.id), e;
        }),
        I = l.useRef(r);
    l.useEffect(() => {
        let e = {},
            t = I.current;
        if (null != t && null != o) {
            for (let t of _) {
                let n = s[t];
                null != n && (e[t] = n);
            }
            (0, h.IA)(t.id, { type: o, roles: e });
        }
    }, [_, o, s]);
    let N = null != r && null != n && null != E ? c.find((e) => E.roles.includes(e.id)) : void 0,
        R = l.useMemo(
            () =>
                null != r && null != n
                    ? c
                          .filter((e) => !(0, y.Oy)(e))
                          .filter((e) => !u || e.tags?.subscription_listing_id != null)
                          .filter((e) => N?.id === e.id || b.wO(r, n.id, N, e))
                    : [],
            [r, n, u, N, c],
        ),
        m = l.useMemo(() => {
            let e = Array.from(R).map((e) => ({
                leading: V(e),
                value: e.id,
                label: e.name,
                id: e.id.toString(),
                disabled: !1,
            }));
            return (
                null != r &&
                    null != A &&
                    e.push({ leading: V(A), value: A.id, label: A.name, id: A.id.toString(), disabled: !0 }),
                e
            );
        }, [R, r, A]);
    if (null == n || null == r || null == E) return null;
    let C = {};
    return (E.roles.forEach((e) => {
        let t = s[e];
        null != t && (C[t.id] = t);
    }),
    P.zy(b.aH({ forceRoles: C, context: r }), P.kg(q.xBc.MANAGE_GUILD, q.xBc.MANAGE_ROLES)) || (0, U.bM)(r, n))
        ? (0, i.jsx)("div", {
              className: B.kL,
              children: (0, i.jsxs)(x.iS, {
                  selectionMode: "multiple",
                  options: m,
                  value: _,
                  onSelectionChange: (e) => {
                      T(e);
                  },
                  children: [
                      (0, i.jsx)(x.a3, { hideTags: !0, autoFocus: !0, placeholder: F.intl.string(F.t.Sojqsr) }),
                      (0, i.jsx)(x.X2, { renderListItem: (e) => (0, i.jsx)(M.c, { ...e }) }),
                  ],
              }),
          })
        : (0, i.jsx)(D.E, { variant: "text-md/medium", children: F.intl.string(F.t.MNSTbY) });
}
function V(e) {
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
    K = n(595156);
function W(e) {
    let { className: t, onClick: n, children: l, buttonRef: r } = e;
    return (0, i.jsx)(d.$n, {
        buttonRef: r,
        className: s()(K.x6, t),
        innerClassName: K.hZ,
        look: d.$n.Looks.OUTLINED,
        color: d.$n.Colors.WHITE,
        size: d.$n.Sizes.NONE,
        onClick: n,
        children: l,
    });
}
function z(e) {
    let { onClick: t, className: n } = e;
    return (0, i.jsx)(W, { onClick: t, className: n, children: F.intl.string(F.t.R9GHya) });
}
function $() {
    let e = l.useRef(null),
        t = (0, a.bG)([p.A], () => p.A.getGuildId()),
        n = (0, a.bG)([C.A], () => C.A.getChannelId(t)),
        {
            viewingRoles: r,
            backNavigationSection: s,
            isFullServerPreview: d,
            isServerShopPreview: g,
        } = (0, a.cf)([f.A], () => ({
            viewingRoles: null != t ? f.A.getViewingRoles(t) : null,
            backNavigationSection: f.A.getBackNavigationSection(t),
            isFullServerPreview: null != t && f.A.isFullServerPreview(t),
            isServerShopPreview: null != t && f.A.isViewingServerShop(t),
        }));
    if (null == r || null == t) return null;
    let P = (function (e) {
            switch (e) {
                case q.BEX.INTEGRATIONS:
                    return F.intl.string(F.t.k7LGdh);
                case q.BEX.ROLE_SUBSCRIPTIONS:
                    return F.intl.string(F.t.bRqiqa);
                case q.BEX.ONBOARDING:
                    return F.intl.string(F.t.qZpU3S);
                default:
                    return F.intl.string(F.t.MTIXhi);
            }
        })(s),
        M = s === q.BEX.ROLE_SUBSCRIPTIONS ? F.intl.string(F.t.hZUCzd) : F.intl.string(F.t["/djIh7"]),
        D = n === H.VV.GUILD_ONBOARDING,
        x = (e) => {
            let { backToSettings: n } = e;
            null != t &&
                (f.A.isFullServerPreview(t) && (0, m.pX)(q.BVt.CHANNEL(t)),
                T.Ay.shouldShowOnboarding(t) && (_.A.finishOnboarding(t), (0, I.Jg)(t)),
                (0, h.rf)(t),
                n && R.A.open(t, s),
                s === q.BEX.ROLE_SUBSCRIPTIONS && (0, N.Fx)(t));
        };
    return (0, i.jsxs)(u.$T, {
        color: u.Hv.BRAND,
        className: K.lm,
        children: [
            (0, i.jsxs)(W, {
                onClick: () => x({ backToSettings: !0 }),
                className: K.R4,
                children: [
                    (0, i.jsx)(S.A, { width: 16, height: 16, direction: S.A.Directions.LEFT, className: K.lJ }),
                    P,
                ],
            }),
            D && d
                ? (0, i.jsx)("div", {
                      className: K.XI,
                      children: (0, i.jsx)("div", { className: K.ut, children: F.intl.string(F.t.PxbiAf) }),
                  })
                : (0, i.jsxs)("div", {
                      className: K.XI,
                      children: [
                          (0, i.jsx)("div", {
                              className: K.ut,
                              children: d
                                  ? F.intl.formatToPlainString(F.t["0PHahI"], { numRoles: Object.keys(r).length })
                                  : F.intl.formatToPlainString(F.t.vMlK8t, { numRoles: Object.keys(r).length }),
                          }),
                          (0, i.jsx)(E.Y, {
                              targetElementRef: e,
                              position: "bottom",
                              renderPopout: () => (0, i.jsx)(w, { guildId: t }),
                              children: (t) => {
                                  let { onClick: n } = t;
                                  return (0, i.jsxs)(W, {
                                      onClick: n,
                                      buttonRef: e,
                                      children: [
                                          M,
                                          (0, i.jsx)(O.A, {
                                              width: 16,
                                              height: 16,
                                              direction: O.A.Directions.DOWN,
                                              className: K.k5,
                                          }),
                                      ],
                                  });
                              },
                          }),
                          d &&
                              (0, i.jsx)(o.m, {
                                  asContainer: !0,
                                  text: F.intl.string(F.t.mW4DUE),
                                  children: (0, i.jsx)(A.E, { size: "xs", color: c.A.unsafe_rawColors.YELLOW_300.css }),
                              }),
                          g &&
                              (0, i.jsx)(o.m, {
                                  asContainer: !0,
                                  text: F.intl.formatToPlainString(F.t.eummvd, { maxTiers: Y.f7, maxProducts: 50 }),
                                  children: (0, i.jsx)(A.E, { size: "xs", color: c.A.unsafe_rawColors.YELLOW_300.css }),
                              }),
                      ],
                  }),
            d || s === q.BEX.ROLE_SUBSCRIPTIONS
                ? null
                : (0, i.jsx)(z, { onClick: () => x({ backToSettings: !1 }), className: K.ZY }),
        ],
    });
}
function Z(e) {
    let { guildId: t } = e;
    return (0, a.bG)([f.A], () => f.A.isViewingRoles(t))
        ? (0, i.jsx)("div", {
              className: s()(K.xd, { [K.KF]: (0, g.isWindows)(), [K.Xz]: (0, g.isMac)(), [K.pS]: (0, g.isLinux)() }),
              children: (0, i.jsx)($, {}),
          })
        : null;
}
