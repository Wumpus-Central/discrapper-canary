n.d(t, {
    mp: () => p,
    tP: () => m,
    xO: () => C
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
    R = n(624138),
    S = n(51144),
    U = n(909746),
    f = n(981631),
    D = n(388032),
    L = n(903426);
function C(e, t) {
    let n = U.vc[e.targetType];
    return null != n && !0 === n[t.key];
}
let M = {
    [f.vB8.CREATE]: L.typeCreate,
    [f.vB8.UPDATE]: L.typeUpdate,
    [f.vB8.DELETE]: L.typeDelete
};
function h(e) {
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
            i = null != l ? L['themeOverride'.concat((0, R.De)(l))] : null,
            s = a()(
                L.icon,
                M[e],
                n === f.rsA.MESSAGE_DELETE
                    ? L.targetMessage
                    : n === f.rsA.AUTO_MODERATION_BLOCK_MESSAGE || n === f.rsA.AUTO_MODERATION_FLAG_TO_CHANNEL || n === f.rsA.AUTO_MODERATION_USER_COMMUNICATION_DISABLED || n === f.rsA.AUTO_MODERATION_QUARANTINE_USER
                      ? L.autoModerationBlockMessage
                      : {
                            [f.KFR.ALL]: L.targetAll,
                            [f.KFR.GUILD]: L.targetGuild,
                            [f.KFR.CHANNEL]: L.targetChannel,
                            [f.KFR.CHANNEL_OVERWRITE]: L.targetChannel,
                            [f.KFR.USER]: L.targetMember,
                            [f.KFR.ROLE]: L.targetRole,
                            [f.KFR.ONBOARDING_PROMPT]: L.targetOnboarding,
                            [f.KFR.GUILD_ONBOARDING]: L.targetOnboarding,
                            [f.KFR.HOME_SETTINGS]: L.targetOnboarding,
                            [f.KFR.INTEGRATION]: L.targetIntegration,
                            [f.KFR.INVITE]: L.targetInvite,
                            [f.KFR.WEBHOOK]: L.targetWebhook,
                            [f.KFR.EMOJI]: L.targetEmoji,
                            [f.KFR.STICKER]: L.targetSticker,
                            [f.KFR.STAGE_INSTANCE]: L.targetStageInstance,
                            [f.KFR.GUILD_SCHEDULED_EVENT]: L.targetGuildScheduledEvent,
                            [f.KFR.GUILD_SCHEDULED_EVENT_EXCEPTION]: L.targetGuildScheduledEvent,
                            [f.KFR.THREAD]: L.thread,
                            [f.KFR.APPLICATION_COMMAND]: L.applicationCommand,
                            [f.KFR.AUTO_MODERATION_RULE]: L.autoModerationRule,
                            [f.KFR.GUILD_HOME]: L.targetGuildHome,
                            [f.KFR.GUILD_SOUNDBOARD]: L.targetGuildSoundboard,
                            [f.KFR.VOICE_CHANNEL_STATUS]: L.targetChannel,
                            [f.KFR.GUILD_MEMBER_VERIFICATION]: L.targetMember
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
                                if (C(t, i)) return null;
                                let { oldValue: a, newValue: s } = (() => {
                                        if ((t.action === f.rsA.CHANNEL_UPDATE || t.action === f.rsA.CHANNEL_CREATE) && i.key === f.zUn.TYPE) {
                                            var e, n;
                                            return {
                                                oldValue: null !== (e = i.oldValue) && void 0 !== e ? e : (0, g.a5)({ type: i.oldValue }),
                                                newValue: null !== (n = i.newValue) && void 0 !== n ? n : (0, g.a5)({ type: i.newValue })
                                            };
                                        }
                                        if (t.action === f.rsA.MEMBER_UPDATE && i.key === f.zUn.COMMUNICATION_DISABLED_UNTIL) {
                                            let e = u()(i.newValue);
                                            return {
                                                oldValue: i.oldValue,
                                                newValue: e.isValid() ? e.calendar() : i.newValue
                                            };
                                        }
                                        return t.action === f.rsA.GUILD_UPDATE && i.key === f.zUn.OWNER_ID
                                            ? {
                                                  oldValue: S.ZP.getUserTag(i.oldValue, { mode: 'username' }),
                                                  newValue: S.ZP.getUserTag(i.newValue, { mode: 'username' })
                                              }
                                            : i;
                                    })(),
                                    E = (() => {
                                        if (t.action === f.rsA.MEMBER_ROLE_UPDATE)
                                            return (function (e) {
                                                let { newValue: t } = e;
                                                return Array.isArray(t)
                                                    ? t.map((e) =>
                                                          (0, r.jsx)(
                                                              'div',
                                                              {
                                                                  className: L.subListItem,
                                                                  children: e.name
                                                              },
                                                              e.id
                                                          )
                                                      )
                                                    : null;
                                            })(i);
                                        if (t.targetType === f.KFR.ROLE || t.action === f.rsA.CHANNEL_OVERWRITE_CREATE || t.action === f.rsA.CHANNEL_OVERWRITE_UPDATE)
                                            return (function (e, t) {
                                                let { newValue: n } = e;
                                                return Array.isArray(n)
                                                    ? n.map((e, n) =>
                                                          (0, r.jsx)(
                                                              'div',
                                                              {
                                                                  className: L.subListItem,
                                                                  children: U.hQ(e, t)
                                                              },
                                                              n
                                                          )
                                                      )
                                                    : null;
                                            })(i, t);
                                        if ((t.action === f.rsA.CHANNEL_UPDATE || t.action === f.rsA.THREAD_UPDATE) && i.key === f.zUn.FLAGS)
                                            return (function (e) {
                                                let { newValue: t, oldValue: n } = e,
                                                    l = [];
                                                return (Array.isArray(n) &&
                                                    (l = l.concat(
                                                        n.map((e) =>
                                                            (0, r.jsx)(
                                                                'div',
                                                                {
                                                                    className: L.subListItem,
                                                                    children: U.cT(e)
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
                                                                    className: L.subListItem,
                                                                    children: U.em(e)
                                                                },
                                                                e
                                                            )
                                                        )
                                                    )),
                                                l.length > 0)
                                                    ? l
                                                    : null;
                                            })(i);
                                        if ((t.action === f.rsA.ONBOARDING_PROMPT_UPDATE || t.action === f.rsA.ONBOARDING_PROMPT_CREATE) && i.key === f.zUn.OPTIONS)
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
                                                                              className: L.onboardingChangeLogItemTitle,
                                                                              children: [
                                                                                  (0, r.jsx)(p, {
                                                                                      actionType: f.vB8.UPDATE,
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
                                                                              className: L.onboardingChangeLogItemChanges,
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
                                                        className: L.onboardingChangeLogContainer,
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
                                                                                className: L.onboardingChangeLogItemTitle,
                                                                                children: [
                                                                                    (0, r.jsx)(p, {
                                                                                        actionType: f.vB8.CREATE,
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
                                                                                className: L.onboardingChangeLogItemChanges,
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
                                                                            className: L.onboardingChangeLogItemTitle,
                                                                            children: [
                                                                                (0, r.jsx)(p, {
                                                                                    actionType: f.vB8.DELETE,
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
                                        if (t.action === f.rsA.HOME_SETTINGS_CREATE || t.action === f.rsA.HOME_SETTINGS_UPDATE)
                                            return (function (e, t) {
                                                let { oldValue: n, newValue: l, key: i } = e,
                                                    { targetType: a, action: s } = t;
                                                switch (i) {
                                                    case f.zUn.WELCOME_MESSAGE:
                                                        return ((e, t) => {
                                                            var n, l, i, a, s;
                                                            let o = N.default.getUser(null == t ? void 0 : null === (n = t.author_ids) || void 0 === n ? void 0 : n[0]),
                                                                E = N.default.getUser(null === (l = e.author_ids) || void 0 === l ? void 0 : l[0]),
                                                                u =
                                                                    (null == o ? void 0 : o.id) !== (null == E ? void 0 : E.id)
                                                                        ? (0, r.jsx)('li', {
                                                                              children: (0, r.jsx)('div', {
                                                                                  className: L.onboardingChangeLogItemTitle,
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
                                                                                  className: L.onboardingChangeLogItemTitle,
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
                                                    case f.zUn.NEW_MEMBER_ACTIONS:
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
                                                                                    className: L.onboardingChangeLogItemTitle,
                                                                                    children: [
                                                                                        (0, r.jsx)(p, {
                                                                                            actionType: f.vB8.CREATE,
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
                                                                                    className: L.onboardingChangeLogItemTitle,
                                                                                    children: [
                                                                                        (0, r.jsx)(p, {
                                                                                            actionType: f.vB8.DELETE,
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
                                                    case f.zUn.RESOURCE_CHANNELS:
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
                                                                                    className: L.onboardingChangeLogItemTitle,
                                                                                    children: [
                                                                                        (0, r.jsx)(p, {
                                                                                            actionType: f.vB8.CREATE,
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
                                                                                    className: L.onboardingChangeLogItemTitle,
                                                                                    children: [
                                                                                        (0, r.jsx)(p, {
                                                                                            actionType: f.vB8.DELETE,
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
                                                    className: L.colorHook,
                                                    style: { backgroundColor: u.newValue }
                                                },
                                                t
                                            ),
                                        oldColorHook: (e, t) =>
                                            (0, r.jsx)(
                                                'div',
                                                {
                                                    className: L.colorHook,
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
                                            return (0, r.jsx)(h, { applicationId: null !== (n = null == o ? void 0 : o.application_id) && void 0 !== n ? n : null == E ? void 0 : E.application_id }, t);
                                        }
                                    });
                                    return null == d
                                        ? null
                                        : (0, r.jsxs)(
                                              'div',
                                              {
                                                  className: L.detail,
                                                  style: {
                                                      position: 'relative',
                                                      top: 1
                                                  },
                                                  children: [
                                                      (0, r.jsxs)(c.Text, {
                                                          className: L.prefix,
                                                          variant: 'code',
                                                          color: (function (e) {
                                                              switch (e) {
                                                                  case f.vB8.CREATE:
                                                                      return 'text-positive';
                                                                  case f.vB8.DELETE:
                                                                      return 'status-danger';
                                                                  default:
                                                                      return 'text-warning';
                                                              }
                                                          })(s.actionType),
                                                          children: [
                                                              a < 10 ? '0'.concat(a) : a,
                                                              (0, r.jsx)('span', {
                                                                  className: L.dash,
                                                                  children: '\u2014'
                                                              })
                                                          ]
                                                      }),
                                                      (0, r.jsxs)('div', {
                                                          className: L.change,
                                                          children: [
                                                              (0, r.jsx)('div', {
                                                                  className: L.changeStr,
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
                    className: a()(L.changeDetails, s),
                    children: E
                });
            },
            [t, n, i, s]
        ),
        d = l.useMemo(() => {
            switch (t.targetType) {
                case f.KFR.GUILD:
                    return E(U.pY());
                case f.KFR.CHANNEL:
                case f.KFR.CHANNEL_OVERWRITE:
                    return E(U.ML());
                case f.KFR.USER:
                    return E(U.lU());
                case f.KFR.ROLE:
                    return E(U.HE());
                case f.KFR.ONBOARDING_PROMPT:
                    return E(U.oD());
                case f.KFR.GUILD_ONBOARDING:
                    return E(U.EN());
                case f.KFR.HOME_SETTINGS:
                    return E(U.hx());
                case f.KFR.INVITE:
                    return E(U.HN());
                case f.KFR.WEBHOOK:
                    return E(U.lR());
                case f.KFR.EMOJI:
                    return E(U.N$());
                case f.KFR.STICKER:
                    return E(U.Bq());
                case f.KFR.INTEGRATION:
                    return E(U.K());
                case f.KFR.STAGE_INSTANCE:
                    return E(U.C2());
                case f.KFR.GUILD_SCHEDULED_EVENT:
                    return E(U.uB());
                case f.KFR.GUILD_SCHEDULED_EVENT_EXCEPTION:
                    return E(U.pi());
                case f.KFR.THREAD:
                    return E(U.pA());
                case f.KFR.APPLICATION_COMMAND:
                    return E(U.vm(t.changes));
                case f.KFR.AUTO_MODERATION_RULE:
                    return E(U.rK());
                case f.KFR.GUILD_SOUNDBOARD:
                    return E(U.C0());
                case f.KFR.VOICE_CHANNEL_STATUS:
                    return E(U.F1());
                case f.KFR.GUILD_MEMBER_VERIFICATION:
                    return E(U.JA());
            }
        }, [t.targetType, t.changes, E]);
    return (0, r.jsx)(r.Fragment, { children: d });
}
