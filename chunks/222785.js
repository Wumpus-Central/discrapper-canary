n.d(i, { default: () => X });
var t = n(627968),
    l = n(64700),
    a = n(284009),
    r = n.n(a),
    d = n(311907),
    s = n(397927),
    c = n(686449),
    o = n(293260),
    u = n(649308),
    g = n(226958),
    A = n(82770),
    p = n(346247),
    y = n(810263),
    b = n(434352),
    f = n(664967),
    h = n(531335),
    v = n(957316),
    x = n(974103),
    E = n(509536),
    D = n(359047),
    j = n(997509),
    I = n(595818),
    G = n(685073),
    m = n(534400),
    L = n(647534),
    U = n(857071),
    C = n(36942),
    M = n(260509),
    O = n(696451),
    _ = n(576705),
    N = n(543465),
    T = n(287809),
    P = n(954571),
    w = n(652215),
    S = n(349828),
    k = n(985018),
    H = n(583970);
let X = l.memo(function (e) {
    let { guild: i, onClose: a, onSelect: X } = e,
        V = (0, d.bG)([T.default], () => T.default.getCurrentUser());
    r()(null != V, "GuildHeaderPopout: user cannot be undefined"),
        l.useEffect(() => {
            P.default.track(w.HAw.GUILD_DROPDOWN_MENU_VIEWED, { guild_id: i.id });
        });
    let F = (0, d.bG)([N.Ay], () => N.Ay.isGuildCollapsed(i.id), [i.id]),
        {
            canAccessSettings: R,
            canManageChannels: B,
            showGuildAnalytics: W,
        } = (0, d.cf)(
            [_.A],
            () => ({
                canAccessSettings: _.A.canAccessGuildSettings(i),
                canManageChannels: _.A.can(w.xBc.MANAGE_CHANNELS, i),
                showGuildAnalytics: _.A.can(w.xBc.VIEW_GUILD_ANALYTICS, i) && i.features.has(w.GuildFeatures.COMMUNITY),
            }),
            [i],
        ),
        Y = (0, x.ic)(i),
        J = (0, M.bM)(i, V),
        K = (0, d.bG)([U.A], () => U.A.isLurking(i.id), [i.id]),
        Q = (0, d.bG)([O.Ay], () => O.Ay.isCurrentUserGuest(i.id)),
        Z = (0, D.A)(i.id, !0),
        $ = (0, o.Ay)(i),
        q = (0, h.A)({ source: w.PE1.GUILD_HEADER, guild: i }),
        z = (0, p.A)({
            guildId: i.id,
            userId: V.id,
            analyticsLocation: { page: w.liQ.GUILD_CHANNEL, section: w.JJy.GUILD_DROPDOWN_MENU },
            icon: s.R2l,
        }),
        ee = i.features.has(w.GuildFeatures.HUB),
        ei = i.id === S.Vc,
        en = i.id === w.gNP,
        et = (0, C.A)(i.id, !0),
        el = (0, g.A)(i),
        ea = (0, A.A)(i),
        er = (0, f.A)(i, !0),
        ed = (0, b.A)(i),
        es = (0, u.A)(),
        ec = (0, y.A)(i, { showIcons: !0 }),
        eo = (0, G.Rg)(i) && (0, G.q0)(i),
        eu = l.useCallback(() => {
            (0, s.mMO)(async () => {
                let { default: e } = await n.e("53485").then(n.bind(n, 20508));
                return (n) => (0, t.jsx)(e, { ...n, guild: i });
            });
        }, [i]);
    return K || Q
        ? (0, t.jsxs)(s.W1t, {
              "data-menu-migrated-auto": !0,
              onSelect: X,
              navId: "guild-header-popout",
              variant: "fixed",
              onClose: a,
              "aria-label": k.intl.string(k.t.HpQykc),
              children: [
                  (0, t.jsx)(s.Drp, {
                      id: "leave-guild",
                      label: k.intl.string(k.t.J2TBi3),
                      icon: s.oLl,
                      leadingAccessory: { type: "icon", icon: s.oLl },
                      action: () => {
                          j.A.leaveGuild(i.id, !0);
                      },
                  }),
                  (0, t.jsx)(s.rXV, { children: ec }),
              ],
          })
        : ei
          ? (0, t.jsx)(s.W1t, {
                "data-menu-migrated-auto": !0,
                onSelect: X,
                navId: "favorites-header-popout",
                variant: "fixed",
                onClose: a,
                "aria-label": k.intl.string(k.t.HpQykc),
                children: (0, t.jsx)(s.rXV, { children: es }),
            })
          : ee
            ? (0, t.jsxs)(s.W1t, {
                  "data-menu-migrated": !0,
                  onSelect: X,
                  navId: "guild-header-popout",
                  variant: "fixed",
                  onClose: a,
                  "aria-label": k.intl.string(k.t.HpQykc),
                  children: [
                      (0, t.jsxs)(s.rXV, {
                          children: [
                              R
                                  ? (0, t.jsx)(s.Drp, {
                                        id: "settings",
                                        label: k.intl.string(k.t["154/bL"]),
                                        icon: s.Zes,
                                        leadingAccessory: { type: "icon", icon: s.Zes },
                                        action: () => {
                                            j.A.open(i.id, (0, I.x)());
                                        },
                                    })
                                  : null,
                              q,
                              (0, t.jsx)(s.Drp, {
                                  id: "privacy",
                                  label: k.intl.string(k.t.BayiAo),
                                  icon: s.lmn,
                                  leadingAccessory: { type: "icon", icon: s.lmn },
                                  action: () =>
                                      (0, s.mMO)(async () => {
                                          let { default: e } = await n.e("62026").then(n.bind(n, 585265));
                                          return (n) => (0, t.jsx)(e, { ...n, guild: i });
                                      }),
                              }),
                              z,
                          ],
                      }),
                      J
                          ? null
                          : (0, t.jsx)(s.rXV, {
                                children: (0, t.jsx)(s.Drp, {
                                    id: "leave",
                                    label: k.intl.string(k.t.Dv8gFT),
                                    icon: s.oLl,
                                    leadingAccessory: { type: "icon", icon: s.oLl },
                                    color: "danger",
                                    action: eu,
                                }),
                            }),
                  ],
              })
            : en
              ? null
              : (0, t.jsxs)(s.W1t, {
                    "data-menu-needs-review": !0,
                    onSelect: X,
                    navId: "guild-header-popout",
                    variant: "fixed",
                    onClose: a,
                    "aria-label": k.intl.string(k.t.HpQykc),
                    children: [
                        (0, t.jsxs)(s.rXV, {
                            children: [
                                (0, t.jsx)(s.Drp, {
                                    id: "premium-subscribe",
                                    label: k.intl.string(k.t.VJEVbu),
                                    icon: s._Jp,
                                    leadingAccessory: { type: "icon", icon: s._Jp },
                                    action: () => {
                                        (0, E.K4)({ guildId: i.id, location: { section: w.JJy.GUILD_HEADER_POPOUT } });
                                    },
                                }),
                                eo &&
                                    (0, t.jsx)(s.Drp, {
                                        id: "guild-tag",
                                        label: k.intl.string(H.default.mf2OwH),
                                        leadingAccessory: {
                                            type: "guildTag",
                                            element: (0, t.jsx)(m.o9, {
                                                guildId: i.id,
                                                guildTag: i.profile.tag,
                                                guildBadge: i.profile.badge ?? void 0,
                                                inline: !1,
                                            }),
                                        },
                                        icon: (0, t.jsx)(m.o9, {
                                            guildId: i.id,
                                            guildBadge: i.profile.badge,
                                            guildTag: i.profile.tag,
                                            inline: !1,
                                        }),
                                        action: () => (0, L.A)(i.id),
                                    }),
                            ],
                        }),
                        (0, t.jsxs)(s.rXV, {
                            children: [
                                q,
                                R
                                    ? (0, t.jsx)(s.Drp, {
                                          id: "settings",
                                          label: k.intl.string(k.t["154/bL"]),
                                          icon: s.Zes,
                                          leadingAccessory: { type: "icon", icon: s.Zes },
                                          action: () => {
                                              j.A.open(i.id, (0, I.x)());
                                          },
                                      })
                                    : null,
                                W
                                    ? (0, t.jsx)(s.Drp, {
                                          id: "insights",
                                          label: k.intl.string(k.t["0wWfUG"]),
                                          icon: s.Uy2,
                                          leadingAccessory: { type: "icon", icon: s.Uy2 },
                                          action: () => j.A.open(i.id, w.BEX.ANALYTICS),
                                      })
                                    : null,
                                B
                                    ? (0, t.jsxs)(t.Fragment, {
                                          children: [
                                              (0, t.jsx)(s.Drp, {
                                                  id: "create-channel",
                                                  label: k.intl.string(k.t["fUYU+j"]),
                                                  icon: s.U1e,
                                                  leadingAccessory: { type: "icon", icon: s.U1e },
                                                  action: () =>
                                                      (0, s.mMO)(async () => {
                                                          let { default: e } = await Promise.all([
                                                              n.e("64233"),
                                                              n.e("38405"),
                                                          ]).then(n.bind(n, 409200));
                                                          return (n) =>
                                                              (0, t.jsx)(e, {
                                                                  ...n,
                                                                  channelType: w.rbe.GUILD_TEXT,
                                                                  guildId: i.id,
                                                              });
                                                      }),
                                              }),
                                              (0, t.jsx)(s.Drp, {
                                                  id: "create-category",
                                                  label: k.intl.string(k.t["ISN+NM"]),
                                                  icon: s.YPf,
                                                  leadingAccessory: { type: "icon", icon: s.YPf },
                                                  action: () =>
                                                      (0, s.mMO)(async () => {
                                                          let { default: e } = await Promise.all([
                                                              n.e("64233"),
                                                              n.e("38405"),
                                                          ]).then(n.bind(n, 409200));
                                                          return (n) =>
                                                              (0, t.jsx)(e, {
                                                                  ...n,
                                                                  channelType: w.rbe.GUILD_CATEGORY,
                                                                  guildId: i.id,
                                                              });
                                                      }),
                                              }),
                                          ],
                                      })
                                    : null,
                                Z,
                                el,
                                ea,
                                $,
                                ed,
                            ],
                        }),
                        (0, t.jsxs)(s.rXV, {
                            children: [
                                et,
                                (0, t.jsx)(s.Drp, {
                                    id: "notifications",
                                    label: k.intl.string(k.t.h850Ss),
                                    icon: s.XFE,
                                    leadingAccessory: { type: "icon", icon: s.XFE },
                                    action: () =>
                                        (0, s.mMO)(async () => {
                                            let { default: e } = await Promise.all([n.e("64992"), n.e("96878")]).then(
                                                n.bind(n, 401539),
                                            );
                                            return (n) => (0, t.jsx)(e, { ...n, guildId: i.id });
                                        }),
                                }),
                                (0, t.jsx)(s.Drp, {
                                    id: "privacy",
                                    label: k.intl.string(k.t.BayiAo),
                                    icon: s.lmn,
                                    leadingAccessory: { type: "icon", icon: s.lmn },
                                    action: () =>
                                        (0, s.mMO)(async () => {
                                            let { default: e } = await n.e("62026").then(n.bind(n, 585265));
                                            return (n) => (0, t.jsx)(e, { ...n, guild: i });
                                        }),
                                }),
                            ],
                        }),
                        (0, t.jsxs)(s.rXV, {
                            children: [
                                z,
                                (0, t.jsx)(s.sLh, {
                                    id: "hide-muted-channels",
                                    label: k.intl.string(k.t.UwOLJO),
                                    leadingAccessory: { type: "icon", icon: s.G3N },
                                    checked: F,
                                    action: () => c.A.toggleCollapseGuild(i.id),
                                }),
                            ],
                        }),
                        (0, t.jsxs)(s.rXV, {
                            children: [
                                er,
                                Y && i.features.has(w.GuildFeatures.COMMUNITY)
                                    ? (0, t.jsx)(s.Drp, {
                                          id: "report-raid",
                                          label: k.intl.string(k.t.cswId3),
                                          icon: s.lmn,
                                          leadingAccessory: { type: "icon", icon: s.lmn },
                                          color: "danger",
                                          action: () => (0, v.M)(i.id),
                                      })
                                    : null,
                                J
                                    ? null
                                    : (0, t.jsx)(s.Drp, {
                                          id: "leave",
                                          label: k.intl.string(k.t.J2TBi3),
                                          icon: s.oLl,
                                          leadingAccessory: { type: "icon", icon: s.oLl },
                                          color: "danger",
                                          action: eu,
                                      }),
                            ],
                        }),
                        (0, t.jsx)(s.rXV, { children: ec }),
                    ],
                });
});
