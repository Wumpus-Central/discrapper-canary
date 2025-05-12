r.d(t, {
    $p: () => a,
    AK: () => d,
    Es: () => c,
    U$: () => o,
    kH: () => u
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
    l = r(486324);
async function a(e) {
    let { file: t, image: n, cropDimensions: a, cropOriginCoordinates: o, maxDimensions: s, imageRotation: c = 0 } = e,
        {
            sourceX: u,
            sourceY: d,
            sourceWidth: h,
            sourceHeight: g
        } = (0, i.GS)({
            image: n,
            cropDimensions: a,
            cropOriginCoordinates: o,
            maxDimensions: s,
            imageRotation: c
        }),
        m = await t.arrayBuffer(),
        f = new Worker(new URL('/assets/' + r.u('86047'), r.b)),
        b = new Promise((e, t) => {
            f.onmessage = (r) => {
                let { data: n } = r;
                if (n.type === l.u.CROP_GIF_COMPLETE) {
                    var i;
                    e(
                        ((i = new Blob([n.result])),
                        new Promise((e) => {
                            let t = new FileReader();
                            (t.onload = (t) => {
                                var r;
                                let n = null == (r = t.target) ? void 0 : r.result;
                                'string' == typeof n ? e(n) : e('');
                            }),
                                t.readAsDataURL(i);
                        }))
                    ),
                        f.terminate();
                } else n.type === l.u.CROP_GIF_ERROR && (t(Error('Error cropping GIF')), f.terminate());
            };
        });
    return (
        f.postMessage({
            type: l.u.CROP_GIF_START,
            gif: new Uint8Array(m),
            x: 0 | u,
            y: 0 | d,
            width: 0 | h,
            height: 0 | g,
            imageRotation: 0 | c
        }),
        {
            result: b,
            cancelFn: () => f.terminate()
        }
    );
}
function o(e, t, r) {
    return {
        x: (0, n.clamp)(e, r.left, r.right),
        y: (0, n.clamp)(t, r.bottom, r.top)
    };
}
function s(e, t, r, n, i) {
    let a = r,
        o = n,
        s = i ? l.US : l.vJ;
    return (r > s && ((a = s), (o = (s / r) * n)), r / n < e)
        ? {
              width: a,
              height: o
          }
        : {
              width: (t / o) * a,
              height: t
          };
}
function c(e, t, r, n) {
    switch (e) {
        case l.pC.AVATAR:
        case l.pC.AVATAR_DECORATION:
            return {
                width: t,
                height: r
            };
        case l.pC.BANNER:
            let i = n ? l.SP : l.qj;
            return s(l.MY, i, t, r, n);
        case l.pC.GUILD_BANNER:
            let a = n ? l.t2 : l.C5;
            return s(l.Ij, a, t, r, n);
        case l.pC.VIDEO_BACKGROUND:
            let o = n ? l.kP : l.PB;
            return s(l.Ff, o, t, r, n);
        case l.pC.SCHEDULED_EVENT_IMAGE:
            let c = n ? l.tv : l.WV;
            return s(l.ut, c, t, r, n);
        case l.pC.HOME_HEADER:
            return s(l.sX, l.SW, t, r, n);
    }
}
function u(e, t, r) {
    let n = {
            top: 0,
            bottom: 0,
            left: 0,
            right: 0
        },
        i = e - r.width,
        l = t - r.height;
    return 0 !== i && ((n.left = -Math.abs(i / 2)), (n.right = i / 2)), 0 !== l && ((n.bottom = -Math.abs(l / 2)), (n.top = l / 2)), n;
}
function d(e, t, r, n, i) {
    let a = i ? l.US : l.vJ;
    switch (e) {
        case l.pC.AVATAR:
        case l.pC.AVATAR_DECORATION:
            let o = Math.min(t, r);
            return {
                width: o,
                height: o
            };
        case l.pC.BANNER:
            let s = Math.min(t, a);
            return {
                width: s,
                height: s * (1 / l.MY)
            };
        case l.pC.GUILD_BANNER:
            let c = Math.min(t, a);
            return {
                width: c,
                height: Math.min((9 / 16) * c, n)
            };
        case l.pC.VIDEO_BACKGROUND:
            let u = Math.min(t, a);
            return {
                width: u,
                height: (9 / 16) * u
            };
        case l.pC.SCHEDULED_EVENT_IMAGE:
            let d = Math.min(t, a);
            return {
                width: d,
                height: 0.4 * d
            };
        case l.pC.HOME_HEADER:
            let h = Math.min(t, a);
            return {
                width: h,
                height: h * (1 / l.sX)
            };
    }
}
