"use strict";
n.d(t, { A: () => s }), n(321073);
var r = n(22098),
    i = n(711371);
let a = "line";
function s(e, t) {
    if (i.VW.areStylesDisabled(e)) return [];
    let [n, s] = t,
        o = [];
    if (!i.AS.isType(n, a) || null == n.codeBlockState) return o;
    let { hljsTypes: l, isStyledCodeBlockLine: u } = n.codeBlockState;
    if (null == l || 0 === l.length || !u) return [];
    for (let t of l) {
        let a = n.children.map((e) => (i.l5.isText(e) ? e.text : null));
        o.push({ hljsTypes: t.types, anchor: (0, r.Q)(e, s, a, t.start), focus: (0, r.Q)(e, s, a, t.end) });
    }
    return o;
}
