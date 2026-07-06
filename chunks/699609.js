"use strict";
n.d(t, { w: () => X, A: () => Z });
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
    E = n(713125),
    p = n(608401),
    m = n(739455),
    g = n(468689),
    A = n(976860),
    I = n(309010),
    T = n(967198),
    S = n(792831),
    N = n(147925),
    C = n(723702),
    y = n(529942),
    O = n(164956);
n(321073);
var R = n(136722),
    v = n(44482),
    b = n(834730),
    L = n(732771),
    D = n(260509),
    w = n(34457),
    P = n(696451),
    M = n(317525),
    x = n(71393),
    U = n(287809),
    k = n(488926),
    G = n(935208),
    V = n(209700),
    F = n(652215),
    B = n(375708),
    H = n(59742);
function j(e) {
    let { guildId: t } = e,
        n = (0, o.bG)([U.default], () => U.default.getCurrentUser()),
        s = (0, o.bG)([x.A], () => x.A.getGuild(t)),
        a = (0, o.bG)([M.A], () => M.A.getRolesSnapshot(t)),
        l = (0, o.bG)([M.A], () => M.A.getSortedRoles(t)),
        { impersonateType: u, viewingRoles: c } = (0, o.cf)([O.A], () => ({
            impersonateType: O.A.getImpersonateType(t),
            viewingRoles: O.A.getViewingRoles(t),
        })),
        d = u === V._.SERVER_SHOP,
        _ = (0, o.bG)([P.Ay], () => (null != n ? P.Ay.getTrueMember(t, n.id) : null)),
        h = null != s ? a[(0, D.af)(s)] : null,
        [f, E] = r.useState(() => {
            let e = null == c ? [] : G.default.keys(c);
            return null != h && e.push(h.id), e;
        }),
        p = r.useRef(s);
    r.useEffect(() => {
        let e = {},
            t = p.current;
        if (null != t && null != u) {
            for (let t of f) {
                let n = a[t];
                null != n && (e[t] = n);
            }
            (0, y.IA)(t.id, { type: u, roles: e });
        }
    }, [f, u, a]);
    let m = null != s && null != n && null != _ ? l.find((e) => _.roles.includes(e.id)) : void 0,
        g = r.useMemo(
            () =>
                null != s && null != n
                    ? l
                          .filter((e) => !(0, w.Oy)(e))
                          .filter((e) => !d || e.tags?.subscription_listing_id != null)
                          .filter((e) => m?.id === e.id || k.wO(s, n.id, m, e))
                    : [],
            [s, n, d, m, l],
        ),
        A = r.useMemo(() => {
            let e = Array.from(g).map((e) => ({
                leading: W(e),
                value: e.id,
                label: e.name,
                id: e.id.toString(),
                disabled: !1,
            }));
            return (
                null != s &&
                    null != h &&
                    e.push({ leading: W(h), value: h.id, label: h.name, id: h.id.toString(), disabled: !0 }),
                e
            );
        }, [g, s, h]);
    if (null == n || null == s || null == _) return null;
    let I = {};
    return (_.roles.forEach((e) => {
        let t = a[e];
        null != t && (I[t.id] = t);
    }),
    R.zy(k.aH({ forceRoles: I, context: s }), R.kg(F.xBc.MANAGE_GUILD, F.xBc.MANAGE_ROLES)) || (0, D.bM)(s, n))
        ? (0, i.jsx)("div", {
              className: H.kL,
              children: (0, i.jsxs)(L.iS, {
                  selectionMode: "multiple",
                  options: A,
                  value: f,
                  onSelectionChange: (e) => {
                      E(e);
                  },
                  children: [
                      (0, i.jsx)(L.a3, { hideTags: !0, autoFocus: !0, placeholder: B.intl.string(B.t.Sojqsr) }),
                      (0, i.jsx)(L.X2, { renderListItem: (e) => (0, i.jsx)(v.c, { ...e }) }),
                  ],
              }),
          })
        : (0, i.jsx)(b.E, { variant: "text-md/medium", children: B.intl.string(B.t.MNSTbY) });
}
function W(e) {
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
var Y = n(746080);
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
function Z() {
    let e = r.useRef(null),
        t = (0, o.bG)([T.A], () => T.A.getGuildId()),
        n = (0, o.bG)([I.A], () => I.A.getChannelId(t)),
        {
            viewingRoles: s,
            backNavigationSection: a,
            isFullServerPreview: c,
            isServerShopPreview: C,
        } = (0, o.cf)([O.A], () => ({
            viewingRoles: null != t ? O.A.getViewingRoles(t) : null,
            backNavigationSection: O.A.getBackNavigationSection(t),
            isFullServerPreview: null != t && O.A.isFullServerPreview(t),
            isServerShopPreview: null != t && O.A.isViewingServerShop(t),
        }));
    if (null == s || null == t) return null;
    let R = (function (e) {
            switch (e) {
                case F.BEX.INTEGRATIONS:
                    return B.intl.string(B.t.k7LGdh);
                case F.BEX.ROLE_SUBSCRIPTIONS:
                    return B.intl.string(B.t.bRqiqa);
                case F.BEX.ONBOARDING:
                    return B.intl.string(B.t.qZpU3S);
                default:
                    return B.intl.string(B.t.MTIXhi);
            }
        })(a),
        v = a === F.BEX.ROLE_SUBSCRIPTIONS ? B.intl.string(B.t.hZUCzd) : B.intl.string(B.t["/djIh7"]),
        b = n === Y.VV.GUILD_ONBOARDING,
        L = (e) => {
            let { backToSettings: n } = e;
            null != t &&
                (O.A.isFullServerPreview(t) && (0, A.pX)(F.BVt.CHANNEL(t)),
                E.Ay.shouldShowOnboarding(t) && (f.A.finishOnboarding(t), (0, p.Jg)(t)),
                (0, y.rf)(t),
                n && g.A.open(t, a),
                a === F.BEX.ROLE_SUBSCRIPTIONS && (0, m.Fx)(t));
        };
    return (0, i.jsxs)(d.$T, {
        color: d.Hv.BRAND,
        className: $.lm,
        children: [
            (0, i.jsxs)(z, {
                onClick: () => L({ backToSettings: !0 }),
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
                                          v,
                                          (0, i.jsx)(N.A, {
                                              width: 16,
                                              height: 16,
                                              direction: N.A.Directions.DOWN,
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
                          C &&
                              (0, i.jsx)(u.m, {
                                  asContainer: !0,
                                  text: B.intl.formatToPlainString(B.t.eummvd, { maxTiers: K.f7, maxProducts: 50 }),
                                  children: (0, i.jsx)(h.E, { size: "xs", color: l.A.unsafe_rawColors.YELLOW_300.css }),
                              }),
                      ],
                  }),
            c || a === F.BEX.ROLE_SUBSCRIPTIONS
                ? null
                : (0, i.jsx)(q, { onClick: () => L({ backToSettings: !1 }), className: $.ZY }),
        ],
    });
}
function X(e) {
    let { guildId: t } = e;
    return (0, o.bG)([O.A], () => O.A.isViewingRoles(t))
        ? (0, i.jsx)("div", {
              className: a()($.xd, { [$.KF]: (0, C.isWindows)(), [$.Xz]: (0, C.isMac)(), [$.pS]: (0, C.isLinux)() }),
              children: (0, i.jsx)(Z, {}),
          })
        : null;
}
