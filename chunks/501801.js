n.d(t, {
    mp: () => m,
    tP: () => M,
    xO: () => D
}),
    n(539854),
    n(953529);
var r = n(200651),
    l = n(192379),
    a = n(120356),
    s = n.n(a),
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
    g = n(823379),
    f = n(624138),
    R = n(51144),
    p = n(909746),
    S = n(981631),
    h = n(388032),
    U = n(677234);
function D(e, t) {
    let n = p.vc[e.targetType];
    return null != n && !0 === n[t.key];
}
let L = {
    [S.vB8.CREATE]: U.typeCreate,
    [S.vB8.UPDATE]: U.typeUpdate,
    [S.vB8.DELETE]: U.typeDelete
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
class m extends l.PureComponent {
    render() {
        let { actionType: e, targetType: t, action: n, themeOverride: l } = this.props,
            a = null != l ? U['themeOverride'.concat((0, f.De)(l))] : null,
            o = s()(
                U.icon,
                L[e],
                n === S.rsA.MESSAGE_DELETE
                    ? U.targetMessage
                    : n === S.rsA.AUTO_MODERATION_BLOCK_MESSAGE || n === S.rsA.AUTO_MODERATION_FLAG_TO_CHANNEL || n === S.rsA.AUTO_MODERATION_USER_COMMUNICATION_DISABLED || n === S.rsA.AUTO_MODERATION_QUARANTINE_USER
                      ? U.autoModerationBlockMessage
                      : {
                            [S.KFR.ALL]: U.targetAll,
                            [S.KFR.GUILD]: U.targetGuild,
                            [S.KFR.CHANNEL]: U.targetChannel,
                            [S.KFR.CHANNEL_OVERWRITE]: U.targetChannel,
                            [S.KFR.USER]: U.targetMember,
                            [S.KFR.ROLE]: U.targetRole,
                            [S.KFR.ONBOARDING_PROMPT]: U.targetOnboarding,
                            [S.KFR.GUILD_ONBOARDING]: U.targetOnboarding,
                            [S.KFR.HOME_SETTINGS]: U.targetOnboarding,
                            [S.KFR.INTEGRATION]: U.targetIntegration,
                            [S.KFR.INVITE]: U.targetInvite,
                            [S.KFR.WEBHOOK]: U.targetWebhook,
                            [S.KFR.EMOJI]: U.targetEmoji,
                            [S.KFR.STICKER]: U.targetSticker,
                            [S.KFR.STAGE_INSTANCE]: U.targetStageInstance,
                            [S.KFR.GUILD_SCHEDULED_EVENT]: U.targetGuildScheduledEvent,
                            [S.KFR.GUILD_SCHEDULED_EVENT_EXCEPTION]: U.targetGuildScheduledEvent,
                            [S.KFR.THREAD]: U.thread,
                            [S.KFR.APPLICATION_COMMAND]: U.applicationCommand,
                            [S.KFR.AUTO_MODERATION_RULE]: U.autoModerationRule,
                            [S.KFR.GUILD_HOME]: U.targetGuildHome,
                            [S.KFR.GUILD_SOUNDBOARD]: U.targetGuildSoundboard,
                            [S.KFR.VOICE_CHANNEL_STATUS]: U.targetChannel,
                            [S.KFR.GUILD_MEMBER_VERIFICATION]: U.targetMember,
                            [S.KFR.GUILD_PROFILE]: U.targetGuild
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
                    E = i()
                        .flatten(
                            t.changes.map((a) => {
                                if (D(t, a)) return null;
                                let { oldValue: s, newValue: o } = (() => {
                                        if ((t.action === S.rsA.CHANNEL_UPDATE || t.action === S.rsA.CHANNEL_CREATE) && a.key === S.zUn.TYPE) {
                                            var e, n;
                                            return {
                                                oldValue: null != (e = a.oldValue) ? e : (0, O.a5)({ type: a.oldValue }),
                                                newValue: null != (n = a.newValue) ? n : (0, O.a5)({ type: a.newValue })
                                            };
                                        }
                                        if (t.action === S.rsA.MEMBER_UPDATE && a.key === S.zUn.COMMUNICATION_DISABLED_UNTIL) {
                                            let e = c()(a.newValue);
                                            return {
                                                oldValue: a.oldValue,
                                                newValue: e.isValid() ? e.calendar() : a.newValue
                                            };
                                        }
                                        return t.action === S.rsA.GUILD_UPDATE && a.key === S.zUn.OWNER_ID
                                            ? {
                                                  oldValue: R.ZP.getUserTag(a.oldValue, { mode: 'username' }),
                                                  newValue: R.ZP.getUserTag(a.newValue, { mode: 'username' })
                                              }
                                            : a;
                                    })(),
                                    E = (() => {
                                        if (t.action === S.rsA.MEMBER_ROLE_UPDATE)
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
                                            })(a);
                                        if (t.targetType === S.KFR.ROLE || t.action === S.rsA.CHANNEL_OVERWRITE_CREATE || t.action === S.rsA.CHANNEL_OVERWRITE_UPDATE)
                                            return (function (e, t) {
                                                let { newValue: n } = e;
                                                return Array.isArray(n)
                                                    ? n.map((e, n) =>
                                                          (0, r.jsx)(
                                                              'div',
                                                              {
                                                                  className: U.subListItem,
                                                                  children: p.hQ(e, t)
                                                              },
                                                              n
                                                          )
                                                      )
                                                    : null;
                                            })(a, t);
                                        if ((t.action === S.rsA.CHANNEL_UPDATE || t.action === S.rsA.THREAD_UPDATE) && a.key === S.zUn.FLAGS)
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
                                                                    className: U.subListItem,
                                                                    children: p.em(e)
                                                                },
                                                                e
                                                            )
                                                        )
                                                    )),
                                                l.length > 0)
                                                    ? l
                                                    : null;
                                            })(a);
                                        if ((t.action === S.rsA.ONBOARDING_PROMPT_UPDATE || t.action === S.rsA.ONBOARDING_PROMPT_CREATE) && a.key === S.zUn.OPTIONS)
                                            return (function (e, t, n) {
                                                let { newValue: l, oldValue: a } = e,
                                                    s = (e) => {
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
                                                        let { title: l, id: a } = n,
                                                            E = e.role_ids.map(s).filter(g.lm),
                                                            c = e.channel_ids.map(o).filter(g.lm),
                                                            _ = n.role_ids.map(s).filter(g.lm),
                                                            d = n.channel_ids.map(o).filter(g.lm),
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
                                                                                  (0, r.jsx)(m, {
                                                                                      actionType: S.vB8.UPDATE,
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
                                                                  a
                                                              );
                                                    },
                                                    c = i().keyBy(null != a ? a : [], 'id'),
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
                                                                let { role_ids: n, channel_ids: l, title: a, id: i } = e,
                                                                    E = (null != n ? n : []).map(s).filter(g.lm),
                                                                    c = (null != l ? l : []).map(o).filter(g.lm);
                                                                return (0, r.jsxs)(
                                                                    'li',
                                                                    {
                                                                        children: [
                                                                            (0, r.jsxs)('div', {
                                                                                className: U.onboardingChangeLogItemTitle,
                                                                                children: [
                                                                                    (0, r.jsx)(m, {
                                                                                        actionType: S.vB8.CREATE,
                                                                                        targetType: t.targetType,
                                                                                        action: t.action
                                                                                    }),
                                                                                    (0, r.jsx)(u.Text, {
                                                                                        variant: 'text-md/normal',
                                                                                        children: h.NW.format(h.t.CZ1tys, { title: a })
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
                                                                                (0, r.jsx)(m, {
                                                                                    actionType: S.vB8.DELETE,
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
                                            })(a, t, n);
                                        if (t.action === S.rsA.HOME_SETTINGS_CREATE || t.action === S.rsA.HOME_SETTINGS_UPDATE)
                                            return (function (e, t) {
                                                let { oldValue: n, newValue: l, key: a } = e,
                                                    { targetType: s, action: o } = t;
                                                switch (a) {
                                                    case S.zUn.WELCOME_MESSAGE:
                                                        return ((e, t) => {
                                                            var n, l, a, s, o;
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
                                                                                          oldUser: null != (a = null == i ? void 0 : i.username) ? a : h.NW.string(h.t.PoWNfX),
                                                                                          newUser: null != (s = null == E ? void 0 : E.username) ? s : h.NW.string(h.t.PoWNfX)
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
                                                    case S.zUn.NEW_MEMBER_ACTIONS:
                                                        return ((e, t) => {
                                                            let n = e.map((e) => e.channel_id),
                                                                l = t.map((e) => e.channel_id),
                                                                a = i().difference(l, n),
                                                                E = i().difference(n, l),
                                                                c = t.filter((e) => a.includes(e.channel_id)),
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
                                                                                        (0, r.jsx)(m, {
                                                                                            actionType: S.vB8.CREATE,
                                                                                            targetType: s,
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
                                                                                        (0, r.jsx)(m, {
                                                                                            actionType: S.vB8.DELETE,
                                                                                            targetType: s,
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
                                                    case S.zUn.RESOURCE_CHANNELS:
                                                        return ((e, t) => {
                                                            let n = e.map((e) => e.channel_id),
                                                                l = t.map((e) => e.channel_id),
                                                                a = i().difference(l, n),
                                                                E = i().difference(n, l),
                                                                c = t.filter((e) => a.includes(e.channel_id)),
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
                                                                                        (0, r.jsx)(m, {
                                                                                            actionType: S.vB8.CREATE,
                                                                                            targetType: s,
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
                                                                                        (0, r.jsx)(m, {
                                                                                            actionType: S.vB8.DELETE,
                                                                                            targetType: s,
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
                                            })(a, t);
                                        return null;
                                    })(),
                                    d = e[a.key];
                                return (function (e) {
                                    var t, n;
                                    let { changeItem: l, subChanges: a, changeNumber: s, log: o, oldValue: i, newValue: E, change: c } = e;
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
                                                                  case S.vB8.CREATE:
                                                                      return 'text-positive';
                                                                  case S.vB8.DELETE:
                                                                      return 'status-danger';
                                                                  default:
                                                                      return 'text-warning';
                                                              }
                                                          })(o.actionType),
                                                          children: [
                                                              s < 10 ? '0'.concat(s) : s,
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
                                                              null != a ? (0, r.jsx)('div', { children: a }) : null
                                                          ]
                                                      })
                                                  ]
                                              },
                                              s
                                          );
                                })({
                                    changeItem: 'function' == typeof d ? d(a) : d,
                                    subChanges: E,
                                    changeNumber: ++l,
                                    log: t,
                                    oldValue: s,
                                    newValue: o,
                                    change: a
                                });
                            })
                        )
                        .filter(g.lm);
                return (0, r.jsx)(u.P3F, {
                    onClick: a,
                    className: s()(U.changeDetails, o),
                    children: E
                });
            },
            [t, n, a, o]
        );
    return l.useMemo(() => {
        switch (t.targetType) {
            case S.KFR.GUILD:
                return E(p.pY());
            case S.KFR.CHANNEL:
            case S.KFR.CHANNEL_OVERWRITE:
                return E(p.ML());
            case S.KFR.USER:
                return E(p.lU());
            case S.KFR.ROLE:
                return E(p.HE());
            case S.KFR.ONBOARDING_PROMPT:
                return E(p.oD());
            case S.KFR.GUILD_ONBOARDING:
                return E(p.EN());
            case S.KFR.HOME_SETTINGS:
                return E(p.hx());
            case S.KFR.INVITE:
                return E(p.HN());
            case S.KFR.WEBHOOK:
                return E(p.lR());
            case S.KFR.EMOJI:
                return E(p.N$());
            case S.KFR.STICKER:
                return E(p.Bq());
            case S.KFR.INTEGRATION:
                return E(p.K());
            case S.KFR.STAGE_INSTANCE:
                return E(p.C2());
            case S.KFR.GUILD_SCHEDULED_EVENT:
                return E(p.uB());
            case S.KFR.GUILD_SCHEDULED_EVENT_EXCEPTION:
                return E(p.pi());
            case S.KFR.THREAD:
                return E(p.pA());
            case S.KFR.APPLICATION_COMMAND:
                return E(p.vm(t.changes));
            case S.KFR.AUTO_MODERATION_RULE:
                return E(p.rK());
            case S.KFR.GUILD_SOUNDBOARD:
                return E(p.C0());
            case S.KFR.VOICE_CHANNEL_STATUS:
                return E(p.F1());
            case S.KFR.GUILD_MEMBER_VERIFICATION:
                return E(p.JA());
            case S.KFR.GUILD_PROFILE:
                return E(p.zT());
        }
    }, [t.targetType, t.changes, E]);
}
