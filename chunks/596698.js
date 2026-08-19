"use strict";
r.d(t, { H: () => u });
var n = r(494830),
    o = r(230906),
    i = r(654978),
    a = r(779785),
    s = r(603432),
    l = r(582128);
function u(e, t) {
    var r;
    let {
            getRowText: u = (e) => {
                var r, n, o, i;
                return null != (i = null == (r = (n = t.collection).getTextValue) ? void 0 : r.call(n, e))
                    ? i
                    : null == (o = t.collection.getItem(e))
                      ? void 0
                      : o.textValue;
            },
        } = e,
        f = (0, s.o)((r = n.A) && r.__esModule ? r.default : r, "@react-aria/grid"),
        p = t.selectionManager.rawSelection,
        d = (0, l.useRef)(p),
        h = (0, i.J)(() => {
            var e;
            if (!t.selectionManager.isFocused || p === d.current) {
                d.current = p;
                return;
            }
            let r = c(p, d.current),
                n = c(d.current, p),
                i = "replace" === t.selectionManager.selectionBehavior,
                a = [];
            if (1 === t.selectionManager.selectedKeys.size && i) {
                let e = t.selectionManager.selectedKeys.keys().next().value;
                if (null != e && t.collection.getItem(e)) {
                    let t = u(e);
                    t && a.push(f.format("selectedItem", { item: t }));
                }
            } else if (1 === r.size && 0 === n.size) {
                let e = r.keys().next().value;
                if (null != e) {
                    let t = u(e);
                    t && a.push(f.format("selectedItem", { item: t }));
                }
            } else if (1 === n.size && 0 === r.size) {
                let e = n.keys().next().value;
                if (null != e && t.collection.getItem(e)) {
                    let t = u(e);
                    t && a.push(f.format("deselectedItem", { item: t }));
                }
            }
            "multiple" === t.selectionManager.selectionMode &&
                (0 === a.length ||
                    "all" === p ||
                    p.size > 1 ||
                    "all" === d.current ||
                    (null == (e = d.current) ? void 0 : e.size) > 1) &&
                a.push("all" === p ? f.format("selectedAll") : f.format("selectedCount", { count: p.size })),
                a.length > 0 && (0, o.iP)(a.join(" ")),
                (d.current = p);
        });
    (0, a.w)(() => {
        if (t.selectionManager.isFocused) h();
        else {
            let e = requestAnimationFrame(h);
            return () => cancelAnimationFrame(e);
        }
    }, [p, t.selectionManager.isFocused]);
}
function c(e, t) {
    let r = new Set();
    if ("all" === e || "all" === t) return r;
    for (let n of e.keys()) t.has(n) || r.add(n);
    return r;
}
