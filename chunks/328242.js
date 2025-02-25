n.d(t, { Z: () => d }), n(47120);
var r = n(200651);
n(192379);
var l = n(268146),
    s = n(481060),
    i = n(615161),
    a = n(388032),
    o = n(430817);
function c(e) {
    let { source: t } = e;
    return t.id.startsWith(l.vA.SCREEN)
        ? (0, r.jsx)(s.pzj, { size: 'xs' })
        : t.id.startsWith(l.vA.WINDOW)
          ? null != t.icon && '' !== t.icon
              ? (0, r.jsx)('img', {
                    src: t.icon,
                    className: o.sourceIcon,
                    alt: ''
                })
              : (0, r.jsx)(s.GON, { size: 'xs' })
          : (0, r.jsx)(s.Odl, { size: 'xs' });
}
function u(e) {
    let { source: t, onClick: n } = e,
        { url: l, name: i } = t;
    return (0, r.jsxs)(s.P3F, {
        onClick: () => n(t),
        className: o.source,
        children: [
            (0, r.jsx)('div', {
                className: o.sourcePreviewContainer,
                children: (0, r.jsxs)('div', {
                    className: o.sourcePreview,
                    children: [
                        (0, r.jsx)('img', {
                            src: l,
                            className: o.sourcePreviewImage,
                            alt: ''
                        }),
                        (0, r.jsx)('div', {
                            className: o.sourceOverlay,
                            children: (0, r.jsx)('div', {
                                className: o.sourceOverlayCTA,
                                children: (0, r.jsx)(s.Text, {
                                    variant: 'text-sm/medium',
                                    color: 'button-filled-white-text',
                                    children: a.NW.string(a.t.z7WGho)
                                })
                            })
                        })
                    ]
                })
            }),
            (0, r.jsxs)('div', {
                className: o.sourceNameContainer,
                children: [
                    (0, r.jsx)(c, { source: t }),
                    (0, r.jsx)(s.Text, {
                        variant: 'text-sm/medium',
                        className: o.sourceName,
                        children: i
                    })
                ]
            })
        ]
    });
}
function d(e) {
    var t;
    let { onClick: n } = e,
        [{ windowSources: a, deviceSources: c, screenSources: d, sourceType: m, fetchingSources: p }] = (0, i.E_)();
    return p
        ? (0, r.jsx)('div', {
              className: o.loading,
              children: (0, r.jsx)(s.$jN, {})
          })
        : ((t = m === l.vA.WINDOW ? a : m === l.vA.SCREEN ? d : c),
          (0, r.jsx)('div', {
              className: o.root,
              children: t.map((e) =>
                  (0, r.jsx)(
                      u,
                      {
                          onClick: n,
                          source: e
                      },
                      e.id
                  )
              )
          }));
}
