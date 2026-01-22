n.d(t, {
    A: () => u,
});
var l = n(64700),
    r = n(311907),
    i = n(652896),
    a = n(162605),
    s = n(954571),
    o = n(652215),
    c = n(788868);

function u(e, t) {
    let { handleMouseDown: n, handleMouseMove: u, handleMouseUp: d, handleMouseEnter: f } = e,
        p = l.useRef(null),
        b = (0, r.bG)([a.A], () => a.A.getRTCConnection((0, i._z)(t))),
        g = l.useCallback(
            (e, t, l) => {
                (p.current = Date.now()), n(e, t, l);
            },
            [n],
        );
    return {
        handleMouseUp: l.useCallback(
            (e, t, n) => {
                if ((d(e, t, n), null != p.current)) {
                    var l;
                    null != b &&
                        ((l = Date.now() - p.current),
                        s.default.track(o.HAw.PREMIUM_FEATURE_USAGE, {
                            feature_name: "".concat(c.Ae.SHARED_CANVAS, "_").concat(e.type),
                            feature_tier: c.tz.FREE,
                            media_session_id: b.getMediaSessionId(),
                            parent_media_session_id: b.parentMediaSessionId,
                            guild_id: b.guildId,
                            duration: l,
                        })),
                        (p.current = null);
                }
            },
            [d, b],
        ),
        handleMouseDown: g,
        handleMouseMove: u,
        handleMouseEnter: f,
    };
}
