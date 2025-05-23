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
    u = n.n(E),
    c = n(866442),
    _ = n(481060),
    d = n(596454),
    A = n(835473),
    T = n(479099),
    I = n(592125),
    O = n(430824),
    N = n(594174),
    R = n(934415),
    g = n(823379),
    f = n(624138),
    S = n(51144),
    h = n(909746),
    U = n(981631),
    p = n(388032),
    L = n(677234);
function D(e, t) {
    let n = h.vc[e.targetType];
    return null != n && !0 === n[t.key];
}
let C = {
    [U.vB8.CREATE]: L.typeCreate,
    [U.vB8.UPDATE]: L.typeUpdate,
    [U.vB8.DELETE]: L.typeDelete
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
                n === U.rsA.MESSAGE_DELETE
                    ? L.targetMessage
                    : n === U.rsA.AUTO_MODERATION_BLOCK_MESSAGE || n === U.rsA.AUTO_MODERATION_FLAG_TO_CHANNEL || n === U.rsA.AUTO_MODERATION_USER_COMMUNICATION_DISABLED || n === U.rsA.AUTO_MODERATION_QUARANTINE_USER
                      ? L.autoModerationBlockMessage
                      : {
                            [U.KFR.ALL]: L.targetAll,
                            [U.KFR.GUILD]: L.targetGuild,
                            [U.KFR.CHANNEL]: L.targetChannel,
                            [U.KFR.CHANNEL_OVERWRITE]: L.targetChannel,
                            [U.KFR.USER]: L.targetMember,
                            [U.KFR.ROLE]: L.targetRole,
                            [U.KFR.ONBOARDING_PROMPT]: L.targetOnboarding,
                            [U.KFR.GUILD_ONBOARDING]: L.targetOnboarding,
                            [U.KFR.HOME_SETTINGS]: L.targetOnboarding,
                            [U.KFR.INTEGRATION]: L.targetIntegration,
                            [U.KFR.INVITE]: L.targetInvite,
                            [U.KFR.WEBHOOK]: L.targetWebhook,
                            [U.KFR.EMOJI]: L.targetEmoji,
                            [U.KFR.STICKER]: L.targetSticker,
                            [U.KFR.STAGE_INSTANCE]: L.targetStageInstance,
                            [U.KFR.GUILD_SCHEDULED_EVENT]: L.targetGuildScheduledEvent,
                            [U.KFR.GUILD_SCHEDULED_EVENT_EXCEPTION]: L.targetGuildScheduledEvent,
                            [U.KFR.THREAD]: L.thread,
                            [U.KFR.APPLICATION_COMMAND]: L.applicationCommand,
                            [U.KFR.AUTO_MODERATION_RULE]: L.autoModerationRule,
                            [U.KFR.GUILD_HOME]: L.targetGuildHome,
                            [U.KFR.GUILD_SOUNDBOARD]: L.targetGuildSoundboard,
                            [U.KFR.VOICE_CHANNEL_STATUS]: L.targetChannel,
                            [U.KFR.GUILD_MEMBER_VERIFICATION]: L.targetMember,
                            [U.KFR.GUILD_PROFILE]: L.targetGuild
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
                                        if ((t.action === U.rsA.CHANNEL_UPDATE || t.action === U.rsA.CHANNEL_CREATE) && s.key === U.zUn.TYPE) {
                                            var e, n;
                                            return {
                                                oldValue: null != (e = s.oldValue) ? e : (0, R.a5)({ type: s.oldValue }),
                                                newValue: null != (n = s.newValue) ? n : (0, R.a5)({ type: s.newValue })
                                            };
                                        }
                                        if (t.action === U.rsA.MEMBER_UPDATE && s.key === U.zUn.COMMUNICATION_DISABLED_UNTIL) {
                                            let e = u()(s.newValue);
                                            return {
                                                oldValue: s.oldValue,
                                                newValue: e.isValid() ? e.calendar() : s.newValue
                                            };
                                        }
                                        return t.action === U.rsA.GUILD_UPDATE && s.key === U.zUn.OWNER_ID
                                            ? {
                                                  oldValue: S.ZP.getUserTag(s.oldValue, { mode: 'username' }),
                                                  newValue: S.ZP.getUserTag(s.newValue, { mode: 'username' })
                                              }
                                            : s;
                                    })(),
                                    A = (() => {
                                        if (t.action === U.rsA.MEMBER_ROLE_UPDATE)
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
                                        if (t.targetType === U.KFR.ROLE || t.action === U.rsA.CHANNEL_OVERWRITE_CREATE || t.action === U.rsA.CHANNEL_OVERWRITE_UPDATE)
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
                                        if ((t.action === U.rsA.CHANNEL_UPDATE || t.action === U.rsA.THREAD_UPDATE) && s.key === U.zUn.FLAGS)
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
                                        if ((t.action === U.rsA.ONBOARDING_PROMPT_UPDATE || t.action === U.rsA.ONBOARDING_PROMPT_CREATE) && s.key === U.zUn.OPTIONS)
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
                                                            u = e.channel_ids.map(a).filter(g.lm),
                                                            c = n.role_ids.map(i).filter(g.lm),
                                                            d = n.channel_ids.map(a).filter(g.lm),
                                                            A = o().difference(c, E),
                                                            T = o().difference(E, c),
                                                            I = o().difference(d, u),
                                                            O = o().difference(u, d),
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
                                                                                      actionType: U.vB8.UPDATE,
                                                                                      targetType: t.targetType,
                                                                                      action: t.action
                                                                                  }),
                                                                                  (0, r.jsx)(_.Text, {
                                                                                      variant: 'text-md/normal',
                                                                                      children: p.intl.format(p.t['WZO+iY'], { title: l })
                                                                                  })
                                                                              ]
                                                                          }),
                                                                          (0, r.jsxs)('div', {
                                                                              className: L.onboardingChangeLogItemChanges,
                                                                              children: [
                                                                                  A.length > 0 &&
                                                                                      (0, r.jsx)(_.Text, {
                                                                                          variant: 'text-md/normal',
                                                                                          children: p.intl.format(p.t['R+km+f'], { roles: A.join(', ') })
                                                                                      }),
                                                                                  T.length > 0 &&
                                                                                      (0, r.jsx)(_.Text, {
                                                                                          variant: 'text-md/normal',
                                                                                          children: p.intl.format(p.t.xIVRoa, { roles: T.join(', ') })
                                                                                      }),
                                                                                  I.length > 0 &&
                                                                                      (0, r.jsx)(_.Text, {
                                                                                          variant: 'text-md/normal',
                                                                                          children: p.intl.format(p.t.iYowX1, { channels: I.join(', ') })
                                                                                      }),
                                                                                  O.length > 0 &&
                                                                                      (0, r.jsx)(_.Text, {
                                                                                          variant: 'text-md/normal',
                                                                                          children: p.intl.format(p.t.JLdJpK, { channels: O.join(', ') })
                                                                                      }),
                                                                                  N.map((t, l) =>
                                                                                      (0, r.jsx)(
                                                                                          _.Text,
                                                                                          {
                                                                                              variant: 'text-md/normal',
                                                                                              children: p.intl.format(p.t['0698zc'], {
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
                                                    u = o().keyBy(null != s ? s : [], 'id'),
                                                    c = o().keyBy(null != l ? l : [], 'id'),
                                                    d = o()
                                                        .difference(Object.keys(c), Object.keys(u))
                                                        .map((e) => c[e]),
                                                    A = o()
                                                        .difference(Object.keys(u), Object.keys(c))
                                                        .map((e) => u[e]),
                                                    T = o().intersection(Object.keys(c), Object.keys(u));
                                                return (0, r.jsxs)(
                                                    'ul',
                                                    {
                                                        className: L.onboardingChangeLogContainer,
                                                        children: [
                                                            d.map((e) => {
                                                                let { role_ids: n, channel_ids: l, title: s, id: o } = e,
                                                                    E = (null != n ? n : []).map(i).filter(g.lm),
                                                                    u = (null != l ? l : []).map(a).filter(g.lm);
                                                                return (0, r.jsxs)(
                                                                    'li',
                                                                    {
                                                                        children: [
                                                                            (0, r.jsxs)('div', {
                                                                                className: L.onboardingChangeLogItemTitle,
                                                                                children: [
                                                                                    (0, r.jsx)(v, {
                                                                                        actionType: U.vB8.CREATE,
                                                                                        targetType: t.targetType,
                                                                                        action: t.action
                                                                                    }),
                                                                                    (0, r.jsx)(_.Text, {
                                                                                        variant: 'text-md/normal',
                                                                                        children: p.intl.format(p.t.CZ1tys, { title: s })
                                                                                    })
                                                                                ]
                                                                            }),
                                                                            (0, r.jsxs)('div', {
                                                                                className: L.onboardingChangeLogItemChanges,
                                                                                children: [
                                                                                    E.length > 0 &&
                                                                                        (0, r.jsx)(_.Text, {
                                                                                            variant: 'text-md/normal',
                                                                                            children: p.intl.format(p.t['gt/5z8'], { roles: E.join(', ') })
                                                                                        }),
                                                                                    u.length > 0 &&
                                                                                        (0, r.jsx)(_.Text, {
                                                                                            variant: 'text-md/normal',
                                                                                            children: p.intl.format(p.t['4q006e'], { channels: u.join(', ') })
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
                                                                                    actionType: U.vB8.DELETE,
                                                                                    targetType: t.targetType,
                                                                                    action: t.action
                                                                                }),
                                                                                (0, r.jsx)(_.Text, {
                                                                                    variant: 'text-md/normal',
                                                                                    children: p.intl.format(p.t['m3dt+P'], { title: e.title })
                                                                                })
                                                                            ]
                                                                        })
                                                                    },
                                                                    e.id
                                                                )
                                                            ),
                                                            T.map((e) => E(u[e], c[e]))
                                                        ]
                                                    },
                                                    'options'
                                                );
                                            })(s, t, n);
                                        if (t.action === U.rsA.HOME_SETTINGS_CREATE || t.action === U.rsA.HOME_SETTINGS_UPDATE)
                                            return (function (e, t) {
                                                let { oldValue: n, newValue: l, key: s } = e,
                                                    { targetType: i, action: a } = t;
                                                switch (s) {
                                                    case U.zUn.WELCOME_MESSAGE:
                                                        return ((e, t) => {
                                                            var n, l, s, i, a;
                                                            let o = N.default.getUser(null == t || null == (n = t.author_ids) ? void 0 : n[0]),
                                                                E = N.default.getUser(null == (l = e.author_ids) ? void 0 : l[0]),
                                                                u =
                                                                    (null == o ? void 0 : o.id) !== (null == E ? void 0 : E.id)
                                                                        ? (0, r.jsx)('li', {
                                                                              children: (0, r.jsx)('div', {
                                                                                  className: L.onboardingChangeLogItemTitle,
                                                                                  children: (0, r.jsx)(_.Text, {
                                                                                      variant: 'text-md/normal',
                                                                                      children: p.intl.format(p.t.PrOzAw, {
                                                                                          oldUser: null != (s = null == o ? void 0 : o.username) ? s : p.intl.string(p.t.PoWNfX),
                                                                                          newUser: null != (i = null == E ? void 0 : E.username) ? i : p.intl.string(p.t.PoWNfX)
                                                                                      })
                                                                                  })
                                                                              })
                                                                          })
                                                                        : null,
                                                                c =
                                                                    (null == t ? void 0 : t.message) !== e.message
                                                                        ? (0, r.jsx)('li', {
                                                                              children: (0, r.jsx)('div', {
                                                                                  className: L.onboardingChangeLogItemTitle,
                                                                                  children: (0, r.jsx)(_.Text, {
                                                                                      variant: 'text-md/normal',
                                                                                      children: p.intl.format(p.t.oB7rBQ, {
                                                                                          oldMessage: null != (a = null == t ? void 0 : t.message) ? a : p.intl.string(p.t.PoWNfX),
                                                                                          newMessage: e.message
                                                                                      })
                                                                                  })
                                                                              })
                                                                          })
                                                                        : null;
                                                            return (0, r.jsxs)('ul', {
                                                                children: [u, c]
                                                            });
                                                        })(l, n);
                                                    case U.zUn.NEW_MEMBER_ACTIONS:
                                                        return ((e, t) => {
                                                            let n = e.map((e) => e.channel_id),
                                                                l = t.map((e) => e.channel_id),
                                                                s = o().difference(l, n),
                                                                E = o().difference(n, l),
                                                                u = t.filter((e) => s.includes(e.channel_id)),
                                                                c = e.filter((e) => E.includes(e.channel_id));
                                                            return (0, r.jsxs)('ul', {
                                                                children: [
                                                                    u.map((e) =>
                                                                        (0, r.jsx)(
                                                                            'li',
                                                                            {
                                                                                children: (0, r.jsxs)('div', {
                                                                                    className: L.onboardingChangeLogItemTitle,
                                                                                    children: [
                                                                                        (0, r.jsx)(v, {
                                                                                            actionType: U.vB8.CREATE,
                                                                                            targetType: i,
                                                                                            action: a
                                                                                        }),
                                                                                        (0, r.jsx)(_.Text, {
                                                                                            variant: 'text-md/normal',
                                                                                            children: p.intl.format(p.t['oFSu6+'], { name: e.title })
                                                                                        })
                                                                                    ]
                                                                                })
                                                                            },
                                                                            e.channel_id
                                                                        )
                                                                    ),
                                                                    c.map((e) =>
                                                                        (0, r.jsx)(
                                                                            'li',
                                                                            {
                                                                                children: (0, r.jsxs)('div', {
                                                                                    className: L.onboardingChangeLogItemTitle,
                                                                                    children: [
                                                                                        (0, r.jsx)(v, {
                                                                                            actionType: U.vB8.DELETE,
                                                                                            targetType: i,
                                                                                            action: a
                                                                                        }),
                                                                                        (0, r.jsx)(_.Text, {
                                                                                            variant: 'text-md/normal',
                                                                                            children: p.intl.format(p.t.GssWam, { name: e.title })
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
                                                                s = o().difference(l, n),
                                                                E = o().difference(n, l),
                                                                u = t.filter((e) => s.includes(e.channel_id)),
                                                                c = e.filter((e) => E.includes(e.channel_id));
                                                            return (0, r.jsxs)('ul', {
                                                                children: [
                                                                    u.map((e) =>
                                                                        (0, r.jsx)(
                                                                            'li',
                                                                            {
                                                                                children: (0, r.jsxs)('div', {
                                                                                    className: L.onboardingChangeLogItemTitle,
                                                                                    children: [
                                                                                        (0, r.jsx)(v, {
                                                                                            actionType: U.vB8.CREATE,
                                                                                            targetType: i,
                                                                                            action: a
                                                                                        }),
                                                                                        (0, r.jsx)(_.Text, {
                                                                                            variant: 'text-md/normal',
                                                                                            children: p.intl.format(p.t.HlGndH, { name: e.title })
                                                                                        })
                                                                                    ]
                                                                                })
                                                                            },
                                                                            e.channel_id
                                                                        )
                                                                    ),
                                                                    c.map((e) =>
                                                                        (0, r.jsx)(
                                                                            'li',
                                                                            {
                                                                                children: (0, r.jsxs)('div', {
                                                                                    className: L.onboardingChangeLogItemTitle,
                                                                                    children: [
                                                                                        (0, r.jsx)(v, {
                                                                                            actionType: U.vB8.DELETE,
                                                                                            targetType: i,
                                                                                            action: a
                                                                                        }),
                                                                                        (0, r.jsx)(_.Text, {
                                                                                            variant: 'text-md/normal',
                                                                                            children: p.intl.format(p.t['7pysg4'], { name: e.title })
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
                                    let { changeItem: s, subChanges: i, changeNumber: a, log: o, oldValue: E, newValue: u, change: A } = e;
                                    if (null == s) return console.warn('No change string for', A), null;
                                    let I = p.intl.format(s, {
                                        oldValue: E,
                                        newValue: u,
                                        count: Array.isArray(u) ? u.length : null,
                                        subtarget: null != (n = null != (t = o.options.subtarget) ? t : A.subtarget) ? n : null,
                                        newColorHook: (e, t) => m(t, A.newValue),
                                        newColorsHook: (e, t) => {
                                            let { primary_color: n, secondary_color: s, tertiary_color: i } = u;
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
                                                                        children: ''.concat(n > 0 ? ', ' : '').concat((0, c.Rf)(e).toUpperCase(), ' ')
                                                                    }),
                                                                    m(t, (0, c.Rf)(e))
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
                                                    tag: u,
                                                    size: T.Z.Sizes.SMALL
                                                },
                                                t
                                            ),
                                        oldEmojiHook: (e, t) => (0, r.jsx)(d.Z, { emojiId: E }, t),
                                        newEmojiHook: (e, t) => (0, r.jsx)(d.Z, { emojiId: u }, t),
                                        applicationHook: (e, t) => {
                                            var n;
                                            return (0, r.jsx)(M, { applicationId: null != (n = null == E ? void 0 : E.application_id) ? n : null == u ? void 0 : u.application_id }, t);
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
                                                                  case U.vB8.CREATE:
                                                                      return 'text-positive';
                                                                  case U.vB8.DELETE:
                                                                      return 'status-danger';
                                                                  default:
                                                                      return 'text-warning';
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
            case U.KFR.GUILD:
                return E(h.pY());
            case U.KFR.CHANNEL:
            case U.KFR.CHANNEL_OVERWRITE:
                return E(h.ML());
            case U.KFR.USER:
                return E(h.lU());
            case U.KFR.ROLE:
                return E(h.HE());
            case U.KFR.ONBOARDING_PROMPT:
                return E(h.oD());
            case U.KFR.GUILD_ONBOARDING:
                return E(h.EN());
            case U.KFR.HOME_SETTINGS:
                return E(h.hx());
            case U.KFR.INVITE:
                return E(h.HN());
            case U.KFR.WEBHOOK:
                return E(h.lR());
            case U.KFR.EMOJI:
                return E(h.N$());
            case U.KFR.STICKER:
                return E(h.Bq());
            case U.KFR.INTEGRATION:
                return E(h.K());
            case U.KFR.STAGE_INSTANCE:
                return E(h.C2());
            case U.KFR.GUILD_SCHEDULED_EVENT:
                return E(h.uB());
            case U.KFR.GUILD_SCHEDULED_EVENT_EXCEPTION:
                return E(h.pi());
            case U.KFR.THREAD:
                return E(h.pA());
            case U.KFR.APPLICATION_COMMAND:
                return E(h.vm(t.changes));
            case U.KFR.AUTO_MODERATION_RULE:
                return E(h.rK());
            case U.KFR.GUILD_SOUNDBOARD:
                return E(h.C0());
            case U.KFR.VOICE_CHANNEL_STATUS:
                return E(h.F1());
            case U.KFR.GUILD_MEMBER_VERIFICATION:
                return E(h.JA());
            case U.KFR.GUILD_PROFILE:
                return E(h.zT());
        }
    }, [t.targetType, t.changes, E]);
}
