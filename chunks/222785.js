t.d(n, {
    default: () => B,
});
var i = t(627968),
    r = t(64700),
    l = t(284009),
    a = t.n(l),
    o = t(311907),
    c = t(397927),
    d = t(686449),
    s = t(819744),
    u = t(149305),
    g = t(293260),
    p = t(616075),
    b = t(226958),
    y = t(82770),
    f = t(346247),
    O = t(434352),
    A = t(664967),
    j = t(531335),
    h = t(957316),
    m = t(974103),
    I = t(509536),
    v = t(359047),
    P = t(997509),
    D = t(595818),
    x = t(685073),
    E = t(534400),
    w = t(647534),
    _ = t(857071),
    M = t(36942),
    G = t(149280),
    S = t(260509),
    T = t(696451),
    N = t(576705),
    L = t(543465),
    U = t(287809),
    C = t(954571),
    k = t(652215),
    R = t(349828),
    F = t(985018),
    H = t(583970);

function J(e) {
    for (var n = 1; n < arguments.length; n++) {
        var t = null != arguments[n] ? arguments[n] : {},
            i = Object.keys(t);
        "function" == typeof Object.getOwnPropertySymbols &&
            (i = i.concat(
                Object.getOwnPropertySymbols(t).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(t, e).enumerable;
                }),
            )),
            i.forEach(function (n) {
                var i;
                (i = t[n]),
                    n in e
                        ? Object.defineProperty(e, n, {
                              value: i,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0,
                          })
                        : (e[n] = i);
            });
    }
    return e;
}

function V(e, n) {
    return (
        (n = null != n ? n : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : (function (e, n) {
                  var t = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var i = Object.getOwnPropertySymbols(e);
                      t.push.apply(t, i);
                  }
                  return t;
              })(Object(n)).forEach(function (t) {
                  Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
              }),
        e
    );
}
let B = r.memo(function (e) {
    var n;
    let { guild: l, onClose: B, onSelect: X } = e,
        W = (0, o.bG)([U.default], () => U.default.getCurrentUser());
    a()(null != W, "GuildHeaderPopout: user cannot be undefined"),
        r.useEffect(() => {
            C.default.track(k.HAw.GUILD_DROPDOWN_MENU_VIEWED, {
                guild_id: l.id,
            });
        });
    let Y = (0, o.bG)([L.Ay], () => L.Ay.isGuildCollapsed(l.id), [l.id]),
        {
            canAccessSettings: Q,
            canManageChannels: Z,
            showGuildAnalytics: q,
        } = (0, o.cf)(
            [N.A],
            () => ({
                canAccessSettings: N.A.canAccessGuildSettings(l),
                canManageChannels: N.A.can(k.xBc.MANAGE_CHANNELS, l),
                showGuildAnalytics: N.A.can(k.xBc.VIEW_GUILD_ANALYTICS, l) && l.features.has(k.GuildFeatures.COMMUNITY),
            }),
            [l],
        ),
        K = (0, m.ic)(l),
        $ = (0, S.bM)(l, W),
        z = (0, o.bG)([_.A], () => _.A.isLurking(l.id), [l.id]),
        ee = (0, o.bG)([T.Ay], () => T.Ay.isCurrentUserGuest(l.id)),
        en = (0, v.A)(l.id, !0),
        et = (0, g.Ay)(l),
        ei = (0, j.A)({
            source: k.PE1.GUILD_HEADER,
            guild: l,
        }),
        er = (0, f.A)({
            guildId: l.id,
            userId: W.id,
            analyticsLocation: {
                page: k.liQ.GUILD_CHANNEL,
                section: k.JJy.GUILD_DROPDOWN_MENU,
            },
            icon: c.R2l,
        }),
        el = l.features.has(k.GuildFeatures.HUB),
        ea = l.id === R.V,
        eo = l.id === k.gNP,
        ec = (0, M.A)(l.id, !0),
        ed = (0, b.A)(l),
        es = (0, y.A)(l),
        eu = (0, A.A)(l, !0),
        eg = (0, O.A)(l),
        { isFavoritesPerk: ep } = (0, p.l)("GuildHeaderPopout"),
        eb = (0, G.A)(l),
        { triggerDeadchat: ey } = u.c.useExperiment(
            {
                guildId: l.id,
                location: "guild header",
            },
            {
                autoTrackExposure: !1,
            },
        ),
        ef = (0, x.Rg)(l) && (0, x.q0)(l),
        eO = r.useCallback(() => {
            (0, c.mMO)(async () => {
                let { default: e } = await t.e("53485").then(t.bind(t, 20508));
                return (n) =>
                    (0, i.jsx)(
                        e,
                        V(J({}, n), {
                            guild: l,
                        }),
                    );
            });
        }, [l]);
    return z || ee
        ? (0, i.jsx)(c.W1t, {
              "data-menu-migrated-auto": !0,
              onSelect: X,
              navId: "guild-header-popout",
              variant: "fixed",
              onClose: B,
              "aria-label": F.intl.string(F.t.HpQykc),
              children: (0, i.jsx)(c.Drp, {
                  id: "leave-guild",
                  label: F.intl.string(F.t.J2TBi3),
                  icon: c.oLl,
                  leadingAccessory: {
                      type: "icon",
                      icon: c.oLl,
                  },
                  action: () => {
                      P.A.leaveGuild(l.id, !0);
                  },
              }),
          })
        : ea
          ? (0, i.jsxs)(c.W1t, {
                "data-menu-migrated-auto": !0,
                onSelect: X,
                navId: "favorites-header-popout",
                variant: "fixed",
                onClose: B,
                "aria-label": F.intl.string(F.t.HpQykc),
                children: [
                    (0, i.jsxs)(c.rXV, {
                        children: [
                            ep &&
                                (0, i.jsx)(c.Drp, {
                                    id: "add-channel",
                                    label: F.intl.string(F.t["6uDHk6"]),
                                    color: "brand",
                                    icon: c.U1e,
                                    leadingAccessory: {
                                        type: "icon",
                                        icon: c.U1e,
                                    },
                                    action: () =>
                                        (0, c.mMO)(async () => {
                                            let { default: e } = await t.e("15077").then(t.bind(t, 889186));
                                            return (n) => (0, i.jsx)(e, J({}, n));
                                        }),
                                }),
                            (0, i.jsx)(c.Drp, {
                                id: "create-category",
                                label: F.intl.string(F.t["ISN+NM"]),
                                icon: c.YPf,
                                leadingAccessory: {
                                    type: "icon",
                                    icon: c.YPf,
                                },
                                action: () =>
                                    (0, c.mMO)(async () => {
                                        let { default: e } = await t.e("5639").then(t.bind(t, 395199));
                                        return (n) => (0, i.jsx)(e, J({}, n));
                                    }),
                            }),
                        ],
                    }),
                    (0, i.jsx)(c.rXV, {
                        children: (0, i.jsx)(c.sLh, {
                            id: "hide-muted-channels",
                            label: F.intl.string(F.t.UwOLJO),
                            checked: Y,
                            action: () => d.A.toggleCollapseGuild(l.id),
                        }),
                    }),
                ],
            })
          : el
            ? (0, i.jsxs)(c.W1t, {
                  "data-menu-migrated": !0,
                  onSelect: X,
                  navId: "guild-header-popout",
                  variant: "fixed",
                  onClose: B,
                  "aria-label": F.intl.string(F.t.HpQykc),
                  children: [
                      (0, i.jsxs)(c.rXV, {
                          children: [
                              Q
                                  ? (0, i.jsx)(c.Drp, {
                                        id: "settings",
                                        label: F.intl.string(F.t["154/bL"]),
                                        icon: eb ? c.vJI : c.Zes,
                                        leadingAccessory: {
                                            type: "icon",
                                            icon: eb ? c.vJI : c.Zes,
                                        },
                                        action: () => {
                                            P.A.open(l.id, (0, D.x)());
                                        },
                                    })
                                  : null,
                              ei,
                              (0, i.jsx)(c.Drp, {
                                  id: "privacy",
                                  label: F.intl.string(F.t.BayiAo),
                                  icon: c.lmn,
                                  leadingAccessory: {
                                      type: "icon",
                                      icon: c.lmn,
                                  },
                                  action: () =>
                                      (0, c.mMO)(async () => {
                                          let { default: e } = await t.e("62026").then(t.bind(t, 585265));
                                          return (n) =>
                                              (0, i.jsx)(
                                                  e,
                                                  V(J({}, n), {
                                                      guild: l,
                                                  }),
                                              );
                                      }),
                              }),
                              er,
                          ],
                      }),
                      $
                          ? null
                          : (0, i.jsx)(c.rXV, {
                                children: (0, i.jsx)(c.Drp, {
                                    id: "leave",
                                    label: F.intl.string(F.t.Dv8gFT),
                                    icon: c.oLl,
                                    leadingAccessory: {
                                        type: "icon",
                                        icon: c.oLl,
                                    },
                                    color: "danger",
                                    action: eO,
                                }),
                            }),
                  ],
              })
            : eo
              ? null
              : (0, i.jsxs)(c.W1t, {
                    "data-menu-needs-review": !0,
                    onSelect: X,
                    navId: "guild-header-popout",
                    variant: "fixed",
                    onClose: B,
                    "aria-label": F.intl.string(F.t.HpQykc),
                    children: [
                        (0, i.jsxs)(c.rXV, {
                            children: [
                                (0, i.jsx)(c.Drp, {
                                    id: "premium-subscribe",
                                    label: F.intl.string(F.t.VJEVbu),
                                    icon: c._Jp,
                                    leadingAccessory: {
                                        type: "icon",
                                        icon: c._Jp,
                                    },
                                    action: () => {
                                        (0, I.K)({
                                            guildId: l.id,
                                            location: {
                                                section: k.JJy.GUILD_HEADER_POPOUT,
                                            },
                                        });
                                    },
                                }),
                                ef &&
                                    (0, i.jsx)(c.Drp, {
                                        id: "guild-tag",
                                        label: F.intl.string(H.default.mf2OwH),
                                        leadingAccessory: {
                                            type: "guildTag",
                                            element: (0, i.jsx)(E.o9, {
                                                guildId: l.id,
                                                guildTag: l.profile.tag,
                                                guildBadge: null != (n = l.profile.badge) ? n : void 0,
                                                inline: !1,
                                            }),
                                        },
                                        icon: (0, i.jsx)(E.o9, {
                                            guildId: l.id,
                                            guildBadge: l.profile.badge,
                                            guildTag: l.profile.tag,
                                            inline: !1,
                                        }),
                                        action: () => (0, w.A)(l.id),
                                    }),
                            ],
                        }),
                        (0, i.jsxs)(c.rXV, {
                            children: [
                                $ && W.isStaff() && ey
                                    ? (0, i.jsx)(c.Drp, {
                                          id: "create-deadchat",
                                          label: "Deadchat Ping",
                                          icon: c.MBj,
                                          leadingAccessory: {
                                              type: "icon",
                                              icon: c.MBj,
                                          },
                                          action: () => {
                                              (0, s.g)(l.id, k.lAJ.GUILD_DEADCHAT_REVIVE_PROMPT);
                                          },
                                      })
                                    : null,
                                ei,
                                Q
                                    ? (0, i.jsx)(c.Drp, {
                                          id: "settings",
                                          label: F.intl.string(F.t["154/bL"]),
                                          icon: eb ? c.vJI : c.Zes,
                                          leadingAccessory: {
                                              type: "icon",
                                              icon: eb ? c.vJI : c.Zes,
                                          },
                                          action: () => {
                                              P.A.open(l.id, (0, D.x)());
                                          },
                                      })
                                    : null,
                                q
                                    ? (0, i.jsx)(c.Drp, {
                                          id: "insights",
                                          label: F.intl.string(F.t["0wWfUG"]),
                                          icon: c.Uy2,
                                          leadingAccessory: {
                                              type: "icon",
                                              icon: c.Uy2,
                                          },
                                          action: () => P.A.open(l.id, k.BEX.ANALYTICS),
                                      })
                                    : null,
                                Z
                                    ? (0, i.jsxs)(i.Fragment, {
                                          children: [
                                              (0, i.jsx)(c.Drp, {
                                                  id: "create-channel",
                                                  label: F.intl.string(F.t["fUYU+j"]),
                                                  icon: c.U1e,
                                                  leadingAccessory: {
                                                      type: "icon",
                                                      icon: c.U1e,
                                                  },
                                                  action: () =>
                                                      (0, c.mMO)(async () => {
                                                          let { default: e } = await Promise.all([
                                                              t.e("64233"),
                                                              t.e("9743"),
                                                          ]).then(t.bind(t, 409200));
                                                          return (n) =>
                                                              (0, i.jsx)(
                                                                  e,
                                                                  V(J({}, n), {
                                                                      channelType: k.rbe.GUILD_TEXT,
                                                                      guildId: l.id,
                                                                  }),
                                                              );
                                                      }),
                                              }),
                                              (0, i.jsx)(c.Drp, {
                                                  id: "create-category",
                                                  label: F.intl.string(F.t["ISN+NM"]),
                                                  icon: c.YPf,
                                                  leadingAccessory: {
                                                      type: "icon",
                                                      icon: c.YPf,
                                                  },
                                                  action: () =>
                                                      (0, c.mMO)(async () => {
                                                          let { default: e } = await Promise.all([
                                                              t.e("64233"),
                                                              t.e("9743"),
                                                          ]).then(t.bind(t, 409200));
                                                          return (n) =>
                                                              (0, i.jsx)(
                                                                  e,
                                                                  V(J({}, n), {
                                                                      channelType: k.rbe.GUILD_CATEGORY,
                                                                      guildId: l.id,
                                                                  }),
                                                              );
                                                      }),
                                              }),
                                          ],
                                      })
                                    : null,
                                en,
                                ed,
                                es,
                                et,
                                eg,
                            ],
                        }),
                        (0, i.jsxs)(c.rXV, {
                            children: [
                                ec,
                                (0, i.jsx)(c.Drp, {
                                    id: "notifications",
                                    label: F.intl.string(F.t.h850Ss),
                                    icon: c.XFE,
                                    leadingAccessory: {
                                        type: "icon",
                                        icon: c.XFE,
                                    },
                                    action: () =>
                                        (0, c.mMO)(async () => {
                                            let { default: e } = await Promise.all([t.e("64992"), t.e("67208")]).then(
                                                t.bind(t, 401539),
                                            );
                                            return (n) =>
                                                (0, i.jsx)(
                                                    e,
                                                    V(J({}, n), {
                                                        guildId: l.id,
                                                    }),
                                                );
                                        }),
                                }),
                                (0, i.jsx)(c.Drp, {
                                    id: "privacy",
                                    label: F.intl.string(F.t.BayiAo),
                                    icon: c.lmn,
                                    leadingAccessory: {
                                        type: "icon",
                                        icon: c.lmn,
                                    },
                                    action: () =>
                                        (0, c.mMO)(async () => {
                                            let { default: e } = await t.e("62026").then(t.bind(t, 585265));
                                            return (n) =>
                                                (0, i.jsx)(
                                                    e,
                                                    V(J({}, n), {
                                                        guild: l,
                                                    }),
                                                );
                                        }),
                                }),
                            ],
                        }),
                        (0, i.jsxs)(c.rXV, {
                            children: [
                                er,
                                (0, i.jsx)(c.sLh, {
                                    id: "hide-muted-channels",
                                    label: F.intl.string(F.t.UwOLJO),
                                    leadingAccessory: {
                                        type: "icon",
                                        icon: c.G3N,
                                    },
                                    checked: Y,
                                    action: () => d.A.toggleCollapseGuild(l.id),
                                }),
                            ],
                        }),
                        (0, i.jsxs)(c.rXV, {
                            children: [
                                eu,
                                K && l.features.has(k.GuildFeatures.COMMUNITY)
                                    ? (0, i.jsx)(c.Drp, {
                                          id: "report-raid",
                                          label: F.intl.string(F.t.cswId3),
                                          icon: c.lmn,
                                          leadingAccessory: {
                                              type: "icon",
                                              icon: c.lmn,
                                          },
                                          color: "danger",
                                          action: () => (0, h.M)(l.id),
                                      })
                                    : null,
                                $
                                    ? null
                                    : (0, i.jsx)(c.Drp, {
                                          id: "leave",
                                          label: F.intl.string(F.t.J2TBi3),
                                          icon: c.oLl,
                                          leadingAccessory: {
                                              type: "icon",
                                              icon: c.oLl,
                                          },
                                          color: "danger",
                                          action: eO,
                                      }),
                            ],
                        }),
                    ],
                });
});
