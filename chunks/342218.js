n.d(i, { default: () => eg });
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
    G = n(952270),
    I = n(686449),
    L = n(293260),
    v = n(649308),
    U = n(735438),
    m = n.n(U),
    E = n(534890),
    C = n(970278),
    T = n(406704),
    _ = n(375708),
    M = n(323384),
    P = n(837057),
    w = n(310419),
    k = n(488995),
    H = n(346247),
    N = n(810263),
    O = n(214947);
let S = (0, n(945810).mj)({
    name: "2026-01-friends-in-server",
    kind: "user",
    defaultConfig: { guildFriendsEnabled: !1 },
    variations: { 1: { guildFriendsEnabled: !0 } },
});
var X = n(664967),
    F = n(531335),
    B = n(957316),
    W = n(974103),
    z = n(509536),
    R = n(359047),
    Y = n(468689),
    J = n(595818),
    Q = n(685073),
    V = n(534400),
    Z = n(857071),
    K = n(36942),
    $ = n(71393),
    q = n(383272),
    ee = n(414133),
    ei = n(652215),
    en = n(594061),
    el = n(617617),
    et = n(260509),
    ea = n(696451),
    ed = n(576705),
    es = n(543465),
    eo = n(287809),
    er = n(174459),
    ec = n(349828),
    eu = n(661023);
let eg = t.memo(function (e) {
    var i, a;
    let U,
        eg,
        ey,
        ep,
        eA,
        { guild: eb, onClose: ex, onSelect: eh } = e,
        ej = (0, o.bG)([eo.default], () => eo.default.getCurrentUser());
    d()(null != ej, "GuildHeaderPopout: user cannot be undefined"),
        t.useEffect(() => {
            er.default.track(ei.HAw.GUILD_DROPDOWN_MENU_VIEWED, { guild_id: eb.id });
        });
    let eD = (0, o.bG)([es.Ay], () => es.Ay.isGuildCollapsed(eb.id), [eb.id]),
        {
            canAccessSettings: ef,
            canManageChannels: eG,
            showGuildAnalytics: eI,
        } = (0, o.cf)(
            [ed.A],
            () => ({
                canAccessSettings: ed.A.canAccessGuildSettings(eb),
                canManageChannels: ed.A.can(ei.xBc.MANAGE_CHANNELS, eb),
                showGuildAnalytics:
                    ed.A.can(ei.xBc.VIEW_GUILD_ANALYTICS, eb) && eb.features.has(ei.GuildFeatures.COMMUNITY),
            }),
            [eb],
        ),
        eL = (0, W.ic)(eb),
        ev = (0, et.bM)(eb, ej),
        eU = (0, o.bG)([Z.A], () => Z.A.isLurking(eb.id), [eb.id]),
        em = (0, o.bG)([ea.Ay], () => ea.Ay.isCurrentUserGuest(eb.id)),
        eE = (0, R.A)(eb.id, !0),
        eC = (0, L.Ay)(eb),
        eT = (0, F.A)({ source: ei.PE1.GUILD_HEADER, guild: eb }),
        e_ = (0, H.A)({
            guildId: eb.id,
            userId: ej.id,
            analyticsLocation: { page: ei.liQ.GUILD_CHANNEL, section: ei.JJy.GUILD_DROPDOWN_MENU },
            icon: c.R,
        }),
        eM = eb.features.has(ei.GuildFeatures.HUB),
        eP = eb.id === ec.Vc,
        ew = eb.id === ei.gNP,
        ek = (0, K.A)(eb.id, !0),
        eH =
            ((U = (0, T.H_)(eb)),
            (eg = (0, o.bG)([C.A], () => !m().isEmpty(C.A.getThreadsForGuild(eb.id)))),
            U && eg
                ? (0, l.jsx)(y.Dr, {
                      id: "active-threads",
                      label: _.intl.string(_.t.TM6err),
                      icon: E.o,
                      leadingAccessory: { type: "icon", icon: E.o },
                      action: () => {
                          (0, u.openModalLazy)(async () => {
                              let { default: e } = await Promise.all([
                                  n.e("28952"),
                                  n.e("45122"),
                                  n.e("52848"),
                                  n.e("76298"),
                                  n.e("76602"),
                                  n.e("28229"),
                                  n.e("39970"),
                                  n.e("72789"),
                                  n.e("79049"),
                                  n.e("65437"),
                                  n.e("95160"),
                                  n.e("1812"),
                                  n.e("51743"),
                                  n.e("92596"),
                              ]).then(n.bind(n, 400954));
                              return (i) => (0, l.jsx)(e, { guildId: eb.id, ...i });
                          });
                      },
                  })
                : null),
        eN = (0, l.jsx)(y.Dr, {
            id: "application-directory",
            label: _.intl.string(_.t.AKcFUj),
            icon: M.k,
            leadingAccessory: { type: "icon", icon: M.k },
            action: () => {
                (0, P.transitionToGlobalDiscovery)({
                    tab: k.GlobalDiscoveryTab.APPS,
                    newSessionState: { entrypoint: { name: w.sW.GUILD_HEADER_POPOUT }, guildId: eb.id },
                });
            },
        }),
        eO = (0, X.A)(eb, !0),
        eS = (function (e) {
            let { guildFriendsEnabled: i } = S.useConfig({ location: "useFriendsItem" });
            return i
                ? (0, l.jsx)(y.Dr, {
                      id: "friends",
                      label: _.intl.string(_.t.kYxEcH),
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
        })(eb),
        eX = (0, v.A)(),
        eF =
            ((i = eb.id),
            (a = "GuildHeaderPopout"),
            (ey = (0, o.bG)([$.A], () => $.A.getGuild(i)?.features.has(ei.GuildFeatures.GUILD_THEME) === !0, [i])),
            (ep = (0, q.DD)(i ?? void 0, a)),
            (eA = (0, ee.OS)(a)),
            ey && ep && eA),
        eB = (0, o.bG)([el.A], () => el.A.resolveGuildThemeSourcePreference(eb.id), [eb.id]),
        eW = t.useCallback(() => {
            let e = eB === r.tI.GUILD ? r.tI.PERSONAL : r.tI.GUILD;
            (0, en.XW)(eb.id, e);
        }, [eb.id, eB]),
        ez = (0, N.A)(eb, { showIcons: !0 }),
        eR = (0, Q.Rg)(eb) && (0, Q.q0)(eb),
        eY = t.useCallback(() => {
            (0, u.openModalLazy)(async () => {
                let { default: e } = await n.e("53485").then(n.bind(n, 20508));
                return (i) => (0, l.jsx)(e, { ...i, guild: eb });
            });
        }, [eb]);
    return eU || em
        ? (0, l.jsxs)(g.W, {
              "data-menu-migrated-auto": !0,
              onSelect: eh,
              navId: "guild-header-popout",
              variant: "fixed",
              onClose: ex,
              "aria-label": _.intl.string(_.t.HpQykc),
              children: [
                  (0, l.jsx)(y.Dr, {
                      id: "leave-guild",
                      label: _.intl.string(_.t.J2TBi3),
                      icon: p.o,
                      leadingAccessory: { type: "icon", icon: p.o },
                      action: () => {
                          Y.A.leaveGuild(eb.id, !0);
                      },
                  }),
                  (0, l.jsx)(y.rX, { children: ez }),
              ],
          })
        : eP
          ? (0, l.jsx)(g.W, {
                "data-menu-migrated-auto": !0,
                onSelect: eh,
                navId: "favorites-header-popout",
                variant: "fixed",
                onClose: ex,
                "aria-label": _.intl.string(_.t.HpQykc),
                children: (0, l.jsx)(y.rX, { children: eX }),
            })
          : eM
            ? (0, l.jsxs)(g.W, {
                  "data-menu-migrated": !0,
                  onSelect: eh,
                  navId: "guild-header-popout",
                  variant: "fixed",
                  onClose: ex,
                  "aria-label": _.intl.string(_.t.HpQykc),
                  children: [
                      (0, l.jsxs)(y.rX, {
                          children: [
                              ef
                                  ? (0, l.jsx)(y.Dr, {
                                        id: "settings",
                                        label: _.intl.string(_.t["154/bL"]),
                                        icon: A.Z,
                                        leadingAccessory: { type: "icon", icon: A.Z },
                                        action: () => {
                                            Y.A.open(eb.id, (0, J.x)());
                                        },
                                    })
                                  : null,
                              eT,
                              (0, l.jsx)(y.Dr, {
                                  id: "privacy",
                                  label: _.intl.string(_.t.BayiAo),
                                  icon: b.l,
                                  leadingAccessory: { type: "icon", icon: b.l },
                                  action: () =>
                                      (0, u.openModalLazy)(async () => {
                                          let { default: e } = await Promise.all([
                                              n.e("80915"),
                                              n.e("22575"),
                                              n.e("5871"),
                                              n.e("7408"),
                                              n.e("71492"),
                                              n.e("43784"),
                                              n.e("3198"),
                                          ]).then(n.bind(n, 382573));
                                          return (i) => (0, l.jsx)(e, { ...i, guild: eb });
                                      }),
                              }),
                              e_,
                          ],
                      }),
                      ev
                          ? null
                          : (0, l.jsx)(y.rX, {
                                children: (0, l.jsx)(y.Dr, {
                                    id: "leave",
                                    label: _.intl.string(_.t.Dv8gFT),
                                    icon: p.o,
                                    leadingAccessory: { type: "icon", icon: p.o },
                                    color: "danger",
                                    action: eY,
                                }),
                            }),
                  ],
              })
            : ew
              ? null
              : (0, l.jsxs)(g.W, {
                    "data-menu-needs-review": !0,
                    onSelect: eh,
                    navId: "guild-header-popout",
                    variant: "fixed",
                    onClose: ex,
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
                                        (0, z.K4)({
                                            guildId: eb.id,
                                            location: { section: ei.JJy.GUILD_HEADER_POPOUT },
                                        });
                                    },
                                }),
                                eF
                                    ? (0, l.jsx)(y.sL, {
                                          id: "use-server-theme",
                                          label: _.intl.string(_.t.CFzDOG),
                                          leadingAccessory: { type: "icon", icon: s.B },
                                          checked: eB === r.tI.GUILD,
                                          action: eW,
                                      })
                                    : null,
                                eR &&
                                    (0, l.jsx)(y.Dr, {
                                        id: "guild-tag",
                                        label: _.intl.string(eu.default.mf2OwH),
                                        leadingAccessory: {
                                            type: "guildTag",
                                            element: (0, l.jsx)(V.o9, {
                                                guildId: eb.id,
                                                guildTag: eb.profile.tag,
                                                guildBadge: eb.profile.badge ?? void 0,
                                                inline: !1,
                                            }),
                                        },
                                        icon: (0, l.jsx)(V.o9, {
                                            guildId: eb.id,
                                            guildBadge: eb.profile.badge,
                                            guildTag: eb.profile.tag,
                                            inline: !1,
                                        }),
                                        action: () => {
                                            var e;
                                            return (
                                                (e = eb.id),
                                                void (0, u.openModalLazy)(async () => {
                                                    let { default: i } = await Promise.all([
                                                        n.e("64269"),
                                                        n.e("76298"),
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
                                eT,
                                ef
                                    ? (0, l.jsx)(y.Dr, {
                                          id: "settings",
                                          label: _.intl.string(_.t["154/bL"]),
                                          icon: A.Z,
                                          leadingAccessory: { type: "icon", icon: A.Z },
                                          action: () => {
                                              Y.A.open(eb.id, (0, J.x)());
                                          },
                                      })
                                    : null,
                                eI
                                    ? (0, l.jsx)(y.Dr, {
                                          id: "insights",
                                          label: _.intl.string(_.t["0wWfUG"]),
                                          icon: h.U,
                                          leadingAccessory: { type: "icon", icon: h.U },
                                          action: () => Y.A.open(eb.id, ei.BEX.ANALYTICS),
                                      })
                                    : null,
                                eG
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
                                                              n.e("22575"),
                                                              n.e("11585"),
                                                              n.e("3589"),
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
                                                                  channelType: ei.rbe.GUILD_TEXT,
                                                                  guildId: eb.id,
                                                              });
                                                      }),
                                              }),
                                              (0, l.jsx)(y.Dr, {
                                                  id: "create-category",
                                                  label: _.intl.string(_.t["ISN+NM"]),
                                                  icon: D.Y,
                                                  leadingAccessory: { type: "icon", icon: D.Y },
                                                  action: () =>
                                                      (0, u.openModalLazy)(async () => {
                                                          let { default: e } = await Promise.all([
                                                              n.e("22575"),
                                                              n.e("11585"),
                                                              n.e("3589"),
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
                                                                  channelType: ei.rbe.GUILD_CATEGORY,
                                                                  guildId: eb.id,
                                                              });
                                                      }),
                                              }),
                                          ],
                                      })
                                    : null,
                                eE,
                                eH,
                                eN,
                                eC,
                                eS,
                            ],
                        }),
                        (0, l.jsxs)(y.rX, {
                            children: [
                                ek,
                                (0, l.jsx)(y.Dr, {
                                    id: "notifications",
                                    label: _.intl.string(_.t.h850Ss),
                                    icon: f.X,
                                    leadingAccessory: { type: "icon", icon: f.X },
                                    action: () =>
                                        (0, u.openModalLazy)(async () => {
                                            let { default: e } = await Promise.all([
                                                n.e("82115"),
                                                n.e("22575"),
                                                n.e("93855"),
                                                n.e("76298"),
                                                n.e("64684"),
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
                                            return (i) => (0, l.jsx)(e, { ...i, guildId: eb.id });
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
                                                n.e("80915"),
                                                n.e("22575"),
                                                n.e("5871"),
                                                n.e("7408"),
                                                n.e("71492"),
                                                n.e("43784"),
                                                n.e("3198"),
                                            ]).then(n.bind(n, 382573));
                                            return (i) => (0, l.jsx)(e, { ...i, guild: eb });
                                        }),
                                }),
                            ],
                        }),
                        (0, l.jsxs)(y.rX, {
                            children: [
                                e_,
                                (0, l.jsx)(y.sL, {
                                    id: "hide-muted-channels",
                                    label: _.intl.string(_.t.UwOLJO),
                                    leadingAccessory: { type: "icon", icon: G.G },
                                    checked: eD,
                                    action: () => I.A.toggleCollapseGuild(eb.id),
                                }),
                            ],
                        }),
                        (0, l.jsxs)(y.rX, {
                            children: [
                                eO,
                                eL && eb.features.has(ei.GuildFeatures.COMMUNITY)
                                    ? (0, l.jsx)(y.Dr, {
                                          id: "report-raid",
                                          label: _.intl.string(_.t.cswId3),
                                          icon: b.l,
                                          leadingAccessory: { type: "icon", icon: b.l },
                                          color: "danger",
                                          action: () => (0, B.M)(eb.id),
                                      })
                                    : null,
                                ev
                                    ? null
                                    : (0, l.jsx)(y.Dr, {
                                          id: "leave",
                                          label: _.intl.string(_.t.J2TBi3),
                                          icon: p.o,
                                          leadingAccessory: { type: "icon", icon: p.o },
                                          color: "danger",
                                          action: eY,
                                      }),
                            ],
                        }),
                        (0, l.jsx)(y.rX, { children: ez }),
                    ],
                });
});
