var n = r(29474),
    i = r(227594),
    o = r(95638),
    a = r(111035),
    s = r(582128);
function l(e, t) {
    let r = new Set();
    if ("all" === e || "all" === t) return r;
    for (let n of e.keys()) t.has(n) || r.add(n);
    return r;
}
r.d(
    t,
    {},
    {
        H: function (e, t) {
            var r;
            let { getRowText: u = (e) => t.collection.getTextValue?.(e) ?? t.collection.getItem(e)?.textValue } = e,
                c = (0, o.o)((r = i.A) && r.__esModule ? r.default : r, "@react-aria/grid"),
                f = t.selectionManager.rawSelection,
                p = (0, s.useRef)(f),
                d = (0, s.useCallback)(() => {
                    if (!t.selectionManager.isFocused || f === p.current) {
                        p.current = f;
                        return;
                    }
                    let e = l(f, p.current),
                        r = l(p.current, f),
                        i = "replace" === t.selectionManager.selectionBehavior,
                        o = [];
                    if (1 === t.selectionManager.selectedKeys.size && i) {
                        let e = t.selectionManager.selectedKeys.keys().next().value;
                        if (null != e && t.collection.getItem(e)) {
                            let t = u(e);
                            t && o.push(c.format("selectedItem", { item: t }));
                        }
                    } else if (1 === e.size && 0 === r.size) {
                        let t = e.keys().next().value;
                        if (null != t) {
                            let e = u(t);
                            e && o.push(c.format("selectedItem", { item: e }));
                        }
                    } else if (1 === r.size && 0 === e.size) {
                        let e = r.keys().next().value;
                        if (null != e && t.collection.getItem(e)) {
                            let t = u(e);
                            t && o.push(c.format("deselectedItem", { item: t }));
                        }
                    }
                    ("multiple" === t.selectionManager.selectionMode &&
                        (0 === o.length || "all" === f || f.size > 1 || "all" === p.current || p.current?.size > 1) &&
                        o.push("all" === f ? c.format("selectedAll") : c.format("selectedCount", { count: f.size })),
                        o.length > 0 && (0, n.iP)(o.join(" ")),
                        (p.current = f));
                }, [
                    f,
                    t.selectionManager.selectedKeys,
                    t.selectionManager.isFocused,
                    t.selectionManager.selectionBehavior,
                    t.selectionManager.selectionMode,
                    t.collection,
                    u,
                    c,
                ]);
            (0, a.w)(() => {
                if (t.selectionManager.isFocused) d();
                else {
                    let e = requestAnimationFrame(d);
                    return () => cancelAnimationFrame(e);
                }
            }, [f, t.selectionManager.isFocused]);
        },
    },
);
