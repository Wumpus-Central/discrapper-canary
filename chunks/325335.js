"use strict";
n.d(t, { A: () => a });
let i = /^#[0-9a-f]{3,8}$/i,
    r = /^((?:rgb|hsl)a?)\s*\(([^)]*)\)/i;
class a {
    red;
    green;
    blue;
    alpha;
    constructor(e, t, n, i) {
        (this.red = e), (this.green = t), (this.blue = n), (this.alpha = i);
    }
    toHexString() {
        var e = Math.round(this.red).toString(16),
            t = Math.round(this.green).toString(16),
            n = Math.round(this.blue).toString(16);
        return (
            "#" + (this.red > 15.5 ? e : "0" + e) + (this.green > 15.5 ? t : "0" + t) + (this.blue > 15.5 ? n : "0" + n)
        );
    }
    static parseString(e) {
        return null != e.match(r) ? this.parseColorFnString(e) : null != e.match(i) ? this.parseHexString(e) : void 0;
    }
    static parseRgbString(e) {
        return "transparent" === e ? new a(0, 0, 0, 0) : this.parseColorFnString(e);
    }
    static parseHexString(e) {
        if (!(null == e.match(i) || [6, 8].includes(e.length))) {
            if ((e = e.replace("#", "")).length < 6) {
                let [t, n, i, r] = e;
                (e = t + t + n + n + i + i), null != r && (e += r + r);
            }
            var t = e.match(/.{1,2}/g);
            if (null != t)
                return new a(
                    parseInt(t[0], 16),
                    parseInt(t[1], 16),
                    parseInt(t[2], 16),
                    null != t[3] ? parseInt(t[3], 16) / 255 : 1,
                );
        }
    }
    static parseColorFnString(e) {
        let [, t, n] = e.match(r) ?? [];
        if (null == t || null == n) return;
        let i = n
            .split(/\s*[,/\s]\s*/)
            .map((e) => e.replace(",", "").trim())
            .filter((e) => "" !== e)
            .map((e, n) =>
                (function (e, t, n) {
                    if (/%$/.test(t)) return 3 === n ? parseFloat(t) / 100 : (255 * parseFloat(t)) / 100;
                    if ("h" === e[n]) {
                        if (/turn$/.test(t)) return 360 * parseFloat(t);
                        if (/rad$/.test(t)) return 57.3 * parseFloat(t);
                    }
                    return parseFloat(t);
                })(t, e, n),
            );
        if ("hsl" === t.substr(0, 3)) {
            let e = (function (e) {
                let { hue: t, saturation: n, lightness: i, alpha: r } = e,
                    a = (1 - Math.abs(2 * (i /= 255) - 1)) * (n /= 255),
                    s = a * (1 - Math.abs(((t / 60) % 2) - 1)),
                    l = i - a / 2,
                    o = (
                        t < 60
                            ? [a, s, 0]
                            : t < 120
                              ? [s, a, 0]
                              : t < 180
                                ? [0, a, s]
                                : t < 240
                                  ? [0, s, a]
                                  : t < 300
                                    ? [s, 0, a]
                                    : [a, 0, s]
                    ).map((e) => Math.round((e + l) * 255));
                return { red: o[0], green: o[1], blue: o[2], alpha: r };
            })({ hue: i[0], saturation: i[1], lightness: i[2], alpha: i[3] });
            return new a(e.red, e.green, e.blue, e.alpha);
        }
        return new a(i[0], i[1], i[2], "number" == typeof i[3] ? i[3] : 1);
    }
    toHSL() {
        return (function (e) {
            let { red: t, green: n, blue: i, alpha: r } = e,
                a = t / 255,
                s = n / 255,
                l = i / 255,
                o = Math.max(a, s, l),
                d = Math.min(a, s, l),
                c = o - d,
                u = (o + d) / 2,
                _ = c > 0 ? c / (1 - Math.abs(2 * u - 1)) : 0;
            if (0 === c) return { hue: 0, saturation: _, lightness: u, alpha: r };
            let E = 0;
            switch (o) {
                case a:
                    E = ((s - l) / c) % 6;
                    break;
                case s:
                    E = (l - a) / c + 2;
                    break;
                case l:
                    E = (s - l) / c + 4;
            }
            return { hue: 60 * E, saturation: _, lightness: u, alpha: r };
        })({ red: this.red, green: this.green, blue: this.blue, alpha: this.alpha });
    }
    getRelativeLuminance() {
        var e = this.red / 255,
            t = this.green / 255,
            n = this.blue / 255;
        return (
            0.2126 * (e <= 0.03928 ? e / 12.92 : Math.pow((e + 0.055) / 1.055, 2.4)) +
            0.7152 * (t <= 0.03928 ? t / 12.92 : Math.pow((t + 0.055) / 1.055, 2.4)) +
            0.0722 * (n <= 0.03928 ? n / 12.92 : Math.pow((n + 0.055) / 1.055, 2.4))
        );
    }
}
