"use strict";
n.d(t, { A: () => N });
var r = n(627968),
    i = n(64700),
    s = n(56121),
    a = n(205327),
    o = n(311907),
    l = n(210528),
    u = n(287809),
    c = n(121090),
    d = n(403362),
    _ = n(562153),
    f = n(583846),
    p = n(405310),
    h = n(434200),
    E = n(176563),
    m = n(620708),
    g = n(506326),
    A = n(910692),
    I = n(18282),
    T = n(652215),
    S = n(272984),
    y = n(985018);
let N = (e) => {
    let t,
        n,
        { channel: N, entry: v, onReaction: C, onVoiceChannelPreview: O } = e,
        { parent_title: R, provider: b, image_url: D } = v.extra.media,
        L = v.extra.artist.name,
        w = (0, o.bG)([u.default], () => u.default.getUser(v.author_id)),
        { primaryColor: M, secondaryColor: P } = (0, E.A)(D),
        x = (0, f.TQ)(v),
        k = i.useCallback(() => {
            var e, t, n;
            let r, i, a;
            if (null == N || null == w || !(0, d.S1)(x, m.wE)) return;
            let o =
                ((e = v),
                (t = N),
                (n = w),
                (r = (function (e) {
                    if (e === s.j.WEEK) return y.t.SjOZfm;
                })(x)),
                (i = _.Ay.getName(t.guild_id, t.id, n)),
                (a = e.extra.artist.name),
                y.intl.formatToMarkdownString(r, { artist: a, userName: i }).replaceAll("*", ""));
            return (0, p.Lu)({
                user: w,
                channel: N,
                mediaImageSrc: D,
                artist: L,
                description: o,
                colors: [M, P],
                badges: (0, p.KR)(v),
            });
        }, [D, L, N, v, M, x, P, w]),
        U = (0, h.A)(T.fg2.SPOTIFY);
    if (null == w || !(0, d.S1)(x, m.wE)) return null;
    let G = () => {
        let e = S.M0.ALBUM,
            t = l.A.isProtocolRegistered()
                ? S.RQ.PLAYER_OPEN(e, v.extra.media.external_parent_id)
                : S.RQ.WEB_OPEN(e, v.extra.media.external_parent_id);
        window.open(t);
    };
    return (0, r.jsxs)(A.YN, {
        children: [
            (0, r.jsx)(A.BC, {
                onClickTitle: G,
                onClickSubtitle: () => {
                    let e = S.M0.ARTIST,
                        t = l.A.isProtocolRegistered()
                            ? S.RQ.PLAYER_OPEN(e, v.extra.artist.external_id)
                            : S.RQ.WEB_OPEN(e, v.extra.artist.external_id);
                    window.open(t);
                },
                onClickThumbnail: G,
                channel: N,
                entry: v,
                headerIcons:
                    b === a.X.SPOTIFY
                        ? (0, r.jsx)(I.A, { onClick: U, Icon: c.A, "aria-label": y.intl.string(y.t["0ZB/XE"]) })
                        : null,
                userDescription: y.t.CcVI1T,
                title: R,
                subtitle: L,
                badges: (0, r.jsx)(g.mG, {
                    location: g.N5.POPOUT,
                    children: m.$u.map((e, t) => (0, r.jsx)(e, { entry: v }, t)),
                }),
            }),
            (0, r.jsx)(A.Eh, {
                children: (0, r.jsx)(A.fD, {
                    onReaction: C,
                    onVoiceChannelPreview: O,
                    user: w,
                    channel: N,
                    generateReactionImage: k,
                    reactionImageAltText:
                        ((t = v),
                        (n = w),
                        y.intl.formatToPlainString(y.t.Osmpr9, { username: n.username, artist: t.extra.artist.name })),
                    entry: v,
                }),
            }),
        ],
    });
};
