"use strict";
n.d(t, { A: () => A });
var l = n(627968),
    i = n(64700),
    s = n(56121),
    a = n(927813),
    r = n(562153),
    o = n(939341),
    c = n(583846),
    u = n(821988),
    d = n(140651),
    h = n(197965),
    m = n(977001),
    p = n(506326),
    f = n(236812),
    g = n(18282),
    x = n(299846),
    C = n(985018);
let A = (e) => {
    let t,
        n,
        { channel: A, entry: E, disableGameProfileLinks: I, onReaction: y, onVoiceChannelPreview: v } = e,
        { largeImage: S } = (0, o.nO)({ entry: E }),
        { user: N, details: j, appName: _ } = (0, x.u)(E),
        { primaryColor: T, secondaryColor: b } = (0, d.A)(S?.src),
        R = (0, c.ty)(E),
        O = (0, c.TQ)(E),
        L = i.useCallback(
            (e) => {
                if (null != A && null != N && null != R && null != O && (0, m._E)(O)) {
                    var t, n, l;
                    let i, o, c;
                    return (0, u.p6)({
                        entry: E,
                        applicationImageSrc: S?.src,
                        avatarSrcs: [N.getAvatarURL(A?.guild_id, 128)],
                        description:
                            ((t = E),
                            (n = A),
                            (l = N),
                            (i = (function (e) {
                                if (e === s.j.WEEK) return C.t["7TXfc6"];
                            })(O)),
                            (o = r.Ay.getName(n.guild_id, n.id, l)),
                            (c = t.extra.game_name),
                            C.intl.formatToMarkdownString(i, { gameName: c, userName: o }).replaceAll("*", "")),
                        timestamp: C.intl.formatToPlainString(C.t.YL7UE3, { hours: Math.round(R / a.A.Seconds.HOUR) }),
                        colors: [T, b],
                        channelId: e,
                    });
                }
            },
            [S?.src, A, R, E, T, O, b, N],
        );
    if (null == N || null == R || null == O || !(0, m._E)(O)) return null;
    let w = null != E.extra.platform ? h.n[E.extra.platform] : null;
    return (0, l.jsxs)(f.YN, {
        children: [
            (0, l.jsx)(f.BC, {
                channel: A,
                headerIcons: null == w ? null : (0, l.jsx)(g.A, { Icon: w, "aria-label": C.intl.string(C.t.YR4cHH) }),
                entry: E,
                userDescription: C.t.rPqqts,
                title: _,
                subtitle: j,
                badges: (0, l.jsx)(p.mG, {
                    location: p.N5.POPOUT,
                    children: m.ac.map((e, t) => (0, l.jsx)(e, { entry: E }, t)),
                }),
                disableGameProfileLinks: I,
            }),
            (0, l.jsx)(f.Eh, {
                children: (0, l.jsx)(f.fD, {
                    onReaction: y,
                    onVoiceChannelPreview: v,
                    user: N,
                    channel: A,
                    generateReactionImage: L,
                    reactionImageAltText:
                        ((t = E),
                        (n = N),
                        C.intl.formatToPlainString(C.t.tAwI1k, { username: n.username, activity: t.extra.game_name })),
                    entry: E,
                }),
            }),
        ],
    });
};
