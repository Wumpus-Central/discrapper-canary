n.d(t, {
    Hg: () => C,
    kW: () => R,
    ri: () => M,
}),
    n(321073),
    n(228524);
var l = n(627968),
    r = n(64700),
    a = n(503698),
    i = n.n(a),
    s = n(735438),
    o = n.n(s),
    c = n(989349),
    u = n.n(c),
    E = n(317097),
    d = n(397927),
    _ = n(565645),
    g = n(429913),
    A = n(376310),
    T = n(734057),
    f = n(317525),
    h = n(287809),
    I = n(147036),
    O = n(403362),
    N = n(240248),
    m = n(427262),
    S = n(276373),
    p = n(652215),
    b = n(985018),
    G = n(159529);

function R(e, t) {
    let n = S.Yj[e.targetType];
    return null != n && !0 === n[t.key];
}
let D = {
    [p.RWi.CREATE]: G.typeCreate,
    [p.RWi.UPDATE]: G.typeUpdate,
    [p.RWi.DELETE]: G.typeDelete,
};

function L(e) {
    let { applicationId: t } = e,
        n = (0, g.h)(t);
    return null == n
        ? null
        : (0, l.jsx)(d.Text, {
              variant: "text-md/normal",
              children: n.name,
          });
}

function x(e, t) {
    return (0, l.jsx)(
        "div",
        {
            className: G.colorHook,
            style: {
                backgroundColor: t,
            },
        },
        e,
    );
}
class C extends r.PureComponent {
    render() {
        let { actionType: e, targetType: t, action: n, themeOverride: r } = this.props,
            a = null != r ? G["themeOverride".concat((0, N.$G)(r))] : null,
            s = i()(
                G.icon,
                D[e],
                n === p.F_X.MESSAGE_DELETE
                    ? G.targetMessage
                    : n === p.F_X.AUTO_MODERATION_BLOCK_MESSAGE ||
                        n === p.F_X.AUTO_MODERATION_FLAG_TO_CHANNEL ||
                        n === p.F_X.AUTO_MODERATION_USER_COMMUNICATION_DISABLED ||
                        n === p.F_X.AUTO_MODERATION_QUARANTINE_USER
                      ? G.autoModerationBlockMessage
                      : {
                            [p.GaG.ALL]: G.targetAll,
                            [p.GaG.GUILD]: G.targetGuild,
                            [p.GaG.CHANNEL]: G.targetChannel,
                            [p.GaG.CHANNEL_OVERWRITE]: G.targetChannel,
                            [p.GaG.USER]: G.targetMember,
                            [p.GaG.ROLE]: G.targetRole,
                            [p.GaG.ONBOARDING_PROMPT]: G.targetOnboarding,
                            [p.GaG.GUILD_ONBOARDING]: G.targetOnboarding,
                            [p.GaG.HOME_SETTINGS]: G.targetOnboarding,
                            [p.GaG.INTEGRATION]: G.targetIntegration,
                            [p.GaG.INVITE]: G.targetInvite,
                            [p.GaG.WEBHOOK]: G.targetWebhook,
                            [p.GaG.EMOJI]: G.targetEmoji,
                            [p.GaG.STICKER]: G.targetSticker,
                            [p.GaG.STAGE_INSTANCE]: G.targetStageInstance,
                            [p.GaG.GUILD_SCHEDULED_EVENT]: G.targetGuildScheduledEvent,
                            [p.GaG.GUILD_SCHEDULED_EVENT_EXCEPTION]: G.targetGuildScheduledEvent,
                            [p.GaG.THREAD]: G.thread,
                            [p.GaG.APPLICATION_COMMAND]: G.applicationCommand,
                            [p.GaG.AUTO_MODERATION_RULE]: G.autoModerationRule,
                            [p.GaG.GUILD_HOME]: G.targetGuildHome,
                            [p.GaG.GUILD_SOUNDBOARD]: G.targetGuildSoundboard,
                            [p.GaG.VOICE_CHANNEL_STATUS]: G.targetChannel,
                            [p.GaG.GUILD_MEMBER_VERIFICATION]: G.targetMember,
                            [p.GaG.GUILD_PROFILE]: G.targetGuild,
                        }[t],
                a,
            );
        return (0, l.jsx)("div", {
            className: s,
        });
    }
}

function M(e) {
    let { log: t, guild: n, onContentClick: a, className: s } = e,
        c = r.useCallback(
            (e) => {
                if (null == t.changes) return null;
                let c = 0,
                    g = o()
                        .flatten(
                            t.changes.map((a) => {
                                if (R(t, a)) return null;
                                let { oldValue: i, newValue: s } = (() => {
                                        if (
                                            (t.action === p.F_X.CHANNEL_UPDATE || t.action === p.F_X.CHANNEL_CREATE) &&
                                            a.key === p.gGk.TYPE
                                        ) {
                                            var e, n;
                                            return {
                                                oldValue:
                                                    null != (e = a.oldValue)
                                                        ? e
                                                        : (0, I.Jg)({
                                                              type: a.oldValue,
                                                          }),
                                                newValue:
                                                    null != (n = a.newValue)
                                                        ? n
                                                        : (0, I.Jg)({
                                                              type: a.newValue,
                                                          }),
                                            };
                                        }
                                        if (
                                            t.action === p.F_X.MEMBER_UPDATE &&
                                            a.key === p.gGk.COMMUNICATION_DISABLED_UNTIL
                                        ) {
                                            let e = u()(a.newValue);
                                            return {
                                                oldValue: a.oldValue,
                                                newValue: e.isValid() ? e.calendar() : a.newValue,
                                            };
                                        }
                                        return t.action === p.F_X.GUILD_UPDATE && a.key === p.gGk.OWNER_ID
                                            ? {
                                                  oldValue: m.Ay.getUserTag(a.oldValue, {
                                                      mode: "username",
                                                  }),
                                                  newValue: m.Ay.getUserTag(a.newValue, {
                                                      mode: "username",
                                                  }),
                                              }
                                            : a;
                                    })(),
                                    g = (() => {
                                        if (t.action === p.F_X.MEMBER_ROLE_UPDATE)
                                            return (function (e) {
                                                let { newValue: t } = e;
                                                return Array.isArray(t)
                                                    ? t.map((e) =>
                                                          (0, l.jsx)(
                                                              "div",
                                                              {
                                                                  className: G.subListItem,
                                                                  children: e.name,
                                                              },
                                                              e.id,
                                                          ),
                                                      )
                                                    : null;
                                            })(a);
                                        if (
                                            t.targetType === p.GaG.ROLE ||
                                            t.action === p.F_X.CHANNEL_OVERWRITE_CREATE ||
                                            t.action === p.F_X.CHANNEL_OVERWRITE_UPDATE
                                        )
                                            return (function (e, t) {
                                                let { newValue: n } = e;
                                                return Array.isArray(n)
                                                    ? n.map((e, n) =>
                                                          (0, l.jsx)(
                                                              "div",
                                                              {
                                                                  className: G.subListItem,
                                                                  children: S.Sn(e, t),
                                                              },
                                                              n,
                                                          ),
                                                      )
                                                    : null;
                                            })(a, t);
                                        if (
                                            (t.action === p.F_X.CHANNEL_UPDATE || t.action === p.F_X.THREAD_UPDATE) &&
                                            a.key === p.gGk.FLAGS
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
                                                                    className: G.subListItem,
                                                                    children: S.eA(e),
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
                                                                    className: G.subListItem,
                                                                    children: S.sU(e),
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
                                            (t.action === p.F_X.ONBOARDING_PROMPT_UPDATE ||
                                                t.action === p.F_X.ONBOARDING_PROMPT_CREATE) &&
                                            a.key === p.gGk.OPTIONS
                                        )
                                            return (function (e, t, n) {
                                                let { newValue: r, oldValue: a } = e,
                                                    i = (e) => {
                                                        var t;
                                                        let l =
                                                            null != n
                                                                ? null == (t = f.A.getRole(n.id, e))
                                                                    ? void 0
                                                                    : t.name
                                                                : void 0;
                                                        return null == l ? null : "@".concat(l);
                                                    },
                                                    s = (e) => {
                                                        var t;
                                                        let n = null == (t = T.A.getChannel(e)) ? void 0 : t.name;
                                                        return null == n ? null : "#".concat(n);
                                                    },
                                                    c = o().keyBy(null != a ? a : [], "id"),
                                                    u = o().keyBy(null != r ? r : [], "id"),
                                                    E = o()
                                                        .difference(Object.keys(u), Object.keys(c))
                                                        .map((e) => u[e]),
                                                    _ = o()
                                                        .difference(Object.keys(c), Object.keys(u))
                                                        .map((e) => c[e]),
                                                    g = o().intersection(Object.keys(u), Object.keys(c));
                                                return (0, l.jsxs)(
                                                    "ul",
                                                    {
                                                        className: G.onboardingChangeLogContainer,
                                                        children: [
                                                            E.map((e) => {
                                                                let {
                                                                        role_ids: n,
                                                                        channel_ids: r,
                                                                        title: a,
                                                                        id: o,
                                                                    } = e,
                                                                    c = (null != n ? n : []).map(i).filter(O.Vq),
                                                                    u = (null != r ? r : []).map(s).filter(O.Vq);
                                                                return (0, l.jsxs)(
                                                                    "li",
                                                                    {
                                                                        children: [
                                                                            (0, l.jsxs)("div", {
                                                                                className:
                                                                                    G.onboardingChangeLogItemTitle,
                                                                                children: [
                                                                                    (0, l.jsx)(C, {
                                                                                        actionType: p.RWi.CREATE,
                                                                                        targetType: t.targetType,
                                                                                        action: t.action,
                                                                                    }),
                                                                                    (0, l.jsx)(d.Text, {
                                                                                        variant: "text-md/normal",
                                                                                        children: b.intl.format(
                                                                                            b.t.CZ1tyo,
                                                                                            {
                                                                                                title: a,
                                                                                            },
                                                                                        ),
                                                                                    }),
                                                                                ],
                                                                            }),
                                                                            (0, l.jsxs)("div", {
                                                                                className:
                                                                                    G.onboardingChangeLogItemChanges,
                                                                                children: [
                                                                                    c.length > 0 &&
                                                                                        (0, l.jsx)(d.Text, {
                                                                                            variant: "text-md/normal",
                                                                                            children: b.intl.format(
                                                                                                b.t["gt/5z1"],
                                                                                                {
                                                                                                    roles: c.join(", "),
                                                                                                },
                                                                                            ),
                                                                                        }),
                                                                                    u.length > 0 &&
                                                                                        (0, l.jsx)(d.Text, {
                                                                                            variant: "text-md/normal",
                                                                                            children: b.intl.format(
                                                                                                b.t["4q006W"],
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
                                                            _.map((e) =>
                                                                (0, l.jsx)(
                                                                    "li",
                                                                    {
                                                                        children: (0, l.jsxs)("div", {
                                                                            className: G.onboardingChangeLogItemTitle,
                                                                            children: [
                                                                                (0, l.jsx)(C, {
                                                                                    actionType: p.RWi.DELETE,
                                                                                    targetType: t.targetType,
                                                                                    action: t.action,
                                                                                }),
                                                                                (0, l.jsx)(d.Text, {
                                                                                    variant: "text-md/normal",
                                                                                    children: b.intl.format(
                                                                                        b.t["m3dt+K"],
                                                                                        {
                                                                                            title: e.title,
                                                                                        },
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
                                                                        c = e.role_ids.map(i).filter(O.Vq),
                                                                        u = e.channel_ids.map(s).filter(O.Vq),
                                                                        E = n.role_ids.map(i).filter(O.Vq),
                                                                        _ = n.channel_ids.map(s).filter(O.Vq),
                                                                        g = o().difference(E, c),
                                                                        A = o().difference(c, E),
                                                                        T = o().difference(_, u),
                                                                        f = o().difference(u, _),
                                                                        h = [];
                                                                    return (o().isEqual(e.title, n.title) ||
                                                                        h.push("title"),
                                                                    o().isEqual(e.description, n.description) ||
                                                                        h.push("description"),
                                                                    0 === g.length &&
                                                                        0 === A.length &&
                                                                        0 === T.length &&
                                                                        0 === f.length &&
                                                                        0 === h.length)
                                                                        ? null
                                                                        : (0, l.jsxs)(
                                                                              "li",
                                                                              {
                                                                                  children: [
                                                                                      (0, l.jsxs)("div", {
                                                                                          className:
                                                                                              G.onboardingChangeLogItemTitle,
                                                                                          children: [
                                                                                              (0, l.jsx)(C, {
                                                                                                  actionType:
                                                                                                      p.RWi.UPDATE,
                                                                                                  targetType:
                                                                                                      t.targetType,
                                                                                                  action: t.action,
                                                                                              }),
                                                                                              (0, l.jsx)(d.Text, {
                                                                                                  variant:
                                                                                                      "text-md/normal",
                                                                                                  children:
                                                                                                      b.intl.format(
                                                                                                          b.t["WZO+ia"],
                                                                                                          {
                                                                                                              title: r,
                                                                                                          },
                                                                                                      ),
                                                                                              }),
                                                                                          ],
                                                                                      }),
                                                                                      (0, l.jsxs)("div", {
                                                                                          className:
                                                                                              G.onboardingChangeLogItemChanges,
                                                                                          children: [
                                                                                              g.length > 0 &&
                                                                                                  (0, l.jsx)(d.Text, {
                                                                                                      variant:
                                                                                                          "text-md/normal",
                                                                                                      children:
                                                                                                          b.intl.format(
                                                                                                              b.t[
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
                                                                                                  (0, l.jsx)(d.Text, {
                                                                                                      variant:
                                                                                                          "text-md/normal",
                                                                                                      children:
                                                                                                          b.intl.format(
                                                                                                              b.t
                                                                                                                  .xIVRoU,
                                                                                                              {
                                                                                                                  roles: A.join(
                                                                                                                      ", ",
                                                                                                                  ),
                                                                                                              },
                                                                                                          ),
                                                                                                  }),
                                                                                              T.length > 0 &&
                                                                                                  (0, l.jsx)(d.Text, {
                                                                                                      variant:
                                                                                                          "text-md/normal",
                                                                                                      children:
                                                                                                          b.intl.format(
                                                                                                              b.t
                                                                                                                  .iYowX4,
                                                                                                              {
                                                                                                                  channels:
                                                                                                                      T.join(
                                                                                                                          ", ",
                                                                                                                      ),
                                                                                                              },
                                                                                                          ),
                                                                                                  }),
                                                                                              f.length > 0 &&
                                                                                                  (0, l.jsx)(d.Text, {
                                                                                                      variant:
                                                                                                          "text-md/normal",
                                                                                                      children:
                                                                                                          b.intl.format(
                                                                                                              b.t
                                                                                                                  .JLdJpL,
                                                                                                              {
                                                                                                                  channels:
                                                                                                                      f.join(
                                                                                                                          ", ",
                                                                                                                      ),
                                                                                                              },
                                                                                                          ),
                                                                                                  }),
                                                                                              h.map((t, r) =>
                                                                                                  (0, l.jsx)(
                                                                                                      d.Text,
                                                                                                      {
                                                                                                          variant:
                                                                                                              "text-md/normal",
                                                                                                          children:
                                                                                                              b.intl.format(
                                                                                                                  b.t[
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
                                                                })(c[e], u[e]),
                                                            ),
                                                        ],
                                                    },
                                                    "options",
                                                );
                                            })(a, t, n);
                                        if (
                                            t.action === p.F_X.HOME_SETTINGS_CREATE ||
                                            t.action === p.F_X.HOME_SETTINGS_UPDATE
                                        )
                                            return (function (e, t) {
                                                var n, r, a, i, s, c, u;
                                                let { oldValue: E, newValue: _, key: g } = e,
                                                    { targetType: A, action: T } = t;
                                                switch (g) {
                                                    case p.gGk.WELCOME_MESSAGE:
                                                        let f, I, O, N;
                                                        return (
                                                            (f = h.default.getUser(
                                                                null == E || null == (i = E.author_ids) ? void 0 : i[0],
                                                            )),
                                                            (I = h.default.getUser(
                                                                null == (s = _.author_ids) ? void 0 : s[0],
                                                            )),
                                                            (O =
                                                                (null == f ? void 0 : f.id) !==
                                                                (null == I ? void 0 : I.id)
                                                                    ? (0, l.jsx)("li", {
                                                                          children: (0, l.jsx)("div", {
                                                                              className: G.onboardingChangeLogItemTitle,
                                                                              children: (0, l.jsx)(d.Text, {
                                                                                  variant: "text-md/normal",
                                                                                  children: b.intl.format(
                                                                                      b.t["PrOzA+"],
                                                                                      {
                                                                                          oldUser:
                                                                                              null !=
                                                                                              (n =
                                                                                                  null == f
                                                                                                      ? void 0
                                                                                                      : f.username)
                                                                                                  ? n
                                                                                                  : b.intl.string(
                                                                                                        b.t.PoWNfe,
                                                                                                    ),
                                                                                          newUser:
                                                                                              null !=
                                                                                              (r =
                                                                                                  null == I
                                                                                                      ? void 0
                                                                                                      : I.username)
                                                                                                  ? r
                                                                                                  : b.intl.string(
                                                                                                        b.t.PoWNfe,
                                                                                                    ),
                                                                                      },
                                                                                  ),
                                                                              }),
                                                                          }),
                                                                      })
                                                                    : null),
                                                            (N =
                                                                (null == E ? void 0 : E.message) !== _.message
                                                                    ? (0, l.jsx)("li", {
                                                                          children: (0, l.jsx)("div", {
                                                                              className: G.onboardingChangeLogItemTitle,
                                                                              children: (0, l.jsx)(d.Text, {
                                                                                  variant: "text-md/normal",
                                                                                  children: b.intl.format(b.t.oB7rBb, {
                                                                                      oldMessage:
                                                                                          null !=
                                                                                          (a =
                                                                                              null == E
                                                                                                  ? void 0
                                                                                                  : E.message)
                                                                                              ? a
                                                                                              : b.intl.string(
                                                                                                    b.t.PoWNfe,
                                                                                                ),
                                                                                      newMessage: _.message,
                                                                                  }),
                                                                              }),
                                                                          }),
                                                                      })
                                                                    : null),
                                                            (0, l.jsxs)("ul", {
                                                                children: [O, N],
                                                            })
                                                        );
                                                    case p.gGk.NEW_MEMBER_ACTIONS:
                                                        let m, S, R, D, L, x;
                                                        return (
                                                            (m = (c = null != E ? E : []).map((e) => e.channel_id)),
                                                            (S = _.map((e) => e.channel_id)),
                                                            (R = o().difference(S, m)),
                                                            (D = o().difference(m, S)),
                                                            (L = _.filter((e) => R.includes(e.channel_id))),
                                                            (x = c.filter((e) => D.includes(e.channel_id))),
                                                            (0, l.jsxs)("ul", {
                                                                children: [
                                                                    L.map((e) =>
                                                                        (0, l.jsx)(
                                                                            "li",
                                                                            {
                                                                                children: (0, l.jsxs)("div", {
                                                                                    className:
                                                                                        G.onboardingChangeLogItemTitle,
                                                                                    children: [
                                                                                        (0, l.jsx)(C, {
                                                                                            actionType: p.RWi.CREATE,
                                                                                            targetType: A,
                                                                                            action: T,
                                                                                        }),
                                                                                        (0, l.jsx)(d.Text, {
                                                                                            variant: "text-md/normal",
                                                                                            children: b.intl.format(
                                                                                                b.t.oFSu66,
                                                                                                {
                                                                                                    name: e.title,
                                                                                                },
                                                                                            ),
                                                                                        }),
                                                                                    ],
                                                                                }),
                                                                            },
                                                                            e.channel_id,
                                                                        ),
                                                                    ),
                                                                    x.map((e) =>
                                                                        (0, l.jsx)(
                                                                            "li",
                                                                            {
                                                                                children: (0, l.jsxs)("div", {
                                                                                    className:
                                                                                        G.onboardingChangeLogItemTitle,
                                                                                    children: [
                                                                                        (0, l.jsx)(C, {
                                                                                            actionType: p.RWi.DELETE,
                                                                                            targetType: A,
                                                                                            action: T,
                                                                                        }),
                                                                                        (0, l.jsx)(d.Text, {
                                                                                            variant: "text-md/normal",
                                                                                            children: b.intl.format(
                                                                                                b.t.GssWar,
                                                                                                {
                                                                                                    name: e.title,
                                                                                                },
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
                                                    case p.gGk.RESOURCE_CHANNELS:
                                                        let M, v, j, U, y, P;
                                                        return (
                                                            (M = (u = null != E ? E : []).map((e) => e.channel_id)),
                                                            (v = _.map((e) => e.channel_id)),
                                                            (j = o().difference(v, M)),
                                                            (U = o().difference(M, v)),
                                                            (y = _.filter((e) => j.includes(e.channel_id))),
                                                            (P = u.filter((e) => U.includes(e.channel_id))),
                                                            (0, l.jsxs)("ul", {
                                                                children: [
                                                                    y.map((e) =>
                                                                        (0, l.jsx)(
                                                                            "li",
                                                                            {
                                                                                children: (0, l.jsxs)("div", {
                                                                                    className:
                                                                                        G.onboardingChangeLogItemTitle,
                                                                                    children: [
                                                                                        (0, l.jsx)(C, {
                                                                                            actionType: p.RWi.CREATE,
                                                                                            targetType: A,
                                                                                            action: T,
                                                                                        }),
                                                                                        (0, l.jsx)(d.Text, {
                                                                                            variant: "text-md/normal",
                                                                                            children: b.intl.format(
                                                                                                b.t.HlGndE,
                                                                                                {
                                                                                                    name: e.title,
                                                                                                },
                                                                                            ),
                                                                                        }),
                                                                                    ],
                                                                                }),
                                                                            },
                                                                            e.channel_id,
                                                                        ),
                                                                    ),
                                                                    P.map((e) =>
                                                                        (0, l.jsx)(
                                                                            "li",
                                                                            {
                                                                                children: (0, l.jsxs)("div", {
                                                                                    className:
                                                                                        G.onboardingChangeLogItemTitle,
                                                                                    children: [
                                                                                        (0, l.jsx)(C, {
                                                                                            actionType: p.RWi.DELETE,
                                                                                            targetType: A,
                                                                                            action: T,
                                                                                        }),
                                                                                        (0, l.jsx)(d.Text, {
                                                                                            variant: "text-md/normal",
                                                                                            children: b.intl.format(
                                                                                                b.t["7pysg6"],
                                                                                                {
                                                                                                    name: e.title,
                                                                                                },
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
                                    N = e[a.key];
                                return (function (e) {
                                    var t, n;
                                    let {
                                        changeItem: a,
                                        subChanges: i,
                                        changeNumber: s,
                                        log: o,
                                        oldValue: c,
                                        newValue: u,
                                        change: g,
                                    } = e;
                                    if (null == a) return console.warn("No change string for", g), null;
                                    let T = b.intl.format(a, {
                                        oldValue: c,
                                        newValue: u,
                                        count: Array.isArray(u) ? u.length : 0,
                                        subtarget:
                                            null != (t = null != (n = o.options.subtarget) ? n : g.subtarget) ? t : "",
                                        newColorHook: (e, t) => x(t, g.newValue),
                                        newColorsHook: (e, t) => {
                                            let { primary_color: n, secondary_color: a, tertiary_color: i } = u;
                                            return (0, l.jsx)(
                                                "span",
                                                {
                                                    children: [n, a, i].filter(O.Vq).map((e, n) =>
                                                        (0, l.jsxs)(
                                                            r.Fragment,
                                                            {
                                                                children: [
                                                                    (0, l.jsx)("span", {
                                                                        className: G.colorsHook,
                                                                        children: ""
                                                                            .concat(n > 0 ? ", " : "")
                                                                            .concat((0, E.Hl)(e).toUpperCase(), " "),
                                                                    }),
                                                                    x(t, (0, E.Hl)(e)),
                                                                ],
                                                            },
                                                            n,
                                                        ),
                                                    ),
                                                },
                                                t,
                                            );
                                        },
                                        oldColorHook: (e, t) => x(t, g.oldValue),
                                        oldTagHook: (e, t) =>
                                            (0, l.jsx)(
                                                A.A,
                                                {
                                                    tag: c,
                                                    size: A.A.Sizes.SMALL,
                                                },
                                                t,
                                            ),
                                        newTagHook: (e, t) =>
                                            (0, l.jsx)(
                                                A.A,
                                                {
                                                    tag: u,
                                                    size: A.A.Sizes.SMALL,
                                                },
                                                t,
                                            ),
                                        oldEmojiHook: (e, t) =>
                                            (0, l.jsx)(
                                                _.A,
                                                {
                                                    emojiId: c,
                                                },
                                                t,
                                            ),
                                        newEmojiHook: (e, t) =>
                                            (0, l.jsx)(
                                                _.A,
                                                {
                                                    emojiId: u,
                                                },
                                                t,
                                            ),
                                        applicationHook: (e, t) => {
                                            var n;
                                            return (0, l.jsx)(
                                                L,
                                                {
                                                    applicationId:
                                                        null != (n = null == c ? void 0 : c.application_id)
                                                            ? n
                                                            : null == u
                                                              ? void 0
                                                              : u.application_id,
                                                },
                                                t,
                                            );
                                        },
                                    });
                                    return null == T
                                        ? null
                                        : (0, l.jsxs)(
                                              "div",
                                              {
                                                  className: G.detail,
                                                  style: {
                                                      position: "relative",
                                                      top: 1,
                                                  },
                                                  children: [
                                                      (0, l.jsxs)(d.Text, {
                                                          className: G.prefix,
                                                          variant: "code",
                                                          color: (function (e) {
                                                              switch (e) {
                                                                  case p.RWi.CREATE:
                                                                      return "text-feedback-positive";
                                                                  case p.RWi.DELETE:
                                                                      return "text-feedback-critical";
                                                                  default:
                                                                      return "text-feedback-warning";
                                                              }
                                                          })(o.actionType),
                                                          children: [
                                                              s < 10 ? "0".concat(s) : s,
                                                              (0, l.jsx)("span", {
                                                                  className: G.dash,
                                                                  children: "—",
                                                              }),
                                                          ],
                                                      }),
                                                      (0, l.jsxs)("div", {
                                                          className: G.change,
                                                          children: [
                                                              (0, l.jsx)("div", {
                                                                  className: G.changeStr,
                                                                  children: T,
                                                              }),
                                                              null != i
                                                                  ? (0, l.jsx)("div", {
                                                                        children: i,
                                                                    })
                                                                  : null,
                                                          ],
                                                      }),
                                                  ],
                                              },
                                              s,
                                          );
                                })({
                                    changeItem: "function" == typeof N ? N(a) : N,
                                    subChanges: g,
                                    changeNumber: ++c,
                                    log: t,
                                    oldValue: i,
                                    newValue: s,
                                    change: a,
                                });
                            }),
                        )
                        .filter(O.Vq);
                return (0, l.jsx)(d.DUT, {
                    onClick: a,
                    className: i()(G.changeDetails, s),
                    children: g,
                });
            },
            [t, n, a, s],
        );
    return r.useMemo(() => {
        switch (t.targetType) {
            case p.GaG.GUILD:
                return c(S.UM());
            case p.GaG.CHANNEL:
            case p.GaG.CHANNEL_OVERWRITE:
                return c(S.gW());
            case p.GaG.USER:
                return c(S.qM());
            case p.GaG.ROLE:
                return c(S.nt());
            case p.GaG.ONBOARDING_PROMPT:
                return c(S.Iv());
            case p.GaG.GUILD_ONBOARDING:
                return c(S.Kj());
            case p.GaG.HOME_SETTINGS:
                return c(S.D_());
            case p.GaG.INVITE:
                return c(S.gQ());
            case p.GaG.WEBHOOK:
                return c(S.CI());
            case p.GaG.EMOJI:
                return c(S.XB());
            case p.GaG.STICKER:
                return c(S.eN());
            case p.GaG.INTEGRATION:
                return c(S.rt());
            case p.GaG.STAGE_INSTANCE:
                return c(S.Yx());
            case p.GaG.GUILD_SCHEDULED_EVENT:
                return c(S.X9());
            case p.GaG.GUILD_SCHEDULED_EVENT_EXCEPTION:
                return c(S.Sy());
            case p.GaG.THREAD:
                return c(S.pu());
            case p.GaG.APPLICATION_COMMAND:
                return c(S.$b(t.changes));
            case p.GaG.AUTO_MODERATION_RULE:
                return c(S.qd());
            case p.GaG.GUILD_SOUNDBOARD:
                return c(S.z3());
            case p.GaG.VOICE_CHANNEL_STATUS:
                return c(S.Kw());
            case p.GaG.GUILD_MEMBER_VERIFICATION:
                return c(S.Uq());
            case p.GaG.GUILD_PROFILE:
                return c(S.Df());
        }
    }, [t.targetType, t.changes, c]);
}
