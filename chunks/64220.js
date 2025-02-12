n.d(t, { Z: () => d }), n(47120);
var i = n(200651),
    l = n(192379),
    r = n(481060),
    a = n(921944),
    s = n(388032),
    o = n(369889);
function c(e) {
    let { markAsDismissed: t } = e;
    return (
        l.useEffect(() => {
            let e = setTimeout(() => {
                t(a.L.AUTO_DISMISS);
            }, 8000);
            return () => {
                clearTimeout(e);
            };
        }, [t]),
        (0, i.jsxs)(r.P3F, {
            className: o.container,
            onClick: () => {
                t(a.L.USER_DISMISS);
            },
            children: [
                (0, i.jsx)(r.Text, {
                    variant: 'text-sm/medium',
                    color: 'always-white',
                    children: s.intl.string(s.t.fJNqJi)
                }),
                (0, i.jsx)('div', { className: o.pointer })
            ]
        })
    );
}
function d(e) {
    let { children: t, markAsDismissed: n } = e,
        [a, s] = l.useState(!1);
    return (
        l.useEffect(() => {
            let e = setTimeout(() => {
                s(!0);
            }, 1000);
            return () => {
                clearTimeout(e);
            };
        }, [s]),
        (0, i.jsx)(r.yRy, {
            position: 'top',
            align: 'left',
            shouldShow: a,
            renderPopout: () => (0, i.jsx)(c, { markAsDismissed: n }),
            children: t
        })
    );
}
