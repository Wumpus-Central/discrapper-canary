function n(e, t, a, n) {
    let i = e.naturalWidth / e.width,
        r = t.width / 2,
        b = t.height / 2,
        o = (e.width / 2 - r - a.x) * i,
        h = (e.height / 2 - b - a.y) * i,
        l = t.width * i,
        d = t.height * i,
        u = Math.min(l, n.width),
        g = Math.min(d, n.height);
    return {
        x: o,
        y: h,
        scaledCropWidth: l,
        scaledCropHeight: d,
        canvasWidth: u,
        canvasHeight: g
    };
}
function i(e, t, a, i) {
    let { x: r, y: b, scaledCropWidth: o, scaledCropHeight: h, canvasWidth: l, canvasHeight: d } = n(e, t, a, i),
        u = document.createElement('canvas');
    (u.width = l), (u.height = d);
    let g = u.getContext('2d');
    return null != g && g.drawImage(e, r, b, o, h, 0, 0, u.width, u.height), u.toDataURL('image/png');
}
function r(e, t, a) {
    let n = e.naturalWidth / e.naturalHeight,
        r = t,
        b = a;
    e.naturalWidth > e.naturalHeight ? (r /= n) : (b *= n);
    let o = {
        height: r,
        width: b
    };
    return i(
        e,
        {
            width: e.width,
            height: e.height
        },
        {
            x: 0,
            y: 0
        },
        o
    );
}
a.d(t, {
    Ae: function () {
        return r;
    },
    PT: function () {
        return i;
    },
    eu: function () {
        return n;
    }
});
