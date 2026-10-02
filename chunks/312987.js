(n.d(t, { S1: () => S, gB: () => g, PX: () => N }),
    n(393431),
    n(532706),
    n(42231),
    n(232424),
    n(949626),
    n(767709),
    n(65162));
var i = n(205693),
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
    A = n(723702);
let h = (0, n(945810).mj)({
    name: "2026-08-virtual-backgrounds-ios",
    kind: "user",
    defaultConfig: { enabled: !1 },
    variations: { 1: { enabled: !0 } },
});
var I = n(463951),
    f = n(652215);
async function p(e) {
    let t = await fetch(e),
        n = await t.blob();
    return new Uint8ClampedArray(await n.arrayBuffer());
}
function T(e, t, n, i, r) {
    (0, l.wq)({ [e]: { graph: n, target: t, image: i, blob: r } });
}
async function m(e, t, n) {
    let r,
        s = !1;
    if (null == n) return T(e, t, i.gO.NONE);
    if ("blur" === n) return T(e, t, i.gO.BACKGROUND_BLUR);
    if ("string" == typeof n || "number" == typeof n) {
        let e = (0, c.A)()[n];
        ((s = e.isVideo ?? !1), (r = e.source));
    } else {
        let e = n.asset;
        ((s = (0, a.VI)(e) || (0, a.q6)(e)),
            (r = (0, a.Bo)({ userId: n.user_id, assetId: n.id, assetHash: e, size: E.Im.width })));
    }
    if (null != r)
        try {
            var o;
            let n = s
                    ? void 0
                    : await ((o = r),
                      new Promise((e, t) => {
                          let n = new Image();
                          ((n.crossOrigin = "anonymous"),
                              (n.onload = () => {
                                  let t = document.createElement("canvas");
                                  ((t.width = E.Im.width), (t.height = E.Im.height));
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
                              (n.src = o));
                      })),
                a = s ? await p(r) : void 0;
            T(e, t, i.gO.BACKGROUND_REPLACEMENT, n, a);
        } catch (e) {
            (0, l.Mj)();
        }
}
async function g(e, t) {
    let { track: n = !0, location: r } = t;
    (await m(i.Tr.CAMERA_BACKGROUND_LIVE, { type: i.Qo.INPUT_DEVICE }, e), n && (0, d.Uz)(e, r, "Enabled"));
}
async function S(e, t, n) {
    let { track: r = !0, location: a } = n;
    ((0, l.Oo)(),
        await m(i.Tr.CAMERA_BACKGROUND_PREVIEW, { type: i.Qo.STREAM, streamId: t }, e),
        r && (0, d.Uz)(e, a, "Preview"));
}
function N() {
    let e = r.default.getCurrentUser();
    if (null == e) return;
    let t = (0, s.i)(e);
    (0, I.A)() &&
        (!(0, A.isIOS)() || h.getConfig({ location: "applyBackgroundOption" }).enabled) &&
        !o.A.hasBeenApplied &&
        null != t &&
        g(t, { track: !1 }).catch(f.tEg);
}
