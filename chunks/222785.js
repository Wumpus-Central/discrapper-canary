n.d(t, {
    default: () => W,
});
var i = n(627968),
    r = n(64700),
    l = n(284009),
    a = n.n(l),
    o = n(311907),
    c = n(397927),
    d = n(686449),
    s = n(819744),
    u = n(149305),
    b = n(293260),
    g = n(616075),
    p = n(226958),
    f = n(82770),
    O = n(346247),
    y = n(434352),
    j = n(664967),
    h = n(531335),
    A = n(957316),
    m = n(974103),
    I = n(509536),
    x = n(359047),
    P = n(997509),
    v = n(595818),
    D = n(685073),
    E = n(534400),
    _ = n(647534),
    w = n(857071),
    M = n(36942),
    S = n(149280),
    G = n(260509),
    N = n(696451),
    T = n(576705),
    C = n(543465),
    L = n(287809),
    U = n(954571),
    k = n(652215),
    R = n(349828),
    F = n(985018),
    H = n(583970),
    V = n(467249);

function J(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            i = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (i = i.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            i.forEach(function (t) {
                var i;
                (i = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: i,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0,
                          })
                        : (e[t] = i);
            });
    }
    return e;
}

function B(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : (function (e, t) {
                  var n = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var i = Object.getOwnPropertySymbols(e);
                      n.push.apply(n, i);
                  }
                  return n;
              })(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let W = r.memo(function (e) {
    let { guild: t, onClose: l, onSelect: W } = e,
        X = (0, o.bG)([L.default], () => L.default.getCurrentUser());
    a()(null != X, "GuildHeaderPopout: user cannot be undefined"),
        r.useEffect(() => {
            U.default.track(k.HAw.GUILD_DROPDOWN_MENU_VIEWED, {
                guild_id: t.id,
            });
        });
    let Y = (0, o.bG)([C.Ay], () => C.Ay.isGuildCollapsed(t.id), [t.id]),
        {
            canAccessSettings: Q,
            canManageChannels: q,
            showGuildAnalytics: K,
        } = (0, o.cf)(
            [T.A],
            () => ({
                canAccessSettings: T.A.canAccessGuildSettings(t),
                canManageChannels: T.A.can(k.xBc.MANAGE_CHANNELS, t),
                showGuildAnalytics: T.A.can(k.xBc.VIEW_GUILD_ANALYTICS, t) && t.features.has(k.GuildFeatures.COMMUNITY),
            }),
            [t],
        ),
        Z = (0, m.ic)(t),
        $ = (0, G.bM)(t, X),
        z = (0, o.bG)([w.A], () => w.A.isLurking(t.id), [t.id]),
        ee = (0, o.bG)([N.Ay], () => N.Ay.isCurrentUserGuest(t.id)),
        et = (0, x.A)(t.id, !0),
        en = (0, b.Ay)(t),
        ei = (0, h.A)({
            source: k.PE1.GUILD_HEADER,
            guild: t,
        }),
        er = (0, O.A)({
            guildId: t.id,
            userId: X.id,
            analyticsLocation: {
                page: k.liQ.GUILD_CHANNEL,
                section: k.JJy.GUILD_DROPDOWN_MENU,
            },
            icon: c.R2l,
        }),
        el = t.features.has(k.GuildFeatures.HUB),
        ea = t.id === R.V,
        eo = t.id === k.gNP,
        ec = (0, M.A)(t.id),
        ed = (0, p.A)(t),
        es = (0, f.A)(t),
        eu = (0, j.A)(t, !0),
        eb = (0, y.A)(t),
        { isFavoritesPerk: eg } = (0, g.l)("GuildHeaderPopout"),
        ep = (0, S.A)(t),
        { triggerDeadchat: ef } = u.c.useExperiment(
            {
                guildId: t.id,
                location: "guild header",
            },
            {
                autoTrackExposure: !1,
            },
        ),
        eO = r.useCallback(() => {
            (0, c.mMO)(async () => {
                let { default: e } = await n.e("53485").then(n.bind(n, 20508));
                return (n) =>
                    (0, i.jsx)(
                        e,
                        B(J({}, n), {
                            guild: t,
                        }),
                    );
            });
        }, [t]);
    return z || ee
        ? (0, i.jsx)(c.W1t, {
              "data-menu-mixed": !0,
              onSelect: W,
              navId: "guild-header-popout",
              variant: "fixed",
              onClose: l,
              "aria-label": F.intl.string(F.t.HpQykc),
              children: (0, i.jsx)(c.Drp, {
                  id: "leave-guild",
                  label: F.intl.string(F.t.J2TBi3),
                  icon: c.oLl,
                  action: () => {
                      P.A.leaveGuild(t.id, !0);
                  },
              }),
          })
        : ea
          ? (0, i.jsxs)(c.W1t, {
                "data-menu-mixed": !0,
                onSelect: W,
                navId: "favorites-header-popout",
                variant: "fixed",
                onClose: l,
                "aria-label": F.intl.string(F.t.HpQykc),
                children: [
                    (0, i.jsxs)(c.rXV, {
                        children: [
                            eg &&
                                (0, i.jsx)(c.Drp, {
                                    id: "add-channel",
                                    label: F.intl.string(F.t["6uDHk6"]),
                                    color: "brand",
                                    icon: c.U1e,
                                    action: () =>
                                        (0, c.mMO)(async () => {
                                            let { default: e } = await n.e("15077").then(n.bind(n, 889186));
                                            return (t) => (0, i.jsx)(e, J({}, t));
                                        }),
                                }),
                            (0, i.jsx)(c.Drp, {
                                id: "create-category",
                                label: F.intl.string(F.t["ISN+NM"]),
                                icon: c.YPf,
                                action: () =>
                                    (0, c.mMO)(async () => {
                                        let { default: e } = await n.e("5639").then(n.bind(n, 395199));
                                        return (t) => (0, i.jsx)(e, J({}, t));
                                    }),
                            }),
                        ],
                    }),
                    (0, i.jsx)(c.rXV, {
                        children: (0, i.jsx)(c.sLh, {
                            id: "hide-muted-channels",
                            label: F.intl.string(F.t.UwOLJO),
                            checked: Y,
                            action: () => d.A.toggleCollapseGuild(t.id),
                        }),
                    }),
                ],
            })
          : el
            ? (0, i.jsxs)(c.W1t, {
                  "data-menu-mixed": !0,
                  onSelect: W,
                  navId: "guild-header-popout",
                  variant: "fixed",
                  onClose: l,
                  "aria-label": F.intl.string(F.t.HpQykc),
                  children: [
                      (0, i.jsxs)(c.rXV, {
                          children: [
                              Q
                                  ? (0, i.jsx)(c.Drp, {
                                        id: "settings",
                                        label: F.intl.string(F.t["154/bL"]),
                                        icon: ep ? c.vJI : c.Zes,
                                        action: () => {
                                            P.A.open(t.id, (0, v.x)());
                                        },
                                    })
                                  : null,
                              ei,
                              (0, i.jsx)(c.Drp, {
                                  id: "privacy",
                                  label: F.intl.string(F.t.BayiAo),
                                  icon: c.lmn,
                                  action: () =>
                                      (0, c.mMO)(async () => {
                                          let { default: e } = await n.e("62026").then(n.bind(n, 585265));
                                          return (n) =>
                                              (0, i.jsx)(
                                                  e,
                                                  B(J({}, n), {
                                                      guild: t,
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
                                    color: "danger",
                                    action: eO,
                                }),
                            }),
                  ],
              })
            : eo
              ? null
              : (0, i.jsxs)(c.W1t, {
                    "data-menu-mixed": !0,
                    onSelect: W,
                    navId: "guild-header-popout",
                    variant: "fixed",
                    onClose: l,
                    "aria-label": F.intl.string(F.t.HpQykc),
                    children: [
                        (0, i.jsxs)(c.rXV, {
                            children: [
                                (0, i.jsx)(c.Drp, {
                                    id: "premium-subscribe",
                                    label: F.intl.string(F.t.VJEVbu),
                                    icon: c._Jp,
                                    action: () => {
                                        (0, I.K)({
                                            guildId: t.id,
                                            location: {
                                                section: k.JJy.GUILD_HEADER_POPOUT,
                                            },
                                        });
                                    },
                                }),
                                (0, D.Rg)(t) &&
                                    (0, D.q0)(t) &&
                                    (0, i.jsx)(c.Drp, {
                                        id: "guild-tag",
                                        label: F.intl.string(H.default.mf2OwH),
                                        icon: (0, i.jsx)(E.o9, {
                                            guildId: t.id,
                                            guildBadge: t.profile.badge,
                                            guildTag: t.profile.tag,
                                            inline: !1,
                                        }),
                                        action: () => (0, _.A)(t.id),
                                    }),
                            ],
                        }),
                        (0, i.jsxs)(c.rXV, {
                            children: [
                                $ && X.isStaff() && ef
                                    ? (0, i.jsx)(c.Drp, {
                                          id: "create-deadchat",
                                          label: "Deadchat Ping",
                                          icon: c.MBj,
                                          action: () => {
                                              (0, s.g)(t.id, k.lAJ.GUILD_DEADCHAT_REVIVE_PROMPT);
                                          },
                                      })
                                    : null,
                                ei,
                                Q
                                    ? (0, i.jsx)(c.Drp, {
                                          id: "settings",
                                          label: F.intl.string(F.t["154/bL"]),
                                          icon: ep ? c.vJI : c.Zes,
                                          action: () => {
                                              P.A.open(t.id, (0, v.x)());
                                          },
                                      })
                                    : null,
                                K
                                    ? (0, i.jsx)(c.Drp, {
                                          id: "insights",
                                          label: F.intl.string(F.t["0wWfUG"]),
                                          icon: c.Uy2,
                                          action: () => P.A.open(t.id, k.BEX.ANALYTICS),
                                      })
                                    : null,
                                q
                                    ? (0, i.jsxs)(i.Fragment, {
                                          children: [
                                              (0, i.jsx)(c.Drp, {
                                                  id: "create-channel",
                                                  label: F.intl.string(F.t["fUYU+j"]),
                                                  icon: c.U1e,
                                                  action: () =>
                                                      (0, c.mMO)(async () => {
                                                          let { default: e } = await Promise.all([
                                                              n.e("64233"),
                                                              n.e("9743"),
                                                          ]).then(n.bind(n, 409200));
                                                          return (n) =>
                                                              (0, i.jsx)(
                                                                  e,
                                                                  B(J({}, n), {
                                                                      channelType: k.rbe.GUILD_TEXT,
                                                                      guildId: t.id,
                                                                  }),
                                                              );
                                                      }),
                                              }),
                                              (0, i.jsx)(c.Drp, {
                                                  id: "create-category",
                                                  label: F.intl.string(F.t["ISN+NM"]),
                                                  icon: c.YPf,
                                                  action: () =>
                                                      (0, c.mMO)(async () => {
                                                          let { default: e } = await Promise.all([
                                                              n.e("64233"),
                                                              n.e("9743"),
                                                          ]).then(n.bind(n, 409200));
                                                          return (n) =>
                                                              (0, i.jsx)(
                                                                  e,
                                                                  B(J({}, n), {
                                                                      channelType: k.rbe.GUILD_CATEGORY,
                                                                      guildId: t.id,
                                                                  }),
                                                              );
                                                      }),
                                              }),
                                          ],
                                      })
                                    : null,
                                et,
                                ed,
                                es,
                                en,
                                eb,
                            ],
                        }),
                        (0, i.jsxs)(c.rXV, {
                            children: [
                                ec,
                                (0, i.jsx)(c.Drp, {
                                    id: "notifications",
                                    label: (0, i.jsx)("div", {
                                        className: V.I,
                                        children: F.intl.string(F.t.h850Ss),
                                    }),
                                    icon: c.XFE,
                                    action: () =>
                                        (0, c.mMO)(async () => {
                                            let { default: e } = await Promise.all([n.e("64992"), n.e("67208")]).then(
                                                n.bind(n, 401539),
                                            );
                                            return (n) =>
                                                (0, i.jsx)(
                                                    e,
                                                    B(J({}, n), {
                                                        guildId: t.id,
                                                    }),
                                                );
                                        }),
                                }),
                                (0, i.jsx)(c.Drp, {
                                    id: "privacy",
                                    label: F.intl.string(F.t.BayiAo),
                                    icon: c.lmn,
                                    action: () =>
                                        (0, c.mMO)(async () => {
                                            let { default: e } = await n.e("62026").then(n.bind(n, 585265));
                                            return (n) =>
                                                (0, i.jsx)(
                                                    e,
                                                    B(J({}, n), {
                                                        guild: t,
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
                                    checked: Y,
                                    action: () => d.A.toggleCollapseGuild(t.id),
                                }),
                            ],
                        }),
                        (0, i.jsxs)(c.rXV, {
                            children: [
                                eu,
                                Z && t.features.has(k.GuildFeatures.COMMUNITY)
                                    ? (0, i.jsx)(c.Drp, {
                                          id: "report-raid",
                                          label: F.intl.string(F.t.cswId3),
                                          icon: c.lmn,
                                          color: "danger",
                                          action: () => (0, A.M)(t.id),
                                      })
                                    : null,
                                $
                                    ? null
                                    : (0, i.jsx)(c.Drp, {
                                          id: "leave",
                                          label: F.intl.string(F.t.J2TBi3),
                                          icon: c.oLl,
                                          color: "danger",
                                          action: eO,
                                      }),
                            ],
                        }),
                    ],
                });
});
