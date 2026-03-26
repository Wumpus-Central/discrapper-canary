l.d(t, { default: () => m });
var a = l(627968);
l(64700);
var n = l(110259),
    s = l(521489),
    i = l(793574),
    r = l(688810),
    o = l(247181),
    u = l(309777),
    c = l(429364),
    d = l(14363);
function m(e) {
    let { clip: t, channelId: l, transitionState: m, onClose: h } = e,
        { analyticsLocations: p } = (0, r.Ay)(i.A.CLIPS_EDITOR);
    return (0, a.jsx)(r.f5, {
        value: p,
        children: (0, a.jsx)(s.N, {
            onClose: h,
            transitionState: m,
            trackingProps: { impression: { impressionName: n.ImpressionNames.CLIP_EDITOR_VIEWED } },
            children: (0, a.jsx)("div", {
                className: d.jT,
                children: (0, a.jsxs)(c.p, {
                    clip: t,
                    children: [
                        (0, a.jsx)(o.A, { clip: t, transitionState: m }),
                        (0, a.jsx)(u.A, { channelId: l, clip: t, onClose: h }),
                    ],
                }),
            }),
        }),
    });
}
