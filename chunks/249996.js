n.d(t, { Z: () => d });
var i = n(255367),
    r = n(73800),
    s = n(657707),
    l = n(524437),
    a = n(481060),
    o = n(486135);
function c(e) {
    let { redactionType: t, label: n } = e,
        c = r.useMemo(() => {
            switch (t) {
                case l.Q4.BLUR:
                    return s.XBm;
                case l.Q4.BLOCK:
                    return s.t6m;
                case l.Q4.SHOW:
                    return s.tEF;
                default:
                    return null;
            }
        }, [t]);
    return (0, i.jsxs)('div', {
        className: o.rowContainer,
        children: [
            null != c &&
                (0, i.jsx)(c, {
                    size: 'xs',
                    color: 'currentColor'
                }),
            (0, i.jsx)(a.Text, {
                variant: 'text-md/normal',
                color: 'header-secondary',
                children: n
            })
        ]
    });
}
let d = r.memo(function (e) {
    let { option: t } = e;
    return (0, i.jsx)(c, {
        redactionType: t.value,
        label: t.label
    });
});
