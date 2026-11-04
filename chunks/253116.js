(n.d(t, { mX: () => l, e8: () => u, t_: () => d, pc: () => o }),
    n(508300),
    n(393431),
    n(532706),
    n(42231),
    n(232424),
    n(949626),
    n(767709),
    n(65162));
var i = n(77729),
    r = n(696016),
    a = n(683825),
    s = n(792996);
class l extends Error {
    userMessage;
    constructor(e) {
        (super(e), (this.userMessage = e), (this.name = "ClipImageError"));
    }
}
async function o(e, t) {
    let n,
        i =
            e.length >= 8 && 137 === e[0] && 80 === e[1] && 78 === e[2] && 71 === e[3]
                ? "image/png"
                : e.length >= 3 && 255 === e[0] && 216 === e[1] && 255 === e[2]
                  ? "image/jpeg"
                  : e.length >= 12 &&
                      "RIFF" === String.fromCharCode(...e.subarray(0, 4)) &&
                      "WEBP" === String.fromCharCode(...e.subarray(8, 12))
                    ? "image/webp"
                    : null;
    if (null == i || !r._9.includes(i)) throw new l(s.intl.string(a.default.j3AKJQ));
    try {
        n = await createImageBitmap(new Blob([e], { type: i }));
    } catch {
        throw new l(s.intl.string(a.default.piRNeN));
    }
    try {
        let o = Math.max(n.width, n.height),
            d = o > 2048 ? 2048 / o : 1;
        if (!(d < 1 || e.length > r.rD))
            return {
                src: `data:${i};base64,${(function (e) {
                    let t = "";
                    for (let n = 0; n < e.length; n += 32768) t += String.fromCharCode(...e.subarray(n, n + 32768));
                    return btoa(t);
                })(e)}`,
                mimeType: i,
                fileName: t,
                naturalWidth: n.width,
                naturalHeight: n.height,
            };
        let c = Math.max(1, Math.round(n.width * d)),
            u = Math.max(1, Math.round(n.height * d)),
            { src: _, mimeType: E } = (function (e, t, n) {
                let i = document.createElement("canvas");
                ((i.width = t), (i.height = n));
                let o = i.getContext("2d");
                if (null == o) throw new l(s.intl.string(a.default.piRNeN));
                o.drawImage(e, 0, 0, e.width, e.height, 0, 0, t, n);
                let d = i.toDataURL(r.w6, 0.92),
                    c = d.startsWith(`data:${r.w6}`) ? r.w6 : "image/png";
                return { src: d, mimeType: c };
            })(n, c, u);
        return { src: _, mimeType: E, fileName: t, naturalWidth: c, naturalHeight: u };
    } finally {
        n.close();
    }
}
async function d() {
    let e;
    try {
        e = await i.A.fileManager.openFiles(
            { properties: ["openFile"], filters: [{ name: s.intl.string(a.default.qM8PRd), extensions: r.G$ }] },
            r.sL,
        );
    } catch (e) {
        if (null != e && "object" == typeof e && "ETOOLARGE" === e.code) throw new l(s.intl.string(a.default.ar2OUZ));
        throw e;
    }
    let t = e[0];
    return null == t ? null : { bytes: t.data, fileName: t.filename };
}
let c = null;
async function u() {
    null == c &&
        (c = (async function () {
            let e = await fetch("/assets/133a685ac8633e25.png");
            if (!e.ok) throw Error(`loadClipShareWatermarkAsset: failed to fetch watermark (${e.status})`);
            return o(new Uint8Array(await e.arrayBuffer()), "discord_wordmark.png");
        })());
    let e = c;
    try {
        return await e;
    } catch (t) {
        throw (c === e && (c = null), t);
    }
}
