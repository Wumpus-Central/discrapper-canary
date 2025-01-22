r.d(n, {
    FU: function () {
        return L;
    },
    eH: function () {
        return w;
    },
    wG: function () {
        return x;
    }
});
var i = r(66153);
var a = r(970173);
var o = r(520712);
var s = r(268111);
var l = r(941497);
var u = r(32026);
var c = r(480839);
var d = r(744285);
var f = r(492257);
var p = r(873817);
var h = r(512722),
    _ = r.n(h),
    m = r(46973),
    g = r(594174),
    E = r(768581),
    v = r(932724),
    y = r(716161),
    b = r(634041),
    I = r(647177),
    T = r(63985),
    S = r(638457),
    A = r(678916),
    C = r(981631);
function N(e) {
    return new Promise((n, r) => {
        let i = new Image();
        (i.crossOrigin = 'anonymous'),
            (i.onload = () => {
                let e = document.createElement('canvas');
                (e.width = A.HE.width), (e.height = A.HE.height);
                let r = e.getContext('2d');
                _()(null != r, 'Canvas context is missing');
                let a = i.height / i.width,
                    o = A.HE.height,
                    s = A.HE.height / a,
                    l = (e.width - s) / 2,
                    u = (e.height - o) / 2;
                r.drawImage(i, l, u, s, o);
                let c = r.getImageData(0, 0, e.width, e.height);
                n({
                    data: c.data,
                    width: c.width,
                    height: c.height,
                    pixelFormat: 'rgba'
                });
            }),
            (i.onerror = (e) => r(e)),
            (i.src = e);
    });
}
async function R(e) {
    let n = await fetch(e),
        r = await n.blob();
    return new Uint8ClampedArray(await r.arrayBuffer());
}
function O(e, n, r, i, a) {
    (0, y.RI)({
        [e]: {
            graph: r,
            target: n,
            image: i,
            blob: a
        }
    });
}
async function D(e, n, r) {
    let i,
        a = !1;
    if (null == r) return O(e, n, m.zZ.NONE);
    if (r === A.f7) return O(e, n, m.zZ.BACKGROUND_BLUR);
    if ('string' == typeof r || 'number' == typeof r) {
        var o;
        let e = (0, T.Z)()[r];
        (a = null !== (o = e.isVideo) && void 0 !== o && o), (i = e.source);
    } else {
        let e = r.asset;
        (a = (0, E.xR)(e) || (0, E.ay)(e)),
            (i = (0, E.rI)({
                userId: r.user_id,
                assetId: r.id,
                assetHash: e,
                size: A.HE.width
            }));
    }
    if (null != i)
        try {
            let r = a ? void 0 : await N(i),
                o = a ? await R(i) : void 0;
            O(e, n, m.zZ.BACKGROUND_REPLACEMENT, r, o);
        } catch (e) {
            (0, y.Nm)();
        }
}
async function x(e, n) {
    let { track: r = !0, location: i } = n;
    await D(m.TO.CAMERA_BACKGROUND_LIVE, { type: m.W$.INPUT_DEVICE }, e), r && (0, I.Bh)(e, i, 'Enabled');
}
async function L(e, n, r) {
    let { track: i = !0, location: a } = r;
    (0, y.GS)(),
        await D(
            m.TO.CAMERA_BACKGROUND_PREVIEW,
            {
                type: m.W$.STREAM,
                streamId: n
            },
            e
        ),
        i && (0, I.Bh)(e, a, 'Preview');
}
function w() {
    let e = g.default.getCurrentUser();
    if (null == e) return;
    let n = (0, v.P)(e);
    (0, S.Z)() && !b.Z.hasBeenApplied && null != n && x(n, { track: !1 }).catch(C.dG4);
}
