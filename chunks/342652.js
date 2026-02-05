"use strict";
n.d(t, { z: () => c }), n(321073);
var r = n(491533),
    i = n(583954),
    a = n(816334),
    s = n(365170),
    o = n(241678);
let l = (e, t, n) => ({
        AvatarImage: e,
        ...(null != t && { MediaImage: t }),
        ...(null != n && { ApplicationImage: n }),
    }),
    u = (e, t) => {
        let n = [{ iconPath: o.qV, text: e }];
        return null != t && n.push({ iconPath: o.Uy, text: t }), n;
    },
    c = async (e) => {
        let {
                mediaImageSrc: t,
                entry: n,
                avatarSrc: c,
                description: d,
                timestamp: _,
                episodeDescription: f,
                colors: p,
                channelId: h,
            } = e,
            m = n.extra.media_title,
            g = l(c, t),
            E = (e) => {
                let t = p.map((e, t) => ({ color: e, stop: t }));
                e.setSize({ w: 400, h: 120 }, 4),
                    e.drawRoundedGradientRect(t, { x: 0, y: 120 }, { x: 400, y: 0 }, { x: 0, y: 0, h: 120, w: 400 }, 8),
                    e.setColor("white");
                let n = e.drawRoundedImage("MediaImage", { x: 12, y: 12 }, { w: 96, h: 96 }, 8, {
                    fillMode: i.VZ.Contain,
                });
                n === i.uS.Failure &&
                    (n = e.drawRoundedImage("ApplicationImage", { x: 12, y: 12 }, { w: 96, h: 96 }, 8)),
                    n === i.uS.Failure && e.drawPath(r.f, { x: 12, y: 12 }, !0, 2 + 2 / 3),
                    e.drawRoundedImage("AvatarImage", { x: 120, y: 12 }, { w: 32, h: 32 }, 50),
                    e.setFont({ size: 16, family: o.mw, weight: 500, truncate: i.Kq.Wrap }),
                    e.drawText(d, { x: 120, y: 64, h: 32, w: 260 }, !0);
                let a = u(_, f);
                (0, s.$)({ canvas: e, badges: a, startPosition: 120, maxWidth: 260 });
            };
        return await (0, a.r)({
            assetsToLoad: g,
            drawImage: E,
            exportConfigs: {
                format: i.z5.CloudUpload,
                quality: 1,
                fileName: `user-reacting-to-${m}.png`.toLowerCase(),
                fileType: "png",
                channelId: h,
            },
        });
    };
