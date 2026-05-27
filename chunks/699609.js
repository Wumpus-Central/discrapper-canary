"use strict";
n.d(t, { w: () => Z, A: () => X });
var i = n(627968),
    r = n(64700),
    s = n(503698),
    a = n.n(s),
    o = n(17928),
    l = n(661531),
    u = n(990078),
    c = n(862482),
    d = n(417098),
    _ = n(922016),
    h = n(695366),
    f = n(669953),
    p = n(713125),
    E = n(608401),
    m = n(739455),
    g = n(468689),
    A = n(976860),
    I = n(309010),
    T = n(967198),
    S = n(792831),
    y = n(147925),
    N = n(723702),
    v = n(529942),
    C = n(164956);
n(321073);
var R = n(136722),
    O = n(44482),
    b = n(834730),
    D = n(732771),
    L = n(260509),
    w = n(34457),
    M = n(696451),
    P = n(317525),
    x = n(71393),
    k = n(287809),
    U = n(488926),
    G = n(935208),
    F = n(209700),
    V = n(652215),
    B = n(375708),
    H = n(59742);
function j(e) {
    let { guildId: t } = e,
        n = (0, o.bG)([k.default], () => k.default.getCurrentUser()),
        s = (0, o.bG)([x.A], () => x.A.getGuild(t)),
        a = (0, o.bG)([P.A], () => P.A.getRolesSnapshot(t)),
        l = (0, o.bG)([P.A], () => P.A.getSortedRoles(t)),
        { impersonateType: u, viewingRoles: c } = (0, o.cf)([C.A], () => ({
            impersonateType: C.A.getImpersonateType(t),
            viewingRoles: C.A.getViewingRoles(t),
        })),
        d = u === F._.SERVER_SHOP,
        _ = (0, o.bG)([M.Ay], () => (null != n ? M.Ay.getTrueMember(t, n.id) : null)),
        h = null != s ? a[(0, L.af)(s)] : null,
        [f, p] = r.useState(() => {
            let e = null == c ? [] : G.default.keys(c);
            return null != h && e.push(h.id), e;
        }),
        E = r.useRef(s);
    r.useEffect(() => {
        let e = {},
            t = E.current;
        if (null != t && null != u) {
            for (let t of f) {
                let n = a[t];
                null != n && (e[t] = n);
            }
            (0, v.IA)(t.id, { type: u, roles: e });
        }
    }, [f, u, a]);
    let m = null != s && null != n && null != _ ? l.find((e) => _.roles.includes(e.id)) : void 0,
        g = r.useMemo(
            () =>
                null != s && null != n
                    ? l
                          .filter((e) => !(0, w.Oy)(e))
                          .filter((e) => !d || e.tags?.subscription_listing_id != null)
                          .filter((e) => m?.id === e.id || U.wO(s, n.id, m, e))
                    : [],
            [s, n, d, m, l],
        ),
        A = r.useMemo(() => {
            let e = Array.from(g).map((e) => ({
                leading: Y(e),
                value: e.id,
                label: e.name,
                id: e.id.toString(),
                disabled: !1,
            }));
            return (
                null != s &&
                    null != h &&
                    e.push({ leading: Y(h), value: h.id, label: h.name, id: h.id.toString(), disabled: !0 }),
                e
            );
        }, [g, s, h]);
    if (null == n || null == s || null == _) return null;
    let I = {};
    return (_.roles.forEach((e) => {
        let t = a[e];
        null != t && (I[t.id] = t);
    }),
    R.zy(U.aH({ forceRoles: I, context: s }), R.kg(V.xBc.MANAGE_GUILD, V.xBc.MANAGE_ROLES)) || (0, L.bM)(s, n))
        ? (0, i.jsx)("div", {
              className: H.kL,
              children: (0, i.jsxs)(D.iS, {
                  selectionMode: "multiple",
                  options: A,
                  value: f,
                  onSelectionChange: (e) => {
                      p(e);
                  },
                  children: [
                      (0, i.jsx)(D.a3, { hideTags: !0, autoFocus: !0, placeholder: B.intl.string(B.t.Sojqsr) }),
                      (0, i.jsx)(D.X2, { renderListItem: (e) => (0, i.jsx)(O.c, { ...e }) }),
                  ],
              }),
          })
        : (0, i.jsx)(b.E, { variant: "text-md/medium", children: B.intl.string(B.t.MNSTbY) });
}
function Y(e) {
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
var W = n(746080);
n(500208);
var K = n(2242),
    $ = n(595156);
function z(e) {
    let { className: t, onClick: n, children: r, buttonRef: s } = e;
    return (0, i.jsx)(c.$n, {
        buttonRef: s,
        className: a()($.x6, t),
        innerClassName: $.hZ,
        look: c.$n.Looks.OUTLINED,
        color: c.$n.Colors.WHITE,
        size: c.$n.Sizes.NONE,
        onClick: n,
        children: r,
    });
}
function q(e) {
    let { onClick: t, className: n } = e;
    return (0, i.jsx)(z, { onClick: t, className: n, children: B.intl.string(B.t.R9GHya) });
}
function X() {
    let e = r.useRef(null),
        t = (0, o.bG)([T.A], () => T.A.getGuildId()),
        n = (0, o.bG)([I.A], () => I.A.getChannelId(t)),
        {
            viewingRoles: s,
            backNavigationSection: a,
            isFullServerPreview: c,
            isServerShopPreview: N,
        } = (0, o.cf)([C.A], () => ({
            viewingRoles: null != t ? C.A.getViewingRoles(t) : null,
            backNavigationSection: C.A.getBackNavigationSection(t),
            isFullServerPreview: null != t && C.A.isFullServerPreview(t),
            isServerShopPreview: null != t && C.A.isViewingServerShop(t),
        }));
    if (null == s || null == t) return null;
    let R = (function (e) {
            switch (e) {
                case V.BEX.INTEGRATIONS:
                    return B.intl.string(B.t.k7LGdh);
                case V.BEX.ROLE_SUBSCRIPTIONS:
                    return B.intl.string(B.t.bRqiqa);
                case V.BEX.ONBOARDING:
                    return B.intl.string(B.t.qZpU3S);
                default:
                    return B.intl.string(B.t.MTIXhi);
            }
        })(a),
        O = a === V.BEX.ROLE_SUBSCRIPTIONS ? B.intl.string(B.t.hZUCzd) : B.intl.string(B.t["/djIh7"]),
        b = n === W.VV.GUILD_ONBOARDING,
        D = (e) => {
            let { backToSettings: n } = e;
            null != t &&
                (C.A.isFullServerPreview(t) && (0, A.pX)(V.BVt.CHANNEL(t)),
                p.Ay.shouldShowOnboarding(t) && (f.A.finishOnboarding(t), (0, E.Jg)(t)),
                (0, v.rf)(t),
                n && g.A.open(t, a),
                a === V.BEX.ROLE_SUBSCRIPTIONS && (0, m.Fx)(t));
        };
    return (0, i.jsxs)(d.$T, {
        color: d.Hv.BRAND,
        className: $.lm,
        children: [
            (0, i.jsxs)(z, {
                onClick: () => D({ backToSettings: !0 }),
                className: $.R4,
                children: [
                    (0, i.jsx)(S.A, { width: 16, height: 16, direction: S.A.Directions.LEFT, className: $.lJ }),
                    R,
                ],
            }),
            b && c
                ? (0, i.jsx)("div", {
                      className: $.XI,
                      children: (0, i.jsx)("div", { className: $.ut, children: B.intl.string(B.t.PxbiAf) }),
                  })
                : (0, i.jsxs)("div", {
                      className: $.XI,
                      children: [
                          (0, i.jsx)("div", {
                              className: $.ut,
                              children: c
                                  ? B.intl.formatToPlainString(B.t["0PHahI"], { numRoles: Object.keys(s).length })
                                  : B.intl.formatToPlainString(B.t.vMlK8t, { numRoles: Object.keys(s).length }),
                          }),
                          (0, i.jsx)(_.Y, {
                              targetElementRef: e,
                              position: "bottom",
                              renderPopout: () => (0, i.jsx)(j, { guildId: t }),
                              children: (t) => {
                                  let { onClick: n } = t;
                                  return (0, i.jsxs)(z, {
                                      onClick: n,
                                      buttonRef: e,
                                      children: [
                                          O,
                                          (0, i.jsx)(y.A, {
                                              width: 16,
                                              height: 16,
                                              direction: y.A.Directions.DOWN,
                                              className: $.k5,
                                          }),
                                      ],
                                  });
                              },
                          }),
                          c &&
                              (0, i.jsx)(u.m, {
                                  asContainer: !0,
                                  text: B.intl.string(B.t.mW4DUE),
                                  children: (0, i.jsx)(h.E, { size: "xs", color: l.A.unsafe_rawColors.YELLOW_300.css }),
                              }),
                          N &&
                              (0, i.jsx)(u.m, {
                                  asContainer: !0,
                                  text: B.intl.formatToPlainString(B.t.eummvd, { maxTiers: K.f7, maxProducts: 50 }),
                                  children: (0, i.jsx)(h.E, { size: "xs", color: l.A.unsafe_rawColors.YELLOW_300.css }),
                              }),
                      ],
                  }),
            c || a === V.BEX.ROLE_SUBSCRIPTIONS
                ? null
                : (0, i.jsx)(q, { onClick: () => D({ backToSettings: !1 }), className: $.ZY }),
        ],
    });
}
function Z(e) {
    let { guildId: t } = e;
    return (0, o.bG)([C.A], () => C.A.isViewingRoles(t))
        ? (0, i.jsx)("div", {
              className: a()($.xd, { [$.KF]: (0, N.isWindows)(), [$.Xz]: (0, N.isMac)(), [$.pS]: (0, N.isLinux)() }),
              children: (0, i.jsx)(X, {}),
          })
        : null;
}
