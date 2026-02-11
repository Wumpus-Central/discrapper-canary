n.d(i, { default: () => F });
var t = n(627968),
    l = n(64700),
    a = n(284009),
    d = n.n(a),
    r = n(311907),
    s = n(397927),
    c = n(686449),
    o = n(819744),
    u = n(149305),
    g = n(293260),
    A = n(616075),
    p = n(226958),
    y = n(82770),
    h = n(346247),
    b = n(434352),
    f = n(664967),
    I = n(531335),
    E = n(957316),
    D = n(974103),
    x = n(509536),
    v = n(359047),
    G = n(997509),
    j = n(595818),
    M = n(685073),
    O = n(534400),
    m = n(647534),
    _ = n(857071),
    L = n(36942),
    U = n(149280),
    C = n(260509),
    N = n(696451),
    P = n(576705),
    T = n(543465),
    S = n(287809),
    w = n(954571),
    R = n(652215),
    H = n(349828),
    k = n(985018),
    B = n(814364);
let F = l.memo(function (e) {
    let { guild: i, onClose: a, onSelect: F } = e,
        V = (0, r.bG)([S.default], () => S.default.getCurrentUser());
    d()(null != V, "GuildHeaderPopout: user cannot be undefined"),
        l.useEffect(() => {
            w.default.track(R.HAw.GUILD_DROPDOWN_MENU_VIEWED, { guild_id: i.id });
        });
    let X = (0, r.bG)([T.Ay], () => T.Ay.isGuildCollapsed(i.id), [i.id]),
        {
            canAccessSettings: J,
            canManageChannels: W,
            showGuildAnalytics: Y,
        } = (0, r.cf)(
            [P.A],
            () => ({
                canAccessSettings: P.A.canAccessGuildSettings(i),
                canManageChannels: P.A.can(R.xBc.MANAGE_CHANNELS, i),
                showGuildAnalytics: P.A.can(R.xBc.VIEW_GUILD_ANALYTICS, i) && i.features.has(R.GuildFeatures.COMMUNITY),
            }),
            [i],
        ),
        K = (0, D.ic)(i),
        Q = (0, C.bM)(i, V),
        Z = (0, r.bG)([_.A], () => _.A.isLurking(i.id), [i.id]),
        $ = (0, r.bG)([N.Ay], () => N.Ay.isCurrentUserGuest(i.id)),
        q = (0, v.A)(i.id, !0),
        z = (0, g.Ay)(i),
        ee = (0, I.A)({ source: R.PE1.GUILD_HEADER, guild: i }),
        ei = (0, h.A)({
            guildId: i.id,
            userId: V.id,
            analyticsLocation: { page: R.liQ.GUILD_CHANNEL, section: R.JJy.GUILD_DROPDOWN_MENU },
            icon: s.R2l,
        }),
        en = i.features.has(R.GuildFeatures.HUB),
        et = i.id === H.V,
        el = i.id === R.gNP,
        ea = (0, L.A)(i.id, !0),
        ed = (0, p.A)(i),
        er = (0, y.A)(i),
        es = (0, f.A)(i, !0),
        ec = (0, b.A)(i),
        { isFavoritesPerk: eo } = (0, A.l)("GuildHeaderPopout"),
        eu = (0, U.A)(i),
        { triggerDeadchat: eg } = u.c.useExperiment(
            { guildId: i.id, location: "guild header" },
            { autoTrackExposure: !1 },
        ),
        eA = (0, M.Rg)(i) && (0, M.q0)(i),
        ep = l.useCallback(() => {
            (0, s.mMO)(async () => {
                let { default: e } = await n.e("53485").then(n.bind(n, 798127));
                return (n) => (0, t.jsx)(e, { ...n, guild: i });
            });
        }, [i]);
    return Z || $
        ? (0, t.jsx)(s.W1t, {
              "data-menu-migrated-auto": !0,
              onSelect: F,
              navId: "guild-header-popout",
              variant: "fixed",
              onClose: a,
              "aria-label": k.intl.string(k.t.HpQykc),
              children: (0, t.jsx)(s.Drp, {
                  id: "leave-guild",
                  label: k.intl.string(k.t.J2TBi3),
                  icon: s.oLl,
                  leadingAccessory: { type: "icon", icon: s.oLl },
                  action: () => {
                      G.A.leaveGuild(i.id, !0);
                  },
              }),
          })
        : et
          ? (0, t.jsxs)(s.W1t, {
                "data-menu-migrated-auto": !0,
                onSelect: F,
                navId: "favorites-header-popout",
                variant: "fixed",
                onClose: a,
                "aria-label": k.intl.string(k.t.HpQykc),
                children: [
                    (0, t.jsxs)(s.rXV, {
                        children: [
                            eo &&
                                (0, t.jsx)(s.Drp, {
                                    id: "add-channel",
                                    label: k.intl.string(k.t["6uDHk6"]),
                                    color: "brand",
                                    icon: s.U1e,
                                    leadingAccessory: { type: "icon", icon: s.U1e },
                                    action: () =>
                                        (0, s.mMO)(async () => {
                                            let { default: e } = await n.e("15077").then(n.bind(n, 889186));
                                            return (i) => (0, t.jsx)(e, { ...i });
                                        }),
                                }),
                            (0, t.jsx)(s.Drp, {
                                id: "create-category",
                                label: k.intl.string(k.t["ISN+NM"]),
                                icon: s.YPf,
                                leadingAccessory: { type: "icon", icon: s.YPf },
                                action: () =>
                                    (0, s.mMO)(async () => {
                                        let { default: e } = await n.e("5639").then(n.bind(n, 395199));
                                        return (i) => (0, t.jsx)(e, { ...i });
                                    }),
                            }),
                        ],
                    }),
                    (0, t.jsx)(s.rXV, {
                        children: (0, t.jsx)(s.sLh, {
                            id: "hide-muted-channels",
                            label: k.intl.string(k.t.UwOLJO),
                            checked: X,
                            action: () => c.A.toggleCollapseGuild(i.id),
                        }),
                    }),
                ],
            })
          : en
            ? (0, t.jsxs)(s.W1t, {
                  "data-menu-migrated": !0,
                  onSelect: F,
                  navId: "guild-header-popout",
                  variant: "fixed",
                  onClose: a,
                  "aria-label": k.intl.string(k.t.HpQykc),
                  children: [
                      (0, t.jsxs)(s.rXV, {
                          children: [
                              J
                                  ? (0, t.jsx)(s.Drp, {
                                        id: "settings",
                                        label: k.intl.string(k.t["154/bL"]),
                                        icon: eu ? s.vJI : s.Zes,
                                        leadingAccessory: { type: "icon", icon: eu ? s.vJI : s.Zes },
                                        action: () => {
                                            G.A.open(i.id, (0, j.x)());
                                        },
                                    })
                                  : null,
                              ee,
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
                              ei,
                          ],
                      }),
                      Q
                          ? null
                          : (0, t.jsx)(s.rXV, {
                                children: (0, t.jsx)(s.Drp, {
                                    id: "leave",
                                    label: k.intl.string(k.t.Dv8gFT),
                                    icon: s.oLl,
                                    leadingAccessory: { type: "icon", icon: s.oLl },
                                    color: "danger",
                                    action: ep,
                                }),
                            }),
                  ],
              })
            : el
              ? null
              : (0, t.jsxs)(s.W1t, {
                    "data-menu-needs-review": !0,
                    onSelect: F,
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
                                        (0, x.K)({ guildId: i.id, location: { section: R.JJy.GUILD_HEADER_POPOUT } });
                                    },
                                }),
                                eA &&
                                    (0, t.jsx)(s.Drp, {
                                        id: "guild-tag",
                                        label: k.intl.string(B.default.mf2OwH),
                                        leadingAccessory: {
                                            type: "guildTag",
                                            element: (0, t.jsx)(O.o9, {
                                                guildId: i.id,
                                                guildTag: i.profile.tag,
                                                guildBadge: i.profile.badge ?? void 0,
                                                inline: !1,
                                            }),
                                        },
                                        icon: (0, t.jsx)(O.o9, {
                                            guildId: i.id,
                                            guildBadge: i.profile.badge,
                                            guildTag: i.profile.tag,
                                            inline: !1,
                                        }),
                                        action: () => (0, m.A)(i.id),
                                    }),
                            ],
                        }),
                        (0, t.jsxs)(s.rXV, {
                            children: [
                                Q && V.isStaff() && eg
                                    ? (0, t.jsx)(s.Drp, {
                                          id: "create-deadchat",
                                          label: "Deadchat Ping",
                                          icon: s.MBj,
                                          leadingAccessory: { type: "icon", icon: s.MBj },
                                          action: () => {
                                              (0, o.g)(i.id, R.lAJ.GUILD_DEADCHAT_REVIVE_PROMPT);
                                          },
                                      })
                                    : null,
                                ee,
                                J
                                    ? (0, t.jsx)(s.Drp, {
                                          id: "settings",
                                          label: k.intl.string(k.t["154/bL"]),
                                          icon: eu ? s.vJI : s.Zes,
                                          leadingAccessory: { type: "icon", icon: eu ? s.vJI : s.Zes },
                                          action: () => {
                                              G.A.open(i.id, (0, j.x)());
                                          },
                                      })
                                    : null,
                                Y
                                    ? (0, t.jsx)(s.Drp, {
                                          id: "insights",
                                          label: k.intl.string(k.t["0wWfUG"]),
                                          icon: s.Uy2,
                                          leadingAccessory: { type: "icon", icon: s.Uy2 },
                                          action: () => G.A.open(i.id, R.BEX.ANALYTICS),
                                      })
                                    : null,
                                W
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
                                                              n.e("10923"),
                                                          ]).then(n.bind(n, 409200));
                                                          return (n) =>
                                                              (0, t.jsx)(e, {
                                                                  ...n,
                                                                  channelType: R.rbe.GUILD_TEXT,
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
                                                              n.e("10923"),
                                                          ]).then(n.bind(n, 409200));
                                                          return (n) =>
                                                              (0, t.jsx)(e, {
                                                                  ...n,
                                                                  channelType: R.rbe.GUILD_CATEGORY,
                                                                  guildId: i.id,
                                                              });
                                                      }),
                                              }),
                                          ],
                                      })
                                    : null,
                                q,
                                ed,
                                er,
                                z,
                                ec,
                            ],
                        }),
                        (0, t.jsxs)(s.rXV, {
                            children: [
                                ea,
                                (0, t.jsx)(s.Drp, {
                                    id: "notifications",
                                    label: k.intl.string(k.t.h850Ss),
                                    icon: s.XFE,
                                    leadingAccessory: { type: "icon", icon: s.XFE },
                                    action: () =>
                                        (0, s.mMO)(async () => {
                                            let { default: e } = await Promise.all([n.e("64992"), n.e("6356")]).then(
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
                                ei,
                                (0, t.jsx)(s.sLh, {
                                    id: "hide-muted-channels",
                                    label: k.intl.string(k.t.UwOLJO),
                                    leadingAccessory: { type: "icon", icon: s.G3N },
                                    checked: X,
                                    action: () => c.A.toggleCollapseGuild(i.id),
                                }),
                            ],
                        }),
                        (0, t.jsxs)(s.rXV, {
                            children: [
                                es,
                                K && i.features.has(R.GuildFeatures.COMMUNITY)
                                    ? (0, t.jsx)(s.Drp, {
                                          id: "report-raid",
                                          label: k.intl.string(k.t.cswId3),
                                          icon: s.lmn,
                                          leadingAccessory: { type: "icon", icon: s.lmn },
                                          color: "danger",
                                          action: () => (0, E.M)(i.id),
                                      })
                                    : null,
                                Q
                                    ? null
                                    : (0, t.jsx)(s.Drp, {
                                          id: "leave",
                                          label: k.intl.string(k.t.J2TBi3),
                                          icon: s.oLl,
                                          leadingAccessory: { type: "icon", icon: s.oLl },
                                          color: "danger",
                                          action: ep,
                                      }),
                            ],
                        }),
                    ],
                });
});
