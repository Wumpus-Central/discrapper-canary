n.d(t, { Z: () => d });
var r = n(73800),
    l = n(399606),
    i = n(673125),
    a = n(984063),
    u = n(88315),
    o = n(179295),
    s = n(370663),
    c = n(743597);
function d(e) {
    let { user: t, channelId: n, streamerId: d, stream: f, focused: m, canvas: p } = e,
        E = r.useRef(!1),
        g = (0, l.e7)([i.Z], () => i.Z.getDrawMode()),
        h = (0, o.Z)((0, s.Z)(t.id, n, d), f),
        S = (0, o.Z)((0, c.Z)(t.id, n, d), f),
        O = r.useCallback(
            (e, t, n) => {
                if (null == p) return;
                let { x: r, y: l } = (0, u.hn)(p, n);
                switch (t.type) {
                    case a.W.LINE:
                        return h[e](t, r, l);
                    case a.W.EMOJI_HOSE:
                        return S[e](t, r, l);
                }
            },
            [p, h, S]
        ),
        v = r.useCallback(
            (e) => {
                m && null != g && (e.stopPropagation(), (E.current = !0), O('handleMouseDown', g, e));
            },
            [O, g, m]
        ),
        b = r.useCallback(
            (e) => {
                m && null != g && (e.stopPropagation(), E.current && O('handleMouseMove', g, e));
            },
            [O, g, m]
        ),
        I = r.useCallback(
            (e) => {
                m && null != g && (e.stopPropagation(), (E.current = !1), O('handleMouseUp', g, e));
            },
            [O, g, m]
        ),
        _ = r.useCallback(
            (e) => {
                E.current && null != g && O('handleMouseEnter', g, e);
            },
            [O, g]
        );
    return (
        r.useEffect(() => {
            let e = (e) => {
                null != g && ((E.current = !1), O('handleMouseUp', g, e));
            };
            return window.addEventListener('mouseup', e), () => window.removeEventListener('mouseup', e);
        }, [O, g]),
        {
            handleClick: r.useCallback(
                (e) => {
                    m && null != g && e.stopPropagation();
                },
                [g, m]
            ),
            handleMouseDown: v,
            handleMouseEnter: _,
            handleMouseMove: b,
            handleMouseUp: I
        }
    );
}
