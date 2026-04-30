"use strict";
n.d(t, { A: () => T });
var l = n(627968),
    i = n(64700),
    s = n(17928),
    a = n(347306),
    r = n(773669),
    o = n(287809),
    c = n(76843),
    u = n(562153),
    d = n(998218),
    h = n(939341),
    m = n(583846);
n(321073);
var p = n(491533),
    f = n(583954),
    g = n(745162),
    x = n(365170),
    C = n(241678);
let A = async (e) => {
    let t,
        {
            mediaImageSrc: n,
            entry: l,
            avatarSrc: i,
            description: s,
            timestamp: a,
            episodeDescription: r,
            colors: o,
            channelId: c,
        } = e,
        u = l.extra.media_title,
        d = { AvatarImage: i, ...(null != n && { MediaImage: n }), ...(null != t && { ApplicationImage: t }) };
    return await (0, g.r)({
        assetsToLoad: d,
        drawImage: (e) => {
            let t,
                n = o.map((e, t) => ({ color: e, stop: t }));
            e.setSize({ w: 400, h: 120 }, 4),
                e.drawRoundedGradientRect(n, { x: 0, y: 120 }, { x: 400, y: 0 }, { x: 0, y: 0, h: 120, w: 400 }, 8),
                e.setColor("white");
            let l = e.drawRoundedImage("MediaImage", { x: 12, y: 12 }, { w: 96, h: 96 }, 8, { fillMode: f.VZ.Contain });
            l === f.uS.Failure && (l = e.drawRoundedImage("ApplicationImage", { x: 12, y: 12 }, { w: 96, h: 96 }, 8)),
                l === f.uS.Failure && e.drawPath(p.f, { x: 12, y: 12 }, !0, 2 + 2 / 3),
                e.drawRoundedImage("AvatarImage", { x: 120, y: 12 }, { w: 32, h: 32 }, 50),
                e.setFont({ size: 16, family: C.mw, weight: 500, truncate: f.Kq.Wrap }),
                e.drawText(s, { x: 120, y: 64, h: 32, w: 260 }, !0);
            let i = ((t = [{ iconPath: C.qV, text: a }]), null != r && t.push({ iconPath: C.Uy, text: r }), t);
            (0, x.$)({ canvas: e, badges: i, startPosition: 120, maxWidth: 260 });
        },
        exportConfigs: {
            format: f.z5.CloudUpload,
            quality: 1,
            fileName: `user-reacting-to-${u}.png`.toLowerCase(),
            fileType: "png",
            channelId: c,
        },
    });
};
var E = n(434200),
    I = n(140651),
    y = n(514243),
    v = n(506326),
    S = n(236812),
    N = n(18282),
    j = n(652215),
    _ = n(985018);
let T = (e) => {
    let t,
        n,
        { channel: p, entry: f, onReaction: g, onVoiceChannelPreview: x } = e,
        C = (0, s.bG)([o.default], () => o.default.getUser(f.author_id)),
        { largeImage: T } = (0, h.nO)({ entry: f }),
        { primaryColor: b, secondaryColor: R } = (0, I.A)(T?.src),
        O = (0, s.bG)([r.default], () => r.default.locale),
        L = (0, E.A)(j.fg2.CRUNCHYROLL),
        w = (0, m.kR)(f.extra.media_assets_large_text),
        M = i.useCallback(
            (e) => {
                if (null != C && T?.src != null) {
                    var t, n, l;
                    let i, s, a;
                    return A({
                        entry: f,
                        mediaImageSrc: T?.src,
                        avatarSrc: C.getAvatarURL(p?.guild_id, 128),
                        description:
                            ((t = f),
                            (n = p),
                            (l = C),
                            (i = _.t.LHF6D9),
                            (s = u.Ay.getName(n?.guild_id, n?.id, l)),
                            (a = t.extra.media_title),
                            _.intl
                                .formatToMarkdownString(i, {
                                    mediaTitle: a,
                                    userName: s,
                                    episodeDescription: t.extra.media_subtitle,
                                })
                                .replaceAll("*", "")),
                        timestamp: (0, m.As)(f, O),
                        episodeDescription: w,
                        colors: [b, R],
                        channelId: e,
                    });
                }
            },
            [p, f, w, O, T?.src, b, R, C],
        ),
        k = () => {
            if (null == f.extra.url) return;
            let e = d.A.safeParseWithQuery(f.extra.url);
            null != e && null != e.protocol && null != e.hostname && (0, c.h)({ href: d.A.format(e), trusted: !1 });
        };
    return null == C
        ? null
        : (0, l.jsxs)(S.YN, {
              children: [
                  (0, l.jsx)(S.BC, {
                      channel: p,
                      entry: f,
                      userDescription: (0, m.JM)(f) ? _.t["LH+Z3y"] : _.t.YuKgml,
                      title: f.extra.media_title,
                      subtitle: f.extra.media_subtitle,
                      headerIcons: (0, l.jsx)(N.A, { onClick: L, Icon: a.k, "aria-label": _.intl.string(_.t.jdJYXw) }),
                      badges: (0, l.jsx)(v.mG, {
                          location: v.N5.POPOUT,
                          children: y.R.map((e, t) => (0, l.jsx)(e, { entry: f }, t)),
                      }),
                      onClickTitle: k,
                      onClickThumbnail: k,
                  }),
                  (0, l.jsx)(S.Eh, {
                      children: (0, l.jsx)(S.fD, {
                          onReaction: g,
                          onVoiceChannelPreview: x,
                          user: C,
                          channel: p,
                          generateReactionImage: M,
                          reactionImageAltText:
                              ((t = f),
                              (n = C),
                              _.intl.formatToPlainString(_.t.kCbfbN, {
                                  username: n.username,
                                  activity: t.extra.media_title,
                              })),
                          entry: f,
                      }),
                  }),
              ],
          });
};
