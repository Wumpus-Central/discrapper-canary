"use strict";
n.d(t, { A: () => s }), n(321073);
var i = n(22098),
    l = n(711371);
function s(e, t) {
    if (l.VW.areStylesDisabled(e)) return [];
    let [n, s] = t,
        r = [];
    if (!l.AS.isType(n, "line") || null == n.codeBlockState) return r;
    let { hljsTypes: a, isStyledCodeBlockLine: o } = n.codeBlockState;
    if (null == a || 0 === a.length || !o) return [];
    for (let t of a) {
        let a = n.children.map((e) => (l.l5.isText(e) ? e.text : null));
        r.push({ hljsTypes: t.types, anchor: (0, i.Q)(e, s, a, t.start), focus: (0, i.Q)(e, s, a, t.end) });
    }
    return r;
}
