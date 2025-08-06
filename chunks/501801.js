(n.d(t, {
    mp: () => x,
    tP: () => U,
    xO: () => v
}),
    n(539854),
    n(953529));
var r = n(255367),
    l = n(73800),
    s = n(120356),
    i = n.n(s),
    a = n(392711),
    o = n.n(a),
    u = n(913527),
    c = n.n(u),
    E = n(866442),
    d = n(481060),
    _ = n(596454),
    A = n(835473),
    T = n(479099),
    m = n(592125),
    I = n(485386),
    g = n(594174),
    f = n(934415),
    N = n(823379),
    h = n(624138),
    O = n(51144),
    p = n(909746),
    R = n(981631),
    S = n(388032),
    C = n(677234);
function v(e, t) {
    let n = p.vc[e.targetType];
    return null != n && !0 === n[t.key];
}
let D = {
    [R.vB8.CREATE]: C.typeCreate,
    [R.vB8.UPDATE]: C.typeUpdate,
    [R.vB8.DELETE]: C.typeDelete
};
function b(e) {
    let { applicationId: t } = e,
        n = (0, A.q)(t);
    return null == n
        ? null
        : (0, r.jsx)(d.Text, {
              variant: 'text-md/normal',
              children: n.name
          });
}
function L(e, t) {
    return (0, r.jsx)(
        'div',
        {
            className: C.colorHook,
            style: { backgroundColor: t }
        },
        e
    );
}
class x extends l.PureComponent {
    render() {
        let { actionType: e, targetType: t, action: n, themeOverride: l } = this.props,
            s = null != l ? C['themeOverride'.concat((0, h.De)(l))] : null,
            a = i()(
                C.icon,
                D[e],
                n === R.rsA.MESSAGE_DELETE
                    ? C.targetMessage
                    : n === R.rsA.AUTO_MODERATION_BLOCK_MESSAGE || n === R.rsA.AUTO_MODERATION_FLAG_TO_CHANNEL || n === R.rsA.AUTO_MODERATION_USER_COMMUNICATION_DISABLED || n === R.rsA.AUTO_MODERATION_QUARANTINE_USER
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
                            [R.KFR.GUILD_PROFILE]: C.targetGuild
                        }[t],
                s
            );
        return (0, r.jsx)('div', { className: a });
    }
}
function U(e) {
    let { log: t, guild: n, onContentClick: s, className: a } = e,
        u = l.useCallback(
            (e) => {
                if (null == t.changes) return null;
                let u = 0,
                    A = o()
                        .flatten(
                            t.changes.map((s) => {
                                if (v(t, s)) return null;
                                let { oldValue: i, newValue: a } = (() => {
                                        if ((t.action === R.rsA.CHANNEL_UPDATE || t.action === R.rsA.CHANNEL_CREATE) && s.key === R.zUn.TYPE) {
                                            var e, n;
                                            return {
                                                oldValue: null != (e = s.oldValue) ? e : (0, f.a5)({ type: s.oldValue }),
                                                newValue: null != (n = s.newValue) ? n : (0, f.a5)({ type: s.newValue })
                                            };
                                        }
                                        if (t.action === R.rsA.MEMBER_UPDATE && s.key === R.zUn.COMMUNICATION_DISABLED_UNTIL) {
                                            let e = c()(s.newValue);
                                            return {
                                                oldValue: s.oldValue,
                                                newValue: e.isValid() ? e.calendar() : s.newValue
                                            };
                                        }
                                        return t.action === R.rsA.GUILD_UPDATE && s.key === R.zUn.OWNER_ID
                                            ? {
                                                  oldValue: O.ZP.getUserTag(s.oldValue, { mode: 'username' }),
                                                  newValue: O.ZP.getUserTag(s.newValue, { mode: 'username' })
                                              }
                                            : s;
                                    })(),
                                    A = (() => {
                                        if (t.action === R.rsA.MEMBER_ROLE_UPDATE)
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
                                            })(s);
                                        if (t.targetType === R.KFR.ROLE || t.action === R.rsA.CHANNEL_OVERWRITE_CREATE || t.action === R.rsA.CHANNEL_OVERWRITE_UPDATE)
                                            return (function (e, t) {
                                                let { newValue: n } = e;
                                                return Array.isArray(n)
                                                    ? n.map((e, n) =>
                                                          (0, r.jsx)(
                                                              'div',
                                                              {
                                                                  className: C.subListItem,
                                                                  children: p.hQ(e, t)
                                                              },
                                                              n
                                                          )
                                                      )
                                                    : null;
                                            })(s, t);
                                        if ((t.action === R.rsA.CHANNEL_UPDATE || t.action === R.rsA.THREAD_UPDATE) && s.key === R.zUn.FLAGS)
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
                                                                    children: p.cT(e)
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
                                                                    children: p.em(e)
                                                                },
                                                                e
                                                            )
                                                        )
                                                    )),
                                                l.length > 0)
                                                    ? l
                                                    : null;
                                            })(s);
                                        if ((t.action === R.rsA.ONBOARDING_PROMPT_UPDATE || t.action === R.rsA.ONBOARDING_PROMPT_CREATE) && s.key === R.zUn.OPTIONS)
                                            return (function (e, t, n) {
                                                let { newValue: l, oldValue: s } = e,
                                                    i = (e) => {
                                                        var t;
                                                        let r = null != n ? (null == (t = I.Z.getRole(n.id, e)) ? void 0 : t.name) : void 0;
                                                        return null == r ? null : '@'.concat(r);
                                                    },
                                                    a = (e) => {
                                                        var t;
                                                        let n = null == (t = m.Z.getChannel(e)) ? void 0 : t.name;
                                                        return null == n ? null : '#'.concat(n);
                                                    },
                                                    u = (e, n) => {
                                                        let { title: l, id: s } = n,
                                                            u = e.role_ids.map(i).filter(N.lm),
                                                            c = e.channel_ids.map(a).filter(N.lm),
                                                            E = n.role_ids.map(i).filter(N.lm),
                                                            _ = n.channel_ids.map(a).filter(N.lm),
                                                            A = o().difference(E, u),
                                                            T = o().difference(u, E),
                                                            m = o().difference(_, c),
                                                            I = o().difference(c, _),
                                                            g = [];
                                                        return (o().isEqual(e.title, n.title) || g.push('title'), o().isEqual(e.description, n.description) || g.push('description'), 0 === A.length && 0 === T.length && 0 === m.length && 0 === I.length && 0 === g.length)
                                                            ? null
                                                            : (0, r.jsxs)(
                                                                  'li',
                                                                  {
                                                                      children: [
                                                                          (0, r.jsxs)('div', {
                                                                              className: C.onboardingChangeLogItemTitle,
                                                                              children: [
                                                                                  (0, r.jsx)(x, {
                                                                                      actionType: R.vB8.UPDATE,
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
                                                                                  m.length > 0 &&
                                                                                      (0, r.jsx)(d.Text, {
                                                                                          variant: 'text-md/normal',
                                                                                          children: S.intl.format(S.t.iYowX1, { channels: m.join(', ') })
                                                                                      }),
                                                                                  I.length > 0 &&
                                                                                      (0, r.jsx)(d.Text, {
                                                                                          variant: 'text-md/normal',
                                                                                          children: S.intl.format(S.t.JLdJpK, { channels: I.join(', ') })
                                                                                      }),
                                                                                  g.map((t, l) =>
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
                                                                  s
                                                              );
                                                    },
                                                    c = o().keyBy(null != s ? s : [], 'id'),
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
                                                                let { role_ids: n, channel_ids: l, title: s, id: o } = e,
                                                                    u = (null != n ? n : []).map(i).filter(N.lm),
                                                                    c = (null != l ? l : []).map(a).filter(N.lm);
                                                                return (0, r.jsxs)(
                                                                    'li',
                                                                    {
                                                                        children: [
                                                                            (0, r.jsxs)('div', {
                                                                                className: C.onboardingChangeLogItemTitle,
                                                                                children: [
                                                                                    (0, r.jsx)(x, {
                                                                                        actionType: R.vB8.CREATE,
                                                                                        targetType: t.targetType,
                                                                                        action: t.action
                                                                                    }),
                                                                                    (0, r.jsx)(d.Text, {
                                                                                        variant: 'text-md/normal',
                                                                                        children: S.intl.format(S.t.CZ1tys, { title: s })
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
                                                                                (0, r.jsx)(x, {
                                                                                    actionType: R.vB8.DELETE,
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
                                            })(s, t, n);
                                        if (t.action === R.rsA.HOME_SETTINGS_CREATE || t.action === R.rsA.HOME_SETTINGS_UPDATE)
                                            return (function (e, t) {
                                                let { oldValue: n, newValue: l, key: s } = e,
                                                    { targetType: i, action: a } = t;
                                                switch (s) {
                                                    case R.zUn.WELCOME_MESSAGE:
                                                        return ((e, t) => {
                                                            var n, l, s, i, a;
                                                            let o = g.default.getUser(null == t || null == (n = t.author_ids) ? void 0 : n[0]),
                                                                u = g.default.getUser(null == (l = e.author_ids) ? void 0 : l[0]),
                                                                c =
                                                                    (null == o ? void 0 : o.id) !== (null == u ? void 0 : u.id)
                                                                        ? (0, r.jsx)('li', {
                                                                              children: (0, r.jsx)('div', {
                                                                                  className: C.onboardingChangeLogItemTitle,
                                                                                  children: (0, r.jsx)(d.Text, {
                                                                                      variant: 'text-md/normal',
                                                                                      children: S.intl.format(S.t.PrOzAw, {
                                                                                          oldUser: null != (s = null == o ? void 0 : o.username) ? s : S.intl.string(S.t.PoWNfX),
                                                                                          newUser: null != (i = null == u ? void 0 : u.username) ? i : S.intl.string(S.t.PoWNfX)
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
                                                    case R.zUn.NEW_MEMBER_ACTIONS:
                                                        return ((e, t) => {
                                                            let n = e.map((e) => e.channel_id),
                                                                l = t.map((e) => e.channel_id),
                                                                s = o().difference(l, n),
                                                                u = o().difference(n, l),
                                                                c = t.filter((e) => s.includes(e.channel_id)),
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
                                                                                        (0, r.jsx)(x, {
                                                                                            actionType: R.vB8.CREATE,
                                                                                            targetType: i,
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
                                                                                        (0, r.jsx)(x, {
                                                                                            actionType: R.vB8.DELETE,
                                                                                            targetType: i,
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
                                                    case R.zUn.RESOURCE_CHANNELS:
                                                        return ((e, t) => {
                                                            let n = e.map((e) => e.channel_id),
                                                                l = t.map((e) => e.channel_id),
                                                                s = o().difference(l, n),
                                                                u = o().difference(n, l),
                                                                c = t.filter((e) => s.includes(e.channel_id)),
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
                                                                                        (0, r.jsx)(x, {
                                                                                            actionType: R.vB8.CREATE,
                                                                                            targetType: i,
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
                                                                                        (0, r.jsx)(x, {
                                                                                            actionType: R.vB8.DELETE,
                                                                                            targetType: i,
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
                                            })(s, t);
                                        return null;
                                    })(),
                                    h = e[s.key];
                                return (function (e) {
                                    var t, n;
                                    let { changeItem: s, subChanges: i, changeNumber: a, log: o, oldValue: u, newValue: c, change: A } = e;
                                    if (null == s) return (console.warn('No change string for', A), null);
                                    let m = S.intl.format(s, {
                                        oldValue: u,
                                        newValue: c,
                                        count: Array.isArray(c) ? c.length : null,
                                        subtarget: null != (n = null != (t = o.options.subtarget) ? t : A.subtarget) ? n : null,
                                        newColorHook: (e, t) => L(t, A.newValue),
                                        newColorsHook: (e, t) => {
                                            let { primary_color: n, secondary_color: s, tertiary_color: i } = c;
                                            return (0, r.jsx)(
                                                'span',
                                                {
                                                    children: [n, s, i].filter(N.lm).map((e, n) =>
                                                        (0, r.jsxs)(
                                                            l.Fragment,
                                                            {
                                                                children: [
                                                                    (0, r.jsx)('span', {
                                                                        className: C.colorsHook,
                                                                        children: ''.concat(n > 0 ? ', ' : '').concat((0, E.Rf)(e).toUpperCase(), ' ')
                                                                    }),
                                                                    L(t, (0, E.Rf)(e))
                                                                ]
                                                            },
                                                            n
                                                        )
                                                    )
                                                },
                                                t
                                            );
                                        },
                                        oldColorHook: (e, t) => L(t, A.oldValue),
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
                                            return (0, r.jsx)(b, { applicationId: null != (n = null == u ? void 0 : u.application_id) ? n : null == c ? void 0 : c.application_id }, t);
                                        }
                                    });
                                    return null == m
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
                                                                  case R.vB8.CREATE:
                                                                      return 'text-feedback-positive';
                                                                  case R.vB8.DELETE:
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
                                                                  children: m
                                                              }),
                                                              null != i ? (0, r.jsx)('div', { children: i }) : null
                                                          ]
                                                      })
                                                  ]
                                              },
                                              a
                                          );
                                })({
                                    changeItem: 'function' == typeof h ? h(s) : h,
                                    subChanges: A,
                                    changeNumber: ++u,
                                    log: t,
                                    oldValue: i,
                                    newValue: a,
                                    change: s
                                });
                            })
                        )
                        .filter(N.lm);
                return (0, r.jsx)(d.P3F, {
                    onClick: s,
                    className: i()(C.changeDetails, a),
                    children: A
                });
            },
            [t, n, s, a]
        );
    return l.useMemo(() => {
        switch (t.targetType) {
            case R.KFR.GUILD:
                return u(p.pY());
            case R.KFR.CHANNEL:
            case R.KFR.CHANNEL_OVERWRITE:
                return u(p.ML());
            case R.KFR.USER:
                return u(p.lU());
            case R.KFR.ROLE:
                return u(p.HE());
            case R.KFR.ONBOARDING_PROMPT:
                return u(p.oD());
            case R.KFR.GUILD_ONBOARDING:
                return u(p.EN());
            case R.KFR.HOME_SETTINGS:
                return u(p.hx());
            case R.KFR.INVITE:
                return u(p.HN());
            case R.KFR.WEBHOOK:
                return u(p.lR());
            case R.KFR.EMOJI:
                return u(p.N$());
            case R.KFR.STICKER:
                return u(p.Bq());
            case R.KFR.INTEGRATION:
                return u(p.K());
            case R.KFR.STAGE_INSTANCE:
                return u(p.C2());
            case R.KFR.GUILD_SCHEDULED_EVENT:
                return u(p.uB());
            case R.KFR.GUILD_SCHEDULED_EVENT_EXCEPTION:
                return u(p.pi());
            case R.KFR.THREAD:
                return u(p.pA());
            case R.KFR.APPLICATION_COMMAND:
                return u(p.vm(t.changes));
            case R.KFR.AUTO_MODERATION_RULE:
                return u(p.rK());
            case R.KFR.GUILD_SOUNDBOARD:
                return u(p.C0());
            case R.KFR.VOICE_CHANNEL_STATUS:
                return u(p.F1());
            case R.KFR.GUILD_MEMBER_VERIFICATION:
                return u(p.JA());
            case R.KFR.GUILD_PROFILE:
                return u(p.zT());
        }
    }, [t.targetType, t.changes, u]);
}
