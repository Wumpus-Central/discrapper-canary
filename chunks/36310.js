"use strict";
n.d(t, { R: () => a });
var r = n(198768),
    i = n(492313),
    s = n(64700);
function a(e) {
    let {
            selectionMode: t = "none",
            disallowEmptySelection: n = !1,
            allowDuplicateSelectionEvents: a,
            selectionBehavior: l = "toggle",
            disabledBehavior: u = "all",
        } = e,
        d = (0, s.useRef)(!1),
        [, c] = (0, s.useState)(!1),
        _ = (0, s.useRef)(null),
        f = (0, s.useRef)(null),
        [, E] = (0, s.useState)(null),
        h = (0, s.useMemo)(() => o(e.selectedKeys), [e.selectedKeys]),
        p = (0, s.useMemo)(() => o(e.defaultSelectedKeys, new (0, r.L)()), [e.defaultSelectedKeys]),
        [m, g] = (0, i.P)(h, p, e.onSelectionChange),
        A = (0, s.useMemo)(() => (e.disabledKeys ? new Set(e.disabledKeys) : new Set()), [e.disabledKeys]),
        [I, T] = (0, s.useState)(l);
    "replace" === l && "toggle" === I && "object" == typeof m && 0 === m.size && T("replace");
    let S = (0, s.useRef)(l);
    return (
        (0, s.useEffect)(() => {
            l !== S.current && (T(l), (S.current = l));
        }, [l]),
        {
            selectionMode: t,
            disallowEmptySelection: n,
            selectionBehavior: I,
            setSelectionBehavior: T,
            get isFocused() {
                return d.current;
            },
            setFocused(e) {
                (d.current = e), c(e);
            },
            get focusedKey() {
                return _.current;
            },
            get childFocusStrategy() {
                return f.current;
            },
            setFocusedKey(e, t = "first") {
                (_.current = e), (f.current = t), E(e);
            },
            selectedKeys: m,
            setSelectedKeys(e) {
                (a ||
                    !(function (e, t) {
                        if (e.size !== t.size) return !1;
                        for (let n of e) if (!t.has(n)) return !1;
                        return !0;
                    })(e, m)) &&
                    g(e);
            },
            disabledKeys: A,
            disabledBehavior: u,
        }
    );
}
function o(e, t) {
    return e ? ("all" === e ? "all" : new (0, r.L)(e)) : t;
}
