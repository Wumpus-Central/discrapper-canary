n.d(e, {
    $p: () => l,
    AK: () => h,
    Es: () => o,
    U$: () => s,
    kH: () => u
}),
    n(315314),
    n(309749),
    n(610138),
    n(216116),
    n(78328),
    n(815648),
    n(47120),
    n(411104),
    n(518263),
    n(970173),
    n(520712),
    n(268111),
    n(941497),
    n(32026),
    n(480839),
    n(744285),
    n(492257),
    n(873817);
var i = n(392711),
    r = n(36793),
    a = n(486324);
async function l(t) {
    let { file: e, image: i, cropDimensions: l, cropOriginCoordinates: s, maxDimensions: c, imageRotation: o = 0 } = t,
        {
            sourceX: u,
            sourceY: h,
            sourceWidth: d,
            sourceHeight: p
        } = (0, r.GS)({
            image: i,
            cropDimensions: l,
            cropOriginCoordinates: s,
            maxDimensions: c,
            imageRotation: o
        }),
        C = await e.arrayBuffer(),
        g = new Worker(new URL('/assets/' + n.u('86047'), n.b)),
        m = new Promise((t, e) => {
            g.onmessage = (n) => {
                let { data: i } = n;
                if (i.type === a.u.CROP_GIF_COMPLETE) {
                    var r;
                    t(
                        ((r = new Blob([i.result])),
                        new Promise((t) => {
                            let e = new FileReader();
                            (e.onload = (e) => {
                                var n;
                                let i = null === (n = e.target) || void 0 === n ? void 0 : n.result;
                                'string' == typeof i ? t(i) : t('');
                            }),
                                e.readAsDataURL(r);
                        }))
                    ),
                        g.terminate();
                } else i.type === a.u.CROP_GIF_ERROR && (e(Error('Error cropping GIF')), g.terminate());
            };
        });
    return (
        g.postMessage({
            type: a.u.CROP_GIF_START,
            gif: new Uint8Array(C),
            x: 0 | u,
            y: 0 | h,
            width: 0 | d,
            height: 0 | p,
            imageRotation: 0 | o
        }),
        {
            result: m,
            cancelFn: () => g.terminate()
        }
    );
}
function s(t, e, n) {
    return {
        x: (0, i.clamp)(t, n.left, n.right),
        y: (0, i.clamp)(e, n.bottom, n.top)
    };
}
function c(t, e, n, i, r) {
    let l = n,
        s = i,
        c = r ? a.US : a.vJ;
    return (n > c && ((l = c), (s = (c / n) * i)), n / i < t)
        ? {
              width: l,
              height: s
          }
        : {
              width: (e / s) * l,
              height: e
          };
}
function o(t, e, n, i) {
    switch (t) {
        case a.pC.AVATAR:
        case a.pC.AVATAR_DECORATION:
            return {
                width: e,
                height: n
            };
        case a.pC.BANNER:
            let r = i ? a.SP : a.qj;
            return c(a.MY, r, e, n, i);
        case a.pC.GUILD_BANNER:
            let l = i ? a.t2 : a.C5;
            return c(a.Ij, l, e, n, i);
        case a.pC.VIDEO_BACKGROUND:
            let s = i ? a.kP : a.PB;
            return c(a.Ff, s, e, n, i);
        case a.pC.SCHEDULED_EVENT_IMAGE:
            let o = i ? a.tv : a.WV;
            return c(a.ut, o, e, n, i);
        case a.pC.HOME_HEADER:
            return c(a.sX, a.SW, e, n, i);
    }
}
function u(t, e, n) {
    let i = {
            top: 0,
            bottom: 0,
            left: 0,
            right: 0
        },
        r = t - n.width,
        a = e - n.height;
    return 0 !== r && ((i.left = -Math.abs(r / 2)), (i.right = r / 2)), 0 !== a && ((i.bottom = -Math.abs(a / 2)), (i.top = a / 2)), i;
}
function h(t, e, n, i, r) {
    let l = r ? a.US : a.vJ;
    switch (t) {
        case a.pC.AVATAR:
        case a.pC.AVATAR_DECORATION:
            let s = Math.min(e, n);
            return {
                width: s,
                height: s
            };
        case a.pC.BANNER:
            let c = Math.min(e, l);
            return {
                width: c,
                height: c * (1 / a.MY)
            };
        case a.pC.GUILD_BANNER:
            let o = Math.min(e, l);
            return {
                width: o,
                height: Math.min((9 / 16) * o, i)
            };
        case a.pC.VIDEO_BACKGROUND:
            let u = Math.min(e, l);
            return {
                width: u,
                height: (9 / 16) * u
            };
        case a.pC.SCHEDULED_EVENT_IMAGE:
            let h = Math.min(e, l);
            return {
                width: h,
                height: 0.4 * h
            };
        case a.pC.HOME_HEADER:
            let d = Math.min(e, l);
            return {
                width: d,
                height: d * (1 / a.sX)
            };
    }
}
