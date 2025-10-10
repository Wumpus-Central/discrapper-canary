n.d(t, { Z: () => u });
var r = n(647438),
    i = n(442837),
    l = n(569545),
    a = n(959457),
    o = n(626135),
    c = n(981631),
    s = n(474936);
function u(e, t) {
    let { handleMouseDown: n, handleMouseMove: u, handleMouseUp: d, handleMouseEnter: f } = e,
        p = r.useRef(null),
        _ = (0, i.e7)([a.Z], () => a.Z.getRTCConnection((0, l.V9)(t))),
        m = r.useCallback(
            (e, t, r) => {
                (p.current = Date.now()), n(e, t, r);
            },
            [n],
        );
    return {
        handleMouseUp: r.useCallback(
            (e, t, n) => {
                if ((d(e, t, n), null != p.current)) {
                    var r;
                    null != _ &&
                        ((r = Date.now() - p.current),
                        o.default.track(c.rMx.PREMIUM_FEATURE_USAGE, {
                            feature_name: "".concat(s.QP.SHARED_CANVAS, "_").concat(e.type),
                            feature_tier: s.h1.FREE,
                            media_session_id: _.getMediaSessionId(),
                            parent_media_session_id: _.parentMediaSessionId,
                            guild_id: _.guildId,
                            duration: r,
                        })),
                        (p.current = null);
                }
            },
            [d, _],
        ),
        handleMouseDown: m,
        handleMouseMove: u,
        handleMouseEnter: f,
    };
}
