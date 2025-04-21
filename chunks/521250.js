n.d(t, { Z: () => a }), n(388685);
var i = n(284539),
    r = n(477839),
    s = n(771382);
let l = {
    [r.Vx.DEFAULT]: s.default,
    [r.Vx.CAT]: s.cat,
    [r.Vx.SWORD]: s.sword,
    [r.Vx.PIZZA]: s.pizza
};
function a() {
    var e;
    let [t] = (0, i.Z)(r.yN.CURSORS);
    return l[null != (e = t.selectedCursor) ? e : r.Vx.DEFAULT];
}
