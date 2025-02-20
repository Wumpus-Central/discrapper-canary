n.d(t, { Z: () => a }), n(47120), n(653041);
var r = n(341702),
    i = n(887490);
let o = 'line';
function a(e, t) {
    if (i.bN.areStylesDisabled(e)) return [];
    let [n, a] = t,
        s = [];
    if (!i.aj.isType(n, o) || null == n.codeBlockState) return s;
    let { hljsTypes: l, isStyledCodeBlockLine: c } = n.codeBlockState;
    if (null == l || 0 === l.length || !c) return [];
    for (let t of l) {
        let o = n.children.map((e) => (i.LC.isText(e) ? e.text : null));
        s.push({
            hljsTypes: t.types,
            anchor: (0, r.t)(e, a, o, t.start),
            focus: (0, r.t)(e, a, o, t.end)
        });
    }
    return s;
}
