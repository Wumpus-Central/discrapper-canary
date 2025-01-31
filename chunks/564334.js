function i(e, t, n) {
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
function r(e, t, n) {
    if (/%$/.test(t)) return 3 === n ? parseFloat(t) / 100 : (255 * parseFloat(t)) / 100;
    if ('h' === e[n]) {
        if (/turn$/.test(t)) return 360 * parseFloat(t);
        if (/rad$/.test(t)) return 57.3 * parseFloat(t);
    }
    return parseFloat(t);
}
function a(e) {
    let t,
        { hue: n, saturation: i, lightness: r, alpha: a } = e,
        s = (1 - Math.abs(2 * (r /= 255) - 1)) * (i /= 255),
        o = s * (1 - Math.abs(((n / 60) % 2) - 1)),
        l = r - s / 2,
        u = (t = n < 60 ? [s, o, 0] : n < 120 ? [o, s, 0] : n < 180 ? [0, s, o] : n < 240 ? [0, o, s] : n < 300 ? [o, 0, s] : [s, 0, o]).map((e) => Math.round((e + l) * 255));
    return {
        red: u[0],
        green: u[1],
        blue: u[2],
        alpha: a
    };
}
function s(e) {
    let { red: t, green: n, blue: i, alpha: r } = e,
        a = t / 255,
        s = n / 255,
        o = i / 255,
        l = Math.max(a, s, o),
        u = Math.min(a, s, o),
        c = l - u,
        d = (l + u) / 2,
        f = c > 0 ? c / (1 - Math.abs(2 * d - 1)) : 0;
    if (0 === c)
        return {
            hue: 0,
            saturation: f,
            lightness: d,
            alpha: r
        };
    let _ = 0;
    switch (l) {
        case a:
            _ = ((s - o) / c) % 6;
            break;
        case s:
            _ = (o - a) / c + 2;
            break;
        case o:
            _ = (s - o) / c + 4;
    }
    return {
        hue: 60 * _,
        saturation: f,
        lightness: d,
        alpha: r
    };
}
n.d(t, { Z: () => u }), n(757143), n(47120);
let o = /^#[0-9a-f]{3,8}$/i,
    l = /^((?:rgb|hsl)a?)\s*\(([^)]*)\)/i;
class u {
    toHexString() {
        var e = Math.round(this.red).toString(16),
            t = Math.round(this.green).toString(16),
            n = Math.round(this.blue).toString(16);
        return '#' + (this.red > 15.5 ? e : '0' + e) + (this.green > 15.5 ? t : '0' + t) + (this.blue > 15.5 ? n : '0' + n);
    }
    static parseString(e) {
        return null != e.match(l) ? this.parseColorFnString(e) : null != e.match(o) ? this.parseHexString(e) : void 0;
    }
    static parseRgbString(e) {
        return 'transparent' === e ? new u(0, 0, 0, 0) : this.parseColorFnString(e);
    }
    static parseHexString(e) {
        if (!(null == e.match(o) || [6, 8].includes(e.length))) {
            if ((e = e.replace('#', '')).length < 6) {
                let [t, n, i, r] = e;
                (e = t + t + n + n + i + i), null != r && (e += r + r);
            }
            var t = e.match(/.{1,2}/g);
            if (null != t) return new u(parseInt(t[0], 16), parseInt(t[1], 16), parseInt(t[2], 16), null != t[3] ? parseInt(t[3], 16) / 255 : 1);
        }
    }
    static parseColorFnString(e) {
        var t;
        let [, n, i] = null !== (t = e.match(l)) && void 0 !== t ? t : [];
        if (null == n || null == i) return;
        let s = i
            .split(/\s*[,/\s]\s*/)
            .map((e) => e.replace(',', '').trim())
            .filter((e) => '' !== e)
            .map((e, t) => r(n, e, t));
        if ('hsl' === n.substr(0, 3)) {
            let e = a({
                hue: s[0],
                saturation: s[1],
                lightness: s[2],
                alpha: s[3]
            });
            return new u(e.red, e.green, e.blue, e.alpha);
        }
        return new u(s[0], s[1], s[2], 'number' == typeof s[3] ? s[3] : 1);
    }
    toHSL() {
        return s({
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
    constructor(e, t, n, r) {
        i(this, 'red', void 0), i(this, 'green', void 0), i(this, 'blue', void 0), i(this, 'alpha', void 0), (this.red = e), (this.green = t), (this.blue = n), (this.alpha = r);
    }
}
