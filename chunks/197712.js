n.d(t, {
    AK: () => d,
    Es: () => u,
    GU: () => a,
    U$: () => o,
    kH: () => c,
}),
    n(190126),
    n(368063),
    n(65234),
    n(111804),
    n(490233),
    n(97749),
    n(388685),
    n(415506),
    n(410992),
    n(227481),
    n(730884),
    n(20464),
    n(341884),
    n(364341),
    n(629680),
    n(505025),
    n(918970),
    n(121784),
    n(644351),
    n(146733);
var l = n(392711),
    r = n(36793),
    i = n(486324);
async function a(e) {
    let {
            file: t,
            image: l,
            cropDimensions: a,
            cropOriginCoordinates: o,
            maxDimensions: s,
            imageRotation: u = 0,
            resizeWidth: c = null,
            resizeHeight: d = null,
        } = e,
        {
            sourceX: m,
            sourceY: h,
            sourceWidth: g,
            sourceHeight: b,
        } = (0, r.GS)({
            image: l,
            cropDimensions: a,
            cropOriginCoordinates: o,
            maxDimensions: s,
            imageRotation: u,
        }),
        f = await t.arrayBuffer(),
        v = new Worker(new URL("/assets/" + n.u("776"), n.b)),
        p = new Promise((e, n) => {
            v.onmessage = (l) => {
                var r, a;
                let { data: o } = l;
                if (o.type === i.u.CROP_ANIMATED_IMAGE_COMPLETE)
                    e(
                        ((r = new Blob([o.result], { type: t.type })),
                        new Promise((e) => {
                            let t = new FileReader();
                            (t.onload = (t) => {
                                var n;
                                let l = null == (n = t.target) ? void 0 : n.result;
                                "string" == typeof l ? e(l) : e("");
                            }),
                                t.readAsDataURL(r);
                        })),
                    ),
                        v.terminate();
                else if (o.type === i.u.CROP_ANIMATED_IMAGE_ERROR) {
                    let e = null == o ? void 0 : o.error,
                        t = null != (a = null == e ? void 0 : e.message) ? a : "Unknown error";
                    n(Error("Error cropping animated image: ".concat(t))), v.terminate();
                }
            };
        }),
        x = "image/webp" === t.type ? "webp" : "gif";
    return (
        v.postMessage({
            type: i.u.CROP_ANIMATED_IMAGE_START,
            data: new Uint8Array(f),
            x: 0 | m,
            y: 0 | h,
            width: 0 | g,
            height: 0 | b,
            imageRotation: 0 | u,
            resizeWidth: c,
            resizeHeight: d,
            format: x,
        }),
        {
            result: p,
            cancelFn: () => v.terminate(),
        }
    );
}
function o(e, t, n) {
    return {
        x: (0, l.clamp)(e, n.left, n.right),
        y: (0, l.clamp)(t, n.bottom, n.top),
    };
}
function s(e, t, n, l) {
    let r = n,
        a = l,
        o = i.vJ;
    return (n > o && ((r = o), (a = (o / n) * l)), n / l < e)
        ? {
              width: r,
              height: a,
          }
        : {
              width: (t / a) * r,
              height: t,
          };
}
function u(e, t, n) {
    switch (e) {
        case i.pC.AVATAR:
        case i.pC.AVATAR_DECORATION:
        case i.pC.GUILD_ICON:
            return {
                width: t,
                height: n,
            };
        case i.pC.BANNER:
            let l = i.qj;
            return s(i.MY, l, t, n);
        case i.pC.GUILD_BANNER:
            let r = i.C5;
            return s(i.Ij, r, t, n);
        case i.pC.VIDEO_BACKGROUND:
            let a = i.PB;
            return s(i.Ff, a, t, n);
        case i.pC.SCHEDULED_EVENT_IMAGE:
            let o = i.WV;
            return s(i.ut, o, t, n);
        case i.pC.HOME_HEADER:
            return s(i.sX, i.SW, t, n);
    }
}
function c(e, t, n) {
    let l = {
            top: 0,
            bottom: 0,
            left: 0,
            right: 0,
        },
        r = e - n.width,
        i = t - n.height;
    return (
        0 !== r && ((l.left = -Math.abs(r / 2)), (l.right = r / 2)),
        0 !== i && ((l.bottom = -Math.abs(i / 2)), (l.top = i / 2)),
        l
    );
}
function d(e, t, n, l) {
    switch (e) {
        case i.pC.AVATAR:
        case i.pC.AVATAR_DECORATION:
        case i.pC.GUILD_ICON:
            let r = Math.min(t, n);
            return {
                width: r,
                height: r,
            };
        case i.pC.BANNER:
            let a = Math.min(t, i.vJ);
            return {
                width: a,
                height: a * (1 / i.MY),
            };
        case i.pC.GUILD_BANNER:
            let o = Math.min(t, i.vJ);
            return {
                width: o,
                height: Math.min((9 / 16) * o, l),
            };
        case i.pC.VIDEO_BACKGROUND:
            let s = Math.min(t, i.vJ);
            return {
                width: s,
                height: (9 / 16) * s,
            };
        case i.pC.SCHEDULED_EVENT_IMAGE:
            let u = Math.min(t, i.vJ);
            return {
                width: u,
                height: 0.4 * u,
            };
        case i.pC.HOME_HEADER:
            let c = Math.min(t, i.vJ);
            return {
                width: c,
                height: c * (1 / i.sX),
            };
    }
}
