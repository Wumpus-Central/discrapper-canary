"use strict";
n.d(t, { KR: () => h, Lu: () => m, N: () => d });
var l = n(974690),
    i = n(491533),
    s = n(583954),
    a = n(745162),
    r = n(583846),
    o = n(365170),
    c = n(241678),
    u = n(985018);
let d = (e) => {
        let { timestamp: t } = e;
        return [{ iconPath: c.uZ, text: t }];
    },
    h = (e) => {
        let t = (0, r.Pv)(e, l.K.AGGREGATE_COUNT)?.count;
        return null == t ? [] : [{ iconPath: c.pc, text: u.intl.formatToPlainString(u.t.HtifnG, { count: t }) }];
    },
    m = async (e) => {
        let { user: t, channel: n, mediaImageSrc: l, artist: r, description: u, colors: d, badges: h } = e,
            m = ((e) => {
                let { avatarSrc: t, mediaImageSrc: n } = e;
                return { AvatarImage: t, ...(null != n && { MediaImage: n }) };
            })({ avatarSrc: t.getAvatarURL(n.guild_id, 128), mediaImageSrc: l }),
            p = r.replaceAll(/[^a-zA-Z0-9 ]/g, "").replaceAll(" ", "-");
        return await (0, a.r)({
            assetsToLoad: m,
            drawImage: (e) => {
                var t, n, l, a;
                let r;
                (t = e),
                    (r = d.map((e, t) => ({ color: e, stop: t }))),
                    t.setSize({ w: 400, h: 120 }, 4),
                    t.drawRoundedGradientRect(r, { x: 0, y: 120 }, { x: 400, y: 0 }, { x: 0, y: 0, h: 120, w: 400 }, 8),
                    (n = e).drawRoundedImage("MediaImage", { x: 12, y: 12 }, { w: 96, h: 96 }, 8, {
                        fillMode: s.VZ.Contain,
                    }) === s.uS.Failure && n.drawPath(i.f, { x: 12, y: 12 }, !0, 2 + 2 / 3),
                    e.drawRoundedImage("AvatarImage", { x: 120, y: 12 }, { w: 32, h: 32 }, 50),
                    (l = e),
                    (a = u),
                    l.setColor("white"),
                    l.setFont({ size: 16, family: c.mw, weight: 500, truncate: s.Kq.Wrap }),
                    l.drawText(a, { x: 120, y: 64, h: 32, w: 260 }, !0),
                    (0, o.$)({ canvas: e, badges: h, startPosition: 120, maxWidth: 260 });
            },
            exportConfigs: {
                format: s.z5.CloudUpload,
                quality: 1,
                fileName: `user-reacting-to-${p}.png`.toLowerCase(),
                fileType: "png",
                channelId: n.id,
            },
        });
    };
