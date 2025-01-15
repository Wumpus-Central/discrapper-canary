n.d(t, {
    Z: function () {
        return d;
    }
});
var s = n(200651),
    i = n(192379),
    r = n(442837),
    o = n(461745),
    c = n(663389),
    l = n(5967),
    a = n(996733),
    u = n(388032);
function d(e) {
    let { style: t } = e,
        n = (0, a.Z7)(),
        d = i.useCallback((e, t) => {
            t.stopPropagation(), t.preventDefault(), (0, a.QH)(e);
        }, []),
        f = i.useCallback(() => {
            (0, a.QH)(!1), (0, a.yN)('');
        }, []),
        p = i.useRef(null),
        g = (0, r.e7)([c.Z], () => c.Z.getSection());
    return (
        i.useEffect(() => {
            let e = (e) => {
                var t;
                let n = p.current;
                (null === (t = (0, l.uB)(e)) || void 0 === t ? void 0 : t.activeElement) === document.body && (null == n || n.focus());
            };
            return window.addEventListener('keydown', e), () => window.removeEventListener('keydown', e);
        }, [g]),
        (0, s.jsx)('div', {
            style: { marginBottom: '8px' },
            children: (0, s.jsx)(o.ZP, {
                ref: p,
                size: o.ZP.Sizes.MEDIUM,
                query: n,
                onClear: f,
                onQueryChange: a.yN,
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
