function t(e, i, n, t) {
    let o = e.naturalWidth / e.width,
        r = i.width / 2,
        a = i.height / 2,
        l = (e.width / 2 - r - n.x) * o,
        d = (e.height / 2 - a - n.y) * o,
        c = i.width * o,
        s = i.height * o,
        u = Math.min(c, t.width),
        g = Math.min(s, t.height);
    return {
        x: l,
        y: d,
        scaledCropWidth: c,
        scaledCropHeight: s,
        canvasWidth: u,
        canvasHeight: g
    };
}
function o(e, i, n, o) {
    let { x: r, y: a, scaledCropWidth: l, scaledCropHeight: d, canvasWidth: c, canvasHeight: s } = t(e, i, n, o),
        u = document.createElement('canvas');
    (u.width = c), (u.height = s);
    let g = u.getContext('2d');
    return null != g && g.drawImage(e, r, a, l, d, 0, 0, u.width, u.height), u.toDataURL('image/png');
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
    return o(
        e,
        {
            width: e.width,
            height: e.height
        },
        {
            x: 0,
            y: 0
        },
        l
    );
}
n.d(i, {
    Ae: function () {
        return r;
    },
    PT: function () {
        return o;
    },
    eu: function () {
        return t;
    }
});
