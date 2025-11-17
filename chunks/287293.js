n.d(t, { f: () => a });
var r = n(455419),
    i = n(90809);
function a(e, t, n) {
    var a;
    let { gridCellProps: o, isPressed: s } = (0, i.n)(e, t, n),
        l = null == (a = e.node.column) ? void 0 : a.key;
    return (
        null != l &&
            t.collection.rowHeaderColumnKeys.has(l) &&
            ((o.role = "rowheader"), (o.id = (0, r.iS)(t, e.node.parentKey, l))),
        {
            gridCellProps: o,
            isPressed: s,
        }
    );
}
