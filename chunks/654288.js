"use strict";
n.d(t, { A: () => v });
var i = n(627968),
    l = n(64700),
    s = n(311907),
    r = n(347306),
    a = n(773669),
    o = n(287809),
    c = n(307600),
    u = n(562153),
    d = n(998218),
    h = n(939341),
    m = n(583846),
    p = n(342652),
    f = n(434200),
    g = n(176563),
    _ = n(514243),
    x = n(506326),
    A = n(910692),
    C = n(18282),
    E = n(652215),
    I = n(985018);
let v = (e) => {
    let t,
        n,
        { channel: v, entry: y, onReaction: S, onVoiceChannelPreview: b } = e,
        N = (0, s.bG)([o.default], () => o.default.getUser(y.author_id)),
        { largeImage: T } = (0, h.nO)({ entry: y }),
        { primaryColor: j, secondaryColor: R } = (0, g.A)(T?.src),
        w = (0, s.bG)([a.default], () => a.default.locale),
        L = (0, f.A)(E.fg2.CRUNCHYROLL),
        M = (0, m.kR)(y.extra.media_assets_large_text),
        k = l.useCallback(
            (e) => {
                if (null != N && T?.src != null) {
                    var t, n, i;
                    let l, s, r;
                    return (0, p.z)({
                        entry: y,
                        mediaImageSrc: T?.src,
                        avatarSrc: N.getAvatarURL(v?.guild_id, 128),
                        description:
                            ((t = y),
                            (n = v),
                            (i = N),
                            (l = I.t.LHF6D9),
                            (s = u.Ay.getName(n?.guild_id, n?.id, i)),
                            (r = t.extra.media_title),
                            I.intl
                                .formatToMarkdownString(l, {
                                    mediaTitle: r,
                                    userName: s,
                                    episodeDescription: t.extra.media_subtitle,
                                })
                                .replaceAll("*", "")),
                        timestamp: (0, m.As)(y, w),
                        episodeDescription: M,
                        colors: [j, R],
                        channelId: e,
                    });
                }
            },
            [v, y, M, w, T?.src, j, R, N],
        ),
        O = () => {
            if (null == y.extra.url) return;
            let e = d.A.safeParseWithQuery(y.extra.url);
            null != e && null != e.protocol && null != e.hostname && (0, c.h)({ href: d.A.format(e), trusted: !1 });
        };
    return null == N
        ? null
        : (0, i.jsxs)(A.YN, {
              children: [
                  (0, i.jsx)(A.BC, {
                      channel: v,
                      entry: y,
                      userDescription: (0, m.JM)(y) ? I.t["LH+Z3y"] : I.t.YuKgml,
                      title: y.extra.media_title,
                      subtitle: y.extra.media_subtitle,
                      headerIcons: (0, i.jsx)(C.A, { onClick: L, Icon: r.k, "aria-label": I.intl.string(I.t.jdJYXw) }),
                      badges: (0, i.jsx)(x.mG, {
                          location: x.N5.POPOUT,
                          children: _.R.map((e, t) => (0, i.jsx)(e, { entry: y }, t)),
                      }),
                      onClickTitle: O,
                      onClickThumbnail: O,
                  }),
                  (0, i.jsx)(A.Eh, {
                      children: (0, i.jsx)(A.fD, {
                          onReaction: S,
                          onVoiceChannelPreview: b,
                          user: N,
                          channel: v,
                          generateReactionImage: k,
                          reactionImageAltText:
                              ((t = y),
                              (n = N),
                              I.intl.formatToPlainString(I.t.kCbfbN, {
                                  username: n.username,
                                  activity: t.extra.media_title,
                              })),
                          entry: y,
                      }),
                  }),
              ],
          });
};
