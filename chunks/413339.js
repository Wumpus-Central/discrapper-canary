"use strict";
n.d(t, { PX: () => S, S1: () => T, gB: () => I }),
    n(393431),
    n(532706),
    n(42231),
    n(232424),
    n(949626),
    n(767709),
    n(65162);
var r = n(284009),
    i = n.n(r),
    s = n(205693),
    a = n(287809),
    o = n(486020),
    l = n(329551),
    u = n(987384),
    c = n(912630),
    d = n(965162),
    _ = n(957153),
    f = n(463951),
    p = n(577718),
    h = n(652215);
function m(e) {
    return new Promise((t, n) => {
        let r = new Image();
        (r.crossOrigin = "anonymous"),
            (r.onload = () => {
                let e = document.createElement("canvas");
                (e.width = p.Im.width), (e.height = p.Im.height);
                let n = e.getContext("2d");
                i()(null != n, "Canvas context is missing");
                let s = r.height / r.width,
                    a = p.Im.height,
                    o = p.Im.height / s,
                    l = (e.width - o) / 2,
                    u = (e.height - a) / 2;
                n.drawImage(r, l, u, o, a);
                let c = n.getImageData(0, 0, e.width, e.height);
                t({ data: c.data, width: c.width, height: c.height, pixelFormat: "rgba" });
            }),
            (r.onerror = (e) => n(e)),
            (r.src = e);
    });
}
async function E(e) {
    let t = await fetch(e),
        n = await t.blob();
    return new Uint8ClampedArray(await n.arrayBuffer());
}
function g(e, t, n, r, i) {
    (0, u.wq)({ [e]: { graph: n, target: t, image: r, blob: i } });
}
async function A(e, t, n) {
    let r,
        i = !1;
    if (null == n) return g(e, t, s.gO.NONE);
    if ("blur" === n) return g(e, t, s.gO.BACKGROUND_BLUR);
    if ("string" == typeof n || "number" == typeof n) {
        let e = (0, _.A)()[n];
        (i = e.isVideo ?? !1), (r = e.source);
    } else {
        let e = n.asset;
        (i = (0, o.VI)(e) || (0, o.q6)(e)),
            (r = (0, o.Bo)({ userId: n.user_id, assetId: n.id, assetHash: e, size: p.Im.width }));
    }
    if (null != r)
        try {
            let n = i ? void 0 : await m(r),
                a = i ? await E(r) : void 0;
            g(e, t, s.gO.BACKGROUND_REPLACEMENT, n, a);
        } catch (e) {
            (0, u.Mj)();
        }
}
async function I(e, t) {
    let { track: n = !0, location: r } = t;
    await A(s.Tr.CAMERA_BACKGROUND_LIVE, { type: s.Qo.INPUT_DEVICE }, e), n && (0, d.Uz)(e, r, "Enabled");
}
async function T(e, t, n) {
    let { track: r = !0, location: i } = n;
    (0, u.Oo)(),
        await A(s.Tr.CAMERA_BACKGROUND_PREVIEW, { type: s.Qo.STREAM, streamId: t }, e),
        r && (0, d.Uz)(e, i, "Preview");
}
function S() {
    let e = a.default.getCurrentUser();
    if (null == e) return;
    let t = (0, l.i)(e);
    (0, f.A)() && !c.A.hasBeenApplied && null != t && I(t, { track: !1 }).catch(h.tEg);
}
