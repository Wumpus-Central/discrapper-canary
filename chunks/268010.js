n.d(t, { Z: () => T }), n(804061), n(704826), n(35282);
var r = n(255367),
    i = n(73800),
    a = n(442837),
    o = n(481060),
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
    O = n(981631),
    v = n(388032);
let I = (e, t, n) => {
        let r = v.t.LHF6Dw,
            i = u.ZP.getName(null == t ? void 0 : t.guild_id, null == t ? void 0 : t.id, n),
            a = e.extra.media_title;
        return v.intl
            .formatToMarkdownString(r, {
                mediaTitle: a,
                userName: i,
                episodeDescription: e.extra.media_subtitle
            })
            .replaceAll('*', '');
    },
    S = (e, t) =>
        v.intl.formatToPlainString(v.t.kCbfbG, {
            username: t.username,
            activity: e.extra.media_title
        }),
    T = (e) => {
        let { channel: t, entry: n, onReaction: u, onVoiceChannelPreview: T } = e,
            A = (0, a.e7)([l.default], () => l.default.getUser(n.author_id)),
            { largeImage: N } = (0, f.rv)({ entry: n }),
            { primaryColor: C, secondaryColor: R } = (0, m.Z)(null == N ? void 0 : N.src),
            P = (0, a.e7)([s.default], () => s.default.locale),
            w = (0, h.Z)(O.ABu.CRUNCHYROLL),
            D = (0, _.ap)(n.extra.media_assets_large_text),
            L = i.useCallback(
                (e) => {
                    if (null != A && (null == N ? void 0 : N.src) != null)
                        return (0, p.B)({
                            entry: n,
                            mediaImageSrc: null == N ? void 0 : N.src,
                            avatarSrc: A.getAvatarURL(null == t ? void 0 : t.guild_id, 128),
                            description: I(n, t, A),
                            timestamp: (0, _.yh)(n, P),
                            episodeDescription: D,
                            colors: [C, R],
                            channelId: e
                        });
                },
                [t, n, D, P, null == N ? void 0 : N.src, C, R, A]
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
        return null == A
            ? null
            : (0, r.jsxs)(b.yR, {
                  children: [
                      (0, r.jsx)(b.wG, {
                          channel: t,
                          entry: n,
                          userDescription: (0, _.kr)(n) ? v.t['LH+Z39'] : v.t.YuKgmp,
                          title: n.extra.media_title,
                          subtitle: n.extra.media_subtitle,
                          headerIcons: (0, r.jsx)(y.Z, {
                              onClick: w,
                              Icon: o.omf,
                              'aria-label': v.intl.string(v.t.jdJYX1)
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
                              user: A,
                              channel: t,
                              generateReactionImage: L,
                              reactionImageAltText: S(n, A),
                              entry: n
                          })
                      })
                  ]
              });
    };
