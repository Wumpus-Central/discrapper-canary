r.d(t, { F3: () => h, MS: () => l, Qp: () => f, Qx: () => c, l$: () => s, ny: () => o }),
    r(323874),
    r(14289),
    r(35956),
    r(393431),
    r(532706),
    r(42231),
    r(232424),
    r(949626),
    r(767709),
    r(65162);
var a = r(435558),
    n = r(830917),
    i = r(339984);
async function o(e) {
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
        _ = new Worker(new URL("/assets/" + r.u("724962"), r.b)),
        p = new Promise((e, r) => {
            _.onmessage = (a) => {
                let { data: n } = a;
                if (n.type === i.lA.CROP_ANIMATED_IMAGE_COMPLETE) {
                    var o;
                    e(
                        ((o = new Blob([n.result], { type: t.type })),
                        new Promise((e) => {
                            let t = new FileReader();
                            (t.onload = (t) => {
                                let r = t.target?.result;
                                "string" == typeof r ? e(r) : e("");
                            }),
                                t.readAsDataURL(o);
                        })),
                    ),
                        _.terminate();
                } else if (n.type === i.lA.CROP_ANIMATED_IMAGE_ERROR) {
                    let e = n?.error,
                        t = e?.message ?? "Unknown error";
                    r(Error(`Error cropping animated image: ${t}`)), _.terminate();
                }
            };
        }),
        b = "image/webp" === t.type ? "webp" : "gif",
        g = Math.max(0, Math.round(m)),
        y = Math.max(0, Math.round(A)),
        M = Math.round(E),
        I = Math.round(d),
        H = a.naturalWidth - g,
        L = a.naturalHeight - y,
        D = Math.min(M, H),
        P = Math.min(I, L);
    return (
        _.postMessage({
            type: i.lA.CROP_ANIMATED_IMAGE_START,
            data: new Uint8Array(w),
            x: g,
            y: y,
            width: D,
            height: P,
            imageRotation: 0 | u,
            flipHorizontal: c,
            resizeWidth: s,
            resizeHeight: f,
            format: b,
        }),
        { result: p, cancelFn: () => _.terminate() }
    );
}
async function l(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1024,
        r = new Image();
    await new Promise((t, a) => {
        (r.onload = () => t()), (r.onerror = () => a(Error("Failed to load image for static preview"))), (r.src = e);
    });
    let a = Math.min(1, t / Math.max(r.naturalWidth, r.naturalHeight)),
        n = document.createElement("canvas");
    (n.width = Math.round(r.naturalWidth * a)), (n.height = Math.round(r.naturalHeight * a));
    let i = n.getContext("2d");
    if (null == i) throw Error("Canvas 2d context unavailable");
    return i.drawImage(r, 0, 0, n.width, n.height), n.toDataURL("image/png");
}
function h(e, t, r) {
    return { x: (0, a.clamp)(e, r.left, r.right), y: (0, a.clamp)(t, r.bottom, r.top) };
}
function u(e, t, r, a) {
    let n = r,
        o = a,
        l = i.Ip;
    return (r > l && ((n = l), (o = (l / r) * a)), r / a < e)
        ? { width: n, height: o }
        : { width: (t / o) * n, height: t };
}
function c(e, t, r, a) {
    if (null != a) return u(a, i.Ip / a, t, r);
    switch (e) {
        case i.HL.AVATAR:
        case i.HL.AVATAR_DECORATION:
        case i.HL.GUILD_ICON:
        case i.HL.PERSONAL_WIDGET_FIELD:
            return { width: t, height: r };
        case i.HL.BANNER:
            let n = i.pj;
            return u(i.wL, n, t, r);
        case i.HL.GUILD_BANNER:
            let o = i.Jz;
            return u(i.AB, o, t, r);
        case i.HL.VIDEO_BACKGROUND:
            let l = i.yi;
            return u(i.G9, l, t, r);
        case i.HL.SCHEDULED_EVENT_IMAGE:
            let h = i.pr;
            return u(i.Uw, h, t, r);
        case i.HL.HOME_HEADER:
            return u(i.ny, i.eJ, t, r);
        case i.HL.PERSONAL_WIDGET_COVER:
            return u(i.ge, i.sW, t, r);
    }
}
function s(e, t, r) {
    let a = { top: 0, bottom: 0, left: 0, right: 0 },
        n = e - r.width,
        i = t - r.height;
    return (
        0 !== n && ((a.left = -Math.abs(n / 2)), (a.right = n / 2)),
        0 !== i && ((a.bottom = -Math.abs(i / 2)), (a.top = i / 2)),
        a
    );
}
function f(e, t, r, a, n) {
    if (null != n) {
        let e = Math.min(Math.min(t, i.Ip) / n, a);
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
            let l = Math.min(t, i.Ip);
            return { width: l, height: l * (1 / i.wL) };
        case i.HL.GUILD_BANNER:
            let h = Math.min(t, i.Ip);
            return { width: h, height: Math.min((9 / 16) * h, a) };
        case i.HL.VIDEO_BACKGROUND:
            let u = Math.min(t, i.Ip);
            return { width: u, height: (9 / 16) * u };
        case i.HL.SCHEDULED_EVENT_IMAGE:
            let c = Math.min(t, i.Ip);
            return { width: c, height: 0.4 * c };
        case i.HL.HOME_HEADER:
            let s = Math.min(t, i.Ip);
            return { width: s, height: s * (1 / i.ny) };
        case i.HL.PERSONAL_WIDGET_COVER:
            let f = Math.min(t, i.Ip);
            return { width: f, height: Math.min(f * (1 / i.ge), a) };
    }
}
