a.d(t, { default: () => m });
var l = a(627968);
a(64700);
var n = a(110259),
    i = a(521489),
    s = a(793574),
    r = a(688810),
    o = a(247181),
    u = a(309777),
    d = a(429364),
    c = a(889904);
function m(e) {
    let { clip: t, channelId: a, transitionState: m, onClose: h } = e,
        { analyticsLocations: p } = (0, r.Ay)(s.A.CLIPS_EDITOR);
    return (0, l.jsx)(r.f5, {
        value: p,
        children: (0, l.jsx)(i.N, {
            onClose: h,
            transitionState: m,
            trackingProps: { impression: { impressionName: n.ImpressionNames.CLIP_EDITOR_VIEWED } },
            children: (0, l.jsx)("div", {
                className: c.jT,
                children: (0, l.jsxs)(d.p, {
                    clip: t,
                    children: [
                        (0, l.jsx)(o.A, { clip: t, transitionState: m }),
                        (0, l.jsx)(u.A, { channelId: a, clip: t, onClose: h }),
                    ],
                }),
            }),
        }),
    });
}
