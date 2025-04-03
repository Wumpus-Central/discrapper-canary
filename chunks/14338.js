n.d(t, { Z: () => x });
var r = n(200651),
    i = n(192379),
    l = n(120356),
    o = n.n(l),
    a = n(481060),
    s = n(239091),
    c = n(586902),
    u = n(40851),
    d = n(906732),
    p = n(795318),
    h = n(184301),
    f = n(347475),
    m = n(237583),
    g = n(768581),
    b = n(529853);
function _(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                var r;
                (r = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: r,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (e[t] = r);
            });
    }
    return e;
}
function C(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : (function (e, t) {
                  var n = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var r = Object.getOwnPropertySymbols(e);
                      n.push.apply(n, r);
                  }
                  return n;
              })(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function y(e) {
    let { channel: t, speaker: l, className: m } = e,
        { newestAnalyticsLocation: y } = (0, d.ZP)(),
        x = (0, u.bp)(),
        { reducedMotion: v } = i.useContext(a.Sfi),
        j = (0, c.Z)({ userId: l.id }),
        O = null != l.member ? (0, g.CA)(l.member) : null,
        E = (e) => {
            (0, s.jW)(
                e,
                async () => {
                    let { default: e } = await Promise.all([n.e('79695'), n.e('98783'), n.e('97589'), n.e('7717'), n.e('74800')]).then(n.bind(n, 757387));
                    return (n) =>
                        (0, r.jsx)(
                            e,
                            C(_({}, n), {
                                user: l.user,
                                guildId: t.guild_id,
                                channel: t,
                                showMediaItems: !0,
                                showStageChannelItems: !0,
                                showChatItems: !1,
                                onInteraction: (0, p.u)('GuildChannelUserContextMenu', y)
                            })
                        );
                },
                { context: x }
            );
        };
    return (0, r.jsx)(a.yRy, {
        preload: () =>
            (0, h.Z)(l.user, {
                guildId: t.guild_id,
                channelId: t.id
            }),
        renderPopout: (e) =>
            (0, r.jsx)(
                f.Z,
                C(_({}, e), {
                    guildId: t.guild_id,
                    channelId: t.id,
                    userId: l.id
                })
            ),
        position: 'right',
        spacing: 8,
        clickTrap: !0,
        children: (e) =>
            (0, r.jsx)(a.ua7, {
                text: l.userNick,
                position: 'bottom',
                children: (n) =>
                    (0, r.jsx)(
                        a.P3F,
                        C(_({}, n, e), {
                            onClick: (t) => {
                                t.stopPropagation(), e.onClick(t);
                            },
                            onContextMenu: E,
                            children: (0, r.jsx)(a.qEK, {
                                src: null != O ? O : l.user.getAvatarURL(t.guild_id, 24),
                                size: a.EFr.SIZE_24,
                                className: o()(b.avatar, m),
                                'aria-label': l.userNick,
                                isSpeaking: j && !v.enabled
                            })
                        })
                    )
            })
    });
}
function x(e) {
    let { speakers: t, channel: n } = e;
    return (0, r.jsx)(m.Z, {
        className: b.summary,
        guildId: n.guild_id,
        users: t,
        max: 10,
        renderUser: (e, t, i) =>
            (0, r.jsx)(
                y,
                {
                    channel: n,
                    speaker: e,
                    className: t
                },
                i
            ),
        renderMoreUsers: (e, t, n) =>
            (0, r.jsx)(
                'div',
                {
                    className: o()(b.speakers, t),
                    children: e
                },
                n
            )
    });
}
