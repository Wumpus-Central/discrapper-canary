n.d(t, { Q: () => i });
var r = n(154343);
function i(e, t, n) {
    let { node: i, isVirtualized: a } = e,
        o = { role: "row" };
    return a && !((0, r.OV)() && "expandedKeys" in t) && (o["aria-rowindex"] = i.index + 1), { rowProps: o };
}
