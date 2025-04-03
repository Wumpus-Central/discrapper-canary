n.d(t, { Z: () => c });
var r = n(192379),
    l = n(442837),
    i = n(569545),
    a = n(959457),
    o = n(626135),
    s = n(981631),
    u = n(474936);
function c(e, t) {
    let { handleMouseDown: n, handleMouseMove: c, handleMouseUp: d, handleMouseEnter: f } = e,
        m = r.useRef(null),
        p = (0, l.e7)([a.Z], () => a.Z.getRTCConnection((0, i.V9)(t))),
        g = r.useCallback(
            (e, t, r) => {
                (m.current = Date.now()), n(e, t, r);
            },
            [n]
        );
    return {
        handleMouseUp: r.useCallback(
            (e, t, n) => {
                if ((d(e, t, n), null != m.current)) {
                    var r;
                    null != p &&
                        ((r = Date.now() - m.current),
                        o.default.track(s.rMx.PREMIUM_FEATURE_USAGE, {
                            feature_name: ''.concat(u.QP.SHARED_CANVAS, '_').concat(e.type),
                            feature_tier: u.h1.FREE,
                            media_session_id: p.getMediaSessionId(),
                            parent_media_session_id: p.parentMediaSessionId,
                            guild_id: p.guildId,
                            duration: r
                        })),
                        (m.current = null);
                }
            },
            [d, p]
        ),
        handleMouseDown: g,
        handleMouseMove: c,
        handleMouseEnter: f
    };
}
