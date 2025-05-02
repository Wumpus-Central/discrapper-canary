t.d(n, {
    d: () => Z,
    p: () => E
}),
    t(49124);
var r = t(200651),
    l = t(442837),
    i = t(481060),
    c = t(239091),
    u = t(287734),
    o = t(66999),
    a = t(364640),
    d = t(754688),
    s = t(336197),
    f = t(779699),
    _ = t(359875),
    g = t(124072),
    b = t(891984),
    h = t(644956),
    m = t(819366),
    y = t(488968),
    p = t(131704),
    v = t(592125),
    w = t(430824),
    j = t(934415),
    x = t(900849),
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
        let r = w.Z.getGuild(e);
        if ((null == r ? void 0 : r.joinedAt) == null)
            try {
                await x.Ub(
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
    let r = v.Z.getChannel(n);
    if (null != r && null == t && (0, p.bw)(r.type) && (0, d.YO)(r)) return void u.default.selectVoiceChannel(r.id);
    (0, s.Z)(I.Z5c.CHANNEL(e, n, t));
}
function E(e) {
    let { type: n, value: t } = e;
    switch (n) {
        case 'channel':
            return (0, r.jsx)(Z, { channelId: t });
        case 'user':
            return (0, r.jsx)(S, { id: t });
        case 'role':
            return (0, r.jsx)(A, { id: t });
        default:
            return JSON.stringify(t);
    }
}
function Z(e) {
    let { channelId: n, guildId: u, messageId: a } = e,
        s = (0, o.Z)(n),
        {
            name: _,
            iconType: h,
            isForumPost: m,
            hasAccess: p
        } = (0, l.cj)(
            [v.Z],
            () => {
                let e = v.Z.getChannel(n);
                return {
                    name: null == e ? void 0 : e.name,
                    iconType: (0, j.wl)(e),
                    isForumPost: null == e ? void 0 : e.isForumPost(),
                    hasAccess: null == e || (0, d.YO)(e)
                };
            },
            [n]
        ),
        w = (0, y.d)();
    if (null == h) return;
    let x = u === (null == w ? void 0 : w.guildId) || null == u,
        I =
            p || s.isSubscriptionGated
                ? x || null == _
                    ? (0, r.jsx)(f.Z, {
                          iconType: h,
                          children: null != _ ? _ : (0, r.jsx)('em', { children: k.intl.string(k.t.J90oLS) })
                      })
                    : (0, r.jsx)(P, {
                          guildId: u,
                          children: _
                      })
                : (0, r.jsx)(f.Z, {
                      iconType: 'locked',
                      children: k.intl.string(k.t['/YzI6+'])
                  }),
        E = null;
    return (
        null != a &&
            (E = (0, r.jsxs)(r.Fragment, {
                children: [(0, r.jsx)(b.Z, {}), (0, r.jsx)(f.Z, { iconType: m ? 'post' : 'message' })]
            })),
        (0, r.jsxs)(g.Z, {
            role: 'link',
            onClick: (e) => {
                null == e || e.stopPropagation(), O(u, n, a), (0, i.pTH)();
            },
            onContextMenu: (e) => {
                let l = v.Z.getChannel(n);
                (0, c.jW)(e, async () => {
                    let { default: e } = await t.e('9573').then(t.bind(t, 546649));
                    return (t) => {
                        var i, c, u;
                        return (0, r.jsx)(
                            e,
                            ((c = (function (e) {
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
                                ? Object.defineProperties(c, Object.getOwnPropertyDescriptors(u))
                                : (function (e, n) {
                                      var t = Object.keys(e);
                                      if (Object.getOwnPropertySymbols) {
                                          var r = Object.getOwnPropertySymbols(e);
                                          t.push.apply(t, r);
                                      }
                                      return t;
                                  })(Object(u)).forEach(function (e) {
                                      Object.defineProperty(c, e, Object.getOwnPropertyDescriptor(u, e));
                                  }),
                            c)
                        );
                    };
                });
            },
            className: 'channelMention',
            children: [I, E]
        })
    );
}
function P(e) {
    let { guildId: n, children: t } = e,
        i = (0, l.e7)([w.Z], () => w.Z.getGuild(n), [n]);
    return (0, r.jsxs)(_.Z, {
        guild: i,
        children: [null == i ? void 0 : i.name, null != i ? (0, r.jsx)(b.Z, {}) : null, t]
    });
}
function S(e) {
    let { id: n } = e,
        t = (0, y.d)();
    return (0, r.jsx)(m.Z, {
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
        t = (0, y.d)(),
        i = null == t ? void 0 : t.guildId,
        c = (0, l.e7)(
            [w.Z],
            () => {
                var e, t;
                return null != (t = null != i ? (null == (e = w.Z.getRole(i, n)) ? void 0 : e.name) : null) ? t : k.intl.string(k.t.sKdZ6e);
            },
            [i, n]
        );
    return (0, r.jsx)(h.Z, {
        roleId: n,
        channelId: null == t ? void 0 : t.channelId,
        guildId: null == t ? void 0 : t.guildId,
        children: '@'.concat(c)
    });
}
