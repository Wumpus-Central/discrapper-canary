n.d(t, { Z: () => Z }), n(627494), n(757143);
var a = n(200651),
    l = n(192379),
    i = n(442837),
    r = n(481060),
    o = n(706454),
    s = n(594174),
    c = n(49012),
    d = n(5192),
    u = n(591759),
    m = n(379357),
    x = n(561308),
    h = n(685270),
    p = n(31074),
    g = n(206295),
    v = n(335326),
    C = n(297781),
    N = n(591853),
    j = n(410441),
    I = n(981631),
    f = n(388032);
let P = (e, t, n) => {
        let a = f.t.LHF6Dw,
            l = d.ZP.getName(null == t ? void 0 : t.guild_id, null == t ? void 0 : t.id, n),
            i = e.extra.media_title;
        return f.NW.formatToMarkdownString(a, {
            mediaTitle: i,
            userName: l,
            episodeDescription: e.extra.media_subtitle
        }).replaceAll('*', '');
    },
    y = (e, t) =>
        f.NW.formatToPlainString(f.t.kCbfbG, {
            username: t.username,
            activity: e.extra.media_title
        }),
    Z = (e) => {
        let { channel: t, entry: n, onReaction: d, onVoiceChannelPreview: Z } = e,
            T = (0, i.e7)([s.default], () => s.default.getUser(n.author_id)),
            { largeImage: A } = (0, m.rv)({ entry: n }),
            { primaryColor: E, secondaryColor: _ } = (0, g.Z)(null == A ? void 0 : A.src),
            S = (0, i.e7)([o.default], () => o.default.locale),
            R = (0, p.Z)(I.ABu.CRUNCHYROLL),
            k = (0, x.ap)(n.extra.media_assets_large_text),
            w = l.useCallback(
                (e) => {
                    if (null != T && (null == A ? void 0 : A.src) != null)
                        return (0, h.B)({
                            entry: n,
                            mediaImageSrc: null == A ? void 0 : A.src,
                            avatarSrc: T.getAvatarURL(null == t ? void 0 : t.guild_id, 128),
                            description: P(n, t, T),
                            timestamp: (0, x.yh)(n, S),
                            episodeDescription: k,
                            colors: [E, _],
                            channelId: e
                        });
                },
                [t, n, k, S, null == A ? void 0 : A.src, E, _, T]
            ),
            O = () => {
                if (null == n.extra.url) return;
                let e = u.Z.safeParseWithQuery(n.extra.url);
                null != e &&
                    null != e.protocol &&
                    null != e.hostname &&
                    (0, c.q)({
                        href: u.Z.format(e),
                        trusted: !1
                    });
            };
        return null == T
            ? null
            : (0, a.jsxs)(N.yR, {
                  children: [
                      (0, a.jsx)(N.wG, {
                          channel: t,
                          entry: n,
                          userDescription: (0, x.kr)(n) ? f.t['LH+Z39'] : f.t.YuKgmp,
                          title: n.extra.media_title,
                          subtitle: n.extra.media_subtitle,
                          headerIcons: (0, a.jsx)(j.Z, {
                              onClick: R,
                              Icon: r.omf,
                              'aria-label': f.NW.string(f.t.jdJYX1)
                          }),
                          badges: (0, a.jsx)(C.Gk, {
                              location: C.Gt.POPOUT,
                              children: v.t.map((e, t) => (0, a.jsx)(e, { entry: n }, t))
                          }),
                          onClickTitle: O,
                          onClickThumbnail: O
                      }),
                      (0, a.jsx)(N.St, {
                          children: (0, a.jsx)(N.WT, {
                              onReaction: d,
                              onVoiceChannelPreview: Z,
                              user: T,
                              channel: t,
                              generateReactionImage: w,
                              reactionImageAltText: y(n, T),
                              entry: n
                          })
                      })
                  ]
              });
    };
