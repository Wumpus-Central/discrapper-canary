function r(e) {
    let { image: t, cropDimensions: n, cropOriginCoordinates: r, maxDimensions: i, imageRotation: l = 0 } = e,
        a = t.naturalWidth / t.width,
        s = (function (e, t) {
            let { x: n, y: r } = e;
            switch (t) {
                case 90:
                    return {
                        x: r,
                        y: -n,
                    };
                case 180:
                    return {
                        x: -n,
                        y: -r,
                    };
                case 270:
                    return {
                        x: -r,
                        y: n,
                    };
                default:
                    return {
                        x: n,
                        y: r,
                    };
            }
        })(r, l),
        o = l % 180 != 0,
        c = n.width * a,
        d = n.height * a,
        u = Math.min(c, i.width),
        g = Math.min(d, i.height),
        f = (o ? n.height : n.width) / 2,
        m = (o ? n.width : n.height) / 2,
        b = (t.width / 2 - f - s.x) * a,
        p = (t.height / 2 - m - s.y) * a,
        h = o ? d : c,
        x = o ? c : d,
        { x: j, y: v } = (function (e, t, n) {
            switch (n) {
                case 0:
                    return {
                        x: 0,
                        y: 0,
                    };
                case 90:
                    return {
                        x: 0,
                        y: -e,
                    };
                case 180:
                    return {
                        x: -e,
                        y: -t,
                    };
                case 270:
                    return {
                        x: -t,
                        y: 0,
                    };
            }
        })(c, d, l);
    return (
        i.width < c && (j *= i.width / c),
        i.height < d && (v *= i.height / d),
        {
            sourceX: b,
            sourceY: p,
            sourceWidth: h,
            sourceHeight: x,
            destinationX: j,
            destinationY: v,
            destinationWidth: o ? g : u,
            destinationHeight: o ? u : g,
            canvasWidth: u,
            canvasHeight: g,
        }
    );
}
function i(e) {
    let { image: t, cropDimensions: n, cropOriginCoordinates: i, maxDimensions: l, imageRotation: a = 0 } = e,
        {
            sourceX: s,
            sourceY: o,
            sourceWidth: c,
            sourceHeight: d,
            destinationX: u,
            destinationY: g,
            destinationWidth: f,
            destinationHeight: m,
            canvasWidth: b,
            canvasHeight: p,
        } = r({
            image: t,
            cropDimensions: n,
            cropOriginCoordinates: i,
            maxDimensions: l,
            imageRotation: a,
        }),
        h = document.createElement("canvas");
    (h.width = b), (h.height = p);
    let x = h.getContext("2d");
    return (
        null != x && (x.rotate((a * Math.PI) / 180), x.drawImage(t, s, o, c, d, u, g, f, m)), h.toDataURL("image/png")
    );
}
function l(e, t, n) {
    let r = e.naturalWidth / e.naturalHeight,
        l = t,
        a = n;
    e.naturalWidth > e.naturalHeight ? (l /= r) : (a *= r);
    let s = {
        height: l,
        width: a,
    };
    return i({
        image: e,
        cropDimensions: {
            width: e.width,
            height: e.height,
        },
        cropOriginCoordinates: {
            x: 0,
            y: 0,
        },
        maxDimensions: s,
    });
}
n.d(t, {
    Ae: () => l,
    GS: () => r,
    PT: () => i,
});
