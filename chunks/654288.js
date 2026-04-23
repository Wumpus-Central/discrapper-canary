"use strict";
n.d(t, { A: () => y });
var r = n(627968),
    i = n(64700),
    s = n(311907),
    a = n(347306),
    o = n(773669),
    l = n(287809),
    u = n(307600),
    c = n(562153),
    d = n(998218),
    _ = n(939341),
    f = n(583846),
    p = n(342652),
    h = n(434200),
    E = n(176563),
    m = n(514243),
    g = n(506326),
    A = n(910692),
    I = n(18282),
    T = n(652215),
    S = n(985018);
let y = (e) => {
    let t,
        n,
        { channel: y, entry: N, onReaction: v, onVoiceChannelPreview: C } = e,
        O = (0, s.bG)([l.default], () => l.default.getUser(N.author_id)),
        { largeImage: R } = (0, _.nO)({ entry: N }),
        { primaryColor: b, secondaryColor: D } = (0, E.A)(R?.src),
        L = (0, s.bG)([o.default], () => o.default.locale),
        w = (0, h.A)(T.fg2.CRUNCHYROLL),
        M = (0, f.kR)(N.extra.media_assets_large_text),
        P = i.useCallback(
            (e) => {
                if (null != O && R?.src != null) {
                    var t, n, r;
                    let i, s, a;
                    return (0, p.z)({
                        entry: N,
                        mediaImageSrc: R?.src,
                        avatarSrc: O.getAvatarURL(y?.guild_id, 128),
                        description:
                            ((t = N),
                            (n = y),
                            (r = O),
                            (i = S.t.LHF6D9),
                            (s = c.Ay.getName(n?.guild_id, n?.id, r)),
                            (a = t.extra.media_title),
                            S.intl
                                .formatToMarkdownString(i, {
                                    mediaTitle: a,
                                    userName: s,
                                    episodeDescription: t.extra.media_subtitle,
                                })
                                .replaceAll("*", "")),
                        timestamp: (0, f.As)(N, L),
                        episodeDescription: M,
                        colors: [b, D],
                        channelId: e,
                    });
                }
            },
            [y, N, M, L, R?.src, b, D, O],
        ),
        x = () => {
            if (null == N.extra.url) return;
            let e = d.A.safeParseWithQuery(N.extra.url);
            null != e && null != e.protocol && null != e.hostname && (0, u.h)({ href: d.A.format(e), trusted: !1 });
        };
    return null == O
        ? null
        : (0, r.jsxs)(A.YN, {
              children: [
                  (0, r.jsx)(A.BC, {
                      channel: y,
                      entry: N,
                      userDescription: (0, f.JM)(N) ? S.t["LH+Z3y"] : S.t.YuKgml,
                      title: N.extra.media_title,
                      subtitle: N.extra.media_subtitle,
                      headerIcons: (0, r.jsx)(I.A, { onClick: w, Icon: a.k, "aria-label": S.intl.string(S.t.jdJYXw) }),
                      badges: (0, r.jsx)(g.mG, {
                          location: g.N5.POPOUT,
                          children: m.R.map((e, t) => (0, r.jsx)(e, { entry: N }, t)),
                      }),
                      onClickTitle: x,
                      onClickThumbnail: x,
                  }),
                  (0, r.jsx)(A.Eh, {
                      children: (0, r.jsx)(A.fD, {
                          onReaction: v,
                          onVoiceChannelPreview: C,
                          user: O,
                          channel: y,
                          generateReactionImage: P,
                          reactionImageAltText:
                              ((t = N),
                              (n = O),
                              S.intl.formatToPlainString(S.t.kCbfbN, {
                                  username: n.username,
                                  activity: t.extra.media_title,
                              })),
                          entry: N,
                      }),
                  }),
              ],
          });
};
