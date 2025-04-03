n.d(t, { Z: () => l }), n(47120);
var r = n(284539),
    i = n(477839),
    s = n(771382);
let a = {
    [i.Vx.DEFAULT]: s.default,
    [i.Vx.CAT]: s.cat,
    [i.Vx.SWORD]: s.sword,
    [i.Vx.PIZZA]: s.pizza
};
function l() {
    var e;
    let [t] = (0, r.Z)(i.yN.CURSORS);
    return a[null != (e = t.selectedCursor) ? e : i.Vx.DEFAULT];
}
