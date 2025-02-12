n.d(t, { M: () => l }), n(47120);
var i = n(200651),
    r = n(192379),
    a = n(921349),
    s = n(563040),
    o = n(392738);
function l(e) {
    let { value: t, onChange: n, hideValue: l, disabled: u = !1 } = e,
        c = r.useRef(null),
        d = r.useMemo(() => new s.tR(), []),
        [f, _] = r.useState('');
    function p(e) {
        null != t && n((0, s.rK)(t, d.selectValue(e)));
    }
    function h(e) {
        if ('Enter' === e.key) {
            let e = (0, s.tj)(t, f);
            if (null != e) {
                var n;
                p(e), null === (n = c.current) || void 0 === n || n.close();
            }
        }
    }
    return (0, i.jsx)(a.V, {
        ref: c,
        className: o.select,
        options: d.getOptions(f),
        value: l ? void 0 : d.lookupByValue(t),
        onChange: p,
        isDisabled: u,
        onSearchChange: _,
        onKeyDown: h
    });
}
