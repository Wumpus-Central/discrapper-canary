n.d(t, {
    G3: () => d,
    Jp: () => l,
    U_: () => s,
    Ue: () => i,
    lM: () => c,
    p4: () => o,
    uD: () => u,
    zB: () => f,
});
var r = n(237953);
function i() {
    var e = new r.WT(16);
    return (
        r.WT != Float32Array &&
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
function o(e, t) {
    if (e === t) {
        var n = t[1],
            r = t[2],
            i = t[3],
            a = t[6],
            o = t[7],
            s = t[11];
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
            (e[13] = o),
            (e[14] = s);
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
function s(e, t) {
    var n = t[0],
        r = t[1],
        i = t[2],
        a = t[3],
        o = t[4],
        s = t[5],
        l = t[6],
        c = t[7],
        u = t[8],
        d = t[9],
        f = t[10],
        p = t[11],
        _ = t[12],
        m = t[13],
        h = t[14],
        g = t[15],
        E = n * s - r * o,
        b = n * l - i * o,
        y = n * c - a * o,
        O = r * l - i * s,
        v = r * c - a * s,
        S = i * c - a * l,
        I = u * m - d * _,
        T = u * h - f * _,
        A = u * g - p * _,
        C = d * h - f * m,
        N = d * g - p * m,
        P = f * g - p * h,
        R = E * P - b * N + y * C + O * A - v * T + S * I;
    return R
        ? ((R = 1 / R),
          (e[0] = (s * P - l * N + c * C) * R),
          (e[1] = (i * N - r * P - a * C) * R),
          (e[2] = (m * S - h * v + g * O) * R),
          (e[3] = (f * v - d * S - p * O) * R),
          (e[4] = (l * A - o * P - c * T) * R),
          (e[5] = (n * P - i * A + a * T) * R),
          (e[6] = (h * y - _ * S - g * b) * R),
          (e[7] = (u * S - f * y + p * b) * R),
          (e[8] = (o * N - s * A + c * I) * R),
          (e[9] = (r * A - n * N - a * I) * R),
          (e[10] = (_ * v - m * y + g * E) * R),
          (e[11] = (d * y - u * v - p * E) * R),
          (e[12] = (s * T - o * C - l * I) * R),
          (e[13] = (n * C - r * T + i * I) * R),
          (e[14] = (m * b - _ * O - h * E) * R),
          (e[15] = (u * O - d * b + f * E) * R),
          e)
        : null;
}
function l(e, t, n) {
    var r = t[0],
        i = t[1],
        a = t[2],
        o = t[3],
        s = t[4],
        l = t[5],
        c = t[6],
        u = t[7],
        d = t[8],
        f = t[9],
        p = t[10],
        _ = t[11],
        m = t[12],
        h = t[13],
        g = t[14],
        E = t[15],
        b = n[0],
        y = n[1],
        O = n[2],
        v = n[3];
    return (
        (e[0] = b * r + y * s + O * d + v * m),
        (e[1] = b * i + y * l + O * f + v * h),
        (e[2] = b * a + y * c + O * p + v * g),
        (e[3] = b * o + y * u + O * _ + v * E),
        (b = n[4]),
        (y = n[5]),
        (O = n[6]),
        (v = n[7]),
        (e[4] = b * r + y * s + O * d + v * m),
        (e[5] = b * i + y * l + O * f + v * h),
        (e[6] = b * a + y * c + O * p + v * g),
        (e[7] = b * o + y * u + O * _ + v * E),
        (b = n[8]),
        (y = n[9]),
        (O = n[10]),
        (v = n[11]),
        (e[8] = b * r + y * s + O * d + v * m),
        (e[9] = b * i + y * l + O * f + v * h),
        (e[10] = b * a + y * c + O * p + v * g),
        (e[11] = b * o + y * u + O * _ + v * E),
        (b = n[12]),
        (y = n[13]),
        (O = n[14]),
        (v = n[15]),
        (e[12] = b * r + y * s + O * d + v * m),
        (e[13] = b * i + y * l + O * f + v * h),
        (e[14] = b * a + y * c + O * p + v * g),
        (e[15] = b * o + y * u + O * _ + v * E),
        e
    );
}
function c(e, t, n) {
    var r = Math.sin(n),
        i = Math.cos(n),
        a = t[4],
        o = t[5],
        s = t[6],
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
        (e[5] = o * i + u * r),
        (e[6] = s * i + d * r),
        (e[7] = l * i + f * r),
        (e[8] = c * i - a * r),
        (e[9] = u * i - o * r),
        (e[10] = d * i - s * r),
        (e[11] = f * i - l * r),
        e
    );
}
function u(e, t, n) {
    var r = Math.sin(n),
        i = Math.cos(n),
        a = t[0],
        o = t[1],
        s = t[2],
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
        (e[1] = o * i - u * r),
        (e[2] = s * i - d * r),
        (e[3] = l * i - f * r),
        (e[8] = a * r + c * i),
        (e[9] = o * r + u * i),
        (e[10] = s * r + d * i),
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
        var o = 1 / (r - i);
        (e[10] = (i + r) * o), (e[14] = 2 * i * r * o);
    } else (e[10] = -1), (e[14] = -2 * r);
    return e;
};
function f(e, t, n, i) {
    var o,
        s,
        l,
        c,
        u,
        d,
        f,
        p,
        _,
        m,
        h = t[0],
        g = t[1],
        E = t[2],
        b = i[0],
        y = i[1],
        O = i[2],
        v = n[0],
        S = n[1],
        I = n[2];
    return Math.abs(h - v) < r.Ib && Math.abs(g - S) < r.Ib && Math.abs(E - I) < r.Ib
        ? a(e)
        : ((m = 1 / Math.sqrt((f = h - v) * f + (p = g - S) * p + (_ = E - I) * _)),
          (f *= m),
          (p *= m),
          (_ *= m),
          (m = Math.sqrt((o = y * _ - O * p) * o + (s = O * f - b * _) * s + (l = b * p - y * f) * l))
              ? ((o *= m = 1 / m), (s *= m), (l *= m))
              : ((o = 0), (s = 0), (l = 0)),
          (m = Math.sqrt((c = p * l - _ * s) * c + (u = _ * o - f * l) * u + (d = f * s - p * o) * d))
              ? ((c *= m = 1 / m), (u *= m), (d *= m))
              : ((c = 0), (u = 0), (d = 0)),
          (e[0] = o),
          (e[1] = c),
          (e[2] = f),
          (e[3] = 0),
          (e[4] = s),
          (e[5] = u),
          (e[6] = p),
          (e[7] = 0),
          (e[8] = l),
          (e[9] = d),
          (e[10] = _),
          (e[11] = 0),
          (e[12] = -(o * h + s * g + l * E)),
          (e[13] = -(c * h + u * g + d * E)),
          (e[14] = -(f * h + p * g + _ * E)),
          (e[15] = 1),
          e);
}
