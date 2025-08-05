n.d(t, { Z: () => d });
var r = n(73800),
    i = n(399606),
    a = n(673125),
    o = n(984063),
    s = n(88315),
    l = n(179295),
    c = n(370663),
    u = n(743597);
function d(e) {
    let { user: t, channelId: n, streamerId: d, stream: f, focused: _, canvas: p } = e,
        h = r.useRef(!1),
        m = (0, i.e7)([a.Z], () => a.Z.getDrawMode()),
        g = (0, l.Z)((0, c.Z)(t.id, n, d), f),
        E = (0, l.Z)((0, u.Z)(t.id, n, d), f),
        b = r.useCallback(
            (e, t, n) => {
                if (null == p) return;
                let { x: r, y: i } = (0, s.hn)(p, n);
                switch (t.type) {
                    case o.W.LINE:
                        return g[e](t, r, i);
                    case o.W.EMOJI_HOSE:
                        return E[e](t, r, i);
                }
            },
            [p, g, E]
        ),
        y = r.useCallback(
            (e) => {
                _ && null != m && (e.stopPropagation(), (h.current = !0), b('handleMouseDown', m, e));
            },
            [b, m, _]
        ),
        O = r.useCallback(
            (e) => {
                _ && null != m && (e.stopPropagation(), h.current && b('handleMouseMove', m, e));
            },
            [b, m, _]
        ),
        v = r.useCallback(
            (e) => {
                _ && null != m && (e.stopPropagation(), (h.current = !1), b('handleMouseUp', m, e));
            },
            [b, m, _]
        ),
        I = r.useCallback(
            (e) => {
                h.current && null != m && b('handleMouseEnter', m, e);
            },
            [b, m]
        );
    return (
        r.useEffect(() => {
            let e = (e) => {
                null != m && ((h.current = !1), b('handleMouseUp', m, e));
            };
            return (window.addEventListener('mouseup', e), () => window.removeEventListener('mouseup', e));
        }, [b, m]),
        {
            handleClick: r.useCallback(
                (e) => {
                    _ && null != m && e.stopPropagation();
                },
                [m, _]
            ),
            handleMouseDown: y,
            handleMouseEnter: I,
            handleMouseMove: O,
            handleMouseUp: v
        }
    );
}
