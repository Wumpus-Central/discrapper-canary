r.d(n, {
    M: function () {
        return c;
    }
});
var i = r(47120);
var a = r(200651),
    s = r(192379),
    o = r(921349),
    l = r(563040),
    u = r(188607);
function c(e) {
    let { value: n, onChange: r, hideValue: i, disabled: c = !1 } = e,
        d = s.useRef(null),
        f = s.useMemo(() => new l.tR(), []),
        [_, h] = s.useState('');
    function p(e) {
        null != n && r((0, l.rK)(n, f.selectValue(e)));
    }
    function m(e) {
        if ('Enter' === e.key) {
            let e = (0, l.tj)(n, _);
            if (null != e) {
                var r;
                p(e), null === (r = d.current) || void 0 === r || r.close();
            }
        }
    }
    return (0, a.jsx)(o.V, {
        ref: d,
        className: u.select,
        options: f.getOptions(_),
        value: i ? void 0 : f.lookupByValue(n),
        onChange: p,
        isDisabled: c,
        onSearchChange: h,
        onKeyDown: m
    });
}
