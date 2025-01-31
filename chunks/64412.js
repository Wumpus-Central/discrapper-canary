n.d(t, { T: () => i });
var i = function (e, t, n) {
    var i = n.getBoundingClientRect(),
        r = i.width,
        a = i.height,
        s = 'number' == typeof e.pageX ? e.pageX : e.touches[0].pageX,
        o = 'number' == typeof e.pageY ? e.pageY : e.touches[0].pageY,
        l = s - (n.getBoundingClientRect().left + window.pageXOffset),
        u = o - (n.getBoundingClientRect().top + window.pageYOffset);
    l < 0 ? (l = 0) : l > r && (l = r), u < 0 ? (u = 0) : u > a && (u = a);
    var c = l / r,
        d = 1 - u / a;
    return {
        h: t.h,
        s: c,
        v: d,
        a: t.a,
        source: 'hsv'
    };
};
