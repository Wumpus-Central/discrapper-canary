n.d(i, { default: () => F });
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
    y = n(434352),
    f = n(664967),
    b = n(531335),
    I = n(957316),
    h = n(974103),
    E = n(509536),
    v = n(359047),
    x = n(997509),
    G = n(595818),
    D = n(685073),
    M = n(534400),
    O = n(647534),
    j = n(857071),
    m = n(36942),
    L = n(149280),
    U = n(260509),
    _ = n(696451),
    N = n(576705),
    C = n(543465),
    T = n(287809),
    P = n(954571),
    S = n(652215),
    w = n(349828),
    H = n(985018),
    R = n(583970);
let F = l.memo(function (e) {
    let { guild: i, onClose: a, onSelect: F } = e,
        X = (0, d.bG)([T.default], () => T.default.getCurrentUser());
    r()(null != X, "GuildHeaderPopout: user cannot be undefined"),
        l.useEffect(() => {
            P.default.track(S.HAw.GUILD_DROPDOWN_MENU_VIEWED, { guild_id: i.id });
        });
    let k = (0, d.bG)([C.Ay], () => C.Ay.isGuildCollapsed(i.id), [i.id]),
        {
            canAccessSettings: B,
            canManageChannels: V,
            showGuildAnalytics: W,
        } = (0, d.cf)(
            [N.A],
            () => ({
                canAccessSettings: N.A.canAccessGuildSettings(i),
                canManageChannels: N.A.can(S.xBc.MANAGE_CHANNELS, i),
                showGuildAnalytics: N.A.can(S.xBc.VIEW_GUILD_ANALYTICS, i) && i.features.has(S.GuildFeatures.COMMUNITY),
            }),
            [i],
        ),
        J = (0, h.ic)(i),
        Y = (0, U.bM)(i, X),
        K = (0, d.bG)([j.A], () => j.A.isLurking(i.id), [i.id]),
        Z = (0, d.bG)([_.Ay], () => _.Ay.isCurrentUserGuest(i.id)),
        Q = (0, v.A)(i.id, !0),
        $ = (0, o.Ay)(i),
        q = (0, b.A)({ source: S.PE1.GUILD_HEADER, guild: i }),
        z = (0, p.A)({
            guildId: i.id,
            userId: X.id,
            analyticsLocation: { page: S.liQ.GUILD_CHANNEL, section: S.JJy.GUILD_DROPDOWN_MENU },
            icon: s.R2l,
        }),
        ee = i.features.has(S.GuildFeatures.HUB),
        ei = i.id === w.Vc,
        en = i.id === S.gNP,
        et = (0, m.A)(i.id, !0),
        el = (0, g.A)(i),
        ea = (0, A.A)(i),
        er = (0, f.A)(i, !0),
        ed = (0, y.A)(i),
        es = (0, u.A)(),
        ec = (0, L.A)(i),
        eo = (0, D.Rg)(i) && (0, D.q0)(i),
        eu = l.useCallback(() => {
            (0, s.mMO)(async () => {
                let { default: e } = await n.e("53485").then(n.bind(n, 20508));
                return (n) => (0, t.jsx)(e, { ...n, guild: i });
            });
        }, [i]);
    return K || Z
        ? (0, t.jsx)(s.W1t, {
              "data-menu-migrated-auto": !0,
              onSelect: F,
              navId: "guild-header-popout",
              variant: "fixed",
              onClose: a,
              "aria-label": H.intl.string(H.t.HpQykc),
              children: (0, t.jsx)(s.Drp, {
                  id: "leave-guild",
                  label: H.intl.string(H.t.J2TBi3),
                  icon: s.oLl,
                  leadingAccessory: { type: "icon", icon: s.oLl },
                  action: () => {
                      x.A.leaveGuild(i.id, !0);
                  },
              }),
          })
        : ei
          ? (0, t.jsx)(s.W1t, {
                "data-menu-migrated-auto": !0,
                onSelect: F,
                navId: "favorites-header-popout",
                variant: "fixed",
                onClose: a,
                "aria-label": H.intl.string(H.t.HpQykc),
                children: (0, t.jsx)(s.rXV, { children: es }),
            })
          : ee
            ? (0, t.jsxs)(s.W1t, {
                  "data-menu-migrated": !0,
                  onSelect: F,
                  navId: "guild-header-popout",
                  variant: "fixed",
                  onClose: a,
                  "aria-label": H.intl.string(H.t.HpQykc),
                  children: [
                      (0, t.jsxs)(s.rXV, {
                          children: [
                              B
                                  ? (0, t.jsx)(s.Drp, {
                                        id: "settings",
                                        label: H.intl.string(H.t["154/bL"]),
                                        icon: ec ? s.vJI : s.Zes,
                                        leadingAccessory: { type: "icon", icon: ec ? s.vJI : s.Zes },
                                        action: () => {
                                            x.A.open(i.id, (0, G.x)());
                                        },
                                    })
                                  : null,
                              q,
                              (0, t.jsx)(s.Drp, {
                                  id: "privacy",
                                  label: H.intl.string(H.t.BayiAo),
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
                      Y
                          ? null
                          : (0, t.jsx)(s.rXV, {
                                children: (0, t.jsx)(s.Drp, {
                                    id: "leave",
                                    label: H.intl.string(H.t.Dv8gFT),
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
                    onSelect: F,
                    navId: "guild-header-popout",
                    variant: "fixed",
                    onClose: a,
                    "aria-label": H.intl.string(H.t.HpQykc),
                    children: [
                        (0, t.jsxs)(s.rXV, {
                            children: [
                                (0, t.jsx)(s.Drp, {
                                    id: "premium-subscribe",
                                    label: H.intl.string(H.t.VJEVbu),
                                    icon: s._Jp,
                                    leadingAccessory: { type: "icon", icon: s._Jp },
                                    action: () => {
                                        (0, E.K)({ guildId: i.id, location: { section: S.JJy.GUILD_HEADER_POPOUT } });
                                    },
                                }),
                                eo &&
                                    (0, t.jsx)(s.Drp, {
                                        id: "guild-tag",
                                        label: H.intl.string(R.default.mf2OwH),
                                        leadingAccessory: {
                                            type: "guildTag",
                                            element: (0, t.jsx)(M.o9, {
                                                guildId: i.id,
                                                guildTag: i.profile.tag,
                                                guildBadge: i.profile.badge ?? void 0,
                                                inline: !1,
                                            }),
                                        },
                                        icon: (0, t.jsx)(M.o9, {
                                            guildId: i.id,
                                            guildBadge: i.profile.badge,
                                            guildTag: i.profile.tag,
                                            inline: !1,
                                        }),
                                        action: () => (0, O.A)(i.id),
                                    }),
                            ],
                        }),
                        (0, t.jsxs)(s.rXV, {
                            children: [
                                q,
                                B
                                    ? (0, t.jsx)(s.Drp, {
                                          id: "settings",
                                          label: H.intl.string(H.t["154/bL"]),
                                          icon: ec ? s.vJI : s.Zes,
                                          leadingAccessory: { type: "icon", icon: ec ? s.vJI : s.Zes },
                                          action: () => {
                                              x.A.open(i.id, (0, G.x)());
                                          },
                                      })
                                    : null,
                                W
                                    ? (0, t.jsx)(s.Drp, {
                                          id: "insights",
                                          label: H.intl.string(H.t["0wWfUG"]),
                                          icon: s.Uy2,
                                          leadingAccessory: { type: "icon", icon: s.Uy2 },
                                          action: () => x.A.open(i.id, S.BEX.ANALYTICS),
                                      })
                                    : null,
                                V
                                    ? (0, t.jsxs)(t.Fragment, {
                                          children: [
                                              (0, t.jsx)(s.Drp, {
                                                  id: "create-channel",
                                                  label: H.intl.string(H.t["fUYU+j"]),
                                                  icon: s.U1e,
                                                  leadingAccessory: { type: "icon", icon: s.U1e },
                                                  action: () =>
                                                      (0, s.mMO)(async () => {
                                                          let { default: e } = await Promise.all([
                                                              n.e("64233"),
                                                              n.e("9743"),
                                                          ]).then(n.bind(n, 409200));
                                                          return (n) =>
                                                              (0, t.jsx)(e, {
                                                                  ...n,
                                                                  channelType: S.rbe.GUILD_TEXT,
                                                                  guildId: i.id,
                                                              });
                                                      }),
                                              }),
                                              (0, t.jsx)(s.Drp, {
                                                  id: "create-category",
                                                  label: H.intl.string(H.t["ISN+NM"]),
                                                  icon: s.YPf,
                                                  leadingAccessory: { type: "icon", icon: s.YPf },
                                                  action: () =>
                                                      (0, s.mMO)(async () => {
                                                          let { default: e } = await Promise.all([
                                                              n.e("64233"),
                                                              n.e("9743"),
                                                          ]).then(n.bind(n, 409200));
                                                          return (n) =>
                                                              (0, t.jsx)(e, {
                                                                  ...n,
                                                                  channelType: S.rbe.GUILD_CATEGORY,
                                                                  guildId: i.id,
                                                              });
                                                      }),
                                              }),
                                          ],
                                      })
                                    : null,
                                Q,
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
                                    label: H.intl.string(H.t.h850Ss),
                                    icon: s.XFE,
                                    leadingAccessory: { type: "icon", icon: s.XFE },
                                    action: () =>
                                        (0, s.mMO)(async () => {
                                            let { default: e } = await Promise.all([n.e("64992"), n.e("67208")]).then(
                                                n.bind(n, 401539),
                                            );
                                            return (n) => (0, t.jsx)(e, { ...n, guildId: i.id });
                                        }),
                                }),
                                (0, t.jsx)(s.Drp, {
                                    id: "privacy",
                                    label: H.intl.string(H.t.BayiAo),
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
                                    label: H.intl.string(H.t.UwOLJO),
                                    leadingAccessory: { type: "icon", icon: s.G3N },
                                    checked: k,
                                    action: () => c.A.toggleCollapseGuild(i.id),
                                }),
                            ],
                        }),
                        (0, t.jsxs)(s.rXV, {
                            children: [
                                er,
                                J && i.features.has(S.GuildFeatures.COMMUNITY)
                                    ? (0, t.jsx)(s.Drp, {
                                          id: "report-raid",
                                          label: H.intl.string(H.t.cswId3),
                                          icon: s.lmn,
                                          leadingAccessory: { type: "icon", icon: s.lmn },
                                          color: "danger",
                                          action: () => (0, I.M)(i.id),
                                      })
                                    : null,
                                Y
                                    ? null
                                    : (0, t.jsx)(s.Drp, {
                                          id: "leave",
                                          label: H.intl.string(H.t.J2TBi3),
                                          icon: s.oLl,
                                          leadingAccessory: { type: "icon", icon: s.oLl },
                                          color: "danger",
                                          action: eu,
                                      }),
                            ],
                        }),
                    ],
                });
});
