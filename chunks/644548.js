n.d(t, { Z: () => f }), n(627494), n(757143);
var l = n(200651),
    a = n(192379),
    i = n(317261),
    r = n(70956),
    o = n(5192),
    s = n(379357),
    c = n(561308),
    d = n(919394),
    u = n(206295),
    m = n(227172),
    x = n(555672),
    h = n(297781),
    p = n(591853),
    g = n(410441),
    v = n(797342),
    C = n(388032);
let j = (e, t, n, l) => {
        let a = (function (e) {
                if (e === i._.WEEK) return C.t['7TXfc3'];
            })(l),
            r = o.ZP.getName(t.guild_id, t.id, n),
            s = e.extra.game_name;
        return C.intl
            .formatToMarkdownString(a, {
                gameName: s,
                userName: r
            })
            .replaceAll('*', '');
    },
    I = (e, t) =>
        C.intl.formatToPlainString(C.t.tAwI1t, {
            username: t.username,
            activity: e.extra.game_name
        }),
    f = (e) => {
        let { channel: t, entry: n, disableGameProfileLinks: i, onReaction: o, onVoiceChannelPreview: f } = e,
            { largeImage: P } = (0, s.rv)({ entry: n }),
            { user: y, details: N, appName: Z } = (0, v.n)(n),
            { primaryColor: T, secondaryColor: E } = (0, u.Z)(null == P ? void 0 : P.src),
            A = (0, c.yA)(n),
            _ = (0, c.Nq)(n),
            S = a.useCallback(
                (e) => {
                    if (null != t && null != y && null != A && null != _ && (0, x.qy)(_))
                        return (0, d.SO)({
                            entry: n,
                            applicationImageSrc: null == P ? void 0 : P.src,
                            avatarSrcs: [y.getAvatarURL(null == t ? void 0 : t.guild_id, 128)],
                            description: j(n, t, y, _),
                            timestamp: C.intl.formatToPlainString(C.t.YL7UEx, { hours: Math.round(A / r.Z.Seconds.HOUR) }),
                            colors: [T, E],
                            channelId: e
                        });
                },
                [null == P ? void 0 : P.src, t, A, n, T, _, E, y]
            );
        if (null == y || null == A || null == _ || !(0, x.qy)(_)) return null;
        let R = null != n.extra.platform ? m.v[n.extra.platform] : null;
        return (0, l.jsxs)(p.yR, {
            children: [
                (0, l.jsx)(p.wG, {
                    channel: t,
                    headerIcons:
                        null == R
                            ? null
                            : (0, l.jsx)(g.Z, {
                                  Icon: R,
                                  'aria-label': C.intl.string(C.t.YR4cHB)
                              }),
                    entry: n,
                    userDescription: C.t.rPqqtr,
                    title: Z,
                    subtitle: N,
                    badges: (0, l.jsx)(h.Gk, {
                        location: h.Gt.POPOUT,
                        children: x.Hs.map((e, t) => (0, l.jsx)(e, { entry: n }, t))
                    }),
                    disableGameProfileLinks: i
                }),
                (0, l.jsx)(p.St, {
                    children: (0, l.jsx)(p.WT, {
                        onReaction: o,
                        onVoiceChannelPreview: f,
                        user: y,
                        channel: t,
                        generateReactionImage: S,
                        reactionImageAltText: I(n, y),
                        entry: n
                    })
                })
            ]
        });
    };
