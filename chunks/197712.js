r.d(t, {
    $p: () => i,
    AK: () => d,
    Es: () => c,
    U$: () => s,
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
    a = r(36793),
    l = r(486324);
async function i(e) {
    let { file: t, image: n, cropDimensions: i, cropOriginCoordinates: s, maxDimensions: o, imageRotation: c = 0 } = e,
        {
            sourceX: u,
            sourceY: d,
            sourceWidth: p,
            sourceHeight: g
        } = (0, a.GS)({
            image: n,
            cropDimensions: i,
            cropOriginCoordinates: s,
            maxDimensions: o,
            imageRotation: c
        }),
        h = await t.arrayBuffer(),
        m = new Worker(new URL('/assets/' + r.u('86047'), r.b)),
        f = new Promise((e, t) => {
            m.onmessage = (r) => {
                let { data: n } = r;
                if (n.type === l.u.CROP_GIF_COMPLETE) {
                    var a;
                    e(
                        ((a = new Blob([n.result])),
                        new Promise((e) => {
                            let t = new FileReader();
                            (t.onload = (t) => {
                                var r;
                                let n = null == (r = t.target) ? void 0 : r.result;
                                'string' == typeof n ? e(n) : e('');
                            }),
                                t.readAsDataURL(a);
                        }))
                    ),
                        m.terminate();
                } else n.type === l.u.CROP_GIF_ERROR && (t(Error('Error cropping GIF', { cause: null == n ? void 0 : n.error })), m.terminate());
            };
        });
    return (
        m.postMessage({
            type: l.u.CROP_GIF_START,
            gif: new Uint8Array(h),
            x: 0 | u,
            y: 0 | d,
            width: 0 | p,
            height: 0 | g,
            imageRotation: 0 | c
        }),
        {
            result: f,
            cancelFn: () => m.terminate()
        }
    );
}
function s(e, t, r) {
    return {
        x: (0, n.clamp)(e, r.left, r.right),
        y: (0, n.clamp)(t, r.bottom, r.top)
    };
}
function o(e, t, r, n, a) {
    let i = r,
        s = n,
        o = a ? l.US : l.vJ;
    return (r > o && ((i = o), (s = (o / r) * n)), r / n < e)
        ? {
              width: i,
              height: s
          }
        : {
              width: (t / s) * i,
              height: t
          };
}
function c(e, t, r, n) {
    switch (e) {
        case l.pC.AVATAR:
        case l.pC.AVATAR_DECORATION:
        case l.pC.GUILD_ICON:
            return {
                width: t,
                height: r
            };
        case l.pC.BANNER:
            let a = n ? l.SP : l.qj;
            return o(l.MY, a, t, r, n);
        case l.pC.GUILD_BANNER:
            let i = n ? l.t2 : l.C5;
            return o(l.Ij, i, t, r, n);
        case l.pC.VIDEO_BACKGROUND:
            let s = n ? l.kP : l.PB;
            return o(l.Ff, s, t, r, n);
        case l.pC.SCHEDULED_EVENT_IMAGE:
            let c = n ? l.tv : l.WV;
            return o(l.ut, c, t, r, n);
        case l.pC.HOME_HEADER:
            return o(l.sX, l.SW, t, r, n);
    }
}
function u(e, t, r) {
    let n = {
            top: 0,
            bottom: 0,
            left: 0,
            right: 0
        },
        a = e - r.width,
        l = t - r.height;
    return 0 !== a && ((n.left = -Math.abs(a / 2)), (n.right = a / 2)), 0 !== l && ((n.bottom = -Math.abs(l / 2)), (n.top = l / 2)), n;
}
function d(e, t, r, n, a) {
    let i = a ? l.US : l.vJ;
    switch (e) {
        case l.pC.AVATAR:
        case l.pC.AVATAR_DECORATION:
        case l.pC.GUILD_ICON:
            let s = Math.min(t, r);
            return {
                width: s,
                height: s
            };
        case l.pC.BANNER:
            let o = Math.min(t, i);
            return {
                width: o,
                height: o * (1 / l.MY)
            };
        case l.pC.GUILD_BANNER:
            let c = Math.min(t, i);
            return {
                width: c,
                height: Math.min((9 / 16) * c, n)
            };
        case l.pC.VIDEO_BACKGROUND:
            let u = Math.min(t, i);
            return {
                width: u,
                height: (9 / 16) * u
            };
        case l.pC.SCHEDULED_EVENT_IMAGE:
            let d = Math.min(t, i);
            return {
                width: d,
                height: 0.4 * d
            };
        case l.pC.HOME_HEADER:
            let p = Math.min(t, i);
            return {
                width: p,
                height: p * (1 / l.sX)
            };
    }
}
