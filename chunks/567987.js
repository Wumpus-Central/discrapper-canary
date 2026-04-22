n.d(t, { E: () => I });
var r = n(627968),
    i = n(64700),
    l = n(284009),
    a = n.n(l),
    s = n(442433),
    o = n(793574),
    u = n(326567),
    d = n(287809),
    c = n(480890),
    A = n(806931),
    h = n(652215);
function I(e) {
    let { channel: t } = e;
    return i.useCallback(
        (e, i, l, I) => {
            if (null == t) return;
            let w = { context: h.BRT.CALL_TILE_POPOUT };
            switch (e.type) {
                case A.lp.HIDDEN_STREAM:
                case A.lp.STREAM:
                    (0, s.L3)(
                        i,
                        async () => {
                            let { default: t } = await Promise.all([n.e("66692"), n.e("31988")]).then(
                                n.bind(n, 796175),
                            );
                            return (n) =>
                                (0, r.jsx)(t, {
                                    stream: e.stream,
                                    appContext: h.BRT.CALL_TILE_POPOUT,
                                    minimal: l,
                                    exitFullscreen: () => {},
                                    onInteraction: (0, c.s)("StreamContextMenu", o.A.CALL_TILE_POPOUT, {
                                        entrypoint: I,
                                        tileType: A.qs.STREAM,
                                        targetUserId: e.user.id,
                                    }),
                                    ...n,
                                });
                        },
                        w,
                    );
                    return;
                case A.lp.USER:
                    let C = d.default.getUser(e.id);
                    if (null != C) {
                        if (l)
                            return (0, u.r)(i, C, t, w, (e, t) => {
                                (0, c.s)(e, o.A.CALL_TILE_POPOUT, {
                                    entrypoint: A.GK.THREE_DOT,
                                    tileType: A.qs.USER,
                                    targetUserId: C.id,
                                })(t);
                            });
                        switch (t.type) {
                            case h.rbe.DM:
                                return (0, s.L3)(
                                    i,
                                    async () => {
                                        let { default: e } = await Promise.all([
                                            n.e("97262"),
                                            n.e("42128"),
                                            n.e("39778"),
                                            n.e("44607"),
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
                                                    entrypoint: I,
                                                    tileType: A.qs.USER,
                                                    targetUserId: C.id,
                                                }),
                                            });
                                    },
                                    w,
                                );
                            case h.rbe.GROUP_DM:
                                return (0, s.L3)(
                                    i,
                                    async () => {
                                        let { default: e } = await Promise.all([
                                            n.e("97262"),
                                            n.e("42128"),
                                            n.e("62891"),
                                            n.e("2425"),
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
                                                    { entrypoint: I, tileType: A.qs.USER, targetUserId: C.id },
                                                ),
                                            });
                                    },
                                    w,
                                );
                            case h.rbe.GUILD_VOICE:
                            case h.rbe.PUBLIC_THREAD:
                            case h.rbe.PRIVATE_THREAD:
                                let e = t.getGuildId();
                                return (
                                    a()(null != e, "GuildID null for guild voice channel"),
                                    (0, s.L3)(
                                        i,
                                        async () => {
                                            let { default: i } = await Promise.all([
                                                n.e("97262"),
                                                n.e("42128"),
                                                n.e("84841"),
                                                n.e("52463"),
                                            ]).then(n.bind(n, 107632));
                                            return (n) =>
                                                (0, r.jsx)(i, {
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
                                                        { entrypoint: I, tileType: A.qs.USER, targetUserId: C.id },
                                                    ),
                                                });
                                        },
                                        w,
                                    )
                                );
                        }
                    }
                    return;
                case A.lp.ACTIVITY:
                    return;
            }
        },
        [t],
    );
}
