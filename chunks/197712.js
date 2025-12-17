r.d(t, {
    AK: () => m,
    Es: () => c,
    GU: () => o,
    U$: () => s,
    kH: () => u,
}),
    r(190126),
    r(368063),
    r(65234),
    r(111804),
    r(490233),
    r(97749),
    r(388685),
    r(415506),
    r(410992),
    r(227481),
    r(730884),
    r(20464),
    r(341884),
    r(364341),
    r(629680),
    r(505025),
    r(918970),
    r(121784),
    r(644351),
    r(146733);
var n = r(392711),
    a = r(36793),
    i = r(486324);
async function o(e) {
    let {
            file: t,
            image: n,
            cropDimensions: o,
            cropOriginCoordinates: s,
            maxDimensions: l,
            imageRotation: c = 0,
            resizeWidth: u = null,
            resizeHeight: m = null,
        } = e,
        {
            sourceX: d,
            sourceY: g,
            sourceWidth: h,
            sourceHeight: f,
        } = (0, a.GS)({
            image: n,
            cropDimensions: o,
            cropOriginCoordinates: s,
            maxDimensions: l,
            imageRotation: c,
        }),
        E = await t.arrayBuffer(),
        p = new Worker(new URL("/assets/" + r.u("776"), r.b)),
        A = new Promise((e, r) => {
            p.onmessage = (n) => {
                var a, o;
                let { data: s } = n;
                if (s.type === i.u.CROP_ANIMATED_IMAGE_COMPLETE)
                    e(
                        ((a = new Blob([s.result], { type: t.type })),
                        new Promise((e) => {
                            let t = new FileReader();
                            (t.onload = (t) => {
                                var r;
                                let n = null == (r = t.target) ? void 0 : r.result;
                                "string" == typeof n ? e(n) : e("");
                            }),
                                t.readAsDataURL(a);
                        })),
                    ),
                        p.terminate();
                else if (s.type === i.u.CROP_ANIMATED_IMAGE_ERROR) {
                    let e = null == s ? void 0 : s.error,
                        t = null != (o = null == e ? void 0 : e.message) ? o : "Unknown error";
                    r(Error("Error cropping animated image: ".concat(t))), p.terminate();
                }
            };
        }),
        C = "image/webp" === t.type ? "webp" : "gif";
    return (
        p.postMessage({
            type: i.u.CROP_ANIMATED_IMAGE_START,
            data: new Uint8Array(E),
            x: 0 | d,
            y: 0 | g,
            width: 0 | h,
            height: 0 | f,
            imageRotation: 0 | c,
            resizeWidth: u,
            resizeHeight: m,
            format: C,
        }),
        {
            result: A,
            cancelFn: () => p.terminate(),
        }
    );
}
function s(e, t, r) {
    return {
        x: (0, n.clamp)(e, r.left, r.right),
        y: (0, n.clamp)(t, r.bottom, r.top),
    };
}
function l(e, t, r, n) {
    let a = r,
        o = n,
        s = i.vJ;
    return (r > s && ((a = s), (o = (s / r) * n)), r / n < e)
        ? {
              width: a,
              height: o,
          }
        : {
              width: (t / o) * a,
              height: t,
          };
}
function c(e, t, r) {
    switch (e) {
        case i.pC.AVATAR:
        case i.pC.AVATAR_DECORATION:
        case i.pC.GUILD_ICON:
            return {
                width: t,
                height: r,
            };
        case i.pC.BANNER:
            let n = i.qj;
            return l(i.MY, n, t, r);
        case i.pC.GUILD_BANNER:
            let a = i.C5;
            return l(i.Ij, a, t, r);
        case i.pC.VIDEO_BACKGROUND:
            let o = i.PB;
            return l(i.Ff, o, t, r);
        case i.pC.SCHEDULED_EVENT_IMAGE:
            let s = i.WV;
            return l(i.ut, s, t, r);
        case i.pC.HOME_HEADER:
            return l(i.sX, i.SW, t, r);
    }
}
function u(e, t, r) {
    let n = {
            top: 0,
            bottom: 0,
            left: 0,
            right: 0,
        },
        a = e - r.width,
        i = t - r.height;
    return (
        0 !== a && ((n.left = -Math.abs(a / 2)), (n.right = a / 2)),
        0 !== i && ((n.bottom = -Math.abs(i / 2)), (n.top = i / 2)),
        n
    );
}
function m(e, t, r, n) {
    switch (e) {
        case i.pC.AVATAR:
        case i.pC.AVATAR_DECORATION:
        case i.pC.GUILD_ICON:
            let a = Math.min(t, r);
            return {
                width: a,
                height: a,
            };
        case i.pC.BANNER:
            let o = Math.min(t, i.vJ);
            return {
                width: o,
                height: o * (1 / i.MY),
            };
        case i.pC.GUILD_BANNER:
            let s = Math.min(t, i.vJ);
            return {
                width: s,
                height: Math.min((9 / 16) * s, n),
            };
        case i.pC.VIDEO_BACKGROUND:
            let l = Math.min(t, i.vJ);
            return {
                width: l,
                height: (9 / 16) * l,
            };
        case i.pC.SCHEDULED_EVENT_IMAGE:
            let c = Math.min(t, i.vJ);
            return {
                width: c,
                height: 0.4 * c,
            };
        case i.pC.HOME_HEADER:
            let u = Math.min(t, i.vJ);
            return {
                width: u,
                height: u * (1 / i.sX),
            };
    }
}
