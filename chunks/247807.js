"use strict";
n.d(t, { A: () => C });
var i = n(627968),
    r = n(64700),
    s = n(56121),
    a = n(205327),
    o = n(17928),
    l = n(210528),
    d = n(287809),
    _ = n(121090),
    u = n(403362),
    c = n(562153),
    E = n(583846),
    h = n(405310),
    m = n(434200),
    f = n(140651),
    g = n(620708),
    p = n(506326),
    A = n(236812),
    I = n(18282),
    T = n(652215),
    S = n(272984),
    N = n(985018);
let C = (e) => {
    let t,
        n,
        { channel: C, entry: R, onReaction: O, onVoiceChannelPreview: y } = e,
        { parent_title: v, provider: D, image_url: L } = R.extra.media,
        b = R.extra.artist.name,
        w = (0, o.bG)([d.default], () => d.default.getUser(R.author_id)),
        { primaryColor: P, secondaryColor: k } = (0, f.A)(L),
        M = (0, E.TQ)(R),
        U = r.useCallback(() => {
            var e, t, n;
            let i, r, a;
            if (null == C || null == w || !(0, u.S1)(M, g.wE)) return;
            let o =
                ((e = R),
                (t = C),
                (n = w),
                (i = (function (e) {
                    if (e === s.j.WEEK) return N.t.SjOZfm;
                })(M)),
                (r = c.Ay.getName(t.guild_id, t.id, n)),
                (a = e.extra.artist.name),
                N.intl.formatToMarkdownString(i, { artist: a, userName: r }).replaceAll("*", ""));
            return (0, h.Lu)({
                user: w,
                channel: C,
                mediaImageSrc: L,
                artist: b,
                description: o,
                colors: [P, k],
                badges: (0, h.KR)(R),
            });
        }, [L, b, C, R, P, M, k, w]),
        x = (0, m.A)(T.fg2.SPOTIFY);
    if (null == w || !(0, u.S1)(M, g.wE)) return null;
    let G = () => {
        let e = S.M0.ALBUM,
            t = l.A.isProtocolRegistered()
                ? S.RQ.PLAYER_OPEN(e, R.extra.media.external_parent_id)
                : S.RQ.WEB_OPEN(e, R.extra.media.external_parent_id);
        window.open(t);
    };
    return (0, i.jsxs)(A.YN, {
        children: [
            (0, i.jsx)(A.BC, {
                onClickTitle: G,
                onClickSubtitle: () => {
                    let e = S.M0.ARTIST,
                        t = l.A.isProtocolRegistered()
                            ? S.RQ.PLAYER_OPEN(e, R.extra.artist.external_id)
                            : S.RQ.WEB_OPEN(e, R.extra.artist.external_id);
                    window.open(t);
                },
                onClickThumbnail: G,
                channel: C,
                entry: R,
                headerIcons:
                    D === a.X.SPOTIFY
                        ? (0, i.jsx)(I.A, { onClick: x, Icon: _.A, "aria-label": N.intl.string(N.t["0ZB/XE"]) })
                        : null,
                userDescription: N.t.CcVI1T,
                title: v,
                subtitle: b,
                badges: (0, i.jsx)(p.mG, {
                    location: p.N5.POPOUT,
                    children: g.$u.map((e, t) => (0, i.jsx)(e, { entry: R }, t)),
                }),
            }),
            (0, i.jsx)(A.Eh, {
                children: (0, i.jsx)(A.fD, {
                    onReaction: O,
                    onVoiceChannelPreview: y,
                    user: w,
                    channel: C,
                    generateReactionImage: U,
                    reactionImageAltText:
                        ((t = R),
                        (n = w),
                        N.intl.formatToPlainString(N.t.Osmpr9, { username: n.username, artist: t.extra.artist.name })),
                    entry: R,
                }),
            }),
        ],
    });
};
