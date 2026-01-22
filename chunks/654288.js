n.d(t, { A: () => I }), n(747238), n(812715), n(866193);
var r = n(627968),
    i = n(64700),
    a = n(311907),
    s = n(397927),
    o = n(773669),
    l = n(287809),
    c = n(307600),
    u = n(562153),
    d = n(998218),
    f = n(939341),
    p = n(583846),
    _ = n(342652),
    h = n(434200),
    m = n(176563),
    g = n(514243),
    E = n(506326),
    b = n(910692),
    y = n(18282),
    O = n(652215),
    A = n(985018);
let v = (e, t, n) => {
        let r = A.t.LHF6D9,
            i = u.Ay.getName(null == t ? void 0 : t.guild_id, null == t ? void 0 : t.id, n),
            a = e.extra.media_title;
        return A.intl
            .formatToMarkdownString(r, {
                mediaTitle: a,
                userName: i,
                episodeDescription: e.extra.media_subtitle,
            })
            .replaceAll("*", "");
    },
    S = (e, t) =>
        A.intl.formatToPlainString(A.t.kCbfbN, {
            username: t.username,
            activity: e.extra.media_title,
        }),
    I = (e) => {
        let { channel: t, entry: n, onReaction: u, onVoiceChannelPreview: I } = e,
            T = (0, a.bG)([l.default], () => l.default.getUser(n.author_id)),
            { largeImage: C } = (0, f.nO)({ entry: n }),
            { primaryColor: N, secondaryColor: R } = (0, m.A)(null == C ? void 0 : C.src),
            w = (0, a.bG)([o.default], () => o.default.locale),
            P = (0, h.A)(O.fg2.CRUNCHYROLL),
            D = (0, p.kR)(n.extra.media_assets_large_text),
            x = i.useCallback(
                (e) => {
                    if (null != T && (null == C ? void 0 : C.src) != null)
                        return (0, _.z)({
                            entry: n,
                            mediaImageSrc: null == C ? void 0 : C.src,
                            avatarSrc: T.getAvatarURL(null == t ? void 0 : t.guild_id, 128),
                            description: v(n, t, T),
                            timestamp: (0, p.As)(n, w),
                            episodeDescription: D,
                            colors: [N, R],
                            channelId: e,
                        });
                },
                [t, n, D, w, null == C ? void 0 : C.src, N, R, T],
            ),
            L = () => {
                if (null == n.extra.url) return;
                let e = d.A.safeParseWithQuery(n.extra.url);
                null != e &&
                    null != e.protocol &&
                    null != e.hostname &&
                    (0, c.h)({
                        href: d.A.format(e),
                        trusted: !1,
                    });
            };
        return null == T
            ? null
            : (0, r.jsxs)(b.YN, {
                  children: [
                      (0, r.jsx)(b.BC, {
                          channel: t,
                          entry: n,
                          userDescription: (0, p.JM)(n) ? A.t["LH+Z3y"] : A.t.YuKgml,
                          title: n.extra.media_title,
                          subtitle: n.extra.media_subtitle,
                          headerIcons: (0, r.jsx)(y.A, {
                              onClick: P,
                              Icon: s.kwD,
                              "aria-label": A.intl.string(A.t.jdJYXw),
                          }),
                          badges: (0, r.jsx)(E.mG, {
                              location: E.N5.POPOUT,
                              children: g.R.map((e, t) => (0, r.jsx)(e, { entry: n }, t)),
                          }),
                          onClickTitle: L,
                          onClickThumbnail: L,
                      }),
                      (0, r.jsx)(b.Eh, {
                          children: (0, r.jsx)(b.fD, {
                              onReaction: u,
                              onVoiceChannelPreview: I,
                              user: T,
                              channel: t,
                              generateReactionImage: x,
                              reactionImageAltText: S(n, T),
                              entry: n,
                          }),
                      }),
                  ],
              });
    };
