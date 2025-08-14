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
            sourceHeight: f,
        } = (0, r.GS)({
            image: l,
            cropDimensions: a,
            cropOriginCoordinates: o,
            maxDimensions: s,
            imageRotation: u,
        }),
        x = await t.arrayBuffer(),
        p = new Worker(new URL("/assets/" + n.u("86047"), n.b)),
        _ = new Promise((e, t) => {
            p.onmessage = (n) => {
                let { data: l } = n;
                if (l.type === i.u.CROP_GIF_COMPLETE) {
                    var r;
                    e(
                        ((r = new Blob([l.result])),
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
                        p.terminate();
                } else
                    l.type === i.u.CROP_GIF_ERROR &&
                        (t(Error("Error cropping GIF", { cause: null == l ? void 0 : l.error })), p.terminate());
            };
        });
    return (
        p.postMessage({
            type: i.u.CROP_GIF_START,
            gif: new Uint8Array(x),
            x: 0 | m,
            y: 0 | h,
            width: 0 | g,
            height: 0 | f,
            imageRotation: 0 | u,
            resizeWidth: c,
            resizeHeight: d,
        }),
        {
            result: _,
            cancelFn: () => p.terminate(),
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
        o = i.US;
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
            let l = i.SP;
            return s(i.MY, l, t, n);
        case i.pC.GUILD_BANNER:
            let r = i.t2;
            return s(i.Ij, r, t, n);
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
    let r = i.US;
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
            let o = Math.min(t, r);
            return {
                width: o,
                height: o * (1 / i.MY),
            };
        case i.pC.GUILD_BANNER:
            let s = Math.min(t, r);
            return {
                width: s,
                height: Math.min((9 / 16) * s, l),
            };
        case i.pC.VIDEO_BACKGROUND:
            let u = Math.min(t, r);
            return {
                width: u,
                height: (9 / 16) * u,
            };
        case i.pC.SCHEDULED_EVENT_IMAGE:
            let c = Math.min(t, r);
            return {
                width: c,
                height: 0.4 * c,
            };
        case i.pC.HOME_HEADER:
            let d = Math.min(t, r);
            return {
                width: d,
                height: d * (1 / i.sX),
            };
    }
}
