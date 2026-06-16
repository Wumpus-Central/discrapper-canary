"use strict";
n.d(t, { A: () => s });
let i = /^#[0-9a-f]{3,8}$/i,
    r = /^((?:rgb|hsl)a?)\s*\(([^)]*)\)/i;
class s {
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
        return "transparent" === e ? new s(0, 0, 0, 0) : this.parseColorFnString(e);
    }
    static parseHexString(e) {
        if (!(null == e.match(i) || [6, 8].includes(e.length))) {
            if ((e = e.replace("#", "")).length < 6) {
                let [t, n, i, r] = e;
                (e = t + t + n + n + i + i), null != r && (e += r + r);
            }
            var t = e.match(/.{1,2}/g);
            if (null != t)
                return new s(
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
                    s = (1 - Math.abs(2 * (i /= 255) - 1)) * (n /= 255),
                    a = s * (1 - Math.abs(((t / 60) % 2) - 1)),
                    o = i - s / 2,
                    l = (
                        t < 60
                            ? [s, a, 0]
                            : t < 120
                              ? [a, s, 0]
                              : t < 180
                                ? [0, s, a]
                                : t < 240
                                  ? [0, a, s]
                                  : t < 300
                                    ? [a, 0, s]
                                    : [s, 0, a]
                    ).map((e) => Math.round((e + o) * 255));
                return { red: l[0], green: l[1], blue: l[2], alpha: r };
            })({ hue: i[0], saturation: i[1], lightness: i[2], alpha: i[3] });
            return new s(e.red, e.green, e.blue, e.alpha);
        }
        return new s(i[0], i[1], i[2], "number" == typeof i[3] ? i[3] : 1);
    }
    toHSL() {
        return (function (e) {
            let { red: t, green: n, blue: i, alpha: r } = e,
                s = t / 255,
                a = n / 255,
                o = i / 255,
                l = Math.max(s, a, o),
                u = Math.min(s, a, o),
                c = l - u,
                d = (l + u) / 2,
                _ = c > 0 ? c / (1 - Math.abs(2 * d - 1)) : 0;
            if (0 === c) return { hue: 0, saturation: _, lightness: d, alpha: r };
            let h = 0;
            switch (l) {
                case s:
                    h = ((a - o) / c) % 6;
                    break;
                case a:
                    h = (o - s) / c + 2;
                    break;
                case o:
                    h = (a - o) / c + 4;
            }
            return { hue: 60 * h, saturation: _, lightness: d, alpha: r };
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
