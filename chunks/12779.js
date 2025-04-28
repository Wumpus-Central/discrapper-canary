n.d(t, { Z: () => d });
var r = n(200651),
    i = n(192379),
    l = n(120356),
    o = n.n(l),
    a = n(481060),
    s = n(194082),
    c = n(14338),
    u = n(76692);
let d = i.memo(function (e) {
    let { label: t, participantCount: n, onClick: i, className: l, collapsed: d, speakers: p, channel: h, isStreamLive: f } = e;
    return (0, r.jsxs)(a.P3F, {
        onClick: i,
        className: o()(u.container, l),
        children: [
            null == p
                ? (0, r.jsx)(a.BFJ, {
                      size: 'custom',
                      color: 'currentColor',
                      width: 20,
                      height: 20,
                      className: u.micIcon
                  })
                : (0, r.jsx)(a.S6n, {
                      size: 'custom',
                      color: 'currentColor',
                      width: 20,
                      height: 20,
                      className: u.micIcon
                  }),
            (0, r.jsxs)(a.Text, {
                color: 'header-primary',
                variant: 'text-md/semibold',
                className: u.text,
                children: [t, ' \u2014 ', n]
            }),
            d &&
                null != h &&
                null != p &&
                p.length > 0 &&
                (0, r.jsxs)(r.Fragment, {
                    children: [
                        (0, r.jsx)(c.Z, {
                            channel: h,
                            speakers: p
                        }),
                        f && (0, r.jsx)(s.ZP, {})
                    ]
                }),
            (0, r.jsx)(a.CJ0, {
                size: 'custom',
                color: 'currentColor',
                width: 20,
                height: 20,
                className: o()(u.downIcon, { [u.upIcon]: d })
            })
        ]
    });
});
