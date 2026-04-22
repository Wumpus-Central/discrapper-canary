"use strict";
n.d(t, { A: () => y });
var i = n(627968),
    l = n(64700),
    s = n(56121),
    r = n(205327),
    a = n(311907),
    o = n(210528),
    c = n(287809),
    u = n(121090),
    d = n(403362),
    h = n(562153),
    m = n(583846),
    p = n(405310),
    f = n(434200),
    g = n(176563),
    _ = n(620708),
    x = n(506326),
    A = n(910692),
    C = n(18282),
    E = n(652215),
    I = n(272984),
    v = n(985018);
let y = (e) => {
    let t,
        n,
        { channel: y, entry: S, onReaction: b, onVoiceChannelPreview: N } = e,
        { parent_title: T, provider: j, image_url: R } = S.extra.media,
        w = S.extra.artist.name,
        L = (0, a.bG)([c.default], () => c.default.getUser(S.author_id)),
        { primaryColor: M, secondaryColor: k } = (0, g.A)(R),
        O = (0, m.TQ)(S),
        P = l.useCallback(() => {
            var e, t, n;
            let i, l, r;
            if (null == y || null == L || !(0, d.S1)(O, _.wE)) return;
            let a =
                ((e = S),
                (t = y),
                (n = L),
                (i = (function (e) {
                    if (e === s.j.WEEK) return v.t.SjOZfm;
                })(O)),
                (l = h.Ay.getName(t.guild_id, t.id, n)),
                (r = e.extra.artist.name),
                v.intl.formatToMarkdownString(i, { artist: r, userName: l }).replaceAll("*", ""));
            return (0, p.Lu)({
                user: L,
                channel: y,
                mediaImageSrc: R,
                artist: w,
                description: a,
                colors: [M, k],
                badges: (0, p.KR)(S),
            });
        }, [R, w, y, S, M, O, k, L]),
        D = (0, f.A)(E.fg2.SPOTIFY);
    if (null == L || !(0, d.S1)(O, _.wE)) return null;
    let U = () => {
        let e = I.M0.ALBUM,
            t = o.A.isProtocolRegistered()
                ? I.RQ.PLAYER_OPEN(e, S.extra.media.external_parent_id)
                : I.RQ.WEB_OPEN(e, S.extra.media.external_parent_id);
        window.open(t);
    };
    return (0, i.jsxs)(A.YN, {
        children: [
            (0, i.jsx)(A.BC, {
                onClickTitle: U,
                onClickSubtitle: () => {
                    let e = I.M0.ARTIST,
                        t = o.A.isProtocolRegistered()
                            ? I.RQ.PLAYER_OPEN(e, S.extra.artist.external_id)
                            : I.RQ.WEB_OPEN(e, S.extra.artist.external_id);
                    window.open(t);
                },
                onClickThumbnail: U,
                channel: y,
                entry: S,
                headerIcons:
                    j === r.X.SPOTIFY
                        ? (0, i.jsx)(C.A, { onClick: D, Icon: u.A, "aria-label": v.intl.string(v.t["0ZB/XE"]) })
                        : null,
                userDescription: v.t.CcVI1T,
                title: T,
                subtitle: w,
                badges: (0, i.jsx)(x.mG, {
                    location: x.N5.POPOUT,
                    children: _.$u.map((e, t) => (0, i.jsx)(e, { entry: S }, t)),
                }),
            }),
            (0, i.jsx)(A.Eh, {
                children: (0, i.jsx)(A.fD, {
                    onReaction: b,
                    onVoiceChannelPreview: N,
                    user: L,
                    channel: y,
                    generateReactionImage: P,
                    reactionImageAltText:
                        ((t = S),
                        (n = L),
                        v.intl.formatToPlainString(v.t.Osmpr9, { username: n.username, artist: t.extra.artist.name })),
                    entry: S,
                }),
            }),
        ],
    });
};
