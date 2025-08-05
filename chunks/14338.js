n.d(t, { Z: () => j });
var r = n(255367),
    i = n(73800),
    l = n(120356),
    a = n.n(l),
    s = n(481060),
    o = n(239091),
    c = n(586902),
    d = n(40851),
    u = n(906732),
    h = n(795318),
    p = n(670188),
    f = n(237583),
    g = n(768581),
    m = n(529853);
function b(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        ('function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                var r;
                ((r = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: r,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (e[t] = r));
            }));
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
function y(e) {
    let { channel: t, speaker: l, className: f } = e,
        y = i.useRef(null),
        { newestAnalyticsLocation: j } = (0, u.ZP)(),
        O = (0, d.bp)(),
        { reducedMotion: x } = i.useContext(s.Sfi),
        v = (0, c.Z)({ userId: l.id }),
        C = null != l.member ? (0, g.CA)(l.member) : null,
        E = (e) => {
            (0, o.jW)(
                e,
                async () => {
                    let { default: e } = await Promise.all([n.e('79695'), n.e('98783'), n.e('8982'), n.e('7717'), n.e('74800')]).then(n.bind(n, 757387));
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
                                onInteraction: (0, h.u)('GuildChannelUserContextMenu', j)
                            })
                        );
                },
                { context: O }
            );
        };
    return (0, r.jsx)(p.Z, {
        targetElementRef: y,
        user: l.user,
        guildId: t.guild_id,
        channelId: t.id,
        clickTrap: !0,
        children: (e) =>
            (0, r.jsx)(s.ua7, {
                targetElementRef: y,
                text: l.userNick,
                position: 'bottom',
                children: (n) =>
                    (0, r.jsx)(
                        s.P3F,
                        _(b({}, n, e), {
                            innerRef: y,
                            onClick: (t) => {
                                (t.stopPropagation(), e.onClick(t));
                            },
                            onContextMenu: E,
                            children: (0, r.jsx)(s.qEK, {
                                src: null != C ? C : l.user.getAvatarURL(t.guild_id, 24),
                                size: s.EFr.SIZE_24,
                                className: a()(m.avatar, f),
                                'aria-label': l.userNick,
                                isSpeaking: v && !x.enabled
                            })
                        })
                    )
            })
    });
}
function j(e) {
    let { speakers: t, channel: n } = e;
    return (0, r.jsx)(f.Z, {
        className: m.summary,
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
                    className: a()(m.speakers, t),
                    children: e
                },
                n
            )
    });
}
