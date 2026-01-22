n.d(t, {
    B8: () => o,
    Z8: () => u,
    eL: () => c,
    fN: () => d,
    lw: () => l,
    mg: () => s,
    t5: () => f,
    vt: () => i,
});
var r = n(445199);
function i() {
    var e = new r.tb(16);
    return (
        r.tb != Float32Array &&
            ((e[1] = 0),
            (e[2] = 0),
            (e[3] = 0),
            (e[4] = 0),
            (e[6] = 0),
            (e[7] = 0),
            (e[8] = 0),
            (e[9] = 0),
            (e[11] = 0),
            (e[12] = 0),
            (e[13] = 0),
            (e[14] = 0)),
        (e[0] = 1),
        (e[5] = 1),
        (e[10] = 1),
        (e[15] = 1),
        e
    );
}
function a(e) {
    return (
        (e[0] = 1),
        (e[1] = 0),
        (e[2] = 0),
        (e[3] = 0),
        (e[4] = 0),
        (e[5] = 1),
        (e[6] = 0),
        (e[7] = 0),
        (e[8] = 0),
        (e[9] = 0),
        (e[10] = 1),
        (e[11] = 0),
        (e[12] = 0),
        (e[13] = 0),
        (e[14] = 0),
        (e[15] = 1),
        e
    );
}
function s(e, t) {
    if (e === t) {
        var n = t[1],
            r = t[2],
            i = t[3],
            a = t[6],
            s = t[7],
            o = t[11];
        (e[1] = t[4]),
            (e[2] = t[8]),
            (e[3] = t[12]),
            (e[4] = n),
            (e[6] = t[9]),
            (e[7] = t[13]),
            (e[8] = r),
            (e[9] = a),
            (e[11] = t[14]),
            (e[12] = i),
            (e[13] = s),
            (e[14] = o);
    } else
        (e[0] = t[0]),
            (e[1] = t[4]),
            (e[2] = t[8]),
            (e[3] = t[12]),
            (e[4] = t[1]),
            (e[5] = t[5]),
            (e[6] = t[9]),
            (e[7] = t[13]),
            (e[8] = t[2]),
            (e[9] = t[6]),
            (e[10] = t[10]),
            (e[11] = t[14]),
            (e[12] = t[3]),
            (e[13] = t[7]),
            (e[14] = t[11]),
            (e[15] = t[15]);
    return e;
}
function o(e, t) {
    var n = t[0],
        r = t[1],
        i = t[2],
        a = t[3],
        s = t[4],
        o = t[5],
        l = t[6],
        c = t[7],
        u = t[8],
        d = t[9],
        f = t[10],
        p = t[11],
        _ = t[12],
        h = t[13],
        m = t[14],
        g = t[15],
        E = n * o - r * s,
        b = n * l - i * s,
        y = n * c - a * s,
        O = r * l - i * o,
        A = r * c - a * o,
        v = i * c - a * l,
        S = u * h - d * _,
        I = u * m - f * _,
        T = u * g - p * _,
        C = d * m - f * h,
        N = d * g - p * h,
        R = f * g - p * m,
        w = E * R - b * N + y * C + O * T - A * I + v * S;
    return w
        ? ((w = 1 / w),
          (e[0] = (o * R - l * N + c * C) * w),
          (e[1] = (i * N - r * R - a * C) * w),
          (e[2] = (h * v - m * A + g * O) * w),
          (e[3] = (f * A - d * v - p * O) * w),
          (e[4] = (l * T - s * R - c * I) * w),
          (e[5] = (n * R - i * T + a * I) * w),
          (e[6] = (m * y - _ * v - g * b) * w),
          (e[7] = (u * v - f * y + p * b) * w),
          (e[8] = (s * N - o * T + c * S) * w),
          (e[9] = (r * T - n * N - a * S) * w),
          (e[10] = (_ * A - h * y + g * E) * w),
          (e[11] = (d * y - u * A - p * E) * w),
          (e[12] = (o * I - s * C - l * S) * w),
          (e[13] = (n * C - r * I + i * S) * w),
          (e[14] = (h * b - _ * O - m * E) * w),
          (e[15] = (u * O - d * b + f * E) * w),
          e)
        : null;
}
function l(e, t, n) {
    var r = t[0],
        i = t[1],
        a = t[2],
        s = t[3],
        o = t[4],
        l = t[5],
        c = t[6],
        u = t[7],
        d = t[8],
        f = t[9],
        p = t[10],
        _ = t[11],
        h = t[12],
        m = t[13],
        g = t[14],
        E = t[15],
        b = n[0],
        y = n[1],
        O = n[2],
        A = n[3];
    return (
        (e[0] = b * r + y * o + O * d + A * h),
        (e[1] = b * i + y * l + O * f + A * m),
        (e[2] = b * a + y * c + O * p + A * g),
        (e[3] = b * s + y * u + O * _ + A * E),
        (b = n[4]),
        (y = n[5]),
        (O = n[6]),
        (A = n[7]),
        (e[4] = b * r + y * o + O * d + A * h),
        (e[5] = b * i + y * l + O * f + A * m),
        (e[6] = b * a + y * c + O * p + A * g),
        (e[7] = b * s + y * u + O * _ + A * E),
        (b = n[8]),
        (y = n[9]),
        (O = n[10]),
        (A = n[11]),
        (e[8] = b * r + y * o + O * d + A * h),
        (e[9] = b * i + y * l + O * f + A * m),
        (e[10] = b * a + y * c + O * p + A * g),
        (e[11] = b * s + y * u + O * _ + A * E),
        (b = n[12]),
        (y = n[13]),
        (O = n[14]),
        (A = n[15]),
        (e[12] = b * r + y * o + O * d + A * h),
        (e[13] = b * i + y * l + O * f + A * m),
        (e[14] = b * a + y * c + O * p + A * g),
        (e[15] = b * s + y * u + O * _ + A * E),
        e
    );
}
function c(e, t, n) {
    var r = Math.sin(n),
        i = Math.cos(n),
        a = t[4],
        s = t[5],
        o = t[6],
        l = t[7],
        c = t[8],
        u = t[9],
        d = t[10],
        f = t[11];
    return (
        t !== e &&
            ((e[0] = t[0]),
            (e[1] = t[1]),
            (e[2] = t[2]),
            (e[3] = t[3]),
            (e[12] = t[12]),
            (e[13] = t[13]),
            (e[14] = t[14]),
            (e[15] = t[15])),
        (e[4] = a * i + c * r),
        (e[5] = s * i + u * r),
        (e[6] = o * i + d * r),
        (e[7] = l * i + f * r),
        (e[8] = c * i - a * r),
        (e[9] = u * i - s * r),
        (e[10] = d * i - o * r),
        (e[11] = f * i - l * r),
        e
    );
}
function u(e, t, n) {
    var r = Math.sin(n),
        i = Math.cos(n),
        a = t[0],
        s = t[1],
        o = t[2],
        l = t[3],
        c = t[8],
        u = t[9],
        d = t[10],
        f = t[11];
    return (
        t !== e &&
            ((e[4] = t[4]),
            (e[5] = t[5]),
            (e[6] = t[6]),
            (e[7] = t[7]),
            (e[12] = t[12]),
            (e[13] = t[13]),
            (e[14] = t[14]),
            (e[15] = t[15])),
        (e[0] = a * i - c * r),
        (e[1] = s * i - u * r),
        (e[2] = o * i - d * r),
        (e[3] = l * i - f * r),
        (e[8] = a * r + c * i),
        (e[9] = s * r + u * i),
        (e[10] = o * r + d * i),
        (e[11] = l * r + f * i),
        e
    );
}
var d = function (e, t, n, r, i) {
    var a = 1 / Math.tan(t / 2);
    if (
        ((e[0] = a / n),
        (e[1] = 0),
        (e[2] = 0),
        (e[3] = 0),
        (e[4] = 0),
        (e[5] = a),
        (e[6] = 0),
        (e[7] = 0),
        (e[8] = 0),
        (e[9] = 0),
        (e[11] = -1),
        (e[12] = 0),
        (e[13] = 0),
        (e[15] = 0),
        null != i && i !== 1 / 0)
    ) {
        var s = 1 / (r - i);
        (e[10] = (i + r) * s), (e[14] = 2 * i * r * s);
    } else (e[10] = -1), (e[14] = -2 * r);
    return e;
};
function f(e, t, n, i) {
    var s,
        o,
        l,
        c,
        u,
        d,
        f,
        p,
        _,
        h,
        m = t[0],
        g = t[1],
        E = t[2],
        b = i[0],
        y = i[1],
        O = i[2],
        A = n[0],
        v = n[1],
        S = n[2];
    return Math.abs(m - A) < r.p8 && Math.abs(g - v) < r.p8 && Math.abs(E - S) < r.p8
        ? a(e)
        : ((h = 1 / Math.sqrt((f = m - A) * f + (p = g - v) * p + (_ = E - S) * _)),
          (f *= h),
          (p *= h),
          (_ *= h),
          (h = Math.sqrt((s = y * _ - O * p) * s + (o = O * f - b * _) * o + (l = b * p - y * f) * l))
              ? ((s *= h = 1 / h), (o *= h), (l *= h))
              : ((s = 0), (o = 0), (l = 0)),
          (h = Math.sqrt((c = p * l - _ * o) * c + (u = _ * s - f * l) * u + (d = f * o - p * s) * d))
              ? ((c *= h = 1 / h), (u *= h), (d *= h))
              : ((c = 0), (u = 0), (d = 0)),
          (e[0] = s),
          (e[1] = c),
          (e[2] = f),
          (e[3] = 0),
          (e[4] = o),
          (e[5] = u),
          (e[6] = p),
          (e[7] = 0),
          (e[8] = l),
          (e[9] = d),
          (e[10] = _),
          (e[11] = 0),
          (e[12] = -(s * m + o * g + l * E)),
          (e[13] = -(c * m + u * g + d * E)),
          (e[14] = -(f * m + p * g + _ * E)),
          (e[15] = 1),
          e);
}
