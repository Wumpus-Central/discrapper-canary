n.d(t, { Z: () => m }), n(47120);
var r = n(200651);
n(192379);
var l = n(120356),
    i = n.n(l),
    s = n(268146),
    o = n(481060),
    a = n(668519),
    c = n(615161),
    d = n(388032),
    u = n(154693);
function f(e) {
    let { source: t } = e;
    return t.id.startsWith(s.vA.SCREEN)
        ? (0, r.jsx)(o.pzj, { size: 'xs' })
        : t.id.startsWith(s.vA.WINDOW)
          ? null != t.icon && '' !== t.icon
              ? (0, r.jsx)('img', {
                    src: t.icon,
                    className: u.sourceIcon,
                    alt: ''
                })
              : (0, r.jsx)(o.GON, { size: 'xs' })
          : (0, r.jsx)(o.Odl, { size: 'xs' });
}
function h(e) {
    let { source: t, selected: n, twoClickVariant: l, onClick: s } = e,
        { url: a, name: c } = t;
    return (0, r.jsxs)(o.P3F, {
        onClick: () => s(t),
        className: i()(u.source, { [u.selectedSource]: n }),
        children: [
            (0, r.jsx)('div', {
                className: u.sourcePreviewContainer,
                children: (0, r.jsxs)('div', {
                    className: u.sourcePreview,
                    children: [
                        (0, r.jsx)('img', {
                            src: a,
                            className: u.sourcePreviewImage,
                            alt: ''
                        }),
                        !l &&
                            (0, r.jsx)('div', {
                                className: u.sourceOverlay,
                                children: (0, r.jsx)('div', {
                                    className: u.sourceOverlayCTA,
                                    children: (0, r.jsx)(o.Text, {
                                        variant: 'text-sm/medium',
                                        color: 'button-filled-white-text',
                                        children: d.NW.string(d.t.z7WGho)
                                    })
                                })
                            })
                    ]
                })
            }),
            (0, r.jsxs)('div', {
                className: u.sourceNameContainer,
                children: [
                    (0, r.jsx)(f, { source: t }),
                    (0, r.jsx)(o.Text, {
                        variant: 'text-sm/medium',
                        className: u.sourceName,
                        children: c
                    })
                ]
            })
        ]
    });
}
function m(e) {
    var t;
    let { onClick: n } = e,
        { twoClickVariant: l } = (0, a.a)({
            autoTrackExposure: !1,
            location: 'sourcegrid'
        }),
        [{ windowSources: i, deviceSources: d, screenSources: f, sourceType: m, fetchingSources: x, selectedSource: g }] = (0, c.E_)();
    return x
        ? (0, r.jsx)('div', {
              className: u.loading,
              children: (0, r.jsx)(o.$jN, {})
          })
        : ((t = m === s.vA.WINDOW ? i : m === s.vA.SCREEN ? f : d),
          (0, r.jsx)('div', {
              className: u.root,
              children: t.map((e) =>
                  (0, r.jsx)(
                      h,
                      {
                          onClick: n,
                          source: e,
                          selected: (null == g ? void 0 : g.id) === e.id,
                          twoClickVariant: l
                      },
                      e.id
                  )
              )
          }));
}
