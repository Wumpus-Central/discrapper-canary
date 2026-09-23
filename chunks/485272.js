t.d(i, { default: () => $ });
var n = t(477900),
    l = t(284009),
    s = t.n(l),
    a = t(17928),
    r = t(192308),
    d = t(980707),
    o = t(477782),
    c = t(442433),
    u = t(793574),
    g = t(688810),
    A = t(359047),
    E = t(36942),
    _ = t(260509),
    S = t(280450),
    h = t(287809),
    f = t(346247),
    b = t(810263),
    p = t(911612),
    N = t(664967);
t(582128);
var x = t(458294),
    L = t(567035),
    y = t(375708),
    M = t(507238),
    G = t(832712),
    j = t(568873),
    I = t(769591),
    D = t(393432),
    m = t(543465),
    O = t(477427),
    T = t(652215),
    U = t(790782),
    R = t(355097);
function X(e) {
    return [
        { setting: T.orn.ALL_MESSAGES, label: y.intl.string(y.t["n/bTaY"]) },
        ...(e ? [{ setting: T.orn.ONLY_MENTIONS, label: y.intl.string(y.t.JzbSEY), allUnreads: !0 }] : []),
        { setting: T.orn.ONLY_MENTIONS, label: y.intl.format(y.t.L2hmYy, {}) },
        { setting: T.orn.NO_MESSAGES, label: y.intl.string(y.t.CtVGyQ) },
    ];
}
var v = t(138134),
    B = t(865116),
    P = t(928658),
    C = t(811893),
    k = t(837057),
    Y = t(310419),
    w = t(468689),
    H = t(576705),
    F = t(887501),
    J = t(684407),
    V = t(219317),
    W = t(267102),
    z = t(488995),
    Q = t(153594),
    K = t(531335);
function Z(e) {
    var i;
    let l,
        u,
        g,
        Z,
        { guild: $, onSelect: q, hideSettings: ee } = e,
        ei = $.id,
        et = (0, a.bG)(
            [h.default],
            () => {
                let e = h.default.getCurrentUser();
                return (s()(null != e, "GuildContextMenu: user cannot be undefined"), (0, _.bM)($, e));
            },
            [$],
        ),
        en = (0, K.A)({ guild: $, source: T.PE1.GUILD_CONTEXT_MENU, channel: null }),
        el = (0, Q.A)(ei),
        es = (0, M.A)($),
        ea = (function (e) {
            let i = (function (e) {
                    let i = (0, I.os)("GuildNotificationItems"),
                        {
                            suppressEveryone: t,
                            suppressRoles: l,
                            mobilePush: s,
                            messageNotifications: r,
                            notifyHighlights: d,
                            unreadSetting: c,
                        } = (0, a.cf)(
                            [m.Ay],
                            () => ({
                                suppressEveryone: m.Ay.isSuppressEveryoneEnabled(e.id),
                                suppressRoles: m.Ay.isSuppressRolesEnabled(e.id),
                                mobilePush: m.Ay.isMobilePushEnabled(e.id),
                                messageNotifications: m.Ay.getMessageNotifications(e.id),
                                notifyHighlights: m.Ay.getNotifyHighlights(e.id),
                                unreadSetting: m.Ay.getGuildUnreadSetting(e.id),
                            }),
                            [e.id],
                        ),
                        u = d === T.guM.DISABLED,
                        g = (0, j.A)(e.id);
                    function A(i, t) {
                        G.A.updateGuildNotificationSettings(e.id, i, t);
                    }
                    return (0, n.jsxs)(n.Fragment, {
                        children: [
                            (0, n.jsx)(o.rX, {
                                children: X(i).map((t) => {
                                    let { setting: l, label: s, allUnreads: a } = t,
                                        d = `${l}-${!0 === a}`;
                                    return (0, n.jsx)(
                                        o.iD,
                                        {
                                            group: "guild-notifications",
                                            id: d,
                                            label: s,
                                            action: () =>
                                                (function (t, n) {
                                                    if (!i)
                                                        return void A(
                                                            { message_notifications: t },
                                                            O.G_.notifications(t),
                                                        );
                                                    let l =
                                                        n || t === T.orn.ALL_MESSAGES
                                                            ? R.n3.UNREADS_ALL_MESSAGES
                                                            : R.n3.UNREADS_ONLY_MENTIONS;
                                                    A(
                                                        {
                                                            message_notifications: t,
                                                            flags: (0, D.md)(m.Ay.getGuildFlags(e.id), l),
                                                        },
                                                        O.G_.notifications(t),
                                                    );
                                                })(l, !0 === a),
                                            checked:
                                                !0 === t.allUnreads
                                                    ? r === T.orn.ONLY_MENTIONS && c === U.e.ALL_MESSAGES
                                                    : i && t.setting === T.orn.ONLY_MENTIONS
                                                      ? r === T.orn.ONLY_MENTIONS && c !== U.e.ALL_MESSAGES
                                                      : t.setting === r,
                                        },
                                        d,
                                    );
                                }),
                            }),
                            (0, n.jsxs)(o.rX, {
                                children: [
                                    (0, n.jsx)(o.sL, {
                                        id: "suppress-everyone",
                                        label: y.intl.format(y.t.OWiWAp, {}),
                                        action: () => A({ suppress_everyone: !t }, O.G_.suppressEveryone(!t)),
                                        checked: t,
                                    }),
                                    (0, n.jsx)(o.sL, {
                                        id: "suppress-roles",
                                        label: y.intl.string(y.t["O/QdoD"]),
                                        action: () => A({ suppress_roles: !l }, O.G_.suppressRoles(!l)),
                                        checked: l,
                                    }),
                                    (0, n.jsx)(o.sL, {
                                        id: "suppress-highlights",
                                        label: y.intl.string(y.t.gPuteJ),
                                        action: () => {
                                            A(
                                                { notify_highlights: u ? T.guM.ENABLED : T.guM.DISABLED },
                                                O.G_.highlights(u),
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
                                    label: y.intl.string(y.t.h1DL66),
                                    action: () => A({ mobile_push: !s }, O.G_.mobilePush(!s)),
                                    checked: s,
                                }),
                            }),
                        ],
                    });
                })(e),
                l = (0, I.os)("GuildNotificationItems"),
                { messageNotifications: s, unreadSetting: d } = (0, a.cf)(
                    [m.Ay],
                    () => ({
                        messageNotifications: m.Ay.getMessageNotifications(e.id),
                        unreadSetting: m.Ay.getGuildUnreadSetting(e.id),
                    }),
                    [e.id],
                ),
                c =
                    l && s === T.orn.ONLY_MENTIONS && d === U.e.ALL_MESSAGES
                        ? y.intl.string(y.t.JzbSEY)
                        : X(!1).find((e) => {
                              let { setting: i } = e;
                              return i === s;
                          })?.label;
            return null != i
                ? (0, n.jsx)(o.Dr, {
                      id: "guild-notifications",
                      label: y.intl.string(y.t.h850Ss),
                      subtext: c,
                      action: () =>
                          (0, r.openModalLazy)(async () => {
                              let { default: i } = await Promise.all([
                                  t.e("386655"),
                                  t.e("614535"),
                                  t.e("242865"),
                                  t.e("956814"),
                                  t.e("774154"),
                              ]).then(t.bind(t, 585617));
                              return (t) => (0, n.jsx)(i, { ...t, guildId: e.id });
                          }),
                      children: i,
                  })
                : null;
        })($),
        er = (function (e) {
            let i,
                t,
                l = (0, W.aL)(),
                s = (function (e) {
                    let {
                        canManageGuild: i,
                        canManageRoles: t,
                        canBanMembers: n,
                        canManageNicknames: l,
                        canCreateEmojisAndStickers: s,
                        canManageEmojisAndStickers: r,
                        canManageWebhooks: d,
                        canViewAuditLog: o,
                    } = (0, a.cf)(
                        [H.A],
                        () => ({
                            canManageGuild: H.A.can(T.xBc.MANAGE_GUILD, e),
                            canManageRoles: H.A.can(T.xBc.MANAGE_ROLES, e),
                            canBanMembers: H.A.can(T.xBc.BAN_MEMBERS, e),
                            canManageNicknames: H.A.can(T.xBc.MANAGE_NICKNAMES, e),
                            canCreateEmojisAndStickers: H.A.can(T.xBc.CREATE_GUILD_EXPRESSIONS, e),
                            canManageEmojisAndStickers: H.A.can(T.xBc.MANAGE_GUILD_EXPRESSIONS, e),
                            canManageWebhooks: H.A.can(T.xBc.MANAGE_WEBHOOKS, e),
                            canViewAuditLog: H.A.can(T.xBc.VIEW_AUDIT_LOG, e),
                        }),
                        [e],
                    );
                    return i || t || n || l || s || r || d || o;
                })(e);
            if (__OVERLAY__ || !s) return null;
            function d(i) {
                (w.A.open(e.id, i), l.dispatch(T.jej.POPOUT_CLOSE), (0, r.closeAllModals)());
            }
            return (0, n.jsx)(o.Dr, {
                id: "guild-settings",
                label: y.intl.string(y.t["154/bL"]),
                action: () => d(),
                children: ((i = H.A.getGuildPermissionProps(e)),
                (t = (0, F.b)(e.id).length > 0),
                V.Ay.generateSections({
                    showDirtyGuildTemplateIndicator: !1,
                    ...i,
                    canUnlinkChannels: t,
                    welcomeScreenEmpty: J.A.isEmpty(e.id),
                })
                    .filter((e) => {
                        let { section: i } = e;
                        return "HEADER" !== i && "DIVIDER" !== i;
                    })
                    .filter((e) => null == e.predicate || e.predicate())).map((i) => {
                    let { section: t, label: l, ariaLabel: s } = i;
                    switch (t) {
                        case T.BEX.DELETE:
                            return null;
                        case T.BEX.COMMUNITY:
                            return (0, n.jsx)(o.Dr, { id: t, action: () => d(t), label: y.intl.string(y.t.nRtNqn) }, t);
                        case T.BEX.APP_DIRECTORY:
                            return (0, n.jsx)(
                                o.Dr,
                                {
                                    id: t,
                                    action: () => {
                                        (0, k.transitionToGlobalDiscovery)({
                                            tab: z.GlobalDiscoveryTab.APPS,
                                            newSessionState: {
                                                guildId: e.id,
                                                entrypoint: { name: Y.sW.GUILD_HEADER_POPOUT },
                                            },
                                        });
                                    },
                                    trailingIndicator: { type: "icon", icon: C.t },
                                    icon: C.t,
                                    label: y.intl.string(y.t.AKcFUj),
                                },
                                t,
                            );
                        default:
                            let a = "string" == typeof l ? l : s;
                            if (null == a) return null;
                            return (0, n.jsx)(o.Dr, { id: t, action: () => d(t), label: a }, t);
                    }
                }),
            });
        })($),
        ed = (0, f.A)({
            guildId: $.id,
            userId: S.default.getId(),
            analyticsLocation: {
                page: T.liQ.GUILD_CHANNEL,
                section: T.JJy.CHAT_USERNAME,
                object: T.ZSU.CONTEXT_MENU_ITEM,
            },
        }),
        eo = (0, p.A)($),
        ec = (0, A.A)($.id),
        eu = (0, b.A)($),
        eg =
            ((i = { section: T.JJy.GUILD_LIST }),
            (l = $.id),
            (u = (0, a.bG)([x.default], () => x.default.getGuildHasUnreadIgnoreMuted(l), [l])),
            (0, n.jsx)(o.Dr, {
                id: "mark-guild-read",
                label: y.intl.string(y.t.e6RscS),
                icon: void 0,
                action: () => (0, L.A)([l], i.section),
                disabled: !u,
            })),
        eA = (0, E.A)($.id),
        eE = (0, N.A)($),
        e_ =
            ((g = (0, a.bG)([B.Ay], () => B.Ay.get("iar_testing"))),
            null != (Z = (0, a.bG)([h.default], () => h.default.getCurrentUser())) && Z.isStaff() && g
                ? (0, n.jsx)(o.Dr, {
                      id: "staff-test-guild-report",
                      label: "[STAFF] Test Guild Report",
                      action: () => (0, P.RV)($, "web_guild_context_menu"),
                      icon: v.FlagIcon,
                      color: "danger",
                  })
                : null);
    function eS() {
        (0, r.openModalLazy)(async () => {
            let { default: e } = await t.e("553485").then(t.bind(t, 20508));
            return (i) => (0, n.jsx)(e, { ...i, guild: $ });
        });
    }
    return $.features.has(T.GuildFeatures.HUB)
        ? (0, n.jsxs)(d.W, {
              "data-menu-migrated": !0,
              navId: "guild-context",
              onClose: c.Z_,
              "aria-label": y.intl.string(y.t.HpQykc),
              onSelect: q,
              children: [
                  (0, n.jsxs)(o.rX, {
                      children: [
                          en,
                          (0, n.jsx)(o.Dr, {
                              id: "privacy",
                              label: y.intl.string(y.t.IlFwwR),
                              action: () =>
                                  (0, r.openModalLazy)(async () => {
                                      let { default: e } = await Promise.all([
                                          t.e("684986"),
                                          t.e("705871"),
                                          t.e("407408"),
                                          t.e("354902"),
                                          t.e("273084"),
                                          t.e("821403"),
                                          t.e("215890"),
                                          t.e("303198"),
                                      ]).then(t.bind(t, 382573));
                                      return (i) => (0, n.jsx)(e, { ...i, guild: $ });
                                  }),
                          }),
                          ed,
                      ],
                  }),
                  et
                      ? null
                      : (0, n.jsx)(o.rX, {
                            children: (0, n.jsx)(o.Dr, {
                                id: "leave-guild",
                                label: y.intl.string(y.t.Dv8gFT),
                                action: eS,
                                color: "danger",
                            }),
                        }),
                  (0, n.jsx)(o.rX, { children: eu }),
              ],
          })
        : (0, n.jsxs)(d.W, {
              "data-menu-migrated": !0,
              navId: "guild-context",
              onClose: c.Z_,
              "aria-label": y.intl.string(y.t.HpQykc),
              onSelect: q,
              children: [
                  (0, n.jsx)(o.rX, { children: eg }),
                  (0, n.jsx)(o.rX, { children: en }),
                  (0, n.jsxs)(o.rX, { children: [es, __OVERLAY__ ? null : ea, el, eA] }),
                  (0, n.jsxs)(o.rX, {
                      children: [
                          ee ? null : er,
                          __OVERLAY__
                              ? null
                              : (0, n.jsx)(o.Dr, {
                                    id: "privacy",
                                    label: y.intl.string(y.t.BayiAo),
                                    action: () =>
                                        (0, r.openModalLazy)(async () => {
                                            let { default: e } = await Promise.all([
                                                t.e("684986"),
                                                t.e("705871"),
                                                t.e("407408"),
                                                t.e("354902"),
                                                t.e("273084"),
                                                t.e("821403"),
                                                t.e("215890"),
                                                t.e("303198"),
                                            ]).then(t.bind(t, 382573));
                                            return (i) => (0, n.jsx)(e, { ...i, guild: $ });
                                        }),
                                }),
                          ed,
                      ],
                  }),
                  (0, n.jsxs)(o.rX, { children: [eo, ec] }),
                  (0, n.jsxs)(o.rX, {
                      children: [
                          eE,
                          !et &&
                              (0, n.jsx)(o.Dr, {
                                  id: "leave-guild",
                                  label: y.intl.string(y.t.J2TBi3),
                                  action: eS,
                                  color: "danger",
                              }),
                      ],
                  }),
                  (0, n.jsx)(o.rX, { children: e_ }),
                  (0, n.jsx)(o.rX, { children: eu }),
              ],
          });
}
function $(e) {
    let { analyticsLocations: i } = (0, g.Ay)(u.A.CONTEXT_MENU);
    return (0, n.jsx)(g.f5, { value: i, children: (0, n.jsx)(Z, { ...e }) });
}
