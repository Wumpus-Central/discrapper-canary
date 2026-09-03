Object.defineProperty(t, "__esModule", { value: !0 }),
    (t.calculateChange = function (e, t, r) {
        var n = r.getBoundingClientRect(),
            o = n.width,
            a = n.height,
            i = "number" == typeof e.pageX ? e.pageX : e.touches[0].pageX,
            u = "number" == typeof e.pageY ? e.pageY : e.touches[0].pageY,
            l = i - (r.getBoundingClientRect().left + window.pageXOffset),
            s = u - (r.getBoundingClientRect().top + window.pageYOffset);
        l < 0 ? (l = 0) : l > o && (l = o), s < 0 ? (s = 0) : s > a && (s = a);
        var p = l / o,
            c = 1 - s / a;
        return { h: t.h, s: p, v: c, a: t.a, source: "hsv" };
    });
