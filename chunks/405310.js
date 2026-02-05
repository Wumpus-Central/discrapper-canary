"use strict";
n.d(t, { KR: () => _, Lu: () => p, N: () => d });
var r = n(974690),
    i = n(491533),
    a = n(583954),
    s = n(816334),
    o = n(583846),
    l = n(365170),
    u = n(241678),
    c = n(985018);
let d = (e) => {
        let { timestamp: t } = e;
        return [{ iconPath: u.uZ, text: t }];
    },
    _ = (e) => {
        let t = (0, o.Pv)(e, r.K.AGGREGATE_COUNT)?.count;
        return null == t ? [] : [{ iconPath: u.pc, text: c.intl.formatToPlainString(c.t.HtifnG, { count: t }) }];
    },
    f = (e) => {
        let { avatarSrc: t, mediaImageSrc: n } = e;
        return { AvatarImage: t, ...(null != n && { MediaImage: n }) };
    },
    p = async (e) => {
        let { user: t, channel: n, mediaImageSrc: r, artist: i, description: o, colors: u, badges: c } = e,
            d = f({ avatarSrc: t.getAvatarURL(n.guild_id, 128), mediaImageSrc: r }),
            _ = i.replaceAll(/[^a-zA-Z0-9 ]/g, "").replaceAll(" ", "-");
        return await (0, s.r)({
            assetsToLoad: d,
            drawImage: (e) => {
                E(e, u), g(e), m(e), h(e, o), (0, l.$)({ canvas: e, badges: c, startPosition: 120, maxWidth: 260 });
            },
            exportConfigs: {
                format: a.z5.CloudUpload,
                quality: 1,
                fileName: `user-reacting-to-${_}.png`.toLowerCase(),
                fileType: "png",
                channelId: n.id,
            },
        });
    };
function h(e, t) {
    e.setColor("white"),
        e.setFont({ size: 16, family: u.mw, weight: 500, truncate: a.Kq.Wrap }),
        e.drawText(t, { x: 120, y: 64, h: 32, w: 260 }, !0);
}
function m(e) {
    e.drawRoundedImage("AvatarImage", { x: 120, y: 12 }, { w: 32, h: 32 }, 50);
}
function g(e) {
    e.drawRoundedImage("MediaImage", { x: 12, y: 12 }, { w: 96, h: 96 }, 8, { fillMode: a.VZ.Contain }) ===
        a.uS.Failure && e.drawPath(i.f, { x: 12, y: 12 }, !0, 2 + 2 / 3);
}
function E(e, t) {
    let n = t.map((e, t) => ({ color: e, stop: t }));
    e.setSize({ w: 400, h: 120 }, 4),
        e.drawRoundedGradientRect(n, { x: 0, y: 120 }, { x: 400, y: 0 }, { x: 0, y: 0, h: 120, w: 400 }, 8);
}
