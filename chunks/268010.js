n.d(t, { Z: () => N }), n(627494), n(757143), n(301563);
var r = n(200651),
    a = n(192379),
    l = n(442837),
    i = n(481060),
    o = n(706454),
    s = n(594174),
    c = n(49012),
    u = n(5192),
    d = n(591759),
    m = n(379357),
    p = n(561308),
    h = n(685270),
    f = n(31074),
    g = n(206295),
    x = n(335326),
    v = n(297781),
    y = n(591853),
    j = n(410441),
    P = n(981631),
    O = n(388032);
let b = (e, t, n) => {
        let r = O.t.LHF6Dw,
            a = u.ZP.getName(null == t ? void 0 : t.guild_id, null == t ? void 0 : t.id, n),
            l = e.extra.media_title;
        return O.NW.formatToMarkdownString(r, {
            mediaTitle: l,
            userName: a,
            episodeDescription: e.extra.media_subtitle
        }).replaceAll('*', '');
    },
    C = (e, t) =>
        O.NW.formatToPlainString(O.t.kCbfbG, {
            username: t.username,
            activity: e.extra.media_title
        }),
    N = (e) => {
        let { channel: t, entry: n, onReaction: u, onVoiceChannelPreview: N } = e,
            I = (0, l.e7)([s.default], () => s.default.getUser(n.author_id)),
            { largeImage: E } = (0, m.rv)({ entry: n }),
            { primaryColor: w, secondaryColor: Z } = (0, g.Z)(null == E ? void 0 : E.src),
            S = (0, l.e7)([o.default], () => o.default.locale),
            T = (0, f.Z)(P.ABu.CRUNCHYROLL),
            A = (0, p.ap)(n.extra.media_assets_large_text),
            _ = a.useCallback(
                (e) => {
                    if (null != I && (null == E ? void 0 : E.src) != null)
                        return (0, h.B)({
                            entry: n,
                            mediaImageSrc: null == E ? void 0 : E.src,
                            avatarSrc: I.getAvatarURL(null == t ? void 0 : t.guild_id, 128),
                            description: b(n, t, I),
                            timestamp: (0, p.yh)(n, S),
                            episodeDescription: A,
                            colors: [w, Z],
                            channelId: e
                        });
                },
                [t, n, A, S, null == E ? void 0 : E.src, w, Z, I]
            ),
            k = () => {
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
        return null == I
            ? null
            : (0, r.jsxs)(y.yR, {
                  children: [
                      (0, r.jsx)(y.wG, {
                          channel: t,
                          entry: n,
                          userDescription: (0, p.kr)(n) ? O.t['LH+Z39'] : O.t.YuKgmp,
                          title: n.extra.media_title,
                          subtitle: n.extra.media_subtitle,
                          headerIcons: (0, r.jsx)(j.Z, {
                              onClick: T,
                              Icon: i.omf,
                              'aria-label': O.NW.string(O.t.jdJYX1)
                          }),
                          badges: (0, r.jsx)(v.Gk, {
                              location: v.Gt.POPOUT,
                              children: x.t.map((e, t) => (0, r.jsx)(e, { entry: n }, t))
                          }),
                          onClickTitle: k,
                          onClickThumbnail: k
                      }),
                      (0, r.jsx)(y.St, {
                          children: (0, r.jsx)(y.WT, {
                              onReaction: u,
                              onVoiceChannelPreview: N,
                              user: I,
                              channel: t,
                              generateReactionImage: _,
                              reactionImageAltText: C(n, I),
                              entry: n
                          })
                      })
                  ]
              });
    };
