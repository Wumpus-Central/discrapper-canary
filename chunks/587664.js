n.d(e, { default: () => id });
var l = n(627968),
    t = n(64700),
    a = n(284009),
    d = n.n(a),
    s = n(17928),
    o = n(22231),
    r = n(192308),
    c = n(550079),
    u = n(477782),
    g = n(70688),
    y = n(625903),
    p = n(231483),
    A = n(104510),
    h = n(555704),
    x = n(245604),
    b = n(234020),
    f = n(782603),
    j = n(952270),
    v = n(686449),
    I = n(293260),
    D = n(649308),
    m = n(735438),
    G = n.n(m),
    L = n(534890),
    w = n(970278),
    E = n(406704),
    U = n(985018),
    M = n(323384),
    _ = n(837057),
    T = n(310419),
    C = n(488995),
    H = n(346247),
    N = n(810263),
    P = n(214947);
let k = (0, n(945810).mj)({
    name: "2026-01-friends-in-server",
    kind: "user",
    defaultConfig: { guildFriendsEnabled: !1 },
    variations: { 1: { guildFriendsEnabled: !0 } },
});
var O = n(664967),
    S = n(531335),
    X = n(957316),
    F = n(974103),
    B = n(509536),
    W = n(359047),
    R = n(997509),
    z = n(595818),
    J = n(685073),
    Y = n(534400),
    V = n(857071),
    Z = n(36942),
    Q = n(260509),
    K = n(696451),
    $ = n(576705),
    q = n(543465),
    ii = n(287809),
    ie = n(954571),
    il = n(652215),
    it = n(349828),
    ia = n(661023);
let id = t.memo(function (i) {
    let e,
        a,
        { guild: m, onClose: id, onSelect: is } = i,
        io = (0, s.bG)([ii.default], () => ii.default.getCurrentUser());
    d()(null != io, "GuildHeaderPopout: user cannot be undefined"),
        t.useEffect(() => {
            ie.default.track(il.HAw.GUILD_DROPDOWN_MENU_VIEWED, { guild_id: m.id });
        });
    let ir = (0, s.bG)([q.Ay], () => q.Ay.isGuildCollapsed(m.id), [m.id]),
        {
            canAccessSettings: ic,
            canManageChannels: iu,
            showGuildAnalytics: ig,
        } = (0, s.cf)(
            [$.A],
            () => ({
                canAccessSettings: $.A.canAccessGuildSettings(m),
                canManageChannels: $.A.can(il.xBc.MANAGE_CHANNELS, m),
                showGuildAnalytics:
                    $.A.can(il.xBc.VIEW_GUILD_ANALYTICS, m) && m.features.has(il.GuildFeatures.COMMUNITY),
            }),
            [m],
        ),
        iy = (0, F.ic)(m),
        ip = (0, Q.bM)(m, io),
        iA = (0, s.bG)([V.A], () => V.A.isLurking(m.id), [m.id]),
        ih = (0, s.bG)([K.Ay], () => K.Ay.isCurrentUserGuest(m.id)),
        ix = (0, W.A)(m.id, !0),
        ib = (0, I.Ay)(m),
        ij = (0, S.A)({ source: il.PE1.GUILD_HEADER, guild: m }),
        iv = (0, H.A)({
            guildId: m.id,
            userId: io.id,
            analyticsLocation: { page: il.liQ.GUILD_CHANNEL, section: il.JJy.GUILD_DROPDOWN_MENU },
            icon: o.R,
        }),
        iI = m.features.has(il.GuildFeatures.HUB),
        iD = m.id === it.Vc,
        im = m.id === il.gNP,
        iG = (0, Z.A)(m.id, !0),
        iL =
            ((e = (0, E.H_)(m)),
            (a = (0, s.bG)([w.A], () => !G().isEmpty(w.A.getThreadsForGuild(m.id)))),
            e && a
                ? (0, l.jsx)(u.Dr, {
                      id: "active-threads",
                      label: U.intl.string(U.t.TM6err),
                      icon: L.o,
                      leadingAccessory: { type: "icon", icon: L.o },
                      action: () => {
                          (0, r.openModalLazy)(async () => {
                              let { default: i } = await n.e("92596").then(n.bind(n, 400954));
                              return (e) => (0, l.jsx)(i, { guildId: m.id, ...e });
                          });
                      },
                  })
                : null),
        iw = (0, l.jsx)(u.Dr, {
            id: "application-directory",
            label: U.intl.string(U.t.AKcFUj),
            icon: M.k,
            leadingAccessory: { type: "icon", icon: M.k },
            action: () => {
                (0, _.transitionToGlobalDiscovery)({
                    tab: C.GlobalDiscoveryTab.APPS,
                    newSessionState: { entrypoint: { name: T.sW.GUILD_HEADER_POPOUT }, guildId: m.id },
                });
            },
        }),
        iE = (0, O.A)(m, !0),
        iU = (function (i) {
            let { guildFriendsEnabled: e } = k.useConfig({ location: "useFriendsItem" });
            return e
                ? (0, l.jsx)(u.Dr, {
                      id: "friends",
                      label: U.intl.string(U.t.kYxEcH),
                      icon: P.$,
                      leadingAccessory: { type: "icon", icon: P.$ },
                      action: () => {
                          (0, r.openModalLazy)(async () => {
                              let { default: e } = await n.e("42048").then(n.bind(n, 151203));
                              return (n) => (0, l.jsx)(e, { guild: i, ...n });
                          });
                      },
                  })
                : null;
        })(m),
        iM = (0, D.A)(),
        i_ = (0, N.A)(m, { showIcons: !0 }),
        iT = (0, J.Rg)(m) && (0, J.q0)(m),
        iC = t.useCallback(() => {
            (0, r.openModalLazy)(async () => {
                let { default: i } = await n.e("53485").then(n.bind(n, 20508));
                return (e) => (0, l.jsx)(i, { ...e, guild: m });
            });
        }, [m]);
    return iA || ih
        ? (0, l.jsxs)(c.W, {
              "data-menu-migrated-auto": !0,
              onSelect: is,
              navId: "guild-header-popout",
              variant: "fixed",
              onClose: id,
              "aria-label": U.intl.string(U.t.HpQykc),
              children: [
                  (0, l.jsx)(u.Dr, {
                      id: "leave-guild",
                      label: U.intl.string(U.t.J2TBi3),
                      icon: g.o,
                      leadingAccessory: { type: "icon", icon: g.o },
                      action: () => {
                          R.A.leaveGuild(m.id, !0);
                      },
                  }),
                  (0, l.jsx)(u.rX, { children: i_ }),
              ],
          })
        : iD
          ? (0, l.jsx)(c.W, {
                "data-menu-migrated-auto": !0,
                onSelect: is,
                navId: "favorites-header-popout",
                variant: "fixed",
                onClose: id,
                "aria-label": U.intl.string(U.t.HpQykc),
                children: (0, l.jsx)(u.rX, { children: iM }),
            })
          : iI
            ? (0, l.jsxs)(c.W, {
                  "data-menu-migrated": !0,
                  onSelect: is,
                  navId: "guild-header-popout",
                  variant: "fixed",
                  onClose: id,
                  "aria-label": U.intl.string(U.t.HpQykc),
                  children: [
                      (0, l.jsxs)(u.rX, {
                          children: [
                              ic
                                  ? (0, l.jsx)(u.Dr, {
                                        id: "settings",
                                        label: U.intl.string(U.t["154/bL"]),
                                        icon: y.Z,
                                        leadingAccessory: { type: "icon", icon: y.Z },
                                        action: () => {
                                            R.A.open(m.id, (0, z.x)());
                                        },
                                    })
                                  : null,
                              ij,
                              (0, l.jsx)(u.Dr, {
                                  id: "privacy",
                                  label: U.intl.string(U.t.BayiAo),
                                  icon: p.l,
                                  leadingAccessory: { type: "icon", icon: p.l },
                                  action: () =>
                                      (0, r.openModalLazy)(async () => {
                                          let { default: i } = await Promise.all([
                                              n.e("33098"),
                                              n.e("55595"),
                                              n.e("14901"),
                                          ]).then(n.bind(n, 522566));
                                          return (e) => (0, l.jsx)(i, { ...e, guild: m });
                                      }),
                              }),
                              iv,
                          ],
                      }),
                      ip
                          ? null
                          : (0, l.jsx)(u.rX, {
                                children: (0, l.jsx)(u.Dr, {
                                    id: "leave",
                                    label: U.intl.string(U.t.Dv8gFT),
                                    icon: g.o,
                                    leadingAccessory: { type: "icon", icon: g.o },
                                    color: "danger",
                                    action: iC,
                                }),
                            }),
                  ],
              })
            : im
              ? null
              : (0, l.jsxs)(c.W, {
                    "data-menu-needs-review": !0,
                    onSelect: is,
                    navId: "guild-header-popout",
                    variant: "fixed",
                    onClose: id,
                    "aria-label": U.intl.string(U.t.HpQykc),
                    children: [
                        (0, l.jsxs)(u.rX, {
                            children: [
                                (0, l.jsx)(u.Dr, {
                                    id: "premium-subscribe",
                                    label: U.intl.string(U.t.VJEVbu),
                                    icon: A._,
                                    leadingAccessory: { type: "icon", icon: A._ },
                                    action: () => {
                                        (0, B.K4)({ guildId: m.id, location: { section: il.JJy.GUILD_HEADER_POPOUT } });
                                    },
                                }),
                                iT &&
                                    (0, l.jsx)(u.Dr, {
                                        id: "guild-tag",
                                        label: U.intl.string(ia.default.mf2OwH),
                                        leadingAccessory: {
                                            type: "guildTag",
                                            element: (0, l.jsx)(Y.o9, {
                                                guildId: m.id,
                                                guildTag: m.profile.tag,
                                                guildBadge: m.profile.badge ?? void 0,
                                                inline: !1,
                                            }),
                                        },
                                        icon: (0, l.jsx)(Y.o9, {
                                            guildId: m.id,
                                            guildBadge: m.profile.badge,
                                            guildTag: m.profile.tag,
                                            inline: !1,
                                        }),
                                        action: () => {
                                            var i;
                                            return (
                                                (i = m.id),
                                                void (0, r.openModalLazy)(async () => {
                                                    let { default: e } = await Promise.all([
                                                        n.e("42749"),
                                                        n.e("95407"),
                                                    ]).then(n.bind(n, 404128));
                                                    return (n) => (0, l.jsx)(e, { guildId: i, ...n });
                                                })
                                            );
                                        },
                                    }),
                            ],
                        }),
                        (0, l.jsxs)(u.rX, {
                            children: [
                                ij,
                                ic
                                    ? (0, l.jsx)(u.Dr, {
                                          id: "settings",
                                          label: U.intl.string(U.t["154/bL"]),
                                          icon: y.Z,
                                          leadingAccessory: { type: "icon", icon: y.Z },
                                          action: () => {
                                              R.A.open(m.id, (0, z.x)());
                                          },
                                      })
                                    : null,
                                ig
                                    ? (0, l.jsx)(u.Dr, {
                                          id: "insights",
                                          label: U.intl.string(U.t["0wWfUG"]),
                                          icon: h.U,
                                          leadingAccessory: { type: "icon", icon: h.U },
                                          action: () => R.A.open(m.id, il.BEX.ANALYTICS),
                                      })
                                    : null,
                                iu
                                    ? (0, l.jsxs)(l.Fragment, {
                                          children: [
                                              (0, l.jsx)(u.Dr, {
                                                  id: "create-channel",
                                                  label: U.intl.string(U.t["fUYU+j"]),
                                                  icon: x.U,
                                                  leadingAccessory: { type: "icon", icon: x.U },
                                                  action: () =>
                                                      (0, r.openModalLazy)(async () => {
                                                          let { default: i } = await Promise.all([
                                                              n.e("9431"),
                                                              n.e("40988"),
                                                          ]).then(n.bind(n, 113194));
                                                          return (e) =>
                                                              (0, l.jsx)(i, {
                                                                  ...e,
                                                                  channelType: il.rbe.GUILD_TEXT,
                                                                  guildId: m.id,
                                                              });
                                                      }),
                                              }),
                                              (0, l.jsx)(u.Dr, {
                                                  id: "create-category",
                                                  label: U.intl.string(U.t["ISN+NM"]),
                                                  icon: b.Y,
                                                  leadingAccessory: { type: "icon", icon: b.Y },
                                                  action: () =>
                                                      (0, r.openModalLazy)(async () => {
                                                          let { default: i } = await Promise.all([
                                                              n.e("9431"),
                                                              n.e("40988"),
                                                          ]).then(n.bind(n, 113194));
                                                          return (e) =>
                                                              (0, l.jsx)(i, {
                                                                  ...e,
                                                                  channelType: il.rbe.GUILD_CATEGORY,
                                                                  guildId: m.id,
                                                              });
                                                      }),
                                              }),
                                          ],
                                      })
                                    : null,
                                ix,
                                iL,
                                iw,
                                ib,
                                iU,
                            ],
                        }),
                        (0, l.jsxs)(u.rX, {
                            children: [
                                iG,
                                (0, l.jsx)(u.Dr, {
                                    id: "notifications",
                                    label: U.intl.string(U.t.h850Ss),
                                    icon: f.X,
                                    leadingAccessory: { type: "icon", icon: f.X },
                                    action: () =>
                                        (0, r.openModalLazy)(async () => {
                                            let { default: i } = await Promise.all([n.e("30282"), n.e("50893")]).then(
                                                n.bind(n, 893605),
                                            );
                                            return (e) => (0, l.jsx)(i, { ...e, guildId: m.id });
                                        }),
                                }),
                                (0, l.jsx)(u.Dr, {
                                    id: "privacy",
                                    label: U.intl.string(U.t.BayiAo),
                                    icon: p.l,
                                    leadingAccessory: { type: "icon", icon: p.l },
                                    action: () =>
                                        (0, r.openModalLazy)(async () => {
                                            let { default: i } = await Promise.all([
                                                n.e("33098"),
                                                n.e("55595"),
                                                n.e("14901"),
                                            ]).then(n.bind(n, 522566));
                                            return (e) => (0, l.jsx)(i, { ...e, guild: m });
                                        }),
                                }),
                            ],
                        }),
                        (0, l.jsxs)(u.rX, {
                            children: [
                                iv,
                                (0, l.jsx)(u.sL, {
                                    id: "hide-muted-channels",
                                    label: U.intl.string(U.t.UwOLJO),
                                    leadingAccessory: { type: "icon", icon: j.G },
                                    checked: ir,
                                    action: () => v.A.toggleCollapseGuild(m.id),
                                }),
                            ],
                        }),
                        (0, l.jsxs)(u.rX, {
                            children: [
                                iE,
                                iy && m.features.has(il.GuildFeatures.COMMUNITY)
                                    ? (0, l.jsx)(u.Dr, {
                                          id: "report-raid",
                                          label: U.intl.string(U.t.cswId3),
                                          icon: p.l,
                                          leadingAccessory: { type: "icon", icon: p.l },
                                          color: "danger",
                                          action: () => (0, X.M)(m.id),
                                      })
                                    : null,
                                ip
                                    ? null
                                    : (0, l.jsx)(u.Dr, {
                                          id: "leave",
                                          label: U.intl.string(U.t.J2TBi3),
                                          icon: g.o,
                                          leadingAccessory: { type: "icon", icon: g.o },
                                          color: "danger",
                                          action: iC,
                                      }),
                            ],
                        }),
                        (0, l.jsx)(u.rX, { children: i_ }),
                    ],
                });
});
