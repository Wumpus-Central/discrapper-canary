s.d(t, {
    Z: function () {
        return d;
    }
});
var n = s(200651),
    i = s(192379),
    r = s(442837),
    o = s(461745),
    c = s(663389),
    a = s(5967),
    l = s(996733),
    u = s(388032);
function d(e) {
    let { style: t } = e,
        s = (0, l.Z7)(),
        d = i.useCallback((e, t) => {
            t.stopPropagation(), t.preventDefault(), (0, l.QH)(e);
        }, []),
        f = i.useCallback(() => {
            (0, l.QH)(!1), (0, l.yN)('');
        }, []),
        p = i.useRef(null),
        g = (0, r.e7)([c.Z], () => c.Z.getSection());
    return (
        i.useEffect(() => {
            let e = (e) => {
                var t;
                let s = p.current;
                (null === (t = (0, a.uB)(e)) || void 0 === t ? void 0 : t.activeElement) === document.body && (null == s || s.focus());
            };
            return window.addEventListener('keydown', e), () => window.removeEventListener('keydown', e);
        }, [g]),
        (0, n.jsx)('div', {
            style: { marginBottom: '8px' },
            children: (0, n.jsx)(o.ZP, {
                ref: p,
                size: o.ZP.Sizes.MEDIUM,
                query: s,
                onClear: f,
                onQueryChange: l.yN,
                placeholder: u.intl.string(u.t['5h0QOD']),
                className: t,
                inputProps: {
                    'aria-label': u.intl.string(u.t.pk9BWV),
                    'aria-expanded': !0,
                    onFocus: (e) => d(!0, e),
                    onBlur: (e) => d(!1, e)
                }
            })
        })
    );
}
