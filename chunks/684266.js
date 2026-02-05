"use strict";
n.d(t, { A: () => l });
var r = n(743445),
    i = n(565150),
    a = n(515718),
    s = n(583954);
class o {
    toDataUrl(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "png",
            n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1;
        return e.toDataURL(t, n);
    }
    async exportCanvas(e, t) {
        let { format: n, fileType: o = "png", quality: l = 1, fileName: u } = t;
        if (n === s.z5.Base64) return this.toDataUrl(e, o, l);
        if (n === s.z5.Blob) {
            let t = this.toDataUrl(e, o, l);
            return (0, a.aU)(t);
        }
        if (n === s.z5.File) {
            let t = this.toDataUrl(e, o, l);
            return await (0, a.bX)(t, u, "image/png");
        }
        if (n === s.z5.CloudUpload) {
            let { channelId: n } = t,
                s = this.toDataUrl(e, o, l),
                c = await (0, a.bX)(s, u, "image/png");
            return new r.bK({ file: c, platform: i.xz.WEB, isThumbnail: !1, origin: "unknown:canvas_export" }, n);
        }
        throw Error(`DiscordCanvas: ${n} is not a valid export format.`);
    }
}
let l = o;
