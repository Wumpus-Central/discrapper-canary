"use strict";
function r(e, t, n) {
    if (/%$/.test(t)) return 3 === n ? parseFloat(t) / 100 : (255 * parseFloat(t)) / 100;
    if ("h" === e[n]) {
        if (/turn$/.test(t)) return 360 * parseFloat(t);
        if (/rad$/.test(t)) return 57.3 * parseFloat(t);
    }
    return parseFloat(t);
}
function i(e) {
    let t,
        { hue: n, saturation: r, lightness: i, alpha: a } = e,
        s = (1 - Math.abs(2 * (i /= 255) - 1)) * (r /= 255),
        o = s * (1 - Math.abs(((n / 60) % 2) - 1)),
        l = i - s / 2,
        u = (t =
            n < 60
                ? [s, o, 0]
                : n < 120
                  ? [o, s, 0]
                  : n < 180
                    ? [0, s, o]
                    : n < 240
                      ? [0, o, s]
                      : n < 300
                        ? [o, 0, s]
                        : [s, 0, o]).map((e) => Math.round((e + l) * 255));
    return { red: u[0], green: u[1], blue: u[2], alpha: a };
}
function a(e) {
    let { red: t, green: n, blue: r, alpha: i } = e,
        a = t / 255,
        s = n / 255,
        o = r / 255,
        l = Math.max(a, s, o),
        u = Math.min(a, s, o),
        c = l - u,
        d = (l + u) / 2,
        _ = c > 0 ? c / (1 - Math.abs(2 * d - 1)) : 0;
    if (0 === c) return { hue: 0, saturation: _, lightness: d, alpha: i };
    let f = 0;
    switch (l) {
        case a:
            f = ((s - o) / c) % 6;
            break;
        case s:
            f = (o - a) / c + 2;
            break;
        case o:
            f = (s - o) / c + 4;
    }
    return { hue: 60 * f, saturation: _, lightness: d, alpha: i };
}
n.d(t, { A: () => l });
let s = /^#[0-9a-f]{3,8}$/i,
    o = /^((?:rgb|hsl)a?)\s*\(([^)]*)\)/i;
class l {
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
        return null != e.match(o) ? this.parseColorFnString(e) : null != e.match(s) ? this.parseHexString(e) : void 0;
    }
    static parseRgbString(e) {
        return "transparent" === e ? new l(0, 0, 0, 0) : this.parseColorFnString(e);
    }
    static parseHexString(e) {
        if (!(null == e.match(s) || [6, 8].includes(e.length))) {
            if ((e = e.replace("#", "")).length < 6) {
                let [t, n, r, i] = e;
                (e = t + t + n + n + r + r), null != i && (e += i + i);
            }
            var t = e.match(/.{1,2}/g);
            if (null != t)
                return new l(
                    parseInt(t[0], 16),
                    parseInt(t[1], 16),
                    parseInt(t[2], 16),
                    null != t[3] ? parseInt(t[3], 16) / 255 : 1,
                );
        }
    }
    static parseColorFnString(e) {
        let [, t, n] = e.match(o) ?? [];
        if (null == t || null == n) return;
        let a = n
            .split(/\s*[,/\s]\s*/)
            .map((e) => e.replace(",", "").trim())
            .filter((e) => "" !== e)
            .map((e, n) => r(t, e, n));
        if ("hsl" === t.substr(0, 3)) {
            let e = i({ hue: a[0], saturation: a[1], lightness: a[2], alpha: a[3] });
            return new l(e.red, e.green, e.blue, e.alpha);
        }
        return new l(a[0], a[1], a[2], "number" == typeof a[3] ? a[3] : 1);
    }
    toHSL() {
        return a({ red: this.red, green: this.green, blue: this.blue, alpha: this.alpha });
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
