n.d(i, { default: () => eu });
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
    D = n(234020),
    f = n(782603),
    I = n(952270),
    G = n(686449),
    L = n(293260),
    v = n(649308),
    m = n(735438),
    U = n.n(m),
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
    $ = n(875317),
    q = n(383272),
    ee = n(594061),
    ei = n(617617),
    en = n(260509),
    el = n(696451),
    et = n(576705),
    ea = n(543465),
    ed = n(287809),
    es = n(174459),
    eo = n(652215),
    er = n(349828),
    ec = n(661023);
let eu = t.memo(function (e) {
    var i, a;
    let m,
        eu,
        eg,
        ey,
        { guild: ep, onClose: eA, onSelect: eb } = e,
        ex = (0, o.bG)([ed.default], () => ed.default.getCurrentUser());
    d()(null != ex, "GuildHeaderPopout: user cannot be undefined"),
        t.useEffect(() => {
            es.default.track(eo.HAw.GUILD_DROPDOWN_MENU_VIEWED, { guild_id: ep.id });
        });
    let eh = (0, o.bG)([ea.Ay], () => ea.Ay.isGuildCollapsed(ep.id), [ep.id]),
        {
            canAccessSettings: ej,
            canManageChannels: eD,
            showGuildAnalytics: ef,
        } = (0, o.cf)(
            [et.A],
            () => ({
                canAccessSettings: et.A.canAccessGuildSettings(ep),
                canManageChannels: et.A.can(eo.xBc.MANAGE_CHANNELS, ep),
                showGuildAnalytics:
                    et.A.can(eo.xBc.VIEW_GUILD_ANALYTICS, ep) && ep.features.has(eo.GuildFeatures.COMMUNITY),
            }),
            [ep],
        ),
        eI = (0, W.ic)(ep),
        eG = (0, en.bM)(ep, ex),
        eL = (0, o.bG)([Z.A], () => Z.A.isLurking(ep.id), [ep.id]),
        ev = (0, o.bG)([el.Ay], () => el.Ay.isCurrentUserGuest(ep.id)),
        em = (0, R.A)(ep.id, !0),
        eU = (0, L.Ay)(ep),
        eE = (0, B.A)({ source: eo.PE1.GUILD_HEADER, guild: ep }),
        eC = (0, N.A)({
            guildId: ep.id,
            userId: ex.id,
            analyticsLocation: { page: eo.liQ.GUILD_CHANNEL, section: eo.JJy.GUILD_DROPDOWN_MENU },
            icon: c.R,
        }),
        eP = ep.features.has(eo.GuildFeatures.HUB),
        eT = ep.id === er.Vc,
        e_ = ep.id === eo.gNP,
        eM = (0, K.A)(ep.id, !0),
        ew =
            ((m = (0, P.H_)(ep)),
            (eu = (0, o.bG)([C.A], () => !U().isEmpty(C.A.getThreadsForGuild(ep.id)))),
            m && eu
                ? (0, l.jsx)(y.Dr, {
                      id: "active-threads",
                      label: T.intl.string(T.t.TM6err),
                      icon: E.o,
                      leadingAccessory: { type: "icon", icon: E.o },
                      action: () => {
                          (0, u.openModalLazy)(async () => {
                              let { default: e } = await Promise.all([
                                  n.e("52844"),
                                  n.e("8462"),
                                  n.e("9634"),
                                  n.e("59945"),
                                  n.e("93924"),
                                  n.e("76602"),
                                  n.e("40402"),
                                  n.e("39970"),
                                  n.e("72789"),
                                  n.e("79049"),
                                  n.e("65437"),
                                  n.e("44567"),
                                  n.e("1812"),
                                  n.e("51743"),
                                  n.e("92596"),
                              ]).then(n.bind(n, 400954));
                              return (i) => (0, l.jsx)(e, { guildId: ep.id, ...i });
                          });
                      },
                  })
                : null),
        ek = (0, l.jsx)(y.Dr, {
            id: "application-directory",
            label: T.intl.string(T.t.AKcFUj),
            icon: _.k,
            leadingAccessory: { type: "icon", icon: _.k },
            action: () => {
                (0, M.transitionToGlobalDiscovery)({
                    tab: k.GlobalDiscoveryTab.APPS,
                    newSessionState: { entrypoint: { name: w.sW.GUILD_HEADER_POPOUT }, guildId: ep.id },
                });
            },
        }),
        eN = (0, X.A)(ep, !0),
        eH = (function (e) {
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
        })(ep),
        eO = (0, v.A)(),
        eS =
            ((i = ep.id),
            (a = "GuildHeaderPopout"),
            (eg = (0, q.DD)(i ?? void 0, a)),
            (ey = (0, $.Kb)(i, a)),
            eg && null != ey),
        eX = (0, o.bG)([ei.A], () => ei.A.resolveGuildThemeSourcePreference(ep.id), [ep.id]),
        eB = t.useCallback(() => {
            let e = eX === r.tI.GUILD ? r.tI.PERSONAL : r.tI.GUILD;
            (0, ee.XW)(ep.id, e);
        }, [ep.id, eX]),
        eF = (0, H.A)(ep, { showIcons: !0 }),
        eW = (0, Q.Rg)(ep) && (0, Q.q0)(ep),
        ez = t.useCallback(() => {
            (0, u.openModalLazy)(async () => {
                let { default: e } = await n.e("53485").then(n.bind(n, 20508));
                return (i) => (0, l.jsx)(e, { ...i, guild: ep });
            });
        }, [ep]);
    return eL || ev
        ? (0, l.jsxs)(g.W, {
              "data-menu-migrated-auto": !0,
              onSelect: eb,
              navId: "guild-header-popout",
              variant: "fixed",
              onClose: eA,
              "aria-label": T.intl.string(T.t.HpQykc),
              children: [
                  (0, l.jsx)(y.Dr, {
                      id: "leave-guild",
                      label: T.intl.string(T.t.J2TBi3),
                      icon: p.o,
                      leadingAccessory: { type: "icon", icon: p.o },
                      action: () => {
                          Y.A.leaveGuild(ep.id, !0);
                      },
                  }),
                  (0, l.jsx)(y.rX, { children: eF }),
              ],
          })
        : eT
          ? (0, l.jsx)(g.W, {
                "data-menu-migrated-auto": !0,
                onSelect: eb,
                navId: "favorites-header-popout",
                variant: "fixed",
                onClose: eA,
                "aria-label": T.intl.string(T.t.HpQykc),
                children: (0, l.jsx)(y.rX, { children: eO }),
            })
          : eP
            ? (0, l.jsxs)(g.W, {
                  "data-menu-migrated": !0,
                  onSelect: eb,
                  navId: "guild-header-popout",
                  variant: "fixed",
                  onClose: eA,
                  "aria-label": T.intl.string(T.t.HpQykc),
                  children: [
                      (0, l.jsxs)(y.rX, {
                          children: [
                              ej
                                  ? (0, l.jsx)(y.Dr, {
                                        id: "settings",
                                        label: T.intl.string(T.t["154/bL"]),
                                        icon: A.Z,
                                        leadingAccessory: { type: "icon", icon: A.Z },
                                        action: () => {
                                            Y.A.open(ep.id, (0, J.x)());
                                        },
                                    })
                                  : null,
                              eE,
                              (0, l.jsx)(y.Dr, {
                                  id: "privacy",
                                  label: T.intl.string(T.t.BayiAo),
                                  icon: b.l,
                                  leadingAccessory: { type: "icon", icon: b.l },
                                  action: () =>
                                      (0, u.openModalLazy)(async () => {
                                          let { default: e } = await Promise.all([
                                              n.e("14898"),
                                              n.e("5871"),
                                              n.e("7408"),
                                              n.e("71492"),
                                              n.e("43784"),
                                              n.e("3198"),
                                          ]).then(n.bind(n, 382573));
                                          return (i) => (0, l.jsx)(e, { ...i, guild: ep });
                                      }),
                              }),
                              eC,
                          ],
                      }),
                      eG
                          ? null
                          : (0, l.jsx)(y.rX, {
                                children: (0, l.jsx)(y.Dr, {
                                    id: "leave",
                                    label: T.intl.string(T.t.Dv8gFT),
                                    icon: p.o,
                                    leadingAccessory: { type: "icon", icon: p.o },
                                    color: "danger",
                                    action: ez,
                                }),
                            }),
                  ],
              })
            : e_
              ? null
              : (0, l.jsxs)(g.W, {
                    "data-menu-needs-review": !0,
                    onSelect: eb,
                    navId: "guild-header-popout",
                    variant: "fixed",
                    onClose: eA,
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
                                        (0, z.K4)({
                                            guildId: ep.id,
                                            location: { section: eo.JJy.GUILD_HEADER_POPOUT },
                                        });
                                    },
                                }),
                                eS
                                    ? (0, l.jsx)(y.sL, {
                                          id: "use-server-theme",
                                          label: T.intl.string(T.t.CFzDOG),
                                          leadingAccessory: { type: "icon", icon: s.B },
                                          checked: eX === r.tI.GUILD,
                                          action: eB,
                                      })
                                    : null,
                                eW &&
                                    (0, l.jsx)(y.Dr, {
                                        id: "guild-tag",
                                        label: T.intl.string(ec.default.mf2OwH),
                                        leadingAccessory: {
                                            type: "guildTag",
                                            element: (0, l.jsx)(V.o9, {
                                                guildId: ep.id,
                                                guildTag: ep.profile.tag,
                                                guildBadge: ep.profile.badge ?? void 0,
                                                inline: !1,
                                            }),
                                        },
                                        icon: (0, l.jsx)(V.o9, {
                                            guildId: ep.id,
                                            guildBadge: ep.profile.badge,
                                            guildTag: ep.profile.tag,
                                            inline: !1,
                                        }),
                                        action: () => {
                                            var e;
                                            return (
                                                (e = ep.id),
                                                void (0, u.openModalLazy)(async () => {
                                                    let { default: i } = await Promise.all([
                                                        n.e("52844"),
                                                        n.e("51143"),
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
                                eE,
                                ej
                                    ? (0, l.jsx)(y.Dr, {
                                          id: "settings",
                                          label: T.intl.string(T.t["154/bL"]),
                                          icon: A.Z,
                                          leadingAccessory: { type: "icon", icon: A.Z },
                                          action: () => {
                                              Y.A.open(ep.id, (0, J.x)());
                                          },
                                      })
                                    : null,
                                ef
                                    ? (0, l.jsx)(y.Dr, {
                                          id: "insights",
                                          label: T.intl.string(T.t["0wWfUG"]),
                                          icon: h.U,
                                          leadingAccessory: { type: "icon", icon: h.U },
                                          action: () => Y.A.open(ep.id, eo.BEX.ANALYTICS),
                                      })
                                    : null,
                                eD
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
                                                              n.e("41104"),
                                                              n.e("57093"),
                                                              n.e("11585"),
                                                              n.e("3589"),
                                                              n.e("92513"),
                                                              n.e("89916"),
                                                              n.e("60773"),
                                                              n.e("8018"),
                                                              n.e("20379"),
                                                              n.e("19193"),
                                                              n.e("77487"),
                                                              n.e("7775"),
                                                              n.e("58608"),
                                                              n.e("28034"),
                                                          ]).then(n.bind(n, 333369));
                                                          return (i) =>
                                                              (0, l.jsx)(e, {
                                                                  ...i,
                                                                  channelType: eo.rbe.GUILD_TEXT,
                                                                  guildId: ep.id,
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
                                                              n.e("41104"),
                                                              n.e("57093"),
                                                              n.e("11585"),
                                                              n.e("3589"),
                                                              n.e("92513"),
                                                              n.e("89916"),
                                                              n.e("60773"),
                                                              n.e("8018"),
                                                              n.e("20379"),
                                                              n.e("19193"),
                                                              n.e("77487"),
                                                              n.e("7775"),
                                                              n.e("58608"),
                                                              n.e("28034"),
                                                          ]).then(n.bind(n, 333369));
                                                          return (i) =>
                                                              (0, l.jsx)(e, {
                                                                  ...i,
                                                                  channelType: eo.rbe.GUILD_CATEGORY,
                                                                  guildId: ep.id,
                                                              });
                                                      }),
                                              }),
                                          ],
                                      })
                                    : null,
                                em,
                                ew,
                                ek,
                                eU,
                                eH,
                            ],
                        }),
                        (0, l.jsxs)(y.rX, {
                            children: [
                                eM,
                                (0, l.jsx)(y.Dr, {
                                    id: "notifications",
                                    label: T.intl.string(T.t.h850Ss),
                                    icon: f.X,
                                    leadingAccessory: { type: "icon", icon: f.X },
                                    action: () =>
                                        (0, u.openModalLazy)(async () => {
                                            let { default: e } = await Promise.all([
                                                n.e("99795"),
                                                n.e("2677"),
                                                n.e("31573"),
                                                n.e("43775"),
                                                n.e("28367"),
                                                n.e("8555"),
                                                n.e("35321"),
                                                n.e("83952"),
                                                n.e("38601"),
                                                n.e("66580"),
                                                n.e("94529"),
                                                n.e("94832"),
                                                n.e("56814"),
                                                n.e("30282"),
                                            ]).then(n.bind(n, 893605));
                                            return (i) => (0, l.jsx)(e, { ...i, guildId: ep.id });
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
                                                n.e("14898"),
                                                n.e("5871"),
                                                n.e("7408"),
                                                n.e("71492"),
                                                n.e("43784"),
                                                n.e("3198"),
                                            ]).then(n.bind(n, 382573));
                                            return (i) => (0, l.jsx)(e, { ...i, guild: ep });
                                        }),
                                }),
                            ],
                        }),
                        (0, l.jsxs)(y.rX, {
                            children: [
                                eC,
                                (0, l.jsx)(y.sL, {
                                    id: "hide-muted-channels",
                                    label: T.intl.string(T.t.UwOLJO),
                                    leadingAccessory: { type: "icon", icon: I.G },
                                    checked: eh,
                                    action: () => G.A.toggleCollapseGuild(ep.id),
                                }),
                            ],
                        }),
                        (0, l.jsxs)(y.rX, {
                            children: [
                                eN,
                                eI && ep.features.has(eo.GuildFeatures.COMMUNITY)
                                    ? (0, l.jsx)(y.Dr, {
                                          id: "report-raid",
                                          label: T.intl.string(T.t.cswId3),
                                          icon: b.l,
                                          leadingAccessory: { type: "icon", icon: b.l },
                                          color: "danger",
                                          action: () => (0, F.M)(ep.id),
                                      })
                                    : null,
                                eG
                                    ? null
                                    : (0, l.jsx)(y.Dr, {
                                          id: "leave",
                                          label: T.intl.string(T.t.J2TBi3),
                                          icon: p.o,
                                          leadingAccessory: { type: "icon", icon: p.o },
                                          color: "danger",
                                          action: ez,
                                      }),
                            ],
                        }),
                        (0, l.jsx)(y.rX, { children: eF }),
                    ],
                });
});
