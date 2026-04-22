"use strict";
n.d(t, { PX: () => T, S1: () => I, gB: () => A }),
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
    d = n(912630),
    c = n(965162),
    _ = n(957153),
    f = n(463951),
    E = n(577718),
    h = n(652215);
async function p(e) {
    let t = await fetch(e),
        n = await t.blob();
    return new Uint8ClampedArray(await n.arrayBuffer());
}
function m(e, t, n, r, i) {
    (0, u.wq)({ [e]: { graph: n, target: t, image: r, blob: i } });
}
async function g(e, t, n) {
    let r,
        a = !1;
    if (null == n) return m(e, t, s.gO.NONE);
    if ("blur" === n) return m(e, t, s.gO.BACKGROUND_BLUR);
    if ("string" == typeof n || "number" == typeof n) {
        let e = (0, _.A)()[n];
        (a = e.isVideo ?? !1), (r = e.source);
    } else {
        let e = n.asset;
        (a = (0, o.VI)(e) || (0, o.q6)(e)),
            (r = (0, o.Bo)({ userId: n.user_id, assetId: n.id, assetHash: e, size: E.Im.width }));
    }
    if (null != r)
        try {
            var l;
            let n = a
                    ? void 0
                    : await ((l = r),
                      new Promise((e, t) => {
                          let n = new Image();
                          (n.crossOrigin = "anonymous"),
                              (n.onload = () => {
                                  let t = document.createElement("canvas");
                                  (t.width = E.Im.width), (t.height = E.Im.height);
                                  let r = t.getContext("2d");
                                  i()(null != r, "Canvas context is missing");
                                  let s = n.height / n.width,
                                      a = E.Im.height,
                                      o = E.Im.height / s,
                                      l = (t.width - o) / 2,
                                      u = (t.height - a) / 2;
                                  r.drawImage(n, l, u, o, a);
                                  let d = r.getImageData(0, 0, t.width, t.height);
                                  e({ data: d.data, width: d.width, height: d.height, pixelFormat: "rgba" });
                              }),
                              (n.onerror = (e) => t(e)),
                              (n.src = l);
                      })),
                o = a ? await p(r) : void 0;
            m(e, t, s.gO.BACKGROUND_REPLACEMENT, n, o);
        } catch (e) {
            (0, u.Mj)();
        }
}
async function A(e, t) {
    let { track: n = !0, location: r } = t;
    await g(s.Tr.CAMERA_BACKGROUND_LIVE, { type: s.Qo.INPUT_DEVICE }, e), n && (0, c.Uz)(e, r, "Enabled");
}
async function I(e, t, n) {
    let { track: r = !0, location: i } = n;
    (0, u.Oo)(),
        await g(s.Tr.CAMERA_BACKGROUND_PREVIEW, { type: s.Qo.STREAM, streamId: t }, e),
        r && (0, c.Uz)(e, i, "Preview");
}
function T() {
    let e = a.default.getCurrentUser();
    if (null == e) return;
    let t = (0, l.i)(e);
    (0, f.A)() && !d.A.hasBeenApplied && null != t && A(t, { track: !1 }).catch(h.tEg);
}
