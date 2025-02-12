function i(e) {
    let { image: t, cropDimensions: n, cropOriginCoordinates: i, maxDimensions: o, imageRotation: r = 0 } = e,
        a = t.naturalWidth / t.width,
        l = (function (e, t) {
            let { x: n, y: i } = e;
            switch (t) {
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
        })(i, r),
        s = r % 180 != 0,
        c = n.width * a,
        d = n.height * a,
        u = Math.min(c, o.width),
        _ = Math.min(d, o.height),
        g = (s ? n.height : n.width) / 2,
        h = (s ? n.width : n.height) / 2,
        m = (t.width / 2 - g - l.x) * a,
        p = (t.height / 2 - h - l.y) * a,
        x = s ? d : c,
        f = s ? c : d,
        { x: C, y: E } = (function (e, t, n) {
            switch (n) {
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
        })(c, d, r);
    return {
        sourceX: m,
        sourceY: p,
        sourceWidth: x,
        sourceHeight: f,
        destinationX: C,
        destinationY: E,
        destinationWidth: s ? _ : u,
        destinationHeight: s ? u : _,
        canvasWidth: u,
        canvasHeight: _
    };
}
function o(e) {
    let { image: t, cropDimensions: n, cropOriginCoordinates: o, maxDimensions: r, imageRotation: a = 0 } = e,
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
            canvasHeight: p
        } = i({
            image: t,
            cropDimensions: n,
            cropOriginCoordinates: o,
            maxDimensions: r,
            imageRotation: a
        }),
        x = document.createElement('canvas');
    (x.width = m), (x.height = p);
    let f = x.getContext('2d');
    return null != f && (f.rotate((a * Math.PI) / 180), f.drawImage(t, l, s, c, d, u, _, g, h)), x.toDataURL('image/png');
}
function r(e, t, n) {
    let i = e.naturalWidth / e.naturalHeight,
        r = t,
        a = n;
    e.naturalWidth > e.naturalHeight ? (r /= i) : (a *= i);
    let l = {
        height: r,
        width: a
    };
    return o({
        image: e,
        cropDimensions: {
            width: e.width,
            height: e.height
        },
        cropOriginCoordinates: {
            x: 0,
            y: 0
        },
        maxDimensions: l
    });
}
n.d(t, {
    Ae: () => r,
    GS: () => i,
    PT: () => o
});
