var i = n(477900),
    r = n(582128),
    a = n(789645),
    s = n(693409),
    l = n(457827),
    o = n(792996);
n.d(
    t,
    {},
    {
        A: function (e) {
            let { frameId: t, centerButton: n = !1, ...d } = e,
                c = r.useCallback(() => {
                    (0, l.r)(t);
                }, [t]),
                u = n ? s.l : s.A;
            return (0, i.jsx)(u, {
                ...d,
                isTrayButton: !1,
                onClick: c,
                iconComponent: a.P,
                label: o.intl.string(o.t.cpT0Cq),
            });
        },
    },
);
