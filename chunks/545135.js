n.d(t, { default: () => I });
var i = n(54381);
n(473749);
var r = n(512722),
    s = n.n(r),
    l = n(442837),
    a = n(481060),
    c = n(239091),
    o = n(100527),
    u = n(906732),
    d = n(299206),
    g = n(894059),
    b = n(340541),
    p = n(423589),
    S = n(837949),
    h = n(601964),
    f = n(314897),
    E = n(984933),
    O = n(594174),
    y = n(976192),
    j = n(904483),
    _ = n(429824),
    N = n(919815),
    P = n(858822),
    L = n(993356),
    v = n(58338),
    A = n(930538),
    Z = n(422525),
    m = n(522762),
    x = n(466330),
    M = n(981631),
    G = n(388032);
function k(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            i = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (i = i.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            i.forEach(function (t) {
                var i;
                (i = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: i,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0,
                          })
                        : (e[t] = i);
            });
    }
    return e;
}
function D(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : (function (e, t) {
                  var n = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var i = Object.getOwnPropertySymbols(e);
                      n.push.apply(n, i);
                  }
                  return n;
              })(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function w(e) {
    let { guild: t, onSelect: r, hideSettings: o } = e,
        u = t.id,
        w = E.ZP.getDefaultChannel(u),
        I = (0, b._k)({ location: "guild_context_menu" }),
        R = (0, l.e7)([O.default], () => {
            let e = O.default.getCurrentUser();
            return s()(null != e, "GuildContextMenu: user cannot be undefined"), (0, h.eM)(t, e);
        }, [t]),
        T = (0, x.Z)({
            guild: t,
            source: M.t4x.GUILD_CONTEXT_MENU,
            channel: I.isGuildEntrypointEnabled ? null : w,
        }),
        U = (0, m.Z)(u),
        C = (0, P.Z)(t),
        B = (0, L.Z)(t),
        Q = (0, Z.Z)(t),
        Y = (0, y.Z)({
            guildId: t.id,
            userId: f.default.getId(),
            analyticsLocation: {
                page: M.ZY5.GUILD_CHANNEL,
                section: M.jXE.CHAT_USERNAME,
                object: M.qAy.CONTEXT_MENU_ITEM,
            },
        }),
        H = (0, j.Z)(t),
        V = (0, g.Z)(t.id),
        F = (0, d.Z)({
            id: t.id,
            label: G.intl.string(G.t["94lLD7"]),
        }),
        q = (0, N.Z)(t, { section: M.jXE.GUILD_LIST }),
        W = (0, S.Z)(t.id),
        X = (0, v.Z)(t.id),
        J = (0, _.Z)(t),
        z = (0, p.Mn)("GuildContextMenu"),
        K = (0, A.p)(t);
    function $() {
        (0, a.ZDy)(async () => {
            let { default: e } = await n.e("53961").then(n.bind(n, 402979));
            return (n) => (0, i.jsx)(e, D(k({}, n), { guild: t }));
        });
    }
    return t.features.has(M.GuildFeatures.HUB)
        ? (0, i.jsxs)(a.v2r, {
              navId: "guild-context",
              onClose: c.Zy,
              "aria-label": G.intl.string(G.t.HpQykc),
              onSelect: r,
              children: [
                  (0, i.jsxs)(a.kSQ, {
                      children: [
                          T,
                          (0, i.jsx)(a.sNh, {
                              id: "privacy",
                              label: G.intl.string(G.t.IlFwwR),
                              action: () =>
                                  (0, a.ZDy)(async () => {
                                      let { default: e } = await n.e("86722").then(n.bind(n, 264333));
                                      return (n) => (0, i.jsx)(e, D(k({}, n), { guild: t }));
                                  }),
                          }),
                          Y,
                      ],
                  }),
                  R
                      ? null
                      : (0, i.jsx)(a.kSQ, {
                            children: (0, i.jsx)(a.sNh, {
                                id: "leave-guild",
                                label: G.intl.string(G.t.Dv8gFT),
                                action: $,
                                color: "danger",
                            }),
                        }),
                  (0, i.jsx)(a.kSQ, { children: F }),
              ],
          })
        : (0, i.jsxs)(a.v2r, {
              navId: "guild-context",
              onClose: c.Zy,
              "aria-label": G.intl.string(G.t.HpQykc),
              onSelect: r,
              children: [
                  (0, i.jsx)(a.kSQ, { children: q }),
                  (0, i.jsx)(a.kSQ, { children: T }),
                  (0, i.jsxs)(a.kSQ, {
                      children: [C, z || __OVERLAY__ ? null : B, z && !__OVERLAY__ ? X : null, U, W],
                  }),
                  (0, i.jsxs)(a.kSQ, {
                      children: [
                          o ? null : Q,
                          __OVERLAY__
                              ? null
                              : (0, i.jsx)(a.sNh, {
                                    id: "privacy",
                                    label: G.intl.string(G.t.BayiAo),
                                    action: () =>
                                        (0, a.ZDy)(async () => {
                                            let { default: e } = await n.e("86722").then(n.bind(n, 264333));
                                            return (n) => (0, i.jsx)(e, D(k({}, n), { guild: t }));
                                        }),
                                }),
                          Y,
                      ],
                  }),
                  (0, i.jsxs)(a.kSQ, {
                      children: [H, V],
                  }),
                  (0, i.jsxs)(a.kSQ, {
                      children: [
                          J,
                          !R &&
                              (0, i.jsx)(a.sNh, {
                                  id: "leave-guild",
                                  label: G.intl.string(G.t.J2TBi3),
                                  action: $,
                                  color: "danger",
                              }),
                      ],
                  }),
                  (0, i.jsx)(a.kSQ, { children: K }),
                  (0, i.jsx)(a.kSQ, { children: F }),
              ],
          });
}
function I(e) {
    let { analyticsLocations: t } = (0, u.ZP)(o.Z.CONTEXT_MENU);
    return (0, i.jsx)(u.Gt, {
        value: t,
        children: (0, i.jsx)(w, k({}, e)),
    });
}
