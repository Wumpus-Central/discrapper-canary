n.d(t, { Z: () => u });
var r = n(54381),
    i = n(473749),
    l = n(120356),
    a = n.n(l),
    s = n(481060),
    o = n(194082),
    c = n(14338),
    d = n(995148);
let u = i.memo(function (e) {
    let {
        label: t,
        participantCount: n,
        onClick: i,
        className: l,
        collapsed: u,
        speakers: p,
        channel: h,
        isStreamLive: f,
    } = e;
    return (0, r.jsxs)(s.P3F, {
        onClick: i,
        className: a()(d.container, l),
        children: [
            null == p
                ? (0, r.jsx)(s.BFJ, {
                      size: "custom",
                      color: "currentColor",
                      width: 20,
                      height: 20,
                      className: d.micIcon,
                  })
                : (0, r.jsx)(s.S6n, {
                      size: "custom",
                      color: "currentColor",
                      width: 20,
                      height: 20,
                      className: d.micIcon,
                  }),
            (0, r.jsxs)(s.Text, {
                color: "text-strong",
                variant: "text-md/semibold",
                className: d.text,
                children: [t, " \u2014 ", n],
            }),
            u &&
                null != h &&
                null != p &&
                p.length > 0 &&
                (0, r.jsxs)(r.Fragment, {
                    children: [
                        (0, r.jsx)(c.Z, {
                            channel: h,
                            speakers: p,
                        }),
                        f && (0, r.jsx)(o.ZP, {}),
                    ],
                }),
            (0, r.jsx)(s.CJ0, {
                size: "custom",
                color: "currentColor",
                width: 20,
                height: 20,
                className: a()(d.downIcon, { [d.upIcon]: u }),
            }),
        ],
    });
});
