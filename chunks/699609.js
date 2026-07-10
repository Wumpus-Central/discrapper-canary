"use strict";
n.d(t, { w: () => X, A: () => Z });
var i = n(627968),
    r = n(64700),
    a = n(503698),
    s = n.n(a),
    l = n(17928),
    o = n(661531),
    d = n(990078),
    c = n(862482),
    u = n(417098),
    _ = n(922016),
    E = n(695366),
    A = n(669953),
    h = n(713125),
    I = n(608401),
    f = n(739455),
    p = n(468689),
    T = n(976860),
    m = n(309010),
    g = n(967198),
    S = n(792831),
    N = n(147925),
    C = n(723702),
    R = n(529942),
    O = n(164956);
n(321073);
var L = n(136722),
    D = n(44482),
    y = n(834730),
    v = n(732771),
    b = n(260509),
    M = n(34457),
    P = n(696451),
    U = n(317525),
    w = n(71393),
    G = n(287809),
    x = n(488926),
    k = n(935208),
    F = n(209700),
    V = n(652215),
    B = n(375708),
    H = n(239326);
function j(e) {
    let { guildId: t } = e,
        n = (0, l.bG)([G.default], () => G.default.getCurrentUser()),
        a = (0, l.bG)([w.A], () => w.A.getGuild(t)),
        s = (0, l.bG)([U.A], () => U.A.getRolesSnapshot(t)),
        o = (0, l.bG)([U.A], () => U.A.getSortedRoles(t)),
        { impersonateType: d, viewingRoles: c } = (0, l.cf)([O.A], () => ({
            impersonateType: O.A.getImpersonateType(t),
            viewingRoles: O.A.getViewingRoles(t),
        })),
        u = d === F._.SERVER_SHOP,
        _ = (0, l.bG)([P.Ay], () => (null != n ? P.Ay.getTrueMember(t, n.id) : null)),
        E = null != a ? s[(0, b.af)(a)] : null,
        [A, h] = r.useState(() => {
            let e = null == c ? [] : k.default.keys(c);
            return null != E && e.push(E.id), e;
        }),
        I = r.useRef(a);
    r.useEffect(() => {
        let e = {},
            t = I.current;
        if (null != t && null != d) {
            for (let t of A) {
                let n = s[t];
                null != n && (e[t] = n);
            }
            (0, R.IA)(t.id, { type: d, roles: e });
        }
    }, [A, d, s]);
    let f = null != a && null != n && null != _ ? o.find((e) => _.roles.includes(e.id)) : void 0,
        p = r.useMemo(
            () =>
                null != a && null != n
                    ? o
                          .filter((e) => !(0, M.Oy)(e))
                          .filter((e) => !u || e.tags?.subscription_listing_id != null)
                          .filter((e) => f?.id === e.id || x.wO(a, n.id, f, e))
                    : [],
            [a, n, u, f, o],
        ),
        T = r.useMemo(() => {
            let e = Array.from(p).map((e) => ({
                leading: W(e),
                value: e.id,
                label: e.name,
                id: e.id.toString(),
                disabled: !1,
            }));
            return (
                null != a &&
                    null != E &&
                    e.push({ leading: W(E), value: E.id, label: E.name, id: E.id.toString(), disabled: !0 }),
                e
            );
        }, [p, a, E]);
    if (null == n || null == a || null == _) return null;
    let m = {};
    return (_.roles.forEach((e) => {
        let t = s[e];
        null != t && (m[t.id] = t);
    }),
    L.zy(x.aH({ forceRoles: m, context: a }), L.kg(V.xBc.MANAGE_GUILD, V.xBc.MANAGE_ROLES)) || (0, b.bM)(a, n))
        ? (0, i.jsx)("div", {
              className: H.kL,
              children: (0, i.jsxs)(v.iS, {
                  selectionMode: "multiple",
                  options: T,
                  value: A,
                  onSelectionChange: (e) => {
                      h(e);
                  },
                  children: [
                      (0, i.jsx)(v.a3, { hideTags: !0, autoFocus: !0, placeholder: B.intl.string(B.t.Sojqsr) }),
                      (0, i.jsx)(v.X2, { renderListItem: (e) => (0, i.jsx)(D.c, { ...e }) }),
                  ],
              }),
          })
        : (0, i.jsx)(y.E, { variant: "text-md/medium", children: B.intl.string(B.t.MNSTbY) });
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
    $ = n(875220);
function z(e) {
    let { className: t, onClick: n, children: r, buttonRef: a } = e;
    return (0, i.jsx)(c.$n, {
        buttonRef: a,
        className: s()($.x6, t),
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
        t = (0, l.bG)([g.A], () => g.A.getGuildId()),
        n = (0, l.bG)([m.A], () => m.A.getChannelId(t)),
        {
            viewingRoles: a,
            backNavigationSection: s,
            isFullServerPreview: c,
            isServerShopPreview: C,
        } = (0, l.cf)([O.A], () => ({
            viewingRoles: null != t ? O.A.getViewingRoles(t) : null,
            backNavigationSection: O.A.getBackNavigationSection(t),
            isFullServerPreview: null != t && O.A.isFullServerPreview(t),
            isServerShopPreview: null != t && O.A.isViewingServerShop(t),
        }));
    if (null == a || null == t) return null;
    let L = (function (e) {
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
        })(s),
        D = s === V.BEX.ROLE_SUBSCRIPTIONS ? B.intl.string(B.t.hZUCzd) : B.intl.string(B.t["/djIh7"]),
        y = n === Y.VV.GUILD_ONBOARDING,
        v = (e) => {
            let { backToSettings: n } = e;
            null != t &&
                (O.A.isFullServerPreview(t) && (0, T.pX)(V.BVt.CHANNEL(t)),
                h.Ay.shouldShowOnboarding(t) && (A.A.finishOnboarding(t), (0, I.Jg)(t)),
                (0, R.rf)(t),
                n && p.A.open(t, s),
                s === V.BEX.ROLE_SUBSCRIPTIONS && (0, f.Fx)(t));
        };
    return (0, i.jsxs)(u.$T, {
        color: u.Hv.BRAND,
        className: $.lm,
        children: [
            (0, i.jsxs)(z, {
                onClick: () => v({ backToSettings: !0 }),
                className: $.R4,
                children: [
                    (0, i.jsx)(S.A, { width: 16, height: 16, direction: S.A.Directions.LEFT, className: $.lJ }),
                    L,
                ],
            }),
            y && c
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
                                  ? B.intl.formatToPlainString(B.t["0PHahI"], { numRoles: Object.keys(a).length })
                                  : B.intl.formatToPlainString(B.t.vMlK8t, { numRoles: Object.keys(a).length }),
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
                                          D,
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
                              (0, i.jsx)(d.m, {
                                  asContainer: !0,
                                  text: B.intl.string(B.t.mW4DUE),
                                  children: (0, i.jsx)(E.E, { size: "xs", color: o.A.unsafe_rawColors.YELLOW_300.css }),
                              }),
                          C &&
                              (0, i.jsx)(d.m, {
                                  asContainer: !0,
                                  text: B.intl.formatToPlainString(B.t.eummvd, { maxTiers: K.f7, maxProducts: 50 }),
                                  children: (0, i.jsx)(E.E, { size: "xs", color: o.A.unsafe_rawColors.YELLOW_300.css }),
                              }),
                      ],
                  }),
            c || s === V.BEX.ROLE_SUBSCRIPTIONS
                ? null
                : (0, i.jsx)(q, { onClick: () => v({ backToSettings: !1 }), className: $.ZY }),
        ],
    });
}
function X(e) {
    let { guildId: t } = e;
    return (0, l.bG)([O.A], () => O.A.isViewingRoles(t))
        ? (0, i.jsx)("div", {
              className: s()($.xd, { [$.KF]: (0, C.isWindows)(), [$.Xz]: (0, C.isMac)(), [$.pS]: (0, C.isLinux)() }),
              children: (0, i.jsx)(Z, {}),
          })
        : null;
}
