n.d(t, { E: () => T });
var r = n(627968),
    l = n(64700),
    i = n(284009),
    s = n.n(i),
    a = n(442433),
    o = n(793574),
    u = n(326567),
    d = n(287809),
    c = n(480890),
    h = n(806931),
    I = n(652215);
function T(e) {
    let { channel: t } = e;
    return l.useCallback(
        (e, l, i, T) => {
            if (null == t) return;
            let w = { context: I.BRT.CALL_TILE_POPOUT };
            switch (e.type) {
                case h.lp.HIDDEN_STREAM:
                case h.lp.STREAM:
                    (0, a.L3)(
                        l,
                        async () => {
                            let { default: t } = await n.e("66692").then(n.bind(n, 796175));
                            return (n) =>
                                (0, r.jsx)(t, {
                                    stream: e.stream,
                                    appContext: I.BRT.CALL_TILE_POPOUT,
                                    minimal: i,
                                    exitFullscreen: () => {},
                                    onInteraction: (0, c.s)("StreamContextMenu", o.A.CALL_TILE_POPOUT, {
                                        entrypoint: T,
                                        tileType: h.qs.STREAM,
                                        targetUserId: e.user.id,
                                    }),
                                    ...n,
                                });
                        },
                        w,
                    );
                    return;
                case h.lp.USER:
                    let C = d.default.getUser(e.id);
                    if (null != C) {
                        if (i)
                            return (0, u.r)(l, C, t, w, (e, t) => {
                                (0, c.s)(e, o.A.CALL_TILE_POPOUT, {
                                    entrypoint: h.GK.THREE_DOT,
                                    tileType: h.qs.USER,
                                    targetUserId: C.id,
                                })(t);
                            });
                        switch (t.type) {
                            case I.rbe.DM:
                                return (0, a.L3)(
                                    l,
                                    async () => {
                                        let { default: e } = await Promise.all([
                                            n.e("97262"),
                                            n.e("42128"),
                                            n.e("39778"),
                                            n.e("54266"),
                                        ]).then(n.bind(n, 385913));
                                        return (n) =>
                                            (0, r.jsx)(e, {
                                                ...n,
                                                showChannelCallItems: !0,
                                                showMediaItems: !0,
                                                user: C,
                                                channel: t,
                                                showModalItems: !0,
                                                onInteraction: (0, c.s)("DMUserContextMenu", o.A.CALL_TILE_POPOUT, {
                                                    entrypoint: T,
                                                    tileType: h.qs.USER,
                                                    targetUserId: C.id,
                                                }),
                                            });
                                    },
                                    w,
                                );
                            case I.rbe.GROUP_DM:
                                return (0, a.L3)(
                                    l,
                                    async () => {
                                        let { default: e } = await Promise.all([
                                            n.e("97262"),
                                            n.e("42128"),
                                            n.e("69293"),
                                        ]).then(n.bind(n, 228006));
                                        return (n) =>
                                            (0, r.jsx)(e, {
                                                ...n,
                                                showChannelCallItems: !0,
                                                showMediaItems: !0,
                                                showChatItems: !1,
                                                user: C,
                                                channel: t,
                                                showModalItems: !0,
                                                onInteraction: (0, c.s)(
                                                    "GroupDMUserContextMenu",
                                                    o.A.CALL_TILE_POPOUT,
                                                    { entrypoint: T, tileType: h.qs.USER, targetUserId: C.id },
                                                ),
                                            });
                                    },
                                    w,
                                );
                            case I.rbe.GUILD_VOICE:
                            case I.rbe.PUBLIC_THREAD:
                            case I.rbe.PRIVATE_THREAD:
                                let e = t.getGuildId();
                                return (
                                    s()(null != e, "GuildID null for guild voice channel"),
                                    (0, a.L3)(
                                        l,
                                        async () => {
                                            let { default: l } = await Promise.all([
                                                n.e("97262"),
                                                n.e("42128"),
                                                n.e("84841"),
                                                n.e("31885"),
                                            ]).then(n.bind(n, 107632));
                                            return (n) =>
                                                (0, r.jsx)(l, {
                                                    ...n,
                                                    showMediaItems: !0,
                                                    showChannelCallItems: !0,
                                                    showChatItems: !1,
                                                    user: C,
                                                    channel: t,
                                                    guildId: e,
                                                    showModalItems: !0,
                                                    onInteraction: (0, c.s)(
                                                        "GuildChannelUserContextMenu",
                                                        o.A.CALL_TILE_POPOUT,
                                                        { entrypoint: T, tileType: h.qs.USER, targetUserId: C.id },
                                                    ),
                                                });
                                        },
                                        w,
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
