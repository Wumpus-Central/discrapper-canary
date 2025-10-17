n.d(t, { Z: () => d });
var r = n(647438),
    i = n(399606),
    l = n(673125),
    a = n(984063),
    o = n(88315),
    c = n(179295),
    s = n(370663),
    u = n(743597);
function d(e) {
    let { user: t, channelId: n, streamerId: d, stream: f, focused: p, canvas: _ } = e,
        m = r.useRef(!1),
        g = (0, i.e7)([l.Z], () => l.Z.getDrawMode()),
        E = (0, c.Z)((0, s.Z)(t.id, n, d), f),
        b = (0, c.Z)((0, u.Z)(t.id, n, d), f),
        v = r.useCallback(
            (e, t, n) => {
                if (null == _) return;
                let { x: r, y: i } = (0, o.hn)(_, n);
                switch (t.type) {
                    case a.W.LINE:
                        return E[e](t, r, i);
                    case a.W.EMOJI_HOSE:
                        return b[e](t, r, i);
                }
            },
            [_, E, b],
        ),
        h = r.useCallback(
            (e) => {
                p && null != g && (e.stopPropagation(), (m.current = !0), v("handleMouseDown", g, e));
            },
            [v, g, p],
        ),
        S = r.useCallback(
            (e) => {
                p && null != g && (e.stopPropagation(), m.current && v("handleMouseMove", g, e));
            },
            [v, g, p],
        ),
        y = r.useCallback(
            (e) => {
                p && null != g && (e.stopPropagation(), (m.current = !1), v("handleMouseUp", g, e));
            },
            [v, g, p],
        ),
        O = r.useCallback(
            (e) => {
                m.current && null != g && v("handleMouseEnter", g, e);
            },
            [v, g],
        );
    return (
        r.useEffect(() => {
            let e = (e) => {
                null != g && ((m.current = !1), v("handleMouseUp", g, e));
            };
            return window.addEventListener("mouseup", e), () => window.removeEventListener("mouseup", e);
        }, [v, g]),
        {
            handleClick: r.useCallback(
                (e) => {
                    p && null != g && e.stopPropagation();
                },
                [g, p],
            ),
            handleMouseDown: h,
            handleMouseEnter: O,
            handleMouseMove: S,
            handleMouseUp: y,
        }
    );
}
