"use strict";
r.d(t, { m: () => l });
var n = r(494830),
    o = r(113997),
    i = r(766382),
    a = r(603432),
    s = r(582128);
function l(e) {
    var t;
    let r = (0, a.o)((t = n.A) && t.__esModule ? t.default : t, "@react-aria/grid"),
        l = (0, i.lb)(),
        u = ("pointer" === l || "virtual" === l || null == l) && "u" > typeof window && "ontouchstart" in window,
        c = (0, s.useMemo)(() => {
            let t,
                n = e.selectionManager.selectionMode,
                o = e.selectionManager.selectionBehavior;
            return (
                u && (t = r.format("longPressToSelect")),
                "replace" === o && "none" !== n && e.hasItemActions ? t : void 0
            );
        }, [e.selectionManager.selectionMode, e.selectionManager.selectionBehavior, e.hasItemActions, r, u]);
    return (0, o.I)(c);
}
