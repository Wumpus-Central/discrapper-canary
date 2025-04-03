n.d(t, { Z: () => d }), n(47120);
var r = n(200651),
    i = n(192379),
    s = n(481060),
    a = n(921944),
    l = n(388032),
    o = n(548672);
function c(e) {
    let { markAsDismissed: t } = e;
    return (
        i.useEffect(() => {
            let e = setTimeout(() => {
                t(a.L.AUTO_DISMISS);
            }, 8000);
            return () => {
                clearTimeout(e);
            };
        }, [t]),
        (0, r.jsxs)(s.P3F, {
            className: o.container,
            onClick: () => {
                t(a.L.USER_DISMISS);
            },
            children: [
                (0, r.jsx)(s.Text, {
                    variant: 'text-sm/medium',
                    color: 'always-white',
                    children: l.NW.string(l.t.fJNqJi)
                }),
                (0, r.jsx)('div', { className: o.pointer })
            ]
        })
    );
}
function d(e) {
    let { children: t, markAsDismissed: n } = e,
        [a, l] = i.useState(!1);
    return (
        i.useEffect(() => {
            let e = setTimeout(() => {
                l(!0);
            }, 1000);
            return () => {
                clearTimeout(e);
            };
        }, [l]),
        (0, r.jsx)(s.yRy, {
            position: 'top',
            align: 'left',
            shouldShow: a,
            renderPopout: () => (0, r.jsx)(c, { markAsDismissed: n }),
            children: t
        })
    );
}
