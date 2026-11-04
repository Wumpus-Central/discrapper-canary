(r(323874), r(14289), r(35956), r(393431), r(532706), r(42231), r(232424), r(949626), r(767709), r(65162));
var a = r(435558),
    n = r(830917),
    i = r(339984);
function o(e, t, r, a) {
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
                case i.HL.AVATAR:
                case i.HL.AVATAR_DECORATION:
                case i.HL.GUILD_ICON:
                case i.HL.PERSONAL_WIDGET_FIELD:
                    let o = Math.min(t, r);
                    return { width: o, height: o };
                case i.HL.BANNER:
                    let l = Math.min(t, 432);
                    return { width: l, height: l * (1 / i.wL) };
                case i.HL.GUILD_BANNER:
                    let h = Math.min(t, 432);
                    return { width: h, height: Math.min((9 / 16) * h, a) };
                case i.HL.VIDEO_BACKGROUND:
                    let u = Math.min(t, 432);
                    return { width: u, height: (9 / 16) * u };
                case i.HL.SCHEDULED_EVENT_IMAGE:
                    let c = Math.min(t, 432);
                    return { width: c, height: 0.4 * c };
                case i.HL.HOME_HEADER:
                    let s = Math.min(t, 432);
                    return { width: s, height: 0.25 * s };
                case i.HL.PERSONAL_WIDGET_COVER:
                    let f = Math.min(t, 432);
                    return { width: f, height: Math.min(f * (1 / i.PS), a) };
            }
        },
        Qx: function (e, t, r, a) {
            if (null != a) return o(a, 432 / a, t, r);
            switch (e) {
                case i.HL.AVATAR:
                case i.HL.AVATAR_DECORATION:
                case i.HL.GUILD_ICON:
                case i.HL.PERSONAL_WIDGET_FIELD:
                    return { width: t, height: r };
                case i.HL.BANNER:
                    let n = i.pj;
                    return o(i.wL, n, t, r);
                case i.HL.GUILD_BANNER:
                    let l = i.Jz;
                    return o(i.AB, l, t, r);
                case i.HL.VIDEO_BACKGROUND:
                    let h = i.yi;
                    return o(i.G9, h, t, r);
                case i.HL.SCHEDULED_EVENT_IMAGE:
                    return o(2.5, 172.8, t, r);
                case i.HL.HOME_HEADER:
                    return o(4, 108, t, r);
                case i.HL.PERSONAL_WIDGET_COVER:
                    return o(i.PS, i.sW, t, r);
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
                    cropDimensions: o,
                    cropOriginCoordinates: l,
                    maxDimensions: h,
                    imageRotation: u = 0,
                    flipHorizontal: c = !1,
                    resizeWidth: s = null,
                    resizeHeight: f = null,
                } = e,
                {
                    sourceX: m,
                    sourceY: A,
                    sourceWidth: E,
                    sourceHeight: d,
                } = (0, n.R7)({
                    image: a,
                    cropDimensions: o,
                    cropOriginCoordinates: l,
                    maxDimensions: h,
                    imageRotation: u,
                    flipHorizontal: c,
                }),
                w = await t.arrayBuffer(),
                _ = new Worker(new URL("/assets/" + r.u(539885), r.b)),
                b = new Promise((e, r) => {
                    _.onmessage = (a) => {
                        let { data: n } = a;
                        if (n.type === i.lA.CROP_ANIMATED_IMAGE_COMPLETE) {
                            var o;
                            (e(
                                ((o = new Blob([n.result], { type: t.type })),
                                new Promise((e) => {
                                    let t = new FileReader();
                                    ((t.onload = (t) => {
                                        let r = t.target?.result;
                                        "string" == typeof r ? e(r) : e("");
                                    }),
                                        t.readAsDataURL(o));
                                })),
                            ),
                                _.terminate());
                        } else if (n.type === i.lA.CROP_ANIMATED_IMAGE_ERROR) {
                            let e = n?.error,
                                t = e?.message ?? "Unknown error";
                            (r(Error(`Error cropping animated image: ${t}`)), _.terminate());
                        }
                    };
                }),
                g = "image/webp" === t.type ? "webp" : "gif",
                p = Math.max(0, Math.round(m)),
                y = Math.max(0, Math.round(A)),
                M = Math.round(E),
                H = Math.round(d),
                L = a.naturalWidth - p,
                D = a.naturalHeight - y,
                P = Math.min(M, L),
                R = Math.min(H, D);
            return (
                _.postMessage({
                    type: i.lA.CROP_ANIMATED_IMAGE_START,
                    data: new Uint8Array(w),
                    x: p,
                    y: y,
                    width: P,
                    height: R,
                    imageRotation: 0 | u,
                    flipHorizontal: c,
                    resizeWidth: s,
                    resizeHeight: f,
                    format: g,
                }),
                { result: b, cancelFn: () => _.terminate() }
            );
        },
    },
);
