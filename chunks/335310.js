n.d(t, { c: () => r });
var i = n(627968),
    l = n(64700),
    a = n(783878),
    s = n(644079);
function r(e) {
    let { value: t, onChange: n, hideValue: r, disabled: o = !1, ...c } = e,
        d = l.useMemo(() => new s.yz(), []),
        [u, h] = l.useState("");
    function m(e) {
        null != t && n((0, s.Xz)(t, d.selectValue(e)));
    }
    return (0, i.jsx)(a.Z, {
        ...c,
        selectionMode: "single",
        options: d.getOptions(u),
        value: r ? void 0 : d.lookupByValue(t),
        onSelectionChange: m,
        disabled: o,
        onQueryChange: (e) => h(e.target.value),
        onKeyDown: function (e) {
            if ("Enter" === e.key) {
                let e = (0, s.Wb)(t, u);
                null != e && m(e);
            }
        },
    });
}
