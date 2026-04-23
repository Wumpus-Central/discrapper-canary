"use strict";
n.d(t, { A: () => s }), n(321073);
var r = n(22098),
    i = n(711371);
function s(e, t) {
    if (i.VW.areStylesDisabled(e)) return [];
    let [n, s] = t,
        a = [];
    if (!i.AS.isType(n, "line") || null == n.codeBlockState) return a;
    let { hljsTypes: o, isStyledCodeBlockLine: l } = n.codeBlockState;
    if (null == o || 0 === o.length || !l) return [];
    for (let t of o) {
        let o = n.children.map((e) => (i.l5.isText(e) ? e.text : null));
        a.push({ hljsTypes: t.types, anchor: (0, r.Q)(e, s, o, t.start), focus: (0, r.Q)(e, s, o, t.end) });
    }
    return a;
}
