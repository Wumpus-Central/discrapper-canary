t.d(n, {
    m: () => E,
    p: () => k
}),
    t(49124);
var r = t(200651),
    l = t(442837),
    i = t(481060),
    u = t(239091),
    o = t(287734),
    c = t(364640),
    a = t(754688),
    d = t(336197),
    s = t(779699),
    f = t(124072),
    _ = t(644956),
    g = t(819366),
    b = t(488968),
    h = t(131704),
    m = t(592125),
    y = t(430824),
    p = t(934415),
    v = t(900849),
    w = t(981631),
    j = t(388032);
async function x(e, n, t) {
    if (null == n) return;
    if (
        (c.Z.trackDiscordLinkClicked({
            guildId: e,
            channelId: n,
            messageId: t
        }),
        null != e)
    ) {
        let r = y.Z.getGuild(e);
        if ((null == r ? void 0 : r.joinedAt) == null)
            try {
                await v.Ub(
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
    if (null != r && null == t && (0, h.bw)(r.type) && (0, a.YO)(r)) return void o.default.selectVoiceChannel(r.id);
    (0, d.Z)(w.Z5c.CHANNEL(e, n, t));
}
function k(e) {
    let { type: n, value: t } = e;
    switch (n) {
        case 'channel':
            return (0, r.jsx)(E, { id: t });
        case 'user':
            return (0, r.jsx)(O, { id: t });
        case 'role':
            return (0, r.jsx)(I, { id: t });
        default:
            return JSON.stringify(t);
    }
}
function E(e) {
    let { id: n } = e,
        o = (0, l.e7)([m.Z], () => m.Z.getChannel(n), [n]),
        c = (0, b.d)(),
        a = null == o ? void 0 : o.name,
        d = (0, p.wl)(o);
    if (null != d)
        return (0, r.jsx)(f.Z, {
            role: 'link',
            onClick: (e) => {
                var t;
                null == e || e.stopPropagation(), x(null != (t = null == o ? void 0 : o.getGuildId()) ? t : void 0, n, null == c ? void 0 : c.messageId), (0, i.pTH)();
            },
            onContextMenu: (e) => {
                (0, u.jW)(e, async () => {
                    let { default: e } = await t.e('9573').then(t.bind(t, 546649));
                    return (t) => {
                        var l, i, u;
                        return (0, r.jsx)(
                            e,
                            ((i = (function (e) {
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
                                    channel: o,
                                    channelId: null != (l = null == o ? void 0 : o.id) ? l : n,
                                    originalLink: null,
                                    messageId: null == c ? void 0 : c.messageId
                                }),
                            Object.getOwnPropertyDescriptors
                                ? Object.defineProperties(i, Object.getOwnPropertyDescriptors(u))
                                : (function (e, n) {
                                      var t = Object.keys(e);
                                      if (Object.getOwnPropertySymbols) {
                                          var r = Object.getOwnPropertySymbols(e);
                                          t.push.apply(t, r);
                                      }
                                      return t;
                                  })(Object(u)).forEach(function (e) {
                                      Object.defineProperty(i, e, Object.getOwnPropertyDescriptor(u, e));
                                  }),
                            i)
                        );
                    };
                });
            },
            className: 'channelMention',
            children: (0, r.jsx)(s.Z, {
                iconType: d,
                children: a
            })
        });
}
function O(e) {
    let { id: n } = e,
        t = (0, b.d)();
    return (0, r.jsx)(g.Z, {
        className: 'mention',
        userId: n,
        channelId: null == t ? void 0 : t.channelId,
        viewingChannelId: null == t ? void 0 : t.viewingChannelId,
        parsedUserId: n,
        content: null
    });
}
function I(e) {
    let { id: n } = e,
        t = (0, b.d)(),
        i = null == t ? void 0 : t.guildId,
        u = (0, l.e7)(
            [y.Z],
            () => {
                var e, t;
                return null != (t = null != i ? (null == (e = y.Z.getRole(i, n)) ? void 0 : e.name) : null) ? t : j.intl.string(j.t.sKdZ6e);
            },
            [i, n]
        );
    return (0, r.jsx)(_.Z, {
        roleId: n,
        channelId: null == t ? void 0 : t.channelId,
        guildId: null == t ? void 0 : t.guildId,
        children: '@'.concat(u)
    });
}
