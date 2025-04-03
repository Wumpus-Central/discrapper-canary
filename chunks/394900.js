r.d(t, { Z: () => u });
var a = r(37484),
    n = r(665352),
    s = r(798192),
    o = r(181568),
    i = r(103671),
    c = r(262281),
    l = r(830927);
function u(e, { precision: t = s.Z.precision, format: r = 'default', inGamut: f = !0, ...b } = {}) {
    let d;
    e = (0, o.Z)(e);
    let h = r;
    r = e.space.getFormat(r) ?? e.space.getFormat('default') ?? n.Z.DEFAULT_FORMAT;
    let p = e.coords.slice();
    if (((f ||= r.toGamut) && !(0, i.Z)(e) && (p = (0, c.Z)((0, l.Z)(e), !0 === f ? void 0 : f).coords), 'custom' === r.type))
        if (((b.precision = t), r.serialize)) d = r.serialize(p, e.alpha, b);
        else throw TypeError(`format ${h} can only be used to parse colors, not for serialization`);
    else {
        let n = r.name || 'color';
        r.serializeCoords ? (p = r.serializeCoords(p, t)) : null !== t && (p = p.map((e) => a.zL(e, { precision: t })));
        let s = [...p];
        if ('color' === n) {
            let t = r.id || r.ids?.[0] || e.space.id;
            s.unshift(t);
        }
        let o = e.alpha;
        null !== t && (o = a.zL(o, { precision: t }));
        let i = e.alpha >= 1 || r.noAlpha ? '' : `${r.commas ? ',' : ' /'} ${o}`;
        d = `${n}(${s.join(r.commas ? ', ' : ' ')}${i})`;
    }
    return d;
}
