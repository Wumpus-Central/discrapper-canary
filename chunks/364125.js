n.d(t, { Z: () => d });
var r = n(192379),
    l = n(399606),
    i = n(673125),
    a = n(984063),
    o = n(88315),
    s = n(179295),
    u = n(370663),
    c = n(743597);
function d(e) {
    let { user: t, channelId: n, streamerId: d, stream: f, focused: m, canvas: p } = e,
        g = r.useRef(!1),
        E = (0, l.e7)([i.Z], () => i.Z.getDrawMode()),
        h = (0, s.Z)((0, u.Z)(t.id, n, d), f),
        v = (0, s.Z)((0, c.Z)(t.id, n, d), f),
        b = r.useCallback(
            (e, t, n) => {
                if (null == p) return;
                let { x: r, y: l } = (0, o.hn)(p, n);
                switch (t.type) {
                    case a.W.LINE:
                        return h[e](t, r, l);
                    case a.W.EMOJI_HOSE:
                        return v[e](t, r, l);
                }
            },
            [p, h, v]
        ),
        S = r.useCallback(
            (e) => {
                m && null != E && (e.stopPropagation(), (g.current = !0), b('handleMouseDown', E, e));
            },
            [b, E, m]
        ),
        y = r.useCallback(
            (e) => {
                m && null != E && (e.stopPropagation(), g.current && b('handleMouseMove', E, e));
            },
            [b, E, m]
        ),
        O = r.useCallback(
            (e) => {
                m && null != E && (e.stopPropagation(), (g.current = !1), b('handleMouseUp', E, e));
            },
            [b, E, m]
        ),
        Z = r.useCallback(
            (e) => {
                g.current && null != E && b('handleMouseEnter', E, e);
            },
            [b, E]
        );
    return (
        r.useEffect(() => {
            let e = (e) => {
                null != E && ((g.current = !1), b('handleMouseUp', E, e));
            };
            return window.addEventListener('mouseup', e), () => window.removeEventListener('mouseup', e);
        }, [b, E]),
        {
            handleClick: r.useCallback(
                (e) => {
                    m && null != E && e.stopPropagation();
                },
                [E, m]
            ),
            handleMouseDown: S,
            handleMouseEnter: Z,
            handleMouseMove: y,
            handleMouseUp: O
        }
    );
}
