(n.d(t, { Z: () => g }), n(388685));
var r = n(255367);
n(73800);
var i = n(120356),
    l = n.n(i),
    s = n(268146),
    o = n(481060),
    a = n(63063),
    c = n(668519),
    d = n(855403),
    u = n(615161),
    f = n(676462),
    m = n(388032),
    h = n(814799);
function p(e) {
    let { source: t } = e;
    return t.id.startsWith(s.vA.SCREEN)
        ? (0, r.jsx)(o.pzj, { size: 'xs' })
        : t.id.startsWith(s.vA.WINDOW)
          ? null != t.icon && '' !== t.icon
              ? (0, r.jsx)('img', {
                    src: t.icon,
                    className: h.sourceIcon,
                    alt: ''
                })
              : (0, r.jsx)(o.GON, { size: 'xs' })
          : (0, r.jsx)(o.Odl, { size: 'xs' });
}
function x(e) {
    let { source: t, selected: n, twoClickVariant: i, onClick: s } = e,
        { url: a, name: c } = t;
    return (0, r.jsxs)(o.P3F, {
        onClick: () => s(t),
        className: l()(h.source, { [h.selectedSource]: n }),
        children: [
            (0, r.jsx)('div', {
                className: h.sourcePreviewContainer,
                children: (0, r.jsxs)('div', {
                    className: h.sourcePreview,
                    children: [
                        (0, r.jsx)('img', {
                            src: a,
                            className: h.sourcePreviewImage,
                            alt: ''
                        }),
                        !i &&
                            (0, r.jsx)('div', {
                                className: h.sourceOverlay,
                                children: (0, r.jsx)('div', {
                                    className: h.sourceOverlayCTA,
                                    children: (0, r.jsx)(o.Text, {
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
                    (0, r.jsx)(p, { source: t }),
                    (0, r.jsx)(o.Text, {
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
        { twoClickVariant: i } = (0, c.a)({
            autoTrackExposure: !1,
            location: 'sourcegrid'
        }),
        [{ windowSources: l, deviceSources: a, screenSources: f, sourceType: m, fetchingSources: p, selectedSource: g }] = (0, u.E_)();
    return p
        ? (0, r.jsx)('div', {
              className: h.loading,
              children: (0, r.jsx)(o.$jN, {})
          })
        : ((t = m === s.vA.WINDOW ? l : m === s.vA.SCREEN ? f : a),
          m === s.vA.CAMERA && 0 === t.length
              ? (0, r.jsx)(_, {})
              : (0, r.jsx)('div', {
                    className: h.root,
                    children: t.map((e) =>
                        (0, r.jsx)(
                            x,
                            {
                                onClick: n,
                                source: e,
                                selected: null != g && 'windowHandle' in g ? (0, d.Z)(e.id, g.windowHandle) : (null == g ? void 0 : g.id) === e.id,
                                twoClickVariant: i
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
            (0, r.jsx)(o.Odl, {
                size: 'md',
                color: o.TVs.colors.ICON_MUTED,
                className: h.emptyIcon
            }),
            (0, r.jsx)(o.Text, {
                variant: 'text-lg/medium',
                color: 'header-primary',
                className: h.emptyHeader,
                children: m.intl.string(f.default['/z3YaW'])
            }),
            (0, r.jsx)(o.Text, {
                variant: 'text-sm/medium',
                color: 'text-secondary',
                className: h.emptyBody,
                children: m.intl.string(f.default.agwSGB)
            }),
            (0, r.jsx)(o.Text, {
                variant: 'text-sm/semibold',
                children: m.intl.format(f.default.xpVzr6, { helpdeskURL: a.Z.getArticleURL(360040816151) })
            })
        ]
    });
}
