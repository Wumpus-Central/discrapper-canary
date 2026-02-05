n.d(t, { A: () => p });
var i = n(627968),
    l = n(64700),
    a = n(284009),
    s = n.n(a),
    r = n(417597),
    o = n(447404),
    c = n(287809),
    d = n(502633),
    u = n(909417),
    h = n(427160),
    m = n(304713);
function A(e) {
    let { focused: t, channelId: n, streamerId: a, stream: d } = e,
        A = l.useRef(null),
        p = (0, r.bG)([c.default], () => c.default.getCurrentUser());
    s()(null != p, "user cannot be null"), (0, h.A)(A, p, a, n);
    let {
        handleClick: g,
        handleMouseDown: f,
        handleMouseEnter: _,
        handleMouseMove: E,
        handleMouseUp: C,
    } = (0, u.A)({ user: p, channelId: n, streamerId: a, stream: d, focused: t, canvas: A.current });
    return (0, i.jsx)(o.A, {
        children: (0, i.jsx)("canvas", {
            ref: A,
            onClick: g,
            onMouseDown: f,
            onMouseEnter: _,
            onMouseMove: E,
            onMouseUp: C,
            className: m.s,
        }),
    });
}
function p(e) {
    let { isSharedCanvasEnabled: t } = d.A.useExperiment(
        { guildId: e.guildId, location: "d0de1c_1" },
        { autoTrackExposure: !0 },
    );
    return !t || e.hasScreenMessage ? null : (0, i.jsx)(A, { ...e });
}
