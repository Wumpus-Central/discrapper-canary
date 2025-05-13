n.d(t, { Z: () => d });
var r = n(73800),
    l = n(399606),
    i = n(673125),
    a = n(984063),
    o = n(88315),
    u = n(179295),
    s = n(370663),
    c = n(743597);
function d(e) {
    let { user: t, channelId: n, streamerId: d, stream: f, focused: p, canvas: m } = e,
        g = r.useRef(!1),
        E = (0, l.e7)([i.Z], () => i.Z.getDrawMode()),
        h = (0, u.Z)((0, s.Z)(t.id, n, d), f),
        v = (0, u.Z)((0, c.Z)(t.id, n, d), f),
        S = r.useCallback(
            (e, t, n) => {
                if (null == m) return;
                let { x: r, y: l } = (0, o.hn)(m, n);
                switch (t.type) {
                    case a.W.LINE:
                        return h[e](t, r, l);
                    case a.W.EMOJI_HOSE:
                        return v[e](t, r, l);
                }
            },
            [m, h, v]
        ),
        b = r.useCallback(
            (e) => {
                p && null != E && (e.stopPropagation(), (g.current = !0), S('handleMouseDown', E, e));
            },
            [S, E, p]
        ),
        O = r.useCallback(
            (e) => {
                p && null != E && (e.stopPropagation(), g.current && S('handleMouseMove', E, e));
            },
            [S, E, p]
        ),
        y = r.useCallback(
            (e) => {
                p && null != E && (e.stopPropagation(), (g.current = !1), S('handleMouseUp', E, e));
            },
            [S, E, p]
        ),
        Z = r.useCallback(
            (e) => {
                g.current && null != E && S('handleMouseEnter', E, e);
            },
            [S, E]
        );
    return (
        r.useEffect(() => {
            let e = (e) => {
                null != E && ((g.current = !1), S('handleMouseUp', E, e));
            };
            return window.addEventListener('mouseup', e), () => window.removeEventListener('mouseup', e);
        }, [S, E]),
        {
            handleClick: r.useCallback(
                (e) => {
                    p && null != E && e.stopPropagation();
                },
                [E, p]
            ),
            handleMouseDown: b,
            handleMouseEnter: Z,
            handleMouseMove: O,
            handleMouseUp: y
        }
    );
}
