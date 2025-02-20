Object.defineProperty(t, '__esModule', { value: !0 }),
    (t.calculateChange = function (e, t, n, r) {
        var i = r.clientWidth,
            o = r.clientHeight,
            a = 'number' == typeof e.pageX ? e.pageX : e.touches[0].pageX,
            s = 'number' == typeof e.pageY ? e.pageY : e.touches[0].pageY,
            l = a - (r.getBoundingClientRect().left + window.pageXOffset),
            c = s - (r.getBoundingClientRect().top + window.pageYOffset);
        if ('vertical' === t) {
            var u = void 0;
            if (((u = c < 0 ? 359 : c > o ? 0 : (360 * (-((100 * c) / o) + 100)) / 100), n.h !== u))
                return {
                    h: u,
                    s: n.s,
                    l: n.l,
                    a: n.a,
                    source: 'hsl'
                };
        } else {
            var d = void 0;
            if (((d = l < 0 ? 0 : l > i ? 359 : (((100 * l) / i) * 360) / 100), n.h !== d))
                return {
                    h: d,
                    s: n.s,
                    l: n.l,
                    a: n.a,
                    source: 'hsl'
                };
        }
        return null;
    });
