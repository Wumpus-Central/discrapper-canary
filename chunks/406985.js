"use strict";
n.d(t, { m: () => l });
var r = n(199407),
    i = n(807177),
    s = n(885714),
    a = n(47276),
    o = n(64700);
function l(e) {
    var t;
    let n = (0, a.o)((t = r.A) && t.__esModule ? t.default : t, "@react-aria/grid"),
        l = (0, s.lb)(),
        u = ("pointer" === l || "virtual" === l || null == l) && "u" > typeof window && "ontouchstart" in window,
        d = (0, o.useMemo)(() => {
            let t,
                r = e.selectionManager.selectionMode,
                i = e.selectionManager.selectionBehavior;
            return (
                u && (t = n.format("longPressToSelect")),
                "replace" === i && "none" !== r && e.hasItemActions ? t : void 0
            );
        }, [e.selectionManager.selectionMode, e.selectionManager.selectionBehavior, e.hasItemActions, n, u]);
    return (0, i.I)(d);
}
