n.d(t, {
    $p: () => a,
    AK: () => d,
    Es: () => u,
    U$: () => s,
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
var r = n(392711),
    i = n(36793),
    l = n(486324);
async function a(e) {
    let {
            file: t,
            image: r,
            cropDimensions: a,
            cropOriginCoordinates: s,
            maxDimensions: o,
            imageRotation: u = 0,
            resizeWidth: c = null,
            resizeHeight: d = null,
        } = e,
        {
            sourceX: h,
            sourceY: m,
            sourceWidth: g,
            sourceHeight: p,
        } = (0, i.GS)({
            image: r,
            cropDimensions: a,
            cropOriginCoordinates: s,
            maxDimensions: o,
            imageRotation: u,
        }),
        f = await t.arrayBuffer(),
        v = new Worker(new URL("/assets/" + n.u("86047"), n.b)),
        x = new Promise((e, t) => {
            v.onmessage = (n) => {
                let { data: r } = n;
                if (r.type === l.u.CROP_GIF_COMPLETE) {
                    var i;
                    e(
                        ((i = new Blob([r.result])),
                        new Promise((e) => {
                            let t = new FileReader();
                            (t.onload = (t) => {
                                var n;
                                let r = null == (n = t.target) ? void 0 : n.result;
                                "string" == typeof r ? e(r) : e("");
                            }),
                                t.readAsDataURL(i);
                        })),
                    ),
                        v.terminate();
                } else
                    r.type === l.u.CROP_GIF_ERROR &&
                        (t(Error("Error cropping GIF", { cause: null == r ? void 0 : r.error })), v.terminate());
            };
        });
    return (
        v.postMessage({
            type: l.u.CROP_GIF_START,
            gif: new Uint8Array(f),
            x: 0 | h,
            y: 0 | m,
            width: 0 | g,
            height: 0 | p,
            imageRotation: 0 | u,
            resizeWidth: c,
            resizeHeight: d,
        }),
        {
            result: x,
            cancelFn: () => v.terminate(),
        }
    );
}
function s(e, t, n) {
    return {
        x: (0, r.clamp)(e, n.left, n.right),
        y: (0, r.clamp)(t, n.bottom, n.top),
    };
}
function o(e, t, n, r) {
    let i = n,
        a = r,
        s = l.vJ;
    return (n > s && ((i = s), (a = (s / n) * r)), n / r < e)
        ? {
              width: i,
              height: a,
          }
        : {
              width: (t / a) * i,
              height: t,
          };
}
function u(e, t, n) {
    switch (e) {
        case l.pC.AVATAR:
        case l.pC.AVATAR_DECORATION:
        case l.pC.GUILD_ICON:
            return {
                width: t,
                height: n,
            };
        case l.pC.BANNER:
            let r = l.qj;
            return o(l.MY, r, t, n);
        case l.pC.GUILD_BANNER:
            let i = l.C5;
            return o(l.Ij, i, t, n);
        case l.pC.VIDEO_BACKGROUND:
            let a = l.PB;
            return o(l.Ff, a, t, n);
        case l.pC.SCHEDULED_EVENT_IMAGE:
            let s = l.WV;
            return o(l.ut, s, t, n);
        case l.pC.HOME_HEADER:
            return o(l.sX, l.SW, t, n);
    }
}
function c(e, t, n) {
    let r = {
            top: 0,
            bottom: 0,
            left: 0,
            right: 0,
        },
        i = e - n.width,
        l = t - n.height;
    return (
        0 !== i && ((r.left = -Math.abs(i / 2)), (r.right = i / 2)),
        0 !== l && ((r.bottom = -Math.abs(l / 2)), (r.top = l / 2)),
        r
    );
}
function d(e, t, n, r) {
    switch (e) {
        case l.pC.AVATAR:
        case l.pC.AVATAR_DECORATION:
        case l.pC.GUILD_ICON:
            let i = Math.min(t, n);
            return {
                width: i,
                height: i,
            };
        case l.pC.BANNER:
            let a = Math.min(t, l.vJ);
            return {
                width: a,
                height: a * (1 / l.MY),
            };
        case l.pC.GUILD_BANNER:
            let s = Math.min(t, l.vJ);
            return {
                width: s,
                height: Math.min((9 / 16) * s, r),
            };
        case l.pC.VIDEO_BACKGROUND:
            let o = Math.min(t, l.vJ);
            return {
                width: o,
                height: (9 / 16) * o,
            };
        case l.pC.SCHEDULED_EVENT_IMAGE:
            let u = Math.min(t, l.vJ);
            return {
                width: u,
                height: 0.4 * u,
            };
        case l.pC.HOME_HEADER:
            let c = Math.min(t, l.vJ);
            return {
                width: c,
                height: c * (1 / l.sX),
            };
    }
}
