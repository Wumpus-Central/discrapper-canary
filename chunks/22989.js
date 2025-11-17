n.d(t, { default: () => m });
var l = n(54381);
n(473749);
var a = n(990547),
    i = n(352065),
    r = n(100527),
    s = n(906732),
    o = n(362693),
    u = n(674908),
    c = n(115559),
    d = n(285006);
function m(e) {
    let { clip: t, channelId: n, transitionState: m, onClose: h } = e,
        { analyticsLocations: p } = (0, s.ZP)(r.Z.CLIPS_EDITOR);
    return (0, l.jsx)(s.Gt, {
        value: p,
        children: (0, l.jsx)(i.A, {
            onClose: h,
            transitionState: m,
            trackingProps: { impression: { impressionName: a.ImpressionNames.CLIP_EDITOR_VIEWED } },
            children: (0, l.jsx)("div", {
                className: d.modalContainer,
                children: (0, l.jsxs)(c.u, {
                    clip: t,
                    children: [
                        (0, l.jsx)(o.Z, {
                            clip: t,
                            transitionState: m,
                        }),
                        (0, l.jsx)(u.Z, {
                            channelId: n,
                            clip: t,
                            onClose: h,
                        }),
                    ],
                }),
            }),
        }),
    });
}
