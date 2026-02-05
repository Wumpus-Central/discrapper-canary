n.d(t, { A: () => d });
var i = n(64700),
    l = n(311907),
    a = n(652896),
    s = n(162605),
    r = n(954571),
    o = n(652215),
    c = n(788868);
function d(e, t) {
    let { handleMouseDown: n, handleMouseMove: d, handleMouseUp: u, handleMouseEnter: h } = e,
        m = i.useRef(null),
        A = (0, l.bG)([s.A], () => s.A.getRTCConnection((0, a._z)(t))),
        p = i.useCallback(
            (e, t, i) => {
                (m.current = Date.now()), n(e, t, i);
            },
            [n],
        );
    return {
        handleMouseUp: i.useCallback(
            (e, t, n) => {
                if ((u(e, t, n), null != m.current)) {
                    var i;
                    null != A &&
                        ((i = Date.now() - m.current),
                        r.default.track(o.HAw.PREMIUM_FEATURE_USAGE, {
                            feature_name: `${c.Ae.SHARED_CANVAS}_${e.type}`,
                            feature_tier: c.tz.FREE,
                            media_session_id: A.getMediaSessionId(),
                            parent_media_session_id: A.parentMediaSessionId,
                            guild_id: A.guildId,
                            duration: i,
                        })),
                        (m.current = null);
                }
            },
            [u, A],
        ),
        handleMouseDown: p,
        handleMouseMove: d,
        handleMouseEnter: h,
    };
}
