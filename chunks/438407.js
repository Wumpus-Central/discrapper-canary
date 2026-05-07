n.d(t, { H: () => f, r: () => p }), n(321073);
var l = n(627968),
    r = n(64700),
    a = n(503698),
    i = n.n(a),
    s = n(735438),
    E = n.n(s),
    u = n(989349),
    _ = n.n(u),
    c = n(317097),
    o = n(834730),
    A = n(939249),
    d = n(565645),
    T = n(429913),
    g = n(376310),
    I = n(734057),
    N = n(317525),
    G = n(287809),
    O = n(871237),
    S = n(403362),
    R = n(240248),
    D = n(427262),
    m = n(555067),
    L = n(652215),
    h = n(375708),
    C = n(214876);
let M = { [L.RWi.CREATE]: C.typeCreate, [L.RWi.UPDATE]: C.typeUpdate, [L.RWi.DELETE]: C.typeDelete };
function U(e) {
    let { applicationId: t } = e,
        n = (0, T.h)(t);
    return null == n ? null : (0, l.jsx)(o.E, { variant: "text-md/normal", children: n.name });
}
function x(e, t) {
    return (0, l.jsx)("div", { className: C.colorHook, style: { backgroundColor: t } }, e);
}
class f extends r.PureComponent {
    render() {
        let { actionType: e, targetType: t, action: n, themeOverride: r } = this.props,
            a = null != r ? C[`themeOverride${(0, R.$G)(r)}`] : null,
            s = i()(
                C.icon,
                M[e],
                n === L.F_X.MESSAGE_DELETE
                    ? C.targetMessage
                    : n === L.F_X.AUTO_MODERATION_BLOCK_MESSAGE ||
                        n === L.F_X.AUTO_MODERATION_FLAG_TO_CHANNEL ||
                        n === L.F_X.AUTO_MODERATION_USER_COMMUNICATION_DISABLED ||
                        n === L.F_X.AUTO_MODERATION_QUARANTINE_USER
                      ? C.autoModerationBlockMessage
                      : {
                            [L.GaG.ALL]: C.targetAll,
                            [L.GaG.GUILD]: C.targetGuild,
                            [L.GaG.CHANNEL]: C.targetChannel,
                            [L.GaG.CHANNEL_OVERWRITE]: C.targetChannel,
                            [L.GaG.USER]: C.targetMember,
                            [L.GaG.ROLE]: C.targetRole,
                            [L.GaG.ONBOARDING_PROMPT]: C.targetOnboarding,
                            [L.GaG.GUILD_ONBOARDING]: C.targetOnboarding,
                            [L.GaG.HOME_SETTINGS]: C.targetOnboarding,
                            [L.GaG.INTEGRATION]: C.targetIntegration,
                            [L.GaG.INVITE]: C.targetInvite,
                            [L.GaG.WEBHOOK]: C.targetWebhook,
                            [L.GaG.EMOJI]: C.targetEmoji,
                            [L.GaG.STICKER]: C.targetSticker,
                            [L.GaG.STAGE_INSTANCE]: C.targetStageInstance,
                            [L.GaG.GUILD_SCHEDULED_EVENT]: C.targetGuildScheduledEvent,
                            [L.GaG.GUILD_SCHEDULED_EVENT_EXCEPTION]: C.targetGuildScheduledEvent,
                            [L.GaG.THREAD]: C.thread,
                            [L.GaG.APPLICATION_COMMAND]: C.applicationCommand,
                            [L.GaG.AUTO_MODERATION_RULE]: C.autoModerationRule,
                            [L.GaG.GUILD_HOME]: C.targetGuildHome,
                            [L.GaG.GUILD_SOUNDBOARD]: C.targetGuildSoundboard,
                            [L.GaG.VOICE_CHANNEL_STATUS]: C.targetChannel,
                            [L.GaG.GUILD_MEMBER_VERIFICATION]: C.targetMember,
                            [L.GaG.GUILD_PROFILE]: C.targetGuild,
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
                    T = t.changes
                        .flatMap((a) => {
                            if (m.shouldNotRenderChangeDetail(t, a)) return null;
                            let { oldValue: i, newValue: s } = (() => {
                                    if (
                                        (t.action === L.F_X.CHANNEL_UPDATE || t.action === L.F_X.CHANNEL_CREATE) &&
                                        a.key === L.gGk.TYPE
                                    )
                                        return {
                                            oldValue: a.oldValue ?? (0, O.Jg)({ type: a.oldValue }),
                                            newValue: a.newValue ?? (0, O.Jg)({ type: a.newValue }),
                                        };
                                    if (
                                        t.action === L.F_X.MEMBER_UPDATE &&
                                        a.key === L.gGk.COMMUNICATION_DISABLED_UNTIL
                                    ) {
                                        let e = _()(a.newValue);
                                        return {
                                            oldValue: a.oldValue,
                                            newValue: e.isValid() ? e.calendar() : a.newValue,
                                        };
                                    }
                                    return t.action === L.F_X.GUILD_UPDATE && a.key === L.gGk.OWNER_ID
                                        ? {
                                              oldValue: D.Ay.getUserTag(a.oldValue, { mode: "username" }),
                                              newValue: D.Ay.getUserTag(a.newValue, { mode: "username" }),
                                          }
                                        : a;
                                })(),
                                A = (() => {
                                    if (
                                        t.action === L.F_X.MEMBER_ROLE_UPDATE ||
                                        (t.action === L.F_X.INVITE_CREATE && a.key === L.gGk.ROLE_IDS)
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
                                        t.targetType === L.GaG.ROLE ||
                                        t.action === L.F_X.CHANNEL_OVERWRITE_CREATE ||
                                        t.action === L.F_X.CHANNEL_OVERWRITE_UPDATE
                                    )
                                        return (function (e, t) {
                                            let { newValue: n } = e;
                                            return Array.isArray(n)
                                                ? n.map((e, n) =>
                                                      (0, l.jsx)(
                                                          "div",
                                                          {
                                                              className: C.subListItem,
                                                              children: m.getStringForPermission(e, t),
                                                          },
                                                          n,
                                                      ),
                                                  )
                                                : null;
                                        })(a, t);
                                    if (
                                        (t.action === L.F_X.CHANNEL_UPDATE || t.action === L.F_X.THREAD_UPDATE) &&
                                        a.key === L.gGk.FLAGS
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
                                                                children: m.getStringForRemovedChannelFlag(e),
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
                                                                children: m.getStringForAddedChannelFlag(e),
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
                                        (t.action === L.F_X.ONBOARDING_PROMPT_UPDATE ||
                                            t.action === L.F_X.ONBOARDING_PROMPT_CREATE) &&
                                        a.key === L.gGk.OPTIONS
                                    )
                                        return (function (e, t, n) {
                                            let { newValue: r, oldValue: a } = e,
                                                i = (e) => {
                                                    let t = null != n ? N.A.getRole(n.id, e)?.name : void 0;
                                                    return null == t ? null : `@${t}`;
                                                },
                                                s = (e) => {
                                                    let t = I.A.getChannel(e)?.name;
                                                    return null == t ? null : `#${t}`;
                                                },
                                                u = E().keyBy(a ?? [], "id"),
                                                _ = E().keyBy(r ?? [], "id"),
                                                c = E()
                                                    .difference(Object.keys(_), Object.keys(u))
                                                    .map((e) => _[e]),
                                                A = E()
                                                    .difference(Object.keys(u), Object.keys(_))
                                                    .map((e) => u[e]),
                                                d = E().intersection(Object.keys(_), Object.keys(u));
                                            return (0, l.jsxs)(
                                                "ul",
                                                {
                                                    className: C.onboardingChangeLogContainer,
                                                    children: [
                                                        c.map((e) => {
                                                            let { role_ids: n, channel_ids: r, title: a, id: E } = e,
                                                                u = (n ?? []).map(i).filter(S.Vq),
                                                                _ = (r ?? []).map(s).filter(S.Vq);
                                                            return (0, l.jsxs)(
                                                                "li",
                                                                {
                                                                    children: [
                                                                        (0, l.jsxs)("div", {
                                                                            className: C.onboardingChangeLogItemTitle,
                                                                            children: [
                                                                                (0, l.jsx)(f, {
                                                                                    actionType: L.RWi.CREATE,
                                                                                    targetType: t.targetType,
                                                                                    action: t.action,
                                                                                }),
                                                                                (0, l.jsx)(o.E, {
                                                                                    variant: "text-md/normal",
                                                                                    children: h.intl.format(
                                                                                        h.t.CZ1tyo,
                                                                                        { title: a },
                                                                                    ),
                                                                                }),
                                                                            ],
                                                                        }),
                                                                        (0, l.jsxs)("div", {
                                                                            className: C.onboardingChangeLogItemChanges,
                                                                            children: [
                                                                                u.length > 0 &&
                                                                                    (0, l.jsx)(o.E, {
                                                                                        variant: "text-md/normal",
                                                                                        children: h.intl.format(
                                                                                            h.t["gt/5z1"],
                                                                                            { roles: u.join(", ") },
                                                                                        ),
                                                                                    }),
                                                                                _.length > 0 &&
                                                                                    (0, l.jsx)(o.E, {
                                                                                        variant: "text-md/normal",
                                                                                        children: h.intl.format(
                                                                                            h.t["4q006W"],
                                                                                            { channels: _.join(", ") },
                                                                                        ),
                                                                                    }),
                                                                            ],
                                                                        }),
                                                                    ],
                                                                },
                                                                E,
                                                            );
                                                        }),
                                                        A.map((e) =>
                                                            (0, l.jsx)(
                                                                "li",
                                                                {
                                                                    children: (0, l.jsxs)("div", {
                                                                        className: C.onboardingChangeLogItemTitle,
                                                                        children: [
                                                                            (0, l.jsx)(f, {
                                                                                actionType: L.RWi.DELETE,
                                                                                targetType: t.targetType,
                                                                                action: t.action,
                                                                            }),
                                                                            (0, l.jsx)(o.E, {
                                                                                variant: "text-md/normal",
                                                                                children: h.intl.format(h.t["m3dt+K"], {
                                                                                    title: e.title,
                                                                                }),
                                                                            }),
                                                                        ],
                                                                    }),
                                                                },
                                                                e.id,
                                                            ),
                                                        ),
                                                        d.map((e) =>
                                                            ((e, n) => {
                                                                let { title: r, id: a } = n,
                                                                    u = e.role_ids.map(i).filter(S.Vq),
                                                                    _ = e.channel_ids.map(s).filter(S.Vq),
                                                                    c = n.role_ids.map(i).filter(S.Vq),
                                                                    A = n.channel_ids.map(s).filter(S.Vq),
                                                                    d = E().difference(c, u),
                                                                    T = E().difference(u, c),
                                                                    g = E().difference(A, _),
                                                                    I = E().difference(_, A),
                                                                    N = [];
                                                                return (E().isEqual(e.title, n.title) ||
                                                                    N.push("title"),
                                                                E().isEqual(e.description, n.description) ||
                                                                    N.push("description"),
                                                                0 === d.length &&
                                                                    0 === T.length &&
                                                                    0 === g.length &&
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
                                                                                              actionType: L.RWi.UPDATE,
                                                                                              targetType: t.targetType,
                                                                                              action: t.action,
                                                                                          }),
                                                                                          (0, l.jsx)(o.E, {
                                                                                              variant: "text-md/normal",
                                                                                              children: h.intl.format(
                                                                                                  h.t["WZO+ia"],
                                                                                                  { title: r },
                                                                                              ),
                                                                                          }),
                                                                                      ],
                                                                                  }),
                                                                                  (0, l.jsxs)("div", {
                                                                                      className:
                                                                                          C.onboardingChangeLogItemChanges,
                                                                                      children: [
                                                                                          d.length > 0 &&
                                                                                              (0, l.jsx)(o.E, {
                                                                                                  variant:
                                                                                                      "text-md/normal",
                                                                                                  children:
                                                                                                      h.intl.format(
                                                                                                          h.t["R+km+d"],
                                                                                                          {
                                                                                                              roles: d.join(
                                                                                                                  ", ",
                                                                                                              ),
                                                                                                          },
                                                                                                      ),
                                                                                              }),
                                                                                          T.length > 0 &&
                                                                                              (0, l.jsx)(o.E, {
                                                                                                  variant:
                                                                                                      "text-md/normal",
                                                                                                  children:
                                                                                                      h.intl.format(
                                                                                                          h.t.xIVRoU,
                                                                                                          {
                                                                                                              roles: T.join(
                                                                                                                  ", ",
                                                                                                              ),
                                                                                                          },
                                                                                                      ),
                                                                                              }),
                                                                                          g.length > 0 &&
                                                                                              (0, l.jsx)(o.E, {
                                                                                                  variant:
                                                                                                      "text-md/normal",
                                                                                                  children:
                                                                                                      h.intl.format(
                                                                                                          h.t.iYowX4,
                                                                                                          {
                                                                                                              channels:
                                                                                                                  g.join(
                                                                                                                      ", ",
                                                                                                                  ),
                                                                                                          },
                                                                                                      ),
                                                                                              }),
                                                                                          I.length > 0 &&
                                                                                              (0, l.jsx)(o.E, {
                                                                                                  variant:
                                                                                                      "text-md/normal",
                                                                                                  children:
                                                                                                      h.intl.format(
                                                                                                          h.t.JLdJpL,
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
                                                                                                  o.E,
                                                                                                  {
                                                                                                      variant:
                                                                                                          "text-md/normal",
                                                                                                      children:
                                                                                                          h.intl.format(
                                                                                                              h.t[
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
                                                            })(u[e], _[e]),
                                                        ),
                                                    ],
                                                },
                                                "options",
                                            );
                                        })(a, t, n);
                                    if (
                                        t.action === L.F_X.HOME_SETTINGS_CREATE ||
                                        t.action === L.F_X.HOME_SETTINGS_UPDATE
                                    )
                                        return (function (e, t) {
                                            var n, r;
                                            let { oldValue: a, newValue: i, key: s } = e,
                                                { targetType: u, action: _ } = t;
                                            switch (s) {
                                                case L.gGk.WELCOME_MESSAGE:
                                                    let c, A, d, T;
                                                    return (
                                                        (c = G.default.getUser(a?.author_ids?.[0])),
                                                        (A = G.default.getUser(i.author_ids?.[0])),
                                                        (d =
                                                            c?.id !== A?.id
                                                                ? (0, l.jsx)("li", {
                                                                      children: (0, l.jsx)("div", {
                                                                          className: C.onboardingChangeLogItemTitle,
                                                                          children: (0, l.jsx)(o.E, {
                                                                              variant: "text-md/normal",
                                                                              children: h.intl.format(h.t["PrOzA+"], {
                                                                                  oldUser:
                                                                                      c?.username ??
                                                                                      h.intl.string(h.t.PoWNfe),
                                                                                  newUser:
                                                                                      A?.username ??
                                                                                      h.intl.string(h.t.PoWNfe),
                                                                              }),
                                                                          }),
                                                                      }),
                                                                  })
                                                                : null),
                                                        (T =
                                                            a?.message !== i.message
                                                                ? (0, l.jsx)("li", {
                                                                      children: (0, l.jsx)("div", {
                                                                          className: C.onboardingChangeLogItemTitle,
                                                                          children: (0, l.jsx)(o.E, {
                                                                              variant: "text-md/normal",
                                                                              children: h.intl.format(h.t.oB7rBb, {
                                                                                  oldMessage:
                                                                                      a?.message ??
                                                                                      h.intl.string(h.t.PoWNfe),
                                                                                  newMessage: i.message,
                                                                              }),
                                                                          }),
                                                                      }),
                                                                  })
                                                                : null),
                                                        (0, l.jsxs)("ul", { children: [d, T] })
                                                    );
                                                case L.gGk.NEW_MEMBER_ACTIONS:
                                                    let g, I, N, O, S, R;
                                                    return (
                                                        (g = (n = a ?? []).map((e) => e.channel_id)),
                                                        (I = i.map((e) => e.channel_id)),
                                                        (N = E().difference(I, g)),
                                                        (O = E().difference(g, I)),
                                                        (S = i.filter((e) => N.includes(e.channel_id))),
                                                        (R = n.filter((e) => O.includes(e.channel_id))),
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
                                                                                        actionType: L.RWi.CREATE,
                                                                                        targetType: u,
                                                                                        action: _,
                                                                                    }),
                                                                                    (0, l.jsx)(o.E, {
                                                                                        variant: "text-md/normal",
                                                                                        children: h.intl.format(
                                                                                            h.t.oFSu66,
                                                                                            { name: e.title },
                                                                                        ),
                                                                                    }),
                                                                                ],
                                                                            }),
                                                                        },
                                                                        e.channel_id,
                                                                    ),
                                                                ),
                                                                R.map((e) =>
                                                                    (0, l.jsx)(
                                                                        "li",
                                                                        {
                                                                            children: (0, l.jsxs)("div", {
                                                                                className:
                                                                                    C.onboardingChangeLogItemTitle,
                                                                                children: [
                                                                                    (0, l.jsx)(f, {
                                                                                        actionType: L.RWi.DELETE,
                                                                                        targetType: u,
                                                                                        action: _,
                                                                                    }),
                                                                                    (0, l.jsx)(o.E, {
                                                                                        variant: "text-md/normal",
                                                                                        children: h.intl.format(
                                                                                            h.t.GssWar,
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
                                                case L.gGk.RESOURCE_CHANNELS:
                                                    let D, m, M, U, x, p;
                                                    return (
                                                        (D = (r = a ?? []).map((e) => e.channel_id)),
                                                        (m = i.map((e) => e.channel_id)),
                                                        (M = E().difference(m, D)),
                                                        (U = E().difference(D, m)),
                                                        (x = i.filter((e) => M.includes(e.channel_id))),
                                                        (p = r.filter((e) => U.includes(e.channel_id))),
                                                        (0, l.jsxs)("ul", {
                                                            children: [
                                                                x.map((e) =>
                                                                    (0, l.jsx)(
                                                                        "li",
                                                                        {
                                                                            children: (0, l.jsxs)("div", {
                                                                                className:
                                                                                    C.onboardingChangeLogItemTitle,
                                                                                children: [
                                                                                    (0, l.jsx)(f, {
                                                                                        actionType: L.RWi.CREATE,
                                                                                        targetType: u,
                                                                                        action: _,
                                                                                    }),
                                                                                    (0, l.jsx)(o.E, {
                                                                                        variant: "text-md/normal",
                                                                                        children: h.intl.format(
                                                                                            h.t.HlGndE,
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
                                                                                        actionType: L.RWi.DELETE,
                                                                                        targetType: u,
                                                                                        action: _,
                                                                                    }),
                                                                                    (0, l.jsx)(o.E, {
                                                                                        variant: "text-md/normal",
                                                                                        children: h.intl.format(
                                                                                            h.t["7pysg6"],
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
                                T = e[a.key];
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
                                let _ = h.intl.format(t, {
                                    oldValue: s,
                                    newValue: E,
                                    count: Array.isArray(E) ? E.length : 0,
                                    subtarget: i.options.subtarget ?? u.subtarget ?? "",
                                    newColorHook: (e, t) => x(t, u.newValue),
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
                                                                        children: `${n > 0 ? ", " : ""}${(0, c.Hl)(e).toUpperCase()} `,
                                                                    }),
                                                                    x(t, (0, c.Hl)(e)),
                                                                ],
                                                            },
                                                            n,
                                                        ),
                                                    ),
                                            },
                                            t,
                                        );
                                    },
                                    oldColorHook: (e, t) => x(t, u.oldValue),
                                    oldTagHook: (e, t) => (0, l.jsx)(g.A, { tag: s, size: g.A.Sizes.SMALL }, t),
                                    newTagHook: (e, t) => (0, l.jsx)(g.A, { tag: E, size: g.A.Sizes.SMALL }, t),
                                    oldEmojiHook: (e, t) => (0, l.jsx)(d.A, { emojiId: s }, t),
                                    newEmojiHook: (e, t) => (0, l.jsx)(d.A, { emojiId: E }, t),
                                    applicationHook: (e, t) =>
                                        (0, l.jsx)(U, { applicationId: s?.application_id ?? E?.application_id }, t),
                                });
                                return null == _
                                    ? null
                                    : (0, l.jsxs)(
                                          "div",
                                          {
                                              className: C.detail,
                                              style: { position: "relative", top: 1 },
                                              children: [
                                                  (0, l.jsxs)(o.E, {
                                                      className: C.prefix,
                                                      variant: "code",
                                                      color: (function (e) {
                                                          switch (e) {
                                                              case L.RWi.CREATE:
                                                                  return "text-feedback-positive";
                                                              case L.RWi.DELETE:
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
                                                          (0, l.jsx)("div", { className: C.changeStr, children: _ }),
                                                          null != n ? (0, l.jsx)("div", { children: n }) : null,
                                                      ],
                                                  }),
                                              ],
                                          },
                                          a,
                                      );
                            })({
                                changeItem: "function" == typeof T ? T(a) : T,
                                subChanges: A,
                                changeNumber: ++u,
                                log: t,
                                oldValue: i,
                                newValue: s,
                                change: a,
                            });
                        })
                        .filter(S.Vq);
                return (0, l.jsx)(A.D, { onClick: a, className: i()(C.changeDetails, s), children: T });
            },
            [t, n, a, s],
        );
    return r.useMemo(() => u(m.getChangeStrings(t)), [u, t]);
}
