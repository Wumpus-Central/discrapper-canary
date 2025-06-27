n.d(t, {
    $p: () => s,
    AK: () => d,
    Es: () => c,
    U$: () => i,
    kH: () => u
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
    a = n(486324);
async function s(e) {
    let { file: t, image: r, cropDimensions: s, cropOriginCoordinates: i, maxDimensions: o, imageRotation: c = 0, resizeWidth: u = null, resizeHeight: d = null } = e,
        {
            sourceX: h,
            sourceY: p,
            sourceWidth: g,
            sourceHeight: m
        } = (0, l.GS)({
            image: r,
            cropDimensions: s,
            cropOriginCoordinates: i,
            maxDimensions: o,
            imageRotation: c
        }),
        f = await t.arrayBuffer(),
        v = new Worker(new URL('/assets/' + n.u('86047'), n.b)),
        x = new Promise((e, t) => {
            v.onmessage = (n) => {
                let { data: r } = n;
                if (r.type === a.u.CROP_GIF_COMPLETE) {
                    var l;
                    e(
                        ((l = new Blob([r.result])),
                        new Promise((e) => {
                            let t = new FileReader();
                            (t.onload = (t) => {
                                var n;
                                let r = null == (n = t.target) ? void 0 : n.result;
                                'string' == typeof r ? e(r) : e('');
                            }),
                                t.readAsDataURL(l);
                        }))
                    ),
                        v.terminate();
                } else r.type === a.u.CROP_GIF_ERROR && (t(Error('Error cropping GIF', { cause: null == r ? void 0 : r.error })), v.terminate());
            };
        });
    return (
        v.postMessage({
            type: a.u.CROP_GIF_START,
            gif: new Uint8Array(f),
            x: 0 | h,
            y: 0 | p,
            width: 0 | g,
            height: 0 | m,
            imageRotation: 0 | c,
            resizeWidth: u,
            resizeHeight: d
        }),
        {
            result: x,
            cancelFn: () => v.terminate()
        }
    );
}
function i(e, t, n) {
    return {
        x: (0, r.clamp)(e, n.left, n.right),
        y: (0, r.clamp)(t, n.bottom, n.top)
    };
}
function o(e, t, n, r) {
    let l = n,
        s = r,
        i = a.US;
    return (n > i && ((l = i), (s = (i / n) * r)), n / r < e)
        ? {
              width: l,
              height: s
          }
        : {
              width: (t / s) * l,
              height: t
          };
}
function c(e, t, n) {
    switch (e) {
        case a.pC.AVATAR:
        case a.pC.AVATAR_DECORATION:
        case a.pC.GUILD_ICON:
            return {
                width: t,
                height: n
            };
        case a.pC.BANNER:
            let r = a.SP;
            return o(a.MY, r, t, n);
        case a.pC.GUILD_BANNER:
            let l = a.t2;
            return o(a.Ij, l, t, n);
        case a.pC.VIDEO_BACKGROUND:
            let s = a.kP;
            return o(a.Ff, s, t, n);
        case a.pC.SCHEDULED_EVENT_IMAGE:
            let i = a.tv;
            return o(a.ut, i, t, n);
        case a.pC.HOME_HEADER:
            return o(a.sX, a.SW, t, n);
    }
}
function u(e, t, n) {
    let r = {
            top: 0,
            bottom: 0,
            left: 0,
            right: 0
        },
        l = e - n.width,
        a = t - n.height;
    return 0 !== l && ((r.left = -Math.abs(l / 2)), (r.right = l / 2)), 0 !== a && ((r.bottom = -Math.abs(a / 2)), (r.top = a / 2)), r;
}
function d(e, t, n, r) {
    let l = a.US;
    switch (e) {
        case a.pC.AVATAR:
        case a.pC.AVATAR_DECORATION:
        case a.pC.GUILD_ICON:
            let s = Math.min(t, n);
            return {
                width: s,
                height: s
            };
        case a.pC.BANNER:
            let i = Math.min(t, l);
            return {
                width: i,
                height: i * (1 / a.MY)
            };
        case a.pC.GUILD_BANNER:
            let o = Math.min(t, l);
            return {
                width: o,
                height: Math.min((9 / 16) * o, r)
            };
        case a.pC.VIDEO_BACKGROUND:
            let c = Math.min(t, l);
            return {
                width: c,
                height: (9 / 16) * c
            };
        case a.pC.SCHEDULED_EVENT_IMAGE:
            let u = Math.min(t, l);
            return {
                width: u,
                height: 0.4 * u
            };
        case a.pC.HOME_HEADER:
            let d = Math.min(t, l);
            return {
                width: d,
                height: d * (1 / a.sX)
            };
    }
}
