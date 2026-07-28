"use strict";
Object.defineProperty(t, "__esModule", { value: !0 }),
    (t.calculateChange = function (e, t, r, n, o) {
        var a = o.clientWidth,
            i = o.clientHeight,
            u = "number" == typeof e.pageX ? e.pageX : e.touches[0].pageX,
            l = "number" == typeof e.pageY ? e.pageY : e.touches[0].pageY,
            s = u - (o.getBoundingClientRect().left + window.pageXOffset),
            p = l - (o.getBoundingClientRect().top + window.pageYOffset);
        if ("vertical" === r) {
            var c = void 0;
            if (((c = p < 0 ? 0 : p > i ? 1 : Math.round((100 * p) / i) / 100), t.a !== c))
                return { h: t.h, s: t.s, l: t.l, a: c, source: "rgb" };
        } else {
            var f = void 0;
            if (n !== (f = s < 0 ? 0 : s > a ? 1 : Math.round((100 * s) / a) / 100))
                return { h: t.h, s: t.s, l: t.l, a: f, source: "rgb" };
        }
        return null;
    });
