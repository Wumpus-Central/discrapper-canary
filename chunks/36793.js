function o(t) {
    let { image: e, cropDimensions: n, cropOriginCoordinates: o, maxDimensions: a, imageRotation: i = 0 } = t,
        r = e.naturalWidth / e.width,
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
        })(o, i),
        l = i % 180 != 0,
        h = n.width * r,
        d = n.height * r,
        u = Math.min(h, a.width),
        s = Math.min(d, a.height),
        m = (l ? n.height : n.width) / 2,
        c = (l ? n.width : n.height) / 2,
        g = (e.width / 2 - m - _.x) * r,
        p = (e.height / 2 - c - _.y) * r,
        y = l ? d : h,
        w = l ? h : d,
        { x: C, y: x } = (function (t, e, n) {
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
        })(h, d, i);
    return (
        a.width < h && (C *= a.width / h),
        a.height < d && (x *= a.height / d),
        {
            sourceX: g,
            sourceY: p,
            sourceWidth: y,
            sourceHeight: w,
            destinationX: C,
            destinationY: x,
            destinationWidth: l ? s : u,
            destinationHeight: l ? u : s,
            canvasWidth: u,
            canvasHeight: s
        }
    );
}
function a(t) {
    let { image: e, cropDimensions: n, cropOriginCoordinates: a, maxDimensions: i, imageRotation: r = 0 } = t,
        {
            sourceX: _,
            sourceY: l,
            sourceWidth: h,
            sourceHeight: d,
            destinationX: u,
            destinationY: s,
            destinationWidth: m,
            destinationHeight: c,
            canvasWidth: g,
            canvasHeight: p
        } = o({
            image: e,
            cropDimensions: n,
            cropOriginCoordinates: a,
            maxDimensions: i,
            imageRotation: r
        }),
        y = document.createElement('canvas');
    (y.width = g), (y.height = p);
    let w = y.getContext('2d');
    return null != w && (w.rotate((r * Math.PI) / 180), w.drawImage(e, _, l, h, d, u, s, m, c)), y.toDataURL('image/png');
}
function i(t, e, n) {
    let o = t.naturalWidth / t.naturalHeight,
        i = e,
        r = n;
    t.naturalWidth > t.naturalHeight ? (i /= o) : (r *= o);
    let _ = {
        height: i,
        width: r
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
    Ae: () => i,
    GS: () => o,
    PT: () => a
});
