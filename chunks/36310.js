n.d(t, {
    R: () => o,
});
var r = n(198768),
    i = n(492313),
    a = n(64700);

function s(e, t) {
    if (e.size !== t.size) return !1;
    for (let n of e) if (!t.has(n)) return !1;
    return !0;
}

function o(e) {
    let {
            selectionMode: t = "none",
            disallowEmptySelection: n = !1,
            allowDuplicateSelectionEvents: o,
            selectionBehavior: c = "toggle",
            disabledBehavior: u = "all",
        } = e,
        d = (0, a.useRef)(!1),
        [, f] = (0, a.useState)(!1),
        p = (0, a.useRef)(null),
        _ = (0, a.useRef)(null),
        [, h] = (0, a.useState)(null),
        m = (0, a.useMemo)(() => l(e.selectedKeys), [e.selectedKeys]),
        g = (0, a.useMemo)(() => l(e.defaultSelectedKeys, new (0, r.L)()), [e.defaultSelectedKeys]),
        [E, b] = (0, i.P)(m, g, e.onSelectionChange),
        y = (0, a.useMemo)(() => (e.disabledKeys ? new Set(e.disabledKeys) : new Set()), [e.disabledKeys]),
        [O, A] = (0, a.useState)(c);
    "replace" === c && "toggle" === O && "object" == typeof E && 0 === E.size && A("replace");
    let v = (0, a.useRef)(c);
    return (
        (0, a.useEffect)(() => {
            c !== v.current && (A(c), (v.current = c));
        }, [c]),
        {
            selectionMode: t,
            disallowEmptySelection: n,
            selectionBehavior: O,
            setSelectionBehavior: A,
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
                (p.current = e), (_.current = t), h(e);
            },
            selectedKeys: E,
            setSelectedKeys(e) {
                (o || !s(e, E)) && b(e);
            },
            disabledKeys: y,
            disabledBehavior: u,
        }
    );
}

function l(e, t) {
    return e ? ("all" === e ? "all" : new (0, r.L)(e)) : t;
}
