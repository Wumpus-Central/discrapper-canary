(r(323874), r(14289), r(35956), r(393431), r(532706), r(42231), r(232424), r(949626), r(767709), r(65162));
var a = r(435558),
    n = r(830917),
    i = r(626584),
    o = r(339984);
let l = new i.A("ImageCroppingUtils");
async function u(e, t) {
    return {
        imageUri: await new Promise((t) => {
            let r = new FileReader();
            ((r.onload = (e) => {
                let r = e.target?.result;
                "string" == typeof r ? t(r) : t("");
            }),
                r.readAsDataURL(e));
        }),
        compressed: t,
    };
}
function h(e, t, r, a) {
    let n = r,
        i = a;
    return (r > 432 && ((n = 432), (i = (432 / r) * a)), r / a < e)
        ? { width: n, height: i }
        : { width: (t / i) * n, height: t };
}
r.d(
    t,
    {},
    {
        F3: function (e, t, r) {
            return { x: (0, a.clamp)(e, r.left, r.right), y: (0, a.clamp)(t, r.bottom, r.top) };
        },
        MS: async function (e) {
            let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1024,
                r = new Image();
            await new Promise((t, a) => {
                ((r.onload = () => t()),
                    (r.onerror = () => a(Error("Failed to load image for static preview"))),
                    (r.src = e));
            });
            let a = Math.min(1, t / Math.max(r.naturalWidth, r.naturalHeight)),
                n = document.createElement("canvas");
            ((n.width = Math.round(r.naturalWidth * a)), (n.height = Math.round(r.naturalHeight * a)));
            let i = n.getContext("2d");
            if (null == i) throw Error("Canvas 2d context unavailable");
            return (i.drawImage(r, 0, 0, n.width, n.height), n.toDataURL("image/png"));
        },
        Qp: function (e, t, r, a, n) {
            if (null != n) {
                let e = Math.min(Math.min(t, 432) / n, a);
                return { width: e * n, height: e };
            }
            switch (e) {
                case o.HL.AVATAR:
                case o.HL.AVATAR_DECORATION:
                case o.HL.GUILD_ICON:
                    let i = Math.min(t, r);
                    return { width: i, height: i };
                case o.HL.BANNER:
                    let l = Math.min(t, 432);
                    return { width: l, height: l * (1 / o.wL) };
                case o.HL.GUILD_BANNER:
                    let u = Math.min(t, 432);
                    return { width: u, height: Math.min((9 / 16) * u, a) };
                case o.HL.VIDEO_BACKGROUND:
                    let h = Math.min(t, 432);
                    return { width: h, height: (9 / 16) * h };
                case o.HL.SCHEDULED_EVENT_IMAGE:
                    let c = Math.min(t, 432);
                    return { width: c, height: 0.4 * c };
                case o.HL.HOME_HEADER:
                    let s = Math.min(t, 432);
                    return { width: s, height: 0.25 * s };
            }
        },
        Qx: function (e, t, r, a) {
            if (null != a) return h(a, 432 / a, t, r);
            switch (e) {
                case o.HL.AVATAR:
                case o.HL.AVATAR_DECORATION:
                case o.HL.GUILD_ICON:
                    return { width: t, height: r };
                case o.HL.BANNER:
                    let n = o.pj;
                    return h(o.wL, n, t, r);
                case o.HL.GUILD_BANNER:
                    let i = o.Jz;
                    return h(o.AB, i, t, r);
                case o.HL.VIDEO_BACKGROUND:
                    let l = o.yi;
                    return h(o.G9, l, t, r);
                case o.HL.SCHEDULED_EVENT_IMAGE:
                    return h(2.5, 172.8, t, r);
                case o.HL.HOME_HEADER:
                    return h(4, 108, t, r);
            }
        },
        l$: function (e, t, r) {
            let a = { top: 0, bottom: 0, left: 0, right: 0 },
                n = e - r.width,
                i = t - r.height;
            return (
                0 !== n && ((a.left = -Math.abs(n / 2)), (a.right = n / 2)),
                0 !== i && ((a.bottom = -Math.abs(i / 2)), (a.top = i / 2)),
                a
            );
        },
        ny: async function (e) {
            let {
                    file: t,
                    image: a,
                    cropDimensions: i,
                    cropOriginCoordinates: h,
                    maxDimensions: c,
                    imageRotation: s = 0,
                    flipHorizontal: m = !1,
                    resizeWidth: f = null,
                    resizeHeight: d = null,
                    compressGIFToFitBytes: A = null,
                } = e,
                {
                    sourceX: w,
                    sourceY: E,
                    sourceWidth: p,
                    sourceHeight: _,
                } = (0, n.R7)({
                    image: a,
                    cropDimensions: i,
                    cropOriginCoordinates: h,
                    maxDimensions: c,
                    imageRotation: s,
                    flipHorizontal: m,
                }),
                g = Math.max(0, Math.round(w)),
                b = Math.max(0, Math.round(E)),
                y = Math.round(p),
                M = Math.round(_),
                H = a.naturalWidth - g,
                D = a.naturalHeight - b,
                P = Math.min(y, H),
                L = Math.min(M, D);
            if (
                0 === g &&
                0 === b &&
                P === a.naturalWidth &&
                L === a.naturalHeight &&
                s % 360 == 0 &&
                !m &&
                null == f &&
                null == d
            )
                return { result: u(t, !1), cancelFn: () => {} };
            let U = await t.arrayBuffer(),
                I = new Worker(new URL("/assets/" + r.u(539885), r.b)),
                R = new Promise((e, r) => {
                    I.onmessage = (a) => {
                        let { data: n } = a;
                        if (n.type === o.lA.CROP_ANIMATED_IMAGE_COMPLETE)
                            (null != n.compressionError &&
                                l.warn(
                                    "Failed to compress GIF to fit, keeping the uncompressed crop",
                                    n.compressionError,
                                ),
                                e(u(new Blob([n.result], { type: t.type }), n.compressed)),
                                I.terminate());
                        else if (n.type === o.lA.CROP_ANIMATED_IMAGE_ERROR) {
                            let e = n?.error,
                                t = e?.message ?? "Unknown error";
                            (r(Error(`Error cropping animated image: ${t}`)), I.terminate());
                        }
                    };
                }),
                W = "image/webp" === t.type ? "webp" : "gif";
            return (
                I.postMessage({
                    type: o.lA.CROP_ANIMATED_IMAGE_START,
                    data: new Uint8Array(U),
                    x: g,
                    y: b,
                    width: P,
                    height: L,
                    imageRotation: 0 | s,
                    flipHorizontal: m,
                    resizeWidth: f,
                    resizeHeight: d,
                    format: W,
                    compressGIFToFitBytes: A,
                }),
                { result: R, cancelFn: () => I.terminate() }
            );
        },
    },
);
