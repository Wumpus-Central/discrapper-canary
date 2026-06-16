"use strict";
n.d(t, { H: () => u });
var i = n(898670),
    r = n(959611),
    s = n(959462),
    a = n(98909),
    o = n(47276),
    l = n(64700);
function u(e, t) {
    var n;
    let {
            getRowText: u = (e) => {
                var n, i, r, s;
                return null != (s = null == (n = (i = t.collection).getTextValue) ? void 0 : n.call(i, e))
                    ? s
                    : null == (r = t.collection.getItem(e))
                      ? void 0
                      : r.textValue;
            },
        } = e,
        d = (0, o.o)((n = i.A) && n.__esModule ? n.default : n, "@react-aria/grid"),
        _ = t.selectionManager.rawSelection,
        h = (0, l.useRef)(_),
        f = (0, s.J)(() => {
            var e;
            if (!t.selectionManager.isFocused || _ === h.current) {
                h.current = _;
                return;
            }
            let n = c(_, h.current),
                i = c(h.current, _),
                s = "replace" === t.selectionManager.selectionBehavior,
                a = [];
            if (1 === t.selectionManager.selectedKeys.size && s) {
                let e = t.selectionManager.selectedKeys.keys().next().value;
                if (null != e && t.collection.getItem(e)) {
                    let t = u(e);
                    t && a.push(d.format("selectedItem", { item: t }));
                }
            } else if (1 === n.size && 0 === i.size) {
                let e = n.keys().next().value;
                if (null != e) {
                    let t = u(e);
                    t && a.push(d.format("selectedItem", { item: t }));
                }
            } else if (1 === i.size && 0 === n.size) {
                let e = i.keys().next().value;
                if (null != e && t.collection.getItem(e)) {
                    let t = u(e);
                    t && a.push(d.format("deselectedItem", { item: t }));
                }
            }
            "multiple" === t.selectionManager.selectionMode &&
                (0 === a.length ||
                    "all" === _ ||
                    _.size > 1 ||
                    "all" === h.current ||
                    (null == (e = h.current) ? void 0 : e.size) > 1) &&
                a.push("all" === _ ? d.format("selectedAll") : d.format("selectedCount", { count: _.size })),
                a.length > 0 && (0, r.iP)(a.join(" ")),
                (h.current = _);
        });
    (0, a.w)(() => {
        if (t.selectionManager.isFocused) f();
        else {
            let e = requestAnimationFrame(f);
            return () => cancelAnimationFrame(e);
        }
    }, [_, t.selectionManager.isFocused]);
}
function c(e, t) {
    let n = new Set();
    if ("all" === e || "all" === t) return n;
    for (let i of e.keys()) t.has(i) || n.add(i);
    return n;
}
