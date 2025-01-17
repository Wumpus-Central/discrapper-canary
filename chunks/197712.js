n.d(e, {
    $p: function () {
        return l;
    },
    AK: function () {
        return h;
    },
    Es: function () {
        return o;
    },
    U$: function () {
        return s;
    },
    kH: function () {
        return c;
    }
}),
    n(315314),
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
async function l(t, e, r, l, s) {
    let { x: u, y: o, scaledCropWidth: c, scaledCropHeight: h } = (0, i.eu)(e, r, l, s),
        d = await t.arrayBuffer(),
        p = new Worker(new URL('/assets/' + n.u('86047'), n.b)),
        g = new Promise((t, e) => {
            p.onmessage = (n) => {
                let { data: r } = n;
                if (r.type === a.u.CROP_GIF_COMPLETE) {
                    var i;
                    t(
                        ((i = new Blob([r.result])),
                        new Promise((t) => {
                            let e = new FileReader();
                            (e.onload = (e) => {
                                var n;
                                let r = null === (n = e.target) || void 0 === n ? void 0 : n.result;
                                'string' == typeof r ? t(r) : t('');
                            }),
                                e.readAsDataURL(i);
                        }))
                    ),
                        p.terminate();
                } else r.type === a.u.CROP_GIF_ERROR && (e(Error('Error cropping GIF')), p.terminate());
            };
        });
    return (
        p.postMessage({
            type: a.u.CROP_GIF_START,
            gif: new Uint8Array(d),
            x: 0 | u,
            y: 0 | o,
            width: 0 | c,
            height: 0 | h
        }),
        {
            result: g,
            cancelFn: () => p.terminate()
        }
    );
}
function s(t, e, n) {
    return {
        x: (0, r.clamp)(t, n.left, n.right),
        y: (0, r.clamp)(e, n.bottom, n.top)
    };
}
function u(t, e, n, r, i) {
    let l = n,
        s = r,
        u = i ? a.US : a.vJ;
    return (n > u && ((l = u), (s = (u / n) * r)), n / r < t)
        ? {
              width: l,
              height: s
          }
        : {
              width: (e / s) * l,
              height: e
          };
}
function o(t, e, n, r) {
    switch (t) {
        case a.pC.AVATAR:
        case a.pC.AVATAR_DECORATION:
            return {
                width: e,
                height: n
            };
        case a.pC.BANNER:
            let i = r ? a.SP : a.qj;
            return u(a.MY, i, e, n, r);
        case a.pC.GUILD_BANNER:
            let l = r ? a.t2 : a.C5;
            return u(a.Ij, l, e, n, r);
        case a.pC.VIDEO_BACKGROUND:
            let s = r ? a.kP : a.PB;
            return u(a.Ff, s, e, n, r);
        case a.pC.SCHEDULED_EVENT_IMAGE:
            let o = r ? a.tv : a.WV;
            return u(a.ut, o, e, n, r);
        case a.pC.HOME_HEADER:
            return u(a.sX, a.SW, e, n, r);
    }
}
function c(t, e, n) {
    let r = {
            top: 0,
            bottom: 0,
            left: 0,
            right: 0
        },
        i = t - n.width,
        a = e - n.height;
    return 0 !== i && ((r.left = -Math.abs(i / 2)), (r.right = i / 2)), 0 !== a && ((r.bottom = -Math.abs(a / 2)), (r.top = a / 2)), r;
}
function h(t, e, n, r, i) {
    let l = i ? a.US : a.vJ;
    switch (t) {
        case a.pC.AVATAR:
        case a.pC.AVATAR_DECORATION:
            let s = Math.min(e, n);
            return {
                width: s,
                height: s
            };
        case a.pC.BANNER:
            let u = Math.min(e, l);
            return {
                width: u,
                height: u * (1 / a.MY)
            };
        case a.pC.GUILD_BANNER:
            let o = Math.min(e, l);
            return {
                width: o,
                height: Math.min((9 / 16) * o, r)
            };
        case a.pC.VIDEO_BACKGROUND:
            let c = Math.min(e, l);
            return {
                width: c,
                height: (9 / 16) * c
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
