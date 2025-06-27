t.d(n, {
    d: () => T,
    p: () => P
}),
    t(49124);
var r = t(255367),
    l = t(442837),
    i = t(481060),
    u = t(239091),
    o = t(287734),
    c = t(66999),
    a = t(364640),
    d = t(754688),
    s = t(336197),
    f = t(779699),
    _ = t(359875),
    g = t(124072),
    h = t(891984),
    b = t(644956),
    x = t(819366),
    y = t(488968),
    j = t(131704),
    m = t(592125),
    v = t(485386),
    p = t(430824),
    w = t(934415),
    I = t(900849),
    k = t(981631),
    O = t(388032);
async function Z(e, n, t) {
    if (null == n) return;
    if (
        (a.Z.trackDiscordLinkClicked({
            guildId: e,
            channelId: n,
            messageId: t
        }),
        null != e)
    ) {
        let r = p.Z.getGuild(e);
        if ((null == r ? void 0 : r.joinedAt) == null)
            try {
                await I.Ub(
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
    let r = m.Z.getChannel(n);
    if (null != r && null == t && (0, j.bw)(r.type) && (0, d.YO)(r)) return void o.default.selectVoiceChannel(r.id);
    (0, s.Z)(k.Z5c.CHANNEL(e, n, t));
}
function P(e) {
    let { type: n, value: t } = e;
    switch (n) {
        case 'channel':
            return (0, r.jsx)(T, { channelId: t });
        case 'user':
            return (0, r.jsx)(A, { id: t });
        case 'role':
            return (0, r.jsx)(C, { id: t });
        case 'everyone':
            return (0, r.jsx)(E, { roleName: '@everyone' });
        case 'here':
            return (0, r.jsx)(E, { roleName: '@here' });
        default:
            return JSON.stringify(t);
    }
}
function T(e) {
    let { channelId: n, guildId: o, messageId: a } = e,
        s = (0, c.Z)(n),
        {
            name: _,
            iconType: b,
            isForumPost: x,
            hasAccess: j
        } = (0, l.cj)(
            [m.Z],
            () => {
                let e = m.Z.getChannel(n);
                return {
                    name: null == e ? void 0 : e.name,
                    iconType: (0, w.wl)(e),
                    isForumPost: null == e ? void 0 : e.isForumPost(),
                    hasAccess: null == e || (0, d.YO)(e)
                };
            },
            [n]
        ),
        v = (0, y.d)();
    if (null == b) return;
    let p = o === (null == v ? void 0 : v.guildId) || null == o,
        I =
            j || s.isSubscriptionGated
                ? p || null == _
                    ? (0, r.jsx)(f.Z, {
                          iconType: b,
                          children: null != _ ? _ : (0, r.jsx)('em', { children: O.intl.string(O.t.J90oLS) })
                      })
                    : (0, r.jsx)(S, {
                          guildId: o,
                          children: _
                      })
                : (0, r.jsx)(f.Z, {
                      iconType: 'locked',
                      children: O.intl.string(O.t['/YzI6+'])
                  }),
        k = null;
    return (
        null != a &&
            (k = (0, r.jsxs)(r.Fragment, {
                children: [(0, r.jsx)(h.Z, {}), (0, r.jsx)(f.Z, { iconType: x ? 'post' : 'message' })]
            })),
        (0, r.jsxs)(g.Z, {
            role: 'link',
            onClick: (e) => {
                null == e || e.stopPropagation(), Z(o, n, a), (0, i.pTH)();
            },
            onContextMenu: (e) => {
                let l = m.Z.getChannel(n);
                (0, u.jW)(e, async () => {
                    let { default: e } = await t.e('9573').then(t.bind(t, 546649));
                    return (t) => {
                        var i, u, o;
                        return (0, r.jsx)(
                            e,
                            ((u = (function (e) {
                                for (var n = 1; n < arguments.length; n++) {
                                    var t = null != arguments[n] ? arguments[n] : {},
                                        r = Object.keys(t);
                                    'function' == typeof Object.getOwnPropertySymbols &&
                                        (r = r.concat(
                                            Object.getOwnPropertySymbols(t).filter(function (e) {
                                                return Object.getOwnPropertyDescriptor(t, e).enumerable;
                                            })
                                        )),
                                        r.forEach(function (n) {
                                            var r;
                                            (r = t[n]),
                                                n in e
                                                    ? Object.defineProperty(e, n, {
                                                          value: r,
                                                          enumerable: !0,
                                                          configurable: !0,
                                                          writable: !0
                                                      })
                                                    : (e[n] = r);
                                        });
                                }
                                return e;
                            })({}, t)),
                            (o = o =
                                {
                                    channel: l,
                                    channelId: null != (i = null == l ? void 0 : l.id) ? i : n,
                                    originalLink: null,
                                    messageId: a
                                }),
                            Object.getOwnPropertyDescriptors
                                ? Object.defineProperties(u, Object.getOwnPropertyDescriptors(o))
                                : (function (e, n) {
                                      var t = Object.keys(e);
                                      if (Object.getOwnPropertySymbols) {
                                          var r = Object.getOwnPropertySymbols(e);
                                          t.push.apply(t, r);
                                      }
                                      return t;
                                  })(Object(o)).forEach(function (e) {
                                      Object.defineProperty(u, e, Object.getOwnPropertyDescriptor(o, e));
                                  }),
                            u)
                        );
                    };
                });
            },
            className: 'channelMention',
            children: [I, k]
        })
    );
}
function S(e) {
    let { guildId: n, children: t } = e,
        i = (0, l.e7)([p.Z], () => p.Z.getGuild(n), [n]);
    return (0, r.jsxs)(_.Z, {
        guild: i,
        children: [null == i ? void 0 : i.name, null != i ? (0, r.jsx)(h.Z, {}) : null, t]
    });
}
function A(e) {
    let { id: n } = e,
        t = (0, y.d)();
    return (0, r.jsx)(x.Z, {
        className: 'mention',
        userId: n,
        channelId: null == t ? void 0 : t.channelId,
        viewingChannelId: null == t ? void 0 : t.viewingChannelId,
        parsedUserId: n,
        content: null
    });
}
function C(e) {
    let { id: n } = e,
        t = (0, y.d)(),
        i = null == t ? void 0 : t.guildId,
        u = (0, l.e7)(
            [v.Z],
            () => {
                var e, t;
                return null != (t = null != i ? (null == (e = v.Z.getRole(i, n)) ? void 0 : e.name) : null) ? t : O.intl.string(O.t.sKdZ6e);
            },
            [i, n]
        );
    return (0, r.jsx)(b.Z, {
        roleId: n,
        channelId: null == t ? void 0 : t.channelId,
        guildId: null == t ? void 0 : t.guildId,
        children: '@'.concat(u)
    });
}
function E(e) {
    let { roleName: n } = e,
        t = (0, y.d)();
    return (0, r.jsx)(b.Z, {
        roleName: n,
        channelId: null == t ? void 0 : t.channelId,
        guildId: null == t ? void 0 : t.guildId,
        children: n
    });
}
