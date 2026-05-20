n.r(t), n.d(t, { default: () => g });
var l = n(627968),
    s = n(64700),
    a = n(702841),
    r = n(367513),
    i = n(401843),
    o = n(28647),
    u = n(386467),
    d = n(979186),
    c = n(574172),
    h = n(981355),
    A = n(175203),
    I = n(461782),
    T = n(616356),
    p = n(734057),
    C = n(309010),
    L = n(313961),
    m = n(164617),
    E = n(284009),
    P = n.n(E),
    U = n(442433),
    M = n(793574),
    _ = n(326567),
    w = n(287809),
    y = n(480890),
    b = n(806931),
    f = n(652215),
    O = n(375708),
    x = n(38577);
let R = [o.z];
function g(e) {
    let { windowKey: t, channelId: o, participantId: E } = e,
        g = (0, a.bG)([p.A], () => p.A.getChannel(o)),
        S = (0, a.bG)([L.A], () => L.A.getParticipant(o, E), [o, E]),
        D = null != g && null != S,
        v = (0, a.bG)([C.A], () => C.A.getVoiceChannelId() === o);
    s.useEffect(() => {
        (D && v) || c.close(t);
    }, [D, v, t]);
    let G = s.useCallback(
            (e) => {
                let { unmountWindow: t } = e;
                r.A.returnParticipant(o, E), t();
            },
            [o, E],
        ),
        j = (function (e) {
            let { channel: t } = e;
            return s.useCallback(
                (e, s, a, r) => {
                    if (null == t) return;
                    let i = { context: f.BRT.CALL_TILE_POPOUT };
                    switch (e.type) {
                        case b.lp.HIDDEN_STREAM:
                        case b.lp.STREAM:
                            (0, U.L3)(
                                s,
                                async () => {
                                    let { default: t } = await Promise.all([
                                        n.e("89673"),
                                        n.e("45996"),
                                        n.e("792"),
                                        n.e("29422"),
                                        n.e("9291"),
                                        n.e("70011"),
                                        n.e("58315"),
                                        n.e("66692"),
                                    ]).then(n.bind(n, 796175));
                                    return (n) =>
                                        (0, l.jsx)(t, {
                                            stream: e.stream,
                                            appContext: f.BRT.CALL_TILE_POPOUT,
                                            minimal: a,
                                            exitFullscreen: () => {},
                                            onInteraction: (0, y.s)("StreamContextMenu", M.A.CALL_TILE_POPOUT, {
                                                entrypoint: r,
                                                tileType: b.qs.STREAM,
                                                targetUserId: e.user.id,
                                            }),
                                            ...n,
                                        });
                                },
                                i,
                            );
                            return;
                        case b.lp.USER:
                            let o = w.default.getUser(e.id);
                            if (null != o) {
                                if (a)
                                    return (0, _.r)(s, o, t, i, (e, t) => {
                                        (0, y.s)(e, M.A.CALL_TILE_POPOUT, {
                                            entrypoint: b.GK.THREE_DOT,
                                            tileType: b.qs.USER,
                                            targetUserId: o.id,
                                        })(t);
                                    });
                                switch (t.type) {
                                    case f.rbe.DM:
                                        return (0, U.L3)(
                                            s,
                                            async () => {
                                                let { default: e } = await Promise.all([
                                                    n.e("20706"),
                                                    n.e("8516"),
                                                    n.e("23531"),
                                                    n.e("94881"),
                                                    n.e("26132"),
                                                    n.e("46652"),
                                                    n.e("93190"),
                                                    n.e("34552"),
                                                    n.e("8757"),
                                                    n.e("91763"),
                                                    n.e("89673"),
                                                    n.e("85968"),
                                                    n.e("60195"),
                                                    n.e("68403"),
                                                    n.e("29787"),
                                                    n.e("71210"),
                                                    n.e("97558"),
                                                    n.e("94000"),
                                                    n.e("88342"),
                                                    n.e("91994"),
                                                    n.e("38730"),
                                                    n.e("42451"),
                                                    n.e("76665"),
                                                    n.e("98965"),
                                                    n.e("35313"),
                                                    n.e("76273"),
                                                    n.e("36564"),
                                                    n.e("34971"),
                                                    n.e("45996"),
                                                    n.e("792"),
                                                    n.e("92822"),
                                                    n.e("23427"),
                                                    n.e("29422"),
                                                    n.e("9291"),
                                                    n.e("38056"),
                                                    n.e("7059"),
                                                    n.e("8829"),
                                                    n.e("42339"),
                                                    n.e("16054"),
                                                    n.e("98199"),
                                                    n.e("41175"),
                                                    n.e("39778"),
                                                ]).then(n.bind(n, 385913));
                                                return (n) =>
                                                    (0, l.jsx)(e, {
                                                        ...n,
                                                        showChannelCallItems: !0,
                                                        showMediaItems: !0,
                                                        user: o,
                                                        channel: t,
                                                        showModalItems: !0,
                                                        onInteraction: (0, y.s)(
                                                            "DMUserContextMenu",
                                                            M.A.CALL_TILE_POPOUT,
                                                            { entrypoint: r, tileType: b.qs.USER, targetUserId: o.id },
                                                        ),
                                                    });
                                            },
                                            i,
                                        );
                                    case f.rbe.GROUP_DM:
                                        return (0, U.L3)(
                                            s,
                                            async () => {
                                                let { default: e } = await Promise.all([
                                                    n.e("20706"),
                                                    n.e("8516"),
                                                    n.e("23531"),
                                                    n.e("94881"),
                                                    n.e("26132"),
                                                    n.e("46652"),
                                                    n.e("93190"),
                                                    n.e("34552"),
                                                    n.e("8757"),
                                                    n.e("89673"),
                                                    n.e("85968"),
                                                    n.e("60195"),
                                                    n.e("68403"),
                                                    n.e("29787"),
                                                    n.e("71210"),
                                                    n.e("97558"),
                                                    n.e("94000"),
                                                    n.e("66495"),
                                                    n.e("88342"),
                                                    n.e("91994"),
                                                    n.e("42451"),
                                                    n.e("76665"),
                                                    n.e("98965"),
                                                    n.e("35313"),
                                                    n.e("76273"),
                                                    n.e("24198"),
                                                    n.e("36564"),
                                                    n.e("45996"),
                                                    n.e("792"),
                                                    n.e("92822"),
                                                    n.e("23427"),
                                                    n.e("29422"),
                                                    n.e("9291"),
                                                    n.e("7059"),
                                                    n.e("28864"),
                                                ]).then(n.bind(n, 778595));
                                                return (n) =>
                                                    (0, l.jsx)(e, {
                                                        ...n,
                                                        showChannelCallItems: !0,
                                                        showMediaItems: !0,
                                                        showChatItems: !1,
                                                        user: o,
                                                        channel: t,
                                                        showModalItems: !0,
                                                        onInteraction: (0, y.s)(
                                                            "GroupDMUserContextMenu",
                                                            M.A.CALL_TILE_POPOUT,
                                                            { entrypoint: r, tileType: b.qs.USER, targetUserId: o.id },
                                                        ),
                                                    });
                                            },
                                            i,
                                        );
                                    case f.rbe.GUILD_VOICE:
                                    case f.rbe.PUBLIC_THREAD:
                                    case f.rbe.PRIVATE_THREAD:
                                        let e = t.getGuildId();
                                        return (
                                            P()(null != e, "GuildID null for guild voice channel"),
                                            (0, U.L3)(
                                                s,
                                                async () => {
                                                    let { default: s } = await Promise.all([
                                                        n.e("8516"),
                                                        n.e("23531"),
                                                        n.e("94881"),
                                                        n.e("26132"),
                                                        n.e("46652"),
                                                        n.e("93190"),
                                                        n.e("34552"),
                                                        n.e("8757"),
                                                        n.e("89673"),
                                                        n.e("85968"),
                                                        n.e("60195"),
                                                        n.e("68403"),
                                                        n.e("76418"),
                                                        n.e("29787"),
                                                        n.e("71210"),
                                                        n.e("97558"),
                                                        n.e("94000"),
                                                        n.e("66495"),
                                                        n.e("88342"),
                                                        n.e("91994"),
                                                        n.e("82263"),
                                                        n.e("42451"),
                                                        n.e("76665"),
                                                        n.e("98965"),
                                                        n.e("35027"),
                                                        n.e("35313"),
                                                        n.e("24198"),
                                                        n.e("39171"),
                                                        n.e("36564"),
                                                        n.e("45996"),
                                                        n.e("792"),
                                                        n.e("92822"),
                                                        n.e("23427"),
                                                        n.e("49145"),
                                                        n.e("29422"),
                                                        n.e("9291"),
                                                        n.e("7059"),
                                                        n.e("43116"),
                                                        n.e("11617"),
                                                        n.e("70314"),
                                                        n.e("70515"),
                                                        n.e("27435"),
                                                        n.e("66939"),
                                                        n.e("17334"),
                                                        n.e("84841"),
                                                    ]).then(n.bind(n, 107632));
                                                    return (n) =>
                                                        (0, l.jsx)(s, {
                                                            ...n,
                                                            showMediaItems: !0,
                                                            showChannelCallItems: !0,
                                                            showChatItems: !1,
                                                            user: o,
                                                            channel: t,
                                                            guildId: e,
                                                            showModalItems: !0,
                                                            onInteraction: (0, y.s)(
                                                                "GuildChannelUserContextMenu",
                                                                M.A.CALL_TILE_POPOUT,
                                                                {
                                                                    entrypoint: r,
                                                                    tileType: b.qs.USER,
                                                                    targetUserId: o.id,
                                                                },
                                                            ),
                                                        });
                                                },
                                                i,
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
        })({ channel: g }),
        k = (0, a.bG)([T.A], () => !!(0, b.Ay)(S) && null == T.A.getActiveStreamForApplicationStream(S.stream)),
        B = s.useCallback(() => {
            (0, b.Ay)(S) && (0, i.A9)(S.stream, { forceMultiple: !0 });
        }, [S]),
        V = s.useMemo(
            () =>
                null == S
                    ? O.intl.string(O.t.lfzt24)
                    : S.type === b.lp.USER
                      ? S.user.username
                      : S.type === b.lp.STREAM
                        ? O.intl.formatToPlainString(O.t["/DC1y9"], { username: S.user.username })
                        : O.intl.string(O.t["8vlBo7"]),
            [S],
        ),
        q = (0, h.A)();
    return (0, l.jsx)(d.A, {
        withTitleBar: !0,
        keybinds: R,
        windowKey: t,
        title: V,
        channelId: o,
        onBeforeUnload: G,
        appContext: f.BRT.CALL_TILE_POPOUT,
        hideModals: !0,
        children: D
            ? (0, l.jsx)(u.A.Provider, {
                  value: g.guild_id,
                  children: (0, l.jsx)(I.Ay, {
                      timeout: 2e3,
                      children: (e) =>
                          (0, l.jsx)("div", {
                              className: x.V,
                              onMouseMove: e.onActive,
                              onMouseDown: e.onActive,
                              onMouseLeave: e.onForceIdle,
                              children: (0, l.jsx)(A.Ay, {
                                  className: x.V,
                                  participant: S,
                                  channel: g,
                                  width: q.width,
                                  inCall: !0,
                                  popoutType: m.N.CALL_TILE,
                                  focused: !0,
                                  noBorder: !0,
                                  onContextMenu: j,
                                  onClick: k ? B : void 0,
                              }),
                          }),
                  }),
              })
            : null,
    });
}
