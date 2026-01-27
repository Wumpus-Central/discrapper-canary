a.d(r, {
    B8: () => s,
    Z8: () => o,
    eL: () => h,
    fN: () => c,
    lw: () => i,
    mg: () => e,
    t5: () => f,
    vt: () => u,
});
var n = a(445199);

function u() {
    var t = new n.tb(16);
    return (
        n.tb != Float32Array &&
            ((t[1] = 0),
            (t[2] = 0),
            (t[3] = 0),
            (t[4] = 0),
            (t[6] = 0),
            (t[7] = 0),
            (t[8] = 0),
            (t[9] = 0),
            (t[11] = 0),
            (t[12] = 0),
            (t[13] = 0),
            (t[14] = 0)),
        (t[0] = 1),
        (t[5] = 1),
        (t[10] = 1),
        (t[15] = 1),
        t
    );
}

function e(t, r) {
    if (t === r) {
        var a = r[1],
            n = r[2],
            u = r[3],
            e = r[6],
            s = r[7],
            i = r[11];
        (t[1] = r[4]),
            (t[2] = r[8]),
            (t[3] = r[12]),
            (t[4] = a),
            (t[6] = r[9]),
            (t[7] = r[13]),
            (t[8] = n),
            (t[9] = e),
            (t[11] = r[14]),
            (t[12] = u),
            (t[13] = s),
            (t[14] = i);
    } else
        (t[0] = r[0]),
            (t[1] = r[4]),
            (t[2] = r[8]),
            (t[3] = r[12]),
            (t[4] = r[1]),
            (t[5] = r[5]),
            (t[6] = r[9]),
            (t[7] = r[13]),
            (t[8] = r[2]),
            (t[9] = r[6]),
            (t[10] = r[10]),
            (t[11] = r[14]),
            (t[12] = r[3]),
            (t[13] = r[7]),
            (t[14] = r[11]),
            (t[15] = r[15]);
    return t;
}

function s(t, r) {
    var a = r[0],
        n = r[1],
        u = r[2],
        e = r[3],
        s = r[4],
        i = r[5],
        h = r[6],
        o = r[7],
        c = r[8],
        f = r[9],
        v = r[10],
        p = r[11],
        M = r[12],
        l = r[13],
        b = r[14],
        d = r[15],
        y = a * i - n * s,
        k = a * h - u * s,
        w = a * o - e * s,
        A = n * h - u * i,
        F = n * o - e * i,
        q = u * o - e * h,
        C = c * l - f * M,
        _ = c * b - v * M,
        g = c * d - p * M,
        m = f * b - v * l,
        B = f * d - p * l,
        D = v * d - p * b,
        I = y * D - k * B + w * m + A * g - F * _ + q * C;
    return I
        ? ((I = 1 / I),
          (t[0] = (i * D - h * B + o * m) * I),
          (t[1] = (u * B - n * D - e * m) * I),
          (t[2] = (l * q - b * F + d * A) * I),
          (t[3] = (v * F - f * q - p * A) * I),
          (t[4] = (h * g - s * D - o * _) * I),
          (t[5] = (a * D - u * g + e * _) * I),
          (t[6] = (b * w - M * q - d * k) * I),
          (t[7] = (c * q - v * w + p * k) * I),
          (t[8] = (s * B - i * g + o * C) * I),
          (t[9] = (n * g - a * B - e * C) * I),
          (t[10] = (M * F - l * w + d * y) * I),
          (t[11] = (f * w - c * F - p * y) * I),
          (t[12] = (i * _ - s * m - h * C) * I),
          (t[13] = (a * m - n * _ + u * C) * I),
          (t[14] = (l * k - M * A - b * y) * I),
          (t[15] = (c * A - f * k + v * y) * I),
          t)
        : null;
}

function i(t, r, a) {
    var n = r[0],
        u = r[1],
        e = r[2],
        s = r[3],
        i = r[4],
        h = r[5],
        o = r[6],
        c = r[7],
        f = r[8],
        v = r[9],
        p = r[10],
        M = r[11],
        l = r[12],
        b = r[13],
        d = r[14],
        y = r[15],
        k = a[0],
        w = a[1],
        A = a[2],
        F = a[3];
    return (
        (t[0] = k * n + w * i + A * f + F * l),
        (t[1] = k * u + w * h + A * v + F * b),
        (t[2] = k * e + w * o + A * p + F * d),
        (t[3] = k * s + w * c + A * M + F * y),
        (k = a[4]),
        (w = a[5]),
        (A = a[6]),
        (F = a[7]),
        (t[4] = k * n + w * i + A * f + F * l),
        (t[5] = k * u + w * h + A * v + F * b),
        (t[6] = k * e + w * o + A * p + F * d),
        (t[7] = k * s + w * c + A * M + F * y),
        (k = a[8]),
        (w = a[9]),
        (A = a[10]),
        (F = a[11]),
        (t[8] = k * n + w * i + A * f + F * l),
        (t[9] = k * u + w * h + A * v + F * b),
        (t[10] = k * e + w * o + A * p + F * d),
        (t[11] = k * s + w * c + A * M + F * y),
        (k = a[12]),
        (w = a[13]),
        (A = a[14]),
        (F = a[15]),
        (t[12] = k * n + w * i + A * f + F * l),
        (t[13] = k * u + w * h + A * v + F * b),
        (t[14] = k * e + w * o + A * p + F * d),
        (t[15] = k * s + w * c + A * M + F * y),
        t
    );
}

function h(t, r, a) {
    var n = Math.sin(a),
        u = Math.cos(a),
        e = r[4],
        s = r[5],
        i = r[6],
        h = r[7],
        o = r[8],
        c = r[9],
        f = r[10],
        v = r[11];
    return (
        r !== t &&
            ((t[0] = r[0]),
            (t[1] = r[1]),
            (t[2] = r[2]),
            (t[3] = r[3]),
            (t[12] = r[12]),
            (t[13] = r[13]),
            (t[14] = r[14]),
            (t[15] = r[15])),
        (t[4] = e * u + o * n),
        (t[5] = s * u + c * n),
        (t[6] = i * u + f * n),
        (t[7] = h * u + v * n),
        (t[8] = o * u - e * n),
        (t[9] = c * u - s * n),
        (t[10] = f * u - i * n),
        (t[11] = v * u - h * n),
        t
    );
}

function o(t, r, a) {
    var n = Math.sin(a),
        u = Math.cos(a),
        e = r[0],
        s = r[1],
        i = r[2],
        h = r[3],
        o = r[8],
        c = r[9],
        f = r[10],
        v = r[11];
    return (
        r !== t &&
            ((t[4] = r[4]),
            (t[5] = r[5]),
            (t[6] = r[6]),
            (t[7] = r[7]),
            (t[12] = r[12]),
            (t[13] = r[13]),
            (t[14] = r[14]),
            (t[15] = r[15])),
        (t[0] = e * u - o * n),
        (t[1] = s * u - c * n),
        (t[2] = i * u - f * n),
        (t[3] = h * u - v * n),
        (t[8] = e * n + o * u),
        (t[9] = s * n + c * u),
        (t[10] = i * n + f * u),
        (t[11] = h * n + v * u),
        t
    );
}
var c = function (t, r, a, n, u) {
    var e = 1 / Math.tan(r / 2);
    if (
        ((t[0] = e / a),
        (t[1] = 0),
        (t[2] = 0),
        (t[3] = 0),
        (t[4] = 0),
        (t[5] = e),
        (t[6] = 0),
        (t[7] = 0),
        (t[8] = 0),
        (t[9] = 0),
        (t[11] = -1),
        (t[12] = 0),
        (t[13] = 0),
        (t[15] = 0),
        null != u && u !== 1 / 0)
    ) {
        var s = 1 / (n - u);
        (t[10] = (u + n) * s), (t[14] = 2 * u * n * s);
    } else (t[10] = -1), (t[14] = -2 * n);
    return t;
};

function f(t, r, a, u) {
    var e,
        s,
        i,
        h,
        o,
        c,
        f,
        v,
        p,
        M,
        l = r[0],
        b = r[1],
        d = r[2],
        y = u[0],
        k = u[1],
        w = u[2],
        A = a[0],
        F = a[1],
        q = a[2];
    return Math.abs(l - A) < n.p8 && Math.abs(b - F) < n.p8 && Math.abs(d - q) < n.p8
        ? ((t[0] = 1),
          (t[1] = 0),
          (t[2] = 0),
          (t[3] = 0),
          (t[4] = 0),
          (t[5] = 1),
          (t[6] = 0),
          (t[7] = 0),
          (t[8] = 0),
          (t[9] = 0),
          (t[10] = 1),
          (t[11] = 0),
          (t[12] = 0),
          (t[13] = 0),
          (t[14] = 0),
          (t[15] = 1),
          t)
        : ((M = 1 / Math.sqrt((f = l - A) * f + (v = b - F) * v + (p = d - q) * p)),
          (f *= M),
          (v *= M),
          (p *= M),
          (M = Math.sqrt((e = k * p - w * v) * e + (s = w * f - y * p) * s + (i = y * v - k * f) * i))
              ? ((e *= M = 1 / M), (s *= M), (i *= M))
              : ((e = 0), (s = 0), (i = 0)),
          (M = Math.sqrt((h = v * i - p * s) * h + (o = p * e - f * i) * o + (c = f * s - v * e) * c))
              ? ((h *= M = 1 / M), (o *= M), (c *= M))
              : ((h = 0), (o = 0), (c = 0)),
          (t[0] = e),
          (t[1] = h),
          (t[2] = f),
          (t[3] = 0),
          (t[4] = s),
          (t[5] = o),
          (t[6] = v),
          (t[7] = 0),
          (t[8] = i),
          (t[9] = c),
          (t[10] = p),
          (t[11] = 0),
          (t[12] = -(e * l + s * b + i * d)),
          (t[13] = -(h * l + o * b + c * d)),
          (t[14] = -(f * l + v * b + p * d)),
          (t[15] = 1),
          t);
}
