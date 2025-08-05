n.d(t, { Z: () => g });
var r = n(255367),
    i = n(73800),
    a = n(512722),
    o = n.n(a),
    s = n(399606),
    l = n(618158),
    c = n(594174),
    u = n(822183),
    d = n(364125),
    f = n(90753),
    _ = n(613050);
function p(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
function h(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        ('function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                p(e, t, n[t]);
            }));
    }
    return e;
}
function m(e) {
    let { focused: t, channelId: n, streamerId: a, stream: u } = e,
        p = i.useRef(null),
        h = (0, s.e7)([c.default], () => c.default.getCurrentUser());
    (o()(null != h, 'user cannot be null'), (0, f.Z)(p, h, a, n));
    let {
        handleClick: m,
        handleMouseDown: g,
        handleMouseEnter: E,
        handleMouseMove: b,
        handleMouseUp: y
    } = (0, d.Z)({
        user: h,
        channelId: n,
        streamerId: a,
        stream: u,
        focused: t,
        canvas: p.current
    });
    return (0, r.jsx)(l.Z, {
        children: (0, r.jsx)('canvas', {
            ref: p,
            onClick: m,
            onMouseDown: g,
            onMouseEnter: E,
            onMouseMove: b,
            onMouseUp: y,
            className: _.sharedCanvas
        })
    });
}
function g(e) {
    let { isSharedCanvasEnabled: t } = u.Z.useExperiment(
        {
            guildId: e.guildId,
            location: 'd0de1c_1'
        },
        { autoTrackExposure: !0 }
    );
    return !t || e.hasScreenMessage ? null : (0, r.jsx)(m, h({}, e));
}
