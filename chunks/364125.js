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
        E = r.useRef(!1),
        g = (0, l.e7)([i.Z], () => i.Z.getDrawMode()),
        h = (0, s.Z)((0, u.Z)(t.id, n, d), f),
        v = (0, s.Z)((0, c.Z)(t.id, n, d), f),
        S = r.useCallback(
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
        b = r.useCallback(
            (e) => {
                m && null != g && (e.stopPropagation(), (E.current = !0), S('handleMouseDown', g, e));
            },
            [S, g, m]
        ),
        y = r.useCallback(
            (e) => {
                m && null != g && (e.stopPropagation(), E.current && S('handleMouseMove', g, e));
            },
            [S, g, m]
        ),
        O = r.useCallback(
            (e) => {
                m && null != g && (e.stopPropagation(), (E.current = !1), S('handleMouseUp', g, e));
            },
            [S, g, m]
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
            return window.addEventListener('mouseup', e), () => window.removeEventListener('mouseup', e);
        }, [S, g]),
        {
            handleClick: r.useCallback(
                (e) => {
                    m && null != g && e.stopPropagation();
                },
                [g, m]
            ),
            handleMouseDown: b,
            handleMouseEnter: Z,
            handleMouseMove: y,
            handleMouseUp: O
        }
    );
}
