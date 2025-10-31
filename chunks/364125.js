n.d(t, { Z: () => d });
var r = n(647438),
    i = n(399606),
    l = n(673125),
    a = n(984063),
    o = n(88315),
    s = n(179295),
    c = n(370663),
    u = n(743597);
function d(e) {
    let { user: t, channelId: n, streamerId: d, stream: p, focused: f, canvas: h } = e,
        m = r.useRef(!1),
        g = (0, i.e7)([l.Z], () => l.Z.getDrawMode()),
        b = (0, s.Z)((0, c.Z)(t.id, n, d), p),
        _ = (0, s.Z)((0, u.Z)(t.id, n, d), p),
        y = r.useCallback(
            (e, t, n) => {
                if (null == h) return;
                let { x: r, y: i } = (0, o.hn)(h, n);
                switch (t.type) {
                    case a.W.LINE:
                        return b[e](t, r, i);
                    case a.W.EMOJI_HOSE:
                        return _[e](t, r, i);
                }
            },
            [h, b, _],
        ),
        C = r.useCallback(
            (e) => {
                f && null != g && (e.stopPropagation(), (m.current = !0), y("handleMouseDown", g, e));
            },
            [y, g, f],
        ),
        v = r.useCallback(
            (e) => {
                f && null != g && (e.stopPropagation(), m.current && y("handleMouseMove", g, e));
            },
            [y, g, f],
        ),
        O = r.useCallback(
            (e) => {
                f && null != g && (e.stopPropagation(), (m.current = !1), y("handleMouseUp", g, e));
            },
            [y, g, f],
        ),
        x = r.useCallback(
            (e) => {
                m.current && null != g && y("handleMouseEnter", g, e);
            },
            [y, g],
        );
    return (
        r.useEffect(() => {
            let e = (e) => {
                null != g && ((m.current = !1), y("handleMouseUp", g, e));
            };
            return window.addEventListener("mouseup", e), () => window.removeEventListener("mouseup", e);
        }, [y, g]),
        {
            handleClick: r.useCallback(
                (e) => {
                    f && null != g && e.stopPropagation();
                },
                [g, f],
            ),
            handleMouseDown: C,
            handleMouseEnter: x,
            handleMouseMove: v,
            handleMouseUp: O,
        }
    );
}
