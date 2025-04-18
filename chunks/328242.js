n.d(t, { Z: () => p }), n(388685);
var r = n(200651);
n(192379);
var i = n(120356),
    l = n.n(i),
    s = n(268146),
    a = n(481060),
    o = n(63063),
    c = n(668519),
    d = n(615161),
    u = n(519229),
    f = n(388032),
    m = n(483205);
function h(e) {
    let { source: t } = e;
    return t.id.startsWith(s.vA.SCREEN)
        ? (0, r.jsx)(a.pzj, { size: 'xs' })
        : t.id.startsWith(s.vA.WINDOW)
          ? null != t.icon && '' !== t.icon
              ? (0, r.jsx)('img', {
                    src: t.icon,
                    className: m.sourceIcon,
                    alt: ''
                })
              : (0, r.jsx)(a.GON, { size: 'xs' })
          : (0, r.jsx)(a.Odl, { size: 'xs' });
}
function x(e) {
    let { source: t, selected: n, twoClickVariant: i, onClick: s } = e,
        { url: o, name: c } = t;
    return (0, r.jsxs)(a.P3F, {
        onClick: () => s(t),
        className: l()(m.source, { [m.selectedSource]: n }),
        children: [
            (0, r.jsx)('div', {
                className: m.sourcePreviewContainer,
                children: (0, r.jsxs)('div', {
                    className: m.sourcePreview,
                    children: [
                        (0, r.jsx)('img', {
                            src: o,
                            className: m.sourcePreviewImage,
                            alt: ''
                        }),
                        !i &&
                            (0, r.jsx)('div', {
                                className: m.sourceOverlay,
                                children: (0, r.jsx)('div', {
                                    className: m.sourceOverlayCTA,
                                    children: (0, r.jsx)(a.Text, {
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
                    (0, r.jsx)(a.Text, {
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
        { twoClickVariant: i } = (0, c.a)({
            autoTrackExposure: !1,
            location: 'sourcegrid'
        }),
        [{ windowSources: l, deviceSources: o, screenSources: u, sourceType: f, fetchingSources: h, selectedSource: p }] = (0, d.E_)();
    return h
        ? (0, r.jsx)('div', {
              className: m.loading,
              children: (0, r.jsx)(a.$jN, {})
          })
        : ((t = f === s.vA.WINDOW ? l : f === s.vA.SCREEN ? u : o),
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
                                twoClickVariant: i
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
            (0, r.jsx)(a.Odl, {
                size: 'md',
                color: a.TVs.colors.ICON_MUTED,
                className: m.emptyIcon
            }),
            (0, r.jsx)(a.Text, {
                variant: 'text-lg/medium',
                color: 'header-primary',
                className: m.emptyHeader,
                children: f.NW.string(u.Z['/z3YaW'])
            }),
            (0, r.jsx)(a.Text, {
                variant: 'text-sm/medium',
                color: 'text-secondary',
                className: m.emptyBody,
                children: f.NW.string(u.Z.agwSGB)
            }),
            (0, r.jsx)(a.Text, {
                variant: 'text-sm/semibold',
                children: f.NW.format(u.Z.xpVzr6, { helpdeskURL: o.Z.getArticleURL(360040816151) })
            })
        ]
    });
}
