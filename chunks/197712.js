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
    l = r(36793),
    i = r(486324);
async function a(e) {
    let { file: t, image: n, cropDimensions: a, cropOriginCoordinates: o, maxDimensions: s, imageRotation: c = 0 } = e,
        {
            sourceX: u,
            sourceY: d,
            sourceWidth: h,
            sourceHeight: g
        } = (0, l.GS)({
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
                if (n.type === i.u.CROP_GIF_COMPLETE) {
                    var l;
                    e(
                        ((l = new Blob([n.result])),
                        new Promise((e) => {
                            let t = new FileReader();
                            (t.onload = (t) => {
                                var r;
                                let n = null == (r = t.target) ? void 0 : r.result;
                                'string' == typeof n ? e(n) : e('');
                            }),
                                t.readAsDataURL(l);
                        }))
                    ),
                        f.terminate();
                } else n.type === i.u.CROP_GIF_ERROR && (t(Error('Error cropping GIF')), f.terminate());
            };
        });
    return (
        f.postMessage({
            type: i.u.CROP_GIF_START,
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
function s(e, t, r, n, l) {
    let a = r,
        o = n,
        s = l ? i.US : i.vJ;
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
        case i.pC.AVATAR:
        case i.pC.AVATAR_DECORATION:
            return {
                width: t,
                height: r
            };
        case i.pC.BANNER:
            let l = n ? i.SP : i.qj;
            return s(i.MY, l, t, r, n);
        case i.pC.GUILD_BANNER:
            let a = n ? i.t2 : i.C5;
            return s(i.Ij, a, t, r, n);
        case i.pC.VIDEO_BACKGROUND:
            let o = n ? i.kP : i.PB;
            return s(i.Ff, o, t, r, n);
        case i.pC.SCHEDULED_EVENT_IMAGE:
            let c = n ? i.tv : i.WV;
            return s(i.ut, c, t, r, n);
        case i.pC.HOME_HEADER:
            return s(i.sX, i.SW, t, r, n);
    }
}
function u(e, t, r) {
    let n = {
            top: 0,
            bottom: 0,
            left: 0,
            right: 0
        },
        l = e - r.width,
        i = t - r.height;
    return 0 !== l && ((n.left = -Math.abs(l / 2)), (n.right = l / 2)), 0 !== i && ((n.bottom = -Math.abs(i / 2)), (n.top = i / 2)), n;
}
function d(e, t, r, n, l) {
    let a = l ? i.US : i.vJ;
    switch (e) {
        case i.pC.AVATAR:
        case i.pC.AVATAR_DECORATION:
            let o = Math.min(t, r);
            return {
                width: o,
                height: o
            };
        case i.pC.BANNER:
            let s = Math.min(t, a);
            return {
                width: s,
                height: s * (1 / i.MY)
            };
        case i.pC.GUILD_BANNER:
            let c = Math.min(t, a);
            return {
                width: c,
                height: Math.min((9 / 16) * c, n)
            };
        case i.pC.VIDEO_BACKGROUND:
            let u = Math.min(t, a);
            return {
                width: u,
                height: (9 / 16) * u
            };
        case i.pC.SCHEDULED_EVENT_IMAGE:
            let d = Math.min(t, a);
            return {
                width: d,
                height: 0.4 * d
            };
        case i.pC.HOME_HEADER:
            let h = Math.min(t, a);
            return {
                width: h,
                height: h * (1 / i.sX)
            };
    }
}
