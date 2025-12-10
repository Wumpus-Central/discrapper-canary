n.d(t, { default: () => D });
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
    b = n(423589),
    p = n(837949),
    S = n(601964),
    h = n(314897),
    f = n(594174),
    E = n(976192),
    O = n(904483),
    y = n(429824),
    j = n(919815),
    _ = n(858822),
    N = n(993356),
    P = n(58338),
    L = n(930538),
    v = n(422525),
    A = n(522762),
    Z = n(466330),
    m = n(981631),
    x = n(388032);
function M(e) {
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
function G(e, t) {
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
function k(e) {
    let { guild: t, onSelect: r, hideSettings: o } = e,
        u = t.id,
        k = (0, l.e7)([f.default], () => {
            let e = f.default.getCurrentUser();
            return s()(null != e, "GuildContextMenu: user cannot be undefined"), (0, S.eM)(t, e);
        }, [t]),
        D = (0, Z.Z)({
            guild: t,
            source: m.t4x.GUILD_CONTEXT_MENU,
            channel: null,
        }),
        w = (0, A.Z)(u),
        I = (0, _.Z)(t),
        R = (0, N.Z)(t),
        T = (0, v.Z)(t),
        U = (0, E.Z)({
            guildId: t.id,
            userId: h.default.getId(),
            analyticsLocation: {
                page: m.ZY5.GUILD_CHANNEL,
                section: m.jXE.CHAT_USERNAME,
                object: m.qAy.CONTEXT_MENU_ITEM,
            },
        }),
        B = (0, O.Z)(t),
        C = (0, g.Z)(t.id),
        Q = (0, d.Z)({
            id: t.id,
            label: x.intl.string(x.t["94lLD7"]),
        }),
        Y = (0, j.Z)(t, { section: m.jXE.GUILD_LIST }),
        H = (0, p.Z)(t.id),
        V = (0, P.Z)(t.id),
        F = (0, y.Z)(t),
        q = (0, b.Mn)("GuildContextMenu"),
        W = (0, L.p)(t);
    function X() {
        (0, a.ZDy)(async () => {
            let { default: e } = await n.e("53961").then(n.bind(n, 402979));
            return (n) => (0, i.jsx)(e, G(M({}, n), { guild: t }));
        });
    }
    return t.features.has(m.GuildFeatures.HUB)
        ? (0, i.jsxs)(a.v2r, {
              navId: "guild-context",
              onClose: c.Zy,
              "aria-label": x.intl.string(x.t.HpQykc),
              onSelect: r,
              children: [
                  (0, i.jsxs)(a.kSQ, {
                      children: [
                          D,
                          (0, i.jsx)(a.sNh, {
                              id: "privacy",
                              label: x.intl.string(x.t.IlFwwR),
                              action: () =>
                                  (0, a.ZDy)(async () => {
                                      let { default: e } = await n.e("86722").then(n.bind(n, 264333));
                                      return (n) => (0, i.jsx)(e, G(M({}, n), { guild: t }));
                                  }),
                          }),
                          U,
                      ],
                  }),
                  k
                      ? null
                      : (0, i.jsx)(a.kSQ, {
                            children: (0, i.jsx)(a.sNh, {
                                id: "leave-guild",
                                label: x.intl.string(x.t.Dv8gFT),
                                action: X,
                                color: "danger",
                            }),
                        }),
                  (0, i.jsx)(a.kSQ, { children: Q }),
              ],
          })
        : (0, i.jsxs)(a.v2r, {
              navId: "guild-context",
              onClose: c.Zy,
              "aria-label": x.intl.string(x.t.HpQykc),
              onSelect: r,
              children: [
                  (0, i.jsx)(a.kSQ, { children: Y }),
                  (0, i.jsx)(a.kSQ, { children: D }),
                  (0, i.jsxs)(a.kSQ, {
                      children: [I, q || __OVERLAY__ ? null : R, q && !__OVERLAY__ ? V : null, w, H],
                  }),
                  (0, i.jsxs)(a.kSQ, {
                      children: [
                          o ? null : T,
                          __OVERLAY__
                              ? null
                              : (0, i.jsx)(a.sNh, {
                                    id: "privacy",
                                    label: x.intl.string(x.t.BayiAo),
                                    action: () =>
                                        (0, a.ZDy)(async () => {
                                            let { default: e } = await n.e("86722").then(n.bind(n, 264333));
                                            return (n) => (0, i.jsx)(e, G(M({}, n), { guild: t }));
                                        }),
                                }),
                          U,
                      ],
                  }),
                  (0, i.jsxs)(a.kSQ, {
                      children: [B, C],
                  }),
                  (0, i.jsxs)(a.kSQ, {
                      children: [
                          F,
                          !k &&
                              (0, i.jsx)(a.sNh, {
                                  id: "leave-guild",
                                  label: x.intl.string(x.t.J2TBi3),
                                  action: X,
                                  color: "danger",
                              }),
                      ],
                  }),
                  (0, i.jsx)(a.kSQ, { children: W }),
                  (0, i.jsx)(a.kSQ, { children: Q }),
              ],
          });
}
function D(e) {
    let { analyticsLocations: t } = (0, u.ZP)(o.Z.CONTEXT_MENU);
    return (0, i.jsx)(u.Gt, {
        value: t,
        children: (0, i.jsx)(k, M({}, e)),
    });
}
