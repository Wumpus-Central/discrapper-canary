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
    z = n(85829),
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
        { guild: eg, onClose: ey, onSelect: ep } = e,
        eA = (0, o.bG)([ed.default], () => ed.default.getCurrentUser());
    d()(null != eA, "GuildHeaderPopout: user cannot be undefined"),
        t.useEffect(() => {
            es.default.track(eo.HAw.GUILD_DROPDOWN_MENU_VIEWED, { guild_id: eg.id });
        });
    let eb = (0, o.bG)([ea.Ay], () => ea.Ay.isGuildCollapsed(eg.id), [eg.id]),
        {
            canAccessSettings: ex,
            canManageChannels: eh,
            showGuildAnalytics: ej,
        } = (0, o.cf)(
            [et.A],
            () => ({
                canAccessSettings: et.A.canAccessGuildSettings(eg),
                canManageChannels: et.A.can(eo.xBc.MANAGE_CHANNELS, eg),
                showGuildAnalytics:
                    et.A.can(eo.xBc.VIEW_GUILD_ANALYTICS, eg) && eg.features.has(eo.GuildFeatures.COMMUNITY),
            }),
            [eg],
        ),
        eD = (0, W.ic)(eg),
        ef = (0, en.bM)(eg, eA),
        eI = (0, o.bG)([Z.A], () => Z.A.isLurking(eg.id), [eg.id]),
        eG = (0, o.bG)([el.Ay], () => el.Ay.isCurrentUserGuest(eg.id)),
        eL = (0, R.A)(eg.id, !0),
        ev = (0, L.Ay)(eg),
        em = (0, B.A)({ source: eo.PE1.GUILD_HEADER, guild: eg }),
        eU = (0, N.A)({
            guildId: eg.id,
            userId: eA.id,
            analyticsLocation: { page: eo.liQ.GUILD_CHANNEL, section: eo.JJy.GUILD_DROPDOWN_MENU },
            icon: c.R,
        }),
        eE = eg.features.has(eo.GuildFeatures.HUB),
        eC = eg.id === er.Vc,
        eP = eg.id === eo.gNP,
        eT = (0, K.A)(eg.id, !0),
        e_ =
            ((m = (0, P.H_)(eg)),
            (eu = (0, o.bG)([C.A], () => !U().isEmpty(C.A.getThreadsForGuild(eg.id)))),
            m && eu
                ? (0, l.jsx)(y.Dr, {
                      id: "active-threads",
                      label: T.intl.string(T.t.TM6err),
                      icon: E.o,
                      leadingAccessory: { type: "icon", icon: E.o },
                      action: () => {
                          (0, u.openModalLazy)(async () => {
                              let { default: e } = await Promise.all([
                                  n.e("44667"),
                                  n.e("37634"),
                                  n.e("21194"),
                                  n.e("62279"),
                                  n.e("42157"),
                                  n.e("14989"),
                                  n.e("81647"),
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
                              return (i) => (0, l.jsx)(e, { guildId: eg.id, ...i });
                          });
                      },
                  })
                : null),
        eM = (0, l.jsx)(y.Dr, {
            id: "application-directory",
            label: T.intl.string(T.t.AKcFUj),
            icon: _.k,
            leadingAccessory: { type: "icon", icon: _.k },
            action: () => {
                (0, M.transitionToGlobalDiscovery)({
                    tab: k.GlobalDiscoveryTab.APPS,
                    newSessionState: { entrypoint: { name: w.sW.GUILD_HEADER_POPOUT }, guildId: eg.id },
                });
            },
        }),
        ew = (0, X.A)(eg, !0),
        ek = (function (e) {
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
        })(eg),
        eN = (0, v.A)(),
        eH = ((i = eg.id), (a = "GuildHeaderPopout"), (0, q.DD)(i ?? void 0, a), null != (0, $.Kb)(i, a)),
        eO = (0, o.bG)([ei.A], () => ei.A.resolveGuildThemeSourcePreference(eg.id), [eg.id]),
        eS = t.useCallback(() => {
            let e = eO === r.tI.GUILD ? r.tI.PERSONAL : r.tI.GUILD;
            (0, ee.XW)(eg.id, e);
        }, [eg.id, eO]),
        eX = (0, H.A)(eg, { showIcons: !0 }),
        eB = (0, Q.Rg)(eg) && (0, Q.q0)(eg),
        eF = t.useCallback(() => {
            (0, u.openModalLazy)(async () => {
                let { default: e } = await n.e("53485").then(n.bind(n, 20508));
                return (i) => (0, l.jsx)(e, { ...i, guild: eg });
            });
        }, [eg]);
    return eI || eG
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
                      icon: p.o,
                      leadingAccessory: { type: "icon", icon: p.o },
                      action: () => {
                          Y.A.leaveGuild(eg.id, !0);
                      },
                  }),
                  (0, l.jsx)(y.rX, { children: eX }),
              ],
          })
        : eC
          ? (0, l.jsx)(g.W, {
                "data-menu-migrated-auto": !0,
                onSelect: ep,
                navId: "favorites-header-popout",
                variant: "fixed",
                onClose: ey,
                "aria-label": T.intl.string(T.t.HpQykc),
                children: (0, l.jsx)(y.rX, { children: eN }),
            })
          : eE
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
                              ex
                                  ? (0, l.jsx)(y.Dr, {
                                        id: "settings",
                                        label: T.intl.string(T.t["154/bL"]),
                                        icon: A.Z,
                                        leadingAccessory: { type: "icon", icon: A.Z },
                                        action: () => {
                                            Y.A.open(eg.id, (0, J.x)());
                                        },
                                    })
                                  : null,
                              em,
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
                                          return (i) => (0, l.jsx)(e, { ...i, guild: eg });
                                      }),
                              }),
                              eU,
                          ],
                      }),
                      ef
                          ? null
                          : (0, l.jsx)(y.rX, {
                                children: (0, l.jsx)(y.Dr, {
                                    id: "leave",
                                    label: T.intl.string(T.t.Dv8gFT),
                                    icon: p.o,
                                    leadingAccessory: { type: "icon", icon: p.o },
                                    color: "danger",
                                    action: eF,
                                }),
                            }),
                  ],
              })
            : eP
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
                                    icon: x._,
                                    leadingAccessory: { type: "icon", icon: x._ },
                                    action: () => {
                                        (0, z.K4)({
                                            guildId: eg.id,
                                            location: { section: eo.JJy.GUILD_HEADER_POPOUT },
                                        });
                                    },
                                }),
                                eH
                                    ? (0, l.jsx)(y.sL, {
                                          id: "use-server-theme",
                                          label: T.intl.string(T.t.CFzDOG),
                                          leadingAccessory: { type: "icon", icon: s.B },
                                          checked: eO === r.tI.GUILD,
                                          action: eS,
                                      })
                                    : null,
                                eB &&
                                    (0, l.jsx)(y.Dr, {
                                        id: "guild-tag",
                                        label: T.intl.string(ec.default.mf2OwH),
                                        leadingAccessory: {
                                            type: "guildTag",
                                            element: (0, l.jsx)(V.o9, {
                                                guildId: eg.id,
                                                guildTag: eg.profile.tag,
                                                guildBadge: eg.profile.badge ?? void 0,
                                                inline: !1,
                                            }),
                                        },
                                        icon: (0, l.jsx)(V.o9, {
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
                                                        n.e("33174"),
                                                        n.e("23549"),
                                                        n.e("72328"),
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
                                em,
                                ex
                                    ? (0, l.jsx)(y.Dr, {
                                          id: "settings",
                                          label: T.intl.string(T.t["154/bL"]),
                                          icon: A.Z,
                                          leadingAccessory: { type: "icon", icon: A.Z },
                                          action: () => {
                                              Y.A.open(eg.id, (0, J.x)());
                                          },
                                      })
                                    : null,
                                ej
                                    ? (0, l.jsx)(y.Dr, {
                                          id: "insights",
                                          label: T.intl.string(T.t["0wWfUG"]),
                                          icon: h.U,
                                          leadingAccessory: { type: "icon", icon: h.U },
                                          action: () => Y.A.open(eg.id, eo.BEX.ANALYTICS),
                                      })
                                    : null,
                                eh
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
                                                              n.e("79086"),
                                                              n.e("67696"),
                                                              n.e("37398"),
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
                                                              n.e("79086"),
                                                              n.e("67696"),
                                                              n.e("37398"),
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
                                                                  guildId: eg.id,
                                                              });
                                                      }),
                                              }),
                                          ],
                                      })
                                    : null,
                                eL,
                                e_,
                                eM,
                                ev,
                                ek,
                            ],
                        }),
                        (0, l.jsxs)(y.rX, {
                            children: [
                                eT,
                                (0, l.jsx)(y.Dr, {
                                    id: "notifications",
                                    label: T.intl.string(T.t.h850Ss),
                                    icon: f.X,
                                    leadingAccessory: { type: "icon", icon: f.X },
                                    action: () =>
                                        (0, u.openModalLazy)(async () => {
                                            let { default: e } = await Promise.all([
                                                n.e("36592"),
                                                n.e("33973"),
                                                n.e("26543"),
                                                n.e("16227"),
                                                n.e("64379"),
                                                n.e("1772"),
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
                                            return (i) => (0, l.jsx)(e, { ...i, guildId: eg.id });
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
                                            return (i) => (0, l.jsx)(e, { ...i, guild: eg });
                                        }),
                                }),
                            ],
                        }),
                        (0, l.jsxs)(y.rX, {
                            children: [
                                eU,
                                (0, l.jsx)(y.sL, {
                                    id: "hide-muted-channels",
                                    label: T.intl.string(T.t.UwOLJO),
                                    leadingAccessory: { type: "icon", icon: I.G },
                                    checked: eb,
                                    action: () => G.A.toggleCollapseGuild(eg.id),
                                }),
                            ],
                        }),
                        (0, l.jsxs)(y.rX, {
                            children: [
                                ew,
                                eD && eg.features.has(eo.GuildFeatures.COMMUNITY)
                                    ? (0, l.jsx)(y.Dr, {
                                          id: "report-raid",
                                          label: T.intl.string(T.t.cswId3),
                                          icon: b.l,
                                          leadingAccessory: { type: "icon", icon: b.l },
                                          color: "danger",
                                          action: () => (0, F.M)(eg.id),
                                      })
                                    : null,
                                ef
                                    ? null
                                    : (0, l.jsx)(y.Dr, {
                                          id: "leave",
                                          label: T.intl.string(T.t.J2TBi3),
                                          icon: p.o,
                                          leadingAccessory: { type: "icon", icon: p.o },
                                          color: "danger",
                                          action: eF,
                                      }),
                            ],
                        }),
                        (0, l.jsx)(y.rX, { children: eX }),
                    ],
                });
});
