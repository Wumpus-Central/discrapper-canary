(r(323874), r(14289), r(35956), r(393431), r(532706), r(42231), r(232424), r(949626), r(767709), r(65162));
var a = r(435558),
    n = r(830917),
    i = r(339984);
function o(e) {
    return new Promise((t) => {
        let r = new FileReader();
        ((r.onload = (e) => {
            let r = e.target?.result;
            "string" == typeof r ? t(r) : t("");
        }),
            r.readAsDataURL(e));
    });
}
function l(e, t, r, a) {
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
            if (null != a) return l(a, 432 / a, t, r);
            switch (e) {
                case i.HL.AVATAR:
                case i.HL.AVATAR_DECORATION:
                case i.HL.GUILD_ICON:
                case i.HL.PERSONAL_WIDGET_FIELD:
                    return { width: t, height: r };
                case i.HL.BANNER:
                    let n = i.pj;
                    return l(i.wL, n, t, r);
                case i.HL.GUILD_BANNER:
                    let o = i.Jz;
                    return l(i.AB, o, t, r);
                case i.HL.VIDEO_BACKGROUND:
                    let h = i.yi;
                    return l(i.G9, h, t, r);
                case i.HL.SCHEDULED_EVENT_IMAGE:
                    return l(2.5, 172.8, t, r);
                case i.HL.HOME_HEADER:
                    return l(4, 108, t, r);
                case i.HL.PERSONAL_WIDGET_COVER:
                    return l(i.PS, i.sW, t, r);
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
                    cropDimensions: l,
                    cropOriginCoordinates: h,
                    maxDimensions: u,
                    imageRotation: c = 0,
                    flipHorizontal: s = !1,
                    resizeWidth: f = null,
                    resizeHeight: m = null,
                } = e,
                {
                    sourceX: A,
                    sourceY: d,
                    sourceWidth: E,
                    sourceHeight: w,
                } = (0, n.R7)({
                    image: a,
                    cropDimensions: l,
                    cropOriginCoordinates: h,
                    maxDimensions: u,
                    imageRotation: c,
                    flipHorizontal: s,
                }),
                _ = Math.max(0, Math.round(A)),
                b = Math.max(0, Math.round(d)),
                g = Math.round(E),
                p = Math.round(w),
                y = a.naturalWidth - _,
                M = a.naturalHeight - b,
                H = Math.min(g, y),
                L = Math.min(p, M);
            if (
                0 === _ &&
                0 === b &&
                H === a.naturalWidth &&
                L === a.naturalHeight &&
                c % 360 == 0 &&
                !s &&
                null == f &&
                null == m
            )
                return { result: o(t), cancelFn: () => {} };
            let D = await t.arrayBuffer(),
                P = new Worker(new URL("/assets/" + r.u(539885), r.b)),
                R = new Promise((e, r) => {
                    P.onmessage = (a) => {
                        let { data: n } = a;
                        if (n.type === i.lA.CROP_ANIMATED_IMAGE_COMPLETE)
                            (e(o(new Blob([n.result], { type: t.type }))), P.terminate());
                        else if (n.type === i.lA.CROP_ANIMATED_IMAGE_ERROR) {
                            let e = n?.error,
                                t = e?.message ?? "Unknown error";
                            (r(Error(`Error cropping animated image: ${t}`)), P.terminate());
                        }
                    };
                }),
                I = "image/webp" === t.type ? "webp" : "gif";
            return (
                P.postMessage({
                    type: i.lA.CROP_ANIMATED_IMAGE_START,
                    data: new Uint8Array(D),
                    x: _,
                    y: b,
                    width: H,
                    height: L,
                    imageRotation: 0 | c,
                    flipHorizontal: s,
                    resizeWidth: f,
                    resizeHeight: m,
                    format: I,
                }),
                { result: R, cancelFn: () => P.terminate() }
            );
        },
    },
);
