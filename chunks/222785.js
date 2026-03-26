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
    y = n(434352),
    f = n(664967),
    b = n(531335),
    h = n(957316),
    x = n(974103),
    v = n(509536),
    E = n(359047),
    D = n(997509),
    j = n(595818),
    G = n(685073),
    I = n(534400),
    m = n(647534),
    M = n(857071),
    U = n(36942),
    L = n(260509),
    O = n(696451),
    C = n(576705),
    _ = n(543465),
    N = n(287809),
    T = n(954571),
    P = n(652215),
    w = n(349828),
    S = n(985018),
    H = n(583970);
let X = l.memo(function (e) {
    let { guild: i, onClose: a, onSelect: X } = e,
        k = (0, d.bG)([N.default], () => N.default.getCurrentUser());
    r()(null != k, "GuildHeaderPopout: user cannot be undefined"),
        l.useEffect(() => {
            T.default.track(P.HAw.GUILD_DROPDOWN_MENU_VIEWED, { guild_id: i.id });
        });
    let F = (0, d.bG)([_.Ay], () => _.Ay.isGuildCollapsed(i.id), [i.id]),
        {
            canAccessSettings: B,
            canManageChannels: V,
            showGuildAnalytics: W,
        } = (0, d.cf)(
            [C.A],
            () => ({
                canAccessSettings: C.A.canAccessGuildSettings(i),
                canManageChannels: C.A.can(P.xBc.MANAGE_CHANNELS, i),
                showGuildAnalytics: C.A.can(P.xBc.VIEW_GUILD_ANALYTICS, i) && i.features.has(P.GuildFeatures.COMMUNITY),
            }),
            [i],
        ),
        R = (0, x.ic)(i),
        J = (0, L.bM)(i, k),
        Y = (0, d.bG)([M.A], () => M.A.isLurking(i.id), [i.id]),
        K = (0, d.bG)([O.Ay], () => O.Ay.isCurrentUserGuest(i.id)),
        Z = (0, E.A)(i.id, !0),
        Q = (0, o.Ay)(i),
        $ = (0, b.A)({ source: P.PE1.GUILD_HEADER, guild: i }),
        q = (0, p.A)({
            guildId: i.id,
            userId: k.id,
            analyticsLocation: { page: P.liQ.GUILD_CHANNEL, section: P.JJy.GUILD_DROPDOWN_MENU },
            icon: s.R2l,
        }),
        z = i.features.has(P.GuildFeatures.HUB),
        ee = i.id === w.Vc,
        ei = i.id === P.gNP,
        en = (0, U.A)(i.id, !0),
        et = (0, g.A)(i),
        el = (0, A.A)(i),
        ea = (0, f.A)(i, !0),
        er = (0, y.A)(i),
        ed = (0, u.A)(),
        es = (0, G.Rg)(i) && (0, G.q0)(i),
        ec = l.useCallback(() => {
            (0, s.mMO)(async () => {
                let { default: e } = await n.e("53485").then(n.bind(n, 20508));
                return (n) => (0, t.jsx)(e, { ...n, guild: i });
            });
        }, [i]);
    return Y || K
        ? (0, t.jsx)(s.W1t, {
              "data-menu-migrated-auto": !0,
              onSelect: X,
              navId: "guild-header-popout",
              variant: "fixed",
              onClose: a,
              "aria-label": S.intl.string(S.t.HpQykc),
              children: (0, t.jsx)(s.Drp, {
                  id: "leave-guild",
                  label: S.intl.string(S.t.J2TBi3),
                  icon: s.oLl,
                  leadingAccessory: { type: "icon", icon: s.oLl },
                  action: () => {
                      D.A.leaveGuild(i.id, !0);
                  },
              }),
          })
        : ee
          ? (0, t.jsx)(s.W1t, {
                "data-menu-migrated-auto": !0,
                onSelect: X,
                navId: "favorites-header-popout",
                variant: "fixed",
                onClose: a,
                "aria-label": S.intl.string(S.t.HpQykc),
                children: (0, t.jsx)(s.rXV, { children: ed }),
            })
          : z
            ? (0, t.jsxs)(s.W1t, {
                  "data-menu-migrated": !0,
                  onSelect: X,
                  navId: "guild-header-popout",
                  variant: "fixed",
                  onClose: a,
                  "aria-label": S.intl.string(S.t.HpQykc),
                  children: [
                      (0, t.jsxs)(s.rXV, {
                          children: [
                              B
                                  ? (0, t.jsx)(s.Drp, {
                                        id: "settings",
                                        label: S.intl.string(S.t["154/bL"]),
                                        icon: s.Zes,
                                        leadingAccessory: { type: "icon", icon: s.Zes },
                                        action: () => {
                                            D.A.open(i.id, (0, j.x)());
                                        },
                                    })
                                  : null,
                              $,
                              (0, t.jsx)(s.Drp, {
                                  id: "privacy",
                                  label: S.intl.string(S.t.BayiAo),
                                  icon: s.lmn,
                                  leadingAccessory: { type: "icon", icon: s.lmn },
                                  action: () =>
                                      (0, s.mMO)(async () => {
                                          let { default: e } = await n.e("62026").then(n.bind(n, 585265));
                                          return (n) => (0, t.jsx)(e, { ...n, guild: i });
                                      }),
                              }),
                              q,
                          ],
                      }),
                      J
                          ? null
                          : (0, t.jsx)(s.rXV, {
                                children: (0, t.jsx)(s.Drp, {
                                    id: "leave",
                                    label: S.intl.string(S.t.Dv8gFT),
                                    icon: s.oLl,
                                    leadingAccessory: { type: "icon", icon: s.oLl },
                                    color: "danger",
                                    action: ec,
                                }),
                            }),
                  ],
              })
            : ei
              ? null
              : (0, t.jsxs)(s.W1t, {
                    "data-menu-needs-review": !0,
                    onSelect: X,
                    navId: "guild-header-popout",
                    variant: "fixed",
                    onClose: a,
                    "aria-label": S.intl.string(S.t.HpQykc),
                    children: [
                        (0, t.jsxs)(s.rXV, {
                            children: [
                                (0, t.jsx)(s.Drp, {
                                    id: "premium-subscribe",
                                    label: S.intl.string(S.t.VJEVbu),
                                    icon: s._Jp,
                                    leadingAccessory: { type: "icon", icon: s._Jp },
                                    action: () => {
                                        (0, v.K4)({ guildId: i.id, location: { section: P.JJy.GUILD_HEADER_POPOUT } });
                                    },
                                }),
                                es &&
                                    (0, t.jsx)(s.Drp, {
                                        id: "guild-tag",
                                        label: S.intl.string(H.default.mf2OwH),
                                        leadingAccessory: {
                                            type: "guildTag",
                                            element: (0, t.jsx)(I.o9, {
                                                guildId: i.id,
                                                guildTag: i.profile.tag,
                                                guildBadge: i.profile.badge ?? void 0,
                                                inline: !1,
                                            }),
                                        },
                                        icon: (0, t.jsx)(I.o9, {
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
                                $,
                                B
                                    ? (0, t.jsx)(s.Drp, {
                                          id: "settings",
                                          label: S.intl.string(S.t["154/bL"]),
                                          icon: s.Zes,
                                          leadingAccessory: { type: "icon", icon: s.Zes },
                                          action: () => {
                                              D.A.open(i.id, (0, j.x)());
                                          },
                                      })
                                    : null,
                                W
                                    ? (0, t.jsx)(s.Drp, {
                                          id: "insights",
                                          label: S.intl.string(S.t["0wWfUG"]),
                                          icon: s.Uy2,
                                          leadingAccessory: { type: "icon", icon: s.Uy2 },
                                          action: () => D.A.open(i.id, P.BEX.ANALYTICS),
                                      })
                                    : null,
                                V
                                    ? (0, t.jsxs)(t.Fragment, {
                                          children: [
                                              (0, t.jsx)(s.Drp, {
                                                  id: "create-channel",
                                                  label: S.intl.string(S.t["fUYU+j"]),
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
                                                                  channelType: P.rbe.GUILD_TEXT,
                                                                  guildId: i.id,
                                                              });
                                                      }),
                                              }),
                                              (0, t.jsx)(s.Drp, {
                                                  id: "create-category",
                                                  label: S.intl.string(S.t["ISN+NM"]),
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
                                                                  channelType: P.rbe.GUILD_CATEGORY,
                                                                  guildId: i.id,
                                                              });
                                                      }),
                                              }),
                                          ],
                                      })
                                    : null,
                                Z,
                                et,
                                el,
                                Q,
                                er,
                            ],
                        }),
                        (0, t.jsxs)(s.rXV, {
                            children: [
                                en,
                                (0, t.jsx)(s.Drp, {
                                    id: "notifications",
                                    label: S.intl.string(S.t.h850Ss),
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
                                    label: S.intl.string(S.t.BayiAo),
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
                                q,
                                (0, t.jsx)(s.sLh, {
                                    id: "hide-muted-channels",
                                    label: S.intl.string(S.t.UwOLJO),
                                    leadingAccessory: { type: "icon", icon: s.G3N },
                                    checked: F,
                                    action: () => c.A.toggleCollapseGuild(i.id),
                                }),
                            ],
                        }),
                        (0, t.jsxs)(s.rXV, {
                            children: [
                                ea,
                                R && i.features.has(P.GuildFeatures.COMMUNITY)
                                    ? (0, t.jsx)(s.Drp, {
                                          id: "report-raid",
                                          label: S.intl.string(S.t.cswId3),
                                          icon: s.lmn,
                                          leadingAccessory: { type: "icon", icon: s.lmn },
                                          color: "danger",
                                          action: () => (0, h.M)(i.id),
                                      })
                                    : null,
                                J
                                    ? null
                                    : (0, t.jsx)(s.Drp, {
                                          id: "leave",
                                          label: S.intl.string(S.t.J2TBi3),
                                          icon: s.oLl,
                                          leadingAccessory: { type: "icon", icon: s.oLl },
                                          color: "danger",
                                          action: ec,
                                      }),
                            ],
                        }),
                    ],
                });
});
