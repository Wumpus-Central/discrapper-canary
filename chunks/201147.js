n.d(t, {
    A: () => c,
});
var r = n(643479),
    i = n(177487),
    a = n(234291),
    s = n(664741),
    o = n(525012),
    l = n(761799);
let c = {
        read: E,
    },
    u = "STATE_KEYWORD",
    d = "STATE_COMPRESSION",
    f = "STATE_LANG",
    p = "STATE_TRANSLATED_KEYWORD",
    _ = "STATE_TEXT",
    h = 1,
    m = 1,
    g = 6;

function E(e, t, n, r) {
    let i = {},
        a = [];
    for (let c = 0; c < t.length; c++) {
        let { offset: u, length: d, type: f } = t[c],
            p = b(e, u, d, f, n);
        if (p instanceof Promise)
            a.push(
                p.then(({ name: e, value: t, description: n }) => {
                    try {
                        if (l.A.USE_EXIF && C(e, t))
                            return {
                                __exif: s.A.read(R(t), g, r).tags,
                            };
                        if (l.A.USE_IPTC && N(e, t))
                            return {
                                __iptc: o.A.read(R(t), 0, r),
                            };
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
            let { name: e, value: t, description: n } = p;
            e &&
                (i[e] = {
                    value: t,
                    description: n,
                });
        }
    }
    return {
        readTags: i,
        readTagsPromise: a.length > 0 ? Promise.all(a) : void 0,
    };
}

function b(e, t, n, i, s) {
    let o,
        l = [],
        c = [],
        m = [],
        g = u,
        E = r.Gl;
    for (let r = 0; r < n && t + r < e.byteLength; r++) {
        if (g === d) {
            (E = y({
                type: i,
                dataView: e,
                offset: t + r,
            })),
                i === a.Xo && (r += h),
                (g = O(i, g));
            continue;
        }
        if (g === _) {
            o = new DataView(e.buffer.slice(t + r, t + n));
            break;
        }
        let s = e.getUint8(t + r);
        0 === s ? (g = O(i, g)) : g === u ? l.push(s) : g === f ? c.push(s) : g === p && m.push(s);
    }
    if (E !== r.Gl && !s) return {};
    let b = (0, r.mF)(o, E, A(i));
    return b instanceof Promise
        ? b.then((e) => v(e, i, c, l)).catch(() => v("<text using unknown compression>".split(""), i, c, l))
        : v(b, i, c, l);
}

function y({ type: e, dataView: t, offset: n }) {
    if (e === a.Xo) {
        if (t.getUint8(n) === m) return t.getUint8(n + 1);
    } else if (e === a.aA) return t.getUint8(n);
    return r.Gl;
}

function O(e, t) {
    return t === u && [a.Xo, a.aA].includes(e) ? d : t === d ? (e === a.Xo ? f : _) : t === f ? p : _;
}

function A(e) {
    return e === a.HL || e === a.aA ? "latin1" : "utf-8";
}

function v(e, t, n, r) {
    let i = I(e);
    return {
        name: S(t, n, r),
        value: i,
        description: t === a.Xo ? T(e) : i,
    };
}

function S(e, t, n) {
    let i = (0, r.YF)(n);
    if (e === a.HL || 0 === t.length) return i;
    let s = (0, r.YF)(t);
    return `${i} (${s})`;
}

function I(e) {
    return e instanceof DataView ? (0, r.hT)(e, 0, e.byteLength) : e;
}

function T(e) {
    return i.A.decode("UTF-8", e);
}

function C(e, t) {
    return "raw profile type exif" === e.toLowerCase() && "exif" === t.substring(1, 5);
}

function N(e, t) {
    return "raw profile type iptc" === e.toLowerCase() && "iptc" === t.substring(1, 5);
}

function R(e) {
    return w(e.match(/\n(exif|iptc)\n\s*\d+\n([\s\S]*)$/)[2].replace(/\n/g, ""));
}

function w(e) {
    let t = new DataView(new ArrayBuffer(e.length / 2));
    for (let n = 0; n < e.length; n += 2) t.setUint8(n / 2, parseInt(e.substring(n, n + 2), 16));
    return t;
}
