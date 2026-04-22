"use strict";
n.d(t, { A: () => a });
var i = n(743445),
    l = n(565150),
    s = n(515718),
    r = n(583954);
let a = class {
    toDataUrl(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "png",
            n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1;
        return e.toDataURL(t, n);
    }
    async exportCanvas(e, t) {
        let { format: n, fileType: a = "png", quality: o = 1, fileName: c } = t;
        if (n === r.z5.Base64) return this.toDataUrl(e, a, o);
        if (n === r.z5.Blob) {
            let t = this.toDataUrl(e, a, o);
            return (0, s.aU)(t);
        }
        if (n === r.z5.File) {
            let t = this.toDataUrl(e, a, o);
            return await (0, s.bX)(t, c, "image/png");
        }
        if (n === r.z5.CloudUpload) {
            let { channelId: n } = t,
                r = this.toDataUrl(e, a, o),
                u = await (0, s.bX)(r, c, "image/png");
            return new i.bK({ file: u, platform: l.xz.WEB, isThumbnail: !1, origin: "unknown:canvas_export" }, n);
        }
        throw Error(`DiscordCanvas: ${n} is not a valid export format.`);
    }
};
