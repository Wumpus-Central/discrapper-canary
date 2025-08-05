(n.d(t, {
    mp: () => b,
    tP: () => M,
    xO: () => D
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
    N = n(934415),
    O = n(823379),
    f = n(624138),
    R = n(51144),
    S = n(909746),
    C = n(981631),
    h = n(388032),
    p = n(677234);
function D(e, t) {
    let n = S.vc[e.targetType];
    return null != n && !0 === n[t.key];
}
let U = {
    [C.vB8.CREATE]: p.typeCreate,
    [C.vB8.UPDATE]: p.typeUpdate,
    [C.vB8.DELETE]: p.typeDelete
};
function L(e) {
    let { applicationId: t } = e,
        n = (0, A.q)(t);
    return null == n
        ? null
        : (0, r.jsx)(d.Text, {
              variant: 'text-md/normal',
              children: n.name
          });
}
function v(e, t) {
    return (0, r.jsx)(
        'div',
        {
            className: p.colorHook,
            style: { backgroundColor: t }
        },
        e
    );
}
class b extends l.PureComponent {
    render() {
        let { actionType: e, targetType: t, action: n, themeOverride: l } = this.props,
            i = null != l ? p['themeOverride'.concat((0, f.De)(l))] : null,
            a = s()(
                p.icon,
                U[e],
                n === C.rsA.MESSAGE_DELETE
                    ? p.targetMessage
                    : n === C.rsA.AUTO_MODERATION_BLOCK_MESSAGE || n === C.rsA.AUTO_MODERATION_FLAG_TO_CHANNEL || n === C.rsA.AUTO_MODERATION_USER_COMMUNICATION_DISABLED || n === C.rsA.AUTO_MODERATION_QUARANTINE_USER
                      ? p.autoModerationBlockMessage
                      : {
                            [C.KFR.ALL]: p.targetAll,
                            [C.KFR.GUILD]: p.targetGuild,
                            [C.KFR.CHANNEL]: p.targetChannel,
                            [C.KFR.CHANNEL_OVERWRITE]: p.targetChannel,
                            [C.KFR.USER]: p.targetMember,
                            [C.KFR.ROLE]: p.targetRole,
                            [C.KFR.ONBOARDING_PROMPT]: p.targetOnboarding,
                            [C.KFR.GUILD_ONBOARDING]: p.targetOnboarding,
                            [C.KFR.HOME_SETTINGS]: p.targetOnboarding,
                            [C.KFR.INTEGRATION]: p.targetIntegration,
                            [C.KFR.INVITE]: p.targetInvite,
                            [C.KFR.WEBHOOK]: p.targetWebhook,
                            [C.KFR.EMOJI]: p.targetEmoji,
                            [C.KFR.STICKER]: p.targetSticker,
                            [C.KFR.STAGE_INSTANCE]: p.targetStageInstance,
                            [C.KFR.GUILD_SCHEDULED_EVENT]: p.targetGuildScheduledEvent,
                            [C.KFR.GUILD_SCHEDULED_EVENT_EXCEPTION]: p.targetGuildScheduledEvent,
                            [C.KFR.THREAD]: p.thread,
                            [C.KFR.APPLICATION_COMMAND]: p.applicationCommand,
                            [C.KFR.AUTO_MODERATION_RULE]: p.autoModerationRule,
                            [C.KFR.GUILD_HOME]: p.targetGuildHome,
                            [C.KFR.GUILD_SOUNDBOARD]: p.targetGuildSoundboard,
                            [C.KFR.VOICE_CHANNEL_STATUS]: p.targetChannel,
                            [C.KFR.GUILD_MEMBER_VERIFICATION]: p.targetMember,
                            [C.KFR.GUILD_PROFILE]: p.targetGuild
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
                                if (D(t, i)) return null;
                                let { oldValue: s, newValue: a } = (() => {
                                        if ((t.action === C.rsA.CHANNEL_UPDATE || t.action === C.rsA.CHANNEL_CREATE) && i.key === C.zUn.TYPE) {
                                            var e, n;
                                            return {
                                                oldValue: null != (e = i.oldValue) ? e : (0, N.a5)({ type: i.oldValue }),
                                                newValue: null != (n = i.newValue) ? n : (0, N.a5)({ type: i.newValue })
                                            };
                                        }
                                        if (t.action === C.rsA.MEMBER_UPDATE && i.key === C.zUn.COMMUNICATION_DISABLED_UNTIL) {
                                            let e = c()(i.newValue);
                                            return {
                                                oldValue: i.oldValue,
                                                newValue: e.isValid() ? e.calendar() : i.newValue
                                            };
                                        }
                                        return t.action === C.rsA.GUILD_UPDATE && i.key === C.zUn.OWNER_ID
                                            ? {
                                                  oldValue: R.ZP.getUserTag(i.oldValue, { mode: 'username' }),
                                                  newValue: R.ZP.getUserTag(i.newValue, { mode: 'username' })
                                              }
                                            : i;
                                    })(),
                                    A = (() => {
                                        if (t.action === C.rsA.MEMBER_ROLE_UPDATE)
                                            return (function (e) {
                                                let { newValue: t } = e;
                                                return Array.isArray(t)
                                                    ? t.map((e) =>
                                                          (0, r.jsx)(
                                                              'div',
                                                              {
                                                                  className: p.subListItem,
                                                                  children: e.name
                                                              },
                                                              e.id
                                                          )
                                                      )
                                                    : null;
                                            })(i);
                                        if (t.targetType === C.KFR.ROLE || t.action === C.rsA.CHANNEL_OVERWRITE_CREATE || t.action === C.rsA.CHANNEL_OVERWRITE_UPDATE)
                                            return (function (e, t) {
                                                let { newValue: n } = e;
                                                return Array.isArray(n)
                                                    ? n.map((e, n) =>
                                                          (0, r.jsx)(
                                                              'div',
                                                              {
                                                                  className: p.subListItem,
                                                                  children: S.hQ(e, t)
                                                              },
                                                              n
                                                          )
                                                      )
                                                    : null;
                                            })(i, t);
                                        if ((t.action === C.rsA.CHANNEL_UPDATE || t.action === C.rsA.THREAD_UPDATE) && i.key === C.zUn.FLAGS)
                                            return (function (e) {
                                                let { newValue: t, oldValue: n } = e,
                                                    l = [];
                                                return (Array.isArray(n) &&
                                                    (l = l.concat(
                                                        n.map((e) =>
                                                            (0, r.jsx)(
                                                                'div',
                                                                {
                                                                    className: p.subListItem,
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
                                                                    className: p.subListItem,
                                                                    children: S.em(e)
                                                                },
                                                                e
                                                            )
                                                        )
                                                    )),
                                                l.length > 0)
                                                    ? l
                                                    : null;
                                            })(i);
                                        if ((t.action === C.rsA.ONBOARDING_PROMPT_UPDATE || t.action === C.rsA.ONBOARDING_PROMPT_CREATE) && i.key === C.zUn.OPTIONS)
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
                                                                              className: p.onboardingChangeLogItemTitle,
                                                                              children: [
                                                                                  (0, r.jsx)(b, {
                                                                                      actionType: C.vB8.UPDATE,
                                                                                      targetType: t.targetType,
                                                                                      action: t.action
                                                                                  }),
                                                                                  (0, r.jsx)(d.Text, {
                                                                                      variant: 'text-md/normal',
                                                                                      children: h.intl.format(h.t['WZO+iY'], { title: l })
                                                                                  })
                                                                              ]
                                                                          }),
                                                                          (0, r.jsxs)('div', {
                                                                              className: p.onboardingChangeLogItemChanges,
                                                                              children: [
                                                                                  A.length > 0 &&
                                                                                      (0, r.jsx)(d.Text, {
                                                                                          variant: 'text-md/normal',
                                                                                          children: h.intl.format(h.t['R+km+f'], { roles: A.join(', ') })
                                                                                      }),
                                                                                  T.length > 0 &&
                                                                                      (0, r.jsx)(d.Text, {
                                                                                          variant: 'text-md/normal',
                                                                                          children: h.intl.format(h.t.xIVRoa, { roles: T.join(', ') })
                                                                                      }),
                                                                                  I.length > 0 &&
                                                                                      (0, r.jsx)(d.Text, {
                                                                                          variant: 'text-md/normal',
                                                                                          children: h.intl.format(h.t.iYowX1, { channels: I.join(', ') })
                                                                                      }),
                                                                                  g.length > 0 &&
                                                                                      (0, r.jsx)(d.Text, {
                                                                                          variant: 'text-md/normal',
                                                                                          children: h.intl.format(h.t.JLdJpK, { channels: g.join(', ') })
                                                                                      }),
                                                                                  m.map((t, l) =>
                                                                                      (0, r.jsx)(
                                                                                          d.Text,
                                                                                          {
                                                                                              variant: 'text-md/normal',
                                                                                              children: h.intl.format(h.t['0698zc'], {
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
                                                        className: p.onboardingChangeLogContainer,
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
                                                                                className: p.onboardingChangeLogItemTitle,
                                                                                children: [
                                                                                    (0, r.jsx)(b, {
                                                                                        actionType: C.vB8.CREATE,
                                                                                        targetType: t.targetType,
                                                                                        action: t.action
                                                                                    }),
                                                                                    (0, r.jsx)(d.Text, {
                                                                                        variant: 'text-md/normal',
                                                                                        children: h.intl.format(h.t.CZ1tys, { title: i })
                                                                                    })
                                                                                ]
                                                                            }),
                                                                            (0, r.jsxs)('div', {
                                                                                className: p.onboardingChangeLogItemChanges,
                                                                                children: [
                                                                                    u.length > 0 &&
                                                                                        (0, r.jsx)(d.Text, {
                                                                                            variant: 'text-md/normal',
                                                                                            children: h.intl.format(h.t['gt/5z8'], { roles: u.join(', ') })
                                                                                        }),
                                                                                    c.length > 0 &&
                                                                                        (0, r.jsx)(d.Text, {
                                                                                            variant: 'text-md/normal',
                                                                                            children: h.intl.format(h.t['4q006e'], { channels: c.join(', ') })
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
                                                                            className: p.onboardingChangeLogItemTitle,
                                                                            children: [
                                                                                (0, r.jsx)(b, {
                                                                                    actionType: C.vB8.DELETE,
                                                                                    targetType: t.targetType,
                                                                                    action: t.action
                                                                                }),
                                                                                (0, r.jsx)(d.Text, {
                                                                                    variant: 'text-md/normal',
                                                                                    children: h.intl.format(h.t['m3dt+P'], { title: e.title })
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
                                        if (t.action === C.rsA.HOME_SETTINGS_CREATE || t.action === C.rsA.HOME_SETTINGS_UPDATE)
                                            return (function (e, t) {
                                                let { oldValue: n, newValue: l, key: i } = e,
                                                    { targetType: s, action: a } = t;
                                                switch (i) {
                                                    case C.zUn.WELCOME_MESSAGE:
                                                        return ((e, t) => {
                                                            var n, l, i, s, a;
                                                            let o = m.default.getUser(null == t || null == (n = t.author_ids) ? void 0 : n[0]),
                                                                u = m.default.getUser(null == (l = e.author_ids) ? void 0 : l[0]),
                                                                c =
                                                                    (null == o ? void 0 : o.id) !== (null == u ? void 0 : u.id)
                                                                        ? (0, r.jsx)('li', {
                                                                              children: (0, r.jsx)('div', {
                                                                                  className: p.onboardingChangeLogItemTitle,
                                                                                  children: (0, r.jsx)(d.Text, {
                                                                                      variant: 'text-md/normal',
                                                                                      children: h.intl.format(h.t.PrOzAw, {
                                                                                          oldUser: null != (i = null == o ? void 0 : o.username) ? i : h.intl.string(h.t.PoWNfX),
                                                                                          newUser: null != (s = null == u ? void 0 : u.username) ? s : h.intl.string(h.t.PoWNfX)
                                                                                      })
                                                                                  })
                                                                              })
                                                                          })
                                                                        : null,
                                                                E =
                                                                    (null == t ? void 0 : t.message) !== e.message
                                                                        ? (0, r.jsx)('li', {
                                                                              children: (0, r.jsx)('div', {
                                                                                  className: p.onboardingChangeLogItemTitle,
                                                                                  children: (0, r.jsx)(d.Text, {
                                                                                      variant: 'text-md/normal',
                                                                                      children: h.intl.format(h.t.oB7rBQ, {
                                                                                          oldMessage: null != (a = null == t ? void 0 : t.message) ? a : h.intl.string(h.t.PoWNfX),
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
                                                    case C.zUn.NEW_MEMBER_ACTIONS:
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
                                                                                    className: p.onboardingChangeLogItemTitle,
                                                                                    children: [
                                                                                        (0, r.jsx)(b, {
                                                                                            actionType: C.vB8.CREATE,
                                                                                            targetType: s,
                                                                                            action: a
                                                                                        }),
                                                                                        (0, r.jsx)(d.Text, {
                                                                                            variant: 'text-md/normal',
                                                                                            children: h.intl.format(h.t['oFSu6+'], { name: e.title })
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
                                                                                    className: p.onboardingChangeLogItemTitle,
                                                                                    children: [
                                                                                        (0, r.jsx)(b, {
                                                                                            actionType: C.vB8.DELETE,
                                                                                            targetType: s,
                                                                                            action: a
                                                                                        }),
                                                                                        (0, r.jsx)(d.Text, {
                                                                                            variant: 'text-md/normal',
                                                                                            children: h.intl.format(h.t.GssWam, { name: e.title })
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
                                                    case C.zUn.RESOURCE_CHANNELS:
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
                                                                                    className: p.onboardingChangeLogItemTitle,
                                                                                    children: [
                                                                                        (0, r.jsx)(b, {
                                                                                            actionType: C.vB8.CREATE,
                                                                                            targetType: s,
                                                                                            action: a
                                                                                        }),
                                                                                        (0, r.jsx)(d.Text, {
                                                                                            variant: 'text-md/normal',
                                                                                            children: h.intl.format(h.t.HlGndH, { name: e.title })
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
                                                                                    className: p.onboardingChangeLogItemTitle,
                                                                                    children: [
                                                                                        (0, r.jsx)(b, {
                                                                                            actionType: C.vB8.DELETE,
                                                                                            targetType: s,
                                                                                            action: a
                                                                                        }),
                                                                                        (0, r.jsx)(d.Text, {
                                                                                            variant: 'text-md/normal',
                                                                                            children: h.intl.format(h.t['7pysg4'], { name: e.title })
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
                                    f = e[i.key];
                                return (function (e) {
                                    var t, n;
                                    let { changeItem: i, subChanges: s, changeNumber: a, log: o, oldValue: u, newValue: c, change: A } = e;
                                    if (null == i) return (console.warn('No change string for', A), null);
                                    let I = h.intl.format(i, {
                                        oldValue: u,
                                        newValue: c,
                                        count: Array.isArray(c) ? c.length : null,
                                        subtarget: null != (n = null != (t = o.options.subtarget) ? t : A.subtarget) ? n : null,
                                        newColorHook: (e, t) => v(t, A.newValue),
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
                                                                        className: p.colorsHook,
                                                                        children: ''.concat(n > 0 ? ', ' : '').concat((0, E.Rf)(e).toUpperCase(), ' ')
                                                                    }),
                                                                    v(t, (0, E.Rf)(e))
                                                                ]
                                                            },
                                                            n
                                                        )
                                                    )
                                                },
                                                t
                                            );
                                        },
                                        oldColorHook: (e, t) => v(t, A.oldValue),
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
                                            return (0, r.jsx)(L, { applicationId: null != (n = null == u ? void 0 : u.application_id) ? n : null == c ? void 0 : c.application_id }, t);
                                        }
                                    });
                                    return null == I
                                        ? null
                                        : (0, r.jsxs)(
                                              'div',
                                              {
                                                  className: p.detail,
                                                  style: {
                                                      position: 'relative',
                                                      top: 1
                                                  },
                                                  children: [
                                                      (0, r.jsxs)(d.Text, {
                                                          className: p.prefix,
                                                          variant: 'code',
                                                          color: (function (e) {
                                                              switch (e) {
                                                                  case C.vB8.CREATE:
                                                                      return 'text-feedback-positive';
                                                                  case C.vB8.DELETE:
                                                                      return 'status-danger';
                                                                  default:
                                                                      return 'text-feedback-warning';
                                                              }
                                                          })(o.actionType),
                                                          children: [
                                                              a < 10 ? '0'.concat(a) : a,
                                                              (0, r.jsx)('span', {
                                                                  className: p.dash,
                                                                  children: '\u2014'
                                                              })
                                                          ]
                                                      }),
                                                      (0, r.jsxs)('div', {
                                                          className: p.change,
                                                          children: [
                                                              (0, r.jsx)('div', {
                                                                  className: p.changeStr,
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
                                    changeItem: 'function' == typeof f ? f(i) : f,
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
                    className: s()(p.changeDetails, a),
                    children: A
                });
            },
            [t, n, i, a]
        );
    return l.useMemo(() => {
        switch (t.targetType) {
            case C.KFR.GUILD:
                return u(S.pY());
            case C.KFR.CHANNEL:
            case C.KFR.CHANNEL_OVERWRITE:
                return u(S.ML());
            case C.KFR.USER:
                return u(S.lU());
            case C.KFR.ROLE:
                return u(S.HE());
            case C.KFR.ONBOARDING_PROMPT:
                return u(S.oD());
            case C.KFR.GUILD_ONBOARDING:
                return u(S.EN());
            case C.KFR.HOME_SETTINGS:
                return u(S.hx());
            case C.KFR.INVITE:
                return u(S.HN());
            case C.KFR.WEBHOOK:
                return u(S.lR());
            case C.KFR.EMOJI:
                return u(S.N$());
            case C.KFR.STICKER:
                return u(S.Bq());
            case C.KFR.INTEGRATION:
                return u(S.K());
            case C.KFR.STAGE_INSTANCE:
                return u(S.C2());
            case C.KFR.GUILD_SCHEDULED_EVENT:
                return u(S.uB());
            case C.KFR.GUILD_SCHEDULED_EVENT_EXCEPTION:
                return u(S.pi());
            case C.KFR.THREAD:
                return u(S.pA());
            case C.KFR.APPLICATION_COMMAND:
                return u(S.vm(t.changes));
            case C.KFR.AUTO_MODERATION_RULE:
                return u(S.rK());
            case C.KFR.GUILD_SOUNDBOARD:
                return u(S.C0());
            case C.KFR.VOICE_CHANNEL_STATUS:
                return u(S.F1());
            case C.KFR.GUILD_MEMBER_VERIFICATION:
                return u(S.JA());
            case C.KFR.GUILD_PROFILE:
                return u(S.zT());
        }
    }, [t.targetType, t.changes, u]);
}
