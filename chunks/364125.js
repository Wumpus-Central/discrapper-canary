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
        x = l.useCallback(
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
        Z = l.useCallback(
            (e) => {
                f && null != v && (e.stopPropagation(), (p.current = !0), x('handleMouseDown', v, e));
            },
            [x, v, f]
        ),
        S = l.useCallback(
            (e) => {
                f && null != v && (e.stopPropagation(), p.current && x('handleMouseMove', v, e));
            },
            [x, v, f]
        ),
        C = l.useCallback(
            (e) => {
                f && null != v && (e.stopPropagation(), (p.current = !1), x('handleMouseUp', v, e));
            },
            [x, v, f]
        ),
        b = l.useCallback(
            (e) => {
                p.current && null != v && x('handleMouseEnter', v, e);
            },
            [x, v]
        );
    return (
        l.useEffect(() => {
            let e = (e) => {
                null != v && ((p.current = !1), x('handleMouseUp', v, e));
            };
            return window.addEventListener('mouseup', e), () => window.removeEventListener('mouseup', e);
        }, [x, v]),
        {
            handleClick: l.useCallback(
                (e) => {
                    f && null != v && e.stopPropagation();
                },
                [v, f]
            ),
            handleMouseDown: Z,
            handleMouseEnter: b,
            handleMouseMove: S,
            handleMouseUp: C
        }
    );
}
