n.d(t, {
    mp: () => m,
    tP: () => M,
    xO: () => L
}),
    n(653041),
    n(266796);
var r = n(200651),
    l = n(192379),
    a = n(120356),
    i = n.n(a),
    o = n(392711),
    s = n.n(o),
    E = n(913527),
    c = n.n(E),
    u = n(481060),
    _ = n(596454),
    d = n(835473),
    A = n(479099),
    T = n(592125),
    N = n(430824),
    I = n(594174),
    O = n(934415),
    g = n(823379),
    R = n(624138),
    f = n(51144),
    S = n(909746),
    p = n(981631),
    U = n(388032),
    D = n(677811);
function L(e, t) {
    let n = S.vc[e.targetType];
    return null != n && !0 === n[t.key];
}
let C = {
    [p.vB8.CREATE]: D.typeCreate,
    [p.vB8.UPDATE]: D.typeUpdate,
    [p.vB8.DELETE]: D.typeDelete
};
function h(e) {
    let { applicationId: t } = e,
        n = (0, d.q)(t);
    return null == n
        ? null
        : (0, r.jsx)(u.Text, {
              variant: 'text-md/normal',
              children: n.name
          });
}
class m extends l.PureComponent {
    render() {
        let { actionType: e, targetType: t, action: n, themeOverride: l } = this.props,
            a = null != l ? D['themeOverride'.concat((0, R.De)(l))] : null,
            o = i()(
                D.icon,
                C[e],
                n === p.rsA.MESSAGE_DELETE
                    ? D.targetMessage
                    : n === p.rsA.AUTO_MODERATION_BLOCK_MESSAGE || n === p.rsA.AUTO_MODERATION_FLAG_TO_CHANNEL || n === p.rsA.AUTO_MODERATION_USER_COMMUNICATION_DISABLED || n === p.rsA.AUTO_MODERATION_QUARANTINE_USER
                      ? D.autoModerationBlockMessage
                      : {
                            [p.KFR.ALL]: D.targetAll,
                            [p.KFR.GUILD]: D.targetGuild,
                            [p.KFR.CHANNEL]: D.targetChannel,
                            [p.KFR.CHANNEL_OVERWRITE]: D.targetChannel,
                            [p.KFR.USER]: D.targetMember,
                            [p.KFR.ROLE]: D.targetRole,
                            [p.KFR.ONBOARDING_PROMPT]: D.targetOnboarding,
                            [p.KFR.GUILD_ONBOARDING]: D.targetOnboarding,
                            [p.KFR.HOME_SETTINGS]: D.targetOnboarding,
                            [p.KFR.INTEGRATION]: D.targetIntegration,
                            [p.KFR.INVITE]: D.targetInvite,
                            [p.KFR.WEBHOOK]: D.targetWebhook,
                            [p.KFR.EMOJI]: D.targetEmoji,
                            [p.KFR.STICKER]: D.targetSticker,
                            [p.KFR.STAGE_INSTANCE]: D.targetStageInstance,
                            [p.KFR.GUILD_SCHEDULED_EVENT]: D.targetGuildScheduledEvent,
                            [p.KFR.GUILD_SCHEDULED_EVENT_EXCEPTION]: D.targetGuildScheduledEvent,
                            [p.KFR.THREAD]: D.thread,
                            [p.KFR.APPLICATION_COMMAND]: D.applicationCommand,
                            [p.KFR.AUTO_MODERATION_RULE]: D.autoModerationRule,
                            [p.KFR.GUILD_HOME]: D.targetGuildHome,
                            [p.KFR.GUILD_SOUNDBOARD]: D.targetGuildSoundboard,
                            [p.KFR.VOICE_CHANNEL_STATUS]: D.targetChannel,
                            [p.KFR.GUILD_MEMBER_VERIFICATION]: D.targetMember,
                            [p.KFR.GUILD_PROFILE]: D.targetGuild
                        }[t],
                a
            );
        return (0, r.jsx)('div', { className: o });
    }
}
function M(e) {
    let { log: t, guild: n, onContentClick: a, className: o } = e,
        E = l.useCallback(
            (e) => {
                if (null == t.changes) return null;
                let l = 0,
                    E = s()
                        .flatten(
                            t.changes.map((a) => {
                                if (L(t, a)) return null;
                                let { oldValue: i, newValue: o } = (() => {
                                        if ((t.action === p.rsA.CHANNEL_UPDATE || t.action === p.rsA.CHANNEL_CREATE) && a.key === p.zUn.TYPE) {
                                            var e, n;
                                            return {
                                                oldValue: null !== (e = a.oldValue) && void 0 !== e ? e : (0, O.a5)({ type: a.oldValue }),
                                                newValue: null !== (n = a.newValue) && void 0 !== n ? n : (0, O.a5)({ type: a.newValue })
                                            };
                                        }
                                        if (t.action === p.rsA.MEMBER_UPDATE && a.key === p.zUn.COMMUNICATION_DISABLED_UNTIL) {
                                            let e = c()(a.newValue);
                                            return {
                                                oldValue: a.oldValue,
                                                newValue: e.isValid() ? e.calendar() : a.newValue
                                            };
                                        }
                                        return t.action === p.rsA.GUILD_UPDATE && a.key === p.zUn.OWNER_ID
                                            ? {
                                                  oldValue: f.ZP.getUserTag(a.oldValue, { mode: 'username' }),
                                                  newValue: f.ZP.getUserTag(a.newValue, { mode: 'username' })
                                              }
                                            : a;
                                    })(),
                                    E = (() => {
                                        if (t.action === p.rsA.MEMBER_ROLE_UPDATE)
                                            return (function (e) {
                                                let { newValue: t } = e;
                                                return Array.isArray(t)
                                                    ? t.map((e) =>
                                                          (0, r.jsx)(
                                                              'div',
                                                              {
                                                                  className: D.subListItem,
                                                                  children: e.name
                                                              },
                                                              e.id
                                                          )
                                                      )
                                                    : null;
                                            })(a);
                                        if (t.targetType === p.KFR.ROLE || t.action === p.rsA.CHANNEL_OVERWRITE_CREATE || t.action === p.rsA.CHANNEL_OVERWRITE_UPDATE)
                                            return (function (e, t) {
                                                let { newValue: n } = e;
                                                return Array.isArray(n)
                                                    ? n.map((e, n) =>
                                                          (0, r.jsx)(
                                                              'div',
                                                              {
                                                                  className: D.subListItem,
                                                                  children: S.hQ(e, t)
                                                              },
                                                              n
                                                          )
                                                      )
                                                    : null;
                                            })(a, t);
                                        if ((t.action === p.rsA.CHANNEL_UPDATE || t.action === p.rsA.THREAD_UPDATE) && a.key === p.zUn.FLAGS)
                                            return (function (e) {
                                                let { newValue: t, oldValue: n } = e,
                                                    l = [];
                                                return (Array.isArray(n) &&
                                                    (l = l.concat(
                                                        n.map((e) =>
                                                            (0, r.jsx)(
                                                                'div',
                                                                {
                                                                    className: D.subListItem,
                                                                    children: S.cT(e)
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
                                                                    className: D.subListItem,
                                                                    children: S.em(e)
                                                                },
                                                                e
                                                            )
                                                        )
                                                    )),
                                                l.length > 0)
                                                    ? l
                                                    : null;
                                            })(a);
                                        if ((t.action === p.rsA.ONBOARDING_PROMPT_UPDATE || t.action === p.rsA.ONBOARDING_PROMPT_CREATE) && a.key === p.zUn.OPTIONS)
                                            return (function (e, t, n) {
                                                let { newValue: l, oldValue: a } = e,
                                                    i = (e) => {
                                                        var t;
                                                        let r = null != n ? (null === (t = N.Z.getRole(n.id, e)) || void 0 === t ? void 0 : t.name) : void 0;
                                                        return null == r ? null : '@'.concat(r);
                                                    },
                                                    o = (e) => {
                                                        var t;
                                                        let n = null === (t = T.Z.getChannel(e)) || void 0 === t ? void 0 : t.name;
                                                        return null == n ? null : '#'.concat(n);
                                                    },
                                                    E = (e, n) => {
                                                        let { title: l, id: a } = n,
                                                            E = e.role_ids.map(i).filter(g.lm),
                                                            c = e.channel_ids.map(o).filter(g.lm),
                                                            _ = n.role_ids.map(i).filter(g.lm),
                                                            d = n.channel_ids.map(o).filter(g.lm),
                                                            A = s().difference(_, E),
                                                            T = s().difference(E, _),
                                                            N = s().difference(d, c),
                                                            I = s().difference(c, d),
                                                            O = [];
                                                        return (s().isEqual(e.title, n.title) || O.push('title'), s().isEqual(e.description, n.description) || O.push('description'), 0 === A.length && 0 === T.length && 0 === N.length && 0 === I.length && 0 === O.length)
                                                            ? null
                                                            : (0, r.jsxs)(
                                                                  'li',
                                                                  {
                                                                      children: [
                                                                          (0, r.jsxs)('div', {
                                                                              className: D.onboardingChangeLogItemTitle,
                                                                              children: [
                                                                                  (0, r.jsx)(m, {
                                                                                      actionType: p.vB8.UPDATE,
                                                                                      targetType: t.targetType,
                                                                                      action: t.action
                                                                                  }),
                                                                                  (0, r.jsx)(u.Text, {
                                                                                      variant: 'text-md/normal',
                                                                                      children: U.NW.format(U.t['WZO+iY'], { title: l })
                                                                                  })
                                                                              ]
                                                                          }),
                                                                          (0, r.jsxs)('div', {
                                                                              className: D.onboardingChangeLogItemChanges,
                                                                              children: [
                                                                                  A.length > 0 &&
                                                                                      (0, r.jsx)(u.Text, {
                                                                                          variant: 'text-md/normal',
                                                                                          children: U.NW.format(U.t['R+km+f'], { roles: A.join(', ') })
                                                                                      }),
                                                                                  T.length > 0 &&
                                                                                      (0, r.jsx)(u.Text, {
                                                                                          variant: 'text-md/normal',
                                                                                          children: U.NW.format(U.t.xIVRoa, { roles: T.join(', ') })
                                                                                      }),
                                                                                  N.length > 0 &&
                                                                                      (0, r.jsx)(u.Text, {
                                                                                          variant: 'text-md/normal',
                                                                                          children: U.NW.format(U.t.iYowX1, { channels: N.join(', ') })
                                                                                      }),
                                                                                  I.length > 0 &&
                                                                                      (0, r.jsx)(u.Text, {
                                                                                          variant: 'text-md/normal',
                                                                                          children: U.NW.format(U.t.JLdJpK, { channels: I.join(', ') })
                                                                                      }),
                                                                                  O.map((t, l) =>
                                                                                      (0, r.jsx)(
                                                                                          u.Text,
                                                                                          {
                                                                                              variant: 'text-md/normal',
                                                                                              children: U.NW.format(U.t['0698zc'], {
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
                                                                  a
                                                              );
                                                    },
                                                    c = s().keyBy(null != a ? a : [], 'id'),
                                                    _ = s().keyBy(null != l ? l : [], 'id'),
                                                    d = s()
                                                        .difference(Object.keys(_), Object.keys(c))
                                                        .map((e) => _[e]),
                                                    A = s()
                                                        .difference(Object.keys(c), Object.keys(_))
                                                        .map((e) => c[e]),
                                                    I = s().intersection(Object.keys(_), Object.keys(c));
                                                return (0, r.jsxs)(
                                                    'ul',
                                                    {
                                                        className: D.onboardingChangeLogContainer,
                                                        children: [
                                                            d.map((e) => {
                                                                let { role_ids: n, channel_ids: l, title: a, id: s } = e,
                                                                    E = (null != n ? n : []).map(i).filter(g.lm),
                                                                    c = (null != l ? l : []).map(o).filter(g.lm);
                                                                return (0, r.jsxs)(
                                                                    'li',
                                                                    {
                                                                        children: [
                                                                            (0, r.jsxs)('div', {
                                                                                className: D.onboardingChangeLogItemTitle,
                                                                                children: [
                                                                                    (0, r.jsx)(m, {
                                                                                        actionType: p.vB8.CREATE,
                                                                                        targetType: t.targetType,
                                                                                        action: t.action
                                                                                    }),
                                                                                    (0, r.jsx)(u.Text, {
                                                                                        variant: 'text-md/normal',
                                                                                        children: U.NW.format(U.t.CZ1tys, { title: a })
                                                                                    })
                                                                                ]
                                                                            }),
                                                                            (0, r.jsxs)('div', {
                                                                                className: D.onboardingChangeLogItemChanges,
                                                                                children: [
                                                                                    E.length > 0 &&
                                                                                        (0, r.jsx)(u.Text, {
                                                                                            variant: 'text-md/normal',
                                                                                            children: U.NW.format(U.t['gt/5z8'], { roles: E.join(', ') })
                                                                                        }),
                                                                                    c.length > 0 &&
                                                                                        (0, r.jsx)(u.Text, {
                                                                                            variant: 'text-md/normal',
                                                                                            children: U.NW.format(U.t['4q006e'], { channels: c.join(', ') })
                                                                                        })
                                                                                ]
                                                                            })
                                                                        ]
                                                                    },
                                                                    s
                                                                );
                                                            }),
                                                            A.map((e) =>
                                                                (0, r.jsx)(
                                                                    'li',
                                                                    {
                                                                        children: (0, r.jsxs)('div', {
                                                                            className: D.onboardingChangeLogItemTitle,
                                                                            children: [
                                                                                (0, r.jsx)(m, {
                                                                                    actionType: p.vB8.DELETE,
                                                                                    targetType: t.targetType,
                                                                                    action: t.action
                                                                                }),
                                                                                (0, r.jsx)(u.Text, {
                                                                                    variant: 'text-md/normal',
                                                                                    children: U.NW.format(U.t['m3dt+P'], { title: e.title })
                                                                                })
                                                                            ]
                                                                        })
                                                                    },
                                                                    e.id
                                                                )
                                                            ),
                                                            I.map((e) => E(c[e], _[e]))
                                                        ]
                                                    },
                                                    'options'
                                                );
                                            })(a, t, n);
                                        if (t.action === p.rsA.HOME_SETTINGS_CREATE || t.action === p.rsA.HOME_SETTINGS_UPDATE)
                                            return (function (e, t) {
                                                let { oldValue: n, newValue: l, key: a } = e,
                                                    { targetType: i, action: o } = t;
                                                switch (a) {
                                                    case p.zUn.WELCOME_MESSAGE:
                                                        return ((e, t) => {
                                                            var n, l, a, i, o;
                                                            let s = I.default.getUser(null == t ? void 0 : null === (n = t.author_ids) || void 0 === n ? void 0 : n[0]),
                                                                E = I.default.getUser(null === (l = e.author_ids) || void 0 === l ? void 0 : l[0]),
                                                                c =
                                                                    (null == s ? void 0 : s.id) !== (null == E ? void 0 : E.id)
                                                                        ? (0, r.jsx)('li', {
                                                                              children: (0, r.jsx)('div', {
                                                                                  className: D.onboardingChangeLogItemTitle,
                                                                                  children: (0, r.jsx)(u.Text, {
                                                                                      variant: 'text-md/normal',
                                                                                      children: U.NW.format(U.t.PrOzAw, {
                                                                                          oldUser: null !== (a = null == s ? void 0 : s.username) && void 0 !== a ? a : U.NW.string(U.t.PoWNfX),
                                                                                          newUser: null !== (i = null == E ? void 0 : E.username) && void 0 !== i ? i : U.NW.string(U.t.PoWNfX)
                                                                                      })
                                                                                  })
                                                                              })
                                                                          })
                                                                        : null,
                                                                _ =
                                                                    (null == t ? void 0 : t.message) !== e.message
                                                                        ? (0, r.jsx)('li', {
                                                                              children: (0, r.jsx)('div', {
                                                                                  className: D.onboardingChangeLogItemTitle,
                                                                                  children: (0, r.jsx)(u.Text, {
                                                                                      variant: 'text-md/normal',
                                                                                      children: U.NW.format(U.t.oB7rBQ, {
                                                                                          oldMessage: null !== (o = null == t ? void 0 : t.message) && void 0 !== o ? o : U.NW.string(U.t.PoWNfX),
                                                                                          newMessage: e.message
                                                                                      })
                                                                                  })
                                                                              })
                                                                          })
                                                                        : null;
                                                            return (0, r.jsxs)('ul', {
                                                                children: [c, _]
                                                            });
                                                        })(l, n);
                                                    case p.zUn.NEW_MEMBER_ACTIONS:
                                                        return ((e, t) => {
                                                            let n = e.map((e) => e.channel_id),
                                                                l = t.map((e) => e.channel_id),
                                                                a = s().difference(l, n),
                                                                E = s().difference(n, l),
                                                                c = t.filter((e) => a.includes(e.channel_id)),
                                                                _ = e.filter((e) => E.includes(e.channel_id));
                                                            return (0, r.jsxs)('ul', {
                                                                children: [
                                                                    c.map((e) =>
                                                                        (0, r.jsx)(
                                                                            'li',
                                                                            {
                                                                                children: (0, r.jsxs)('div', {
                                                                                    className: D.onboardingChangeLogItemTitle,
                                                                                    children: [
                                                                                        (0, r.jsx)(m, {
                                                                                            actionType: p.vB8.CREATE,
                                                                                            targetType: i,
                                                                                            action: o
                                                                                        }),
                                                                                        (0, r.jsx)(u.Text, {
                                                                                            variant: 'text-md/normal',
                                                                                            children: U.NW.format(U.t['oFSu6+'], { name: e.title })
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
                                                                                    className: D.onboardingChangeLogItemTitle,
                                                                                    children: [
                                                                                        (0, r.jsx)(m, {
                                                                                            actionType: p.vB8.DELETE,
                                                                                            targetType: i,
                                                                                            action: o
                                                                                        }),
                                                                                        (0, r.jsx)(u.Text, {
                                                                                            variant: 'text-md/normal',
                                                                                            children: U.NW.format(U.t.GssWam, { name: e.title })
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
                                                    case p.zUn.RESOURCE_CHANNELS:
                                                        return ((e, t) => {
                                                            let n = e.map((e) => e.channel_id),
                                                                l = t.map((e) => e.channel_id),
                                                                a = s().difference(l, n),
                                                                E = s().difference(n, l),
                                                                c = t.filter((e) => a.includes(e.channel_id)),
                                                                _ = e.filter((e) => E.includes(e.channel_id));
                                                            return (0, r.jsxs)('ul', {
                                                                children: [
                                                                    c.map((e) =>
                                                                        (0, r.jsx)(
                                                                            'li',
                                                                            {
                                                                                children: (0, r.jsxs)('div', {
                                                                                    className: D.onboardingChangeLogItemTitle,
                                                                                    children: [
                                                                                        (0, r.jsx)(m, {
                                                                                            actionType: p.vB8.CREATE,
                                                                                            targetType: i,
                                                                                            action: o
                                                                                        }),
                                                                                        (0, r.jsx)(u.Text, {
                                                                                            variant: 'text-md/normal',
                                                                                            children: U.NW.format(U.t.HlGndH, { name: e.title })
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
                                                                                    className: D.onboardingChangeLogItemTitle,
                                                                                    children: [
                                                                                        (0, r.jsx)(m, {
                                                                                            actionType: p.vB8.DELETE,
                                                                                            targetType: i,
                                                                                            action: o
                                                                                        }),
                                                                                        (0, r.jsx)(u.Text, {
                                                                                            variant: 'text-md/normal',
                                                                                            children: U.NW.format(U.t['7pysg4'], { name: e.title })
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
                                            })(a, t);
                                        return null;
                                    })(),
                                    d = e[a.key];
                                return (function (e) {
                                    var t, n;
                                    let { changeItem: l, subChanges: a, changeNumber: i, log: o, oldValue: s, newValue: E, change: c } = e;
                                    if (null == l) return console.warn('No change string for', c), null;
                                    let d = U.NW.format(l, {
                                        oldValue: s,
                                        newValue: E,
                                        count: Array.isArray(E) ? E.length : null,
                                        subtarget: null !== (n = null !== (t = o.options.subtarget) && void 0 !== t ? t : c.subtarget) && void 0 !== n ? n : null,
                                        newColorHook: (e, t) =>
                                            (0, r.jsx)(
                                                'div',
                                                {
                                                    className: D.colorHook,
                                                    style: { backgroundColor: c.newValue }
                                                },
                                                t
                                            ),
                                        oldColorHook: (e, t) =>
                                            (0, r.jsx)(
                                                'div',
                                                {
                                                    className: D.colorHook,
                                                    style: { backgroundColor: c.oldValue }
                                                },
                                                t
                                            ),
                                        oldTagHook: (e, t) =>
                                            (0, r.jsx)(
                                                A.Z,
                                                {
                                                    tag: s,
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
                                        oldEmojiHook: (e, t) => (0, r.jsx)(_.Z, { emojiId: s }, t),
                                        newEmojiHook: (e, t) => (0, r.jsx)(_.Z, { emojiId: E }, t),
                                        applicationHook: (e, t) => {
                                            var n;
                                            return (0, r.jsx)(h, { applicationId: null !== (n = null == s ? void 0 : s.application_id) && void 0 !== n ? n : null == E ? void 0 : E.application_id }, t);
                                        }
                                    });
                                    return null == d
                                        ? null
                                        : (0, r.jsxs)(
                                              'div',
                                              {
                                                  className: D.detail,
                                                  style: {
                                                      position: 'relative',
                                                      top: 1
                                                  },
                                                  children: [
                                                      (0, r.jsxs)(u.Text, {
                                                          className: D.prefix,
                                                          variant: 'code',
                                                          color: (function (e) {
                                                              switch (e) {
                                                                  case p.vB8.CREATE:
                                                                      return 'text-positive';
                                                                  case p.vB8.DELETE:
                                                                      return 'status-danger';
                                                                  default:
                                                                      return 'text-warning';
                                                              }
                                                          })(o.actionType),
                                                          children: [
                                                              i < 10 ? '0'.concat(i) : i,
                                                              (0, r.jsx)('span', {
                                                                  className: D.dash,
                                                                  children: '\u2014'
                                                              })
                                                          ]
                                                      }),
                                                      (0, r.jsxs)('div', {
                                                          className: D.change,
                                                          children: [
                                                              (0, r.jsx)('div', {
                                                                  className: D.changeStr,
                                                                  children: d
                                                              }),
                                                              null != a ? (0, r.jsx)('div', { children: a }) : null
                                                          ]
                                                      })
                                                  ]
                                              },
                                              i
                                          );
                                })({
                                    changeItem: 'function' == typeof d ? d(a) : d,
                                    subChanges: E,
                                    changeNumber: ++l,
                                    log: t,
                                    oldValue: i,
                                    newValue: o,
                                    change: a
                                });
                            })
                        )
                        .filter(g.lm);
                return (0, r.jsx)(u.P3F, {
                    onClick: a,
                    className: i()(D.changeDetails, o),
                    children: E
                });
            },
            [t, n, a, o]
        ),
        d = l.useMemo(() => {
            switch (t.targetType) {
                case p.KFR.GUILD:
                    return E(S.pY());
                case p.KFR.CHANNEL:
                case p.KFR.CHANNEL_OVERWRITE:
                    return E(S.ML());
                case p.KFR.USER:
                    return E(S.lU());
                case p.KFR.ROLE:
                    return E(S.HE());
                case p.KFR.ONBOARDING_PROMPT:
                    return E(S.oD());
                case p.KFR.GUILD_ONBOARDING:
                    return E(S.EN());
                case p.KFR.HOME_SETTINGS:
                    return E(S.hx());
                case p.KFR.INVITE:
                    return E(S.HN());
                case p.KFR.WEBHOOK:
                    return E(S.lR());
                case p.KFR.EMOJI:
                    return E(S.N$());
                case p.KFR.STICKER:
                    return E(S.Bq());
                case p.KFR.INTEGRATION:
                    return E(S.K());
                case p.KFR.STAGE_INSTANCE:
                    return E(S.C2());
                case p.KFR.GUILD_SCHEDULED_EVENT:
                    return E(S.uB());
                case p.KFR.GUILD_SCHEDULED_EVENT_EXCEPTION:
                    return E(S.pi());
                case p.KFR.THREAD:
                    return E(S.pA());
                case p.KFR.APPLICATION_COMMAND:
                    return E(S.vm(t.changes));
                case p.KFR.AUTO_MODERATION_RULE:
                    return E(S.rK());
                case p.KFR.GUILD_SOUNDBOARD:
                    return E(S.C0());
                case p.KFR.VOICE_CHANNEL_STATUS:
                    return E(S.F1());
                case p.KFR.GUILD_MEMBER_VERIFICATION:
                    return E(S.JA());
                case p.KFR.GUILD_PROFILE:
                    return E(S.zT());
            }
        }, [t.targetType, t.changes, E]);
    return (0, r.jsx)(r.Fragment, { children: d });
}
