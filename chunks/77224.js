n.d(t, { Z: () => s }), n(47120), n(653041);
var i = n(341702),
    r = n(887490);
let a = 'line';
function s(e, t) {
    if (r.bN.areStylesDisabled(e)) return [];
    let [n, s] = t,
        o = [];
    if (!r.aj.isType(n, a) || null == n.codeBlockState) return o;
    let { hljsTypes: l, isStyledCodeBlockLine: u } = n.codeBlockState;
    if (null == l || 0 === l.length || !u) return [];
    for (let t of l) {
        let a = n.children.map((e) => (r.LC.isText(e) ? e.text : null));
        o.push({
            hljsTypes: t.types,
            anchor: (0, i.t)(e, s, a, t.start),
            focus: (0, i.t)(e, s, a, t.end)
        });
    }
    return o;
}
