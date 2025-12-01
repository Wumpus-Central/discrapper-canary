n.d(t, { q: () => s });
var r = n(674279),
    i = n(386239),
    a = n(473749);
function o(e, t) {
    if (e.size !== t.size) return !1;
    for (let n of e) if (!t.has(n)) return !1;
    return !0;
}
function s(e) {
    let {
            selectionMode: t = "none",
            disallowEmptySelection: n = !1,
            allowDuplicateSelectionEvents: s,
            selectionBehavior: c = "toggle",
            disabledBehavior: u = "all",
        } = e,
        d = (0, a.useRef)(!1),
        [, f] = (0, a.useState)(!1),
        p = (0, a.useRef)(null),
        _ = (0, a.useRef)(null),
        [, m] = (0, a.useState)(null),
        h = (0, a.useMemo)(() => l(e.selectedKeys), [e.selectedKeys]),
        g = (0, a.useMemo)(() => l(e.defaultSelectedKeys, new (0, r.Y)()), [e.defaultSelectedKeys]),
        [E, b] = (0, i.z)(h, g, e.onSelectionChange),
        y = (0, a.useMemo)(() => (e.disabledKeys ? new Set(e.disabledKeys) : new Set()), [e.disabledKeys]),
        [O, v] = (0, a.useState)(c);
    "replace" === c && "toggle" === O && "object" == typeof E && 0 === E.size && v("replace");
    let S = (0, a.useRef)(c);
    return (
        (0, a.useEffect)(() => {
            c !== S.current && (v(c), (S.current = c));
        }, [c]),
        {
            selectionMode: t,
            disallowEmptySelection: n,
            selectionBehavior: O,
            setSelectionBehavior: v,
            get isFocused() {
                return d.current;
            },
            setFocused(e) {
                (d.current = e), f(e);
            },
            get focusedKey() {
                return p.current;
            },
            get childFocusStrategy() {
                return _.current;
            },
            setFocusedKey(e, t = "first") {
                (p.current = e), (_.current = t), m(e);
            },
            selectedKeys: E,
            setSelectedKeys(e) {
                (s || !o(e, E)) && b(e);
            },
            disabledKeys: y,
            disabledBehavior: u,
        }
    );
}
function l(e, t) {
    return e ? ("all" === e ? "all" : new (0, r.Y)(e)) : t;
}
