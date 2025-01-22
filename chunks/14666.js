Object.defineProperty(n, '__esModule', { value: !0 }),
    (n.calculateChange = function (e, n, r, i) {
        var a = i.clientWidth,
            o = i.clientHeight,
            s = 'number' == typeof e.pageX ? e.pageX : e.touches[0].pageX,
            l = 'number' == typeof e.pageY ? e.pageY : e.touches[0].pageY,
            u = s - (i.getBoundingClientRect().left + window.pageXOffset),
            c = l - (i.getBoundingClientRect().top + window.pageYOffset);
        if ('vertical' === n) {
            var d = void 0;
            if (((d = c < 0 ? 359 : c > o ? 0 : (360 * (-((100 * c) / o) + 100)) / 100), r.h !== d))
                return {
                    h: d,
                    s: r.s,
                    l: r.l,
                    a: r.a,
                    source: 'hsl'
                };
        } else {
            var f = void 0;
            if (((f = u < 0 ? 0 : u > a ? 359 : (((100 * u) / a) * 360) / 100), r.h !== f))
                return {
                    h: f,
                    s: r.s,
                    l: r.l,
                    a: r.a,
                    source: 'hsl'
                };
        }
        return null;
    });
