r.d(n, {
    M: function () {
        return c;
    }
});
var i = r(47120);
var a = r(200651),
    o = r(192379),
    s = r(921349),
    l = r(563040),
    u = r(188607);
function c(e) {
    let { value: n, onChange: r, hideValue: i, disabled: c = !1 } = e,
        d = o.useRef(null),
        f = o.useMemo(() => new l.tR(), []),
        [p, h] = o.useState('');
    function _(e) {
        null != n && r((0, l.rK)(n, f.selectValue(e)));
    }
    function m(e) {
        if ('Enter' === e.key) {
            let e = (0, l.tj)(n, p);
            if (null != e) {
                var r;
                _(e), null === (r = d.current) || void 0 === r || r.close();
            }
        }
    }
    return (0, a.jsx)(s.V, {
        ref: d,
        className: u.select,
        options: f.getOptions(p),
        value: i ? void 0 : f.lookupByValue(n),
        onChange: _,
        isDisabled: c,
        onSearchChange: h,
        onKeyDown: m
    });
}
