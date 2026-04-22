"use strict";
n.d(t, { H: () => u });
var r = n(199407),
    i = n(217512),
    s = n(959462),
    a = n(98909),
    o = n(47276),
    l = n(64700);
function u(e, t) {
    var n;
    let {
            getRowText: u = (e) => {
                var n, r, i, s;
                return null != (s = null == (n = (r = t.collection).getTextValue) ? void 0 : n.call(r, e))
                    ? s
                    : null == (i = t.collection.getItem(e))
                      ? void 0
                      : i.textValue;
            },
        } = e,
        c = (0, o.o)((n = r.A) && n.__esModule ? n.default : n, "@react-aria/grid"),
        _ = t.selectionManager.rawSelection,
        f = (0, l.useRef)(_),
        E = (0, s.J)(() => {
            var e;
            if (!t.selectionManager.isFocused || _ === f.current) {
                f.current = _;
                return;
            }
            let n = d(_, f.current),
                r = d(f.current, _),
                s = "replace" === t.selectionManager.selectionBehavior,
                a = [];
            if (1 === t.selectionManager.selectedKeys.size && s) {
                let e = t.selectionManager.selectedKeys.keys().next().value;
                if (null != e && t.collection.getItem(e)) {
                    let t = u(e);
                    t && a.push(c.format("selectedItem", { item: t }));
                }
            } else if (1 === n.size && 0 === r.size) {
                let e = n.keys().next().value;
                if (null != e) {
                    let t = u(e);
                    t && a.push(c.format("selectedItem", { item: t }));
                }
            } else if (1 === r.size && 0 === n.size) {
                let e = r.keys().next().value;
                if (null != e && t.collection.getItem(e)) {
                    let t = u(e);
                    t && a.push(c.format("deselectedItem", { item: t }));
                }
            }
            "multiple" === t.selectionManager.selectionMode &&
                (0 === a.length ||
                    "all" === _ ||
                    _.size > 1 ||
                    "all" === f.current ||
                    (null == (e = f.current) ? void 0 : e.size) > 1) &&
                a.push("all" === _ ? c.format("selectedAll") : c.format("selectedCount", { count: _.size })),
                a.length > 0 && (0, i.iP)(a.join(" ")),
                (f.current = _);
        });
    (0, a.w)(() => {
        if (t.selectionManager.isFocused) E();
        else {
            let e = requestAnimationFrame(E);
            return () => cancelAnimationFrame(e);
        }
    }, [_, t.selectionManager.isFocused]);
}
function d(e, t) {
    let n = new Set();
    if ("all" === e || "all" === t) return n;
    for (let r of e.keys()) t.has(r) || n.add(r);
    return n;
}
