function t(e) {
    let { image: i, cropDimensions: n, cropOriginCoordinates: t, maxDimensions: o, imageRotation: r = 0 } = e,
        a = i.naturalWidth / i.width,
        l = (function (e, i) {
            let { x: n, y: t } = e;
            switch (i) {
                case 90:
                    return {
                        x: t,
                        y: -n
                    };
                case 180:
                    return {
                        x: -n,
                        y: -t
                    };
                case 270:
                    return {
                        x: -t,
                        y: n
                    };
                default:
                    return {
                        x: n,
                        y: t
                    };
            }
        })(t, r),
        c = r % 180 != 0,
        d = n.width * a,
        s = n.height * a,
        u = Math.min(d, o.width),
        _ = Math.min(s, o.height),
        g = (c ? n.height : n.width) / 2,
        h = (c ? n.width : n.height) / 2,
        m = (i.width / 2 - g - l.x) * a,
        T = (i.height / 2 - h - l.y) * a,
        x = c ? s : d,
        N = c ? d : s,
        { x: b, y: f } = (function (e, i, n) {
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
                        y: -i
                    };
                case 270:
                    return {
                        x: -i,
                        y: 0
                    };
            }
        })(d, s, r);
    return {
        sourceX: m,
        sourceY: T,
        sourceWidth: x,
        sourceHeight: N,
        destinationX: b,
        destinationY: f,
        destinationWidth: c ? _ : u,
        destinationHeight: c ? u : _,
        canvasWidth: u,
        canvasHeight: _
    };
}
function o(e) {
    let { image: i, cropDimensions: n, cropOriginCoordinates: o, maxDimensions: r, imageRotation: a = 0 } = e,
        {
            sourceX: l,
            sourceY: c,
            sourceWidth: d,
            sourceHeight: s,
            destinationX: u,
            destinationY: _,
            destinationWidth: g,
            destinationHeight: h,
            canvasWidth: m,
            canvasHeight: T
        } = t({
            image: i,
            cropDimensions: n,
            cropOriginCoordinates: o,
            maxDimensions: r,
            imageRotation: a
        }),
        x = document.createElement('canvas');
    (x.width = m), (x.height = T);
    let N = x.getContext('2d');
    return null != N && (N.rotate((a * Math.PI) / 180), N.drawImage(i, l, c, d, s, u, _, g, h)), x.toDataURL('image/png');
}
function r(e, i, n) {
    let t = e.naturalWidth / e.naturalHeight,
        r = i,
        a = n;
    e.naturalWidth > e.naturalHeight ? (r /= t) : (a *= t);
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
n.d(i, {
    Ae: () => r,
    GS: () => t,
    PT: () => o
});
