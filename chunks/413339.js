"use strict";
n.d(t, { PX: () => v, S1: () => S, gB: () => y }),
    n(393431),
    n(532706),
    n(42231),
    n(232424),
    n(949626),
    n(767709),
    n(65162);
var r = n(284009),
    i = n.n(r),
    a = n(205693),
    s = n(780732),
    o = n(287809),
    l = n(486020),
    u = n(723702),
    c = n(329551),
    d = n(987384),
    _ = n(912630),
    f = n(965162),
    p = n(957153),
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
                    s = m.Im.height,
                    o = m.Im.height / a,
                    l = (e.width - o) / 2,
                    u = (e.height - s) / 2;
                n.drawImage(r, l, u, o, s);
                let c = n.getImageData(0, 0, e.width, e.height);
                t({ data: c.data, width: c.width, height: c.height, pixelFormat: "rgba" });
            }),
            (r.onerror = (e) => n(e)),
            (r.src = e);
    });
}
async function A(e) {
    let t = await fetch(e),
        n = await t.blob();
    return new Uint8ClampedArray(await n.arrayBuffer());
}
function I(e, t, n, r, i) {
    let a = (0, u.isWindows)() && (0, s.r)({ location: "applyBackgroundMediaFilterSettings" }).enabled;
    (0, d.wq)({ [e]: { graph: n, target: t, image: r, blob: i, useH264MFDecoder: a } });
}
async function T(e, t, n) {
    let r,
        i = !1;
    if (null == n) return I(e, t, a.gO.NONE);
    if ("blur" === n) return I(e, t, a.gO.BACKGROUND_BLUR);
    if ("string" == typeof n || "number" == typeof n) {
        let e = (0, p.A)()[n];
        (i = e.isVideo ?? !1), (r = e.source);
    } else {
        let e = n.asset;
        (i = (0, l.VI)(e) || (0, l.q6)(e)),
            (r = (0, l.Bo)({ userId: n.user_id, assetId: n.id, assetHash: e, size: m.Im.width }));
    }
    if (null != r)
        try {
            let n = i ? void 0 : await E(r),
                s = i ? await A(r) : void 0;
            I(e, t, a.gO.BACKGROUND_REPLACEMENT, n, s);
        } catch (e) {
            (0, d.Mj)();
        }
}
async function y(e, t) {
    let { track: n = !0, location: r } = t;
    await T(a.Tr.CAMERA_BACKGROUND_LIVE, { type: a.Qo.INPUT_DEVICE }, e), n && (0, f.Uz)(e, r, "Enabled");
}
async function S(e, t, n) {
    let { track: r = !0, location: i } = n;
    (0, d.Oo)(),
        await T(a.Tr.CAMERA_BACKGROUND_PREVIEW, { type: a.Qo.STREAM, streamId: t }, e),
        r && (0, f.Uz)(e, i, "Preview");
}
function v() {
    let e = o.default.getCurrentUser();
    if (null == e) return;
    let t = (0, c.i)(e);
    (0, h.A)() && !_.A.hasBeenApplied && null != t && y(t, { track: !1 }).catch(g.tEg);
}
