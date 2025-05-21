function o(t) {
    let { image: e, cropDimensions: i, cropOriginCoordinates: o, maxDimensions: n, imageRotation: a = 0 } = t,
        d = e.naturalWidth / e.width,
        r = (function (t, e) {
            let { x: i, y: o } = t;
            switch (e) {
                case 90:
                    return {
                        x: o,
                        y: -i
                    };
                case 180:
                    return {
                        x: -i,
                        y: -o
                    };
                case 270:
                    return {
                        x: -o,
                        y: i
                    };
                default:
                    return {
                        x: i,
                        y: o
                    };
            }
        })(o, a),
        l = a % 180 != 0,
        u = i.width * d,
        c = i.height * d,
        _ = Math.min(u, n.width),
        h = Math.min(c, n.height),
        s = (l ? i.height : i.width) / 2,
        f = (l ? i.width : i.height) / 2,
        m = (e.width / 2 - s - r.x) * d,
        p = (e.height / 2 - f - r.y) * d,
        w = l ? c : u,
        b = l ? u : c,
        { x: g, y: x } = (function (t, e, i) {
            switch (i) {
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
        })(u, c, a);
    return (
        n.width < u && (g *= n.width / u),
        n.height < c && (x *= n.height / c),
        {
            sourceX: m,
            sourceY: p,
            sourceWidth: w,
            sourceHeight: b,
            destinationX: g,
            destinationY: x,
            destinationWidth: l ? h : _,
            destinationHeight: l ? _ : h,
            canvasWidth: _,
            canvasHeight: h
        }
    );
}
function n(t) {
    let { image: e, cropDimensions: i, cropOriginCoordinates: n, maxDimensions: a, imageRotation: d = 0 } = t,
        {
            sourceX: r,
            sourceY: l,
            sourceWidth: u,
            sourceHeight: c,
            destinationX: _,
            destinationY: h,
            destinationWidth: s,
            destinationHeight: f,
            canvasWidth: m,
            canvasHeight: p
        } = o({
            image: e,
            cropDimensions: i,
            cropOriginCoordinates: n,
            maxDimensions: a,
            imageRotation: d
        }),
        w = document.createElement('canvas');
    (w.width = m), (w.height = p);
    let b = w.getContext('2d');
    return null != b && (b.rotate((d * Math.PI) / 180), b.drawImage(e, r, l, u, c, _, h, s, f)), w.toDataURL('image/png');
}
function a(t, e, i) {
    let o = t.naturalWidth / t.naturalHeight,
        a = e,
        d = i;
    t.naturalWidth > t.naturalHeight ? (a /= o) : (d *= o);
    let r = {
        height: a,
        width: d
    };
    return n({
        image: t,
        cropDimensions: {
            width: t.width,
            height: t.height
        },
        cropOriginCoordinates: {
            x: 0,
            y: 0
        },
        maxDimensions: r
    });
}
i.d(e, {
    Ae: () => a,
    GS: () => o,
    PT: () => n
});
