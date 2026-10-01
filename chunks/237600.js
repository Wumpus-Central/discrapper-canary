i.d(t, { default: () => ei });
var n = i(477900),
    l = i(284009),
    s = i.n(l),
    r = i(17928),
    a = i(192308),
    d = i(980707),
    o = i(477782),
    c = i(442433),
    u = i(793574),
    g = i(688810),
    A = i(359047),
    f = i(36942),
    b = i(260509),
    E = i(280450),
    h = i(287809),
    _ = i(346247),
    S = i(810263),
    x = i(911612),
    p = i(664967);
i(582128);
var L = i(458294),
    j = i(567035),
    N = i(375708),
    y = i(711014),
    m = i(263715),
    I = i(36412),
    M = i(727479),
    G = i(507238),
    D = i(832712),
    O = i(568873),
    T = i(769591),
    v = i(393432),
    R = i(543465),
    U = i(477427),
    X = i(652215),
    B = i(790782),
    P = i(355097);
function C(e) {
    return [
        { setting: X.orn.ALL_MESSAGES, label: N.intl.string(N.t["n/bTaY"]) },
        ...(e ? [{ setting: X.orn.ONLY_MENTIONS, label: N.intl.string(N.t.JzbSEY), allUnreads: !0 }] : []),
        { setting: X.orn.ONLY_MENTIONS, label: N.intl.format(N.t.L2hmYy, {}) },
        { setting: X.orn.NO_MESSAGES, label: N.intl.string(N.t.CtVGyQ) },
    ];
}
var Y = i(138134),
    k = i(865116),
    F = i(928658),
    w = i(811893),
    H = i(837057),
    z = i(310419),
    J = i(468689),
    V = i(576705),
    W = i(887501),
    Q = i(684407),
    K = i(428563),
    q = i(267102),
    Z = i(488995),
    $ = i(153594),
    ee = i(531335);
function et(e) {
    var t;
    let l,
        u,
        g,
        et,
        { guild: ei, onSelect: en, hideSettings: el } = e,
        es = ei.id,
        er = (0, r.bG)(
            [h.default],
            () => {
                let e = h.default.getCurrentUser();
                return (s()(null != e, "GuildContextMenu: user cannot be undefined"), (0, b.bM)(ei, e));
            },
            [ei],
        ),
        ea = (0, ee.A)({ guild: ei, source: X.PE1.GUILD_CONTEXT_MENU, channel: null }),
        ed = (0, $.A)(es),
        eo = (0, G.A)(ei),
        ec = (function (e) {
            let t = (function (e) {
                    let t = (0, T.os)("GuildNotificationItems"),
                        {
                            suppressEveryone: i,
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
                        u = d === X.guM.DISABLED,
                        g = (0, O.A)(e.id);
                    function A(t, i) {
                        D.A.updateGuildNotificationSettings(e.id, t, i);
                    }
                    return (0, n.jsxs)(n.Fragment, {
                        children: [
                            (0, n.jsx)(o.rX, {
                                children: C(t).map((i) => {
                                    let { setting: l, label: s, allUnreads: r } = i,
                                        d = `${l}-${!0 === r}`;
                                    return (0, n.jsx)(
                                        o.iD,
                                        {
                                            group: "guild-notifications",
                                            id: d,
                                            label: s,
                                            action: () =>
                                                (function (i, n) {
                                                    if (!t)
                                                        return void A(
                                                            { message_notifications: i },
                                                            U.G_.notifications(i),
                                                        );
                                                    let l =
                                                        n || i === X.orn.ALL_MESSAGES
                                                            ? P.n3.UNREADS_ALL_MESSAGES
                                                            : P.n3.UNREADS_ONLY_MENTIONS;
                                                    A(
                                                        {
                                                            message_notifications: i,
                                                            flags: (0, v.md)(R.Ay.getGuildFlags(e.id), l),
                                                        },
                                                        U.G_.notifications(i),
                                                    );
                                                })(l, !0 === r),
                                            checked:
                                                !0 === i.allUnreads
                                                    ? a === X.orn.ONLY_MENTIONS && c === B.e.ALL_MESSAGES
                                                    : t && i.setting === X.orn.ONLY_MENTIONS
                                                      ? a === X.orn.ONLY_MENTIONS && c !== B.e.ALL_MESSAGES
                                                      : i.setting === a,
                                        },
                                        d,
                                    );
                                }),
                            }),
                            (0, n.jsxs)(o.rX, {
                                children: [
                                    (0, n.jsx)(o.sL, {
                                        id: "suppress-everyone",
                                        label: N.intl.format(N.t.OWiWAp, {}),
                                        action: () => A({ suppress_everyone: !i }, U.G_.suppressEveryone(!i)),
                                        checked: i,
                                    }),
                                    (0, n.jsx)(o.sL, {
                                        id: "suppress-roles",
                                        label: N.intl.string(N.t["O/QdoD"]),
                                        action: () => A({ suppress_roles: !l }, U.G_.suppressRoles(!l)),
                                        checked: l,
                                    }),
                                    (0, n.jsx)(o.sL, {
                                        id: "suppress-highlights",
                                        label: N.intl.string(N.t.gPuteJ),
                                        action: () => {
                                            A(
                                                { notify_highlights: u ? X.guM.ENABLED : X.guM.DISABLED },
                                                U.G_.highlights(u),
                                            );
                                        },
                                        checked: u,
                                    }),
                                    g,
                                ],
                            }),
                            (0, n.jsx)(o.rX, {
                                children: (0, n.jsx)(o.sL, {
                                    id: "mobile-push",
                                    label: N.intl.string(N.t.h1DL66),
                                    action: () => A({ mobile_push: !s }, U.G_.mobilePush(!s)),
                                    checked: s,
                                }),
                            }),
                        ],
                    });
                })(e),
                l = (0, T.os)("GuildNotificationItems"),
                { messageNotifications: s, unreadSetting: d } = (0, r.cf)(
                    [R.Ay],
                    () => ({
                        messageNotifications: R.Ay.getMessageNotifications(e.id),
                        unreadSetting: R.Ay.getGuildUnreadSetting(e.id),
                    }),
                    [e.id],
                ),
                c =
                    l && s === X.orn.ONLY_MENTIONS && d === B.e.ALL_MESSAGES
                        ? N.intl.string(N.t.JzbSEY)
                        : C(!1).find((e) => {
                              let { setting: t } = e;
                              return t === s;
                          })?.label;
            return null != t
                ? (0, n.jsx)(o.Dr, {
                      id: "guild-notifications",
                      label: N.intl.string(N.t.h850Ss),
                      subtext: c,
                      action: () =>
                          (0, a.openModalLazy)(async () => {
                              let { default: t } = await Promise.all([
                                  i.e("386655"),
                                  i.e("614535"),
                                  i.e("242865"),
                                  i.e("956814"),
                                  i.e("774154"),
                              ]).then(i.bind(i, 585617));
                              return (i) => (0, n.jsx)(t, { ...i, guildId: e.id });
                          }),
                      children: t,
                  })
                : null;
        })(ei),
        eu = (function (e) {
            let t,
                i,
                l = (0, q.aL)(),
                s = (function (e) {
                    let {
                        canManageGuild: t,
                        canManageRoles: i,
                        canBanMembers: n,
                        canManageNicknames: l,
                        canCreateEmojisAndStickers: s,
                        canManageEmojisAndStickers: a,
                        canManageWebhooks: d,
                        canViewAuditLog: o,
                    } = (0, r.cf)(
                        [V.A],
                        () => ({
                            canManageGuild: V.A.can(X.xBc.MANAGE_GUILD, e),
                            canManageRoles: V.A.can(X.xBc.MANAGE_ROLES, e),
                            canBanMembers: V.A.can(X.xBc.BAN_MEMBERS, e),
                            canManageNicknames: V.A.can(X.xBc.MANAGE_NICKNAMES, e),
                            canCreateEmojisAndStickers: V.A.can(X.xBc.CREATE_GUILD_EXPRESSIONS, e),
                            canManageEmojisAndStickers: V.A.can(X.xBc.MANAGE_GUILD_EXPRESSIONS, e),
                            canManageWebhooks: V.A.can(X.xBc.MANAGE_WEBHOOKS, e),
                            canViewAuditLog: V.A.can(X.xBc.VIEW_AUDIT_LOG, e),
                        }),
                        [e],
                    );
                    return t || i || n || l || s || a || d || o;
                })(e);
            if (__OVERLAY__ || !s) return null;
            function d(t) {
                (J.default.open(e.id, t), l.dispatch(X.jej.POPOUT_CLOSE), (0, a.closeAllModals)());
            }
            return (0, n.jsx)(o.Dr, {
                id: "guild-settings",
                label: N.intl.string(N.t["154/bL"]),
                action: () => d(),
                children: ((t = V.A.getGuildPermissionProps(e)),
                (i = (0, W.b)(e.id).length > 0),
                K.Ay.generateSections({
                    showDirtyGuildTemplateIndicator: !1,
                    ...t,
                    canUnlinkChannels: i,
                    welcomeScreenEmpty: Q.A.isEmpty(e.id),
                })
                    .filter((e) => {
                        let { section: t } = e;
                        return "HEADER" !== t && "DIVIDER" !== t;
                    })
                    .filter((e) => null == e.predicate || e.predicate())).map((t) => {
                    let { section: i, label: l, ariaLabel: s } = t;
                    switch (i) {
                        case X.BEX.DELETE:
                            return null;
                        case X.BEX.COMMUNITY:
                            return (0, n.jsx)(o.Dr, { id: i, action: () => d(i), label: N.intl.string(N.t.nRtNqn) }, i);
                        case X.BEX.APP_DIRECTORY:
                            return (0, n.jsx)(
                                o.Dr,
                                {
                                    id: i,
                                    action: () => {
                                        (0, H.transitionToGlobalDiscovery)({
                                            tab: Z.GlobalDiscoveryTab.APPS,
                                            newSessionState: {
                                                guildId: e.id,
                                                entrypoint: { name: z.sW.GUILD_HEADER_POPOUT },
                                            },
                                        });
                                    },
                                    trailingIndicator: { type: "icon", icon: w.t },
                                    icon: w.t,
                                    label: N.intl.string(N.t.AKcFUj),
                                },
                                i,
                            );
                        default:
                            let r = "string" == typeof l ? l : s;
                            if (null == r) return null;
                            return (0, n.jsx)(o.Dr, { id: i, action: () => d(i), label: r }, i);
                    }
                }),
            });
        })(ei),
        eg = (0, _.A)({
            guildId: ei.id,
            userId: E.default.getId(),
            analyticsLocation: {
                page: X.liQ.GUILD_CHANNEL,
                section: X.JJy.CHAT_USERNAME,
                object: X.ZSU.CONTEXT_MENU_ITEM,
            },
        }),
        eA = (0, x.A)(ei),
        ef = (0, A.A)(ei.id),
        eb = (0, S.A)(ei),
        eE =
            ((t = { section: X.JJy.GUILD_LIST }),
            (l = ei.id),
            (u = (0, r.bG)([L.default], () => L.default.getGuildHasUnreadIgnoreMuted(l), [l])),
            (0, n.jsx)(o.Dr, {
                id: "mark-guild-read",
                label: N.intl.string(N.t.e6RscS),
                icon: void 0,
                action: () => (0, j.A)([l], t.section),
                disabled: !u,
            })),
        eh = (0, f.A)(ei.id),
        e_ = (0, p.A)(ei),
        eS = (function (e) {
            let t = (function (e) {
                let [t] = (0, r.yK)([y.Ay], () => {
                        let e = y.Ay.getGuildsTree();
                        return [e, e.version];
                    }),
                    i = t.getNode(e),
                    n = i?.parentId,
                    l = null != n ? t.getNode(n) : void 0,
                    s = l?.children ?? t.getRoots(),
                    a = s.length > 1 ? { first: s[0], last: s[s.length - 1] } : null,
                    d = t.getRoots().filter((e) => e.type === m.PJ.FOLDER);
                return null == i || (0 === d.length && null == a)
                    ? null
                    : {
                          label: N.intl.string(N.t.A95Fzm),
                          destinationsLabel: N.intl.string(N.t.znwvG4),
                          destinations:
                              d.length > 0
                                  ? [
                                        { folderId: null, label: N.intl.string(N.t.IfgLzT), disabled: null == n },
                                        ...d.map((e) => ({ folderId: e.id, label: (0, I.M)(e), disabled: e.id === n })),
                                    ]
                                  : [],
                          placements:
                              null != a
                                  ? {
                                        firstLabel: N.intl.string(null != l ? N.t["9qpRrY"] : N.t.IMqgs9),
                                        lastLabel: N.intl.string(null != l ? N.t.ytlaCY : N.t["8fQe3x"]),
                                        isFirst: a.first === i,
                                        isLast: a.last === i,
                                        moveFirst: () => (0, M.A)(e, a.first.id, !1),
                                        moveLast: () => (0, M.A)(e, a.last.id, !0),
                                    }
                                  : null,
                          moveTo: function (t) {
                              if (null == t) {
                                  if (null == n) return;
                                  (0, M.A)(e, n, !0);
                                  return;
                              }
                              (0, M.A)(e, t, !0, !0);
                          },
                      };
            })(e);
            if (null == t) return null;
            let i = t.destinations.find((e) => null == e.folderId),
                l = t.destinations.filter((e) => null != e.folderId),
                { placements: s } = t;
            return (0, n.jsxs)(o.Dr, {
                id: "move-to",
                label: t.label,
                children: [
                    (0, n.jsx)(o.rX, {
                        children:
                            l.length > 0
                                ? (0, n.jsxs)(o.Dr, {
                                      id: "move-to-folder",
                                      label: t.destinationsLabel,
                                      children: [
                                          null != i
                                              ? (0, n.jsx)(o.rX, {
                                                    children: (0, n.jsx)(o.Dr, {
                                                        id: "no-folder",
                                                        label: i.label,
                                                        disabled: i.disabled,
                                                        action: () => t.moveTo(null),
                                                    }),
                                                })
                                              : null,
                                          (0, n.jsx)(o.rX, {
                                              children: l.map((e) =>
                                                  (0, n.jsx)(
                                                      o.Dr,
                                                      {
                                                          id: String(e.folderId),
                                                          label: e.label,
                                                          disabled: e.disabled,
                                                          action: () => t.moveTo(e.folderId),
                                                      },
                                                      e.folderId,
                                                  ),
                                              ),
                                          }),
                                      ],
                                  })
                                : null,
                    }),
                    (0, n.jsx)(o.rX, {
                        children:
                            null != s
                                ? (0, n.jsxs)(n.Fragment, {
                                      children: [
                                          (0, n.jsx)(o.Dr, {
                                              id: "move-to-first",
                                              label: s.firstLabel,
                                              disabled: s.isFirst,
                                              action: s.moveFirst,
                                          }),
                                          (0, n.jsx)(o.Dr, {
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
        })(es),
        ex =
            ((g = (0, r.bG)([k.Ay], () => k.Ay.get("iar_testing"))),
            null != (et = (0, r.bG)([h.default], () => h.default.getCurrentUser())) && et.isStaff() && g
                ? (0, n.jsx)(o.Dr, {
                      id: "staff-test-guild-report",
                      label: "[STAFF] Test Guild Report",
                      action: () => (0, F.RV)(ei, "web_guild_context_menu"),
                      icon: Y.FlagIcon,
                      color: "danger",
                  })
                : null);
    function ep() {
        (0, a.openModalLazy)(async () => {
            let { default: e } = await i.e("553485").then(i.bind(i, 20508));
            return (t) => (0, n.jsx)(e, { ...t, guild: ei });
        });
    }
    return ei.features.has(X.GuildFeatures.HUB)
        ? (0, n.jsxs)(d.W, {
              "data-menu-migrated": !0,
              navId: "guild-context",
              onClose: c.Z_,
              "aria-label": N.intl.string(N.t.HpQykc),
              onSelect: en,
              children: [
                  (0, n.jsxs)(o.rX, {
                      children: [
                          ea,
                          (0, n.jsx)(o.Dr, {
                              id: "privacy",
                              label: N.intl.string(N.t.IlFwwR),
                              action: () =>
                                  (0, a.openModalLazy)(async () => {
                                      let { default: e } = await Promise.all([
                                          i.e("684986"),
                                          i.e("759174"),
                                          i.e("705871"),
                                          i.e("340346"),
                                          i.e("523638"),
                                          i.e("943534"),
                                          i.e("273084"),
                                          i.e("821403"),
                                          i.e("215890"),
                                          i.e("303198"),
                                      ]).then(i.bind(i, 382573));
                                      return (t) => (0, n.jsx)(e, { ...t, guild: ei });
                                  }),
                          }),
                          eg,
                      ],
                  }),
                  er
                      ? null
                      : (0, n.jsx)(o.rX, {
                            children: (0, n.jsx)(o.Dr, {
                                id: "leave-guild",
                                label: N.intl.string(N.t.Dv8gFT),
                                action: ep,
                                color: "danger",
                            }),
                        }),
                  (0, n.jsx)(o.rX, { children: eb }),
              ],
          })
        : (0, n.jsxs)(d.W, {
              "data-menu-migrated": !0,
              navId: "guild-context",
              onClose: c.Z_,
              "aria-label": N.intl.string(N.t.HpQykc),
              onSelect: en,
              children: [
                  (0, n.jsx)(o.rX, { children: eE }),
                  (0, n.jsx)(o.rX, { children: ea }),
                  (0, n.jsxs)(o.rX, { children: [eo, __OVERLAY__ ? null : ec, ed, eh] }),
                  (0, n.jsxs)(o.rX, {
                      children: [
                          el ? null : eu,
                          __OVERLAY__
                              ? null
                              : (0, n.jsx)(o.Dr, {
                                    id: "privacy",
                                    label: N.intl.string(N.t.BayiAo),
                                    action: () =>
                                        (0, a.openModalLazy)(async () => {
                                            let { default: e } = await Promise.all([
                                                i.e("684986"),
                                                i.e("759174"),
                                                i.e("705871"),
                                                i.e("340346"),
                                                i.e("523638"),
                                                i.e("943534"),
                                                i.e("273084"),
                                                i.e("821403"),
                                                i.e("215890"),
                                                i.e("303198"),
                                            ]).then(i.bind(i, 382573));
                                            return (t) => (0, n.jsx)(e, { ...t, guild: ei });
                                        }),
                                }),
                          eg,
                      ],
                  }),
                  (0, n.jsxs)(o.rX, { children: [eA, ef] }),
                  (0, n.jsx)(o.rX, { children: eS }),
                  (0, n.jsxs)(o.rX, {
                      children: [
                          e_,
                          !er &&
                              (0, n.jsx)(o.Dr, {
                                  id: "leave-guild",
                                  label: N.intl.string(N.t.J2TBi3),
                                  action: ep,
                                  color: "danger",
                              }),
                      ],
                  }),
                  (0, n.jsx)(o.rX, { children: ex }),
                  (0, n.jsx)(o.rX, { children: eb }),
              ],
          });
}
function ei(e) {
    let { analyticsLocations: t } = (0, g.Ay)(u.A.CONTEXT_MENU);
    return (0, n.jsx)(g.f5, { value: t, children: (0, n.jsx)(et, { ...e }) });
}
