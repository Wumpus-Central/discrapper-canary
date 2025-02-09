n.d(t, { Z: () => u });
var i = n(200651),
    s = n(192379),
    l = n(442837),
    r = n(461745),
    o = n(663389),
    a = n(5967),
    c = n(996733),
    d = n(388032);
function u(e) {
    let { style: t } = e,
        n = (0, c.Z7)(),
        u = s.useCallback((e, t) => {
            t.stopPropagation(), t.preventDefault(), (0, c.QH)(e);
        }, []),
        h = s.useCallback(() => {
            (0, c.QH)(!1), (0, c.yN)('');
        }, []),
        m = s.useRef(null),
        p = (0, l.e7)([o.Z], () => o.Z.getSection());
    return (
        s.useEffect(() => {
            let e = (e) => {
                var t;
                let n = m.current;
                (null === (t = (0, a.uB)(e)) || void 0 === t ? void 0 : t.activeElement) === document.body && (null == n || n.focus());
            };
            return window.addEventListener('keydown', e), () => window.removeEventListener('keydown', e);
        }, [p]),
        (0, i.jsx)('div', {
            style: { marginBottom: '8px' },
            children: (0, i.jsx)(r.ZP, {
                ref: m,
                size: r.ZP.Sizes.MEDIUM,
                query: n,
                onClear: h,
                onQueryChange: c.yN,
                placeholder: d.intl.string(d.t['5h0QOD']),
                className: t,
                inputProps: {
                    'aria-label': d.intl.string(d.t.pk9BWV),
                    'aria-expanded': !0,
                    onFocus: (e) => u(!0, e),
                    onBlur: (e) => u(!1, e)
                }
            })
        })
    );
}
