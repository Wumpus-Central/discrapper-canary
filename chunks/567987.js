n.d(t, { E: () => I });
var r = n(627968),
    i = n(64700),
    l = n(284009),
    s = n.n(l),
    a = n(442433),
    o = n(793574),
    u = n(326567),
    d = n(287809),
    c = n(480890),
    h = n(806931),
    A = n(652215);
function I(e) {
    let { channel: t } = e;
    return i.useCallback(
        (e, i, l, I) => {
            if (null == t) return;
            let p = { context: A.BRT.CALL_TILE_POPOUT };
            switch (e.type) {
                case h.lp.HIDDEN_STREAM:
                case h.lp.STREAM:
                    (0, a.L3)(
                        i,
                        async () => {
                            let { default: t } = await n.e("66692").then(n.bind(n, 796175));
                            return (n) =>
                                (0, r.jsx)(t, {
                                    stream: e.stream,
                                    appContext: A.BRT.CALL_TILE_POPOUT,
                                    minimal: l,
                                    exitFullscreen: () => {},
                                    onInteraction: (0, c.s)("StreamContextMenu", o.A.CALL_TILE_POPOUT, {
                                        entrypoint: I,
                                        tileType: h.qs.STREAM,
                                        targetUserId: e.user.id,
                                    }),
                                    ...n,
                                });
                        },
                        p,
                    );
                    return;
                case h.lp.USER:
                    let w = d.default.getUser(e.id);
                    if (null != w) {
                        if (l)
                            return (0, u.r)(i, w, t, p, (e, t) => {
                                (0, c.s)(e, o.A.CALL_TILE_POPOUT, {
                                    entrypoint: h.GK.THREE_DOT,
                                    tileType: h.qs.USER,
                                    targetUserId: w.id,
                                })(t);
                            });
                        switch (t.type) {
                            case A.rbe.DM:
                                return (0, a.L3)(
                                    i,
                                    async () => {
                                        let { default: e } = await Promise.all([
                                            n.e("97262"),
                                            n.e("42128"),
                                            n.e("39778"),
                                            n.e("60770"),
                                        ]).then(n.bind(n, 385913));
                                        return (n) =>
                                            (0, r.jsx)(e, {
                                                ...n,
                                                showChannelCallItems: !0,
                                                showMediaItems: !0,
                                                user: w,
                                                channel: t,
                                                showModalItems: !0,
                                                onInteraction: (0, c.s)("DMUserContextMenu", o.A.CALL_TILE_POPOUT, {
                                                    entrypoint: I,
                                                    tileType: h.qs.USER,
                                                    targetUserId: w.id,
                                                }),
                                            });
                                    },
                                    p,
                                );
                            case A.rbe.GROUP_DM:
                                return (0, a.L3)(
                                    i,
                                    async () => {
                                        let { default: e } = await Promise.all([
                                            n.e("97262"),
                                            n.e("42128"),
                                            n.e("62891"),
                                            n.e("77473"),
                                        ]).then(n.bind(n, 228006));
                                        return (n) =>
                                            (0, r.jsx)(e, {
                                                ...n,
                                                showChannelCallItems: !0,
                                                showMediaItems: !0,
                                                showChatItems: !1,
                                                user: w,
                                                channel: t,
                                                showModalItems: !0,
                                                onInteraction: (0, c.s)(
                                                    "GroupDMUserContextMenu",
                                                    o.A.CALL_TILE_POPOUT,
                                                    { entrypoint: I, tileType: h.qs.USER, targetUserId: w.id },
                                                ),
                                            });
                                    },
                                    p,
                                );
                            case A.rbe.GUILD_VOICE:
                            case A.rbe.PUBLIC_THREAD:
                            case A.rbe.PRIVATE_THREAD:
                                let e = t.getGuildId();
                                return (
                                    s()(null != e, "GuildID null for guild voice channel"),
                                    (0, a.L3)(
                                        i,
                                        async () => {
                                            let { default: i } = await Promise.all([
                                                n.e("97262"),
                                                n.e("42128"),
                                                n.e("84841"),
                                                n.e("38389"),
                                            ]).then(n.bind(n, 107632));
                                            return (n) =>
                                                (0, r.jsx)(i, {
                                                    ...n,
                                                    showMediaItems: !0,
                                                    showChannelCallItems: !0,
                                                    showChatItems: !1,
                                                    user: w,
                                                    channel: t,
                                                    guildId: e,
                                                    showModalItems: !0,
                                                    onInteraction: (0, c.s)(
                                                        "GuildChannelUserContextMenu",
                                                        o.A.CALL_TILE_POPOUT,
                                                        { entrypoint: I, tileType: h.qs.USER, targetUserId: w.id },
                                                    ),
                                                });
                                        },
                                        p,
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
