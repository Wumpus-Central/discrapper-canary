function i(t) {
    let { image: e, cropDimensions: n, cropOriginCoordinates: i, maxDimensions: o, imageRotation: r = 0 } = t,
        a = e.naturalWidth / e.width,
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
        })(i, r),
        c = r % 180 != 0,
        s = n.width * a,
        u = n.height * a,
        d = Math.min(s, o.width),
        _ = Math.min(u, o.height),
        g = (c ? n.height : n.width) / 2,
        m = (c ? n.width : n.height) / 2,
        f = (e.width / 2 - g - l.x) * a,
        h = (e.height / 2 - m - l.y) * a,
        p = c ? u : s,
        b = c ? s : u,
        { x: x, y: y } = (function (t, e, n) {
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
        })(s, u, r);
    return {
        sourceX: f,
        sourceY: h,
        sourceWidth: p,
        sourceHeight: b,
        destinationX: x,
        destinationY: y,
        destinationWidth: c ? _ : d,
        destinationHeight: c ? d : _,
        canvasWidth: d,
        canvasHeight: _
    };
}
function o(t) {
    let { image: e, cropDimensions: n, cropOriginCoordinates: o, maxDimensions: r, imageRotation: a = 0 } = t,
        {
            sourceX: l,
            sourceY: c,
            sourceWidth: s,
            sourceHeight: u,
            destinationX: d,
            destinationY: _,
            destinationWidth: g,
            destinationHeight: m,
            canvasWidth: f,
            canvasHeight: h
        } = i({
            image: e,
            cropDimensions: n,
            cropOriginCoordinates: o,
            maxDimensions: r,
            imageRotation: a
        }),
        p = document.createElement('canvas');
    (p.width = f), (p.height = h);
    let b = p.getContext('2d');
    return null != b && (b.rotate((a * Math.PI) / 180), b.drawImage(e, l, c, s, u, d, _, g, m)), p.toDataURL('image/png');
}
function r(t, e, n) {
    let i = t.naturalWidth / t.naturalHeight,
        r = e,
        a = n;
    t.naturalWidth > t.naturalHeight ? (r /= i) : (a *= i);
    let l = {
        height: r,
        width: a
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
    Ae: () => r,
    GS: () => i,
    PT: () => o
});
