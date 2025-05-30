r.d(t, {
    $p: () => l,
    AK: () => d,
    Es: () => c,
    U$: () => i,
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
    s = r(486324);
async function l(e) {
    let { file: t, image: n, cropDimensions: l, cropOriginCoordinates: i, maxDimensions: o, imageRotation: c = 0, resizeWidth: u = null, resizeHeight: d = null } = e,
        {
            sourceX: p,
            sourceY: h,
            sourceWidth: g,
            sourceHeight: m
        } = (0, a.GS)({
            image: n,
            cropDimensions: l,
            cropOriginCoordinates: i,
            maxDimensions: o,
            imageRotation: c
        }),
        f = await t.arrayBuffer(),
        v = new Worker(new URL('/assets/' + r.u('86047'), r.b)),
        b = new Promise((e, t) => {
            v.onmessage = (r) => {
                let { data: n } = r;
                if (n.type === s.u.CROP_GIF_COMPLETE) {
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
                        v.terminate();
                } else n.type === s.u.CROP_GIF_ERROR && (t(Error('Error cropping GIF', { cause: null == n ? void 0 : n.error })), v.terminate());
            };
        });
    return (
        v.postMessage({
            type: s.u.CROP_GIF_START,
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
function i(e, t, r) {
    return {
        x: (0, n.clamp)(e, r.left, r.right),
        y: (0, n.clamp)(t, r.bottom, r.top)
    };
}
function o(e, t, r, n, a) {
    let l = r,
        i = n,
        o = a ? s.US : s.vJ;
    return (r > o && ((l = o), (i = (o / r) * n)), r / n < e)
        ? {
              width: l,
              height: i
          }
        : {
              width: (t / i) * l,
              height: t
          };
}
function c(e, t, r, n) {
    switch (e) {
        case s.pC.AVATAR:
        case s.pC.AVATAR_DECORATION:
        case s.pC.GUILD_ICON:
            return {
                width: t,
                height: r
            };
        case s.pC.BANNER:
            let a = n ? s.SP : s.qj;
            return o(s.MY, a, t, r, n);
        case s.pC.GUILD_BANNER:
            let l = n ? s.t2 : s.C5;
            return o(s.Ij, l, t, r, n);
        case s.pC.VIDEO_BACKGROUND:
            let i = n ? s.kP : s.PB;
            return o(s.Ff, i, t, r, n);
        case s.pC.SCHEDULED_EVENT_IMAGE:
            let c = n ? s.tv : s.WV;
            return o(s.ut, c, t, r, n);
        case s.pC.HOME_HEADER:
            return o(s.sX, s.SW, t, r, n);
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
        s = t - r.height;
    return 0 !== a && ((n.left = -Math.abs(a / 2)), (n.right = a / 2)), 0 !== s && ((n.bottom = -Math.abs(s / 2)), (n.top = s / 2)), n;
}
function d(e, t, r, n, a) {
    let l = a ? s.US : s.vJ;
    switch (e) {
        case s.pC.AVATAR:
        case s.pC.AVATAR_DECORATION:
        case s.pC.GUILD_ICON:
            let i = Math.min(t, r);
            return {
                width: i,
                height: i
            };
        case s.pC.BANNER:
            let o = Math.min(t, l);
            return {
                width: o,
                height: o * (1 / s.MY)
            };
        case s.pC.GUILD_BANNER:
            let c = Math.min(t, l);
            return {
                width: c,
                height: Math.min((9 / 16) * c, n)
            };
        case s.pC.VIDEO_BACKGROUND:
            let u = Math.min(t, l);
            return {
                width: u,
                height: (9 / 16) * u
            };
        case s.pC.SCHEDULED_EVENT_IMAGE:
            let d = Math.min(t, l);
            return {
                width: d,
                height: 0.4 * d
            };
        case s.pC.HOME_HEADER:
            let p = Math.min(t, l);
            return {
                width: p,
                height: p * (1 / s.sX)
            };
    }
}
