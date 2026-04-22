"use strict";
n.d(t, { A: () => A });
var i = n(627968),
    l = n(64700),
    s = n(56121),
    r = n(927813),
    a = n(562153),
    o = n(939341),
    c = n(583846),
    u = n(821988),
    d = n(176563),
    h = n(636202),
    m = n(977001),
    p = n(506326),
    f = n(910692),
    g = n(18282),
    _ = n(299846),
    x = n(985018);
let A = (e) => {
    let t,
        n,
        { channel: A, entry: C, disableGameProfileLinks: E, onReaction: I, onVoiceChannelPreview: v } = e,
        { largeImage: y } = (0, o.nO)({ entry: C }),
        { user: S, details: b, appName: N } = (0, _.u)(C),
        { primaryColor: T, secondaryColor: j } = (0, d.A)(y?.src),
        R = (0, c.ty)(C),
        w = (0, c.TQ)(C),
        L = l.useCallback(
            (e) => {
                if (null != A && null != S && null != R && null != w && (0, m._E)(w)) {
                    var t, n, i;
                    let l, o, c;
                    return (0, u.p6)({
                        entry: C,
                        applicationImageSrc: y?.src,
                        avatarSrcs: [S.getAvatarURL(A?.guild_id, 128)],
                        description:
                            ((t = C),
                            (n = A),
                            (i = S),
                            (l = (function (e) {
                                if (e === s.j.WEEK) return x.t["7TXfc6"];
                            })(w)),
                            (o = a.Ay.getName(n.guild_id, n.id, i)),
                            (c = t.extra.game_name),
                            x.intl.formatToMarkdownString(l, { gameName: c, userName: o }).replaceAll("*", "")),
                        timestamp: x.intl.formatToPlainString(x.t.YL7UE3, { hours: Math.round(R / r.A.Seconds.HOUR) }),
                        colors: [T, j],
                        channelId: e,
                    });
                }
            },
            [y?.src, A, R, C, T, w, j, S],
        );
    if (null == S || null == R || null == w || !(0, m._E)(w)) return null;
    let M = null != C.extra.platform ? h.n[C.extra.platform] : null;
    return (0, i.jsxs)(f.YN, {
        children: [
            (0, i.jsx)(f.BC, {
                channel: A,
                headerIcons: null == M ? null : (0, i.jsx)(g.A, { Icon: M, "aria-label": x.intl.string(x.t.YR4cHH) }),
                entry: C,
                userDescription: x.t.rPqqts,
                title: N,
                subtitle: b,
                badges: (0, i.jsx)(p.mG, {
                    location: p.N5.POPOUT,
                    children: m.ac.map((e, t) => (0, i.jsx)(e, { entry: C }, t)),
                }),
                disableGameProfileLinks: E,
            }),
            (0, i.jsx)(f.Eh, {
                children: (0, i.jsx)(f.fD, {
                    onReaction: I,
                    onVoiceChannelPreview: v,
                    user: S,
                    channel: A,
                    generateReactionImage: L,
                    reactionImageAltText:
                        ((t = C),
                        (n = S),
                        x.intl.formatToPlainString(x.t.tAwI1k, { username: n.username, activity: t.extra.game_name })),
                    entry: C,
                }),
            }),
        ],
    });
};
