r.d(n, {
    D: function () {
        return l;
    }
});
var i = r(661763),
    a = r(239700),
    o = r(523603),
    s = r(649859);
function l(e) {
    let { value: n = 0, minValue: r = 0, maxValue: l = 100, valueLabel: u, isIndeterminate: c, formatOptions: d = { style: 'percent' } } = e,
        f = (0, i.zL)(e, { labelable: !0 }),
        { labelProps: p, fieldProps: h } = (0, o.N)({
            ...e,
            labelElementType: 'span'
        }),
        _ = ((n = (0, a.uZ)(n, r, l)) - r) / (l - r),
        m = (0, s.Ux)(d);
    if (!c && !u) {
        let e = 'percent' === d.style ? _ : n;
        u = m.format(e);
    }
    return {
        progressBarProps: (0, i.dG)(f, {
            ...h,
            'aria-valuenow': c ? void 0 : n,
            'aria-valuemin': r,
            'aria-valuemax': l,
            'aria-valuetext': c ? void 0 : u,
            role: 'progressbar'
        }),
        labelProps: p
    };
}
