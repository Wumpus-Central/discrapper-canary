n.d(t, { Z: () => x });
var r = n(54381),
    i = n(473749),
    l = n(120356),
    a = n.n(l),
    s = n(28664),
    o = n(481060),
    c = n(239091),
    d = n(586902),
    u = n(906732),
    p = n(795318),
    h = n(728285),
    f = n(670188),
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
function O(e, t) {
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
function j(e) {
    let { channel: t, speaker: l, className: g } = e,
        j = i.useRef(null),
        { newestAnalyticsLocation: x } = (0, u.ZP)(),
        v = (0, h.bp)(),
        { reducedMotion: C } = i.useContext(o.Sfi),
        I = (0, d.Z)({ userId: l.id }),
        _ = null != l.member ? (0, m.CA)(l.member) : null,
        S = (e) => {
            (0, c.jW)(
                e,
                async () => {
                    let { default: e } = await Promise.all([
                        n.e("79695"),
                        n.e("66165"),
                        n.e("8982"),
                        n.e("7717"),
                        n.e("9393"),
                    ]).then(n.bind(n, 757387));
                    return (n) =>
                        (0, r.jsx)(
                            e,
                            O(y({}, n), {
                                user: l.user,
                                guildId: t.guild_id,
                                channel: t,
                                showMediaItems: !0,
                                showStageChannelItems: !0,
                                showChatItems: !1,
                                onInteraction: (0, p.u)("GuildChannelUserContextMenu", x),
                            }),
                        );
                },
                { context: v },
            );
        };
    return (0, r.jsx)(f.Z, {
        targetElementRef: j,
        user: l.user,
        guildId: t.guild_id,
        channelId: t.id,
        clickTrap: !0,
        children: (e) =>
            (0, r.jsx)(s.u, {
                targetElementRef: j,
                __unsupportedReactNodeAsText: l.userNick,
                position: "bottom",
                children: (0, r.jsx)(
                    o.P3F,
                    O(y({}, e), {
                        innerRef: j,
                        onClick: (t) => {
                            t.stopPropagation(), e.onClick(t);
                        },
                        onContextMenu: S,
                        children: (0, r.jsx)(o.qEK, {
                            src: null != _ ? _ : l.user.getAvatarURL(t.guild_id, 24),
                            size: o.EFr.SIZE_24,
                            className: a()(b.avatar, g),
                            "aria-label": l.userNick,
                            isSpeaking: I && !C.enabled,
                        }),
                    }),
                ),
            }),
    });
}
function x(e) {
    let { speakers: t, channel: n } = e;
    return (0, r.jsx)(g.Z, {
        className: b.summary,
        guildId: n.guild_id,
        users: t,
        max: 10,
        renderUser: (e, t, i) =>
            (0, r.jsx)(
                j,
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
