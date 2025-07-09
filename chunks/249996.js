n.d(t, { Z: () => d });
var i = n(255367),
    r = n(73800),
    s = n(657707),
    a = n(524437),
    l = n(481060),
    o = n(486135);
function c(e) {
    let { redactionType: t, label: n } = e,
        c = r.useMemo(() => {
            switch (t) {
                case a.Q4.BLUR:
                    return s.XBm;
                case a.Q4.BLOCK:
                    return s.t6m;
                case a.Q4.SHOW:
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
            (0, i.jsx)(l.Text, {
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
