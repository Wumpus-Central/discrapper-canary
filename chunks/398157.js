"use strict";
Object.defineProperty(t, "__esModule", { value: !0 }),
    (t.calculateChange = function (e, t, r, n) {
        var o = n.clientWidth,
            a = n.clientHeight,
            i = "number" == typeof e.pageX ? e.pageX : e.touches[0].pageX,
            u = "number" == typeof e.pageY ? e.pageY : e.touches[0].pageY,
            l = i - (n.getBoundingClientRect().left + window.pageXOffset),
            s = u - (n.getBoundingClientRect().top + window.pageYOffset);
        if ("vertical" === t) {
            var p = void 0;
            if (((p = s < 0 ? 359 : s > a ? 0 : (360 * (-((100 * s) / a) + 100)) / 100), r.h !== p))
                return { h: p, s: r.s, l: r.l, a: r.a, source: "hsl" };
        } else {
            var c = void 0;
            if (((c = l < 0 ? 0 : l > o ? 359 : (((100 * l) / o) * 360) / 100), r.h !== c))
                return { h: c, s: r.s, l: r.l, a: r.a, source: "hsl" };
        }
        return null;
    });
