(n.d(t, { Z: () => l }), n(388685));
var i = n(284539),
    r = n(477839),
    s = n(771382);
let a = {
    [r.Vx.DEFAULT]: s.default,
    [r.Vx.CAT]: s.cat,
    [r.Vx.SWORD]: s.sword,
    [r.Vx.PIZZA]: s.pizza
};
function l() {
    var e;
    let [t] = (0, i.Z)(r.yN.CURSORS);
    return a[null != (e = t.selectedCursor) ? e : r.Vx.DEFAULT];
}
