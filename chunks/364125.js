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
        E = r.useRef(!1),
        g = (0, l.e7)([i.Z], () => i.Z.getDrawMode()),
        v = (0, u.Z)((0, s.Z)(t.id, n, d), f),
        h = (0, u.Z)((0, c.Z)(t.id, n, d), f),
        S = r.useCallback(
            (e, t, n) => {
                if (null == m) return;
                let { x: r, y: l } = (0, o.hn)(m, n);
                switch (t.type) {
                    case a.W.LINE:
                        return v[e](t, r, l);
                    case a.W.EMOJI_HOSE:
                        return h[e](t, r, l);
                }
            },
            [m, v, h]
        ),
        b = r.useCallback(
            (e) => {
                p && null != g && (e.stopPropagation(), (E.current = !0), S('handleMouseDown', g, e));
            },
            [S, g, p]
        ),
        O = r.useCallback(
            (e) => {
                p && null != g && (e.stopPropagation(), E.current && S('handleMouseMove', g, e));
            },
            [S, g, p]
        ),
        y = r.useCallback(
            (e) => {
                p && null != g && (e.stopPropagation(), (E.current = !1), S('handleMouseUp', g, e));
            },
            [S, g, p]
        ),
        Z = r.useCallback(
            (e) => {
                E.current && null != g && S('handleMouseEnter', g, e);
            },
            [S, g]
        );
    return (
        r.useEffect(() => {
            let e = (e) => {
                null != g && ((E.current = !1), S('handleMouseUp', g, e));
            };
            return (window.addEventListener('mouseup', e), () => window.removeEventListener('mouseup', e));
        }, [S, g]),
        {
            handleClick: r.useCallback(
                (e) => {
                    p && null != g && e.stopPropagation();
                },
                [g, p]
            ),
            handleMouseDown: b,
            handleMouseEnter: Z,
            handleMouseMove: O,
            handleMouseUp: y
        }
    );
}
