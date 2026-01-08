n.d(t, { Z: () => j });
var r = n(54381),
    i = n(473749),
    l = n(120356),
    a = n.n(l),
    o = n(28664),
    s = n(481060),
    c = n(239091),
    u = n(586902),
    d = n(906732),
    p = n(795318),
    f = n(728285),
    h = n(670188),
    g = n(237583),
    m = n(768581),
    b = n(807788);
function y(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                var r;
                (r = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: r,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0,
                          })
                        : (e[t] = r);
            });
    }
    return e;
}
function v(e, t) {
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
function O(e) {
    let { channel: t, speaker: l, className: g } = e,
        O = i.useRef(null),
        { newestAnalyticsLocation: j } = (0, d.ZP)(),
        x = (0, f.bp)(),
        { reducedMotion: C } = i.useContext(s.Sfi),
        E = (0, u.Z)({ userId: l.id }),
        S = null != l.member ? (0, m.CA)(l.member) : null,
        _ = (e) => {
            (0, c.jW)(
                e,
                async () => {
                    let { default: e } = await Promise.all([
                        n.e("79695"),
                        n.e("4040"),
                        n.e("92524"),
                        n.e("7717"),
                        n.e("9393"),
                    ]).then(n.bind(n, 757387));
                    return (n) =>
                        (0, r.jsx)(
                            e,
                            v(y({}, n), {
                                user: l.user,
                                guildId: t.guild_id,
                                channel: t,
                                showMediaItems: !0,
                                showStageChannelItems: !0,
                                showChatItems: !1,
                                onInteraction: (0, p.u)("GuildChannelUserContextMenu", j),
                            }),
                        );
                },
                { context: x },
            );
        };
    return (0, r.jsx)(h.Z, {
        targetElementRef: O,
        user: l.user,
        guildId: t.guild_id,
        channelId: t.id,
        clickTrap: !0,
        children: (e) =>
            (0, r.jsx)(o.u, {
                targetElementRef: O,
                __unsupportedReactNodeAsText: l.userNick,
                position: "bottom",
                children: (0, r.jsx)(
                    s.P3F,
                    v(y({}, e), {
                        innerRef: O,
                        onClick: (t) => {
                            t.stopPropagation(), e.onClick(t);
                        },
                        onContextMenu: _,
                        children: (0, r.jsx)(s.qEK, {
                            src: null != S ? S : l.user.getAvatarURL(t.guild_id, 24),
                            size: s.EFr.SIZE_24,
                            className: a()(b.avatar, g),
                            "aria-label": l.userNick,
                            isSpeaking: E && !C.enabled,
                        }),
                    }),
                ),
            }),
    });
}
function j(e) {
    let { speakers: t, channel: n } = e;
    return (0, r.jsx)(g.Z, {
        className: b.summary,
        guildId: n.guild_id,
        users: t,
        max: 10,
        renderUser: (e, t, i) =>
            (0, r.jsx)(
                O,
                {
                    channel: n,
                    speaker: e,
                    className: t,
                },
                i,
            ),
        renderMoreUsers: (e, t, n) =>
            (0, r.jsx)(
                "div",
                {
                    className: a()(b.speakers, t),
                    children: e,
                },
                n,
            ),
    });
}
