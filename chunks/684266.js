"use strict";
n.d(t, { A: () => r });
var l = n(743445),
    i = n(565150),
    s = n(515718),
    a = n(583954);
let r = class {
    toDataUrl(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "png",
            n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1;
        return e.toDataURL(t, n);
    }
    async exportCanvas(e, t) {
        let { format: n, fileType: r = "png", quality: o = 1, fileName: c } = t;
        if (n === a.z5.Base64) return this.toDataUrl(e, r, o);
        if (n === a.z5.Blob) {
            let t = this.toDataUrl(e, r, o);
            return (0, s.aU)(t);
        }
        if (n === a.z5.File) {
            let t = this.toDataUrl(e, r, o);
            return await (0, s.bX)(t, c, "image/png");
        }
        if (n === a.z5.CloudUpload) {
            let { channelId: n } = t,
                a = this.toDataUrl(e, r, o),
                u = await (0, s.bX)(a, c, "image/png");
            return new l.bK({ file: u, platform: i.xz.WEB, isThumbnail: !1, origin: "unknown:canvas_export" }, n);
        }
        throw Error(`DiscordCanvas: ${n} is not a valid export format.`);
    }
};
