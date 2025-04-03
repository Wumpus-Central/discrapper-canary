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
    f = n(591853),
    g = n(410441),
    x = n(797342),
    v = n(388032);
let y = (e, t, n, r) => {
        let a = (function (e) {
                if (e === l._.WEEK) return v.t['7TXfc3'];
            })(r),
            i = o.ZP.getName(t.guild_id, t.id, n),
            s = e.extra.game_name;
        return v.NW.formatToMarkdownString(a, {
            gameName: s,
            userName: i
        }).replaceAll('*', '');
    },
    j = (e, t) =>
        v.NW.formatToPlainString(v.t.tAwI1t, {
            username: t.username,
            activity: e.extra.game_name
        }),
    P = (e) => {
        let { channel: t, entry: n, disableGameProfileLinks: l, onReaction: o, onVoiceChannelPreview: P } = e,
            { largeImage: O } = (0, s.rv)({ entry: n }),
            { user: b, details: C, appName: N } = (0, x.n)(n),
            { primaryColor: I, secondaryColor: E } = (0, d.Z)(null == O ? void 0 : O.src),
            w = (0, c.yA)(n),
            Z = (0, c.Nq)(n),
            S = a.useCallback(
                (e) => {
                    if (null != t && null != b && null != w && null != Z && (0, p.qy)(Z))
                        return (0, u.SO)({
                            entry: n,
                            applicationImageSrc: null == O ? void 0 : O.src,
                            avatarSrcs: [b.getAvatarURL(null == t ? void 0 : t.guild_id, 128)],
                            description: y(n, t, b, Z),
                            timestamp: v.NW.formatToPlainString(v.t.YL7UEx, { hours: Math.round(w / i.Z.Seconds.HOUR) }),
                            colors: [I, E],
                            channelId: e
                        });
                },
                [null == O ? void 0 : O.src, t, w, n, I, Z, E, b]
            );
        if (null == b || null == w || null == Z || !(0, p.qy)(Z)) return null;
        let T = null != n.extra.platform ? m.v[n.extra.platform] : null;
        return (0, r.jsxs)(f.yR, {
            children: [
                (0, r.jsx)(f.wG, {
                    channel: t,
                    headerIcons:
                        null == T
                            ? null
                            : (0, r.jsx)(g.Z, {
                                  Icon: T,
                                  'aria-label': v.NW.string(v.t.YR4cHB)
                              }),
                    entry: n,
                    userDescription: v.t.rPqqtr,
                    title: N,
                    subtitle: C,
                    badges: (0, r.jsx)(h.Gk, {
                        location: h.Gt.POPOUT,
                        children: p.Hs.map((e, t) => (0, r.jsx)(e, { entry: n }, t))
                    }),
                    disableGameProfileLinks: l
                }),
                (0, r.jsx)(f.St, {
                    children: (0, r.jsx)(f.WT, {
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
