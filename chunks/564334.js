r.d(n, {
    Z: function () {
        return f;
    }
});
var i = r(757143);
var a = r(47120);
function o(e, n, r) {
    return (
        n in e
            ? Object.defineProperty(e, n, {
                  value: r,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[n] = r),
        e
    );
}
function s(e, n, r) {
    if (/%$/.test(n)) return 3 === r ? parseFloat(n) / 100 : (255 * parseFloat(n)) / 100;
    if ('h' === e[r]) {
        if (/turn$/.test(n)) return 360 * parseFloat(n);
        if (/rad$/.test(n)) return 57.3 * parseFloat(n);
    }
    return parseFloat(n);
}
function l(e) {
    let n,
        { hue: r, saturation: i, lightness: a, alpha: o } = e,
        s = (1 - Math.abs(2 * (a /= 255) - 1)) * (i /= 255),
        l = s * (1 - Math.abs(((r / 60) % 2) - 1)),
        u = a - s / 2,
        c = (n = r < 60 ? [s, l, 0] : r < 120 ? [l, s, 0] : r < 180 ? [0, s, l] : r < 240 ? [0, l, s] : r < 300 ? [l, 0, s] : [s, 0, l]).map((e) => Math.round((e + u) * 255));
    return {
        red: c[0],
        green: c[1],
        blue: c[2],
        alpha: o
    };
}
function u(e) {
    let { red: n, green: r, blue: i, alpha: a } = e,
        o = n / 255,
        s = r / 255,
        l = i / 255,
        u = Math.max(o, s, l),
        c = Math.min(o, s, l),
        d = u - c,
        f = (u + c) / 2,
        p = d > 0 ? d / (1 - Math.abs(2 * f - 1)) : 0;
    if (0 === d)
        return {
            hue: 0,
            saturation: p,
            lightness: f,
            alpha: a
        };
    let h = 0;
    switch (u) {
        case o:
            h = ((s - l) / d) % 6;
            break;
        case s:
            h = (l - o) / d + 2;
            break;
        case l:
            h = (s - l) / d + 4;
    }
    return {
        hue: 60 * h,
        saturation: p,
        lightness: f,
        alpha: a
    };
}
let c = /^#[0-9a-f]{3,8}$/i,
    d = /^((?:rgb|hsl)a?)\s*\(([^)]*)\)/i;
class f {
    toHexString() {
        var e = Math.round(this.red).toString(16),
            n = Math.round(this.green).toString(16),
            r = Math.round(this.blue).toString(16);
        return '#' + (this.red > 15.5 ? e : '0' + e) + (this.green > 15.5 ? n : '0' + n) + (this.blue > 15.5 ? r : '0' + r);
    }
    static parseString(e) {
        return null != e.match(d) ? this.parseColorFnString(e) : null != e.match(c) ? this.parseHexString(e) : void 0;
    }
    static parseRgbString(e) {
        return 'transparent' === e ? new f(0, 0, 0, 0) : this.parseColorFnString(e);
    }
    static parseHexString(e) {
        if (!(null == e.match(c) || [6, 8].includes(e.length))) {
            if ((e = e.replace('#', '')).length < 6) {
                let [n, r, i, a] = e;
                (e = n + n + r + r + i + i), null != a && (e += a + a);
            }
            var n = e.match(/.{1,2}/g);
            if (null != n) return new f(parseInt(n[0], 16), parseInt(n[1], 16), parseInt(n[2], 16), null != n[3] ? parseInt(n[3], 16) / 255 : 1);
        }
    }
    static parseColorFnString(e) {
        var n;
        let [, r, i] = null !== (n = e.match(d)) && void 0 !== n ? n : [];
        if (null == r || null == i) return;
        let a = i
            .split(/\s*[,/\s]\s*/)
            .map((e) => e.replace(',', '').trim())
            .filter((e) => '' !== e)
            .map((e, n) => s(r, e, n));
        if ('hsl' === r.substr(0, 3)) {
            let e = l({
                hue: a[0],
                saturation: a[1],
                lightness: a[2],
                alpha: a[3]
            });
            return new f(e.red, e.green, e.blue, e.alpha);
        }
        return new f(a[0], a[1], a[2], 'number' == typeof a[3] ? a[3] : 1);
    }
    toHSL() {
        return u({
            red: this.red,
            green: this.green,
            blue: this.blue,
            alpha: this.alpha
        });
    }
    getRelativeLuminance() {
        var e = this.red / 255,
            n = this.green / 255,
            r = this.blue / 255;
        return 0.2126 * (e <= 0.03928 ? e / 12.92 : Math.pow((e + 0.055) / 1.055, 2.4)) + 0.7152 * (n <= 0.03928 ? n / 12.92 : Math.pow((n + 0.055) / 1.055, 2.4)) + 0.0722 * (r <= 0.03928 ? r / 12.92 : Math.pow((r + 0.055) / 1.055, 2.4));
    }
    constructor(e, n, r, i) {
        o(this, 'red', void 0), o(this, 'green', void 0), o(this, 'blue', void 0), o(this, 'alpha', void 0), (this.red = e), (this.green = n), (this.blue = r), (this.alpha = i);
    }
}
