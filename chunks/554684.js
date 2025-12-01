n.d(t, {
    N: () => l,
    a: () => s,
});
var r = n(791473),
    i = n(610388),
    a = n(765859);
let o = {
    1: i.Z.getByteAt,
    2: i.Z.getAsciiAt,
    3: i.Z.getShortAt,
    4: i.Z.getLongAt,
    5: i.Z.getRationalAt,
    7: i.Z.getUndefinedAt,
    9: i.Z.getSlongAt,
    10: i.Z.getSrationalAt,
    13: i.Z.getIfdPointerAt,
};
function s(e, t, n) {
    return t + i.Z.getLongAt(e, t + 4, n);
}
function l(e, t, n, o, s, d) {
    let f = i.Z.getTypeSize("SHORT"),
        p = 12,
        _ = {},
        m = c(e, o, s);
    o += f;
    for (let r = 0; r < m && !(o + p > e.byteLength); r++) {
        let r = u(e, t, n, o, s, d);
        void 0 !== r &&
            ((_[r.name] = {
                id: r.id,
                value: r.value,
                description: r.description,
            }),
            ("MakerNote" === r.name || (t === a.eG && "LevelInfo" === r.name)) && (_[r.name].__offset = r.__offset)),
            (o += p);
    }
    if (r.Z.USE_THUMBNAIL && o < e.byteLength - i.Z.getTypeSize("LONG")) {
        let r = i.Z.getLongAt(e, o, s);
        0 !== r && t === a.n1 && (_.Thumbnail = l(e, a.yJ, n, n + r, s, d));
    }
    return _;
}
function c(e, t, n) {
    return t + i.Z.getTypeSize("SHORT") <= e.byteLength ? i.Z.getShortAt(e, t, n) : 0;
}
function u(e, t, n, r, o, s) {
    let l,
        c,
        u = 33723,
        g = i.Z.getTypeSize("SHORT"),
        E = g + i.Z.getTypeSize("SHORT"),
        b = E + i.Z.getTypeSize("LONG"),
        y = i.Z.getShortAt(e, r, o),
        O = i.Z.getShortAt(e, r + g, o),
        v = i.Z.getLongAt(e, r + E, o);
    if (void 0 === i.Z.typeSizes[O] || (!s && void 0 === a.ZP[t][y])) return;
    d(O, v)
        ? (l = f(e, (c = r + b), O, v, o))
        : ((c = i.Z.getLongAt(e, r + b, o)), (l = p(e, n, c, O, v) ? f(e, n + c, O, v, o, y === u) : "<faulty value>")),
        O === i.Z.tagTypes.ASCII && (l = m((l = _(l))));
    let S = `undefined-${y}`,
        I = l;
    if (void 0 !== a.ZP[t][y])
        if (void 0 !== a.ZP[t][y].name && void 0 !== a.ZP[t][y].description) {
            S = a.ZP[t][y].name;
            try {
                I = a.ZP[t][y].description(l);
            } catch (e) {
                I = h(l);
            }
        } else
            O === i.Z.tagTypes.RATIONAL || O === i.Z.tagTypes.SRATIONAL
                ? ((S = a.ZP[t][y]), (I = "" + l[0] / l[1]))
                : ((S = a.ZP[t][y]), (I = h(l)));
    return {
        id: y,
        name: S,
        value: l,
        description: I,
        __offset: c,
    };
}
function d(e, t) {
    return i.Z.typeSizes[e] * t <= i.Z.getTypeSize("LONG");
}
function f(e, t, n, r, a, s = !1) {
    let l = [];
    s && ((r *= i.Z.typeSizes[n]), (n = i.Z.tagTypes.BYTE));
    for (let s = 0; s < r; s++) l.push(o[n](e, t, a)), (t += i.Z.typeSizes[n]);
    return n === i.Z.tagTypes.ASCII ? (l = i.Z.getAsciiValue(l)) : 1 === l.length && (l = l[0]), l;
}
function p(e, t, n, r, a) {
    return t + n + i.Z.typeSizes[r] * a <= e.byteLength;
}
function _(e) {
    let t = [],
        n = 0;
    for (let r = 0; r < e.length; r++) {
        if ("\0" === e[r]) {
            n++;
            continue;
        }
        void 0 === t[n] && (t[n] = ""), (t[n] += e[r]);
    }
    return t;
}
function m(e) {
    try {
        return e.map((e) => decodeURIComponent(escape(e)));
    } catch (t) {
        return e;
    }
}
function h(e) {
    return e instanceof Array ? e.join(", ") : e;
}
