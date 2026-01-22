n.d(t, { default: () => I });
var i = n(627968),
    r = n(284009),
    s = n.n(r),
    l = n(311907),
    a = n(397927),
    o = n(442433),
    c = n(793574),
    u = n(688810),
    d = n(359047),
    g = n(769591),
    p = n(36942),
    b = n(260509),
    A = n(961350),
    h = n(287809),
    O = n(346247),
    y = n(810263),
    f = n(911612),
    E = n(664967),
    S = n(834265),
    _ = n(507238),
    j = n(881136),
    N = n(813597),
    v = n(21605),
    L = n(684509),
    m = n(153594),
    G = n(531335),
    x = n(652215),
    D = n(985018);
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
function P(e, t) {
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
    let { guild: t, onSelect: r, hideSettings: c } = e,
        u = t.id,
        w = (0, l.bG)([h.default], () => {
            let e = h.default.getCurrentUser();
            return s()(null != e, "GuildContextMenu: user cannot be undefined"), (0, b.bM)(t, e);
        }, [t]),
        I = (0, G.A)({
            guild: t,
            source: x.PE1.GUILD_CONTEXT_MENU,
            channel: null,
        }),
        T = (0, m.A)(u),
        R = (0, _.A)(t),
        k = (0, j.A)(t),
        U = (0, L.A)(t),
        C = (0, O.A)({
            guildId: t.id,
            userId: A.default.getId(),
            analyticsLocation: {
                page: x.liQ.GUILD_CHANNEL,
                section: x.JJy.CHAT_USERNAME,
                object: x.ZSU.CONTEXT_MENU_ITEM,
            },
        }),
        V = (0, f.A)(t),
        B = (0, d.A)(t.id),
        X = (0, y.A)(t),
        Y = (0, S.A)(t, { section: x.JJy.GUILD_LIST }),
        H = (0, p.A)(t.id),
        F = (0, N.A)(t.id),
        W = (0, E.A)(t),
        J = (0, g.os)("GuildContextMenu"),
        Q = (0, v.c)(t);
    function Z() {
        (0, a.mMO)(async () => {
            let { default: e } = await n.e("53485").then(n.bind(n, 20508));
            return (n) => (0, i.jsx)(e, P(M({}, n), { guild: t }));
        });
    }
    return t.features.has(x.GuildFeatures.HUB)
        ? (0, i.jsxs)(a.W1t, {
              navId: "guild-context",
              onClose: o.Z_,
              "aria-label": D.intl.string(D.t.HpQykc),
              onSelect: r,
              children: [
                  (0, i.jsxs)(a.rXV, {
                      children: [
                          I,
                          (0, i.jsx)(a.Drp, {
                              id: "privacy",
                              label: D.intl.string(D.t.IlFwwR),
                              action: () =>
                                  (0, a.mMO)(async () => {
                                      let { default: e } = await n.e("62026").then(n.bind(n, 585265));
                                      return (n) => (0, i.jsx)(e, P(M({}, n), { guild: t }));
                                  }),
                          }),
                          C,
                      ],
                  }),
                  w
                      ? null
                      : (0, i.jsx)(a.rXV, {
                            children: (0, i.jsx)(a.Drp, {
                                id: "leave-guild",
                                label: D.intl.string(D.t.Dv8gFT),
                                action: Z,
                                color: "danger",
                            }),
                        }),
                  (0, i.jsx)(a.rXV, { children: X }),
              ],
          })
        : (0, i.jsxs)(a.W1t, {
              navId: "guild-context",
              onClose: o.Z_,
              "aria-label": D.intl.string(D.t.HpQykc),
              onSelect: r,
              children: [
                  (0, i.jsx)(a.rXV, { children: Y }),
                  (0, i.jsx)(a.rXV, { children: I }),
                  (0, i.jsxs)(a.rXV, {
                      children: [R, J || __OVERLAY__ ? null : k, J && !__OVERLAY__ ? F : null, T, H],
                  }),
                  (0, i.jsxs)(a.rXV, {
                      children: [
                          c ? null : U,
                          __OVERLAY__
                              ? null
                              : (0, i.jsx)(a.Drp, {
                                    id: "privacy",
                                    label: D.intl.string(D.t.BayiAo),
                                    action: () =>
                                        (0, a.mMO)(async () => {
                                            let { default: e } = await n.e("62026").then(n.bind(n, 585265));
                                            return (n) => (0, i.jsx)(e, P(M({}, n), { guild: t }));
                                        }),
                                }),
                          C,
                      ],
                  }),
                  (0, i.jsxs)(a.rXV, {
                      children: [V, B],
                  }),
                  (0, i.jsxs)(a.rXV, {
                      children: [
                          W,
                          !w &&
                              (0, i.jsx)(a.Drp, {
                                  id: "leave-guild",
                                  label: D.intl.string(D.t.J2TBi3),
                                  action: Z,
                                  color: "danger",
                              }),
                      ],
                  }),
                  (0, i.jsx)(a.rXV, { children: Q }),
                  (0, i.jsx)(a.rXV, { children: X }),
              ],
          });
}
function I(e) {
    let { analyticsLocations: t } = (0, u.Ay)(c.A.CONTEXT_MENU);
    return (0, i.jsx)(u.f5, {
        value: t,
        children: (0, i.jsx)(w, M({}, e)),
    });
}
