s.d(t, { Z: () => d });
var r = s(200651),
    n = s(192379),
    i = s(442837),
    o = s(461745),
    l = s(663389),
    a = s(5967),
    c = s(996733),
    u = s(388032);
function d(e) {
    let { style: t } = e,
        s = (0, c.Z7)(),
        d = n.useCallback((e, t) => {
            t.stopPropagation(), t.preventDefault(), (0, c.QH)(e);
        }, []),
        p = n.useCallback(() => {
            (0, c.QH)(!1), (0, c.yN)('');
        }, []),
        f = n.useRef(null),
        b = (0, i.e7)([l.Z], () => l.Z.getSection());
    return (
        n.useEffect(() => {
            let e = (e) => {
                var t;
                let s = f.current;
                (null == (t = (0, a.uB)(e)) ? void 0 : t.activeElement) === document.body && (null == s || s.focus());
            };
            return window.addEventListener('keydown', e), () => window.removeEventListener('keydown', e);
        }, [b]),
        (0, r.jsx)('div', {
            style: { marginBottom: '8px' },
            children: (0, r.jsx)(o.ZP, {
                ref: f,
                size: o.ZP.Sizes.MEDIUM,
                query: s,
                onClear: p,
                onQueryChange: c.yN,
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
