n.d(t, { Z: () => O }), n(804061), n(704826), n(35282);
var r = n(200651),
    i = n(192379),
    a = n(317261),
    o = n(70956),
    s = n(5192),
    l = n(379357),
    c = n(561308),
    u = n(919394),
    d = n(206295),
    f = n(227172),
    _ = n(555672),
    p = n(297781),
    h = n(591853),
    m = n(410441),
    g = n(797342),
    E = n(388032);
function b(e) {
    if (e === a._.WEEK) return E.t['7TXfc3'];
}
let y = (e, t, n, r) => {
        let i = b(r),
            a = s.ZP.getName(t.guild_id, t.id, n),
            o = e.extra.game_name;
        return E.intl
            .formatToMarkdownString(i, {
                gameName: o,
                userName: a
            })
            .replaceAll('*', '');
    },
    v = (e, t) =>
        E.intl.formatToPlainString(E.t.tAwI1t, {
            username: t.username,
            activity: e.extra.game_name
        }),
    O = (e) => {
        let { channel: t, entry: n, disableGameProfileLinks: a, onReaction: s, onVoiceChannelPreview: b } = e,
            { largeImage: O } = (0, l.rv)({ entry: n }),
            { user: I, details: S, appName: T } = (0, g.n)(n),
            { primaryColor: A, secondaryColor: N } = (0, d.Z)(null == O ? void 0 : O.src),
            C = (0, c.yA)(n),
            R = (0, c.Nq)(n),
            P = i.useCallback(
                (e) => {
                    if (null != t && null != I && null != C && null != R && (0, _.qy)(R))
                        return (0, u.SO)({
                            entry: n,
                            applicationImageSrc: null == O ? void 0 : O.src,
                            avatarSrcs: [I.getAvatarURL(null == t ? void 0 : t.guild_id, 128)],
                            description: y(n, t, I, R),
                            timestamp: E.intl.formatToPlainString(E.t.YL7UEx, { hours: Math.round(C / o.Z.Seconds.HOUR) }),
                            colors: [A, N],
                            channelId: e
                        });
                },
                [null == O ? void 0 : O.src, t, C, n, A, R, N, I]
            );
        if (null == I || null == C || null == R || !(0, _.qy)(R)) return null;
        let w = null != n.extra.platform ? f.v[n.extra.platform] : null;
        return (0, r.jsxs)(h.yR, {
            children: [
                (0, r.jsx)(h.wG, {
                    channel: t,
                    headerIcons:
                        null == w
                            ? null
                            : (0, r.jsx)(m.Z, {
                                  Icon: w,
                                  'aria-label': E.intl.string(E.t.YR4cHB)
                              }),
                    entry: n,
                    userDescription: E.t.rPqqtr,
                    title: T,
                    subtitle: S,
                    badges: (0, r.jsx)(p.Gk, {
                        location: p.Gt.POPOUT,
                        children: _.Hs.map((e, t) => (0, r.jsx)(e, { entry: n }, t))
                    }),
                    disableGameProfileLinks: a
                }),
                (0, r.jsx)(h.St, {
                    children: (0, r.jsx)(h.WT, {
                        onReaction: s,
                        onVoiceChannelPreview: b,
                        user: I,
                        channel: t,
                        generateReactionImage: P,
                        reactionImageAltText: v(n, I),
                        entry: n
                    })
                })
            ]
        });
    };
