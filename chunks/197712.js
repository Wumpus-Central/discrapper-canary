n.d(t, {
    $p: () => a,
    AK: () => d,
    Es: () => u,
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
var r = n(392711),
    l = n(36793),
    i = n(486324);
async function a(e) {
    let {
            file: t,
            image: r,
            cropDimensions: a,
            cropOriginCoordinates: o,
            maxDimensions: s,
            imageRotation: u = 0,
            resizeWidth: c = null,
            resizeHeight: d = null,
        } = e,
        {
            sourceX: m,
            sourceY: f,
            sourceWidth: g,
            sourceHeight: h,
        } = (0, l.GS)({
            image: r,
            cropDimensions: a,
            cropOriginCoordinates: o,
            maxDimensions: s,
            imageRotation: u,
        }),
        x = await t.arrayBuffer(),
        p = new Worker(new URL("/assets/" + n.u("86047"), n.b)),
        b = new Promise((e, t) => {
            p.onmessage = (n) => {
                let { data: r } = n;
                if (r.type === i.u.CROP_GIF_COMPLETE) {
                    var l;
                    e(
                        ((l = new Blob([r.result])),
                        new Promise((e) => {
                            let t = new FileReader();
                            (t.onload = (t) => {
                                var n;
                                let r = null == (n = t.target) ? void 0 : n.result;
                                "string" == typeof r ? e(r) : e("");
                            }),
                                t.readAsDataURL(l);
                        })),
                    ),
                        p.terminate();
                } else
                    r.type === i.u.CROP_GIF_ERROR &&
                        (t(Error("Error cropping GIF", { cause: null == r ? void 0 : r.error })), p.terminate());
            };
        });
    return (
        p.postMessage({
            type: i.u.CROP_GIF_START,
            gif: new Uint8Array(x),
            x: 0 | m,
            y: 0 | f,
            width: 0 | g,
            height: 0 | h,
            imageRotation: 0 | u,
            resizeWidth: c,
            resizeHeight: d,
        }),
        {
            result: b,
            cancelFn: () => p.terminate(),
        }
    );
}
function o(e, t, n) {
    return {
        x: (0, r.clamp)(e, n.left, n.right),
        y: (0, r.clamp)(t, n.bottom, n.top),
    };
}
function s(e, t, n, r) {
    let l = n,
        a = r,
        o = i.US;
    return (n > o && ((l = o), (a = (o / n) * r)), n / r < e)
        ? {
              width: l,
              height: a,
          }
        : {
              width: (t / a) * l,
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
            let r = i.SP;
            return s(i.MY, r, t, n);
        case i.pC.GUILD_BANNER:
            let l = i.t2;
            return s(i.Ij, l, t, n);
        case i.pC.VIDEO_BACKGROUND:
            let a = i.kP;
            return s(i.Ff, a, t, n);
        case i.pC.SCHEDULED_EVENT_IMAGE:
            let o = i.tv;
            return s(i.ut, o, t, n);
        case i.pC.HOME_HEADER:
            return s(i.sX, i.SW, t, n);
    }
}
function c(e, t, n) {
    let r = {
            top: 0,
            bottom: 0,
            left: 0,
            right: 0,
        },
        l = e - n.width,
        i = t - n.height;
    return (
        0 !== l && ((r.left = -Math.abs(l / 2)), (r.right = l / 2)),
        0 !== i && ((r.bottom = -Math.abs(i / 2)), (r.top = i / 2)),
        r
    );
}
function d(e, t, n, r) {
    let l = i.US;
    switch (e) {
        case i.pC.AVATAR:
        case i.pC.AVATAR_DECORATION:
        case i.pC.GUILD_ICON:
            let a = Math.min(t, n);
            return {
                width: a,
                height: a,
            };
        case i.pC.BANNER:
            let o = Math.min(t, l);
            return {
                width: o,
                height: o * (1 / i.MY),
            };
        case i.pC.GUILD_BANNER:
            let s = Math.min(t, l);
            return {
                width: s,
                height: Math.min((9 / 16) * s, r),
            };
        case i.pC.VIDEO_BACKGROUND:
            let u = Math.min(t, l);
            return {
                width: u,
                height: (9 / 16) * u,
            };
        case i.pC.SCHEDULED_EVENT_IMAGE:
            let c = Math.min(t, l);
            return {
                width: c,
                height: 0.4 * c,
            };
        case i.pC.HOME_HEADER:
            let d = Math.min(t, l);
            return {
                width: d,
                height: d * (1 / i.sX),
            };
    }
}
