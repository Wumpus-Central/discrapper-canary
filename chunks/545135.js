n.d(t, { default: () => I });
var i = n(951288);
n(647438);
var r = n(512722),
    s = n.n(r),
    l = n(442837),
    o = n(481060),
    c = n(239091),
    a = n(100527),
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
    Z = n(930538),
    A = n(422525),
    m = n(522762),
    x = n(466330),
    G = n(981631),
    M = n(388032);
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
    let { guild: t, onSelect: r, hideSettings: a } = e,
        u = t.id,
        w = E.ZP.getDefaultChannel(u),
        { entrypoints: I } = (0, b._k)({ location: "guild_context_menu" }),
        U = (0, l.e7)([O.default], () => {
            let e = O.default.getCurrentUser();
            return s()(null != e, "GuildContextMenu: user cannot be undefined"), (0, h.eM)(t, e);
        }, [t]),
        T = (0, x.Z)({
            guild: t,
            source: G.t4x.GUILD_CONTEXT_MENU,
            channel: I ? null : w,
        }),
        R = (0, m.Z)(u),
        C = (0, P.Z)(t),
        B = (0, L.Z)(t),
        Q = (0, A.Z)(t),
        Y = (0, y.Z)({
            guildId: t.id,
            userId: f.default.getId(),
            analyticsLocation: {
                page: G.ZY5.GUILD_CHANNEL,
                section: G.jXE.CHAT_USERNAME,
                object: G.qAy.CONTEXT_MENU_ITEM,
            },
        }),
        H = (0, j.Z)(t),
        V = (0, g.Z)(t.id),
        q = (0, d.Z)({
            id: t.id,
            label: M.intl.string(M.t["94lLDw"]),
        }),
        F = (0, N.Z)(t, { section: G.jXE.GUILD_LIST }),
        W = (0, S.Z)(t.id),
        X = (0, v.Z)(t.id),
        K = (0, _.Z)(t),
        J = (0, p.Mn)("GuildContextMenu"),
        z = (0, Z.p)(t);
    function $() {
        (0, o.ZDy)(async () => {
            let { default: e } = await n.e("53961").then(n.bind(n, 402979));
            return (n) => (0, i.jsx)(e, D(k({}, n), { guild: t }));
        });
    }
    return t.features.has(G.oNc.HUB)
        ? (0, i.jsxs)(o.v2r, {
              navId: "guild-context",
              onClose: c.Zy,
              "aria-label": M.intl.string(M.t.HpQykZ),
              onSelect: r,
              children: [
                  (0, i.jsxs)(o.kSQ, {
                      children: [
                          T,
                          (0, i.jsx)(o.sNh, {
                              id: "privacy",
                              label: M.intl.string(M.t.IlFwwc),
                              action: () =>
                                  (0, o.ZDy)(async () => {
                                      let { default: e } = await n.e("59500").then(n.bind(n, 241420));
                                      return (n) => (0, i.jsx)(e, D(k({}, n), { guild: t }));
                                  }),
                          }),
                          Y,
                      ],
                  }),
                  U
                      ? null
                      : (0, i.jsx)(o.kSQ, {
                            children: (0, i.jsx)(o.sNh, {
                                id: "leave-guild",
                                label: M.intl.string(M.t.Dv8gFR),
                                action: $,
                                color: "danger",
                            }),
                        }),
                  (0, i.jsx)(o.kSQ, { children: q }),
              ],
          })
        : (0, i.jsxs)(o.v2r, {
              navId: "guild-context",
              onClose: c.Zy,
              "aria-label": M.intl.string(M.t.HpQykZ),
              onSelect: r,
              children: [
                  (0, i.jsx)(o.kSQ, { children: F }),
                  (0, i.jsx)(o.kSQ, { children: T }),
                  (0, i.jsxs)(o.kSQ, {
                      children: [C, J || __OVERLAY__ ? null : B, J && !__OVERLAY__ ? X : null, R, W],
                  }),
                  (0, i.jsxs)(o.kSQ, {
                      children: [
                          a ? null : Q,
                          __OVERLAY__
                              ? null
                              : (0, i.jsx)(o.sNh, {
                                    id: "privacy",
                                    label: M.intl.string(M.t.BayiAg),
                                    action: () =>
                                        (0, o.ZDy)(async () => {
                                            let { default: e } = await n.e("59500").then(n.bind(n, 241420));
                                            return (n) => (0, i.jsx)(e, D(k({}, n), { guild: t }));
                                        }),
                                }),
                          Y,
                      ],
                  }),
                  (0, i.jsxs)(o.kSQ, {
                      children: [H, V],
                  }),
                  (0, i.jsxs)(o.kSQ, {
                      children: [
                          K,
                          !U &&
                              (0, i.jsx)(o.sNh, {
                                  id: "leave-guild",
                                  label: M.intl.string(M.t.J2TBi4),
                                  action: $,
                                  color: "danger",
                              }),
                      ],
                  }),
                  (0, i.jsx)(o.kSQ, { children: z }),
                  (0, i.jsx)(o.kSQ, { children: q }),
              ],
          });
}
function I(e) {
    let { analyticsLocations: t } = (0, u.ZP)(a.Z.CONTEXT_MENU);
    return (0, i.jsx)(u.Gt, {
        value: t,
        children: (0, i.jsx)(w, k({}, e)),
    });
}
