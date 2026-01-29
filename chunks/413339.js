n.d(t, {
    PX: () => I,
    S1: () => A,
    gB: () => v,
}),
    n(927092),
    n(212978),
    n(597227),
    n(393431),
    n(752391),
    n(532706),
    n(42231),
    n(232424),
    n(757074),
    n(949626),
    n(767709),
    n(65162);
var r = n(284009),
    i = n.n(r),
    a = n(205693),
    o = n(780732),
    s = n(287809),
    l = n(486020),
    c = n(723702),
    u = n(329551),
    d = n(987384),
    f = n(912630),
    p = n(965162),
    _ = n(957153),
    h = n(463951),
    m = n(577718),
    g = n(652215);

function E(e) {
    return new Promise((t, n) => {
        let r = new Image();
        (r.crossOrigin = "anonymous"),
            (r.onload = () => {
                let e = document.createElement("canvas");
                (e.width = m.Im.width), (e.height = m.Im.height);
                let n = e.getContext("2d");
                i()(null != n, "Canvas context is missing");
                let a = r.height / r.width,
                    o = m.Im.height,
                    s = m.Im.height / a,
                    l = (e.width - s) / 2,
                    c = (e.height - o) / 2;
                n.drawImage(r, l, c, s, o);
                let u = n.getImageData(0, 0, e.width, e.height);
                t({
                    data: u.data,
                    width: u.width,
                    height: u.height,
                    pixelFormat: "rgba",
                });
            }),
            (r.onerror = (e) => n(e)),
            (r.src = e);
    });
}
async function y(e) {
    let t = await fetch(e),
        n = await t.blob();
    return new Uint8ClampedArray(await n.arrayBuffer());
}

function b(e, t, n, r, i) {
    let a =
        (0, c.isWindows)() &&
        (0, o.r)({
            location: "applyBackgroundMediaFilterSettings",
        }).enabled;
    (0, d.wq)({
        [e]: {
            graph: n,
            target: t,
            image: r,
            blob: i,
            useH264MFDecoder: a,
        },
    });
}
async function O(e, t, n) {
    let r,
        i = !1;
    if (null == n) return b(e, t, a.gO.NONE);
    if ("blur" === n) return b(e, t, a.gO.BACKGROUND_BLUR);
    if ("string" == typeof n || "number" == typeof n) {
        var o;
        let e = (0, _.A)()[n];
        (i = null != (o = e.isVideo) && o), (r = e.source);
    } else {
        let e = n.asset;
        (i = (0, l.VI)(e) || (0, l.q6)(e)),
            (r = (0, l.Bo)({
                userId: n.user_id,
                assetId: n.id,
                assetHash: e,
                size: m.Im.width,
            }));
    }
    if (null != r)
        try {
            let n = i ? void 0 : await E(r),
                o = i ? await y(r) : void 0;
            b(e, t, a.gO.BACKGROUND_REPLACEMENT, n, o);
        } catch (e) {
            (0, d.Mj)();
        }
}
async function v(e, t) {
    let { track: n = !0, location: r } = t;
    await O(
        a.Tr.CAMERA_BACKGROUND_LIVE,
        {
            type: a.Qo.INPUT_DEVICE,
        },
        e,
    ),
        n && (0, p.Uz)(e, r, "Enabled");
}
async function A(e, t, n) {
    let { track: r = !0, location: i } = n;
    (0, d.Oo)(),
        await O(
            a.Tr.CAMERA_BACKGROUND_PREVIEW,
            {
                type: a.Qo.STREAM,
                streamId: t,
            },
            e,
        ),
        r && (0, p.Uz)(e, i, "Preview");
}

function I() {
    let e = s.default.getCurrentUser();
    if (null == e) return;
    let t = (0, u.i)(e);
    (0, h.A)() &&
        !f.A.hasBeenApplied &&
        null != t &&
        v(t, {
            track: !1,
        }).catch(g.tEg);
}
