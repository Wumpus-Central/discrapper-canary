n.d(t, { Z: () => C });
var r = n(200651),
    i = n(192379),
    l = n(120356),
    o = n.n(l),
    a = n(481060),
    s = n(239091),
    c = n(586902),
    u = n(40851),
    d = n(184301),
    p = n(347475),
    h = n(237583),
    f = n(768581),
    m = n(112471);
function g(e) {
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
function b(e, t) {
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
function _(e) {
    let { channel: t, speaker: l, className: h } = e,
        _ = (0, u.bp)(),
        { reducedMotion: C } = i.useContext(a.Sfi),
        v = (0, c.Z)({ userId: l.id }),
        y = null != l.member ? (0, f.CA)(l.member) : null,
        x = (e) => {
            (0, s.jW)(
                e,
                async () => {
                    let { default: e } = await Promise.all([n.e('79695'), n.e('98783'), n.e('97589'), n.e('7717'), n.e('83944')]).then(n.bind(n, 757387));
                    return (n) =>
                        (0, r.jsx)(
                            e,
                            b(g({}, n), {
                                user: l.user,
                                guildId: t.guild_id,
                                channel: t,
                                showMediaItems: !0,
                                showStageChannelItems: !0,
                                showChatItems: !1
                            })
                        );
                },
                { context: _ }
            );
        };
    return (0, r.jsx)(a.yRy, {
        preload: () =>
            (0, d.Z)(l.user, {
                guildId: t.guild_id,
                channelId: t.id
            }),
        renderPopout: (e) =>
            (0, r.jsx)(
                p.Z,
                b(g({}, e), {
                    guildId: t.guild_id,
                    channelId: t.id,
                    userId: l.id
                })
            ),
        position: 'right',
        spacing: 8,
        children: (e) =>
            (0, r.jsx)(a.ua7, {
                text: l.userNick,
                position: 'bottom',
                children: (n) =>
                    (0, r.jsx)(
                        a.P3F,
                        b(g({}, n, e), {
                            onClick: (t) => {
                                t.stopPropagation(), e.onClick(t);
                            },
                            onContextMenu: x,
                            children: (0, r.jsx)(a.qEK, {
                                src: null != y ? y : l.user.getAvatarURL(t.guild_id, 24),
                                size: a.EFr.SIZE_24,
                                className: o()(m.avatar, h),
                                'aria-label': l.userNick,
                                isSpeaking: v && !C.enabled
                            })
                        })
                    )
            })
    });
}
function C(e) {
    let { speakers: t, channel: n } = e;
    return (0, r.jsx)(h.Z, {
        className: m.summary,
        guildId: n.guild_id,
        users: t,
        max: 10,
        renderUser: (e, t, i) =>
            (0, r.jsx)(
                _,
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
                    className: o()(m.speakers, t),
                    children: e
                },
                n
            )
    });
}
