n.d(t, { S1: () => m, gB: () => T, PX: () => g }),
    n(393431),
    n(532706),
    n(42231),
    n(232424),
    n(949626),
    n(767709),
    n(65162);
var i = n(459838),
    r = n(287809),
    a = n(486020),
    s = n(329551),
    l = n(285918),
    o = n(912630),
    d = n(965162),
    c = n(498559),
    u = n(284009),
    _ = n.n(u),
    E = n(577718),
    A = n(767262),
    h = n(652215);
async function I(e) {
    let t = await fetch(e),
        n = await t.blob();
    return new Uint8ClampedArray(await n.arrayBuffer());
}
function f(e, t, n, i, r) {
    (0, l.wq)({ [e]: { graph: n, target: t, image: i, blob: r } });
}
async function p(e, t, n) {
    let r,
        s = !1;
    if (null == n) return f(e, t, i.gO.NONE);
    if ("blur" === n) return f(e, t, i.gO.BACKGROUND_BLUR);
    if ("string" == typeof n || "number" == typeof n) {
        let e = (0, c.A)()[n];
        (s = e.isVideo ?? !1), (r = e.source);
    } else {
        let e = n.asset;
        (s = (0, a.VI)(e) || (0, a.q6)(e)),
            (r = (0, a.Bo)({ userId: n.user_id, assetId: n.id, assetHash: e, size: E.Im.width }));
    }
    if (null != r)
        try {
            var o;
            let n = s
                    ? void 0
                    : await ((o = r),
                      new Promise((e, t) => {
                          let n = new Image();
                          (n.crossOrigin = "anonymous"),
                              (n.onload = () => {
                                  let t = document.createElement("canvas");
                                  (t.width = E.Im.width), (t.height = E.Im.height);
                                  let i = t.getContext("2d");
                                  _()(null != i, "Canvas context is missing");
                                  let r = n.height / n.width,
                                      a = E.Im.height,
                                      s = E.Im.height / r,
                                      l = (t.width - s) / 2,
                                      o = (t.height - a) / 2;
                                  i.drawImage(n, l, o, s, a);
                                  let d = i.getImageData(0, 0, t.width, t.height);
                                  e({ data: d.data, width: d.width, height: d.height, pixelFormat: "rgba" });
                              }),
                              (n.onerror = (e) => t(e)),
                              (n.src = o);
                      })),
                a = s ? await I(r) : void 0;
            f(e, t, i.gO.BACKGROUND_REPLACEMENT, n, a);
        } catch (e) {
            (0, l.Mj)();
        }
}
async function T(e, t) {
    let { track: n = !0, location: r } = t;
    await p(i.Tr.CAMERA_BACKGROUND_LIVE, { type: i.Qo.INPUT_DEVICE }, e), n && (0, d.Uz)(e, r, "Enabled");
}
async function m(e, t, n) {
    let { track: r = !0, location: a } = n;
    (0, l.Oo)(),
        await p(i.Tr.CAMERA_BACKGROUND_PREVIEW, { type: i.Qo.STREAM, streamId: t }, e),
        r && (0, d.Uz)(e, a, "Preview");
}
function g() {
    let e = r.default.getCurrentUser();
    if (null == e) return;
    let t = (0, s.i)(e);
    (0, A.A)() && !o.A.hasBeenApplied && null != t && T(t, { track: !1 }).catch(h.tEg);
}
