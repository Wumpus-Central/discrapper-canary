n.d(t, { Z: () => d });
var s = n(200651),
    r = n(192379),
    i = n(442837),
    o = n(461745),
    c = n(663389),
    a = n(5967),
    l = n(996733),
    u = n(388032);
function d(e) {
    let { style: t } = e,
        n = (0, l.Z7)(),
        d = r.useCallback((e, t) => {
            t.stopPropagation(), t.preventDefault(), (0, l.QH)(e);
        }, []),
        p = r.useCallback(() => {
            (0, l.QH)(!1), (0, l.yN)('');
        }, []),
        f = r.useRef(null),
        b = (0, i.e7)([c.Z], () => c.Z.getSection());
    return (
        r.useEffect(() => {
            let e = (e) => {
                var t;
                let n = f.current;
                (null === (t = (0, a.uB)(e)) || void 0 === t ? void 0 : t.activeElement) === document.body && (null == n || n.focus());
            };
            return window.addEventListener('keydown', e), () => window.removeEventListener('keydown', e);
        }, [b]),
        (0, s.jsx)('div', {
            style: { marginBottom: '8px' },
            children: (0, s.jsx)(o.ZP, {
                ref: f,
                size: o.ZP.Sizes.MEDIUM,
                query: n,
                onClear: p,
                onQueryChange: l.yN,
                placeholder: u.NW.string(u.t['5h0QOD']),
                className: t,
                inputProps: {
                    'aria-label': u.NW.string(u.t.pk9BWV),
                    'aria-expanded': !0,
                    onFocus: (e) => d(!0, e),
                    onBlur: (e) => d(!1, e)
                }
            })
        })
    );
}
