n.d(t, { A: () => A }), n(747238), n(812715), n(866193);
var r = n(627968),
    i = n(64700),
    a = n(56121),
    s = n(927813),
    o = n(562153),
    l = n(939341),
    c = n(583846),
    u = n(821988),
    d = n(176563),
    f = n(636202),
    p = n(977001),
    _ = n(506326),
    h = n(910692),
    m = n(18282),
    g = n(299846),
    E = n(985018);
function b(e) {
    if (e === a.j.WEEK) return E.t["7TXfc6"];
}
let y = (e, t, n, r) => {
        let i = b(r),
            a = o.Ay.getName(t.guild_id, t.id, n),
            s = e.extra.game_name;
        return E.intl
            .formatToMarkdownString(i, {
                gameName: s,
                userName: a,
            })
            .replaceAll("*", "");
    },
    O = (e, t) =>
        E.intl.formatToPlainString(E.t.tAwI1k, {
            username: t.username,
            activity: e.extra.game_name,
        }),
    A = (e) => {
        let { channel: t, entry: n, disableGameProfileLinks: a, onReaction: o, onVoiceChannelPreview: b } = e,
            { largeImage: A } = (0, l.nO)({ entry: n }),
            { user: v, details: S, appName: I } = (0, g.u)(n),
            { primaryColor: T, secondaryColor: C } = (0, d.A)(null == A ? void 0 : A.src),
            N = (0, c.ty)(n),
            R = (0, c.TQ)(n),
            w = i.useCallback(
                (e) => {
                    if (null != t && null != v && null != N && null != R && (0, p._E)(R))
                        return (0, u.p6)({
                            entry: n,
                            applicationImageSrc: null == A ? void 0 : A.src,
                            avatarSrcs: [v.getAvatarURL(null == t ? void 0 : t.guild_id, 128)],
                            description: y(n, t, v, R),
                            timestamp: E.intl.formatToPlainString(E.t.YL7UE3, {
                                hours: Math.round(N / s.A.Seconds.HOUR),
                            }),
                            colors: [T, C],
                            channelId: e,
                        });
                },
                [null == A ? void 0 : A.src, t, N, n, T, R, C, v],
            );
        if (null == v || null == N || null == R || !(0, p._E)(R)) return null;
        let P = null != n.extra.platform ? f.n[n.extra.platform] : null;
        return (0, r.jsxs)(h.YN, {
            children: [
                (0, r.jsx)(h.BC, {
                    channel: t,
                    headerIcons:
                        null == P
                            ? null
                            : (0, r.jsx)(m.A, {
                                  Icon: P,
                                  "aria-label": E.intl.string(E.t.YR4cHH),
                              }),
                    entry: n,
                    userDescription: E.t.rPqqts,
                    title: I,
                    subtitle: S,
                    badges: (0, r.jsx)(_.mG, {
                        location: _.N5.POPOUT,
                        children: p.ac.map((e, t) => (0, r.jsx)(e, { entry: n }, t)),
                    }),
                    disableGameProfileLinks: a,
                }),
                (0, r.jsx)(h.Eh, {
                    children: (0, r.jsx)(h.fD, {
                        onReaction: o,
                        onVoiceChannelPreview: b,
                        user: v,
                        channel: t,
                        generateReactionImage: w,
                        reactionImageAltText: O(n, v),
                        entry: n,
                    }),
                }),
            ],
        });
    };
