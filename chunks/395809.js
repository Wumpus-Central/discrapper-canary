n.d(t, {
    A: () => f,
});
var i = n(627968),
    r = n(64700),
    s = n(284009),
    l = n.n(s),
    o = n(417597),
    a = n(502633),
    c = n(533117),
    d = n(427160),
    u = n(287809),
    h = n(200301);

function p(e) {
    let { streamerId: t, channelId: n } = e,
        s = r.useRef(null),
        a = (0, o.bG)([u.default], () => u.default.getCurrentUser());
    return (
        l()(null != a, "user cannot be null"),
        (0, d.A)(s, a, t, n),
        (0, i.jsx)("canvas", {
            className: h.J,
            ref: s,
        })
    );
}

function f(e) {
    let { guildId: t, channelId: n, streamerId: r } = e,
        { isSharedCanvasEnabled: s } = a.A.useExperiment(
            {
                guildId: t,
                location: "f0d1b1_1",
            },
            {
                autoTrackExposure: !0,
            },
        ),
        l = (0, o.bG)([c.A], () => c.A.visibleOverlayCanvas);
    return s && l
        ? (0, i.jsx)(p, {
              guildId: t,
              channelId: n,
              streamerId: r,
          })
        : null;
}
