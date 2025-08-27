n.d(t, { M: () => s }), n(388685);
var r = n(951288),
    i = n(647438),
    o = n(921349),
    a = n(563040);
function s(e) {
    let { value: t, onChange: n, hideValue: s, disabled: l = !1 } = e,
        c = i.useRef(null),
        u = i.useMemo(() => new a.tR(), []),
        [d, f] = i.useState("");
    function _(e) {
        null != t && n((0, a.rK)(t, u.selectValue(e)));
    }
    function p(e) {
        if ("Enter" === e.key) {
            let e = (0, a.tj)(t, d);
            if (null != e) {
                var n;
                _(e), null == (n = c.current) || n.close();
            }
        }
    }
    return (0, r.jsx)(o.V, {
        ref: c,
        options: u.getOptions(d),
        value: s ? void 0 : u.lookupByValue(t),
        onChange: _,
        isDisabled: l,
        onSearchChange: f,
        onKeyDown: p,
    });
}
