t(653041);
var a = t(200651),
    i = t(192379),
    r = t(622535),
    l = t(481060),
    o = t(783097),
    s = t(768581),
    c = t(956965),
    d = t(548514),
    u = t(388032),
    m = t(137762);
let p = 52;
n.Z = function (e) {
    let { application: n, onButtonsVisibilityChange: t } = e,
        _ = i.useMemo(
            () =>
                s.ZP.getApplicationIconURL({
                    id: n.id,
                    icon: n.icon,
                    size: 96
                }),
            [n]
        ),
        g = i.useMemo(() => {
            let e = [];
            return (0, o.vJ)(n) && e.push(u.intl.string(u.t.LO4f0N)), (0, o.Cb)(n) && (0 !== e.length && e.push('\u2022'), e.push(u.intl.string(u.t['8z5B2d']))), (0, o.Hu)(n) && (0 !== e.length && e.push('\u2022'), e.push(u.intl.string(u.t['5khEk5']))), e;
        }, [n]);
    return (0, a.jsxs)(a.Fragment, {
        children: [
            (0, a.jsx)(c.Z, {
                application: n,
                bannerType: 'detail',
                iconURL: _
            }),
            (0, a.jsx)('div', {
                className: m.avatarContainer,
                style: { height: p },
                children: (0, a.jsx)('img', {
                    src: _,
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
            (0, a.jsxs)('div', {
                className: m.infoContainer,
                children: [
                    (0, a.jsxs)('div', {
                        className: m.metadataContainer,
                        children: [
                            (0, a.jsx)(l.Heading, {
                                variant: 'heading-xxl/bold',
                                color: 'header-primary',
                                lineClamp: 1,
                                children: n.name
                            }),
                            (0, a.jsx)('div', {
                                className: m.disclosuresContainer,
                                children: g.map((e, n) =>
                                    (0, a.jsx)(
                                        l.Text,
                                        {
                                            className: m.disclosuresText,
                                            variant: 'text-xs/normal',
                                            color: 'text-muted',
                                            children: e
                                        },
                                        n
                                    )
                                )
                            })
                        ]
                    }),
                    (0, a.jsx)(r.$, {
                        onChange: t,
                        active: !0,
                        children: (0, a.jsx)(d.Z, {
                            application: n,
                            size: 'md'
                        })
                    })
                ]
            })
        ]
    });
};
