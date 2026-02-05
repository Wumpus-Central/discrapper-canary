"use strict";
n.d(t, { R: () => o });
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
            selectionBehavior: u = "toggle",
            disabledBehavior: c = "all",
        } = e,
        d = (0, a.useRef)(!1),
        [, _] = (0, a.useState)(!1),
        f = (0, a.useRef)(null),
        p = (0, a.useRef)(null),
        [, h] = (0, a.useState)(null),
        m = (0, a.useMemo)(() => l(e.selectedKeys), [e.selectedKeys]),
        g = (0, a.useMemo)(() => l(e.defaultSelectedKeys, new (0, r.L)()), [e.defaultSelectedKeys]),
        [E, A] = (0, i.P)(m, g, e.onSelectionChange),
        I = (0, a.useMemo)(() => (e.disabledKeys ? new Set(e.disabledKeys) : new Set()), [e.disabledKeys]),
        [T, y] = (0, a.useState)(u);
    "replace" === u && "toggle" === T && "object" == typeof E && 0 === E.size && y("replace");
    let S = (0, a.useRef)(u);
    return (
        (0, a.useEffect)(() => {
            u !== S.current && (y(u), (S.current = u));
        }, [u]),
        {
            selectionMode: t,
            disallowEmptySelection: n,
            selectionBehavior: T,
            setSelectionBehavior: y,
            get isFocused() {
                return d.current;
            },
            setFocused(e) {
                (d.current = e), _(e);
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
            selectedKeys: E,
            setSelectedKeys(e) {
                (o || !s(e, E)) && A(e);
            },
            disabledKeys: I,
            disabledBehavior: c,
        }
    );
}
function l(e, t) {
    return e ? ("all" === e ? "all" : new (0, r.L)(e)) : t;
}
