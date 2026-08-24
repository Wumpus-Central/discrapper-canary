"use strict";
r.d(t, { H: () => u });
var n = r(494830),
    i = r(230906),
    o = r(654978),
    a = r(779785),
    s = r(603432),
    l = r(582128);
function u(e, t) {
    var r;
    let {
            getRowText: u = (e) => {
                var r, n, i, o;
                return null != (o = null == (r = (n = t.collection).getTextValue) ? void 0 : r.call(n, e))
                    ? o
                    : null == (i = t.collection.getItem(e))
                      ? void 0
                      : i.textValue;
            },
        } = e,
        f = (0, s.o)((r = n.A) && r.__esModule ? r.default : r, "@react-aria/grid"),
        d = t.selectionManager.rawSelection,
        p = (0, l.useRef)(d),
        h = (0, o.J)(() => {
            var e;
            if (!t.selectionManager.isFocused || d === p.current) {
                p.current = d;
                return;
            }
            let r = c(d, p.current),
                n = c(p.current, d),
                o = "replace" === t.selectionManager.selectionBehavior,
                a = [];
            if (1 === t.selectionManager.selectedKeys.size && o) {
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
                    "all" === d ||
                    d.size > 1 ||
                    "all" === p.current ||
                    (null == (e = p.current) ? void 0 : e.size) > 1) &&
                a.push("all" === d ? f.format("selectedAll") : f.format("selectedCount", { count: d.size })),
                a.length > 0 && (0, i.iP)(a.join(" ")),
                (p.current = d);
        });
    (0, a.w)(() => {
        if (t.selectionManager.isFocused) h();
        else {
            let e = requestAnimationFrame(h);
            return () => cancelAnimationFrame(e);
        }
    }, [d, t.selectionManager.isFocused]);
}
function c(e, t) {
    let r = new Set();
    if ("all" === e || "all" === t) return r;
    for (let n of e.keys()) t.has(n) || r.add(n);
    return r;
}
