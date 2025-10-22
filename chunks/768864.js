n.d(t, { B: () => y });
var r = n(951288),
    i = n(647438),
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
function y(e) {
    let { channel: t, appContext: l = f.IlC.APP, analyticsLocation: y = s.Z.CHANNEL_CALL, onClose: I } = e;
    return i.useCallback(
        (e, i, s, m) => {
            if (null == t) return;
            let O = {
                onClose: I,
                context: l,
            };
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
                                            appContext: l,
                                            minimal: s,
                                            exitFullscreen: () => {},
                                            onInteraction: (0, d.u)("StreamContextMenu", y, {
                                                entrypoint: m,
                                                tileType: h.TH.STREAM,
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
                case h.fO.USER:
                    let b = c.default.getUser(e.id);
                    if (null != b) {
                        if (s)
                            return (0, u.D)(i, b, t, O, (e, t) => {
                                (0, d.u)(e, y, {
                                    entrypoint: h.A5.THREE_DOT,
                                    tileType: h.TH.USER,
                                    targetUserId: b.id,
                                })(t);
                            });
                        switch (t.type) {
                            case f.d4z.DM:
                                return (0, o.jW)(
                                    i,
                                    async () => {
                                        let { default: e } = await Promise.all([
                                            n.e("79695"),
                                            n.e("98783"),
                                            n.e("56826"),
                                            n.e("55599"),
                                        ]).then(n.bind(n, 131404));
                                        return (n) =>
                                            (0, r.jsx)(
                                                e,
                                                w(p({}, n), {
                                                    showChannelCallItems: !0,
                                                    showMediaItems: !0,
                                                    user: b,
                                                    channel: t,
                                                    showModalItems: !0,
                                                    onInteraction: (0, d.u)("DMUserContextMenu", y, {
                                                        entrypoint: m,
                                                        tileType: h.TH.USER,
                                                        targetUserId: b.id,
                                                    }),
                                                }),
                                            );
                                    },
                                    O,
                                );
                            case f.d4z.GROUP_DM:
                                return (0, o.jW)(
                                    i,
                                    async () => {
                                        let { default: e } = await Promise.all([
                                            n.e("79695"),
                                            n.e("98783"),
                                            n.e("92775"),
                                        ]).then(n.bind(n, 354589));
                                        return (n) =>
                                            (0, r.jsx)(
                                                e,
                                                w(p({}, n), {
                                                    showChannelCallItems: !0,
                                                    showMediaItems: !0,
                                                    showChatItems: !1,
                                                    user: b,
                                                    channel: t,
                                                    showModalItems: !0,
                                                    onInteraction: (0, d.u)("GroupDMUserContextMenu", y, {
                                                        entrypoint: m,
                                                        tileType: h.TH.USER,
                                                        targetUserId: b.id,
                                                    }),
                                                }),
                                            );
                                    },
                                    O,
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
                                                n.e("98783"),
                                                n.e("8982"),
                                                n.e("7717"),
                                                n.e("19848"),
                                            ]).then(n.bind(n, 757387));
                                            return (n) =>
                                                (0, r.jsx)(
                                                    i,
                                                    w(p({}, n), {
                                                        showMediaItems: !0,
                                                        showChannelCallItems: !0,
                                                        showChatItems: !1,
                                                        user: b,
                                                        channel: t,
                                                        guildId: e,
                                                        showModalItems: !0,
                                                        onInteraction: (0, d.u)("GuildChannelUserContextMenu", y, {
                                                            entrypoint: m,
                                                            tileType: h.TH.USER,
                                                            targetUserId: b.id,
                                                        }),
                                                    }),
                                                );
                                        },
                                        O,
                                    )
                                );
                        }
                    }
                    return;
                case h.fO.ACTIVITY:
                    return;
            }
        },
        [t, l, y, I],
    );
}
