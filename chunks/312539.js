(t.d(n, {
    d: () => D,
    p: () => N
}),
    t(388685),
    t(35282));
var r = t(255367),
    l = t(73800),
    i = t(442837),
    c = t(481060),
    o = t(239091),
    u = t(287734),
    a = t(627050),
    d = t(66999),
    s = t(364640),
    f = t(754688),
    _ = t(336197),
    h = t(69626),
    b = t(779699),
    g = t(797874),
    m = t(359875),
    y = t(124072),
    p = t(891984),
    j = t(644956),
    x = t(819366),
    v = t(488968),
    w = t(131704),
    O = t(592125),
    k = t(485386),
    I = t(430824),
    P = t(934415),
    Z = t(823379),
    C = t(900849),
    S = t(981631),
    T = t(689079),
    A = t(388032);
async function E(e, n, t) {
    if (null == n) return;
    if (
        (s.Z.trackDiscordLinkClicked({
            guildId: e,
            channelId: n,
            messageId: t
        }),
        null != e)
    ) {
        let r = I.Z.getGuild(e);
        if ((null == r ? void 0 : r.joinedAt) == null)
            try {
                await C.Ub(
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
    let r = O.Z.getChannel(n);
    if (null != r && null == t && (0, w.bw)(r.type) && (0, f.YO)(r)) return void u.default.selectVoiceChannel(r.id);
    (0, _.Z)(S.Z5c.CHANNEL(e, n, t));
}
function N(e) {
    let { type: n, value: t } = e;
    switch (n) {
        case 'channel':
            return (0, r.jsx)(D, { channelId: t });
        case 'user':
            return (0, r.jsx)(M, { id: t });
        case 'role':
            return (0, r.jsx)(q, { id: t });
        case 'everyone':
            return (0, r.jsx)(L, { roleName: '@everyone' });
        case 'here':
            return (0, r.jsx)(L, { roleName: '@here' });
        case 'game':
            return (0, r.jsx)($, { id: t });
        case 'command':
            return (0, r.jsx)(Y, {
                id: t.id,
                name: t.name
            });
    }
    (0, Z.vE)(n);
}
function D(e) {
    let { channelId: n, guildId: l, messageId: u } = e,
        a = (0, d.Z)(n),
        {
            name: s,
            iconType: _,
            isForumPost: h,
            hasAccess: g
        } = (0, i.cj)(
            [O.Z],
            () => {
                let e = O.Z.getChannel(n);
                return {
                    name: null == e ? void 0 : e.name,
                    iconType: (0, P.wl)(e),
                    isForumPost: null == e ? void 0 : e.isForumPost(),
                    hasAccess: null == e || (0, f.YO)(e)
                };
            },
            [n]
        ),
        m = (0, v.d)();
    if (null == _) return;
    let j = l === (null == m ? void 0 : m.guildId) || null == l,
        x =
            g || a.isSubscriptionGated
                ? j || null == s
                    ? (0, r.jsx)(b.Z, {
                          iconType: _,
                          children: null != s ? s : (0, r.jsx)('em', { children: A.intl.string(A.t.J90oLS) })
                      })
                    : (0, r.jsx)(H, {
                          guildId: l,
                          children: s
                      })
                : (0, r.jsx)(b.Z, {
                      iconType: 'locked',
                      children: A.intl.string(A.t['/YzI6+'])
                  }),
        w = null;
    return (
        null != u &&
            (w = (0, r.jsxs)(r.Fragment, {
                children: [(0, r.jsx)(p.Z, {}), (0, r.jsx)(b.Z, { iconType: h ? 'post' : 'message' })]
            })),
        (0, r.jsxs)(y.Z, {
            role: 'link',
            onClick: (e) => {
                (null == e || e.stopPropagation(), E(l, n, u), (0, c.pTH)());
            },
            onContextMenu: (e) => {
                let l = O.Z.getChannel(n);
                (0, o.jW)(e, async () => {
                    let { default: e } = await t.e('9573').then(t.bind(t, 546649));
                    return (t) => {
                        var i, c, o;
                        return (0, r.jsx)(
                            e,
                            ((c = (function (e) {
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
                                    channelId: null != (i = null == l ? void 0 : l.id) ? i : n,
                                    originalLink: null,
                                    messageId: u
                                }),
                            Object.getOwnPropertyDescriptors
                                ? Object.defineProperties(c, Object.getOwnPropertyDescriptors(o))
                                : (function (e, n) {
                                      var t = Object.keys(e);
                                      if (Object.getOwnPropertySymbols) {
                                          var r = Object.getOwnPropertySymbols(e);
                                          t.push.apply(t, r);
                                      }
                                      return t;
                                  })(Object(o)).forEach(function (e) {
                                      Object.defineProperty(c, e, Object.getOwnPropertyDescriptor(o, e));
                                  }),
                            c)
                        );
                    };
                });
            },
            className: 'channelMention',
            children: [x, w]
        })
    );
}
function H(e) {
    let { guildId: n, children: t } = e,
        l = (0, i.e7)([I.Z], () => I.Z.getGuild(n), [n]);
    return (0, r.jsxs)(m.Z, {
        guild: l,
        children: [null == l ? void 0 : l.name, null != l ? (0, r.jsx)(p.Z, {}) : null, t]
    });
}
function M(e) {
    let { id: n } = e,
        t = (0, v.d)();
    return (0, r.jsx)(x.Z, {
        className: 'mention',
        userId: n,
        channelId: null == t ? void 0 : t.channelId,
        viewingChannelId: null == t ? void 0 : t.viewingChannelId,
        parsedUserId: n,
        content: '<@'.concat(n, '>')
    });
}
function q(e) {
    let { id: n } = e,
        t = (0, v.d)(),
        l = null == t ? void 0 : t.guildId,
        c = (0, i.e7)(
            [k.Z],
            () => {
                var e, t;
                return null != (t = null != l ? (null == (e = k.Z.getRole(l, n)) ? void 0 : e.name) : null) ? t : A.intl.string(A.t.sKdZ6e);
            },
            [l, n]
        );
    return (0, r.jsx)(j.Z, {
        roleId: n,
        channelId: null == t ? void 0 : t.channelId,
        guildId: null == t ? void 0 : t.guildId,
        children: '@'.concat(c)
    });
}
function $(e) {
    let { id: n } = e,
        t = (0, v.d)();
    return a.d.useExperiment({ location: 'native markdown' }).enabled
        ? (0, r.jsx)(g.Z, {
              gameId: n,
              channelId: null == t ? void 0 : t.channelId
          })
        : (0, r.jsx)('span', { children: '<@$'.concat(n, '>') });
}
function L(e) {
    let { roleName: n } = e,
        t = (0, v.d)();
    return (0, r.jsx)(j.Z, {
        roleName: n,
        channelId: null == t ? void 0 : t.channelId,
        guildId: null == t ? void 0 : t.guildId,
        children: n
    });
}
function Y(e) {
    let { id: n, name: t } = e,
        i = (0, v.d)(),
        c = l.useMemo(() => {
            let [, ...e] = t.split(' ');
            return ''.concat(n).concat([...e].map((e) => ''.concat(T.oQ).concat(e)).join(''));
        }, [n, t]),
        o = l.useMemo(
            () => ({
                type: 'commandMention',
                channelId: null == i ? void 0 : i.channelId,
                commandId: n,
                commandName: t,
                commandKey: c
            }),
            [null == i ? void 0 : i.channelId, c, n, t]
        );
    return (0, r.jsx)(h.Wf, {
        node: o,
        children: t
    });
}
