n.d(i, { default: () => eu });
var l = n(477900),
    t = n(582128),
    a = n(284009),
    c = n.n(a),
    o = n(650809),
    s = n(855986),
    d = n(873298),
    r = n(22231),
    u = n(192308),
    g = n(165862),
    I = n(477782),
    y = n(70688),
    A = n(625903),
    p = n(231483),
    b = n(104510),
    h = n(555704),
    x = n(245604),
    D = n(234020),
    j = n(782603),
    f = n(952270),
    m = n(686449),
    G = n(293260),
    E = n(5180),
    v = n(425912),
    P = n(435558),
    C = n.n(P),
    S = n(534890),
    U = n(970278),
    L = n(406704),
    T = n(792996),
    M = n(323384),
    w = n(837057),
    _ = n(310419),
    N = n(488995),
    k = n(346247),
    H = n(810263),
    O = n(214947);
let F = (0, n(945810).mj)({
    name: "2026-01-friends-in-server",
    kind: "user",
    defaultConfig: { guildFriendsEnabled: !1 },
    variations: { 1: { guildFriendsEnabled: !0 } },
});
var B = n(664967),
    X = n(531335),
    W = n(957316),
    J = n(974103),
    R = n(233824),
    Y = n(359047),
    Q = n(727419),
    V = n(595818),
    K = n(685073),
    q = n(534400),
    z = n(857071),
    Z = n(36942),
    $ = n(875317),
    ee = n(383272),
    ei = n(594061),
    en = n(617617),
    el = n(260509),
    et = n(696451),
    ea = n(576705),
    ec = n(543465),
    eo = n(287809),
    es = n(129230),
    ed = n(652215),
    er = n(242868);
let eu = t.memo(function (e) {
    var i, a;
    let P,
        eu,
        { guild: eg, onClose: eI, onSelect: ey } = e,
        eA = (0, s.bG)([eo.default], () => eo.default.getCurrentUser());
    (c()(null != eA, "GuildHeaderPopout: user cannot be undefined"),
        t.useEffect(() => {
            es.default.track(ed.HAw.GUILD_DROPDOWN_MENU_VIEWED, { guild_id: eg.id });
        }));
    let ep = (0, s.bG)([ec.Ay], () => ec.Ay.isGuildCollapsed(eg.id), [eg.id]),
        {
            canAccessSettings: eb,
            canManageChannels: eh,
            showGuildAnalytics: ex,
        } = (0, s.cf)(
            [ea.A],
            () => ({
                canAccessSettings: ea.A.canAccessGuildSettings(eg),
                canManageChannels: ea.A.can(ed.xBc.MANAGE_CHANNELS, eg),
                showGuildAnalytics:
                    ea.A.can(ed.xBc.VIEW_GUILD_ANALYTICS, eg) && eg.features.has(ed.GuildFeatures.COMMUNITY),
            }),
            [eg],
        ),
        eD = (0, J.ic)(eg),
        ej = (0, el.bM)(eg, eA),
        ef = (0, s.bG)([z.A], () => z.A.isLurking(eg.id), [eg.id]),
        em = (0, s.bG)([et.Ay], () => et.Ay.isCurrentUserGuest(eg.id)),
        eG = (0, Y.A)(eg.id, !0),
        eE = (0, G.Ay)(eg),
        ev = (0, X.A)({ source: ed.PE1.GUILD_HEADER, guild: eg }),
        eP = (0, k.A)({
            guildId: eg.id,
            userId: eA.id,
            analyticsLocation: { page: ed.liQ.GUILD_CHANNEL, section: ed.JJy.GUILD_DROPDOWN_MENU },
            icon: r.PencilIcon,
        }),
        eC = eg.features.has(ed.GuildFeatures.HUB),
        eS = (0, E.ai)(eg.id),
        eU = eg.id === ed.gNP,
        eL = (0, Z.A)(eg.id, !0),
        eT =
            ((P = (0, L.H_)(eg)),
            (eu = (0, s.bG)([U.A], () => !C().isEmpty(U.A.getThreadsForGuild(eg.id)))),
            P && eu
                ? (0, l.jsx)(I.Dr, {
                      id: "active-threads",
                      label: T.intl.string(T.t.TM6err),
                      icon: S.ChatIcon,
                      leadingAccessory: { type: "icon", icon: S.ChatIcon },
                      action: function () {
                          (0, u.mM)(async () => {
                              let { default: e } = await Promise.all([
                                  n.e(374962),
                                  n.e(592e3),
                                  n.e(524434),
                                  n.e(849162),
                                  n.e(927517),
                                  n.e(126437),
                                  n.e(481647),
                                  n.e(749248),
                                  n.e(704434),
                                  n.e(900361),
                                  n.e(139970),
                                  n.e(508371),
                                  n.e(179049),
                                  n.e(412743),
                                  n.e(294857),
                                  n.e(713567),
                                  n.e(444567),
                                  n.e(695170),
                                  n.e(25572),
                                  n.e(895851),
                                  n.e(470215),
                              ]).then(n.bind(n, 400954));
                              return (i) => (0, l.jsx)(e, { guildId: eg.id, ...i });
                          });
                      },
                  })
                : null),
        eM = (0, l.jsx)(I.Dr, {
            id: "application-directory",
            label: T.intl.string(T.t.AKcFUj),
            icon: M.AppsIcon,
            leadingAccessory: { type: "icon", icon: M.AppsIcon },
            action: function () {
                (0, w.transitionToGlobalDiscovery)({
                    tab: N.GlobalDiscoveryTab.APPS,
                    newSessionState: { entrypoint: { name: _.sW.GUILD_HEADER_POPOUT }, guildId: eg.id },
                });
            },
        }),
        ew = (0, B.A)(eg, !0),
        e_ = (function (e) {
            let { guildFriendsEnabled: i } = F.useConfig({ location: "useFriendsItem" });
            return i
                ? (0, l.jsx)(I.Dr, {
                      id: "friends",
                      label: T.intl.string(T.t.kYxEcH),
                      icon: O.FriendsIcon,
                      leadingAccessory: { type: "icon", icon: O.FriendsIcon },
                      action: function () {
                          (0, u.mM)(async () => {
                              let { default: i } = await Promise.all([n.e(673130), n.e(542048)]).then(
                                  n.bind(n, 151203),
                              );
                              return (n) => (0, l.jsx)(i, { guild: e, ...n });
                          });
                      },
                  })
                : null;
        })(eg),
        eN = (0, v.A)(),
        ek = ((i = eg.id), (a = "GuildHeaderPopout"), (0, ee.DD)(i ?? void 0, a), null != (0, $.Kb)(i, a)),
        eH = (0, s.bG)([en.A], () => en.A.resolveGuildThemeSourcePreference(eg.id), [eg.id]),
        eO = t.useCallback(() => {
            let e = eH === d.tI.GUILD ? d.tI.PERSONAL : d.tI.GUILD;
            (0, ei.XW)(eg.id, e);
        }, [eg.id, eH]),
        eF = (0, H.A)(eg, { showIcons: !0 }),
        eB = (0, K.Rg)(eg) && (0, K.q0)(eg),
        eX = t.useCallback(() => {
            (0, u.mM)(async () => {
                let { default: e } = await n.e(553485).then(n.bind(n, 20508));
                return (i) => (0, l.jsx)(e, { ...i, guild: eg });
            });
        }, [eg]);
    return ef || em
        ? (0, l.jsxs)(g.W, {
              "data-menu-migrated-auto": !0,
              onSelect: ey,
              navId: "guild-header-popout",
              variant: "fixed",
              onClose: eI,
              "aria-label": T.intl.string(T.t.HpQykc),
              children: [
                  (0, l.jsx)(I.Dr, {
                      id: "leave-guild",
                      label: T.intl.string(T.t.J2TBi3),
                      icon: y.DoorExitIcon,
                      leadingAccessory: { type: "icon", icon: y.DoorExitIcon },
                      action: () => {
                          Q.A.leaveGuild(eg.id, !0);
                      },
                  }),
                  (0, l.jsx)(I.rX, { children: eF }),
              ],
          })
        : eS
          ? (0, l.jsx)(g.W, {
                "data-menu-migrated-auto": !0,
                onSelect: ey,
                navId: "favorites-header-popout",
                variant: "fixed",
                onClose: eI,
                "aria-label": T.intl.string(T.t.HpQykc),
                children: eN,
            })
          : eC
            ? (0, l.jsxs)(g.W, {
                  "data-menu-migrated": !0,
                  onSelect: ey,
                  navId: "guild-header-popout",
                  variant: "fixed",
                  onClose: eI,
                  "aria-label": T.intl.string(T.t.HpQykc),
                  children: [
                      (0, l.jsxs)(I.rX, {
                          children: [
                              eb
                                  ? (0, l.jsx)(I.Dr, {
                                        id: "settings",
                                        label: T.intl.string(T.t["154/bL"]),
                                        icon: A.SettingsIcon,
                                        leadingAccessory: { type: "icon", icon: A.SettingsIcon },
                                        action: () => {
                                            Q.A.open(eg.id, (0, V.x)());
                                        },
                                    })
                                  : null,
                              ev,
                              (0, l.jsx)(I.Dr, {
                                  id: "privacy",
                                  label: T.intl.string(T.t.BayiAo),
                                  icon: p.ShieldIcon,
                                  leadingAccessory: { type: "icon", icon: p.ShieldIcon },
                                  action: () =>
                                      (0, u.mM)(async () => {
                                          let { default: e } = await Promise.all([
                                              n.e(684986),
                                              n.e(759174),
                                              n.e(705871),
                                              n.e(340346),
                                              n.e(523638),
                                              n.e(943534),
                                              n.e(767699),
                                              n.e(855979),
                                          ]).then(n.bind(n, 632038));
                                          return (i) => (0, l.jsx)(e, { ...i, guild: eg });
                                      }),
                              }),
                              eP,
                          ],
                      }),
                      ej
                          ? null
                          : (0, l.jsx)(I.rX, {
                                children: (0, l.jsx)(I.Dr, {
                                    id: "leave",
                                    label: T.intl.string(T.t.Dv8gFT),
                                    icon: y.DoorExitIcon,
                                    leadingAccessory: { type: "icon", icon: y.DoorExitIcon },
                                    color: "danger",
                                    action: eX,
                                }),
                            }),
                  ],
              })
            : eU
              ? null
              : (0, l.jsxs)(g.W, {
                    "data-menu-needs-review": !0,
                    onSelect: ey,
                    navId: "guild-header-popout",
                    variant: "fixed",
                    onClose: eI,
                    "aria-label": T.intl.string(T.t.HpQykc),
                    children: [
                        (0, l.jsxs)(I.rX, {
                            children: [
                                (0, l.jsx)(I.Dr, {
                                    id: "premium-subscribe",
                                    label: T.intl.string(T.t.VJEVbu),
                                    icon: b.BoostGemIcon,
                                    leadingAccessory: { type: "icon", icon: b.BoostGemIcon },
                                    action: () => {
                                        (0, R.K4)({
                                            guildId: eg.id,
                                            location: { section: ed.JJy.GUILD_HEADER_POPOUT },
                                        });
                                    },
                                }),
                                ek
                                    ? (0, l.jsx)(I.sL, {
                                          id: "use-server-theme",
                                          label: T.intl.string(T.t.CFzDOG),
                                          leadingAccessory: { type: "icon", icon: o.PaintPaletteIcon },
                                          checked: eH === d.tI.GUILD,
                                          action: eO,
                                      })
                                    : null,
                                eB &&
                                    (0, l.jsx)(I.Dr, {
                                        id: "guild-tag",
                                        label: T.intl.string(er.default.mf2OwH),
                                        leadingAccessory: {
                                            type: "guildTag",
                                            element: (0, l.jsx)(q.o9, {
                                                guildId: eg.id,
                                                guildTag: eg.profile.tag,
                                                guildBadge: eg.profile.badge ?? void 0,
                                                inline: !1,
                                            }),
                                        },
                                        icon: (0, l.jsx)(q.o9, {
                                            guildId: eg.id,
                                            guildBadge: eg.profile.badge,
                                            guildTag: eg.profile.tag,
                                            inline: !1,
                                        }),
                                        action: () => {
                                            var e;
                                            return (
                                                (e = eg.id),
                                                void (0, u.mM)(async () => {
                                                    let { default: i } = await Promise.all([
                                                        n.e(212037),
                                                        n.e(107033),
                                                        n.e(115368),
                                                        n.e(495748),
                                                        n.e(444790),
                                                        n.e(881785),
                                                    ]).then(n.bind(n, 404128));
                                                    return (n) => (0, l.jsx)(i, { guildId: e, ...n });
                                                })
                                            );
                                        },
                                    }),
                            ],
                        }),
                        (0, l.jsxs)(I.rX, {
                            children: [
                                ev,
                                eb
                                    ? (0, l.jsx)(I.Dr, {
                                          id: "settings",
                                          label: T.intl.string(T.t["154/bL"]),
                                          icon: A.SettingsIcon,
                                          leadingAccessory: { type: "icon", icon: A.SettingsIcon },
                                          action: () => {
                                              Q.A.open(eg.id, (0, V.x)());
                                          },
                                      })
                                    : null,
                                ex
                                    ? (0, l.jsx)(I.Dr, {
                                          id: "insights",
                                          label: T.intl.string(T.t["0wWfUG"]),
                                          icon: h.AnalyticsIcon,
                                          leadingAccessory: { type: "icon", icon: h.AnalyticsIcon },
                                          action: () => Q.A.open(eg.id, ed.BEX.ANALYTICS),
                                      })
                                    : null,
                                eh
                                    ? (0, l.jsxs)(l.Fragment, {
                                          children: [
                                              (0, l.jsx)(I.Dr, {
                                                  id: "create-channel",
                                                  label: T.intl.string(T.t["fUYU+j"]),
                                                  icon: x.CirclePlusIcon,
                                                  leadingAccessory: { type: "icon", icon: x.CirclePlusIcon },
                                                  action: () =>
                                                      (0, u.mM)(async () => {
                                                          let { default: e } = await Promise.all([
                                                              n.e(377476),
                                                              n.e(597622),
                                                              n.e(746309),
                                                              n.e(778799),
                                                              n.e(844780),
                                                              n.e(470068),
                                                              n.e(203589),
                                                              n.e(692513),
                                                              n.e(460773),
                                                              n.e(208018),
                                                              n.e(589916),
                                                              n.e(298107),
                                                              n.e(526778),
                                                              n.e(819193),
                                                              n.e(637038),
                                                              n.e(507775),
                                                              n.e(524521),
                                                              n.e(358608),
                                                              n.e(640317),
                                                          ]).then(n.bind(n, 410380));
                                                          return (i) =>
                                                              (0, l.jsx)(e, {
                                                                  ...i,
                                                                  channelType: ed.rbe.GUILD_TEXT,
                                                                  guildId: eg.id,
                                                              });
                                                      }),
                                              }),
                                              (0, l.jsx)(I.Dr, {
                                                  id: "create-category",
                                                  label: T.intl.string(T.t["ISN+NM"]),
                                                  icon: D.FolderPlusIcon,
                                                  leadingAccessory: { type: "icon", icon: D.FolderPlusIcon },
                                                  action: () =>
                                                      (0, u.mM)(async () => {
                                                          let { default: e } = await Promise.all([
                                                              n.e(377476),
                                                              n.e(597622),
                                                              n.e(746309),
                                                              n.e(778799),
                                                              n.e(844780),
                                                              n.e(470068),
                                                              n.e(203589),
                                                              n.e(692513),
                                                              n.e(460773),
                                                              n.e(208018),
                                                              n.e(589916),
                                                              n.e(298107),
                                                              n.e(526778),
                                                              n.e(819193),
                                                              n.e(637038),
                                                              n.e(507775),
                                                              n.e(524521),
                                                              n.e(358608),
                                                              n.e(640317),
                                                          ]).then(n.bind(n, 410380));
                                                          return (i) =>
                                                              (0, l.jsx)(e, {
                                                                  ...i,
                                                                  channelType: ed.rbe.GUILD_CATEGORY,
                                                                  guildId: eg.id,
                                                              });
                                                      }),
                                              }),
                                          ],
                                      })
                                    : null,
                                eG,
                                eT,
                                eM,
                                eE,
                                e_,
                            ],
                        }),
                        (0, l.jsxs)(I.rX, {
                            children: [
                                eL,
                                (0, l.jsx)(I.Dr, {
                                    id: "notifications",
                                    label: T.intl.string(T.t.h850Ss),
                                    icon: j.BellIcon,
                                    leadingAccessory: { type: "icon", icon: j.BellIcon },
                                    action: () =>
                                        (0, u.mM)(async () => {
                                            let { default: e } = await Promise.all([
                                                n.e(635958),
                                                n.e(207998),
                                                n.e(534266),
                                                n.e(308555),
                                                n.e(676156),
                                                n.e(848625),
                                                n.e(66580),
                                                n.e(694529),
                                                n.e(956814),
                                                n.e(652748),
                                            ]).then(n.bind(n, 131527));
                                            return (i) => (0, l.jsx)(e, { ...i, guildId: eg.id });
                                        }),
                                }),
                                (0, l.jsx)(I.Dr, {
                                    id: "privacy",
                                    label: T.intl.string(T.t.BayiAo),
                                    icon: p.ShieldIcon,
                                    leadingAccessory: { type: "icon", icon: p.ShieldIcon },
                                    action: () =>
                                        (0, u.mM)(async () => {
                                            let { default: e } = await Promise.all([
                                                n.e(684986),
                                                n.e(759174),
                                                n.e(705871),
                                                n.e(340346),
                                                n.e(523638),
                                                n.e(943534),
                                                n.e(767699),
                                                n.e(855979),
                                            ]).then(n.bind(n, 632038));
                                            return (i) => (0, l.jsx)(e, { ...i, guild: eg });
                                        }),
                                }),
                            ],
                        }),
                        (0, l.jsxs)(I.rX, {
                            children: [
                                eP,
                                (0, l.jsx)(I.sL, {
                                    id: "hide-muted-channels",
                                    label: T.intl.string(T.t.UwOLJO),
                                    leadingAccessory: { type: "icon", icon: f.EyeSlashIcon },
                                    checked: ep,
                                    action: () => m.A.toggleCollapseGuild(eg.id),
                                }),
                            ],
                        }),
                        (0, l.jsxs)(I.rX, {
                            children: [
                                ew,
                                eD && eg.features.has(ed.GuildFeatures.COMMUNITY)
                                    ? (0, l.jsx)(I.Dr, {
                                          id: "report-raid",
                                          label: T.intl.string(T.t.cswId3),
                                          icon: p.ShieldIcon,
                                          leadingAccessory: { type: "icon", icon: p.ShieldIcon },
                                          color: "danger",
                                          action: () => (0, W.M)(eg.id),
                                      })
                                    : null,
                                ej
                                    ? null
                                    : (0, l.jsx)(I.Dr, {
                                          id: "leave",
                                          label: T.intl.string(T.t.J2TBi3),
                                          icon: y.DoorExitIcon,
                                          leadingAccessory: { type: "icon", icon: y.DoorExitIcon },
                                          color: "danger",
                                          action: eX,
                                      }),
                            ],
                        }),
                        (0, l.jsx)(I.rX, { children: eF }),
                    ],
                });
});
