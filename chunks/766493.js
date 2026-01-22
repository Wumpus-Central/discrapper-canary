n.d(t, {
    A: () => i,
});
var r = n(668459);
let i = {
    read: a,
};

function a(e, t) {
    let n = s(e, t),
        r = f(e, t, n),
        i = p(e, t, n),
        a = {
            "JFIF Version": o(e, t, n),
            "Resolution Unit": l(e, t, n),
            XResolution: u(e, t, n),
            YResolution: d(e, t, n),
            "JFIF Thumbnail Width": r,
            "JFIF Thumbnail Height": i,
        };
    if (void 0 !== r && void 0 !== i) {
        let s = _(e, t, 3 * r.value * i.value, n);
        s && (a["JFIF Thumbnail"] = s);
    }
    for (let e in a) void 0 === a[e] && delete a[e];
    return a;
}

function s(e, t) {
    return r.A.getShortAt(e, t);
}

function o(e, t, n) {
    let i = 7;
    if (9 > n) return;
    let a = r.A.getByteAt(e, t + i),
        s = r.A.getByteAt(e, t + i + 1);
    return {
        value: 256 * a + s,
        description: a + "." + s,
    };
}

function l(e, t, n) {
    let i = 9;
    if (10 > n) return;
    let a = r.A.getByteAt(e, t + i);
    return {
        value: a,
        description: c(a),
    };
}

function c(e) {
    return 0 === e ? "None" : 1 === e ? "inches" : 2 === e ? "cm" : "Unknown";
}

function u(e, t, n) {
    let i = 10;
    if (12 > n) return;
    let a = r.A.getShortAt(e, t + i);
    return {
        value: a,
        description: "" + a,
    };
}

function d(e, t, n) {
    let i = 12;
    if (14 > n) return;
    let a = r.A.getShortAt(e, t + i);
    return {
        value: a,
        description: "" + a,
    };
}

function f(e, t, n) {
    let i = 14;
    if (15 > n) return;
    let a = r.A.getByteAt(e, t + i);
    return {
        value: a,
        description: `${a}px`,
    };
}

function p(e, t, n) {
    let i = 15;
    if (16 > n) return;
    let a = r.A.getByteAt(e, t + i);
    return {
        value: a,
        description: `${a}px`,
    };
}

function _(e, t, n, r) {
    let i = 16;
    if (0 !== n && !(i + n > r))
        return {
            value: e.buffer.slice(t + i, t + i + n),
            description: "<24-bit RGB pixel data>",
        };
}
