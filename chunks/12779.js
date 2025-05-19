n.d(t, { Z: () => d });
var r = n(255367),
    i = n(73800),
    l = n(120356),
    a = n.n(l),
    o = n(481060),
    s = n(194082),
    c = n(14338),
    u = n(965838);
let d = i.memo(function (e) {
    let { label: t, participantCount: n, onClick: i, className: l, collapsed: d, speakers: p, channel: h, isStreamLive: f } = e;
    return (0, r.jsxs)(o.P3F, {
        onClick: i,
        className: a()(u.container, l),
        children: [
            null == p
                ? (0, r.jsx)(o.BFJ, {
                      size: 'custom',
                      color: 'currentColor',
                      width: 20,
                      height: 20,
                      className: u.micIcon
                  })
                : (0, r.jsx)(o.S6n, {
                      size: 'custom',
                      color: 'currentColor',
                      width: 20,
                      height: 20,
                      className: u.micIcon
                  }),
            (0, r.jsxs)(o.Text, {
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
            (0, r.jsx)(o.CJ0, {
                size: 'custom',
                color: 'currentColor',
                width: 20,
                height: 20,
                className: a()(u.downIcon, { [u.upIcon]: d })
            })
        ]
    });
});
