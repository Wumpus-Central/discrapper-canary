"use strict";
n.d(t, { A: () => y });
var r = n(627968),
    i = n(64700),
    a = n(56121),
    s = n(927813),
    o = n(562153),
    l = n(939341),
    u = n(583846),
    c = n(821988),
    d = n(176563),
    _ = n(636202),
    f = n(977001),
    p = n(506326),
    h = n(910692),
    m = n(18282),
    g = n(299846),
    E = n(985018);
function A(e) {
    if (e === a.j.WEEK) return E.t["7TXfc6"];
}
let I = (e, t, n, r) => {
        let i = A(r),
            a = o.Ay.getName(t.guild_id, t.id, n),
            s = e.extra.game_name;
        return E.intl.formatToMarkdownString(i, { gameName: s, userName: a }).replaceAll("*", "");
    },
    T = (e, t) => E.intl.formatToPlainString(E.t.tAwI1k, { username: t.username, activity: e.extra.game_name }),
    y = (e) => {
        let { channel: t, entry: n, disableGameProfileLinks: a, onReaction: o, onVoiceChannelPreview: A } = e,
            { largeImage: y } = (0, l.nO)({ entry: n }),
            { user: S, details: v, appName: C } = (0, g.u)(n),
            { primaryColor: b, secondaryColor: N } = (0, d.A)(y?.src),
            R = (0, u.ty)(n),
            O = (0, u.TQ)(n),
            D = i.useCallback(
                (e) => {
                    if (null != t && null != S && null != R && null != O && (0, f._E)(O))
                        return (0, c.p6)({
                            entry: n,
                            applicationImageSrc: y?.src,
                            avatarSrcs: [S.getAvatarURL(t?.guild_id, 128)],
                            description: I(n, t, S, O),
                            timestamp: E.intl.formatToPlainString(E.t.YL7UE3, {
                                hours: Math.round(R / s.A.Seconds.HOUR),
                            }),
                            colors: [b, N],
                            channelId: e,
                        });
                },
                [y?.src, t, R, n, b, O, N, S],
            );
        if (null == S || null == R || null == O || !(0, f._E)(O)) return null;
        let L = null != n.extra.platform ? _.n[n.extra.platform] : null;
        return (0, r.jsxs)(h.YN, {
            children: [
                (0, r.jsx)(h.BC, {
                    channel: t,
                    headerIcons:
                        null == L ? null : (0, r.jsx)(m.A, { Icon: L, "aria-label": E.intl.string(E.t.YR4cHH) }),
                    entry: n,
                    userDescription: E.t.rPqqts,
                    title: C,
                    subtitle: v,
                    badges: (0, r.jsx)(p.mG, {
                        location: p.N5.POPOUT,
                        children: f.ac.map((e, t) => (0, r.jsx)(e, { entry: n }, t)),
                    }),
                    disableGameProfileLinks: a,
                }),
                (0, r.jsx)(h.Eh, {
                    children: (0, r.jsx)(h.fD, {
                        onReaction: o,
                        onVoiceChannelPreview: A,
                        user: S,
                        channel: t,
                        generateReactionImage: D,
                        reactionImageAltText: T(n, S),
                        entry: n,
                    }),
                }),
            ],
        });
    };
