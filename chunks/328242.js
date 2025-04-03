n.d(t, { Z: () => p }), n(47120);
var r = n(200651);
n(192379);
var l = n(120356),
    i = n.n(l),
    s = n(268146),
    o = n(481060),
    a = n(63063),
    c = n(668519),
    d = n(615161),
    u = n(843874),
    f = n(388032),
    m = n(814799);
function h(e) {
    let { source: t } = e;
    return t.id.startsWith(s.vA.SCREEN)
        ? (0, r.jsx)(o.pzj, { size: 'xs' })
        : t.id.startsWith(s.vA.WINDOW)
          ? null != t.icon && '' !== t.icon
              ? (0, r.jsx)('img', {
                    src: t.icon,
                    className: m.sourceIcon,
                    alt: ''
                })
              : (0, r.jsx)(o.GON, { size: 'xs' })
          : (0, r.jsx)(o.Odl, { size: 'xs' });
}
function x(e) {
    let { source: t, selected: n, twoClickVariant: l, onClick: s } = e,
        { url: a, name: c } = t;
    return (0, r.jsxs)(o.P3F, {
        onClick: () => s(t),
        className: i()(m.source, { [m.selectedSource]: n }),
        children: [
            (0, r.jsx)('div', {
                className: m.sourcePreviewContainer,
                children: (0, r.jsxs)('div', {
                    className: m.sourcePreview,
                    children: [
                        (0, r.jsx)('img', {
                            src: a,
                            className: m.sourcePreviewImage,
                            alt: ''
                        }),
                        !l &&
                            (0, r.jsx)('div', {
                                className: m.sourceOverlay,
                                children: (0, r.jsx)('div', {
                                    className: m.sourceOverlayCTA,
                                    children: (0, r.jsx)(o.Text, {
                                        variant: 'text-sm/medium',
                                        color: 'button-filled-white-text',
                                        children: f.NW.string(f.t.z7WGho)
                                    })
                                })
                            })
                    ]
                })
            }),
            (0, r.jsxs)('div', {
                className: m.sourceNameContainer,
                children: [
                    (0, r.jsx)(h, { source: t }),
                    (0, r.jsx)(o.Text, {
                        variant: 'text-sm/medium',
                        className: m.sourceName,
                        children: c
                    })
                ]
            })
        ]
    });
}
function p(e) {
    var t;
    let { onClick: n } = e,
        { twoClickVariant: l } = (0, c.a)({
            autoTrackExposure: !1,
            location: 'sourcegrid'
        }),
        [{ windowSources: i, deviceSources: a, screenSources: u, sourceType: f, fetchingSources: h, selectedSource: p }] = (0, d.E_)();
    return h
        ? (0, r.jsx)('div', {
              className: m.loading,
              children: (0, r.jsx)(o.$jN, {})
          })
        : ((t = f === s.vA.WINDOW ? i : f === s.vA.SCREEN ? u : a),
          f === s.vA.CAMERA && 0 === t.length
              ? (0, r.jsx)(g, {})
              : (0, r.jsx)('div', {
                    className: m.root,
                    children: t.map((e) =>
                        (0, r.jsx)(
                            x,
                            {
                                onClick: n,
                                source: e,
                                selected: (null == p ? void 0 : p.id) === e.id,
                                twoClickVariant: l
                            },
                            e.id
                        )
                    )
                }));
}
function g() {
    return (0, r.jsxs)('div', {
        className: m.emptyState,
        children: [
            (0, r.jsx)(o.Odl, {
                size: 'md',
                color: o.TVs.colors.ICON_MUTED,
                className: m.emptyIcon
            }),
            (0, r.jsx)(o.Text, {
                variant: 'text-lg/medium',
                color: 'header-primary',
                className: m.emptyHeader,
                children: f.NW.string(u.Z['/z3YaW'])
            }),
            (0, r.jsx)(o.Text, {
                variant: 'text-sm/medium',
                color: 'text-secondary',
                className: m.emptyBody,
                children: f.NW.string(u.Z.agwSGB)
            }),
            (0, r.jsx)(o.Text, {
                variant: 'text-sm/semibold',
                children: f.NW.format(u.Z.xpVzr6, { helpdeskURL: a.Z.getArticleURL(360040816151) })
            })
        ]
    });
}
