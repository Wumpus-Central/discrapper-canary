"use strict";
n.d(t, { H: () => c });
var r = n(199407),
    i = n(217512),
    a = n(959462),
    s = n(98909),
    o = n(47276),
    l = n(64700);
function u(e) {
    return e && e.__esModule ? e.default : e;
}
function c(e, t) {
    let {
            getRowText: n = (e) => {
                var n, r, i, a;
                return null != (a = null == (n = (r = t.collection).getTextValue) ? void 0 : n.call(r, e))
                    ? a
                    : null == (i = t.collection.getItem(e))
                      ? void 0
                      : i.textValue;
            },
        } = e,
        c = (0, o.o)(u(r.A), "@react-aria/grid"),
        _ = t.selectionManager.rawSelection,
        f = (0, l.useRef)(_),
        p = (0, a.J)(() => {
            var e;
            if (!t.selectionManager.isFocused || _ === f.current) {
                f.current = _;
                return;
            }
            let r = d(_, f.current),
                a = d(f.current, _),
                s = "replace" === t.selectionManager.selectionBehavior,
                o = [];
            if (1 === t.selectionManager.selectedKeys.size && s) {
                let e = t.selectionManager.selectedKeys.keys().next().value;
                if (null != e && t.collection.getItem(e)) {
                    let t = n(e);
                    t && o.push(c.format("selectedItem", { item: t }));
                }
            } else if (1 === r.size && 0 === a.size) {
                let e = r.keys().next().value;
                if (null != e) {
                    let t = n(e);
                    t && o.push(c.format("selectedItem", { item: t }));
                }
            } else if (1 === a.size && 0 === r.size) {
                let e = a.keys().next().value;
                if (null != e && t.collection.getItem(e)) {
                    let t = n(e);
                    t && o.push(c.format("deselectedItem", { item: t }));
                }
            }
            "multiple" === t.selectionManager.selectionMode &&
                (0 === o.length ||
                    "all" === _ ||
                    _.size > 1 ||
                    "all" === f.current ||
                    (null == (e = f.current) ? void 0 : e.size) > 1) &&
                o.push("all" === _ ? c.format("selectedAll") : c.format("selectedCount", { count: _.size })),
                o.length > 0 && (0, i.iP)(o.join(" ")),
                (f.current = _);
        });
    (0, s.w)(() => {
        if (t.selectionManager.isFocused) p();
        else {
            let e = requestAnimationFrame(p);
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
