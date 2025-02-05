n.d(t, { Z: () => c });
var l = n(192379),
    i = n(442837),
    r = n(569545),
    a = n(959457),
    s = n(626135),
    o = n(981631),
    u = n(474936);
function c(e, t) {
    let { handleMouseDown: n, handleMouseMove: c, handleMouseUp: d, handleMouseEnter: m } = e,
        f = l.useRef(null),
        h = (0, i.e7)([a.Z], () => a.Z.getRTCConnection((0, r.V9)(t))),
        p = l.useCallback(
            (e, t, l) => {
                (f.current = Date.now()), n(e, t, l);
            },
            [n]
        );
    return {
        handleMouseUp: l.useCallback(
            (e, t, n) => {
                if ((d(e, t, n), null != f.current)) {
                    if (null != h) {
                        var l;
                        (l = Date.now() - f.current),
                            s.default.track(o.rMx.PREMIUM_FEATURE_USAGE, {
                                feature_name: ''.concat(u.QP.SHARED_CANVAS, '_').concat(e.type),
                                feature_tier: u.h1.FREE,
                                media_session_id: h.getMediaSessionId(),
                                parent_media_session_id: h.parentMediaSessionId,
                                guild_id: h.guildId,
                                duration: l
                            });
                    }
                    f.current = null;
                }
            },
            [d, h]
        ),
        handleMouseDown: p,
        handleMouseMove: c,
        handleMouseEnter: m
    };
}
