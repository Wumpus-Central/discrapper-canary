n.d(t, {
    mp: () => M,
    tP: () => m,
    xO: () => p
}),
    n(539854),
    n(953529);
var r = n(200651),
    l = n(192379),
    s = n(120356),
    a = n.n(s),
    i = n(392711),
    o = n.n(i),
    E = n(913527),
    u = n.n(E),
    c = n(481060),
    _ = n(596454),
    d = n(835473),
    A = n(479099),
    T = n(592125),
    N = n(430824),
    I = n(594174),
    O = n(934415),
    R = n(823379),
    g = n(624138),
    f = n(51144),
    S = n(909746),
    U = n(981631),
    h = n(388032),
    L = n(418797);
function p(e, t) {
    let n = S.vc[e.targetType];
    return null != n && !0 === n[t.key];
}
let D = {
    [U.vB8.CREATE]: L.typeCreate,
    [U.vB8.UPDATE]: L.typeUpdate,
    [U.vB8.DELETE]: L.typeDelete
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
            s = null != l ? L['themeOverride'.concat((0, g.De)(l))] : null,
            i = a()(
                L.icon,
                D[e],
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
        return (0, r.jsx)('div', { className: i });
    }
}
function m(e) {
    let { log: t, guild: n, onContentClick: s, className: i } = e,
        E = l.useCallback(
            (e) => {
                if (null == t.changes) return null;
                let l = 0,
                    E = o()
                        .flatten(
                            t.changes.map((s) => {
                                if (p(t, s)) return null;
                                let { oldValue: a, newValue: i } = (() => {
                                        if ((t.action === U.rsA.CHANNEL_UPDATE || t.action === U.rsA.CHANNEL_CREATE) && s.key === U.zUn.TYPE) {
                                            var e, n;
                                            return {
                                                oldValue: null != (e = s.oldValue) ? e : (0, O.a5)({ type: s.oldValue }),
                                                newValue: null != (n = s.newValue) ? n : (0, O.a5)({ type: s.newValue })
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
                                                  oldValue: f.ZP.getUserTag(s.oldValue, { mode: 'username' }),
                                                  newValue: f.ZP.getUserTag(s.newValue, { mode: 'username' })
                                              }
                                            : s;
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
                                                                  children: S.hQ(e, t)
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
                                                                    className: L.subListItem,
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
                                        if ((t.action === U.rsA.ONBOARDING_PROMPT_UPDATE || t.action === U.rsA.ONBOARDING_PROMPT_CREATE) && s.key === U.zUn.OPTIONS)
                                            return (function (e, t, n) {
                                                let { newValue: l, oldValue: s } = e,
                                                    a = (e) => {
                                                        var t;
                                                        let r = null != n ? (null == (t = N.Z.getRole(n.id, e)) ? void 0 : t.name) : void 0;
                                                        return null == r ? null : '@'.concat(r);
                                                    },
                                                    i = (e) => {
                                                        var t;
                                                        let n = null == (t = T.Z.getChannel(e)) ? void 0 : t.name;
                                                        return null == n ? null : '#'.concat(n);
                                                    },
                                                    E = (e, n) => {
                                                        let { title: l, id: s } = n,
                                                            E = e.role_ids.map(a).filter(R.lm),
                                                            u = e.channel_ids.map(i).filter(R.lm),
                                                            _ = n.role_ids.map(a).filter(R.lm),
                                                            d = n.channel_ids.map(i).filter(R.lm),
                                                            A = o().difference(_, E),
                                                            T = o().difference(E, _),
                                                            N = o().difference(d, u),
                                                            I = o().difference(u, d),
                                                            O = [];
                                                        return (o().isEqual(e.title, n.title) || O.push('title'), o().isEqual(e.description, n.description) || O.push('description'), 0 === A.length && 0 === T.length && 0 === N.length && 0 === I.length && 0 === O.length)
                                                            ? null
                                                            : (0, r.jsxs)(
                                                                  'li',
                                                                  {
                                                                      children: [
                                                                          (0, r.jsxs)('div', {
                                                                              className: L.onboardingChangeLogItemTitle,
                                                                              children: [
                                                                                  (0, r.jsx)(M, {
                                                                                      actionType: U.vB8.UPDATE,
                                                                                      targetType: t.targetType,
                                                                                      action: t.action
                                                                                  }),
                                                                                  (0, r.jsx)(c.Text, {
                                                                                      variant: 'text-md/normal',
                                                                                      children: h.NW.format(h.t['WZO+iY'], { title: l })
                                                                                  })
                                                                              ]
                                                                          }),
                                                                          (0, r.jsxs)('div', {
                                                                              className: L.onboardingChangeLogItemChanges,
                                                                              children: [
                                                                                  A.length > 0 &&
                                                                                      (0, r.jsx)(c.Text, {
                                                                                          variant: 'text-md/normal',
                                                                                          children: h.NW.format(h.t['R+km+f'], { roles: A.join(', ') })
                                                                                      }),
                                                                                  T.length > 0 &&
                                                                                      (0, r.jsx)(c.Text, {
                                                                                          variant: 'text-md/normal',
                                                                                          children: h.NW.format(h.t.xIVRoa, { roles: T.join(', ') })
                                                                                      }),
                                                                                  N.length > 0 &&
                                                                                      (0, r.jsx)(c.Text, {
                                                                                          variant: 'text-md/normal',
                                                                                          children: h.NW.format(h.t.iYowX1, { channels: N.join(', ') })
                                                                                      }),
                                                                                  I.length > 0 &&
                                                                                      (0, r.jsx)(c.Text, {
                                                                                          variant: 'text-md/normal',
                                                                                          children: h.NW.format(h.t.JLdJpK, { channels: I.join(', ') })
                                                                                      }),
                                                                                  O.map((t, l) =>
                                                                                      (0, r.jsx)(
                                                                                          c.Text,
                                                                                          {
                                                                                              variant: 'text-md/normal',
                                                                                              children: h.NW.format(h.t['0698zc'], {
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
                                                    I = o().intersection(Object.keys(_), Object.keys(u));
                                                return (0, r.jsxs)(
                                                    'ul',
                                                    {
                                                        className: L.onboardingChangeLogContainer,
                                                        children: [
                                                            d.map((e) => {
                                                                let { role_ids: n, channel_ids: l, title: s, id: o } = e,
                                                                    E = (null != n ? n : []).map(a).filter(R.lm),
                                                                    u = (null != l ? l : []).map(i).filter(R.lm);
                                                                return (0, r.jsxs)(
                                                                    'li',
                                                                    {
                                                                        children: [
                                                                            (0, r.jsxs)('div', {
                                                                                className: L.onboardingChangeLogItemTitle,
                                                                                children: [
                                                                                    (0, r.jsx)(M, {
                                                                                        actionType: U.vB8.CREATE,
                                                                                        targetType: t.targetType,
                                                                                        action: t.action
                                                                                    }),
                                                                                    (0, r.jsx)(c.Text, {
                                                                                        variant: 'text-md/normal',
                                                                                        children: h.NW.format(h.t.CZ1tys, { title: s })
                                                                                    })
                                                                                ]
                                                                            }),
                                                                            (0, r.jsxs)('div', {
                                                                                className: L.onboardingChangeLogItemChanges,
                                                                                children: [
                                                                                    E.length > 0 &&
                                                                                        (0, r.jsx)(c.Text, {
                                                                                            variant: 'text-md/normal',
                                                                                            children: h.NW.format(h.t['gt/5z8'], { roles: E.join(', ') })
                                                                                        }),
                                                                                    u.length > 0 &&
                                                                                        (0, r.jsx)(c.Text, {
                                                                                            variant: 'text-md/normal',
                                                                                            children: h.NW.format(h.t['4q006e'], { channels: u.join(', ') })
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
                                                                                (0, r.jsx)(M, {
                                                                                    actionType: U.vB8.DELETE,
                                                                                    targetType: t.targetType,
                                                                                    action: t.action
                                                                                }),
                                                                                (0, r.jsx)(c.Text, {
                                                                                    variant: 'text-md/normal',
                                                                                    children: h.NW.format(h.t['m3dt+P'], { title: e.title })
                                                                                })
                                                                            ]
                                                                        })
                                                                    },
                                                                    e.id
                                                                )
                                                            ),
                                                            I.map((e) => E(u[e], _[e]))
                                                        ]
                                                    },
                                                    'options'
                                                );
                                            })(s, t, n);
                                        if (t.action === U.rsA.HOME_SETTINGS_CREATE || t.action === U.rsA.HOME_SETTINGS_UPDATE)
                                            return (function (e, t) {
                                                let { oldValue: n, newValue: l, key: s } = e,
                                                    { targetType: a, action: i } = t;
                                                switch (s) {
                                                    case U.zUn.WELCOME_MESSAGE:
                                                        return ((e, t) => {
                                                            var n, l, s, a, i;
                                                            let o = I.default.getUser(null == t || null == (n = t.author_ids) ? void 0 : n[0]),
                                                                E = I.default.getUser(null == (l = e.author_ids) ? void 0 : l[0]),
                                                                u =
                                                                    (null == o ? void 0 : o.id) !== (null == E ? void 0 : E.id)
                                                                        ? (0, r.jsx)('li', {
                                                                              children: (0, r.jsx)('div', {
                                                                                  className: L.onboardingChangeLogItemTitle,
                                                                                  children: (0, r.jsx)(c.Text, {
                                                                                      variant: 'text-md/normal',
                                                                                      children: h.NW.format(h.t.PrOzAw, {
                                                                                          oldUser: null != (s = null == o ? void 0 : o.username) ? s : h.NW.string(h.t.PoWNfX),
                                                                                          newUser: null != (a = null == E ? void 0 : E.username) ? a : h.NW.string(h.t.PoWNfX)
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
                                                                                      children: h.NW.format(h.t.oB7rBQ, {
                                                                                          oldMessage: null != (i = null == t ? void 0 : t.message) ? i : h.NW.string(h.t.PoWNfX),
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
                                                                                    className: L.onboardingChangeLogItemTitle,
                                                                                    children: [
                                                                                        (0, r.jsx)(M, {
                                                                                            actionType: U.vB8.CREATE,
                                                                                            targetType: a,
                                                                                            action: i
                                                                                        }),
                                                                                        (0, r.jsx)(c.Text, {
                                                                                            variant: 'text-md/normal',
                                                                                            children: h.NW.format(h.t['oFSu6+'], { name: e.title })
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
                                                                                        (0, r.jsx)(M, {
                                                                                            actionType: U.vB8.DELETE,
                                                                                            targetType: a,
                                                                                            action: i
                                                                                        }),
                                                                                        (0, r.jsx)(c.Text, {
                                                                                            variant: 'text-md/normal',
                                                                                            children: h.NW.format(h.t.GssWam, { name: e.title })
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
                                                                                        (0, r.jsx)(M, {
                                                                                            actionType: U.vB8.CREATE,
                                                                                            targetType: a,
                                                                                            action: i
                                                                                        }),
                                                                                        (0, r.jsx)(c.Text, {
                                                                                            variant: 'text-md/normal',
                                                                                            children: h.NW.format(h.t.HlGndH, { name: e.title })
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
                                                                                        (0, r.jsx)(M, {
                                                                                            actionType: U.vB8.DELETE,
                                                                                            targetType: a,
                                                                                            action: i
                                                                                        }),
                                                                                        (0, r.jsx)(c.Text, {
                                                                                            variant: 'text-md/normal',
                                                                                            children: h.NW.format(h.t['7pysg4'], { name: e.title })
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
                                    let { changeItem: l, subChanges: s, changeNumber: a, log: i, oldValue: o, newValue: E, change: u } = e;
                                    if (null == l) return console.warn('No change string for', u), null;
                                    let d = h.NW.format(l, {
                                        oldValue: o,
                                        newValue: E,
                                        count: Array.isArray(E) ? E.length : null,
                                        subtarget: null != (n = null != (t = i.options.subtarget) ? t : u.subtarget) ? n : null,
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
                                            return (0, r.jsx)(C, { applicationId: null != (n = null == o ? void 0 : o.application_id) ? n : null == E ? void 0 : E.application_id }, t);
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
                                                                  case U.vB8.CREATE:
                                                                      return 'text-positive';
                                                                  case U.vB8.DELETE:
                                                                      return 'status-danger';
                                                                  default:
                                                                      return 'text-warning';
                                                              }
                                                          })(i.actionType),
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
                                                              null != s ? (0, r.jsx)('div', { children: s }) : null
                                                          ]
                                                      })
                                                  ]
                                              },
                                              a
                                          );
                                })({
                                    changeItem: 'function' == typeof d ? d(s) : d,
                                    subChanges: E,
                                    changeNumber: ++l,
                                    log: t,
                                    oldValue: a,
                                    newValue: i,
                                    change: s
                                });
                            })
                        )
                        .filter(R.lm);
                return (0, r.jsx)(c.P3F, {
                    onClick: s,
                    className: a()(L.changeDetails, i),
                    children: E
                });
            },
            [t, n, s, i]
        );
    return l.useMemo(() => {
        switch (t.targetType) {
            case U.KFR.GUILD:
                return E(S.pY());
            case U.KFR.CHANNEL:
            case U.KFR.CHANNEL_OVERWRITE:
                return E(S.ML());
            case U.KFR.USER:
                return E(S.lU());
            case U.KFR.ROLE:
                return E(S.HE());
            case U.KFR.ONBOARDING_PROMPT:
                return E(S.oD());
            case U.KFR.GUILD_ONBOARDING:
                return E(S.EN());
            case U.KFR.HOME_SETTINGS:
                return E(S.hx());
            case U.KFR.INVITE:
                return E(S.HN());
            case U.KFR.WEBHOOK:
                return E(S.lR());
            case U.KFR.EMOJI:
                return E(S.N$());
            case U.KFR.STICKER:
                return E(S.Bq());
            case U.KFR.INTEGRATION:
                return E(S.K());
            case U.KFR.STAGE_INSTANCE:
                return E(S.C2());
            case U.KFR.GUILD_SCHEDULED_EVENT:
                return E(S.uB());
            case U.KFR.GUILD_SCHEDULED_EVENT_EXCEPTION:
                return E(S.pi());
            case U.KFR.THREAD:
                return E(S.pA());
            case U.KFR.APPLICATION_COMMAND:
                return E(S.vm(t.changes));
            case U.KFR.AUTO_MODERATION_RULE:
                return E(S.rK());
            case U.KFR.GUILD_SOUNDBOARD:
                return E(S.C0());
            case U.KFR.VOICE_CHANNEL_STATUS:
                return E(S.F1());
            case U.KFR.GUILD_MEMBER_VERIFICATION:
                return E(S.JA());
            case U.KFR.GUILD_PROFILE:
                return E(S.zT());
        }
    }, [t.targetType, t.changes, E]);
}
