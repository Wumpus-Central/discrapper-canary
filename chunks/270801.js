n.d(t, { Z: () => c });
var i = n(200651);
n(192379);
var l = n(481060),
    a = n(313201),
    r = n(388032),
    s = n(971854);
let o = () =>
        n
            .e('49812')
            .then(n.t.bind(n, 48603, 19))
            .then((e) => {
                let { default: t } = e;
                return t;
            }),
    c = (e) => {
        let t = (0, a.Dt)();
        return (0, i.jsxs)(l.Y0X, {
            ...e,
            size: l.CgR.SMALL,
            transitionState: e.transitionState,
            'aria-labelledby': t,
            className: s.modal,
            children: [
                (0, i.jsx)('div', {
                    className: s.animationContainer,
                    children: (0, i.jsx)(l.Fmz, {
                        importData: o,
                        className: s.animationMiddle
                    })
                }),
                (0, i.jsx)(l.hzk, {
                    children: (0, i.jsxs)('div', {
                        className: s.container,
                        children: [
                            (0, i.jsx)(l.X6q, {
                                variant: 'heading-lg/semibold',
                                className: s.header,
                                id: t,
                                children: r.intl.format(r.t.z9qozM, { guildName: e.guildName })
                            }),
                            (0, i.jsx)(l.Text, {
                                variant: 'text-sm/medium',
                                color: 'header-secondary',
                                children: r.intl.string(r.t.nwpqyc)
                            }),
                            (0, i.jsx)(l.zxk, {
                                className: s.button,
                                onClick: () => {
                                    e.onAccept(), e.onClose();
                                },
                                fullWidth: !0,
                                size: l.PhG.LARGE,
                                children: r.intl.string(r.t.NuzmOD)
                            })
                        ]
                    })
                })
            ]
        });
    };
