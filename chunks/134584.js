l.d(t, { x: () => o });
var n = l(790637);
function o(e, t, l) {
    let { node: o, isVirtualized: r } = e,
        i = { role: "row" };
    return r && !((0, n.D5)() && "expandedKeys" in t) && (i["aria-rowindex"] = o.index + 1), { rowProps: i };
}
