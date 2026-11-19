n.d(i, { default: () => ei });
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
    A = n(359047),
    E = n(36942),
    b = n(260509),
    f = n(46653),
    h = n(287809),
    _ = n(346247),
    S = n(810263),
    x = n(911612),
    L = n(664967);
n(582128);
var N = n(458294),
    p = n(567035),
    j = n(792996),
    m = n(711014),
    I = n(263715),
    M = n(36412),
    y = n(727479),
    D = n(507238),
    G = n(832712),
    O = n(568873),
    T = n(769591),
    v = n(393432),
    X = n(543465),
    R = n(477427),
    U = n(652215),
    B = n(790782),
    P = n(355097);
function C(e) {
    return [
        { setting: U.orn.ALL_MESSAGES, label: j.intl.string(j.t["n/bTaY"]) },
        ...(e ? [{ setting: U.orn.ONLY_MENTIONS, label: j.intl.string(j.t.JzbSEY), allUnreads: !0 }] : []),
        { setting: U.orn.ONLY_MENTIONS, label: j.intl.format(j.t.L2hmYy, {}) },
        { setting: U.orn.NO_MESSAGES, label: j.intl.string(j.t.CtVGyQ) },
    ];
}
var Y = n(121210),
    k = n(811893),
    w = n(837057),
    F = n(310419),
    H = n(727419),
    W = n(576705),
    J = n(602881),
    V = n(887501),
    z = n(684407),
    Q = n(783832),
    K = n(267102),
    q = n(488995),
    Z = n(153594),
    $ = n(531335);
function ee(e) {
    var i;
    let l,
        g,
        { guild: ee, onSelect: ei, hideSettings: en } = e,
        et = ee.id,
        el = (0, r.bG)(
            [h.default],
            () => {
                let e = h.default.getCurrentUser();
                return (s()(null != e, "GuildContextMenu: user cannot be undefined"), (0, b.bM)(ee, e));
            },
            [ee],
        ),
        es = (0, $.A)({ guild: ee, source: U.PE1.GUILD_CONTEXT_MENU, channel: null }),
        er = (0, Z.A)(et),
        ea = (0, D.A)(ee),
        ed = (function (e) {
            let i = (function (e) {
                    let i = (0, T.os)("GuildNotificationItems"),
                        {
                            suppressEveryone: n,
                            suppressRoles: l,
                            mobilePush: s,
                            messageNotifications: a,
                            notifyHighlights: d,
                            unreadSetting: c,
                        } = (0, r.cf)(
                            [X.Ay],
                            () => ({
                                suppressEveryone: X.Ay.isSuppressEveryoneEnabled(e.id),
                                suppressRoles: X.Ay.isSuppressRolesEnabled(e.id),
                                mobilePush: X.Ay.isMobilePushEnabled(e.id),
                                messageNotifications: X.Ay.getMessageNotifications(e.id),
                                notifyHighlights: X.Ay.getNotifyHighlights(e.id),
                                unreadSetting: X.Ay.getGuildUnreadSetting(e.id),
                            }),
                            [e.id],
                        ),
                        u = d === U.guM.DISABLED,
                        g = (0, O.A)(e.id);
                    function A(i, n) {
                        G.A.updateGuildNotificationSettings(e.id, i, n);
                    }
                    return (0, t.jsxs)(t.Fragment, {
                        children: [
                            (0, t.jsx)(o.rX, {
                                children: C(i).map((n) => {
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
                                                            R.G_.notifications(n),
                                                        );
                                                    let l =
                                                        t || n === U.orn.ALL_MESSAGES
                                                            ? P.n3.UNREADS_ALL_MESSAGES
                                                            : P.n3.UNREADS_ONLY_MENTIONS;
                                                    A(
                                                        {
                                                            message_notifications: n,
                                                            flags: (0, v.md)(X.Ay.getGuildFlags(e.id), l),
                                                        },
                                                        R.G_.notifications(n),
                                                    );
                                                })(l, !0 === r),
                                            checked:
                                                !0 === n.allUnreads
                                                    ? a === U.orn.ONLY_MENTIONS && c === B.e.ALL_MESSAGES
                                                    : i && n.setting === U.orn.ONLY_MENTIONS
                                                      ? a === U.orn.ONLY_MENTIONS && c !== B.e.ALL_MESSAGES
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
                                        label: j.intl.format(j.t.OWiWAp, {}),
                                        action: () => A({ suppress_everyone: !n }, R.G_.suppressEveryone(!n)),
                                        checked: n,
                                    }),
                                    (0, t.jsx)(o.sL, {
                                        id: "suppress-roles",
                                        label: j.intl.string(j.t["O/QdoD"]),
                                        action: () => A({ suppress_roles: !l }, R.G_.suppressRoles(!l)),
                                        checked: l,
                                    }),
                                    (0, t.jsx)(o.sL, {
                                        id: "suppress-highlights",
                                        label: j.intl.string(j.t.gPuteJ),
                                        action: () => {
                                            A(
                                                { notify_highlights: u ? U.guM.ENABLED : U.guM.DISABLED },
                                                R.G_.highlights(u),
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
                                    label: j.intl.string(j.t.h1DL66),
                                    action: () => A({ mobile_push: !s }, R.G_.mobilePush(!s)),
                                    checked: s,
                                }),
                            }),
                        ],
                    });
                })(e),
                l = (0, T.os)("GuildNotificationItems"),
                { messageNotifications: s, unreadSetting: d } = (0, r.cf)(
                    [X.Ay],
                    () => ({
                        messageNotifications: X.Ay.getMessageNotifications(e.id),
                        unreadSetting: X.Ay.getGuildUnreadSetting(e.id),
                    }),
                    [e.id],
                ),
                c =
                    l && s === U.orn.ONLY_MENTIONS && d === B.e.ALL_MESSAGES
                        ? j.intl.string(j.t.JzbSEY)
                        : C(!1).find((e) => {
                              let { setting: i } = e;
                              return i === s;
                          })?.label;
            return null != i
                ? (0, t.jsx)(o.Dr, {
                      id: "guild-notifications",
                      label: j.intl.string(j.t.h850Ss),
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
        })(ee),
        eo = (function (e) {
            let i,
                n,
                l = (0, K.aL)(),
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
                        [W.A],
                        () => ({
                            canManageGuild: W.A.can(U.xBc.MANAGE_GUILD, e),
                            canManageRoles: W.A.can(U.xBc.MANAGE_ROLES, e),
                            canBanMembers: W.A.can(U.xBc.BAN_MEMBERS, e),
                            canManageNicknames: W.A.can(U.xBc.MANAGE_NICKNAMES, e),
                            canCreateEmojisAndStickers: W.A.can(U.xBc.CREATE_GUILD_EXPRESSIONS, e),
                            canManageEmojisAndStickers: W.A.can(U.xBc.MANAGE_GUILD_EXPRESSIONS, e),
                            canManageWebhooks: W.A.can(U.xBc.MANAGE_WEBHOOKS, e),
                            canViewAuditLog: W.A.can(U.xBc.VIEW_AUDIT_LOG, e),
                        }),
                        [e],
                    );
                    return i || n || t || l || s || a || d || o;
                })(e);
            if (__OVERLAY__ || !s) return null;
            function d(i) {
                (H.A.open(e.id, i), l.dispatch(U.jej.POPOUT_CLOSE), (0, a.s7)());
            }
            return (0, t.jsx)(o.Dr, {
                id: "guild-settings",
                label: j.intl.string(j.t["154/bL"]),
                action: () => d(),
                children: ((i = W.A.getGuildPermissionProps(e)),
                (n = (0, V.b)(e.id).length > 0),
                Q.Ay.generateSections({
                    showDirtyGuildTemplateIndicator: !1,
                    ...i,
                    canUnlinkChannels: n,
                    welcomeScreenEmpty: z.A.isEmpty(e.id),
                    isLinkedGameOrganizationEnabled: (0, J.Dl)(e.id, "get-guild-settings-sections"),
                })
                    .filter((e) => {
                        let { section: i } = e;
                        return "HEADER" !== i && "DIVIDER" !== i;
                    })
                    .filter((e) => null == e.predicate || e.predicate())).map((i) => {
                    let { section: n, label: l, ariaLabel: s } = i;
                    switch (n) {
                        case U.BEX.DELETE:
                            return null;
                        case U.BEX.COMMUNITY:
                            return (0, t.jsx)(o.Dr, { id: n, action: () => d(n), label: j.intl.string(j.t.nRtNqn) }, n);
                        case U.BEX.APP_DIRECTORY:
                            return (0, t.jsx)(
                                o.Dr,
                                {
                                    id: n,
                                    action: () => {
                                        (0, w.transitionToGlobalDiscovery)({
                                            tab: q.GlobalDiscoveryTab.APPS,
                                            newSessionState: {
                                                guildId: e.id,
                                                entrypoint: { name: F.sW.GUILD_HEADER_POPOUT },
                                            },
                                        });
                                    },
                                    trailingIndicator: { type: "icon", icon: k.WindowLaunchIcon },
                                    icon: k.WindowLaunchIcon,
                                    label: j.intl.string(j.t.AKcFUj),
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
        })(ee),
        ec = (0, _.A)({
            guildId: ee.id,
            userId: f.default.getId(),
            analyticsLocation: {
                page: U.liQ.GUILD_CHANNEL,
                section: U.JJy.CHAT_USERNAME,
                object: U.ZSU.CONTEXT_MENU_ITEM,
            },
        }),
        eu = (0, x.A)(ee),
        eg = (0, A.A)(ee.id),
        eA = (0, S.A)(ee),
        eE =
            ((i = { section: U.JJy.GUILD_LIST }),
            (l = ee.id),
            (g = (0, r.bG)([N.default], () => N.default.getGuildHasUnreadIgnoreMuted(l), [l])),
            (0, t.jsx)(o.Dr, {
                id: "mark-guild-read",
                label: j.intl.string(j.t.e6RscS),
                icon: void 0,
                action: () => (0, p.A)([l], i.section),
                disabled: !g,
            })),
        eb = (0, E.A)(ee.id),
        ef = (0, L.A)(ee),
        eh = (function (e) {
            let i = (function (e) {
                let [i] = (0, r.yK)([m.Ay], () => {
                        let e = m.Ay.getGuildsTree();
                        return [e, e.version];
                    }),
                    n = i.getNode(e),
                    t = n?.parentId,
                    l = null != t ? i.getNode(t) : void 0,
                    s = l?.children ?? i.getRoots(),
                    a = s.length > 1 ? { first: s[0], last: s[s.length - 1] } : null,
                    d = i.getRoots().filter((e) => e.type === I.PJ.FOLDER);
                return null == n || (0 === d.length && null == a)
                    ? null
                    : {
                          label: j.intl.string(j.t.A95Fzm),
                          destinationsLabel: j.intl.string(j.t.znwvG4),
                          destinations:
                              d.length > 0
                                  ? [
                                        { folderId: null, label: j.intl.string(j.t.IfgLzT), disabled: null == t },
                                        ...d.map((e) => ({ folderId: e.id, label: (0, M.M)(e), disabled: e.id === t })),
                                    ]
                                  : [],
                          placements:
                              null != a
                                  ? {
                                        firstLabel: j.intl.string(null != l ? j.t["9qpRrY"] : j.t.IMqgs9),
                                        lastLabel: j.intl.string(null != l ? j.t.ytlaCY : j.t["8fQe3x"]),
                                        isFirst: a.first === n,
                                        isLast: a.last === n,
                                        moveFirst: () => (0, y.A)(e, a.first.id, !1),
                                        moveLast: () => (0, y.A)(e, a.last.id, !0),
                                    }
                                  : null,
                          moveTo: function (i) {
                              if (null == i) {
                                  if (null == t) return;
                                  (0, y.A)(e, t, !0);
                                  return;
                              }
                              (0, y.A)(e, i, !0, !0);
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
        })(et),
        e_ = (0, Y.E)(ee, u.A.CONTEXT_MENU),
        eS = (0, Y.c)(ee);
    function ex() {
        (0, a.mM)(async () => {
            let { default: e } = await n.e(553485).then(n.bind(n, 20508));
            return (i) => (0, t.jsx)(e, { ...i, guild: ee });
        });
    }
    return ee.features.has(U.GuildFeatures.HUB)
        ? (0, t.jsxs)(d.W, {
              "data-menu-migrated": !0,
              navId: "guild-context",
              onClose: c.Z_,
              "aria-label": j.intl.string(j.t.HpQykc),
              onSelect: ei,
              children: [
                  (0, t.jsxs)(o.rX, {
                      children: [
                          es,
                          (0, t.jsx)(o.Dr, {
                              id: "privacy",
                              label: j.intl.string(j.t.IlFwwR),
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
                                      return (i) => (0, t.jsx)(e, { ...i, guild: ee });
                                  }),
                          }),
                          ec,
                      ],
                  }),
                  el
                      ? null
                      : (0, t.jsx)(o.rX, {
                            children: (0, t.jsx)(o.Dr, {
                                id: "leave-guild",
                                label: j.intl.string(j.t.Dv8gFT),
                                action: ex,
                                color: "danger",
                            }),
                        }),
                  (0, t.jsx)(o.rX, { children: eA }),
              ],
          })
        : (0, t.jsxs)(d.W, {
              "data-menu-migrated": !0,
              navId: "guild-context",
              onClose: c.Z_,
              "aria-label": j.intl.string(j.t.HpQykc),
              onSelect: ei,
              children: [
                  (0, t.jsx)(o.rX, { children: eE }),
                  (0, t.jsx)(o.rX, { children: es }),
                  (0, t.jsxs)(o.rX, { children: [ea, __OVERLAY__ ? null : ed, er, eb] }),
                  (0, t.jsxs)(o.rX, {
                      children: [
                          en ? null : eo,
                          __OVERLAY__
                              ? null
                              : (0, t.jsx)(o.Dr, {
                                    id: "privacy",
                                    label: j.intl.string(j.t.BayiAo),
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
                                            return (i) => (0, t.jsx)(e, { ...i, guild: ee });
                                        }),
                                }),
                          ec,
                      ],
                  }),
                  (0, t.jsxs)(o.rX, { children: [eu, eg] }),
                  (0, t.jsx)(o.rX, { children: eh }),
                  (0, t.jsxs)(o.rX, {
                      children: [
                          e_,
                          ef,
                          !el &&
                              (0, t.jsx)(o.Dr, {
                                  id: "leave-guild",
                                  label: j.intl.string(j.t.J2TBi3),
                                  action: ex,
                                  color: "danger",
                              }),
                      ],
                  }),
                  (0, t.jsx)(o.rX, { children: eS }),
                  (0, t.jsx)(o.rX, { children: eA }),
              ],
          });
}
function ei(e) {
    let { analyticsLocations: i } = (0, g.Ay)(u.A.CONTEXT_MENU);
    return (0, t.jsx)(g.f5, { value: i, children: (0, t.jsx)(ee, { ...e }) });
}
