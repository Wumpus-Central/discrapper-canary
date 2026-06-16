"use strict";
n.d(t, { A: () => o });
var i = n(280889),
    r = n(565150),
    s = n(515718),
    a = n(583954);
let o = class {
    toDataUrl(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "png",
            n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1;
        return e.toDataURL(t, n);
    }
    async exportCanvas(e, t) {
        let { format: n, fileType: o = "png", quality: l = 1, fileName: u } = t;
        if (n === a.z5.Base64) return this.toDataUrl(e, o, l);
        if (n === a.z5.Blob) {
            let t = this.toDataUrl(e, o, l);
            return (0, s.aU)(t);
        }
        if (n === a.z5.File) {
            let t = this.toDataUrl(e, o, l);
            return await (0, s.bX)(t, u, "image/png");
        }
        if (n === a.z5.CloudUpload) {
            let { channelId: n } = t,
                a = this.toDataUrl(e, o, l),
                c = await (0, s.bX)(a, u, "image/png");
            return new i.bK({ file: c, platform: r.xz.WEB, isThumbnail: !1, origin: "unknown:canvas_export" }, n);
        }
        throw Error(`DiscordCanvas: ${n} is not a valid export format.`);
    }
};
