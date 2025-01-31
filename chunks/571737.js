n.d(t, { Z: () => h }), n(653041);
var i = n(200651),
    a = n(192379),
    r = n(622535),
    l = n(481060),
    s = n(783097),
    o = n(768581),
    c = n(956965),
    d = n(548514),
    u = n(388032),
    m = n(137762);
let h = function (e) {
    let { application: t, onButtonsVisibilityChange: n } = e,
        h = a.useMemo(
            () =>
                o.ZP.getApplicationIconURL({
                    id: t.id,
                    icon: t.icon,
                    size: 96
                }),
            [t]
        ),
        p = a.useMemo(() => {
            let e = [];
            return (0, s.vJ)(t) && e.push(u.intl.string(u.t.LO4f0N)), (0, s.Cb)(t) && (0 !== e.length && e.push('\u2022'), e.push(u.intl.string(u.t['8z5B2d']))), (0, s.Hu)(t) && (0 !== e.length && e.push('\u2022'), e.push(u.intl.string(u.t['5khEk5']))), e;
        }, [t]);
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(c.Z, {
                application: t,
                bannerType: 'detail',
                iconURL: h
            }),
            (0, i.jsx)('div', {
                className: m.avatarContainer,
                style: { height: 52 },
                children: (0, i.jsx)('img', {
                    src: h,
                    alt: '',
                    className: m.avatar,
                    height: 96,
                    width: 96,
                    style: {
                        borderWidth: 4,
                        marginLeft: 28
                    }
                })
            }),
            (0, i.jsxs)('div', {
                className: m.infoContainer,
                children: [
                    (0, i.jsxs)('div', {
                        className: m.metadataContainer,
                        children: [
                            (0, i.jsx)(l.X6q, {
                                variant: 'heading-xxl/bold',
                                color: 'header-primary',
                                lineClamp: 1,
                                children: t.name
                            }),
                            (0, i.jsx)('div', {
                                className: m.disclosuresContainer,
                                children: p.map((e, t) =>
                                    (0, i.jsx)(
                                        l.Text,
                                        {
                                            className: m.disclosuresText,
                                            variant: 'text-xs/normal',
                                            color: 'text-muted',
                                            children: e
                                        },
                                        t
                                    )
                                )
                            })
                        ]
                    }),
                    (0, i.jsx)(r.$, {
                        onChange: n,
                        active: !0,
                        children: (0, i.jsx)(d.Z, {
                            application: t,
                            size: 'md'
                        })
                    })
                ]
            })
        ]
    });
};
