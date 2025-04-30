function i(t) {
    let { image: e, cropDimensions: n, cropOriginCoordinates: i, maxDimensions: o, imageRotation: a = 0 } = t,
        r = e.naturalWidth / e.width,
        l = (function (t, e) {
            let { x: n, y: i } = t;
            switch (e) {
                case 90:
                    return {
                        x: i,
                        y: -n
                    };
                case 180:
                    return {
                        x: -n,
                        y: -i
                    };
                case 270:
                    return {
                        x: -i,
                        y: n
                    };
                default:
                    return {
                        x: n,
                        y: i
                    };
            }
        })(i, a),
        s = a % 180 != 0,
        c = n.width * r,
        d = n.height * r,
        u = Math.min(c, o.width),
        _ = Math.min(d, o.height),
        g = (s ? n.height : n.width) / 2,
        h = (s ? n.width : n.height) / 2,
        m = (e.width / 2 - g - l.x) * r,
        x = (e.height / 2 - h - l.y) * r,
        f = s ? d : c,
        p = s ? c : d,
        { x: N, y: b } = (function (t, e, n) {
            switch (n) {
                case 0:
                    return {
                        x: 0,
                        y: 0
                    };
                case 90:
                    return {
                        x: 0,
                        y: -t
                    };
                case 180:
                    return {
                        x: -t,
                        y: -e
                    };
                case 270:
                    return {
                        x: -e,
                        y: 0
                    };
            }
        })(c, d, a);
    return {
        sourceX: m,
        sourceY: x,
        sourceWidth: f,
        sourceHeight: p,
        destinationX: N,
        destinationY: b,
        destinationWidth: s ? _ : u,
        destinationHeight: s ? u : _,
        canvasWidth: u,
        canvasHeight: _
    };
}
function o(t) {
    let { image: e, cropDimensions: n, cropOriginCoordinates: o, maxDimensions: a, imageRotation: r = 0 } = t,
        {
            sourceX: l,
            sourceY: s,
            sourceWidth: c,
            sourceHeight: d,
            destinationX: u,
            destinationY: _,
            destinationWidth: g,
            destinationHeight: h,
            canvasWidth: m,
            canvasHeight: x
        } = i({
            image: e,
            cropDimensions: n,
            cropOriginCoordinates: o,
            maxDimensions: a,
            imageRotation: r
        }),
        f = document.createElement('canvas');
    (f.width = m), (f.height = x);
    let p = f.getContext('2d');
    return null != p && (p.rotate((r * Math.PI) / 180), p.drawImage(e, l, s, c, d, u, _, g, h)), f.toDataURL('image/png');
}
function a(t, e, n) {
    let i = t.naturalWidth / t.naturalHeight,
        a = e,
        r = n;
    t.naturalWidth > t.naturalHeight ? (a /= i) : (r *= i);
    let l = {
        height: a,
        width: r
    };
    return o({
        image: t,
        cropDimensions: {
            width: t.width,
            height: t.height
        },
        cropOriginCoordinates: {
            x: 0,
            y: 0
        },
        maxDimensions: l
    });
}
n.d(e, {
    Ae: () => a,
    GS: () => i,
    PT: () => o
});
