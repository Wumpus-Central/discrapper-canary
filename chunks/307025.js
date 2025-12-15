r(415506);
var o = r(76674),
    n = r(586818);
r(149182);
var a = r(486324);
async function i(e) {
    let {
        data: t,
        x: r,
        y: i,
        width: c,
        height: l,
        imageRotation: f = 0,
        resizeWidth: s = null,
        resizeHeight: u = null,
        format: b,
    } = e;
    try {
        let e;
        (e =
            "webp" === b
                ? await (0, n.$z)({
                      webp: t,
                      x: r,
                      y: i,
                      width: c,
                      height: l,
                      imageRotation: f,
                      resizeWidth: s,
                      resizeHeight: u,
                  })
                : await (0, o.Q)({
                      gif: t,
                      x: r,
                      y: i,
                      width: c,
                      height: l,
                      imageRotation: f,
                      resizeWidth: s,
                      resizeHeight: u,
                  })),
            self.postMessage({
                type: a.u.CROP_ANIMATED_IMAGE_COMPLETE,
                result: e,
            });
    } catch (r) {
        let e = r instanceof Error ? r.message : String(r),
            t = r instanceof Error ? r.stack : void 0;
        self.postMessage({
            type: a.u.CROP_ANIMATED_IMAGE_ERROR,
            error: {
                message: e,
                stack: t,
            },
        });
    }
}
self.addEventListener("message", (e) => {
    let { data: t } = e;
    t.type === a.u.CROP_ANIMATED_IMAGE_START &&
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
