(t.d(e, {
    mp: () => j,
    tP: () => T,
    xO: () => Q
}),
    t(539854),
    t(953529));
var n = t(255367),
    r = t(73800),
    l = t(120356),
    i = t.n(l),
    s = t(392711),
    a = t.n(s),
    o = t(913527),
    g = t.n(o),
    f = t(866442),
    c = t(481060),
    v = t(596454),
    h = t(835473),
    u = t(479099),
    E = t(592125),
    d = t(485386),
    C = t(594174),
    B = t(934415),
    w = t(823379),
    D = t(624138),
    M = t(51144),
    I = t(909746),
    p = t(981631),
    H = t(388032),
    b = t(677234);
function Q(A, e) {
    let t = I.vc[A.targetType];
    return null != t && !0 === t[e.key];
}
let O = {
    [p.vB8.CREATE]: b.typeCreate,
    [p.vB8.UPDATE]: b.typeUpdate,
    [p.vB8.DELETE]: b.typeDelete
};
function P(A) {
    let { applicationId: e } = A,
        t = (0, h.q)(e);
    return null == t
        ? null
        : (0, n.jsx)(c.Text, {
              variant: 'text-md/normal',
              children: t.name
          });
}
function V(A, e) {
    return (0, n.jsx)(
        'div',
        {
            className: b.colorHook,
            style: { backgroundColor: e }
        },
        A
    );
}
class j extends r.PureComponent {
    render() {
        let { actionType: A, targetType: e, action: t, themeOverride: r } = this.props,
            l = null != r ? b['themeOverride'.concat((0, D.De)(r))] : null,
            s = i()(
                b.icon,
                O[A],
                t === p.rsA.MESSAGE_DELETE
                    ? b.targetMessage
                    : t === p.rsA.AUTO_MODERATION_BLOCK_MESSAGE || t === p.rsA.AUTO_MODERATION_FLAG_TO_CHANNEL || t === p.rsA.AUTO_MODERATION_USER_COMMUNICATION_DISABLED || t === p.rsA.AUTO_MODERATION_QUARANTINE_USER
                      ? b.autoModerationBlockMessage
                      : {
                            [p.KFR.ALL]: b.targetAll,
                            [p.KFR.GUILD]: b.targetGuild,
                            [p.KFR.CHANNEL]: b.targetChannel,
                            [p.KFR.CHANNEL_OVERWRITE]: b.targetChannel,
                            [p.KFR.USER]: b.targetMember,
                            [p.KFR.ROLE]: b.targetRole,
                            [p.KFR.ONBOARDING_PROMPT]: b.targetOnboarding,
                            [p.KFR.GUILD_ONBOARDING]: b.targetOnboarding,
                            [p.KFR.HOME_SETTINGS]: b.targetOnboarding,
                            [p.KFR.INTEGRATION]: b.targetIntegration,
                            [p.KFR.INVITE]: b.targetInvite,
                            [p.KFR.WEBHOOK]: b.targetWebhook,
                            [p.KFR.EMOJI]: b.targetEmoji,
                            [p.KFR.STICKER]: b.targetSticker,
                            [p.KFR.STAGE_INSTANCE]: b.targetStageInstance,
                            [p.KFR.GUILD_SCHEDULED_EVENT]: b.targetGuildScheduledEvent,
                            [p.KFR.GUILD_SCHEDULED_EVENT_EXCEPTION]: b.targetGuildScheduledEvent,
                            [p.KFR.THREAD]: b.thread,
                            [p.KFR.APPLICATION_COMMAND]: b.applicationCommand,
                            [p.KFR.AUTO_MODERATION_RULE]: b.autoModerationRule,
                            [p.KFR.GUILD_HOME]: b.targetGuildHome,
                            [p.KFR.GUILD_SOUNDBOARD]: b.targetGuildSoundboard,
                            [p.KFR.VOICE_CHANNEL_STATUS]: b.targetChannel,
                            [p.KFR.GUILD_MEMBER_VERIFICATION]: b.targetMember,
                            [p.KFR.GUILD_PROFILE]: b.targetGuild
                        }[e],
                l
            );
        return (0, n.jsx)('div', { className: s });
    }
}
function T(A) {
    let { log: e, guild: t, onContentClick: l, className: s } = A,
        o = r.useCallback(
            (A) => {
                if (null == e.changes) return null;
                let o = 0,
                    h = a()
                        .flatten(
                            e.changes.map((l) => {
                                if (Q(e, l)) return null;
                                let { oldValue: i, newValue: s } = (() => {
                                        if ((e.action === p.rsA.CHANNEL_UPDATE || e.action === p.rsA.CHANNEL_CREATE) && l.key === p.zUn.TYPE) {
                                            var A, t;
                                            return {
                                                oldValue: null != (A = l.oldValue) ? A : (0, B.a5)({ type: l.oldValue }),
                                                newValue: null != (t = l.newValue) ? t : (0, B.a5)({ type: l.newValue })
                                            };
                                        }
                                        if (e.action === p.rsA.MEMBER_UPDATE && l.key === p.zUn.COMMUNICATION_DISABLED_UNTIL) {
                                            let A = g()(l.newValue);
                                            return {
                                                oldValue: l.oldValue,
                                                newValue: A.isValid() ? A.calendar() : l.newValue
                                            };
                                        }
                                        return e.action === p.rsA.GUILD_UPDATE && l.key === p.zUn.OWNER_ID
                                            ? {
                                                  oldValue: M.ZP.getUserTag(l.oldValue, { mode: 'username' }),
                                                  newValue: M.ZP.getUserTag(l.newValue, { mode: 'username' })
                                              }
                                            : l;
                                    })(),
                                    h = (() => {
                                        if (e.action === p.rsA.MEMBER_ROLE_UPDATE)
                                            return (function (A) {
                                                let { newValue: e } = A;
                                                return Array.isArray(e)
                                                    ? e.map((A) =>
                                                          (0, n.jsx)(
                                                              'div',
                                                              {
                                                                  className: b.subListItem,
                                                                  children: A.name
                                                              },
                                                              A.id
                                                          )
                                                      )
                                                    : null;
                                            })(l);
                                        if (e.targetType === p.KFR.ROLE || e.action === p.rsA.CHANNEL_OVERWRITE_CREATE || e.action === p.rsA.CHANNEL_OVERWRITE_UPDATE)
                                            return (function (A, e) {
                                                let { newValue: t } = A;
                                                return Array.isArray(t)
                                                    ? t.map((A, t) =>
                                                          (0, n.jsx)(
                                                              'div',
                                                              {
                                                                  className: b.subListItem,
                                                                  children: I.hQ(A, e)
                                                              },
                                                              t
                                                          )
                                                      )
                                                    : null;
                                            })(l, e);
                                        if ((e.action === p.rsA.CHANNEL_UPDATE || e.action === p.rsA.THREAD_UPDATE) && l.key === p.zUn.FLAGS)
                                            return (function (A) {
                                                let { newValue: e, oldValue: t } = A,
                                                    r = [];
                                                return (Array.isArray(t) &&
                                                    (r = r.concat(
                                                        t.map((A) =>
                                                            (0, n.jsx)(
                                                                'div',
                                                                {
                                                                    className: b.subListItem,
                                                                    children: I.cT(A)
                                                                },
                                                                A
                                                            )
                                                        )
                                                    )),
                                                Array.isArray(e) &&
                                                    (r = r.concat(
                                                        e.map((A) =>
                                                            (0, n.jsx)(
                                                                'div',
                                                                {
                                                                    className: b.subListItem,
                                                                    children: I.em(A)
                                                                },
                                                                A
                                                            )
                                                        )
                                                    )),
                                                r.length > 0)
                                                    ? r
                                                    : null;
                                            })(l);
                                        if ((e.action === p.rsA.ONBOARDING_PROMPT_UPDATE || e.action === p.rsA.ONBOARDING_PROMPT_CREATE) && l.key === p.zUn.OPTIONS)
                                            return (function (A, e, t) {
                                                let { newValue: r, oldValue: l } = A,
                                                    i = (A) => {
                                                        var e;
                                                        let n = null != t ? (null == (e = d.Z.getRole(t.id, A)) ? void 0 : e.name) : void 0;
                                                        return null == n ? null : '@'.concat(n);
                                                    },
                                                    s = (A) => {
                                                        var e;
                                                        let t = null == (e = E.Z.getChannel(A)) ? void 0 : e.name;
                                                        return null == t ? null : '#'.concat(t);
                                                    },
                                                    o = (A, t) => {
                                                        let { title: r, id: l } = t,
                                                            o = A.role_ids.map(i).filter(w.lm),
                                                            g = A.channel_ids.map(s).filter(w.lm),
                                                            f = t.role_ids.map(i).filter(w.lm),
                                                            v = t.channel_ids.map(s).filter(w.lm),
                                                            h = a().difference(f, o),
                                                            u = a().difference(o, f),
                                                            E = a().difference(v, g),
                                                            d = a().difference(g, v),
                                                            C = [];
                                                        return (a().isEqual(A.title, t.title) || C.push('title'), a().isEqual(A.description, t.description) || C.push('description'), 0 === h.length && 0 === u.length && 0 === E.length && 0 === d.length && 0 === C.length)
                                                            ? null
                                                            : (0, n.jsxs)(
                                                                  'li',
                                                                  {
                                                                      children: [
                                                                          (0, n.jsxs)('div', {
                                                                              className: b.onboardingChangeLogItemTitle,
                                                                              children: [
                                                                                  (0, n.jsx)(j, {
                                                                                      actionType: p.vB8.UPDATE,
                                                                                      targetType: e.targetType,
                                                                                      action: e.action
                                                                                  }),
                                                                                  (0, n.jsx)(c.Text, {
                                                                                      variant: 'text-md/normal',
                                                                                      children: H.intl.format(H.t['WZO+iY'], { title: r })
                                                                                  })
                                                                              ]
                                                                          }),
                                                                          (0, n.jsxs)('div', {
                                                                              className: b.onboardingChangeLogItemChanges,
                                                                              children: [
                                                                                  h.length > 0 &&
                                                                                      (0, n.jsx)(c.Text, {
                                                                                          variant: 'text-md/normal',
                                                                                          children: H.intl.format(H.t['R+km+f'], { roles: h.join(', ') })
                                                                                      }),
                                                                                  u.length > 0 &&
                                                                                      (0, n.jsx)(c.Text, {
                                                                                          variant: 'text-md/normal',
                                                                                          children: H.intl.format(H.t.xIVRoa, { roles: u.join(', ') })
                                                                                      }),
                                                                                  E.length > 0 &&
                                                                                      (0, n.jsx)(c.Text, {
                                                                                          variant: 'text-md/normal',
                                                                                          children: H.intl.format(H.t.iYowX1, { channels: E.join(', ') })
                                                                                      }),
                                                                                  d.length > 0 &&
                                                                                      (0, n.jsx)(c.Text, {
                                                                                          variant: 'text-md/normal',
                                                                                          children: H.intl.format(H.t.JLdJpK, { channels: d.join(', ') })
                                                                                      }),
                                                                                  C.map((e, r) =>
                                                                                      (0, n.jsx)(
                                                                                          c.Text,
                                                                                          {
                                                                                              variant: 'text-md/normal',
                                                                                              children: H.intl.format(H.t['0698zc'], {
                                                                                                  key: e,
                                                                                                  oldValue: A[e],
                                                                                                  newValue: t[e]
                                                                                              })
                                                                                          },
                                                                                          r
                                                                                      )
                                                                                  )
                                                                              ]
                                                                          })
                                                                      ]
                                                                  },
                                                                  l
                                                              );
                                                    },
                                                    g = a().keyBy(null != l ? l : [], 'id'),
                                                    f = a().keyBy(null != r ? r : [], 'id'),
                                                    v = a()
                                                        .difference(Object.keys(f), Object.keys(g))
                                                        .map((A) => f[A]),
                                                    h = a()
                                                        .difference(Object.keys(g), Object.keys(f))
                                                        .map((A) => g[A]),
                                                    u = a().intersection(Object.keys(f), Object.keys(g));
                                                return (0, n.jsxs)(
                                                    'ul',
                                                    {
                                                        className: b.onboardingChangeLogContainer,
                                                        children: [
                                                            v.map((A) => {
                                                                let { role_ids: t, channel_ids: r, title: l, id: a } = A,
                                                                    o = (null != t ? t : []).map(i).filter(w.lm),
                                                                    g = (null != r ? r : []).map(s).filter(w.lm);
                                                                return (0, n.jsxs)(
                                                                    'li',
                                                                    {
                                                                        children: [
                                                                            (0, n.jsxs)('div', {
                                                                                className: b.onboardingChangeLogItemTitle,
                                                                                children: [
                                                                                    (0, n.jsx)(j, {
                                                                                        actionType: p.vB8.CREATE,
                                                                                        targetType: e.targetType,
                                                                                        action: e.action
                                                                                    }),
                                                                                    (0, n.jsx)(c.Text, {
                                                                                        variant: 'text-md/normal',
                                                                                        children: H.intl.format(H.t.CZ1tys, { title: l })
                                                                                    })
                                                                                ]
                                                                            }),
                                                                            (0, n.jsxs)('div', {
                                                                                className: b.onboardingChangeLogItemChanges,
                                                                                children: [
                                                                                    o.length > 0 &&
                                                                                        (0, n.jsx)(c.Text, {
                                                                                            variant: 'text-md/normal',
                                                                                            children: H.intl.format(H.t['gt/5z8'], { roles: o.join(', ') })
                                                                                        }),
                                                                                    g.length > 0 &&
                                                                                        (0, n.jsx)(c.Text, {
                                                                                            variant: 'text-md/normal',
                                                                                            children: H.intl.format(H.t['4q006e'], { channels: g.join(', ') })
                                                                                        })
                                                                                ]
                                                                            })
                                                                        ]
                                                                    },
                                                                    a
                                                                );
                                                            }),
                                                            h.map((A) =>
                                                                (0, n.jsx)(
                                                                    'li',
                                                                    {
                                                                        children: (0, n.jsxs)('div', {
                                                                            className: b.onboardingChangeLogItemTitle,
                                                                            children: [
                                                                                (0, n.jsx)(j, {
                                                                                    actionType: p.vB8.DELETE,
                                                                                    targetType: e.targetType,
                                                                                    action: e.action
                                                                                }),
                                                                                (0, n.jsx)(c.Text, {
                                                                                    variant: 'text-md/normal',
                                                                                    children: H.intl.format(H.t['m3dt+P'], { title: A.title })
                                                                                })
                                                                            ]
                                                                        })
                                                                    },
                                                                    A.id
                                                                )
                                                            ),
                                                            u.map((A) => o(g[A], f[A]))
                                                        ]
                                                    },
                                                    'options'
                                                );
                                            })(l, e, t);
                                        if (e.action === p.rsA.HOME_SETTINGS_CREATE || e.action === p.rsA.HOME_SETTINGS_UPDATE)
                                            return (function (A, e) {
                                                let { oldValue: t, newValue: r, key: l } = A,
                                                    { targetType: i, action: s } = e;
                                                switch (l) {
                                                    case p.zUn.WELCOME_MESSAGE:
                                                        return ((A, e) => {
                                                            var t, r, l, i, s;
                                                            let a = C.default.getUser(null == e || null == (t = e.author_ids) ? void 0 : t[0]),
                                                                o = C.default.getUser(null == (r = A.author_ids) ? void 0 : r[0]),
                                                                g =
                                                                    (null == a ? void 0 : a.id) !== (null == o ? void 0 : o.id)
                                                                        ? (0, n.jsx)('li', {
                                                                              children: (0, n.jsx)('div', {
                                                                                  className: b.onboardingChangeLogItemTitle,
                                                                                  children: (0, n.jsx)(c.Text, {
                                                                                      variant: 'text-md/normal',
                                                                                      children: H.intl.format(H.t.PrOzAw, {
                                                                                          oldUser: null != (l = null == a ? void 0 : a.username) ? l : H.intl.string(H.t.PoWNfX),
                                                                                          newUser: null != (i = null == o ? void 0 : o.username) ? i : H.intl.string(H.t.PoWNfX)
                                                                                      })
                                                                                  })
                                                                              })
                                                                          })
                                                                        : null,
                                                                f =
                                                                    (null == e ? void 0 : e.message) !== A.message
                                                                        ? (0, n.jsx)('li', {
                                                                              children: (0, n.jsx)('div', {
                                                                                  className: b.onboardingChangeLogItemTitle,
                                                                                  children: (0, n.jsx)(c.Text, {
                                                                                      variant: 'text-md/normal',
                                                                                      children: H.intl.format(H.t.oB7rBQ, {
                                                                                          oldMessage: null != (s = null == e ? void 0 : e.message) ? s : H.intl.string(H.t.PoWNfX),
                                                                                          newMessage: A.message
                                                                                      })
                                                                                  })
                                                                              })
                                                                          })
                                                                        : null;
                                                            return (0, n.jsxs)('ul', {
                                                                children: [g, f]
                                                            });
                                                        })(r, t);
                                                    case p.zUn.NEW_MEMBER_ACTIONS:
                                                        return ((A, e) => {
                                                            let t = A.map((A) => A.channel_id),
                                                                r = e.map((A) => A.channel_id),
                                                                l = a().difference(r, t),
                                                                o = a().difference(t, r),
                                                                g = e.filter((A) => l.includes(A.channel_id)),
                                                                f = A.filter((A) => o.includes(A.channel_id));
                                                            return (0, n.jsxs)('ul', {
                                                                children: [
                                                                    g.map((A) =>
                                                                        (0, n.jsx)(
                                                                            'li',
                                                                            {
                                                                                children: (0, n.jsxs)('div', {
                                                                                    className: b.onboardingChangeLogItemTitle,
                                                                                    children: [
                                                                                        (0, n.jsx)(j, {
                                                                                            actionType: p.vB8.CREATE,
                                                                                            targetType: i,
                                                                                            action: s
                                                                                        }),
                                                                                        (0, n.jsx)(c.Text, {
                                                                                            variant: 'text-md/normal',
                                                                                            children: H.intl.format(H.t['oFSu6+'], { name: A.title })
                                                                                        })
                                                                                    ]
                                                                                })
                                                                            },
                                                                            A.channel_id
                                                                        )
                                                                    ),
                                                                    f.map((A) =>
                                                                        (0, n.jsx)(
                                                                            'li',
                                                                            {
                                                                                children: (0, n.jsxs)('div', {
                                                                                    className: b.onboardingChangeLogItemTitle,
                                                                                    children: [
                                                                                        (0, n.jsx)(j, {
                                                                                            actionType: p.vB8.DELETE,
                                                                                            targetType: i,
                                                                                            action: s
                                                                                        }),
                                                                                        (0, n.jsx)(c.Text, {
                                                                                            variant: 'text-md/normal',
                                                                                            children: H.intl.format(H.t.GssWam, { name: A.title })
                                                                                        })
                                                                                    ]
                                                                                })
                                                                            },
                                                                            A.channel_id
                                                                        )
                                                                    )
                                                                ]
                                                            });
                                                        })(null != t ? t : [], r);
                                                    case p.zUn.RESOURCE_CHANNELS:
                                                        return ((A, e) => {
                                                            let t = A.map((A) => A.channel_id),
                                                                r = e.map((A) => A.channel_id),
                                                                l = a().difference(r, t),
                                                                o = a().difference(t, r),
                                                                g = e.filter((A) => l.includes(A.channel_id)),
                                                                f = A.filter((A) => o.includes(A.channel_id));
                                                            return (0, n.jsxs)('ul', {
                                                                children: [
                                                                    g.map((A) =>
                                                                        (0, n.jsx)(
                                                                            'li',
                                                                            {
                                                                                children: (0, n.jsxs)('div', {
                                                                                    className: b.onboardingChangeLogItemTitle,
                                                                                    children: [
                                                                                        (0, n.jsx)(j, {
                                                                                            actionType: p.vB8.CREATE,
                                                                                            targetType: i,
                                                                                            action: s
                                                                                        }),
                                                                                        (0, n.jsx)(c.Text, {
                                                                                            variant: 'text-md/normal',
                                                                                            children: H.intl.format(H.t.HlGndH, { name: A.title })
                                                                                        })
                                                                                    ]
                                                                                })
                                                                            },
                                                                            A.channel_id
                                                                        )
                                                                    ),
                                                                    f.map((A) =>
                                                                        (0, n.jsx)(
                                                                            'li',
                                                                            {
                                                                                children: (0, n.jsxs)('div', {
                                                                                    className: b.onboardingChangeLogItemTitle,
                                                                                    children: [
                                                                                        (0, n.jsx)(j, {
                                                                                            actionType: p.vB8.DELETE,
                                                                                            targetType: i,
                                                                                            action: s
                                                                                        }),
                                                                                        (0, n.jsx)(c.Text, {
                                                                                            variant: 'text-md/normal',
                                                                                            children: H.intl.format(H.t['7pysg4'], { name: A.title })
                                                                                        })
                                                                                    ]
                                                                                })
                                                                            },
                                                                            A.channel_id
                                                                        )
                                                                    )
                                                                ]
                                                            });
                                                        })(null != t ? t : [], r);
                                                    default:
                                                        return null;
                                                }
                                            })(l, e);
                                        return null;
                                    })(),
                                    D = A[l.key];
                                return (function (A) {
                                    var e, t;
                                    let { changeItem: l, subChanges: i, changeNumber: s, log: a, oldValue: o, newValue: g, change: h } = A;
                                    if (null == l) return (console.warn('No change string for', h), null);
                                    let E = H.intl.format(l, {
                                        oldValue: o,
                                        newValue: g,
                                        count: Array.isArray(g) ? g.length : null,
                                        subtarget: null != (t = null != (e = a.options.subtarget) ? e : h.subtarget) ? t : null,
                                        newColorHook: (A, e) => V(e, h.newValue),
                                        newColorsHook: (A, e) => {
                                            let { primary_color: t, secondary_color: l, tertiary_color: i } = g;
                                            return (0, n.jsx)(
                                                'span',
                                                {
                                                    children: [t, l, i].filter(w.lm).map((A, t) =>
                                                        (0, n.jsxs)(
                                                            r.Fragment,
                                                            {
                                                                children: [
                                                                    (0, n.jsx)('span', {
                                                                        className: b.colorsHook,
                                                                        children: ''.concat(t > 0 ? ', ' : '').concat((0, f.Rf)(A).toUpperCase(), ' ')
                                                                    }),
                                                                    V(e, (0, f.Rf)(A))
                                                                ]
                                                            },
                                                            t
                                                        )
                                                    )
                                                },
                                                e
                                            );
                                        },
                                        oldColorHook: (A, e) => V(e, h.oldValue),
                                        oldTagHook: (A, e) =>
                                            (0, n.jsx)(
                                                u.Z,
                                                {
                                                    tag: o,
                                                    size: u.Z.Sizes.SMALL
                                                },
                                                e
                                            ),
                                        newTagHook: (A, e) =>
                                            (0, n.jsx)(
                                                u.Z,
                                                {
                                                    tag: g,
                                                    size: u.Z.Sizes.SMALL
                                                },
                                                e
                                            ),
                                        oldEmojiHook: (A, e) => (0, n.jsx)(v.Z, { emojiId: o }, e),
                                        newEmojiHook: (A, e) => (0, n.jsx)(v.Z, { emojiId: g }, e),
                                        applicationHook: (A, e) => {
                                            var t;
                                            return (0, n.jsx)(P, { applicationId: null != (t = null == o ? void 0 : o.application_id) ? t : null == g ? void 0 : g.application_id }, e);
                                        }
                                    });
                                    return null == E
                                        ? null
                                        : (0, n.jsxs)(
                                              'div',
                                              {
                                                  className: b.detail,
                                                  style: {
                                                      position: 'relative',
                                                      top: 1
                                                  },
                                                  children: [
                                                      (0, n.jsxs)(c.Text, {
                                                          className: b.prefix,
                                                          variant: 'code',
                                                          color: (function (A) {
                                                              switch (A) {
                                                                  case p.vB8.CREATE:
                                                                      return 'text-feedback-positive';
                                                                  case p.vB8.DELETE:
                                                                      return 'status-danger';
                                                                  default:
                                                                      return 'text-feedback-warning';
                                                              }
                                                          })(a.actionType),
                                                          children: [
                                                              s < 10 ? '0'.concat(s) : s,
                                                              (0, n.jsx)('span', {
                                                                  className: b.dash,
                                                                  children: '\u2014'
                                                              })
                                                          ]
                                                      }),
                                                      (0, n.jsxs)('div', {
                                                          className: b.change,
                                                          children: [
                                                              (0, n.jsx)('div', {
                                                                  className: b.changeStr,
                                                                  children: E
                                                              }),
                                                              null != i ? (0, n.jsx)('div', { children: i }) : null
                                                          ]
                                                      })
                                                  ]
                                              },
                                              s
                                          );
                                })({
                                    changeItem: 'function' == typeof D ? D(l) : D,
                                    subChanges: h,
                                    changeNumber: ++o,
                                    log: e,
                                    oldValue: i,
                                    newValue: s,
                                    change: l
                                });
                            })
                        )
                        .filter(w.lm);
                return (0, n.jsx)(c.P3F, {
                    onClick: l,
                    className: i()(b.changeDetails, s),
                    children: h
                });
            },
            [e, t, l, s]
        );
    return r.useMemo(() => {
        switch (e.targetType) {
            case p.KFR.GUILD:
                return o(I.pY());
            case p.KFR.CHANNEL:
            case p.KFR.CHANNEL_OVERWRITE:
                return o(I.ML());
            case p.KFR.USER:
                return o(I.lU());
            case p.KFR.ROLE:
                return o(I.HE());
            case p.KFR.ONBOARDING_PROMPT:
                return o(I.oD());
            case p.KFR.GUILD_ONBOARDING:
                return o(I.EN());
            case p.KFR.HOME_SETTINGS:
                return o(I.hx());
            case p.KFR.INVITE:
                return o(I.HN());
            case p.KFR.WEBHOOK:
                return o(I.lR());
            case p.KFR.EMOJI:
                return o(I.N$());
            case p.KFR.STICKER:
                return o(I.Bq());
            case p.KFR.INTEGRATION:
                return o(I.K());
            case p.KFR.STAGE_INSTANCE:
                return o(I.C2());
            case p.KFR.GUILD_SCHEDULED_EVENT:
                return o(I.uB());
            case p.KFR.GUILD_SCHEDULED_EVENT_EXCEPTION:
                return o(I.pi());
            case p.KFR.THREAD:
                return o(I.pA());
            case p.KFR.APPLICATION_COMMAND:
                return o(I.vm(e.changes));
            case p.KFR.AUTO_MODERATION_RULE:
                return o(I.rK());
            case p.KFR.GUILD_SOUNDBOARD:
                return o(I.C0());
            case p.KFR.VOICE_CHANNEL_STATUS:
                return o(I.F1());
            case p.KFR.GUILD_MEMBER_VERIFICATION:
                return o(I.JA());
            case p.KFR.GUILD_PROFILE:
                return o(I.zT());
        }
    }, [e.targetType, e.changes, o]);
}
