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
    a = n(36793),
    l = n(486324);
async function s(e) {
    let { file: t, image: r, cropDimensions: s, cropOriginCoordinates: i, maxDimensions: o, imageRotation: c = 0, resizeWidth: u = null, resizeHeight: d = null } = e,
        {
            sourceX: p,
            sourceY: h,
            sourceWidth: g,
            sourceHeight: m
        } = (0, a.GS)({
            image: r,
            cropDimensions: s,
            cropOriginCoordinates: i,
            maxDimensions: o,
            imageRotation: c
        }),
        f = await t.arrayBuffer(),
        v = new Worker(new URL('/assets/' + n.u('86047'), n.b)),
        b = new Promise((e, t) => {
            v.onmessage = (n) => {
                let { data: r } = n;
                if (r.type === l.u.CROP_GIF_COMPLETE) {
                    var a;
                    e(
                        ((a = new Blob([r.result])),
                        new Promise((e) => {
                            let t = new FileReader();
                            (t.onload = (t) => {
                                var n;
                                let r = null == (n = t.target) ? void 0 : n.result;
                                'string' == typeof r ? e(r) : e('');
                            }),
                                t.readAsDataURL(a);
                        }))
                    ),
                        v.terminate();
                } else r.type === l.u.CROP_GIF_ERROR && (t(Error('Error cropping GIF', { cause: null == r ? void 0 : r.error })), v.terminate());
            };
        });
    return (
        v.postMessage({
            type: l.u.CROP_GIF_START,
            gif: new Uint8Array(f),
            x: 0 | p,
            y: 0 | h,
            width: 0 | g,
            height: 0 | m,
            imageRotation: 0 | c,
            resizeWidth: u,
            resizeHeight: d
        }),
        {
            result: b,
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
    let a = n,
        s = r,
        i = l.US;
    return (n > i && ((a = i), (s = (i / n) * r)), n / r < e)
        ? {
              width: a,
              height: s
          }
        : {
              width: (t / s) * a,
              height: t
          };
}
function c(e, t, n) {
    switch (e) {
        case l.pC.AVATAR:
        case l.pC.AVATAR_DECORATION:
        case l.pC.GUILD_ICON:
            return {
                width: t,
                height: n
            };
        case l.pC.BANNER:
            let r = l.SP;
            return o(l.MY, r, t, n);
        case l.pC.GUILD_BANNER:
            let a = l.t2;
            return o(l.Ij, a, t, n);
        case l.pC.VIDEO_BACKGROUND:
            let s = l.kP;
            return o(l.Ff, s, t, n);
        case l.pC.SCHEDULED_EVENT_IMAGE:
            let i = l.tv;
            return o(l.ut, i, t, n);
        case l.pC.HOME_HEADER:
            return o(l.sX, l.SW, t, n);
    }
}
function u(e, t, n) {
    let r = {
            top: 0,
            bottom: 0,
            left: 0,
            right: 0
        },
        a = e - n.width,
        l = t - n.height;
    return 0 !== a && ((r.left = -Math.abs(a / 2)), (r.right = a / 2)), 0 !== l && ((r.bottom = -Math.abs(l / 2)), (r.top = l / 2)), r;
}
function d(e, t, n, r) {
    let a = l.US;
    switch (e) {
        case l.pC.AVATAR:
        case l.pC.AVATAR_DECORATION:
        case l.pC.GUILD_ICON:
            let s = Math.min(t, n);
            return {
                width: s,
                height: s
            };
        case l.pC.BANNER:
            let i = Math.min(t, a);
            return {
                width: i,
                height: i * (1 / l.MY)
            };
        case l.pC.GUILD_BANNER:
            let o = Math.min(t, a);
            return {
                width: o,
                height: Math.min((9 / 16) * o, r)
            };
        case l.pC.VIDEO_BACKGROUND:
            let c = Math.min(t, a);
            return {
                width: c,
                height: (9 / 16) * c
            };
        case l.pC.SCHEDULED_EVENT_IMAGE:
            let u = Math.min(t, a);
            return {
                width: u,
                height: 0.4 * u
            };
        case l.pC.HOME_HEADER:
            let d = Math.min(t, a);
            return {
                width: d,
                height: d * (1 / l.sX)
            };
    }
}
