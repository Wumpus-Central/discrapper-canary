n.d(t, { Z: () => c });
var r = n(73800),
    l = n(442837),
    i = n(569545),
    a = n(959457),
    o = n(626135),
    u = n(981631),
    s = n(474936);
function c(e, t) {
    let { handleMouseDown: n, handleMouseMove: c, handleMouseUp: d, handleMouseEnter: f } = e,
        p = r.useRef(null),
        m = (0, l.e7)([a.Z], () => a.Z.getRTCConnection((0, i.V9)(t))),
        E = r.useCallback(
            (e, t, r) => {
                (p.current = Date.now()), n(e, t, r);
            },
            [n]
        );
    return {
        handleMouseUp: r.useCallback(
            (e, t, n) => {
                if ((d(e, t, n), null != p.current)) {
                    var r;
                    null != m &&
                        ((r = Date.now() - p.current),
                        o.default.track(u.rMx.PREMIUM_FEATURE_USAGE, {
                            feature_name: ''.concat(s.QP.SHARED_CANVAS, '_').concat(e.type),
                            feature_tier: s.h1.FREE,
                            media_session_id: m.getMediaSessionId(),
                            parent_media_session_id: m.parentMediaSessionId,
                            guild_id: m.guildId,
                            duration: r
                        })),
                        (p.current = null);
                }
            },
            [d, m]
        ),
        handleMouseDown: E,
        handleMouseMove: c,
        handleMouseEnter: f
    };
}
