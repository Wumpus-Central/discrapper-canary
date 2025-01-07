n.d(t, {
    mp: function () {
        return M;
    },
    tP: function () {
        return m;
    },
    xO: function () {
        return U;
    }
}),
    n(653041);
var r = n(200651),
    l = n(192379),
    i = n(120356),
    s = n.n(i),
    a = n(392711),
    o = n.n(a),
    E = n(913527),
    u = n.n(E),
    c = n(481060),
    d = n(596454),
    _ = n(835473),
    A = n(479099),
    T = n(592125),
    I = n(430824),
    g = n(594174),
    f = n(934415),
    N = n(823379),
    R = n(624138),
    O = n(51144),
    S = n(909746),
    p = n(981631),
    D = n(388032),
    h = n(52330);
function U(e, t) {
    let n = S.vc[e.targetType];
    return null != n && !0 === n[t.key];
}
let C = {
    [p.vB8.CREATE]: h.typeCreate,
    [p.vB8.UPDATE]: h.typeUpdate,
    [p.vB8.DELETE]: h.typeDelete
};
function L(e) {
    let { applicationId: t } = e,
        n = (0, _.q)(t);
    return null == n
        ? null
        : (0, r.jsx)(c.Text, {
              variant: 'text-md/normal',
              children: n.name
          });
}
class M extends l.PureComponent {
    render() {
        var e, t;
        let { actionType: n, targetType: l, action: i, themeOverride: a } = this.props,
            o = null != a ? h['themeOverride'.concat((0, R.De)(a))] : null;
        let E = s()(
            h.icon,
            C[n],
            ((e = l),
            (t = i) === p.rsA.MESSAGE_DELETE
                ? h.targetMessage
                : t === p.rsA.AUTO_MODERATION_BLOCK_MESSAGE || t === p.rsA.AUTO_MODERATION_FLAG_TO_CHANNEL || t === p.rsA.AUTO_MODERATION_USER_COMMUNICATION_DISABLED || t === p.rsA.AUTO_MODERATION_QUARANTINE_USER
                  ? h.autoModerationBlockMessage
                  : {
                        [p.KFR.ALL]: h.targetAll,
                        [p.KFR.GUILD]: h.targetGuild,
                        [p.KFR.CHANNEL]: h.targetChannel,
                        [p.KFR.CHANNEL_OVERWRITE]: h.targetChannel,
                        [p.KFR.USER]: h.targetMember,
                        [p.KFR.ROLE]: h.targetRole,
                        [p.KFR.ONBOARDING_PROMPT]: h.targetOnboarding,
                        [p.KFR.GUILD_ONBOARDING]: h.targetOnboarding,
                        [p.KFR.HOME_SETTINGS]: h.targetOnboarding,
                        [p.KFR.INTEGRATION]: h.targetIntegration,
                        [p.KFR.INVITE]: h.targetInvite,
                        [p.KFR.WEBHOOK]: h.targetWebhook,
                        [p.KFR.EMOJI]: h.targetEmoji,
                        [p.KFR.STICKER]: h.targetSticker,
                        [p.KFR.STAGE_INSTANCE]: h.targetStageInstance,
                        [p.KFR.GUILD_SCHEDULED_EVENT]: h.targetGuildScheduledEvent,
                        [p.KFR.GUILD_SCHEDULED_EVENT_EXCEPTION]: h.targetGuildScheduledEvent,
                        [p.KFR.THREAD]: h.thread,
                        [p.KFR.APPLICATION_COMMAND]: h.applicationCommand,
                        [p.KFR.AUTO_MODERATION_RULE]: h.autoModerationRule,
                        [p.KFR.GUILD_HOME]: h.targetGuildHome,
                        [p.KFR.GUILD_SOUNDBOARD]: h.targetGuildSoundboard,
                        [p.KFR.VOICE_CHANNEL_STATUS]: h.targetChannel
                    }[e]),
            o
        );
        return (0, r.jsx)('div', { className: E });
    }
}
function m(e) {
    let { log: t, guild: n, onContentClick: i, className: a } = e,
        E = l.useCallback(
            (e) => {
                if (null == t.changes) return null;
                let l = 0,
                    E = o()
                        .flatten(
                            t.changes.map((i) => {
                                if (U(t, i)) return null;
                                let { oldValue: s, newValue: a } = (() => {
                                        if ((t.action === p.rsA.CHANNEL_UPDATE || t.action === p.rsA.CHANNEL_CREATE) && i.key === p.zUn.TYPE) {
                                            var e, n;
                                            return {
                                                oldValue: null !== (e = i.oldValue) && void 0 !== e ? e : (0, f.a5)({ type: i.oldValue }),
                                                newValue: null !== (n = i.newValue) && void 0 !== n ? n : (0, f.a5)({ type: i.newValue })
                                            };
                                        }
                                        if (t.action === p.rsA.MEMBER_UPDATE && i.key === p.zUn.COMMUNICATION_DISABLED_UNTIL) {
                                            let e = u()(i.newValue);
                                            return {
                                                oldValue: i.oldValue,
                                                newValue: e.isValid() ? e.calendar() : i.newValue
                                            };
                                        }
                                        if (t.action === p.rsA.GUILD_UPDATE && i.key === p.zUn.OWNER_ID)
                                            return {
                                                oldValue: O.ZP.getUserTag(i.oldValue, { mode: 'username' }),
                                                newValue: O.ZP.getUserTag(i.newValue, { mode: 'username' })
                                            };
                                        return i;
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
                                                                  className: h.subListItem,
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
                                                                  className: h.subListItem,
                                                                  children: S.hQ(e, t)
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
                                                                    className: h.subListItem,
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
                                                                    className: h.subListItem,
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
                                        else if ((t.action === p.rsA.ONBOARDING_PROMPT_UPDATE || t.action === p.rsA.ONBOARDING_PROMPT_CREATE) && i.key === p.zUn.OPTIONS)
                                            return (function (e, t, n) {
                                                let { newValue: l, oldValue: i } = e,
                                                    s = (e) => {
                                                        var t;
                                                        let r = null != n ? (null === (t = I.Z.getRole(n.id, e)) || void 0 === t ? void 0 : t.name) : void 0;
                                                        return null == r ? null : '@'.concat(r);
                                                    },
                                                    a = (e) => {
                                                        var t;
                                                        let n = null === (t = T.Z.getChannel(e)) || void 0 === t ? void 0 : t.name;
                                                        return null == n ? null : '#'.concat(n);
                                                    },
                                                    E = (e, n) => {
                                                        let { title: l, id: i } = n,
                                                            E = e.role_ids.map(s).filter(N.lm),
                                                            u = e.channel_ids.map(a).filter(N.lm),
                                                            d = n.role_ids.map(s).filter(N.lm),
                                                            _ = n.channel_ids.map(a).filter(N.lm),
                                                            A = o().difference(d, E),
                                                            T = o().difference(E, d),
                                                            I = o().difference(_, u),
                                                            g = o().difference(u, _),
                                                            f = [];
                                                        return (!o().isEqual(e.title, n.title) && f.push('title'), !o().isEqual(e.description, n.description) && f.push('description'), 0 === A.length && 0 === T.length && 0 === I.length && 0 === g.length && 0 === f.length)
                                                            ? null
                                                            : (0, r.jsxs)(
                                                                  'li',
                                                                  {
                                                                      children: [
                                                                          (0, r.jsxs)('div', {
                                                                              className: h.onboardingChangeLogItemTitle,
                                                                              children: [
                                                                                  (0, r.jsx)(M, {
                                                                                      actionType: p.vB8.UPDATE,
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
                                                                              className: h.onboardingChangeLogItemChanges,
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
                                                                                  g.length > 0 &&
                                                                                      (0, r.jsx)(c.Text, {
                                                                                          variant: 'text-md/normal',
                                                                                          children: D.intl.format(D.t.JLdJpK, { channels: g.join(', ') })
                                                                                      }),
                                                                                  f.map((t, l) =>
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
                                                    d = o().keyBy(null != l ? l : [], 'id'),
                                                    _ = o()
                                                        .difference(Object.keys(d), Object.keys(u))
                                                        .map((e) => d[e]),
                                                    A = o()
                                                        .difference(Object.keys(u), Object.keys(d))
                                                        .map((e) => u[e]),
                                                    g = o().intersection(Object.keys(d), Object.keys(u));
                                                return (0, r.jsxs)(
                                                    'ul',
                                                    {
                                                        className: h.onboardingChangeLogContainer,
                                                        children: [
                                                            _.map((e) => {
                                                                let { role_ids: n, channel_ids: l, title: i, id: o } = e,
                                                                    E = (null != n ? n : []).map(s).filter(N.lm),
                                                                    u = (null != l ? l : []).map(a).filter(N.lm);
                                                                return (0, r.jsxs)(
                                                                    'li',
                                                                    {
                                                                        children: [
                                                                            (0, r.jsxs)('div', {
                                                                                className: h.onboardingChangeLogItemTitle,
                                                                                children: [
                                                                                    (0, r.jsx)(M, {
                                                                                        actionType: p.vB8.CREATE,
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
                                                                                className: h.onboardingChangeLogItemChanges,
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
                                                                            className: h.onboardingChangeLogItemTitle,
                                                                            children: [
                                                                                (0, r.jsx)(M, {
                                                                                    actionType: p.vB8.DELETE,
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
                                                            g.map((e) => E(u[e], d[e]))
                                                        ]
                                                    },
                                                    'options'
                                                );
                                            })(i, t, n);
                                        else if (t.action === p.rsA.HOME_SETTINGS_CREATE || t.action === p.rsA.HOME_SETTINGS_UPDATE)
                                            return (function (e, t) {
                                                let { oldValue: n, newValue: l, key: i } = e,
                                                    { targetType: s, action: a } = t;
                                                switch (i) {
                                                    case p.zUn.WELCOME_MESSAGE:
                                                        return ((e, t) => {
                                                            var n, l, i, s, a;
                                                            let o = g.default.getUser(null == t ? void 0 : null === (n = t.author_ids) || void 0 === n ? void 0 : n[0]),
                                                                E = g.default.getUser(null === (l = e.author_ids) || void 0 === l ? void 0 : l[0]),
                                                                u =
                                                                    (null == o ? void 0 : o.id) !== (null == E ? void 0 : E.id)
                                                                        ? (0, r.jsx)('li', {
                                                                              children: (0, r.jsx)('div', {
                                                                                  className: h.onboardingChangeLogItemTitle,
                                                                                  children: (0, r.jsx)(c.Text, {
                                                                                      variant: 'text-md/normal',
                                                                                      children: D.intl.format(D.t.PrOzAw, {
                                                                                          oldUser: null !== (i = null == o ? void 0 : o.username) && void 0 !== i ? i : D.intl.string(D.t.PoWNfX),
                                                                                          newUser: null !== (s = null == E ? void 0 : E.username) && void 0 !== s ? s : D.intl.string(D.t.PoWNfX)
                                                                                      })
                                                                                  })
                                                                              })
                                                                          })
                                                                        : null,
                                                                d =
                                                                    (null == t ? void 0 : t.message) !== e.message
                                                                        ? (0, r.jsx)('li', {
                                                                              children: (0, r.jsx)('div', {
                                                                                  className: h.onboardingChangeLogItemTitle,
                                                                                  children: (0, r.jsx)(c.Text, {
                                                                                      variant: 'text-md/normal',
                                                                                      children: D.intl.format(D.t.oB7rBQ, {
                                                                                          oldMessage: null !== (a = null == t ? void 0 : t.message) && void 0 !== a ? a : D.intl.string(D.t.PoWNfX),
                                                                                          newMessage: e.message
                                                                                      })
                                                                                  })
                                                                              })
                                                                          })
                                                                        : null;
                                                            return (0, r.jsxs)('ul', {
                                                                children: [u, d]
                                                            });
                                                        })(l, n);
                                                    case p.zUn.NEW_MEMBER_ACTIONS:
                                                        return ((e, t) => {
                                                            let n = e.map((e) => e.channel_id),
                                                                l = t.map((e) => e.channel_id),
                                                                i = o().difference(l, n),
                                                                E = o().difference(n, l),
                                                                u = t.filter((e) => i.includes(e.channel_id)),
                                                                d = e.filter((e) => E.includes(e.channel_id));
                                                            return (0, r.jsxs)('ul', {
                                                                children: [
                                                                    u.map((e) =>
                                                                        (0, r.jsx)(
                                                                            'li',
                                                                            {
                                                                                children: (0, r.jsxs)('div', {
                                                                                    className: h.onboardingChangeLogItemTitle,
                                                                                    children: [
                                                                                        (0, r.jsx)(M, {
                                                                                            actionType: p.vB8.CREATE,
                                                                                            targetType: s,
                                                                                            action: a
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
                                                                    d.map((e) =>
                                                                        (0, r.jsx)(
                                                                            'li',
                                                                            {
                                                                                children: (0, r.jsxs)('div', {
                                                                                    className: h.onboardingChangeLogItemTitle,
                                                                                    children: [
                                                                                        (0, r.jsx)(M, {
                                                                                            actionType: p.vB8.DELETE,
                                                                                            targetType: s,
                                                                                            action: a
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
                                                    case p.zUn.RESOURCE_CHANNELS:
                                                        return ((e, t) => {
                                                            let n = e.map((e) => e.channel_id),
                                                                l = t.map((e) => e.channel_id),
                                                                i = o().difference(l, n),
                                                                E = o().difference(n, l),
                                                                u = t.filter((e) => i.includes(e.channel_id)),
                                                                d = e.filter((e) => E.includes(e.channel_id));
                                                            return (0, r.jsxs)('ul', {
                                                                children: [
                                                                    u.map((e) =>
                                                                        (0, r.jsx)(
                                                                            'li',
                                                                            {
                                                                                children: (0, r.jsxs)('div', {
                                                                                    className: h.onboardingChangeLogItemTitle,
                                                                                    children: [
                                                                                        (0, r.jsx)(M, {
                                                                                            actionType: p.vB8.CREATE,
                                                                                            targetType: s,
                                                                                            action: a
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
                                                                    d.map((e) =>
                                                                        (0, r.jsx)(
                                                                            'li',
                                                                            {
                                                                                children: (0, r.jsxs)('div', {
                                                                                    className: h.onboardingChangeLogItemTitle,
                                                                                    children: [
                                                                                        (0, r.jsx)(M, {
                                                                                            actionType: p.vB8.DELETE,
                                                                                            targetType: s,
                                                                                            action: a
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
                                    _ = e[i.key],
                                    R = 'function' == typeof _ ? _(i) : _;
                                return (function (e) {
                                    var t, n;
                                    let { changeItem: l, subChanges: i, changeNumber: s, log: a, oldValue: o, newValue: E, change: u } = e;
                                    if (null == l) return console.warn('No change string for', u), null;
                                    let _ = D.intl.format(l, {
                                        oldValue: o,
                                        newValue: E,
                                        count: Array.isArray(E) ? E.length : null,
                                        subtarget: null !== (n = null !== (t = a.options.subtarget) && void 0 !== t ? t : u.subtarget) && void 0 !== n ? n : null,
                                        newColorHook: (e, t) =>
                                            (0, r.jsx)(
                                                'div',
                                                {
                                                    className: h.colorHook,
                                                    style: { backgroundColor: u.newValue }
                                                },
                                                t
                                            ),
                                        oldColorHook: (e, t) =>
                                            (0, r.jsx)(
                                                'div',
                                                {
                                                    className: h.colorHook,
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
                                        oldEmojiHook: (e, t) => (0, r.jsx)(d.Z, { emojiId: o }, t),
                                        newEmojiHook: (e, t) => (0, r.jsx)(d.Z, { emojiId: E }, t),
                                        applicationHook: (e, t) => {
                                            var n;
                                            return (0, r.jsx)(L, { applicationId: null !== (n = null == o ? void 0 : o.application_id) && void 0 !== n ? n : null == E ? void 0 : E.application_id }, t);
                                        }
                                    });
                                    return null == _
                                        ? null
                                        : (0, r.jsxs)(
                                              'div',
                                              {
                                                  className: h.detail,
                                                  style: {
                                                      position: 'relative',
                                                      top: 1
                                                  },
                                                  children: [
                                                      (0, r.jsxs)(c.Text, {
                                                          className: h.prefix,
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
                                                          })(a.actionType),
                                                          children: [
                                                              s < 10 ? '0'.concat(s) : s,
                                                              (0, r.jsx)('span', {
                                                                  className: h.dash,
                                                                  children: '\u2014'
                                                              })
                                                          ]
                                                      }),
                                                      (0, r.jsxs)('div', {
                                                          className: h.change,
                                                          children: [
                                                              (0, r.jsx)('div', {
                                                                  className: h.changeStr,
                                                                  children: _
                                                              }),
                                                              null != i ? (0, r.jsx)('div', { children: i }) : null
                                                          ]
                                                      })
                                                  ]
                                              },
                                              s
                                          );
                                })({
                                    changeItem: R,
                                    subChanges: E,
                                    changeNumber: ++l,
                                    log: t,
                                    oldValue: s,
                                    newValue: a,
                                    change: i
                                });
                            })
                        )
                        .filter(N.lm);
                return (0, r.jsx)(c.Clickable, {
                    onClick: i,
                    className: s()(h.changeDetails, a),
                    children: E
                });
            },
            [t, n, i, a]
        ),
        _ = l.useMemo(() => {
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
            }
        }, [t.targetType, t.changes, E]);
    return (0, r.jsx)(r.Fragment, { children: _ });
}
