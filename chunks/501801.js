n.d(t, {
    mp: () => M,
    tP: () => v,
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
    c = n(913527),
    u = n.n(c),
    d = n(866442),
    E = n(481060),
    _ = n(596454),
    A = n(835473),
    f = n(479099),
    T = n(592125),
    g = n(485386),
    I = n(594174),
    m = n(934415),
    h = n(823379),
    N = n(624138),
    O = n(51144),
    p = n(909746),
    R = n(981631),
    S = n(388032),
    C = n(876334);
function b(e, t) {
    let n = p.vc[e.targetType];
    return null != n && !0 === n[t.key];
}
let D = {
    [R.vB8.CREATE]: C.typeCreate,
    [R.vB8.UPDATE]: C.typeUpdate,
    [R.vB8.DELETE]: C.typeDelete,
};
function L(e) {
    let { applicationId: t } = e,
        n = (0, A.q)(t);
    return null == n
        ? null
        : (0, r.jsx)(E.Text, {
              variant: "text-md/normal",
              children: n.name,
          });
}
function U(e, t) {
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
            i = null != l ? C["themeOverride".concat((0, N.De)(l))] : null,
            s = a()(
                C.icon,
                D[e],
                n === R.rsA.MESSAGE_DELETE
                    ? C.targetMessage
                    : n === R.rsA.AUTO_MODERATION_BLOCK_MESSAGE ||
                        n === R.rsA.AUTO_MODERATION_FLAG_TO_CHANNEL ||
                        n === R.rsA.AUTO_MODERATION_USER_COMMUNICATION_DISABLED ||
                        n === R.rsA.AUTO_MODERATION_QUARANTINE_USER
                      ? C.autoModerationBlockMessage
                      : {
                            [R.KFR.ALL]: C.targetAll,
                            [R.KFR.GUILD]: C.targetGuild,
                            [R.KFR.CHANNEL]: C.targetChannel,
                            [R.KFR.CHANNEL_OVERWRITE]: C.targetChannel,
                            [R.KFR.USER]: C.targetMember,
                            [R.KFR.ROLE]: C.targetRole,
                            [R.KFR.ONBOARDING_PROMPT]: C.targetOnboarding,
                            [R.KFR.GUILD_ONBOARDING]: C.targetOnboarding,
                            [R.KFR.HOME_SETTINGS]: C.targetOnboarding,
                            [R.KFR.INTEGRATION]: C.targetIntegration,
                            [R.KFR.INVITE]: C.targetInvite,
                            [R.KFR.WEBHOOK]: C.targetWebhook,
                            [R.KFR.EMOJI]: C.targetEmoji,
                            [R.KFR.STICKER]: C.targetSticker,
                            [R.KFR.STAGE_INSTANCE]: C.targetStageInstance,
                            [R.KFR.GUILD_SCHEDULED_EVENT]: C.targetGuildScheduledEvent,
                            [R.KFR.GUILD_SCHEDULED_EVENT_EXCEPTION]: C.targetGuildScheduledEvent,
                            [R.KFR.THREAD]: C.thread,
                            [R.KFR.APPLICATION_COMMAND]: C.applicationCommand,
                            [R.KFR.AUTO_MODERATION_RULE]: C.autoModerationRule,
                            [R.KFR.GUILD_HOME]: C.targetGuildHome,
                            [R.KFR.GUILD_SOUNDBOARD]: C.targetGuildSoundboard,
                            [R.KFR.VOICE_CHANNEL_STATUS]: C.targetChannel,
                            [R.KFR.GUILD_MEMBER_VERIFICATION]: C.targetMember,
                            [R.KFR.GUILD_PROFILE]: C.targetGuild,
                        }[t],
                i,
            );
        return (0, r.jsx)("div", { className: s });
    }
}
function v(e) {
    let { log: t, guild: n, onContentClick: i, className: s } = e,
        c = l.useCallback(
            (e) => {
                if (null == t.changes) return null;
                let c = 0,
                    A = o()
                        .flatten(
                            t.changes.map((i) => {
                                if (b(t, i)) return null;
                                let { oldValue: a, newValue: s } = (() => {
                                        if (
                                            (t.action === R.rsA.CHANNEL_UPDATE || t.action === R.rsA.CHANNEL_CREATE) &&
                                            i.key === R.zUn.TYPE
                                        ) {
                                            var e, n;
                                            return {
                                                oldValue:
                                                    null != (e = i.oldValue) ? e : (0, m.a5)({ type: i.oldValue }),
                                                newValue:
                                                    null != (n = i.newValue) ? n : (0, m.a5)({ type: i.newValue }),
                                            };
                                        }
                                        if (
                                            t.action === R.rsA.MEMBER_UPDATE &&
                                            i.key === R.zUn.COMMUNICATION_DISABLED_UNTIL
                                        ) {
                                            let e = u()(i.newValue);
                                            return {
                                                oldValue: i.oldValue,
                                                newValue: e.isValid() ? e.calendar() : i.newValue,
                                            };
                                        }
                                        return t.action === R.rsA.GUILD_UPDATE && i.key === R.zUn.OWNER_ID
                                            ? {
                                                  oldValue: O.ZP.getUserTag(i.oldValue, { mode: "username" }),
                                                  newValue: O.ZP.getUserTag(i.newValue, { mode: "username" }),
                                              }
                                            : i;
                                    })(),
                                    A = (() => {
                                        if (t.action === R.rsA.MEMBER_ROLE_UPDATE)
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
                                            t.targetType === R.KFR.ROLE ||
                                            t.action === R.rsA.CHANNEL_OVERWRITE_CREATE ||
                                            t.action === R.rsA.CHANNEL_OVERWRITE_UPDATE
                                        )
                                            return (function (e, t) {
                                                let { newValue: n } = e;
                                                return Array.isArray(n)
                                                    ? n.map((e, n) =>
                                                          (0, r.jsx)(
                                                              "div",
                                                              {
                                                                  className: C.subListItem,
                                                                  children: p.hQ(e, t),
                                                              },
                                                              n,
                                                          ),
                                                      )
                                                    : null;
                                            })(i, t);
                                        if (
                                            (t.action === R.rsA.CHANNEL_UPDATE || t.action === R.rsA.THREAD_UPDATE) &&
                                            i.key === R.zUn.FLAGS
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
                                                                    children: p.cT(e),
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
                                                                    children: p.em(e),
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
                                            (t.action === R.rsA.ONBOARDING_PROMPT_UPDATE ||
                                                t.action === R.rsA.ONBOARDING_PROMPT_CREATE) &&
                                            i.key === R.zUn.OPTIONS
                                        )
                                            return (function (e, t, n) {
                                                let { newValue: l, oldValue: i } = e,
                                                    a = (e) => {
                                                        var t;
                                                        let r =
                                                            null != n
                                                                ? null == (t = g.Z.getRole(n.id, e))
                                                                    ? void 0
                                                                    : t.name
                                                                : void 0;
                                                        return null == r ? null : "@".concat(r);
                                                    },
                                                    s = (e) => {
                                                        var t;
                                                        let n = null == (t = T.Z.getChannel(e)) ? void 0 : t.name;
                                                        return null == n ? null : "#".concat(n);
                                                    },
                                                    c = o().keyBy(null != i ? i : [], "id"),
                                                    u = o().keyBy(null != l ? l : [], "id"),
                                                    d = o()
                                                        .difference(Object.keys(u), Object.keys(c))
                                                        .map((e) => u[e]),
                                                    _ = o()
                                                        .difference(Object.keys(c), Object.keys(u))
                                                        .map((e) => c[e]),
                                                    A = o().intersection(Object.keys(u), Object.keys(c));
                                                return (0, r.jsxs)(
                                                    "ul",
                                                    {
                                                        className: C.onboardingChangeLogContainer,
                                                        children: [
                                                            d.map((e) => {
                                                                let {
                                                                        role_ids: n,
                                                                        channel_ids: l,
                                                                        title: i,
                                                                        id: o,
                                                                    } = e,
                                                                    c = (null != n ? n : []).map(a).filter(h.lm),
                                                                    u = (null != l ? l : []).map(s).filter(h.lm);
                                                                return (0, r.jsxs)(
                                                                    "li",
                                                                    {
                                                                        children: [
                                                                            (0, r.jsxs)("div", {
                                                                                className:
                                                                                    C.onboardingChangeLogItemTitle,
                                                                                children: [
                                                                                    (0, r.jsx)(M, {
                                                                                        actionType: R.vB8.CREATE,
                                                                                        targetType: t.targetType,
                                                                                        action: t.action,
                                                                                    }),
                                                                                    (0, r.jsx)(E.Text, {
                                                                                        variant: "text-md/normal",
                                                                                        children: S.intl.format(
                                                                                            S.t.CZ1tyo,
                                                                                            { title: i },
                                                                                        ),
                                                                                    }),
                                                                                ],
                                                                            }),
                                                                            (0, r.jsxs)("div", {
                                                                                className:
                                                                                    C.onboardingChangeLogItemChanges,
                                                                                children: [
                                                                                    c.length > 0 &&
                                                                                        (0, r.jsx)(E.Text, {
                                                                                            variant: "text-md/normal",
                                                                                            children: S.intl.format(
                                                                                                S.t["gt/5z1"],
                                                                                                { roles: c.join(", ") },
                                                                                            ),
                                                                                        }),
                                                                                    u.length > 0 &&
                                                                                        (0, r.jsx)(E.Text, {
                                                                                            variant: "text-md/normal",
                                                                                            children: S.intl.format(
                                                                                                S.t["4q006W"],
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
                                                                (0, r.jsx)(
                                                                    "li",
                                                                    {
                                                                        children: (0, r.jsxs)("div", {
                                                                            className: C.onboardingChangeLogItemTitle,
                                                                            children: [
                                                                                (0, r.jsx)(M, {
                                                                                    actionType: R.vB8.DELETE,
                                                                                    targetType: t.targetType,
                                                                                    action: t.action,
                                                                                }),
                                                                                (0, r.jsx)(E.Text, {
                                                                                    variant: "text-md/normal",
                                                                                    children: S.intl.format(
                                                                                        S.t["m3dt+K"],
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
                                                                        c = e.role_ids.map(a).filter(h.lm),
                                                                        u = e.channel_ids.map(s).filter(h.lm),
                                                                        d = n.role_ids.map(a).filter(h.lm),
                                                                        _ = n.channel_ids.map(s).filter(h.lm),
                                                                        A = o().difference(d, c),
                                                                        f = o().difference(c, d),
                                                                        T = o().difference(_, u),
                                                                        g = o().difference(u, _),
                                                                        I = [];
                                                                    return (o().isEqual(e.title, n.title) ||
                                                                        I.push("title"),
                                                                    o().isEqual(e.description, n.description) ||
                                                                        I.push("description"),
                                                                    0 === A.length &&
                                                                        0 === f.length &&
                                                                        0 === T.length &&
                                                                        0 === g.length &&
                                                                        0 === I.length)
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
                                                                                                      R.vB8.UPDATE,
                                                                                                  targetType:
                                                                                                      t.targetType,
                                                                                                  action: t.action,
                                                                                              }),
                                                                                              (0, r.jsx)(E.Text, {
                                                                                                  variant:
                                                                                                      "text-md/normal",
                                                                                                  children:
                                                                                                      S.intl.format(
                                                                                                          S.t["WZO+ia"],
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
                                                                                                  (0, r.jsx)(E.Text, {
                                                                                                      variant:
                                                                                                          "text-md/normal",
                                                                                                      children:
                                                                                                          S.intl.format(
                                                                                                              S.t[
                                                                                                                  "R+km+d"
                                                                                                              ],
                                                                                                              {
                                                                                                                  roles: A.join(
                                                                                                                      ", ",
                                                                                                                  ),
                                                                                                              },
                                                                                                          ),
                                                                                                  }),
                                                                                              f.length > 0 &&
                                                                                                  (0, r.jsx)(E.Text, {
                                                                                                      variant:
                                                                                                          "text-md/normal",
                                                                                                      children:
                                                                                                          S.intl.format(
                                                                                                              S.t
                                                                                                                  .xIVRoU,
                                                                                                              {
                                                                                                                  roles: f.join(
                                                                                                                      ", ",
                                                                                                                  ),
                                                                                                              },
                                                                                                          ),
                                                                                                  }),
                                                                                              T.length > 0 &&
                                                                                                  (0, r.jsx)(E.Text, {
                                                                                                      variant:
                                                                                                          "text-md/normal",
                                                                                                      children:
                                                                                                          S.intl.format(
                                                                                                              S.t
                                                                                                                  .iYowX4,
                                                                                                              {
                                                                                                                  channels:
                                                                                                                      T.join(
                                                                                                                          ", ",
                                                                                                                      ),
                                                                                                              },
                                                                                                          ),
                                                                                                  }),
                                                                                              g.length > 0 &&
                                                                                                  (0, r.jsx)(E.Text, {
                                                                                                      variant:
                                                                                                          "text-md/normal",
                                                                                                      children:
                                                                                                          S.intl.format(
                                                                                                              S.t
                                                                                                                  .JLdJpL,
                                                                                                              {
                                                                                                                  channels:
                                                                                                                      g.join(
                                                                                                                          ", ",
                                                                                                                      ),
                                                                                                              },
                                                                                                          ),
                                                                                                  }),
                                                                                              I.map((t, l) =>
                                                                                                  (0, r.jsx)(
                                                                                                      E.Text,
                                                                                                      {
                                                                                                          variant:
                                                                                                              "text-md/normal",
                                                                                                          children:
                                                                                                              S.intl.format(
                                                                                                                  S.t[
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
                                                                })(c[e], u[e]),
                                                            ),
                                                        ],
                                                    },
                                                    "options",
                                                );
                                            })(i, t, n);
                                        if (
                                            t.action === R.rsA.HOME_SETTINGS_CREATE ||
                                            t.action === R.rsA.HOME_SETTINGS_UPDATE
                                        )
                                            return (function (e, t) {
                                                let { oldValue: n, newValue: l, key: i } = e,
                                                    { targetType: a, action: s } = t;
                                                switch (i) {
                                                    case R.zUn.WELCOME_MESSAGE:
                                                        return ((e, t) => {
                                                            var n, l, i, a, s;
                                                            let o = I.default.getUser(
                                                                    null == t || null == (n = t.author_ids)
                                                                        ? void 0
                                                                        : n[0],
                                                                ),
                                                                c = I.default.getUser(
                                                                    null == (l = e.author_ids) ? void 0 : l[0],
                                                                ),
                                                                u =
                                                                    (null == o ? void 0 : o.id) !==
                                                                    (null == c ? void 0 : c.id)
                                                                        ? (0, r.jsx)("li", {
                                                                              children: (0, r.jsx)("div", {
                                                                                  className:
                                                                                      C.onboardingChangeLogItemTitle,
                                                                                  children: (0, r.jsx)(E.Text, {
                                                                                      variant: "text-md/normal",
                                                                                      children: S.intl.format(
                                                                                          S.t["PrOzA+"],
                                                                                          {
                                                                                              oldUser:
                                                                                                  null !=
                                                                                                  (i =
                                                                                                      null == o
                                                                                                          ? void 0
                                                                                                          : o.username)
                                                                                                      ? i
                                                                                                      : S.intl.string(
                                                                                                            S.t.PoWNfe,
                                                                                                        ),
                                                                                              newUser:
                                                                                                  null !=
                                                                                                  (a =
                                                                                                      null == c
                                                                                                          ? void 0
                                                                                                          : c.username)
                                                                                                      ? a
                                                                                                      : S.intl.string(
                                                                                                            S.t.PoWNfe,
                                                                                                        ),
                                                                                          },
                                                                                      ),
                                                                                  }),
                                                                              }),
                                                                          })
                                                                        : null,
                                                                d =
                                                                    (null == t ? void 0 : t.message) !== e.message
                                                                        ? (0, r.jsx)("li", {
                                                                              children: (0, r.jsx)("div", {
                                                                                  className:
                                                                                      C.onboardingChangeLogItemTitle,
                                                                                  children: (0, r.jsx)(E.Text, {
                                                                                      variant: "text-md/normal",
                                                                                      children: S.intl.format(
                                                                                          S.t.oB7rBb,
                                                                                          {
                                                                                              oldMessage:
                                                                                                  null !=
                                                                                                  (s =
                                                                                                      null == t
                                                                                                          ? void 0
                                                                                                          : t.message)
                                                                                                      ? s
                                                                                                      : S.intl.string(
                                                                                                            S.t.PoWNfe,
                                                                                                        ),
                                                                                              newMessage: e.message,
                                                                                          },
                                                                                      ),
                                                                                  }),
                                                                              }),
                                                                          })
                                                                        : null;
                                                            return (0, r.jsxs)("ul", {
                                                                children: [u, d],
                                                            });
                                                        })(l, n);
                                                    case R.zUn.NEW_MEMBER_ACTIONS:
                                                        return ((e, t) => {
                                                            let n = e.map((e) => e.channel_id),
                                                                l = t.map((e) => e.channel_id),
                                                                i = o().difference(l, n),
                                                                c = o().difference(n, l),
                                                                u = t.filter((e) => i.includes(e.channel_id)),
                                                                d = e.filter((e) => c.includes(e.channel_id));
                                                            return (0, r.jsxs)("ul", {
                                                                children: [
                                                                    u.map((e) =>
                                                                        (0, r.jsx)(
                                                                            "li",
                                                                            {
                                                                                children: (0, r.jsxs)("div", {
                                                                                    className:
                                                                                        C.onboardingChangeLogItemTitle,
                                                                                    children: [
                                                                                        (0, r.jsx)(M, {
                                                                                            actionType: R.vB8.CREATE,
                                                                                            targetType: a,
                                                                                            action: s,
                                                                                        }),
                                                                                        (0, r.jsx)(E.Text, {
                                                                                            variant: "text-md/normal",
                                                                                            children: S.intl.format(
                                                                                                S.t.oFSu66,
                                                                                                { name: e.title },
                                                                                            ),
                                                                                        }),
                                                                                    ],
                                                                                }),
                                                                            },
                                                                            e.channel_id,
                                                                        ),
                                                                    ),
                                                                    d.map((e) =>
                                                                        (0, r.jsx)(
                                                                            "li",
                                                                            {
                                                                                children: (0, r.jsxs)("div", {
                                                                                    className:
                                                                                        C.onboardingChangeLogItemTitle,
                                                                                    children: [
                                                                                        (0, r.jsx)(M, {
                                                                                            actionType: R.vB8.DELETE,
                                                                                            targetType: a,
                                                                                            action: s,
                                                                                        }),
                                                                                        (0, r.jsx)(E.Text, {
                                                                                            variant: "text-md/normal",
                                                                                            children: S.intl.format(
                                                                                                S.t.GssWar,
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
                                                    case R.zUn.RESOURCE_CHANNELS:
                                                        return ((e, t) => {
                                                            let n = e.map((e) => e.channel_id),
                                                                l = t.map((e) => e.channel_id),
                                                                i = o().difference(l, n),
                                                                c = o().difference(n, l),
                                                                u = t.filter((e) => i.includes(e.channel_id)),
                                                                d = e.filter((e) => c.includes(e.channel_id));
                                                            return (0, r.jsxs)("ul", {
                                                                children: [
                                                                    u.map((e) =>
                                                                        (0, r.jsx)(
                                                                            "li",
                                                                            {
                                                                                children: (0, r.jsxs)("div", {
                                                                                    className:
                                                                                        C.onboardingChangeLogItemTitle,
                                                                                    children: [
                                                                                        (0, r.jsx)(M, {
                                                                                            actionType: R.vB8.CREATE,
                                                                                            targetType: a,
                                                                                            action: s,
                                                                                        }),
                                                                                        (0, r.jsx)(E.Text, {
                                                                                            variant: "text-md/normal",
                                                                                            children: S.intl.format(
                                                                                                S.t.HlGndE,
                                                                                                { name: e.title },
                                                                                            ),
                                                                                        }),
                                                                                    ],
                                                                                }),
                                                                            },
                                                                            e.channel_id,
                                                                        ),
                                                                    ),
                                                                    d.map((e) =>
                                                                        (0, r.jsx)(
                                                                            "li",
                                                                            {
                                                                                children: (0, r.jsxs)("div", {
                                                                                    className:
                                                                                        C.onboardingChangeLogItemTitle,
                                                                                    children: [
                                                                                        (0, r.jsx)(M, {
                                                                                            actionType: R.vB8.DELETE,
                                                                                            targetType: a,
                                                                                            action: s,
                                                                                        }),
                                                                                        (0, r.jsx)(E.Text, {
                                                                                            variant: "text-md/normal",
                                                                                            children: S.intl.format(
                                                                                                S.t["7pysg6"],
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
                                    N = e[i.key];
                                return (function (e) {
                                    var t, n;
                                    let {
                                        changeItem: i,
                                        subChanges: a,
                                        changeNumber: s,
                                        log: o,
                                        oldValue: c,
                                        newValue: u,
                                        change: A,
                                    } = e;
                                    if (null == i) return console.warn("No change string for", A), null;
                                    let T = S.intl.format(i, {
                                        oldValue: c,
                                        newValue: u,
                                        count: Array.isArray(u) ? u.length : 0,
                                        subtarget:
                                            null != (n = null != (t = o.options.subtarget) ? t : A.subtarget) ? n : "",
                                        newColorHook: (e, t) => U(t, A.newValue),
                                        newColorsHook: (e, t) => {
                                            let { primary_color: n, secondary_color: i, tertiary_color: a } = u;
                                            return (0, r.jsx)(
                                                "span",
                                                {
                                                    children: [n, i, a].filter(h.lm).map((e, n) =>
                                                        (0, r.jsxs)(
                                                            l.Fragment,
                                                            {
                                                                children: [
                                                                    (0, r.jsx)("span", {
                                                                        className: C.colorsHook,
                                                                        children: ""
                                                                            .concat(n > 0 ? ", " : "")
                                                                            .concat((0, d.Rf)(e).toUpperCase(), " "),
                                                                    }),
                                                                    U(t, (0, d.Rf)(e)),
                                                                ],
                                                            },
                                                            n,
                                                        ),
                                                    ),
                                                },
                                                t,
                                            );
                                        },
                                        oldColorHook: (e, t) => U(t, A.oldValue),
                                        oldTagHook: (e, t) =>
                                            (0, r.jsx)(
                                                f.Z,
                                                {
                                                    tag: c,
                                                    size: f.Z.Sizes.SMALL,
                                                },
                                                t,
                                            ),
                                        newTagHook: (e, t) =>
                                            (0, r.jsx)(
                                                f.Z,
                                                {
                                                    tag: u,
                                                    size: f.Z.Sizes.SMALL,
                                                },
                                                t,
                                            ),
                                        oldEmojiHook: (e, t) => (0, r.jsx)(_.Z, { emojiId: c }, t),
                                        newEmojiHook: (e, t) => (0, r.jsx)(_.Z, { emojiId: u }, t),
                                        applicationHook: (e, t) => {
                                            var n;
                                            return (0, r.jsx)(
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
                                        : (0, r.jsxs)(
                                              "div",
                                              {
                                                  className: C.detail,
                                                  style: {
                                                      position: "relative",
                                                      top: 1,
                                                  },
                                                  children: [
                                                      (0, r.jsxs)(E.Text, {
                                                          className: C.prefix,
                                                          variant: "code",
                                                          color: (function (e) {
                                                              switch (e) {
                                                                  case R.vB8.CREATE:
                                                                      return "text-feedback-positive";
                                                                  case R.vB8.DELETE:
                                                                      return "text-feedback-critical";
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
                                                                  children: T,
                                                              }),
                                                              null != a ? (0, r.jsx)("div", { children: a }) : null,
                                                          ],
                                                      }),
                                                  ],
                                              },
                                              s,
                                          );
                                })({
                                    changeItem: "function" == typeof N ? N(i) : N,
                                    subChanges: A,
                                    changeNumber: ++c,
                                    log: t,
                                    oldValue: a,
                                    newValue: s,
                                    change: i,
                                });
                            }),
                        )
                        .filter(h.lm);
                return (0, r.jsx)(E.P3F, {
                    onClick: i,
                    className: a()(C.changeDetails, s),
                    children: A,
                });
            },
            [t, n, i, s],
        );
    return l.useMemo(() => {
        switch (t.targetType) {
            case R.KFR.GUILD:
                return c(p.pY());
            case R.KFR.CHANNEL:
            case R.KFR.CHANNEL_OVERWRITE:
                return c(p.ML());
            case R.KFR.USER:
                return c(p.lU());
            case R.KFR.ROLE:
                return c(p.HE());
            case R.KFR.ONBOARDING_PROMPT:
                return c(p.oD());
            case R.KFR.GUILD_ONBOARDING:
                return c(p.EN());
            case R.KFR.HOME_SETTINGS:
                return c(p.hx());
            case R.KFR.INVITE:
                return c(p.HN());
            case R.KFR.WEBHOOK:
                return c(p.lR());
            case R.KFR.EMOJI:
                return c(p.N$());
            case R.KFR.STICKER:
                return c(p.Bq());
            case R.KFR.INTEGRATION:
                return c(p.K());
            case R.KFR.STAGE_INSTANCE:
                return c(p.C2());
            case R.KFR.GUILD_SCHEDULED_EVENT:
                return c(p.uB());
            case R.KFR.GUILD_SCHEDULED_EVENT_EXCEPTION:
                return c(p.pi());
            case R.KFR.THREAD:
                return c(p.pA());
            case R.KFR.APPLICATION_COMMAND:
                return c(p.vm(t.changes));
            case R.KFR.AUTO_MODERATION_RULE:
                return c(p.rK());
            case R.KFR.GUILD_SOUNDBOARD:
                return c(p.C0());
            case R.KFR.VOICE_CHANNEL_STATUS:
                return c(p.F1());
            case R.KFR.GUILD_MEMBER_VERIFICATION:
                return c(p.JA());
            case R.KFR.GUILD_PROFILE:
                return c(p.zT());
        }
    }, [t.targetType, t.changes, c]);
}
