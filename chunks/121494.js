Object.defineProperty(n, '__esModule', { value: !0 }),
    (n.calculateChange = function (e, n, r, i, a) {
        var o = a.clientWidth,
            s = a.clientHeight,
            l = 'number' == typeof e.pageX ? e.pageX : e.touches[0].pageX,
            u = 'number' == typeof e.pageY ? e.pageY : e.touches[0].pageY,
            c = l - (a.getBoundingClientRect().left + window.pageXOffset),
            d = u - (a.getBoundingClientRect().top + window.pageYOffset);
        if ('vertical' === r) {
            var f = void 0;
            if (((f = d < 0 ? 0 : d > s ? 1 : Math.round((100 * d) / s) / 100), n.a !== f))
                return {
                    h: n.h,
                    s: n.s,
                    l: n.l,
                    a: f,
                    source: 'rgb'
                };
        } else {
            var p = void 0;
            if (i !== (p = c < 0 ? 0 : c > o ? 1 : Math.round((100 * c) / o) / 100))
                return {
                    h: n.h,
                    s: n.s,
                    l: n.l,
                    a: p,
                    source: 'rgb'
                };
        }
        return null;
    });
