l.d(t, {
    default: () => m,
});
var n = l(627968);
l(64700);
var a = l(110259),
    r = l(521489),
    i = l(793574),
    s = l(688810),
    o = l(247181),
    u = l(309777),
    c = l(429364),
    d = l(327742);

function m(e) {
    let { clip: t, channelId: l, transitionState: m, onClose: h } = e,
        { analyticsLocations: p } = (0, s.Ay)(i.A.CLIPS_EDITOR);
    return (0, n.jsx)(s.f5, {
        value: p,
        children: (0, n.jsx)(r.N, {
            onClose: h,
            transitionState: m,
            trackingProps: {
                impression: {
                    impressionName: a.ImpressionNames.CLIP_EDITOR_VIEWED,
                },
            },
            children: (0, n.jsx)("div", {
                className: d.jT,
                children: (0, n.jsxs)(c.p, {
                    clip: t,
                    children: [
                        (0, n.jsx)(o.A, {
                            clip: t,
                            transitionState: m,
                        }),
                        (0, n.jsx)(u.A, {
                            channelId: l,
                            clip: t,
                            onClose: h,
                        }),
                    ],
                }),
            }),
        }),
    });
}
