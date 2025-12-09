n.d(t, { Z: () => T }), n(804061), n(704826), n(35282);
var r = n(54381),
    i = n(473749),
    a = n(442837),
    o = n(481060),
    s = n(706454),
    l = n(594174),
    c = n(49012),
    u = n(5192),
    d = n(591759),
    f = n(379357),
    p = n(561308),
    _ = n(685270),
    m = n(31074),
    h = n(206295),
    g = n(335326),
    E = n(297781),
    b = n(591853),
    y = n(410441),
    O = n(981631),
    v = n(388032);
let S = (e, t, n) => {
        let r = v.t.LHF6D9,
            i = u.ZP.getName(null == t ? void 0 : t.guild_id, null == t ? void 0 : t.id, n),
            a = e.extra.media_title;
        return v.intl
            .formatToMarkdownString(r, {
                mediaTitle: a,
                userName: i,
                episodeDescription: e.extra.media_subtitle,
            })
            .replaceAll("*", "");
    },
    I = (e, t) =>
        v.intl.formatToPlainString(v.t.kCbfbN, {
            username: t.username,
            activity: e.extra.media_title,
        }),
    T = (e) => {
        let { channel: t, entry: n, onReaction: u, onVoiceChannelPreview: T } = e,
            A = (0, a.e7)([l.default], () => l.default.getUser(n.author_id)),
            { largeImage: C } = (0, f.rv)({ entry: n }),
            { primaryColor: N, secondaryColor: P } = (0, h.Z)(null == C ? void 0 : C.src),
            R = (0, a.e7)([s.default], () => s.default.locale),
            D = (0, m.Z)(O.ABu.CRUNCHYROLL),
            w = (0, p.ap)(n.extra.media_assets_large_text),
            x = i.useCallback(
                (e) => {
                    if (null != A && (null == C ? void 0 : C.src) != null)
                        return (0, _.B)({
                            entry: n,
                            mediaImageSrc: null == C ? void 0 : C.src,
                            avatarSrc: A.getAvatarURL(null == t ? void 0 : t.guild_id, 128),
                            description: S(n, t, A),
                            timestamp: (0, p.yh)(n, R),
                            episodeDescription: w,
                            colors: [N, P],
                            channelId: e,
                        });
                },
                [t, n, w, R, null == C ? void 0 : C.src, N, P, A],
            ),
            L = () => {
                if (null == n.extra.url) return;
                let e = d.Z.safeParseWithQuery(n.extra.url);
                null != e &&
                    null != e.protocol &&
                    null != e.hostname &&
                    (0, c.q)({
                        href: d.Z.format(e),
                        trusted: !1,
                    });
            };
        return null == A
            ? null
            : (0, r.jsxs)(b.yR, {
                  children: [
                      (0, r.jsx)(b.wG, {
                          channel: t,
                          entry: n,
                          userDescription: (0, p.kr)(n) ? v.t["LH+Z3y"] : v.t.YuKgml,
                          title: n.extra.media_title,
                          subtitle: n.extra.media_subtitle,
                          headerIcons: (0, r.jsx)(y.Z, {
                              onClick: D,
                              Icon: o.omf,
                              "aria-label": v.intl.string(v.t.jdJYXw),
                          }),
                          badges: (0, r.jsx)(E.Gk, {
                              location: E.Gt.POPOUT,
                              children: g.t.map((e, t) => (0, r.jsx)(e, { entry: n }, t)),
                          }),
                          onClickTitle: L,
                          onClickThumbnail: L,
                      }),
                      (0, r.jsx)(b.St, {
                          children: (0, r.jsx)(b.WT, {
                              onReaction: u,
                              onVoiceChannelPreview: T,
                              user: A,
                              channel: t,
                              generateReactionImage: x,
                              reactionImageAltText: I(n, A),
                              entry: n,
                          }),
                      }),
                  ],
              });
    };
