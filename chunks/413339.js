"use strict";
n.d(t, { PX: () => T, S1: () => I, gB: () => A }),
    n(393431),
    n(532706),
    n(42231),
    n(232424),
    n(949626),
    n(767709),
    n(65162);
var i = n(284009),
    r = n.n(i),
    s = n(459838),
    a = n(287809),
    o = n(486020),
    l = n(329551),
    u = n(285918),
    c = n(912630),
    d = n(965162),
    _ = n(498559),
    f = n(463951),
    h = n(577718),
    p = n(652215);
async function E(e) {
    let t = await fetch(e),
        n = await t.blob();
    return new Uint8ClampedArray(await n.arrayBuffer());
}
function m(e, t, n, i, r) {
    (0, u.wq)({ [e]: { graph: n, target: t, image: i, blob: r } });
}
async function g(e, t, n) {
    let i,
        a = !1;
    if (null == n) return m(e, t, s.gO.NONE);
    if ("blur" === n) return m(e, t, s.gO.BACKGROUND_BLUR);
    if ("string" == typeof n || "number" == typeof n) {
        let e = (0, _.A)()[n];
        (a = e.isVideo ?? !1), (i = e.source);
    } else {
        let e = n.asset;
        (a = (0, o.VI)(e) || (0, o.q6)(e)),
            (i = (0, o.Bo)({ userId: n.user_id, assetId: n.id, assetHash: e, size: h.Im.width }));
    }
    if (null != i)
        try {
            var l;
            let n = a
                    ? void 0
                    : await ((l = i),
                      new Promise((e, t) => {
                          let n = new Image();
                          (n.crossOrigin = "anonymous"),
                              (n.onload = () => {
                                  let t = document.createElement("canvas");
                                  (t.width = h.Im.width), (t.height = h.Im.height);
                                  let i = t.getContext("2d");
                                  r()(null != i, "Canvas context is missing");
                                  let s = n.height / n.width,
                                      a = h.Im.height,
                                      o = h.Im.height / s,
                                      l = (t.width - o) / 2,
                                      u = (t.height - a) / 2;
                                  i.drawImage(n, l, u, o, a);
                                  let c = i.getImageData(0, 0, t.width, t.height);
                                  e({ data: c.data, width: c.width, height: c.height, pixelFormat: "rgba" });
                              }),
                              (n.onerror = (e) => t(e)),
                              (n.src = l);
                      })),
                o = a ? await E(i) : void 0;
            m(e, t, s.gO.BACKGROUND_REPLACEMENT, n, o);
        } catch (e) {
            (0, u.Mj)();
        }
}
async function A(e, t) {
    let { track: n = !0, location: i } = t;
    await g(s.Tr.CAMERA_BACKGROUND_LIVE, { type: s.Qo.INPUT_DEVICE }, e), n && (0, d.Uz)(e, i, "Enabled");
}
async function I(e, t, n) {
    let { track: i = !0, location: r } = n;
    (0, u.Oo)(),
        await g(s.Tr.CAMERA_BACKGROUND_PREVIEW, { type: s.Qo.STREAM, streamId: t }, e),
        i && (0, d.Uz)(e, r, "Preview");
}
function T() {
    let e = a.default.getCurrentUser();
    if (null == e) return;
    let t = (0, l.i)(e);
    (0, f.A)() && !c.A.hasBeenApplied && null != t && A(t, { track: !1 }).catch(p.tEg);
}
