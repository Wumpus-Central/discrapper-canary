n.d(t, { Z: () => x });
var r = n(255367),
    i = n(73800),
    l = n(120356),
    a = n.n(l),
    o = n(481060),
    s = n(239091),
    c = n(586902),
    u = n(40851),
    d = n(906732),
    p = n(795318),
    h = n(670188),
    f = n(237583),
    m = n(768581),
    g = n(361319);
function b(e) {
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
function _(e, t) {
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
function C(e) {
    let { channel: t, speaker: l, className: f } = e,
        C = i.useRef(null),
        { newestAnalyticsLocation: x } = (0, d.ZP)(),
        y = (0, u.bp)(),
        { reducedMotion: v } = i.useContext(o.Sfi),
        j = (0, c.Z)({ userId: l.id }),
        O = null != l.member ? (0, m.CA)(l.member) : null,
        E = (e) => {
            (0, s.jW)(
                e,
                async () => {
                    let { default: e } = await Promise.all([n.e('26881'), n.e('98783'), n.e('97589'), n.e('7717'), n.e('97474')]).then(n.bind(n, 757387));
                    return (n) =>
                        (0, r.jsx)(
                            e,
                            _(b({}, n), {
                                user: l.user,
                                guildId: t.guild_id,
                                channel: t,
                                showMediaItems: !0,
                                showStageChannelItems: !0,
                                showChatItems: !1,
                                onInteraction: (0, p.u)('GuildChannelUserContextMenu', x)
                            })
                        );
                },
                { context: y }
            );
        };
    return (0, r.jsx)(h.Z, {
        targetElementRef: C,
        user: l.user,
        guildId: t.guild_id,
        channelId: t.id,
        clickTrap: !0,
        children: (e) =>
            (0, r.jsx)(o.ua7, {
                targetElementRef: C,
                text: l.userNick,
                position: 'bottom',
                children: (n) =>
                    (0, r.jsx)(
                        o.P3F,
                        _(b({}, n, e), {
                            innerRef: C,
                            onClick: (t) => {
                                t.stopPropagation(), e.onClick(t);
                            },
                            onContextMenu: E,
                            children: (0, r.jsx)(o.qEK, {
                                src: null != O ? O : l.user.getAvatarURL(t.guild_id, 24),
                                size: o.EFr.SIZE_24,
                                className: a()(g.avatar, f),
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
    return (0, r.jsx)(f.Z, {
        className: g.summary,
        guildId: n.guild_id,
        users: t,
        max: 10,
        renderUser: (e, t, i) =>
            (0, r.jsx)(
                C,
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
                    className: a()(g.speakers, t),
                    children: e
                },
                n
            )
    });
}
