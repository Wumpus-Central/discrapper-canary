n.d(t, { Z: () => m }), n(539854);
var r = n(200651),
    i = n(192379),
    a = n(622535),
    l = n(481060),
    s = n(783097),
    o = n(768581),
    c = n(956965),
    d = n(548514),
    u = n(388032),
    p = n(393023);
let m = function (e) {
    let { application: t, onButtonsVisibilityChange: n } = e,
        m = i.useRef(null),
        h = i.useMemo(
            () =>
                o.ZP.getApplicationIconURL({
                    id: t.id,
                    icon: t.icon,
                    size: 96
                }),
            [t]
        ),
        g = i.useMemo(() => {
            let e = [];
            return (0, s.vJ)(t) && e.push(u.intl.string(u.t.LO4f0N)), (0, s.Cb)(t) && (0 !== e.length && e.push('\u2022'), e.push(u.intl.string(u.t['8z5B2d']))), (0, s.Hu)(t) && (0 !== e.length && e.push('\u2022'), e.push(u.intl.string(u.t['5khEk5']))), e;
        }, [t]);
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(c.Z, {
                application: t,
                bannerType: 'detail',
                iconURL: h
            }),
            (0, r.jsx)('div', {
                className: p.avatarContainer,
                style: { height: 52 },
                children: (0, r.jsx)('img', {
                    src: h,
                    alt: '',
                    className: p.avatar,
                    height: 96,
                    width: 96,
                    style: {
                        borderWidth: 4,
                        marginLeft: 28
                    }
                })
            }),
            (0, r.jsxs)('div', {
                className: p.infoContainer,
                children: [
                    (0, r.jsxs)('div', {
                        className: p.metadataContainer,
                        children: [
                            (0, r.jsx)(l.X6q, {
                                variant: 'heading-xxl/bold',
                                color: 'header-primary',
                                lineClamp: 1,
                                children: t.name
                            }),
                            (0, r.jsx)('div', {
                                className: p.disclosuresContainer,
                                children: g.map((e, t) =>
                                    (0, r.jsx)(
                                        l.Text,
                                        {
                                            className: p.disclosuresText,
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
                    (0, r.jsx)(a.$, {
                        innerRef: m,
                        onChange: n,
                        active: !0,
                        children: (0, r.jsx)(d.Z, {
                            ref: m,
                            application: t,
                            size: 'md'
                        })
                    })
                ]
            })
        ]
    });
};
