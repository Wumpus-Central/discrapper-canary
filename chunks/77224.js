n.d(t, { Z: () => o }), n(388685), n(539854);
var r = n(341702),
    i = n(887490);
let a = 'line';
function o(e, t) {
    if (i.bN.areStylesDisabled(e)) return [];
    let [n, o] = t,
        s = [];
    if (!i.aj.isType(n, a) || null == n.codeBlockState) return s;
    let { hljsTypes: l, isStyledCodeBlockLine: c } = n.codeBlockState;
    if (null == l || 0 === l.length || !c) return [];
    for (let t of l) {
        let a = n.children.map((e) => (i.LC.isText(e) ? e.text : null));
        s.push({
            hljsTypes: t.types,
            anchor: (0, r.t)(e, o, a, t.start),
            focus: (0, r.t)(e, o, a, t.end)
        });
    }
    return s;
}
