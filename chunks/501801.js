(n.d(t, {
    mp: () => L,
    tP: () => M,
    xO: () => b
}),
    n(539854),
    n(953529));
var r = n(255367),
    l = n(73800),
    i = n(120356),
    s = n.n(i),
    a = n(392711),
    o = n.n(a),
    u = n(913527),
    c = n.n(u),
    E = n(866442),
    d = n(481060),
    _ = n(596454),
    A = n(835473),
    T = n(479099),
    I = n(592125),
    g = n(485386),
    m = n(594174),
    f = n(934415),
    O = n(823379),
    N = n(624138),
    h = n(51144),
    R = n(909746),
    p = n(981631),
    S = n(388032),
    C = n(677234);
function b(e, t) {
    let n = R.vc[e.targetType];
    return null != n && !0 === n[t.key];
}
let D = {
    [p.vB8.CREATE]: C.typeCreate,
    [p.vB8.UPDATE]: C.typeUpdate,
    [p.vB8.DELETE]: C.typeDelete
};
function v(e) {
    let { applicationId: t } = e,
        n = (0, A.q)(t);
    return null == n
        ? null
        : (0, r.jsx)(d.Text, {
              variant: 'text-md/normal',
              children: n.name
          });
}
function U(e, t) {
    return (0, r.jsx)(
        'div',
        {
            className: C.colorHook,
            style: { backgroundColor: t }
        },
        e
    );
}
class L extends l.PureComponent {
    render() {
        let { actionType: e, targetType: t, action: n, themeOverride: l } = this.props,
            i = null != l ? C['themeOverride'.concat((0, N.De)(l))] : null,
            a = s()(
                C.icon,
                D[e],
                n === p.rsA.MESSAGE_DELETE
                    ? C.targetMessage
                    : n === p.rsA.AUTO_MODERATION_BLOCK_MESSAGE || n === p.rsA.AUTO_MODERATION_FLAG_TO_CHANNEL || n === p.rsA.AUTO_MODERATION_USER_COMMUNICATION_DISABLED || n === p.rsA.AUTO_MODERATION_QUARANTINE_USER
                      ? C.autoModerationBlockMessage
                      : {
                            [p.KFR.ALL]: C.targetAll,
                            [p.KFR.GUILD]: C.targetGuild,
                            [p.KFR.CHANNEL]: C.targetChannel,
                            [p.KFR.CHANNEL_OVERWRITE]: C.targetChannel,
                            [p.KFR.USER]: C.targetMember,
                            [p.KFR.ROLE]: C.targetRole,
                            [p.KFR.ONBOARDING_PROMPT]: C.targetOnboarding,
                            [p.KFR.GUILD_ONBOARDING]: C.targetOnboarding,
                            [p.KFR.HOME_SETTINGS]: C.targetOnboarding,
                            [p.KFR.INTEGRATION]: C.targetIntegration,
                            [p.KFR.INVITE]: C.targetInvite,
                            [p.KFR.WEBHOOK]: C.targetWebhook,
                            [p.KFR.EMOJI]: C.targetEmoji,
                            [p.KFR.STICKER]: C.targetSticker,
                            [p.KFR.STAGE_INSTANCE]: C.targetStageInstance,
                            [p.KFR.GUILD_SCHEDULED_EVENT]: C.targetGuildScheduledEvent,
                            [p.KFR.GUILD_SCHEDULED_EVENT_EXCEPTION]: C.targetGuildScheduledEvent,
                            [p.KFR.THREAD]: C.thread,
                            [p.KFR.APPLICATION_COMMAND]: C.applicationCommand,
                            [p.KFR.AUTO_MODERATION_RULE]: C.autoModerationRule,
                            [p.KFR.GUILD_HOME]: C.targetGuildHome,
                            [p.KFR.GUILD_SOUNDBOARD]: C.targetGuildSoundboard,
                            [p.KFR.VOICE_CHANNEL_STATUS]: C.targetChannel,
                            [p.KFR.GUILD_MEMBER_VERIFICATION]: C.targetMember,
                            [p.KFR.GUILD_PROFILE]: C.targetGuild
                        }[t],
                i
            );
        return (0, r.jsx)('div', { className: a });
    }
}
function M(e) {
    let { log: t, guild: n, onContentClick: i, className: a } = e,
        u = l.useCallback(
            (e) => {
                if (null == t.changes) return null;
                let u = 0,
                    A = o()
                        .flatten(
                            t.changes.map((i) => {
                                if (b(t, i)) return null;
                                let { oldValue: s, newValue: a } = (() => {
                                        if ((t.action === p.rsA.CHANNEL_UPDATE || t.action === p.rsA.CHANNEL_CREATE) && i.key === p.zUn.TYPE) {
                                            var e, n;
                                            return {
                                                oldValue: null != (e = i.oldValue) ? e : (0, f.a5)({ type: i.oldValue }),
                                                newValue: null != (n = i.newValue) ? n : (0, f.a5)({ type: i.newValue })
                                            };
                                        }
                                        if (t.action === p.rsA.MEMBER_UPDATE && i.key === p.zUn.COMMUNICATION_DISABLED_UNTIL) {
                                            let e = c()(i.newValue);
                                            return {
                                                oldValue: i.oldValue,
                                                newValue: e.isValid() ? e.calendar() : i.newValue
                                            };
                                        }
                                        return t.action === p.rsA.GUILD_UPDATE && i.key === p.zUn.OWNER_ID
                                            ? {
                                                  oldValue: h.ZP.getUserTag(i.oldValue, { mode: 'username' }),
                                                  newValue: h.ZP.getUserTag(i.newValue, { mode: 'username' })
                                              }
                                            : i;
                                    })(),
                                    A = (() => {
                                        if (t.action === p.rsA.MEMBER_ROLE_UPDATE)
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
                                        if (t.targetType === p.KFR.ROLE || t.action === p.rsA.CHANNEL_OVERWRITE_CREATE || t.action === p.rsA.CHANNEL_OVERWRITE_UPDATE)
                                            return (function (e, t) {
                                                let { newValue: n } = e;
                                                return Array.isArray(n)
                                                    ? n.map((e, n) =>
                                                          (0, r.jsx)(
                                                              'div',
                                                              {
                                                                  className: C.subListItem,
                                                                  children: R.hQ(e, t)
                                                              },
                                                              n
                                                          )
                                                      )
                                                    : null;
                                            })(i, t);
                                        if ((t.action === p.rsA.CHANNEL_UPDATE || t.action === p.rsA.THREAD_UPDATE) && i.key === p.zUn.FLAGS)
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
                                                                    children: R.cT(e)
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
                                                                    children: R.em(e)
                                                                },
                                                                e
                                                            )
                                                        )
                                                    )),
                                                l.length > 0)
                                                    ? l
                                                    : null;
                                            })(i);
                                        if ((t.action === p.rsA.ONBOARDING_PROMPT_UPDATE || t.action === p.rsA.ONBOARDING_PROMPT_CREATE) && i.key === p.zUn.OPTIONS)
                                            return (function (e, t, n) {
                                                let { newValue: l, oldValue: i } = e,
                                                    s = (e) => {
                                                        var t;
                                                        let r = null != n ? (null == (t = g.Z.getRole(n.id, e)) ? void 0 : t.name) : void 0;
                                                        return null == r ? null : '@'.concat(r);
                                                    },
                                                    a = (e) => {
                                                        var t;
                                                        let n = null == (t = I.Z.getChannel(e)) ? void 0 : t.name;
                                                        return null == n ? null : '#'.concat(n);
                                                    },
                                                    u = (e, n) => {
                                                        let { title: l, id: i } = n,
                                                            u = e.role_ids.map(s).filter(O.lm),
                                                            c = e.channel_ids.map(a).filter(O.lm),
                                                            E = n.role_ids.map(s).filter(O.lm),
                                                            _ = n.channel_ids.map(a).filter(O.lm),
                                                            A = o().difference(E, u),
                                                            T = o().difference(u, E),
                                                            I = o().difference(_, c),
                                                            g = o().difference(c, _),
                                                            m = [];
                                                        return (o().isEqual(e.title, n.title) || m.push('title'), o().isEqual(e.description, n.description) || m.push('description'), 0 === A.length && 0 === T.length && 0 === I.length && 0 === g.length && 0 === m.length)
                                                            ? null
                                                            : (0, r.jsxs)(
                                                                  'li',
                                                                  {
                                                                      children: [
                                                                          (0, r.jsxs)('div', {
                                                                              className: C.onboardingChangeLogItemTitle,
                                                                              children: [
                                                                                  (0, r.jsx)(L, {
                                                                                      actionType: p.vB8.UPDATE,
                                                                                      targetType: t.targetType,
                                                                                      action: t.action
                                                                                  }),
                                                                                  (0, r.jsx)(d.Text, {
                                                                                      variant: 'text-md/normal',
                                                                                      children: S.intl.format(S.t['WZO+iY'], { title: l })
                                                                                  })
                                                                              ]
                                                                          }),
                                                                          (0, r.jsxs)('div', {
                                                                              className: C.onboardingChangeLogItemChanges,
                                                                              children: [
                                                                                  A.length > 0 &&
                                                                                      (0, r.jsx)(d.Text, {
                                                                                          variant: 'text-md/normal',
                                                                                          children: S.intl.format(S.t['R+km+f'], { roles: A.join(', ') })
                                                                                      }),
                                                                                  T.length > 0 &&
                                                                                      (0, r.jsx)(d.Text, {
                                                                                          variant: 'text-md/normal',
                                                                                          children: S.intl.format(S.t.xIVRoa, { roles: T.join(', ') })
                                                                                      }),
                                                                                  I.length > 0 &&
                                                                                      (0, r.jsx)(d.Text, {
                                                                                          variant: 'text-md/normal',
                                                                                          children: S.intl.format(S.t.iYowX1, { channels: I.join(', ') })
                                                                                      }),
                                                                                  g.length > 0 &&
                                                                                      (0, r.jsx)(d.Text, {
                                                                                          variant: 'text-md/normal',
                                                                                          children: S.intl.format(S.t.JLdJpK, { channels: g.join(', ') })
                                                                                      }),
                                                                                  m.map((t, l) =>
                                                                                      (0, r.jsx)(
                                                                                          d.Text,
                                                                                          {
                                                                                              variant: 'text-md/normal',
                                                                                              children: S.intl.format(S.t['0698zc'], {
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
                                                    c = o().keyBy(null != i ? i : [], 'id'),
                                                    E = o().keyBy(null != l ? l : [], 'id'),
                                                    _ = o()
                                                        .difference(Object.keys(E), Object.keys(c))
                                                        .map((e) => E[e]),
                                                    A = o()
                                                        .difference(Object.keys(c), Object.keys(E))
                                                        .map((e) => c[e]),
                                                    T = o().intersection(Object.keys(E), Object.keys(c));
                                                return (0, r.jsxs)(
                                                    'ul',
                                                    {
                                                        className: C.onboardingChangeLogContainer,
                                                        children: [
                                                            _.map((e) => {
                                                                let { role_ids: n, channel_ids: l, title: i, id: o } = e,
                                                                    u = (null != n ? n : []).map(s).filter(O.lm),
                                                                    c = (null != l ? l : []).map(a).filter(O.lm);
                                                                return (0, r.jsxs)(
                                                                    'li',
                                                                    {
                                                                        children: [
                                                                            (0, r.jsxs)('div', {
                                                                                className: C.onboardingChangeLogItemTitle,
                                                                                children: [
                                                                                    (0, r.jsx)(L, {
                                                                                        actionType: p.vB8.CREATE,
                                                                                        targetType: t.targetType,
                                                                                        action: t.action
                                                                                    }),
                                                                                    (0, r.jsx)(d.Text, {
                                                                                        variant: 'text-md/normal',
                                                                                        children: S.intl.format(S.t.CZ1tys, { title: i })
                                                                                    })
                                                                                ]
                                                                            }),
                                                                            (0, r.jsxs)('div', {
                                                                                className: C.onboardingChangeLogItemChanges,
                                                                                children: [
                                                                                    u.length > 0 &&
                                                                                        (0, r.jsx)(d.Text, {
                                                                                            variant: 'text-md/normal',
                                                                                            children: S.intl.format(S.t['gt/5z8'], { roles: u.join(', ') })
                                                                                        }),
                                                                                    c.length > 0 &&
                                                                                        (0, r.jsx)(d.Text, {
                                                                                            variant: 'text-md/normal',
                                                                                            children: S.intl.format(S.t['4q006e'], { channels: c.join(', ') })
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
                                                                                (0, r.jsx)(L, {
                                                                                    actionType: p.vB8.DELETE,
                                                                                    targetType: t.targetType,
                                                                                    action: t.action
                                                                                }),
                                                                                (0, r.jsx)(d.Text, {
                                                                                    variant: 'text-md/normal',
                                                                                    children: S.intl.format(S.t['m3dt+P'], { title: e.title })
                                                                                })
                                                                            ]
                                                                        })
                                                                    },
                                                                    e.id
                                                                )
                                                            ),
                                                            T.map((e) => u(c[e], E[e]))
                                                        ]
                                                    },
                                                    'options'
                                                );
                                            })(i, t, n);
                                        if (t.action === p.rsA.HOME_SETTINGS_CREATE || t.action === p.rsA.HOME_SETTINGS_UPDATE)
                                            return (function (e, t) {
                                                let { oldValue: n, newValue: l, key: i } = e,
                                                    { targetType: s, action: a } = t;
                                                switch (i) {
                                                    case p.zUn.WELCOME_MESSAGE:
                                                        return ((e, t) => {
                                                            var n, l, i, s, a;
                                                            let o = m.default.getUser(null == t || null == (n = t.author_ids) ? void 0 : n[0]),
                                                                u = m.default.getUser(null == (l = e.author_ids) ? void 0 : l[0]),
                                                                c =
                                                                    (null == o ? void 0 : o.id) !== (null == u ? void 0 : u.id)
                                                                        ? (0, r.jsx)('li', {
                                                                              children: (0, r.jsx)('div', {
                                                                                  className: C.onboardingChangeLogItemTitle,
                                                                                  children: (0, r.jsx)(d.Text, {
                                                                                      variant: 'text-md/normal',
                                                                                      children: S.intl.format(S.t.PrOzAw, {
                                                                                          oldUser: null != (i = null == o ? void 0 : o.username) ? i : S.intl.string(S.t.PoWNfX),
                                                                                          newUser: null != (s = null == u ? void 0 : u.username) ? s : S.intl.string(S.t.PoWNfX)
                                                                                      })
                                                                                  })
                                                                              })
                                                                          })
                                                                        : null,
                                                                E =
                                                                    (null == t ? void 0 : t.message) !== e.message
                                                                        ? (0, r.jsx)('li', {
                                                                              children: (0, r.jsx)('div', {
                                                                                  className: C.onboardingChangeLogItemTitle,
                                                                                  children: (0, r.jsx)(d.Text, {
                                                                                      variant: 'text-md/normal',
                                                                                      children: S.intl.format(S.t.oB7rBQ, {
                                                                                          oldMessage: null != (a = null == t ? void 0 : t.message) ? a : S.intl.string(S.t.PoWNfX),
                                                                                          newMessage: e.message
                                                                                      })
                                                                                  })
                                                                              })
                                                                          })
                                                                        : null;
                                                            return (0, r.jsxs)('ul', {
                                                                children: [c, E]
                                                            });
                                                        })(l, n);
                                                    case p.zUn.NEW_MEMBER_ACTIONS:
                                                        return ((e, t) => {
                                                            let n = e.map((e) => e.channel_id),
                                                                l = t.map((e) => e.channel_id),
                                                                i = o().difference(l, n),
                                                                u = o().difference(n, l),
                                                                c = t.filter((e) => i.includes(e.channel_id)),
                                                                E = e.filter((e) => u.includes(e.channel_id));
                                                            return (0, r.jsxs)('ul', {
                                                                children: [
                                                                    c.map((e) =>
                                                                        (0, r.jsx)(
                                                                            'li',
                                                                            {
                                                                                children: (0, r.jsxs)('div', {
                                                                                    className: C.onboardingChangeLogItemTitle,
                                                                                    children: [
                                                                                        (0, r.jsx)(L, {
                                                                                            actionType: p.vB8.CREATE,
                                                                                            targetType: s,
                                                                                            action: a
                                                                                        }),
                                                                                        (0, r.jsx)(d.Text, {
                                                                                            variant: 'text-md/normal',
                                                                                            children: S.intl.format(S.t['oFSu6+'], { name: e.title })
                                                                                        })
                                                                                    ]
                                                                                })
                                                                            },
                                                                            e.channel_id
                                                                        )
                                                                    ),
                                                                    E.map((e) =>
                                                                        (0, r.jsx)(
                                                                            'li',
                                                                            {
                                                                                children: (0, r.jsxs)('div', {
                                                                                    className: C.onboardingChangeLogItemTitle,
                                                                                    children: [
                                                                                        (0, r.jsx)(L, {
                                                                                            actionType: p.vB8.DELETE,
                                                                                            targetType: s,
                                                                                            action: a
                                                                                        }),
                                                                                        (0, r.jsx)(d.Text, {
                                                                                            variant: 'text-md/normal',
                                                                                            children: S.intl.format(S.t.GssWam, { name: e.title })
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
                                                                i = o().difference(l, n),
                                                                u = o().difference(n, l),
                                                                c = t.filter((e) => i.includes(e.channel_id)),
                                                                E = e.filter((e) => u.includes(e.channel_id));
                                                            return (0, r.jsxs)('ul', {
                                                                children: [
                                                                    c.map((e) =>
                                                                        (0, r.jsx)(
                                                                            'li',
                                                                            {
                                                                                children: (0, r.jsxs)('div', {
                                                                                    className: C.onboardingChangeLogItemTitle,
                                                                                    children: [
                                                                                        (0, r.jsx)(L, {
                                                                                            actionType: p.vB8.CREATE,
                                                                                            targetType: s,
                                                                                            action: a
                                                                                        }),
                                                                                        (0, r.jsx)(d.Text, {
                                                                                            variant: 'text-md/normal',
                                                                                            children: S.intl.format(S.t.HlGndH, { name: e.title })
                                                                                        })
                                                                                    ]
                                                                                })
                                                                            },
                                                                            e.channel_id
                                                                        )
                                                                    ),
                                                                    E.map((e) =>
                                                                        (0, r.jsx)(
                                                                            'li',
                                                                            {
                                                                                children: (0, r.jsxs)('div', {
                                                                                    className: C.onboardingChangeLogItemTitle,
                                                                                    children: [
                                                                                        (0, r.jsx)(L, {
                                                                                            actionType: p.vB8.DELETE,
                                                                                            targetType: s,
                                                                                            action: a
                                                                                        }),
                                                                                        (0, r.jsx)(d.Text, {
                                                                                            variant: 'text-md/normal',
                                                                                            children: S.intl.format(S.t['7pysg4'], { name: e.title })
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
                                    N = e[i.key];
                                return (function (e) {
                                    var t, n;
                                    let { changeItem: i, subChanges: s, changeNumber: a, log: o, oldValue: u, newValue: c, change: A } = e;
                                    if (null == i) return (console.warn('No change string for', A), null);
                                    let I = S.intl.format(i, {
                                        oldValue: u,
                                        newValue: c,
                                        count: Array.isArray(c) ? c.length : null,
                                        subtarget: null != (n = null != (t = o.options.subtarget) ? t : A.subtarget) ? n : null,
                                        newColorHook: (e, t) => U(t, A.newValue),
                                        newColorsHook: (e, t) => {
                                            let { primary_color: n, secondary_color: i, tertiary_color: s } = c;
                                            return (0, r.jsx)(
                                                'span',
                                                {
                                                    children: [n, i, s].filter(O.lm).map((e, n) =>
                                                        (0, r.jsxs)(
                                                            l.Fragment,
                                                            {
                                                                children: [
                                                                    (0, r.jsx)('span', {
                                                                        className: C.colorsHook,
                                                                        children: ''.concat(n > 0 ? ', ' : '').concat((0, E.Rf)(e).toUpperCase(), ' ')
                                                                    }),
                                                                    U(t, (0, E.Rf)(e))
                                                                ]
                                                            },
                                                            n
                                                        )
                                                    )
                                                },
                                                t
                                            );
                                        },
                                        oldColorHook: (e, t) => U(t, A.oldValue),
                                        oldTagHook: (e, t) =>
                                            (0, r.jsx)(
                                                T.Z,
                                                {
                                                    tag: u,
                                                    size: T.Z.Sizes.SMALL
                                                },
                                                t
                                            ),
                                        newTagHook: (e, t) =>
                                            (0, r.jsx)(
                                                T.Z,
                                                {
                                                    tag: c,
                                                    size: T.Z.Sizes.SMALL
                                                },
                                                t
                                            ),
                                        oldEmojiHook: (e, t) => (0, r.jsx)(_.Z, { emojiId: u }, t),
                                        newEmojiHook: (e, t) => (0, r.jsx)(_.Z, { emojiId: c }, t),
                                        applicationHook: (e, t) => {
                                            var n;
                                            return (0, r.jsx)(v, { applicationId: null != (n = null == u ? void 0 : u.application_id) ? n : null == c ? void 0 : c.application_id }, t);
                                        }
                                    });
                                    return null == I
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
                                                      (0, r.jsxs)(d.Text, {
                                                          className: C.prefix,
                                                          variant: 'code',
                                                          color: (function (e) {
                                                              switch (e) {
                                                                  case p.vB8.CREATE:
                                                                      return 'text-feedback-positive';
                                                                  case p.vB8.DELETE:
                                                                      return 'status-danger';
                                                                  default:
                                                                      return 'text-feedback-warning';
                                                              }
                                                          })(o.actionType),
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
                                                                  children: I
                                                              }),
                                                              null != s ? (0, r.jsx)('div', { children: s }) : null
                                                          ]
                                                      })
                                                  ]
                                              },
                                              a
                                          );
                                })({
                                    changeItem: 'function' == typeof N ? N(i) : N,
                                    subChanges: A,
                                    changeNumber: ++u,
                                    log: t,
                                    oldValue: s,
                                    newValue: a,
                                    change: i
                                });
                            })
                        )
                        .filter(O.lm);
                return (0, r.jsx)(d.P3F, {
                    onClick: i,
                    className: s()(C.changeDetails, a),
                    children: A
                });
            },
            [t, n, i, a]
        );
    return l.useMemo(() => {
        switch (t.targetType) {
            case p.KFR.GUILD:
                return u(R.pY());
            case p.KFR.CHANNEL:
            case p.KFR.CHANNEL_OVERWRITE:
                return u(R.ML());
            case p.KFR.USER:
                return u(R.lU());
            case p.KFR.ROLE:
                return u(R.HE());
            case p.KFR.ONBOARDING_PROMPT:
                return u(R.oD());
            case p.KFR.GUILD_ONBOARDING:
                return u(R.EN());
            case p.KFR.HOME_SETTINGS:
                return u(R.hx());
            case p.KFR.INVITE:
                return u(R.HN());
            case p.KFR.WEBHOOK:
                return u(R.lR());
            case p.KFR.EMOJI:
                return u(R.N$());
            case p.KFR.STICKER:
                return u(R.Bq());
            case p.KFR.INTEGRATION:
                return u(R.K());
            case p.KFR.STAGE_INSTANCE:
                return u(R.C2());
            case p.KFR.GUILD_SCHEDULED_EVENT:
                return u(R.uB());
            case p.KFR.GUILD_SCHEDULED_EVENT_EXCEPTION:
                return u(R.pi());
            case p.KFR.THREAD:
                return u(R.pA());
            case p.KFR.APPLICATION_COMMAND:
                return u(R.vm(t.changes));
            case p.KFR.AUTO_MODERATION_RULE:
                return u(R.rK());
            case p.KFR.GUILD_SOUNDBOARD:
                return u(R.C0());
            case p.KFR.VOICE_CHANNEL_STATUS:
                return u(R.F1());
            case p.KFR.GUILD_MEMBER_VERIFICATION:
                return u(R.JA());
            case p.KFR.GUILD_PROFILE:
                return u(R.zT());
        }
    }, [t.targetType, t.changes, u]);
}
