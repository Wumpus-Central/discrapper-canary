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
function o(e, t, n, r, a) {
    let s = n,
        i = r,
        o = a ? l.US : l.vJ;
    return (n > o && ((s = o), (i = (o / n) * r)), n / r < e)
        ? {
              width: s,
              height: i
          }
        : {
              width: (t / i) * s,
              height: t
          };
}
function c(e, t, n, r) {
    switch (e) {
        case l.pC.AVATAR:
        case l.pC.AVATAR_DECORATION:
        case l.pC.GUILD_ICON:
            return {
                width: t,
                height: n
            };
        case l.pC.BANNER:
            let a = r ? l.SP : l.qj;
            return o(l.MY, a, t, n, r);
        case l.pC.GUILD_BANNER:
            let s = r ? l.t2 : l.C5;
            return o(l.Ij, s, t, n, r);
        case l.pC.VIDEO_BACKGROUND:
            let i = r ? l.kP : l.PB;
            return o(l.Ff, i, t, n, r);
        case l.pC.SCHEDULED_EVENT_IMAGE:
            let c = r ? l.tv : l.WV;
            return o(l.ut, c, t, n, r);
        case l.pC.HOME_HEADER:
            return o(l.sX, l.SW, t, n, r);
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
function d(e, t, n, r, a) {
    let s = a ? l.US : l.vJ;
    switch (e) {
        case l.pC.AVATAR:
        case l.pC.AVATAR_DECORATION:
        case l.pC.GUILD_ICON:
            let i = Math.min(t, n);
            return {
                width: i,
                height: i
            };
        case l.pC.BANNER:
            let o = Math.min(t, s);
            return {
                width: o,
                height: o * (1 / l.MY)
            };
        case l.pC.GUILD_BANNER:
            let c = Math.min(t, s);
            return {
                width: c,
                height: Math.min((9 / 16) * c, r)
            };
        case l.pC.VIDEO_BACKGROUND:
            let u = Math.min(t, s);
            return {
                width: u,
                height: (9 / 16) * u
            };
        case l.pC.SCHEDULED_EVENT_IMAGE:
            let d = Math.min(t, s);
            return {
                width: d,
                height: 0.4 * d
            };
        case l.pC.HOME_HEADER:
            let p = Math.min(t, s);
            return {
                width: p,
                height: p * (1 / l.sX)
            };
    }
}
