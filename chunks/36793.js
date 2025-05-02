function r(e) {
    let { image: t, cropDimensions: n, cropOriginCoordinates: r, maxDimensions: i, imageRotation: l = 0 } = e,
        s = t.naturalWidth / t.width,
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
        })(r, l),
        o = l % 180 != 0,
        c = n.width * s,
        u = n.height * s,
        d = Math.min(c, i.width),
        m = Math.min(u, i.height),
        g = (o ? n.height : n.width) / 2,
        p = (o ? n.width : n.height) / 2,
        f = (t.width / 2 - g - a.x) * s,
        h = (t.height / 2 - p - a.y) * s,
        x = o ? u : c,
        b = o ? c : u,
        { x: j, y: _ } = (function (e, t, n) {
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
        })(c, u, l);
    return (
        i.width < c && (j *= i.width / c),
        i.height < u && (_ *= i.height / u),
        {
            sourceX: f,
            sourceY: h,
            sourceWidth: x,
            sourceHeight: b,
            destinationX: j,
            destinationY: _,
            destinationWidth: o ? m : d,
            destinationHeight: o ? d : m,
            canvasWidth: d,
            canvasHeight: m
        }
    );
}
function i(e) {
    let { image: t, cropDimensions: n, cropOriginCoordinates: i, maxDimensions: l, imageRotation: s = 0 } = e,
        {
            sourceX: a,
            sourceY: o,
            sourceWidth: c,
            sourceHeight: u,
            destinationX: d,
            destinationY: m,
            destinationWidth: g,
            destinationHeight: p,
            canvasWidth: f,
            canvasHeight: h
        } = r({
            image: t,
            cropDimensions: n,
            cropOriginCoordinates: i,
            maxDimensions: l,
            imageRotation: s
        }),
        x = document.createElement('canvas');
    (x.width = f), (x.height = h);
    let b = x.getContext('2d');
    return null != b && (b.rotate((s * Math.PI) / 180), b.drawImage(t, a, o, c, u, d, m, g, p)), x.toDataURL('image/png');
}
function l(e, t, n) {
    let r = e.naturalWidth / e.naturalHeight,
        l = t,
        s = n;
    e.naturalWidth > e.naturalHeight ? (l /= r) : (s *= r);
    let a = {
        height: l,
        width: s
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
    Ae: () => l,
    GS: () => r,
    PT: () => i
});
