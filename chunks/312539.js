t.d(n, {
    d: () => P,
    p: () => Z
}),
    t(49124);
var r = t(255367),
    l = t(442837),
    i = t(481060),
    o = t(239091),
    u = t(287734),
    c = t(66999),
    a = t(364640),
    d = t(754688),
    s = t(336197),
    f = t(779699),
    _ = t(359875),
    g = t(124072),
    h = t(891984),
    b = t(644956),
    y = t(819366),
    j = t(488968),
    x = t(131704),
    m = t(592125),
    p = t(430824),
    v = t(934415),
    w = t(900849),
    I = t(981631),
    k = t(388032);
async function O(e, n, t) {
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
                await w.Ub(
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
    if (null != r && null == t && (0, x.bw)(r.type) && (0, d.YO)(r)) return void u.default.selectVoiceChannel(r.id);
    (0, s.Z)(I.Z5c.CHANNEL(e, n, t));
}
function Z(e) {
    let { type: n, value: t } = e;
    switch (n) {
        case 'channel':
            return (0, r.jsx)(P, { channelId: t });
        case 'user':
            return (0, r.jsx)(S, { id: t });
        case 'role':
            return (0, r.jsx)(A, { id: t });
        case 'everyone':
            return (0, r.jsx)(C, { roleName: '@everyone' });
        case 'here':
            return (0, r.jsx)(C, { roleName: '@here' });
        default:
            return JSON.stringify(t);
    }
}
function P(e) {
    let { channelId: n, guildId: u, messageId: a } = e,
        s = (0, c.Z)(n),
        {
            name: _,
            iconType: b,
            isForumPost: y,
            hasAccess: x
        } = (0, l.cj)(
            [m.Z],
            () => {
                let e = m.Z.getChannel(n);
                return {
                    name: null == e ? void 0 : e.name,
                    iconType: (0, v.wl)(e),
                    isForumPost: null == e ? void 0 : e.isForumPost(),
                    hasAccess: null == e || (0, d.YO)(e)
                };
            },
            [n]
        ),
        p = (0, j.d)();
    if (null == b) return;
    let w = u === (null == p ? void 0 : p.guildId) || null == u,
        I =
            x || s.isSubscriptionGated
                ? w || null == _
                    ? (0, r.jsx)(f.Z, {
                          iconType: b,
                          children: null != _ ? _ : (0, r.jsx)('em', { children: k.intl.string(k.t.J90oLS) })
                      })
                    : (0, r.jsx)(T, {
                          guildId: u,
                          children: _
                      })
                : (0, r.jsx)(f.Z, {
                      iconType: 'locked',
                      children: k.intl.string(k.t['/YzI6+'])
                  }),
        Z = null;
    return (
        null != a &&
            (Z = (0, r.jsxs)(r.Fragment, {
                children: [(0, r.jsx)(h.Z, {}), (0, r.jsx)(f.Z, { iconType: y ? 'post' : 'message' })]
            })),
        (0, r.jsxs)(g.Z, {
            role: 'link',
            onClick: (e) => {
                null == e || e.stopPropagation(), O(u, n, a), (0, i.pTH)();
            },
            onContextMenu: (e) => {
                let l = m.Z.getChannel(n);
                (0, o.jW)(e, async () => {
                    let { default: e } = await t.e('9573').then(t.bind(t, 546649));
                    return (t) => {
                        var i, o, u;
                        return (0, r.jsx)(
                            e,
                            ((o = (function (e) {
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
                            (u = u =
                                {
                                    channel: l,
                                    channelId: null != (i = null == l ? void 0 : l.id) ? i : n,
                                    originalLink: null,
                                    messageId: a
                                }),
                            Object.getOwnPropertyDescriptors
                                ? Object.defineProperties(o, Object.getOwnPropertyDescriptors(u))
                                : (function (e, n) {
                                      var t = Object.keys(e);
                                      if (Object.getOwnPropertySymbols) {
                                          var r = Object.getOwnPropertySymbols(e);
                                          t.push.apply(t, r);
                                      }
                                      return t;
                                  })(Object(u)).forEach(function (e) {
                                      Object.defineProperty(o, e, Object.getOwnPropertyDescriptor(u, e));
                                  }),
                            o)
                        );
                    };
                });
            },
            className: 'channelMention',
            children: [I, Z]
        })
    );
}
function T(e) {
    let { guildId: n, children: t } = e,
        i = (0, l.e7)([p.Z], () => p.Z.getGuild(n), [n]);
    return (0, r.jsxs)(_.Z, {
        guild: i,
        children: [null == i ? void 0 : i.name, null != i ? (0, r.jsx)(h.Z, {}) : null, t]
    });
}
function S(e) {
    let { id: n } = e,
        t = (0, j.d)();
    return (0, r.jsx)(y.Z, {
        className: 'mention',
        userId: n,
        channelId: null == t ? void 0 : t.channelId,
        viewingChannelId: null == t ? void 0 : t.viewingChannelId,
        parsedUserId: n,
        content: null
    });
}
function A(e) {
    let { id: n } = e,
        t = (0, j.d)(),
        i = null == t ? void 0 : t.guildId,
        o = (0, l.e7)(
            [p.Z],
            () => {
                var e, t;
                return null != (t = null != i ? (null == (e = p.Z.getRole(i, n)) ? void 0 : e.name) : null) ? t : k.intl.string(k.t.sKdZ6e);
            },
            [i, n]
        );
    return (0, r.jsx)(b.Z, {
        roleId: n,
        channelId: null == t ? void 0 : t.channelId,
        guildId: null == t ? void 0 : t.guildId,
        children: '@'.concat(o)
    });
}
function C(e) {
    let { roleName: n } = e,
        t = (0, j.d)();
    return (0, r.jsx)(b.Z, {
        roleName: n,
        channelId: null == t ? void 0 : t.channelId,
        guildId: null == t ? void 0 : t.guildId,
        children: n
    });
}
