n.d(i, { default: () => et });
var l = n(627968),
    a = n(64700),
    t = n(284009),
    d = n.n(t),
    s = n(17928),
    o = n(22231),
    r = n(192308),
    c = n(550079),
    u = n(477782),
    g = n(70688),
    y = n(625903),
    p = n(231483),
    A = n(104510),
    b = n(555704),
    x = n(245604),
    h = n(234020),
    j = n(782603),
    f = n(952270),
    D = n(686449),
    I = n(293260),
    G = n(649308),
    m = n(735438),
    L = n.n(m),
    v = n(534890),
    U = n(970278),
    E = n(406704),
    _ = n(985018),
    C = n(323384),
    M = n(837057),
    T = n(310419),
    w = n(488995),
    P = n(346247),
    k = n(810263),
    N = n(214947);
let H = (0, n(945810).mj)({
    name: "2026-01-friends-in-server",
    kind: "user",
    defaultConfig: { guildFriendsEnabled: !1 },
    variations: { 1: { guildFriendsEnabled: !0 } },
});
var O = n(664967),
    S = n(531335),
    X = n(957316),
    B = n(974103),
    F = n(509536),
    W = n(359047),
    z = n(997509),
    Y = n(595818),
    J = n(685073),
    R = n(534400),
    Q = n(857071),
    V = n(36942),
    Z = n(260509),
    K = n(696451),
    $ = n(576705),
    q = n(543465),
    ee = n(287809),
    ei = n(954571),
    en = n(652215),
    el = n(349828),
    ea = n(661023);
let et = a.memo(function (e) {
    let i,
        t,
        { guild: m, onClose: et, onSelect: ed } = e,
        es = (0, s.bG)([ee.default], () => ee.default.getCurrentUser());
    d()(null != es, "GuildHeaderPopout: user cannot be undefined"),
        a.useEffect(() => {
            ei.default.track(en.HAw.GUILD_DROPDOWN_MENU_VIEWED, { guild_id: m.id });
        });
    let eo = (0, s.bG)([q.Ay], () => q.Ay.isGuildCollapsed(m.id), [m.id]),
        {
            canAccessSettings: er,
            canManageChannels: ec,
            showGuildAnalytics: eu,
        } = (0, s.cf)(
            [$.A],
            () => ({
                canAccessSettings: $.A.canAccessGuildSettings(m),
                canManageChannels: $.A.can(en.xBc.MANAGE_CHANNELS, m),
                showGuildAnalytics:
                    $.A.can(en.xBc.VIEW_GUILD_ANALYTICS, m) && m.features.has(en.GuildFeatures.COMMUNITY),
            }),
            [m],
        ),
        eg = (0, B.ic)(m),
        ey = (0, Z.bM)(m, es),
        ep = (0, s.bG)([Q.A], () => Q.A.isLurking(m.id), [m.id]),
        eA = (0, s.bG)([K.Ay], () => K.Ay.isCurrentUserGuest(m.id)),
        eb = (0, W.A)(m.id, !0),
        ex = (0, I.Ay)(m),
        eh = (0, S.A)({ source: en.PE1.GUILD_HEADER, guild: m }),
        ej = (0, P.A)({
            guildId: m.id,
            userId: es.id,
            analyticsLocation: { page: en.liQ.GUILD_CHANNEL, section: en.JJy.GUILD_DROPDOWN_MENU },
            icon: o.R,
        }),
        ef = m.features.has(en.GuildFeatures.HUB),
        eD = m.id === el.Vc,
        eI = m.id === en.gNP,
        eG = (0, V.A)(m.id, !0),
        em =
            ((i = (0, E.H_)(m)),
            (t = (0, s.bG)([U.A], () => !L().isEmpty(U.A.getThreadsForGuild(m.id)))),
            i && t
                ? (0, l.jsx)(u.Dr, {
                      id: "active-threads",
                      label: _.intl.string(_.t.TM6err),
                      icon: v.o,
                      leadingAccessory: { type: "icon", icon: v.o },
                      action: () => {
                          (0, r.openModalLazy)(async () => {
                              let { default: e } = await Promise.all([
                                  n.e("32245"),
                                  n.e("47042"),
                                  n.e("61748"),
                                  n.e("73432"),
                                  n.e("58337"),
                                  n.e("26437"),
                                  n.e("76602"),
                                  n.e("28229"),
                                  n.e("39970"),
                                  n.e("8371"),
                                  n.e("72789"),
                                  n.e("12743"),
                                  n.e("65437"),
                                  n.e("90301"),
                                  n.e("51743"),
                                  n.e("92596"),
                              ]).then(n.bind(n, 400954));
                              return (i) => (0, l.jsx)(e, { guildId: m.id, ...i });
                          });
                      },
                  })
                : null),
        eL = (0, l.jsx)(u.Dr, {
            id: "application-directory",
            label: _.intl.string(_.t.AKcFUj),
            icon: C.k,
            leadingAccessory: { type: "icon", icon: C.k },
            action: () => {
                (0, M.transitionToGlobalDiscovery)({
                    tab: w.GlobalDiscoveryTab.APPS,
                    newSessionState: { entrypoint: { name: T.sW.GUILD_HEADER_POPOUT }, guildId: m.id },
                });
            },
        }),
        ev = (0, O.A)(m, !0),
        eU = (function (e) {
            let { guildFriendsEnabled: i } = H.useConfig({ location: "useFriendsItem" });
            return i
                ? (0, l.jsx)(u.Dr, {
                      id: "friends",
                      label: _.intl.string(_.t.kYxEcH),
                      icon: N.$,
                      leadingAccessory: { type: "icon", icon: N.$ },
                      action: () => {
                          (0, r.openModalLazy)(async () => {
                              let { default: i } = await Promise.all([n.e("23077"), n.e("42048")]).then(
                                  n.bind(n, 151203),
                              );
                              return (n) => (0, l.jsx)(i, { guild: e, ...n });
                          });
                      },
                  })
                : null;
        })(m),
        eE = (0, G.A)(),
        e_ = (0, k.A)(m, { showIcons: !0 }),
        eC = (0, J.Rg)(m) && (0, J.q0)(m),
        eM = a.useCallback(() => {
            (0, r.openModalLazy)(async () => {
                let { default: e } = await n.e("53485").then(n.bind(n, 20508));
                return (i) => (0, l.jsx)(e, { ...i, guild: m });
            });
        }, [m]);
    return ep || eA
        ? (0, l.jsxs)(c.W, {
              "data-menu-migrated-auto": !0,
              onSelect: ed,
              navId: "guild-header-popout",
              variant: "fixed",
              onClose: et,
              "aria-label": _.intl.string(_.t.HpQykc),
              children: [
                  (0, l.jsx)(u.Dr, {
                      id: "leave-guild",
                      label: _.intl.string(_.t.J2TBi3),
                      icon: g.o,
                      leadingAccessory: { type: "icon", icon: g.o },
                      action: () => {
                          z.A.leaveGuild(m.id, !0);
                      },
                  }),
                  (0, l.jsx)(u.rX, { children: e_ }),
              ],
          })
        : eD
          ? (0, l.jsx)(c.W, {
                "data-menu-migrated-auto": !0,
                onSelect: ed,
                navId: "favorites-header-popout",
                variant: "fixed",
                onClose: et,
                "aria-label": _.intl.string(_.t.HpQykc),
                children: (0, l.jsx)(u.rX, { children: eE }),
            })
          : ef
            ? (0, l.jsxs)(c.W, {
                  "data-menu-migrated": !0,
                  onSelect: ed,
                  navId: "guild-header-popout",
                  variant: "fixed",
                  onClose: et,
                  "aria-label": _.intl.string(_.t.HpQykc),
                  children: [
                      (0, l.jsxs)(u.rX, {
                          children: [
                              er
                                  ? (0, l.jsx)(u.Dr, {
                                        id: "settings",
                                        label: _.intl.string(_.t["154/bL"]),
                                        icon: y.Z,
                                        leadingAccessory: { type: "icon", icon: y.Z },
                                        action: () => {
                                            z.A.open(m.id, (0, Y.x)());
                                        },
                                    })
                                  : null,
                              eh,
                              (0, l.jsx)(u.Dr, {
                                  id: "privacy",
                                  label: _.intl.string(_.t.BayiAo),
                                  icon: p.l,
                                  leadingAccessory: { type: "icon", icon: p.l },
                                  action: () =>
                                      (0, r.openModalLazy)(async () => {
                                          let { default: e } = await Promise.all([
                                              n.e("87981"),
                                              n.e("80813"),
                                              n.e("43549"),
                                              n.e("63497"),
                                              n.e("54630"),
                                              n.e("99053"),
                                              n.e("17823"),
                                              n.e("14093"),
                                              n.e("55595"),
                                          ]).then(n.bind(n, 522566));
                                          return (i) => (0, l.jsx)(e, { ...i, guild: m });
                                      }),
                              }),
                              ej,
                          ],
                      }),
                      ey
                          ? null
                          : (0, l.jsx)(u.rX, {
                                children: (0, l.jsx)(u.Dr, {
                                    id: "leave",
                                    label: _.intl.string(_.t.Dv8gFT),
                                    icon: g.o,
                                    leadingAccessory: { type: "icon", icon: g.o },
                                    color: "danger",
                                    action: eM,
                                }),
                            }),
                  ],
              })
            : eI
              ? null
              : (0, l.jsxs)(c.W, {
                    "data-menu-needs-review": !0,
                    onSelect: ed,
                    navId: "guild-header-popout",
                    variant: "fixed",
                    onClose: et,
                    "aria-label": _.intl.string(_.t.HpQykc),
                    children: [
                        (0, l.jsxs)(u.rX, {
                            children: [
                                (0, l.jsx)(u.Dr, {
                                    id: "premium-subscribe",
                                    label: _.intl.string(_.t.VJEVbu),
                                    icon: A._,
                                    leadingAccessory: { type: "icon", icon: A._ },
                                    action: () => {
                                        (0, F.K4)({ guildId: m.id, location: { section: en.JJy.GUILD_HEADER_POPOUT } });
                                    },
                                }),
                                eC &&
                                    (0, l.jsx)(u.Dr, {
                                        id: "guild-tag",
                                        label: _.intl.string(ea.default.mf2OwH),
                                        leadingAccessory: {
                                            type: "guildTag",
                                            element: (0, l.jsx)(R.o9, {
                                                guildId: m.id,
                                                guildTag: m.profile.tag,
                                                guildBadge: m.profile.badge ?? void 0,
                                                inline: !1,
                                            }),
                                        },
                                        icon: (0, l.jsx)(R.o9, {
                                            guildId: m.id,
                                            guildBadge: m.profile.badge,
                                            guildTag: m.profile.tag,
                                            inline: !1,
                                        }),
                                        action: () => {
                                            var e;
                                            return (
                                                (e = m.id),
                                                void (0, r.openModalLazy)(async () => {
                                                    let { default: i } = await Promise.all([
                                                        n.e("73432"),
                                                        n.e("94232"),
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
                        (0, l.jsxs)(u.rX, {
                            children: [
                                eh,
                                er
                                    ? (0, l.jsx)(u.Dr, {
                                          id: "settings",
                                          label: _.intl.string(_.t["154/bL"]),
                                          icon: y.Z,
                                          leadingAccessory: { type: "icon", icon: y.Z },
                                          action: () => {
                                              z.A.open(m.id, (0, Y.x)());
                                          },
                                      })
                                    : null,
                                eu
                                    ? (0, l.jsx)(u.Dr, {
                                          id: "insights",
                                          label: _.intl.string(_.t["0wWfUG"]),
                                          icon: b.U,
                                          leadingAccessory: { type: "icon", icon: b.U },
                                          action: () => z.A.open(m.id, en.BEX.ANALYTICS),
                                      })
                                    : null,
                                ec
                                    ? (0, l.jsxs)(l.Fragment, {
                                          children: [
                                              (0, l.jsx)(u.Dr, {
                                                  id: "create-channel",
                                                  label: _.intl.string(_.t["fUYU+j"]),
                                                  icon: x.U,
                                                  leadingAccessory: { type: "icon", icon: x.U },
                                                  action: () =>
                                                      (0, r.openModalLazy)(async () => {
                                                          let { default: e } = await Promise.all([
                                                              n.e("77598"),
                                                              n.e("11585"),
                                                              n.e("3589"),
                                                              n.e("89916"),
                                                              n.e("60773"),
                                                              n.e("8018"),
                                                              n.e("20379"),
                                                              n.e("19193"),
                                                              n.e("7775"),
                                                              n.e("37038"),
                                                              n.e("58608"),
                                                              n.e("9431"),
                                                          ]).then(n.bind(n, 113194));
                                                          return (i) =>
                                                              (0, l.jsx)(e, {
                                                                  ...i,
                                                                  channelType: en.rbe.GUILD_TEXT,
                                                                  guildId: m.id,
                                                              });
                                                      }),
                                              }),
                                              (0, l.jsx)(u.Dr, {
                                                  id: "create-category",
                                                  label: _.intl.string(_.t["ISN+NM"]),
                                                  icon: h.Y,
                                                  leadingAccessory: { type: "icon", icon: h.Y },
                                                  action: () =>
                                                      (0, r.openModalLazy)(async () => {
                                                          let { default: e } = await Promise.all([
                                                              n.e("77598"),
                                                              n.e("11585"),
                                                              n.e("3589"),
                                                              n.e("89916"),
                                                              n.e("60773"),
                                                              n.e("8018"),
                                                              n.e("20379"),
                                                              n.e("19193"),
                                                              n.e("7775"),
                                                              n.e("37038"),
                                                              n.e("58608"),
                                                              n.e("9431"),
                                                          ]).then(n.bind(n, 113194));
                                                          return (i) =>
                                                              (0, l.jsx)(e, {
                                                                  ...i,
                                                                  channelType: en.rbe.GUILD_CATEGORY,
                                                                  guildId: m.id,
                                                              });
                                                      }),
                                              }),
                                          ],
                                      })
                                    : null,
                                eb,
                                em,
                                eL,
                                ex,
                                eU,
                            ],
                        }),
                        (0, l.jsxs)(u.rX, {
                            children: [
                                eG,
                                (0, l.jsx)(u.Dr, {
                                    id: "notifications",
                                    label: _.intl.string(_.t.h850Ss),
                                    icon: j.X,
                                    leadingAccessory: { type: "icon", icon: j.X },
                                    action: () =>
                                        (0, r.openModalLazy)(async () => {
                                            let { default: e } = await Promise.all([
                                                n.e("43763"),
                                                n.e("80813"),
                                                n.e("93855"),
                                                n.e("73432"),
                                                n.e("77598"),
                                                n.e("20287"),
                                                n.e("28367"),
                                                n.e("20683"),
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
                                            return (i) => (0, l.jsx)(e, { ...i, guildId: m.id });
                                        }),
                                }),
                                (0, l.jsx)(u.Dr, {
                                    id: "privacy",
                                    label: _.intl.string(_.t.BayiAo),
                                    icon: p.l,
                                    leadingAccessory: { type: "icon", icon: p.l },
                                    action: () =>
                                        (0, r.openModalLazy)(async () => {
                                            let { default: e } = await Promise.all([
                                                n.e("87981"),
                                                n.e("80813"),
                                                n.e("43549"),
                                                n.e("63497"),
                                                n.e("54630"),
                                                n.e("99053"),
                                                n.e("17823"),
                                                n.e("14093"),
                                                n.e("55595"),
                                            ]).then(n.bind(n, 522566));
                                            return (i) => (0, l.jsx)(e, { ...i, guild: m });
                                        }),
                                }),
                            ],
                        }),
                        (0, l.jsxs)(u.rX, {
                            children: [
                                ej,
                                (0, l.jsx)(u.sL, {
                                    id: "hide-muted-channels",
                                    label: _.intl.string(_.t.UwOLJO),
                                    leadingAccessory: { type: "icon", icon: f.G },
                                    checked: eo,
                                    action: () => D.A.toggleCollapseGuild(m.id),
                                }),
                            ],
                        }),
                        (0, l.jsxs)(u.rX, {
                            children: [
                                ev,
                                eg && m.features.has(en.GuildFeatures.COMMUNITY)
                                    ? (0, l.jsx)(u.Dr, {
                                          id: "report-raid",
                                          label: _.intl.string(_.t.cswId3),
                                          icon: p.l,
                                          leadingAccessory: { type: "icon", icon: p.l },
                                          color: "danger",
                                          action: () => (0, X.M)(m.id),
                                      })
                                    : null,
                                ey
                                    ? null
                                    : (0, l.jsx)(u.Dr, {
                                          id: "leave",
                                          label: _.intl.string(_.t.J2TBi3),
                                          icon: g.o,
                                          leadingAccessory: { type: "icon", icon: g.o },
                                          color: "danger",
                                          action: eM,
                                      }),
                            ],
                        }),
                        (0, l.jsx)(u.rX, { children: e_ }),
                    ],
                });
});
