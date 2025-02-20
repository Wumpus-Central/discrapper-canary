n.d(t, { Z: () => P }), n(627494), n(757143), n(301563);
var r = n(200651),
    a = n(192379),
    l = n(317261),
    i = n(70956),
    o = n(5192),
    s = n(379357),
    c = n(561308),
    u = n(919394),
    d = n(206295),
    m = n(227172),
    p = n(555672),
    h = n(297781),
    x = n(591853),
    g = n(410441),
    v = n(797342),
    f = n(388032);
let y = (e, t, n, r) => {
        let a = (function (e) {
                if (e === l._.WEEK) return f.t['7TXfc3'];
            })(r),
            i = o.ZP.getName(t.guild_id, t.id, n),
            s = e.extra.game_name;
        return f.NW.formatToMarkdownString(a, {
            gameName: s,
            userName: i
        }).replaceAll('*', '');
    },
    j = (e, t) =>
        f.NW.formatToPlainString(f.t.tAwI1t, {
            username: t.username,
            activity: e.extra.game_name
        }),
    P = (e) => {
        let { channel: t, entry: n, disableGameProfileLinks: l, onReaction: o, onVoiceChannelPreview: P } = e,
            { largeImage: O } = (0, s.rv)({ entry: n }),
            { user: b, details: C, appName: N } = (0, v.n)(n),
            { primaryColor: I, secondaryColor: w } = (0, d.Z)(null == O ? void 0 : O.src),
            T = (0, c.yA)(n),
            Z = (0, c.Nq)(n),
            S = a.useCallback(
                (e) => {
                    if (null != t && null != b && null != T && null != Z && (0, p.qy)(Z))
                        return (0, u.SO)({
                            entry: n,
                            applicationImageSrc: null == O ? void 0 : O.src,
                            avatarSrcs: [b.getAvatarURL(null == t ? void 0 : t.guild_id, 128)],
                            description: y(n, t, b, Z),
                            timestamp: f.NW.formatToPlainString(f.t.YL7UEx, { hours: Math.round(T / i.Z.Seconds.HOUR) }),
                            colors: [I, w],
                            channelId: e
                        });
                },
                [null == O ? void 0 : O.src, t, T, n, I, Z, w, b]
            );
        if (null == b || null == T || null == Z || !(0, p.qy)(Z)) return null;
        let E = null != n.extra.platform ? m.v[n.extra.platform] : null;
        return (0, r.jsxs)(x.yR, {
            children: [
                (0, r.jsx)(x.wG, {
                    channel: t,
                    headerIcons:
                        null == E
                            ? null
                            : (0, r.jsx)(g.Z, {
                                  Icon: E,
                                  'aria-label': f.NW.string(f.t.YR4cHB)
                              }),
                    entry: n,
                    userDescription: f.t.rPqqtr,
                    title: N,
                    subtitle: C,
                    badges: (0, r.jsx)(h.Gk, {
                        location: h.Gt.POPOUT,
                        children: p.Hs.map((e, t) => (0, r.jsx)(e, { entry: n }, t))
                    }),
                    disableGameProfileLinks: l
                }),
                (0, r.jsx)(x.St, {
                    children: (0, r.jsx)(x.WT, {
                        onReaction: o,
                        onVoiceChannelPreview: P,
                        user: b,
                        channel: t,
                        generateReactionImage: S,
                        reactionImageAltText: j(n, b),
                        entry: n
                    })
                })
            ]
        });
    };
