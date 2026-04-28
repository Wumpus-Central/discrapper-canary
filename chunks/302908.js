"use strict";
n.d(t, { A: () => j });
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
    _ = n(365170),
    x = n(241678);
let C = async (e) => {
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
                e.setFont({ size: 16, family: x.mw, weight: 500, truncate: f.Kq.Wrap }),
                e.drawText(s, { x: 120, y: 64, h: 32, w: 260 }, !0);
            let i = ((t = [{ iconPath: x.qV, text: a }]), null != r && t.push({ iconPath: x.Uy, text: r }), t);
            (0, _.$)({ canvas: e, badges: i, startPosition: 120, maxWidth: 260 });
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
var A = n(434200),
    E = n(140651),
    I = n(514243),
    v = n(506326),
    y = n(236812),
    b = n(18282),
    S = n(652215),
    N = n(985018);
let j = (e) => {
    let t,
        n,
        { channel: p, entry: f, onReaction: g, onVoiceChannelPreview: _ } = e,
        x = (0, s.bG)([o.default], () => o.default.getUser(f.author_id)),
        { largeImage: j } = (0, h.nO)({ entry: f }),
        { primaryColor: T, secondaryColor: w } = (0, E.A)(j?.src),
        R = (0, s.bG)([r.default], () => r.default.locale),
        L = (0, A.A)(S.fg2.CRUNCHYROLL),
        k = (0, m.kR)(f.extra.media_assets_large_text),
        M = i.useCallback(
            (e) => {
                if (null != x && j?.src != null) {
                    var t, n, l;
                    let i, s, a;
                    return C({
                        entry: f,
                        mediaImageSrc: j?.src,
                        avatarSrc: x.getAvatarURL(p?.guild_id, 128),
                        description:
                            ((t = f),
                            (n = p),
                            (l = x),
                            (i = N.t.LHF6D9),
                            (s = u.Ay.getName(n?.guild_id, n?.id, l)),
                            (a = t.extra.media_title),
                            N.intl
                                .formatToMarkdownString(i, {
                                    mediaTitle: a,
                                    userName: s,
                                    episodeDescription: t.extra.media_subtitle,
                                })
                                .replaceAll("*", "")),
                        timestamp: (0, m.As)(f, R),
                        episodeDescription: k,
                        colors: [T, w],
                        channelId: e,
                    });
                }
            },
            [p, f, k, R, j?.src, T, w, x],
        ),
        O = () => {
            if (null == f.extra.url) return;
            let e = d.A.safeParseWithQuery(f.extra.url);
            null != e && null != e.protocol && null != e.hostname && (0, c.h)({ href: d.A.format(e), trusted: !1 });
        };
    return null == x
        ? null
        : (0, l.jsxs)(y.YN, {
              children: [
                  (0, l.jsx)(y.BC, {
                      channel: p,
                      entry: f,
                      userDescription: (0, m.JM)(f) ? N.t["LH+Z3y"] : N.t.YuKgml,
                      title: f.extra.media_title,
                      subtitle: f.extra.media_subtitle,
                      headerIcons: (0, l.jsx)(b.A, { onClick: L, Icon: a.k, "aria-label": N.intl.string(N.t.jdJYXw) }),
                      badges: (0, l.jsx)(v.mG, {
                          location: v.N5.POPOUT,
                          children: I.R.map((e, t) => (0, l.jsx)(e, { entry: f }, t)),
                      }),
                      onClickTitle: O,
                      onClickThumbnail: O,
                  }),
                  (0, l.jsx)(y.Eh, {
                      children: (0, l.jsx)(y.fD, {
                          onReaction: g,
                          onVoiceChannelPreview: _,
                          user: x,
                          channel: p,
                          generateReactionImage: M,
                          reactionImageAltText:
                              ((t = f),
                              (n = x),
                              N.intl.formatToPlainString(N.t.kCbfbN, {
                                  username: n.username,
                                  activity: t.extra.media_title,
                              })),
                          entry: f,
                      }),
                  }),
              ],
          });
};
