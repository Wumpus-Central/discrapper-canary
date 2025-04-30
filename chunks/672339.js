n.d(t, {
    FU: () => O,
    eH: () => v,
    wG: () => y
}),
    n(559231),
    n(227481),
    n(730884),
    n(20464),
    n(341884),
    n(364341),
    n(629680),
    n(505025),
    n(918970),
    n(121784),
    n(644351),
    n(146733);
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
async function O(e, t, n) {
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
function v() {
    let e = a.default.getCurrentUser();
    if (null == e) return;
    let t = (0, l.P)(e);
    (0, _.Z)() && !u.Z.hasBeenApplied && null != t && y(t, { track: !1 }).catch(h.dG4);
}
