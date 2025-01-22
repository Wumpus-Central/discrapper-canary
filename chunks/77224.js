r.d(n, {
    Z: function () {
        return u;
    }
});
var i = r(47120);
var a = r(653041);
var o = r(341702),
    s = r(887490);
let l = 'line';
function u(e, n) {
    if (s.bN.areStylesDisabled(e)) return [];
    let [r, i] = n,
        a = [];
    if (!s.aj.isType(r, l) || null == r.codeBlockState) return a;
    let { hljsTypes: u, isStyledCodeBlockLine: c } = r.codeBlockState;
    if (null == u || 0 === u.length || !c) return [];
    for (let n of u) {
        let l = r.children.map((e) => (s.LC.isText(e) ? e.text : null));
        a.push({
            hljsTypes: n.types,
            anchor: (0, o.t)(e, i, l, n.start),
            focus: (0, o.t)(e, i, l, n.end)
        });
    }
    return a;
}
