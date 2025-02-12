n.d(t, { Z: () => p });
var l = n(200651),
    i = n(192379),
    r = n(512722),
    a = n.n(r),
    s = n(399606),
    o = n(618158),
    u = n(594174),
    c = n(822183),
    d = n(364125),
    m = n(90753),
    f = n(687719);
function h(e) {
    let { focused: t, channelId: n, streamerId: r, stream: c } = e,
        h = i.useRef(null),
        p = (0, s.e7)([u.default], () => u.default.getCurrentUser());
    a()(null != p, 'user cannot be null'), (0, m.Z)(h, p, r, n);
    let {
        handleClick: v,
        handleMouseDown: g,
        handleMouseEnter: E,
        handleMouseMove: x,
        handleMouseUp: Z
    } = (0, d.Z)({
        user: p,
        channelId: n,
        streamerId: r,
        stream: c,
        focused: t,
        canvas: h.current
    });
    return (0, l.jsx)(o.Z, {
        children: (0, l.jsx)('canvas', {
            ref: h,
            onClick: v,
            onMouseDown: g,
            onMouseEnter: E,
            onMouseMove: x,
            onMouseUp: Z,
            className: f.sharedCanvas
        })
    });
}
function p(e) {
    let { isSharedCanvasEnabled: t } = c.Z.useExperiment(
        {
            guildId: e.guildId,
            location: 'd0de1c_1'
        },
        { autoTrackExposure: !0 }
    );
    return !t || e.hasScreenMessage ? null : (0, l.jsx)(h, { ...e });
}
