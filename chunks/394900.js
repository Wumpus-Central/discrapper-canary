r.d(t, {
    Z: function () {
        return l;
    }
});
var a = r(37484),
    n = r(665352),
    o = r(798192),
    s = r(181568),
    i = r(103671),
    c = r(262281),
    u = r(830927);
function l(e, { precision: t = o.Z.precision, format: r = 'default', inGamut: l = !0, ...f } = {}) {
    let b;
    e = (0, s.Z)(e);
    let h = r;
    r = e.space.getFormat(r) ?? e.space.getFormat('default') ?? n.Z.DEFAULT_FORMAT;
    let d = e.coords.slice();
    if (((l ||= r.toGamut) && !(0, i.Z)(e) && (d = (0, c.Z)((0, u.Z)(e), !0 === l ? void 0 : l).coords), 'custom' === r.type)) {
        if (((f.precision = t), r.serialize)) b = r.serialize(d, e.alpha, f);
        else throw TypeError(`format ${h} can only be used to parse colors, not for serialization`);
    } else {
        let n = r.name || 'color';
        r.serializeCoords ? (d = r.serializeCoords(d, t)) : null !== t && (d = d.map((e) => a.zL(e, { precision: t })));
        let o = [...d];
        if ('color' === n) {
            let t = r.id || r.ids?.[0] || e.space.id;
            o.unshift(t);
        }
        let s = e.alpha;
        null !== t && (s = a.zL(s, { precision: t }));
        let i = e.alpha >= 1 || r.noAlpha ? '' : `${r.commas ? ',' : ' /'} ${s}`;
        b = `${n}(${o.join(r.commas ? ', ' : ' ')}${i})`;
    }
    return b;
}
