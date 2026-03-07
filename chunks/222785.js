n.d(i, { default: () => R });
var t = n(627968),
    l = n(64700),
    a = n(284009),
    r = n.n(a),
    d = n(311907),
    s = n(397927),
    c = n(686449),
    o = n(293260),
    u = n(226958),
    g = n(82770),
    A = n(346247),
    p = n(434352),
    y = n(664967),
    b = n(531335),
    f = n(957316),
    I = n(974103),
    h = n(509536),
    E = n(359047),
    x = n(997509),
    v = n(595818),
    G = n(685073),
    D = n(534400),
    j = n(647534),
    O = n(857071),
    M = n(36942),
    m = n(149280),
    L = n(260509),
    U = n(696451),
    N = n(576705),
    _ = n(543465),
    C = n(287809),
    P = n(954571),
    T = n(652215),
    S = n(349828),
    w = n(985018),
    H = n(814364);
let R = l.memo(function (e) {
    let { guild: i, onClose: a, onSelect: R } = e,
        k = (0, d.bG)([C.default], () => C.default.getCurrentUser());
    r()(null != k, "GuildHeaderPopout: user cannot be undefined"),
        l.useEffect(() => {
            P.default.track(T.HAw.GUILD_DROPDOWN_MENU_VIEWED, { guild_id: i.id });
        });
    let F = (0, d.bG)([_.Ay], () => _.Ay.isGuildCollapsed(i.id), [i.id]),
        {
            canAccessSettings: X,
            canManageChannels: B,
            showGuildAnalytics: J,
        } = (0, d.cf)(
            [N.A],
            () => ({
                canAccessSettings: N.A.canAccessGuildSettings(i),
                canManageChannels: N.A.can(T.xBc.MANAGE_CHANNELS, i),
                showGuildAnalytics: N.A.can(T.xBc.VIEW_GUILD_ANALYTICS, i) && i.features.has(T.GuildFeatures.COMMUNITY),
            }),
            [i],
        ),
        V = (0, I.ic)(i),
        W = (0, L.bM)(i, k),
        Y = (0, d.bG)([O.A], () => O.A.isLurking(i.id), [i.id]),
        K = (0, d.bG)([U.Ay], () => U.Ay.isCurrentUserGuest(i.id)),
        Q = (0, E.A)(i.id, !0),
        Z = (0, o.Ay)(i),
        $ = (0, b.A)({ source: T.PE1.GUILD_HEADER, guild: i }),
        q = (0, A.A)({
            guildId: i.id,
            userId: k.id,
            analyticsLocation: { page: T.liQ.GUILD_CHANNEL, section: T.JJy.GUILD_DROPDOWN_MENU },
            icon: s.R2l,
        }),
        z = i.features.has(T.GuildFeatures.HUB),
        ee = i.id === S.Vc,
        ei = i.id === T.gNP,
        en = (0, M.A)(i.id, !0),
        et = (0, u.A)(i),
        el = (0, g.A)(i),
        ea = (0, y.A)(i, !0),
        er = (0, p.A)(i),
        ed = (0, m.A)(i),
        es = (0, G.Rg)(i) && (0, G.q0)(i),
        ec = l.useCallback(() => {
            (0, s.mMO)(async () => {
                let { default: e } = await n.e("53485").then(n.bind(n, 798127));
                return (n) => (0, t.jsx)(e, { ...n, guild: i });
            });
        }, [i]);
    return Y || K
        ? (0, t.jsx)(s.W1t, {
              "data-menu-migrated-auto": !0,
              onSelect: R,
              navId: "guild-header-popout",
              variant: "fixed",
              onClose: a,
              "aria-label": w.intl.string(w.t.HpQykc),
              children: (0, t.jsx)(s.Drp, {
                  id: "leave-guild",
                  label: w.intl.string(w.t.J2TBi3),
                  icon: s.oLl,
                  leadingAccessory: { type: "icon", icon: s.oLl },
                  action: () => {
                      x.A.leaveGuild(i.id, !0);
                  },
              }),
          })
        : ee
          ? (0, t.jsxs)(s.W1t, {
                "data-menu-migrated-auto": !0,
                onSelect: R,
                navId: "favorites-header-popout",
                variant: "fixed",
                onClose: a,
                "aria-label": w.intl.string(w.t.HpQykc),
                children: [
                    (0, t.jsxs)(s.rXV, {
                        children: [
                            !1,
                            (0, t.jsx)(s.Drp, {
                                id: "create-category",
                                label: w.intl.string(w.t["ISN+NM"]),
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
                            label: w.intl.string(w.t.UwOLJO),
                            checked: F,
                            action: () => c.A.toggleCollapseGuild(i.id),
                        }),
                    }),
                ],
            })
          : z
            ? (0, t.jsxs)(s.W1t, {
                  "data-menu-migrated": !0,
                  onSelect: R,
                  navId: "guild-header-popout",
                  variant: "fixed",
                  onClose: a,
                  "aria-label": w.intl.string(w.t.HpQykc),
                  children: [
                      (0, t.jsxs)(s.rXV, {
                          children: [
                              X
                                  ? (0, t.jsx)(s.Drp, {
                                        id: "settings",
                                        label: w.intl.string(w.t["154/bL"]),
                                        icon: ed ? s.vJI : s.Zes,
                                        leadingAccessory: { type: "icon", icon: ed ? s.vJI : s.Zes },
                                        action: () => {
                                            x.A.open(i.id, (0, v.x)());
                                        },
                                    })
                                  : null,
                              $,
                              (0, t.jsx)(s.Drp, {
                                  id: "privacy",
                                  label: w.intl.string(w.t.BayiAo),
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
                      W
                          ? null
                          : (0, t.jsx)(s.rXV, {
                                children: (0, t.jsx)(s.Drp, {
                                    id: "leave",
                                    label: w.intl.string(w.t.Dv8gFT),
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
                    onSelect: R,
                    navId: "guild-header-popout",
                    variant: "fixed",
                    onClose: a,
                    "aria-label": w.intl.string(w.t.HpQykc),
                    children: [
                        (0, t.jsxs)(s.rXV, {
                            children: [
                                (0, t.jsx)(s.Drp, {
                                    id: "premium-subscribe",
                                    label: w.intl.string(w.t.VJEVbu),
                                    icon: s._Jp,
                                    leadingAccessory: { type: "icon", icon: s._Jp },
                                    action: () => {
                                        (0, h.K)({ guildId: i.id, location: { section: T.JJy.GUILD_HEADER_POPOUT } });
                                    },
                                }),
                                es &&
                                    (0, t.jsx)(s.Drp, {
                                        id: "guild-tag",
                                        label: w.intl.string(H.default.mf2OwH),
                                        leadingAccessory: {
                                            type: "guildTag",
                                            element: (0, t.jsx)(D.o9, {
                                                guildId: i.id,
                                                guildTag: i.profile.tag,
                                                guildBadge: i.profile.badge ?? void 0,
                                                inline: !1,
                                            }),
                                        },
                                        icon: (0, t.jsx)(D.o9, {
                                            guildId: i.id,
                                            guildBadge: i.profile.badge,
                                            guildTag: i.profile.tag,
                                            inline: !1,
                                        }),
                                        action: () => (0, j.A)(i.id),
                                    }),
                            ],
                        }),
                        (0, t.jsxs)(s.rXV, {
                            children: [
                                $,
                                X
                                    ? (0, t.jsx)(s.Drp, {
                                          id: "settings",
                                          label: w.intl.string(w.t["154/bL"]),
                                          icon: ed ? s.vJI : s.Zes,
                                          leadingAccessory: { type: "icon", icon: ed ? s.vJI : s.Zes },
                                          action: () => {
                                              x.A.open(i.id, (0, v.x)());
                                          },
                                      })
                                    : null,
                                J
                                    ? (0, t.jsx)(s.Drp, {
                                          id: "insights",
                                          label: w.intl.string(w.t["0wWfUG"]),
                                          icon: s.Uy2,
                                          leadingAccessory: { type: "icon", icon: s.Uy2 },
                                          action: () => x.A.open(i.id, T.BEX.ANALYTICS),
                                      })
                                    : null,
                                B
                                    ? (0, t.jsxs)(t.Fragment, {
                                          children: [
                                              (0, t.jsx)(s.Drp, {
                                                  id: "create-channel",
                                                  label: w.intl.string(w.t["fUYU+j"]),
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
                                                                  channelType: T.rbe.GUILD_TEXT,
                                                                  guildId: i.id,
                                                              });
                                                      }),
                                              }),
                                              (0, t.jsx)(s.Drp, {
                                                  id: "create-category",
                                                  label: w.intl.string(w.t["ISN+NM"]),
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
                                                                  channelType: T.rbe.GUILD_CATEGORY,
                                                                  guildId: i.id,
                                                              });
                                                      }),
                                              }),
                                          ],
                                      })
                                    : null,
                                Q,
                                et,
                                el,
                                Z,
                                er,
                            ],
                        }),
                        (0, t.jsxs)(s.rXV, {
                            children: [
                                en,
                                (0, t.jsx)(s.Drp, {
                                    id: "notifications",
                                    label: w.intl.string(w.t.h850Ss),
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
                                    label: w.intl.string(w.t.BayiAo),
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
                                    label: w.intl.string(w.t.UwOLJO),
                                    leadingAccessory: { type: "icon", icon: s.G3N },
                                    checked: F,
                                    action: () => c.A.toggleCollapseGuild(i.id),
                                }),
                            ],
                        }),
                        (0, t.jsxs)(s.rXV, {
                            children: [
                                ea,
                                V && i.features.has(T.GuildFeatures.COMMUNITY)
                                    ? (0, t.jsx)(s.Drp, {
                                          id: "report-raid",
                                          label: w.intl.string(w.t.cswId3),
                                          icon: s.lmn,
                                          leadingAccessory: { type: "icon", icon: s.lmn },
                                          color: "danger",
                                          action: () => (0, f.M)(i.id),
                                      })
                                    : null,
                                W
                                    ? null
                                    : (0, t.jsx)(s.Drp, {
                                          id: "leave",
                                          label: w.intl.string(w.t.J2TBi3),
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
