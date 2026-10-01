(n.d(t, { A: () => r }), n(321073));
var l = n(22098),
    i = n(820066);
function r(e, t) {
    if (i.VW.areStylesDisabled(e)) return [];
    let [n, r] = t,
        s = [];
    if (!i.AS.isType(n, "line") || null == n.codeBlockState) return s;
    let { hljsTypes: a, isStyledCodeBlockLine: o } = n.codeBlockState;
    if (null == a || 0 === a.length || !o) return [];
    for (let t of a) {
        let a = n.children.map((e) => (i.l5.isText(e) ? e.text : null));
        s.push({ hljsTypes: t.types, anchor: (0, l.Q)(e, r, a, t.start), focus: (0, l.Q)(e, r, a, t.end) });
    }
    return s;
}
