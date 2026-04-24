n.d(i, { default: () => ea });
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
    b = n(555704),
    h = n(245604),
    x = n(234020),
    f = n(782603),
    j = n(952270),
    v = n(686449),
    I = n(293260),
    D = n(649308),
    m = n(735438),
    G = n.n(m),
    E = n(534890),
    L = n(970278),
    w = n(406704),
    U = n(985018),
    _ = n(323384),
    M = n(837057),
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
    W = n(957316),
    X = n(974103),
    F = n(509536),
    B = n(359047),
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
    ee = n(287809),
    ei = n(954571),
    en = n(652215),
    el = n(349828),
    et = n(661023);
let ea = t.memo(function (e) {
    let i,
        a,
        { guild: m, onClose: ea, onSelect: ed } = e,
        es = (0, s.bG)([ee.default], () => ee.default.getCurrentUser());
    d()(null != es, "GuildHeaderPopout: user cannot be undefined"),
        t.useEffect(() => {
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
        eg = (0, X.ic)(m),
        ey = (0, Q.bM)(m, es),
        ep = (0, s.bG)([V.A], () => V.A.isLurking(m.id), [m.id]),
        eA = (0, s.bG)([K.Ay], () => K.Ay.isCurrentUserGuest(m.id)),
        eb = (0, B.A)(m.id, !0),
        eh = (0, I.Ay)(m),
        ex = (0, S.A)({ source: en.PE1.GUILD_HEADER, guild: m }),
        ef = (0, H.A)({
            guildId: m.id,
            userId: es.id,
            analyticsLocation: { page: en.liQ.GUILD_CHANNEL, section: en.JJy.GUILD_DROPDOWN_MENU },
            icon: o.R,
        }),
        ej = m.features.has(en.GuildFeatures.HUB),
        ev = m.id === el.Vc,
        eI = m.id === en.gNP,
        eD = (0, Z.A)(m.id, !0),
        em =
            ((i = (0, w.H_)(m)),
            (a = (0, s.bG)([L.A], () => !G().isEmpty(L.A.getThreadsForGuild(m.id)))),
            i && a
                ? (0, l.jsx)(u.Dr, {
                      id: "active-threads",
                      label: U.intl.string(U.t.TM6err),
                      icon: E.o,
                      leadingAccessory: { type: "icon", icon: E.o },
                      action: () => {
                          (0, r.openModalLazy)(async () => {
                              let { default: e } = await Promise.all([n.e("65437"), n.e("51743"), n.e("28328")]).then(
                                  n.bind(n, 400954),
                              );
                              return (i) => (0, l.jsx)(e, { guildId: m.id, ...i });
                          });
                      },
                  })
                : null),
        eG = (0, l.jsx)(u.Dr, {
            id: "application-directory",
            label: U.intl.string(U.t.AKcFUj),
            icon: _.k,
            leadingAccessory: { type: "icon", icon: _.k },
            action: () => {
                (0, M.transitionToGlobalDiscovery)({
                    tab: C.GlobalDiscoveryTab.APPS,
                    newSessionState: { entrypoint: { name: T.sW.GUILD_HEADER_POPOUT }, guildId: m.id },
                });
            },
        }),
        eE = (0, O.A)(m, !0),
        eL = (function (e) {
            let { guildFriendsEnabled: i } = k.useConfig({ location: "useFriendsItem" });
            return i
                ? (0, l.jsx)(u.Dr, {
                      id: "friends",
                      label: U.intl.string(U.t.kYxEcH),
                      icon: P.$,
                      leadingAccessory: { type: "icon", icon: P.$ },
                      action: () => {
                          (0, r.openModalLazy)(async () => {
                              let { default: i } = await n.e("42048").then(n.bind(n, 151203));
                              return (n) => (0, l.jsx)(i, { guild: e, ...n });
                          });
                      },
                  })
                : null;
        })(m),
        ew = (0, D.A)(),
        eU = (0, N.A)(m, { showIcons: !0 }),
        e_ = (0, J.Rg)(m) && (0, J.q0)(m),
        eM = t.useCallback(() => {
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
              onClose: ea,
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
                  (0, l.jsx)(u.rX, { children: eU }),
              ],
          })
        : ev
          ? (0, l.jsx)(c.W, {
                "data-menu-migrated-auto": !0,
                onSelect: ed,
                navId: "favorites-header-popout",
                variant: "fixed",
                onClose: ea,
                "aria-label": U.intl.string(U.t.HpQykc),
                children: (0, l.jsx)(u.rX, { children: ew }),
            })
          : ej
            ? (0, l.jsxs)(c.W, {
                  "data-menu-migrated": !0,
                  onSelect: ed,
                  navId: "guild-header-popout",
                  variant: "fixed",
                  onClose: ea,
                  "aria-label": U.intl.string(U.t.HpQykc),
                  children: [
                      (0, l.jsxs)(u.rX, {
                          children: [
                              er
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
                              ex,
                              (0, l.jsx)(u.Dr, {
                                  id: "privacy",
                                  label: U.intl.string(U.t.BayiAo),
                                  icon: p.l,
                                  leadingAccessory: { type: "icon", icon: p.l },
                                  action: () =>
                                      (0, r.openModalLazy)(async () => {
                                          let { default: e } = await Promise.all([
                                              n.e("33098"),
                                              n.e("55595"),
                                              n.e("14901"),
                                          ]).then(n.bind(n, 522566));
                                          return (i) => (0, l.jsx)(e, { ...i, guild: m });
                                      }),
                              }),
                              ef,
                          ],
                      }),
                      ey
                          ? null
                          : (0, l.jsx)(u.rX, {
                                children: (0, l.jsx)(u.Dr, {
                                    id: "leave",
                                    label: U.intl.string(U.t.Dv8gFT),
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
                    onClose: ea,
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
                                        (0, F.K4)({ guildId: m.id, location: { section: en.JJy.GUILD_HEADER_POPOUT } });
                                    },
                                }),
                                e_ &&
                                    (0, l.jsx)(u.Dr, {
                                        id: "guild-tag",
                                        label: U.intl.string(et.default.mf2OwH),
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
                                            var e;
                                            return (
                                                (e = m.id),
                                                void (0, r.openModalLazy)(async () => {
                                                    let { default: i } = await Promise.all([
                                                        n.e("42749"),
                                                        n.e("95407"),
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
                                ex,
                                er
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
                                eu
                                    ? (0, l.jsx)(u.Dr, {
                                          id: "insights",
                                          label: U.intl.string(U.t["0wWfUG"]),
                                          icon: b.U,
                                          leadingAccessory: { type: "icon", icon: b.U },
                                          action: () => R.A.open(m.id, en.BEX.ANALYTICS),
                                      })
                                    : null,
                                ec
                                    ? (0, l.jsxs)(l.Fragment, {
                                          children: [
                                              (0, l.jsx)(u.Dr, {
                                                  id: "create-channel",
                                                  label: U.intl.string(U.t["fUYU+j"]),
                                                  icon: h.U,
                                                  leadingAccessory: { type: "icon", icon: h.U },
                                                  action: () =>
                                                      (0, r.openModalLazy)(async () => {
                                                          let { default: e } = await Promise.all([
                                                              n.e("8018"),
                                                              n.e("42282"),
                                                              n.e("9431"),
                                                              n.e("43735"),
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
                                                  label: U.intl.string(U.t["ISN+NM"]),
                                                  icon: x.Y,
                                                  leadingAccessory: { type: "icon", icon: x.Y },
                                                  action: () =>
                                                      (0, r.openModalLazy)(async () => {
                                                          let { default: e } = await Promise.all([
                                                              n.e("8018"),
                                                              n.e("42282"),
                                                              n.e("9431"),
                                                              n.e("43735"),
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
                                eG,
                                eh,
                                eL,
                            ],
                        }),
                        (0, l.jsxs)(u.rX, {
                            children: [
                                eD,
                                (0, l.jsx)(u.Dr, {
                                    id: "notifications",
                                    label: U.intl.string(U.t.h850Ss),
                                    icon: f.X,
                                    leadingAccessory: { type: "icon", icon: f.X },
                                    action: () =>
                                        (0, r.openModalLazy)(async () => {
                                            let { default: e } = await Promise.all([
                                                n.e("28367"),
                                                n.e("8555"),
                                                n.e("30282"),
                                                n.e("41268"),
                                            ]).then(n.bind(n, 893605));
                                            return (i) => (0, l.jsx)(e, { ...i, guildId: m.id });
                                        }),
                                }),
                                (0, l.jsx)(u.Dr, {
                                    id: "privacy",
                                    label: U.intl.string(U.t.BayiAo),
                                    icon: p.l,
                                    leadingAccessory: { type: "icon", icon: p.l },
                                    action: () =>
                                        (0, r.openModalLazy)(async () => {
                                            let { default: e } = await Promise.all([
                                                n.e("33098"),
                                                n.e("55595"),
                                                n.e("14901"),
                                            ]).then(n.bind(n, 522566));
                                            return (i) => (0, l.jsx)(e, { ...i, guild: m });
                                        }),
                                }),
                            ],
                        }),
                        (0, l.jsxs)(u.rX, {
                            children: [
                                ef,
                                (0, l.jsx)(u.sL, {
                                    id: "hide-muted-channels",
                                    label: U.intl.string(U.t.UwOLJO),
                                    leadingAccessory: { type: "icon", icon: j.G },
                                    checked: eo,
                                    action: () => v.A.toggleCollapseGuild(m.id),
                                }),
                            ],
                        }),
                        (0, l.jsxs)(u.rX, {
                            children: [
                                eE,
                                eg && m.features.has(en.GuildFeatures.COMMUNITY)
                                    ? (0, l.jsx)(u.Dr, {
                                          id: "report-raid",
                                          label: U.intl.string(U.t.cswId3),
                                          icon: p.l,
                                          leadingAccessory: { type: "icon", icon: p.l },
                                          color: "danger",
                                          action: () => (0, W.M)(m.id),
                                      })
                                    : null,
                                ey
                                    ? null
                                    : (0, l.jsx)(u.Dr, {
                                          id: "leave",
                                          label: U.intl.string(U.t.J2TBi3),
                                          icon: g.o,
                                          leadingAccessory: { type: "icon", icon: g.o },
                                          color: "danger",
                                          action: eM,
                                      }),
                            ],
                        }),
                        (0, l.jsx)(u.rX, { children: eU }),
                    ],
                });
});
