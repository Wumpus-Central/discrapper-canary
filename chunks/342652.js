"use strict";
n.d(t, { z: () => o }), n(321073);
var i = n(491533),
    l = n(583954),
    s = n(816334),
    r = n(365170),
    a = n(241678);
let o = async (e) => {
    let t,
        {
            mediaImageSrc: n,
            entry: o,
            avatarSrc: c,
            description: u,
            timestamp: d,
            episodeDescription: h,
            colors: m,
            channelId: p,
        } = e,
        f = o.extra.media_title,
        g = { AvatarImage: c, ...(null != n && { MediaImage: n }), ...(null != t && { ApplicationImage: t }) };
    return await (0, s.r)({
        assetsToLoad: g,
        drawImage: (e) => {
            let t,
                n = m.map((e, t) => ({ color: e, stop: t }));
            e.setSize({ w: 400, h: 120 }, 4),
                e.drawRoundedGradientRect(n, { x: 0, y: 120 }, { x: 400, y: 0 }, { x: 0, y: 0, h: 120, w: 400 }, 8),
                e.setColor("white");
            let s = e.drawRoundedImage("MediaImage", { x: 12, y: 12 }, { w: 96, h: 96 }, 8, { fillMode: l.VZ.Contain });
            s === l.uS.Failure && (s = e.drawRoundedImage("ApplicationImage", { x: 12, y: 12 }, { w: 96, h: 96 }, 8)),
                s === l.uS.Failure && e.drawPath(i.f, { x: 12, y: 12 }, !0, 2 + 2 / 3),
                e.drawRoundedImage("AvatarImage", { x: 120, y: 12 }, { w: 32, h: 32 }, 50),
                e.setFont({ size: 16, family: a.mw, weight: 500, truncate: l.Kq.Wrap }),
                e.drawText(u, { x: 120, y: 64, h: 32, w: 260 }, !0);
            let o = ((t = [{ iconPath: a.qV, text: d }]), null != h && t.push({ iconPath: a.Uy, text: h }), t);
            (0, r.$)({ canvas: e, badges: o, startPosition: 120, maxWidth: 260 });
        },
        exportConfigs: {
            format: l.z5.CloudUpload,
            quality: 1,
            fileName: `user-reacting-to-${f}.png`.toLowerCase(),
            fileType: "png",
            channelId: p,
        },
    });
};
