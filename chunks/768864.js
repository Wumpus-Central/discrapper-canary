n.d(t, { B: () => O });
var r = n(54381),
    i = n(473749),
    l = n(512722),
    a = n.n(l),
    o = n(239091),
    s = n(100527),
    u = n(880395),
    c = n(594174),
    d = n(795318),
    h = n(354459),
    f = n(981631);
function p(e) {
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
function w(e, t) {
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
    let { channel: t } = e;
    return i.useCallback(
        (e, i, l, O) => {
            if (null == t) return;
            let I = { context: f.IlC.CALL_TILE_POPOUT };
            switch (e.type) {
                case h.fO.HIDDEN_STREAM:
                case h.fO.STREAM:
                    (0, o.jW)(
                        i,
                        async () => {
                            let { default: t } = await n.e("22183").then(n.bind(n, 987281));
                            return (n) =>
                                (0, r.jsx)(
                                    t,
                                    p(
                                        {
                                            stream: e.stream,
                                            appContext: f.IlC.CALL_TILE_POPOUT,
                                            minimal: l,
                                            exitFullscreen: () => {},
                                            onInteraction: (0, d.u)("StreamContextMenu", s.Z.CALL_TILE_POPOUT, {
                                                entrypoint: O,
                                                tileType: h.TH.STREAM,
                                                targetUserId: e.user.id,
                                            }),
                                        },
                                        n,
                                    ),
                                );
                        },
                        I,
                    );
                    return;
                case h.fO.USER:
                    let C = c.default.getUser(e.id);
                    if (null != C) {
                        if (l)
                            return (0, u.D)(i, C, t, I, (e, t) => {
                                (0, d.u)(e, s.Z.CALL_TILE_POPOUT, {
                                    entrypoint: h.A5.THREE_DOT,
                                    tileType: h.TH.USER,
                                    targetUserId: C.id,
                                })(t);
                            });
                        switch (t.type) {
                            case f.d4z.DM:
                                return (0, o.jW)(
                                    i,
                                    async () => {
                                        let { default: e } = await Promise.all([
                                            n.e("79695"),
                                            n.e("66165"),
                                            n.e("56826"),
                                            n.e("93896"),
                                        ]).then(n.bind(n, 131404));
                                        return (n) =>
                                            (0, r.jsx)(
                                                e,
                                                w(p({}, n), {
                                                    showChannelCallItems: !0,
                                                    showMediaItems: !0,
                                                    user: C,
                                                    channel: t,
                                                    showModalItems: !0,
                                                    onInteraction: (0, d.u)("DMUserContextMenu", s.Z.CALL_TILE_POPOUT, {
                                                        entrypoint: O,
                                                        tileType: h.TH.USER,
                                                        targetUserId: C.id,
                                                    }),
                                                }),
                                            );
                                    },
                                    I,
                                );
                            case f.d4z.GROUP_DM:
                                return (0, o.jW)(
                                    i,
                                    async () => {
                                        let { default: e } = await Promise.all([
                                            n.e("79695"),
                                            n.e("66165"),
                                            n.e("82456"),
                                        ]).then(n.bind(n, 354589));
                                        return (n) =>
                                            (0, r.jsx)(
                                                e,
                                                w(p({}, n), {
                                                    showChannelCallItems: !0,
                                                    showMediaItems: !0,
                                                    showChatItems: !1,
                                                    user: C,
                                                    channel: t,
                                                    showModalItems: !0,
                                                    onInteraction: (0, d.u)(
                                                        "GroupDMUserContextMenu",
                                                        s.Z.CALL_TILE_POPOUT,
                                                        {
                                                            entrypoint: O,
                                                            tileType: h.TH.USER,
                                                            targetUserId: C.id,
                                                        },
                                                    ),
                                                }),
                                            );
                                    },
                                    I,
                                );
                            case f.d4z.GUILD_VOICE:
                            case f.d4z.PUBLIC_THREAD:
                            case f.d4z.PRIVATE_THREAD:
                                let e = t.getGuildId();
                                return (
                                    a()(null != e, "GuildID null for guild voice channel"),
                                    (0, o.jW)(
                                        i,
                                        async () => {
                                            let { default: i } = await Promise.all([
                                                n.e("79695"),
                                                n.e("66165"),
                                                n.e("8982"),
                                                n.e("7717"),
                                                n.e("9393"),
                                            ]).then(n.bind(n, 757387));
                                            return (n) =>
                                                (0, r.jsx)(
                                                    i,
                                                    w(p({}, n), {
                                                        showMediaItems: !0,
                                                        showChannelCallItems: !0,
                                                        showChatItems: !1,
                                                        user: C,
                                                        channel: t,
                                                        guildId: e,
                                                        showModalItems: !0,
                                                        onInteraction: (0, d.u)(
                                                            "GuildChannelUserContextMenu",
                                                            s.Z.CALL_TILE_POPOUT,
                                                            {
                                                                entrypoint: O,
                                                                tileType: h.TH.USER,
                                                                targetUserId: C.id,
                                                            },
                                                        ),
                                                    }),
                                                );
                                        },
                                        I,
                                    )
                                );
                        }
                    }
                    return;
                case h.fO.ACTIVITY:
                    return;
            }
        },
        [t],
    );
}
