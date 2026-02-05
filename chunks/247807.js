"use strict";
n.d(t, { A: () => N });
var r = n(627968),
    i = n(64700),
    a = n(56121),
    s = n(205327),
    o = n(311907),
    l = n(210528),
    u = n(287809),
    c = n(121090),
    d = n(403362),
    _ = n(562153),
    f = n(583846),
    p = n(405310),
    h = n(434200),
    m = n(176563),
    g = n(620708),
    E = n(506326),
    A = n(910692),
    I = n(18282),
    T = n(652215),
    y = n(272984),
    S = n(985018);
function v(e) {
    if (e === a.j.WEEK) return S.t.SjOZfm;
}
let C = (e, t, n, r) => {
        let i = v(r),
            a = _.Ay.getName(t.guild_id, t.id, n),
            s = e.extra.artist.name;
        return S.intl.formatToMarkdownString(i, { artist: s, userName: a }).replaceAll("*", "");
    },
    b = (e, t) => S.intl.formatToPlainString(S.t.Osmpr9, { username: t.username, artist: e.extra.artist.name }),
    N = (e) => {
        let { channel: t, entry: n, onReaction: a, onVoiceChannelPreview: _ } = e,
            { parent_title: v, provider: N, image_url: R } = n.extra.media,
            O = n.extra.artist.name,
            D = (0, o.bG)([u.default], () => u.default.getUser(n.author_id)),
            { primaryColor: L, secondaryColor: w } = (0, m.A)(R),
            x = (0, f.TQ)(n),
            P = i.useCallback(() => {
                if (null == t || null == D || !(0, d.S1)(x, g.wE)) return;
                let e = C(n, t, D, x);
                return (0, p.Lu)({
                    user: D,
                    channel: t,
                    mediaImageSrc: R,
                    artist: O,
                    description: e,
                    colors: [L, w],
                    badges: (0, p.KR)(n),
                });
            }, [R, O, t, n, L, x, w, D]),
            M = (0, h.A)(T.fg2.SPOTIFY);
        if (null == D || !(0, d.S1)(x, g.wE)) return null;
        let k = () => {
                let e = y.M0.ALBUM,
                    t = l.A.isProtocolRegistered()
                        ? y.RQ.PLAYER_OPEN(e, n.extra.media.external_parent_id)
                        : y.RQ.WEB_OPEN(e, n.extra.media.external_parent_id);
                window.open(t);
            },
            U = () => {
                let e = y.M0.ARTIST,
                    t = l.A.isProtocolRegistered()
                        ? y.RQ.PLAYER_OPEN(e, n.extra.artist.external_id)
                        : y.RQ.WEB_OPEN(e, n.extra.artist.external_id);
                window.open(t);
            };
        return (0, r.jsxs)(A.YN, {
            children: [
                (0, r.jsx)(A.BC, {
                    onClickTitle: k,
                    onClickSubtitle: U,
                    onClickThumbnail: k,
                    channel: t,
                    entry: n,
                    headerIcons:
                        N === s.X.SPOTIFY
                            ? (0, r.jsx)(I.A, { onClick: M, Icon: c.A, "aria-label": S.intl.string(S.t["0ZB/XE"]) })
                            : null,
                    userDescription: S.t.CcVI1T,
                    title: v,
                    subtitle: O,
                    badges: (0, r.jsx)(E.mG, {
                        location: E.N5.POPOUT,
                        children: g.$u.map((e, t) => (0, r.jsx)(e, { entry: n }, t)),
                    }),
                }),
                (0, r.jsx)(A.Eh, {
                    children: (0, r.jsx)(A.fD, {
                        onReaction: a,
                        onVoiceChannelPreview: _,
                        user: D,
                        channel: t,
                        generateReactionImage: P,
                        reactionImageAltText: b(n, D),
                        entry: n,
                    }),
                }),
            ],
        });
    };
