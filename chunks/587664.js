n.d(i, { default: () => ec });
var l = n(627968),
    t = n(64700),
    a = n(284009),
    d = n.n(a),
    s = n(650809),
    o = n(17928),
    r = n(873298),
    c = n(22231),
    u = n(192308),
    g = n(980707),
    y = n(477782),
    p = n(70688),
    A = n(625903),
    b = n(231483),
    x = n(104510),
    h = n(555704),
    j = n(245604),
    f = n(234020),
    D = n(782603),
    I = n(952270),
    G = n(686449),
    L = n(293260),
    m = n(649308),
    U = n(735438),
    v = n.n(U),
    E = n(534890),
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
let S = (0, n(945810).mj)({
    name: "2026-01-friends-in-server",
    kind: "user",
    defaultConfig: { guildFriendsEnabled: !1 },
    variations: { 1: { guildFriendsEnabled: !0 } },
});
var X = n(664967),
    B = n(531335),
    F = n(957316),
    W = n(974103),
    z = n(509536),
    R = n(359047),
    Y = n(468689),
    J = n(595818),
    Q = n(685073),
    V = n(534400),
    Z = n(857071),
    K = n(36942),
    $ = n(47815),
    q = n(594061),
    ee = n(617617),
    ei = n(260509),
    en = n(696451),
    el = n(576705),
    et = n(543465),
    ea = n(287809),
    ed = n(174459),
    es = n(652215),
    eo = n(349828),
    er = n(661023);
let ec = t.memo(function (e) {
    let i,
        a,
        { guild: U, onClose: ec, onSelect: eu } = e,
        eg = (0, o.bG)([ea.default], () => ea.default.getCurrentUser());
    d()(null != eg, "GuildHeaderPopout: user cannot be undefined"),
        t.useEffect(() => {
            ed.default.track(es.HAw.GUILD_DROPDOWN_MENU_VIEWED, { guild_id: U.id });
        });
    let ey = (0, o.bG)([et.Ay], () => et.Ay.isGuildCollapsed(U.id), [U.id]),
        {
            canAccessSettings: ep,
            canManageChannels: eA,
            showGuildAnalytics: eb,
        } = (0, o.cf)(
            [el.A],
            () => ({
                canAccessSettings: el.A.canAccessGuildSettings(U),
                canManageChannels: el.A.can(es.xBc.MANAGE_CHANNELS, U),
                showGuildAnalytics:
                    el.A.can(es.xBc.VIEW_GUILD_ANALYTICS, U) && U.features.has(es.GuildFeatures.COMMUNITY),
            }),
            [U],
        ),
        ex = (0, W.ic)(U),
        eh = (0, ei.bM)(U, eg),
        ej = (0, o.bG)([Z.A], () => Z.A.isLurking(U.id), [U.id]),
        ef = (0, o.bG)([en.Ay], () => en.Ay.isCurrentUserGuest(U.id)),
        eD = (0, R.A)(U.id, !0),
        eI = (0, L.Ay)(U),
        eG = (0, B.A)({ source: es.PE1.GUILD_HEADER, guild: U }),
        eL = (0, N.A)({
            guildId: U.id,
            userId: eg.id,
            analyticsLocation: { page: es.liQ.GUILD_CHANNEL, section: es.JJy.GUILD_DROPDOWN_MENU },
            icon: c.R,
        }),
        em = U.features.has(es.GuildFeatures.HUB),
        eU = U.id === eo.Vc,
        ev = U.id === es.gNP,
        eE = (0, K.A)(U.id, !0),
        eC =
            ((i = (0, P.H_)(U)),
            (a = (0, o.bG)([C.A], () => !v().isEmpty(C.A.getThreadsForGuild(U.id)))),
            i && a
                ? (0, l.jsx)(y.Dr, {
                      id: "active-threads",
                      label: T.intl.string(T.t.TM6err),
                      icon: E.o,
                      leadingAccessory: { type: "icon", icon: E.o },
                      action: () => {
                          (0, u.openModalLazy)(async () => {
                              let { default: e } = await Promise.all([
                                  n.e("74103"),
                                  n.e("40671"),
                                  n.e("30108"),
                                  n.e("76602"),
                                  n.e("28229"),
                                  n.e("39970"),
                                  n.e("72789"),
                                  n.e("65437"),
                                  n.e("90301"),
                                  n.e("51743"),
                                  n.e("92596"),
                              ]).then(n.bind(n, 400954));
                              return (i) => (0, l.jsx)(e, { guildId: U.id, ...i });
                          });
                      },
                  })
                : null),
        eP = (0, l.jsx)(y.Dr, {
            id: "application-directory",
            label: T.intl.string(T.t.AKcFUj),
            icon: _.k,
            leadingAccessory: { type: "icon", icon: _.k },
            action: () => {
                (0, M.transitionToGlobalDiscovery)({
                    tab: k.GlobalDiscoveryTab.APPS,
                    newSessionState: { entrypoint: { name: w.sW.GUILD_HEADER_POPOUT }, guildId: U.id },
                });
            },
        }),
        eT = (0, X.A)(U, !0),
        e_ = (function (e) {
            let { guildFriendsEnabled: i } = S.useConfig({ location: "useFriendsItem" });
            return i
                ? (0, l.jsx)(y.Dr, {
                      id: "friends",
                      label: T.intl.string(T.t.kYxEcH),
                      icon: O.$,
                      leadingAccessory: { type: "icon", icon: O.$ },
                      action: () => {
                          (0, u.openModalLazy)(async () => {
                              let { default: i } = await Promise.all([n.e("23077"), n.e("42048")]).then(
                                  n.bind(n, 151203),
                              );
                              return (n) => (0, l.jsx)(i, { guild: e, ...n });
                          });
                      },
                  })
                : null;
        })(U),
        eM = (0, m.A)(),
        ew = (0, $.A)(U.id, "GuildHeaderPopout"),
        ek = (0, o.bG)([ee.A], () => ee.A.resolveGuildThemeSourcePreference(U.id), [U.id]),
        eN = t.useCallback(() => {
            let e = ek === r.tI.GUILD ? r.tI.PERSONAL : r.tI.GUILD;
            (0, q.XW)(U.id, e);
        }, [U.id, ek]),
        eH = (0, H.A)(U, { showIcons: !0 }),
        eO = (0, Q.Rg)(U) && (0, Q.q0)(U),
        eS = t.useCallback(() => {
            (0, u.openModalLazy)(async () => {
                let { default: e } = await n.e("53485").then(n.bind(n, 20508));
                return (i) => (0, l.jsx)(e, { ...i, guild: U });
            });
        }, [U]);
    return ej || ef
        ? (0, l.jsxs)(g.W, {
              "data-menu-migrated-auto": !0,
              onSelect: eu,
              navId: "guild-header-popout",
              variant: "fixed",
              onClose: ec,
              "aria-label": T.intl.string(T.t.HpQykc),
              children: [
                  (0, l.jsx)(y.Dr, {
                      id: "leave-guild",
                      label: T.intl.string(T.t.J2TBi3),
                      icon: p.o,
                      leadingAccessory: { type: "icon", icon: p.o },
                      action: () => {
                          Y.A.leaveGuild(U.id, !0);
                      },
                  }),
                  (0, l.jsx)(y.rX, { children: eH }),
              ],
          })
        : eU
          ? (0, l.jsx)(g.W, {
                "data-menu-migrated-auto": !0,
                onSelect: eu,
                navId: "favorites-header-popout",
                variant: "fixed",
                onClose: ec,
                "aria-label": T.intl.string(T.t.HpQykc),
                children: (0, l.jsx)(y.rX, { children: eM }),
            })
          : em
            ? (0, l.jsxs)(g.W, {
                  "data-menu-migrated": !0,
                  onSelect: eu,
                  navId: "guild-header-popout",
                  variant: "fixed",
                  onClose: ec,
                  "aria-label": T.intl.string(T.t.HpQykc),
                  children: [
                      (0, l.jsxs)(y.rX, {
                          children: [
                              ep
                                  ? (0, l.jsx)(y.Dr, {
                                        id: "settings",
                                        label: T.intl.string(T.t["154/bL"]),
                                        icon: A.Z,
                                        leadingAccessory: { type: "icon", icon: A.Z },
                                        action: () => {
                                            Y.A.open(U.id, (0, J.x)());
                                        },
                                    })
                                  : null,
                              eG,
                              (0, l.jsx)(y.Dr, {
                                  id: "privacy",
                                  label: T.intl.string(T.t.BayiAo),
                                  icon: b.l,
                                  leadingAccessory: { type: "icon", icon: b.l },
                                  action: () =>
                                      (0, u.openModalLazy)(async () => {
                                          let { default: e } = await Promise.all([
                                              n.e("74389"),
                                              n.e("71145"),
                                              n.e("5871"),
                                              n.e("2199"),
                                              n.e("88767"),
                                              n.e("14093"),
                                              n.e("79743"),
                                          ]).then(n.bind(n, 79522));
                                          return (i) => (0, l.jsx)(e, { ...i, guild: U });
                                      }),
                              }),
                              eL,
                          ],
                      }),
                      eh
                          ? null
                          : (0, l.jsx)(y.rX, {
                                children: (0, l.jsx)(y.Dr, {
                                    id: "leave",
                                    label: T.intl.string(T.t.Dv8gFT),
                                    icon: p.o,
                                    leadingAccessory: { type: "icon", icon: p.o },
                                    color: "danger",
                                    action: eS,
                                }),
                            }),
                  ],
              })
            : ev
              ? null
              : (0, l.jsxs)(g.W, {
                    "data-menu-needs-review": !0,
                    onSelect: eu,
                    navId: "guild-header-popout",
                    variant: "fixed",
                    onClose: ec,
                    "aria-label": T.intl.string(T.t.HpQykc),
                    children: [
                        (0, l.jsxs)(y.rX, {
                            children: [
                                (0, l.jsx)(y.Dr, {
                                    id: "premium-subscribe",
                                    label: T.intl.string(T.t.VJEVbu),
                                    icon: x._,
                                    leadingAccessory: { type: "icon", icon: x._ },
                                    action: () => {
                                        (0, z.K4)({ guildId: U.id, location: { section: es.JJy.GUILD_HEADER_POPOUT } });
                                    },
                                }),
                                ew
                                    ? (0, l.jsx)(y.sL, {
                                          id: "use-server-theme",
                                          label: T.intl.string(T.t.CFzDOG),
                                          leadingAccessory: { type: "icon", icon: s.B },
                                          checked: ek === r.tI.GUILD,
                                          action: eN,
                                      })
                                    : null,
                                eO &&
                                    (0, l.jsx)(y.Dr, {
                                        id: "guild-tag",
                                        label: T.intl.string(er.default.mf2OwH),
                                        leadingAccessory: {
                                            type: "guildTag",
                                            element: (0, l.jsx)(V.o9, {
                                                guildId: U.id,
                                                guildTag: U.profile.tag,
                                                guildBadge: U.profile.badge ?? void 0,
                                                inline: !1,
                                            }),
                                        },
                                        icon: (0, l.jsx)(V.o9, {
                                            guildId: U.id,
                                            guildBadge: U.profile.badge,
                                            guildTag: U.profile.tag,
                                            inline: !1,
                                        }),
                                        action: () => {
                                            var e;
                                            return (
                                                (e = U.id),
                                                void (0, u.openModalLazy)(async () => {
                                                    let { default: i } = await Promise.all([
                                                        n.e("47459"),
                                                        n.e("79924"),
                                                        n.e("61830"),
                                                        n.e("75842"),
                                                        n.e("42749"),
                                                        n.e("44790"),
                                                        n.e("81785"),
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
                                eG,
                                ep
                                    ? (0, l.jsx)(y.Dr, {
                                          id: "settings",
                                          label: T.intl.string(T.t["154/bL"]),
                                          icon: A.Z,
                                          leadingAccessory: { type: "icon", icon: A.Z },
                                          action: () => {
                                              Y.A.open(U.id, (0, J.x)());
                                          },
                                      })
                                    : null,
                                eb
                                    ? (0, l.jsx)(y.Dr, {
                                          id: "insights",
                                          label: T.intl.string(T.t["0wWfUG"]),
                                          icon: h.U,
                                          leadingAccessory: { type: "icon", icon: h.U },
                                          action: () => Y.A.open(U.id, es.BEX.ANALYTICS),
                                      })
                                    : null,
                                eA
                                    ? (0, l.jsxs)(l.Fragment, {
                                          children: [
                                              (0, l.jsx)(y.Dr, {
                                                  id: "create-channel",
                                                  label: T.intl.string(T.t["fUYU+j"]),
                                                  icon: j.U,
                                                  leadingAccessory: { type: "icon", icon: j.U },
                                                  action: () =>
                                                      (0, u.openModalLazy)(async () => {
                                                          let { default: e } = await Promise.all([
                                                              n.e("80203"),
                                                              n.e("11585"),
                                                              n.e("3589"),
                                                              n.e("89916"),
                                                              n.e("60773"),
                                                              n.e("8018"),
                                                              n.e("20379"),
                                                              n.e("19193"),
                                                              n.e("7775"),
                                                              n.e("58608"),
                                                              n.e("70195"),
                                                          ]).then(n.bind(n, 946430));
                                                          return (i) =>
                                                              (0, l.jsx)(e, {
                                                                  ...i,
                                                                  channelType: es.rbe.GUILD_TEXT,
                                                                  guildId: U.id,
                                                              });
                                                      }),
                                              }),
                                              (0, l.jsx)(y.Dr, {
                                                  id: "create-category",
                                                  label: T.intl.string(T.t["ISN+NM"]),
                                                  icon: f.Y,
                                                  leadingAccessory: { type: "icon", icon: f.Y },
                                                  action: () =>
                                                      (0, u.openModalLazy)(async () => {
                                                          let { default: e } = await Promise.all([
                                                              n.e("80203"),
                                                              n.e("11585"),
                                                              n.e("3589"),
                                                              n.e("89916"),
                                                              n.e("60773"),
                                                              n.e("8018"),
                                                              n.e("20379"),
                                                              n.e("19193"),
                                                              n.e("7775"),
                                                              n.e("58608"),
                                                              n.e("70195"),
                                                          ]).then(n.bind(n, 946430));
                                                          return (i) =>
                                                              (0, l.jsx)(e, {
                                                                  ...i,
                                                                  channelType: es.rbe.GUILD_CATEGORY,
                                                                  guildId: U.id,
                                                              });
                                                      }),
                                              }),
                                          ],
                                      })
                                    : null,
                                eD,
                                eC,
                                eP,
                                eI,
                                e_,
                            ],
                        }),
                        (0, l.jsxs)(y.rX, {
                            children: [
                                eE,
                                (0, l.jsx)(y.Dr, {
                                    id: "notifications",
                                    label: T.intl.string(T.t.h850Ss),
                                    icon: D.X,
                                    leadingAccessory: { type: "icon", icon: D.X },
                                    action: () =>
                                        (0, u.openModalLazy)(async () => {
                                            let { default: e } = await Promise.all([
                                                n.e("29690"),
                                                n.e("96527"),
                                                n.e("93855"),
                                                n.e("80203"),
                                                n.e("28367"),
                                                n.e("8555"),
                                                n.e("35321"),
                                                n.e("83952"),
                                                n.e("66580"),
                                                n.e("38601"),
                                                n.e("94529"),
                                                n.e("94832"),
                                                n.e("56814"),
                                                n.e("30282"),
                                            ]).then(n.bind(n, 893605));
                                            return (i) => (0, l.jsx)(e, { ...i, guildId: U.id });
                                        }),
                                }),
                                (0, l.jsx)(y.Dr, {
                                    id: "privacy",
                                    label: T.intl.string(T.t.BayiAo),
                                    icon: b.l,
                                    leadingAccessory: { type: "icon", icon: b.l },
                                    action: () =>
                                        (0, u.openModalLazy)(async () => {
                                            let { default: e } = await Promise.all([
                                                n.e("74389"),
                                                n.e("71145"),
                                                n.e("5871"),
                                                n.e("2199"),
                                                n.e("88767"),
                                                n.e("14093"),
                                                n.e("79743"),
                                            ]).then(n.bind(n, 79522));
                                            return (i) => (0, l.jsx)(e, { ...i, guild: U });
                                        }),
                                }),
                            ],
                        }),
                        (0, l.jsxs)(y.rX, {
                            children: [
                                eL,
                                (0, l.jsx)(y.sL, {
                                    id: "hide-muted-channels",
                                    label: T.intl.string(T.t.UwOLJO),
                                    leadingAccessory: { type: "icon", icon: I.G },
                                    checked: ey,
                                    action: () => G.A.toggleCollapseGuild(U.id),
                                }),
                            ],
                        }),
                        (0, l.jsxs)(y.rX, {
                            children: [
                                eT,
                                ex && U.features.has(es.GuildFeatures.COMMUNITY)
                                    ? (0, l.jsx)(y.Dr, {
                                          id: "report-raid",
                                          label: T.intl.string(T.t.cswId3),
                                          icon: b.l,
                                          leadingAccessory: { type: "icon", icon: b.l },
                                          color: "danger",
                                          action: () => (0, F.M)(U.id),
                                      })
                                    : null,
                                eh
                                    ? null
                                    : (0, l.jsx)(y.Dr, {
                                          id: "leave",
                                          label: T.intl.string(T.t.J2TBi3),
                                          icon: p.o,
                                          leadingAccessory: { type: "icon", icon: p.o },
                                          color: "danger",
                                          action: eS,
                                      }),
                            ],
                        }),
                        (0, l.jsx)(y.rX, { children: eH }),
                    ],
                });
});
