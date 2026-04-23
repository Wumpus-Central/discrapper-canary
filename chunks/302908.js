"use strict";
n.d(t, { A: () => v });
var i = n(627968),
    r = n(64700),
    s = n(17928),
    a = n(347306),
    o = n(773669),
    l = n(287809),
    d = n(76843),
    _ = n(562153),
    u = n(998218),
    c = n(939341),
    E = n(583846);
n(321073);
var h = n(491533),
    m = n(583954),
    f = n(745162),
    g = n(365170),
    p = n(241678);
let A = async (e) => {
    let t,
        {
            mediaImageSrc: n,
            entry: i,
            avatarSrc: r,
            description: s,
            timestamp: a,
            episodeDescription: o,
            colors: l,
            channelId: d,
        } = e,
        _ = i.extra.media_title,
        u = { AvatarImage: r, ...(null != n && { MediaImage: n }), ...(null != t && { ApplicationImage: t }) };
    return await (0, f.r)({
        assetsToLoad: u,
        drawImage: (e) => {
            let t,
                n = l.map((e, t) => ({ color: e, stop: t }));
            e.setSize({ w: 400, h: 120 }, 4),
                e.drawRoundedGradientRect(n, { x: 0, y: 120 }, { x: 400, y: 0 }, { x: 0, y: 0, h: 120, w: 400 }, 8),
                e.setColor("white");
            let i = e.drawRoundedImage("MediaImage", { x: 12, y: 12 }, { w: 96, h: 96 }, 8, { fillMode: m.VZ.Contain });
            i === m.uS.Failure && (i = e.drawRoundedImage("ApplicationImage", { x: 12, y: 12 }, { w: 96, h: 96 }, 8)),
                i === m.uS.Failure && e.drawPath(h.f, { x: 12, y: 12 }, !0, 2 + 2 / 3),
                e.drawRoundedImage("AvatarImage", { x: 120, y: 12 }, { w: 32, h: 32 }, 50),
                e.setFont({ size: 16, family: p.mw, weight: 500, truncate: m.Kq.Wrap }),
                e.drawText(s, { x: 120, y: 64, h: 32, w: 260 }, !0);
            let r = ((t = [{ iconPath: p.qV, text: a }]), null != o && t.push({ iconPath: p.Uy, text: o }), t);
            (0, g.$)({ canvas: e, badges: r, startPosition: 120, maxWidth: 260 });
        },
        exportConfigs: {
            format: m.z5.CloudUpload,
            quality: 1,
            fileName: `user-reacting-to-${_}.png`.toLowerCase(),
            fileType: "png",
            channelId: d,
        },
    });
};
var I = n(434200),
    T = n(140651),
    S = n(514243),
    N = n(506326),
    C = n(236812),
    R = n(18282),
    O = n(652215),
    y = n(985018);
let v = (e) => {
    let t,
        n,
        { channel: h, entry: m, onReaction: f, onVoiceChannelPreview: g } = e,
        p = (0, s.bG)([l.default], () => l.default.getUser(m.author_id)),
        { largeImage: v } = (0, c.nO)({ entry: m }),
        { primaryColor: D, secondaryColor: L } = (0, T.A)(v?.src),
        b = (0, s.bG)([o.default], () => o.default.locale),
        w = (0, I.A)(O.fg2.CRUNCHYROLL),
        P = (0, E.kR)(m.extra.media_assets_large_text),
        k = r.useCallback(
            (e) => {
                if (null != p && v?.src != null) {
                    var t, n, i;
                    let r, s, a;
                    return A({
                        entry: m,
                        mediaImageSrc: v?.src,
                        avatarSrc: p.getAvatarURL(h?.guild_id, 128),
                        description:
                            ((t = m),
                            (n = h),
                            (i = p),
                            (r = y.t.LHF6D9),
                            (s = _.Ay.getName(n?.guild_id, n?.id, i)),
                            (a = t.extra.media_title),
                            y.intl
                                .formatToMarkdownString(r, {
                                    mediaTitle: a,
                                    userName: s,
                                    episodeDescription: t.extra.media_subtitle,
                                })
                                .replaceAll("*", "")),
                        timestamp: (0, E.As)(m, b),
                        episodeDescription: P,
                        colors: [D, L],
                        channelId: e,
                    });
                }
            },
            [h, m, P, b, v?.src, D, L, p],
        ),
        M = () => {
            if (null == m.extra.url) return;
            let e = u.A.safeParseWithQuery(m.extra.url);
            null != e && null != e.protocol && null != e.hostname && (0, d.h)({ href: u.A.format(e), trusted: !1 });
        };
    return null == p
        ? null
        : (0, i.jsxs)(C.YN, {
              children: [
                  (0, i.jsx)(C.BC, {
                      channel: h,
                      entry: m,
                      userDescription: (0, E.JM)(m) ? y.t["LH+Z3y"] : y.t.YuKgml,
                      title: m.extra.media_title,
                      subtitle: m.extra.media_subtitle,
                      headerIcons: (0, i.jsx)(R.A, { onClick: w, Icon: a.k, "aria-label": y.intl.string(y.t.jdJYXw) }),
                      badges: (0, i.jsx)(N.mG, {
                          location: N.N5.POPOUT,
                          children: S.R.map((e, t) => (0, i.jsx)(e, { entry: m }, t)),
                      }),
                      onClickTitle: M,
                      onClickThumbnail: M,
                  }),
                  (0, i.jsx)(C.Eh, {
                      children: (0, i.jsx)(C.fD, {
                          onReaction: f,
                          onVoiceChannelPreview: g,
                          user: p,
                          channel: h,
                          generateReactionImage: k,
                          reactionImageAltText:
                              ((t = m),
                              (n = p),
                              y.intl.formatToPlainString(y.t.kCbfbN, {
                                  username: n.username,
                                  activity: t.extra.media_title,
                              })),
                          entry: m,
                      }),
                  }),
              ],
          });
};
