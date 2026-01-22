r(65821);
var o = r(346915),
    a = r(100846);
r(140667);
var n = r(339984);
async function i(e) {
    let {
        data: t,
        x: r,
        y: i,
        width: l,
        height: c,
        imageRotation: s = 0,
        resizeWidth: f = null,
        resizeHeight: u = null,
        format: m,
    } = e;
    try {
        let e;
        (e =
            "webp" === m
                ? await (0, a.a6)({
                      webp: t,
                      x: r,
                      y: i,
                      width: l,
                      height: c,
                      imageRotation: s,
                      resizeWidth: f,
                      resizeHeight: u,
                  })
                : await (0, o.N)({
                      gif: t,
                      x: r,
                      y: i,
                      width: l,
                      height: c,
                      imageRotation: s,
                      resizeWidth: f,
                      resizeHeight: u,
                  })),
            self.postMessage({
                type: n.lA.CROP_ANIMATED_IMAGE_COMPLETE,
                result: e,
            });
    } catch (r) {
        let e = r instanceof Error ? r.message : String(r),
            t = r instanceof Error ? r.stack : void 0;
        self.postMessage({
            type: n.lA.CROP_ANIMATED_IMAGE_ERROR,
            error: {
                message: e,
                stack: t,
            },
        });
    }
}
self.addEventListener("message", (e) => {
    let { data: t } = e;
    t.type === n.lA.CROP_ANIMATED_IMAGE_START &&
        i({
            data: t.data,
            x: t.x,
            y: t.y,
            width: t.width,
            height: t.height,
            imageRotation: t.imageRotation,
            resizeWidth: t.resizeWidth,
            resizeHeight: t.resizeHeight,
            format: t.format,
        });
});
