n.d(t, {
    $p: () => l,
    AK: () => h,
    Es: () => u,
    U$: () => s,
    kH: () => o
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
async function l(e) {
    let { file: t, image: i, cropDimensions: l, cropOriginCoordinates: s, maxDimensions: c, imageRotation: u = 0 } = e,
        {
            sourceX: o,
            sourceY: h,
            sourceWidth: d,
            sourceHeight: g
        } = (0, r.GS)({
            image: i,
            cropDimensions: l,
            cropOriginCoordinates: s,
            maxDimensions: c,
            imageRotation: u
        }),
        C = await t.arrayBuffer(),
        m = new Worker(new URL('/assets/' + n.u('86047'), n.b)),
        p = new Promise((e, t) => {
            m.onmessage = (n) => {
                let { data: i } = n;
                if (i.type === a.u.CROP_GIF_COMPLETE) {
                    var r;
                    e(
                        ((r = new Blob([i.result])),
                        new Promise((e) => {
                            let t = new FileReader();
                            (t.onload = (t) => {
                                var n;
                                let i = null === (n = t.target) || void 0 === n ? void 0 : n.result;
                                'string' == typeof i ? e(i) : e('');
                            }),
                                t.readAsDataURL(r);
                        }))
                    ),
                        m.terminate();
                } else i.type === a.u.CROP_GIF_ERROR && (t(Error('Error cropping GIF')), m.terminate());
            };
        });
    return (
        m.postMessage({
            type: a.u.CROP_GIF_START,
            gif: new Uint8Array(C),
            x: 0 | o,
            y: 0 | h,
            width: 0 | d,
            height: 0 | g,
            imageRotation: 0 | u
        }),
        {
            result: p,
            cancelFn: () => m.terminate()
        }
    );
}
function s(e, t, n) {
    return {
        x: (0, i.clamp)(e, n.left, n.right),
        y: (0, i.clamp)(t, n.bottom, n.top)
    };
}
function c(e, t, n, i, r) {
    let l = n,
        s = i,
        c = r ? a.US : a.vJ;
    return (n > c && ((l = c), (s = (c / n) * i)), n / i < e)
        ? {
              width: l,
              height: s
          }
        : {
              width: (t / s) * l,
              height: t
          };
}
function u(e, t, n, i) {
    switch (e) {
        case a.pC.AVATAR:
        case a.pC.AVATAR_DECORATION:
            return {
                width: t,
                height: n
            };
        case a.pC.BANNER:
            let r = i ? a.SP : a.qj;
            return c(a.MY, r, t, n, i);
        case a.pC.GUILD_BANNER:
            let l = i ? a.t2 : a.C5;
            return c(a.Ij, l, t, n, i);
        case a.pC.VIDEO_BACKGROUND:
            let s = i ? a.kP : a.PB;
            return c(a.Ff, s, t, n, i);
        case a.pC.SCHEDULED_EVENT_IMAGE:
            let u = i ? a.tv : a.WV;
            return c(a.ut, u, t, n, i);
        case a.pC.HOME_HEADER:
            return c(a.sX, a.SW, t, n, i);
    }
}
function o(e, t, n) {
    let i = {
            top: 0,
            bottom: 0,
            left: 0,
            right: 0
        },
        r = e - n.width,
        a = t - n.height;
    return 0 !== r && ((i.left = -Math.abs(r / 2)), (i.right = r / 2)), 0 !== a && ((i.bottom = -Math.abs(a / 2)), (i.top = a / 2)), i;
}
function h(e, t, n, i, r) {
    let l = r ? a.US : a.vJ;
    switch (e) {
        case a.pC.AVATAR:
        case a.pC.AVATAR_DECORATION:
            let s = Math.min(t, n);
            return {
                width: s,
                height: s
            };
        case a.pC.BANNER:
            let c = Math.min(t, l);
            return {
                width: c,
                height: c * (1 / a.MY)
            };
        case a.pC.GUILD_BANNER:
            let u = Math.min(t, l);
            return {
                width: u,
                height: Math.min((9 / 16) * u, i)
            };
        case a.pC.VIDEO_BACKGROUND:
            let o = Math.min(t, l);
            return {
                width: o,
                height: (9 / 16) * o
            };
        case a.pC.SCHEDULED_EVENT_IMAGE:
            let h = Math.min(t, l);
            return {
                width: h,
                height: 0.4 * h
            };
        case a.pC.HOME_HEADER:
            let d = Math.min(t, l);
            return {
                width: d,
                height: d * (1 / a.sX)
            };
    }
}
