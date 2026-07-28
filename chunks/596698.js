"use strict";
n.d(t, { H: () => u });
var r = n(494830),
    i = n(230906),
    a = n(654978),
    o = n(779785),
    s = n(603432),
    l = n(582128);
function u(e, t) {
    var n;
    let {
            getRowText: u = (e) => {
                var n, r, i, a;
                return null != (a = null == (n = (r = t.collection).getTextValue) ? void 0 : n.call(r, e))
                    ? a
                    : null == (i = t.collection.getItem(e))
                      ? void 0
                      : i.textValue;
            },
        } = e,
        d = (0, s.o)((n = r.A) && n.__esModule ? n.default : n, "@react-aria/grid"),
        f = t.selectionManager.rawSelection,
        p = (0, l.useRef)(f),
        h = (0, a.J)(() => {
            var e;
            if (!t.selectionManager.isFocused || f === p.current) {
                p.current = f;
                return;
            }
            let n = c(f, p.current),
                r = c(p.current, f),
                a = "replace" === t.selectionManager.selectionBehavior,
                o = [];
            if (1 === t.selectionManager.selectedKeys.size && a) {
                let e = t.selectionManager.selectedKeys.keys().next().value;
                if (null != e && t.collection.getItem(e)) {
                    let t = u(e);
                    t && o.push(d.format("selectedItem", { item: t }));
                }
            } else if (1 === n.size && 0 === r.size) {
                let e = n.keys().next().value;
                if (null != e) {
                    let t = u(e);
                    t && o.push(d.format("selectedItem", { item: t }));
                }
            } else if (1 === r.size && 0 === n.size) {
                let e = r.keys().next().value;
                if (null != e && t.collection.getItem(e)) {
                    let t = u(e);
                    t && o.push(d.format("deselectedItem", { item: t }));
                }
            }
            "multiple" === t.selectionManager.selectionMode &&
                (0 === o.length ||
                    "all" === f ||
                    f.size > 1 ||
                    "all" === p.current ||
                    (null == (e = p.current) ? void 0 : e.size) > 1) &&
                o.push("all" === f ? d.format("selectedAll") : d.format("selectedCount", { count: f.size })),
                o.length > 0 && (0, i.iP)(o.join(" ")),
                (p.current = f);
        });
    (0, o.w)(() => {
        if (t.selectionManager.isFocused) h();
        else {
            let e = requestAnimationFrame(h);
            return () => cancelAnimationFrame(e);
        }
    }, [f, t.selectionManager.isFocused]);
}
function c(e, t) {
    let n = new Set();
    if ("all" === e || "all" === t) return n;
    for (let r of e.keys()) t.has(r) || n.add(r);
    return n;
}
