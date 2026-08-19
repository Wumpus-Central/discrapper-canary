"use strict";
n.d(t, { PX: () => g, S1: () => m, gB: () => T }),
    n(393431),
    n(532706),
    n(42231),
    n(232424),
    n(949626),
    n(767709),
    n(65162);
var i = n(284009),
    r = n.n(i),
    a = n(459838),
    s = n(287809),
    l = n(486020),
    o = n(329551),
    d = n(285918),
    c = n(912630),
    u = n(965162),
    _ = n(498559),
    E = n(463951),
    A = n(577718),
    h = n(652215);
async function I(e) {
    let t = await fetch(e),
        n = await t.blob();
    return new Uint8ClampedArray(await n.arrayBuffer());
}
function f(e, t, n, i, r) {
    (0, d.wq)({ [e]: { graph: n, target: t, image: i, blob: r } });
}
async function p(e, t, n) {
    let i,
        s = !1;
    if (null == n) return f(e, t, a.gO.NONE);
    if ("blur" === n) return f(e, t, a.gO.BACKGROUND_BLUR);
    if ("string" == typeof n || "number" == typeof n) {
        let e = (0, _.A)()[n];
        (s = e.isVideo ?? !1), (i = e.source);
    } else {
        let e = n.asset;
        (s = (0, l.VI)(e) || (0, l.q6)(e)),
            (i = (0, l.Bo)({ userId: n.user_id, assetId: n.id, assetHash: e, size: A.Im.width }));
    }
    if (null != i)
        try {
            var o;
            let n = s
                    ? void 0
                    : await ((o = i),
                      new Promise((e, t) => {
                          let n = new Image();
                          (n.crossOrigin = "anonymous"),
                              (n.onload = () => {
                                  let t = document.createElement("canvas");
                                  (t.width = A.Im.width), (t.height = A.Im.height);
                                  let i = t.getContext("2d");
                                  r()(null != i, "Canvas context is missing");
                                  let a = n.height / n.width,
                                      s = A.Im.height,
                                      l = A.Im.height / a,
                                      o = (t.width - l) / 2,
                                      d = (t.height - s) / 2;
                                  i.drawImage(n, o, d, l, s);
                                  let c = i.getImageData(0, 0, t.width, t.height);
                                  e({ data: c.data, width: c.width, height: c.height, pixelFormat: "rgba" });
                              }),
                              (n.onerror = (e) => t(e)),
                              (n.src = o);
                      })),
                l = s ? await I(i) : void 0;
            f(e, t, a.gO.BACKGROUND_REPLACEMENT, n, l);
        } catch (e) {
            (0, d.Mj)();
        }
}
async function T(e, t) {
    let { track: n = !0, location: i } = t;
    await p(a.Tr.CAMERA_BACKGROUND_LIVE, { type: a.Qo.INPUT_DEVICE }, e), n && (0, u.Uz)(e, i, "Enabled");
}
async function m(e, t, n) {
    let { track: i = !0, location: r } = n;
    (0, d.Oo)(),
        await p(a.Tr.CAMERA_BACKGROUND_PREVIEW, { type: a.Qo.STREAM, streamId: t }, e),
        i && (0, u.Uz)(e, r, "Preview");
}
function g() {
    let e = s.default.getCurrentUser();
    if (null == e) return;
    let t = (0, o.i)(e);
    (0, E.A)() && !c.A.hasBeenApplied && null != t && T(t, { track: !1 }).catch(h.tEg);
}
