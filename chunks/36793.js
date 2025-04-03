function n(e) {
    let { image: t, cropDimensions: o, cropOriginCoordinates: n, maxDimensions: i, imageRotation: a = 0 } = e,
        d = t.naturalWidth / t.width,
        r = (function (e, t) {
            let { x: o, y: n } = e;
            switch (t) {
                case 90:
                    return {
                        x: n,
                        y: -o
                    };
                case 180:
                    return {
                        x: -o,
                        y: -n
                    };
                case 270:
                    return {
                        x: -n,
                        y: o
                    };
                default:
                    return {
                        x: o,
                        y: n
                    };
            }
        })(n, a),
        l = a % 180 != 0,
        u = o.width * d,
        c = o.height * d,
        _ = Math.min(u, i.width),
        s = Math.min(c, i.height),
        f = (l ? o.height : o.width) / 2,
        h = (l ? o.width : o.height) / 2,
        m = (t.width / 2 - f - r.x) * d,
        p = (t.height / 2 - h - r.y) * d,
        b = l ? c : u,
        w = l ? u : c,
        { x: g, y: x } = (function (e, t, o) {
            switch (o) {
                case 0:
                    return {
                        x: 0,
                        y: 0
                    };
                case 90:
                    return {
                        x: 0,
                        y: -e
                    };
                case 180:
                    return {
                        x: -e,
                        y: -t
                    };
                case 270:
                    return {
                        x: -t,
                        y: 0
                    };
            }
        })(u, c, a);
    return {
        sourceX: m,
        sourceY: p,
        sourceWidth: b,
        sourceHeight: w,
        destinationX: g,
        destinationY: x,
        destinationWidth: l ? s : _,
        destinationHeight: l ? _ : s,
        canvasWidth: _,
        canvasHeight: s
    };
}
function i(e) {
    let { image: t, cropDimensions: o, cropOriginCoordinates: i, maxDimensions: a, imageRotation: d = 0 } = e,
        {
            sourceX: r,
            sourceY: l,
            sourceWidth: u,
            sourceHeight: c,
            destinationX: _,
            destinationY: s,
            destinationWidth: f,
            destinationHeight: h,
            canvasWidth: m,
            canvasHeight: p
        } = n({
            image: t,
            cropDimensions: o,
            cropOriginCoordinates: i,
            maxDimensions: a,
            imageRotation: d
        }),
        b = document.createElement('canvas');
    (b.width = m), (b.height = p);
    let w = b.getContext('2d');
    return null != w && (w.rotate((d * Math.PI) / 180), w.drawImage(t, r, l, u, c, _, s, f, h)), b.toDataURL('image/png');
}
function a(e, t, o) {
    let n = e.naturalWidth / e.naturalHeight,
        a = t,
        d = o;
    e.naturalWidth > e.naturalHeight ? (a /= n) : (d *= n);
    let r = {
        height: a,
        width: d
    };
    return i({
        image: e,
        cropDimensions: {
            width: e.width,
            height: e.height
        },
        cropOriginCoordinates: {
            x: 0,
            y: 0
        },
        maxDimensions: r
    });
}
o.d(t, {
    Ae: () => a,
    GS: () => n,
    PT: () => i
});
