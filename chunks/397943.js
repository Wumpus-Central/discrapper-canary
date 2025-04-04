n.d(t, { M: () => l }), n(47120);
var r = n(200651),
    i = n(192379),
    o = n(921349),
    a = n(563040),
    s = n(963075);
function l(e) {
    let { value: t, onChange: n, hideValue: l, disabled: c = !1 } = e,
        u = i.useRef(null),
        d = i.useMemo(() => new a.tR(), []),
        [f, _] = i.useState('');
    function p(e) {
        null != t && n((0, a.rK)(t, d.selectValue(e)));
    }
    function h(e) {
        if ('Enter' === e.key) {
            let e = (0, a.tj)(t, f);
            if (null != e) {
                var n;
                p(e), null == (n = u.current) || n.close();
            }
        }
    }
    return (0, r.jsx)(o.V, {
        ref: u,
        className: s.select,
        options: d.getOptions(f),
        value: l ? void 0 : d.lookupByValue(t),
        onChange: p,
        isDisabled: c,
        onSearchChange: _,
        onKeyDown: h
    });
}
