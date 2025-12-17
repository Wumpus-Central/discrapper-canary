n.d(t, {
    mp: () => M,
    tP: () => x,
    xO: () => b,
}),
    n(539854),
    n(953529);
var r = n(54381),
    l = n(473749),
    i = n(120356),
    a = n.n(i),
    s = n(392711),
    o = n.n(s),
    u = n(913527),
    c = n.n(u),
    E = n(866442),
    d = n(481060),
    _ = n(596454),
    A = n(835473),
    T = n(479099),
    I = n(592125),
    m = n(485386),
    f = n(594174),
    g = n(934415),
    N = n(823379),
    h = n(624138),
    O = n(51144),
    R = n(909746),
    S = n(981631),
    p = n(388032),
    C = n(876334);
function b(e, t) {
    let n = R.vc[e.targetType];
    return null != n && !0 === n[t.key];
}
let D = {
    [S.vB8.CREATE]: C.typeCreate,
    [S.vB8.UPDATE]: C.typeUpdate,
    [S.vB8.DELETE]: C.typeDelete,
};
function U(e) {
    let { applicationId: t } = e,
        n = (0, A.q)(t);
    return null == n
        ? null
        : (0, r.jsx)(d.Text, {
              variant: "text-md/normal",
              children: n.name,
          });
}
function L(e, t) {
    return (0, r.jsx)(
        "div",
        {
            className: C.colorHook,
            style: { backgroundColor: t },
        },
        e,
    );
}
class M extends l.PureComponent {
    render() {
        let { actionType: e, targetType: t, action: n, themeOverride: l } = this.props,
            i = null != l ? C["themeOverride".concat((0, h.De)(l))] : null,
            s = a()(
                C.icon,
                D[e],
                n === S.rsA.MESSAGE_DELETE
                    ? C.targetMessage
                    : n === S.rsA.AUTO_MODERATION_BLOCK_MESSAGE ||
                        n === S.rsA.AUTO_MODERATION_FLAG_TO_CHANNEL ||
                        n === S.rsA.AUTO_MODERATION_USER_COMMUNICATION_DISABLED ||
                        n === S.rsA.AUTO_MODERATION_QUARANTINE_USER
                      ? C.autoModerationBlockMessage
                      : {
                            [S.KFR.ALL]: C.targetAll,
                            [S.KFR.GUILD]: C.targetGuild,
                            [S.KFR.CHANNEL]: C.targetChannel,
                            [S.KFR.CHANNEL_OVERWRITE]: C.targetChannel,
                            [S.KFR.USER]: C.targetMember,
                            [S.KFR.ROLE]: C.targetRole,
                            [S.KFR.ONBOARDING_PROMPT]: C.targetOnboarding,
                            [S.KFR.GUILD_ONBOARDING]: C.targetOnboarding,
                            [S.KFR.HOME_SETTINGS]: C.targetOnboarding,
                            [S.KFR.INTEGRATION]: C.targetIntegration,
                            [S.KFR.INVITE]: C.targetInvite,
                            [S.KFR.WEBHOOK]: C.targetWebhook,
                            [S.KFR.EMOJI]: C.targetEmoji,
                            [S.KFR.STICKER]: C.targetSticker,
                            [S.KFR.STAGE_INSTANCE]: C.targetStageInstance,
                            [S.KFR.GUILD_SCHEDULED_EVENT]: C.targetGuildScheduledEvent,
                            [S.KFR.GUILD_SCHEDULED_EVENT_EXCEPTION]: C.targetGuildScheduledEvent,
                            [S.KFR.THREAD]: C.thread,
                            [S.KFR.APPLICATION_COMMAND]: C.applicationCommand,
                            [S.KFR.AUTO_MODERATION_RULE]: C.autoModerationRule,
                            [S.KFR.GUILD_HOME]: C.targetGuildHome,
                            [S.KFR.GUILD_SOUNDBOARD]: C.targetGuildSoundboard,
                            [S.KFR.VOICE_CHANNEL_STATUS]: C.targetChannel,
                            [S.KFR.GUILD_MEMBER_VERIFICATION]: C.targetMember,
                            [S.KFR.GUILD_PROFILE]: C.targetGuild,
                        }[t],
                i,
            );
        return (0, r.jsx)("div", { className: s });
    }
}
function x(e) {
    let { log: t, guild: n, onContentClick: i, className: s } = e,
        u = l.useCallback(
            (e) => {
                if (null == t.changes) return null;
                let u = 0,
                    A = o()
                        .flatten(
                            t.changes.map((i) => {
                                if (b(t, i)) return null;
                                let { oldValue: a, newValue: s } = (() => {
                                        if (
                                            (t.action === S.rsA.CHANNEL_UPDATE || t.action === S.rsA.CHANNEL_CREATE) &&
                                            i.key === S.zUn.TYPE
                                        ) {
                                            var e, n;
                                            return {
                                                oldValue:
                                                    null != (e = i.oldValue) ? e : (0, g.a5)({ type: i.oldValue }),
                                                newValue:
                                                    null != (n = i.newValue) ? n : (0, g.a5)({ type: i.newValue }),
                                            };
                                        }
                                        if (
                                            t.action === S.rsA.MEMBER_UPDATE &&
                                            i.key === S.zUn.COMMUNICATION_DISABLED_UNTIL
                                        ) {
                                            let e = c()(i.newValue);
                                            return {
                                                oldValue: i.oldValue,
                                                newValue: e.isValid() ? e.calendar() : i.newValue,
                                            };
                                        }
                                        return t.action === S.rsA.GUILD_UPDATE && i.key === S.zUn.OWNER_ID
                                            ? {
                                                  oldValue: O.ZP.getUserTag(i.oldValue, { mode: "username" }),
                                                  newValue: O.ZP.getUserTag(i.newValue, { mode: "username" }),
                                              }
                                            : i;
                                    })(),
                                    A = (() => {
                                        if (t.action === S.rsA.MEMBER_ROLE_UPDATE)
                                            return (function (e) {
                                                let { newValue: t } = e;
                                                return Array.isArray(t)
                                                    ? t.map((e) =>
                                                          (0, r.jsx)(
                                                              "div",
                                                              {
                                                                  className: C.subListItem,
                                                                  children: e.name,
                                                              },
                                                              e.id,
                                                          ),
                                                      )
                                                    : null;
                                            })(i);
                                        if (
                                            t.targetType === S.KFR.ROLE ||
                                            t.action === S.rsA.CHANNEL_OVERWRITE_CREATE ||
                                            t.action === S.rsA.CHANNEL_OVERWRITE_UPDATE
                                        )
                                            return (function (e, t) {
                                                let { newValue: n } = e;
                                                return Array.isArray(n)
                                                    ? n.map((e, n) =>
                                                          (0, r.jsx)(
                                                              "div",
                                                              {
                                                                  className: C.subListItem,
                                                                  children: R.hQ(e, t),
                                                              },
                                                              n,
                                                          ),
                                                      )
                                                    : null;
                                            })(i, t);
                                        if (
                                            (t.action === S.rsA.CHANNEL_UPDATE || t.action === S.rsA.THREAD_UPDATE) &&
                                            i.key === S.zUn.FLAGS
                                        )
                                            return (function (e) {
                                                let { newValue: t, oldValue: n } = e,
                                                    l = [];
                                                return (Array.isArray(n) &&
                                                    (l = l.concat(
                                                        n.map((e) =>
                                                            (0, r.jsx)(
                                                                "div",
                                                                {
                                                                    className: C.subListItem,
                                                                    children: R.cT(e),
                                                                },
                                                                e,
                                                            ),
                                                        ),
                                                    )),
                                                Array.isArray(t) &&
                                                    (l = l.concat(
                                                        t.map((e) =>
                                                            (0, r.jsx)(
                                                                "div",
                                                                {
                                                                    className: C.subListItem,
                                                                    children: R.em(e),
                                                                },
                                                                e,
                                                            ),
                                                        ),
                                                    )),
                                                l.length > 0)
                                                    ? l
                                                    : null;
                                            })(i);
                                        if (
                                            (t.action === S.rsA.ONBOARDING_PROMPT_UPDATE ||
                                                t.action === S.rsA.ONBOARDING_PROMPT_CREATE) &&
                                            i.key === S.zUn.OPTIONS
                                        )
                                            return (function (e, t, n) {
                                                let { newValue: l, oldValue: i } = e,
                                                    a = (e) => {
                                                        var t;
                                                        let r =
                                                            null != n
                                                                ? null == (t = m.Z.getRole(n.id, e))
                                                                    ? void 0
                                                                    : t.name
                                                                : void 0;
                                                        return null == r ? null : "@".concat(r);
                                                    },
                                                    s = (e) => {
                                                        var t;
                                                        let n = null == (t = I.Z.getChannel(e)) ? void 0 : t.name;
                                                        return null == n ? null : "#".concat(n);
                                                    },
                                                    u = o().keyBy(null != i ? i : [], "id"),
                                                    c = o().keyBy(null != l ? l : [], "id"),
                                                    E = o()
                                                        .difference(Object.keys(c), Object.keys(u))
                                                        .map((e) => c[e]),
                                                    _ = o()
                                                        .difference(Object.keys(u), Object.keys(c))
                                                        .map((e) => u[e]),
                                                    A = o().intersection(Object.keys(c), Object.keys(u));
                                                return (0, r.jsxs)(
                                                    "ul",
                                                    {
                                                        className: C.onboardingChangeLogContainer,
                                                        children: [
                                                            E.map((e) => {
                                                                let {
                                                                        role_ids: n,
                                                                        channel_ids: l,
                                                                        title: i,
                                                                        id: o,
                                                                    } = e,
                                                                    u = (null != n ? n : []).map(a).filter(N.lm),
                                                                    c = (null != l ? l : []).map(s).filter(N.lm);
                                                                return (0, r.jsxs)(
                                                                    "li",
                                                                    {
                                                                        children: [
                                                                            (0, r.jsxs)("div", {
                                                                                className:
                                                                                    C.onboardingChangeLogItemTitle,
                                                                                children: [
                                                                                    (0, r.jsx)(M, {
                                                                                        actionType: S.vB8.CREATE,
                                                                                        targetType: t.targetType,
                                                                                        action: t.action,
                                                                                    }),
                                                                                    (0, r.jsx)(d.Text, {
                                                                                        variant: "text-md/normal",
                                                                                        children: p.intl.format(
                                                                                            p.t.CZ1tyo,
                                                                                            { title: i },
                                                                                        ),
                                                                                    }),
                                                                                ],
                                                                            }),
                                                                            (0, r.jsxs)("div", {
                                                                                className:
                                                                                    C.onboardingChangeLogItemChanges,
                                                                                children: [
                                                                                    u.length > 0 &&
                                                                                        (0, r.jsx)(d.Text, {
                                                                                            variant: "text-md/normal",
                                                                                            children: p.intl.format(
                                                                                                p.t["gt/5z1"],
                                                                                                { roles: u.join(", ") },
                                                                                            ),
                                                                                        }),
                                                                                    c.length > 0 &&
                                                                                        (0, r.jsx)(d.Text, {
                                                                                            variant: "text-md/normal",
                                                                                            children: p.intl.format(
                                                                                                p.t["4q006W"],
                                                                                                {
                                                                                                    channels:
                                                                                                        c.join(", "),
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
                                                                (0, r.jsx)(
                                                                    "li",
                                                                    {
                                                                        children: (0, r.jsxs)("div", {
                                                                            className: C.onboardingChangeLogItemTitle,
                                                                            children: [
                                                                                (0, r.jsx)(M, {
                                                                                    actionType: S.vB8.DELETE,
                                                                                    targetType: t.targetType,
                                                                                    action: t.action,
                                                                                }),
                                                                                (0, r.jsx)(d.Text, {
                                                                                    variant: "text-md/normal",
                                                                                    children: p.intl.format(
                                                                                        p.t["m3dt+K"],
                                                                                        { title: e.title },
                                                                                    ),
                                                                                }),
                                                                            ],
                                                                        }),
                                                                    },
                                                                    e.id,
                                                                ),
                                                            ),
                                                            A.map((e) =>
                                                                ((e, n) => {
                                                                    let { title: l, id: i } = n,
                                                                        u = e.role_ids.map(a).filter(N.lm),
                                                                        c = e.channel_ids.map(s).filter(N.lm),
                                                                        E = n.role_ids.map(a).filter(N.lm),
                                                                        _ = n.channel_ids.map(s).filter(N.lm),
                                                                        A = o().difference(E, u),
                                                                        T = o().difference(u, E),
                                                                        I = o().difference(_, c),
                                                                        m = o().difference(c, _),
                                                                        f = [];
                                                                    return (o().isEqual(e.title, n.title) ||
                                                                        f.push("title"),
                                                                    o().isEqual(e.description, n.description) ||
                                                                        f.push("description"),
                                                                    0 === A.length &&
                                                                        0 === T.length &&
                                                                        0 === I.length &&
                                                                        0 === m.length &&
                                                                        0 === f.length)
                                                                        ? null
                                                                        : (0, r.jsxs)(
                                                                              "li",
                                                                              {
                                                                                  children: [
                                                                                      (0, r.jsxs)("div", {
                                                                                          className:
                                                                                              C.onboardingChangeLogItemTitle,
                                                                                          children: [
                                                                                              (0, r.jsx)(M, {
                                                                                                  actionType:
                                                                                                      S.vB8.UPDATE,
                                                                                                  targetType:
                                                                                                      t.targetType,
                                                                                                  action: t.action,
                                                                                              }),
                                                                                              (0, r.jsx)(d.Text, {
                                                                                                  variant:
                                                                                                      "text-md/normal",
                                                                                                  children:
                                                                                                      p.intl.format(
                                                                                                          p.t["WZO+ia"],
                                                                                                          { title: l },
                                                                                                      ),
                                                                                              }),
                                                                                          ],
                                                                                      }),
                                                                                      (0, r.jsxs)("div", {
                                                                                          className:
                                                                                              C.onboardingChangeLogItemChanges,
                                                                                          children: [
                                                                                              A.length > 0 &&
                                                                                                  (0, r.jsx)(d.Text, {
                                                                                                      variant:
                                                                                                          "text-md/normal",
                                                                                                      children:
                                                                                                          p.intl.format(
                                                                                                              p.t[
                                                                                                                  "R+km+d"
                                                                                                              ],
                                                                                                              {
                                                                                                                  roles: A.join(
                                                                                                                      ", ",
                                                                                                                  ),
                                                                                                              },
                                                                                                          ),
                                                                                                  }),
                                                                                              T.length > 0 &&
                                                                                                  (0, r.jsx)(d.Text, {
                                                                                                      variant:
                                                                                                          "text-md/normal",
                                                                                                      children:
                                                                                                          p.intl.format(
                                                                                                              p.t
                                                                                                                  .xIVRoU,
                                                                                                              {
                                                                                                                  roles: T.join(
                                                                                                                      ", ",
                                                                                                                  ),
                                                                                                              },
                                                                                                          ),
                                                                                                  }),
                                                                                              I.length > 0 &&
                                                                                                  (0, r.jsx)(d.Text, {
                                                                                                      variant:
                                                                                                          "text-md/normal",
                                                                                                      children:
                                                                                                          p.intl.format(
                                                                                                              p.t
                                                                                                                  .iYowX4,
                                                                                                              {
                                                                                                                  channels:
                                                                                                                      I.join(
                                                                                                                          ", ",
                                                                                                                      ),
                                                                                                              },
                                                                                                          ),
                                                                                                  }),
                                                                                              m.length > 0 &&
                                                                                                  (0, r.jsx)(d.Text, {
                                                                                                      variant:
                                                                                                          "text-md/normal",
                                                                                                      children:
                                                                                                          p.intl.format(
                                                                                                              p.t
                                                                                                                  .JLdJpL,
                                                                                                              {
                                                                                                                  channels:
                                                                                                                      m.join(
                                                                                                                          ", ",
                                                                                                                      ),
                                                                                                              },
                                                                                                          ),
                                                                                                  }),
                                                                                              f.map((t, l) =>
                                                                                                  (0, r.jsx)(
                                                                                                      d.Text,
                                                                                                      {
                                                                                                          variant:
                                                                                                              "text-md/normal",
                                                                                                          children:
                                                                                                              p.intl.format(
                                                                                                                  p.t[
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
                                                                                                      l,
                                                                                                  ),
                                                                                              ),
                                                                                          ],
                                                                                      }),
                                                                                  ],
                                                                              },
                                                                              i,
                                                                          );
                                                                })(u[e], c[e]),
                                                            ),
                                                        ],
                                                    },
                                                    "options",
                                                );
                                            })(i, t, n);
                                        if (
                                            t.action === S.rsA.HOME_SETTINGS_CREATE ||
                                            t.action === S.rsA.HOME_SETTINGS_UPDATE
                                        )
                                            return (function (e, t) {
                                                let { oldValue: n, newValue: l, key: i } = e,
                                                    { targetType: a, action: s } = t;
                                                switch (i) {
                                                    case S.zUn.WELCOME_MESSAGE:
                                                        return ((e, t) => {
                                                            var n, l, i, a, s;
                                                            let o = f.default.getUser(
                                                                    null == t || null == (n = t.author_ids)
                                                                        ? void 0
                                                                        : n[0],
                                                                ),
                                                                u = f.default.getUser(
                                                                    null == (l = e.author_ids) ? void 0 : l[0],
                                                                ),
                                                                c =
                                                                    (null == o ? void 0 : o.id) !==
                                                                    (null == u ? void 0 : u.id)
                                                                        ? (0, r.jsx)("li", {
                                                                              children: (0, r.jsx)("div", {
                                                                                  className:
                                                                                      C.onboardingChangeLogItemTitle,
                                                                                  children: (0, r.jsx)(d.Text, {
                                                                                      variant: "text-md/normal",
                                                                                      children: p.intl.format(
                                                                                          p.t["PrOzA+"],
                                                                                          {
                                                                                              oldUser:
                                                                                                  null !=
                                                                                                  (i =
                                                                                                      null == o
                                                                                                          ? void 0
                                                                                                          : o.username)
                                                                                                      ? i
                                                                                                      : p.intl.string(
                                                                                                            p.t.PoWNfe,
                                                                                                        ),
                                                                                              newUser:
                                                                                                  null !=
                                                                                                  (a =
                                                                                                      null == u
                                                                                                          ? void 0
                                                                                                          : u.username)
                                                                                                      ? a
                                                                                                      : p.intl.string(
                                                                                                            p.t.PoWNfe,
                                                                                                        ),
                                                                                          },
                                                                                      ),
                                                                                  }),
                                                                              }),
                                                                          })
                                                                        : null,
                                                                E =
                                                                    (null == t ? void 0 : t.message) !== e.message
                                                                        ? (0, r.jsx)("li", {
                                                                              children: (0, r.jsx)("div", {
                                                                                  className:
                                                                                      C.onboardingChangeLogItemTitle,
                                                                                  children: (0, r.jsx)(d.Text, {
                                                                                      variant: "text-md/normal",
                                                                                      children: p.intl.format(
                                                                                          p.t.oB7rBb,
                                                                                          {
                                                                                              oldMessage:
                                                                                                  null !=
                                                                                                  (s =
                                                                                                      null == t
                                                                                                          ? void 0
                                                                                                          : t.message)
                                                                                                      ? s
                                                                                                      : p.intl.string(
                                                                                                            p.t.PoWNfe,
                                                                                                        ),
                                                                                              newMessage: e.message,
                                                                                          },
                                                                                      ),
                                                                                  }),
                                                                              }),
                                                                          })
                                                                        : null;
                                                            return (0, r.jsxs)("ul", {
                                                                children: [c, E],
                                                            });
                                                        })(l, n);
                                                    case S.zUn.NEW_MEMBER_ACTIONS:
                                                        return ((e, t) => {
                                                            let n = e.map((e) => e.channel_id),
                                                                l = t.map((e) => e.channel_id),
                                                                i = o().difference(l, n),
                                                                u = o().difference(n, l),
                                                                c = t.filter((e) => i.includes(e.channel_id)),
                                                                E = e.filter((e) => u.includes(e.channel_id));
                                                            return (0, r.jsxs)("ul", {
                                                                children: [
                                                                    c.map((e) =>
                                                                        (0, r.jsx)(
                                                                            "li",
                                                                            {
                                                                                children: (0, r.jsxs)("div", {
                                                                                    className:
                                                                                        C.onboardingChangeLogItemTitle,
                                                                                    children: [
                                                                                        (0, r.jsx)(M, {
                                                                                            actionType: S.vB8.CREATE,
                                                                                            targetType: a,
                                                                                            action: s,
                                                                                        }),
                                                                                        (0, r.jsx)(d.Text, {
                                                                                            variant: "text-md/normal",
                                                                                            children: p.intl.format(
                                                                                                p.t.oFSu66,
                                                                                                { name: e.title },
                                                                                            ),
                                                                                        }),
                                                                                    ],
                                                                                }),
                                                                            },
                                                                            e.channel_id,
                                                                        ),
                                                                    ),
                                                                    E.map((e) =>
                                                                        (0, r.jsx)(
                                                                            "li",
                                                                            {
                                                                                children: (0, r.jsxs)("div", {
                                                                                    className:
                                                                                        C.onboardingChangeLogItemTitle,
                                                                                    children: [
                                                                                        (0, r.jsx)(M, {
                                                                                            actionType: S.vB8.DELETE,
                                                                                            targetType: a,
                                                                                            action: s,
                                                                                        }),
                                                                                        (0, r.jsx)(d.Text, {
                                                                                            variant: "text-md/normal",
                                                                                            children: p.intl.format(
                                                                                                p.t.GssWar,
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
                                                            });
                                                        })(null != n ? n : [], l);
                                                    case S.zUn.RESOURCE_CHANNELS:
                                                        return ((e, t) => {
                                                            let n = e.map((e) => e.channel_id),
                                                                l = t.map((e) => e.channel_id),
                                                                i = o().difference(l, n),
                                                                u = o().difference(n, l),
                                                                c = t.filter((e) => i.includes(e.channel_id)),
                                                                E = e.filter((e) => u.includes(e.channel_id));
                                                            return (0, r.jsxs)("ul", {
                                                                children: [
                                                                    c.map((e) =>
                                                                        (0, r.jsx)(
                                                                            "li",
                                                                            {
                                                                                children: (0, r.jsxs)("div", {
                                                                                    className:
                                                                                        C.onboardingChangeLogItemTitle,
                                                                                    children: [
                                                                                        (0, r.jsx)(M, {
                                                                                            actionType: S.vB8.CREATE,
                                                                                            targetType: a,
                                                                                            action: s,
                                                                                        }),
                                                                                        (0, r.jsx)(d.Text, {
                                                                                            variant: "text-md/normal",
                                                                                            children: p.intl.format(
                                                                                                p.t.HlGndE,
                                                                                                { name: e.title },
                                                                                            ),
                                                                                        }),
                                                                                    ],
                                                                                }),
                                                                            },
                                                                            e.channel_id,
                                                                        ),
                                                                    ),
                                                                    E.map((e) =>
                                                                        (0, r.jsx)(
                                                                            "li",
                                                                            {
                                                                                children: (0, r.jsxs)("div", {
                                                                                    className:
                                                                                        C.onboardingChangeLogItemTitle,
                                                                                    children: [
                                                                                        (0, r.jsx)(M, {
                                                                                            actionType: S.vB8.DELETE,
                                                                                            targetType: a,
                                                                                            action: s,
                                                                                        }),
                                                                                        (0, r.jsx)(d.Text, {
                                                                                            variant: "text-md/normal",
                                                                                            children: p.intl.format(
                                                                                                p.t["7pysg6"],
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
                                                            });
                                                        })(null != n ? n : [], l);
                                                    default:
                                                        return null;
                                                }
                                            })(i, t);
                                        return null;
                                    })(),
                                    h = e[i.key];
                                return (function (e) {
                                    var t, n;
                                    let {
                                        changeItem: i,
                                        subChanges: a,
                                        changeNumber: s,
                                        log: o,
                                        oldValue: u,
                                        newValue: c,
                                        change: A,
                                    } = e;
                                    if (null == i) return console.warn("No change string for", A), null;
                                    let I = p.intl.format(i, {
                                        oldValue: u,
                                        newValue: c,
                                        count: Array.isArray(c) ? c.length : 0,
                                        subtarget:
                                            null != (n = null != (t = o.options.subtarget) ? t : A.subtarget) ? n : "",
                                        newColorHook: (e, t) => L(t, A.newValue),
                                        newColorsHook: (e, t) => {
                                            let { primary_color: n, secondary_color: i, tertiary_color: a } = c;
                                            return (0, r.jsx)(
                                                "span",
                                                {
                                                    children: [n, i, a].filter(N.lm).map((e, n) =>
                                                        (0, r.jsxs)(
                                                            l.Fragment,
                                                            {
                                                                children: [
                                                                    (0, r.jsx)("span", {
                                                                        className: C.colorsHook,
                                                                        children: ""
                                                                            .concat(n > 0 ? ", " : "")
                                                                            .concat((0, E.Rf)(e).toUpperCase(), " "),
                                                                    }),
                                                                    L(t, (0, E.Rf)(e)),
                                                                ],
                                                            },
                                                            n,
                                                        ),
                                                    ),
                                                },
                                                t,
                                            );
                                        },
                                        oldColorHook: (e, t) => L(t, A.oldValue),
                                        oldTagHook: (e, t) =>
                                            (0, r.jsx)(
                                                T.Z,
                                                {
                                                    tag: u,
                                                    size: T.Z.Sizes.SMALL,
                                                },
                                                t,
                                            ),
                                        newTagHook: (e, t) =>
                                            (0, r.jsx)(
                                                T.Z,
                                                {
                                                    tag: c,
                                                    size: T.Z.Sizes.SMALL,
                                                },
                                                t,
                                            ),
                                        oldEmojiHook: (e, t) => (0, r.jsx)(_.Z, { emojiId: u }, t),
                                        newEmojiHook: (e, t) => (0, r.jsx)(_.Z, { emojiId: c }, t),
                                        applicationHook: (e, t) => {
                                            var n;
                                            return (0, r.jsx)(
                                                U,
                                                {
                                                    applicationId:
                                                        null != (n = null == u ? void 0 : u.application_id)
                                                            ? n
                                                            : null == c
                                                              ? void 0
                                                              : c.application_id,
                                                },
                                                t,
                                            );
                                        },
                                    });
                                    return null == I
                                        ? null
                                        : (0, r.jsxs)(
                                              "div",
                                              {
                                                  className: C.detail,
                                                  style: {
                                                      position: "relative",
                                                      top: 1,
                                                  },
                                                  children: [
                                                      (0, r.jsxs)(d.Text, {
                                                          className: C.prefix,
                                                          variant: "code",
                                                          color: (function (e) {
                                                              switch (e) {
                                                                  case S.vB8.CREATE:
                                                                      return "text-feedback-positive";
                                                                  case S.vB8.DELETE:
                                                                      return "status-danger";
                                                                  default:
                                                                      return "text-feedback-warning";
                                                              }
                                                          })(o.actionType),
                                                          children: [
                                                              s < 10 ? "0".concat(s) : s,
                                                              (0, r.jsx)("span", {
                                                                  className: C.dash,
                                                                  children: "\u2014",
                                                              }),
                                                          ],
                                                      }),
                                                      (0, r.jsxs)("div", {
                                                          className: C.change,
                                                          children: [
                                                              (0, r.jsx)("div", {
                                                                  className: C.changeStr,
                                                                  children: I,
                                                              }),
                                                              null != a ? (0, r.jsx)("div", { children: a }) : null,
                                                          ],
                                                      }),
                                                  ],
                                              },
                                              s,
                                          );
                                })({
                                    changeItem: "function" == typeof h ? h(i) : h,
                                    subChanges: A,
                                    changeNumber: ++u,
                                    log: t,
                                    oldValue: a,
                                    newValue: s,
                                    change: i,
                                });
                            }),
                        )
                        .filter(N.lm);
                return (0, r.jsx)(d.P3F, {
                    onClick: i,
                    className: a()(C.changeDetails, s),
                    children: A,
                });
            },
            [t, n, i, s],
        );
    return l.useMemo(() => {
        switch (t.targetType) {
            case S.KFR.GUILD:
                return u(R.pY());
            case S.KFR.CHANNEL:
            case S.KFR.CHANNEL_OVERWRITE:
                return u(R.ML());
            case S.KFR.USER:
                return u(R.lU());
            case S.KFR.ROLE:
                return u(R.HE());
            case S.KFR.ONBOARDING_PROMPT:
                return u(R.oD());
            case S.KFR.GUILD_ONBOARDING:
                return u(R.EN());
            case S.KFR.HOME_SETTINGS:
                return u(R.hx());
            case S.KFR.INVITE:
                return u(R.HN());
            case S.KFR.WEBHOOK:
                return u(R.lR());
            case S.KFR.EMOJI:
                return u(R.N$());
            case S.KFR.STICKER:
                return u(R.Bq());
            case S.KFR.INTEGRATION:
                return u(R.K());
            case S.KFR.STAGE_INSTANCE:
                return u(R.C2());
            case S.KFR.GUILD_SCHEDULED_EVENT:
                return u(R.uB());
            case S.KFR.GUILD_SCHEDULED_EVENT_EXCEPTION:
                return u(R.pi());
            case S.KFR.THREAD:
                return u(R.pA());
            case S.KFR.APPLICATION_COMMAND:
                return u(R.vm(t.changes));
            case S.KFR.AUTO_MODERATION_RULE:
                return u(R.rK());
            case S.KFR.GUILD_SOUNDBOARD:
                return u(R.C0());
            case S.KFR.VOICE_CHANNEL_STATUS:
                return u(R.F1());
            case S.KFR.GUILD_MEMBER_VERIFICATION:
                return u(R.JA());
            case S.KFR.GUILD_PROFILE:
                return u(R.zT());
        }
    }, [t.targetType, t.changes, u]);
}
