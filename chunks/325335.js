"use strict";
n.d(t, { A: () => s });
let r = /^#[0-9a-f]{3,8}$/i,
    i = /^((?:rgb|hsl)a?)\s*\(([^)]*)\)/i;
class s {
    red;
    green;
    blue;
    alpha;
    constructor(e, t, n, r) {
        (this.red = e), (this.green = t), (this.blue = n), (this.alpha = r);
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
        return null != e.match(i) ? this.parseColorFnString(e) : null != e.match(r) ? this.parseHexString(e) : void 0;
    }
    static parseRgbString(e) {
        return "transparent" === e ? new s(0, 0, 0, 0) : this.parseColorFnString(e);
    }
    static parseHexString(e) {
        if (!(null == e.match(r) || [6, 8].includes(e.length))) {
            if ((e = e.replace("#", "")).length < 6) {
                let [t, n, r, i] = e;
                (e = t + t + n + n + r + r), null != i && (e += i + i);
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
        let [, t, n] = e.match(i) ?? [];
        if (null == t || null == n) return;
        let r = n
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
                let { hue: t, saturation: n, lightness: r, alpha: i } = e,
                    s = (1 - Math.abs(2 * (r /= 255) - 1)) * (n /= 255),
                    a = s * (1 - Math.abs(((t / 60) % 2) - 1)),
                    o = r - s / 2,
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
                return { red: l[0], green: l[1], blue: l[2], alpha: i };
            })({ hue: r[0], saturation: r[1], lightness: r[2], alpha: r[3] });
            return new s(e.red, e.green, e.blue, e.alpha);
        }
        return new s(r[0], r[1], r[2], "number" == typeof r[3] ? r[3] : 1);
    }
    toHSL() {
        return (function (e) {
            let { red: t, green: n, blue: r, alpha: i } = e,
                s = t / 255,
                a = n / 255,
                o = r / 255,
                l = Math.max(s, a, o),
                u = Math.min(s, a, o),
                d = l - u,
                c = (l + u) / 2,
                _ = d > 0 ? d / (1 - Math.abs(2 * c - 1)) : 0;
            if (0 === d) return { hue: 0, saturation: _, lightness: c, alpha: i };
            let f = 0;
            switch (l) {
                case s:
                    f = ((a - o) / d) % 6;
                    break;
                case a:
                    f = (o - s) / d + 2;
                    break;
                case o:
                    f = (a - o) / d + 4;
            }
            return { hue: 60 * f, saturation: _, lightness: c, alpha: i };
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
