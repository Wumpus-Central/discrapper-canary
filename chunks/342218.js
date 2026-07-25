n.d(i, { default: () => eu });
var l = n(627968),
    t = n(64700),
    a = n(284009),
    d = n.n(a),
    s = n(650809),
    o = n(17928),
    c = n(873298),
    r = n(22231),
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
    v = n(5180),
    m = n(928646),
    U = n(435558),
    E = n.n(U),
    C = n(534890),
    P = n(970278),
    T = n(406704),
    _ = n(375708),
    M = n(323384),
    w = n(837057),
    k = n(310419),
    N = n(488995),
    H = n(346247),
    O = n(810263),
    S = n(214947);
let X = (0, n(945810).mj)({
    name: "2026-01-friends-in-server",
    kind: "user",
    defaultConfig: { guildFriendsEnabled: !1 },
    variations: { 1: { guildFriendsEnabled: !0 } },
});
var B = n(664967),
    F = n(531335),
    W = n(957316),
    z = n(974103),
    R = n(63152),
    Y = n(359047),
    J = n(468689),
    Q = n(595818),
    V = n(685073),
    Z = n(534400),
    K = n(857071),
    $ = n(36942),
    q = n(875317),
    ee = n(383272),
    ei = n(594061),
    en = n(617617),
    el = n(260509),
    et = n(696451),
    ea = n(576705),
    ed = n(543465),
    es = n(287809),
    eo = n(174459),
    ec = n(652215),
    er = n(661023);
let eu = t.memo(function (e) {
    var i, a;
    let U,
        eu,
        { guild: eg, onClose: ey, onSelect: ep } = e,
        eA = (0, o.bG)([es.default], () => es.default.getCurrentUser());
    d()(null != eA, "GuildHeaderPopout: user cannot be undefined"),
        t.useEffect(() => {
            eo.default.track(ec.HAw.GUILD_DROPDOWN_MENU_VIEWED, { guild_id: eg.id });
        });
    let eb = (0, o.bG)([ed.Ay], () => ed.Ay.isGuildCollapsed(eg.id), [eg.id]),
        {
            canAccessSettings: ex,
            canManageChannels: eh,
            showGuildAnalytics: ej,
        } = (0, o.cf)(
            [ea.A],
            () => ({
                canAccessSettings: ea.A.canAccessGuildSettings(eg),
                canManageChannels: ea.A.can(ec.xBc.MANAGE_CHANNELS, eg),
                showGuildAnalytics:
                    ea.A.can(ec.xBc.VIEW_GUILD_ANALYTICS, eg) && eg.features.has(ec.GuildFeatures.COMMUNITY),
            }),
            [eg],
        ),
        ef = (0, z.ic)(eg),
        eD = (0, el.bM)(eg, eA),
        eI = (0, o.bG)([K.A], () => K.A.isLurking(eg.id), [eg.id]),
        eG = (0, o.bG)([et.Ay], () => et.Ay.isCurrentUserGuest(eg.id)),
        eL = (0, Y.A)(eg.id, !0),
        ev = (0, L.Ay)(eg),
        em = (0, F.A)({ source: ec.PE1.GUILD_HEADER, guild: eg }),
        eU = (0, H.A)({
            guildId: eg.id,
            userId: eA.id,
            analyticsLocation: { page: ec.liQ.GUILD_CHANNEL, section: ec.JJy.GUILD_DROPDOWN_MENU },
            icon: r.R,
        }),
        eE = eg.features.has(ec.GuildFeatures.HUB),
        eC = (0, v.ai)(eg.id),
        eP = eg.id === ec.gNP,
        eT = (0, $.A)(eg.id, !0),
        e_ =
            ((U = (0, T.H_)(eg)),
            (eu = (0, o.bG)([P.A], () => !E().isEmpty(P.A.getThreadsForGuild(eg.id)))),
            U && eu
                ? (0, l.jsx)(y.Dr, {
                      id: "active-threads",
                      label: _.intl.string(_.t.TM6err),
                      icon: C.o,
                      leadingAccessory: { type: "icon", icon: C.o },
                      action: function () {
                          (0, u.openModalLazy)(async () => {
                              let { default: e } = await Promise.all([
                                  n.e("69977"),
                                  n.e("1248"),
                                  n.e("94149"),
                                  n.e("58921"),
                                  n.e("70469"),
                                  n.e("81647"),
                                  n.e("76602"),
                                  n.e("40402"),
                                  n.e("39970"),
                                  n.e("72789"),
                                  n.e("79049"),
                                  n.e("65437"),
                                  n.e("66948"),
                                  n.e("65927"),
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
            label: _.intl.string(_.t.AKcFUj),
            icon: M.k,
            leadingAccessory: { type: "icon", icon: M.k },
            action: function () {
                (0, w.transitionToGlobalDiscovery)({
                    tab: N.GlobalDiscoveryTab.APPS,
                    newSessionState: { entrypoint: { name: k.sW.GUILD_HEADER_POPOUT }, guildId: eg.id },
                });
            },
        }),
        ew = (0, B.A)(eg, !0),
        ek = (function (e) {
            let { guildFriendsEnabled: i } = X.useConfig({ location: "useFriendsItem" });
            return i
                ? (0, l.jsx)(y.Dr, {
                      id: "friends",
                      label: _.intl.string(_.t.kYxEcH),
                      icon: S.$,
                      leadingAccessory: { type: "icon", icon: S.$ },
                      action: function () {
                          (0, u.openModalLazy)(async () => {
                              let { default: i } = await Promise.all([n.e("6061"), n.e("42048")]).then(
                                  n.bind(n, 151203),
                              );
                              return (n) => (0, l.jsx)(i, { guild: e, ...n });
                          });
                      },
                  })
                : null;
        })(eg),
        eN = (0, m.A)(),
        eH = ((i = eg.id), (a = "GuildHeaderPopout"), (0, ee.DD)(i ?? void 0, a), null != (0, q.Kb)(i, a)),
        eO = (0, o.bG)([en.A], () => en.A.resolveGuildThemeSourcePreference(eg.id), [eg.id]),
        eS = t.useCallback(() => {
            let e = eO === c.tI.GUILD ? c.tI.PERSONAL : c.tI.GUILD;
            (0, ei.XW)(eg.id, e);
        }, [eg.id, eO]),
        eX = (0, O.A)(eg, { showIcons: !0 }),
        eB = (0, V.Rg)(eg) && (0, V.q0)(eg),
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
              "aria-label": _.intl.string(_.t.HpQykc),
              children: [
                  (0, l.jsx)(y.Dr, {
                      id: "leave-guild",
                      label: _.intl.string(_.t.J2TBi3),
                      icon: p.o,
                      leadingAccessory: { type: "icon", icon: p.o },
                      action: () => {
                          J.A.leaveGuild(eg.id, !0);
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
                "aria-label": _.intl.string(_.t.HpQykc),
                children: eN,
            })
          : eE
            ? (0, l.jsxs)(g.W, {
                  "data-menu-migrated": !0,
                  onSelect: ep,
                  navId: "guild-header-popout",
                  variant: "fixed",
                  onClose: ey,
                  "aria-label": _.intl.string(_.t.HpQykc),
                  children: [
                      (0, l.jsxs)(y.rX, {
                          children: [
                              ex
                                  ? (0, l.jsx)(y.Dr, {
                                        id: "settings",
                                        label: _.intl.string(_.t["154/bL"]),
                                        icon: A.Z,
                                        leadingAccessory: { type: "icon", icon: A.Z },
                                        action: () => {
                                            J.A.open(eg.id, (0, Q.x)());
                                        },
                                    })
                                  : null,
                              em,
                              (0, l.jsx)(y.Dr, {
                                  id: "privacy",
                                  label: _.intl.string(_.t.BayiAo),
                                  icon: b.l,
                                  leadingAccessory: { type: "icon", icon: b.l },
                                  action: () =>
                                      (0, u.openModalLazy)(async () => {
                                          let { default: e } = await Promise.all([
                                              n.e("63117"),
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
                      eD
                          ? null
                          : (0, l.jsx)(y.rX, {
                                children: (0, l.jsx)(y.Dr, {
                                    id: "leave",
                                    label: _.intl.string(_.t.Dv8gFT),
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
                    "aria-label": _.intl.string(_.t.HpQykc),
                    children: [
                        (0, l.jsxs)(y.rX, {
                            children: [
                                (0, l.jsx)(y.Dr, {
                                    id: "premium-subscribe",
                                    label: _.intl.string(_.t.VJEVbu),
                                    icon: x._,
                                    leadingAccessory: { type: "icon", icon: x._ },
                                    action: () => {
                                        (0, R.K4)({
                                            guildId: eg.id,
                                            location: { section: ec.JJy.GUILD_HEADER_POPOUT },
                                        });
                                    },
                                }),
                                eH
                                    ? (0, l.jsx)(y.sL, {
                                          id: "use-server-theme",
                                          label: _.intl.string(_.t.CFzDOG),
                                          leadingAccessory: { type: "icon", icon: s.B },
                                          checked: eO === c.tI.GUILD,
                                          action: eS,
                                      })
                                    : null,
                                eB &&
                                    (0, l.jsx)(y.Dr, {
                                        id: "guild-tag",
                                        label: _.intl.string(er.default.mf2OwH),
                                        leadingAccessory: {
                                            type: "guildTag",
                                            element: (0, l.jsx)(Z.o9, {
                                                guildId: eg.id,
                                                guildTag: eg.profile.tag,
                                                guildBadge: eg.profile.badge ?? void 0,
                                                inline: !1,
                                            }),
                                        },
                                        icon: (0, l.jsx)(Z.o9, {
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
                                                        n.e("49273"),
                                                        n.e("94373"),
                                                        n.e("14350"),
                                                        n.e("50638"),
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
                                          label: _.intl.string(_.t["154/bL"]),
                                          icon: A.Z,
                                          leadingAccessory: { type: "icon", icon: A.Z },
                                          action: () => {
                                              J.A.open(eg.id, (0, Q.x)());
                                          },
                                      })
                                    : null,
                                ej
                                    ? (0, l.jsx)(y.Dr, {
                                          id: "insights",
                                          label: _.intl.string(_.t["0wWfUG"]),
                                          icon: h.U,
                                          leadingAccessory: { type: "icon", icon: h.U },
                                          action: () => J.A.open(eg.id, ec.BEX.ANALYTICS),
                                      })
                                    : null,
                                eh
                                    ? (0, l.jsxs)(l.Fragment, {
                                          children: [
                                              (0, l.jsx)(y.Dr, {
                                                  id: "create-channel",
                                                  label: _.intl.string(_.t["fUYU+j"]),
                                                  icon: j.U,
                                                  leadingAccessory: { type: "icon", icon: j.U },
                                                  action: () =>
                                                      (0, u.openModalLazy)(async () => {
                                                          let { default: e } = await Promise.all([
                                                              n.e("98574"),
                                                              n.e("94629"),
                                                              n.e("99726"),
                                                              n.e("36865"),
                                                              n.e("3589"),
                                                              n.e("92513"),
                                                              n.e("89916"),
                                                              n.e("60773"),
                                                              n.e("8018"),
                                                              n.e("20379"),
                                                              n.e("77487"),
                                                              n.e("19193"),
                                                              n.e("7775"),
                                                              n.e("58608"),
                                                              n.e("28034"),
                                                          ]).then(n.bind(n, 333369));
                                                          return (i) =>
                                                              (0, l.jsx)(e, {
                                                                  ...i,
                                                                  channelType: ec.rbe.GUILD_TEXT,
                                                                  guildId: eg.id,
                                                              });
                                                      }),
                                              }),
                                              (0, l.jsx)(y.Dr, {
                                                  id: "create-category",
                                                  label: _.intl.string(_.t["ISN+NM"]),
                                                  icon: f.Y,
                                                  leadingAccessory: { type: "icon", icon: f.Y },
                                                  action: () =>
                                                      (0, u.openModalLazy)(async () => {
                                                          let { default: e } = await Promise.all([
                                                              n.e("98574"),
                                                              n.e("94629"),
                                                              n.e("99726"),
                                                              n.e("36865"),
                                                              n.e("3589"),
                                                              n.e("92513"),
                                                              n.e("89916"),
                                                              n.e("60773"),
                                                              n.e("8018"),
                                                              n.e("20379"),
                                                              n.e("77487"),
                                                              n.e("19193"),
                                                              n.e("7775"),
                                                              n.e("58608"),
                                                              n.e("28034"),
                                                          ]).then(n.bind(n, 333369));
                                                          return (i) =>
                                                              (0, l.jsx)(e, {
                                                                  ...i,
                                                                  channelType: ec.rbe.GUILD_CATEGORY,
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
                                    label: _.intl.string(_.t.h850Ss),
                                    icon: D.X,
                                    leadingAccessory: { type: "icon", icon: D.X },
                                    action: () =>
                                        (0, u.openModalLazy)(async () => {
                                            let { default: e } = await Promise.all([
                                                n.e("51872"),
                                                n.e("18698"),
                                                n.e("75091"),
                                                n.e("34129"),
                                                n.e("47899"),
                                                n.e("16123"),
                                                n.e("54220"),
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
                                    label: _.intl.string(_.t.BayiAo),
                                    icon: b.l,
                                    leadingAccessory: { type: "icon", icon: b.l },
                                    action: () =>
                                        (0, u.openModalLazy)(async () => {
                                            let { default: e } = await Promise.all([
                                                n.e("63117"),
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
                                    label: _.intl.string(_.t.UwOLJO),
                                    leadingAccessory: { type: "icon", icon: I.G },
                                    checked: eb,
                                    action: () => G.A.toggleCollapseGuild(eg.id),
                                }),
                            ],
                        }),
                        (0, l.jsxs)(y.rX, {
                            children: [
                                ew,
                                ef && eg.features.has(ec.GuildFeatures.COMMUNITY)
                                    ? (0, l.jsx)(y.Dr, {
                                          id: "report-raid",
                                          label: _.intl.string(_.t.cswId3),
                                          icon: b.l,
                                          leadingAccessory: { type: "icon", icon: b.l },
                                          color: "danger",
                                          action: () => (0, W.M)(eg.id),
                                      })
                                    : null,
                                eD
                                    ? null
                                    : (0, l.jsx)(y.Dr, {
                                          id: "leave",
                                          label: _.intl.string(_.t.J2TBi3),
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
