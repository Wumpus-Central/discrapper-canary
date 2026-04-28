"use strict";
n.d(t, { A: () => y });
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
    _ = n(620708),
    x = n(506326),
    C = n(236812),
    A = n(18282),
    E = n(652215),
    I = n(272984),
    v = n(985018);
let y = (e) => {
    let t,
        n,
        { channel: y, entry: b, onReaction: S, onVoiceChannelPreview: N } = e,
        { parent_title: j, provider: T, image_url: w } = b.extra.media,
        R = b.extra.artist.name,
        L = (0, r.bG)([c.default], () => c.default.getUser(b.author_id)),
        { primaryColor: k, secondaryColor: O } = (0, g.A)(w),
        M = (0, m.TQ)(b),
        P = i.useCallback(() => {
            var e, t, n;
            let l, i, a;
            if (null == y || null == L || !(0, d.S1)(M, _.wE)) return;
            let r =
                ((e = b),
                (t = y),
                (n = L),
                (l = (function (e) {
                    if (e === s.j.WEEK) return v.t.SjOZfm;
                })(M)),
                (i = h.Ay.getName(t.guild_id, t.id, n)),
                (a = e.extra.artist.name),
                v.intl.formatToMarkdownString(l, { artist: a, userName: i }).replaceAll("*", ""));
            return (0, p.Lu)({
                user: L,
                channel: y,
                mediaImageSrc: w,
                artist: R,
                description: r,
                colors: [k, O],
                badges: (0, p.KR)(b),
            });
        }, [w, R, y, b, k, M, O, L]),
        D = (0, f.A)(E.fg2.SPOTIFY);
    if (null == L || !(0, d.S1)(M, _.wE)) return null;
    let U = () => {
        let e = I.M0.ALBUM,
            t = o.A.isProtocolRegistered()
                ? I.RQ.PLAYER_OPEN(e, b.extra.media.external_parent_id)
                : I.RQ.WEB_OPEN(e, b.extra.media.external_parent_id);
        window.open(t);
    };
    return (0, l.jsxs)(C.YN, {
        children: [
            (0, l.jsx)(C.BC, {
                onClickTitle: U,
                onClickSubtitle: () => {
                    let e = I.M0.ARTIST,
                        t = o.A.isProtocolRegistered()
                            ? I.RQ.PLAYER_OPEN(e, b.extra.artist.external_id)
                            : I.RQ.WEB_OPEN(e, b.extra.artist.external_id);
                    window.open(t);
                },
                onClickThumbnail: U,
                channel: y,
                entry: b,
                headerIcons:
                    T === a.X.SPOTIFY
                        ? (0, l.jsx)(A.A, { onClick: D, Icon: u.A, "aria-label": v.intl.string(v.t["0ZB/XE"]) })
                        : null,
                userDescription: v.t.CcVI1T,
                title: j,
                subtitle: R,
                badges: (0, l.jsx)(x.mG, {
                    location: x.N5.POPOUT,
                    children: _.$u.map((e, t) => (0, l.jsx)(e, { entry: b }, t)),
                }),
            }),
            (0, l.jsx)(C.Eh, {
                children: (0, l.jsx)(C.fD, {
                    onReaction: S,
                    onVoiceChannelPreview: N,
                    user: L,
                    channel: y,
                    generateReactionImage: P,
                    reactionImageAltText:
                        ((t = b),
                        (n = L),
                        v.intl.formatToPlainString(v.t.Osmpr9, { username: n.username, artist: t.extra.artist.name })),
                    entry: b,
                }),
            }),
        ],
    });
};
