n.d(t, {
    $p: () => s,
    AK: () => h,
    Es: () => o,
    U$: () => l,
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
var r = n(392711),
    i = n(36793),
    a = n(486324);
async function s(e) {
    let { file: t, image: r, cropDimensions: s, cropOriginCoordinates: l, maxDimensions: c, imageRotation: o = 0 } = e,
        {
            sourceX: u,
            sourceY: h,
            sourceWidth: d,
            sourceHeight: p
        } = (0, i.GS)({
            image: r,
            cropDimensions: s,
            cropOriginCoordinates: l,
            maxDimensions: c,
            imageRotation: o
        }),
        m = await t.arrayBuffer(),
        g = new Worker(new URL('/assets/' + n.u('86047'), n.b)),
        C = new Promise((e, t) => {
            g.onmessage = (n) => {
                let { data: r } = n;
                if (r.type === a.u.CROP_GIF_COMPLETE) {
                    var i;
                    e(
                        ((i = new Blob([r.result])),
                        new Promise((e) => {
                            let t = new FileReader();
                            (t.onload = (t) => {
                                var n;
                                let r = null === (n = t.target) || void 0 === n ? void 0 : n.result;
                                'string' == typeof r ? e(r) : e('');
                            }),
                                t.readAsDataURL(i);
                        }))
                    ),
                        g.terminate();
                } else r.type === a.u.CROP_GIF_ERROR && (t(Error('Error cropping GIF')), g.terminate());
            };
        });
    return (
        g.postMessage({
            type: a.u.CROP_GIF_START,
            gif: new Uint8Array(m),
            x: 0 | u,
            y: 0 | h,
            width: 0 | d,
            height: 0 | p,
            imageRotation: 0 | o
        }),
        {
            result: C,
            cancelFn: () => g.terminate()
        }
    );
}
function l(e, t, n) {
    return {
        x: (0, r.clamp)(e, n.left, n.right),
        y: (0, r.clamp)(t, n.bottom, n.top)
    };
}
function c(e, t, n, r, i) {
    let s = n,
        l = r,
        c = i ? a.US : a.vJ;
    return (n > c && ((s = c), (l = (c / n) * r)), n / r < e)
        ? {
              width: s,
              height: l
          }
        : {
              width: (t / l) * s,
              height: t
          };
}
function o(e, t, n, r) {
    switch (e) {
        case a.pC.AVATAR:
        case a.pC.AVATAR_DECORATION:
            return {
                width: t,
                height: n
            };
        case a.pC.BANNER:
            let i = r ? a.SP : a.qj;
            return c(a.MY, i, t, n, r);
        case a.pC.GUILD_BANNER:
            let s = r ? a.t2 : a.C5;
            return c(a.Ij, s, t, n, r);
        case a.pC.VIDEO_BACKGROUND:
            let l = r ? a.kP : a.PB;
            return c(a.Ff, l, t, n, r);
        case a.pC.SCHEDULED_EVENT_IMAGE:
            let o = r ? a.tv : a.WV;
            return c(a.ut, o, t, n, r);
        case a.pC.HOME_HEADER:
            return c(a.sX, a.SW, t, n, r);
    }
}
function u(e, t, n) {
    let r = {
            top: 0,
            bottom: 0,
            left: 0,
            right: 0
        },
        i = e - n.width,
        a = t - n.height;
    return 0 !== i && ((r.left = -Math.abs(i / 2)), (r.right = i / 2)), 0 !== a && ((r.bottom = -Math.abs(a / 2)), (r.top = a / 2)), r;
}
function h(e, t, n, r, i) {
    let s = i ? a.US : a.vJ;
    switch (e) {
        case a.pC.AVATAR:
        case a.pC.AVATAR_DECORATION:
            let l = Math.min(t, n);
            return {
                width: l,
                height: l
            };
        case a.pC.BANNER:
            let c = Math.min(t, s);
            return {
                width: c,
                height: c * (1 / a.MY)
            };
        case a.pC.GUILD_BANNER:
            let o = Math.min(t, s);
            return {
                width: o,
                height: Math.min((9 / 16) * o, r)
            };
        case a.pC.VIDEO_BACKGROUND:
            let u = Math.min(t, s);
            return {
                width: u,
                height: (9 / 16) * u
            };
        case a.pC.SCHEDULED_EVENT_IMAGE:
            let h = Math.min(t, s);
            return {
                width: h,
                height: 0.4 * h
            };
        case a.pC.HOME_HEADER:
            let d = Math.min(t, s);
            return {
                width: d,
                height: d * (1 / a.sX)
            };
    }
}
