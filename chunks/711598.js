Object.defineProperty(t, '__esModule', { value: !0 }),
    (t.calculateChange = function (e, t, r, n, o) {
        var a = o.clientWidth,
            i = o.clientHeight,
            l = 'number' == typeof e.pageX ? e.pageX : e.touches[0].pageX,
            s = 'number' == typeof e.pageY ? e.pageY : e.touches[0].pageY,
            u = l - (o.getBoundingClientRect().left + window.pageXOffset),
            c = s - (o.getBoundingClientRect().top + window.pageYOffset);
        if ('vertical' === r) {
            var p = void 0;
            if (((p = c < 0 ? 0 : c > i ? 1 : Math.round((100 * c) / i) / 100), t.a !== p))
                return {
                    h: t.h,
                    s: t.s,
                    l: t.l,
                    a: p,
                    source: 'rgb'
                };
        } else {
            var f = void 0;
            if (n !== (f = u < 0 ? 0 : u > a ? 1 : Math.round((100 * u) / a) / 100))
                return {
                    h: t.h,
                    s: t.s,
                    l: t.l,
                    a: f,
                    source: 'rgb'
                };
        }
        return null;
    });
