n.d(t, { Z: () => c });
var r = n(463424),
    i = n(140827),
    o = n(906597),
    a = n(956484),
    s = n(872724),
    l = n(441349);
let c = { read: E },
    u = "STATE_KEYWORD",
    d = "STATE_COMPRESSION",
    f = "STATE_LANG",
    _ = "STATE_TRANSLATED_KEYWORD",
    p = "STATE_TEXT",
    h = 1,
    m = 1,
    g = 6;
function E(e, t, n, r) {
    let i = {},
        o = [];
    for (let c = 0; c < t.length; c++) {
        let { offset: u, length: d, type: f } = t[c],
            _ = b(e, u, d, f, n);
        if (_ instanceof Promise)
            o.push(
                _.then(({ name: e, value: t, description: n }) => {
                    try {
                        if (l.Z.USE_EXIF && C(e, t)) return { __exif: a.Z.read(R(t), g, r).tags };
                        if (l.Z.USE_IPTC && N(e, t)) return { __iptc: s.Z.read(R(t), 0, r) };
                        if (e && !C(e, t) && !N(e, t))
                            return {
                                [e]: {
                                    value: t,
                                    description: n,
                                },
                            };
                    } catch (e) {}
                    return {};
                }),
            );
        else {
            let { name: e, value: t, description: n } = _;
            e &&
                (i[e] = {
                    value: t,
                    description: n,
                });
        }
    }
    return {
        readTags: i,
        readTagsPromise: o.length > 0 ? Promise.all(o) : void 0,
    };
}
function b(e, t, n, i, a) {
    let s,
        l = [],
        c = [],
        m = [],
        g = u,
        E = r.p4;
    for (let r = 0; r < n && t + r < e.byteLength; r++) {
        if (g === d) {
            (E = y({
                type: i,
                dataView: e,
                offset: t + r,
            })),
                i === o.Jn && (r += h),
                (g = O(i, g));
            continue;
        }
        if (g === p) {
            s = new DataView(e.buffer.slice(t + r, t + n));
            break;
        }
        let a = e.getUint8(t + r);
        0 === a ? (g = O(i, g)) : g === u ? l.push(a) : g === f ? c.push(a) : g === _ && m.push(a);
    }
    if (E !== r.p4 && !a) return {};
    let b = (0, r.Lj)(s, E, v(i));
    return b instanceof Promise
        ? b.then((e) => I(e, i, c, l)).catch(() => I("<text using unknown compression>".split(""), i, c, l))
        : I(b, i, c, l);
}
function y({ type: e, dataView: t, offset: n }) {
    if (e === o.Jn) {
        if (t.getUint8(n) === m) return t.getUint8(n + 1);
    } else if (e === o.z_) return t.getUint8(n);
    return r.p4;
}
function O(e, t) {
    return t === u && [o.Jn, o.z_].includes(e) ? d : t === d ? (e === o.Jn ? f : p) : t === f ? _ : p;
}
function v(e) {
    return e === o.a0 || e === o.z_ ? "latin1" : "utf-8";
}
function I(e, t, n, r) {
    let i = S(e);
    return {
        name: T(t, n, r),
        value: i,
        description: t === o.Jn ? A(e) : i,
    };
}
function T(e, t, n) {
    let i = (0, r.nZ)(n);
    if (e === o.a0 || 0 === t.length) return i;
    let a = (0, r.nZ)(t);
    return `${i} (${a})`;
}
function S(e) {
    return e instanceof DataView ? (0, r.oH)(e, 0, e.byteLength) : e;
}
function A(e) {
    return i.Z.decode("UTF-8", e);
}
function C(e, t) {
    return "raw profile type exif" === e.toLowerCase() && "exif" === t.substring(1, 5);
}
function N(e, t) {
    return "raw profile type iptc" === e.toLowerCase() && "iptc" === t.substring(1, 5);
}
function R(e) {
    return P(e.match(/\n(exif|iptc)\n\s*\d+\n([\s\S]*)$/)[2].replace(/\n/g, ""));
}
function P(e) {
    let t = new DataView(new ArrayBuffer(e.length / 2));
    for (let n = 0; n < e.length; n += 2) t.setUint8(n / 2, parseInt(e.substring(n, n + 2), 16));
    return t;
}
