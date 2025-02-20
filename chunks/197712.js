n.d(t, {
    $p: () => o,
    AK: () => d,
    Es: () => c,
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
    n(873817),
    n(610885),
    n(126298);
var r = n(392711),
    i = n(36793),
    a = n(486324);
async function o(e) {
    let { file: t, image: r, cropDimensions: o, cropOriginCoordinates: s, maxDimensions: l, imageRotation: c = 0 } = e,
        {
            sourceX: u,
            sourceY: d,
            sourceWidth: m,
            sourceHeight: g
        } = (0, i.GS)({
            image: r,
            cropDimensions: o,
            cropOriginCoordinates: s,
            maxDimensions: l,
            imageRotation: c
        }),
        h = await t.arrayBuffer(),
        p = new Worker(new URL('/assets/' + n.u('86047'), n.b)),
        E = new Promise((e, t) => {
            p.onmessage = (n) => {
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
                        p.terminate();
                } else r.type === a.u.CROP_GIF_ERROR && (t(Error('Error cropping GIF')), p.terminate());
            };
        });
    return (
        p.postMessage({
            type: a.u.CROP_GIF_START,
            gif: new Uint8Array(h),
            x: 0 | u,
            y: 0 | d,
            width: 0 | m,
            height: 0 | g,
            imageRotation: 0 | c
        }),
        {
            result: E,
            cancelFn: () => p.terminate()
        }
    );
}
function s(e, t, n) {
    return {
        x: (0, r.clamp)(e, n.left, n.right),
        y: (0, r.clamp)(t, n.bottom, n.top)
    };
}
function l(e, t, n, r, i) {
    let o = n,
        s = r,
        l = i ? a.US : a.vJ;
    return (n > l && ((o = l), (s = (l / n) * r)), n / r < e)
        ? {
              width: o,
              height: s
          }
        : {
              width: (t / s) * o,
              height: t
          };
}
function c(e, t, n, r) {
    switch (e) {
        case a.pC.AVATAR:
        case a.pC.AVATAR_DECORATION:
            return {
                width: t,
                height: n
            };
        case a.pC.BANNER:
            let i = r ? a.SP : a.qj;
            return l(a.MY, i, t, n, r);
        case a.pC.GUILD_BANNER:
            let o = r ? a.t2 : a.C5;
            return l(a.Ij, o, t, n, r);
        case a.pC.VIDEO_BACKGROUND:
            let s = r ? a.kP : a.PB;
            return l(a.Ff, s, t, n, r);
        case a.pC.SCHEDULED_EVENT_IMAGE:
            let c = r ? a.tv : a.WV;
            return l(a.ut, c, t, n, r);
        case a.pC.HOME_HEADER:
            return l(a.sX, a.SW, t, n, r);
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
function d(e, t, n, r, i) {
    let o = i ? a.US : a.vJ;
    switch (e) {
        case a.pC.AVATAR:
        case a.pC.AVATAR_DECORATION:
            let s = Math.min(t, n);
            return {
                width: s,
                height: s
            };
        case a.pC.BANNER:
            let l = Math.min(t, o);
            return {
                width: l,
                height: l * (1 / a.MY)
            };
        case a.pC.GUILD_BANNER:
            let c = Math.min(t, o);
            return {
                width: c,
                height: Math.min((9 / 16) * c, r)
            };
        case a.pC.VIDEO_BACKGROUND:
            let u = Math.min(t, o);
            return {
                width: u,
                height: (9 / 16) * u
            };
        case a.pC.SCHEDULED_EVENT_IMAGE:
            let d = Math.min(t, o);
            return {
                width: d,
                height: 0.4 * d
            };
        case a.pC.HOME_HEADER:
            let m = Math.min(t, o);
            return {
                width: m,
                height: m * (1 / a.sX)
            };
    }
}
