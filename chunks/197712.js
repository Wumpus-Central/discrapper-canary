r.d(t, {
    $p: () => s,
    AK: () => d,
    Es: () => c,
    U$: () => l,
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
    i = r(486324);
async function s(e) {
    let { file: t, image: n, cropDimensions: s, cropOriginCoordinates: l, maxDimensions: o, imageRotation: c = 0 } = e,
        {
            sourceX: u,
            sourceY: d,
            sourceWidth: h,
            sourceHeight: p
        } = (0, a.GS)({
            image: n,
            cropDimensions: s,
            cropOriginCoordinates: l,
            maxDimensions: o,
            imageRotation: c
        }),
        g = await t.arrayBuffer(),
        m = new Worker(new URL('/assets/' + r.u('86047'), r.b)),
        f = new Promise((e, t) => {
            m.onmessage = (r) => {
                let { data: n } = r;
                if (n.type === i.u.CROP_GIF_COMPLETE) {
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
                } else n.type === i.u.CROP_GIF_ERROR && (t(Error('Error cropping GIF')), m.terminate());
            };
        });
    return (
        m.postMessage({
            type: i.u.CROP_GIF_START,
            gif: new Uint8Array(g),
            x: 0 | u,
            y: 0 | d,
            width: 0 | h,
            height: 0 | p,
            imageRotation: 0 | c
        }),
        {
            result: f,
            cancelFn: () => m.terminate()
        }
    );
}
function l(e, t, r) {
    return {
        x: (0, n.clamp)(e, r.left, r.right),
        y: (0, n.clamp)(t, r.bottom, r.top)
    };
}
function o(e, t, r, n, a) {
    let s = r,
        l = n,
        o = a ? i.US : i.vJ;
    return (r > o && ((s = o), (l = (o / r) * n)), r / n < e)
        ? {
              width: s,
              height: l
          }
        : {
              width: (t / l) * s,
              height: t
          };
}
function c(e, t, r, n) {
    switch (e) {
        case i.pC.AVATAR:
        case i.pC.AVATAR_DECORATION:
        case i.pC.GUILD_ICON:
            return {
                width: t,
                height: r
            };
        case i.pC.BANNER:
            let a = n ? i.SP : i.qj;
            return o(i.MY, a, t, r, n);
        case i.pC.GUILD_BANNER:
            let s = n ? i.t2 : i.C5;
            return o(i.Ij, s, t, r, n);
        case i.pC.VIDEO_BACKGROUND:
            let l = n ? i.kP : i.PB;
            return o(i.Ff, l, t, r, n);
        case i.pC.SCHEDULED_EVENT_IMAGE:
            let c = n ? i.tv : i.WV;
            return o(i.ut, c, t, r, n);
        case i.pC.HOME_HEADER:
            return o(i.sX, i.SW, t, r, n);
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
        i = t - r.height;
    return 0 !== a && ((n.left = -Math.abs(a / 2)), (n.right = a / 2)), 0 !== i && ((n.bottom = -Math.abs(i / 2)), (n.top = i / 2)), n;
}
function d(e, t, r, n, a) {
    let s = a ? i.US : i.vJ;
    switch (e) {
        case i.pC.AVATAR:
        case i.pC.AVATAR_DECORATION:
        case i.pC.GUILD_ICON:
            let l = Math.min(t, r);
            return {
                width: l,
                height: l
            };
        case i.pC.BANNER:
            let o = Math.min(t, s);
            return {
                width: o,
                height: o * (1 / i.MY)
            };
        case i.pC.GUILD_BANNER:
            let c = Math.min(t, s);
            return {
                width: c,
                height: Math.min((9 / 16) * c, n)
            };
        case i.pC.VIDEO_BACKGROUND:
            let u = Math.min(t, s);
            return {
                width: u,
                height: (9 / 16) * u
            };
        case i.pC.SCHEDULED_EVENT_IMAGE:
            let d = Math.min(t, s);
            return {
                width: d,
                height: 0.4 * d
            };
        case i.pC.HOME_HEADER:
            let h = Math.min(t, s);
            return {
                width: h,
                height: h * (1 / i.sX)
            };
    }
}
