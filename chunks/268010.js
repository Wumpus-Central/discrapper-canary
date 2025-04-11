n.d(t, { Z: () => T }), n(804061), n(704826), n(35282);
var r = n(200651),
    i = n(192379),
    o = n(442837),
    a = n(481060),
    s = n(706454),
    l = n(594174),
    c = n(49012),
    u = n(5192),
    d = n(591759),
    f = n(379357),
    _ = n(561308),
    p = n(685270),
    h = n(31074),
    m = n(206295),
    g = n(335326),
    E = n(297781),
    b = n(591853),
    y = n(410441),
    v = n(981631),
    O = n(388032);
let I = (e, t, n) => {
        let r = O.t.LHF6Dw,
            i = u.ZP.getName(null == t ? void 0 : t.guild_id, null == t ? void 0 : t.id, n),
            o = e.extra.media_title;
        return O.NW.formatToMarkdownString(r, {
            mediaTitle: o,
            userName: i,
            episodeDescription: e.extra.media_subtitle
        }).replaceAll('*', '');
    },
    S = (e, t) =>
        O.NW.formatToPlainString(O.t.kCbfbG, {
            username: t.username,
            activity: e.extra.media_title
        }),
    T = (e) => {
        let { channel: t, entry: n, onReaction: u, onVoiceChannelPreview: T } = e,
            N = (0, o.e7)([l.default], () => l.default.getUser(n.author_id)),
            { largeImage: A } = (0, f.rv)({ entry: n }),
            { primaryColor: C, secondaryColor: P } = (0, m.Z)(null == A ? void 0 : A.src),
            R = (0, o.e7)([s.default], () => s.default.locale),
            w = (0, h.Z)(v.ABu.CRUNCHYROLL),
            D = (0, _.ap)(n.extra.media_assets_large_text),
            L = i.useCallback(
                (e) => {
                    if (null != N && (null == A ? void 0 : A.src) != null)
                        return (0, p.B)({
                            entry: n,
                            mediaImageSrc: null == A ? void 0 : A.src,
                            avatarSrc: N.getAvatarURL(null == t ? void 0 : t.guild_id, 128),
                            description: I(n, t, N),
                            timestamp: (0, _.yh)(n, R),
                            episodeDescription: D,
                            colors: [C, P],
                            channelId: e
                        });
                },
                [t, n, D, R, null == A ? void 0 : A.src, C, P, N]
            ),
            x = () => {
                if (null == n.extra.url) return;
                let e = d.Z.safeParseWithQuery(n.extra.url);
                null != e &&
                    null != e.protocol &&
                    null != e.hostname &&
                    (0, c.q)({
                        href: d.Z.format(e),
                        trusted: !1
                    });
            };
        return null == N
            ? null
            : (0, r.jsxs)(b.yR, {
                  children: [
                      (0, r.jsx)(b.wG, {
                          channel: t,
                          entry: n,
                          userDescription: (0, _.kr)(n) ? O.t['LH+Z39'] : O.t.YuKgmp,
                          title: n.extra.media_title,
                          subtitle: n.extra.media_subtitle,
                          headerIcons: (0, r.jsx)(y.Z, {
                              onClick: w,
                              Icon: a.omf,
                              'aria-label': O.NW.string(O.t.jdJYX1)
                          }),
                          badges: (0, r.jsx)(E.Gk, {
                              location: E.Gt.POPOUT,
                              children: g.t.map((e, t) => (0, r.jsx)(e, { entry: n }, t))
                          }),
                          onClickTitle: x,
                          onClickThumbnail: x
                      }),
                      (0, r.jsx)(b.St, {
                          children: (0, r.jsx)(b.WT, {
                              onReaction: u,
                              onVoiceChannelPreview: T,
                              user: N,
                              channel: t,
                              generateReactionImage: L,
                              reactionImageAltText: S(n, N),
                              entry: n
                          })
                      })
                  ]
              });
    };
