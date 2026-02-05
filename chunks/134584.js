"use strict";
n.d(t, { x: () => i });
var r = n(790637);
function i(e, t, n) {
    let { node: i, isVirtualized: a } = e,
        s = { role: "row" };
    return a && !((0, r.D5)() && "expandedKeys" in t) && (s["aria-rowindex"] = i.index + 1), { rowProps: s };
}
