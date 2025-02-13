i.d(t, {
    $p: () => o,
    AK: () => d,
    Es: () => u,
    U$: () => s,
    kH: () => c
}),
    i(315314),
    i(309749),
    i(610138),
    i(216116),
    i(78328),
    i(815648),
    i(47120),
    i(411104),
    i(518263),
    i(970173),
    i(520712),
    i(268111),
    i(941497),
    i(32026),
    i(480839),
    i(744285),
    i(492257),
    i(873817);
var n = i(392711),
    r = i(36793),
    a = i(486324);
async function o(e) {
    let { file: t, image: n, cropDimensions: o, cropOriginCoordinates: s, maxDimensions: l, imageRotation: u = 0 } = e,
        {
            sourceX: c,
            sourceY: d,
            sourceWidth: m,
            sourceHeight: g
        } = (0, r.GS)({
            image: n,
            cropDimensions: o,
            cropOriginCoordinates: s,
            maxDimensions: l,
            imageRotation: u
        }),
        h = await t.arrayBuffer(),
        E = new Worker(new URL('/assets/' + i.u('86047'), i.b)),
        C = new Promise((e, t) => {
            E.onmessage = (i) => {
                let { data: n } = i;
                if (n.type === a.u.CROP_GIF_COMPLETE) {
                    var r;
                    e(
                        ((r = new Blob([n.result])),
                        new Promise((e) => {
                            let t = new FileReader();
                            (t.onload = (t) => {
                                var i;
                                let n = null === (i = t.target) || void 0 === i ? void 0 : i.result;
                                'string' == typeof n ? e(n) : e('');
                            }),
                                t.readAsDataURL(r);
                        }))
                    ),
                        E.terminate();
                } else n.type === a.u.CROP_GIF_ERROR && (t(Error('Error cropping GIF')), E.terminate());
            };
        });
    return (
        E.postMessage({
            type: a.u.CROP_GIF_START,
            gif: new Uint8Array(h),
            x: 0 | c,
            y: 0 | d,
            width: 0 | m,
            height: 0 | g,
            imageRotation: 0 | u
        }),
        {
            result: C,
            cancelFn: () => E.terminate()
        }
    );
}
function s(e, t, i) {
    return {
        x: (0, n.clamp)(e, i.left, i.right),
        y: (0, n.clamp)(t, i.bottom, i.top)
    };
}
function l(e, t, i, n, r) {
    let o = i,
        s = n,
        l = r ? a.US : a.vJ;
    return (i > l && ((o = l), (s = (l / i) * n)), i / n < e)
        ? {
              width: o,
              height: s
          }
        : {
              width: (t / s) * o,
              height: t
          };
}
function u(e, t, i, n) {
    switch (e) {
        case a.pC.AVATAR:
        case a.pC.AVATAR_DECORATION:
            return {
                width: t,
                height: i
            };
        case a.pC.BANNER:
            let r = n ? a.SP : a.qj;
            return l(a.MY, r, t, i, n);
        case a.pC.GUILD_BANNER:
            let o = n ? a.t2 : a.C5;
            return l(a.Ij, o, t, i, n);
        case a.pC.VIDEO_BACKGROUND:
            let s = n ? a.kP : a.PB;
            return l(a.Ff, s, t, i, n);
        case a.pC.SCHEDULED_EVENT_IMAGE:
            let u = n ? a.tv : a.WV;
            return l(a.ut, u, t, i, n);
        case a.pC.HOME_HEADER:
            return l(a.sX, a.SW, t, i, n);
    }
}
function c(e, t, i) {
    let n = {
            top: 0,
            bottom: 0,
            left: 0,
            right: 0
        },
        r = e - i.width,
        a = t - i.height;
    return 0 !== r && ((n.left = -Math.abs(r / 2)), (n.right = r / 2)), 0 !== a && ((n.bottom = -Math.abs(a / 2)), (n.top = a / 2)), n;
}
function d(e, t, i, n, r) {
    let o = r ? a.US : a.vJ;
    switch (e) {
        case a.pC.AVATAR:
        case a.pC.AVATAR_DECORATION:
            let s = Math.min(t, i);
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
            let u = Math.min(t, o);
            return {
                width: u,
                height: Math.min((9 / 16) * u, n)
            };
        case a.pC.VIDEO_BACKGROUND:
            let c = Math.min(t, o);
            return {
                width: c,
                height: (9 / 16) * c
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
