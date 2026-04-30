"use strict";
n.d(t, { A: () => S });
var l = n(627968),
    i = n(64700),
    s = n(56121),
    a = n(205327),
    r = n(17928),
    o = n(210528),
    c = n(287809),
    u = n(121090),
    d = n(403362),
    h = n(562153),
    m = n(583846),
    p = n(405310),
    f = n(434200),
    g = n(140651),
    x = n(620708),
    C = n(506326),
    A = n(236812),
    E = n(18282),
    I = n(652215),
    y = n(272984),
    v = n(985018);
let S = (e) => {
    let t,
        n,
        { channel: S, entry: N, onReaction: j, onVoiceChannelPreview: _ } = e,
        { parent_title: T, provider: b, image_url: R } = N.extra.media,
        O = N.extra.artist.name,
        L = (0, r.bG)([c.default], () => c.default.getUser(N.author_id)),
        { primaryColor: w, secondaryColor: M } = (0, g.A)(R),
        k = (0, m.TQ)(N),
        P = i.useCallback(() => {
            var e, t, n;
            let l, i, a;
            if (null == S || null == L || !(0, d.S1)(k, x.wE)) return;
            let r =
                ((e = N),
                (t = S),
                (n = L),
                (l = (function (e) {
                    if (e === s.j.WEEK) return v.t.SjOZfm;
                })(k)),
                (i = h.Ay.getName(t.guild_id, t.id, n)),
                (a = e.extra.artist.name),
                v.intl.formatToMarkdownString(l, { artist: a, userName: i }).replaceAll("*", ""));
            return (0, p.Lu)({
                user: L,
                channel: S,
                mediaImageSrc: R,
                artist: O,
                description: r,
                colors: [w, M],
                badges: (0, p.KR)(N),
            });
        }, [R, O, S, N, w, k, M, L]),
        D = (0, f.A)(I.fg2.SPOTIFY);
    if (null == L || !(0, d.S1)(k, x.wE)) return null;
    let U = () => {
        let e = y.M0.ALBUM,
            t = o.A.isProtocolRegistered()
                ? y.RQ.PLAYER_OPEN(e, N.extra.media.external_parent_id)
                : y.RQ.WEB_OPEN(e, N.extra.media.external_parent_id);
        window.open(t);
    };
    return (0, l.jsxs)(A.YN, {
        children: [
            (0, l.jsx)(A.BC, {
                onClickTitle: U,
                onClickSubtitle: () => {
                    let e = y.M0.ARTIST,
                        t = o.A.isProtocolRegistered()
                            ? y.RQ.PLAYER_OPEN(e, N.extra.artist.external_id)
                            : y.RQ.WEB_OPEN(e, N.extra.artist.external_id);
                    window.open(t);
                },
                onClickThumbnail: U,
                channel: S,
                entry: N,
                headerIcons:
                    b === a.X.SPOTIFY
                        ? (0, l.jsx)(E.A, { onClick: D, Icon: u.A, "aria-label": v.intl.string(v.t["0ZB/XE"]) })
                        : null,
                userDescription: v.t.CcVI1T,
                title: T,
                subtitle: O,
                badges: (0, l.jsx)(C.mG, {
                    location: C.N5.POPOUT,
                    children: x.$u.map((e, t) => (0, l.jsx)(e, { entry: N }, t)),
                }),
            }),
            (0, l.jsx)(A.Eh, {
                children: (0, l.jsx)(A.fD, {
                    onReaction: j,
                    onVoiceChannelPreview: _,
                    user: L,
                    channel: S,
                    generateReactionImage: P,
                    reactionImageAltText:
                        ((t = N),
                        (n = L),
                        v.intl.formatToPlainString(v.t.Osmpr9, { username: n.username, artist: t.extra.artist.name })),
                    entry: N,
                }),
            }),
        ],
    });
};
