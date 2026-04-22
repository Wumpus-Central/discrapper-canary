n.d(t, { H: () => U, r: () => p }), n(321073);
var l = n(627968),
    a = n(64700),
    r = n(503698),
    i = n.n(r),
    s = n(735438),
    E = n.n(s),
    _ = n(989349),
    u = n.n(_),
    o = n(317097),
    c = n(834730),
    d = n(939249),
    A = n(565645),
    g = n(429913),
    T = n(376310),
    I = n(734057),
    N = n(317525),
    G = n(287809),
    m = n(147036),
    O = n(403362),
    S = n(240248),
    R = n(427262),
    D = n(276373),
    h = n(652215),
    L = n(985018),
    C = n(214876);
let M = { [h.RWi.CREATE]: C.typeCreate, [h.RWi.UPDATE]: C.typeUpdate, [h.RWi.DELETE]: C.typeDelete };
function f(e) {
    let { applicationId: t } = e,
        n = (0, g.h)(t);
    return null == n ? null : (0, l.jsx)(c.E, { variant: "text-md/normal", children: n.name });
}
function x(e, t) {
    return (0, l.jsx)("div", { className: C.colorHook, style: { backgroundColor: t } }, e);
}
class U extends a.PureComponent {
    render() {
        let { actionType: e, targetType: t, action: n, themeOverride: a } = this.props,
            r = null != a ? C[`themeOverride${(0, S.$G)(a)}`] : null,
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
                r,
            );
        return (0, l.jsx)("div", { className: s });
    }
}
function p(e) {
    let { log: t, guild: n, onContentClick: r, className: s } = e,
        _ = a.useCallback(
            (e) => {
                if (null == t.changes) return null;
                let _ = 0,
                    g = t.changes
                        .flatMap((r) => {
                            if (D.shouldNotRenderChangeDetail(t, r)) return null;
                            let { oldValue: i, newValue: s } = (() => {
                                    if (
                                        (t.action === h.F_X.CHANNEL_UPDATE || t.action === h.F_X.CHANNEL_CREATE) &&
                                        r.key === h.gGk.TYPE
                                    )
                                        return {
                                            oldValue: r.oldValue ?? (0, m.Jg)({ type: r.oldValue }),
                                            newValue: r.newValue ?? (0, m.Jg)({ type: r.newValue }),
                                        };
                                    if (
                                        t.action === h.F_X.MEMBER_UPDATE &&
                                        r.key === h.gGk.COMMUNICATION_DISABLED_UNTIL
                                    ) {
                                        let e = u()(r.newValue);
                                        return {
                                            oldValue: r.oldValue,
                                            newValue: e.isValid() ? e.calendar() : r.newValue,
                                        };
                                    }
                                    return t.action === h.F_X.GUILD_UPDATE && r.key === h.gGk.OWNER_ID
                                        ? {
                                              oldValue: R.Ay.getUserTag(r.oldValue, { mode: "username" }),
                                              newValue: R.Ay.getUserTag(r.newValue, { mode: "username" }),
                                          }
                                        : r;
                                })(),
                                d = (() => {
                                    if (t.action === h.F_X.MEMBER_ROLE_UPDATE)
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
                                        })(r);
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
                                        })(r, t);
                                    if (
                                        (t.action === h.F_X.CHANNEL_UPDATE || t.action === h.F_X.THREAD_UPDATE) &&
                                        r.key === h.gGk.FLAGS
                                    )
                                        return (function (e) {
                                            let { newValue: t, oldValue: n } = e,
                                                a = [];
                                            return (Array.isArray(n) &&
                                                (a = a.concat(
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
                                                (a = a.concat(
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
                                            a.length > 0)
                                                ? a
                                                : null;
                                        })(r);
                                    if (
                                        (t.action === h.F_X.ONBOARDING_PROMPT_UPDATE ||
                                            t.action === h.F_X.ONBOARDING_PROMPT_CREATE) &&
                                        r.key === h.gGk.OPTIONS
                                    )
                                        return (function (e, t, n) {
                                            let { newValue: a, oldValue: r } = e,
                                                i = (e) => {
                                                    let t = null != n ? N.A.getRole(n.id, e)?.name : void 0;
                                                    return null == t ? null : `@${t}`;
                                                },
                                                s = (e) => {
                                                    let t = I.A.getChannel(e)?.name;
                                                    return null == t ? null : `#${t}`;
                                                },
                                                _ = E().keyBy(r ?? [], "id"),
                                                u = E().keyBy(a ?? [], "id"),
                                                o = E()
                                                    .difference(Object.keys(u), Object.keys(_))
                                                    .map((e) => u[e]),
                                                d = E()
                                                    .difference(Object.keys(_), Object.keys(u))
                                                    .map((e) => _[e]),
                                                A = E().intersection(Object.keys(u), Object.keys(_));
                                            return (0, l.jsxs)(
                                                "ul",
                                                {
                                                    className: C.onboardingChangeLogContainer,
                                                    children: [
                                                        o.map((e) => {
                                                            let { role_ids: n, channel_ids: a, title: r, id: E } = e,
                                                                _ = (n ?? []).map(i).filter(O.Vq),
                                                                u = (a ?? []).map(s).filter(O.Vq);
                                                            return (0, l.jsxs)(
                                                                "li",
                                                                {
                                                                    children: [
                                                                        (0, l.jsxs)("div", {
                                                                            className: C.onboardingChangeLogItemTitle,
                                                                            children: [
                                                                                (0, l.jsx)(U, {
                                                                                    actionType: h.RWi.CREATE,
                                                                                    targetType: t.targetType,
                                                                                    action: t.action,
                                                                                }),
                                                                                (0, l.jsx)(c.E, {
                                                                                    variant: "text-md/normal",
                                                                                    children: L.intl.format(
                                                                                        L.t.CZ1tyo,
                                                                                        { title: r },
                                                                                    ),
                                                                                }),
                                                                            ],
                                                                        }),
                                                                        (0, l.jsxs)("div", {
                                                                            className: C.onboardingChangeLogItemChanges,
                                                                            children: [
                                                                                _.length > 0 &&
                                                                                    (0, l.jsx)(c.E, {
                                                                                        variant: "text-md/normal",
                                                                                        children: L.intl.format(
                                                                                            L.t["gt/5z1"],
                                                                                            { roles: _.join(", ") },
                                                                                        ),
                                                                                    }),
                                                                                u.length > 0 &&
                                                                                    (0, l.jsx)(c.E, {
                                                                                        variant: "text-md/normal",
                                                                                        children: L.intl.format(
                                                                                            L.t["4q006W"],
                                                                                            { channels: u.join(", ") },
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
                                                                            (0, l.jsx)(U, {
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
                                                            ((e, n) => {
                                                                let { title: a, id: r } = n,
                                                                    _ = e.role_ids.map(i).filter(O.Vq),
                                                                    u = e.channel_ids.map(s).filter(O.Vq),
                                                                    o = n.role_ids.map(i).filter(O.Vq),
                                                                    d = n.channel_ids.map(s).filter(O.Vq),
                                                                    A = E().difference(o, _),
                                                                    g = E().difference(_, o),
                                                                    T = E().difference(d, u),
                                                                    I = E().difference(u, d),
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
                                                                                          (0, l.jsx)(U, {
                                                                                              actionType: h.RWi.UPDATE,
                                                                                              targetType: t.targetType,
                                                                                              action: t.action,
                                                                                          }),
                                                                                          (0, l.jsx)(c.E, {
                                                                                              variant: "text-md/normal",
                                                                                              children: L.intl.format(
                                                                                                  L.t["WZO+ia"],
                                                                                                  { title: a },
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
                                                                                          N.map((t, a) =>
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
                                                                                                  a,
                                                                                              ),
                                                                                          ),
                                                                                      ],
                                                                                  }),
                                                                              ],
                                                                          },
                                                                          r,
                                                                      );
                                                            })(_[e], u[e]),
                                                        ),
                                                    ],
                                                },
                                                "options",
                                            );
                                        })(r, t, n);
                                    if (
                                        t.action === h.F_X.HOME_SETTINGS_CREATE ||
                                        t.action === h.F_X.HOME_SETTINGS_UPDATE
                                    )
                                        return (function (e, t) {
                                            var n, a;
                                            let { oldValue: r, newValue: i, key: s } = e,
                                                { targetType: _, action: u } = t;
                                            switch (s) {
                                                case h.gGk.WELCOME_MESSAGE:
                                                    let o, d, A, g;
                                                    return (
                                                        (o = G.default.getUser(r?.author_ids?.[0])),
                                                        (d = G.default.getUser(i.author_ids?.[0])),
                                                        (A =
                                                            o?.id !== d?.id
                                                                ? (0, l.jsx)("li", {
                                                                      children: (0, l.jsx)("div", {
                                                                          className: C.onboardingChangeLogItemTitle,
                                                                          children: (0, l.jsx)(c.E, {
                                                                              variant: "text-md/normal",
                                                                              children: L.intl.format(L.t["PrOzA+"], {
                                                                                  oldUser:
                                                                                      o?.username ??
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
                                                            r?.message !== i.message
                                                                ? (0, l.jsx)("li", {
                                                                      children: (0, l.jsx)("div", {
                                                                          className: C.onboardingChangeLogItemTitle,
                                                                          children: (0, l.jsx)(c.E, {
                                                                              variant: "text-md/normal",
                                                                              children: L.intl.format(L.t.oB7rBb, {
                                                                                  oldMessage:
                                                                                      r?.message ??
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
                                                    let T, I, N, m, O, S;
                                                    return (
                                                        (T = (n = r ?? []).map((e) => e.channel_id)),
                                                        (I = i.map((e) => e.channel_id)),
                                                        (N = E().difference(I, T)),
                                                        (m = E().difference(T, I)),
                                                        (O = i.filter((e) => N.includes(e.channel_id))),
                                                        (S = n.filter((e) => m.includes(e.channel_id))),
                                                        (0, l.jsxs)("ul", {
                                                            children: [
                                                                O.map((e) =>
                                                                    (0, l.jsx)(
                                                                        "li",
                                                                        {
                                                                            children: (0, l.jsxs)("div", {
                                                                                className:
                                                                                    C.onboardingChangeLogItemTitle,
                                                                                children: [
                                                                                    (0, l.jsx)(U, {
                                                                                        actionType: h.RWi.CREATE,
                                                                                        targetType: _,
                                                                                        action: u,
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
                                                                S.map((e) =>
                                                                    (0, l.jsx)(
                                                                        "li",
                                                                        {
                                                                            children: (0, l.jsxs)("div", {
                                                                                className:
                                                                                    C.onboardingChangeLogItemTitle,
                                                                                children: [
                                                                                    (0, l.jsx)(U, {
                                                                                        actionType: h.RWi.DELETE,
                                                                                        targetType: _,
                                                                                        action: u,
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
                                                    let R, D, M, f, x, p;
                                                    return (
                                                        (R = (a = r ?? []).map((e) => e.channel_id)),
                                                        (D = i.map((e) => e.channel_id)),
                                                        (M = E().difference(D, R)),
                                                        (f = E().difference(R, D)),
                                                        (x = i.filter((e) => M.includes(e.channel_id))),
                                                        (p = a.filter((e) => f.includes(e.channel_id))),
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
                                                                                    (0, l.jsx)(U, {
                                                                                        actionType: h.RWi.CREATE,
                                                                                        targetType: _,
                                                                                        action: u,
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
                                                                                    (0, l.jsx)(U, {
                                                                                        actionType: h.RWi.DELETE,
                                                                                        targetType: _,
                                                                                        action: u,
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
                                        })(r, t);
                                    return null;
                                })(),
                                g = e[r.key];
                            return (function (e) {
                                let {
                                    changeItem: t,
                                    subChanges: n,
                                    changeNumber: r,
                                    log: i,
                                    oldValue: s,
                                    newValue: E,
                                    change: _,
                                } = e;
                                if (null == t) return console.warn("No change string for", _), null;
                                let u = L.intl.format(t, {
                                    oldValue: s,
                                    newValue: E,
                                    count: Array.isArray(E) ? E.length : 0,
                                    subtarget: i.options.subtarget ?? _.subtarget ?? "",
                                    newColorHook: (e, t) => x(t, _.newValue),
                                    newColorsHook: (e, t) => {
                                        let { primary_color: n, secondary_color: r, tertiary_color: i } = E;
                                        return (0, l.jsx)(
                                            "span",
                                            {
                                                children: [n, r, i]
                                                    .filter(O.Vq)
                                                    .map((e, n) =>
                                                        (0, l.jsxs)(
                                                            a.Fragment,
                                                            {
                                                                children: [
                                                                    (0, l.jsx)("span", {
                                                                        className: C.colorsHook,
                                                                        children: `${n > 0 ? ", " : ""}${(0, o.Hl)(e).toUpperCase()} `,
                                                                    }),
                                                                    x(t, (0, o.Hl)(e)),
                                                                ],
                                                            },
                                                            n,
                                                        ),
                                                    ),
                                            },
                                            t,
                                        );
                                    },
                                    oldColorHook: (e, t) => x(t, _.oldValue),
                                    oldTagHook: (e, t) => (0, l.jsx)(T.A, { tag: s, size: T.A.Sizes.SMALL }, t),
                                    newTagHook: (e, t) => (0, l.jsx)(T.A, { tag: E, size: T.A.Sizes.SMALL }, t),
                                    oldEmojiHook: (e, t) => (0, l.jsx)(A.A, { emojiId: s }, t),
                                    newEmojiHook: (e, t) => (0, l.jsx)(A.A, { emojiId: E }, t),
                                    applicationHook: (e, t) =>
                                        (0, l.jsx)(f, { applicationId: s?.application_id ?? E?.application_id }, t),
                                });
                                return null == u
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
                                                          r < 10 ? `0${r}` : r,
                                                          (0, l.jsx)("span", { className: C.dash, children: "—" }),
                                                      ],
                                                  }),
                                                  (0, l.jsxs)("div", {
                                                      className: C.change,
                                                      children: [
                                                          (0, l.jsx)("div", { className: C.changeStr, children: u }),
                                                          null != n ? (0, l.jsx)("div", { children: n }) : null,
                                                      ],
                                                  }),
                                              ],
                                          },
                                          r,
                                      );
                            })({
                                changeItem: "function" == typeof g ? g(r) : g,
                                subChanges: d,
                                changeNumber: ++_,
                                log: t,
                                oldValue: i,
                                newValue: s,
                                change: r,
                            });
                        })
                        .filter(O.Vq);
                return (0, l.jsx)(d.D, { onClick: r, className: i()(C.changeDetails, s), children: g });
            },
            [t, n, r, s],
        );
    return a.useMemo(() => _(D.getChangeStrings(t)), [_, t]);
}
