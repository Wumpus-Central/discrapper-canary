n.d(i, { default: () => eu });
var l = n(477900),
    t = n(582128),
    a = n(284009),
    o = n.n(a),
    d = n(650809),
    c = n(17928),
    s = n(873298),
    r = n(22231),
    u = n(192308),
    g = n(980707),
    y = n(477782),
    p = n(70688),
    A = n(625903),
    I = n(231483),
    b = n(104510),
    h = n(555704),
    x = n(245604),
    D = n(234020),
    j = n(782603),
    f = n(952270),
    G = n(686449),
    L = n(293260),
    E = n(5180),
    v = n(564189),
    m = n(435558),
    U = n.n(m),
    S = n(534890),
    C = n(970278),
    P = n(406704),
    T = n(375708),
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
    z = n(974103),
    Y = n(906199),
    J = n(359047),
    R = n(468689),
    Q = n(595818),
    V = n(685073),
    K = n(534400),
    $ = n(857071),
    q = n(36942),
    Z = n(875317),
    ee = n(383272),
    ei = n(594061),
    en = n(617617),
    el = n(260509),
    et = n(696451),
    ea = n(576705),
    eo = n(543465),
    ed = n(287809),
    ec = n(174459),
    es = n(652215),
    er = n(811967);
let eu = t.memo(function (e) {
    var i, a;
    let m,
        eu,
        { guild: eg, onClose: ey, onSelect: ep } = e,
        eA = (0, c.bG)([ed.default], () => ed.default.getCurrentUser());
    o()(null != eA, "GuildHeaderPopout: user cannot be undefined"),
        t.useEffect(() => {
            ec.default.track(es.HAw.GUILD_DROPDOWN_MENU_VIEWED, { guild_id: eg.id });
        });
    let eI = (0, c.bG)([eo.Ay], () => eo.Ay.isGuildCollapsed(eg.id), [eg.id]),
        {
            canAccessSettings: eb,
            canManageChannels: eh,
            showGuildAnalytics: ex,
        } = (0, c.cf)(
            [ea.A],
            () => ({
                canAccessSettings: ea.A.canAccessGuildSettings(eg),
                canManageChannels: ea.A.can(es.xBc.MANAGE_CHANNELS, eg),
                showGuildAnalytics:
                    ea.A.can(es.xBc.VIEW_GUILD_ANALYTICS, eg) && eg.features.has(es.GuildFeatures.COMMUNITY),
            }),
            [eg],
        ),
        eD = (0, z.ic)(eg),
        ej = (0, el.bM)(eg, eA),
        ef = (0, c.bG)([$.A], () => $.A.isLurking(eg.id), [eg.id]),
        eG = (0, c.bG)([et.Ay], () => et.Ay.isCurrentUserGuest(eg.id)),
        eL = (0, J.A)(eg.id, !0),
        eE = (0, L.Ay)(eg),
        ev = (0, F.A)({ source: es.PE1.GUILD_HEADER, guild: eg }),
        em = (0, N.A)({
            guildId: eg.id,
            userId: eA.id,
            analyticsLocation: { page: es.liQ.GUILD_CHANNEL, section: es.JJy.GUILD_DROPDOWN_MENU },
            icon: r.PencilIcon,
        }),
        eU = eg.features.has(es.GuildFeatures.HUB),
        eS = (0, E.ai)(eg.id),
        eC = eg.id === es.gNP,
        eP = (0, q.A)(eg.id, !0),
        eT =
            ((m = (0, P.H_)(eg)),
            (eu = (0, c.bG)([C.A], () => !U().isEmpty(C.A.getThreadsForGuild(eg.id)))),
            m && eu
                ? (0, l.jsx)(y.Dr, {
                      id: "active-threads",
                      label: T.intl.string(T.t.TM6err),
                      icon: S.ChatIcon,
                      leadingAccessory: { type: "icon", icon: S.ChatIcon },
                      action: function () {
                          (0, u.openModalLazy)(async () => {
                              let { default: e } = await Promise.all([
                                  n.e("852197"),
                                  n.e("461815"),
                                  n.e("618416"),
                                  n.e("524434"),
                                  n.e("849162"),
                                  n.e("802598"),
                                  n.e("481647"),
                                  n.e("776602"),
                                  n.e("140402"),
                                  n.e("139970"),
                                  n.e("472789"),
                                  n.e("179049"),
                                  n.e("31267"),
                                  n.e("444567"),
                                  n.e("665927"),
                                  n.e("751743"),
                                  n.e("470215"),
                              ]).then(n.bind(n, 400954));
                              return (i) => (0, l.jsx)(e, { guildId: eg.id, ...i });
                          });
                      },
                  })
                : null),
        e_ = (0, l.jsx)(y.Dr, {
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
                ? (0, l.jsx)(y.Dr, {
                      id: "friends",
                      label: T.intl.string(T.t.kYxEcH),
                      icon: O.$,
                      leadingAccessory: { type: "icon", icon: O.$ },
                      action: function () {
                          (0, u.openModalLazy)(async () => {
                              let { default: i } = await Promise.all([n.e("673130"), n.e("542048")]).then(
                                  n.bind(n, 151203),
                              );
                              return (n) => (0, l.jsx)(i, { guild: e, ...n });
                          });
                      },
                  })
                : null;
        })(eg),
        ek = (0, v.A)(),
        eN = ((i = eg.id), (a = "GuildHeaderPopout"), (0, ee.DD)(i ?? void 0, a), null != (0, Z.Kb)(i, a)),
        eH = (0, c.bG)([en.A], () => en.A.resolveGuildThemeSourcePreference(eg.id), [eg.id]),
        eO = t.useCallback(() => {
            let e = eH === s.tI.GUILD ? s.tI.PERSONAL : s.tI.GUILD;
            (0, ei.XW)(eg.id, e);
        }, [eg.id, eH]),
        eB = (0, H.A)(eg, { showIcons: !0 }),
        eX = (0, V.Rg)(eg) && (0, V.q0)(eg),
        eF = t.useCallback(() => {
            (0, u.openModalLazy)(async () => {
                let { default: e } = await n.e("553485").then(n.bind(n, 20508));
                return (i) => (0, l.jsx)(e, { ...i, guild: eg });
            });
        }, [eg]);
    return ef || eG
        ? (0, l.jsxs)(g.W, {
              "data-menu-migrated-auto": !0,
              onSelect: ep,
              navId: "guild-header-popout",
              variant: "fixed",
              onClose: ey,
              "aria-label": T.intl.string(T.t.HpQykc),
              children: [
                  (0, l.jsx)(y.Dr, {
                      id: "leave-guild",
                      label: T.intl.string(T.t.J2TBi3),
                      icon: p.DoorExitIcon,
                      leadingAccessory: { type: "icon", icon: p.DoorExitIcon },
                      action: () => {
                          R.A.leaveGuild(eg.id, !0);
                      },
                  }),
                  (0, l.jsx)(y.rX, { children: eB }),
              ],
          })
        : eS
          ? (0, l.jsx)(g.W, {
                "data-menu-migrated-auto": !0,
                onSelect: ep,
                navId: "favorites-header-popout",
                variant: "fixed",
                onClose: ey,
                "aria-label": T.intl.string(T.t.HpQykc),
                children: ek,
            })
          : eU
            ? (0, l.jsxs)(g.W, {
                  "data-menu-migrated": !0,
                  onSelect: ep,
                  navId: "guild-header-popout",
                  variant: "fixed",
                  onClose: ey,
                  "aria-label": T.intl.string(T.t.HpQykc),
                  children: [
                      (0, l.jsxs)(y.rX, {
                          children: [
                              eb
                                  ? (0, l.jsx)(y.Dr, {
                                        id: "settings",
                                        label: T.intl.string(T.t["154/bL"]),
                                        icon: A.SettingsIcon,
                                        leadingAccessory: { type: "icon", icon: A.SettingsIcon },
                                        action: () => {
                                            R.A.open(eg.id, (0, Q.x)());
                                        },
                                    })
                                  : null,
                              ev,
                              (0, l.jsx)(y.Dr, {
                                  id: "privacy",
                                  label: T.intl.string(T.t.BayiAo),
                                  icon: I.ShieldIcon,
                                  leadingAccessory: { type: "icon", icon: I.ShieldIcon },
                                  action: () =>
                                      (0, u.openModalLazy)(async () => {
                                          let { default: e } = await Promise.all([
                                              n.e("684986"),
                                              n.e("705871"),
                                              n.e("407408"),
                                              n.e("49111"),
                                              n.e("43784"),
                                              n.e("303198"),
                                          ]).then(n.bind(n, 382573));
                                          return (i) => (0, l.jsx)(e, { ...i, guild: eg });
                                      }),
                              }),
                              em,
                          ],
                      }),
                      ej
                          ? null
                          : (0, l.jsx)(y.rX, {
                                children: (0, l.jsx)(y.Dr, {
                                    id: "leave",
                                    label: T.intl.string(T.t.Dv8gFT),
                                    icon: p.DoorExitIcon,
                                    leadingAccessory: { type: "icon", icon: p.DoorExitIcon },
                                    color: "danger",
                                    action: eF,
                                }),
                            }),
                  ],
              })
            : eC
              ? null
              : (0, l.jsxs)(g.W, {
                    "data-menu-needs-review": !0,
                    onSelect: ep,
                    navId: "guild-header-popout",
                    variant: "fixed",
                    onClose: ey,
                    "aria-label": T.intl.string(T.t.HpQykc),
                    children: [
                        (0, l.jsxs)(y.rX, {
                            children: [
                                (0, l.jsx)(y.Dr, {
                                    id: "premium-subscribe",
                                    label: T.intl.string(T.t.VJEVbu),
                                    icon: b._,
                                    leadingAccessory: { type: "icon", icon: b._ },
                                    action: () => {
                                        (0, Y.K4)({
                                            guildId: eg.id,
                                            location: { section: es.JJy.GUILD_HEADER_POPOUT },
                                        });
                                    },
                                }),
                                eN
                                    ? (0, l.jsx)(y.sL, {
                                          id: "use-server-theme",
                                          label: T.intl.string(T.t.CFzDOG),
                                          leadingAccessory: { type: "icon", icon: d.PaintPaletteIcon },
                                          checked: eH === s.tI.GUILD,
                                          action: eO,
                                      })
                                    : null,
                                eX &&
                                    (0, l.jsx)(y.Dr, {
                                        id: "guild-tag",
                                        label: T.intl.string(er.default.mf2OwH),
                                        leadingAccessory: {
                                            type: "guildTag",
                                            element: (0, l.jsx)(K.o9, {
                                                guildId: eg.id,
                                                guildTag: eg.profile.tag,
                                                guildBadge: eg.profile.badge ?? void 0,
                                                inline: !1,
                                            }),
                                        },
                                        icon: (0, l.jsx)(K.o9, {
                                            guildId: eg.id,
                                            guildBadge: eg.profile.badge,
                                            guildTag: eg.profile.tag,
                                            inline: !1,
                                        }),
                                        action: () => {
                                            var e;
                                            return (
                                                (e = eg.id),
                                                void (0, u.openModalLazy)(async () => {
                                                    let { default: i } = await Promise.all([
                                                        n.e("317615"),
                                                        n.e("180644"),
                                                        n.e("926018"),
                                                        n.e("107033"),
                                                        n.e("875842"),
                                                        n.e("242749"),
                                                        n.e("444790"),
                                                        n.e("881785"),
                                                    ]).then(n.bind(n, 404128));
                                                    return (n) => (0, l.jsx)(i, { guildId: e, ...n });
                                                })
                                            );
                                        },
                                    }),
                            ],
                        }),
                        (0, l.jsxs)(y.rX, {
                            children: [
                                ev,
                                eb
                                    ? (0, l.jsx)(y.Dr, {
                                          id: "settings",
                                          label: T.intl.string(T.t["154/bL"]),
                                          icon: A.SettingsIcon,
                                          leadingAccessory: { type: "icon", icon: A.SettingsIcon },
                                          action: () => {
                                              R.A.open(eg.id, (0, Q.x)());
                                          },
                                      })
                                    : null,
                                ex
                                    ? (0, l.jsx)(y.Dr, {
                                          id: "insights",
                                          label: T.intl.string(T.t["0wWfUG"]),
                                          icon: h.U,
                                          leadingAccessory: { type: "icon", icon: h.U },
                                          action: () => R.A.open(eg.id, es.BEX.ANALYTICS),
                                      })
                                    : null,
                                eh
                                    ? (0, l.jsxs)(l.Fragment, {
                                          children: [
                                              (0, l.jsx)(y.Dr, {
                                                  id: "create-channel",
                                                  label: T.intl.string(T.t["fUYU+j"]),
                                                  icon: x.U,
                                                  leadingAccessory: { type: "icon", icon: x.U },
                                                  action: () =>
                                                      (0, u.openModalLazy)(async () => {
                                                          let { default: e } = await Promise.all([
                                                              n.e("377476"),
                                                              n.e("766811"),
                                                              n.e("746309"),
                                                              n.e("778799"),
                                                              n.e("203589"),
                                                              n.e("692513"),
                                                              n.e("589916"),
                                                              n.e("460773"),
                                                              n.e("208018"),
                                                              n.e("120379"),
                                                              n.e("993199"),
                                                              n.e("819193"),
                                                              n.e("507775"),
                                                              n.e("358608"),
                                                              n.e("528034"),
                                                          ]).then(n.bind(n, 333369));
                                                          return (i) =>
                                                              (0, l.jsx)(e, {
                                                                  ...i,
                                                                  channelType: es.rbe.GUILD_TEXT,
                                                                  guildId: eg.id,
                                                              });
                                                      }),
                                              }),
                                              (0, l.jsx)(y.Dr, {
                                                  id: "create-category",
                                                  label: T.intl.string(T.t["ISN+NM"]),
                                                  icon: D.Y,
                                                  leadingAccessory: { type: "icon", icon: D.Y },
                                                  action: () =>
                                                      (0, u.openModalLazy)(async () => {
                                                          let { default: e } = await Promise.all([
                                                              n.e("377476"),
                                                              n.e("766811"),
                                                              n.e("746309"),
                                                              n.e("778799"),
                                                              n.e("203589"),
                                                              n.e("692513"),
                                                              n.e("589916"),
                                                              n.e("460773"),
                                                              n.e("208018"),
                                                              n.e("120379"),
                                                              n.e("993199"),
                                                              n.e("819193"),
                                                              n.e("507775"),
                                                              n.e("358608"),
                                                              n.e("528034"),
                                                          ]).then(n.bind(n, 333369));
                                                          return (i) =>
                                                              (0, l.jsx)(e, {
                                                                  ...i,
                                                                  channelType: es.rbe.GUILD_CATEGORY,
                                                                  guildId: eg.id,
                                                              });
                                                      }),
                                              }),
                                          ],
                                      })
                                    : null,
                                eL,
                                eT,
                                e_,
                                eE,
                                ew,
                            ],
                        }),
                        (0, l.jsxs)(y.rX, {
                            children: [
                                eP,
                                (0, l.jsx)(y.Dr, {
                                    id: "notifications",
                                    label: T.intl.string(T.t.h850Ss),
                                    icon: j.BellIcon,
                                    leadingAccessory: { type: "icon", icon: j.BellIcon },
                                    action: () =>
                                        (0, u.openModalLazy)(async () => {
                                            let { default: e } = await Promise.all([
                                                n.e("339072"),
                                                n.e("376991"),
                                                n.e("207998"),
                                                n.e("386655"),
                                                n.e("860350"),
                                                n.e("238417"),
                                                n.e("352032"),
                                                n.e("428367"),
                                                n.e("308555"),
                                                n.e("535321"),
                                                n.e("883952"),
                                                n.e("338601"),
                                                n.e("66580"),
                                                n.e("694529"),
                                                n.e("94832"),
                                                n.e("956814"),
                                                n.e("330282"),
                                            ]).then(n.bind(n, 893605));
                                            return (i) => (0, l.jsx)(e, { ...i, guildId: eg.id });
                                        }),
                                }),
                                (0, l.jsx)(y.Dr, {
                                    id: "privacy",
                                    label: T.intl.string(T.t.BayiAo),
                                    icon: I.ShieldIcon,
                                    leadingAccessory: { type: "icon", icon: I.ShieldIcon },
                                    action: () =>
                                        (0, u.openModalLazy)(async () => {
                                            let { default: e } = await Promise.all([
                                                n.e("684986"),
                                                n.e("705871"),
                                                n.e("407408"),
                                                n.e("49111"),
                                                n.e("43784"),
                                                n.e("303198"),
                                            ]).then(n.bind(n, 382573));
                                            return (i) => (0, l.jsx)(e, { ...i, guild: eg });
                                        }),
                                }),
                            ],
                        }),
                        (0, l.jsxs)(y.rX, {
                            children: [
                                em,
                                (0, l.jsx)(y.sL, {
                                    id: "hide-muted-channels",
                                    label: T.intl.string(T.t.UwOLJO),
                                    leadingAccessory: { type: "icon", icon: f.EyeSlashIcon },
                                    checked: eI,
                                    action: () => G.A.toggleCollapseGuild(eg.id),
                                }),
                            ],
                        }),
                        (0, l.jsxs)(y.rX, {
                            children: [
                                eM,
                                eD && eg.features.has(es.GuildFeatures.COMMUNITY)
                                    ? (0, l.jsx)(y.Dr, {
                                          id: "report-raid",
                                          label: T.intl.string(T.t.cswId3),
                                          icon: I.ShieldIcon,
                                          leadingAccessory: { type: "icon", icon: I.ShieldIcon },
                                          color: "danger",
                                          action: () => (0, W.M)(eg.id),
                                      })
                                    : null,
                                ej
                                    ? null
                                    : (0, l.jsx)(y.Dr, {
                                          id: "leave",
                                          label: T.intl.string(T.t.J2TBi3),
                                          icon: p.DoorExitIcon,
                                          leadingAccessory: { type: "icon", icon: p.DoorExitIcon },
                                          color: "danger",
                                          action: eF,
                                      }),
                            ],
                        }),
                        (0, l.jsx)(y.rX, { children: eB }),
                    ],
                });
});
