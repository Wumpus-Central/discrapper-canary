n.d(t, {
    A: () => C,
}),
    n(747238),
    n(812715),
    n(866193);
var r = n(627968),
    i = n(64700),
    a = n(56121),
    s = n(205327),
    o = n(311907),
    l = n(210528),
    c = n(287809),
    u = n(121090),
    d = n(403362),
    f = n(562153),
    p = n(583846),
    _ = n(405310),
    h = n(434200),
    m = n(176563),
    g = n(620708),
    E = n(506326),
    b = n(910692),
    y = n(18282),
    O = n(652215),
    A = n(272984),
    v = n(985018);

function S(e) {
    if (e === a.j.WEEK) return v.t.SjOZfm;
}
let I = (e, t, n, r) => {
        let i = S(r),
            a = f.Ay.getName(t.guild_id, t.id, n),
            s = e.extra.artist.name;
        return v.intl
            .formatToMarkdownString(i, {
                artist: s,
                userName: a,
            })
            .replaceAll("*", "");
    },
    T = (e, t) =>
        v.intl.formatToPlainString(v.t.Osmpr9, {
            username: t.username,
            artist: e.extra.artist.name,
        }),
    C = (e) => {
        let { channel: t, entry: n, onReaction: a, onVoiceChannelPreview: f } = e,
            { parent_title: S, provider: C, image_url: N } = n.extra.media,
            R = n.extra.artist.name,
            w = (0, o.bG)([c.default], () => c.default.getUser(n.author_id)),
            { primaryColor: P, secondaryColor: D } = (0, m.A)(N),
            x = (0, p.TQ)(n),
            L = i.useCallback(() => {
                if (null == t || null == w || !(0, d.S1)(x, g.wE)) return;
                let e = I(n, t, w, x);
                return (0, _.Lu)({
                    user: w,
                    channel: t,
                    mediaImageSrc: N,
                    artist: R,
                    description: e,
                    colors: [P, D],
                    badges: (0, _.KR)(n),
                });
            }, [N, R, t, n, P, x, D, w]),
            j = (0, h.A)(O.fg2.SPOTIFY);
        if (null == w || !(0, d.S1)(x, g.wE)) return null;
        let M = () => {
                let e = A.M0.ALBUM,
                    t = l.A.isProtocolRegistered()
                        ? A.RQ.PLAYER_OPEN(e, n.extra.media.external_parent_id)
                        : A.RQ.WEB_OPEN(e, n.extra.media.external_parent_id);
                window.open(t);
            },
            k = () => {
                let e = A.M0.ARTIST,
                    t = l.A.isProtocolRegistered()
                        ? A.RQ.PLAYER_OPEN(e, n.extra.artist.external_id)
                        : A.RQ.WEB_OPEN(e, n.extra.artist.external_id);
                window.open(t);
            };
        return (0, r.jsxs)(b.YN, {
            children: [
                (0, r.jsx)(b.BC, {
                    onClickTitle: M,
                    onClickSubtitle: k,
                    onClickThumbnail: M,
                    channel: t,
                    entry: n,
                    headerIcons:
                        C === s.X.SPOTIFY
                            ? (0, r.jsx)(y.A, {
                                  onClick: j,
                                  Icon: u.A,
                                  "aria-label": v.intl.string(v.t["0ZB/XE"]),
                              })
                            : null,
                    userDescription: v.t.CcVI1T,
                    title: S,
                    subtitle: R,
                    badges: (0, r.jsx)(E.mG, {
                        location: E.N5.POPOUT,
                        children: g.$u.map((e, t) =>
                            (0, r.jsx)(
                                e,
                                {
                                    entry: n,
                                },
                                t,
                            ),
                        ),
                    }),
                }),
                (0, r.jsx)(b.Eh, {
                    children: (0, r.jsx)(b.fD, {
                        onReaction: a,
                        onVoiceChannelPreview: f,
                        user: w,
                        channel: t,
                        generateReactionImage: L,
                        reactionImageAltText: T(n, w),
                        entry: n,
                    }),
                }),
            ],
        });
    };
