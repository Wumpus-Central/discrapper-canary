n.d(t, { PX: () => C, S1: () => O, gB: () => p }),
    n(393431),
    n(532706),
    n(42231),
    n(232424),
    n(949626),
    n(767709),
    n(65162);
var i = n(284009),
    r = n.n(i),
    a = n(205693),
    l = n(287809),
    s = n(486020),
    o = n(329551),
    u = n(285918),
    _ = n(912630),
    E = n(965162),
    A = n(498559),
    c = n(463951),
    d = n(577718),
    I = n(652215);
async function T(e) {
    let t = await fetch(e),
        n = await t.blob();
    return new Uint8ClampedArray(await n.arrayBuffer());
}
function N(e, t, n, i, r) {
    (0, u.wq)({ [e]: { graph: n, target: t, image: i, blob: r } });
}
async function S(e, t, n) {
    let i,
        l = !1;
    if (null == n) return N(e, t, a.gO.NONE);
    if ("blur" === n) return N(e, t, a.gO.BACKGROUND_BLUR);
    if ("string" == typeof n || "number" == typeof n) {
        let e = (0, A.A)()[n];
        (l = e.isVideo ?? !1), (i = e.source);
    } else {
        let e = n.asset;
        (l = (0, s.VI)(e) || (0, s.q6)(e)),
            (i = (0, s.Bo)({ userId: n.user_id, assetId: n.id, assetHash: e, size: d.Im.width }));
    }
    if (null != i)
        try {
            var o;
            let n = l
                    ? void 0
                    : await ((o = i),
                      new Promise((e, t) => {
                          let n = new Image();
                          (n.crossOrigin = "anonymous"),
                              (n.onload = () => {
                                  let t = document.createElement("canvas");
                                  (t.width = d.Im.width), (t.height = d.Im.height);
                                  let i = t.getContext("2d");
                                  r()(null != i, "Canvas context is missing");
                                  let a = n.height / n.width,
                                      l = d.Im.height,
                                      s = d.Im.height / a,
                                      o = (t.width - s) / 2,
                                      u = (t.height - l) / 2;
                                  i.drawImage(n, o, u, s, l);
                                  let _ = i.getImageData(0, 0, t.width, t.height);
                                  e({ data: _.data, width: _.width, height: _.height, pixelFormat: "rgba" });
                              }),
                              (n.onerror = (e) => t(e)),
                              (n.src = o);
                      })),
                s = l ? await T(i) : void 0;
            N(e, t, a.gO.BACKGROUND_REPLACEMENT, n, s);
        } catch (e) {
            (0, u.Mj)();
        }
}
async function p(e, t) {
    let { track: n = !0, location: i } = t;
    await S(a.Tr.CAMERA_BACKGROUND_LIVE, { type: a.Qo.INPUT_DEVICE }, e), n && (0, E.Uz)(e, i, "Enabled");
}
async function O(e, t, n) {
    let { track: i = !0, location: r } = n;
    (0, u.Oo)(),
        await S(a.Tr.CAMERA_BACKGROUND_PREVIEW, { type: a.Qo.STREAM, streamId: t }, e),
        i && (0, E.Uz)(e, r, "Preview");
}
function C() {
    let e = l.default.getCurrentUser();
    if (null == e) return;
    let t = (0, o.i)(e);
    (0, c.A)() && !_.A.hasBeenApplied && null != t && p(t, { track: !1 }).catch(I.tEg);
}
