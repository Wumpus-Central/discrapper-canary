"use strict";
n.d(t, { Vq: () => h }), n(321073), n(284009);
var r = n(989349),
    i = n.n(r),
    s = n(379834);
n(587895);
var a = n(491533);
n(654107);
var o = n(583954),
    l = n(816334);
n(773669), n(287809);
var u = n(927813);
n(562153);
var c = n(661191),
    d = n(583846);
n(176563);
var _ = n(365170),
    f = n(241678),
    p = n(985018);
let h = async (e) => {
    let { applicationImageSrc: t, entry: n, avatarSrcs: r, description: h, timestamp: E, colors: m, channelId: g } = e,
        A = n.extra.activity_name,
        I = {
            AvatarImage1: r[0],
            ...(null != r[1] && { AvatarImage2: r[1] }),
            ...(null != r[2] && { AvatarImage3: r[2] }),
            ...(null != t && { ApplicationImage: t }),
        };
    return await (0, l.r)({
        assetsToLoad: I,
        drawImage: (e) =>
            ((e, t) => {
                let { timestamp: n, colors: r, description: l, entry: h, numAvatars: E } = t,
                    m = r.map((e, t) => ({ color: e, stop: t }));
                e.setSize({ w: 400, h: 120 }, 4),
                    e.drawRoundedGradientRect(m, { x: 0, y: 120 }, { x: 400, y: 0 }, { x: 0, y: 0, h: 120, w: 400 }, 8),
                    e.setColor("white"),
                    e.drawRoundedImage("ApplicationImage", { x: 12, y: 12 }, { w: 96, h: 96 }, 8) === o.uS.Failure &&
                        e.drawPath(a.f, { x: 12, y: 12 }, !0, 2 + 2 / 3),
                    (0, _.v)({
                        canvas: e,
                        avatarSrcs: ["AvatarImage1", "AvatarImage2", "AvatarImage3"].slice(0, E),
                        position: { x: 120, y: 12 },
                        avatarImageSize: 32,
                    }),
                    e.setColor("white"),
                    e.setFont({ size: 16, family: f.mw, weight: 500, truncate: o.Kq.Wrap }),
                    e.drawText(l, { x: 120, y: 64, h: 32, w: 260 }, !0);
                let g = ((e, t) => {
                    let n = [{ iconPath: f.AS, text: t }],
                        r = c.default.extractTimestamp(e.extra.application_id);
                    if (
                        (7 >= i()().diff(i()(r), "days") && n.push({ iconPath: f.fB, text: p.intl.string(p.t.vYuyWf) }),
                        (0, d.Rf)(e) && n.push({ iconPath: f._P, text: p.intl.string(p.t.keY6mW) }),
                        (0, d.BZ)(e))
                    ) {
                        let t = (0, d.iy)(e);
                        n.push({ iconPath: f.Jd, text: p.intl.formatToPlainString(p.t["Klie/P"], { days: t }) });
                    }
                    (0, d.CZ)(e) === s.m.GLOBAL && n.push({ iconPath: f.Cv, text: p.intl.string(p.t.kAlUsy) });
                    let a = (0, d.KH)(e);
                    if ((null != a && n.push({ iconPath: f.$S, text: (0, d.us)(a) }), (0, d.L7)(e))) {
                        let { text: t } = (0, d.Pj)(e);
                        null != t && n.push({ iconPath: f.iI, text: t });
                    }
                    if ((0, d.uw)(e)) {
                        let t = (0, d.ty)(e);
                        if (null != t) {
                            let e = p.intl.formatToPlainString(p.t.C0AxoR, { hours: Math.round(t / u.A.Seconds.HOUR) });
                            return [{ iconPath: f.pc, text: `${p.intl.string(p.t["/50eHi"])} — ${e}` }];
                        }
                    }
                    return n;
                })(h, n);
                (0, _.$)({ canvas: e, badges: g, startPosition: 120, maxWidth: 260 });
            })(e, { timestamp: E, colors: m, description: h, entry: n, numAvatars: r.length }),
        exportConfigs: {
            format: o.z5.CloudUpload,
            quality: 1,
            fileName: `user-reacting-to-${A}.png`.toLowerCase(),
            fileType: "png",
            channelId: g,
        },
    });
};
