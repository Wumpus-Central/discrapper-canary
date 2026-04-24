"use strict";
n.r(t), n.d(t, { default: () => P });
var i = n(627968),
    l = n(64700),
    r = n(702841),
    a = n(367513),
    s = n(401843),
    o = n(28647),
    u = n(386467),
    c = n(979186),
    d = n(574172),
    f = n(981355),
    h = n(175203),
    C = n(461782),
    p = n(616356),
    _ = n(734057),
    A = n(309010),
    g = n(313961),
    m = n(164617),
    L = n(284009),
    v = n.n(L),
    I = n(442433),
    x = n(793574),
    w = n(326567),
    y = n(287809),
    E = n(480890),
    b = n(806931),
    T = n(652215),
    R = n(985018),
    M = n(38577);
let O = [o.z];
function P(e) {
    let { windowKey: t, channelId: o, participantId: L } = e,
        P = (0, r.bG)([_.A], () => _.A.getChannel(o)),
        U = (0, r.bG)([g.A], () => g.A.getParticipant(o, L), [o, L]),
        S = null != P && null != U,
        N = (0, r.bG)([A.A], () => A.A.getVoiceChannelId() === o);
    l.useEffect(() => {
        (S && N) || d.close(t);
    }, [S, N, t]);
    let j = l.useCallback(
            (e) => {
                let { unmountWindow: t } = e;
                a.A.returnParticipant(o, L), t();
            },
            [o, L],
        ),
        k = (function (e) {
            let { channel: t } = e;
            return l.useCallback(
                (e, l, r, a) => {
                    if (null == t) return;
                    let s = { context: T.BRT.CALL_TILE_POPOUT };
                    switch (e.type) {
                        case b.lp.HIDDEN_STREAM:
                        case b.lp.STREAM:
                            (0, I.L3)(
                                l,
                                async () => {
                                    let { default: t } = await Promise.all([n.e("66692"), n.e("24670")]).then(
                                        n.bind(n, 796175),
                                    );
                                    return (n) =>
                                        (0, i.jsx)(t, {
                                            stream: e.stream,
                                            appContext: T.BRT.CALL_TILE_POPOUT,
                                            minimal: r,
                                            exitFullscreen: () => {},
                                            onInteraction: (0, E.s)("StreamContextMenu", x.A.CALL_TILE_POPOUT, {
                                                entrypoint: a,
                                                tileType: b.qs.STREAM,
                                                targetUserId: e.user.id,
                                            }),
                                            ...n,
                                        });
                                },
                                s,
                            );
                            return;
                        case b.lp.USER:
                            let o = y.default.getUser(e.id);
                            if (null != o) {
                                if (r)
                                    return (0, w.r)(l, o, t, s, (e, t) => {
                                        (0, E.s)(e, x.A.CALL_TILE_POPOUT, {
                                            entrypoint: b.GK.THREE_DOT,
                                            tileType: b.qs.USER,
                                            targetUserId: o.id,
                                        })(t);
                                    });
                                switch (t.type) {
                                    case T.rbe.DM:
                                        return (0, I.L3)(
                                            l,
                                            async () => {
                                                let { default: e } = await Promise.all([
                                                    n.e("97262"),
                                                    n.e("88342"),
                                                    n.e("35313"),
                                                    n.e("84442"),
                                                    n.e("39778"),
                                                    n.e("90738"),
                                                ]).then(n.bind(n, 385913));
                                                return (n) =>
                                                    (0, i.jsx)(e, {
                                                        ...n,
                                                        showChannelCallItems: !0,
                                                        showMediaItems: !0,
                                                        user: o,
                                                        channel: t,
                                                        showModalItems: !0,
                                                        onInteraction: (0, E.s)(
                                                            "DMUserContextMenu",
                                                            x.A.CALL_TILE_POPOUT,
                                                            { entrypoint: a, tileType: b.qs.USER, targetUserId: o.id },
                                                        ),
                                                    });
                                            },
                                            s,
                                        );
                                    case T.rbe.GROUP_DM:
                                        return (0, I.L3)(
                                            l,
                                            async () => {
                                                let { default: e } = await Promise.all([
                                                    n.e("97262"),
                                                    n.e("88342"),
                                                    n.e("35313"),
                                                    n.e("84442"),
                                                    n.e("28864"),
                                                    n.e("71258"),
                                                ]).then(n.bind(n, 778595));
                                                return (n) =>
                                                    (0, i.jsx)(e, {
                                                        ...n,
                                                        showChannelCallItems: !0,
                                                        showMediaItems: !0,
                                                        showChatItems: !1,
                                                        user: o,
                                                        channel: t,
                                                        showModalItems: !0,
                                                        onInteraction: (0, E.s)(
                                                            "GroupDMUserContextMenu",
                                                            x.A.CALL_TILE_POPOUT,
                                                            { entrypoint: a, tileType: b.qs.USER, targetUserId: o.id },
                                                        ),
                                                    });
                                            },
                                            s,
                                        );
                                    case T.rbe.GUILD_VOICE:
                                    case T.rbe.PUBLIC_THREAD:
                                    case T.rbe.PRIVATE_THREAD:
                                        let e = t.getGuildId();
                                        return (
                                            v()(null != e, "GuildID null for guild voice channel"),
                                            (0, I.L3)(
                                                l,
                                                async () => {
                                                    let { default: l } = await Promise.all([
                                                        n.e("97262"),
                                                        n.e("88342"),
                                                        n.e("35313"),
                                                        n.e("84442"),
                                                        n.e("78178"),
                                                        n.e("92456"),
                                                        n.e("82692"),
                                                    ]).then(n.bind(n, 107632));
                                                    return (n) =>
                                                        (0, i.jsx)(l, {
                                                            ...n,
                                                            showMediaItems: !0,
                                                            showChannelCallItems: !0,
                                                            showChatItems: !1,
                                                            user: o,
                                                            channel: t,
                                                            guildId: e,
                                                            showModalItems: !0,
                                                            onInteraction: (0, E.s)(
                                                                "GuildChannelUserContextMenu",
                                                                x.A.CALL_TILE_POPOUT,
                                                                {
                                                                    entrypoint: a,
                                                                    tileType: b.qs.USER,
                                                                    targetUserId: o.id,
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
                        case b.lp.ACTIVITY:
                            return;
                    }
                },
                [t],
            );
        })({ channel: P }),
        H = (0, r.bG)([p.A], () => !!(0, b.Ay)(U) && null == p.A.getActiveStreamForApplicationStream(U.stream)),
        D = l.useCallback(() => {
            (0, b.Ay)(U) && (0, s.A9)(U.stream, { forceMultiple: !0 });
        }, [U]),
        F = l.useMemo(
            () =>
                null == U
                    ? R.intl.string(R.t.lfzt24)
                    : U.type === b.lp.USER
                      ? U.user.username
                      : U.type === b.lp.STREAM
                        ? R.intl.formatToPlainString(R.t["/DC1y9"], { username: U.user.username })
                        : R.intl.string(R.t["8vlBo7"]),
            [U],
        ),
        V = (0, f.A)();
    return (0, i.jsx)(c.A, {
        withTitleBar: !0,
        keybinds: O,
        windowKey: t,
        title: F,
        channelId: o,
        onBeforeUnload: j,
        appContext: T.BRT.CALL_TILE_POPOUT,
        hideModals: !0,
        children: S
            ? (0, i.jsx)(u.A.Provider, {
                  value: P.guild_id,
                  children: (0, i.jsx)(C.Ay, {
                      timeout: 2e3,
                      children: (e) =>
                          (0, i.jsx)("div", {
                              className: M.V,
                              onMouseMove: e.onActive,
                              onMouseDown: e.onActive,
                              onMouseLeave: e.onForceIdle,
                              children: (0, i.jsx)(h.Ay, {
                                  className: M.V,
                                  participant: U,
                                  channel: P,
                                  width: V.width,
                                  inCall: !0,
                                  popoutType: m.N.CALL_TILE,
                                  focused: !0,
                                  noBorder: !0,
                                  onContextMenu: k,
                                  onClick: H ? D : void 0,
                              }),
                          }),
                  }),
              })
            : null,
    });
}
