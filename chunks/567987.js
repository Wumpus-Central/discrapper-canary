n.d(t, {
    E: () => I,
});
var r = n(627968),
    l = n(64700),
    i = n(284009),
    s = n.n(i),
    a = n(442433),
    o = n(793574),
    u = n(326567),
    c = n(287809),
    d = n(480890),
    h = n(806931),
    p = n(652215);

function w(e) {
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

function f(e, t) {
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

function I(e) {
    let { channel: t } = e;
    return l.useCallback(
        (e, l, i, I) => {
            if (null == t) return;
            let O = {
                context: p.BRT.CALL_TILE_POPOUT,
            };
            switch (e.type) {
                case h.lp.HIDDEN_STREAM:
                case h.lp.STREAM:
                    (0, a.L3)(
                        l,
                        async () => {
                            let { default: t } = await n.e("66692").then(n.bind(n, 796175));
                            return (n) =>
                                (0, r.jsx)(
                                    t,
                                    w(
                                        {
                                            stream: e.stream,
                                            appContext: p.BRT.CALL_TILE_POPOUT,
                                            minimal: i,
                                            exitFullscreen: () => {},
                                            onInteraction: (0, d.s)("StreamContextMenu", o.A.CALL_TILE_POPOUT, {
                                                entrypoint: I,
                                                tileType: h.qs.STREAM,
                                                targetUserId: e.user.id,
                                            }),
                                        },
                                        n,
                                    ),
                                );
                        },
                        O,
                    );
                    return;
                case h.lp.USER:
                    let b = c.default.getUser(e.id);
                    if (null != b) {
                        if (i)
                            return (0, u.r)(l, b, t, O, (e, t) => {
                                (0, d.s)(e, o.A.CALL_TILE_POPOUT, {
                                    entrypoint: h.GK.THREE_DOT,
                                    tileType: h.qs.USER,
                                    targetUserId: b.id,
                                })(t);
                            });
                        switch (t.type) {
                            case p.rbe.DM:
                                return (0, a.L3)(
                                    l,
                                    async () => {
                                        let { default: e } = await Promise.all([
                                            n.e("97262"),
                                            n.e("29534"),
                                            n.e("93169"),
                                            n.e("39778"),
                                            n.e("54266"),
                                        ]).then(n.bind(n, 385913));
                                        return (n) =>
                                            (0, r.jsx)(
                                                e,
                                                f(w({}, n), {
                                                    showChannelCallItems: !0,
                                                    showMediaItems: !0,
                                                    user: b,
                                                    channel: t,
                                                    showModalItems: !0,
                                                    onInteraction: (0, d.s)("DMUserContextMenu", o.A.CALL_TILE_POPOUT, {
                                                        entrypoint: I,
                                                        tileType: h.qs.USER,
                                                        targetUserId: b.id,
                                                    }),
                                                }),
                                            );
                                    },
                                    O,
                                );
                            case p.rbe.GROUP_DM:
                                return (0, a.L3)(
                                    l,
                                    async () => {
                                        let { default: e } = await Promise.all([
                                            n.e("97262"),
                                            n.e("29534"),
                                            n.e("62891"),
                                            n.e("42296"),
                                        ]).then(n.bind(n, 228006));
                                        return (n) =>
                                            (0, r.jsx)(
                                                e,
                                                f(w({}, n), {
                                                    showChannelCallItems: !0,
                                                    showMediaItems: !0,
                                                    showChatItems: !1,
                                                    user: b,
                                                    channel: t,
                                                    showModalItems: !0,
                                                    onInteraction: (0, d.s)(
                                                        "GroupDMUserContextMenu",
                                                        o.A.CALL_TILE_POPOUT,
                                                        {
                                                            entrypoint: I,
                                                            tileType: h.qs.USER,
                                                            targetUserId: b.id,
                                                        },
                                                    ),
                                                }),
                                            );
                                    },
                                    O,
                                );
                            case p.rbe.GUILD_VOICE:
                            case p.rbe.PUBLIC_THREAD:
                            case p.rbe.PRIVATE_THREAD:
                                let e = t.getGuildId();
                                return (
                                    s()(null != e, "GuildID null for guild voice channel"),
                                    (0, a.L3)(
                                        l,
                                        async () => {
                                            let { default: l } = await Promise.all([
                                                n.e("97262"),
                                                n.e("29534"),
                                                n.e("55296"),
                                                n.e("84841"),
                                                n.e("31885"),
                                            ]).then(n.bind(n, 107632));
                                            return (n) =>
                                                (0, r.jsx)(
                                                    l,
                                                    f(w({}, n), {
                                                        showMediaItems: !0,
                                                        showChannelCallItems: !0,
                                                        showChatItems: !1,
                                                        user: b,
                                                        channel: t,
                                                        guildId: e,
                                                        showModalItems: !0,
                                                        onInteraction: (0, d.s)(
                                                            "GuildChannelUserContextMenu",
                                                            o.A.CALL_TILE_POPOUT,
                                                            {
                                                                entrypoint: I,
                                                                tileType: h.qs.USER,
                                                                targetUserId: b.id,
                                                            },
                                                        ),
                                                    }),
                                                );
                                        },
                                        O,
                                    )
                                );
                        }
                    }
                    return;
                case h.lp.ACTIVITY:
                    return;
            }
        },
        [t],
    );
}
