n.d(t, { A: () => s }), n(321073);
var l = n(22098),
    i = n(820066);
function s(e, t) {
    if (i.VW.areStylesDisabled(e)) return [];
    let [n, s] = t,
        r = [];
    if (!i.AS.isType(n, "line") || null == n.codeBlockState) return r;
    let { hljsTypes: a, isStyledCodeBlockLine: o } = n.codeBlockState;
    if (null == a || 0 === a.length || !o) return [];
    for (let t of a) {
        let a = n.children.map((e) => (i.l5.isText(e) ? e.text : null));
        r.push({ hljsTypes: t.types, anchor: (0, l.Q)(e, s, a, t.start), focus: (0, l.Q)(e, s, a, t.end) });
    }
    return r;
}
