n.d(t, {
    A: () => a,
});
var r = n(9631),
    i = n(643479);
let a = {
        read: _,
    },
    s = 84,
    o = 128,
    l = "acsp",
    c = "desc",
    u = "mluc",
    d = "text",
    f = "sig ",
    p = 12;

function _(e, t, n) {
    return n && t[0].compressionMethod !== i.Gl ? h(e, t) : g(e, t);
}

function h(e, t) {
    if (!m(t[0].compressionMethod)) return {};
    let n = new DataView(e.buffer.slice(t[0].offset, t[0].offset + t[0].length));
    return (0, i.mF)(n, t[0].compressionMethod, "utf-8", "dataview")
        .then(O)
        .catch(() => ({}));
}

function m(e) {
    return e === i.FH;
}

function g(e, t) {
    try {
        let n = t.reduce((e, t) => e + t.length, 0),
            r = new Uint8Array(n),
            i = 0,
            a = E(e);
        for (let e = 1; e <= t.length; e++) {
            let n = t.find((t) => t.chunkNumber === e);
            if (!n) throw Error(`ICC chunk ${e} not found`);
            let s = a.slice(n.offset, n.offset + n.length),
                o = new Uint8Array(s);
            r.set(o, i), (i += o.length);
        }
        return O(new DataView(r.buffer));
    } catch (e) {
        return {};
    }
}

function E(e) {
    return Array.isArray(e) ? new DataView(Uint8Array.from(e).buffer).buffer : e.buffer;
}

function b(e) {
    return e.length < o + 4;
}

function y(e, t) {
    return e.length < t + p;
}

function O(e) {
    let t = e.buffer,
        n = e.getUint32();
    if (e.byteLength !== n) throw Error("ICC profile length not matching");
    if (e.byteLength < s) throw Error("ICC profile too short");
    let a = {},
        o = Object.keys(r.x);
    for (let t = 0; t < o.length; t++) {
        let n = o[t],
            i = r.x[n],
            s = i.value(e, parseInt(n, 10)),
            l = s;
        i.description && (l = i.description(s)),
            (a[i.name] = {
                value: s,
                description: l,
            });
    }
    if (A(t.slice(36, 40)) !== l) throw Error("ICC profile: missing signature");
    if (b(t)) return a;
    let p = e.getUint32(128),
        _ = 132;
    for (let n = 0; n < p && !y(t, _); n++) {
        let n = (0, i.hT)(e, _, 4),
            r = e.getUint32(_ + 4),
            s = e.getUint32(_ + 8);
        if (r > t.length) break;
        let o = (0, i.hT)(e, r, 4);
        if (o === c) {
            let i = e.getUint32(r + 8);
            if (i > s) return a;
            v(a, n, A(t.slice(r + 12, r + i + 11)));
        } else if (o === u) {
            let t = e.getUint32(r + 8),
                s = e.getUint32(r + 12),
                o = r + 16,
                l = [];
            for (let n = 0; n < t; n++) {
                let t = (0, i.hT)(e, o + 0, 2),
                    n = (0, i.hT)(e, o + 2, 2),
                    a = e.getUint32(o + 4),
                    c = e.getUint32(o + 8),
                    u = (0, i.gq)(e, r + c, a);
                l.push({
                    languageCode: t,
                    countryCode: n,
                    text: u,
                }),
                    (o += s);
            }
            if (1 === t) v(a, n, l[0].text);
            else {
                let e = {};
                for (let t = 0; t < l.length; t++) e[`${l[t].languageCode}-${l[t].countryCode}`] = l[t].text;
                v(a, n, e);
            }
        } else o === d ? v(a, n, A(t.slice(r + 8, r + s - 7))) : o === f && v(a, n, A(t.slice(r + 8, r + 12)));
        _ += 12;
    }
    return a;
}

function A(e) {
    return String.fromCharCode.apply(null, new Uint8Array(e));
}

function v(e, t, n) {
    r.f[t]
        ? (e[r.f[t].name] = {
              value: n,
              description: n,
          })
        : (e[t] = {
              value: n,
              description: n,
          });
}
