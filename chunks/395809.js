"use strict";
n.d(t, { A: () => A });
var i = n(627968),
    s = n(64700),
    l = n(284009),
    a = n.n(l),
    r = n(417597),
    o = n(502633),
    d = n(533117),
    c = n(427160),
    u = n(287809),
    h = n(200301);
function p(e) {
    let { streamerId: t, channelId: n } = e,
        l = s.useRef(null),
        o = (0, r.bG)([u.default], () => u.default.getCurrentUser());
    return (
        a()(null != o, "user cannot be null"), (0, c.A)(l, o, t, n), (0, i.jsx)("canvas", { className: h.J, ref: l })
    );
}
function A(e) {
    let { guildId: t, channelId: n, streamerId: s } = e,
        { isSharedCanvasEnabled: l } = o.A.useExperiment(
            { guildId: t, location: "f0d1b1_1" },
            { autoTrackExposure: !0 },
        ),
        a = (0, r.bG)([d.A], () => d.A.visibleOverlayCanvas);
    return l && a ? (0, i.jsx)(p, { guildId: t, channelId: n, streamerId: s }) : null;
}
