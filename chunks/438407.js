n.d(t, { H: () => f, r: () => p }), n(321073);
var l = n(627968),
    r = n(64700),
    a = n(503698),
    i = n.n(a),
    s = n(735438),
    E = n.n(s),
    u = n(989349),
    o = n.n(u),
    _ = n(317097),
    c = n(834730),
    d = n(939249),
    A = n(565645),
    g = n(429913),
    T = n(376310),
    I = n(734057),
    N = n(317525),
    G = n(287809),
    O = n(871237),
    S = n(403362),
    m = n(240248),
    R = n(427262),
    D = n(555067),
    h = n(652215),
    L = n(375708),
    C = n(214876);
let M = { [h.RWi.CREATE]: C.typeCreate, [h.RWi.UPDATE]: C.typeUpdate, [h.RWi.DELETE]: C.typeDelete };
function x(e) {
    let { applicationId: t } = e,
        n = (0, g.h)(t);
    return null == n ? null : (0, l.jsx)(c.E, { variant: "text-md/normal", children: n.name });
}
function U(e, t) {
    return (0, l.jsx)("div", { className: C.colorHook, style: { backgroundColor: t } }, e);
}
class f extends r.PureComponent {
    render() {
        let { actionType: e, targetType: t, action: n, themeOverride: r } = this.props,
            a = null != r ? C[`themeOverride${(0, m.$G)(r)}`] : null,
            s = i()(
                C.icon,
                M[e],
                n === h.F_X.MESSAGE_DELETE
                    ? C.targetMessage
                    : n === h.F_X.AUTO_MODERATION_BLOCK_MESSAGE ||
                        n === h.F_X.AUTO_MODERATION_FLAG_TO_CHANNEL ||
                        n === h.F_X.AUTO_MODERATION_USER_COMMUNICATION_DISABLED ||
                        n === h.F_X.AUTO_MODERATION_QUARANTINE_USER
                      ? C.autoModerationBlockMessage
                      : {
                            [h.GaG.ALL]: C.targetAll,
                            [h.GaG.GUILD]: C.targetGuild,
                            [h.GaG.CHANNEL]: C.targetChannel,
                            [h.GaG.CHANNEL_OVERWRITE]: C.targetChannel,
                            [h.GaG.USER]: C.targetMember,
                            [h.GaG.ROLE]: C.targetRole,
                            [h.GaG.ONBOARDING_PROMPT]: C.targetOnboarding,
                            [h.GaG.GUILD_ONBOARDING]: C.targetOnboarding,
                            [h.GaG.HOME_SETTINGS]: C.targetOnboarding,
                            [h.GaG.INTEGRATION]: C.targetIntegration,
                            [h.GaG.INVITE]: C.targetInvite,
                            [h.GaG.WEBHOOK]: C.targetWebhook,
                            [h.GaG.EMOJI]: C.targetEmoji,
                            [h.GaG.STICKER]: C.targetSticker,
                            [h.GaG.STAGE_INSTANCE]: C.targetStageInstance,
                            [h.GaG.GUILD_SCHEDULED_EVENT]: C.targetGuildScheduledEvent,
                            [h.GaG.GUILD_SCHEDULED_EVENT_EXCEPTION]: C.targetGuildScheduledEvent,
                            [h.GaG.THREAD]: C.thread,
                            [h.GaG.APPLICATION_COMMAND]: C.applicationCommand,
                            [h.GaG.AUTO_MODERATION_RULE]: C.autoModerationRule,
                            [h.GaG.GUILD_HOME]: C.targetGuildHome,
                            [h.GaG.GUILD_SOUNDBOARD]: C.targetGuildSoundboard,
                            [h.GaG.VOICE_CHANNEL_STATUS]: C.targetChannel,
                            [h.GaG.GUILD_MEMBER_VERIFICATION]: C.targetMember,
                            [h.GaG.GUILD_PROFILE]: C.targetGuild,
                        }[t],
                a,
            );
        return (0, l.jsx)("div", { className: s });
    }
}
function p(e) {
    let { log: t, guild: n, onContentClick: a, className: s } = e,
        u = r.useCallback(
            (e) => {
                if (null == t.changes) return null;
                let u = 0,
                    g = t.changes
                        .flatMap((a) => {
                            if (D.shouldNotRenderChangeDetail(t, a)) return null;
                            let { oldValue: i, newValue: s } = (() => {
                                    if (
                                        (t.action === h.F_X.CHANNEL_UPDATE || t.action === h.F_X.CHANNEL_CREATE) &&
                                        a.key === h.gGk.TYPE
                                    )
                                        return {
                                            oldValue: a.oldValue ?? (0, O.Jg)({ type: a.oldValue }),
                                            newValue: a.newValue ?? (0, O.Jg)({ type: a.newValue }),
                                        };
                                    if (
                                        t.action === h.F_X.MEMBER_UPDATE &&
                                        a.key === h.gGk.COMMUNICATION_DISABLED_UNTIL
                                    ) {
                                        let e = o()(a.newValue);
                                        return {
                                            oldValue: a.oldValue,
                                            newValue: e.isValid() ? e.calendar() : a.newValue,
                                        };
                                    }
                                    return t.action === h.F_X.GUILD_UPDATE && a.key === h.gGk.OWNER_ID
                                        ? {
                                              oldValue: R.Ay.getUserTag(a.oldValue, { mode: "username" }),
                                              newValue: R.Ay.getUserTag(a.newValue, { mode: "username" }),
                                          }
                                        : a;
                                })(),
                                d = (() => {
                                    if (
                                        t.action === h.F_X.MEMBER_ROLE_UPDATE ||
                                        (t.action === h.F_X.INVITE_CREATE && a.key === h.gGk.ROLE_IDS)
                                    )
                                        return (function (e) {
                                            let { newValue: t } = e;
                                            return Array.isArray(t)
                                                ? t.map((e) =>
                                                      (0, l.jsx)(
                                                          "div",
                                                          { className: C.subListItem, children: e.name },
                                                          e.id,
                                                      ),
                                                  )
                                                : null;
                                        })(a);
                                    if (
                                        t.targetType === h.GaG.ROLE ||
                                        t.action === h.F_X.CHANNEL_OVERWRITE_CREATE ||
                                        t.action === h.F_X.CHANNEL_OVERWRITE_UPDATE
                                    )
                                        return (function (e, t) {
                                            let { newValue: n } = e;
                                            return Array.isArray(n)
                                                ? n.map((e, n) =>
                                                      (0, l.jsx)(
                                                          "div",
                                                          {
                                                              className: C.subListItem,
                                                              children: D.getStringForPermission(e, t),
                                                          },
                                                          n,
                                                      ),
                                                  )
                                                : null;
                                        })(a, t);
                                    if (
                                        (t.action === h.F_X.CHANNEL_UPDATE || t.action === h.F_X.THREAD_UPDATE) &&
                                        a.key === h.gGk.FLAGS
                                    )
                                        return (function (e) {
                                            let { newValue: t, oldValue: n } = e,
                                                r = [];
                                            return (Array.isArray(n) &&
                                                (r = r.concat(
                                                    n.map((e) =>
                                                        (0, l.jsx)(
                                                            "div",
                                                            {
                                                                className: C.subListItem,
                                                                children: D.getStringForRemovedChannelFlag(e),
                                                            },
                                                            e,
                                                        ),
                                                    ),
                                                )),
                                            Array.isArray(t) &&
                                                (r = r.concat(
                                                    t.map((e) =>
                                                        (0, l.jsx)(
                                                            "div",
                                                            {
                                                                className: C.subListItem,
                                                                children: D.getStringForAddedChannelFlag(e),
                                                            },
                                                            e,
                                                        ),
                                                    ),
                                                )),
                                            r.length > 0)
                                                ? r
                                                : null;
                                        })(a);
                                    if (
                                        (t.action === h.F_X.ONBOARDING_PROMPT_UPDATE ||
                                            t.action === h.F_X.ONBOARDING_PROMPT_CREATE) &&
                                        a.key === h.gGk.OPTIONS
                                    )
                                        return (function (e, t, n) {
                                            let { newValue: r, oldValue: a } = e;
                                            function i(e) {
                                                let t = null != n ? N.A.getRole(n.id, e)?.name : void 0;
                                                return null == t ? null : `@${t}`;
                                            }
                                            function s(e) {
                                                let t = I.A.getChannel(e)?.name;
                                                return null == t ? null : `#${t}`;
                                            }
                                            let u = E().keyBy(a ?? [], "id"),
                                                o = E().keyBy(r ?? [], "id"),
                                                _ = E()
                                                    .difference(Object.keys(o), Object.keys(u))
                                                    .map((e) => o[e]),
                                                d = E()
                                                    .difference(Object.keys(u), Object.keys(o))
                                                    .map((e) => u[e]),
                                                A = E().intersection(Object.keys(o), Object.keys(u));
                                            return (0, l.jsxs)(
                                                "ul",
                                                {
                                                    className: C.onboardingChangeLogContainer,
                                                    children: [
                                                        _.map((e) => {
                                                            let { role_ids: n, channel_ids: r, title: a, id: E } = e,
                                                                u = (n ?? []).map(i).filter(S.Vq),
                                                                o = (r ?? []).map(s).filter(S.Vq);
                                                            return (0, l.jsxs)(
                                                                "li",
                                                                {
                                                                    children: [
                                                                        (0, l.jsxs)("div", {
                                                                            className: C.onboardingChangeLogItemTitle,
                                                                            children: [
                                                                                (0, l.jsx)(f, {
                                                                                    actionType: h.RWi.CREATE,
                                                                                    targetType: t.targetType,
                                                                                    action: t.action,
                                                                                }),
                                                                                (0, l.jsx)(c.E, {
                                                                                    variant: "text-md/normal",
                                                                                    children: L.intl.format(
                                                                                        L.t.CZ1tyo,
                                                                                        { title: a },
                                                                                    ),
                                                                                }),
                                                                            ],
                                                                        }),
                                                                        (0, l.jsxs)("div", {
                                                                            className: C.onboardingChangeLogItemChanges,
                                                                            children: [
                                                                                u.length > 0 &&
                                                                                    (0, l.jsx)(c.E, {
                                                                                        variant: "text-md/normal",
                                                                                        children: L.intl.format(
                                                                                            L.t["gt/5z1"],
                                                                                            { roles: u.join(", ") },
                                                                                        ),
                                                                                    }),
                                                                                o.length > 0 &&
                                                                                    (0, l.jsx)(c.E, {
                                                                                        variant: "text-md/normal",
                                                                                        children: L.intl.format(
                                                                                            L.t["4q006W"],
                                                                                            { channels: o.join(", ") },
                                                                                        ),
                                                                                    }),
                                                                            ],
                                                                        }),
                                                                    ],
                                                                },
                                                                E,
                                                            );
                                                        }),
                                                        d.map((e) =>
                                                            (0, l.jsx)(
                                                                "li",
                                                                {
                                                                    children: (0, l.jsxs)("div", {
                                                                        className: C.onboardingChangeLogItemTitle,
                                                                        children: [
                                                                            (0, l.jsx)(f, {
                                                                                actionType: h.RWi.DELETE,
                                                                                targetType: t.targetType,
                                                                                action: t.action,
                                                                            }),
                                                                            (0, l.jsx)(c.E, {
                                                                                variant: "text-md/normal",
                                                                                children: L.intl.format(L.t["m3dt+K"], {
                                                                                    title: e.title,
                                                                                }),
                                                                            }),
                                                                        ],
                                                                    }),
                                                                },
                                                                e.id,
                                                            ),
                                                        ),
                                                        A.map((e) =>
                                                            (function (e, n) {
                                                                let { title: r, id: a } = n,
                                                                    u = e.role_ids.map(i).filter(S.Vq),
                                                                    o = e.channel_ids.map(s).filter(S.Vq),
                                                                    _ = n.role_ids.map(i).filter(S.Vq),
                                                                    d = n.channel_ids.map(s).filter(S.Vq),
                                                                    A = E().difference(_, u),
                                                                    g = E().difference(u, _),
                                                                    T = E().difference(d, o),
                                                                    I = E().difference(o, d),
                                                                    N = [];
                                                                return (E().isEqual(e.title, n.title) ||
                                                                    N.push("title"),
                                                                E().isEqual(e.description, n.description) ||
                                                                    N.push("description"),
                                                                0 === A.length &&
                                                                    0 === g.length &&
                                                                    0 === T.length &&
                                                                    0 === I.length &&
                                                                    0 === N.length)
                                                                    ? null
                                                                    : (0, l.jsxs)(
                                                                          "li",
                                                                          {
                                                                              children: [
                                                                                  (0, l.jsxs)("div", {
                                                                                      className:
                                                                                          C.onboardingChangeLogItemTitle,
                                                                                      children: [
                                                                                          (0, l.jsx)(f, {
                                                                                              actionType: h.RWi.UPDATE,
                                                                                              targetType: t.targetType,
                                                                                              action: t.action,
                                                                                          }),
                                                                                          (0, l.jsx)(c.E, {
                                                                                              variant: "text-md/normal",
                                                                                              children: L.intl.format(
                                                                                                  L.t["WZO+ia"],
                                                                                                  { title: r },
                                                                                              ),
                                                                                          }),
                                                                                      ],
                                                                                  }),
                                                                                  (0, l.jsxs)("div", {
                                                                                      className:
                                                                                          C.onboardingChangeLogItemChanges,
                                                                                      children: [
                                                                                          A.length > 0 &&
                                                                                              (0, l.jsx)(c.E, {
                                                                                                  variant:
                                                                                                      "text-md/normal",
                                                                                                  children:
                                                                                                      L.intl.format(
                                                                                                          L.t["R+km+d"],
                                                                                                          {
                                                                                                              roles: A.join(
                                                                                                                  ", ",
                                                                                                              ),
                                                                                                          },
                                                                                                      ),
                                                                                              }),
                                                                                          g.length > 0 &&
                                                                                              (0, l.jsx)(c.E, {
                                                                                                  variant:
                                                                                                      "text-md/normal",
                                                                                                  children:
                                                                                                      L.intl.format(
                                                                                                          L.t.xIVRoU,
                                                                                                          {
                                                                                                              roles: g.join(
                                                                                                                  ", ",
                                                                                                              ),
                                                                                                          },
                                                                                                      ),
                                                                                              }),
                                                                                          T.length > 0 &&
                                                                                              (0, l.jsx)(c.E, {
                                                                                                  variant:
                                                                                                      "text-md/normal",
                                                                                                  children:
                                                                                                      L.intl.format(
                                                                                                          L.t.iYowX4,
                                                                                                          {
                                                                                                              channels:
                                                                                                                  T.join(
                                                                                                                      ", ",
                                                                                                                  ),
                                                                                                          },
                                                                                                      ),
                                                                                              }),
                                                                                          I.length > 0 &&
                                                                                              (0, l.jsx)(c.E, {
                                                                                                  variant:
                                                                                                      "text-md/normal",
                                                                                                  children:
                                                                                                      L.intl.format(
                                                                                                          L.t.JLdJpL,
                                                                                                          {
                                                                                                              channels:
                                                                                                                  I.join(
                                                                                                                      ", ",
                                                                                                                  ),
                                                                                                          },
                                                                                                      ),
                                                                                              }),
                                                                                          N.map((t, r) =>
                                                                                              (0, l.jsx)(
                                                                                                  c.E,
                                                                                                  {
                                                                                                      variant:
                                                                                                          "text-md/normal",
                                                                                                      children:
                                                                                                          L.intl.format(
                                                                                                              L.t[
                                                                                                                  "0698za"
                                                                                                              ],
                                                                                                              {
                                                                                                                  key: t,
                                                                                                                  oldValue:
                                                                                                                      e[
                                                                                                                          t
                                                                                                                      ],
                                                                                                                  newValue:
                                                                                                                      n[
                                                                                                                          t
                                                                                                                      ],
                                                                                                              },
                                                                                                          ),
                                                                                                  },
                                                                                                  r,
                                                                                              ),
                                                                                          ),
                                                                                      ],
                                                                                  }),
                                                                              ],
                                                                          },
                                                                          a,
                                                                      );
                                                            })(u[e], o[e]),
                                                        ),
                                                    ],
                                                },
                                                "options",
                                            );
                                        })(a, t, n);
                                    if (
                                        t.action === h.F_X.HOME_SETTINGS_CREATE ||
                                        t.action === h.F_X.HOME_SETTINGS_UPDATE
                                    )
                                        return (function (e, t) {
                                            var n, r;
                                            let { oldValue: a, newValue: i, key: s } = e,
                                                { targetType: u, action: o } = t;
                                            switch (s) {
                                                case h.gGk.WELCOME_MESSAGE:
                                                    let _, d, A, g;
                                                    return (
                                                        (_ = G.default.getUser(a?.author_ids?.[0])),
                                                        (d = G.default.getUser(i.author_ids?.[0])),
                                                        (A =
                                                            _?.id !== d?.id
                                                                ? (0, l.jsx)("li", {
                                                                      children: (0, l.jsx)("div", {
                                                                          className: C.onboardingChangeLogItemTitle,
                                                                          children: (0, l.jsx)(c.E, {
                                                                              variant: "text-md/normal",
                                                                              children: L.intl.format(L.t["PrOzA+"], {
                                                                                  oldUser:
                                                                                      _?.username ??
                                                                                      L.intl.string(L.t.PoWNfe),
                                                                                  newUser:
                                                                                      d?.username ??
                                                                                      L.intl.string(L.t.PoWNfe),
                                                                              }),
                                                                          }),
                                                                      }),
                                                                  })
                                                                : null),
                                                        (g =
                                                            a?.message !== i.message
                                                                ? (0, l.jsx)("li", {
                                                                      children: (0, l.jsx)("div", {
                                                                          className: C.onboardingChangeLogItemTitle,
                                                                          children: (0, l.jsx)(c.E, {
                                                                              variant: "text-md/normal",
                                                                              children: L.intl.format(L.t.oB7rBb, {
                                                                                  oldMessage:
                                                                                      a?.message ??
                                                                                      L.intl.string(L.t.PoWNfe),
                                                                                  newMessage: i.message,
                                                                              }),
                                                                          }),
                                                                      }),
                                                                  })
                                                                : null),
                                                        (0, l.jsxs)("ul", { children: [A, g] })
                                                    );
                                                case h.gGk.NEW_MEMBER_ACTIONS:
                                                    let T, I, N, O, S, m;
                                                    return (
                                                        (T = (n = a ?? []).map((e) => e.channel_id)),
                                                        (I = i.map((e) => e.channel_id)),
                                                        (N = E().difference(I, T)),
                                                        (O = E().difference(T, I)),
                                                        (S = i.filter((e) => N.includes(e.channel_id))),
                                                        (m = n.filter((e) => O.includes(e.channel_id))),
                                                        (0, l.jsxs)("ul", {
                                                            children: [
                                                                S.map((e) =>
                                                                    (0, l.jsx)(
                                                                        "li",
                                                                        {
                                                                            children: (0, l.jsxs)("div", {
                                                                                className:
                                                                                    C.onboardingChangeLogItemTitle,
                                                                                children: [
                                                                                    (0, l.jsx)(f, {
                                                                                        actionType: h.RWi.CREATE,
                                                                                        targetType: u,
                                                                                        action: o,
                                                                                    }),
                                                                                    (0, l.jsx)(c.E, {
                                                                                        variant: "text-md/normal",
                                                                                        children: L.intl.format(
                                                                                            L.t.oFSu66,
                                                                                            { name: e.title },
                                                                                        ),
                                                                                    }),
                                                                                ],
                                                                            }),
                                                                        },
                                                                        e.channel_id,
                                                                    ),
                                                                ),
                                                                m.map((e) =>
                                                                    (0, l.jsx)(
                                                                        "li",
                                                                        {
                                                                            children: (0, l.jsxs)("div", {
                                                                                className:
                                                                                    C.onboardingChangeLogItemTitle,
                                                                                children: [
                                                                                    (0, l.jsx)(f, {
                                                                                        actionType: h.RWi.DELETE,
                                                                                        targetType: u,
                                                                                        action: o,
                                                                                    }),
                                                                                    (0, l.jsx)(c.E, {
                                                                                        variant: "text-md/normal",
                                                                                        children: L.intl.format(
                                                                                            L.t.GssWar,
                                                                                            { name: e.title },
                                                                                        ),
                                                                                    }),
                                                                                ],
                                                                            }),
                                                                        },
                                                                        e.channel_id,
                                                                    ),
                                                                ),
                                                            ],
                                                        })
                                                    );
                                                case h.gGk.RESOURCE_CHANNELS:
                                                    let R, D, M, x, U, p;
                                                    return (
                                                        (R = (r = a ?? []).map((e) => e.channel_id)),
                                                        (D = i.map((e) => e.channel_id)),
                                                        (M = E().difference(D, R)),
                                                        (x = E().difference(R, D)),
                                                        (U = i.filter((e) => M.includes(e.channel_id))),
                                                        (p = r.filter((e) => x.includes(e.channel_id))),
                                                        (0, l.jsxs)("ul", {
                                                            children: [
                                                                U.map((e) =>
                                                                    (0, l.jsx)(
                                                                        "li",
                                                                        {
                                                                            children: (0, l.jsxs)("div", {
                                                                                className:
                                                                                    C.onboardingChangeLogItemTitle,
                                                                                children: [
                                                                                    (0, l.jsx)(f, {
                                                                                        actionType: h.RWi.CREATE,
                                                                                        targetType: u,
                                                                                        action: o,
                                                                                    }),
                                                                                    (0, l.jsx)(c.E, {
                                                                                        variant: "text-md/normal",
                                                                                        children: L.intl.format(
                                                                                            L.t.HlGndE,
                                                                                            { name: e.title },
                                                                                        ),
                                                                                    }),
                                                                                ],
                                                                            }),
                                                                        },
                                                                        e.channel_id,
                                                                    ),
                                                                ),
                                                                p.map((e) =>
                                                                    (0, l.jsx)(
                                                                        "li",
                                                                        {
                                                                            children: (0, l.jsxs)("div", {
                                                                                className:
                                                                                    C.onboardingChangeLogItemTitle,
                                                                                children: [
                                                                                    (0, l.jsx)(f, {
                                                                                        actionType: h.RWi.DELETE,
                                                                                        targetType: u,
                                                                                        action: o,
                                                                                    }),
                                                                                    (0, l.jsx)(c.E, {
                                                                                        variant: "text-md/normal",
                                                                                        children: L.intl.format(
                                                                                            L.t["7pysg6"],
                                                                                            { name: e.title },
                                                                                        ),
                                                                                    }),
                                                                                ],
                                                                            }),
                                                                        },
                                                                        e.channel_id,
                                                                    ),
                                                                ),
                                                            ],
                                                        })
                                                    );
                                                default:
                                                    return null;
                                            }
                                        })(a, t);
                                    return null;
                                })(),
                                g = e[a.key];
                            return (function (e) {
                                let {
                                    changeItem: t,
                                    subChanges: n,
                                    changeNumber: a,
                                    log: i,
                                    oldValue: s,
                                    newValue: E,
                                    change: u,
                                } = e;
                                if (null == t) return console.warn("No change string for", u), null;
                                let o = L.intl.format(t, {
                                    oldValue: s,
                                    newValue: E,
                                    count: Array.isArray(E) ? E.length : 0,
                                    subtarget: i.options.subtarget ?? u.subtarget ?? "",
                                    newColorHook: (e, t) => U(t, u.newValue),
                                    newColorsHook: (e, t) => {
                                        let { primary_color: n, secondary_color: a, tertiary_color: i } = E;
                                        return (0, l.jsx)(
                                            "span",
                                            {
                                                children: [n, a, i]
                                                    .filter(S.Vq)
                                                    .map((e, n) =>
                                                        (0, l.jsxs)(
                                                            r.Fragment,
                                                            {
                                                                children: [
                                                                    (0, l.jsx)("span", {
                                                                        className: C.colorsHook,
                                                                        children: `${n > 0 ? ", " : ""}${(0, _.Hl)(e).toUpperCase()} `,
                                                                    }),
                                                                    U(t, (0, _.Hl)(e)),
                                                                ],
                                                            },
                                                            n,
                                                        ),
                                                    ),
                                            },
                                            t,
                                        );
                                    },
                                    oldColorHook: (e, t) => U(t, u.oldValue),
                                    oldTagHook: (e, t) => (0, l.jsx)(T.A, { tag: s, size: T.A.Sizes.SMALL }, t),
                                    newTagHook: (e, t) => (0, l.jsx)(T.A, { tag: E, size: T.A.Sizes.SMALL }, t),
                                    oldEmojiHook: (e, t) => (0, l.jsx)(A.A, { emojiId: s }, t),
                                    newEmojiHook: (e, t) => (0, l.jsx)(A.A, { emojiId: E }, t),
                                    applicationHook: (e, t) =>
                                        (0, l.jsx)(x, { applicationId: s?.application_id ?? E?.application_id }, t),
                                });
                                return null == o
                                    ? null
                                    : (0, l.jsxs)(
                                          "div",
                                          {
                                              className: C.detail,
                                              style: { position: "relative", top: 1 },
                                              children: [
                                                  (0, l.jsxs)(c.E, {
                                                      className: C.prefix,
                                                      variant: "code",
                                                      color: (function (e) {
                                                          switch (e) {
                                                              case h.RWi.CREATE:
                                                                  return "text-feedback-positive";
                                                              case h.RWi.DELETE:
                                                                  return "text-feedback-critical";
                                                              default:
                                                                  return "text-feedback-warning";
                                                          }
                                                      })(i.actionType),
                                                      children: [
                                                          a < 10 ? `0${a}` : a,
                                                          (0, l.jsx)("span", { className: C.dash, children: "\u2014" }),
                                                      ],
                                                  }),
                                                  (0, l.jsxs)("div", {
                                                      className: C.change,
                                                      children: [
                                                          (0, l.jsx)("div", { className: C.changeStr, children: o }),
                                                          null != n ? (0, l.jsx)("div", { children: n }) : null,
                                                      ],
                                                  }),
                                              ],
                                          },
                                          a,
                                      );
                            })({
                                changeItem: "function" == typeof g ? g(a) : g,
                                subChanges: d,
                                changeNumber: ++u,
                                log: t,
                                oldValue: i,
                                newValue: s,
                                change: a,
                            });
                        })
                        .filter(S.Vq);
                return (0, l.jsx)(d.D, { onClick: a, className: i()(C.changeDetails, s), children: g });
            },
            [t, n, a, s],
        );
    return r.useMemo(() => u(D.getChangeStrings(t)), [u, t]);
}
