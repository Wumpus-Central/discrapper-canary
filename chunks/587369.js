n.d(i, { default: () => en });
var t = n(477900),
    l = n(284009),
    s = n.n(l),
    r = n(855986),
    a = n(192308),
    d = n(165862),
    o = n(477782),
    c = n(442433),
    u = n(793574),
    g = n(688810),
    A = n(5180),
    E = n(359047),
    b = n(36942),
    f = n(260509),
    h = n(46653),
    _ = n(287809),
    S = n(346247),
    x = n(810263),
    L = n(911612),
    N = n(664967);
n(582128);
var p = n(458294),
    j = n(567035),
    m = n(792996),
    I = n(711014),
    M = n(263715),
    y = n(36412),
    D = n(727479),
    G = n(507238),
    O = n(832712),
    T = n(568873),
    v = n(769591),
    X = n(393432),
    R = n(543465),
    U = n(477427),
    P = n(652215),
    B = n(790782),
    C = n(355097);
function Y(e) {
    return [
        { setting: P.orn.ALL_MESSAGES, label: m.intl.string(m.t["n/bTaY"]) },
        ...(e ? [{ setting: P.orn.ONLY_MENTIONS, label: m.intl.string(m.t.JzbSEY), allUnreads: !0 }] : []),
        { setting: P.orn.ONLY_MENTIONS, label: m.intl.format(m.t.L2hmYy, {}) },
        { setting: P.orn.NO_MESSAGES, label: m.intl.string(m.t.CtVGyQ) },
    ];
}
var k = n(121210),
    w = n(811893),
    F = n(837057),
    H = n(310419),
    W = n(727419),
    J = n(576705),
    V = n(602881),
    z = n(887501),
    Q = n(684407),
    K = n(783832),
    q = n(267102),
    Z = n(488995),
    $ = n(153594),
    ee = n(531335);
function ei(e) {
    var i;
    let l,
        g,
        { guild: ei, onSelect: en, hideSettings: et } = e,
        el = ei.id,
        es = (0, r.bG)(
            [_.default],
            () => {
                let e = _.default.getCurrentUser();
                return (s()(null != e, "GuildContextMenu: user cannot be undefined"), (0, f.bM)(ei, e));
            },
            [ei],
        ),
        er = (0, ee.A)({ guild: ei, source: P.PE1.GUILD_CONTEXT_MENU, channel: null }),
        ea = (0, $.A)(el),
        ed = (0, G.A)(ei),
        eo = (function (e) {
            let i = (function (e) {
                    let i = (0, v.os)("GuildNotificationItems"),
                        {
                            suppressEveryone: n,
                            suppressRoles: l,
                            mobilePush: s,
                            messageNotifications: a,
                            notifyHighlights: d,
                            unreadSetting: c,
                        } = (0, r.cf)(
                            [R.Ay],
                            () => ({
                                suppressEveryone: R.Ay.isSuppressEveryoneEnabled(e.id),
                                suppressRoles: R.Ay.isSuppressRolesEnabled(e.id),
                                mobilePush: R.Ay.isMobilePushEnabled(e.id),
                                messageNotifications: R.Ay.getMessageNotifications(e.id),
                                notifyHighlights: R.Ay.getNotifyHighlights(e.id),
                                unreadSetting: R.Ay.getGuildUnreadSetting(e.id),
                            }),
                            [e.id],
                        ),
                        u = d === P.guM.DISABLED,
                        g = (0, T.A)(e.id);
                    function A(i, n) {
                        O.A.updateGuildNotificationSettings(e.id, i, n);
                    }
                    return (0, t.jsxs)(t.Fragment, {
                        children: [
                            (0, t.jsx)(o.rX, {
                                children: Y(i).map((n) => {
                                    let { setting: l, label: s, allUnreads: r } = n,
                                        d = `${l}-${!0 === r}`;
                                    return (0, t.jsx)(
                                        o.iD,
                                        {
                                            group: "guild-notifications",
                                            id: d,
                                            label: s,
                                            action: () =>
                                                (function (n, t) {
                                                    if (!i)
                                                        return void A(
                                                            { message_notifications: n },
                                                            U.G_.notifications(n),
                                                        );
                                                    let l =
                                                        t || n === P.orn.ALL_MESSAGES
                                                            ? C.n3.UNREADS_ALL_MESSAGES
                                                            : C.n3.UNREADS_ONLY_MENTIONS;
                                                    A(
                                                        {
                                                            message_notifications: n,
                                                            flags: (0, X.md)(R.Ay.getGuildFlags(e.id), l),
                                                        },
                                                        U.G_.notifications(n),
                                                    );
                                                })(l, !0 === r),
                                            checked:
                                                !0 === n.allUnreads
                                                    ? a === P.orn.ONLY_MENTIONS && c === B.e.ALL_MESSAGES
                                                    : i && n.setting === P.orn.ONLY_MENTIONS
                                                      ? a === P.orn.ONLY_MENTIONS && c !== B.e.ALL_MESSAGES
                                                      : n.setting === a,
                                        },
                                        d,
                                    );
                                }),
                            }),
                            (0, t.jsxs)(o.rX, {
                                children: [
                                    (0, t.jsx)(o.sL, {
                                        id: "suppress-everyone",
                                        label: m.intl.format(m.t.OWiWAp, {}),
                                        action: () => A({ suppress_everyone: !n }, U.G_.suppressEveryone(!n)),
                                        checked: n,
                                    }),
                                    (0, t.jsx)(o.sL, {
                                        id: "suppress-roles",
                                        label: m.intl.string(m.t["O/QdoD"]),
                                        action: () => A({ suppress_roles: !l }, U.G_.suppressRoles(!l)),
                                        checked: l,
                                    }),
                                    (0, t.jsx)(o.sL, {
                                        id: "suppress-highlights",
                                        label: m.intl.string(m.t.gPuteJ),
                                        action: () => {
                                            A(
                                                { notify_highlights: u ? P.guM.ENABLED : P.guM.DISABLED },
                                                U.G_.highlights(u),
                                            );
                                        },
                                        checked: u,
                                    }),
                                    g,
                                ],
                            }),
                            (0, t.jsx)(o.rX, {
                                children: (0, t.jsx)(o.sL, {
                                    id: "mobile-push",
                                    label: m.intl.string(m.t.h1DL66),
                                    action: () => A({ mobile_push: !s }, U.G_.mobilePush(!s)),
                                    checked: s,
                                }),
                            }),
                        ],
                    });
                })(e),
                l = (0, v.os)("GuildNotificationItems"),
                { messageNotifications: s, unreadSetting: d } = (0, r.cf)(
                    [R.Ay],
                    () => ({
                        messageNotifications: R.Ay.getMessageNotifications(e.id),
                        unreadSetting: R.Ay.getGuildUnreadSetting(e.id),
                    }),
                    [e.id],
                ),
                c =
                    l && s === P.orn.ONLY_MENTIONS && d === B.e.ALL_MESSAGES
                        ? m.intl.string(m.t.JzbSEY)
                        : Y(!1).find((e) => {
                              let { setting: i } = e;
                              return i === s;
                          })?.label;
            return null != i
                ? (0, t.jsx)(o.Dr, {
                      id: "guild-notifications",
                      label: m.intl.string(m.t.h850Ss),
                      subtext: c,
                      action: () =>
                          (0, a.mM)(async () => {
                              let { default: i } = await Promise.all([n.e(534266), n.e(956814), n.e(652748)]).then(
                                  n.bind(n, 131527),
                              );
                              return (n) => (0, t.jsx)(i, { ...n, guildId: e.id });
                          }),
                      children: i,
                  })
                : null;
        })(ei),
        ec = (function (e) {
            let i,
                n,
                l = (0, q.aL)(),
                s = (function (e) {
                    let {
                        canManageGuild: i,
                        canManageRoles: n,
                        canBanMembers: t,
                        canManageNicknames: l,
                        canCreateEmojisAndStickers: s,
                        canManageEmojisAndStickers: a,
                        canManageWebhooks: d,
                        canViewAuditLog: o,
                    } = (0, r.cf)(
                        [J.A],
                        () => ({
                            canManageGuild: J.A.can(P.xBc.MANAGE_GUILD, e),
                            canManageRoles: J.A.can(P.xBc.MANAGE_ROLES, e),
                            canBanMembers: J.A.can(P.xBc.BAN_MEMBERS, e),
                            canManageNicknames: J.A.can(P.xBc.MANAGE_NICKNAMES, e),
                            canCreateEmojisAndStickers: J.A.can(P.xBc.CREATE_GUILD_EXPRESSIONS, e),
                            canManageEmojisAndStickers: J.A.can(P.xBc.MANAGE_GUILD_EXPRESSIONS, e),
                            canManageWebhooks: J.A.can(P.xBc.MANAGE_WEBHOOKS, e),
                            canViewAuditLog: J.A.can(P.xBc.VIEW_AUDIT_LOG, e),
                        }),
                        [e],
                    );
                    return i || n || t || l || s || a || d || o;
                })(e);
            if (__OVERLAY__ || !s) return null;
            function d(i) {
                (W.A.open(e.id, i), l.dispatch(P.jej.POPOUT_CLOSE), (0, a.s7)());
            }
            return (0, t.jsx)(o.Dr, {
                id: "guild-settings",
                label: m.intl.string(m.t["154/bL"]),
                action: () => d(),
                children: ((i = J.A.getGuildPermissionProps(e)),
                (n = (0, z.b)(e.id).length > 0),
                K.Ay.generateSections({
                    showDirtyGuildTemplateIndicator: !1,
                    ...i,
                    canUnlinkChannels: n,
                    welcomeScreenEmpty: Q.A.isEmpty(e.id),
                    isLinkedGameOrganizationEnabled: (0, V.Dl)(e.id, "get-guild-settings-sections"),
                })
                    .filter((e) => {
                        let { section: i } = e;
                        return "HEADER" !== i && "DIVIDER" !== i;
                    })
                    .filter((e) => null == e.predicate || e.predicate())).map((i) => {
                    let { section: n, label: l, ariaLabel: s } = i;
                    switch (n) {
                        case P.BEX.DELETE:
                            return null;
                        case P.BEX.COMMUNITY:
                            return (0, t.jsx)(o.Dr, { id: n, action: () => d(n), label: m.intl.string(m.t.nRtNqn) }, n);
                        case P.BEX.APP_DIRECTORY:
                            return (0, t.jsx)(
                                o.Dr,
                                {
                                    id: n,
                                    action: () => {
                                        (0, F.transitionToGlobalDiscovery)({
                                            tab: Z.GlobalDiscoveryTab.APPS,
                                            newSessionState: {
                                                guildId: e.id,
                                                entrypoint: { name: H.sW.GUILD_HEADER_POPOUT },
                                            },
                                        });
                                    },
                                    trailingIndicator: { type: "icon", icon: w.WindowLaunchIcon },
                                    icon: w.WindowLaunchIcon,
                                    label: m.intl.string(m.t.AKcFUj),
                                },
                                n,
                            );
                        default:
                            let r = "string" == typeof l ? l : s;
                            if (null == r) return null;
                            return (0, t.jsx)(o.Dr, { id: n, action: () => d(n), label: r }, n);
                    }
                }),
            });
        })(ei),
        eu = (0, S.A)({
            guildId: ei.id,
            userId: h.default.getId(),
            analyticsLocation: {
                page: P.liQ.GUILD_CHANNEL,
                section: P.JJy.CHAT_USERNAME,
                object: P.ZSU.CONTEXT_MENU_ITEM,
            },
        }),
        eg = (0, L.A)(ei),
        eA = (0, E.A)(ei.id),
        eE = (0, x.A)(ei),
        eb =
            ((i = { section: P.JJy.GUILD_LIST }),
            (l = ei.id),
            (g = (0, r.bG)([p.default], () => p.default.getGuildHasUnreadIgnoreMuted(l), [l])),
            (0, t.jsx)(o.Dr, {
                id: "mark-guild-read",
                label: m.intl.string(m.t.e6RscS),
                icon: void 0,
                action: () => (0, j.A)([l], i.section),
                disabled: !g,
            })),
        ef = (0, b.A)(ei.id),
        eh = (0, N.A)(ei),
        e_ = (function (e) {
            let i = (function (e) {
                let [i] = (0, r.yK)([I.Ay], () => {
                        let e = I.Ay.getGuildsTree();
                        return [e, e.version];
                    }),
                    n = i.getNode(e),
                    t = n?.parentId,
                    l = null != t ? i.getNode(t) : void 0,
                    s = l?.children ?? i.getRoots(),
                    a = s.length > 1 ? { first: s[0], last: s[s.length - 1] } : null,
                    d = i.getRoots().filter((e) => e.type === M.PJ.FOLDER);
                return null == n || (0 === d.length && null == a)
                    ? null
                    : {
                          label: m.intl.string(m.t.A95Fzm),
                          destinationsLabel: m.intl.string(m.t.znwvG4),
                          destinations:
                              d.length > 0
                                  ? [
                                        { folderId: null, label: m.intl.string(m.t.IfgLzT), disabled: null == t },
                                        ...d.map((e) => ({ folderId: e.id, label: (0, y.M)(e), disabled: e.id === t })),
                                    ]
                                  : [],
                          placements:
                              null != a
                                  ? {
                                        firstLabel: m.intl.string(null != l ? m.t["9qpRrY"] : m.t.IMqgs9),
                                        lastLabel: m.intl.string(null != l ? m.t.ytlaCY : m.t["8fQe3x"]),
                                        isFirst: a.first === n,
                                        isLast: a.last === n,
                                        moveFirst: () => (0, D.A)(e, a.first.id, !1),
                                        moveLast: () => (0, D.A)(e, a.last.id, !0),
                                    }
                                  : null,
                          moveTo: function (i) {
                              if (null == i) {
                                  if (null == t) return;
                                  (0, D.A)(e, t, !0);
                                  return;
                              }
                              (0, D.A)(e, i, !0, !0);
                          },
                      };
            })(e);
            if (null == i) return null;
            let n = i.destinations.find((e) => null == e.folderId),
                l = i.destinations.filter((e) => null != e.folderId),
                { placements: s } = i;
            return (0, t.jsxs)(o.Dr, {
                id: "move-to",
                label: i.label,
                children: [
                    (0, t.jsx)(o.rX, {
                        children:
                            l.length > 0
                                ? (0, t.jsxs)(o.Dr, {
                                      id: "move-to-folder",
                                      label: i.destinationsLabel,
                                      children: [
                                          null != n
                                              ? (0, t.jsx)(o.rX, {
                                                    children: (0, t.jsx)(o.Dr, {
                                                        id: "no-folder",
                                                        label: n.label,
                                                        disabled: n.disabled,
                                                        action: () => i.moveTo(null),
                                                    }),
                                                })
                                              : null,
                                          (0, t.jsx)(o.rX, {
                                              children: l.map((e) =>
                                                  (0, t.jsx)(
                                                      o.Dr,
                                                      {
                                                          id: String(e.folderId),
                                                          label: e.label,
                                                          disabled: e.disabled,
                                                          action: () => i.moveTo(e.folderId),
                                                      },
                                                      e.folderId,
                                                  ),
                                              ),
                                          }),
                                      ],
                                  })
                                : null,
                    }),
                    (0, t.jsx)(o.rX, {
                        children:
                            null != s
                                ? (0, t.jsxs)(t.Fragment, {
                                      children: [
                                          (0, t.jsx)(o.Dr, {
                                              id: "move-to-first",
                                              label: s.firstLabel,
                                              disabled: s.isFirst,
                                              action: s.moveFirst,
                                          }),
                                          (0, t.jsx)(o.Dr, {
                                              id: "move-to-last",
                                              label: s.lastLabel,
                                              disabled: s.isLast,
                                              action: s.moveLast,
                                          }),
                                      ],
                                  })
                                : null,
                    }),
                ],
            });
        })(el),
        eS = ei.features.has(P.GuildFeatures.HUB),
        ex = (0, k.E)(ei, u.A.CONTEXT_MENU, { isEligible: !(0, A.ai)(el) && el !== P.gNP }),
        eL = (0, k.c)(ei);
    function eN() {
        (0, a.mM)(async () => {
            let { default: e } = await n.e(553485).then(n.bind(n, 20508));
            return (i) => (0, t.jsx)(e, { ...i, guild: ei });
        });
    }
    return eS
        ? (0, t.jsxs)(d.W, {
              "data-menu-migrated": !0,
              navId: "guild-context",
              onClose: c.Z_,
              "aria-label": m.intl.string(m.t.HpQykc),
              onSelect: en,
              children: [
                  (0, t.jsxs)(o.rX, {
                      children: [
                          er,
                          (0, t.jsx)(o.Dr, {
                              id: "privacy",
                              label: m.intl.string(m.t.IlFwwR),
                              action: () =>
                                  (0, a.mM)(async () => {
                                      let { default: e } = await Promise.all([
                                          n.e(684986),
                                          n.e(759174),
                                          n.e(705871),
                                          n.e(340346),
                                          n.e(523638),
                                          n.e(943534),
                                          n.e(273084),
                                          n.e(990080),
                                          n.e(354565),
                                          n.e(855979),
                                      ]).then(n.bind(n, 632038));
                                      return (i) => (0, t.jsx)(e, { ...i, guild: ei });
                                  }),
                          }),
                          eu,
                      ],
                  }),
                  es
                      ? null
                      : (0, t.jsxs)(o.rX, {
                            children: [
                                ex,
                                (0, t.jsx)(o.Dr, {
                                    id: "leave-guild",
                                    label: m.intl.string(m.t.Dv8gFT),
                                    action: eN,
                                    color: "danger",
                                }),
                            ],
                        }),
                  (0, t.jsx)(o.rX, { children: eE }),
              ],
          })
        : (0, t.jsxs)(d.W, {
              "data-menu-migrated": !0,
              navId: "guild-context",
              onClose: c.Z_,
              "aria-label": m.intl.string(m.t.HpQykc),
              onSelect: en,
              children: [
                  (0, t.jsx)(o.rX, { children: eb }),
                  (0, t.jsx)(o.rX, { children: er }),
                  (0, t.jsxs)(o.rX, { children: [ed, __OVERLAY__ ? null : eo, ea, ef] }),
                  (0, t.jsxs)(o.rX, {
                      children: [
                          et ? null : ec,
                          __OVERLAY__
                              ? null
                              : (0, t.jsx)(o.Dr, {
                                    id: "privacy",
                                    label: m.intl.string(m.t.BayiAo),
                                    action: () =>
                                        (0, a.mM)(async () => {
                                            let { default: e } = await Promise.all([
                                                n.e(684986),
                                                n.e(759174),
                                                n.e(705871),
                                                n.e(340346),
                                                n.e(523638),
                                                n.e(943534),
                                                n.e(273084),
                                                n.e(990080),
                                                n.e(354565),
                                                n.e(855979),
                                            ]).then(n.bind(n, 632038));
                                            return (i) => (0, t.jsx)(e, { ...i, guild: ei });
                                        }),
                                }),
                          eu,
                      ],
                  }),
                  (0, t.jsxs)(o.rX, { children: [eg, eA] }),
                  (0, t.jsx)(o.rX, { children: e_ }),
                  (0, t.jsxs)(o.rX, {
                      children: [
                          ex,
                          eh,
                          !es &&
                              (0, t.jsx)(o.Dr, {
                                  id: "leave-guild",
                                  label: m.intl.string(m.t.J2TBi3),
                                  action: eN,
                                  color: "danger",
                              }),
                      ],
                  }),
                  (0, t.jsx)(o.rX, { children: eL }),
                  (0, t.jsx)(o.rX, { children: eE }),
              ],
          });
}
function en(e) {
    let { analyticsLocations: i } = (0, g.Ay)(u.A.CONTEXT_MENU);
    return (0, t.jsx)(g.f5, { value: i, children: (0, t.jsx)(ei, { ...e }) });
}
