function r(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
function i(e, t, n) {
    if (/%$/.test(t)) return 3 === n ? parseFloat(t) / 100 : (255 * parseFloat(t)) / 100;
    if ('h' === e[n]) {
        if (/turn$/.test(t)) return 360 * parseFloat(t);
        if (/rad$/.test(t)) return 57.3 * parseFloat(t);
    }
    return parseFloat(t);
}
function o(e) {
    let t,
        { hue: n, saturation: r, lightness: i, alpha: o } = e,
        a = (1 - Math.abs(2 * (i /= 255) - 1)) * (r /= 255),
        s = a * (1 - Math.abs(((n / 60) % 2) - 1)),
        l = i - a / 2,
        c = (t = n < 60 ? [a, s, 0] : n < 120 ? [s, a, 0] : n < 180 ? [0, a, s] : n < 240 ? [0, s, a] : n < 300 ? [s, 0, a] : [a, 0, s]).map((e) => Math.round((e + l) * 255));
    return {
        red: c[0],
        green: c[1],
        blue: c[2],
        alpha: o
    };
}
function a(e) {
    let { red: t, green: n, blue: r, alpha: i } = e,
        o = t / 255,
        a = n / 255,
        s = r / 255,
        l = Math.max(o, a, s),
        c = Math.min(o, a, s),
        u = l - c,
        d = (l + c) / 2,
        f = u > 0 ? u / (1 - Math.abs(2 * d - 1)) : 0;
    if (0 === u)
        return {
            hue: 0,
            saturation: f,
            lightness: d,
            alpha: i
        };
    let _ = 0;
    switch (l) {
        case o:
            _ = ((a - s) / u) % 6;
            break;
        case a:
            _ = (s - o) / u + 2;
            break;
        case s:
            _ = (a - s) / u + 4;
    }
    return {
        hue: 60 * _,
        saturation: f,
        lightness: d,
        alpha: i
    };
}
n.d(t, { Z: () => c }), n(301563), n(757143), n(47120), n(566702);
let s = /^#[0-9a-f]{3,8}$/i,
    l = /^((?:rgb|hsl)a?)\s*\(([^)]*)\)/i;
class c {
    toHexString() {
        var e = Math.round(this.red).toString(16),
            t = Math.round(this.green).toString(16),
            n = Math.round(this.blue).toString(16);
        return '#' + (this.red > 15.5 ? e : '0' + e) + (this.green > 15.5 ? t : '0' + t) + (this.blue > 15.5 ? n : '0' + n);
    }
    static parseString(e) {
        return null != e.match(l) ? this.parseColorFnString(e) : null != e.match(s) ? this.parseHexString(e) : void 0;
    }
    static parseRgbString(e) {
        return 'transparent' === e ? new c(0, 0, 0, 0) : this.parseColorFnString(e);
    }
    static parseHexString(e) {
        if (!(null == e.match(s) || [6, 8].includes(e.length))) {
            if ((e = e.replace('#', '')).length < 6) {
                let [t, n, r, i] = e;
                (e = t + t + n + n + r + r), null != i && (e += i + i);
            }
            var t = e.match(/.{1,2}/g);
            if (null != t) return new c(parseInt(t[0], 16), parseInt(t[1], 16), parseInt(t[2], 16), null != t[3] ? parseInt(t[3], 16) / 255 : 1);
        }
    }
    static parseColorFnString(e) {
        var t;
        let [, n, r] = null != (t = e.match(l)) ? t : [];
        if (null == n || null == r) return;
        let a = r
            .split(/\s*[,/\s]\s*/)
            .map((e) => e.replace(',', '').trim())
            .filter((e) => '' !== e)
            .map((e, t) => i(n, e, t));
        if ('hsl' === n.substr(0, 3)) {
            let e = o({
                hue: a[0],
                saturation: a[1],
                lightness: a[2],
                alpha: a[3]
            });
            return new c(e.red, e.green, e.blue, e.alpha);
        }
        return new c(a[0], a[1], a[2], 'number' == typeof a[3] ? a[3] : 1);
    }
    toHSL() {
        return a({
            red: this.red,
            green: this.green,
            blue: this.blue,
            alpha: this.alpha
        });
    }
    getRelativeLuminance() {
        var e = this.red / 255,
            t = this.green / 255,
            n = this.blue / 255;
        return 0.2126 * (e <= 0.03928 ? e / 12.92 : Math.pow((e + 0.055) / 1.055, 2.4)) + 0.7152 * (t <= 0.03928 ? t / 12.92 : Math.pow((t + 0.055) / 1.055, 2.4)) + 0.0722 * (n <= 0.03928 ? n / 12.92 : Math.pow((n + 0.055) / 1.055, 2.4));
    }
    constructor(e, t, n, i) {
        r(this, 'red', void 0), r(this, 'green', void 0), r(this, 'blue', void 0), r(this, 'alpha', void 0), (this.red = e), (this.green = t), (this.blue = n), (this.alpha = i);
    }
}
