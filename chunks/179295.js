n.d(t, { Z: () => u });
var r = n(647438),
    i = n(442837),
    l = n(569545),
    a = n(959457),
    o = n(626135),
    s = n(981631),
    c = n(474936);
function u(e, t) {
    let { handleMouseDown: n, handleMouseMove: u, handleMouseUp: d, handleMouseEnter: p } = e,
        f = r.useRef(null),
        h = (0, i.e7)([a.Z], () => a.Z.getRTCConnection((0, l.V9)(t))),
        m = r.useCallback(
            (e, t, r) => {
                (f.current = Date.now()), n(e, t, r);
            },
            [n],
        );
    return {
        handleMouseUp: r.useCallback(
            (e, t, n) => {
                if ((d(e, t, n), null != f.current)) {
                    var r;
                    null != h &&
                        ((r = Date.now() - f.current),
                        o.default.track(s.rMx.PREMIUM_FEATURE_USAGE, {
                            feature_name: "".concat(c.QP.SHARED_CANVAS, "_").concat(e.type),
                            feature_tier: c.h1.FREE,
                            media_session_id: h.getMediaSessionId(),
                            parent_media_session_id: h.parentMediaSessionId,
                            guild_id: h.guildId,
                            duration: r,
                        })),
                        (f.current = null);
                }
            },
            [d, h],
        ),
        handleMouseDown: m,
        handleMouseMove: u,
        handleMouseEnter: p,
    };
}
