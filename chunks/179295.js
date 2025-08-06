n.d(t, { Z: () => d });
var r = n(73800),
    i = n(442837),
    o = n(569545),
    a = n(959457),
    s = n(626135),
    l = n(981631),
    c = n(474936);
function u(e, t, n) {
    s.default.track(l.rMx.PREMIUM_FEATURE_USAGE, {
        feature_name: "".concat(c.QP.SHARED_CANVAS, "_").concat(e.type),
        feature_tier: c.h1.FREE,
        media_session_id: t.getMediaSessionId(),
        parent_media_session_id: t.parentMediaSessionId,
        guild_id: t.guildId,
        duration: n,
    });
}
function d(e, t) {
    let { handleMouseDown: n, handleMouseMove: s, handleMouseUp: l, handleMouseEnter: c } = e,
        d = r.useRef(null),
        f = (0, i.e7)([a.Z], () => a.Z.getRTCConnection((0, o.V9)(t))),
        _ = r.useCallback(
            (e, t, r) => {
                (d.current = Date.now()), n(e, t, r);
            },
            [n],
        );
    return {
        handleMouseUp: r.useCallback(
            (e, t, n) => {
                l(e, t, n), null != d.current && (null != f && u(e, f, Date.now() - d.current), (d.current = null));
            },
            [l, f],
        ),
        handleMouseDown: _,
        handleMouseMove: s,
        handleMouseEnter: c,
    };
}
