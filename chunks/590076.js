n.d(t, {
    Z: function () {
        return h;
    }
});
var i = n(200651),
    l = n(192379),
    a = n(512722),
    r = n.n(a),
    s = n(399606),
    o = n(618158),
    c = n(594174),
    u = n(822183),
    d = n(364125),
    m = n(610947),
    f = n(848212);
function p(e) {
    let { focused: t, channelId: n, streamerId: a, stream: u } = e,
        p = l.useRef(null),
        h = (0, s.e7)([c.default], () => c.default.getCurrentUser());
    r()(null != h, 'user cannot be null'), (0, m.Z)(p, h, a, n);
    let {
        handleClick: g,
        handleMouseDown: v,
        handleMouseEnter: S,
        handleMouseMove: I,
        handleMouseUp: _
    } = (0, d.Z)({
        user: h,
        channelId: n,
        streamerId: a,
        stream: u,
        focused: t,
        canvas: p.current
    });
    return (0, i.jsx)(o.Z, {
        children: (0, i.jsx)('canvas', {
            ref: p,
            onClick: g,
            onMouseDown: v,
            onMouseEnter: S,
            onMouseMove: I,
            onMouseUp: _,
            className: f.sharedCanvas
        })
    });
}
function h(e) {
    let { isSharedCanvasEnabled: t } = u.Z.useExperiment(
        {
            guildId: e.guildId,
            location: 'd0de1c_1'
        },
        { autoTrackExposure: !0 }
    );
    return !t || e.hasScreenMessage ? null : (0, i.jsx)(p, { ...e });
}
