function i(t) {
    let { image: e, cropDimensions: n, cropOriginCoordinates: i, maxDimensions: o, imageRotation: a = 0 } = t,
        r = e.naturalWidth / e.width,
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
        })(i, a),
        s = a % 180 != 0,
        d = n.width * r,
        c = n.height * r,
        u = Math.min(d, o.width),
        _ = Math.min(c, o.height),
        h = (s ? n.height : n.width) / 2,
        g = (s ? n.width : n.height) / 2,
        m = (e.width / 2 - h - l.x) * r,
        f = (e.height / 2 - g - l.y) * r,
        x = s ? c : d,
        p = s ? d : c,
        { x: N, y: v } = (function (t, e, n) {
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
        })(d, c, a);
    return (
        o.width < d && (N *= o.width / d),
        o.height < c && (v *= o.height / c),
        {
            sourceX: m,
            sourceY: f,
            sourceWidth: x,
            sourceHeight: p,
            destinationX: N,
            destinationY: v,
            destinationWidth: s ? _ : u,
            destinationHeight: s ? u : _,
            canvasWidth: u,
            canvasHeight: _
        }
    );
}
function o(t) {
    let { image: e, cropDimensions: n, cropOriginCoordinates: o, maxDimensions: a, imageRotation: r = 0 } = t,
        {
            sourceX: l,
            sourceY: s,
            sourceWidth: d,
            sourceHeight: c,
            destinationX: u,
            destinationY: _,
            destinationWidth: h,
            destinationHeight: g,
            canvasWidth: m,
            canvasHeight: f
        } = i({
            image: e,
            cropDimensions: n,
            cropOriginCoordinates: o,
            maxDimensions: a,
            imageRotation: r
        }),
        x = document.createElement('canvas');
    ((x.width = m), (x.height = f));
    let p = x.getContext('2d');
    return (null != p && (p.rotate((r * Math.PI) / 180), p.drawImage(e, l, s, d, c, u, _, h, g)), x.toDataURL('image/png'));
}
function a(t, e, n) {
    let i = t.naturalWidth / t.naturalHeight,
        a = e,
        r = n;
    t.naturalWidth > t.naturalHeight ? (a /= i) : (r *= i);
    let l = {
        height: a,
        width: r
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
    Ae: () => a,
    GS: () => i,
    PT: () => o
});
