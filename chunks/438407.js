n.d(t, { Hg: () => p, kW: () => D, ri: () => U }), n(321073);
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
    g = n(429913),
    A = n(376310),
    T = n(734057),
    I = n(317525),
    N = n(287809),
    h = n(147036),
    m = n(403362),
    S = n(240248),
    G = n(427262),
    O = n(276373),
    C = n(652215),
    R = n(985018),
    L = n(159529);
function D(e, t) {
    let n = O.NotRenderedChanges[e.targetType];
    return null != n && !0 === n[t.key];
}
let f = { [C.RWi.CREATE]: L.typeCreate, [C.RWi.UPDATE]: L.typeUpdate, [C.RWi.DELETE]: L.typeDelete };
function x(e) {
    let { applicationId: t } = e,
        n = (0, g.h)(t);
    return null == n ? null : (0, l.jsx)(_.Text, { variant: "text-md/normal", children: n.name });
}
function M(e, t) {
    return (0, l.jsx)("div", { className: L.colorHook, style: { backgroundColor: t } }, e);
}
class p extends r.PureComponent {
    render() {
        let { actionType: e, targetType: t, action: n, themeOverride: r } = this.props,
            a = null != r ? L[`themeOverride${(0, S.$G)(r)}`] : null,
            s = i()(
                L.icon,
                f[e],
                n === C.F_X.MESSAGE_DELETE
                    ? L.targetMessage
                    : n === C.F_X.AUTO_MODERATION_BLOCK_MESSAGE ||
                        n === C.F_X.AUTO_MODERATION_FLAG_TO_CHANNEL ||
                        n === C.F_X.AUTO_MODERATION_USER_COMMUNICATION_DISABLED ||
                        n === C.F_X.AUTO_MODERATION_QUARANTINE_USER
                      ? L.autoModerationBlockMessage
                      : {
                            [C.GaG.ALL]: L.targetAll,
                            [C.GaG.GUILD]: L.targetGuild,
                            [C.GaG.CHANNEL]: L.targetChannel,
                            [C.GaG.CHANNEL_OVERWRITE]: L.targetChannel,
                            [C.GaG.USER]: L.targetMember,
                            [C.GaG.ROLE]: L.targetRole,
                            [C.GaG.ONBOARDING_PROMPT]: L.targetOnboarding,
                            [C.GaG.GUILD_ONBOARDING]: L.targetOnboarding,
                            [C.GaG.HOME_SETTINGS]: L.targetOnboarding,
                            [C.GaG.INTEGRATION]: L.targetIntegration,
                            [C.GaG.INVITE]: L.targetInvite,
                            [C.GaG.WEBHOOK]: L.targetWebhook,
                            [C.GaG.EMOJI]: L.targetEmoji,
                            [C.GaG.STICKER]: L.targetSticker,
                            [C.GaG.STAGE_INSTANCE]: L.targetStageInstance,
                            [C.GaG.GUILD_SCHEDULED_EVENT]: L.targetGuildScheduledEvent,
                            [C.GaG.GUILD_SCHEDULED_EVENT_EXCEPTION]: L.targetGuildScheduledEvent,
                            [C.GaG.THREAD]: L.thread,
                            [C.GaG.APPLICATION_COMMAND]: L.applicationCommand,
                            [C.GaG.AUTO_MODERATION_RULE]: L.autoModerationRule,
                            [C.GaG.GUILD_HOME]: L.targetGuildHome,
                            [C.GaG.GUILD_SOUNDBOARD]: L.targetGuildSoundboard,
                            [C.GaG.VOICE_CHANNEL_STATUS]: L.targetChannel,
                            [C.GaG.GUILD_MEMBER_VERIFICATION]: L.targetMember,
                            [C.GaG.GUILD_PROFILE]: L.targetGuild,
                        }[t],
                a,
            );
        return (0, l.jsx)("div", { className: s });
    }
}
function U(e) {
    let { log: t, guild: n, onContentClick: a, className: s } = e,
        E = r.useCallback(
            (e) => {
                if (null == t.changes) return null;
                let E = 0,
                    g = o()
                        .flatten(
                            t.changes.map((a) => {
                                if (D(t, a)) return null;
                                let { oldValue: i, newValue: s } = (() => {
                                        if (
                                            (t.action === C.F_X.CHANNEL_UPDATE || t.action === C.F_X.CHANNEL_CREATE) &&
                                            a.key === C.gGk.TYPE
                                        )
                                            return {
                                                oldValue: a.oldValue ?? (0, h.Jg)({ type: a.oldValue }),
                                                newValue: a.newValue ?? (0, h.Jg)({ type: a.newValue }),
                                            };
                                        if (
                                            t.action === C.F_X.MEMBER_UPDATE &&
                                            a.key === C.gGk.COMMUNICATION_DISABLED_UNTIL
                                        ) {
                                            let e = u()(a.newValue);
                                            return {
                                                oldValue: a.oldValue,
                                                newValue: e.isValid() ? e.calendar() : a.newValue,
                                            };
                                        }
                                        return t.action === C.F_X.GUILD_UPDATE && a.key === C.gGk.OWNER_ID
                                            ? {
                                                  oldValue: G.Ay.getUserTag(a.oldValue, { mode: "username" }),
                                                  newValue: G.Ay.getUserTag(a.newValue, { mode: "username" }),
                                              }
                                            : a;
                                    })(),
                                    g = (() => {
                                        if (t.action === C.F_X.MEMBER_ROLE_UPDATE)
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
                                            t.targetType === C.GaG.ROLE ||
                                            t.action === C.F_X.CHANNEL_OVERWRITE_CREATE ||
                                            t.action === C.F_X.CHANNEL_OVERWRITE_UPDATE
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
                                            (t.action === C.F_X.CHANNEL_UPDATE || t.action === C.F_X.THREAD_UPDATE) &&
                                            a.key === C.gGk.FLAGS
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
                                            (t.action === C.F_X.ONBOARDING_PROMPT_UPDATE ||
                                                t.action === C.F_X.ONBOARDING_PROMPT_CREATE) &&
                                            a.key === C.gGk.OPTIONS
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
                                                    g = o().intersection(Object.keys(u), Object.keys(E));
                                                return (0, l.jsxs)(
                                                    "ul",
                                                    {
                                                        className: L.onboardingChangeLogContainer,
                                                        children: [
                                                            c.map((e) => {
                                                                let {
                                                                        role_ids: n,
                                                                        channel_ids: r,
                                                                        title: a,
                                                                        id: o,
                                                                    } = e,
                                                                    E = (n ?? []).map(i).filter(m.Vq),
                                                                    u = (r ?? []).map(s).filter(m.Vq);
                                                                return (0, l.jsxs)(
                                                                    "li",
                                                                    {
                                                                        children: [
                                                                            (0, l.jsxs)("div", {
                                                                                className:
                                                                                    L.onboardingChangeLogItemTitle,
                                                                                children: [
                                                                                    (0, l.jsx)(p, {
                                                                                        actionType: C.RWi.CREATE,
                                                                                        targetType: t.targetType,
                                                                                        action: t.action,
                                                                                    }),
                                                                                    (0, l.jsx)(_.Text, {
                                                                                        variant: "text-md/normal",
                                                                                        children: R.intl.format(
                                                                                            R.t.CZ1tyo,
                                                                                            { title: a },
                                                                                        ),
                                                                                    }),
                                                                                ],
                                                                            }),
                                                                            (0, l.jsxs)("div", {
                                                                                className:
                                                                                    L.onboardingChangeLogItemChanges,
                                                                                children: [
                                                                                    E.length > 0 &&
                                                                                        (0, l.jsx)(_.Text, {
                                                                                            variant: "text-md/normal",
                                                                                            children: R.intl.format(
                                                                                                R.t["gt/5z1"],
                                                                                                { roles: E.join(", ") },
                                                                                            ),
                                                                                        }),
                                                                                    u.length > 0 &&
                                                                                        (0, l.jsx)(_.Text, {
                                                                                            variant: "text-md/normal",
                                                                                            children: R.intl.format(
                                                                                                R.t["4q006W"],
                                                                                                {
                                                                                                    channels:
                                                                                                        u.join(", "),
                                                                                                },
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
                                                                                (0, l.jsx)(p, {
                                                                                    actionType: C.RWi.DELETE,
                                                                                    targetType: t.targetType,
                                                                                    action: t.action,
                                                                                }),
                                                                                (0, l.jsx)(_.Text, {
                                                                                    variant: "text-md/normal",
                                                                                    children: R.intl.format(
                                                                                        R.t["m3dt+K"],
                                                                                        { title: e.title },
                                                                                    ),
                                                                                }),
                                                                            ],
                                                                        }),
                                                                    },
                                                                    e.id,
                                                                ),
                                                            ),
                                                            g.map((e) =>
                                                                ((e, n) => {
                                                                    let { title: r, id: a } = n,
                                                                        E = e.role_ids.map(i).filter(m.Vq),
                                                                        u = e.channel_ids.map(s).filter(m.Vq),
                                                                        c = n.role_ids.map(i).filter(m.Vq),
                                                                        d = n.channel_ids.map(s).filter(m.Vq),
                                                                        g = o().difference(c, E),
                                                                        A = o().difference(E, c),
                                                                        T = o().difference(d, u),
                                                                        I = o().difference(u, d),
                                                                        N = [];
                                                                    return (o().isEqual(e.title, n.title) ||
                                                                        N.push("title"),
                                                                    o().isEqual(e.description, n.description) ||
                                                                        N.push("description"),
                                                                    0 === g.length &&
                                                                        0 === A.length &&
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
                                                                                              (0, l.jsx)(p, {
                                                                                                  actionType:
                                                                                                      C.RWi.UPDATE,
                                                                                                  targetType:
                                                                                                      t.targetType,
                                                                                                  action: t.action,
                                                                                              }),
                                                                                              (0, l.jsx)(_.Text, {
                                                                                                  variant:
                                                                                                      "text-md/normal",
                                                                                                  children:
                                                                                                      R.intl.format(
                                                                                                          R.t["WZO+ia"],
                                                                                                          { title: r },
                                                                                                      ),
                                                                                              }),
                                                                                          ],
                                                                                      }),
                                                                                      (0, l.jsxs)("div", {
                                                                                          className:
                                                                                              L.onboardingChangeLogItemChanges,
                                                                                          children: [
                                                                                              g.length > 0 &&
                                                                                                  (0, l.jsx)(_.Text, {
                                                                                                      variant:
                                                                                                          "text-md/normal",
                                                                                                      children:
                                                                                                          R.intl.format(
                                                                                                              R.t[
                                                                                                                  "R+km+d"
                                                                                                              ],
                                                                                                              {
                                                                                                                  roles: g.join(
                                                                                                                      ", ",
                                                                                                                  ),
                                                                                                              },
                                                                                                          ),
                                                                                                  }),
                                                                                              A.length > 0 &&
                                                                                                  (0, l.jsx)(_.Text, {
                                                                                                      variant:
                                                                                                          "text-md/normal",
                                                                                                      children:
                                                                                                          R.intl.format(
                                                                                                              R.t
                                                                                                                  .xIVRoU,
                                                                                                              {
                                                                                                                  roles: A.join(
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
                                                                                                          R.intl.format(
                                                                                                              R.t
                                                                                                                  .iYowX4,
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
                                                                                                          R.intl.format(
                                                                                                              R.t
                                                                                                                  .JLdJpL,
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
                                                                                                              R.intl.format(
                                                                                                                  R.t[
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
                                            t.action === C.F_X.HOME_SETTINGS_CREATE ||
                                            t.action === C.F_X.HOME_SETTINGS_UPDATE
                                        )
                                            return (function (e, t) {
                                                var n, r;
                                                let { oldValue: a, newValue: i, key: s } = e,
                                                    { targetType: E, action: u } = t;
                                                switch (s) {
                                                    case C.gGk.WELCOME_MESSAGE:
                                                        let c, d, g, A;
                                                        return (
                                                            (c = N.default.getUser(a?.author_ids?.[0])),
                                                            (d = N.default.getUser(i.author_ids?.[0])),
                                                            (g =
                                                                c?.id !== d?.id
                                                                    ? (0, l.jsx)("li", {
                                                                          children: (0, l.jsx)("div", {
                                                                              className: L.onboardingChangeLogItemTitle,
                                                                              children: (0, l.jsx)(_.Text, {
                                                                                  variant: "text-md/normal",
                                                                                  children: R.intl.format(
                                                                                      R.t["PrOzA+"],
                                                                                      {
                                                                                          oldUser:
                                                                                              c?.username ??
                                                                                              R.intl.string(R.t.PoWNfe),
                                                                                          newUser:
                                                                                              d?.username ??
                                                                                              R.intl.string(R.t.PoWNfe),
                                                                                      },
                                                                                  ),
                                                                              }),
                                                                          }),
                                                                      })
                                                                    : null),
                                                            (A =
                                                                a?.message !== i.message
                                                                    ? (0, l.jsx)("li", {
                                                                          children: (0, l.jsx)("div", {
                                                                              className: L.onboardingChangeLogItemTitle,
                                                                              children: (0, l.jsx)(_.Text, {
                                                                                  variant: "text-md/normal",
                                                                                  children: R.intl.format(R.t.oB7rBb, {
                                                                                      oldMessage:
                                                                                          a?.message ??
                                                                                          R.intl.string(R.t.PoWNfe),
                                                                                      newMessage: i.message,
                                                                                  }),
                                                                              }),
                                                                          }),
                                                                      })
                                                                    : null),
                                                            (0, l.jsxs)("ul", { children: [g, A] })
                                                        );
                                                    case C.gGk.NEW_MEMBER_ACTIONS:
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
                                                                                        (0, l.jsx)(p, {
                                                                                            actionType: C.RWi.CREATE,
                                                                                            targetType: E,
                                                                                            action: u,
                                                                                        }),
                                                                                        (0, l.jsx)(_.Text, {
                                                                                            variant: "text-md/normal",
                                                                                            children: R.intl.format(
                                                                                                R.t.oFSu66,
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
                                                                                        (0, l.jsx)(p, {
                                                                                            actionType: C.RWi.DELETE,
                                                                                            targetType: E,
                                                                                            action: u,
                                                                                        }),
                                                                                        (0, l.jsx)(_.Text, {
                                                                                            variant: "text-md/normal",
                                                                                            children: R.intl.format(
                                                                                                R.t.GssWar,
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
                                                    case C.gGk.RESOURCE_CHANNELS:
                                                        let O, D, f, x, M, U;
                                                        return (
                                                            (O = (r = a ?? []).map((e) => e.channel_id)),
                                                            (D = i.map((e) => e.channel_id)),
                                                            (f = o().difference(D, O)),
                                                            (x = o().difference(O, D)),
                                                            (M = i.filter((e) => f.includes(e.channel_id))),
                                                            (U = r.filter((e) => x.includes(e.channel_id))),
                                                            (0, l.jsxs)("ul", {
                                                                children: [
                                                                    M.map((e) =>
                                                                        (0, l.jsx)(
                                                                            "li",
                                                                            {
                                                                                children: (0, l.jsxs)("div", {
                                                                                    className:
                                                                                        L.onboardingChangeLogItemTitle,
                                                                                    children: [
                                                                                        (0, l.jsx)(p, {
                                                                                            actionType: C.RWi.CREATE,
                                                                                            targetType: E,
                                                                                            action: u,
                                                                                        }),
                                                                                        (0, l.jsx)(_.Text, {
                                                                                            variant: "text-md/normal",
                                                                                            children: R.intl.format(
                                                                                                R.t.HlGndE,
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
                                                                                        (0, l.jsx)(p, {
                                                                                            actionType: C.RWi.DELETE,
                                                                                            targetType: E,
                                                                                            action: u,
                                                                                        }),
                                                                                        (0, l.jsx)(_.Text, {
                                                                                            variant: "text-md/normal",
                                                                                            children: R.intl.format(
                                                                                                R.t["7pysg6"],
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
                                    let u = R.intl.format(t, {
                                        oldValue: s,
                                        newValue: o,
                                        count: Array.isArray(o) ? o.length : 0,
                                        subtarget: i.options.subtarget ?? E.subtarget ?? "",
                                        newColorHook: (e, t) => M(t, E.newValue),
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
                                                                        M(t, (0, c.Hl)(e)),
                                                                    ],
                                                                },
                                                                n,
                                                            ),
                                                        ),
                                                },
                                                t,
                                            );
                                        },
                                        oldColorHook: (e, t) => M(t, E.oldValue),
                                        oldTagHook: (e, t) => (0, l.jsx)(A.A, { tag: s, size: A.A.Sizes.SMALL }, t),
                                        newTagHook: (e, t) => (0, l.jsx)(A.A, { tag: o, size: A.A.Sizes.SMALL }, t),
                                        oldEmojiHook: (e, t) => (0, l.jsx)(d.A, { emojiId: s }, t),
                                        newEmojiHook: (e, t) => (0, l.jsx)(d.A, { emojiId: o }, t),
                                        applicationHook: (e, t) =>
                                            (0, l.jsx)(x, { applicationId: s?.application_id ?? o?.application_id }, t),
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
                                                                  case C.RWi.CREATE:
                                                                      return "text-feedback-positive";
                                                                  case C.RWi.DELETE:
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
                                                              (0, l.jsx)("div", {
                                                                  className: L.changeStr,
                                                                  children: u,
                                                              }),
                                                              null != n ? (0, l.jsx)("div", { children: n }) : null,
                                                          ],
                                                      }),
                                                  ],
                                              },
                                              a,
                                          );
                                })({
                                    changeItem: "function" == typeof S ? S(a) : S,
                                    subChanges: g,
                                    changeNumber: ++E,
                                    log: t,
                                    oldValue: i,
                                    newValue: s,
                                    change: a,
                                });
                            }),
                        )
                        .filter(m.Vq);
                return (0, l.jsx)(_.DUT, { onClick: a, className: i()(L.changeDetails, s), children: g });
            },
            [t, n, a, s],
        );
    return r.useMemo(() => {
        switch (t.targetType) {
            case C.GaG.GUILD:
                return E(O.GuildChangeStrings());
            case C.GaG.CHANNEL:
            case C.GaG.CHANNEL_OVERWRITE:
                return E(O.ChannelChangeStrings());
            case C.GaG.USER:
                return E(O.UserChangeStrings());
            case C.GaG.ROLE:
                return E(O.RoleChangeStrings());
            case C.GaG.ONBOARDING_PROMPT:
                return E(O.OnboardingPromptChangeStrings());
            case C.GaG.GUILD_ONBOARDING:
                return E(O.OnboardingChangeStrings());
            case C.GaG.HOME_SETTINGS:
                return E(O.HomeSettingsChangeStrings());
            case C.GaG.INVITE:
                return E(O.InviteChangeStrings());
            case C.GaG.WEBHOOK:
                return E(O.WebhookChangeStrings());
            case C.GaG.EMOJI:
                return E(O.EmojiChangeStrings());
            case C.GaG.STICKER:
                return E(O.StickerChangeStrings());
            case C.GaG.INTEGRATION:
                return E(O.IntegrationChangeStrings());
            case C.GaG.STAGE_INSTANCE:
                return E(O.StageInstanceChangeStrings());
            case C.GaG.GUILD_SCHEDULED_EVENT:
                return E(O.GuildScheduledEventChangeStrings());
            case C.GaG.GUILD_SCHEDULED_EVENT_EXCEPTION:
                return E(O.GuildScheduledEventExceptionChangeStrings());
            case C.GaG.THREAD:
                return E(O.ThreadChangeStrings());
            case C.GaG.APPLICATION_COMMAND:
                return E(O.CommandPermissionChangeStrings(t.changes));
            case C.GaG.AUTO_MODERATION_RULE:
                return E(O.AutoModerationRuleChangeStrings());
            case C.GaG.GUILD_SOUNDBOARD:
                return E(O.GuildSoundboardChangeStrings());
            case C.GaG.VOICE_CHANNEL_STATUS:
                return E(O.VoiceChannelStatusStrings());
            case C.GaG.GUILD_MEMBER_VERIFICATION:
                return E(O.MemberVerificationChangeStrings());
            case C.GaG.GUILD_PROFILE:
                return E(O.GuildProfileChangeStrings());
        }
    }, [t.targetType, t.changes, E]);
}
