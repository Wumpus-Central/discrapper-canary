(t.d(n, {
    d: () => A,
    p: () => T
}),
    t(49124));
var r = t(255367),
    l = t(442837),
    i = t(481060),
    o = t(239091),
    c = t(287734),
    u = t(627050),
    a = t(66999),
    d = t(364640),
    s = t(754688),
    f = t(336197),
    _ = t(779699),
    g = t(797874),
    h = t(359875),
    b = t(124072),
    y = t(891984),
    m = t(644956),
    x = t(819366),
    v = t(488968),
    p = t(131704),
    j = t(592125),
    w = t(485386),
    I = t(430824),
    k = t(934415),
    O = t(900849),
    Z = t(981631),
    P = t(388032);
async function S(e, n, t) {
    if (null == n) return;
    if (
        (d.Z.trackDiscordLinkClicked({
            guildId: e,
            channelId: n,
            messageId: t
        }),
        null != e)
    ) {
        let r = I.Z.getGuild(e);
        if ((null == r ? void 0 : r.joinedAt) == null)
            try {
                await O.Ub(
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
    let r = j.Z.getChannel(n);
    if (null != r && null == t && (0, p.bw)(r.type) && (0, s.YO)(r)) return void c.default.selectVoiceChannel(r.id);
    (0, f.Z)(Z.Z5c.CHANNEL(e, n, t));
}
function T(e) {
    let { type: n, value: t } = e;
    switch (n) {
        case 'channel':
            return (0, r.jsx)(A, { channelId: t });
        case 'user':
            return (0, r.jsx)(E, { id: t });
        case 'role':
            return (0, r.jsx)(N, { id: t });
        case 'everyone':
            return (0, r.jsx)(q, { roleName: '@everyone' });
        case 'here':
            return (0, r.jsx)(q, { roleName: '@here' });
        case 'game':
            return (0, r.jsx)(H, { id: t });
        default:
            return JSON.stringify(t);
    }
}
function A(e) {
    let { channelId: n, guildId: c, messageId: u } = e,
        d = (0, a.Z)(n),
        {
            name: f,
            iconType: g,
            isForumPost: h,
            hasAccess: m
        } = (0, l.cj)(
            [j.Z],
            () => {
                let e = j.Z.getChannel(n);
                return {
                    name: null == e ? void 0 : e.name,
                    iconType: (0, k.wl)(e),
                    isForumPost: null == e ? void 0 : e.isForumPost(),
                    hasAccess: null == e || (0, s.YO)(e)
                };
            },
            [n]
        ),
        x = (0, v.d)();
    if (null == g) return;
    let p = c === (null == x ? void 0 : x.guildId) || null == c,
        w =
            m || d.isSubscriptionGated
                ? p || null == f
                    ? (0, r.jsx)(_.Z, {
                          iconType: g,
                          children: null != f ? f : (0, r.jsx)('em', { children: P.intl.string(P.t.J90oLS) })
                      })
                    : (0, r.jsx)(C, {
                          guildId: c,
                          children: f
                      })
                : (0, r.jsx)(_.Z, {
                      iconType: 'locked',
                      children: P.intl.string(P.t['/YzI6+'])
                  }),
        I = null;
    return (
        null != u &&
            (I = (0, r.jsxs)(r.Fragment, {
                children: [(0, r.jsx)(y.Z, {}), (0, r.jsx)(_.Z, { iconType: h ? 'post' : 'message' })]
            })),
        (0, r.jsxs)(b.Z, {
            role: 'link',
            onClick: (e) => {
                (null == e || e.stopPropagation(), S(c, n, u), (0, i.pTH)());
            },
            onContextMenu: (e) => {
                let l = j.Z.getChannel(n);
                (0, o.jW)(e, async () => {
                    let { default: e } = await t.e('9573').then(t.bind(t, 546649));
                    return (t) => {
                        var i, o, c;
                        return (0, r.jsx)(
                            e,
                            ((o = (function (e) {
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
                            (c = c =
                                {
                                    channel: l,
                                    channelId: null != (i = null == l ? void 0 : l.id) ? i : n,
                                    originalLink: null,
                                    messageId: u
                                }),
                            Object.getOwnPropertyDescriptors
                                ? Object.defineProperties(o, Object.getOwnPropertyDescriptors(c))
                                : (function (e, n) {
                                      var t = Object.keys(e);
                                      if (Object.getOwnPropertySymbols) {
                                          var r = Object.getOwnPropertySymbols(e);
                                          t.push.apply(t, r);
                                      }
                                      return t;
                                  })(Object(c)).forEach(function (e) {
                                      Object.defineProperty(o, e, Object.getOwnPropertyDescriptor(c, e));
                                  }),
                            o)
                        );
                    };
                });
            },
            className: 'channelMention',
            children: [w, I]
        })
    );
}
function C(e) {
    let { guildId: n, children: t } = e,
        i = (0, l.e7)([I.Z], () => I.Z.getGuild(n), [n]);
    return (0, r.jsxs)(h.Z, {
        guild: i,
        children: [null == i ? void 0 : i.name, null != i ? (0, r.jsx)(y.Z, {}) : null, t]
    });
}
function E(e) {
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
function N(e) {
    let { id: n } = e,
        t = (0, v.d)(),
        i = null == t ? void 0 : t.guildId,
        o = (0, l.e7)(
            [w.Z],
            () => {
                var e, t;
                return null != (t = null != i ? (null == (e = w.Z.getRole(i, n)) ? void 0 : e.name) : null) ? t : P.intl.string(P.t.sKdZ6e);
            },
            [i, n]
        );
    return (0, r.jsx)(m.Z, {
        roleId: n,
        channelId: null == t ? void 0 : t.channelId,
        guildId: null == t ? void 0 : t.guildId,
        children: '@'.concat(o)
    });
}
function H(e) {
    let { id: n } = e,
        t = (0, v.d)();
    return u.d.useExperiment({ location: 'native markdown' }).enabled
        ? (0, r.jsx)(g.Z, {
              gameId: n,
              channelId: null == t ? void 0 : t.channelId
          })
        : (0, r.jsx)('span', { children: '<@$'.concat(n, '>') });
}
function q(e) {
    let { roleName: n } = e,
        t = (0, v.d)();
    return (0, r.jsx)(m.Z, {
        roleName: n,
        channelId: null == t ? void 0 : t.channelId,
        guildId: null == t ? void 0 : t.guildId,
        children: n
    });
}
