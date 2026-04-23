n.d(e, { default: () => $ });
var l = n(627968),
    t = n(64700),
    a = n(284009),
    d = n.n(a),
    r = n(311907),
    s = n(22231),
    o = n(192308),
    c = n(861672),
    u = n(477782),
    g = n(70688),
    y = n(625903),
    A = n(231483),
    p = n(104510),
    h = n(555704),
    x = n(245604),
    b = n(234020),
    f = n(782603),
    j = n(952270),
    v = n(686449),
    I = n(293260),
    D = n(649308),
    m = n(226958),
    G = n(82770),
    L = n(346247),
    w = n(810263),
    E = n(434352),
    U = n(664967),
    M = n(531335),
    _ = n(957316),
    T = n(974103),
    C = n(509536),
    H = n(359047),
    N = n(997509),
    P = n(595818),
    k = n(685073),
    O = n(534400),
    S = n(647534),
    X = n(857071),
    F = n(36942),
    B = n(260509),
    W = n(696451),
    R = n(576705),
    z = n(543465),
    J = n(287809),
    Y = n(954571),
    V = n(652215),
    Z = n(349828),
    Q = n(985018),
    K = n(661023);
let $ = t.memo(function (i) {
    let { guild: e, onClose: a, onSelect: $ } = i,
        q = (0, r.bG)([J.default], () => J.default.getCurrentUser());
    d()(null != q, "GuildHeaderPopout: user cannot be undefined"),
        t.useEffect(() => {
            Y.default.track(V.HAw.GUILD_DROPDOWN_MENU_VIEWED, { guild_id: e.id });
        });
    let ii = (0, r.bG)([z.Ay], () => z.Ay.isGuildCollapsed(e.id), [e.id]),
        {
            canAccessSettings: ie,
            canManageChannels: il,
            showGuildAnalytics: it,
        } = (0, r.cf)(
            [R.A],
            () => ({
                canAccessSettings: R.A.canAccessGuildSettings(e),
                canManageChannels: R.A.can(V.xBc.MANAGE_CHANNELS, e),
                showGuildAnalytics: R.A.can(V.xBc.VIEW_GUILD_ANALYTICS, e) && e.features.has(V.GuildFeatures.COMMUNITY),
            }),
            [e],
        ),
        ia = (0, T.ic)(e),
        id = (0, B.bM)(e, q),
        ir = (0, r.bG)([X.A], () => X.A.isLurking(e.id), [e.id]),
        is = (0, r.bG)([W.Ay], () => W.Ay.isCurrentUserGuest(e.id)),
        io = (0, H.A)(e.id, !0),
        ic = (0, I.Ay)(e),
        iu = (0, M.A)({ source: V.PE1.GUILD_HEADER, guild: e }),
        ig = (0, L.A)({
            guildId: e.id,
            userId: q.id,
            analyticsLocation: { page: V.liQ.GUILD_CHANNEL, section: V.JJy.GUILD_DROPDOWN_MENU },
            icon: s.R,
        }),
        iy = e.features.has(V.GuildFeatures.HUB),
        iA = e.id === Z.Vc,
        ip = e.id === V.gNP,
        ih = (0, F.A)(e.id, !0),
        ix = (0, m.A)(e),
        ib = (0, G.A)(e),
        ij = (0, U.A)(e, !0),
        iv = (0, E.A)(e),
        iI = (0, D.A)(),
        iD = (0, w.A)(e, { showIcons: !0 }),
        im = (0, k.Rg)(e) && (0, k.q0)(e),
        iG = t.useCallback(() => {
            (0, o.openModalLazy)(async () => {
                let { default: i } = await n.e("53485").then(n.bind(n, 20508));
                return (n) => (0, l.jsx)(i, { ...n, guild: e });
            });
        }, [e]);
    return ir || is
        ? (0, l.jsxs)(c.W, {
              "data-menu-migrated-auto": !0,
              onSelect: $,
              navId: "guild-header-popout",
              variant: "fixed",
              onClose: a,
              "aria-label": Q.intl.string(Q.t.HpQykc),
              children: [
                  (0, l.jsx)(u.Dr, {
                      id: "leave-guild",
                      label: Q.intl.string(Q.t.J2TBi3),
                      icon: g.o,
                      leadingAccessory: { type: "icon", icon: g.o },
                      action: () => {
                          N.A.leaveGuild(e.id, !0);
                      },
                  }),
                  (0, l.jsx)(u.rX, { children: iD }),
              ],
          })
        : iA
          ? (0, l.jsx)(c.W, {
                "data-menu-migrated-auto": !0,
                onSelect: $,
                navId: "favorites-header-popout",
                variant: "fixed",
                onClose: a,
                "aria-label": Q.intl.string(Q.t.HpQykc),
                children: (0, l.jsx)(u.rX, { children: iI }),
            })
          : iy
            ? (0, l.jsxs)(c.W, {
                  "data-menu-migrated": !0,
                  onSelect: $,
                  navId: "guild-header-popout",
                  variant: "fixed",
                  onClose: a,
                  "aria-label": Q.intl.string(Q.t.HpQykc),
                  children: [
                      (0, l.jsxs)(u.rX, {
                          children: [
                              ie
                                  ? (0, l.jsx)(u.Dr, {
                                        id: "settings",
                                        label: Q.intl.string(Q.t["154/bL"]),
                                        icon: y.Z,
                                        leadingAccessory: { type: "icon", icon: y.Z },
                                        action: () => {
                                            N.A.open(e.id, (0, P.x)());
                                        },
                                    })
                                  : null,
                              iu,
                              (0, l.jsx)(u.Dr, {
                                  id: "privacy",
                                  label: Q.intl.string(Q.t.BayiAo),
                                  icon: A.l,
                                  leadingAccessory: { type: "icon", icon: A.l },
                                  action: () =>
                                      (0, o.openModalLazy)(async () => {
                                          let { default: i } = await Promise.all([
                                              n.e("33098"),
                                              n.e("62026"),
                                              n.e("14901"),
                                          ]).then(n.bind(n, 585265));
                                          return (n) => (0, l.jsx)(i, { ...n, guild: e });
                                      }),
                              }),
                              ig,
                          ],
                      }),
                      id
                          ? null
                          : (0, l.jsx)(u.rX, {
                                children: (0, l.jsx)(u.Dr, {
                                    id: "leave",
                                    label: Q.intl.string(Q.t.Dv8gFT),
                                    icon: g.o,
                                    leadingAccessory: { type: "icon", icon: g.o },
                                    color: "danger",
                                    action: iG,
                                }),
                            }),
                  ],
              })
            : ip
              ? null
              : (0, l.jsxs)(c.W, {
                    "data-menu-needs-review": !0,
                    onSelect: $,
                    navId: "guild-header-popout",
                    variant: "fixed",
                    onClose: a,
                    "aria-label": Q.intl.string(Q.t.HpQykc),
                    children: [
                        (0, l.jsxs)(u.rX, {
                            children: [
                                (0, l.jsx)(u.Dr, {
                                    id: "premium-subscribe",
                                    label: Q.intl.string(Q.t.VJEVbu),
                                    icon: p._,
                                    leadingAccessory: { type: "icon", icon: p._ },
                                    action: () => {
                                        (0, C.K4)({ guildId: e.id, location: { section: V.JJy.GUILD_HEADER_POPOUT } });
                                    },
                                }),
                                im &&
                                    (0, l.jsx)(u.Dr, {
                                        id: "guild-tag",
                                        label: Q.intl.string(K.default.mf2OwH),
                                        leadingAccessory: {
                                            type: "guildTag",
                                            element: (0, l.jsx)(O.o9, {
                                                guildId: e.id,
                                                guildTag: e.profile.tag,
                                                guildBadge: e.profile.badge ?? void 0,
                                                inline: !1,
                                            }),
                                        },
                                        icon: (0, l.jsx)(O.o9, {
                                            guildId: e.id,
                                            guildBadge: e.profile.badge,
                                            guildTag: e.profile.tag,
                                            inline: !1,
                                        }),
                                        action: () => (0, S.A)(e.id),
                                    }),
                            ],
                        }),
                        (0, l.jsxs)(u.rX, {
                            children: [
                                iu,
                                ie
                                    ? (0, l.jsx)(u.Dr, {
                                          id: "settings",
                                          label: Q.intl.string(Q.t["154/bL"]),
                                          icon: y.Z,
                                          leadingAccessory: { type: "icon", icon: y.Z },
                                          action: () => {
                                              N.A.open(e.id, (0, P.x)());
                                          },
                                      })
                                    : null,
                                it
                                    ? (0, l.jsx)(u.Dr, {
                                          id: "insights",
                                          label: Q.intl.string(Q.t["0wWfUG"]),
                                          icon: h.U,
                                          leadingAccessory: { type: "icon", icon: h.U },
                                          action: () => N.A.open(e.id, V.BEX.ANALYTICS),
                                      })
                                    : null,
                                il
                                    ? (0, l.jsxs)(l.Fragment, {
                                          children: [
                                              (0, l.jsx)(u.Dr, {
                                                  id: "create-channel",
                                                  label: Q.intl.string(Q.t["fUYU+j"]),
                                                  icon: x.U,
                                                  leadingAccessory: { type: "icon", icon: x.U },
                                                  action: () =>
                                                      (0, o.openModalLazy)(async () => {
                                                          let { default: i } = await Promise.all([
                                                              n.e("64233"),
                                                              n.e("40988"),
                                                          ]).then(n.bind(n, 409200));
                                                          return (n) =>
                                                              (0, l.jsx)(i, {
                                                                  ...n,
                                                                  channelType: V.rbe.GUILD_TEXT,
                                                                  guildId: e.id,
                                                              });
                                                      }),
                                              }),
                                              (0, l.jsx)(u.Dr, {
                                                  id: "create-category",
                                                  label: Q.intl.string(Q.t["ISN+NM"]),
                                                  icon: b.Y,
                                                  leadingAccessory: { type: "icon", icon: b.Y },
                                                  action: () =>
                                                      (0, o.openModalLazy)(async () => {
                                                          let { default: i } = await Promise.all([
                                                              n.e("64233"),
                                                              n.e("40988"),
                                                          ]).then(n.bind(n, 409200));
                                                          return (n) =>
                                                              (0, l.jsx)(i, {
                                                                  ...n,
                                                                  channelType: V.rbe.GUILD_CATEGORY,
                                                                  guildId: e.id,
                                                              });
                                                      }),
                                              }),
                                          ],
                                      })
                                    : null,
                                io,
                                ix,
                                ib,
                                ic,
                                iv,
                            ],
                        }),
                        (0, l.jsxs)(u.rX, {
                            children: [
                                ih,
                                (0, l.jsx)(u.Dr, {
                                    id: "notifications",
                                    label: Q.intl.string(Q.t.h850Ss),
                                    icon: f.X,
                                    leadingAccessory: { type: "icon", icon: f.X },
                                    action: () =>
                                        (0, o.openModalLazy)(async () => {
                                            let { default: i } = await Promise.all([n.e("64992"), n.e("50893")]).then(
                                                n.bind(n, 401539),
                                            );
                                            return (n) => (0, l.jsx)(i, { ...n, guildId: e.id });
                                        }),
                                }),
                                (0, l.jsx)(u.Dr, {
                                    id: "privacy",
                                    label: Q.intl.string(Q.t.BayiAo),
                                    icon: A.l,
                                    leadingAccessory: { type: "icon", icon: A.l },
                                    action: () =>
                                        (0, o.openModalLazy)(async () => {
                                            let { default: i } = await Promise.all([
                                                n.e("33098"),
                                                n.e("62026"),
                                                n.e("14901"),
                                            ]).then(n.bind(n, 585265));
                                            return (n) => (0, l.jsx)(i, { ...n, guild: e });
                                        }),
                                }),
                            ],
                        }),
                        (0, l.jsxs)(u.rX, {
                            children: [
                                ig,
                                (0, l.jsx)(u.sL, {
                                    id: "hide-muted-channels",
                                    label: Q.intl.string(Q.t.UwOLJO),
                                    leadingAccessory: { type: "icon", icon: j.G },
                                    checked: ii,
                                    action: () => v.A.toggleCollapseGuild(e.id),
                                }),
                            ],
                        }),
                        (0, l.jsxs)(u.rX, {
                            children: [
                                ij,
                                ia && e.features.has(V.GuildFeatures.COMMUNITY)
                                    ? (0, l.jsx)(u.Dr, {
                                          id: "report-raid",
                                          label: Q.intl.string(Q.t.cswId3),
                                          icon: A.l,
                                          leadingAccessory: { type: "icon", icon: A.l },
                                          color: "danger",
                                          action: () => (0, _.M)(e.id),
                                      })
                                    : null,
                                id
                                    ? null
                                    : (0, l.jsx)(u.Dr, {
                                          id: "leave",
                                          label: Q.intl.string(Q.t.J2TBi3),
                                          icon: g.o,
                                          leadingAccessory: { type: "icon", icon: g.o },
                                          color: "danger",
                                          action: iG,
                                      }),
                            ],
                        }),
                        (0, l.jsx)(u.rX, { children: iD }),
                    ],
                });
});
