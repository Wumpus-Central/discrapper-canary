"use strict";
n.d(t, { z: () => l }), n(321073);
var r = n(491533),
    i = n(583954),
    s = n(816334),
    a = n(365170),
    o = n(241678);
let l = async (e) => {
    let t,
        {
            mediaImageSrc: n,
            entry: l,
            avatarSrc: u,
            description: c,
            timestamp: d,
            episodeDescription: _,
            colors: f,
            channelId: p,
        } = e,
        h = l.extra.media_title,
        E = { AvatarImage: u, ...(null != n && { MediaImage: n }), ...(null != t && { ApplicationImage: t }) };
    return await (0, s.r)({
        assetsToLoad: E,
        drawImage: (e) => {
            let t,
                n = f.map((e, t) => ({ color: e, stop: t }));
            e.setSize({ w: 400, h: 120 }, 4),
                e.drawRoundedGradientRect(n, { x: 0, y: 120 }, { x: 400, y: 0 }, { x: 0, y: 0, h: 120, w: 400 }, 8),
                e.setColor("white");
            let s = e.drawRoundedImage("MediaImage", { x: 12, y: 12 }, { w: 96, h: 96 }, 8, { fillMode: i.VZ.Contain });
            s === i.uS.Failure && (s = e.drawRoundedImage("ApplicationImage", { x: 12, y: 12 }, { w: 96, h: 96 }, 8)),
                s === i.uS.Failure && e.drawPath(r.f, { x: 12, y: 12 }, !0, 2 + 2 / 3),
                e.drawRoundedImage("AvatarImage", { x: 120, y: 12 }, { w: 32, h: 32 }, 50),
                e.setFont({ size: 16, family: o.mw, weight: 500, truncate: i.Kq.Wrap }),
                e.drawText(c, { x: 120, y: 64, h: 32, w: 260 }, !0);
            let l = ((t = [{ iconPath: o.qV, text: d }]), null != _ && t.push({ iconPath: o.Uy, text: _ }), t);
            (0, a.$)({ canvas: e, badges: l, startPosition: 120, maxWidth: 260 });
        },
        exportConfigs: {
            format: i.z5.CloudUpload,
            quality: 1,
            fileName: `user-reacting-to-${h}.png`.toLowerCase(),
            fileType: "png",
            channelId: p,
        },
    });
};
