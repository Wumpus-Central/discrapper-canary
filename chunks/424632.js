r.d(t, { F3: () => l, Qp: () => u, Qx: () => s, l$: () => h, ny: () => o }),
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
var a = r(735438),
    n = r(830917),
    i = r(339984);
async function o(e) {
    let {
            file: t,
            image: a,
            cropDimensions: o,
            cropOriginCoordinates: l,
            maxDimensions: c,
            imageRotation: s = 0,
            flipHorizontal: h = !1,
            resizeWidth: u = null,
            resizeHeight: f = null,
        } = e,
        {
            sourceX: A,
            sourceY: m,
            sourceWidth: w,
            sourceHeight: d,
        } = (0, n.R7)({
            image: a,
            cropDimensions: o,
            cropOriginCoordinates: l,
            maxDimensions: c,
            imageRotation: s,
            flipHorizontal: h,
        }),
        E = await t.arrayBuffer(),
        _ = new Worker(new URL("/assets/" + r.u("47773"), r.b)),
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
        y = Math.max(0, Math.round(A)),
        M = Math.max(0, Math.round(m)),
        H = Math.round(w),
        g = Math.round(d),
        D = a.naturalWidth - y,
        I = a.naturalHeight - M,
        L = Math.min(H, D),
        P = Math.min(g, I);
    return (
        _.postMessage({
            type: i.lA.CROP_ANIMATED_IMAGE_START,
            data: new Uint8Array(E),
            x: y,
            y: M,
            width: L,
            height: P,
            imageRotation: 0 | s,
            flipHorizontal: h,
            resizeWidth: u,
            resizeHeight: f,
            format: b,
        }),
        { result: p, cancelFn: () => _.terminate() }
    );
}
function l(e, t, r) {
    return { x: (0, a.clamp)(e, r.left, r.right), y: (0, a.clamp)(t, r.bottom, r.top) };
}
function c(e, t, r, a) {
    let n = r,
        o = a,
        l = i.Ip;
    return (r > l && ((n = l), (o = (l / r) * a)), r / a < e)
        ? { width: n, height: o }
        : { width: (t / o) * n, height: t };
}
function s(e, t, r) {
    switch (e) {
        case i.HL.AVATAR:
        case i.HL.AVATAR_DECORATION:
        case i.HL.GUILD_ICON:
            return { width: t, height: r };
        case i.HL.BANNER:
            let a = i.pj;
            return c(i.wL, a, t, r);
        case i.HL.GUILD_BANNER:
            let n = i.Jz;
            return c(i.AB, n, t, r);
        case i.HL.VIDEO_BACKGROUND:
            let o = i.yi;
            return c(i.G9, o, t, r);
        case i.HL.SCHEDULED_EVENT_IMAGE:
            let l = i.pr;
            return c(i.Uw, l, t, r);
        case i.HL.HOME_HEADER:
            return c(i.ny, i.eJ, t, r);
    }
}
function h(e, t, r) {
    let a = { top: 0, bottom: 0, left: 0, right: 0 },
        n = e - r.width,
        i = t - r.height;
    return (
        0 !== n && ((a.left = -Math.abs(n / 2)), (a.right = n / 2)),
        0 !== i && ((a.bottom = -Math.abs(i / 2)), (a.top = i / 2)),
        a
    );
}
function u(e, t, r, a) {
    switch (e) {
        case i.HL.AVATAR:
        case i.HL.AVATAR_DECORATION:
        case i.HL.GUILD_ICON:
            let n = Math.min(t, r);
            return { width: n, height: n };
        case i.HL.BANNER:
            let o = Math.min(t, i.Ip);
            return { width: o, height: o * (1 / i.wL) };
        case i.HL.GUILD_BANNER:
            let l = Math.min(t, i.Ip);
            return { width: l, height: Math.min((9 / 16) * l, a) };
        case i.HL.VIDEO_BACKGROUND:
            let c = Math.min(t, i.Ip);
            return { width: c, height: (9 / 16) * c };
        case i.HL.SCHEDULED_EVENT_IMAGE:
            let s = Math.min(t, i.Ip);
            return { width: s, height: 0.4 * s };
        case i.HL.HOME_HEADER:
            let h = Math.min(t, i.Ip);
            return { width: h, height: h * (1 / i.ny) };
    }
}
