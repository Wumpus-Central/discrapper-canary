n.d(t, { Z: () => d });
var r = n(255367),
    i = n(73800),
    l = n(120356),
    a = n.n(l),
    s = n(481060),
    o = n(194082),
    c = n(14338),
    u = n(76692);
let d = i.memo(function (e) {
    let {
        label: t,
        participantCount: n,
        onClick: i,
        className: l,
        collapsed: d,
        speakers: h,
        channel: p,
        isStreamLive: f,
    } = e;
    return (0, r.jsxs)(s.P3F, {
        onClick: i,
        className: a()(u.container, l),
        children: [
            null == h
                ? (0, r.jsx)(s.BFJ, {
                      size: "custom",
                      color: "currentColor",
                      width: 20,
                      height: 20,
                      className: u.micIcon,
                  })
                : (0, r.jsx)(s.S6n, {
                      size: "custom",
                      color: "currentColor",
                      width: 20,
                      height: 20,
                      className: u.micIcon,
                  }),
            (0, r.jsxs)(s.Text, {
                color: "header-primary",
                variant: "text-md/semibold",
                className: u.text,
                children: [t, " \u2014 ", n],
            }),
            d &&
                null != p &&
                null != h &&
                h.length > 0 &&
                (0, r.jsxs)(r.Fragment, {
                    children: [
                        (0, r.jsx)(c.Z, {
                            channel: p,
                            speakers: h,
                        }),
                        f && (0, r.jsx)(o.ZP, {}),
                    ],
                }),
            (0, r.jsx)(s.CJ0, {
                size: "custom",
                color: "currentColor",
                width: 20,
                height: 20,
                className: a()(u.downIcon, { [u.upIcon]: d }),
            }),
        ],
    });
});
