function n(t) {
    let { image: e, cropDimensions: r, cropOriginCoordinates: n, maxDimensions: i, imageRotation: l = 0 } = t,
        o = e.naturalWidth / e.width,
        a = (function (t, e) {
            let { x: r, y: n } = t;
            switch (e) {
                case 90:
                    return {
                        x: n,
                        y: -r
                    };
                case 180:
                    return {
                        x: -r,
                        y: -n
                    };
                case 270:
                    return {
                        x: -n,
                        y: r
                    };
                default:
                    return {
                        x: r,
                        y: n
                    };
            }
        })(n, l),
        s = l % 180 != 0,
        c = r.width * o,
        u = r.height * o,
        f = Math.min(c, i.width),
        d = Math.min(u, i.height),
        h = (s ? r.height : r.width) / 2,
        p = (s ? r.width : r.height) / 2,
        g = (e.width / 2 - h - a.x) * o,
        y = (e.height / 2 - p - a.y) * o,
        O = s ? u : c,
        w = s ? c : u,
        { x: b, y: j } = (function (t, e, r) {
            switch (r) {
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
        })(c, u, l);
    return (
        i.width < c && (b *= i.width / c),
        i.height < u && (j *= i.height / u),
        {
            sourceX: g,
            sourceY: y,
            sourceWidth: O,
            sourceHeight: w,
            destinationX: b,
            destinationY: j,
            destinationWidth: s ? d : f,
            destinationHeight: s ? f : d,
            canvasWidth: f,
            canvasHeight: d
        }
    );
}
function i(t) {
    let { image: e, cropDimensions: r, cropOriginCoordinates: i, maxDimensions: l, imageRotation: o = 0 } = t,
        {
            sourceX: a,
            sourceY: s,
            sourceWidth: c,
            sourceHeight: u,
            destinationX: f,
            destinationY: d,
            destinationWidth: h,
            destinationHeight: p,
            canvasWidth: g,
            canvasHeight: y
        } = n({
            image: e,
            cropDimensions: r,
            cropOriginCoordinates: i,
            maxDimensions: l,
            imageRotation: o
        }),
        O = document.createElement('canvas');
    (O.width = g), (O.height = y);
    let w = O.getContext('2d');
    return null != w && (w.rotate((o * Math.PI) / 180), w.drawImage(e, a, s, c, u, f, d, h, p)), O.toDataURL('image/png');
}
function l(t, e, r) {
    let n = t.naturalWidth / t.naturalHeight,
        l = e,
        o = r;
    t.naturalWidth > t.naturalHeight ? (l /= n) : (o *= n);
    let a = {
        height: l,
        width: o
    };
    return i({
        image: t,
        cropDimensions: {
            width: t.width,
            height: t.height
        },
        cropOriginCoordinates: {
            x: 0,
            y: 0
        },
        maxDimensions: a
    });
}
r.d(e, {
    Ae: () => l,
    GS: () => n,
    PT: () => i
});
