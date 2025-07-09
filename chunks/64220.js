(n.d(t, { Z: () => d }), n(388685));
var i = n(255367),
    r = n(73800),
    s = n(481060),
    a = n(921944),
    l = n(388032),
    o = n(548672);
function c(e) {
    let { markAsDismissed: t } = e;
    return (
        r.useEffect(() => {
            let e = setTimeout(() => {
                t(a.L.AUTO_DISMISS);
            }, 8000);
            return () => {
                clearTimeout(e);
            };
        }, [t]),
        (0, i.jsxs)(s.P3F, {
            className: o.container,
            onClick: () => {
                t(a.L.USER_DISMISS);
            },
            children: [
                (0, i.jsx)(s.Text, {
                    variant: 'text-sm/medium',
                    color: 'always-white',
                    children: l.intl.string(l.t.fJNqJi)
                }),
                (0, i.jsx)('div', { className: o.pointer })
            ]
        })
    );
}
function d(e) {
    let { children: t, markAsDismissed: n, targetElementRef: a } = e,
        [l, o] = r.useState(!1);
    return (
        r.useEffect(() => {
            let e = setTimeout(() => {
                o(!0);
            }, 1000);
            return () => {
                clearTimeout(e);
            };
        }, [o]),
        (0, i.jsx)(s.yRy, {
            targetElementRef: a,
            position: 'top',
            align: 'left',
            shouldShow: l,
            renderPopout: () => (0, i.jsx)(c, { markAsDismissed: n }),
            children: t
        })
    );
}
