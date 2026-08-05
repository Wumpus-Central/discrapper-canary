r(393431), r(532706), r(42231), r(232424), r(949626), r(767709), r(65162), r(508300);
let a = r.p + "189422196a4f8b53.woff2",
    o = r.p + "cb2006dbced0e246.woff2";
var i,
    l,
    n = r(626584),
    s = r(927813);
((i = {})[(i.SECONDS_30 = 30 * s.A.Millis.SECOND)] = "SECONDS_30"),
    (i[(i.MINUTES_1 = s.A.Millis.MINUTE)] = "MINUTES_1"),
    (i[(i.MINUTES_2 = 2 * s.A.Millis.MINUTE)] = "MINUTES_2"),
    s.A.Millis.SECOND,
    new n.A("Clips"),
    s.A.Millis.SECOND,
    s.A.Millis.DAY;
var f = (((l = {}).TEXT = "text"), l);
let c = { none: 0, small: 1 / 16, medium: 1 / 8, large: 1 / 4 },
    d = Promise.allSettled(
        [
            { family: "gg sans", url: a, weight: "700" },
            { family: "Noto Sans", url: o, weight: "700" },
        ].map(async (e) => {
            let { family: t, url: r, weight: a } = e,
                o = new FontFace(t, `url(${r})`, { weight: a });
            self.fonts.add(o), await o.load();
        }),
    );
async function p(e, t, r, a) {
    let o = new OffscreenCanvas(t, r),
        i = o.getContext("2d");
    if (null == i) throw Error("rasterizeTextTrack: could not create a 2D canvas context");
    await d;
    let { text: l, style: n, position: s } = e.data,
        f = n.fontSize * r,
        p = c[n.strokeWidth] * f;
    (i.font = `700 ${f}px ${a}`), (i.textAlign = "center"), (i.textBaseline = "alphabetic");
    let { fontBoundingBoxAscent: u, fontBoundingBoxDescent: h } = i.measureText(l),
        b = s.x * t,
        y = s.y * r + (u - h) / 2;
    p > 0 &&
        ((i.lineJoin = "round"),
        (i.miterLimit = 2),
        (i.lineWidth = p),
        (i.strokeStyle = n.strokeColor),
        i.strokeText(l, b, y)),
        (i.fillStyle = n.color),
        i.fillText(l, b, y);
    let g = await o.convertToBlob({ type: "image/png" });
    return {
        pngBase64: (function (e) {
            let t = new Uint8Array(e),
                r = "";
            for (let e = 0; e < t.length; e += 32768) r += String.fromCharCode(...t.subarray(e, e + 32768));
            return btoa(r);
        })(await g.arrayBuffer()),
        x: 0,
        y: 0,
        width: 1,
        height: 1,
    };
}
self.addEventListener("message", async (e) => {
    let {
        data: { tracks: t, canvasWidth: r, canvasHeight: a, fontFamily: o },
    } = e;
    try {
        let e = await Promise.all(
            t.map((e) =>
                (function (e, t, r, a) {
                    if (e.type === f.TEXT) return p(e, t, r, a);
                    {
                        let t = e.type;
                        throw Error(`rasterizeTrack: unhandled track type '${t}'`);
                    }
                })(e, r, a, o),
            ),
        );
        self.postMessage({ results: e });
    } catch (t) {
        let e = { error: t instanceof Error ? t.message : "Unknown error" };
        self.postMessage(e);
    }
});
