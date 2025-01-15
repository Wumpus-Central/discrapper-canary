n.d(t, {
    Z: function () {
        return u;
    }
});
var i = n(192379),
    l = n(442837),
    a = n(569545),
    r = n(959457),
    s = n(626135),
    o = n(981631),
    c = n(474936);
function u(e, t) {
    let { handleMouseDown: n, handleMouseMove: u, handleMouseUp: d, handleMouseEnter: m } = e,
        f = i.useRef(null),
        p = (0, l.e7)([r.Z], () => r.Z.getRTCConnection((0, a.V9)(t))),
        h = i.useCallback(
            (e, t, i) => {
                (f.current = Date.now()), n(e, t, i);
            },
            [n]
        );
    return {
        handleMouseUp: i.useCallback(
            (e, t, n) => {
                if ((d(e, t, n), null != f.current)) {
                    if (null != p) {
                        var i, l, a;
                        (i = e),
                            (l = p),
                            (a = Date.now() - f.current),
                            s.default.track(o.rMx.PREMIUM_FEATURE_USAGE, {
                                feature_name: ''.concat(c.QP.SHARED_CANVAS, '_').concat(i.type),
                                feature_tier: c.h1.FREE,
                                media_session_id: l.getMediaSessionId(),
                                parent_media_session_id: l.parentMediaSessionId,
                                guild_id: l.guildId,
                                duration: a
                            });
                    }
                    f.current = null;
                }
            },
            [d, p]
        ),
        handleMouseDown: h,
        handleMouseMove: u,
        handleMouseEnter: m
    };
}
