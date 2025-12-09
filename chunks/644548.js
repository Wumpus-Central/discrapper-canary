n.d(t, { Z: () => v }), n(804061), n(704826), n(35282);
var r = n(54381),
    i = n(473749),
    a = n(317261),
    o = n(70956),
    s = n(5192),
    l = n(379357),
    c = n(561308),
    u = n(919394),
    d = n(206295),
    f = n(227172),
    p = n(555672),
    _ = n(297781),
    m = n(591853),
    h = n(410441),
    g = n(797342),
    E = n(388032);
function b(e) {
    if (e === a._.WEEK) return E.t["7TXfc6"];
}
let y = (e, t, n, r) => {
        let i = b(r),
            a = s.ZP.getName(t.guild_id, t.id, n),
            o = e.extra.game_name;
        return E.intl
            .formatToMarkdownString(i, {
                gameName: o,
                userName: a,
            })
            .replaceAll("*", "");
    },
    O = (e, t) =>
        E.intl.formatToPlainString(E.t.tAwI1k, {
            username: t.username,
            activity: e.extra.game_name,
        }),
    v = (e) => {
        let { channel: t, entry: n, disableGameProfileLinks: a, onReaction: s, onVoiceChannelPreview: b } = e,
            { largeImage: v } = (0, l.rv)({ entry: n }),
            { user: S, details: I, appName: T } = (0, g.n)(n),
            { primaryColor: A, secondaryColor: C } = (0, d.Z)(null == v ? void 0 : v.src),
            N = (0, c.yA)(n),
            P = (0, c.Nq)(n),
            R = i.useCallback(
                (e) => {
                    if (null != t && null != S && null != N && null != P && (0, p.qy)(P))
                        return (0, u.SO)({
                            entry: n,
                            applicationImageSrc: null == v ? void 0 : v.src,
                            avatarSrcs: [S.getAvatarURL(null == t ? void 0 : t.guild_id, 128)],
                            description: y(n, t, S, P),
                            timestamp: E.intl.formatToPlainString(E.t.YL7UE3, {
                                hours: Math.round(N / o.Z.Seconds.HOUR),
                            }),
                            colors: [A, C],
                            channelId: e,
                        });
                },
                [null == v ? void 0 : v.src, t, N, n, A, P, C, S],
            );
        if (null == S || null == N || null == P || !(0, p.qy)(P)) return null;
        let D = null != n.extra.platform ? f.v[n.extra.platform] : null;
        return (0, r.jsxs)(m.yR, {
            children: [
                (0, r.jsx)(m.wG, {
                    channel: t,
                    headerIcons:
                        null == D
                            ? null
                            : (0, r.jsx)(h.Z, {
                                  Icon: D,
                                  "aria-label": E.intl.string(E.t.YR4cHH),
                              }),
                    entry: n,
                    userDescription: E.t.rPqqts,
                    title: T,
                    subtitle: I,
                    badges: (0, r.jsx)(_.Gk, {
                        location: _.Gt.POPOUT,
                        children: p.Hs.map((e, t) => (0, r.jsx)(e, { entry: n }, t)),
                    }),
                    disableGameProfileLinks: a,
                }),
                (0, r.jsx)(m.St, {
                    children: (0, r.jsx)(m.WT, {
                        onReaction: s,
                        onVoiceChannelPreview: b,
                        user: S,
                        channel: t,
                        generateReactionImage: R,
                        reactionImageAltText: O(n, S),
                        entry: n,
                    }),
                }),
            ],
        });
    };
