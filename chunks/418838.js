n.r(t), n.d(t, { default: () => S });
var l = n(627968),
    i = n(64700),
    a = n(702841),
    r = n(367513),
    s = n(401843),
    u = n(28647),
    o = n(386467),
    d = n(979186),
    c = n(574172),
    A = n(981355),
    h = n(175203),
    p = n(461782),
    I = n(616356),
    m = n(734057),
    f = n(309010),
    g = n(313961),
    C = n(164617),
    E = n(284009),
    T = n.n(E),
    y = n(442433),
    _ = n(793574),
    w = n(326567),
    x = n(287809),
    L = n(480890),
    v = n(806931),
    U = n(652215),
    P = n(985018),
    b = n(38577);
let M = [u.z];
function S(e) {
    let { windowKey: t, channelId: u, participantId: E } = e,
        S = (0, a.bG)([m.A], () => m.A.getChannel(u)),
        j = (0, a.bG)([g.A], () => g.A.getParticipant(u, E), [u, E]),
        O = null != S && null != j,
        G = (0, a.bG)([f.A], () => f.A.getVoiceChannelId() === u);
    i.useEffect(() => {
        (O && G) || c.close(t);
    }, [O, G, t]);
    let N = i.useCallback(
            (e) => {
                let { unmountWindow: t } = e;
                r.A.returnParticipant(u, E), t();
            },
            [u, E],
        ),
        R = (function (e) {
            let { channel: t } = e;
            return i.useCallback(
                (e, i, a, r) => {
                    if (null == t) return;
                    let s = { context: U.BRT.CALL_TILE_POPOUT };
                    switch (e.type) {
                        case v.lp.HIDDEN_STREAM:
                        case v.lp.STREAM:
                            (0, y.L3)(
                                i,
                                async () => {
                                    let { default: t } = await Promise.all([n.e("66692"), n.e("76440")]).then(
                                        n.bind(n, 796175),
                                    );
                                    return (n) =>
                                        (0, l.jsx)(t, {
                                            stream: e.stream,
                                            appContext: U.BRT.CALL_TILE_POPOUT,
                                            minimal: a,
                                            exitFullscreen: () => {},
                                            onInteraction: (0, L.s)("StreamContextMenu", _.A.CALL_TILE_POPOUT, {
                                                entrypoint: r,
                                                tileType: v.qs.STREAM,
                                                targetUserId: e.user.id,
                                            }),
                                            ...n,
                                        });
                                },
                                s,
                            );
                            return;
                        case v.lp.USER:
                            let u = x.default.getUser(e.id);
                            if (null != u) {
                                if (a)
                                    return (0, w.r)(i, u, t, s, (e, t) => {
                                        (0, L.s)(e, _.A.CALL_TILE_POPOUT, {
                                            entrypoint: v.GK.THREE_DOT,
                                            tileType: v.qs.USER,
                                            targetUserId: u.id,
                                        })(t);
                                    });
                                switch (t.type) {
                                    case U.rbe.DM:
                                        return (0, y.L3)(
                                            i,
                                            async () => {
                                                let { default: e } = await Promise.all([
                                                    n.e("97262"),
                                                    n.e("84442"),
                                                    n.e("39778"),
                                                    n.e("36857"),
                                                ]).then(n.bind(n, 385913));
                                                return (n) =>
                                                    (0, l.jsx)(e, {
                                                        ...n,
                                                        showChannelCallItems: !0,
                                                        showMediaItems: !0,
                                                        user: u,
                                                        channel: t,
                                                        showModalItems: !0,
                                                        onInteraction: (0, L.s)(
                                                            "DMUserContextMenu",
                                                            _.A.CALL_TILE_POPOUT,
                                                            { entrypoint: r, tileType: v.qs.USER, targetUserId: u.id },
                                                        ),
                                                    });
                                            },
                                            s,
                                        );
                                    case U.rbe.GROUP_DM:
                                        return (0, y.L3)(
                                            i,
                                            async () => {
                                                let { default: e } = await Promise.all([
                                                    n.e("97262"),
                                                    n.e("84442"),
                                                    n.e("28864"),
                                                    n.e("40744"),
                                                ]).then(n.bind(n, 778595));
                                                return (n) =>
                                                    (0, l.jsx)(e, {
                                                        ...n,
                                                        showChannelCallItems: !0,
                                                        showMediaItems: !0,
                                                        showChatItems: !1,
                                                        user: u,
                                                        channel: t,
                                                        showModalItems: !0,
                                                        onInteraction: (0, L.s)(
                                                            "GroupDMUserContextMenu",
                                                            _.A.CALL_TILE_POPOUT,
                                                            { entrypoint: r, tileType: v.qs.USER, targetUserId: u.id },
                                                        ),
                                                    });
                                            },
                                            s,
                                        );
                                    case U.rbe.GUILD_VOICE:
                                    case U.rbe.PUBLIC_THREAD:
                                    case U.rbe.PRIVATE_THREAD:
                                        let e = t.getGuildId();
                                        return (
                                            T()(null != e, "GuildID null for guild voice channel"),
                                            (0, y.L3)(
                                                i,
                                                async () => {
                                                    let { default: i } = await Promise.all([
                                                        n.e("97262"),
                                                        n.e("84442"),
                                                        n.e("84841"),
                                                        n.e("13253"),
                                                    ]).then(n.bind(n, 107632));
                                                    return (n) =>
                                                        (0, l.jsx)(i, {
                                                            ...n,
                                                            showMediaItems: !0,
                                                            showChannelCallItems: !0,
                                                            showChatItems: !1,
                                                            user: u,
                                                            channel: t,
                                                            guildId: e,
                                                            showModalItems: !0,
                                                            onInteraction: (0, L.s)(
                                                                "GuildChannelUserContextMenu",
                                                                _.A.CALL_TILE_POPOUT,
                                                                {
                                                                    entrypoint: r,
                                                                    tileType: v.qs.USER,
                                                                    targetUserId: u.id,
                                                                },
                                                            ),
                                                        });
                                                },
                                                s,
                                            )
                                        );
                                }
                            }
                            return;
                        case v.lp.ACTIVITY:
                            return;
                    }
                },
                [t],
            );
        })({ channel: S }),
        D = (0, a.bG)([I.A], () => !!(0, v.Ay)(j) && null == I.A.getActiveStreamForApplicationStream(j.stream)),
        F = i.useCallback(() => {
            (0, v.Ay)(j) && (0, s.A9)(j.stream, { forceMultiple: !0 });
        }, [j]),
        B = i.useMemo(
            () =>
                null == j
                    ? P.intl.string(P.t.lfzt24)
                    : j.type === v.lp.USER
                      ? j.user.username
                      : j.type === v.lp.STREAM
                        ? P.intl.formatToPlainString(P.t["/DC1y9"], { username: j.user.username })
                        : P.intl.string(P.t["8vlBo7"]),
            [j],
        ),
        k = (0, A.A)();
    return (0, l.jsx)(d.A, {
        withTitleBar: !0,
        keybinds: M,
        windowKey: t,
        title: B,
        channelId: u,
        onBeforeUnload: N,
        appContext: U.BRT.CALL_TILE_POPOUT,
        hideModals: !0,
        children: O
            ? (0, l.jsx)(o.A.Provider, {
                  value: S.guild_id,
                  children: (0, l.jsx)(p.Ay, {
                      timeout: 2e3,
                      children: (e) =>
                          (0, l.jsx)("div", {
                              className: b.V,
                              onMouseMove: e.onActive,
                              onMouseDown: e.onActive,
                              onMouseLeave: e.onForceIdle,
                              children: (0, l.jsx)(h.Ay, {
                                  className: b.V,
                                  participant: j,
                                  channel: S,
                                  width: k.width,
                                  inCall: !0,
                                  popoutType: C.N.CALL_TILE,
                                  focused: !0,
                                  noBorder: !0,
                                  onContextMenu: R,
                                  onClick: D ? F : void 0,
                              }),
                          }),
                  }),
              })
            : null,
    });
}
