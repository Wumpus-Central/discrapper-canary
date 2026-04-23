var a = t(346915),
    o = t(100846);
t(140667);
var i = t(339984);
async function n(e) {
    let {
        data: r,
        x: t,
        y: n,
        width: l,
        height: s,
        imageRotation: f = 0,
        flipHorizontal: c = !1,
        resizeWidth: d = null,
        resizeHeight: m = null,
        format: u,
    } = e;
    try {
        let e;
        (e =
            "webp" === u
                ? await (0, o.a6)({
                      webp: r,
                      x: t,
                      y: n,
                      width: l,
                      height: s,
                      imageRotation: f,
                      flipHorizontal: c,
                      resizeWidth: d,
                      resizeHeight: m,
                  })
                : await (0, a.N)({
                      gif: r,
                      x: t,
                      y: n,
                      width: l,
                      height: s,
                      imageRotation: f,
                      flipHorizontal: c,
                      resizeWidth: d,
                      resizeHeight: m,
                  })),
            self.postMessage({ type: i.lA.CROP_ANIMATED_IMAGE_COMPLETE, result: e });
    } catch (t) {
        let e = t instanceof Error ? t.message : String(t),
            r = t instanceof Error ? t.stack : void 0;
        self.postMessage({ type: i.lA.CROP_ANIMATED_IMAGE_ERROR, error: { message: e, stack: r } });
    }
}
self.addEventListener("message", (e) => {
    let { data: r } = e;
    r.type === i.lA.CROP_ANIMATED_IMAGE_START &&
        n({
            data: r.data,
            x: r.x,
            y: r.y,
            width: r.width,
            height: r.height,
            imageRotation: r.imageRotation,
            flipHorizontal: r.flipHorizontal,
            resizeWidth: r.resizeWidth,
            resizeHeight: r.resizeHeight,
            format: r.format,
        });
});
