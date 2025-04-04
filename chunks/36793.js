function o(t) {
    let { image: e, cropDimensions: n, cropOriginCoordinates: o, maxDimensions: a, imageRotation: r = 0 } = t,
        i = e.naturalWidth / e.width,
        _ = (function (t, e) {
            let { x: n, y: o } = t;
            switch (e) {
                case 90:
                    return {
                        x: o,
                        y: -n
                    };
                case 180:
                    return {
                        x: -n,
                        y: -o
                    };
                case 270:
                    return {
                        x: -o,
                        y: n
                    };
                default:
                    return {
                        x: n,
                        y: o
                    };
            }
        })(o, r),
        l = r % 180 != 0,
        d = n.width * i,
        u = n.height * i,
        h = Math.min(d, a.width),
        s = Math.min(u, a.height),
        m = (l ? n.height : n.width) / 2,
        c = (l ? n.width : n.height) / 2,
        g = (e.width / 2 - m - _.x) * i,
        p = (e.height / 2 - c - _.y) * i,
        y = l ? u : d,
        C = l ? d : u,
        { x: w, y: x } = (function (t, e, n) {
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
        })(d, u, r);
    return {
        sourceX: g,
        sourceY: p,
        sourceWidth: y,
        sourceHeight: C,
        destinationX: w,
        destinationY: x,
        destinationWidth: l ? s : h,
        destinationHeight: l ? h : s,
        canvasWidth: h,
        canvasHeight: s
    };
}
function a(t) {
    let { image: e, cropDimensions: n, cropOriginCoordinates: a, maxDimensions: r, imageRotation: i = 0 } = t,
        {
            sourceX: _,
            sourceY: l,
            sourceWidth: d,
            sourceHeight: u,
            destinationX: h,
            destinationY: s,
            destinationWidth: m,
            destinationHeight: c,
            canvasWidth: g,
            canvasHeight: p
        } = o({
            image: e,
            cropDimensions: n,
            cropOriginCoordinates: a,
            maxDimensions: r,
            imageRotation: i
        }),
        y = document.createElement('canvas');
    (y.width = g), (y.height = p);
    let C = y.getContext('2d');
    return null != C && (C.rotate((i * Math.PI) / 180), C.drawImage(e, _, l, d, u, h, s, m, c)), y.toDataURL('image/png');
}
function r(t, e, n) {
    let o = t.naturalWidth / t.naturalHeight,
        r = e,
        i = n;
    t.naturalWidth > t.naturalHeight ? (r /= o) : (i *= o);
    let _ = {
        height: r,
        width: i
    };
    return a({
        image: t,
        cropDimensions: {
            width: t.width,
            height: t.height
        },
        cropOriginCoordinates: {
            x: 0,
            y: 0
        },
        maxDimensions: _
    });
}
n.d(e, {
    Ae: () => r,
    GS: () => o,
    PT: () => a
});
