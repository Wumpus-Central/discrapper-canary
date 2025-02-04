n.d(t, {
    mp: () => p,
    tP: () => m,
    xO: () => L
}),
    n(653041);
var r = n(200651),
    l = n(192379),
    i = n(120356),
    a = n.n(i),
    s = n(392711),
    o = n.n(s),
    E = n(913527),
    u = n.n(E),
    c = n(481060),
    _ = n(596454),
    d = n(835473),
    A = n(479099),
    T = n(592125),
    I = n(430824),
    N = n(594174),
    g = n(934415),
    O = n(823379),
    S = n(624138),
    R = n(51144),
    f = n(909746),
    U = n(981631),
    D = n(388032),
    C = n(52330);
function L(e, t) {
    let n = f.vc[e.targetType];
    return null != n && !0 === n[t.key];
}
let h = {
    [U.vB8.CREATE]: C.typeCreate,
    [U.vB8.UPDATE]: C.typeUpdate,
    [U.vB8.DELETE]: C.typeDelete
};
function M(e) {
    let { applicationId: t } = e,
        n = (0, d.q)(t);
    return null == n
        ? null
        : (0, r.jsx)(c.Text, {
              variant: 'text-md/normal',
              children: n.name
          });
}
class p extends l.PureComponent {
    render() {
        let { actionType: e, targetType: t, action: n, themeOverride: l } = this.props,
            i = null != l ? C['themeOverride'.concat((0, S.De)(l))] : null,
            s = a()(
                C.icon,
                h[e],
                n === U.rsA.MESSAGE_DELETE
                    ? C.targetMessage
                    : n === U.rsA.AUTO_MODERATION_BLOCK_MESSAGE || n === U.rsA.AUTO_MODERATION_FLAG_TO_CHANNEL || n === U.rsA.AUTO_MODERATION_USER_COMMUNICATION_DISABLED || n === U.rsA.AUTO_MODERATION_QUARANTINE_USER
                      ? C.autoModerationBlockMessage
                      : {
                            [U.KFR.ALL]: C.targetAll,
                            [U.KFR.GUILD]: C.targetGuild,
                            [U.KFR.CHANNEL]: C.targetChannel,
                            [U.KFR.CHANNEL_OVERWRITE]: C.targetChannel,
                            [U.KFR.USER]: C.targetMember,
                            [U.KFR.ROLE]: C.targetRole,
                            [U.KFR.ONBOARDING_PROMPT]: C.targetOnboarding,
                            [U.KFR.GUILD_ONBOARDING]: C.targetOnboarding,
                            [U.KFR.HOME_SETTINGS]: C.targetOnboarding,
                            [U.KFR.INTEGRATION]: C.targetIntegration,
                            [U.KFR.INVITE]: C.targetInvite,
                            [U.KFR.WEBHOOK]: C.targetWebhook,
                            [U.KFR.EMOJI]: C.targetEmoji,
                            [U.KFR.STICKER]: C.targetSticker,
                            [U.KFR.STAGE_INSTANCE]: C.targetStageInstance,
                            [U.KFR.GUILD_SCHEDULED_EVENT]: C.targetGuildScheduledEvent,
                            [U.KFR.GUILD_SCHEDULED_EVENT_EXCEPTION]: C.targetGuildScheduledEvent,
                            [U.KFR.THREAD]: C.thread,
                            [U.KFR.APPLICATION_COMMAND]: C.applicationCommand,
                            [U.KFR.AUTO_MODERATION_RULE]: C.autoModerationRule,
                            [U.KFR.GUILD_HOME]: C.targetGuildHome,
                            [U.KFR.GUILD_SOUNDBOARD]: C.targetGuildSoundboard,
                            [U.KFR.VOICE_CHANNEL_STATUS]: C.targetChannel
                        }[t],
                i
            );
        return (0, r.jsx)('div', { className: s });
    }
}
function m(e) {
    let { log: t, guild: n, onContentClick: i, className: s } = e,
        E = l.useCallback(
            (e) => {
                if (null == t.changes) return null;
                let l = 0,
                    E = o()
                        .flatten(
                            t.changes.map((i) => {
                                if (L(t, i)) return null;
                                let { oldValue: a, newValue: s } = (() => {
                                        if ((t.action === U.rsA.CHANNEL_UPDATE || t.action === U.rsA.CHANNEL_CREATE) && i.key === U.zUn.TYPE) {
                                            var e, n;
                                            return {
                                                oldValue: null !== (e = i.oldValue) && void 0 !== e ? e : (0, g.a5)({ type: i.oldValue }),
                                                newValue: null !== (n = i.newValue) && void 0 !== n ? n : (0, g.a5)({ type: i.newValue })
                                            };
                                        }
                                        if (t.action === U.rsA.MEMBER_UPDATE && i.key === U.zUn.COMMUNICATION_DISABLED_UNTIL) {
                                            let e = u()(i.newValue);
                                            return {
                                                oldValue: i.oldValue,
                                                newValue: e.isValid() ? e.calendar() : i.newValue
                                            };
                                        }
                                        return t.action === U.rsA.GUILD_UPDATE && i.key === U.zUn.OWNER_ID
                                            ? {
                                                  oldValue: R.ZP.getUserTag(i.oldValue, { mode: 'username' }),
                                                  newValue: R.ZP.getUserTag(i.newValue, { mode: 'username' })
                                              }
                                            : i;
                                    })(),
                                    E = (() => {
                                        if (t.action === U.rsA.MEMBER_ROLE_UPDATE)
                                            return (function (e) {
                                                let { newValue: t } = e;
                                                return Array.isArray(t)
                                                    ? t.map((e) =>
                                                          (0, r.jsx)(
                                                              'div',
                                                              {
                                                                  className: C.subListItem,
                                                                  children: e.name
                                                              },
                                                              e.id
                                                          )
                                                      )
                                                    : null;
                                            })(i);
                                        if (t.targetType === U.KFR.ROLE || t.action === U.rsA.CHANNEL_OVERWRITE_CREATE || t.action === U.rsA.CHANNEL_OVERWRITE_UPDATE)
                                            return (function (e, t) {
                                                let { newValue: n } = e;
                                                return Array.isArray(n)
                                                    ? n.map((e, n) =>
                                                          (0, r.jsx)(
                                                              'div',
                                                              {
                                                                  className: C.subListItem,
                                                                  children: f.hQ(e, t)
                                                              },
                                                              n
                                                          )
                                                      )
                                                    : null;
                                            })(i, t);
                                        if ((t.action === U.rsA.CHANNEL_UPDATE || t.action === U.rsA.THREAD_UPDATE) && i.key === U.zUn.FLAGS)
                                            return (function (e) {
                                                let { newValue: t, oldValue: n } = e,
                                                    l = [];
                                                return (Array.isArray(n) &&
                                                    (l = l.concat(
                                                        n.map((e) =>
                                                            (0, r.jsx)(
                                                                'div',
                                                                {
                                                                    className: C.subListItem,
                                                                    children: f.cT(e)
                                                                },
                                                                e
                                                            )
                                                        )
                                                    )),
                                                Array.isArray(t) &&
                                                    (l = l.concat(
                                                        t.map((e) =>
                                                            (0, r.jsx)(
                                                                'div',
                                                                {
                                                                    className: C.subListItem,
                                                                    children: f.em(e)
                                                                },
                                                                e
                                                            )
                                                        )
                                                    )),
                                                l.length > 0)
                                                    ? l
                                                    : null;
                                            })(i);
                                        if ((t.action === U.rsA.ONBOARDING_PROMPT_UPDATE || t.action === U.rsA.ONBOARDING_PROMPT_CREATE) && i.key === U.zUn.OPTIONS)
                                            return (function (e, t, n) {
                                                let { newValue: l, oldValue: i } = e,
                                                    a = (e) => {
                                                        var t;
                                                        let r = null != n ? (null === (t = I.Z.getRole(n.id, e)) || void 0 === t ? void 0 : t.name) : void 0;
                                                        return null == r ? null : '@'.concat(r);
                                                    },
                                                    s = (e) => {
                                                        var t;
                                                        let n = null === (t = T.Z.getChannel(e)) || void 0 === t ? void 0 : t.name;
                                                        return null == n ? null : '#'.concat(n);
                                                    },
                                                    E = (e, n) => {
                                                        let { title: l, id: i } = n,
                                                            E = e.role_ids.map(a).filter(O.lm),
                                                            u = e.channel_ids.map(s).filter(O.lm),
                                                            _ = n.role_ids.map(a).filter(O.lm),
                                                            d = n.channel_ids.map(s).filter(O.lm),
                                                            A = o().difference(_, E),
                                                            T = o().difference(E, _),
                                                            I = o().difference(d, u),
                                                            N = o().difference(u, d),
                                                            g = [];
                                                        return (o().isEqual(e.title, n.title) || g.push('title'), o().isEqual(e.description, n.description) || g.push('description'), 0 === A.length && 0 === T.length && 0 === I.length && 0 === N.length && 0 === g.length)
                                                            ? null
                                                            : (0, r.jsxs)(
                                                                  'li',
                                                                  {
                                                                      children: [
                                                                          (0, r.jsxs)('div', {
                                                                              className: C.onboardingChangeLogItemTitle,
                                                                              children: [
                                                                                  (0, r.jsx)(p, {
                                                                                      actionType: U.vB8.UPDATE,
                                                                                      targetType: t.targetType,
                                                                                      action: t.action
                                                                                  }),
                                                                                  (0, r.jsx)(c.Text, {
                                                                                      variant: 'text-md/normal',
                                                                                      children: D.intl.format(D.t['WZO+iY'], { title: l })
                                                                                  })
                                                                              ]
                                                                          }),
                                                                          (0, r.jsxs)('div', {
                                                                              className: C.onboardingChangeLogItemChanges,
                                                                              children: [
                                                                                  A.length > 0 &&
                                                                                      (0, r.jsx)(c.Text, {
                                                                                          variant: 'text-md/normal',
                                                                                          children: D.intl.format(D.t['R+km+f'], { roles: A.join(', ') })
                                                                                      }),
                                                                                  T.length > 0 &&
                                                                                      (0, r.jsx)(c.Text, {
                                                                                          variant: 'text-md/normal',
                                                                                          children: D.intl.format(D.t.xIVRoa, { roles: T.join(', ') })
                                                                                      }),
                                                                                  I.length > 0 &&
                                                                                      (0, r.jsx)(c.Text, {
                                                                                          variant: 'text-md/normal',
                                                                                          children: D.intl.format(D.t.iYowX1, { channels: I.join(', ') })
                                                                                      }),
                                                                                  N.length > 0 &&
                                                                                      (0, r.jsx)(c.Text, {
                                                                                          variant: 'text-md/normal',
                                                                                          children: D.intl.format(D.t.JLdJpK, { channels: N.join(', ') })
                                                                                      }),
                                                                                  g.map((t, l) =>
                                                                                      (0, r.jsx)(
                                                                                          c.Text,
                                                                                          {
                                                                                              variant: 'text-md/normal',
                                                                                              children: D.intl.format(D.t['0698zc'], {
                                                                                                  key: t,
                                                                                                  oldValue: e[t],
                                                                                                  newValue: n[t]
                                                                                              })
                                                                                          },
                                                                                          l
                                                                                      )
                                                                                  )
                                                                              ]
                                                                          })
                                                                      ]
                                                                  },
                                                                  i
                                                              );
                                                    },
                                                    u = o().keyBy(null != i ? i : [], 'id'),
                                                    _ = o().keyBy(null != l ? l : [], 'id'),
                                                    d = o()
                                                        .difference(Object.keys(_), Object.keys(u))
                                                        .map((e) => _[e]),
                                                    A = o()
                                                        .difference(Object.keys(u), Object.keys(_))
                                                        .map((e) => u[e]),
                                                    N = o().intersection(Object.keys(_), Object.keys(u));
                                                return (0, r.jsxs)(
                                                    'ul',
                                                    {
                                                        className: C.onboardingChangeLogContainer,
                                                        children: [
                                                            d.map((e) => {
                                                                let { role_ids: n, channel_ids: l, title: i, id: o } = e,
                                                                    E = (null != n ? n : []).map(a).filter(O.lm),
                                                                    u = (null != l ? l : []).map(s).filter(O.lm);
                                                                return (0, r.jsxs)(
                                                                    'li',
                                                                    {
                                                                        children: [
                                                                            (0, r.jsxs)('div', {
                                                                                className: C.onboardingChangeLogItemTitle,
                                                                                children: [
                                                                                    (0, r.jsx)(p, {
                                                                                        actionType: U.vB8.CREATE,
                                                                                        targetType: t.targetType,
                                                                                        action: t.action
                                                                                    }),
                                                                                    (0, r.jsx)(c.Text, {
                                                                                        variant: 'text-md/normal',
                                                                                        children: D.intl.format(D.t.CZ1tys, { title: i })
                                                                                    })
                                                                                ]
                                                                            }),
                                                                            (0, r.jsxs)('div', {
                                                                                className: C.onboardingChangeLogItemChanges,
                                                                                children: [
                                                                                    E.length > 0 &&
                                                                                        (0, r.jsx)(c.Text, {
                                                                                            variant: 'text-md/normal',
                                                                                            children: D.intl.format(D.t['gt/5z8'], { roles: E.join(', ') })
                                                                                        }),
                                                                                    u.length > 0 &&
                                                                                        (0, r.jsx)(c.Text, {
                                                                                            variant: 'text-md/normal',
                                                                                            children: D.intl.format(D.t['4q006e'], { channels: u.join(', ') })
                                                                                        })
                                                                                ]
                                                                            })
                                                                        ]
                                                                    },
                                                                    o
                                                                );
                                                            }),
                                                            A.map((e) =>
                                                                (0, r.jsx)(
                                                                    'li',
                                                                    {
                                                                        children: (0, r.jsxs)('div', {
                                                                            className: C.onboardingChangeLogItemTitle,
                                                                            children: [
                                                                                (0, r.jsx)(p, {
                                                                                    actionType: U.vB8.DELETE,
                                                                                    targetType: t.targetType,
                                                                                    action: t.action
                                                                                }),
                                                                                (0, r.jsx)(c.Text, {
                                                                                    variant: 'text-md/normal',
                                                                                    children: D.intl.format(D.t['m3dt+P'], { title: e.title })
                                                                                })
                                                                            ]
                                                                        })
                                                                    },
                                                                    e.id
                                                                )
                                                            ),
                                                            N.map((e) => E(u[e], _[e]))
                                                        ]
                                                    },
                                                    'options'
                                                );
                                            })(i, t, n);
                                        if (t.action === U.rsA.HOME_SETTINGS_CREATE || t.action === U.rsA.HOME_SETTINGS_UPDATE)
                                            return (function (e, t) {
                                                let { oldValue: n, newValue: l, key: i } = e,
                                                    { targetType: a, action: s } = t;
                                                switch (i) {
                                                    case U.zUn.WELCOME_MESSAGE:
                                                        return ((e, t) => {
                                                            var n, l, i, a, s;
                                                            let o = N.default.getUser(null == t ? void 0 : null === (n = t.author_ids) || void 0 === n ? void 0 : n[0]),
                                                                E = N.default.getUser(null === (l = e.author_ids) || void 0 === l ? void 0 : l[0]),
                                                                u =
                                                                    (null == o ? void 0 : o.id) !== (null == E ? void 0 : E.id)
                                                                        ? (0, r.jsx)('li', {
                                                                              children: (0, r.jsx)('div', {
                                                                                  className: C.onboardingChangeLogItemTitle,
                                                                                  children: (0, r.jsx)(c.Text, {
                                                                                      variant: 'text-md/normal',
                                                                                      children: D.intl.format(D.t.PrOzAw, {
                                                                                          oldUser: null !== (i = null == o ? void 0 : o.username) && void 0 !== i ? i : D.intl.string(D.t.PoWNfX),
                                                                                          newUser: null !== (a = null == E ? void 0 : E.username) && void 0 !== a ? a : D.intl.string(D.t.PoWNfX)
                                                                                      })
                                                                                  })
                                                                              })
                                                                          })
                                                                        : null,
                                                                _ =
                                                                    (null == t ? void 0 : t.message) !== e.message
                                                                        ? (0, r.jsx)('li', {
                                                                              children: (0, r.jsx)('div', {
                                                                                  className: C.onboardingChangeLogItemTitle,
                                                                                  children: (0, r.jsx)(c.Text, {
                                                                                      variant: 'text-md/normal',
                                                                                      children: D.intl.format(D.t.oB7rBQ, {
                                                                                          oldMessage: null !== (s = null == t ? void 0 : t.message) && void 0 !== s ? s : D.intl.string(D.t.PoWNfX),
                                                                                          newMessage: e.message
                                                                                      })
                                                                                  })
                                                                              })
                                                                          })
                                                                        : null;
                                                            return (0, r.jsxs)('ul', {
                                                                children: [u, _]
                                                            });
                                                        })(l, n);
                                                    case U.zUn.NEW_MEMBER_ACTIONS:
                                                        return ((e, t) => {
                                                            let n = e.map((e) => e.channel_id),
                                                                l = t.map((e) => e.channel_id),
                                                                i = o().difference(l, n),
                                                                E = o().difference(n, l),
                                                                u = t.filter((e) => i.includes(e.channel_id)),
                                                                _ = e.filter((e) => E.includes(e.channel_id));
                                                            return (0, r.jsxs)('ul', {
                                                                children: [
                                                                    u.map((e) =>
                                                                        (0, r.jsx)(
                                                                            'li',
                                                                            {
                                                                                children: (0, r.jsxs)('div', {
                                                                                    className: C.onboardingChangeLogItemTitle,
                                                                                    children: [
                                                                                        (0, r.jsx)(p, {
                                                                                            actionType: U.vB8.CREATE,
                                                                                            targetType: a,
                                                                                            action: s
                                                                                        }),
                                                                                        (0, r.jsx)(c.Text, {
                                                                                            variant: 'text-md/normal',
                                                                                            children: D.intl.format(D.t['oFSu6+'], { name: e.title })
                                                                                        })
                                                                                    ]
                                                                                })
                                                                            },
                                                                            e.channel_id
                                                                        )
                                                                    ),
                                                                    _.map((e) =>
                                                                        (0, r.jsx)(
                                                                            'li',
                                                                            {
                                                                                children: (0, r.jsxs)('div', {
                                                                                    className: C.onboardingChangeLogItemTitle,
                                                                                    children: [
                                                                                        (0, r.jsx)(p, {
                                                                                            actionType: U.vB8.DELETE,
                                                                                            targetType: a,
                                                                                            action: s
                                                                                        }),
                                                                                        (0, r.jsx)(c.Text, {
                                                                                            variant: 'text-md/normal',
                                                                                            children: D.intl.format(D.t.GssWam, { name: e.title })
                                                                                        })
                                                                                    ]
                                                                                })
                                                                            },
                                                                            e.channel_id
                                                                        )
                                                                    )
                                                                ]
                                                            });
                                                        })(null != n ? n : [], l);
                                                    case U.zUn.RESOURCE_CHANNELS:
                                                        return ((e, t) => {
                                                            let n = e.map((e) => e.channel_id),
                                                                l = t.map((e) => e.channel_id),
                                                                i = o().difference(l, n),
                                                                E = o().difference(n, l),
                                                                u = t.filter((e) => i.includes(e.channel_id)),
                                                                _ = e.filter((e) => E.includes(e.channel_id));
                                                            return (0, r.jsxs)('ul', {
                                                                children: [
                                                                    u.map((e) =>
                                                                        (0, r.jsx)(
                                                                            'li',
                                                                            {
                                                                                children: (0, r.jsxs)('div', {
                                                                                    className: C.onboardingChangeLogItemTitle,
                                                                                    children: [
                                                                                        (0, r.jsx)(p, {
                                                                                            actionType: U.vB8.CREATE,
                                                                                            targetType: a,
                                                                                            action: s
                                                                                        }),
                                                                                        (0, r.jsx)(c.Text, {
                                                                                            variant: 'text-md/normal',
                                                                                            children: D.intl.format(D.t.HlGndH, { name: e.title })
                                                                                        })
                                                                                    ]
                                                                                })
                                                                            },
                                                                            e.channel_id
                                                                        )
                                                                    ),
                                                                    _.map((e) =>
                                                                        (0, r.jsx)(
                                                                            'li',
                                                                            {
                                                                                children: (0, r.jsxs)('div', {
                                                                                    className: C.onboardingChangeLogItemTitle,
                                                                                    children: [
                                                                                        (0, r.jsx)(p, {
                                                                                            actionType: U.vB8.DELETE,
                                                                                            targetType: a,
                                                                                            action: s
                                                                                        }),
                                                                                        (0, r.jsx)(c.Text, {
                                                                                            variant: 'text-md/normal',
                                                                                            children: D.intl.format(D.t['7pysg4'], { name: e.title })
                                                                                        })
                                                                                    ]
                                                                                })
                                                                            },
                                                                            e.channel_id
                                                                        )
                                                                    )
                                                                ]
                                                            });
                                                        })(null != n ? n : [], l);
                                                    default:
                                                        return null;
                                                }
                                            })(i, t);
                                        return null;
                                    })(),
                                    d = e[i.key];
                                return (function (e) {
                                    var t, n;
                                    let { changeItem: l, subChanges: i, changeNumber: a, log: s, oldValue: o, newValue: E, change: u } = e;
                                    if (null == l) return console.warn('No change string for', u), null;
                                    let d = D.intl.format(l, {
                                        oldValue: o,
                                        newValue: E,
                                        count: Array.isArray(E) ? E.length : null,
                                        subtarget: null !== (n = null !== (t = s.options.subtarget) && void 0 !== t ? t : u.subtarget) && void 0 !== n ? n : null,
                                        newColorHook: (e, t) =>
                                            (0, r.jsx)(
                                                'div',
                                                {
                                                    className: C.colorHook,
                                                    style: { backgroundColor: u.newValue }
                                                },
                                                t
                                            ),
                                        oldColorHook: (e, t) =>
                                            (0, r.jsx)(
                                                'div',
                                                {
                                                    className: C.colorHook,
                                                    style: { backgroundColor: u.oldValue }
                                                },
                                                t
                                            ),
                                        oldTagHook: (e, t) =>
                                            (0, r.jsx)(
                                                A.Z,
                                                {
                                                    tag: o,
                                                    size: A.Z.Sizes.SMALL
                                                },
                                                t
                                            ),
                                        newTagHook: (e, t) =>
                                            (0, r.jsx)(
                                                A.Z,
                                                {
                                                    tag: E,
                                                    size: A.Z.Sizes.SMALL
                                                },
                                                t
                                            ),
                                        oldEmojiHook: (e, t) => (0, r.jsx)(_.Z, { emojiId: o }, t),
                                        newEmojiHook: (e, t) => (0, r.jsx)(_.Z, { emojiId: E }, t),
                                        applicationHook: (e, t) => {
                                            var n;
                                            return (0, r.jsx)(M, { applicationId: null !== (n = null == o ? void 0 : o.application_id) && void 0 !== n ? n : null == E ? void 0 : E.application_id }, t);
                                        }
                                    });
                                    return null == d
                                        ? null
                                        : (0, r.jsxs)(
                                              'div',
                                              {
                                                  className: C.detail,
                                                  style: {
                                                      position: 'relative',
                                                      top: 1
                                                  },
                                                  children: [
                                                      (0, r.jsxs)(c.Text, {
                                                          className: C.prefix,
                                                          variant: 'code',
                                                          color: (function (e) {
                                                              switch (e) {
                                                                  case U.vB8.CREATE:
                                                                      return 'text-positive';
                                                                  case U.vB8.DELETE:
                                                                      return 'status-danger';
                                                                  default:
                                                                      return 'text-warning';
                                                              }
                                                          })(s.actionType),
                                                          children: [
                                                              a < 10 ? '0'.concat(a) : a,
                                                              (0, r.jsx)('span', {
                                                                  className: C.dash,
                                                                  children: '\u2014'
                                                              })
                                                          ]
                                                      }),
                                                      (0, r.jsxs)('div', {
                                                          className: C.change,
                                                          children: [
                                                              (0, r.jsx)('div', {
                                                                  className: C.changeStr,
                                                                  children: d
                                                              }),
                                                              null != i ? (0, r.jsx)('div', { children: i }) : null
                                                          ]
                                                      })
                                                  ]
                                              },
                                              a
                                          );
                                })({
                                    changeItem: 'function' == typeof d ? d(i) : d,
                                    subChanges: E,
                                    changeNumber: ++l,
                                    log: t,
                                    oldValue: a,
                                    newValue: s,
                                    change: i
                                });
                            })
                        )
                        .filter(O.lm);
                return (0, r.jsx)(c.P3F, {
                    onClick: i,
                    className: a()(C.changeDetails, s),
                    children: E
                });
            },
            [t, n, i, s]
        ),
        d = l.useMemo(() => {
            switch (t.targetType) {
                case U.KFR.GUILD:
                    return E(f.pY());
                case U.KFR.CHANNEL:
                case U.KFR.CHANNEL_OVERWRITE:
                    return E(f.ML());
                case U.KFR.USER:
                    return E(f.lU());
                case U.KFR.ROLE:
                    return E(f.HE());
                case U.KFR.ONBOARDING_PROMPT:
                    return E(f.oD());
                case U.KFR.GUILD_ONBOARDING:
                    return E(f.EN());
                case U.KFR.HOME_SETTINGS:
                    return E(f.hx());
                case U.KFR.INVITE:
                    return E(f.HN());
                case U.KFR.WEBHOOK:
                    return E(f.lR());
                case U.KFR.EMOJI:
                    return E(f.N$());
                case U.KFR.STICKER:
                    return E(f.Bq());
                case U.KFR.INTEGRATION:
                    return E(f.K());
                case U.KFR.STAGE_INSTANCE:
                    return E(f.C2());
                case U.KFR.GUILD_SCHEDULED_EVENT:
                    return E(f.uB());
                case U.KFR.GUILD_SCHEDULED_EVENT_EXCEPTION:
                    return E(f.pi());
                case U.KFR.THREAD:
                    return E(f.pA());
                case U.KFR.APPLICATION_COMMAND:
                    return E(f.vm(t.changes));
                case U.KFR.AUTO_MODERATION_RULE:
                    return E(f.rK());
                case U.KFR.GUILD_SOUNDBOARD:
                    return E(f.C0());
                case U.KFR.VOICE_CHANNEL_STATUS:
                    return E(f.F1());
            }
        }, [t.targetType, t.changes, E]);
    return (0, r.jsx)(r.Fragment, { children: d });
}
