"use strict";
n.d(t, { m: () => l });
var r = n(494830),
    i = n(113997),
    a = n(766382),
    o = n(603432),
    s = n(582128);
function l(e) {
    var t;
    let n = (0, o.o)((t = r.A) && t.__esModule ? t.default : t, "@react-aria/grid"),
        l = (0, a.lb)(),
        u = ("pointer" === l || "virtual" === l || null == l) && "u" > typeof window && "ontouchstart" in window,
        c = (0, s.useMemo)(() => {
            let t,
                r = e.selectionManager.selectionMode,
                i = e.selectionManager.selectionBehavior;
            return (
                u && (t = n.format("longPressToSelect")),
                "replace" === i && "none" !== r && e.hasItemActions ? t : void 0
            );
        }, [e.selectionManager.selectionMode, e.selectionManager.selectionBehavior, e.hasItemActions, n, u]);
    return (0, i.I)(c);
}
