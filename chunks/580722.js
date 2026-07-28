"use strict";
n.d(t, { R: () => o });
var r = n(353428),
    i = n(992533),
    a = n(582128);
function o(e) {
    let {
            selectionMode: t = "none",
            disallowEmptySelection: n = !1,
            allowDuplicateSelectionEvents: o,
            selectionBehavior: l = "toggle",
            disabledBehavior: u = "all",
        } = e,
        c = (0, a.useRef)(!1),
        [, d] = (0, a.useState)(!1),
        f = (0, a.useRef)(null),
        p = (0, a.useRef)(null),
        [, h] = (0, a.useState)(null),
        m = (0, a.useMemo)(() => s(e.selectedKeys), [e.selectedKeys]),
        g = (0, a.useMemo)(() => s(e.defaultSelectedKeys, new (0, r.L)()), [e.defaultSelectedKeys]),
        [v, y] = (0, i.P)(m, g, e.onSelectionChange),
        b = (0, a.useMemo)(() => (e.disabledKeys ? new Set(e.disabledKeys) : new Set()), [e.disabledKeys]),
        [_, w] = (0, a.useState)(l);
    "replace" === l && "toggle" === _ && "object" == typeof v && 0 === v.size && w("replace");
    let x = (0, a.useRef)(l);
    return (
        (0, a.useEffect)(() => {
            l !== x.current && (w(l), (x.current = l));
        }, [l]),
        {
            selectionMode: t,
            disallowEmptySelection: n,
            selectionBehavior: _,
            setSelectionBehavior: w,
            get isFocused() {
                return c.current;
            },
            setFocused(e) {
                (c.current = e), d(e);
            },
            get focusedKey() {
                return f.current;
            },
            get childFocusStrategy() {
                return p.current;
            },
            setFocusedKey(e, t = "first") {
                (f.current = e), (p.current = t), h(e);
            },
            selectedKeys: v,
            setSelectedKeys(e) {
                (o ||
                    !(function (e, t) {
                        if (e.size !== t.size) return !1;
                        for (let n of e) if (!t.has(n)) return !1;
                        return !0;
                    })(e, v)) &&
                    y(e);
            },
            disabledKeys: b,
            disabledBehavior: u,
        }
    );
}
function s(e, t) {
    return e ? ("all" === e ? "all" : new (0, r.L)(e)) : t;
}
