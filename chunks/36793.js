function n(t) {
    let { image: e, cropDimensions: o, cropOriginCoordinates: n, maxDimensions: a, imageRotation: i = 0 } = t,
        r = e.naturalWidth / e.width,
        _ = (function (t, e) {
            let { x: o, y: n } = t;
            switch (e) {
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
        })(n, i),
        l = i % 180 != 0,
        d = o.width * r,
        h = o.height * r,
        u = Math.min(d, a.width),
        s = Math.min(h, a.height),
        m = (l ? o.height : o.width) / 2,
        c = (l ? o.width : o.height) / 2,
        g = (e.width / 2 - m - _.x) * r,
        y = (e.height / 2 - c - _.y) * r,
        p = l ? h : d,
        w = l ? d : h,
        { x: C, y: v } = (function (t, e, o) {
            switch (o) {
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
        })(d, h, i);
    return (
        a.width < d && (C *= a.width / d),
        a.height < h && (v *= a.height / h),
        {
            sourceX: g,
            sourceY: y,
            sourceWidth: p,
            sourceHeight: w,
            destinationX: C,
            destinationY: v,
            destinationWidth: l ? s : u,
            destinationHeight: l ? u : s,
            canvasWidth: u,
            canvasHeight: s
        }
    );
}
function a(t) {
    let { image: e, cropDimensions: o, cropOriginCoordinates: a, maxDimensions: i, imageRotation: r = 0 } = t,
        {
            sourceX: _,
            sourceY: l,
            sourceWidth: d,
            sourceHeight: h,
            destinationX: u,
            destinationY: s,
            destinationWidth: m,
            destinationHeight: c,
            canvasWidth: g,
            canvasHeight: y
        } = n({
            image: e,
            cropDimensions: o,
            cropOriginCoordinates: a,
            maxDimensions: i,
            imageRotation: r
        }),
        p = document.createElement('canvas');
    (p.width = g), (p.height = y);
    let w = p.getContext('2d');
    return null != w && (w.rotate((r * Math.PI) / 180), w.drawImage(e, _, l, d, h, u, s, m, c)), p.toDataURL('image/png');
}
function i(t, e, o) {
    let n = t.naturalWidth / t.naturalHeight,
        i = e,
        r = o;
    t.naturalWidth > t.naturalHeight ? (i /= n) : (r *= n);
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
o.d(e, {
    Ae: () => i,
    GS: () => n,
    PT: () => a
});
