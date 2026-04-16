i.d(t, { default: () => I });
var n = i(627968),
    l = i(284009),
    s = i.n(l),
    r = i(311907),
    a = i(397927),
    d = i(442433),
    c = i(793574),
    o = i(688810),
    u = i(359047),
    g = i(769591),
    A = i(36942),
    E = i(260509),
    h = i(961350),
    p = i(287809),
    _ = i(346247),
    S = i(810263),
    b = i(911612),
    N = i(664967),
    y = i(834265),
    f = i(507238),
    G = i(881136),
    L = i(813597),
    M = i(21605),
    v = i(684509),
    x = i(153594),
    D = i(531335),
    j = i(652215),
    O = i(985018);
function m(e) {
    let { guild: t, onSelect: l, hideSettings: c } = e,
        o = t.id,
        m = (0, r.bG)([p.default], () => {
            let e = p.default.getCurrentUser();
            return s()(null != e, "GuildContextMenu: user cannot be undefined"), (0, E.bM)(t, e);
        }, [t]),
        I = (0, D.A)({ guild: t, source: j.PE1.GUILD_CONTEXT_MENU, channel: null }),
        U = (0, x.A)(o),
        T = (0, f.A)(t),
        R = (0, G.A)(t),
        C = (0, v.A)(t),
        P = (0, _.A)({
            guildId: t.id,
            userId: h.default.getId(),
            analyticsLocation: {
                page: j.liQ.GUILD_CHANNEL,
                section: j.JJy.CHAT_USERNAME,
                object: j.ZSU.CONTEXT_MENU_ITEM,
            },
        }),
        k = (0, b.A)(t),
        B = (0, u.A)(t.id),
        X = (0, S.A)(t),
        V = (0, y.A)(t, { section: j.JJy.GUILD_LIST }),
        w = (0, A.A)(t.id),
        H = (0, L.A)(t.id),
        Y = (0, N.A)(t),
        F = (0, g.os)("GuildContextMenu"),
        W = (0, M.c)(t);
    function J() {
        (0, a.mMO)(async () => {
            let { default: e } = await i.e("53485").then(i.bind(i, 20508));
            return (i) => (0, n.jsx)(e, { ...i, guild: t });
        });
    }
    return t.features.has(j.GuildFeatures.HUB)
        ? (0, n.jsxs)(a.W1t, {
              "data-menu-migrated": !0,
              navId: "guild-context",
              onClose: d.Z_,
              "aria-label": O.intl.string(O.t.HpQykc),
              onSelect: l,
              children: [
                  (0, n.jsxs)(a.rXV, {
                      children: [
                          I,
                          (0, n.jsx)(a.Drp, {
                              id: "privacy",
                              label: O.intl.string(O.t.IlFwwR),
                              action: () =>
                                  (0, a.mMO)(async () => {
                                      let { default: e } = await Promise.all([
                                          i.e("53609"),
                                          i.e("62026"),
                                          i.e("84183"),
                                      ]).then(i.bind(i, 585265));
                                      return (i) => (0, n.jsx)(e, { ...i, guild: t });
                                  }),
                          }),
                          P,
                      ],
                  }),
                  m
                      ? null
                      : (0, n.jsx)(a.rXV, {
                            children: (0, n.jsx)(a.Drp, {
                                id: "leave-guild",
                                label: O.intl.string(O.t.Dv8gFT),
                                action: J,
                                color: "danger",
                            }),
                        }),
                  (0, n.jsx)(a.rXV, { children: X }),
              ],
          })
        : (0, n.jsxs)(a.W1t, {
              "data-menu-migrated": !0,
              navId: "guild-context",
              onClose: d.Z_,
              "aria-label": O.intl.string(O.t.HpQykc),
              onSelect: l,
              children: [
                  (0, n.jsx)(a.rXV, { children: V }),
                  (0, n.jsx)(a.rXV, { children: I }),
                  (0, n.jsxs)(a.rXV, {
                      children: [T, F || __OVERLAY__ ? null : R, F && !__OVERLAY__ ? H : null, U, w],
                  }),
                  (0, n.jsxs)(a.rXV, {
                      children: [
                          c ? null : C,
                          __OVERLAY__
                              ? null
                              : (0, n.jsx)(a.Drp, {
                                    id: "privacy",
                                    label: O.intl.string(O.t.BayiAo),
                                    action: () =>
                                        (0, a.mMO)(async () => {
                                            let { default: e } = await Promise.all([
                                                i.e("53609"),
                                                i.e("62026"),
                                                i.e("84183"),
                                            ]).then(i.bind(i, 585265));
                                            return (i) => (0, n.jsx)(e, { ...i, guild: t });
                                        }),
                                }),
                          P,
                      ],
                  }),
                  (0, n.jsxs)(a.rXV, { children: [k, B] }),
                  (0, n.jsxs)(a.rXV, {
                      children: [
                          Y,
                          !m &&
                              (0, n.jsx)(a.Drp, {
                                  id: "leave-guild",
                                  label: O.intl.string(O.t.J2TBi3),
                                  action: J,
                                  color: "danger",
                              }),
                      ],
                  }),
                  (0, n.jsx)(a.rXV, { children: W }),
                  (0, n.jsx)(a.rXV, { children: X }),
              ],
          });
}
function I(e) {
    let { analyticsLocations: t } = (0, o.Ay)(c.A.CONTEXT_MENU);
    return (0, n.jsx)(o.f5, { value: t, children: (0, n.jsx)(m, { ...e }) });
}
