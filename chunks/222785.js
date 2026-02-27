n.d(i, { default: () => B });
var t = n(627968),
    l = n(64700),
    a = n(284009),
    r = n.n(a),
    d = n(311907),
    s = n(397927),
    c = n(686449),
    o = n(819744),
    u = n(149305),
    g = n(293260),
    A = n(226958),
    p = n(82770),
    y = n(346247),
    h = n(434352),
    b = n(664967),
    f = n(531335),
    I = n(957316),
    E = n(974103),
    D = n(509536),
    x = n(359047),
    v = n(997509),
    G = n(595818),
    j = n(685073),
    M = n(534400),
    O = n(647534),
    m = n(857071),
    _ = n(36942),
    L = n(149280),
    U = n(260509),
    C = n(696451),
    N = n(576705),
    P = n(543465),
    T = n(287809),
    S = n(954571),
    w = n(652215),
    R = n(349828),
    H = n(985018),
    k = n(583970);
let B = l.memo(function (e) {
    let { guild: i, onClose: a, onSelect: B } = e,
        F = (0, d.bG)([T.default], () => T.default.getCurrentUser());
    r()(null != F, "GuildHeaderPopout: user cannot be undefined"),
        l.useEffect(() => {
            S.default.track(w.HAw.GUILD_DROPDOWN_MENU_VIEWED, { guild_id: i.id });
        });
    let V = (0, d.bG)([P.Ay], () => P.Ay.isGuildCollapsed(i.id), [i.id]),
        {
            canAccessSettings: X,
            canManageChannels: J,
            showGuildAnalytics: W,
        } = (0, d.cf)(
            [N.A],
            () => ({
                canAccessSettings: N.A.canAccessGuildSettings(i),
                canManageChannels: N.A.can(w.xBc.MANAGE_CHANNELS, i),
                showGuildAnalytics: N.A.can(w.xBc.VIEW_GUILD_ANALYTICS, i) && i.features.has(w.GuildFeatures.COMMUNITY),
            }),
            [i],
        ),
        Y = (0, E.ic)(i),
        K = (0, U.bM)(i, F),
        Q = (0, d.bG)([m.A], () => m.A.isLurking(i.id), [i.id]),
        Z = (0, d.bG)([C.Ay], () => C.Ay.isCurrentUserGuest(i.id)),
        $ = (0, x.A)(i.id, !0),
        q = (0, g.Ay)(i),
        z = (0, f.A)({ source: w.PE1.GUILD_HEADER, guild: i }),
        ee = (0, y.A)({
            guildId: i.id,
            userId: F.id,
            analyticsLocation: { page: w.liQ.GUILD_CHANNEL, section: w.JJy.GUILD_DROPDOWN_MENU },
            icon: s.R2l,
        }),
        ei = i.features.has(w.GuildFeatures.HUB),
        en = i.id === R.Vc,
        et = i.id === w.gNP,
        el = (0, _.A)(i.id, !0),
        ea = (0, A.A)(i),
        er = (0, p.A)(i),
        ed = (0, b.A)(i, !0),
        es = (0, h.A)(i),
        ec = (0, L.A)(i),
        { triggerDeadchat: eo } = u.c.useExperiment(
            { guildId: i.id, location: "guild header" },
            { autoTrackExposure: !1 },
        ),
        eu = (0, j.Rg)(i) && (0, j.q0)(i),
        eg = l.useCallback(() => {
            (0, s.mMO)(async () => {
                let { default: e } = await n.e("53485").then(n.bind(n, 20508));
                return (n) => (0, t.jsx)(e, { ...n, guild: i });
            });
        }, [i]);
    return Q || Z
        ? (0, t.jsx)(s.W1t, {
              "data-menu-migrated-auto": !0,
              onSelect: B,
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
                      v.A.leaveGuild(i.id, !0);
                  },
              }),
          })
        : en
          ? (0, t.jsxs)(s.W1t, {
                "data-menu-migrated-auto": !0,
                onSelect: B,
                navId: "favorites-header-popout",
                variant: "fixed",
                onClose: a,
                "aria-label": H.intl.string(H.t.HpQykc),
                children: [
                    (0, t.jsxs)(s.rXV, {
                        children: [
                            !1,
                            (0, t.jsx)(s.Drp, {
                                id: "create-category",
                                label: H.intl.string(H.t["ISN+NM"]),
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
                            label: H.intl.string(H.t.UwOLJO),
                            checked: V,
                            action: () => c.A.toggleCollapseGuild(i.id),
                        }),
                    }),
                ],
            })
          : ei
            ? (0, t.jsxs)(s.W1t, {
                  "data-menu-migrated": !0,
                  onSelect: B,
                  navId: "guild-header-popout",
                  variant: "fixed",
                  onClose: a,
                  "aria-label": H.intl.string(H.t.HpQykc),
                  children: [
                      (0, t.jsxs)(s.rXV, {
                          children: [
                              X
                                  ? (0, t.jsx)(s.Drp, {
                                        id: "settings",
                                        label: H.intl.string(H.t["154/bL"]),
                                        icon: ec ? s.vJI : s.Zes,
                                        leadingAccessory: { type: "icon", icon: ec ? s.vJI : s.Zes },
                                        action: () => {
                                            v.A.open(i.id, (0, G.x)());
                                        },
                                    })
                                  : null,
                              z,
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
                              ee,
                          ],
                      }),
                      K
                          ? null
                          : (0, t.jsx)(s.rXV, {
                                children: (0, t.jsx)(s.Drp, {
                                    id: "leave",
                                    label: H.intl.string(H.t.Dv8gFT),
                                    icon: s.oLl,
                                    leadingAccessory: { type: "icon", icon: s.oLl },
                                    color: "danger",
                                    action: eg,
                                }),
                            }),
                  ],
              })
            : et
              ? null
              : (0, t.jsxs)(s.W1t, {
                    "data-menu-needs-review": !0,
                    onSelect: B,
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
                                        (0, D.K)({ guildId: i.id, location: { section: w.JJy.GUILD_HEADER_POPOUT } });
                                    },
                                }),
                                eu &&
                                    (0, t.jsx)(s.Drp, {
                                        id: "guild-tag",
                                        label: H.intl.string(k.default.mf2OwH),
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
                                K && F.isStaff() && eo
                                    ? (0, t.jsx)(s.Drp, {
                                          id: "create-deadchat",
                                          label: "Deadchat Ping",
                                          icon: s.MBj,
                                          leadingAccessory: { type: "icon", icon: s.MBj },
                                          action: () => {
                                              (0, o.g)(i.id, w.lAJ.GUILD_DEADCHAT_REVIVE_PROMPT);
                                          },
                                      })
                                    : null,
                                z,
                                X
                                    ? (0, t.jsx)(s.Drp, {
                                          id: "settings",
                                          label: H.intl.string(H.t["154/bL"]),
                                          icon: ec ? s.vJI : s.Zes,
                                          leadingAccessory: { type: "icon", icon: ec ? s.vJI : s.Zes },
                                          action: () => {
                                              v.A.open(i.id, (0, G.x)());
                                          },
                                      })
                                    : null,
                                W
                                    ? (0, t.jsx)(s.Drp, {
                                          id: "insights",
                                          label: H.intl.string(H.t["0wWfUG"]),
                                          icon: s.Uy2,
                                          leadingAccessory: { type: "icon", icon: s.Uy2 },
                                          action: () => v.A.open(i.id, w.BEX.ANALYTICS),
                                      })
                                    : null,
                                J
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
                                                                  channelType: w.rbe.GUILD_TEXT,
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
                                                                  channelType: w.rbe.GUILD_CATEGORY,
                                                                  guildId: i.id,
                                                              });
                                                      }),
                                              }),
                                          ],
                                      })
                                    : null,
                                $,
                                ea,
                                er,
                                q,
                                es,
                            ],
                        }),
                        (0, t.jsxs)(s.rXV, {
                            children: [
                                el,
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
                                ee,
                                (0, t.jsx)(s.sLh, {
                                    id: "hide-muted-channels",
                                    label: H.intl.string(H.t.UwOLJO),
                                    leadingAccessory: { type: "icon", icon: s.G3N },
                                    checked: V,
                                    action: () => c.A.toggleCollapseGuild(i.id),
                                }),
                            ],
                        }),
                        (0, t.jsxs)(s.rXV, {
                            children: [
                                ed,
                                Y && i.features.has(w.GuildFeatures.COMMUNITY)
                                    ? (0, t.jsx)(s.Drp, {
                                          id: "report-raid",
                                          label: H.intl.string(H.t.cswId3),
                                          icon: s.lmn,
                                          leadingAccessory: { type: "icon", icon: s.lmn },
                                          color: "danger",
                                          action: () => (0, I.M)(i.id),
                                      })
                                    : null,
                                K
                                    ? null
                                    : (0, t.jsx)(s.Drp, {
                                          id: "leave",
                                          label: H.intl.string(H.t.J2TBi3),
                                          icon: s.oLl,
                                          leadingAccessory: { type: "icon", icon: s.oLl },
                                          color: "danger",
                                          action: eg,
                                      }),
                            ],
                        }),
                    ],
                });
});
