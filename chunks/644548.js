n.d(t, { Z: () => I }), n(627494), n(757143);
var a = n(200651),
    l = n(192379),
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
let N = (e, t, n, a) => {
        let l = (function (e) {
                if (e === i._.WEEK) return C.t['7TXfc3'];
            })(a),
            r = o.ZP.getName(t.guild_id, t.id, n),
            s = e.extra.game_name;
        return C.NW.formatToMarkdownString(l, {
            gameName: s,
            userName: r
        }).replaceAll('*', '');
    },
    j = (e, t) =>
        C.NW.formatToPlainString(C.t.tAwI1t, {
            username: t.username,
            activity: e.extra.game_name
        }),
    I = (e) => {
        let { channel: t, entry: n, disableGameProfileLinks: i, onReaction: o, onVoiceChannelPreview: I } = e,
            { largeImage: f } = (0, s.rv)({ entry: n }),
            { user: P, details: y, appName: Z } = (0, v.n)(n),
            { primaryColor: T, secondaryColor: A } = (0, u.Z)(null == f ? void 0 : f.src),
            E = (0, c.yA)(n),
            _ = (0, c.Nq)(n),
            S = l.useCallback(
                (e) => {
                    if (null != t && null != P && null != E && null != _ && (0, x.qy)(_))
                        return (0, d.SO)({
                            entry: n,
                            applicationImageSrc: null == f ? void 0 : f.src,
                            avatarSrcs: [P.getAvatarURL(null == t ? void 0 : t.guild_id, 128)],
                            description: N(n, t, P, _),
                            timestamp: C.NW.formatToPlainString(C.t.YL7UEx, { hours: Math.round(E / r.Z.Seconds.HOUR) }),
                            colors: [T, A],
                            channelId: e
                        });
                },
                [null == f ? void 0 : f.src, t, E, n, T, _, A, P]
            );
        if (null == P || null == E || null == _ || !(0, x.qy)(_)) return null;
        let R = null != n.extra.platform ? m.v[n.extra.platform] : null;
        return (0, a.jsxs)(p.yR, {
            children: [
                (0, a.jsx)(p.wG, {
                    channel: t,
                    headerIcons:
                        null == R
                            ? null
                            : (0, a.jsx)(g.Z, {
                                  Icon: R,
                                  'aria-label': C.NW.string(C.t.YR4cHB)
                              }),
                    entry: n,
                    userDescription: C.t.rPqqtr,
                    title: Z,
                    subtitle: y,
                    badges: (0, a.jsx)(h.Gk, {
                        location: h.Gt.POPOUT,
                        children: x.Hs.map((e, t) => (0, a.jsx)(e, { entry: n }, t))
                    }),
                    disableGameProfileLinks: i
                }),
                (0, a.jsx)(p.St, {
                    children: (0, a.jsx)(p.WT, {
                        onReaction: o,
                        onVoiceChannelPreview: I,
                        user: P,
                        channel: t,
                        generateReactionImage: S,
                        reactionImageAltText: j(n, P),
                        entry: n
                    })
                })
            ]
        });
    };
