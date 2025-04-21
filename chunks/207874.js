n.d(t, { Z: () => d });
var r = n(200651),
    i = n(192379),
    s = n(442837),
    o = n(461745),
    l = n(663389),
    a = n(5967),
    c = n(996733),
    u = n(388032);
function d(e) {
    let { style: t } = e,
        n = (0, c.Z7)(),
        d = i.useCallback((e, t) => {
            t.stopPropagation(), t.preventDefault(), (0, c.QH)(e);
        }, []),
        f = i.useCallback(() => {
            (0, c.QH)(!1), (0, c.yN)('');
        }, []),
        p = i.useRef(null),
        g = (0, s.e7)([l.Z], () => l.Z.getSection());
    return (
        i.useEffect(() => {
            let e = (e) => {
                var t;
                let n = p.current;
                (null == (t = (0, a.uB)(e)) ? void 0 : t.activeElement) === document.body && (null == n || n.focus());
            };
            return window.addEventListener('keydown', e), () => window.removeEventListener('keydown', e);
        }, [g]),
        (0, r.jsx)('div', {
            style: { marginBottom: '8px' },
            children: (0, r.jsx)(o.ZP, {
                ref: p,
                size: o.ZP.Sizes.MEDIUM,
                query: n,
                onClear: f,
                onQueryChange: c.yN,
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
