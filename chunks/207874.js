r.d(t, { Z: () => v });
var n = r(200651),
    i = r(192379),
    s = r(442837),
    o = r(461745),
    l = r(663389),
    a = r(5967),
    c = r(996733),
    h = r(388032);
function v(e) {
    let { style: t } = e,
        r = (0, c.Z7)(),
        v = i.useCallback((e, t) => {
            t.stopPropagation(), t.preventDefault(), (0, c.QH)(e);
        }, []),
        u = i.useCallback(() => {
            (0, c.QH)(!1), (0, c.yN)('');
        }, []),
        f = i.useRef(null),
        p = (0, s.e7)([l.Z], () => l.Z.getSection());
    return (
        i.useEffect(() => {
            let e = (e) => {
                var t;
                let r = f.current;
                (null == (t = (0, a.uB)(e)) ? void 0 : t.activeElement) === document.body && (null == r || r.focus());
            };
            return window.addEventListener('keydown', e), () => window.removeEventListener('keydown', e);
        }, [p]),
        (0, n.jsx)('div', {
            style: { marginBottom: '8px' },
            children: (0, n.jsx)(o.ZP, {
                ref: f,
                size: o.ZP.Sizes.MEDIUM,
                query: r,
                onClear: u,
                onQueryChange: c.yN,
                placeholder: h.NW.string(h.t['5h0QOD']),
                className: t,
                inputProps: {
                    'aria-label': h.NW.string(h.t.pk9BWV),
                    'aria-expanded': !0,
                    onFocus: (e) => v(!0, e),
                    onBlur: (e) => v(!1, e)
                }
            })
        })
    );
}
