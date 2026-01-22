n.d(t, { A: () => j });
var r = n(627968),
    l = n(64700),
    i = n(503698),
    a = n.n(i),
    s = n(990078),
    o = n(397927),
    c = n(442433),
    u = n(717558),
    d = n(688810),
    f = n(480890),
    p = n(267102),
    h = n(342296),
    b = n(636585),
    g = n(486020),
    m = n(787750);
function A(e) {
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
function y(e, t) {
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
    let { channel: t, speaker: i, className: b } = e,
        O = l.useRef(null),
        { newestAnalyticsLocation: j } = (0, d.Ay)(),
        v = (0, p.Us)(),
        { reducedMotion: x } = l.useContext(o.CZY),
        E = (0, u.A)({ userId: i.id }),
        _ = null != i.member ? (0, g.xT)(i.member) : null,
        C = (e) => {
            (0, c.L3)(
                e,
                async () => {
                    let { default: e } = await Promise.all([
                        n.e("97262"),
                        n.e("29534"),
                        n.e("55296"),
                        n.e("84841"),
                        n.e("91609"),
                    ]).then(n.bind(n, 107632));
                    return (n) =>
                        (0, r.jsx)(
                            e,
                            y(A({}, n), {
                                user: i.user,
                                guildId: t.guild_id,
                                channel: t,
                                showMediaItems: !0,
                                showStageChannelItems: !0,
                                showChatItems: !1,
                                onInteraction: (0, f.s)("GuildChannelUserContextMenu", j),
                            }),
                        );
                },
                { context: v },
            );
        };
    return (0, r.jsx)(h.A, {
        targetElementRef: O,
        user: i.user,
        guildId: t.guild_id,
        channelId: t.id,
        clickTrap: !0,
        children: (e) =>
            (0, r.jsx)(s.m, {
                targetElementRef: O,
                __unsupportedReactNodeAsText: i.userNick,
                position: "bottom",
                children: (0, r.jsx)(
                    o.DUT,
                    y(A({}, e), {
                        innerRef: O,
                        onClick: (t) => {
                            t.stopPropagation(), e.onClick(t);
                        },
                        onContextMenu: C,
                        children: (0, r.jsx)(o.euF, {
                            src: null != _ ? _ : i.user.getAvatarURL(t.guild_id, 24),
                            size: o._3J.SIZE_24,
                            className: a()(m.my, b),
                            "aria-label": i.userNick,
                            isSpeaking: E && !x.enabled,
                        }),
                    }),
                ),
            }),
    });
}
function j(e) {
    let { speakers: t, channel: n } = e;
    return (0, r.jsx)(b.A, {
        className: m.z,
        guildId: n.guild_id,
        users: t,
        max: 10,
        renderUser: (e, t, l) =>
            (0, r.jsx)(
                O,
                {
                    channel: n,
                    speaker: e,
                    className: t,
                },
                l,
            ),
        renderMoreUsers: (e, t, n) =>
            (0, r.jsx)(
                "div",
                {
                    className: a()(m.$U, t),
                    children: e,
                },
                n,
            ),
    });
}
