r.d(t, {
    $p: () => o,
    AK: () => d,
    Es: () => c,
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
    i = r(36793),
    a = r(486324);
async function o(e) {
    let {
            file: t,
            image: n,
            cropDimensions: o,
            cropOriginCoordinates: s,
            maxDimensions: l,
            imageRotation: c = 0,
            resizeWidth: u = null,
            resizeHeight: d = null,
        } = e,
        {
            sourceX: m,
            sourceY: g,
            sourceWidth: h,
            sourceHeight: p,
        } = (0, i.GS)({
            image: n,
            cropDimensions: o,
            cropOriginCoordinates: s,
            maxDimensions: l,
            imageRotation: c,
        }),
        E = await t.arrayBuffer(),
        C = new Worker(new URL("/assets/" + r.u("86047"), r.b)),
        f = new Promise((e, t) => {
            C.onmessage = (r) => {
                let { data: n } = r;
                if (n.type === a.u.CROP_GIF_COMPLETE) {
                    var i;
                    e(
                        ((i = new Blob([n.result])),
                        new Promise((e) => {
                            let t = new FileReader();
                            (t.onload = (t) => {
                                var r;
                                let n = null == (r = t.target) ? void 0 : r.result;
                                "string" == typeof n ? e(n) : e("");
                            }),
                                t.readAsDataURL(i);
                        })),
                    ),
                        C.terminate();
                } else
                    n.type === a.u.CROP_GIF_ERROR &&
                        (t(Error("Error cropping GIF", { cause: null == n ? void 0 : n.error })), C.terminate());
            };
        });
    return (
        C.postMessage({
            type: a.u.CROP_GIF_START,
            gif: new Uint8Array(E),
            x: 0 | m,
            y: 0 | g,
            width: 0 | h,
            height: 0 | p,
            imageRotation: 0 | c,
            resizeWidth: u,
            resizeHeight: d,
        }),
        {
            result: f,
            cancelFn: () => C.terminate(),
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
    let i = r,
        o = n,
        s = a.vJ;
    return (r > s && ((i = s), (o = (s / r) * n)), r / n < e)
        ? {
              width: i,
              height: o,
          }
        : {
              width: (t / o) * i,
              height: t,
          };
}
function c(e, t, r) {
    switch (e) {
        case a.pC.AVATAR:
        case a.pC.AVATAR_DECORATION:
        case a.pC.GUILD_ICON:
            return {
                width: t,
                height: r,
            };
        case a.pC.BANNER:
            let n = a.qj;
            return l(a.MY, n, t, r);
        case a.pC.GUILD_BANNER:
            let i = a.C5;
            return l(a.Ij, i, t, r);
        case a.pC.VIDEO_BACKGROUND:
            let o = a.PB;
            return l(a.Ff, o, t, r);
        case a.pC.SCHEDULED_EVENT_IMAGE:
            let s = a.WV;
            return l(a.ut, s, t, r);
        case a.pC.HOME_HEADER:
            return l(a.sX, a.SW, t, r);
    }
}
function u(e, t, r) {
    let n = {
            top: 0,
            bottom: 0,
            left: 0,
            right: 0,
        },
        i = e - r.width,
        a = t - r.height;
    return (
        0 !== i && ((n.left = -Math.abs(i / 2)), (n.right = i / 2)),
        0 !== a && ((n.bottom = -Math.abs(a / 2)), (n.top = a / 2)),
        n
    );
}
function d(e, t, r, n) {
    switch (e) {
        case a.pC.AVATAR:
        case a.pC.AVATAR_DECORATION:
        case a.pC.GUILD_ICON:
            let i = Math.min(t, r);
            return {
                width: i,
                height: i,
            };
        case a.pC.BANNER:
            let o = Math.min(t, a.vJ);
            return {
                width: o,
                height: o * (1 / a.MY),
            };
        case a.pC.GUILD_BANNER:
            let s = Math.min(t, a.vJ);
            return {
                width: s,
                height: Math.min((9 / 16) * s, n),
            };
        case a.pC.VIDEO_BACKGROUND:
            let l = Math.min(t, a.vJ);
            return {
                width: l,
                height: (9 / 16) * l,
            };
        case a.pC.SCHEDULED_EVENT_IMAGE:
            let c = Math.min(t, a.vJ);
            return {
                width: c,
                height: 0.4 * c,
            };
        case a.pC.HOME_HEADER:
            let u = Math.min(t, a.vJ);
            return {
                width: u,
                height: u * (1 / a.sX),
            };
    }
}
