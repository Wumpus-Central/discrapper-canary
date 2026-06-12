"use strict";
n.d(t, { R: () => a });
var i = n(198768),
    r = n(492313),
    s = n(64700);
function a(e) {
    let {
            selectionMode: t = "none",
            disallowEmptySelection: n = !1,
            allowDuplicateSelectionEvents: a,
            selectionBehavior: l = "toggle",
            disabledBehavior: u = "all",
        } = e,
        c = (0, s.useRef)(!1),
        [, d] = (0, s.useState)(!1),
        _ = (0, s.useRef)(null),
        h = (0, s.useRef)(null),
        [, f] = (0, s.useState)(null),
        p = (0, s.useMemo)(() => o(e.selectedKeys), [e.selectedKeys]),
        E = (0, s.useMemo)(() => o(e.defaultSelectedKeys, new (0, i.L)()), [e.defaultSelectedKeys]),
        [m, g] = (0, r.P)(p, E, e.onSelectionChange),
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
                return c.current;
            },
            setFocused(e) {
                (c.current = e), d(e);
            },
            get focusedKey() {
                return _.current;
            },
            get childFocusStrategy() {
                return h.current;
            },
            setFocusedKey(e, t = "first") {
                (_.current = e), (h.current = t), f(e);
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
    return e ? ("all" === e ? "all" : new (0, i.L)(e)) : t;
}
