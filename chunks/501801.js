n.d(t, {
    mp: () => M,
    tP: () => m,
    xO: () => L
}),
    n(539854),
    n(953529);
var r = n(200651),
    l = n(192379),
    s = n(120356),
    i = n.n(s),
    a = n(392711),
    o = n.n(a),
    E = n(913527),
    u = n.n(E),
    c = n(481060),
    _ = n(596454),
    d = n(835473),
    A = n(479099),
    T = n(592125),
    I = n(430824),
    O = n(594174),
    N = n(934415),
    R = n(823379),
    g = n(624138),
    f = n(51144),
    S = n(909746),
    h = n(981631),
    U = n(388032),
    p = n(677234);
function L(e, t) {
    let n = S.vc[e.targetType];
    return null != n && !0 === n[t.key];
}
let D = {
    [h.vB8.CREATE]: p.typeCreate,
    [h.vB8.UPDATE]: p.typeUpdate,
    [h.vB8.DELETE]: p.typeDelete
};
function C(e) {
    let { applicationId: t } = e,
        n = (0, d.q)(t);
    return null == n
        ? null
        : (0, r.jsx)(c.Text, {
              variant: 'text-md/normal',
              children: n.name
          });
}
class M extends l.PureComponent {
    render() {
        let { actionType: e, targetType: t, action: n, themeOverride: l } = this.props,
            s = null != l ? p['themeOverride'.concat((0, g.De)(l))] : null,
            a = i()(
                p.icon,
                D[e],
                n === h.rsA.MESSAGE_DELETE
                    ? p.targetMessage
                    : n === h.rsA.AUTO_MODERATION_BLOCK_MESSAGE || n === h.rsA.AUTO_MODERATION_FLAG_TO_CHANNEL || n === h.rsA.AUTO_MODERATION_USER_COMMUNICATION_DISABLED || n === h.rsA.AUTO_MODERATION_QUARANTINE_USER
                      ? p.autoModerationBlockMessage
                      : {
                            [h.KFR.ALL]: p.targetAll,
                            [h.KFR.GUILD]: p.targetGuild,
                            [h.KFR.CHANNEL]: p.targetChannel,
                            [h.KFR.CHANNEL_OVERWRITE]: p.targetChannel,
                            [h.KFR.USER]: p.targetMember,
                            [h.KFR.ROLE]: p.targetRole,
                            [h.KFR.ONBOARDING_PROMPT]: p.targetOnboarding,
                            [h.KFR.GUILD_ONBOARDING]: p.targetOnboarding,
                            [h.KFR.HOME_SETTINGS]: p.targetOnboarding,
                            [h.KFR.INTEGRATION]: p.targetIntegration,
                            [h.KFR.INVITE]: p.targetInvite,
                            [h.KFR.WEBHOOK]: p.targetWebhook,
                            [h.KFR.EMOJI]: p.targetEmoji,
                            [h.KFR.STICKER]: p.targetSticker,
                            [h.KFR.STAGE_INSTANCE]: p.targetStageInstance,
                            [h.KFR.GUILD_SCHEDULED_EVENT]: p.targetGuildScheduledEvent,
                            [h.KFR.GUILD_SCHEDULED_EVENT_EXCEPTION]: p.targetGuildScheduledEvent,
                            [h.KFR.THREAD]: p.thread,
                            [h.KFR.APPLICATION_COMMAND]: p.applicationCommand,
                            [h.KFR.AUTO_MODERATION_RULE]: p.autoModerationRule,
                            [h.KFR.GUILD_HOME]: p.targetGuildHome,
                            [h.KFR.GUILD_SOUNDBOARD]: p.targetGuildSoundboard,
                            [h.KFR.VOICE_CHANNEL_STATUS]: p.targetChannel,
                            [h.KFR.GUILD_MEMBER_VERIFICATION]: p.targetMember,
                            [h.KFR.GUILD_PROFILE]: p.targetGuild
                        }[t],
                s
            );
        return (0, r.jsx)('div', { className: a });
    }
}
function m(e) {
    let { log: t, guild: n, onContentClick: s, className: a } = e,
        E = l.useCallback(
            (e) => {
                if (null == t.changes) return null;
                let l = 0,
                    E = o()
                        .flatten(
                            t.changes.map((s) => {
                                if (L(t, s)) return null;
                                let { oldValue: i, newValue: a } = (() => {
                                        if ((t.action === h.rsA.CHANNEL_UPDATE || t.action === h.rsA.CHANNEL_CREATE) && s.key === h.zUn.TYPE) {
                                            var e, n;
                                            return {
                                                oldValue: null != (e = s.oldValue) ? e : (0, N.a5)({ type: s.oldValue }),
                                                newValue: null != (n = s.newValue) ? n : (0, N.a5)({ type: s.newValue })
                                            };
                                        }
                                        if (t.action === h.rsA.MEMBER_UPDATE && s.key === h.zUn.COMMUNICATION_DISABLED_UNTIL) {
                                            let e = u()(s.newValue);
                                            return {
                                                oldValue: s.oldValue,
                                                newValue: e.isValid() ? e.calendar() : s.newValue
                                            };
                                        }
                                        return t.action === h.rsA.GUILD_UPDATE && s.key === h.zUn.OWNER_ID
                                            ? {
                                                  oldValue: f.ZP.getUserTag(s.oldValue, { mode: 'username' }),
                                                  newValue: f.ZP.getUserTag(s.newValue, { mode: 'username' })
                                              }
                                            : s;
                                    })(),
                                    E = (() => {
                                        if (t.action === h.rsA.MEMBER_ROLE_UPDATE)
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
                                            })(s);
                                        if (t.targetType === h.KFR.ROLE || t.action === h.rsA.CHANNEL_OVERWRITE_CREATE || t.action === h.rsA.CHANNEL_OVERWRITE_UPDATE)
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
                                            })(s, t);
                                        if ((t.action === h.rsA.CHANNEL_UPDATE || t.action === h.rsA.THREAD_UPDATE) && s.key === h.zUn.FLAGS)
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
                                            })(s);
                                        if ((t.action === h.rsA.ONBOARDING_PROMPT_UPDATE || t.action === h.rsA.ONBOARDING_PROMPT_CREATE) && s.key === h.zUn.OPTIONS)
                                            return (function (e, t, n) {
                                                let { newValue: l, oldValue: s } = e,
                                                    i = (e) => {
                                                        var t;
                                                        let r = null != n ? (null == (t = I.Z.getRole(n.id, e)) ? void 0 : t.name) : void 0;
                                                        return null == r ? null : '@'.concat(r);
                                                    },
                                                    a = (e) => {
                                                        var t;
                                                        let n = null == (t = T.Z.getChannel(e)) ? void 0 : t.name;
                                                        return null == n ? null : '#'.concat(n);
                                                    },
                                                    E = (e, n) => {
                                                        let { title: l, id: s } = n,
                                                            E = e.role_ids.map(i).filter(R.lm),
                                                            u = e.channel_ids.map(a).filter(R.lm),
                                                            _ = n.role_ids.map(i).filter(R.lm),
                                                            d = n.channel_ids.map(a).filter(R.lm),
                                                            A = o().difference(_, E),
                                                            T = o().difference(E, _),
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
                                                                              className: p.onboardingChangeLogItemTitle,
                                                                              children: [
                                                                                  (0, r.jsx)(M, {
                                                                                      actionType: h.vB8.UPDATE,
                                                                                      targetType: t.targetType,
                                                                                      action: t.action
                                                                                  }),
                                                                                  (0, r.jsx)(c.Text, {
                                                                                      variant: 'text-md/normal',
                                                                                      children: U.intl.format(U.t['WZO+iY'], { title: l })
                                                                                  })
                                                                              ]
                                                                          }),
                                                                          (0, r.jsxs)('div', {
                                                                              className: p.onboardingChangeLogItemChanges,
                                                                              children: [
                                                                                  A.length > 0 &&
                                                                                      (0, r.jsx)(c.Text, {
                                                                                          variant: 'text-md/normal',
                                                                                          children: U.intl.format(U.t['R+km+f'], { roles: A.join(', ') })
                                                                                      }),
                                                                                  T.length > 0 &&
                                                                                      (0, r.jsx)(c.Text, {
                                                                                          variant: 'text-md/normal',
                                                                                          children: U.intl.format(U.t.xIVRoa, { roles: T.join(', ') })
                                                                                      }),
                                                                                  I.length > 0 &&
                                                                                      (0, r.jsx)(c.Text, {
                                                                                          variant: 'text-md/normal',
                                                                                          children: U.intl.format(U.t.iYowX1, { channels: I.join(', ') })
                                                                                      }),
                                                                                  O.length > 0 &&
                                                                                      (0, r.jsx)(c.Text, {
                                                                                          variant: 'text-md/normal',
                                                                                          children: U.intl.format(U.t.JLdJpK, { channels: O.join(', ') })
                                                                                      }),
                                                                                  N.map((t, l) =>
                                                                                      (0, r.jsx)(
                                                                                          c.Text,
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
                                                    u = o().keyBy(null != s ? s : [], 'id'),
                                                    _ = o().keyBy(null != l ? l : [], 'id'),
                                                    d = o()
                                                        .difference(Object.keys(_), Object.keys(u))
                                                        .map((e) => _[e]),
                                                    A = o()
                                                        .difference(Object.keys(u), Object.keys(_))
                                                        .map((e) => u[e]),
                                                    O = o().intersection(Object.keys(_), Object.keys(u));
                                                return (0, r.jsxs)(
                                                    'ul',
                                                    {
                                                        className: p.onboardingChangeLogContainer,
                                                        children: [
                                                            d.map((e) => {
                                                                let { role_ids: n, channel_ids: l, title: s, id: o } = e,
                                                                    E = (null != n ? n : []).map(i).filter(R.lm),
                                                                    u = (null != l ? l : []).map(a).filter(R.lm);
                                                                return (0, r.jsxs)(
                                                                    'li',
                                                                    {
                                                                        children: [
                                                                            (0, r.jsxs)('div', {
                                                                                className: p.onboardingChangeLogItemTitle,
                                                                                children: [
                                                                                    (0, r.jsx)(M, {
                                                                                        actionType: h.vB8.CREATE,
                                                                                        targetType: t.targetType,
                                                                                        action: t.action
                                                                                    }),
                                                                                    (0, r.jsx)(c.Text, {
                                                                                        variant: 'text-md/normal',
                                                                                        children: U.intl.format(U.t.CZ1tys, { title: s })
                                                                                    })
                                                                                ]
                                                                            }),
                                                                            (0, r.jsxs)('div', {
                                                                                className: p.onboardingChangeLogItemChanges,
                                                                                children: [
                                                                                    E.length > 0 &&
                                                                                        (0, r.jsx)(c.Text, {
                                                                                            variant: 'text-md/normal',
                                                                                            children: U.intl.format(U.t['gt/5z8'], { roles: E.join(', ') })
                                                                                        }),
                                                                                    u.length > 0 &&
                                                                                        (0, r.jsx)(c.Text, {
                                                                                            variant: 'text-md/normal',
                                                                                            children: U.intl.format(U.t['4q006e'], { channels: u.join(', ') })
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
                                                                                (0, r.jsx)(M, {
                                                                                    actionType: h.vB8.DELETE,
                                                                                    targetType: t.targetType,
                                                                                    action: t.action
                                                                                }),
                                                                                (0, r.jsx)(c.Text, {
                                                                                    variant: 'text-md/normal',
                                                                                    children: U.intl.format(U.t['m3dt+P'], { title: e.title })
                                                                                })
                                                                            ]
                                                                        })
                                                                    },
                                                                    e.id
                                                                )
                                                            ),
                                                            O.map((e) => E(u[e], _[e]))
                                                        ]
                                                    },
                                                    'options'
                                                );
                                            })(s, t, n);
                                        if (t.action === h.rsA.HOME_SETTINGS_CREATE || t.action === h.rsA.HOME_SETTINGS_UPDATE)
                                            return (function (e, t) {
                                                let { oldValue: n, newValue: l, key: s } = e,
                                                    { targetType: i, action: a } = t;
                                                switch (s) {
                                                    case h.zUn.WELCOME_MESSAGE:
                                                        return ((e, t) => {
                                                            var n, l, s, i, a;
                                                            let o = O.default.getUser(null == t || null == (n = t.author_ids) ? void 0 : n[0]),
                                                                E = O.default.getUser(null == (l = e.author_ids) ? void 0 : l[0]),
                                                                u =
                                                                    (null == o ? void 0 : o.id) !== (null == E ? void 0 : E.id)
                                                                        ? (0, r.jsx)('li', {
                                                                              children: (0, r.jsx)('div', {
                                                                                  className: p.onboardingChangeLogItemTitle,
                                                                                  children: (0, r.jsx)(c.Text, {
                                                                                      variant: 'text-md/normal',
                                                                                      children: U.intl.format(U.t.PrOzAw, {
                                                                                          oldUser: null != (s = null == o ? void 0 : o.username) ? s : U.intl.string(U.t.PoWNfX),
                                                                                          newUser: null != (i = null == E ? void 0 : E.username) ? i : U.intl.string(U.t.PoWNfX)
                                                                                      })
                                                                                  })
                                                                              })
                                                                          })
                                                                        : null,
                                                                _ =
                                                                    (null == t ? void 0 : t.message) !== e.message
                                                                        ? (0, r.jsx)('li', {
                                                                              children: (0, r.jsx)('div', {
                                                                                  className: p.onboardingChangeLogItemTitle,
                                                                                  children: (0, r.jsx)(c.Text, {
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
                                                                children: [u, _]
                                                            });
                                                        })(l, n);
                                                    case h.zUn.NEW_MEMBER_ACTIONS:
                                                        return ((e, t) => {
                                                            let n = e.map((e) => e.channel_id),
                                                                l = t.map((e) => e.channel_id),
                                                                s = o().difference(l, n),
                                                                E = o().difference(n, l),
                                                                u = t.filter((e) => s.includes(e.channel_id)),
                                                                _ = e.filter((e) => E.includes(e.channel_id));
                                                            return (0, r.jsxs)('ul', {
                                                                children: [
                                                                    u.map((e) =>
                                                                        (0, r.jsx)(
                                                                            'li',
                                                                            {
                                                                                children: (0, r.jsxs)('div', {
                                                                                    className: p.onboardingChangeLogItemTitle,
                                                                                    children: [
                                                                                        (0, r.jsx)(M, {
                                                                                            actionType: h.vB8.CREATE,
                                                                                            targetType: i,
                                                                                            action: a
                                                                                        }),
                                                                                        (0, r.jsx)(c.Text, {
                                                                                            variant: 'text-md/normal',
                                                                                            children: U.intl.format(U.t['oFSu6+'], { name: e.title })
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
                                                                                    className: p.onboardingChangeLogItemTitle,
                                                                                    children: [
                                                                                        (0, r.jsx)(M, {
                                                                                            actionType: h.vB8.DELETE,
                                                                                            targetType: i,
                                                                                            action: a
                                                                                        }),
                                                                                        (0, r.jsx)(c.Text, {
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
                                                    case h.zUn.RESOURCE_CHANNELS:
                                                        return ((e, t) => {
                                                            let n = e.map((e) => e.channel_id),
                                                                l = t.map((e) => e.channel_id),
                                                                s = o().difference(l, n),
                                                                E = o().difference(n, l),
                                                                u = t.filter((e) => s.includes(e.channel_id)),
                                                                _ = e.filter((e) => E.includes(e.channel_id));
                                                            return (0, r.jsxs)('ul', {
                                                                children: [
                                                                    u.map((e) =>
                                                                        (0, r.jsx)(
                                                                            'li',
                                                                            {
                                                                                children: (0, r.jsxs)('div', {
                                                                                    className: p.onboardingChangeLogItemTitle,
                                                                                    children: [
                                                                                        (0, r.jsx)(M, {
                                                                                            actionType: h.vB8.CREATE,
                                                                                            targetType: i,
                                                                                            action: a
                                                                                        }),
                                                                                        (0, r.jsx)(c.Text, {
                                                                                            variant: 'text-md/normal',
                                                                                            children: U.intl.format(U.t.HlGndH, { name: e.title })
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
                                                                                    className: p.onboardingChangeLogItemTitle,
                                                                                    children: [
                                                                                        (0, r.jsx)(M, {
                                                                                            actionType: h.vB8.DELETE,
                                                                                            targetType: i,
                                                                                            action: a
                                                                                        }),
                                                                                        (0, r.jsx)(c.Text, {
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
                                    d = e[s.key];
                                return (function (e) {
                                    var t, n;
                                    let { changeItem: l, subChanges: s, changeNumber: i, log: a, oldValue: o, newValue: E, change: u } = e;
                                    if (null == l) return console.warn('No change string for', u), null;
                                    let d = U.intl.format(l, {
                                        oldValue: o,
                                        newValue: E,
                                        count: Array.isArray(E) ? E.length : null,
                                        subtarget: null != (n = null != (t = a.options.subtarget) ? t : u.subtarget) ? n : null,
                                        newColorHook: (e, t) =>
                                            (0, r.jsx)(
                                                'div',
                                                {
                                                    className: p.colorHook,
                                                    style: { backgroundColor: u.newValue }
                                                },
                                                t
                                            ),
                                        oldColorHook: (e, t) =>
                                            (0, r.jsx)(
                                                'div',
                                                {
                                                    className: p.colorHook,
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
                                            return (0, r.jsx)(C, { applicationId: null != (n = null == o ? void 0 : o.application_id) ? n : null == E ? void 0 : E.application_id }, t);
                                        }
                                    });
                                    return null == d
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
                                                      (0, r.jsxs)(c.Text, {
                                                          className: p.prefix,
                                                          variant: 'code',
                                                          color: (function (e) {
                                                              switch (e) {
                                                                  case h.vB8.CREATE:
                                                                      return 'text-positive';
                                                                  case h.vB8.DELETE:
                                                                      return 'status-danger';
                                                                  default:
                                                                      return 'text-warning';
                                                              }
                                                          })(a.actionType),
                                                          children: [
                                                              i < 10 ? '0'.concat(i) : i,
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
                                                                  children: d
                                                              }),
                                                              null != s ? (0, r.jsx)('div', { children: s }) : null
                                                          ]
                                                      })
                                                  ]
                                              },
                                              i
                                          );
                                })({
                                    changeItem: 'function' == typeof d ? d(s) : d,
                                    subChanges: E,
                                    changeNumber: ++l,
                                    log: t,
                                    oldValue: i,
                                    newValue: a,
                                    change: s
                                });
                            })
                        )
                        .filter(R.lm);
                return (0, r.jsx)(c.P3F, {
                    onClick: s,
                    className: i()(p.changeDetails, a),
                    children: E
                });
            },
            [t, n, s, a]
        );
    return l.useMemo(() => {
        switch (t.targetType) {
            case h.KFR.GUILD:
                return E(S.pY());
            case h.KFR.CHANNEL:
            case h.KFR.CHANNEL_OVERWRITE:
                return E(S.ML());
            case h.KFR.USER:
                return E(S.lU());
            case h.KFR.ROLE:
                return E(S.HE());
            case h.KFR.ONBOARDING_PROMPT:
                return E(S.oD());
            case h.KFR.GUILD_ONBOARDING:
                return E(S.EN());
            case h.KFR.HOME_SETTINGS:
                return E(S.hx());
            case h.KFR.INVITE:
                return E(S.HN());
            case h.KFR.WEBHOOK:
                return E(S.lR());
            case h.KFR.EMOJI:
                return E(S.N$());
            case h.KFR.STICKER:
                return E(S.Bq());
            case h.KFR.INTEGRATION:
                return E(S.K());
            case h.KFR.STAGE_INSTANCE:
                return E(S.C2());
            case h.KFR.GUILD_SCHEDULED_EVENT:
                return E(S.uB());
            case h.KFR.GUILD_SCHEDULED_EVENT_EXCEPTION:
                return E(S.pi());
            case h.KFR.THREAD:
                return E(S.pA());
            case h.KFR.APPLICATION_COMMAND:
                return E(S.vm(t.changes));
            case h.KFR.AUTO_MODERATION_RULE:
                return E(S.rK());
            case h.KFR.GUILD_SOUNDBOARD:
                return E(S.C0());
            case h.KFR.VOICE_CHANNEL_STATUS:
                return E(S.F1());
            case h.KFR.GUILD_MEMBER_VERIFICATION:
                return E(S.JA());
            case h.KFR.GUILD_PROFILE:
                return E(S.zT());
        }
    }, [t.targetType, t.changes, E]);
}
