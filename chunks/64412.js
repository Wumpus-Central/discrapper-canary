r.d(t, { T: () => n });
var n = function (e, t, r) {
    var n = r.getBoundingClientRect(),
        o = n.width,
        a = n.height,
        i = 'number' == typeof e.pageX ? e.pageX : e.touches[0].pageX,
        l = 'number' == typeof e.pageY ? e.pageY : e.touches[0].pageY,
        s = i - (r.getBoundingClientRect().left + window.pageXOffset),
        u = l - (r.getBoundingClientRect().top + window.pageYOffset);
    s < 0 ? (s = 0) : s > o && (s = o), u < 0 ? (u = 0) : u > a && (u = a);
    var c = s / o,
        p = 1 - u / a;
    return {
        h: t.h,
        s: c,
        v: p,
        a: t.a,
        source: 'hsv'
    };
};
