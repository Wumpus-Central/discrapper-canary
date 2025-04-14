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
    a = n.n(s),
    o = n(392711),
    i = n.n(o),
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
    R = n(823379),
    g = n(624138),
    f = n(51144),
    S = n(909746),
    p = n(981631),
    h = n(388032),
    U = n(677234);
function L(e, t) {
    let n = S.vc[e.targetType];
    return null != n && !0 === n[t.key];
}
let D = {
    [p.vB8.CREATE]: U.typeCreate,
    [p.vB8.UPDATE]: U.typeUpdate,
    [p.vB8.DELETE]: U.typeDelete
};
function C(e) {
    let { applicationId: t } = e,
        n = (0, d.q)(t);
    return null == n
        ? null
        : (0, r.jsx)(u.Text, {
              variant: 'text-md/normal',
              children: n.name
          });
}
class M extends l.PureComponent {
    render() {
        let { actionType: e, targetType: t, action: n, themeOverride: l } = this.props,
            s = null != l ? U['themeOverride'.concat((0, g.De)(l))] : null,
            o = a()(
                U.icon,
                D[e],
                n === p.rsA.MESSAGE_DELETE
                    ? U.targetMessage
                    : n === p.rsA.AUTO_MODERATION_BLOCK_MESSAGE || n === p.rsA.AUTO_MODERATION_FLAG_TO_CHANNEL || n === p.rsA.AUTO_MODERATION_USER_COMMUNICATION_DISABLED || n === p.rsA.AUTO_MODERATION_QUARANTINE_USER
                      ? U.autoModerationBlockMessage
                      : {
                            [p.KFR.ALL]: U.targetAll,
                            [p.KFR.GUILD]: U.targetGuild,
                            [p.KFR.CHANNEL]: U.targetChannel,
                            [p.KFR.CHANNEL_OVERWRITE]: U.targetChannel,
                            [p.KFR.USER]: U.targetMember,
                            [p.KFR.ROLE]: U.targetRole,
                            [p.KFR.ONBOARDING_PROMPT]: U.targetOnboarding,
                            [p.KFR.GUILD_ONBOARDING]: U.targetOnboarding,
                            [p.KFR.HOME_SETTINGS]: U.targetOnboarding,
                            [p.KFR.INTEGRATION]: U.targetIntegration,
                            [p.KFR.INVITE]: U.targetInvite,
                            [p.KFR.WEBHOOK]: U.targetWebhook,
                            [p.KFR.EMOJI]: U.targetEmoji,
                            [p.KFR.STICKER]: U.targetSticker,
                            [p.KFR.STAGE_INSTANCE]: U.targetStageInstance,
                            [p.KFR.GUILD_SCHEDULED_EVENT]: U.targetGuildScheduledEvent,
                            [p.KFR.GUILD_SCHEDULED_EVENT_EXCEPTION]: U.targetGuildScheduledEvent,
                            [p.KFR.THREAD]: U.thread,
                            [p.KFR.APPLICATION_COMMAND]: U.applicationCommand,
                            [p.KFR.AUTO_MODERATION_RULE]: U.autoModerationRule,
                            [p.KFR.GUILD_HOME]: U.targetGuildHome,
                            [p.KFR.GUILD_SOUNDBOARD]: U.targetGuildSoundboard,
                            [p.KFR.VOICE_CHANNEL_STATUS]: U.targetChannel,
                            [p.KFR.GUILD_MEMBER_VERIFICATION]: U.targetMember,
                            [p.KFR.GUILD_PROFILE]: U.targetGuild
                        }[t],
                s
            );
        return (0, r.jsx)('div', { className: o });
    }
}
function m(e) {
    let { log: t, guild: n, onContentClick: s, className: o } = e,
        E = l.useCallback(
            (e) => {
                if (null == t.changes) return null;
                let l = 0,
                    E = i()
                        .flatten(
                            t.changes.map((s) => {
                                if (L(t, s)) return null;
                                let { oldValue: a, newValue: o } = (() => {
                                        if ((t.action === p.rsA.CHANNEL_UPDATE || t.action === p.rsA.CHANNEL_CREATE) && s.key === p.zUn.TYPE) {
                                            var e, n;
                                            return {
                                                oldValue: null != (e = s.oldValue) ? e : (0, O.a5)({ type: s.oldValue }),
                                                newValue: null != (n = s.newValue) ? n : (0, O.a5)({ type: s.newValue })
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
                                                  oldValue: f.ZP.getUserTag(s.oldValue, { mode: 'username' }),
                                                  newValue: f.ZP.getUserTag(s.newValue, { mode: 'username' })
                                              }
                                            : s;
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
                                                                  className: U.subListItem,
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
                                                                  className: U.subListItem,
                                                                  children: S.hQ(e, t)
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
                                                                    className: U.subListItem,
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
                                                                    className: U.subListItem,
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
                                        if ((t.action === p.rsA.ONBOARDING_PROMPT_UPDATE || t.action === p.rsA.ONBOARDING_PROMPT_CREATE) && s.key === p.zUn.OPTIONS)
                                            return (function (e, t, n) {
                                                let { newValue: l, oldValue: s } = e,
                                                    a = (e) => {
                                                        var t;
                                                        let r = null != n ? (null == (t = N.Z.getRole(n.id, e)) ? void 0 : t.name) : void 0;
                                                        return null == r ? null : '@'.concat(r);
                                                    },
                                                    o = (e) => {
                                                        var t;
                                                        let n = null == (t = T.Z.getChannel(e)) ? void 0 : t.name;
                                                        return null == n ? null : '#'.concat(n);
                                                    },
                                                    E = (e, n) => {
                                                        let { title: l, id: s } = n,
                                                            E = e.role_ids.map(a).filter(R.lm),
                                                            c = e.channel_ids.map(o).filter(R.lm),
                                                            _ = n.role_ids.map(a).filter(R.lm),
                                                            d = n.channel_ids.map(o).filter(R.lm),
                                                            A = i().difference(_, E),
                                                            T = i().difference(E, _),
                                                            N = i().difference(d, c),
                                                            I = i().difference(c, d),
                                                            O = [];
                                                        return (i().isEqual(e.title, n.title) || O.push('title'), i().isEqual(e.description, n.description) || O.push('description'), 0 === A.length && 0 === T.length && 0 === N.length && 0 === I.length && 0 === O.length)
                                                            ? null
                                                            : (0, r.jsxs)(
                                                                  'li',
                                                                  {
                                                                      children: [
                                                                          (0, r.jsxs)('div', {
                                                                              className: U.onboardingChangeLogItemTitle,
                                                                              children: [
                                                                                  (0, r.jsx)(M, {
                                                                                      actionType: p.vB8.UPDATE,
                                                                                      targetType: t.targetType,
                                                                                      action: t.action
                                                                                  }),
                                                                                  (0, r.jsx)(u.Text, {
                                                                                      variant: 'text-md/normal',
                                                                                      children: h.NW.format(h.t['WZO+iY'], { title: l })
                                                                                  })
                                                                              ]
                                                                          }),
                                                                          (0, r.jsxs)('div', {
                                                                              className: U.onboardingChangeLogItemChanges,
                                                                              children: [
                                                                                  A.length > 0 &&
                                                                                      (0, r.jsx)(u.Text, {
                                                                                          variant: 'text-md/normal',
                                                                                          children: h.NW.format(h.t['R+km+f'], { roles: A.join(', ') })
                                                                                      }),
                                                                                  T.length > 0 &&
                                                                                      (0, r.jsx)(u.Text, {
                                                                                          variant: 'text-md/normal',
                                                                                          children: h.NW.format(h.t.xIVRoa, { roles: T.join(', ') })
                                                                                      }),
                                                                                  N.length > 0 &&
                                                                                      (0, r.jsx)(u.Text, {
                                                                                          variant: 'text-md/normal',
                                                                                          children: h.NW.format(h.t.iYowX1, { channels: N.join(', ') })
                                                                                      }),
                                                                                  I.length > 0 &&
                                                                                      (0, r.jsx)(u.Text, {
                                                                                          variant: 'text-md/normal',
                                                                                          children: h.NW.format(h.t.JLdJpK, { channels: I.join(', ') })
                                                                                      }),
                                                                                  O.map((t, l) =>
                                                                                      (0, r.jsx)(
                                                                                          u.Text,
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
                                                    c = i().keyBy(null != s ? s : [], 'id'),
                                                    _ = i().keyBy(null != l ? l : [], 'id'),
                                                    d = i()
                                                        .difference(Object.keys(_), Object.keys(c))
                                                        .map((e) => _[e]),
                                                    A = i()
                                                        .difference(Object.keys(c), Object.keys(_))
                                                        .map((e) => c[e]),
                                                    I = i().intersection(Object.keys(_), Object.keys(c));
                                                return (0, r.jsxs)(
                                                    'ul',
                                                    {
                                                        className: U.onboardingChangeLogContainer,
                                                        children: [
                                                            d.map((e) => {
                                                                let { role_ids: n, channel_ids: l, title: s, id: i } = e,
                                                                    E = (null != n ? n : []).map(a).filter(R.lm),
                                                                    c = (null != l ? l : []).map(o).filter(R.lm);
                                                                return (0, r.jsxs)(
                                                                    'li',
                                                                    {
                                                                        children: [
                                                                            (0, r.jsxs)('div', {
                                                                                className: U.onboardingChangeLogItemTitle,
                                                                                children: [
                                                                                    (0, r.jsx)(M, {
                                                                                        actionType: p.vB8.CREATE,
                                                                                        targetType: t.targetType,
                                                                                        action: t.action
                                                                                    }),
                                                                                    (0, r.jsx)(u.Text, {
                                                                                        variant: 'text-md/normal',
                                                                                        children: h.NW.format(h.t.CZ1tys, { title: s })
                                                                                    })
                                                                                ]
                                                                            }),
                                                                            (0, r.jsxs)('div', {
                                                                                className: U.onboardingChangeLogItemChanges,
                                                                                children: [
                                                                                    E.length > 0 &&
                                                                                        (0, r.jsx)(u.Text, {
                                                                                            variant: 'text-md/normal',
                                                                                            children: h.NW.format(h.t['gt/5z8'], { roles: E.join(', ') })
                                                                                        }),
                                                                                    c.length > 0 &&
                                                                                        (0, r.jsx)(u.Text, {
                                                                                            variant: 'text-md/normal',
                                                                                            children: h.NW.format(h.t['4q006e'], { channels: c.join(', ') })
                                                                                        })
                                                                                ]
                                                                            })
                                                                        ]
                                                                    },
                                                                    i
                                                                );
                                                            }),
                                                            A.map((e) =>
                                                                (0, r.jsx)(
                                                                    'li',
                                                                    {
                                                                        children: (0, r.jsxs)('div', {
                                                                            className: U.onboardingChangeLogItemTitle,
                                                                            children: [
                                                                                (0, r.jsx)(M, {
                                                                                    actionType: p.vB8.DELETE,
                                                                                    targetType: t.targetType,
                                                                                    action: t.action
                                                                                }),
                                                                                (0, r.jsx)(u.Text, {
                                                                                    variant: 'text-md/normal',
                                                                                    children: h.NW.format(h.t['m3dt+P'], { title: e.title })
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
                                            })(s, t, n);
                                        if (t.action === p.rsA.HOME_SETTINGS_CREATE || t.action === p.rsA.HOME_SETTINGS_UPDATE)
                                            return (function (e, t) {
                                                let { oldValue: n, newValue: l, key: s } = e,
                                                    { targetType: a, action: o } = t;
                                                switch (s) {
                                                    case p.zUn.WELCOME_MESSAGE:
                                                        return ((e, t) => {
                                                            var n, l, s, a, o;
                                                            let i = I.default.getUser(null == t || null == (n = t.author_ids) ? void 0 : n[0]),
                                                                E = I.default.getUser(null == (l = e.author_ids) ? void 0 : l[0]),
                                                                c =
                                                                    (null == i ? void 0 : i.id) !== (null == E ? void 0 : E.id)
                                                                        ? (0, r.jsx)('li', {
                                                                              children: (0, r.jsx)('div', {
                                                                                  className: U.onboardingChangeLogItemTitle,
                                                                                  children: (0, r.jsx)(u.Text, {
                                                                                      variant: 'text-md/normal',
                                                                                      children: h.NW.format(h.t.PrOzAw, {
                                                                                          oldUser: null != (s = null == i ? void 0 : i.username) ? s : h.NW.string(h.t.PoWNfX),
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
                                                                                  className: U.onboardingChangeLogItemTitle,
                                                                                  children: (0, r.jsx)(u.Text, {
                                                                                      variant: 'text-md/normal',
                                                                                      children: h.NW.format(h.t.oB7rBQ, {
                                                                                          oldMessage: null != (o = null == t ? void 0 : t.message) ? o : h.NW.string(h.t.PoWNfX),
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
                                                                s = i().difference(l, n),
                                                                E = i().difference(n, l),
                                                                c = t.filter((e) => s.includes(e.channel_id)),
                                                                _ = e.filter((e) => E.includes(e.channel_id));
                                                            return (0, r.jsxs)('ul', {
                                                                children: [
                                                                    c.map((e) =>
                                                                        (0, r.jsx)(
                                                                            'li',
                                                                            {
                                                                                children: (0, r.jsxs)('div', {
                                                                                    className: U.onboardingChangeLogItemTitle,
                                                                                    children: [
                                                                                        (0, r.jsx)(M, {
                                                                                            actionType: p.vB8.CREATE,
                                                                                            targetType: a,
                                                                                            action: o
                                                                                        }),
                                                                                        (0, r.jsx)(u.Text, {
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
                                                                                    className: U.onboardingChangeLogItemTitle,
                                                                                    children: [
                                                                                        (0, r.jsx)(M, {
                                                                                            actionType: p.vB8.DELETE,
                                                                                            targetType: a,
                                                                                            action: o
                                                                                        }),
                                                                                        (0, r.jsx)(u.Text, {
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
                                                    case p.zUn.RESOURCE_CHANNELS:
                                                        return ((e, t) => {
                                                            let n = e.map((e) => e.channel_id),
                                                                l = t.map((e) => e.channel_id),
                                                                s = i().difference(l, n),
                                                                E = i().difference(n, l),
                                                                c = t.filter((e) => s.includes(e.channel_id)),
                                                                _ = e.filter((e) => E.includes(e.channel_id));
                                                            return (0, r.jsxs)('ul', {
                                                                children: [
                                                                    c.map((e) =>
                                                                        (0, r.jsx)(
                                                                            'li',
                                                                            {
                                                                                children: (0, r.jsxs)('div', {
                                                                                    className: U.onboardingChangeLogItemTitle,
                                                                                    children: [
                                                                                        (0, r.jsx)(M, {
                                                                                            actionType: p.vB8.CREATE,
                                                                                            targetType: a,
                                                                                            action: o
                                                                                        }),
                                                                                        (0, r.jsx)(u.Text, {
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
                                                                                    className: U.onboardingChangeLogItemTitle,
                                                                                    children: [
                                                                                        (0, r.jsx)(M, {
                                                                                            actionType: p.vB8.DELETE,
                                                                                            targetType: a,
                                                                                            action: o
                                                                                        }),
                                                                                        (0, r.jsx)(u.Text, {
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
                                    let { changeItem: l, subChanges: s, changeNumber: a, log: o, oldValue: i, newValue: E, change: c } = e;
                                    if (null == l) return console.warn('No change string for', c), null;
                                    let d = h.NW.format(l, {
                                        oldValue: i,
                                        newValue: E,
                                        count: Array.isArray(E) ? E.length : null,
                                        subtarget: null != (n = null != (t = o.options.subtarget) ? t : c.subtarget) ? n : null,
                                        newColorHook: (e, t) =>
                                            (0, r.jsx)(
                                                'div',
                                                {
                                                    className: U.colorHook,
                                                    style: { backgroundColor: c.newValue }
                                                },
                                                t
                                            ),
                                        oldColorHook: (e, t) =>
                                            (0, r.jsx)(
                                                'div',
                                                {
                                                    className: U.colorHook,
                                                    style: { backgroundColor: c.oldValue }
                                                },
                                                t
                                            ),
                                        oldTagHook: (e, t) =>
                                            (0, r.jsx)(
                                                A.Z,
                                                {
                                                    tag: i,
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
                                        oldEmojiHook: (e, t) => (0, r.jsx)(_.Z, { emojiId: i }, t),
                                        newEmojiHook: (e, t) => (0, r.jsx)(_.Z, { emojiId: E }, t),
                                        applicationHook: (e, t) => {
                                            var n;
                                            return (0, r.jsx)(C, { applicationId: null != (n = null == i ? void 0 : i.application_id) ? n : null == E ? void 0 : E.application_id }, t);
                                        }
                                    });
                                    return null == d
                                        ? null
                                        : (0, r.jsxs)(
                                              'div',
                                              {
                                                  className: U.detail,
                                                  style: {
                                                      position: 'relative',
                                                      top: 1
                                                  },
                                                  children: [
                                                      (0, r.jsxs)(u.Text, {
                                                          className: U.prefix,
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
                                                              a < 10 ? '0'.concat(a) : a,
                                                              (0, r.jsx)('span', {
                                                                  className: U.dash,
                                                                  children: '\u2014'
                                                              })
                                                          ]
                                                      }),
                                                      (0, r.jsxs)('div', {
                                                          className: U.change,
                                                          children: [
                                                              (0, r.jsx)('div', {
                                                                  className: U.changeStr,
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
                                    newValue: o,
                                    change: s
                                });
                            })
                        )
                        .filter(R.lm);
                return (0, r.jsx)(u.P3F, {
                    onClick: s,
                    className: a()(U.changeDetails, o),
                    children: E
                });
            },
            [t, n, s, o]
        );
    return l.useMemo(() => {
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
}
