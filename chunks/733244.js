Object.defineProperty(n, '__esModule', { value: !0 }),
    (n.calculateChange = function (e, n, r) {
        var i = r.getBoundingClientRect(),
            a = i.width,
            o = i.height,
            s = 'number' == typeof e.pageX ? e.pageX : e.touches[0].pageX,
            l = 'number' == typeof e.pageY ? e.pageY : e.touches[0].pageY,
            u = s - (r.getBoundingClientRect().left + window.pageXOffset),
            c = l - (r.getBoundingClientRect().top + window.pageYOffset);
        u < 0 ? (u = 0) : u > a && (u = a), c < 0 ? (c = 0) : c > o && (c = o);
        var d = u / a,
            f = 1 - c / o;
        return {
            h: n.h,
            s: d,
            v: f,
            a: n.a,
            source: 'hsv'
        };
    });
