"use strict";
r.d(t, { OB: () => u, Zk: () => c, qt: () => s, v5: () => i, xU: () => l });
var n = r(786359),
    o = r(440745),
    a = r.n(o),
    i = function (e) {
        var t = 0,
            r = 0;
        return (
            (0, n.A)(["r", "g", "b", "a", "h", "s", "l", "v"], function (n) {
                e[n] &&
                    ((t += 1), isNaN(e[n]) || (r += 1), ("s" === n || "l" === n) && /^\d+%$/.test(e[n]) && (r += 1));
            }),
            t === r && e
        );
    },
    l = function (e, t) {
        var r = e.hex ? a()(e.hex) : a()(e),
            n = r.toHsl(),
            o = r.toHsv(),
            i = r.toRgb(),
            l = r.toHex();
        return (
            0 === n.s && ((n.h = t || 0), (o.h = t || 0)),
            {
                hsl: n,
                hex: "000000" === l && 0 === i.a ? "transparent" : "#" + l,
                rgb: i,
                hsv: o,
                oldHue: e.h || t || n.h,
                source: e.source,
            }
        );
    },
    s = function (e) {
        if ("transparent" === e) return !0;
        var t = +("#" === String(e).charAt(0));
        return e.length !== 4 + t && e.length < 7 + t && a()(e).isValid();
    },
    u = function (e) {
        if (!e) return "#fff";
        var t = l(e);
        return "transparent" === t.hex
            ? "rgba(0,0,0,0.4)"
            : (299 * t.rgb.r + 587 * t.rgb.g + 114 * t.rgb.b) / 1e3 >= 128
              ? "#000"
              : "#fff";
    },
    c = function (e, t) {
        var r = e.replace("\xb0", "");
        return a()(t + " (" + r + ")")._ok;
    };
