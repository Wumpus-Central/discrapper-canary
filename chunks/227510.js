n.d(t, {
    H: () => u,
});
var r = n(199407),
    i = n(217512),
    a = n(959462),
    s = n(98909),
    o = n(47276),
    l = n(64700);

function c(e) {
    return e && e.__esModule ? e.default : e;
}

function u(e, t) {
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
        u = (0, o.o)(c(r.A), "@react-aria/grid"),
        f = t.selectionManager.rawSelection,
        p = (0, l.useRef)(f),
        _ = (0, a.J)(() => {
            var e;
            if (!t.selectionManager.isFocused || f === p.current) {
                p.current = f;
                return;
            }
            let r = d(f, p.current),
                a = d(p.current, f),
                s = "replace" === t.selectionManager.selectionBehavior,
                o = [];
            if (1 === t.selectionManager.selectedKeys.size && s) {
                let e = t.selectionManager.selectedKeys.keys().next().value;
                if (null != e && t.collection.getItem(e)) {
                    let t = n(e);
                    t &&
                        o.push(
                            u.format("selectedItem", {
                                item: t,
                            }),
                        );
                }
            } else if (1 === r.size && 0 === a.size) {
                let e = r.keys().next().value;
                if (null != e) {
                    let t = n(e);
                    t &&
                        o.push(
                            u.format("selectedItem", {
                                item: t,
                            }),
                        );
                }
            } else if (1 === a.size && 0 === r.size) {
                let e = a.keys().next().value;
                if (null != e && t.collection.getItem(e)) {
                    let t = n(e);
                    t &&
                        o.push(
                            u.format("deselectedItem", {
                                item: t,
                            }),
                        );
                }
            }
            "multiple" === t.selectionManager.selectionMode &&
                (0 === o.length ||
                    "all" === f ||
                    f.size > 1 ||
                    "all" === p.current ||
                    (null == (e = p.current) ? void 0 : e.size) > 1) &&
                o.push(
                    "all" === f
                        ? u.format("selectedAll")
                        : u.format("selectedCount", {
                              count: f.size,
                          }),
                ),
                o.length > 0 && (0, i.iP)(o.join(" ")),
                (p.current = f);
        });
    (0, s.w)(() => {
        if (t.selectionManager.isFocused) _();
        else {
            let e = requestAnimationFrame(_);
            return () => cancelAnimationFrame(e);
        }
    }, [f, t.selectionManager.isFocused]);
}

function d(e, t) {
    let n = new Set();
    if ("all" === e || "all" === t) return n;
    for (let r of e.keys()) t.has(r) || n.add(r);
    return n;
}
