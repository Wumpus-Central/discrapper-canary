(t.d(n, {
    d: () => M,
    p: () => _
}),
    t(388685),
    t(35282));
var r = t(255367),
    l = t(73800),
    c = t(442837),
    i = t(481060),
    o = t(239091),
    a = t(287734),
    s = t(627050),
    u = t(66999),
    d = t(364640),
    h = t(754688),
    f = t(336197),
    j = t(69626),
    m = t(779699),
    p = t(797874),
    g = t(359875),
    v = t(124072),
    b = t(891984),
    x = t(644956),
    y = t(819366),
    O = t(488968),
    w = t(131704),
    I = t(592125),
    P = t(485386),
    Z = t(430824),
    k = t(934415),
    C = t(823379),
    S = t(900849),
    E = t(981631),
    N = t(689079),
    D = t(388032);
async function T(e, n, t) {
    if (null == n) return;
    if (
        (d.Z.trackDiscordLinkClicked({
            guildId: e,
            channelId: n,
            messageId: t
        }),
        null != e)
    ) {
        let r = Z.Z.getGuild(e);
        if ((null == r ? void 0 : r.joinedAt) == null)
            try {
                await S.Ub(
                    e,
                    {},
                    {
                        channelId: n,
                        messageId: t
                    }
                );
                return;
            } catch (e) {}
    }
    let r = I.Z.getChannel(n);
    if (null != r && null == t && (0, w.bw)(r.type) && (0, h.YO)(r)) return void a.default.selectVoiceChannel(r.id);
    (0, f.Z)(E.Z5c.CHANNEL(e, n, t));
}
function _(e) {
    let { type: n, value: t } = e;
    switch (n) {
        case 'channel':
            return (0, r.jsx)(M, { channelId: t });
        case 'user':
            return (0, r.jsx)(L, { id: t });
        case 'role':
            return (0, r.jsx)(Y, { id: t });
        case 'everyone':
            return (0, r.jsx)(G, { roleName: '@everyone' });
        case 'here':
            return (0, r.jsx)(G, { roleName: '@here' });
        case 'game':
            return (0, r.jsx)(F, { id: t });
        case 'command':
            return (0, r.jsx)(q, {
                id: t.id,
                name: t.name
            });
    }
    (0, C.vE)(n);
}
function M(e) {
    let { channelId: n, guildId: l, messageId: a } = e,
        s = (0, u.Z)(n),
        {
            name: d,
            iconType: f,
            isForumPost: j,
            hasAccess: p
        } = (0, c.cj)(
            [I.Z],
            () => {
                let e = I.Z.getChannel(n);
                return {
                    name: null == e ? void 0 : e.name,
                    iconType: (0, k.wl)(e),
                    isForumPost: null == e ? void 0 : e.isForumPost(),
                    hasAccess: null == e || (0, h.YO)(e)
                };
            },
            [n]
        ),
        g = (0, O.d)();
    if (null == f) return;
    let x = l === (null == g ? void 0 : g.guildId) || null == l,
        y =
            p || s.isSubscriptionGated
                ? x || null == d
                    ? (0, r.jsx)(m.Z, {
                          iconType: f,
                          children: null != d ? d : (0, r.jsx)('em', { children: D.intl.string(D.t.J90oLS) })
                      })
                    : (0, r.jsx)(H, {
                          guildId: l,
                          children: d
                      })
                : (0, r.jsx)(m.Z, {
                      iconType: 'locked',
                      children: D.intl.string(D.t['/YzI6+'])
                  }),
        w = null;
    return (
        null != a &&
            (w = (0, r.jsxs)(r.Fragment, {
                children: [(0, r.jsx)(b.Z, {}), (0, r.jsx)(m.Z, { iconType: j ? 'post' : 'message' })]
            })),
        (0, r.jsxs)(v.Z, {
            role: 'link',
            onClick: (e) => {
                (null == e || e.stopPropagation(), T(l, n, a), (0, i.pTH)());
            },
            onContextMenu: (e) => {
                let l = I.Z.getChannel(n);
                (0, o.jW)(e, async () => {
                    let { default: e } = await t.e('9573').then(t.bind(t, 546649));
                    return (t) => {
                        var c, i, o;
                        return (0, r.jsx)(
                            e,
                            ((i = (function (e) {
                                for (var n = 1; n < arguments.length; n++) {
                                    var t = null != arguments[n] ? arguments[n] : {},
                                        r = Object.keys(t);
                                    ('function' == typeof Object.getOwnPropertySymbols &&
                                        (r = r.concat(
                                            Object.getOwnPropertySymbols(t).filter(function (e) {
                                                return Object.getOwnPropertyDescriptor(t, e).enumerable;
                                            })
                                        )),
                                        r.forEach(function (n) {
                                            var r;
                                            ((r = t[n]),
                                                n in e
                                                    ? Object.defineProperty(e, n, {
                                                          value: r,
                                                          enumerable: !0,
                                                          configurable: !0,
                                                          writable: !0
                                                      })
                                                    : (e[n] = r));
                                        }));
                                }
                                return e;
                            })({}, t)),
                            (o = o =
                                {
                                    channel: l,
                                    channelId: null != (c = null == l ? void 0 : l.id) ? c : n,
                                    originalLink: null,
                                    messageId: a
                                }),
                            Object.getOwnPropertyDescriptors
                                ? Object.defineProperties(i, Object.getOwnPropertyDescriptors(o))
                                : (function (e, n) {
                                      var t = Object.keys(e);
                                      if (Object.getOwnPropertySymbols) {
                                          var r = Object.getOwnPropertySymbols(e);
                                          t.push.apply(t, r);
                                      }
                                      return t;
                                  })(Object(o)).forEach(function (e) {
                                      Object.defineProperty(i, e, Object.getOwnPropertyDescriptor(o, e));
                                  }),
                            i)
                        );
                    };
                });
            },
            className: 'channelMention',
            children: [y, w]
        })
    );
}
function H(e) {
    let { guildId: n, children: t } = e,
        l = (0, c.e7)([Z.Z], () => Z.Z.getGuild(n), [n]);
    return (0, r.jsxs)(g.Z, {
        guild: l,
        children: [null == l ? void 0 : l.name, null != l ? (0, r.jsx)(b.Z, {}) : null, t]
    });
}
function L(e) {
    let { id: n } = e,
        t = (0, O.d)();
    return (0, r.jsx)(y.Z, {
        className: 'mention',
        userId: n,
        channelId: null == t ? void 0 : t.channelId,
        viewingChannelId: null == t ? void 0 : t.viewingChannelId,
        parsedUserId: n,
        content: '<@'.concat(n, '>')
    });
}
function Y(e) {
    let { id: n } = e,
        t = (0, O.d)(),
        l = null == t ? void 0 : t.guildId,
        i = (0, c.e7)(
            [P.Z],
            () => {
                var e, t;
                return null != (t = null != l ? (null == (e = P.Z.getRole(l, n)) ? void 0 : e.name) : null) ? t : D.intl.string(D.t.sKdZ6e);
            },
            [l, n]
        );
    return (0, r.jsx)(x.Z, {
        roleId: n,
        channelId: null == t ? void 0 : t.channelId,
        guildId: null == t ? void 0 : t.guildId,
        children: '@'.concat(i)
    });
}
function F(e) {
    let { id: n } = e,
        t = (0, O.d)();
    return s.d.useExperiment({ location: 'native markdown' }).enabled
        ? (0, r.jsx)(p.Z, {
              gameId: n,
              channelId: null == t ? void 0 : t.channelId
          })
        : (0, r.jsx)('span', { children: '<@$'.concat(n, '>') });
}
function G(e) {
    let { roleName: n } = e,
        t = (0, O.d)();
    return (0, r.jsx)(x.Z, {
        roleName: n,
        channelId: null == t ? void 0 : t.channelId,
        guildId: null == t ? void 0 : t.guildId,
        children: n
    });
}
function q(e) {
    let { id: n, name: t } = e,
        c = (0, O.d)(),
        i = l.useMemo(() => {
            let [, ...e] = t.split(' ');
            return ''.concat(n).concat([...e].map((e) => ''.concat(N.oQ).concat(e)).join(''));
        }, [n, t]),
        o = l.useMemo(
            () => ({
                type: 'commandMention',
                channelId: null == c ? void 0 : c.channelId,
                commandId: n,
                commandName: t,
                commandKey: i
            }),
            [null == c ? void 0 : c.channelId, i, n, t]
        );
    return (0, r.jsx)(j.Wf, {
        node: o,
        children: t
    });
}
