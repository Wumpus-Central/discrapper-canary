n.d(t, { H: () => M, r: () => p }), n(321073);
var l = n(627968),
    r = n(64700),
    a = n(503698),
    i = n.n(a),
    s = n(735438),
    o = n.n(s),
    E = n(989349),
    u = n.n(E),
    c = n(317097),
    _ = n(397927),
    d = n(565645),
    A = n(429913),
    g = n(376310),
    T = n(734057),
    I = n(317525),
    N = n(287809),
    h = n(147036),
    m = n(403362),
    S = n(240248),
    G = n(427262),
    O = n(276373),
    R = n(652215),
    C = n(985018),
    L = n(91404);
let D = { [R.RWi.CREATE]: L.typeCreate, [R.RWi.UPDATE]: L.typeUpdate, [R.RWi.DELETE]: L.typeDelete };
function f(e) {
    let { applicationId: t } = e,
        n = (0, A.h)(t);
    return null == n ? null : (0, l.jsx)(_.Text, { variant: "text-md/normal", children: n.name });
}
function x(e, t) {
    return (0, l.jsx)("div", { className: L.colorHook, style: { backgroundColor: t } }, e);
}
class M extends r.PureComponent {
    render() {
        let { actionType: e, targetType: t, action: n, themeOverride: r } = this.props,
            a = null != r ? L[`themeOverride${(0, S.$G)(r)}`] : null,
            s = i()(
                L.icon,
                D[e],
                n === R.F_X.MESSAGE_DELETE
                    ? L.targetMessage
                    : n === R.F_X.AUTO_MODERATION_BLOCK_MESSAGE ||
                        n === R.F_X.AUTO_MODERATION_FLAG_TO_CHANNEL ||
                        n === R.F_X.AUTO_MODERATION_USER_COMMUNICATION_DISABLED ||
                        n === R.F_X.AUTO_MODERATION_QUARANTINE_USER
                      ? L.autoModerationBlockMessage
                      : {
                            [R.GaG.ALL]: L.targetAll,
                            [R.GaG.GUILD]: L.targetGuild,
                            [R.GaG.CHANNEL]: L.targetChannel,
                            [R.GaG.CHANNEL_OVERWRITE]: L.targetChannel,
                            [R.GaG.USER]: L.targetMember,
                            [R.GaG.ROLE]: L.targetRole,
                            [R.GaG.ONBOARDING_PROMPT]: L.targetOnboarding,
                            [R.GaG.GUILD_ONBOARDING]: L.targetOnboarding,
                            [R.GaG.HOME_SETTINGS]: L.targetOnboarding,
                            [R.GaG.INTEGRATION]: L.targetIntegration,
                            [R.GaG.INVITE]: L.targetInvite,
                            [R.GaG.WEBHOOK]: L.targetWebhook,
                            [R.GaG.EMOJI]: L.targetEmoji,
                            [R.GaG.STICKER]: L.targetSticker,
                            [R.GaG.STAGE_INSTANCE]: L.targetStageInstance,
                            [R.GaG.GUILD_SCHEDULED_EVENT]: L.targetGuildScheduledEvent,
                            [R.GaG.GUILD_SCHEDULED_EVENT_EXCEPTION]: L.targetGuildScheduledEvent,
                            [R.GaG.THREAD]: L.thread,
                            [R.GaG.APPLICATION_COMMAND]: L.applicationCommand,
                            [R.GaG.AUTO_MODERATION_RULE]: L.autoModerationRule,
                            [R.GaG.GUILD_HOME]: L.targetGuildHome,
                            [R.GaG.GUILD_SOUNDBOARD]: L.targetGuildSoundboard,
                            [R.GaG.VOICE_CHANNEL_STATUS]: L.targetChannel,
                            [R.GaG.GUILD_MEMBER_VERIFICATION]: L.targetMember,
                            [R.GaG.GUILD_PROFILE]: L.targetGuild,
                        }[t],
                a,
            );
        return (0, l.jsx)("div", { className: s });
    }
}
function p(e) {
    let { log: t, guild: n, onContentClick: a, className: s } = e,
        E = r.useCallback(
            (e) => {
                if (null == t.changes) return null;
                let E = 0,
                    A = t.changes
                        .flatMap((a) => {
                            if (O.shouldNotRenderChangeDetail(t, a)) return null;
                            let { oldValue: i, newValue: s } = (() => {
                                    if (
                                        (t.action === R.F_X.CHANNEL_UPDATE || t.action === R.F_X.CHANNEL_CREATE) &&
                                        a.key === R.gGk.TYPE
                                    )
                                        return {
                                            oldValue: a.oldValue ?? (0, h.Jg)({ type: a.oldValue }),
                                            newValue: a.newValue ?? (0, h.Jg)({ type: a.newValue }),
                                        };
                                    if (
                                        t.action === R.F_X.MEMBER_UPDATE &&
                                        a.key === R.gGk.COMMUNICATION_DISABLED_UNTIL
                                    ) {
                                        let e = u()(a.newValue);
                                        return {
                                            oldValue: a.oldValue,
                                            newValue: e.isValid() ? e.calendar() : a.newValue,
                                        };
                                    }
                                    return t.action === R.F_X.GUILD_UPDATE && a.key === R.gGk.OWNER_ID
                                        ? {
                                              oldValue: G.Ay.getUserTag(a.oldValue, { mode: "username" }),
                                              newValue: G.Ay.getUserTag(a.newValue, { mode: "username" }),
                                          }
                                        : a;
                                })(),
                                A = (() => {
                                    if (t.action === R.F_X.MEMBER_ROLE_UPDATE)
                                        return (function (e) {
                                            let { newValue: t } = e;
                                            return Array.isArray(t)
                                                ? t.map((e) =>
                                                      (0, l.jsx)(
                                                          "div",
                                                          { className: L.subListItem, children: e.name },
                                                          e.id,
                                                      ),
                                                  )
                                                : null;
                                        })(a);
                                    if (
                                        t.targetType === R.GaG.ROLE ||
                                        t.action === R.F_X.CHANNEL_OVERWRITE_CREATE ||
                                        t.action === R.F_X.CHANNEL_OVERWRITE_UPDATE
                                    )
                                        return (function (e, t) {
                                            let { newValue: n } = e;
                                            return Array.isArray(n)
                                                ? n.map((e, n) =>
                                                      (0, l.jsx)(
                                                          "div",
                                                          {
                                                              className: L.subListItem,
                                                              children: O.getStringForPermission(e, t),
                                                          },
                                                          n,
                                                      ),
                                                  )
                                                : null;
                                        })(a, t);
                                    if (
                                        (t.action === R.F_X.CHANNEL_UPDATE || t.action === R.F_X.THREAD_UPDATE) &&
                                        a.key === R.gGk.FLAGS
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
                                                                className: L.subListItem,
                                                                children: O.getStringForRemovedChannelFlag(e),
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
                                                                className: L.subListItem,
                                                                children: O.getStringForAddedChannelFlag(e),
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
                                        (t.action === R.F_X.ONBOARDING_PROMPT_UPDATE ||
                                            t.action === R.F_X.ONBOARDING_PROMPT_CREATE) &&
                                        a.key === R.gGk.OPTIONS
                                    )
                                        return (function (e, t, n) {
                                            let { newValue: r, oldValue: a } = e,
                                                i = (e) => {
                                                    let t = null != n ? I.A.getRole(n.id, e)?.name : void 0;
                                                    return null == t ? null : `@${t}`;
                                                },
                                                s = (e) => {
                                                    let t = T.A.getChannel(e)?.name;
                                                    return null == t ? null : `#${t}`;
                                                },
                                                E = o().keyBy(a ?? [], "id"),
                                                u = o().keyBy(r ?? [], "id"),
                                                c = o()
                                                    .difference(Object.keys(u), Object.keys(E))
                                                    .map((e) => u[e]),
                                                d = o()
                                                    .difference(Object.keys(E), Object.keys(u))
                                                    .map((e) => E[e]),
                                                A = o().intersection(Object.keys(u), Object.keys(E));
                                            return (0, l.jsxs)(
                                                "ul",
                                                {
                                                    className: L.onboardingChangeLogContainer,
                                                    children: [
                                                        c.map((e) => {
                                                            let { role_ids: n, channel_ids: r, title: a, id: o } = e,
                                                                E = (n ?? []).map(i).filter(m.Vq),
                                                                u = (r ?? []).map(s).filter(m.Vq);
                                                            return (0, l.jsxs)(
                                                                "li",
                                                                {
                                                                    children: [
                                                                        (0, l.jsxs)("div", {
                                                                            className: L.onboardingChangeLogItemTitle,
                                                                            children: [
                                                                                (0, l.jsx)(M, {
                                                                                    actionType: R.RWi.CREATE,
                                                                                    targetType: t.targetType,
                                                                                    action: t.action,
                                                                                }),
                                                                                (0, l.jsx)(_.Text, {
                                                                                    variant: "text-md/normal",
                                                                                    children: C.intl.format(
                                                                                        C.t.CZ1tyo,
                                                                                        { title: a },
                                                                                    ),
                                                                                }),
                                                                            ],
                                                                        }),
                                                                        (0, l.jsxs)("div", {
                                                                            className: L.onboardingChangeLogItemChanges,
                                                                            children: [
                                                                                E.length > 0 &&
                                                                                    (0, l.jsx)(_.Text, {
                                                                                        variant: "text-md/normal",
                                                                                        children: C.intl.format(
                                                                                            C.t["gt/5z1"],
                                                                                            { roles: E.join(", ") },
                                                                                        ),
                                                                                    }),
                                                                                u.length > 0 &&
                                                                                    (0, l.jsx)(_.Text, {
                                                                                        variant: "text-md/normal",
                                                                                        children: C.intl.format(
                                                                                            C.t["4q006W"],
                                                                                            { channels: u.join(", ") },
                                                                                        ),
                                                                                    }),
                                                                            ],
                                                                        }),
                                                                    ],
                                                                },
                                                                o,
                                                            );
                                                        }),
                                                        d.map((e) =>
                                                            (0, l.jsx)(
                                                                "li",
                                                                {
                                                                    children: (0, l.jsxs)("div", {
                                                                        className: L.onboardingChangeLogItemTitle,
                                                                        children: [
                                                                            (0, l.jsx)(M, {
                                                                                actionType: R.RWi.DELETE,
                                                                                targetType: t.targetType,
                                                                                action: t.action,
                                                                            }),
                                                                            (0, l.jsx)(_.Text, {
                                                                                variant: "text-md/normal",
                                                                                children: C.intl.format(C.t["m3dt+K"], {
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
                                                            ((e, n) => {
                                                                let { title: r, id: a } = n,
                                                                    E = e.role_ids.map(i).filter(m.Vq),
                                                                    u = e.channel_ids.map(s).filter(m.Vq),
                                                                    c = n.role_ids.map(i).filter(m.Vq),
                                                                    d = n.channel_ids.map(s).filter(m.Vq),
                                                                    A = o().difference(c, E),
                                                                    g = o().difference(E, c),
                                                                    T = o().difference(d, u),
                                                                    I = o().difference(u, d),
                                                                    N = [];
                                                                return (o().isEqual(e.title, n.title) ||
                                                                    N.push("title"),
                                                                o().isEqual(e.description, n.description) ||
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
                                                                                          L.onboardingChangeLogItemTitle,
                                                                                      children: [
                                                                                          (0, l.jsx)(M, {
                                                                                              actionType: R.RWi.UPDATE,
                                                                                              targetType: t.targetType,
                                                                                              action: t.action,
                                                                                          }),
                                                                                          (0, l.jsx)(_.Text, {
                                                                                              variant: "text-md/normal",
                                                                                              children: C.intl.format(
                                                                                                  C.t["WZO+ia"],
                                                                                                  { title: r },
                                                                                              ),
                                                                                          }),
                                                                                      ],
                                                                                  }),
                                                                                  (0, l.jsxs)("div", {
                                                                                      className:
                                                                                          L.onboardingChangeLogItemChanges,
                                                                                      children: [
                                                                                          A.length > 0 &&
                                                                                              (0, l.jsx)(_.Text, {
                                                                                                  variant:
                                                                                                      "text-md/normal",
                                                                                                  children:
                                                                                                      C.intl.format(
                                                                                                          C.t["R+km+d"],
                                                                                                          {
                                                                                                              roles: A.join(
                                                                                                                  ", ",
                                                                                                              ),
                                                                                                          },
                                                                                                      ),
                                                                                              }),
                                                                                          g.length > 0 &&
                                                                                              (0, l.jsx)(_.Text, {
                                                                                                  variant:
                                                                                                      "text-md/normal",
                                                                                                  children:
                                                                                                      C.intl.format(
                                                                                                          C.t.xIVRoU,
                                                                                                          {
                                                                                                              roles: g.join(
                                                                                                                  ", ",
                                                                                                              ),
                                                                                                          },
                                                                                                      ),
                                                                                              }),
                                                                                          T.length > 0 &&
                                                                                              (0, l.jsx)(_.Text, {
                                                                                                  variant:
                                                                                                      "text-md/normal",
                                                                                                  children:
                                                                                                      C.intl.format(
                                                                                                          C.t.iYowX4,
                                                                                                          {
                                                                                                              channels:
                                                                                                                  T.join(
                                                                                                                      ", ",
                                                                                                                  ),
                                                                                                          },
                                                                                                      ),
                                                                                              }),
                                                                                          I.length > 0 &&
                                                                                              (0, l.jsx)(_.Text, {
                                                                                                  variant:
                                                                                                      "text-md/normal",
                                                                                                  children:
                                                                                                      C.intl.format(
                                                                                                          C.t.JLdJpL,
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
                                                                                                  _.Text,
                                                                                                  {
                                                                                                      variant:
                                                                                                          "text-md/normal",
                                                                                                      children:
                                                                                                          C.intl.format(
                                                                                                              C.t[
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
                                                            })(E[e], u[e]),
                                                        ),
                                                    ],
                                                },
                                                "options",
                                            );
                                        })(a, t, n);
                                    if (
                                        t.action === R.F_X.HOME_SETTINGS_CREATE ||
                                        t.action === R.F_X.HOME_SETTINGS_UPDATE
                                    )
                                        return (function (e, t) {
                                            var n, r;
                                            let { oldValue: a, newValue: i, key: s } = e,
                                                { targetType: E, action: u } = t;
                                            switch (s) {
                                                case R.gGk.WELCOME_MESSAGE:
                                                    let c, d, A, g;
                                                    return (
                                                        (c = N.default.getUser(a?.author_ids?.[0])),
                                                        (d = N.default.getUser(i.author_ids?.[0])),
                                                        (A =
                                                            c?.id !== d?.id
                                                                ? (0, l.jsx)("li", {
                                                                      children: (0, l.jsx)("div", {
                                                                          className: L.onboardingChangeLogItemTitle,
                                                                          children: (0, l.jsx)(_.Text, {
                                                                              variant: "text-md/normal",
                                                                              children: C.intl.format(C.t["PrOzA+"], {
                                                                                  oldUser:
                                                                                      c?.username ??
                                                                                      C.intl.string(C.t.PoWNfe),
                                                                                  newUser:
                                                                                      d?.username ??
                                                                                      C.intl.string(C.t.PoWNfe),
                                                                              }),
                                                                          }),
                                                                      }),
                                                                  })
                                                                : null),
                                                        (g =
                                                            a?.message !== i.message
                                                                ? (0, l.jsx)("li", {
                                                                      children: (0, l.jsx)("div", {
                                                                          className: L.onboardingChangeLogItemTitle,
                                                                          children: (0, l.jsx)(_.Text, {
                                                                              variant: "text-md/normal",
                                                                              children: C.intl.format(C.t.oB7rBb, {
                                                                                  oldMessage:
                                                                                      a?.message ??
                                                                                      C.intl.string(C.t.PoWNfe),
                                                                                  newMessage: i.message,
                                                                              }),
                                                                          }),
                                                                      }),
                                                                  })
                                                                : null),
                                                        (0, l.jsxs)("ul", { children: [A, g] })
                                                    );
                                                case R.gGk.NEW_MEMBER_ACTIONS:
                                                    let T, I, h, m, S, G;
                                                    return (
                                                        (T = (n = a ?? []).map((e) => e.channel_id)),
                                                        (I = i.map((e) => e.channel_id)),
                                                        (h = o().difference(I, T)),
                                                        (m = o().difference(T, I)),
                                                        (S = i.filter((e) => h.includes(e.channel_id))),
                                                        (G = n.filter((e) => m.includes(e.channel_id))),
                                                        (0, l.jsxs)("ul", {
                                                            children: [
                                                                S.map((e) =>
                                                                    (0, l.jsx)(
                                                                        "li",
                                                                        {
                                                                            children: (0, l.jsxs)("div", {
                                                                                className:
                                                                                    L.onboardingChangeLogItemTitle,
                                                                                children: [
                                                                                    (0, l.jsx)(M, {
                                                                                        actionType: R.RWi.CREATE,
                                                                                        targetType: E,
                                                                                        action: u,
                                                                                    }),
                                                                                    (0, l.jsx)(_.Text, {
                                                                                        variant: "text-md/normal",
                                                                                        children: C.intl.format(
                                                                                            C.t.oFSu66,
                                                                                            { name: e.title },
                                                                                        ),
                                                                                    }),
                                                                                ],
                                                                            }),
                                                                        },
                                                                        e.channel_id,
                                                                    ),
                                                                ),
                                                                G.map((e) =>
                                                                    (0, l.jsx)(
                                                                        "li",
                                                                        {
                                                                            children: (0, l.jsxs)("div", {
                                                                                className:
                                                                                    L.onboardingChangeLogItemTitle,
                                                                                children: [
                                                                                    (0, l.jsx)(M, {
                                                                                        actionType: R.RWi.DELETE,
                                                                                        targetType: E,
                                                                                        action: u,
                                                                                    }),
                                                                                    (0, l.jsx)(_.Text, {
                                                                                        variant: "text-md/normal",
                                                                                        children: C.intl.format(
                                                                                            C.t.GssWar,
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
                                                case R.gGk.RESOURCE_CHANNELS:
                                                    let O, D, f, x, p, U;
                                                    return (
                                                        (O = (r = a ?? []).map((e) => e.channel_id)),
                                                        (D = i.map((e) => e.channel_id)),
                                                        (f = o().difference(D, O)),
                                                        (x = o().difference(O, D)),
                                                        (p = i.filter((e) => f.includes(e.channel_id))),
                                                        (U = r.filter((e) => x.includes(e.channel_id))),
                                                        (0, l.jsxs)("ul", {
                                                            children: [
                                                                p.map((e) =>
                                                                    (0, l.jsx)(
                                                                        "li",
                                                                        {
                                                                            children: (0, l.jsxs)("div", {
                                                                                className:
                                                                                    L.onboardingChangeLogItemTitle,
                                                                                children: [
                                                                                    (0, l.jsx)(M, {
                                                                                        actionType: R.RWi.CREATE,
                                                                                        targetType: E,
                                                                                        action: u,
                                                                                    }),
                                                                                    (0, l.jsx)(_.Text, {
                                                                                        variant: "text-md/normal",
                                                                                        children: C.intl.format(
                                                                                            C.t.HlGndE,
                                                                                            { name: e.title },
                                                                                        ),
                                                                                    }),
                                                                                ],
                                                                            }),
                                                                        },
                                                                        e.channel_id,
                                                                    ),
                                                                ),
                                                                U.map((e) =>
                                                                    (0, l.jsx)(
                                                                        "li",
                                                                        {
                                                                            children: (0, l.jsxs)("div", {
                                                                                className:
                                                                                    L.onboardingChangeLogItemTitle,
                                                                                children: [
                                                                                    (0, l.jsx)(M, {
                                                                                        actionType: R.RWi.DELETE,
                                                                                        targetType: E,
                                                                                        action: u,
                                                                                    }),
                                                                                    (0, l.jsx)(_.Text, {
                                                                                        variant: "text-md/normal",
                                                                                        children: C.intl.format(
                                                                                            C.t["7pysg6"],
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
                                S = e[a.key];
                            return (function (e) {
                                let {
                                    changeItem: t,
                                    subChanges: n,
                                    changeNumber: a,
                                    log: i,
                                    oldValue: s,
                                    newValue: o,
                                    change: E,
                                } = e;
                                if (null == t) return console.warn("No change string for", E), null;
                                let u = C.intl.format(t, {
                                    oldValue: s,
                                    newValue: o,
                                    count: Array.isArray(o) ? o.length : 0,
                                    subtarget: i.options.subtarget ?? E.subtarget ?? "",
                                    newColorHook: (e, t) => x(t, E.newValue),
                                    newColorsHook: (e, t) => {
                                        let { primary_color: n, secondary_color: a, tertiary_color: i } = o;
                                        return (0, l.jsx)(
                                            "span",
                                            {
                                                children: [n, a, i]
                                                    .filter(m.Vq)
                                                    .map((e, n) =>
                                                        (0, l.jsxs)(
                                                            r.Fragment,
                                                            {
                                                                children: [
                                                                    (0, l.jsx)("span", {
                                                                        className: L.colorsHook,
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
                                    oldColorHook: (e, t) => x(t, E.oldValue),
                                    oldTagHook: (e, t) => (0, l.jsx)(g.A, { tag: s, size: g.A.Sizes.SMALL }, t),
                                    newTagHook: (e, t) => (0, l.jsx)(g.A, { tag: o, size: g.A.Sizes.SMALL }, t),
                                    oldEmojiHook: (e, t) => (0, l.jsx)(d.A, { emojiId: s }, t),
                                    newEmojiHook: (e, t) => (0, l.jsx)(d.A, { emojiId: o }, t),
                                    applicationHook: (e, t) =>
                                        (0, l.jsx)(f, { applicationId: s?.application_id ?? o?.application_id }, t),
                                });
                                return null == u
                                    ? null
                                    : (0, l.jsxs)(
                                          "div",
                                          {
                                              className: L.detail,
                                              style: { position: "relative", top: 1 },
                                              children: [
                                                  (0, l.jsxs)(_.Text, {
                                                      className: L.prefix,
                                                      variant: "code",
                                                      color: (function (e) {
                                                          switch (e) {
                                                              case R.RWi.CREATE:
                                                                  return "text-feedback-positive";
                                                              case R.RWi.DELETE:
                                                                  return "text-feedback-critical";
                                                              default:
                                                                  return "text-feedback-warning";
                                                          }
                                                      })(i.actionType),
                                                      children: [
                                                          a < 10 ? `0${a}` : a,
                                                          (0, l.jsx)("span", { className: L.dash, children: "—" }),
                                                      ],
                                                  }),
                                                  (0, l.jsxs)("div", {
                                                      className: L.change,
                                                      children: [
                                                          (0, l.jsx)("div", { className: L.changeStr, children: u }),
                                                          null != n ? (0, l.jsx)("div", { children: n }) : null,
                                                      ],
                                                  }),
                                              ],
                                          },
                                          a,
                                      );
                            })({
                                changeItem: "function" == typeof S ? S(a) : S,
                                subChanges: A,
                                changeNumber: ++E,
                                log: t,
                                oldValue: i,
                                newValue: s,
                                change: a,
                            });
                        })
                        .filter(m.Vq);
                return (0, l.jsx)(_.DUT, { onClick: a, className: i()(L.changeDetails, s), children: A });
            },
            [t, n, a, s],
        );
    return r.useMemo(() => E(O.getChangeStrings(t)), [E, t]);
}
