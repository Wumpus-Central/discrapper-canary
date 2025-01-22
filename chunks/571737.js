n(653041);
var i = n(200651),
    a = n(192379),
    r = n(622535),
    l = n(481060),
    o = n(783097),
    s = n(768581),
    c = n(956965),
    d = n(548514),
    u = n(388032),
    m = n(137762);
let p = 52;
t.Z = function (e) {
    let { application: t, onButtonsVisibilityChange: n } = e,
        h = a.useMemo(
            () =>
                s.ZP.getApplicationIconURL({
                    id: t.id,
                    icon: t.icon,
                    size: 96
                }),
            [t]
        ),
        g = a.useMemo(() => {
            let e = [];
            return (0, o.vJ)(t) && e.push(u.intl.string(u.t.LO4f0N)), (0, o.Cb)(t) && (0 !== e.length && e.push('\u2022'), e.push(u.intl.string(u.t['8z5B2d']))), (0, o.Hu)(t) && (0 !== e.length && e.push('\u2022'), e.push(u.intl.string(u.t['5khEk5']))), e;
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
                style: { height: p },
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
                            (0, i.jsx)(l.Heading, {
                                variant: 'heading-xxl/bold',
                                color: 'header-primary',
                                lineClamp: 1,
                                children: t.name
                            }),
                            (0, i.jsx)('div', {
                                className: m.disclosuresContainer,
                                children: g.map((e, t) =>
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
