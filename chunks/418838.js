n.r(t), n.d(t, { default: () => g });
var l = n(477900),
    s = n(582128),
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
    L = n(198052),
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
    x = n(741737);
let R = [o.z];
function g(e) {
    let { windowKey: t, channelId: o, participantId: E } = e,
        g = (0, a.bG)([p.A], () => p.A.getChannel(o)),
        S = (0, a.bG)([L.A], () => L.A.getParticipant(o, E), [o, E]),
        D = null != g && null != S,
        v = (0, a.bG)([C.Ay], () => C.Ay.getVoiceChannelId() === o);
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
                                        n.e("189673"),
                                        n.e("245996"),
                                        n.e("700792"),
                                        n.e("529422"),
                                        n.e("309291"),
                                        n.e("70011"),
                                        n.e("58315"),
                                        n.e("766692"),
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
                                                    n.e("158696"),
                                                    n.e("943630"),
                                                    n.e("676279"),
                                                    n.e("545309"),
                                                    n.e("397705"),
                                                    n.e("926132"),
                                                    n.e("146652"),
                                                    n.e("893190"),
                                                    n.e("834552"),
                                                    n.e("391763"),
                                                    n.e("708757"),
                                                    n.e("585968"),
                                                    n.e("189673"),
                                                    n.e("571210"),
                                                    n.e("468403"),
                                                    n.e("238730"),
                                                    n.e("229787"),
                                                    n.e("88342"),
                                                    n.e("882073"),
                                                    n.e("797558"),
                                                    n.e("691994"),
                                                    n.e("311802"),
                                                    n.e("698965"),
                                                    n.e("576665"),
                                                    n.e("235313"),
                                                    n.e("776273"),
                                                    n.e("947502"),
                                                    n.e("436564"),
                                                    n.e("245996"),
                                                    n.e("700792"),
                                                    n.e("592822"),
                                                    n.e("965789"),
                                                    n.e("823427"),
                                                    n.e("529422"),
                                                    n.e("838056"),
                                                    n.e("309291"),
                                                    n.e("307059"),
                                                    n.e("508829"),
                                                    n.e("187048"),
                                                    n.e("516054"),
                                                    n.e("298199"),
                                                    n.e("17244"),
                                                    n.e("864464"),
                                                    n.e("439778"),
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
                                                    n.e("158696"),
                                                    n.e("943630"),
                                                    n.e("676279"),
                                                    n.e("545309"),
                                                    n.e("397705"),
                                                    n.e("926132"),
                                                    n.e("146652"),
                                                    n.e("893190"),
                                                    n.e("834552"),
                                                    n.e("708757"),
                                                    n.e("585968"),
                                                    n.e("189673"),
                                                    n.e("571210"),
                                                    n.e("468403"),
                                                    n.e("229787"),
                                                    n.e("166495"),
                                                    n.e("88342"),
                                                    n.e("882073"),
                                                    n.e("797558"),
                                                    n.e("691994"),
                                                    n.e("311802"),
                                                    n.e("698965"),
                                                    n.e("576665"),
                                                    n.e("235313"),
                                                    n.e("776273"),
                                                    n.e("624198"),
                                                    n.e("436564"),
                                                    n.e("245996"),
                                                    n.e("700792"),
                                                    n.e("592822"),
                                                    n.e("823427"),
                                                    n.e("529422"),
                                                    n.e("309291"),
                                                    n.e("307059"),
                                                    n.e("528864"),
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
                                                        n.e("943630"),
                                                        n.e("676279"),
                                                        n.e("545309"),
                                                        n.e("397705"),
                                                        n.e("926132"),
                                                        n.e("146652"),
                                                        n.e("893190"),
                                                        n.e("834552"),
                                                        n.e("708757"),
                                                        n.e("21921"),
                                                        n.e("585968"),
                                                        n.e("189673"),
                                                        n.e("571210"),
                                                        n.e("468403"),
                                                        n.e("676418"),
                                                        n.e("229787"),
                                                        n.e("166495"),
                                                        n.e("88342"),
                                                        n.e("882073"),
                                                        n.e("797558"),
                                                        n.e("691994"),
                                                        n.e("311802"),
                                                        n.e("698965"),
                                                        n.e("435027"),
                                                        n.e("576665"),
                                                        n.e("235313"),
                                                        n.e("624198"),
                                                        n.e("939171"),
                                                        n.e("436564"),
                                                        n.e("245996"),
                                                        n.e("700792"),
                                                        n.e("592822"),
                                                        n.e("823427"),
                                                        n.e("449145"),
                                                        n.e("529422"),
                                                        n.e("309291"),
                                                        n.e("307059"),
                                                        n.e("343116"),
                                                        n.e("139103"),
                                                        n.e("470314"),
                                                        n.e("70515"),
                                                        n.e("404524"),
                                                        n.e("654148"),
                                                        n.e("666939"),
                                                        n.e("717334"),
                                                        n.e("184841"),
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
