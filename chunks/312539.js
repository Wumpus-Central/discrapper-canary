t.d(n, {
    d: () => O,
    p: () => E
}),
    t(49124);
var r = t(255367),
    l = t(442837),
    i = t(481060),
    u = t(239091),
    c = t(287734),
    o = t(364640),
    a = t(754688),
    d = t(336197),
    s = t(779699),
    f = t(359875),
    _ = t(124072),
    g = t(891984),
    b = t(644956),
    h = t(819366),
    m = t(488968),
    y = t(131704),
    p = t(592125),
    v = t(430824),
    w = t(934415),
    j = t(900849),
    x = t(981631),
    I = t(388032);
async function k(e, n, t) {
    if (null == n) return;
    if (
        (o.Z.trackDiscordLinkClicked({
            guildId: e,
            channelId: n,
            messageId: t
        }),
        null != e)
    ) {
        let r = v.Z.getGuild(e);
        if ((null == r ? void 0 : r.joinedAt) == null)
            try {
                await j.Ub(
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
    let r = p.Z.getChannel(n);
    if (null != r && null == t && (0, y.bw)(r.type) && (0, a.YO)(r)) return void c.default.selectVoiceChannel(r.id);
    (0, d.Z)(x.Z5c.CHANNEL(e, n, t));
}
function E(e) {
    let { type: n, value: t } = e;
    switch (n) {
        case 'channel':
            return (0, r.jsx)(O, { channelId: t });
        case 'user':
            return (0, r.jsx)(Z, { id: t });
        case 'role':
            return (0, r.jsx)(A, { id: t });
        default:
            return JSON.stringify(t);
    }
}
function O(e) {
    let { channelId: n, messageId: c } = e,
        {
            name: o,
            iconType: a,
            isForumPost: d,
            guildId: f
        } = (0, l.cj)(
            [p.Z],
            () => {
                let e = p.Z.getChannel(n);
                return {
                    name: null == e ? void 0 : e.name,
                    iconType: (0, w.wl)(e),
                    isForumPost: null == e ? void 0 : e.isForumPost(),
                    guildId: null == e ? void 0 : e.getGuildId()
                };
            },
            [n]
        ),
        b = (0, m.d)();
    if (null == a) return;
    let h =
            f === (null == b ? void 0 : b.guildId)
                ? (0, r.jsx)(s.Z, {
                      iconType: a,
                      children: o
                  })
                : (0, r.jsx)(P, {
                      guildId: f,
                      children: o
                  }),
        y = null;
    return (
        null != c &&
            (y = (0, r.jsxs)(r.Fragment, {
                children: [(0, r.jsx)(g.Z, {}), (0, r.jsx)(s.Z, { iconType: d ? 'post' : 'message' })]
            })),
        (0, r.jsxs)(_.Z, {
            role: 'link',
            onClick: (e) => {
                null == e || e.stopPropagation(), k(null != f ? f : void 0, n, c), (0, i.pTH)();
            },
            onContextMenu: (e) => {
                let l = p.Z.getChannel(n);
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
                                    messageId: c
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
            children: [h, y]
        })
    );
}
function P(e) {
    let { guildId: n, children: t } = e,
        i = (0, l.e7)([v.Z], () => v.Z.getGuild(n), [n]);
    return (0, r.jsx)(f.Z, {
        guild: i,
        children: t
    });
}
function Z(e) {
    let { id: n } = e,
        t = (0, m.d)();
    return (0, r.jsx)(h.Z, {
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
        t = (0, m.d)(),
        i = null == t ? void 0 : t.guildId,
        u = (0, l.e7)(
            [v.Z],
            () => {
                var e, t;
                return null != (t = null != i ? (null == (e = v.Z.getRole(i, n)) ? void 0 : e.name) : null) ? t : I.intl.string(I.t.sKdZ6e);
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
