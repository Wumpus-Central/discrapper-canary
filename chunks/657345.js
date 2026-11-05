n.d(i, { default: () => eu });
var t = n(477900),
    l = n(582128),
    a = n(284009),
    c = n.n(a),
    o = n(650809),
    d = n(855986),
    s = n(873298),
    r = n(22231),
    u = n(192308),
    g = n(165862),
    y = n(477782),
    A = n(70688),
    I = n(625903),
    b = n(231483),
    h = n(104510),
    p = n(555704),
    x = n(245604),
    D = n(234020),
    j = n(782603),
    f = n(952270),
    m = n(686449),
    G = n(293260),
    E = n(5180),
    v = n(425912),
    U = n(435558),
    S = n.n(U),
    C = n(534890),
    P = n(970278),
    L = n(406704),
    T = n(792996),
    _ = n(323384),
    M = n(837057),
    w = n(310419),
    k = n(488995),
    N = n(346247),
    H = n(810263),
    O = n(214947);
let B = (0, n(945810).mj)({
    name: "2026-01-friends-in-server",
    kind: "user",
    defaultConfig: { guildFriendsEnabled: !1 },
    variations: { 1: { guildFriendsEnabled: !0 } },
});
var X = n(664967),
    F = n(531335),
    W = n(957316),
    Y = n(974103),
    J = n(233824),
    R = n(359047),
    Q = n(727419),
    V = n(595818),
    K = n(685073),
    $ = n(534400),
    q = n(857071),
    z = n(36942),
    Z = n(875317),
    ee = n(383272),
    ei = n(594061),
    en = n(617617),
    et = n(260509),
    el = n(696451),
    ea = n(576705),
    ec = n(543465),
    eo = n(287809),
    ed = n(129230),
    es = n(652215),
    er = n(242868);
let eu = l.memo(function (e) {
    var i, a;
    let U,
        eu,
        { guild: eg, onClose: ey, onSelect: eA } = e,
        eI = (0, d.bG)([eo.default], () => eo.default.getCurrentUser());
    (c()(null != eI, "GuildHeaderPopout: user cannot be undefined"),
        l.useEffect(() => {
            ed.default.track(es.HAw.GUILD_DROPDOWN_MENU_VIEWED, { guild_id: eg.id });
        }));
    let eb = (0, d.bG)([ec.Ay], () => ec.Ay.isGuildCollapsed(eg.id), [eg.id]),
        {
            canAccessSettings: eh,
            canManageChannels: ep,
            showGuildAnalytics: ex,
        } = (0, d.cf)(
            [ea.A],
            () => ({
                canAccessSettings: ea.A.canAccessGuildSettings(eg),
                canManageChannels: ea.A.can(es.xBc.MANAGE_CHANNELS, eg),
                showGuildAnalytics:
                    ea.A.can(es.xBc.VIEW_GUILD_ANALYTICS, eg) && eg.features.has(es.GuildFeatures.COMMUNITY),
            }),
            [eg],
        ),
        eD = (0, Y.ic)(eg),
        ej = (0, et.bM)(eg, eI),
        ef = (0, d.bG)([q.A], () => q.A.isLurking(eg.id), [eg.id]),
        em = (0, d.bG)([el.Ay], () => el.Ay.isCurrentUserGuest(eg.id)),
        eG = (0, R.A)(eg.id, !0),
        eE = (0, G.Ay)(eg),
        ev = (0, F.A)({ source: es.PE1.GUILD_HEADER, guild: eg }),
        eU = (0, N.A)({
            guildId: eg.id,
            userId: eI.id,
            analyticsLocation: { page: es.liQ.GUILD_CHANNEL, section: es.JJy.GUILD_DROPDOWN_MENU },
            icon: r.PencilIcon,
        }),
        eS = eg.features.has(es.GuildFeatures.HUB),
        eC = (0, E.ai)(eg.id),
        eP = eg.id === es.gNP,
        eL = (0, z.A)(eg.id, !0),
        eT =
            ((U = (0, L.H_)(eg)),
            (eu = (0, d.bG)([P.A], () => !S().isEmpty(P.A.getThreadsForGuild(eg.id)))),
            U && eu
                ? (0, t.jsx)(y.Dr, {
                      id: "active-threads",
                      label: T.intl.string(T.t.TM6err),
                      icon: C.ChatIcon,
                      leadingAccessory: { type: "icon", icon: C.ChatIcon },
                      action: function () {
                          (0, u.mM)(async () => {
                              let { default: e } = await Promise.all([
                                  n.e(374962),
                                  n.e(592e3),
                                  n.e(524434),
                                  n.e(849162),
                                  n.e(927517),
                                  n.e(481647),
                                  n.e(749248),
                                  n.e(704434),
                                  n.e(900361),
                                  n.e(139970),
                                  n.e(179049),
                                  n.e(294857),
                                  n.e(713567),
                                  n.e(444567),
                                  n.e(695170),
                                  n.e(25572),
                                  n.e(895851),
                                  n.e(470215),
                              ]).then(n.bind(n, 400954));
                              return (i) => (0, t.jsx)(e, { guildId: eg.id, ...i });
                          });
                      },
                  })
                : null),
        e_ = (0, t.jsx)(y.Dr, {
            id: "application-directory",
            label: T.intl.string(T.t.AKcFUj),
            icon: _.k,
            leadingAccessory: { type: "icon", icon: _.k },
            action: function () {
                (0, M.transitionToGlobalDiscovery)({
                    tab: k.GlobalDiscoveryTab.APPS,
                    newSessionState: { entrypoint: { name: w.sW.GUILD_HEADER_POPOUT }, guildId: eg.id },
                });
            },
        }),
        eM = (0, X.A)(eg, !0),
        ew = (function (e) {
            let { guildFriendsEnabled: i } = B.useConfig({ location: "useFriendsItem" });
            return i
                ? (0, t.jsx)(y.Dr, {
                      id: "friends",
                      label: T.intl.string(T.t.kYxEcH),
                      icon: O.$,
                      leadingAccessory: { type: "icon", icon: O.$ },
                      action: function () {
                          (0, u.mM)(async () => {
                              let { default: i } = await Promise.all([n.e(673130), n.e(542048)]).then(
                                  n.bind(n, 151203),
                              );
                              return (n) => (0, t.jsx)(i, { guild: e, ...n });
                          });
                      },
                  })
                : null;
        })(eg),
        ek = (0, v.A)(),
        eN = ((i = eg.id), (a = "GuildHeaderPopout"), (0, ee.DD)(i ?? void 0, a), null != (0, Z.Kb)(i, a)),
        eH = (0, d.bG)([en.A], () => en.A.resolveGuildThemeSourcePreference(eg.id), [eg.id]),
        eO = l.useCallback(() => {
            let e = eH === s.tI.GUILD ? s.tI.PERSONAL : s.tI.GUILD;
            (0, ei.XW)(eg.id, e);
        }, [eg.id, eH]),
        eB = (0, H.A)(eg, { showIcons: !0 }),
        eX = (0, K.Rg)(eg) && (0, K.q0)(eg),
        eF = l.useCallback(() => {
            (0, u.mM)(async () => {
                let { default: e } = await n.e(553485).then(n.bind(n, 20508));
                return (i) => (0, t.jsx)(e, { ...i, guild: eg });
            });
        }, [eg]);
    return ef || em
        ? (0, t.jsxs)(g.W, {
              "data-menu-migrated-auto": !0,
              onSelect: eA,
              navId: "guild-header-popout",
              variant: "fixed",
              onClose: ey,
              "aria-label": T.intl.string(T.t.HpQykc),
              children: [
                  (0, t.jsx)(y.Dr, {
                      id: "leave-guild",
                      label: T.intl.string(T.t.J2TBi3),
                      icon: A.DoorExitIcon,
                      leadingAccessory: { type: "icon", icon: A.DoorExitIcon },
                      action: () => {
                          Q.A.leaveGuild(eg.id, !0);
                      },
                  }),
                  (0, t.jsx)(y.rX, { children: eB }),
              ],
          })
        : eC
          ? (0, t.jsx)(g.W, {
                "data-menu-migrated-auto": !0,
                onSelect: eA,
                navId: "favorites-header-popout",
                variant: "fixed",
                onClose: ey,
                "aria-label": T.intl.string(T.t.HpQykc),
                children: ek,
            })
          : eS
            ? (0, t.jsxs)(g.W, {
                  "data-menu-migrated": !0,
                  onSelect: eA,
                  navId: "guild-header-popout",
                  variant: "fixed",
                  onClose: ey,
                  "aria-label": T.intl.string(T.t.HpQykc),
                  children: [
                      (0, t.jsxs)(y.rX, {
                          children: [
                              eh
                                  ? (0, t.jsx)(y.Dr, {
                                        id: "settings",
                                        label: T.intl.string(T.t["154/bL"]),
                                        icon: I.SettingsIcon,
                                        leadingAccessory: { type: "icon", icon: I.SettingsIcon },
                                        action: () => {
                                            Q.A.open(eg.id, (0, V.x)());
                                        },
                                    })
                                  : null,
                              ev,
                              (0, t.jsx)(y.Dr, {
                                  id: "privacy",
                                  label: T.intl.string(T.t.BayiAo),
                                  icon: b.ShieldIcon,
                                  leadingAccessory: { type: "icon", icon: b.ShieldIcon },
                                  action: () =>
                                      (0, u.mM)(async () => {
                                          let { default: e } = await Promise.all([
                                              n.e(684986),
                                              n.e(759174),
                                              n.e(705871),
                                              n.e(340346),
                                              n.e(523638),
                                              n.e(943534),
                                              n.e(43784),
                                              n.e(855979),
                                          ]).then(n.bind(n, 632038));
                                          return (i) => (0, t.jsx)(e, { ...i, guild: eg });
                                      }),
                              }),
                              eU,
                          ],
                      }),
                      ej
                          ? null
                          : (0, t.jsx)(y.rX, {
                                children: (0, t.jsx)(y.Dr, {
                                    id: "leave",
                                    label: T.intl.string(T.t.Dv8gFT),
                                    icon: A.DoorExitIcon,
                                    leadingAccessory: { type: "icon", icon: A.DoorExitIcon },
                                    color: "danger",
                                    action: eF,
                                }),
                            }),
                  ],
              })
            : eP
              ? null
              : (0, t.jsxs)(g.W, {
                    "data-menu-needs-review": !0,
                    onSelect: eA,
                    navId: "guild-header-popout",
                    variant: "fixed",
                    onClose: ey,
                    "aria-label": T.intl.string(T.t.HpQykc),
                    children: [
                        (0, t.jsxs)(y.rX, {
                            children: [
                                (0, t.jsx)(y.Dr, {
                                    id: "premium-subscribe",
                                    label: T.intl.string(T.t.VJEVbu),
                                    icon: h._,
                                    leadingAccessory: { type: "icon", icon: h._ },
                                    action: () => {
                                        (0, J.K4)({
                                            guildId: eg.id,
                                            location: { section: es.JJy.GUILD_HEADER_POPOUT },
                                        });
                                    },
                                }),
                                eN
                                    ? (0, t.jsx)(y.sL, {
                                          id: "use-server-theme",
                                          label: T.intl.string(T.t.CFzDOG),
                                          leadingAccessory: { type: "icon", icon: o.PaintPaletteIcon },
                                          checked: eH === s.tI.GUILD,
                                          action: eO,
                                      })
                                    : null,
                                eX &&
                                    (0, t.jsx)(y.Dr, {
                                        id: "guild-tag",
                                        label: T.intl.string(er.default.mf2OwH),
                                        leadingAccessory: {
                                            type: "guildTag",
                                            element: (0, t.jsx)($.o9, {
                                                guildId: eg.id,
                                                guildTag: eg.profile.tag,
                                                guildBadge: eg.profile.badge ?? void 0,
                                                inline: !1,
                                            }),
                                        },
                                        icon: (0, t.jsx)($.o9, {
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
                                                    return (n) => (0, t.jsx)(i, { guildId: e, ...n });
                                                })
                                            );
                                        },
                                    }),
                            ],
                        }),
                        (0, t.jsxs)(y.rX, {
                            children: [
                                ev,
                                eh
                                    ? (0, t.jsx)(y.Dr, {
                                          id: "settings",
                                          label: T.intl.string(T.t["154/bL"]),
                                          icon: I.SettingsIcon,
                                          leadingAccessory: { type: "icon", icon: I.SettingsIcon },
                                          action: () => {
                                              Q.A.open(eg.id, (0, V.x)());
                                          },
                                      })
                                    : null,
                                ex
                                    ? (0, t.jsx)(y.Dr, {
                                          id: "insights",
                                          label: T.intl.string(T.t["0wWfUG"]),
                                          icon: p.U,
                                          leadingAccessory: { type: "icon", icon: p.U },
                                          action: () => Q.A.open(eg.id, es.BEX.ANALYTICS),
                                      })
                                    : null,
                                ep
                                    ? (0, t.jsxs)(t.Fragment, {
                                          children: [
                                              (0, t.jsx)(y.Dr, {
                                                  id: "create-channel",
                                                  label: T.intl.string(T.t["fUYU+j"]),
                                                  icon: x.U,
                                                  leadingAccessory: { type: "icon", icon: x.U },
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
                                                              n.e(507775),
                                                              n.e(524521),
                                                              n.e(358608),
                                                              n.e(640317),
                                                          ]).then(n.bind(n, 410380));
                                                          return (i) =>
                                                              (0, t.jsx)(e, {
                                                                  ...i,
                                                                  channelType: es.rbe.GUILD_TEXT,
                                                                  guildId: eg.id,
                                                              });
                                                      }),
                                              }),
                                              (0, t.jsx)(y.Dr, {
                                                  id: "create-category",
                                                  label: T.intl.string(T.t["ISN+NM"]),
                                                  icon: D.Y,
                                                  leadingAccessory: { type: "icon", icon: D.Y },
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
                                                              n.e(507775),
                                                              n.e(524521),
                                                              n.e(358608),
                                                              n.e(640317),
                                                          ]).then(n.bind(n, 410380));
                                                          return (i) =>
                                                              (0, t.jsx)(e, {
                                                                  ...i,
                                                                  channelType: es.rbe.GUILD_CATEGORY,
                                                                  guildId: eg.id,
                                                              });
                                                      }),
                                              }),
                                          ],
                                      })
                                    : null,
                                eG,
                                eT,
                                e_,
                                eE,
                                ew,
                            ],
                        }),
                        (0, t.jsxs)(y.rX, {
                            children: [
                                eL,
                                (0, t.jsx)(y.Dr, {
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
                                            return (i) => (0, t.jsx)(e, { ...i, guildId: eg.id });
                                        }),
                                }),
                                (0, t.jsx)(y.Dr, {
                                    id: "privacy",
                                    label: T.intl.string(T.t.BayiAo),
                                    icon: b.ShieldIcon,
                                    leadingAccessory: { type: "icon", icon: b.ShieldIcon },
                                    action: () =>
                                        (0, u.mM)(async () => {
                                            let { default: e } = await Promise.all([
                                                n.e(684986),
                                                n.e(759174),
                                                n.e(705871),
                                                n.e(340346),
                                                n.e(523638),
                                                n.e(943534),
                                                n.e(43784),
                                                n.e(855979),
                                            ]).then(n.bind(n, 632038));
                                            return (i) => (0, t.jsx)(e, { ...i, guild: eg });
                                        }),
                                }),
                            ],
                        }),
                        (0, t.jsxs)(y.rX, {
                            children: [
                                eU,
                                (0, t.jsx)(y.sL, {
                                    id: "hide-muted-channels",
                                    label: T.intl.string(T.t.UwOLJO),
                                    leadingAccessory: { type: "icon", icon: f.EyeSlashIcon },
                                    checked: eb,
                                    action: () => m.A.toggleCollapseGuild(eg.id),
                                }),
                            ],
                        }),
                        (0, t.jsxs)(y.rX, {
                            children: [
                                eM,
                                eD && eg.features.has(es.GuildFeatures.COMMUNITY)
                                    ? (0, t.jsx)(y.Dr, {
                                          id: "report-raid",
                                          label: T.intl.string(T.t.cswId3),
                                          icon: b.ShieldIcon,
                                          leadingAccessory: { type: "icon", icon: b.ShieldIcon },
                                          color: "danger",
                                          action: () => (0, W.M)(eg.id),
                                      })
                                    : null,
                                ej
                                    ? null
                                    : (0, t.jsx)(y.Dr, {
                                          id: "leave",
                                          label: T.intl.string(T.t.J2TBi3),
                                          icon: A.DoorExitIcon,
                                          leadingAccessory: { type: "icon", icon: A.DoorExitIcon },
                                          color: "danger",
                                          action: eF,
                                      }),
                            ],
                        }),
                        (0, t.jsx)(y.rX, { children: eB }),
                    ],
                });
});
