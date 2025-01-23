n.d(t, {
    Z: function () {
        return d;
    }
});
var i = n(192379),
    l = n(399606),
    a = n(673125),
    r = n(984063),
    s = n(88315),
    o = n(179295),
    c = n(370663),
    u = n(743597);
function d(e) {
    let { user: t, channelId: n, streamerId: d, stream: m, focused: f, canvas: p } = e,
        h = i.useRef(!1),
        g = (0, l.e7)([a.Z], () => a.Z.getDrawMode()),
        v = (0, o.Z)((0, c.Z)(t.id, n, d), m),
        I = (0, o.Z)((0, u.Z)(t.id, n, d), m),
        S = i.useCallback(
            (e, t, n) => {
                if (null == p) return;
                let { x: i, y: l } = (0, s.hn)(p, n);
                switch (t.type) {
                    case r.W.LINE:
                        return v[e](t, i, l);
                    case r.W.EMOJI_HOSE:
                        return I[e](t, i, l);
                }
            },
            [p, v, I]
        ),
        _ = i.useCallback(
            (e) => {
                if (!!f && null != g) e.stopPropagation(), (h.current = !0), S('handleMouseDown', g, e);
            },
            [S, g, f]
        ),
        x = i.useCallback(
            (e) => {
                if (!!f && null != g) e.stopPropagation(), h.current && S('handleMouseMove', g, e);
            },
            [S, g, f]
        ),
        E = i.useCallback(
            (e) => {
                if (!!f && null != g) e.stopPropagation(), (h.current = !1), S('handleMouseUp', g, e);
            },
            [S, g, f]
        ),
        C = i.useCallback(
            (e) => {
                if (!!h.current && null != g) S('handleMouseEnter', g, e);
            },
            [S, g]
        );
    return (
        i.useEffect(() => {
            let e = (e) => {
                if (null != g) (h.current = !1), S('handleMouseUp', g, e);
            };
            return window.addEventListener('mouseup', e), () => window.removeEventListener('mouseup', e);
        }, [S, g]),
        {
            handleClick: i.useCallback(
                (e) => {
                    f && null != g && e.stopPropagation();
                },
                [g, f]
            ),
            handleMouseDown: _,
            handleMouseEnter: C,
            handleMouseMove: x,
            handleMouseUp: E
        }
    );
}
