s.d(t, { Z: () => d });
var n = s(200651),
    i = s(192379),
    r = s(442837),
    a = s(461745),
    o = s(663389),
    l = s(5967),
    c = s(996733),
    u = s(388032);
function d(e) {
    let { style: t } = e,
        s = (0, c.Z7)(),
        d = i.useCallback((e, t) => {
            t.stopPropagation(), t.preventDefault(), (0, c.QH)(e);
        }, []),
        p = i.useCallback(() => {
            (0, c.QH)(!1), (0, c.yN)('');
        }, []),
        f = i.useRef(null),
        g = (0, r.e7)([o.Z], () => o.Z.getSection());
    return (
        i.useEffect(() => {
            let e = (e) => {
                var t;
                let s = f.current;
                (null === (t = (0, l.uB)(e)) || void 0 === t ? void 0 : t.activeElement) === document.body && (null == s || s.focus());
            };
            return window.addEventListener('keydown', e), () => window.removeEventListener('keydown', e);
        }, [g]),
        (0, n.jsx)('div', {
            style: { marginBottom: '8px' },
            children: (0, n.jsx)(a.ZP, {
                ref: f,
                size: a.ZP.Sizes.MEDIUM,
                query: s,
                onClear: p,
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
