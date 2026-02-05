"use strict";
n.d(t, { c: () => o });
var r = n(627968),
    i = n(64700),
    a = n(397927),
    s = n(644079);
function o(e) {
    let { value: t, onChange: n, hideValue: o, disabled: l = !1, ...u } = e,
        c = i.useMemo(() => new s.yz(), []),
        [d, _] = i.useState("");
    function f(e) {
        null != t && n((0, s.Xz)(t, c.selectValue(e)));
    }
    function p(e) {
        if ("Enter" === e.key) {
            let e = (0, s.Wb)(t, d);
            null != e && f(e);
        }
    }
    return (0, r.jsx)(a.ZiE, {
        ...u,
        selectionMode: "single",
        options: c.getOptions(d),
        value: o ? void 0 : c.lookupByValue(t),
        onSelectionChange: f,
        disabled: l,
        onQueryChange: (e) => _(e.target.value),
        onKeyDown: p,
    });
}
