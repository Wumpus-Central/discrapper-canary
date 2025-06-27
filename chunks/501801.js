n.d(t, {
    mp: () => v,
    tP: () => b,
    xO: () => D
}),
    n(539854),
    n(953529);
var r = n(255367),
    l = n(73800),
    s = n(120356),
    i = n.n(s),
    a = n(392711),
    o = n.n(a),
    E = n(913527),
    c = n.n(E),
    u = n(866442),
    _ = n(481060),
    d = n(596454),
    A = n(835473),
    T = n(479099),
    I = n(592125),
    O = n(485386),
    N = n(594174),
    R = n(934415),
    g = n(823379),
    f = n(624138),
    S = n(51144),
    h = n(909746),
    p = n(981631),
    U = n(388032),
    L = n(677234);
function D(e, t) {
    let n = h.vc[e.targetType];
    return null != n && !0 === n[t.key];
}
let C = {
    [p.vB8.CREATE]: L.typeCreate,
    [p.vB8.UPDATE]: L.typeUpdate,
    [p.vB8.DELETE]: L.typeDelete
};
function M(e) {
    let { applicationId: t } = e,
        n = (0, A.q)(t);
    return null == n
        ? null
        : (0, r.jsx)(_.Text, {
              variant: 'text-md/normal',
              children: n.name
          });
}
function m(e, t) {
    return (0, r.jsx)(
        'div',
        {
            className: L.colorHook,
            style: { backgroundColor: t }
        },
        e
    );
}
class v extends l.PureComponent {
    render() {
        let { actionType: e, targetType: t, action: n, themeOverride: l } = this.props,
            s = null != l ? L['themeOverride'.concat((0, f.De)(l))] : null,
            a = i()(
                L.icon,
                C[e],
                n === p.rsA.MESSAGE_DELETE
                    ? L.targetMessage
                    : n === p.rsA.AUTO_MODERATION_BLOCK_MESSAGE || n === p.rsA.AUTO_MODERATION_FLAG_TO_CHANNEL || n === p.rsA.AUTO_MODERATION_USER_COMMUNICATION_DISABLED || n === p.rsA.AUTO_MODERATION_QUARANTINE_USER
                      ? L.autoModerationBlockMessage
                      : {
                            [p.KFR.ALL]: L.targetAll,
                            [p.KFR.GUILD]: L.targetGuild,
                            [p.KFR.CHANNEL]: L.targetChannel,
                            [p.KFR.CHANNEL_OVERWRITE]: L.targetChannel,
                            [p.KFR.USER]: L.targetMember,
                            [p.KFR.ROLE]: L.targetRole,
                            [p.KFR.ONBOARDING_PROMPT]: L.targetOnboarding,
                            [p.KFR.GUILD_ONBOARDING]: L.targetOnboarding,
                            [p.KFR.HOME_SETTINGS]: L.targetOnboarding,
                            [p.KFR.INTEGRATION]: L.targetIntegration,
                            [p.KFR.INVITE]: L.targetInvite,
                            [p.KFR.WEBHOOK]: L.targetWebhook,
                            [p.KFR.EMOJI]: L.targetEmoji,
                            [p.KFR.STICKER]: L.targetSticker,
                            [p.KFR.STAGE_INSTANCE]: L.targetStageInstance,
                            [p.KFR.GUILD_SCHEDULED_EVENT]: L.targetGuildScheduledEvent,
                            [p.KFR.GUILD_SCHEDULED_EVENT_EXCEPTION]: L.targetGuildScheduledEvent,
                            [p.KFR.THREAD]: L.thread,
                            [p.KFR.APPLICATION_COMMAND]: L.applicationCommand,
                            [p.KFR.AUTO_MODERATION_RULE]: L.autoModerationRule,
                            [p.KFR.GUILD_HOME]: L.targetGuildHome,
                            [p.KFR.GUILD_SOUNDBOARD]: L.targetGuildSoundboard,
                            [p.KFR.VOICE_CHANNEL_STATUS]: L.targetChannel,
                            [p.KFR.GUILD_MEMBER_VERIFICATION]: L.targetMember,
                            [p.KFR.GUILD_PROFILE]: L.targetGuild
                        }[t],
                s
            );
        return (0, r.jsx)('div', { className: a });
    }
}
function b(e) {
    let { log: t, guild: n, onContentClick: s, className: a } = e,
        E = l.useCallback(
            (e) => {
                if (null == t.changes) return null;
                let E = 0,
                    A = o()
                        .flatten(
                            t.changes.map((s) => {
                                if (D(t, s)) return null;
                                let { oldValue: i, newValue: a } = (() => {
                                        if ((t.action === p.rsA.CHANNEL_UPDATE || t.action === p.rsA.CHANNEL_CREATE) && s.key === p.zUn.TYPE) {
                                            var e, n;
                                            return {
                                                oldValue: null != (e = s.oldValue) ? e : (0, R.a5)({ type: s.oldValue }),
                                                newValue: null != (n = s.newValue) ? n : (0, R.a5)({ type: s.newValue })
                                            };
                                        }
                                        if (t.action === p.rsA.MEMBER_UPDATE && s.key === p.zUn.COMMUNICATION_DISABLED_UNTIL) {
                                            let e = c()(s.newValue);
                                            return {
                                                oldValue: s.oldValue,
                                                newValue: e.isValid() ? e.calendar() : s.newValue
                                            };
                                        }
                                        return t.action === p.rsA.GUILD_UPDATE && s.key === p.zUn.OWNER_ID
                                            ? {
                                                  oldValue: S.ZP.getUserTag(s.oldValue, { mode: 'username' }),
                                                  newValue: S.ZP.getUserTag(s.newValue, { mode: 'username' })
                                              }
                                            : s;
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
                                                                  className: L.subListItem,
                                                                  children: e.name
                                                              },
                                                              e.id
                                                          )
                                                      )
                                                    : null;
                                            })(s);
                                        if (t.targetType === p.KFR.ROLE || t.action === p.rsA.CHANNEL_OVERWRITE_CREATE || t.action === p.rsA.CHANNEL_OVERWRITE_UPDATE)
                                            return (function (e, t) {
                                                let { newValue: n } = e;
                                                return Array.isArray(n)
                                                    ? n.map((e, n) =>
                                                          (0, r.jsx)(
                                                              'div',
                                                              {
                                                                  className: L.subListItem,
                                                                  children: h.hQ(e, t)
                                                              },
                                                              n
                                                          )
                                                      )
                                                    : null;
                                            })(s, t);
                                        if ((t.action === p.rsA.CHANNEL_UPDATE || t.action === p.rsA.THREAD_UPDATE) && s.key === p.zUn.FLAGS)
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
                                                                    children: h.cT(e)
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
                                                                    children: h.em(e)
                                                                },
                                                                e
                                                            )
                                                        )
                                                    )),
                                                l.length > 0)
                                                    ? l
                                                    : null;
                                            })(s);
                                        if ((t.action === p.rsA.ONBOARDING_PROMPT_UPDATE || t.action === p.rsA.ONBOARDING_PROMPT_CREATE) && s.key === p.zUn.OPTIONS)
                                            return (function (e, t, n) {
                                                let { newValue: l, oldValue: s } = e,
                                                    i = (e) => {
                                                        var t;
                                                        let r = null != n ? (null == (t = O.Z.getRole(n.id, e)) ? void 0 : t.name) : void 0;
                                                        return null == r ? null : '@'.concat(r);
                                                    },
                                                    a = (e) => {
                                                        var t;
                                                        let n = null == (t = I.Z.getChannel(e)) ? void 0 : t.name;
                                                        return null == n ? null : '#'.concat(n);
                                                    },
                                                    E = (e, n) => {
                                                        let { title: l, id: s } = n,
                                                            E = e.role_ids.map(i).filter(g.lm),
                                                            c = e.channel_ids.map(a).filter(g.lm),
                                                            u = n.role_ids.map(i).filter(g.lm),
                                                            d = n.channel_ids.map(a).filter(g.lm),
                                                            A = o().difference(u, E),
                                                            T = o().difference(E, u),
                                                            I = o().difference(d, c),
                                                            O = o().difference(c, d),
                                                            N = [];
                                                        return (o().isEqual(e.title, n.title) || N.push('title'), o().isEqual(e.description, n.description) || N.push('description'), 0 === A.length && 0 === T.length && 0 === I.length && 0 === O.length && 0 === N.length)
                                                            ? null
                                                            : (0, r.jsxs)(
                                                                  'li',
                                                                  {
                                                                      children: [
                                                                          (0, r.jsxs)('div', {
                                                                              className: L.onboardingChangeLogItemTitle,
                                                                              children: [
                                                                                  (0, r.jsx)(v, {
                                                                                      actionType: p.vB8.UPDATE,
                                                                                      targetType: t.targetType,
                                                                                      action: t.action
                                                                                  }),
                                                                                  (0, r.jsx)(_.Text, {
                                                                                      variant: 'text-md/normal',
                                                                                      children: U.intl.format(U.t['WZO+iY'], { title: l })
                                                                                  })
                                                                              ]
                                                                          }),
                                                                          (0, r.jsxs)('div', {
                                                                              className: L.onboardingChangeLogItemChanges,
                                                                              children: [
                                                                                  A.length > 0 &&
                                                                                      (0, r.jsx)(_.Text, {
                                                                                          variant: 'text-md/normal',
                                                                                          children: U.intl.format(U.t['R+km+f'], { roles: A.join(', ') })
                                                                                      }),
                                                                                  T.length > 0 &&
                                                                                      (0, r.jsx)(_.Text, {
                                                                                          variant: 'text-md/normal',
                                                                                          children: U.intl.format(U.t.xIVRoa, { roles: T.join(', ') })
                                                                                      }),
                                                                                  I.length > 0 &&
                                                                                      (0, r.jsx)(_.Text, {
                                                                                          variant: 'text-md/normal',
                                                                                          children: U.intl.format(U.t.iYowX1, { channels: I.join(', ') })
                                                                                      }),
                                                                                  O.length > 0 &&
                                                                                      (0, r.jsx)(_.Text, {
                                                                                          variant: 'text-md/normal',
                                                                                          children: U.intl.format(U.t.JLdJpK, { channels: O.join(', ') })
                                                                                      }),
                                                                                  N.map((t, l) =>
                                                                                      (0, r.jsx)(
                                                                                          _.Text,
                                                                                          {
                                                                                              variant: 'text-md/normal',
                                                                                              children: U.intl.format(U.t['0698zc'], {
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
                                                    u = o().keyBy(null != l ? l : [], 'id'),
                                                    d = o()
                                                        .difference(Object.keys(u), Object.keys(c))
                                                        .map((e) => u[e]),
                                                    A = o()
                                                        .difference(Object.keys(c), Object.keys(u))
                                                        .map((e) => c[e]),
                                                    T = o().intersection(Object.keys(u), Object.keys(c));
                                                return (0, r.jsxs)(
                                                    'ul',
                                                    {
                                                        className: L.onboardingChangeLogContainer,
                                                        children: [
                                                            d.map((e) => {
                                                                let { role_ids: n, channel_ids: l, title: s, id: o } = e,
                                                                    E = (null != n ? n : []).map(i).filter(g.lm),
                                                                    c = (null != l ? l : []).map(a).filter(g.lm);
                                                                return (0, r.jsxs)(
                                                                    'li',
                                                                    {
                                                                        children: [
                                                                            (0, r.jsxs)('div', {
                                                                                className: L.onboardingChangeLogItemTitle,
                                                                                children: [
                                                                                    (0, r.jsx)(v, {
                                                                                        actionType: p.vB8.CREATE,
                                                                                        targetType: t.targetType,
                                                                                        action: t.action
                                                                                    }),
                                                                                    (0, r.jsx)(_.Text, {
                                                                                        variant: 'text-md/normal',
                                                                                        children: U.intl.format(U.t.CZ1tys, { title: s })
                                                                                    })
                                                                                ]
                                                                            }),
                                                                            (0, r.jsxs)('div', {
                                                                                className: L.onboardingChangeLogItemChanges,
                                                                                children: [
                                                                                    E.length > 0 &&
                                                                                        (0, r.jsx)(_.Text, {
                                                                                            variant: 'text-md/normal',
                                                                                            children: U.intl.format(U.t['gt/5z8'], { roles: E.join(', ') })
                                                                                        }),
                                                                                    c.length > 0 &&
                                                                                        (0, r.jsx)(_.Text, {
                                                                                            variant: 'text-md/normal',
                                                                                            children: U.intl.format(U.t['4q006e'], { channels: c.join(', ') })
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
                                                                                (0, r.jsx)(v, {
                                                                                    actionType: p.vB8.DELETE,
                                                                                    targetType: t.targetType,
                                                                                    action: t.action
                                                                                }),
                                                                                (0, r.jsx)(_.Text, {
                                                                                    variant: 'text-md/normal',
                                                                                    children: U.intl.format(U.t['m3dt+P'], { title: e.title })
                                                                                })
                                                                            ]
                                                                        })
                                                                    },
                                                                    e.id
                                                                )
                                                            ),
                                                            T.map((e) => E(c[e], u[e]))
                                                        ]
                                                    },
                                                    'options'
                                                );
                                            })(s, t, n);
                                        if (t.action === p.rsA.HOME_SETTINGS_CREATE || t.action === p.rsA.HOME_SETTINGS_UPDATE)
                                            return (function (e, t) {
                                                let { oldValue: n, newValue: l, key: s } = e,
                                                    { targetType: i, action: a } = t;
                                                switch (s) {
                                                    case p.zUn.WELCOME_MESSAGE:
                                                        return ((e, t) => {
                                                            var n, l, s, i, a;
                                                            let o = N.default.getUser(null == t || null == (n = t.author_ids) ? void 0 : n[0]),
                                                                E = N.default.getUser(null == (l = e.author_ids) ? void 0 : l[0]),
                                                                c =
                                                                    (null == o ? void 0 : o.id) !== (null == E ? void 0 : E.id)
                                                                        ? (0, r.jsx)('li', {
                                                                              children: (0, r.jsx)('div', {
                                                                                  className: L.onboardingChangeLogItemTitle,
                                                                                  children: (0, r.jsx)(_.Text, {
                                                                                      variant: 'text-md/normal',
                                                                                      children: U.intl.format(U.t.PrOzAw, {
                                                                                          oldUser: null != (s = null == o ? void 0 : o.username) ? s : U.intl.string(U.t.PoWNfX),
                                                                                          newUser: null != (i = null == E ? void 0 : E.username) ? i : U.intl.string(U.t.PoWNfX)
                                                                                      })
                                                                                  })
                                                                              })
                                                                          })
                                                                        : null,
                                                                u =
                                                                    (null == t ? void 0 : t.message) !== e.message
                                                                        ? (0, r.jsx)('li', {
                                                                              children: (0, r.jsx)('div', {
                                                                                  className: L.onboardingChangeLogItemTitle,
                                                                                  children: (0, r.jsx)(_.Text, {
                                                                                      variant: 'text-md/normal',
                                                                                      children: U.intl.format(U.t.oB7rBQ, {
                                                                                          oldMessage: null != (a = null == t ? void 0 : t.message) ? a : U.intl.string(U.t.PoWNfX),
                                                                                          newMessage: e.message
                                                                                      })
                                                                                  })
                                                                              })
                                                                          })
                                                                        : null;
                                                            return (0, r.jsxs)('ul', {
                                                                children: [c, u]
                                                            });
                                                        })(l, n);
                                                    case p.zUn.NEW_MEMBER_ACTIONS:
                                                        return ((e, t) => {
                                                            let n = e.map((e) => e.channel_id),
                                                                l = t.map((e) => e.channel_id),
                                                                s = o().difference(l, n),
                                                                E = o().difference(n, l),
                                                                c = t.filter((e) => s.includes(e.channel_id)),
                                                                u = e.filter((e) => E.includes(e.channel_id));
                                                            return (0, r.jsxs)('ul', {
                                                                children: [
                                                                    c.map((e) =>
                                                                        (0, r.jsx)(
                                                                            'li',
                                                                            {
                                                                                children: (0, r.jsxs)('div', {
                                                                                    className: L.onboardingChangeLogItemTitle,
                                                                                    children: [
                                                                                        (0, r.jsx)(v, {
                                                                                            actionType: p.vB8.CREATE,
                                                                                            targetType: i,
                                                                                            action: a
                                                                                        }),
                                                                                        (0, r.jsx)(_.Text, {
                                                                                            variant: 'text-md/normal',
                                                                                            children: U.intl.format(U.t['oFSu6+'], { name: e.title })
                                                                                        })
                                                                                    ]
                                                                                })
                                                                            },
                                                                            e.channel_id
                                                                        )
                                                                    ),
                                                                    u.map((e) =>
                                                                        (0, r.jsx)(
                                                                            'li',
                                                                            {
                                                                                children: (0, r.jsxs)('div', {
                                                                                    className: L.onboardingChangeLogItemTitle,
                                                                                    children: [
                                                                                        (0, r.jsx)(v, {
                                                                                            actionType: p.vB8.DELETE,
                                                                                            targetType: i,
                                                                                            action: a
                                                                                        }),
                                                                                        (0, r.jsx)(_.Text, {
                                                                                            variant: 'text-md/normal',
                                                                                            children: U.intl.format(U.t.GssWam, { name: e.title })
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
                                                                s = o().difference(l, n),
                                                                E = o().difference(n, l),
                                                                c = t.filter((e) => s.includes(e.channel_id)),
                                                                u = e.filter((e) => E.includes(e.channel_id));
                                                            return (0, r.jsxs)('ul', {
                                                                children: [
                                                                    c.map((e) =>
                                                                        (0, r.jsx)(
                                                                            'li',
                                                                            {
                                                                                children: (0, r.jsxs)('div', {
                                                                                    className: L.onboardingChangeLogItemTitle,
                                                                                    children: [
                                                                                        (0, r.jsx)(v, {
                                                                                            actionType: p.vB8.CREATE,
                                                                                            targetType: i,
                                                                                            action: a
                                                                                        }),
                                                                                        (0, r.jsx)(_.Text, {
                                                                                            variant: 'text-md/normal',
                                                                                            children: U.intl.format(U.t.HlGndH, { name: e.title })
                                                                                        })
                                                                                    ]
                                                                                })
                                                                            },
                                                                            e.channel_id
                                                                        )
                                                                    ),
                                                                    u.map((e) =>
                                                                        (0, r.jsx)(
                                                                            'li',
                                                                            {
                                                                                children: (0, r.jsxs)('div', {
                                                                                    className: L.onboardingChangeLogItemTitle,
                                                                                    children: [
                                                                                        (0, r.jsx)(v, {
                                                                                            actionType: p.vB8.DELETE,
                                                                                            targetType: i,
                                                                                            action: a
                                                                                        }),
                                                                                        (0, r.jsx)(_.Text, {
                                                                                            variant: 'text-md/normal',
                                                                                            children: U.intl.format(U.t['7pysg4'], { name: e.title })
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
                                    f = e[s.key];
                                return (function (e) {
                                    var t, n;
                                    let { changeItem: s, subChanges: i, changeNumber: a, log: o, oldValue: E, newValue: c, change: A } = e;
                                    if (null == s) return console.warn('No change string for', A), null;
                                    let I = U.intl.format(s, {
                                        oldValue: E,
                                        newValue: c,
                                        count: Array.isArray(c) ? c.length : null,
                                        subtarget: null != (n = null != (t = o.options.subtarget) ? t : A.subtarget) ? n : null,
                                        newColorHook: (e, t) => m(t, A.newValue),
                                        newColorsHook: (e, t) => {
                                            let { primary_color: n, secondary_color: s, tertiary_color: i } = c;
                                            return (0, r.jsx)(
                                                'span',
                                                {
                                                    children: [n, s, i].filter(g.lm).map((e, n) =>
                                                        (0, r.jsxs)(
                                                            l.Fragment,
                                                            {
                                                                children: [
                                                                    (0, r.jsx)('span', {
                                                                        className: L.colorsHook,
                                                                        children: ''.concat(n > 0 ? ', ' : '').concat((0, u.Rf)(e).toUpperCase(), ' ')
                                                                    }),
                                                                    m(t, (0, u.Rf)(e))
                                                                ]
                                                            },
                                                            n
                                                        )
                                                    )
                                                },
                                                t
                                            );
                                        },
                                        oldColorHook: (e, t) => m(t, A.oldValue),
                                        oldTagHook: (e, t) =>
                                            (0, r.jsx)(
                                                T.Z,
                                                {
                                                    tag: E,
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
                                        oldEmojiHook: (e, t) => (0, r.jsx)(d.Z, { emojiId: E }, t),
                                        newEmojiHook: (e, t) => (0, r.jsx)(d.Z, { emojiId: c }, t),
                                        applicationHook: (e, t) => {
                                            var n;
                                            return (0, r.jsx)(M, { applicationId: null != (n = null == E ? void 0 : E.application_id) ? n : null == c ? void 0 : c.application_id }, t);
                                        }
                                    });
                                    return null == I
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
                                                      (0, r.jsxs)(_.Text, {
                                                          className: L.prefix,
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
                                                                  children: I
                                                              }),
                                                              null != i ? (0, r.jsx)('div', { children: i }) : null
                                                          ]
                                                      })
                                                  ]
                                              },
                                              a
                                          );
                                })({
                                    changeItem: 'function' == typeof f ? f(s) : f,
                                    subChanges: A,
                                    changeNumber: ++E,
                                    log: t,
                                    oldValue: i,
                                    newValue: a,
                                    change: s
                                });
                            })
                        )
                        .filter(g.lm);
                return (0, r.jsx)(_.P3F, {
                    onClick: s,
                    className: i()(L.changeDetails, a),
                    children: A
                });
            },
            [t, n, s, a]
        );
    return l.useMemo(() => {
        switch (t.targetType) {
            case p.KFR.GUILD:
                return E(h.pY());
            case p.KFR.CHANNEL:
            case p.KFR.CHANNEL_OVERWRITE:
                return E(h.ML());
            case p.KFR.USER:
                return E(h.lU());
            case p.KFR.ROLE:
                return E(h.HE());
            case p.KFR.ONBOARDING_PROMPT:
                return E(h.oD());
            case p.KFR.GUILD_ONBOARDING:
                return E(h.EN());
            case p.KFR.HOME_SETTINGS:
                return E(h.hx());
            case p.KFR.INVITE:
                return E(h.HN());
            case p.KFR.WEBHOOK:
                return E(h.lR());
            case p.KFR.EMOJI:
                return E(h.N$());
            case p.KFR.STICKER:
                return E(h.Bq());
            case p.KFR.INTEGRATION:
                return E(h.K());
            case p.KFR.STAGE_INSTANCE:
                return E(h.C2());
            case p.KFR.GUILD_SCHEDULED_EVENT:
                return E(h.uB());
            case p.KFR.GUILD_SCHEDULED_EVENT_EXCEPTION:
                return E(h.pi());
            case p.KFR.THREAD:
                return E(h.pA());
            case p.KFR.APPLICATION_COMMAND:
                return E(h.vm(t.changes));
            case p.KFR.AUTO_MODERATION_RULE:
                return E(h.rK());
            case p.KFR.GUILD_SOUNDBOARD:
                return E(h.C0());
            case p.KFR.VOICE_CHANNEL_STATUS:
                return E(h.F1());
            case p.KFR.GUILD_MEMBER_VERIFICATION:
                return E(h.JA());
            case p.KFR.GUILD_PROFILE:
                return E(h.zT());
        }
    }, [t.targetType, t.changes, E]);
}
