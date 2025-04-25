function n(t) {
    let { image: e, cropDimensions: r, cropOriginCoordinates: n, maxDimensions: i, imageRotation: l = 0 } = t,
        a = e.naturalWidth / e.width,
        o = (function (t, e) {
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
        c = r.width * a,
        u = r.height * a,
        d = Math.min(c, i.width),
        f = Math.min(u, i.height),
        g = (s ? r.height : r.width) / 2,
        O = (s ? r.width : r.height) / 2,
        _ = (e.width / 2 - g - o.x) * a,
        h = (e.height / 2 - O - o.y) * a,
        p = s ? u : c,
        E = s ? c : u,
        { x: y, y: I } = (function (t, e, r) {
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
    return {
        sourceX: _,
        sourceY: h,
        sourceWidth: p,
        sourceHeight: E,
        destinationX: y,
        destinationY: I,
        destinationWidth: s ? f : d,
        destinationHeight: s ? d : f,
        canvasWidth: d,
        canvasHeight: f
    };
}
function i(t) {
    let { image: e, cropDimensions: r, cropOriginCoordinates: i, maxDimensions: l, imageRotation: a = 0 } = t,
        {
            sourceX: o,
            sourceY: s,
            sourceWidth: c,
            sourceHeight: u,
            destinationX: d,
            destinationY: f,
            destinationWidth: g,
            destinationHeight: O,
            canvasWidth: _,
            canvasHeight: h
        } = n({
            image: e,
            cropDimensions: r,
            cropOriginCoordinates: i,
            maxDimensions: l,
            imageRotation: a
        }),
        p = document.createElement('canvas');
    (p.width = _), (p.height = h);
    let E = p.getContext('2d');
    return null != E && (E.rotate((a * Math.PI) / 180), E.drawImage(e, o, s, c, u, d, f, g, O)), p.toDataURL('image/png');
}
function l(t, e, r) {
    let n = t.naturalWidth / t.naturalHeight,
        l = e,
        a = r;
    t.naturalWidth > t.naturalHeight ? (l /= n) : (a *= n);
    let o = {
        height: l,
        width: a
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
        maxDimensions: o
    });
}
r.d(e, {
    Ae: () => l,
    GS: () => n,
    PT: () => i
});
