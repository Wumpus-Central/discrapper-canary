function i(e, t, n, i) {
    let r = e.naturalWidth / e.width,
        l = t.width / 2,
        s = t.height / 2,
        a = (e.width / 2 - l - n.x) * r,
        o = (e.height / 2 - s - n.y) * r,
        c = t.width * r,
        d = t.height * r,
        u = Math.min(c, i.width),
        m = Math.min(d, i.height);
    return {
        x: a,
        y: o,
        scaledCropWidth: c,
        scaledCropHeight: d,
        canvasWidth: u,
        canvasHeight: m
    };
}
function r(e, t, n, r) {
    let { x: l, y: s, scaledCropWidth: a, scaledCropHeight: o, canvasWidth: c, canvasHeight: d } = i(e, t, n, r),
        u = document.createElement('canvas');
    (u.width = c), (u.height = d);
    let m = u.getContext('2d');
    return null != m && m.drawImage(e, l, s, a, o, 0, 0, u.width, u.height), u.toDataURL('image/png');
}
function l(e, t, n) {
    let i = e.naturalWidth / e.naturalHeight,
        l = t,
        s = n;
    e.naturalWidth > e.naturalHeight ? (l /= i) : (s *= i);
    let a = {
        height: l,
        width: s
    };
    return r(
        e,
        {
            width: e.width,
            height: e.height
        },
        {
            x: 0,
            y: 0
        },
        a
    );
}
n.d(t, {
    Ae: function () {
        return l;
    },
    PT: function () {
        return r;
    },
    eu: function () {
        return i;
    }
});
