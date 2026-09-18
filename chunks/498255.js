(r(393431), r(532706), r(42231), r(232424), r(949626), r(767709), r(65162), r(508300));
let a = r.p + "189422196a4f8b53.woff2",
    n = r.p + "cb2006dbced0e246.woff2";
var o,
    l,
    i = r(626584),
    s = r(927813);
(((o = {})[(o.SECONDS_30 = 30 * s.A.Millis.SECOND)] = "SECONDS_30"),
    (o[(o.MINUTES_1 = s.A.Millis.MINUTE)] = "MINUTES_1"),
    (o[(o.MINUTES_2 = 2 * s.A.Millis.MINUTE)] = "MINUTES_2"),
    s.A.Millis.SECOND,
    new i.A("Clips"),
    s.A.Millis.SECOND,
    s.A.Millis.DAY);
var f = (((l = {}).TEXT = "text"), (l.IMAGE = "image"), l);
let c = { none: 0, small: 1 / 16, medium: 1 / 8, large: 1 / 4 },
    d = { none: 0, small: 0.02, medium: 0.05, large: 0.1 },
    u = Promise.allSettled(
        [
            { family: "gg sans", url: a, weight: "700" },
            { family: "Noto Sans", url: n, weight: "700" },
        ].map(async (e) => {
            let { family: t, url: r, weight: a } = e,
                n = new FontFace(t, `url(${r})`, { weight: a });
            (self.fonts.add(n), await n.load());
        }),
    ),
    p = { x: 0, y: 0, width: 1, height: 1 };
function h(e, t) {
    let r = new OffscreenCanvas(e, t),
        a = r.getContext("2d");
    if (null == a) throw Error("rasterizeTrack: could not create a 2D canvas context");
    return { canvas: r, ctx: a };
}
async function w(e) {
    let t = await e.convertToBlob({ type: "image/png" });
    return {
        pngBase64: (function (e) {
            let t = new Uint8Array(e),
                r = "";
            for (let e = 0; e < t.length; e += 32768) r += String.fromCharCode(...t.subarray(e, e + 32768));
            return btoa(r);
        })(await t.arrayBuffer()),
        ...p,
    };
}
async function g(e, t, r, a) {
    let { canvas: n, ctx: o } = h(t, r);
    await u;
    let { text: l, style: i, position: s } = e.data,
        f = i.fontSize * r,
        d = c[i.strokeWidth] * f;
    ((o.font = `700 ${f}px ${a}`), (o.textAlign = "center"), (o.textBaseline = "alphabetic"));
    let { fontBoundingBoxAscent: p, fontBoundingBoxDescent: g } = o.measureText(l),
        y = (p - g) / 2;
    return (
        o.translate(s.x * t, s.y * r),
        o.rotate(b(e.data.rotationDeg ?? 0)),
        d > 0 &&
            ((o.lineJoin = "round"),
            (o.miterLimit = 2),
            (o.lineWidth = d),
            (o.strokeStyle = i.strokeColor),
            o.strokeText(l, 0, y)),
        (o.fillStyle = i.color),
        o.fillText(l, 0, y),
        w(n)
    );
}
async function y(e, t, r) {
    let { canvas: a, ctx: n } = h(t, r),
        { src: o, position: l, widthFraction: i, rotationDeg: s, naturalWidth: f, naturalHeight: c } = e.data,
        u = await createImageBitmap(
            (function (e) {
                let t = e.indexOf(","),
                    r = e.slice(5, t).split(";")[0],
                    a = atob(e.slice(t + 1)),
                    n = new Uint8Array(a.length);
                for (let e = 0; e < a.length; e++) n[e] = a.charCodeAt(e);
                return new Blob([n], { type: r });
            })(o),
        );
    try {
        let a = i * t,
            o = a / (f / c),
            p = b(s),
            h = d[e.data.shadow ?? "none"];
        if (h > 0) {
            let t = h * a,
                r = 0.4 * t;
            ((n.shadowColor = e.data.shadowColor ?? "#000000"),
                (n.shadowBlur = t),
                (n.shadowOffsetX = -r * Math.sin(p)),
                (n.shadowOffsetY = r * Math.cos(p)));
        }
        (n.translate(l.x * t, l.y * r), n.rotate(p), n.drawImage(u, -a / 2, -o / 2, a, o));
    } finally {
        u.close();
    }
    return w(a);
}
function b(e) {
    return (e * Math.PI) / 180;
}
self.addEventListener("message", async (e) => {
    let {
        data: { tracks: t, canvasWidth: r, canvasHeight: a, fontFamily: n },
    } = e;
    try {
        let e = await Promise.all(
            t.map((e) =>
                (function (e, t, r, a) {
                    switch (e.type) {
                        case f.TEXT:
                            return g(e, t, r, a);
                        case f.IMAGE:
                            return y(e, t, r);
                        default:
                            throw Error("rasterizeTrack: unhandled track type");
                    }
                })(e, r, a, n),
            ),
        );
        self.postMessage({ results: e });
    } catch (t) {
        let e = { error: t instanceof Error ? t.message : "Unknown error" };
        self.postMessage(e);
    }
});
