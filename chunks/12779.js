n.d(t, { Z: () => u });
var i = n(200651),
    l = n(192379),
    a = n(120356),
    r = n.n(a),
    s = n(481060),
    o = n(194082),
    c = n(14338),
    d = n(476239);
let u = l.memo(function (e) {
    let { label: t, participantCount: n, onClick: l, className: a, collapsed: u, speakers: h, channel: p, isStreamLive: m } = e;
    return (0, i.jsxs)(s.P3F, {
        onClick: l,
        className: r()(d.container, a),
        children: [
            null == h
                ? (0, i.jsx)(s.BFJ, {
                      size: 'custom',
                      color: 'currentColor',
                      width: 20,
                      height: 20,
                      className: d.micIcon
                  })
                : (0, i.jsx)(s.S6n, {
                      size: 'custom',
                      color: 'currentColor',
                      width: 20,
                      height: 20,
                      className: d.micIcon
                  }),
            (0, i.jsxs)(s.Text, {
                color: 'header-primary',
                variant: 'text-md/semibold',
                className: d.text,
                children: [t, ' \u2014 ', n]
            }),
            u &&
                null != p &&
                null != h &&
                h.length > 0 &&
                (0, i.jsxs)(i.Fragment, {
                    children: [
                        (0, i.jsx)(c.Z, {
                            channel: p,
                            speakers: h
                        }),
                        m && (0, i.jsx)(o.ZP, {})
                    ]
                }),
            (0, i.jsx)(s.CJ0, {
                size: 'custom',
                color: 'currentColor',
                width: 20,
                height: 20,
                className: r()(d.downIcon, { [d.upIcon]: u })
            })
        ]
    });
});
