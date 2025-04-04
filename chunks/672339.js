n.d(t, {
    FU: () => v,
    eH: () => O,
    wG: () => y
}),
    n(66153),
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
var r = n(512722),
    i = n.n(r),
    o = n(46973),
    a = n(594174),
    s = n(768581),
    l = n(932724),
    c = n(716161),
    u = n(634041),
    d = n(647177),
    f = n(63985),
    _ = n(638457),
    p = n(678916),
    h = n(981631);
function m(e) {
    return new Promise((t, n) => {
        let r = new Image();
        (r.crossOrigin = 'anonymous'),
            (r.onload = () => {
                let e = document.createElement('canvas');
                (e.width = p.HE.width), (e.height = p.HE.height);
                let n = e.getContext('2d');
                i()(null != n, 'Canvas context is missing');
                let o = r.height / r.width,
                    a = p.HE.height,
                    s = p.HE.height / o,
                    l = (e.width - s) / 2,
                    c = (e.height - a) / 2;
                n.drawImage(r, l, c, s, a);
                let u = n.getImageData(0, 0, e.width, e.height);
                t({
                    data: u.data,
                    width: u.width,
                    height: u.height,
                    pixelFormat: 'rgba'
                });
            }),
            (r.onerror = (e) => n(e)),
            (r.src = e);
    });
}
async function g(e) {
    let t = await fetch(e),
        n = await t.blob();
    return new Uint8ClampedArray(await n.arrayBuffer());
}
function E(e, t, n, r, i) {
    (0, c.RI)({
        [e]: {
            graph: n,
            target: t,
            image: r,
            blob: i
        }
    });
}
async function b(e, t, n) {
    let r,
        i = !1;
    if (null == n) return E(e, t, o.zZ.NONE);
    if (n === p.f7) return E(e, t, o.zZ.BACKGROUND_BLUR);
    if ('string' == typeof n || 'number' == typeof n) {
        var a;
        let e = (0, f.Z)()[n];
        (i = null != (a = e.isVideo) && a), (r = e.source);
    } else {
        let e = n.asset;
        (i = (0, s.xR)(e) || (0, s.ay)(e)),
            (r = (0, s.rI)({
                userId: n.user_id,
                assetId: n.id,
                assetHash: e,
                size: p.HE.width
            }));
    }
    if (null != r)
        try {
            let n = i ? void 0 : await m(r),
                a = i ? await g(r) : void 0;
            E(e, t, o.zZ.BACKGROUND_REPLACEMENT, n, a);
        } catch (e) {
            (0, c.Nm)();
        }
}
async function y(e, t) {
    let { track: n = !0, location: r } = t;
    await b(o.TO.CAMERA_BACKGROUND_LIVE, { type: o.W$.INPUT_DEVICE }, e), n && (0, d.Bh)(e, r, 'Enabled');
}
async function v(e, t, n) {
    let { track: r = !0, location: i } = n;
    (0, c.GS)(),
        await b(
            o.TO.CAMERA_BACKGROUND_PREVIEW,
            {
                type: o.W$.STREAM,
                streamId: t
            },
            e
        ),
        r && (0, d.Bh)(e, i, 'Preview');
}
function O() {
    let e = a.default.getCurrentUser();
    if (null == e) return;
    let t = (0, l.P)(e);
    (0, _.Z)() && !u.Z.hasBeenApplied && null != t && y(t, { track: !1 }).catch(h.dG4);
}
