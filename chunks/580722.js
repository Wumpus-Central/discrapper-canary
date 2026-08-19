"use strict";
r.d(t, { R: () => a });
var n = r(353428),
    o = r(992533),
    i = r(582128);
function a(e) {
    let {
            selectionMode: t = "none",
            disallowEmptySelection: r = !1,
            allowDuplicateSelectionEvents: a,
            selectionBehavior: l = "toggle",
            disabledBehavior: u = "all",
        } = e,
        c = (0, i.useRef)(!1),
        [, f] = (0, i.useState)(!1),
        p = (0, i.useRef)(null),
        d = (0, i.useRef)(null),
        [, h] = (0, i.useState)(null),
        m = (0, i.useMemo)(() => s(e.selectedKeys), [e.selectedKeys]),
        v = (0, i.useMemo)(() => s(e.defaultSelectedKeys, new (0, n.L)()), [e.defaultSelectedKeys]),
        [y, g] = (0, o.P)(m, v, e.onSelectionChange),
        b = (0, i.useMemo)(() => (e.disabledKeys ? new Set(e.disabledKeys) : new Set()), [e.disabledKeys]),
        [w, _] = (0, i.useState)(l);
    "replace" === l && "toggle" === w && "object" == typeof y && 0 === y.size && _("replace");
    let S = (0, i.useRef)(l);
    return (
        (0, i.useEffect)(() => {
            l !== S.current && (_(l), (S.current = l));
        }, [l]),
        {
            selectionMode: t,
            disallowEmptySelection: r,
            selectionBehavior: w,
            setSelectionBehavior: _,
            get isFocused() {
                return c.current;
            },
            setFocused(e) {
                (c.current = e), f(e);
            },
            get focusedKey() {
                return p.current;
            },
            get childFocusStrategy() {
                return d.current;
            },
            setFocusedKey(e, t = "first") {
                (p.current = e), (d.current = t), h(e);
            },
            selectedKeys: y,
            setSelectedKeys(e) {
                (a ||
                    !(function (e, t) {
                        if (e.size !== t.size) return !1;
                        for (let r of e) if (!t.has(r)) return !1;
                        return !0;
                    })(e, y)) &&
                    g(e);
            },
            disabledKeys: b,
            disabledBehavior: u,
        }
    );
}
function s(e, t) {
    return e ? ("all" === e ? "all" : new (0, n.L)(e)) : t;
}
