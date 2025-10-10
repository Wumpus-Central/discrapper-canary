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
        b = (0, i.e7)([l.Z], () => l.Z.getDrawMode()),
        E = (0, c.Z)((0, s.Z)(t.id, n, d), f),
        g = (0, c.Z)((0, u.Z)(t.id, n, d), f),
        v = r.useCallback(
            (e, t, n) => {
                if (null == _) return;
                let { x: r, y: i } = (0, o.hn)(_, n);
                switch (t.type) {
                    case a.W.LINE:
                        return E[e](t, r, i);
                    case a.W.EMOJI_HOSE:
                        return g[e](t, r, i);
                }
            },
            [_, E, g],
        ),
        h = r.useCallback(
            (e) => {
                p && null != b && (e.stopPropagation(), (m.current = !0), v("handleMouseDown", b, e));
            },
            [v, b, p],
        ),
        S = r.useCallback(
            (e) => {
                p && null != b && (e.stopPropagation(), m.current && v("handleMouseMove", b, e));
            },
            [v, b, p],
        ),
        y = r.useCallback(
            (e) => {
                p && null != b && (e.stopPropagation(), (m.current = !1), v("handleMouseUp", b, e));
            },
            [v, b, p],
        ),
        O = r.useCallback(
            (e) => {
                m.current && null != b && v("handleMouseEnter", b, e);
            },
            [v, b],
        );
    return (
        r.useEffect(() => {
            let e = (e) => {
                null != b && ((m.current = !1), v("handleMouseUp", b, e));
            };
            return window.addEventListener("mouseup", e), () => window.removeEventListener("mouseup", e);
        }, [v, b]),
        {
            handleClick: r.useCallback(
                (e) => {
                    p && null != b && e.stopPropagation();
                },
                [b, p],
            ),
            handleMouseDown: h,
            handleMouseEnter: O,
            handleMouseMove: S,
            handleMouseUp: y,
        }
    );
}
