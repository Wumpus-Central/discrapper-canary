n.d(t, { Z: () => m }), n(653041);
var r = n(200651),
    a = n(192379),
    i = n(622535),
    l = n(481060),
    o = n(783097),
    s = n(768581),
    c = n(956965),
    d = n(548514),
    u = n(388032),
    p = n(393023);
let m = function (e) {
    let { application: t, onButtonsVisibilityChange: n } = e,
        m = a.useRef(null),
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
            return (0, o.vJ)(t) && e.push(u.NW.string(u.t.LO4f0N)), (0, o.Cb)(t) && (0 !== e.length && e.push('\u2022'), e.push(u.NW.string(u.t['8z5B2d']))), (0, o.Hu)(t) && (0 !== e.length && e.push('\u2022'), e.push(u.NW.string(u.t['5khEk5']))), e;
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
                    (0, r.jsx)(i.$, {
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
