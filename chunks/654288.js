"use strict";
n.d(t, { A: () => C });
var r = n(627968),
    i = n(64700),
    a = n(311907),
    s = n(397927),
    o = n(773669),
    l = n(287809),
    u = n(307600),
    c = n(562153),
    d = n(998218),
    _ = n(939341),
    f = n(583846),
    p = n(342652),
    h = n(434200),
    m = n(176563),
    g = n(514243),
    E = n(506326),
    A = n(910692),
    I = n(18282),
    T = n(652215),
    y = n(985018);
let S = (e, t, n) => {
        let r = y.t.LHF6D9,
            i = c.Ay.getName(t?.guild_id, t?.id, n),
            a = e.extra.media_title;
        return y.intl
            .formatToMarkdownString(r, { mediaTitle: a, userName: i, episodeDescription: e.extra.media_subtitle })
            .replaceAll("*", "");
    },
    v = (e, t) => y.intl.formatToPlainString(y.t.kCbfbN, { username: t.username, activity: e.extra.media_title }),
    C = (e) => {
        let { channel: t, entry: n, onReaction: c, onVoiceChannelPreview: C } = e,
            b = (0, a.bG)([l.default], () => l.default.getUser(n.author_id)),
            { largeImage: N } = (0, _.nO)({ entry: n }),
            { primaryColor: R, secondaryColor: O } = (0, m.A)(N?.src),
            D = (0, a.bG)([o.default], () => o.default.locale),
            L = (0, h.A)(T.fg2.CRUNCHYROLL),
            w = (0, f.kR)(n.extra.media_assets_large_text),
            x = i.useCallback(
                (e) => {
                    if (null != b && N?.src != null)
                        return (0, p.z)({
                            entry: n,
                            mediaImageSrc: N?.src,
                            avatarSrc: b.getAvatarURL(t?.guild_id, 128),
                            description: S(n, t, b),
                            timestamp: (0, f.As)(n, D),
                            episodeDescription: w,
                            colors: [R, O],
                            channelId: e,
                        });
                },
                [t, n, w, D, N?.src, R, O, b],
            ),
            P = () => {
                if (null == n.extra.url) return;
                let e = d.A.safeParseWithQuery(n.extra.url);
                null != e && null != e.protocol && null != e.hostname && (0, u.h)({ href: d.A.format(e), trusted: !1 });
            };
        return null == b
            ? null
            : (0, r.jsxs)(A.YN, {
                  children: [
                      (0, r.jsx)(A.BC, {
                          channel: t,
                          entry: n,
                          userDescription: (0, f.JM)(n) ? y.t["LH+Z3y"] : y.t.YuKgml,
                          title: n.extra.media_title,
                          subtitle: n.extra.media_subtitle,
                          headerIcons: (0, r.jsx)(I.A, {
                              onClick: L,
                              Icon: s.kwD,
                              "aria-label": y.intl.string(y.t.jdJYXw),
                          }),
                          badges: (0, r.jsx)(E.mG, {
                              location: E.N5.POPOUT,
                              children: g.R.map((e, t) => (0, r.jsx)(e, { entry: n }, t)),
                          }),
                          onClickTitle: P,
                          onClickThumbnail: P,
                      }),
                      (0, r.jsx)(A.Eh, {
                          children: (0, r.jsx)(A.fD, {
                              onReaction: c,
                              onVoiceChannelPreview: C,
                              user: b,
                              channel: t,
                              generateReactionImage: x,
                              reactionImageAltText: v(n, b),
                              entry: n,
                          }),
                      }),
                  ],
              });
    };
