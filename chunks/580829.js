n.d(t, { Z: () => a });
var r = n(704965),
    i = n(822632);
let a = { read: _ },
    o = 84,
    s = 128,
    l = "acsp",
    c = "desc",
    u = "mluc",
    d = "text",
    f = "sig ",
    p = 12;
function _(e, t, n) {
    return n && t[0].compressionMethod !== i.p4 ? m(e, t) : g(e, t);
}
function m(e, t) {
    if (!h(t[0].compressionMethod)) return {};
    let n = new DataView(e.buffer.slice(t[0].offset, t[0].offset + t[0].length));
    return (0, i.Lj)(n, t[0].compressionMethod, "utf-8", "dataview")
        .then(O)
        .catch(() => ({}));
}
function h(e) {
    return e === i.Nf;
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
            let o = a.slice(n.offset, n.offset + n.length),
                s = new Uint8Array(o);
            r.set(s, i), (i += s.length);
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
    return e.length < s + 4;
}
function y(e, t) {
    return e.length < t + p;
}
function O(e) {
    let t = e.buffer,
        n = e.getUint32();
    if (e.byteLength !== n) throw Error("ICC profile length not matching");
    if (e.byteLength < o) throw Error("ICC profile too short");
    let a = {},
        s = Object.keys(r.m);
    for (let t = 0; t < s.length; t++) {
        let n = s[t],
            i = r.m[n],
            o = i.value(e, parseInt(n, 10)),
            l = o;
        i.description && (l = i.description(o)),
            (a[i.name] = {
                value: o,
                description: l,
            });
    }
    if (v(t.slice(36, 40)) !== l) throw Error("ICC profile: missing signature");
    if (b(t)) return a;
    let p = e.getUint32(128),
        _ = 132;
    for (let n = 0; n < p && !y(t, _); n++) {
        let n = (0, i.oH)(e, _, 4),
            r = e.getUint32(_ + 4),
            o = e.getUint32(_ + 8);
        if (r > t.length) break;
        let s = (0, i.oH)(e, r, 4);
        if (s === c) {
            let i = e.getUint32(r + 8);
            if (i > o) return a;
            S(a, n, v(t.slice(r + 12, r + i + 11)));
        } else if (s === u) {
            let t = e.getUint32(r + 8),
                o = e.getUint32(r + 12),
                s = r + 16,
                l = [];
            for (let n = 0; n < t; n++) {
                let t = (0, i.oH)(e, s + 0, 2),
                    n = (0, i.oH)(e, s + 2, 2),
                    a = e.getUint32(s + 4),
                    c = e.getUint32(s + 8),
                    u = (0, i.cs)(e, r + c, a);
                l.push({
                    languageCode: t,
                    countryCode: n,
                    text: u,
                }),
                    (s += o);
            }
            if (1 === t) S(a, n, l[0].text);
            else {
                let e = {};
                for (let t = 0; t < l.length; t++) e[`${l[t].languageCode}-${l[t].countryCode}`] = l[t].text;
                S(a, n, e);
            }
        } else s === d ? S(a, n, v(t.slice(r + 8, r + o - 7))) : s === f && S(a, n, v(t.slice(r + 8, r + 12)));
        _ += 12;
    }
    return a;
}
function v(e) {
    return String.fromCharCode.apply(null, new Uint8Array(e));
}
function S(e, t, n) {
    r.w[t]
        ? (e[r.w[t].name] = {
              value: n,
              description: n,
          })
        : (e[t] = {
              value: n,
              description: n,
          });
}
