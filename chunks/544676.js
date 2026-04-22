i.d(t, { default: () => R });
var n = i(627968),
    s = i(284009),
    l = i.n(s),
    a = i(311907),
    r = i(192308),
    d = i(861672),
    o = i(477782),
    c = i(442433),
    u = i(793574),
    g = i(688810),
    A = i(359047),
    E = i(769591),
    h = i(36942),
    _ = i(260509),
    S = i(961350),
    p = i(287809),
    N = i(346247),
    b = i(810263),
    L = i(911612),
    f = i(664967),
    y = i(834265),
    G = i(507238),
    M = i(881136),
    x = i(813597),
    j = i(21605),
    m = i(684509),
    D = i(153594),
    v = i(531335),
    O = i(652215),
    I = i(985018);
function T(e) {
    let { guild: t, onSelect: s, hideSettings: u } = e,
        g = t.id,
        T = (0, a.bG)([p.default], () => {
            let e = p.default.getCurrentUser();
            return l()(null != e, "GuildContextMenu: user cannot be undefined"), (0, _.bM)(t, e);
        }, [t]),
        R = (0, v.A)({ guild: t, source: O.PE1.GUILD_CONTEXT_MENU, channel: null }),
        U = (0, D.A)(g),
        P = (0, G.A)(t),
        k = (0, M.A)(t),
        B = (0, m.A)(t),
        C = (0, N.A)({
            guildId: t.id,
            userId: S.default.getId(),
            analyticsLocation: {
                page: O.liQ.GUILD_CHANNEL,
                section: O.JJy.CHAT_USERNAME,
                object: O.ZSU.CONTEXT_MENU_ITEM,
            },
        }),
        X = (0, L.A)(t),
        Y = (0, A.A)(t.id),
        w = (0, b.A)(t),
        H = (0, y.A)(t, { section: O.JJy.GUILD_LIST }),
        F = (0, h.A)(t.id),
        W = (0, x.A)(t.id),
        V = (0, f.A)(t),
        J = (0, E.os)("GuildContextMenu"),
        z = (0, j.c)(t);
    function Q() {
        (0, r.openModalLazy)(async () => {
            let { default: e } = await i.e("53485").then(i.bind(i, 20508));
            return (i) => (0, n.jsx)(e, { ...i, guild: t });
        });
    }
    return t.features.has(O.GuildFeatures.HUB)
        ? (0, n.jsxs)(d.W, {
              "data-menu-migrated": !0,
              navId: "guild-context",
              onClose: c.Z_,
              "aria-label": I.intl.string(I.t.HpQykc),
              onSelect: s,
              children: [
                  (0, n.jsxs)(o.rX, {
                      children: [
                          R,
                          (0, n.jsx)(o.Dr, {
                              id: "privacy",
                              label: I.intl.string(I.t.IlFwwR),
                              action: () =>
                                  (0, r.openModalLazy)(async () => {
                                      let { default: e } = await Promise.all([
                                          i.e("33098"),
                                          i.e("62026"),
                                          i.e("95311"),
                                      ]).then(i.bind(i, 585265));
                                      return (i) => (0, n.jsx)(e, { ...i, guild: t });
                                  }),
                          }),
                          C,
                      ],
                  }),
                  T
                      ? null
                      : (0, n.jsx)(o.rX, {
                            children: (0, n.jsx)(o.Dr, {
                                id: "leave-guild",
                                label: I.intl.string(I.t.Dv8gFT),
                                action: Q,
                                color: "danger",
                            }),
                        }),
                  (0, n.jsx)(o.rX, { children: w }),
              ],
          })
        : (0, n.jsxs)(d.W, {
              "data-menu-migrated": !0,
              navId: "guild-context",
              onClose: c.Z_,
              "aria-label": I.intl.string(I.t.HpQykc),
              onSelect: s,
              children: [
                  (0, n.jsx)(o.rX, { children: H }),
                  (0, n.jsx)(o.rX, { children: R }),
                  (0, n.jsxs)(o.rX, { children: [P, J || __OVERLAY__ ? null : k, J && !__OVERLAY__ ? W : null, U, F] }),
                  (0, n.jsxs)(o.rX, {
                      children: [
                          u ? null : B,
                          __OVERLAY__
                              ? null
                              : (0, n.jsx)(o.Dr, {
                                    id: "privacy",
                                    label: I.intl.string(I.t.BayiAo),
                                    action: () =>
                                        (0, r.openModalLazy)(async () => {
                                            let { default: e } = await Promise.all([
                                                i.e("33098"),
                                                i.e("62026"),
                                                i.e("95311"),
                                            ]).then(i.bind(i, 585265));
                                            return (i) => (0, n.jsx)(e, { ...i, guild: t });
                                        }),
                                }),
                          C,
                      ],
                  }),
                  (0, n.jsxs)(o.rX, { children: [X, Y] }),
                  (0, n.jsxs)(o.rX, {
                      children: [
                          V,
                          !T &&
                              (0, n.jsx)(o.Dr, {
                                  id: "leave-guild",
                                  label: I.intl.string(I.t.J2TBi3),
                                  action: Q,
                                  color: "danger",
                              }),
                      ],
                  }),
                  (0, n.jsx)(o.rX, { children: z }),
                  (0, n.jsx)(o.rX, { children: w }),
              ],
          });
}
function R(e) {
    let { analyticsLocations: t } = (0, g.Ay)(u.A.CONTEXT_MENU);
    return (0, n.jsx)(g.f5, { value: t, children: (0, n.jsx)(T, { ...e }) });
}
