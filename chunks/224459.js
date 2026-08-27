"use strict";
r.d(t, { H: () => l });
var n = r(4085),
    i = r(817738),
    o = r(481238),
    a = r(294523),
    s = r(582128);
function l(e, t) {
    var r;
    let { getRowText: l = (e) => t.collection.getTextValue?.(e) ?? t.collection.getItem(e)?.textValue } = e,
        c = (0, o.o)((r = i.A) && r.__esModule ? r.default : r, "@react-aria/grid"),
        f = t.selectionManager.rawSelection,
        d = (0, s.useRef)(f),
        p = (0, s.useCallback)(() => {
            if (!t.selectionManager.isFocused || f === d.current) {
                d.current = f;
                return;
            }
            let e = u(f, d.current),
                r = u(d.current, f),
                i = "replace" === t.selectionManager.selectionBehavior,
                o = [];
            if (1 === t.selectionManager.selectedKeys.size && i) {
                let e = t.selectionManager.selectedKeys.keys().next().value;
                if (null != e && t.collection.getItem(e)) {
                    let t = l(e);
                    t && o.push(c.format("selectedItem", { item: t }));
                }
            } else if (1 === e.size && 0 === r.size) {
                let t = e.keys().next().value;
                if (null != t) {
                    let e = l(t);
                    e && o.push(c.format("selectedItem", { item: e }));
                }
            } else if (1 === r.size && 0 === e.size) {
                let e = r.keys().next().value;
                if (null != e && t.collection.getItem(e)) {
                    let t = l(e);
                    t && o.push(c.format("deselectedItem", { item: t }));
                }
            }
            "multiple" === t.selectionManager.selectionMode &&
                (0 === o.length || "all" === f || f.size > 1 || "all" === d.current || d.current?.size > 1) &&
                o.push("all" === f ? c.format("selectedAll") : c.format("selectedCount", { count: f.size })),
                o.length > 0 && (0, n.iP)(o.join(" ")),
                (d.current = f);
        }, [
            f,
            t.selectionManager.selectedKeys,
            t.selectionManager.isFocused,
            t.selectionManager.selectionBehavior,
            t.selectionManager.selectionMode,
            t.collection,
            l,
            c,
        ]);
    (0, a.w)(() => {
        if (t.selectionManager.isFocused) p();
        else {
            let e = requestAnimationFrame(p);
            return () => cancelAnimationFrame(e);
        }
    }, [f, t.selectionManager.isFocused]);
}
function u(e, t) {
    let r = new Set();
    if ("all" === e || "all" === t) return r;
    for (let n of e.keys()) t.has(n) || r.add(n);
    return r;
}
