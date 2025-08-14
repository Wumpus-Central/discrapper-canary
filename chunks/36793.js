function n(t) {
    let { image: e, cropDimensions: i, cropOriginCoordinates: n, maxDimensions: o, imageRotation: r = 0 } = t,
        a = e.naturalWidth / e.width,
        u = (function (t, e) {
            let { x: i, y: n } = t;
            switch (e) {
                case 90:
                    return {
                        x: n,
                        y: -i,
                    };
                case 180:
                    return {
                        x: -i,
                        y: -n,
                    };
                case 270:
                    return {
                        x: -n,
                        y: i,
                    };
                default:
                    return {
                        x: i,
                        y: n,
                    };
            }
        })(n, r),
        d = r % 180 != 0,
        l = i.width * a,
        h = i.height * a,
        c = Math.min(l, o.width),
        f = Math.min(h, o.height),
        _ = (d ? i.height : i.width) / 2,
        s = (d ? i.width : i.height) / 2,
        p = (e.width / 2 - _ - u.x) * a,
        m = (e.height / 2 - s - u.y) * a,
        w = d ? h : l,
        b = d ? l : h,
        { x: g, y: x } = (function (t, e, i) {
            switch (i) {
                case 0:
                    return {
                        x: 0,
                        y: 0,
                    };
                case 90:
                    return {
                        x: 0,
                        y: -t,
                    };
                case 180:
                    return {
                        x: -t,
                        y: -e,
                    };
                case 270:
                    return {
                        x: -e,
                        y: 0,
                    };
            }
        })(l, h, r);
    return (
        o.width < l && (g *= o.width / l),
        o.height < h && (x *= o.height / h),
        {
            sourceX: p,
            sourceY: m,
            sourceWidth: w,
            sourceHeight: b,
            destinationX: g,
            destinationY: x,
            destinationWidth: d ? f : c,
            destinationHeight: d ? c : f,
            canvasWidth: c,
            canvasHeight: f,
        }
    );
}
function o(t) {
    let { image: e, cropDimensions: i, cropOriginCoordinates: o, maxDimensions: r, imageRotation: a = 0 } = t,
        {
            sourceX: u,
            sourceY: d,
            sourceWidth: l,
            sourceHeight: h,
            destinationX: c,
            destinationY: f,
            destinationWidth: _,
            destinationHeight: s,
            canvasWidth: p,
            canvasHeight: m,
        } = n({
            image: e,
            cropDimensions: i,
            cropOriginCoordinates: o,
            maxDimensions: r,
            imageRotation: a,
        }),
        w = document.createElement("canvas");
    (w.width = p), (w.height = m);
    let b = w.getContext("2d");
    return (
        null != b && (b.rotate((a * Math.PI) / 180), b.drawImage(e, u, d, l, h, c, f, _, s)), w.toDataURL("image/png")
    );
}
function r(t, e, i) {
    let n = t.naturalWidth / t.naturalHeight,
        r = e,
        a = i;
    t.naturalWidth > t.naturalHeight ? (r /= n) : (a *= n);
    let u = {
        height: r,
        width: a,
    };
    return o({
        image: t,
        cropDimensions: {
            width: t.width,
            height: t.height,
        },
        cropOriginCoordinates: {
            x: 0,
            y: 0,
        },
        maxDimensions: u,
    });
}
i.d(e, {
    Ae: () => r,
    GS: () => n,
    PT: () => o,
});
