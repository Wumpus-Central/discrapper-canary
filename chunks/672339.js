n.d(t, {
    FU: () => I,
    eH: () => T,
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
    n(873817);
var i = n(512722),
    r = n.n(i),
    a = n(46973),
    s = n(594174),
    o = n(768581),
    l = n(932724),
    u = n(716161),
    c = n(634041),
    d = n(647177),
    f = n(63985),
    _ = n(638457),
    p = n(678916),
    h = n(981631);
function m(e) {
    return new Promise((t, n) => {
        let i = new Image();
        (i.crossOrigin = 'anonymous'),
            (i.onload = () => {
                let e = document.createElement('canvas');
                (e.width = p.HE.width), (e.height = p.HE.height);
                let n = e.getContext('2d');
                r()(null != n, 'Canvas context is missing');
                let a = i.height / i.width,
                    s = p.HE.height,
                    o = p.HE.height / a,
                    l = (e.width - o) / 2,
                    u = (e.height - s) / 2;
                n.drawImage(i, l, u, o, s);
                let c = n.getImageData(0, 0, e.width, e.height);
                t({
                    data: c.data,
                    width: c.width,
                    height: c.height,
                    pixelFormat: 'rgba'
                });
            }),
            (i.onerror = (e) => n(e)),
            (i.src = e);
    });
}
async function g(e) {
    let t = await fetch(e),
        n = await t.blob();
    return new Uint8ClampedArray(await n.arrayBuffer());
}
function E(e, t, n, i, r) {
    (0, u.RI)({
        [e]: {
            graph: n,
            target: t,
            image: i,
            blob: r
        }
    });
}
async function v(e, t, n) {
    let i,
        r = !1;
    if (null == n) return E(e, t, a.zZ.NONE);
    if (n === p.f7) return E(e, t, a.zZ.BACKGROUND_BLUR);
    if ('string' == typeof n || 'number' == typeof n) {
        var s;
        let e = (0, f.Z)()[n];
        (r = null !== (s = e.isVideo) && void 0 !== s && s), (i = e.source);
    } else {
        let e = n.asset;
        (r = (0, o.xR)(e) || (0, o.ay)(e)),
            (i = (0, o.rI)({
                userId: n.user_id,
                assetId: n.id,
                assetHash: e,
                size: p.HE.width
            }));
    }
    if (null != i)
        try {
            let n = r ? void 0 : await m(i),
                s = r ? await g(i) : void 0;
            E(e, t, a.zZ.BACKGROUND_REPLACEMENT, n, s);
        } catch (e) {
            (0, u.Nm)();
        }
}
async function y(e, t) {
    let { track: n = !0, location: i } = t;
    await v(a.TO.CAMERA_BACKGROUND_LIVE, { type: a.W$.INPUT_DEVICE }, e), n && (0, d.Bh)(e, i, 'Enabled');
}
async function I(e, t, n) {
    let { track: i = !0, location: r } = n;
    (0, u.GS)(),
        await v(
            a.TO.CAMERA_BACKGROUND_PREVIEW,
            {
                type: a.W$.STREAM,
                streamId: t
            },
            e
        ),
        i && (0, d.Bh)(e, r, 'Preview');
}
function T() {
    let e = s.default.getCurrentUser();
    if (null == e) return;
    let t = (0, l.P)(e);
    (0, _.Z)() && !c.Z.hasBeenApplied && null != t && y(t, { track: !1 }).catch(h.dG4);
}
