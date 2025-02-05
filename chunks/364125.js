n.d(t, { Z: () => d });
var l = n(192379),
    i = n(399606),
    r = n(673125),
    a = n(984063),
    s = n(88315),
    o = n(179295),
    u = n(370663),
    c = n(743597);
function d(e) {
    let { user: t, channelId: n, streamerId: d, stream: m, focused: f, canvas: h } = e,
        p = l.useRef(!1),
        v = (0, i.e7)([r.Z], () => r.Z.getDrawMode()),
        g = (0, o.Z)((0, u.Z)(t.id, n, d), m),
        E = (0, o.Z)((0, c.Z)(t.id, n, d), m),
        Z = l.useCallback(
            (e, t, n) => {
                if (null == h) return;
                let { x: l, y: i } = (0, s.hn)(h, n);
                switch (t.type) {
                    case a.W.LINE:
                        return g[e](t, l, i);
                    case a.W.EMOJI_HOSE:
                        return E[e](t, l, i);
                }
            },
            [h, g, E]
        ),
        x = l.useCallback(
            (e) => {
                f && null != v && (e.stopPropagation(), (p.current = !0), Z('handleMouseDown', v, e));
            },
            [Z, v, f]
        ),
        S = l.useCallback(
            (e) => {
                f && null != v && (e.stopPropagation(), p.current && Z('handleMouseMove', v, e));
            },
            [Z, v, f]
        ),
        C = l.useCallback(
            (e) => {
                f && null != v && (e.stopPropagation(), (p.current = !1), Z('handleMouseUp', v, e));
            },
            [Z, v, f]
        ),
        b = l.useCallback(
            (e) => {
                p.current && null != v && Z('handleMouseEnter', v, e);
            },
            [Z, v]
        );
    return (
        l.useEffect(() => {
            let e = (e) => {
                null != v && ((p.current = !1), Z('handleMouseUp', v, e));
            };
            return window.addEventListener('mouseup', e), () => window.removeEventListener('mouseup', e);
        }, [Z, v]),
        {
            handleClick: l.useCallback(
                (e) => {
                    f && null != v && e.stopPropagation();
                },
                [v, f]
            ),
            handleMouseDown: x,
            handleMouseEnter: b,
            handleMouseMove: S,
            handleMouseUp: C
        }
    );
}
