"use strict";
n.d(t, { A: () => C });
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
    _ = n(299846),
    x = n(985018);
let C = (e) => {
    let t,
        n,
        { channel: C, entry: A, disableGameProfileLinks: E, onReaction: I, onVoiceChannelPreview: v } = e,
        { largeImage: y } = (0, o.nO)({ entry: A }),
        { user: b, details: S, appName: N } = (0, _.u)(A),
        { primaryColor: j, secondaryColor: T } = (0, d.A)(y?.src),
        w = (0, c.ty)(A),
        R = (0, c.TQ)(A),
        L = i.useCallback(
            (e) => {
                if (null != C && null != b && null != w && null != R && (0, m._E)(R)) {
                    var t, n, l;
                    let i, o, c;
                    return (0, u.p6)({
                        entry: A,
                        applicationImageSrc: y?.src,
                        avatarSrcs: [b.getAvatarURL(C?.guild_id, 128)],
                        description:
                            ((t = A),
                            (n = C),
                            (l = b),
                            (i = (function (e) {
                                if (e === s.j.WEEK) return x.t["7TXfc6"];
                            })(R)),
                            (o = r.Ay.getName(n.guild_id, n.id, l)),
                            (c = t.extra.game_name),
                            x.intl.formatToMarkdownString(i, { gameName: c, userName: o }).replaceAll("*", "")),
                        timestamp: x.intl.formatToPlainString(x.t.YL7UE3, { hours: Math.round(w / a.A.Seconds.HOUR) }),
                        colors: [j, T],
                        channelId: e,
                    });
                }
            },
            [y?.src, C, w, A, j, R, T, b],
        );
    if (null == b || null == w || null == R || !(0, m._E)(R)) return null;
    let k = null != A.extra.platform ? h.n[A.extra.platform] : null;
    return (0, l.jsxs)(f.YN, {
        children: [
            (0, l.jsx)(f.BC, {
                channel: C,
                headerIcons: null == k ? null : (0, l.jsx)(g.A, { Icon: k, "aria-label": x.intl.string(x.t.YR4cHH) }),
                entry: A,
                userDescription: x.t.rPqqts,
                title: N,
                subtitle: S,
                badges: (0, l.jsx)(p.mG, {
                    location: p.N5.POPOUT,
                    children: m.ac.map((e, t) => (0, l.jsx)(e, { entry: A }, t)),
                }),
                disableGameProfileLinks: E,
            }),
            (0, l.jsx)(f.Eh, {
                children: (0, l.jsx)(f.fD, {
                    onReaction: I,
                    onVoiceChannelPreview: v,
                    user: b,
                    channel: C,
                    generateReactionImage: L,
                    reactionImageAltText:
                        ((t = A),
                        (n = b),
                        x.intl.formatToPlainString(x.t.tAwI1k, { username: n.username, activity: t.extra.game_name })),
                    entry: A,
                }),
            }),
        ],
    });
};
