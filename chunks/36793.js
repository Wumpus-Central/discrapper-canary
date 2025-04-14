function r(e) {
    let { image: t, cropDimensions: n, cropOriginCoordinates: r, maxDimensions: i, imageRotation: s = 0 } = e,
        l = t.naturalWidth / t.width,
        a = (function (e, t) {
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
        c = n.width * l,
        d = n.height * l,
        u = Math.min(c, i.width),
        m = Math.min(d, i.height),
        g = (o ? n.height : n.width) / 2,
        p = (o ? n.width : n.height) / 2,
        h = (t.width / 2 - g - a.x) * l,
        f = (t.height / 2 - p - a.y) * l,
        x = o ? d : c,
        b = o ? c : d,
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
        sourceWidth: x,
        sourceHeight: b,
        destinationX: j,
        destinationY: N,
        destinationWidth: o ? m : u,
        destinationHeight: o ? u : m,
        canvasWidth: u,
        canvasHeight: m
    };
}
function i(e) {
    let { image: t, cropDimensions: n, cropOriginCoordinates: i, maxDimensions: s, imageRotation: l = 0 } = e,
        {
            sourceX: a,
            sourceY: o,
            sourceWidth: c,
            sourceHeight: d,
            destinationX: u,
            destinationY: m,
            destinationWidth: g,
            destinationHeight: p,
            canvasWidth: h,
            canvasHeight: f
        } = r({
            image: t,
            cropDimensions: n,
            cropOriginCoordinates: i,
            maxDimensions: s,
            imageRotation: l
        }),
        x = document.createElement('canvas');
    (x.width = h), (x.height = f);
    let b = x.getContext('2d');
    return null != b && (b.rotate((l * Math.PI) / 180), b.drawImage(t, a, o, c, d, u, m, g, p)), x.toDataURL('image/png');
}
function s(e, t, n) {
    let r = e.naturalWidth / e.naturalHeight,
        s = t,
        l = n;
    e.naturalWidth > e.naturalHeight ? (s /= r) : (l *= r);
    let a = {
        height: s,
        width: l
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
        maxDimensions: a
    });
}
n.d(t, {
    Ae: () => s,
    GS: () => r,
    PT: () => i
});
