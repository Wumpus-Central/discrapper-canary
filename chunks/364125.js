n.d(t, { Z: () => d });
var r = n(473749),
    i = n(399606),
    l = n(673125),
    a = n(984063),
    o = n(88315),
    c = n(179295),
    s = n(370663),
    u = n(743597);
function d(e) {
    let { user: t, channelId: n, streamerId: d, stream: f, focused: p, canvas: m } = e,
        _ = r.useRef(!1),
        g = (0, i.e7)([l.Z], () => l.Z.getDrawMode()),
        b = (0, c.Z)((0, s.Z)(t.id, n, d), f),
        v = (0, c.Z)((0, u.Z)(t.id, n, d), f),
        E = r.useCallback(
            (e, t, n) => {
                if (null == m) return;
                let { x: r, y: i } = (0, o.hn)(m, n);
                switch (t.type) {
                    case a.W.LINE:
                        return b[e](t, r, i);
                    case a.W.EMOJI_HOSE:
                        return v[e](t, r, i);
                }
            },
            [m, b, v],
        ),
        h = r.useCallback(
            (e) => {
                p && null != g && (e.stopPropagation(), (_.current = !0), E("handleMouseDown", g, e));
            },
            [E, g, p],
        ),
        y = r.useCallback(
            (e) => {
                p && null != g && (e.stopPropagation(), _.current && E("handleMouseMove", g, e));
            },
            [E, g, p],
        ),
        S = r.useCallback(
            (e) => {
                p && null != g && (e.stopPropagation(), (_.current = !1), E("handleMouseUp", g, e));
            },
            [E, g, p],
        ),
        O = r.useCallback(
            (e) => {
                _.current && null != g && E("handleMouseEnter", g, e);
            },
            [E, g],
        );
    return (
        r.useEffect(() => {
            let e = (e) => {
                null != g && ((_.current = !1), E("handleMouseUp", g, e));
            };
            return window.addEventListener("mouseup", e), () => window.removeEventListener("mouseup", e);
        }, [E, g]),
        {
            handleClick: r.useCallback(
                (e) => {
                    p && null != g && e.stopPropagation();
                },
                [g, p],
            ),
            handleMouseDown: h,
            handleMouseEnter: O,
            handleMouseMove: y,
            handleMouseUp: S,
        }
    );
}
