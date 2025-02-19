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
var i = n(392711),
    r = n(36793),
    a = n(486324);
async function o(e) {
    let { file: t, image: i, cropDimensions: o, cropOriginCoordinates: s, maxDimensions: l, imageRotation: c = 0 } = e,
        {
            sourceX: u,
            sourceY: d,
            sourceWidth: m,
            sourceHeight: g
        } = (0, r.GS)({
            image: i,
            cropDimensions: o,
            cropOriginCoordinates: s,
            maxDimensions: l,
            imageRotation: c
        }),
        h = await t.arrayBuffer(),
        p = new Worker(new URL('/assets/' + n.u('86047'), n.b)),
        E = new Promise((e, t) => {
            p.onmessage = (n) => {
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
                        p.terminate();
                } else i.type === a.u.CROP_GIF_ERROR && (t(Error('Error cropping GIF')), p.terminate());
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
        x: (0, i.clamp)(e, n.left, n.right),
        y: (0, i.clamp)(t, n.bottom, n.top)
    };
}
function l(e, t, n, i, r) {
    let o = n,
        s = i,
        l = r ? a.US : a.vJ;
    return (n > l && ((o = l), (s = (l / n) * i)), n / i < e)
        ? {
              width: o,
              height: s
          }
        : {
              width: (t / s) * o,
              height: t
          };
}
function c(e, t, n, i) {
    switch (e) {
        case a.pC.AVATAR:
        case a.pC.AVATAR_DECORATION:
            return {
                width: t,
                height: n
            };
        case a.pC.BANNER:
            let r = i ? a.SP : a.qj;
            return l(a.MY, r, t, n, i);
        case a.pC.GUILD_BANNER:
            let o = i ? a.t2 : a.C5;
            return l(a.Ij, o, t, n, i);
        case a.pC.VIDEO_BACKGROUND:
            let s = i ? a.kP : a.PB;
            return l(a.Ff, s, t, n, i);
        case a.pC.SCHEDULED_EVENT_IMAGE:
            let c = i ? a.tv : a.WV;
            return l(a.ut, c, t, n, i);
        case a.pC.HOME_HEADER:
            return l(a.sX, a.SW, t, n, i);
    }
}
function u(e, t, n) {
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
function d(e, t, n, i, r) {
    let o = r ? a.US : a.vJ;
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
                height: Math.min((9 / 16) * c, i)
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
