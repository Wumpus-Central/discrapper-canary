function t(e) {
    var t;
    return "number" == typeof e
        ? e >>> 0 === e && e >= 0 && e <= 0xffffffff
            ? e
            : null
        : (t = o.hex6.exec(e))
          ? parseInt(t[1] + "ff", 16) >>> 0
          : _.hasOwnProperty(e)
            ? _[e]
            : (t = o.rgb.exec(e))
              ? ((l(t[1]) << 24) | (l(t[2]) << 16) | (l(t[3]) << 8) | 255) >>> 0
              : (t = o.rgba.exec(e))
                ? ((l(t[1]) << 24) | (l(t[2]) << 16) | (l(t[3]) << 8) | d(t[4])) >>> 0
                : (t = o.hex3.exec(e))
                  ? parseInt(t[1] + t[1] + t[2] + t[2] + t[3] + t[3] + "ff", 16) >>> 0
                  : (t = o.hex8.exec(e))
                    ? parseInt(t[1], 16) >>> 0
                    : (t = o.hex4.exec(e))
                      ? parseInt(t[1] + t[1] + t[2] + t[2] + t[3] + t[3] + t[4] + t[4], 16) >>> 0
                      : (t = o.hsl.exec(e))
                        ? (255 | r(u(t[1]), c(t[2]), c(t[3]))) >>> 0
                        : (t = o.hsla.exec(e))
                          ? (r(u(t[1]), c(t[2]), c(t[3])) | d(t[4])) >>> 0
                          : null;
}
function n(e, t, n) {
    return (n < 0 && (n += 1), n > 1 && (n -= 1), n < 1 / 6)
        ? e + (t - e) * 6 * n
        : n < 0.5
          ? t
          : n < 2 / 3
            ? e + (t - e) * (2 / 3 - n) * 6
            : e;
}
function r(e, t, r) {
    var i = r < 0.5 ? r * (1 + t) : r + t - r * t,
        s = 2 * r - i;
    return (
        (Math.round(255 * n(s, i, e + 1 / 3)) << 24) |
        (Math.round(255 * n(s, i, e)) << 16) |
        (Math.round(255 * n(s, i, e - 1 / 3)) << 8)
    );
}
var i = "[-+]?\\d*\\.?\\d+",
    s = i + "%";
function a() {
    var e;
    return "\\(\\s*(" + ((e = arguments), Array.prototype.slice.call(e, 0)).join(")\\s*,\\s*(") + ")\\s*\\)";
}
var o = {
    rgb: RegExp("rgb" + a(i, i, i)),
    rgba: RegExp("rgba" + a(i, i, i, i)),
    hsl: RegExp("hsl" + a(i, s, s)),
    hsla: RegExp("hsla" + a(i, s, s, i)),
    hex3: /^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
    hex4: /^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
    hex6: /^#([0-9a-fA-F]{6})$/,
    hex8: /^#([0-9a-fA-F]{8})$/,
};
function l(e) {
    var t = parseInt(e, 10);
    return t < 0 ? 0 : t > 255 ? 255 : t;
}
function u(e) {
    return (((parseFloat(e) % 360) + 360) % 360) / 360;
}
function d(e) {
    var t = parseFloat(e);
    return t < 0 ? 0 : t > 1 ? 255 : Math.round(255 * t);
}
function c(e) {
    var t = parseFloat(e, 10);
    return t < 0 ? 0 : t > 100 ? 1 : t / 100;
}
var _ = {
    transparent: 0,
    aliceblue: 0xf0f8ffff,
    antiquewhite: 0xfaebd7ff,
    aqua: 0xffffff,
    aquamarine: 0x7fffd4ff,
    azure: 0xf0ffffff,
    beige: 0xf5f5dcff,
    bisque: 0xffe4c4ff,
    black: 255,
    blanchedalmond: 0xffebcdff,
    blue: 65535,
    blueviolet: 0x8a2be2ff,
    brown: 0xa52a2aff,
    burlywood: 0xdeb887ff,
    burntsienna: 0xea7e5dff,
    cadetblue: 0x5f9ea0ff,
    chartreuse: 0x7fff00ff,
    chocolate: 0xd2691eff,
    coral: 0xff7f50ff,
    cornflowerblue: 0x6495edff,
    cornsilk: 0xfff8dcff,
    crimson: 0xdc143cff,
    cyan: 0xffffff,
    darkblue: 35839,
    darkcyan: 9145343,
    darkgoldenrod: 0xb8860bff,
    darkgray: 0xa9a9a9ff,
    darkgreen: 6553855,
    darkgrey: 0xa9a9a9ff,
    darkkhaki: 0xbdb76bff,
    darkmagenta: 0x8b008bff,
    darkolivegreen: 0x556b2fff,
    darkorange: 0xff8c00ff,
    darkorchid: 0x9932ccff,
    darkred: 0x8b0000ff,
    darksalmon: 0xe9967aff,
    darkseagreen: 0x8fbc8fff,
    darkslateblue: 0x483d8bff,
    darkslategray: 0x2f4f4fff,
    darkslategrey: 0x2f4f4fff,
    darkturquoise: 0xced1ff,
    darkviolet: 0x9400d3ff,
    deeppink: 0xff1493ff,
    deepskyblue: 0xbfffff,
    dimgray: 0x696969ff,
    dimgrey: 0x696969ff,
    dodgerblue: 0x1e90ffff,
    firebrick: 0xb22222ff,
    floralwhite: 0xfffaf0ff,
    forestgreen: 0x228b22ff,
    fuchsia: 0xff00ffff,
    gainsboro: 0xdcdcdcff,
    ghostwhite: 0xf8f8ffff,
    gold: 0xffd700ff,
    goldenrod: 0xdaa520ff,
    gray: 0x808080ff,
    green: 8388863,
    greenyellow: 0xadff2fff,
    grey: 0x808080ff,
    honeydew: 0xf0fff0ff,
    hotpink: 0xff69b4ff,
    indianred: 0xcd5c5cff,
    indigo: 0x4b0082ff,
    ivory: 0xfffff0ff,
    khaki: 0xf0e68cff,
    lavender: 0xe6e6faff,
    lavenderblush: 0xfff0f5ff,
    lawngreen: 0x7cfc00ff,
    lemonchiffon: 0xfffacdff,
    lightblue: 0xadd8e6ff,
    lightcoral: 0xf08080ff,
    lightcyan: 0xe0ffffff,
    lightgoldenrodyellow: 0xfafad2ff,
    lightgray: 0xd3d3d3ff,
    lightgreen: 0x90ee90ff,
    lightgrey: 0xd3d3d3ff,
    lightpink: 0xffb6c1ff,
    lightsalmon: 0xffa07aff,
    lightseagreen: 0x20b2aaff,
    lightskyblue: 0x87cefaff,
    lightslategray: 0x778899ff,
    lightslategrey: 0x778899ff,
    lightsteelblue: 0xb0c4deff,
    lightyellow: 0xffffe0ff,
    lime: 0xff00ff,
    limegreen: 0x32cd32ff,
    linen: 0xfaf0e6ff,
    magenta: 0xff00ffff,
    maroon: 0x800000ff,
    mediumaquamarine: 0x66cdaaff,
    mediumblue: 52735,
    mediumorchid: 0xba55d3ff,
    mediumpurple: 0x9370dbff,
    mediumseagreen: 0x3cb371ff,
    mediumslateblue: 0x7b68eeff,
    mediumspringgreen: 0xfa9aff,
    mediumturquoise: 0x48d1ccff,
    mediumvioletred: 0xc71585ff,
    midnightblue: 0x191970ff,
    mintcream: 0xf5fffaff,
    mistyrose: 0xffe4e1ff,
    moccasin: 0xffe4b5ff,
    navajowhite: 0xffdeadff,
    navy: 33023,
    oldlace: 0xfdf5e6ff,
    olive: 0x808000ff,
    olivedrab: 0x6b8e23ff,
    orange: 0xffa500ff,
    orangered: 0xff4500ff,
    orchid: 0xda70d6ff,
    palegoldenrod: 0xeee8aaff,
    palegreen: 0x98fb98ff,
    paleturquoise: 0xafeeeeff,
    palevioletred: 0xdb7093ff,
    papayawhip: 0xffefd5ff,
    peachpuff: 0xffdab9ff,
    peru: 0xcd853fff,
    pink: 0xffc0cbff,
    plum: 0xdda0ddff,
    powderblue: 0xb0e0e6ff,
    purple: 0x800080ff,
    rebeccapurple: 0x663399ff,
    red: 0xff0000ff,
    rosybrown: 0xbc8f8fff,
    royalblue: 0x4169e1ff,
    saddlebrown: 0x8b4513ff,
    salmon: 0xfa8072ff,
    sandybrown: 0xf4a460ff,
    seagreen: 0x2e8b57ff,
    seashell: 0xfff5eeff,
    sienna: 0xa0522dff,
    silver: 0xc0c0c0ff,
    skyblue: 0x87ceebff,
    slateblue: 0x6a5acdff,
    slategray: 0x708090ff,
    slategrey: 0x708090ff,
    snow: 0xfffafaff,
    springgreen: 0xff7fff,
    steelblue: 0x4682b4ff,
    tan: 0xd2b48cff,
    teal: 8421631,
    thistle: 0xd8bfd8ff,
    tomato: 0xff6347ff,
    turquoise: 0x40e0d0ff,
    violet: 0xee82eeff,
    wheat: 0xf5deb3ff,
    white: 0xffffffff,
    whitesmoke: 0xf5f5f5ff,
    yellow: 0xffff00ff,
    yellowgreen: 0x9acd32ff,
};
(t.rgba = function (e) {
    return {
        r: Math.round((0xff000000 & e) >>> 24),
        g: Math.round((0xff0000 & e) >>> 16),
        b: Math.round((65280 & e) >>> 8),
        a: ((255 & e) >>> 0) / 255,
    };
}),
    (e.exports = t);
