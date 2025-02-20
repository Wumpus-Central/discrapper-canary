function r(e) {
    let { image: t, cropDimensions: n, cropOriginCoordinates: r, maxDimensions: i, imageRotation: s = 0 } = e,
        a = t.naturalWidth / t.width,
        l = (function (e, t) {
            let { x: n, y: r } = e;
            switch (t) {
                case 90:
                    return {
                        x: r,
                        y: -n
                    };
                case 180:
                    return {
                        x: -n,
                        y: -r
                    };
                case 270:
                    return {
                        x: -r,
                        y: n
                    };
                default:
                    return {
                        x: n,
                        y: r
                    };
            }
        })(r, s),
        o = s % 180 != 0,
        c = n.width * a,
        d = n.height * a,
        u = Math.min(c, i.width),
        m = Math.min(d, i.height),
        p = (o ? n.height : n.width) / 2,
        g = (o ? n.width : n.height) / 2,
        h = (t.width / 2 - p - l.x) * a,
        f = (t.height / 2 - g - l.y) * a,
        b = o ? d : c,
        x = o ? c : d,
        { x: j, y: N } = (function (e, t, n) {
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
        })(c, d, s);
    return {
        sourceX: h,
        sourceY: f,
        sourceWidth: b,
        sourceHeight: x,
        destinationX: j,
        destinationY: N,
        destinationWidth: o ? m : u,
        destinationHeight: o ? u : m,
        canvasWidth: u,
        canvasHeight: m
    };
}
function i(e) {
    let { image: t, cropDimensions: n, cropOriginCoordinates: i, maxDimensions: s, imageRotation: a = 0 } = e,
        {
            sourceX: l,
            sourceY: o,
            sourceWidth: c,
            sourceHeight: d,
            destinationX: u,
            destinationY: m,
            destinationWidth: p,
            destinationHeight: g,
            canvasWidth: h,
            canvasHeight: f
        } = r({
            image: t,
            cropDimensions: n,
            cropOriginCoordinates: i,
            maxDimensions: s,
            imageRotation: a
        }),
        b = document.createElement('canvas');
    (b.width = h), (b.height = f);
    let x = b.getContext('2d');
    return null != x && (x.rotate((a * Math.PI) / 180), x.drawImage(t, l, o, c, d, u, m, p, g)), b.toDataURL('image/png');
}
function s(e, t, n) {
    let r = e.naturalWidth / e.naturalHeight,
        s = t,
        a = n;
    e.naturalWidth > e.naturalHeight ? (s /= r) : (a *= r);
    let l = {
        height: s,
        width: a
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
        maxDimensions: l
    });
}
n.d(t, {
    Ae: () => s,
    GS: () => r,
    PT: () => i
});
