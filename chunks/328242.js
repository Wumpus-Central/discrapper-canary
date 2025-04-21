n.d(t, { Z: () => g }), n(388685);
var r = n(200651);
n(192379);
var l = n(120356),
    i = n.n(l),
    s = n(268146),
    a = n(481060),
    o = n(63063),
    c = n(668519),
    d = n(855403),
    u = n(615161),
    f = n(843874),
    m = n(388032),
    h = n(814799);
function x(e) {
    let { source: t } = e;
    return t.id.startsWith(s.vA.SCREEN)
        ? (0, r.jsx)(a.pzj, { size: 'xs' })
        : t.id.startsWith(s.vA.WINDOW)
          ? null != t.icon && '' !== t.icon
              ? (0, r.jsx)('img', {
                    src: t.icon,
                    className: h.sourceIcon,
                    alt: ''
                })
              : (0, r.jsx)(a.GON, { size: 'xs' })
          : (0, r.jsx)(a.Odl, { size: 'xs' });
}
function p(e) {
    let { source: t, selected: n, twoClickVariant: l, onClick: s } = e,
        { url: o, name: c } = t;
    return (0, r.jsxs)(a.P3F, {
        onClick: () => s(t),
        className: i()(h.source, { [h.selectedSource]: n }),
        children: [
            (0, r.jsx)('div', {
                className: h.sourcePreviewContainer,
                children: (0, r.jsxs)('div', {
                    className: h.sourcePreview,
                    children: [
                        (0, r.jsx)('img', {
                            src: o,
                            className: h.sourcePreviewImage,
                            alt: ''
                        }),
                        !l &&
                            (0, r.jsx)('div', {
                                className: h.sourceOverlay,
                                children: (0, r.jsx)('div', {
                                    className: h.sourceOverlayCTA,
                                    children: (0, r.jsx)(a.Text, {
                                        variant: 'text-sm/medium',
                                        color: 'button-filled-white-text',
                                        children: m.intl.string(m.t.z7WGho)
                                    })
                                })
                            })
                    ]
                })
            }),
            (0, r.jsxs)('div', {
                className: h.sourceNameContainer,
                children: [
                    (0, r.jsx)(x, { source: t }),
                    (0, r.jsx)(a.Text, {
                        variant: 'text-sm/medium',
                        className: h.sourceName,
                        children: c
                    })
                ]
            })
        ]
    });
}
function g(e) {
    var t;
    let { onClick: n } = e,
        { twoClickVariant: l } = (0, c.a)({
            autoTrackExposure: !1,
            location: 'sourcegrid'
        }),
        [{ windowSources: i, deviceSources: o, screenSources: f, sourceType: m, fetchingSources: x, selectedSource: g }] = (0, u.E_)();
    return x
        ? (0, r.jsx)('div', {
              className: h.loading,
              children: (0, r.jsx)(a.$jN, {})
          })
        : ((t = m === s.vA.WINDOW ? i : m === s.vA.SCREEN ? f : o),
          m === s.vA.CAMERA && 0 === t.length
              ? (0, r.jsx)(_, {})
              : (0, r.jsx)('div', {
                    className: h.root,
                    children: t.map((e) =>
                        (0, r.jsx)(
                            p,
                            {
                                onClick: n,
                                source: e,
                                selected: null != g && 'windowHandle' in g ? (0, d.Z)(e.id, g.windowHandle) : (null == g ? void 0 : g.id) === e.id,
                                twoClickVariant: l
                            },
                            e.id
                        )
                    )
                }));
}
function _() {
    return (0, r.jsxs)('div', {
        className: h.emptyState,
        children: [
            (0, r.jsx)(a.Odl, {
                size: 'md',
                color: a.TVs.colors.ICON_MUTED,
                className: h.emptyIcon
            }),
            (0, r.jsx)(a.Text, {
                variant: 'text-lg/medium',
                color: 'header-primary',
                className: h.emptyHeader,
                children: m.intl.string(f.default['/z3YaW'])
            }),
            (0, r.jsx)(a.Text, {
                variant: 'text-sm/medium',
                color: 'text-secondary',
                className: h.emptyBody,
                children: m.intl.string(f.default.agwSGB)
            }),
            (0, r.jsx)(a.Text, {
                variant: 'text-sm/semibold',
                children: m.intl.format(f.default.xpVzr6, { helpdeskURL: o.Z.getArticleURL(360040816151) })
            })
        ]
    });
}
